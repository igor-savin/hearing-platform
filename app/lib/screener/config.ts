// Practice facts and launch switches for the hearing screener.
//
// Everything here is safe to ship to the browser: no secrets. Recipients and API
// keys are read from the environment on the server only (see lib/screener/mail.ts).
// To port the screener to the sister practice, this is the file that changes.

import { LOCATIONS } from "../../data/locations";

/** Route of the screener page. next.config.ts applies a strict CSP to this path. */
export const SCREENER_PATH = "/free-online-hearing-test/";

/** Stored with every lead so results can be compared across test versions. */
export const SCREENER_VERSION = "din-v1-2026-09";

/**
 * Stays false until a practice audiologist has reviewed the result bands, the
 * cutoffs in scoring.ts and the ear-difference threshold. While false:
 *  - the page is marked noindex,
 *  - the result screen, the PDF and the staff alert all say "PREVIEW".
 * Set NEXT_PUBLIC_SCREENER_CLINICAL_APPROVED=true in Vercel to remove the marker.
 */
export const CLINICAL_APPROVED = process.env.NEXT_PUBLIC_SCREENER_CLINICAL_APPROVED === "true";

/** Which generated voice to play: files in public/screener/audio are named <voice>-<digit>.wav. */
export const VOICE = "am_michael";

const sanMateo = LOCATIONS["san-mateo"];
const sanCarlos = LOCATIONS["san-carlos"];

export const PRACTICE = {
  key: "chc",
  name: "California Hearing Center",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.calhearing.com").replace(/\/$/, ""),
  phoneDisplay: sanMateo.phoneDisplay,
  phoneE164: sanMateo.phone,
  offices: [sanMateo, sanCarlos].map((o) => ({
    name: o.name,
    address: `${o.street}, ${o.locality}, ${o.region} ${o.postalCode}`,
    phoneDisplay: o.phoneDisplay,
  })),
  bookingPath: "/contact/",
  privacyPath: "/privacy-policy/",
  /** Shown as "Reviewed by ..." once a named Au.D. signs off. Empty = not shown. */
  reviewerLine: "",
  signature: "The team at California Hearing Center",
};

/**
 * PLACEHOLDER: manufacturer-neutral support levels. Igor to define how many there
 * are and what each means in plain words. The screener never names a brand or a
 * model; the audiologist decides what fits after an in-office evaluation.
 */
export const LEVELS = [
  { level: 1, note: "Essential: clear speech in quiet rooms and one-to-one talks." },
  { level: 2, note: "Everyday: adds help in small groups and light background noise." },
  { level: 3, note: "Advanced: more help in busy places." },
  { level: 4, note: "Premium: the most help in the hardest listening places." },
];

/** PLACEHOLDER: which levels to mention for each band. null = none suggested. */
export const BAND_LEVEL_RANGE: Record<"good" | "fair" | "poor" | "unreliable", [number, number] | null> = {
  good: null,
  fair: [1, 2],
  poor: [2, 4],
  unreliable: null,
};
