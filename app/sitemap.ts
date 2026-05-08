import type { MetadataRoute } from "next";
import { baseUrl, pages } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: page.lastModified ? new Date(page.lastModified) : new Date("2026-05-08"),
    changeFrequency: page.type === "blog-post" ? "monthly" : "weekly",
    priority: page.path === "/" ? 1 : page.type === "blog-post" ? 0.8 : 0.9
  }));
}
