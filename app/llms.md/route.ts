import { buildLlmMarkdownGuide } from "@/lib/llmGuide";
import { getReviewStats } from "@/lib/reviewStats";

export const dynamic = "force-static";

export async function GET() {
  return new Response(buildLlmMarkdownGuide(await getReviewStats()), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
