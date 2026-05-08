import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message:
      "Contact submissions are handled client-side through Firebase Firestore so the public site can stay fast on Vercel."
  });
}
