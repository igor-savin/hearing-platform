import { buildLlmTextGuide } from "@/lib/llmGuide";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmTextGuide(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
