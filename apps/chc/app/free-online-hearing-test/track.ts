// First-party funnel counting for the screener. No third-party scripts run on this
// page (see the CSP in next.config.ts), so this is the only analytics, and it is
// built to hold no personal data: a random visit id that lives in memory only,
// an event name, and for the final step the result band. No name, email, answers
// or scores ever go through here.

const events = new Set([
  "view",
  "stage_intro",
  "stage_setup",
  "stage_both",
  "stage_ear-offer",
  "stage_left",
  "stage_right",
  "stage_gate",
  "stage_result",
  "submit_error",
  "pdf_download",
  "cta_book",
  "cta_call",
  "retake",
  "share",
  "leave",
]);

export type TrackName = typeof events extends Set<infer T> ? T : never;

let sid = "";
function visitId() {
  if (!sid) {
    try {
      sid = crypto.randomUUID();
    } catch {
      sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
  }
  return sid;
}

/** Where the visit came from: the referring site and UTM tags. Never the full URL. */
export function visitSource() {
  try {
    const q = new URLSearchParams(window.location.search);
    let ref = "";
    try {
      ref = document.referrer ? new URL(document.referrer).hostname : "";
    } catch {
      ref = "";
    }
    const pick = (k: string) => (q.get(k) || "").slice(0, 60);
    return { ref: ref.slice(0, 80), source: pick("utm_source"), medium: pick("utm_medium"), campaign: pick("utm_campaign") };
  } catch {
    return { ref: "", source: "", medium: "", campaign: "" };
  }
}

export function visitIdForSubmit() {
  return visitId();
}

export function track(event: string, extra: { band?: string; stage?: string } = {}) {
  if (!events.has(event)) return;
  try {
    const body = JSON.stringify({
      sid: visitId(),
      event,
      ...extra,
      ...(event === "view" ? { src: visitSource() } : {}),
    });
    const url = "/api/screener/event/";
    if (navigator.sendBeacon && navigator.sendBeacon(url, new Blob([body], { type: "application/json" }))) return;
    void fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => undefined);
  } catch {
    // Counting must never break the test.
  }
}
