import { notFound } from "next/navigation";
import { crawledPages, type SitePage } from "../data/crawledPages";
import { CaliforniaHearingSite, blogMetaDescription, blogMetaTitle, blogOgImage, areaMetaTitle, areaMetaDescription, coreMetaTitle, coreMetaDescription } from "../site/CaliforniaHearingSite";

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

// Default social-share image for pages without their own (blog posts supply one).
const DEFAULT_OG_IMAGE = "/og.jpg";

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

  if (path === "/the-blog/") {
    const blogTitle = "Hearing Health Resources | California Hearing Center";
    const blogDesc =
      "Practical, audiologist-written guides on hearing loss, tinnitus, hearing aids, costs and insurance, ear care, and hearing tests — from California Hearing Center in San Mateo & San Carlos.";
    return {
      title: blogTitle,
      description: blogDesc,
      alternates: { canonical: path },
      openGraph: { title: blogTitle, description: blogDesc, url: path, type: "website", images: [DEFAULT_OG_IMAGE] },
      twitter: { card: "summary_large_image", title: blogTitle, description: blogDesc, images: [DEFAULT_OG_IMAGE] },
    };
  }

  if (path === "/reviews/") {
    const rTitle = "Patient Reviews | California Hearing Center";
    const rDesc = "Read real Google reviews from California Hearing Center patients in San Mateo & San Carlos — careful testing, honest guidance, and hearing care people trust.";
    return {
      title: rTitle,
      description: rDesc,
      alternates: { canonical: path },
      openGraph: { title: rTitle, description: rDesc, url: path, type: "website", images: [DEFAULT_OG_IMAGE] },
      twitter: { card: "summary_large_image", title: rTitle, description: rDesc, images: [DEFAULT_OG_IMAGE] },
    };
  }

  const desc = blogMetaDescription(path) ?? areaMetaDescription(path) ?? coreMetaDescription(path) ?? metaDescription(page);
  const title = areaMetaTitle(path) ?? coreMetaTitle(path) ?? blogMetaTitle(path, page.title);
  const ogImg = blogOgImage(path) ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: desc,
      url: path,
      type: "article",
      images: [ogImg],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImg],
    },
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
