import { PLAN_INDEXABLE } from "./data/hearingPlan";
import type { MetadataRoute } from "next";
import { crawledPages } from "./data/crawledPages";
import { redirectedPaths } from "./data/redirectedPaths";
import { contentDates } from "./data/contentDates";
import { corePhotos } from "./data/corePhotos";
import { corePages } from "./data/corePages";
import { blogPhotos } from "./data/blogPhotos";
import { blogPosts } from "./data/blogPosts";
import { officePhotosByPath } from "./data/officePhotos";

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


// VS-02. Image entries, nested in this sitemap rather than a separate file --
// Google reads image:image inside the existing <url> entries, and one file is
// one thing to keep correct.
//
// WHAT GOES IN: raster photographs that are the content of a page. Nothing else.
//
// WHAT STAYS OUT, and why it matters here more than on most sites: the majority
// of this site's "hero images" are SVGs generated at build time by
// _migration/genCoreImages.mjs and genCityImages.mjs -- a topical icon on a
// coloured ground, one per tinnitus/service page and one per catchment city.
// They are diagrams, not pictures of anything. Google Images has nothing to
// match them against, and listing 150+ of them would bury the handful of real
// photographs the practice actually owns. The raster test below is what
// excludes them, so a future change from .svg to .png on those generators would
// silently pull them all in -- if that ever happens, exclude them by path.
//
// Chrome (logo, favicons, OG cards, apple-touch icons) is excluded for the same
// reason: it is furniture, not content.
//
// The precedence below deliberately mirrors the renderer's own, in
// CaliforniaHearingSite: corePhotos overrides a core fragment's image, and
// blogPhotos overrides a post's. A sitemap that advertises a different image
// from the one on the page is worse than no image entry at all.
const RASTER = /\.(jpe?g|png|webp|avif)$/i;
const CHROME = /(logo|favicon|apple-touch-icon|^\/og\.|\/og\.jpg$|icon-\d)/i;

function imagesFor(path: string): string[] {
  const found: string[] = [];
  const add = (src?: string) => {
    if (src && !found.includes(src)) found.push(src);
  };

  add(corePhotos[path] ?? corePages[path]?.image);
  add(corePages[path]?.image2);
  add(blogPhotos[path] ?? blogPosts[path]?.image);
  add(blogPosts[path]?.image2);
  for (const src of officePhotosByPath[path] ?? []) add(src);

  return found
    .filter((src) => RASTER.test(src) && !CHROME.test(src))
    .map((src) => `${SITE}${src}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  return crawledPages
    .filter((p) => !EXCLUDE.has(p.path))
    .filter((p) => PLAN_INDEXABLE || p.path !== "/hearing-plan/")
    .filter((p) => !redirectedPaths.has(p.path))
    .map((p) => {
      const lastModified = lastModifiedFor(p.path);
      const images = imagesFor(p.path);
      return {
        url: `${SITE}${p.path}`,
        ...(lastModified ? { lastModified } : {}),
        ...(images.length ? { images } : {}),
        changeFrequency: p.path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: priorityFor(p.path),
      };
    });
}
