import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Receives contact/lead submissions from LeadForm and forwards them to the
// practice inbox via Web3Forms. The access key lives only in the server env
// (WEB3FORMS_ACCESS_KEY), never in the client bundle. We collect no PHI.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — pretend success so bots don't retry.
  if (body.company) return NextResponse.json({ ok: true });

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const phone = str(body.phone);
  const email = str(body.email);

  if (!name || (!phone && !email)) {
    return NextResponse.json(
      { ok: false, error: "Please include your name and a phone number or email." },
      { status: 422 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "That email doesn’t look right." }, { status: 422 });
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    console.error("WEB3FORMS_ACCESS_KEY is not set — lead not delivered.");
    return NextResponse.json(
      { ok: false, error: "The form isn’t configured yet. Please call 650-342-9449." },
      { status: 503 },
    );
  }

  const payload = {
    access_key: key,
    subject: `New website inquiry — ${name}`,
    from_name: "California Hearing Center website",
    name,
    phone: phone || "(not provided)",
    email: email || "(not provided)",
    preferred_office: str(body.office) || "Either",
    reason: str(body.reason) || "(not specified)",
    message: str(body.message) || "(none)",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean };
    if (!res.ok || !json.success) {
      return NextResponse.json(
        { ok: false, error: "We couldn’t send that. Please call 650-342-9449." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "We couldn’t send that. Please call 650-342-9449." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
