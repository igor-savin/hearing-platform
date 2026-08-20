import type { MetadataRoute } from "next";
import { crawledPages } from "./data/crawledPages";
import { redirectedPaths } from "./data/redirectedPaths";
import { blogPosts } from "./data/blogPosts";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

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

// lastmod is only emitted where we have a real editorial date. Stamping every
// URL with the build time — which is what this did — tells Google that all 362
// pages changed on every deploy. That is false, and a lastmod that is provably
// unreliable is a signal Google learns to discount entirely. The 138 enriched
// blog posts carry genuine dates; everything else is better off saying nothing.
function lastModifiedFor(path: string): Date | undefined {
  const post = blogPosts[path];
  const date = post?.dateModified || post?.datePublished;
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
