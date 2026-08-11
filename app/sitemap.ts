import type { MetadataRoute } from "next";
import { getPublishedCmsArticles } from "@/lib/cms/articles";
import { baseUrl, pages } from "@/lib/site";

export const revalidate = 3600;

const contentLastModified = new Date("2026-07-15");

// `/overview` is deliberately absent: it is an internal architecture summary,
// marked noindex, so it should not be advertised to crawlers here.
const standalonePages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/llms.txt`,
    lastModified: contentLastModified,
    changeFrequency: "weekly",
    priority: 0.8
  },
  {
    url: `${baseUrl}/llms.md`,
    lastModified: contentLastModified,
    changeFrequency: "weekly",
    priority: 0.8
  }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitePages: MetadataRoute.Sitemap = pages.filter((page) => page.type !== "thank-you").map((page) => ({
    url: `${baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: contentLastModified,
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

  return [...sitePages, ...scheduledPages, ...standalonePages];
}
