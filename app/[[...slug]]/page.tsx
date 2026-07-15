import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PageRenderer } from "@/components/PageRenderer";
import { getPublishedCmsArticleByPath, getPublishedCmsArticles } from "@/lib/cms/articles";
import { buildMetadata, getPageByPath, pagePaths, toPath } from "@/lib/site";

export const dynamicParams = true;
export const revalidate = 3600;

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...pagePaths
    .filter((path) => path !== "/")
    .map((path) => ({
      slug: path.replace(/^\//, "").split("/")
    }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = toPath(slug);
  const page = getPageByPath(path) || await getPublishedCmsArticleByPath(path);
  if (!page) return {};
  return buildMetadata(page);
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const path = toPath(slug);
  const staticPage = getPageByPath(path);
  const page = staticPage || await getPublishedCmsArticleByPath(path);
  if (!page) notFound();
  if (path !== page.path) permanentRedirect(page.path);
  const scheduledPosts = path === "/blog" ? await getPublishedCmsArticles() : [];
  return <PageRenderer page={page} scheduledPosts={scheduledPosts} />;
}
