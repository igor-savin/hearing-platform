import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/back-office", "/api/back-office", "/homepage-preview"]
      },
      {
        // Explicitly welcome the AI answer engines. Patients increasingly ask
        // an assistant "who is a good audiologist near White Plains" rather
        // than running a search, and for a private practice that surface is
        // worth having. These crawlers are permitted by default today, so this
        // changes nothing immediately — it states the intent so a future change
        // to anyone's defaults doesn't quietly opt the practice out.
        //
        // Kept in step with the sister practice's list (California Hearing
        // Center), which is where OAI-SearchBot, Claude-User and
        // Applebot-Extended came from.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended"
        ],
        allow: "/",
        disallow: ["/back-office", "/api/back-office", "/homepage-preview"]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
