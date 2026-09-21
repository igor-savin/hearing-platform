import { officeReviewSeeds, type OfficeReviewSeed } from "@/lib/reviews";

/**
 * Live rating and review count from Google, with the hand-verified numbers in
 * lib/reviews.ts as the floor. Ported from the sister site, which has run this
 * since August 2026.
 *
 * WHY: the counts used to be typed into lib/reviews.ts by hand, so the site said
 * 486 reviews for months while Google kept adding them, and an AI agent reading
 * the page in September 2026 came away with a number nobody recognised. The
 * design goal is that the site is never *wrong* — only, at worst, slightly
 * stale. Every failure path (no API key, network error, Google returning the
 * wrong business, a zero count) falls back to the seed for that office rather
 * than rendering a blank or a guess.
 *
 * Without GOOGLE_PLACES_API_KEY set this returns the seeds and the site behaves
 * exactly as it does today. Set the key in Vercel and it refreshes on its own.
 */

export type OfficeStats = {
  key: string;
  label: string;
  rating: number;
  count: number;
  live: boolean;
};

export type ReviewStats = {
  /** Review-count-weighted mean across the offices, to one decimal. */
  rating: number;
  /** Total reviews across the offices. */
  count: number;
  offices: OfficeStats[];
  /** True only when every office resolved from Google this build. */
  live: boolean;
};

const ENDPOINT = "https://places.googleapis.com/v1/places:searchText";

// Six hours. Two offices → 8 requests a day, far inside the free tier. Ratings
// move slowly; there is nothing to gain from polling harder.
const REVALIDATE_SECONDS = 60 * 60 * 6;

function seedFor(office: OfficeReviewSeed): OfficeStats {
  return { key: office.key, label: office.label, rating: office.rating, count: office.count, live: false };
}

function combine(offices: OfficeStats[]): ReviewStats {
  const count = offices.reduce((total, o) => total + o.count, 0);
  const weighted = count ? offices.reduce((sum, o) => sum + o.rating * o.count, 0) / count : 0;
  return {
    rating: Math.round(weighted * 10) / 10,
    count,
    offices,
    live: offices.length > 0 && offices.every((o) => o.live)
  };
}

async function fetchOffice(office: OfficeReviewSeed, apiKey: string): Promise<OfficeStats> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.rating,places.userRatingCount,places.formattedAddress"
    },
    body: JSON.stringify({ textQuery: office.query, maxResultCount: 1 }),
    next: { revalidate: REVALIDATE_SECONDS }
  });

  if (!response.ok) {
    console.warn(`[reviewStats] ${office.key}: Google returned ${response.status}; using seed`);
    return seedFor(office);
  }

  const place = (await response.json())?.places?.[0];
  if (!place) {
    console.warn(`[reviewStats] ${office.key}: no place matched the query; using seed`);
    return seedFor(office);
  }

  // Guard against a text search drifting onto the other office or a neighbouring
  // business — the failure mode that would put a plausible wrong number on the
  // page. If the street number is missing from the address Google returned, the
  // rest of the response is not trusted.
  if (!String(place.formattedAddress ?? "").includes(office.expectStreetNumber)) {
    console.warn(
      `[reviewStats] ${office.key}: matched "${place.formattedAddress}", which is not ` +
        `${office.expectStreetNumber}; using seed`
    );
    return seedFor(office);
  }

  const rating = Number(place.rating);
  const count = Number(place.userRatingCount);
  if (!Number.isFinite(rating) || !Number.isFinite(count) || count <= 0) {
    console.warn(`[reviewStats] ${office.key}: unusable rating/count; using seed`);
    return seedFor(office);
  }

  return { key: office.key, label: office.label, rating, count, live: true };
}

export async function getReviewStats(): Promise<ReviewStats> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return combine(officeReviewSeeds.map(seedFor));

  try {
    const offices = await Promise.all(officeReviewSeeds.map((office) => fetchOffice(office, apiKey)));
    return combine(offices);
  } catch (error) {
    console.warn("[reviewStats] Google Places lookup failed; using seed values", error);
    return combine(officeReviewSeeds.map(seedFor));
  }
}

/** "4.9" — trailing digit kept, because "5" reads like a count, not a rating. */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}
