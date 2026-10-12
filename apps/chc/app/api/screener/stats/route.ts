import { NextResponse } from "next/server";
import { funnel, storeConfigured } from "../../../lib/screener/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Funnel numbers for the practice team. Needs SCREENER_STATS_KEY, sent as
//   Authorization: Bearer <key>
// Returns counts only: no names, emails or scores.
export async function GET(request: Request) {
  const key = process.env.SCREENER_STATS_KEY || "";
  const auth = request.headers.get("authorization") || "";
  if (!key || auth !== `Bearer ${key}`) return NextResponse.json({ ok: false }, { status: 401 });
  const days = Number(new URL(request.url).searchParams.get("days") || 30);
  try {
    const data = await funnel(days);
    return NextResponse.json({ ok: true, database: storeConfigured() ? "connected" : "not configured", ...(data || {}) });
  } catch (error) {
    return NextResponse.json({ ok: false, database: "error", message: error instanceof Error ? error.message : "unknown" }, { status: 500 });
  }
}
