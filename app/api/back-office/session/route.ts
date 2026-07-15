import { NextResponse } from "next/server";
import { verifyCmsAdmin } from "@/lib/cms/auth";

export async function GET(request: Request) {
  const admin = await verifyCmsAdmin(request);
  if (!admin) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, {
      status: 401,
      headers: { "Cache-Control": "no-store" }
    });
  }

  return NextResponse.json({ ok: true, email: admin.email }, {
    headers: { "Cache-Control": "no-store" }
  });
}
