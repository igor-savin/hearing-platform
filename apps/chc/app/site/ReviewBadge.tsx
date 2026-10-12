import { getReviewStats, formatRating } from "../lib/reviewStats";
import { googleReviewsUrl } from "../data/reviews";

/**
 * Live Google rating and review count.
 *
 * An async Server Component, so the numbers are resolved when the page is
 * rendered and nothing ships to the browser but markup — no third-party review
 * widget, no extra JavaScript, no layout shift while a script boots.
 *
 * Styles live here rather than in globals.css: React dedupes a <style> with a
 * `precedence` across every instance on the page, so the rules are emitted once
 * however many badges render.
 */

const STYLES = `
.cr-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  line-height: 1.2;
}
.cr-badge:hover { border-color: var(--aqua); }
.cr-score {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--teal-dark);
  font-variant-numeric: tabular-nums;
}
.cr-stars { color: var(--gold); letter-spacing: 1px; font-size: 1rem; }
.cr-meta { font-size: .86rem; color: var(--muted); }
.cr-meta b { color: var(--ink); font-weight: 600; }

.cr-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 28px;
  padding: 22px 24px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--paper);
  text-align: left;
}
.cr-panel-score { display: flex; align-items: center; gap: 14px; }
.cr-panel-score .cr-score { font-size: 2.4rem; }
.cr-panel-score .cr-stars { font-size: 1.3rem; display: block; }
.cr-panel-offices { display: flex; gap: 24px; flex-wrap: wrap; }
.cr-office { font-size: .88rem; color: var(--muted); }
.cr-office b { display: block; color: var(--teal-dark); font-size: 1.15rem; font-weight: 700; }
.cr-panel a { color: var(--orange-text); font-size: .88rem; }
`;

function Stars({ rating }: { rating: number }) {
  // Round to the nearest half so a 4.8 does not silently render as five full
  // stars. "★★★★½" is honest; five solid stars for a 4.8 is not.
  const halves = Math.round(rating * 2);
  const full = Math.floor(halves / 2);
  const half = halves % 2 === 1;
  return (
    <span className="cr-stars" aria-hidden="true">
      {"★".repeat(full)}
      {half ? "⯨" : ""}
      {"☆".repeat(Math.max(0, 5 - full - (half ? 1 : 0)))}
    </span>
  );
}

/** Compact pill: stars, score, and the total count. */
export async function ReviewBadge() {
  const stats = await getReviewStats();
  const rating = formatRating(stats.rating);
  return (
    <>
      <style href="cr-badge" precedence="medium">{STYLES}</style>
      <a
        className="cr-badge"
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${rating} out of 5 stars from ${stats.count} Google reviews. Opens Google in a new tab.`}
      >
        <span className="cr-score">{rating}</span>
        <Stars rating={stats.rating} />
        <span className="cr-meta">
          <b>{stats.count}</b> Google reviews
        </span>
      </a>
    </>
  );
}

/** Full panel: the combined score plus the per-office split. */
export async function ReviewPanel() {
  const stats = await getReviewStats();
  const rating = formatRating(stats.rating);
  return (
    <>
      <style href="cr-badge" precedence="medium">{STYLES}</style>
      <div className="cr-panel">
        <div className="cr-panel-score">
          <span className="cr-score">{rating}</span>
          <span>
            <Stars rating={stats.rating} />
            <span className="cr-meta">
              <b>{stats.count}</b> Google reviews
            </span>
          </span>
        </div>
        <div className="cr-panel-offices">
          {stats.offices.map((office) => (
            <span className="cr-office" key={office.key}>
              <b>
                {formatRating(office.rating)} · {office.count}
              </b>
              {office.label}
            </span>
          ))}
        </div>
        <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
          Read them on Google →
        </a>
      </div>
    </>
  );
}
