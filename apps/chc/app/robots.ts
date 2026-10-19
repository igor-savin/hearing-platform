import type { MetadataRoute } from "next";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

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
      {
        // Meta AI search (the crawler behind Meta Muse and Meta AI answers).
        //
        // Meta's own crawler page says that allowing meta-webindexer "helps us
        // cite and link to your content in Meta AI's responses". Today it is
        // allowed by default; this group states that on purpose and in its own
        // block so nobody folds it into a bulk block-list by accident.
        //
        // The token is lower case, exactly as Meta documents it. A crawler that
        // matches a named group ignores the "*" group above, so the private
        // paths must be repeated here. Do not drop the disallow line.
        //
        // Not set here on purpose:
        //  - meta-externalagent collects content for AI model training. That is
        //    a separate decision. Leaving it unnamed means it is allowed.
        //  - meta-externalfetcher fetches a page when a person asks Meta AI to
        //    open it, and Meta says it may ignore robots.txt. Naming it would
        //    not change what it does.
        //
        // Meta says robots.txt changes can take up to 24 hours to take effect.
        // Source: https://developers.facebook.com/docs/sharing/webmasters/web-crawlers
        userAgent: "meta-webindexer",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
