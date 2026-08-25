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
export const primaryPhone = "(914) 949-0034";
export const primaryPhoneHref = "tel:+19149490034";
export const zocdocUrl = "https://www.zocdoc.com/practice/audiology-associates-of-westchester-69184";
export const zocdocPracticeId = "69184";
export const logoPath = "/assets/duda/audiologoy-associates-of-west-chester-logo.png";
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
