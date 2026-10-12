import { NextResponse } from "next/server";

/**
 * The contact form pipeline, shared by both practice sites.
 *
 * What is shared: reading and cleaning the request, the honeypot, list checks,
 * the email text and HTML, env-var overrides, the Resend call and its timeout,
 * and the error mapping.
 *
 * What each practice decides (passed in as config): who sends and receives the
 * mail, which extra fields exist, which fields are required, the subject line
 * and the words shown to the visitor.
 *
 * No PHI is collected.
 */

export type ContactFields = {
  aiPrompt: string;
  context: string;
  email: string;
  message: string;
  name: string;
  pageUrl: string;
  phone: string;
  referralSource: string;
  /** Values of the practice's extra fields, by key. Empty string when absent. */
  extra: Record<string, string>;
};

export type ExtraField = {
  key: string;
  /** Label in the email. */
  label: string;
  /** Longest value read from the request. */
  max: number;
  /** The only values kept. Anything else is dropped. */
  options: readonly string[];
  /** Shown in the email when the visitor left it empty. */
  emptyLabel: string;
};

export type ContactConfig = {
  defaults: { from: string; to: string[]; bcc: string[] };
  referral: { sources: readonly string[]; aiSource: string };
  extraFields?: ExtraField[];
  /**
   * Fill in notify-signup fields and check required ones.
   * Return an error message to answer with HTTP 400, or null to go on.
   */
  prepare(payload: ContactFields, isNotify: boolean): string | null;
  subject(payload: ContactFields, isNotify: boolean): string;
  messages: {
    success(isNotify: boolean): string;
    notConfigured: string;
    failed: string;
  };
  invalidEmail?: string;
};

class EmailConfigurationError extends Error {}

const SEND_TIMEOUT_MS = 15000;

export function clean(value: unknown, maxLength = 1000) {
  return String(value || "")
    .replace(/\0/g, "")
    .trim()
    .slice(0, maxLength);
}

export function allowed(value: string, list: readonly string[]) {
  return list.includes(value) ? value : "";
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

function rowsFor(payload: ContactFields, cfg: ContactConfig): [string, string][] {
  return [
    ["Context", payload.context],
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email || "Not provided"],
    ...(cfg.extraFields || []).map((f): [string, string] => [f.label, payload.extra[f.key] || f.emptyLabel]),
    ["Page", payload.pageUrl || "Not provided"],
    ["Found us via", payload.referralSource || "Not provided"],
    ...(payload.aiPrompt ? ([["AI prompt used", payload.aiPrompt]] as [string, string][]) : []),
  ];
}

const FOOTER = "Do not reply with clinical guidance unless the practice has confirmed the patient's identity and care context.";

function textBody(payload: ContactFields, cfg: ContactConfig) {
  return [
    "New website contact form submission",
    "",
    ...rowsFor(payload, cfg).map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message || "(none)",
    "",
    FOOTER,
  ].join("\n");
}

function htmlBody(payload: ContactFields, cfg: ContactConfig) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#222">
      <h2 style="margin:0 0 16px">New website contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rowsFor(payload, cfg)
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
        ${FOOTER}
      </p>
    </div>
  `;
}

async function sendContactEmail(payload: ContactFields, cfg: ContactConfig, isNotify: boolean) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new EmailConfigurationError("Contact email delivery is not configured.");
  }

  const from = clean(process.env.CONTACT_FORM_FROM_EMAIL, 254) || cfg.defaults.from;
  const recipients = emailListFromEnv(process.env.CONTACT_FORM_TO_EMAIL, cfg.defaults.to);
  const bccRecipients = emailListFromEnv(process.env.CONTACT_FORM_BCC_EMAIL, cfg.defaults.bcc);

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
      subject: cfg.subject(payload, isNotify),
      text: textBody(payload, cfg),
      html: htmlBody(payload, cfg),
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Contact email send failed", response.status, details);
    throw new Error("Contact email send failed.");
  }
}

export function createContactHandler(cfg: ContactConfig) {
  return async function POST(request: Request) {
    try {
      const body = (await request.json()) as Record<string, unknown>;

      // Honeypot: silently accept bots.
      if (clean(body.website, 200)) {
        return NextResponse.json({ ok: true });
      }

      // Accept only values the form offers. The selects stop a person sending
      // anything else, but this endpoint is public and a direct POST is not
      // bound by the markup. A free-text field on a healthcare form is an
      // invitation to paste things that should not land in an inbox.
      const referralSource = allowed(clean(body.referralSource, 120), cfg.referral.sources);

      const payload: ContactFields = {
        // Kept only when the patient said they came from an AI assistant.
        aiPrompt: referralSource === cfg.referral.aiSource ? clean(body.aiPrompt, 500) : "",
        context: clean(body.context, 120) || "Website contact form",
        email: clean(body.email, 254),
        message: clean(body.message, 4000),
        name: clean(body.name, 120),
        pageUrl: clean(body.pageUrl, 500),
        phone: clean(body.phone, 80),
        referralSource,
        extra: Object.fromEntries(
          (cfg.extraFields || []).map((f) => [f.key, allowed(clean(body[f.key], f.max), f.options)])
        ),
      };

      const isNotify = payload.context.startsWith("Notify:");

      const problem = cfg.prepare(payload, isNotify);
      if (problem) {
        return NextResponse.json({ ok: false, message: problem }, { status: 400 });
      }

      if (payload.email && !isValidEmail(payload.email)) {
        return NextResponse.json(
          { ok: false, message: cfg.invalidEmail || "Please enter a valid email address." },
          { status: 400 }
        );
      }

      await sendContactEmail(payload, cfg, isNotify);

      return NextResponse.json({ ok: true, message: cfg.messages.success(isNotify) });
    } catch (error) {
      if (error instanceof EmailConfigurationError) {
        console.error(error.message);
        return NextResponse.json({ ok: false, message: cfg.messages.notConfigured }, { status: 503 });
      }
      console.error(error);
      return NextResponse.json({ ok: false, message: cfg.messages.failed }, { status: 500 });
    }
  };
}

export { isValidEmail };
