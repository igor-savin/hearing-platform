import type { MetadataRoute } from "next";
import { getPublishedCmsArticles } from "@/lib/cms/articles";
import { redirectedPaths } from "@/lib/redirects";
import { baseUrl, pages } from "@/lib/site";

export const revalidate = 3600;

// Fallback only, for the rare page carrying no date of its own.
const contentLastModified = new Date("2026-07-15");

function canonicalUrlFor(path: string) {
  return `${baseUrl}${path === "/" ? "" : path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitePages: MetadataRoute.Sitemap = pages
    .filter((page) => page.type !== "thank-you")
    // Skip pages that canonicalize elsewhere. They stay reachable, but a
    // sitemap should only advertise the URL we actually want indexed.
    .filter((page) => page.canonical === canonicalUrlFor(page.path))
    // Skip paths that 301 elsewhere; a sitemap should list final URLs only.
    .filter((page) => !redirectedPaths.has(page.path))
    .map((page) => ({
      url: canonicalUrlFor(page.path),
      // Each page carries its own edit date. Emitting one build constant for
      // every URL tells crawlers nothing about what actually changed.
      lastModified: page.lastModified ? new Date(page.lastModified) : contentLastModified,
      changeFrequency: page.type === "blog-post" ? "monthly" : "weekly",
      priority: page.path === "/" ? 1 : page.type === "blog-post" ? 0.8 : 0.9
    }));

  const knownUrls = new Set(sitePages.map((page) => page.url));
  const scheduledPages: MetadataRoute.Sitemap = (await getPublishedCmsArticles())
    .filter((page) => !knownUrls.has(page.url))
    .map((page) => ({
      url: page.url,
      lastModified: page.lastModified ? new Date(page.lastModified) : contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }));

  // `/overview`, `/llms.txt`, and `/llms.md` are deliberately absent. The first
  // is an internal architecture summary marked noindex; the other two are
  // crawler-facing plain-text guides with no title, description, or canonical,
  // so they do not belong in an index of indexable pages. Both stay served at
  // their well-known paths, which is how LLM crawlers look for them, and
  // /llms.txt links to /llms.md.
  return [...sitePages, ...scheduledPages];
}
