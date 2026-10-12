// Hand-added video embeds, keyed by route.
//
// This file exists because app/data/pageVideos.ts is REGENERATED WHOLESALE by
// _migration/harvestVideos.mjs, which scrapes the legacy calhearing.com pages.
// Anything added there by hand disappears the next time that script runs, and
// pages written after the migration have no legacy page to harvest from.
// Entries here are merged over the generated map by the site component.
export const pageVideosManual: Record<string, string> = {
  // Phonak's own launch film.
  "/products/hearing-aids-by-brand/phonak/phonak-eon/": "c69B0hGHoqg",
  // HearingTracker asking exactly the question this page answers.
  "/products/hearing-aids-by-brand/phonak/phonak-eon-vs-phonak-infinio/": "shJqytzMB9I",
  // Dr. Cliff Olson, AuD — independent review.
  "/phonak-eon-what-we-know/": "cdkj1EevZGs",
};
