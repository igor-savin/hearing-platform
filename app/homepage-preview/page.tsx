import type { Metadata } from "next";
import Link from "next/link";
import { activeHomepageVariantId, homepageVariants } from "@/lib/homepageVariants";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Homepage versions",
  robots: { index: false, follow: false }
};

export default function HomepageVersionsIndex() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-16">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Internal</p>
      <h1 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f]">Homepage versions</h1>
      <p className="mt-5 text-[19px] leading-8 text-[var(--muted)]">
        Every homepage version the site carries. One of them is live; the rest are here so a
        previous homepage can be put back without anyone having to remember what it looked like.
        Swapping the live one is a single line in <code>lib/homepageVariants.ts</code>.
      </p>
      <p className="mt-3 text-[17px] leading-7 text-[var(--muted)]">
        These preview pages are noindex, disallowed in robots.txt and absent from the sitemap.
      </p>

      <div className="mt-10 grid gap-5">
        {homepageVariants.map((variant) => {
          const isLive = variant.id === activeHomepageVariantId;
          return (
            <article
              className="rounded-2xl border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.08)]"
              key={variant.id}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[26px] font-black leading-tight text-[#003f6f]">{variant.label}</h2>
                {isLive ? (
                  <span className="rounded-md bg-[#ffd45a] px-3 py-1 text-[13px] font-black uppercase tracking-[0.12em] text-[#003f6f]">
                    Live
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-[17px] leading-7 text-[var(--muted)]">{variant.summary}</p>
              <p className="mt-3 text-[16px] leading-7 text-[var(--muted)]">{variant.notes}</p>
              <Link
                className="focus-ring mt-5 inline-flex rounded-md bg-[#005a9c] px-5 py-3 font-black text-white hover:bg-[#004a82]"
                href={`/homepage-preview/${variant.id}`}
              >
                Preview {variant.label}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
