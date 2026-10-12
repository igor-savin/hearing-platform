import { NextResponse } from "next/server";
import { PRACTICE } from "../../../lib/screener/config";
import { saveEvent } from "../../../lib/screener/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Anonymous funnel counting. Holds no personal data: a random visit id, an event
// name from a fixed list, and (for results) the band. See free-online-hearing-test/track.ts.

const EVENTS = new Set([
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
const BANDS = new Set(["good", "fair", "poor", "unreliable"]);
const STAGES = new Set(["setup", "both", "ear-offer", "left", "right", "gate"]);

const hits = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 200;
}

const clean = (v: unknown, max: number) => String(v ?? "").replace(/[^\w.\-]/g, "").slice(0, max);

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 2000) return new NextResponse(null, { status: 204 });
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (tooMany(ip)) return new NextResponse(null, { status: 204 });

    const b = (await request.json()) as Record<string, unknown>;
    const event = String(b.event || "");
    const visitId = clean(b.sid, 64);
    if (!EVENTS.has(event) || !visitId) return new NextResponse(null, { status: 204 });
    const band = BANDS.has(String(b.band)) ? String(b.band) : undefined;
    const stage = STAGES.has(String(b.stage)) ? String(b.stage) : undefined;

    let source: Record<string, string> | undefined;
    if (event === "view" && b.src && typeof b.src === "object") {
      const s = b.src as Record<string, unknown>;
      source = { ref: clean(s.ref, 80), source: clean(s.source, 60), medium: clean(s.medium, 60), campaign: clean(s.campaign, 60) };
    }
    await saveEvent({ practice: PRACTICE.key, visitId, event, band, stage, source });
  } catch {
    // Counting must never produce errors for the visitor.
  }
  return new NextResponse(null, { status: 204 });
}
