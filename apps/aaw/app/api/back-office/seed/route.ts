import { NextResponse } from "next/server";
import { buildScheduledArticleSeeds } from "@/lib/cms/articleSeed";
import { verifyCmsAdmin } from "@/lib/cms/auth";

export async function POST(request: Request) {
  const admin = await verifyCmsAdmin(request);
  if (!admin) return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as { startAt?: string };
  const startAt = new Date(body.startAt || "");
  if (Number.isNaN(startAt.getTime())) {
    return NextResponse.json({ ok: false, message: "Choose a valid starting publication date." }, { status: 400 });
  }

  const articles = buildScheduledArticleSeeds(startAt);
  return NextResponse.json({ ok: true, articles, requestedBy: admin.email });
}
