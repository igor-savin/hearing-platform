// The two emails the screener sends: the patient's results, and the alert to the
// front desk. Plain HTML on purpose; the branded template comes in the look-and-feel
// pass. Everything dynamic goes through esc() before it reaches HTML.
//
// The staff alert is kept to the minimum the front desk needs to act: name,
// contact details, the band, and what to do. It carries no scores or test data;
// those stay in the database.

import type { Summary } from "./scoring";
import { BAND_COPY, SCREENING_NOT_DIAGNOSIS, earNote, levelRangeText, reliabilityTips } from "./copy";
import { CLINICAL_APPROVED, PRACTICE, SCREENER_VERSION } from "./config";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const PREVIEW_LINE = "PREVIEW: the result bands have not been reviewed by an audiologist yet.";

// ---------------------------------------------------------------------------
// Patient email
// ---------------------------------------------------------------------------

export function patientEmail(input: { firstName: string; summary: Summary }) {
  const { firstName, summary } = input;
  const copy = BAND_COPY[summary.band];
  const ear = earNote(summary);
  const level = levelRangeText(summary.band);
  const tips = summary.band === "unreliable" ? reliabilityTips(summary.validity) : [];
  const bookUrl = `${PRACTICE.siteUrl}${PRACTICE.bookingPath}`;

  const subject = `${CLINICAL_APPROVED ? "" : "[PREVIEW] "}Your hearing check results from ${PRACTICE.name}`;

  const textLines = [
    `Hello ${firstName},`,
    "",
    `Thank you for taking the free online hearing check at ${PRACTICE.name}. Your report is attached as a PDF.`,
    "",
    ...(CLINICAL_APPROVED ? [] : [PREVIEW_LINE, ""]),
    `Your result: ${copy.label}`,
    copy.headline,
    "",
    copy.body,
    ...(tips.length ? ["", ...tips.map((t) => `- ${t}`)] : []),
    ...(ear ? ["", ear] : []),
    ...(level ? ["", level] : []),
    "",
    "What to do next",
    copy.next,
    `Book online: ${bookUrl}`,
    `Call: ${PRACTICE.phoneDisplay}`,
    ...PRACTICE.offices.map((o) => `${o.name}: ${o.address}`),
    "",
    SCREENING_NOT_DIAGNOSIS,
    "",
    `${PRACTICE.signature}`,
    "",
    `You are receiving this because you asked for your results at ${PRACTICE.siteUrl.replace(/^https?:\/\//, "")}. To stop emails from us, reply with the word STOP.`,
  ];

  const p = (s: string, style = "margin:0 0 14px") => `<p style="${style}">${esc(s)}</p>`;
  const html = `
<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;color:#21424b;max-width:600px">
  <h2 style="margin:0 0 4px;color:#155f6b">${esc(PRACTICE.name)}</h2>
  ${p("Your online hearing check", "margin:0 0 18px;color:#5c7178")}
  ${CLINICAL_APPROVED ? "" : p(PREVIEW_LINE, "margin:0 0 14px;padding:10px;background:#fdf3d9;color:#6e4e08;font-weight:bold")}
  ${p(`Hello ${firstName},`)}
  ${p(`Thank you for taking the free online hearing check. Your report is attached as a PDF.`)}
  <p style="margin:0 0 4px;font-size:13px;color:#5c7178">Your result</p>
  <p style="margin:0 0 6px;font-size:22px;font-weight:bold">${esc(copy.label)}</p>
  ${p(copy.headline, "margin:0 0 10px;font-weight:bold")}
  ${p(copy.body)}
  ${tips.map((t) => p(`• ${t}`, "margin:0 0 6px")).join("")}
  ${ear ? p(ear, "margin:0 0 14px;padding:10px;background:#fdf3d9;color:#6e4e08;font-weight:bold") : ""}
  ${level ? p(level) : ""}
  <h3 style="margin:18px 0 6px;color:#155f6b">What to do next</h3>
  ${p(copy.next)}
  <p style="margin:0 0 14px"><a href="${esc(bookUrl)}" style="display:inline-block;padding:12px 18px;background:#c9461c;color:#ffffff;text-decoration:none;font-weight:bold;border-radius:4px">Book your hearing evaluation</a></p>
  ${p(`Or call ${PRACTICE.phoneDisplay}.`)}
  ${PRACTICE.offices.map((o) => p(`${o.name}: ${o.address}`, "margin:0 0 4px;color:#5c7178;font-size:14px")).join("")}
  ${p(SCREENING_NOT_DIAGNOSIS, "margin:16px 0 14px;font-size:14px")}
  ${p(PRACTICE.signature)}
  <hr style="border:none;border-top:1px solid #d6e0df;margin:18px 0 10px">
  ${p(`You are receiving this because you asked for your results at ${PRACTICE.siteUrl.replace(/^https?:\/\//, "")}. To stop emails from us, reply with the word STOP.`, "margin:0;font-size:12px;color:#5c7178")}
</div>`;

  return { subject, text: textLines.join("\n"), html };
}

// ---------------------------------------------------------------------------
// Staff alert
// ---------------------------------------------------------------------------

const PRIORITY_LINE: Record<Summary["priority"], { tag: string; action: string }> = {
  urgent: {
    tag: "URGENT: ear difference",
    action: "Call today, as soon as you can. One ear scored well below the other. Ask whether hearing changed suddenly.",
  },
  high: { tag: "CALL: poor result", action: "Call within 1 business hour on a weekday." },
  normal: { tag: "Call list: fair result", action: "Add to the next-morning call list." },
  low: { tag: "New lead", action: "No call needed. This person is in the lead list." },
};

export function staffAlert(input: {
  firstName: string;
  email: string;
  phone: string;
  consentCall: boolean;
  consentEmail: boolean;
  summary: Summary;
  stored: boolean;
  patientEmailSent: boolean;
  receivedAt: Date;
}) {
  const { firstName, email, phone, consentCall, consentEmail, summary, stored, patientEmailSent, receivedAt } = input;
  const pr = PRIORITY_LINE[summary.priority];
  const copy = BAND_COPY[summary.band];

  // The call instruction only applies if the person agreed to be called.
  let action = pr.action;
  if (summary.priority !== "low") {
    if (!phone) action = `${pr.action} No phone number was given, so reach out by email.`;
    else if (!consentCall) action = `${pr.action} They gave a number but did NOT agree to a call, so reach out by email.`;
  }

  const when = receivedAt.toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" });
  const subject = `${CLINICAL_APPROVED ? "" : "[PREVIEW] "}[${pr.tag}] Hearing check: ${firstName}`;

  const rows: [string, string][] = [
    ["Action", action],
    ["Name", firstName],
    ["Email", email],
    ["Phone", phone || "Not given"],
    ["OK to call", phone ? (consentCall ? "YES" : "NO") : "n/a"],
    ["OK to email", consentEmail ? "Yes" : "No"],
    ["Result", `${copy.label}: ${copy.headline}`],
    ["Ear check", summary.asymmetry ? `${summary.asymmetry.worseEar} ear scored lower` : summary.earCheck],
    ...(summary.band === "unreliable" ? ([["Why not reliable", summary.validity.join(", ")]] as [string, string][]) : []),
    ["Received", when],
    ["Results email to patient", patientEmailSent ? "Sent" : "NOT sent"],
    ["Saved to lead database", stored ? "Yes" : "NO: this email is the only record. Keep it."],
    ["Screener version", SCREENER_VERSION],
    ...(CLINICAL_APPROVED ? [] : ([["Status", PREVIEW_LINE]] as [string, string][])),
  ];

  const text = ["New online hearing check", "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");
  const html = `
<div style="font-family:Arial,sans-serif;line-height:1.5;color:#222">
  <h2 style="margin:0 0 6px">${esc(pr.tag)}</h2>
  <p style="margin:0 0 14px;font-size:15px"><strong>${esc(action)}</strong></p>
  <table style="border-collapse:collapse;width:100%;max-width:680px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><th style="border:1px solid #ddd;background:#f5f7f8;padding:8px;text-align:left;width:190px">${esc(k)}</th><td style="border:1px solid #ddd;padding:8px">${esc(v)}</td></tr>`
      )
      .join("")}
  </table>
  <p style="margin-top:16px;color:#555;font-size:13px">Please treat this message as confidential patient information. Do not forward it outside the practice.</p>
</div>`;

  return { subject, text, html };
}
