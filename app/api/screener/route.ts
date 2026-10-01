import { NextResponse } from "next/server";
import { summarize, type Trial } from "../../lib/screener/scoring";
import { CONSENT_VERSION } from "../../lib/screener/copy";
import { CLINICAL_APPROVED, PRACTICE, SCREENER_VERSION } from "../../lib/screener/config";
import { buildReportPdf } from "../../lib/screener/pdf";
import { patientEmail, staffAlert } from "../../lib/screener/emails";
import { alertRecipients, sendEmail } from "../../lib/screener/mail";
import { saveLead, storeConfigured } from "../../lib/screener/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Receives a finished screening plus the person's contact details, then:
//   1. re-scores the raw answers here (the browser's own band is never trusted),
//   2. builds the PDF report,
//   3. saves the lead (if a database is connected),
//   4. emails the patient their report (only if they agreed),
//   5. emails the front desk an alert with a priority.
// The person always gets their result back, even if an email or the database fails.

type Body = {
  firstName?: unknown;
  email?: unknown;
  phone?: unknown;
  consentEmail?: unknown;
  consentCall?: unknown;
  run?: { both?: unknown; left?: unknown; right?: unknown; device?: unknown };
  website?: unknown; // honeypot
};

const clean = (v: unknown, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const ten = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return ten.length === 10 ? `+1${ten}` : null;
}

// Best-effort limiter. State lives in one server instance's memory, so it slows
// a script down but is not a guarantee. Real abuse protection belongs at the edge.
const hits = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 12;
}

function trials(v: unknown): Trial[] | undefined {
  return Array.isArray(v) && v.length <= 40 ? (v as Trial[]) : undefined;
}

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 120_000) {
      return NextResponse.json({ ok: false, message: "That request was too large." }, { status: 413 });
    }
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (tooMany(ip)) {
      return NextResponse.json({ ok: false, message: "Too many tries. Please call us instead." }, { status: 429 });
    }

    const body = (await request.json()) as Body;

    // Honeypot: say yes to bots and do nothing.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const firstName = clean(body.firstName, 60);
    const email = clean(body.email, 254).toLowerCase();
    const phoneRaw = clean(body.phone, 40);
    const consentEmail = body.consentEmail === true;
    const consentCall = body.consentCall === true;

    if (!firstName) return NextResponse.json({ ok: false, message: "Please enter your first name." }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    if (!consentEmail) {
      return NextResponse.json({ ok: false, message: "Please tick the box to receive your report by email." }, { status: 400 });
    }
    let phone = "";
    if (phoneRaw) {
      const normalized = normalizePhone(phoneRaw);
      if (!normalized) return NextResponse.json({ ok: false, message: "Please enter a 10-digit phone number, or leave it blank." }, { status: 400 });
      phone = normalized;
    }

    const both = trials(body.run?.both);
    if (!both) return NextResponse.json({ ok: false, message: "The test results were missing. Please take the test again." }, { status: 400 });
    const left = trials(body.run?.left);
    const right = trials(body.run?.right);
    const run = { both, ...(left && right ? { left, right } : {}) };

    const summary = summarize(run);

    const dev = (body.run?.device || {}) as Record<string, unknown>;
    const device = {
      mobile: dev.mobile === true,
      speakers: dev.speakers === true,
      sampleRate: Number.isFinite(Number(dev.sampleRate)) ? Math.round(Number(dev.sampleRate)) : 0,
    };

    const now = new Date();
    const pdf = buildReportPdf({ firstName, summary, date: now });

    // Save first so the staff alert can say whether it worked.
    let stored = false;
    try {
      stored = (
        await saveLead({
          practice: PRACTICE.key,
          firstName,
          email,
          phone,
          consentEmail,
          consentCall,
          consentVersion: CONSENT_VERSION,
          summary,
          screenerVersion: SCREENER_VERSION,
          clinicalApproved: CLINICAL_APPROVED,
          device,
          trials: run,
        })
      ).stored;
    } catch (error) {
      console.error("Screener lead save failed", error instanceof Error ? error.message : "unknown");
    }
    if (!stored && storeConfigured()) console.error("Screener lead was not stored although a database is configured.");

    // Patient email and staff alert go out together; one failing must not stop the other.
    const patient = patientEmail({ firstName, summary });
    const pdfBase64 = pdf.toString("base64");
    const replyTo = alertRecipients()[0];

    const patientResult = await Promise.allSettled([
      sendEmail({
        to: [email],
        subject: patient.subject,
        html: patient.html,
        text: patient.text,
        replyTo,
        attachments: [{ filename: "Your-hearing-check-report.pdf", contentBase64: pdfBase64 }],
      }),
    ]);
    const patientEmailSent = patientResult[0].status === "fulfilled";
    if (!patientEmailSent) console.error("Screener patient email failed");

    const alert = staffAlert({ firstName, email, phone, consentCall, consentEmail, summary, stored, patientEmailSent, receivedAt: now });
    try {
      await sendEmail({ to: alertRecipients(), subject: alert.subject, html: alert.html, text: alert.text, replyTo: email });
    } catch {
      console.error("Screener staff alert failed", { stored });
    }

    return NextResponse.json({
      ok: true,
      emailed: patientEmailSent,
      summary: {
        band: summary.band,
        validity: summary.validity,
        earCheck: summary.earCheck,
        asymmetry: summary.asymmetry ? { worseEar: summary.asymmetry.worseEar } : null,
      },
      pdfBase64,
    });
  } catch (error) {
    console.error("Screener submit failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { ok: false, message: `We could not process that just now. Please call us at ${PRACTICE.phoneDisplay}.` },
      { status: 500 }
    );
  }
}
