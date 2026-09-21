import { formatRating, getReviewStats } from "@/lib/reviewStats";

/**
 * The practice's Google rating and review count, resolved when the page renders.
 *
 * These are async server components so the numbers can come from the Google
 * Places lookup in lib/reviewStats.ts without every caller having to become
 * async: a synchronous server component can render an async child. Nothing ships
 * to the browser but the finished text — no review widget, no extra JavaScript.
 *
 * Both read the same cached lookup, so a page showing the rating and the count
 * cannot show two different vintages of the same figure.
 */

export async function ReviewCount() {
  const stats = await getReviewStats();
  return <>{stats.count.toLocaleString("en-US")}</>;
}

export async function ReviewRating() {
  const stats = await getReviewStats();
  return <>{formatRating(stats.rating)}</>;
}

/** "Harrison 486 · Somers 14" — the per-office split, for anywhere the total alone invites the question. */
export async function ReviewOfficeSplit() {
  const stats = await getReviewStats();
  return <>{stats.offices.map((office) => `${office.label} ${office.count}`).join(" · ")}</>;
}
