import { notFound } from "next/navigation";
import { crawledPages } from "../data/crawledPages";
import { CaliforniaHearingSite } from "../site/CaliforniaHearingSite";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return crawledPages
    .filter((page) => page.path !== "/")
    .map((page) => ({
      slug: page.path.split("/").filter(Boolean),
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const path = `/${slug.join("/")}/`;
  const page = crawledPages.find((item) => item.path === path);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.desc,
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const path = `/${slug.join("/")}/`;
  const page = crawledPages.find((item) => item.path === path);

  if (!page) {
    notFound();
  }

  return <CaliforniaHearingSite page={page} />;
}
