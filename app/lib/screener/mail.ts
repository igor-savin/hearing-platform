// Sends email through Resend, the same service and the same environment
// variables the contact form already uses, so there is nothing new to set up.
//
// Server only. Do not import this from a client component.

export class EmailConfigurationError extends Error {}

// hearing-care.org is the domain verified in Resend (it carries the DKIM record),
// which is why mail leaves from there rather than from calhearing.com.
const DEFAULT_FROM = "California Hearing Center <admin@hearing-care.org>";
const DEFAULT_ALERT_RECIPIENTS = ["infochc@hearing-care.org"];

function list(value: string | undefined, fallback: string[]) {
  const parsed = (value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return parsed.length ? parsed : fallback;
}

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

/** Sender. SCREENER_FROM_EMAIL wins; otherwise the contact form's sender. */
export function senderAddress() {
  return (process.env.SCREENER_FROM_EMAIL || process.env.CONTACT_FORM_FROM_EMAIL || DEFAULT_FROM).trim();
}

/** Who gets the staff alert. SCREENER_ALERT_TO_EMAIL wins; otherwise the contact form inbox. */
export function alertRecipients() {
  const to = list(process.env.SCREENER_ALERT_TO_EMAIL || process.env.CONTACT_FORM_TO_EMAIL, DEFAULT_ALERT_RECIPIENTS);
  if (!to.length || to.some((e) => !isEmail(e))) {
    throw new EmailConfigurationError("Screener alert recipients are not configured correctly.");
  }
  return to;
}

export async function sendEmail(message: {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; contentBase64: string }[];
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new EmailConfigurationError("Email delivery is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: senderAddress(),
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text,
      ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      ...(message.attachments?.length
        ? { attachments: message.attachments.map((a) => ({ filename: a.filename, content: a.contentBase64 })) }
        : {}),
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    // Log the status only. The body can echo the message, which holds patient details.
    console.error("Screener email send failed", response.status);
    throw new Error("Email send failed.");
  }
}
