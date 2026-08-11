// Keep this list identical to the isCmsAdmin() list in firestore.rules.
// Those rules are the real boundary -- the browser writes to Firestore
// directly, so Google enforces them regardless of what this file says. This
// list only guards the back-office API routes. scripts/check-admin-allowlist.mjs
// fails the build if the two ever disagree.
//
// Used only outside production. In production CMS_ADMIN_EMAILS must be set;
// see adminEmails() below.
const DEFAULT_ADMIN_EMAILS = ["igor@hearing-care.org", "igorsavin@gmail.com", "igorsavin+1@gmail.com"];

function adminEmails() {
  const configured = (process.env.CMS_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  if (configured.length) return configured;
  // Fail closed. A missing env var in production used to silently fall back to
  // the hardcoded list, so a deployment that had never been configured still
  // admitted three named people. An empty list denies everyone instead.
  if (process.env.NODE_ENV === "production") {
    console.error("[cms] CMS_ADMIN_EMAILS is not set - refusing all back-office API access.");
    return [];
  }
  return DEFAULT_ADMIN_EMAILS;
}

export async function verifyCmsAdmin(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!token || !apiKey) return null;

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken: token }),
    cache: "no-store"
  });

  if (!response.ok) return null;
  const payload = (await response.json()) as { users?: { localId?: string; email?: string; emailVerified?: boolean }[] };
  const user = payload.users?.[0];
  const email = user?.email?.toLowerCase();
  if (!user?.localId || !email || !user.emailVerified || !adminEmails().includes(email)) return null;
  return { uid: user.localId, email };
}
