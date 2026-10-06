// Practice identity constants and canonical-path policy, deliberately split out
// of lib/site.ts.
//
// WHY THIS FILE EXISTS — do not merge it back into lib/site.ts.
//
// lib/site.ts imports data/crawl.json (~600 KB). That is server-side reference
// data and it has no business in a browser. But imports are resolved at module
// scope, so ANY client component that reaches into lib/site.ts — even for a
// two-line helper — drags the whole crawl payload into the client bundle.
//
// That is exactly what happened: components/Header.tsx ("use client") imported
// canonicalPathFor and primaryPhone from lib/site.ts, and components/
// ZocdocButton.tsx (rendered inside client components) imported the Zocdoc
// constants. The result was a 998 KB / 153 KB-gzipped chunk shipped on every
// single page, containing the site crawl as inline JSON.
//
// Everything here is data-free and safe to import from a client component.
// lib/site.ts re-exports all of it, so server-side imports are unaffected.
//
// RULE: if a client component needs something from lib/site.ts, move it here
// first. Never import lib/site.ts directly from a "use client" module.

export const baseUrl = "https://www.audiologyassociates.org";
export const siteName = "Audiology Associates of Westchester";
// Bing marks a title over 70 characters as too long, and truncates it in the
// SERP either way. The full practice name is 35 characters, so any title built
// as `<page> | Audiology Associates of Westchester` blew that budget the moment
// the page part passed 32 — which was most of the site (98 of 196 pages in the
// September 2026 audit). Rather than hand-trimming every string, titles go
// through here: the full name is used when it fits, then the shorter practice
// name, then the region, which is what the newer blog entries already did by
// hand. A base that is itself over 70 is returned unbranded and shows up in
// `npm run check:titles`, because only a human can shorten the words.
export const titleBrandFull = siteName;
export const titleBrandShort = "Audiology Associates";
export const titleBrandRegion = "Westchester";
export const TITLE_MAX = 70;

// `qualifier` is an optional extra phrase ("Tinnitus Help in Westchester") that
// is worth having when there is room and is the first thing dropped when there
// is not.
export function titleWithBrand(base: string, qualifier?: string): string {
  const bases = qualifier ? [`${base} | ${qualifier}`, base] : [base];
  for (const candidateBase of bases) {
    for (const brand of [titleBrandFull, titleBrandShort, titleBrandRegion]) {
      const candidate = `${candidateBase} | ${brand}`;
      if (candidate.length <= TITLE_MAX) return candidate;
    }
  }
  return base;
}

// Bing wants a meta description of 150-160 characters and truncates past that.
// Most pages are written to fit, but the ~35 recovered from the pre-2026 Duda
// crawl carry whatever the old site had, and a few ran past 190. Rather than
// rewrite copy nobody is maintaining, buildMetadata() passes every description
// through here: a description that already fits is untouched, and a long one is
// cut at the last sentence that still leaves a useful snippet, or at a word
// boundary with an ellipsis when it is one long sentence. Never mid-word.
export const DESCRIPTION_MAX = 160;

export function fitDescription(text: string): string {
  const description = text.trim();
  if (description.length <= DESCRIPTION_MAX) return description;

  const head = description.slice(0, DESCRIPTION_MAX);
  const lastSentence = Math.max(head.lastIndexOf(". "), head.lastIndexOf("! "), head.lastIndexOf("? "));
  if (lastSentence >= 120) return description.slice(0, lastSentence + 1);

  const lastSpace = description.slice(0, DESCRIPTION_MAX - 1).lastIndexOf(" ");
  const cut = lastSpace > 0 ? lastSpace : DESCRIPTION_MAX - 1;
  return description.slice(0, cut).replace(/[,;:\u2014-]$/, "").trim() + "\u2026";
}

export const primaryPhone = "(914) 949-0034";
export const primaryPhoneHref = "tel:+19149490034";
export const zocdocUrl = "https://www.zocdoc.com/practice/audiology-associates-of-westchester-69184";
export const zocdocPracticeId = "69184";
export const logoPath = "/assets/duda/audiology-associates-of-westchester-logo.png";
export const logoUrl = `${baseUrl}${logoPath}`;

// A few topics exist at both a short legacy URL carried over from the Duda
// site and a newer /how-we-can-help/* URL. Both pages are real and stay
// reachable, but only one should be the indexed target. The legacy URL wins:
// reports/redirect-map.md treats those as preserved live URLs, and they hold
// the search equity we are trying not to lose in the domain cutover.
const canonicalOverrides = new Map<string, string>([
  ["/how-we-can-help/hearing-protection", "/hearing-protection"]
]);

// Exported so navigation and the LLM guide can point at the indexed URL
// rather than the duplicate. A menu link to a non-canonical path spends
// link equity on a page we have already told Google to ignore.
export function canonicalPathFor(path: string) {
  return canonicalOverrides.get(path) ?? path;
}
