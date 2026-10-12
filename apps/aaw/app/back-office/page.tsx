import type { Metadata } from "next";
import { BackOfficeDashboard } from "@/components/backoffice/BackOfficeDashboard";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publishing Back Office",
  robots: { index: false, follow: false }
};

export default function BackOfficePage() {
  const publishedArticles = blogPosts
    .map((post) => ({
      path: post.path,
      title: post.h1,
      category: post.sections[0] || "Hearing Health",
      publishedAt: post.lastModified || ""
    }))
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));

  return <BackOfficeDashboard publishedArticles={publishedArticles} />;
}
