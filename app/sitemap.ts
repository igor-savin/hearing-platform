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


// VS-02. Image entries, nested in this sitemap rather than a separate file --
// Google reads image:image inside the existing <url> entries, and one file is
// one thing to keep correct.
//
// READ THIS BEFORE LOOSENING THE FILTER. `page.images` is not a curated list.
// It comes straight from the 2026 crawl of the old Duda site and still holds
// everything those pages loaded, including 40 Zocdoc booking-widget pixels on
// zocdoc.com and 39 Facebook tracking pixels on facebook.com. Handing those to
// Google as this practice's images would be wrong on someone else's domain and
// faintly embarrassing on ours. imageForPage() in lib/site.ts filters them out
// for the hero; nothing filters the array itself, so the filter lives here.
// The same-origin test below is what stops them, not luck.
//
// Raster only: SVG carries nothing for Google Images to match. Chrome (logo,
// favicons, OG cards) is furniture, not content, and stays out.
// Images a page renders from a component rather than from its page data, so
// nothing in `pages` knows they exist. The homepage hero is the case that
// matters: /assets/interactive-ear-hero.png is an anatomical cutaway of the ear
// with a hearing aid fitted, it is the largest and highest-priority image on
// the site, and it is the best image-search asset this practice owns. It spent
// months with an empty alt inside an aria-hidden wrapper (VS-03) telling
// Google to ignore it. Having just undone that, leaving it out of the sitemap
// would be an odd way to finish the job.
const COMPONENT_IMAGES: Record<string, string[]> = {
  "/": ["/assets/interactive-ear-hero.png"]
};

const RASTER = /\.(jpe?g|png|webp|avif)$/i;
const CHROME = /(logo|favicon|apple-touch-icon|opengraph-image|icon-\d)/i;

function imagesFor(page: (typeof pages)[number]): string[] {
  const found: string[] = [];
  const add = (src?: string) => {
    if (!src || !src.startsWith("/assets/")) return;
    if (!RASTER.test(src) || CHROME.test(src)) return;
    const absolute = `${baseUrl}${src}`;
    if (!found.includes(absolute)) found.push(absolute);
  };

  add(page.heroImage?.src);
  for (const image of page.images) add(image.src);
  for (const src of COMPONENT_IMAGES[page.path] ?? []) add(src);
  return found;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitePages: MetadataRoute.Sitemap = pages
    .filter((page) => page.type !== "thank-you")
    // Skip pages that canonicalize elsewhere. They stay reachable, but a
    // sitemap should only advertise the URL we actually want indexed.
    .filter((page) => page.canonical === canonicalUrlFor(page.path))
    // Skip paths that 301 elsewhere; a sitemap should list final URLs only.
    .filter((page) => !redirectedPaths.has(page.path))
    .map((page) => {
      const images = imagesFor(page);
      return {
        url: canonicalUrlFor(page.path),
        // Each page carries its own edit date. Emitting one build constant for
        // every URL tells crawlers nothing about what actually changed.
        lastModified: page.lastModified ? new Date(page.lastModified) : contentLastModified,
        changeFrequency: (page.type === "blog-post" ? "monthly" : "weekly") as "monthly" | "weekly",
        priority: page.path === "/" ? 1 : page.type === "blog-post" ? 0.8 : 0.9,
        ...(images.length ? { images } : {})
      };
    });

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
