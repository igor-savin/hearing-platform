import type { MetadataRoute } from "next";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.calhearing.com").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Explicitly welcome the AI answer engines, matching the sister
        // practice's site. Patients increasingly ask an assistant "who is a
        // good audiologist near San Mateo" rather than running a search, and
        // for a two-office private practice that surface is worth having.
        // These crawlers are permitted by default today, so this changes
        // nothing immediately -- it states the intent so a future change to
        // anyone's defaults doesn't quietly opt the practice out.
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
