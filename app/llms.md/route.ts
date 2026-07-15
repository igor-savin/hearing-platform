import { buildLlmMarkdownGuide } from "@/lib/llmGuide";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmMarkdownGuide(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
