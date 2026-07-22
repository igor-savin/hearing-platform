import type { MetadataRoute } from "next";
import { crawledPages } from "./data/crawledPages";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return crawledPages
    .filter((p) => !EXCLUDE.has(p.path))
    .map((p) => ({
      url: `${SITE}${p.path}`,
      lastModified: now,
      changeFrequency: p.path === "/" ? "weekly" : "monthly",
      priority: priorityFor(p.path),
    }));
}
