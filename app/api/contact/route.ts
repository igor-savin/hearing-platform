import { NextResponse } from "next/server";
import { AI_REFERRAL_SOURCE, OFFICES, REASONS, REFERRAL_SOURCES, allowed } from "../../lib/contactForm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Mirrors the Audiology Associates of Westchester contact route so both sister
// sites share one delivery mechanism (Resend) and the same env-var contract.
// California Hearing Center adds two fields — preferred office and reason — since
// the practice runs two offices. No PHI is collected.

type ContactPayload = {
  // Optional and self-reported: how the patient found the practice, and — when
  // that was an AI assistant — what they actually typed. Neither is clinical.
  aiPrompt?: string;
  referralSource?: string;
  context?: string;
  email?: string;
  message?: string;
  name?: string;
  office?: string;
  pageUrl?: string;
  phone?: string;
  reason?: string;
  website?: string;
};

class EmailConfigurationError extends Error {}

// Sending identity. hearing-care.org is the domain verified in Resend (it
// carries the resend._domainkey DKIM record), which is why mail leaves from
// there rather than from calhearing.com — that domain is not set up in Resend.
const DEFAULT_CONTACT_FORM_FROM_EMAIL = "California Hearing Center <admin@hearing-care.org>";

// Where enquiries land. The practice inbox, already published on the careers
// page, so it is a monitored address rather than a new one. Recipients need no
// setup in Resend — only the *sending* domain is verified there.
//
// CONTACT_FORM_TO_EMAIL overrides this and accepts a comma-separated list, so
// adding a second reader is an environment change, not a deploy.
const DEFAULT_CONTACT_FORM_RECIPIENTS = ["infochc@hearing-care.org"];
const DEFAULT_CONTACT_FORM_BCC_RECIPIENTS: string[] = [];

function clean(value: unknown, maxLength = 1000) {
  return String(value || "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function emailListFromEnv(value: string | undefined, fallback: string[]) {
  const parsed = (value || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return parsed.length ? parsed : fallback;
}

type FullPayload = Required<Omit<ContactPayload, "website">>;

function textBody(payload: FullPayload) {
  return [
    "New website contact form submission",
    "",
    `Context: ${payload.context}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "Not provided"}`,
    `Preferred office: ${payload.office || "Not specified"}`,
    `Reason: ${payload.reason || "Not specified"}`,
    `Page: ${payload.pageUrl || "Not provided"}`,
    `Found us via: ${payload.referralSource || "Not provided"}`,
    ...(payload.aiPrompt ? [`AI prompt used: ${payload.aiPrompt}`] : []),
    "",
    "Message:",
    payload.message || "(none)",
    "",
    "Do not reply with clinical guidance unless the practice has confirmed the patient's identity and care context."
  ].join("\n");
}

function htmlBody(payload: FullPayload) {
  const rows = [
    ["Context", payload.context],
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email || "Not provided"],
    ["Preferred office", payload.office || "Not specified"],
    ["Reason", payload.reason || "Not specified"],
    ["Page", payload.pageUrl || "Not provided"],
    ["Found us via", payload.referralSource || "Not provided"],
    ...(payload.aiPrompt ? [["AI prompt used", payload.aiPrompt]] : [])
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#222">
      <h2 style="margin:0 0 16px">New website contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="border:1px solid #ddd;background:#f5f7f8;padding:8px;text-align:left;width:140px">${escapeHtml(label)}</th>
                <td style="border:1px solid #ddd;padding:8px">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px">Message</h3>
      <div style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;max-width:680px">${escapeHtml(payload.message || "(none)")}</div>
      <p style="margin-top:18px;color:#555;font-size:13px">
        Do not reply with clinical guidance unless the practice has confirmed the patient's identity and care context.
      </p>
    </div>
  `;
}

async function sendContactEmail(payload: FullPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new EmailConfigurationError("Contact email delivery is not configured.");
  }

  const from = clean(process.env.CONTACT_FORM_FROM_EMAIL, 254) || DEFAULT_CONTACT_FORM_FROM_EMAIL;
  const recipients = emailListFromEnv(process.env.CONTACT_FORM_TO_EMAIL, DEFAULT_CONTACT_FORM_RECIPIENTS);
  const bccRecipients = emailListFromEnv(process.env.CONTACT_FORM_BCC_EMAIL, DEFAULT_CONTACT_FORM_BCC_RECIPIENTS);

  if (!recipients.length || recipients.some((email) => !isValidEmail(email))) {
    throw new EmailConfigurationError("Contact email recipients are not configured correctly.");
  }

  if (bccRecipients.some((email) => !isValidEmail(email))) {
    throw new EmailConfigurationError("Contact email BCC recipients are not configured correctly.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from,
      to: recipients,
      ...(bccRecipients.length ? { bcc: bccRecipients } : {}),
      reply_to: payload.email || undefined,
      subject: `Website contact form: ${payload.name}`,
      text: textBody(payload),
      html: htmlBody(payload)
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    method: "POST",
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Contact email send failed", response.status, details);
    throw new Error("Contact email send failed.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot — silently accept bots.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    // Accept only values the form actually offers. The selects stop a person
    // sending anything else, but this endpoint is public and a direct POST is
    // not bound by the markup.
    const referralSource = allowed(clean(body.referralSource, 120), REFERRAL_SOURCES);

    const payload: FullPayload = {
      // Kept only when the patient said they came from an AI assistant, so a
      // stray value on any other path is dropped rather than recorded.
      aiPrompt: referralSource === AI_REFERRAL_SOURCE ? clean(body.aiPrompt, 500) : "",
      context: clean(body.context, 120) || "Website contact form",
      email: clean(body.email, 254),
      message: clean(body.message, 4000),
      name: clean(body.name, 120),
      office: allowed(clean(body.office, 80), OFFICES),
      pageUrl: clean(body.pageUrl, 500),
      phone: clean(body.phone, 80),
      reason: allowed(clean(body.reason, 120), REASONS),
      referralSource
    };

    if (!payload.name || (!payload.phone && !payload.email)) {
      return NextResponse.json(
        { ok: false, message: "Please provide your name and a phone number or email." },
        { status: 400 }
      );
    }

    if (payload.email && !isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({
      ok: true,
      message: "Thank you. Your request has been sent and our team can follow up with you."
    });
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error(error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "The online form isn’t configured for email delivery yet. Please call the practice at 650-342-9449."
        },
        { status: 503 }
      );
    }

    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "The online form couldn’t send just now. Please call the practice at 650-342-9449 to schedule."
      },
      { status: 500 }
    );
  }
}
