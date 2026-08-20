import type { MetadataRoute } from "next";
import { crawledPages } from "./data/crawledPages";
import { redirectedPaths } from "./data/redirectedPaths";
import { contentDates } from "./data/contentDates";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.calhearing.com").replace(/\/$/, "");

// Non-content / test / placeholder pages kept out of the sitemap.
const EXCLUDE = new Set<string>([
  "/test/",
  "/home-new/",
  "/archive/",
  "/california-hearing-center-4/",
  "/4124-2/",
  "/napa-2/",
]);

function priorityFor(path: string): number {
  if (path === "/") return 1;
  const depth = path.split("/").filter(Boolean).length;
  if (depth <= 1) return 0.8;
  if (depth === 2) return 0.6;
  return 0.5;
}

// Every URL gets a real lastmod, from app/data/contentDates.ts — blog posts use
// their editorial dateModified, every other page uses the git commit date of the
// content fragment it is built from. Two things this deliberately avoids: the
// build timestamp (which claimed all 362 pages changed on every deploy, and a
// provably wrong lastmod is one Google discounts site-wide), and omitting the
// field (which throws away information that genuinely exists).
// Regenerate with: node _migration/genContentDates.mjs
function lastModifiedFor(path: string): Date | undefined {
  const date = contentDates[path];
  return date ? new Date(date) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return crawledPages
    .filter((p) => !EXCLUDE.has(p.path))
    .filter((p) => !redirectedPaths.has(p.path))
    .map((p) => {
      const lastModified = lastModifiedFor(p.path);
      return {
        url: `${SITE}${p.path}`,
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: p.path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: priorityFor(p.path),
      };
    });
}
