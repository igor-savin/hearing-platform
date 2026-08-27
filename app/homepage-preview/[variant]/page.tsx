import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageRenderer } from "@/components/PageRenderer";
import {
  activeHomepageVariantId,
  homepageVariantFor,
  homepageVariants,
  type HomepageVariantId
} from "@/lib/homepageVariants";
import { getPageByPath } from "@/lib/site";

// A private look at any homepage version without shipping it. Kept out of the
// sitemap, disallowed in robots.txt, and noindex on the page itself, so the
// only way here is to be sent the link.
export const dynamic = "force-static";

export function generateStaticParams() {
  return homepageVariants.map((variant) => ({ variant: variant.id }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

export default async function HomepagePreviewPage({
  params
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const registered = homepageVariantFor(variant);
  const home = getPageByPath("/");
  if (!registered || !home) notFound();

  const isLive = registered.id === activeHomepageVariantId;

  return (
    <>
      <div className="border-b-4 border-[#ffd45a] bg-[#003f6f] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-[1660px] flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">
            Homepage preview
          </p>
          <p className="text-[18px] font-black">{registered.label}</p>
          <p className="text-[16px] text-white/80">
            {isLive
              ? "This is the version currently live."
              : "Not live. Visitors are seeing a different version."}
          </p>
          <nav className="ml-auto flex flex-wrap gap-3 text-[15px]">
            {homepageVariants
              .filter((other) => other.id !== registered.id)
              .map((other) => (
                <Link
                  className="focus-ring rounded-md border border-white/60 px-3 py-2 font-bold text-white hover:bg-white/10"
                  href={`/homepage-preview/${other.id}`}
                  key={other.id}
                >
                  {other.label}
                </Link>
              ))}
            <Link
              className="focus-ring rounded-md border border-white/60 px-3 py-2 font-bold text-white hover:bg-white/10"
              href="/"
            >
              Live homepage
            </Link>
          </nav>
        </div>
      </div>
      <PageRenderer homepageVariantId={registered.id as HomepageVariantId} page={home} />
    </>
  );
}
