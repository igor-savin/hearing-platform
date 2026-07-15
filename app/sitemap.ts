import type { MetadataRoute } from "next";
import { baseUrl, pages } from "@/lib/site";

export const dynamic = "force-static";

const contentLastModified = new Date("2026-07-15");

const standalonePages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/overview`,
    lastModified: contentLastModified,
    changeFrequency: "monthly",
    priority: 0.7
  },
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

export default function sitemap(): MetadataRoute.Sitemap {
  const sitePages: MetadataRoute.Sitemap = pages.filter((page) => page.type !== "thank-you").map((page) => ({
    url: `${baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: contentLastModified,
    changeFrequency: page.type === "blog-post" ? "monthly" : "weekly",
    priority: page.path === "/" ? 1 : page.type === "blog-post" ? 0.8 : 0.9
  }));

  return [...sitePages, ...standalonePages];
}
