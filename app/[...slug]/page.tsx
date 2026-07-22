import { notFound } from "next/navigation";
import { crawledPages, type SitePage } from "../data/crawledPages";
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

const GENERIC_DESC =
  "California Hearing Center provides patient-centered hearing care in San Mateo, San Carlos, and communities across the Bay Area.";

function metaDescription(page: SitePage): string {
  if (page.desc && page.desc !== GENERIC_DESC) return page.desc.slice(0, 160);
  if (page.paragraphs && page.paragraphs.length) return page.paragraphs[0].slice(0, 158);
  const topic = page.h1 || page.title.replace(/\s*\|.*$/, "");
  return `${topic}: expert audiology guidance from California Hearing Center in San Mateo & San Carlos. Call 650-342-9449.`.slice(0, 160);
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
    description: metaDescription(page),
    alternates: { canonical: path },
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
