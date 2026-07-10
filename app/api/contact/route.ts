import { NextResponse } from "next/server";

type ContactPayload = {
  context?: string;
  email?: string;
  message?: string;
  name?: string;
  pageUrl?: string;
  phone?: string;
  website?: string;
};

class EmailConfigurationError extends Error {}

const CONTACT_FORM_RECIPIENTS = ["admin@hearing-care.org"];
const CONTACT_FORM_BCC_RECIPIENTS = ["igor@hearing-care.org"];

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

function textBody(payload: Required<Omit<ContactPayload, "website">>) {
  return [
    "New website contact form submission",
    "",
    `Context: ${payload.context}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "Not provided"}`,
    `Page: ${payload.pageUrl || "Not provided"}`,
    "",
    "Message:",
    payload.message,
    "",
    "Do not reply with clinical guidance unless the practice has confirmed the patient's identity and care context."
  ].join("\n");
}

function htmlBody(payload: Required<Omit<ContactPayload, "website">>) {
  const rows = [
    ["Context", payload.context],
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email || "Not provided"],
    ["Page", payload.pageUrl || "Not provided"]
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
      <div style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;max-width:680px">${escapeHtml(payload.message)}</div>
      <p style="margin-top:18px;color:#555;font-size:13px">
        Do not reply with clinical guidance unless the practice has confirmed the patient's identity and care context.
      </p>
    </div>
  `;
}

async function sendContactEmail(payload: Required<Omit<ContactPayload, "website">>) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new EmailConfigurationError("Contact email delivery is not configured.");
  }

  const from = process.env.CONTACT_FORM_FROM_EMAIL || "Audiology Associates <onboarding@resend.dev>";

  if (!CONTACT_FORM_RECIPIENTS.length) {
    throw new EmailConfigurationError("Contact email recipient is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from,
      to: CONTACT_FORM_RECIPIENTS,
      bcc: CONTACT_FORM_BCC_RECIPIENTS,
      reply_to: payload.email || undefined,
      subject: `Website contact form: ${payload.name}`,
      text: textBody(payload),
      html: htmlBody(payload)
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    method: "POST"
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

    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      context: clean(body.context, 120) || "Website contact form",
      email: clean(body.email, 254),
      message: clean(body.message, 4000),
      name: clean(body.name, 120),
      pageUrl: clean(body.pageUrl, 500),
      phone: clean(body.phone, 80)
    };

    if (!payload.name || !payload.phone || !payload.message) {
      return NextResponse.json(
        { ok: false, message: "Please provide your name, phone number, and message." },
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
      message: "Thank you. Your message has been sent and the practice can follow up with you."
    });
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error(error.message);
      return NextResponse.json(
        {
          ok: false,
          message:
            "The online form is not configured for email delivery yet. Please call the practice directly."
        },
        { status: 503 }
      );
    }

    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "The online form could not send just now. Please call the practice directly to schedule or confirm care."
      },
      { status: 500 }
    );
  }
}
