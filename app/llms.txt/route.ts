import { buildLlmTextGuide } from "@/lib/llmGuide";
import { getReviewStats } from "@/lib/reviewStats";

export const dynamic = "force-static";

export async function GET() {
  return new Response(buildLlmTextGuide(await getReviewStats()), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
