import { notFound } from "next/navigation";
import { crawledPages, type SitePage } from "../data/crawledPages";
import { redirectedPaths } from "../data/redirectedPaths";
import { CaliforniaHearingSite, blogMetaDescription, blogMetaTitle, blogOgImage, areaMetaTitle, areaMetaDescription, coreMetaTitle, coreMetaDescription } from "../site/CaliforniaHearingSite";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return crawledPages
    // A path that 301s in next.config.ts never renders, so prerendering it is
    // pure build cost. Before this filter the build was still producing the 25
    // consolidated service sub-pages; it now also skips the 52 folded cities.
    .filter((page) => page.path !== "/" && !redirectedPaths.has(page.path))
    .map((page) => ({
      slug: page.path.split("/").filter(Boolean),
    }));
}

const GENERIC_DESC =
  "California Hearing Center provides patient-centered hearing care in San Mateo, San Carlos, and communities across the Bay Area.";

// Default social-share image for pages without their own (blog posts supply one).
const DEFAULT_OG_IMAGE = "/og.jpg";

// Shared across every page's Open Graph block. Next replaces the parent
// openGraph object wholesale when a page defines its own, so siteName/locale
// set in the root layout never reach these pages unless repeated here.
const OG_SITE = { siteName: "California Hearing Center", locale: "en_US" } as const;
// og.jpg is 1200x630. Declaring it lets Facebook and LinkedIn lay the card out
// on first scrape instead of showing a blank box until they fetch the file.
const DEFAULT_OG_IMAGE_SIZED = { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "California Hearing Center" };

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
      openGraph: { ...OG_SITE, title: blogTitle, description: blogDesc, url: path, type: "website", images: [DEFAULT_OG_IMAGE_SIZED] },
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
      openGraph: { ...OG_SITE, title: rTitle, description: rDesc, url: path, type: "website", images: [DEFAULT_OG_IMAGE_SIZED] },
      twitter: { card: "summary_large_image", title: rTitle, description: rDesc, images: [DEFAULT_OG_IMAGE] },
    };
  }

  const desc = blogMetaDescription(path) ?? areaMetaDescription(path) ?? coreMetaDescription(path) ?? metaDescription(page);
  const title = areaMetaTitle(path) ?? coreMetaTitle(path) ?? blogMetaTitle(path, page.title);
  const blogImg = blogOgImage(path);
  const ogImg = blogImg ?? DEFAULT_OG_IMAGE;
  // og:type "article" belongs to the blog posts, which have an author and a
  // publish date. A service or location page is not an article; saying so was
  // simply inaccurate. Everything non-editorial is a website page.
  const isArticle = blogMetaDescription(path) != null;

  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      ...OG_SITE,
      title,
      description: desc,
      url: path,
      type: isArticle ? "article" : "website",
      // Only the shared default has known dimensions; per-post photos vary, so
      // they are passed as a bare URL for the platform to measure.
      images: [blogImg ? ogImg : DEFAULT_OG_IMAGE_SIZED],
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
