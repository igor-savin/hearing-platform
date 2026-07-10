import type { MetadataRoute } from "next";
import { baseUrl, pages } from "@/lib/site";

export const dynamic = "force-static";

const standalonePages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/overview`,
    lastModified: new Date("2026-07-09"),
    changeFrequency: "monthly",
    priority: 0.7
  },
  {
    url: `${baseUrl}/llms.txt`,
    lastModified: new Date("2026-07-10"),
    changeFrequency: "weekly",
    priority: 0.6
  },
  {
    url: `${baseUrl}/llms.md`,
    lastModified: new Date("2026-07-10"),
    changeFrequency: "weekly",
    priority: 0.6
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitePages: MetadataRoute.Sitemap = pages.filter((page) => page.type !== "thank-you").map((page) => ({
    url: `${baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: page.lastModified ? new Date(page.lastModified) : new Date("2026-05-08"),
    changeFrequency: page.type === "blog-post" ? "monthly" : "weekly",
    priority: page.path === "/" ? 1 : page.type === "blog-post" ? 0.8 : 0.9
  }));

  return [...sitePages, ...standalonePages];
}
