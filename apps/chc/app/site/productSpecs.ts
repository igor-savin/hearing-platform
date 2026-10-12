import type { SpecRow } from "./CareBlocks";

// The numbers behind the comparison tables.
//
// Every cell here comes from marketing/_skill/product-launch/references/
// competitor-facts.md — the practice's fact-checked reference, re-verified on
// 24 August 2026 — or from the body copy of the page the table appears on.
// Nothing is filled in from memory, from a manufacturer's press release, or
// from a retailer blog. Where a figure has not been published anywhere we can
// source, the field is null and the table prints an em dash, because "we do
// not know" is a true statement and a plausible-looking guess is not.
//
// Three figures are deliberately absent and should stay absent:
//   · the "53× more processing power" claim for Phonak Infinio — retailer
//     blogs only, and the reference bans printing it;
//   · "highest recorded speech-in-noise score" — true of an older HearAdvisor
//     page, not supportable now, and corrected off three live CHC pages;
//   · Starkey Omega AI's HearAdvisor sub-scores — sources contradicted each
//     other and only the grade and rank were stable.

/** Speech-in-noise average across every prescription device HearAdvisor has
 *  tested. Stated in the footnote because a bare "5.0 out of 5" tells a reader
 *  nothing about whether that is ordinary or exceptional. */
export const HEARADVISOR_CATEGORY_AVERAGE = "1.96 out of 5";

/** Size of HearAdvisor's tested set, which is what every "#n" here ranks within. */
export const HEARADVISOR_TESTED_COUNT = 36;

/** The day competitor-facts.md was last re-verified. Printed in every footnote
 *  so a reader can judge how stale the table is without asking us. */
export const FACTS_CHECKED = "24 August 2026";

/**
 * The value used wherever a source positively confirms that nobody outside the
 * manufacturer has measured a device. Compared by identity when the footnote
 * lists which devices have no independent measurement, so the cell and the
 * footnote cannot drift apart. It is not the same as null: null means we could
 * not find out either way, which is true of Oticon Intent.
 */
export const NOT_TESTED = "Not tested by any independent laboratory";

export type DeviceSpec = {
  /** Column heading — the model name as its manufacturer writes it. */
  name: string;
  released: string | null;
  styles: string | null;
  /** HearAdvisor grade and rank, or NOT_TESTED. */
  measured: string | null;
  /** Tuned speech-in-noise score, with the initial-fit score in brackets where
   *  the source gives both — that gap is the argument for real-ear measurement. */
  speechInNoise: string | null;
  telecoil: string | null;
  auracast: string | null;
  tinnitus: string | null;
  power: string | null;
  ipRating: string | null;
  price: string | null;
};

/**
 * One record per platform the comparison pages actually compare. Keyed by the
 * slug the site already uses for that model so a page path can find its record
 * without a second naming scheme to keep in sync.
 */
export const DEVICE_SPECS: Record<string, DeviceSpec> = {
  "oticon-reveal": {
    name: "Oticon Reveal",
    released: "Announced 11 Aug 2026, orderable 24 Aug 2026",
    styles: "miniRITE R only, plus a CROS transmitter",
    measured: NOT_TESTED,
    speechInNoise: null,
    telecoil: "Yes, from launch day",
    auracast: "Yes, working from launch day",
    tinnitus: "Tinnitus SoundSupport, all four tiers",
    power: "Rechargeable only",
    ipRating: "IP68",
    price: "Not published at any tier",
  },
  "oticon-intent": {
    name: "Oticon Intent",
    released: "February 2024",
    styles: "Includes a miniBTE R behind-the-ear model",
    // No source we have says Intent has or has not been measured, so this is
    // null rather than NOT_TESTED. The two must not be conflated.
    measured: null,
    speechInNoise: null,
    telecoil: "Yes",
    auracast: "Yes",
    tinnitus: "Tinnitus SoundSupport",
    power: "Rechargeable",
    ipRating: "IP68",
    price: null,
  },
  "phonak-eon": {
    name: "Phonak EON",
    released: "24 Aug 2026 (US same day; UK, Germany, France, Australia Sept 2026)",
    styles: "RIC only — Audéo EON Sphere, Audéo EON R, CROS EON",
    measured: NOT_TESTED,
    speechInNoise: null,
    telecoil: "None, on any model",
    auracast: "Yes, working from launch day",
    tinnitus: "Not mentioned in the launch materials",
    power: "Rechargeable only, up to 38 h",
    ipRating: "Not stated in the launch materials",
    price: "Not published at any tier",
  },
  "phonak-infinio-ultra-sphere": {
    name: "Phonak Audéo Infinio Ultra Sphere",
    released: "22 October 2025",
    styles: "RIC, rechargeable only",
    measured: `Grade A, #2 of ${HEARADVISOR_TESTED_COUNT} (SoundScore 4.9/5)`,
    speechInNoise: "5.0 / 5 (3.1 at the manufacturer's initial fit)",
    telecoil: "None",
    auracast: "Not enabled",
    tinnitus: "Tinnitus Balance",
    power: "Rechargeable, up to 56 h; roughly 10–11 h with the DNN running continuously",
    ipRating: "IP68",
    price: null,
  },
  "signia-max": {
    name: "Signia MaX",
    released: "24 August 2026",
    styles: "RIC only — Pure Charge&Go MaX; no CROS on the platform",
    measured: NOT_TESTED,
    speechInNoise: null,
    telecoil: "Yes, in every standard device (OneConnect)",
    // The single fact this whole table exists to make visible: prose buries it,
    // a column shows it next to a competitor's "working today".
    auracast: "Hardware only until a firmware update Signia has scheduled for March 2027",
    tinnitus: "Not mentioned in the launch materials",
    power: "Rechargeable only; total runtime per charge not published",
    ipRating: "Not stated in the launch materials",
    price: "Not published at any tier",
  },
  "signia-ix": {
    name: "Signia IX",
    released: "3 October 2023",
    styles:
      "Pure, BCT, Silk, Styletto, Motion M/P/SP, Active, Active Mini, Insio IIC–ITE, CROS on several",
    measured: "4.4/5 for the Pure Charge&Go BCT IX; Active Pro IX in the top 5% of everything tested",
    speechInNoise: null,
    telecoil: "Yes, on the BCT variant",
    auracast: "No",
    tinnitus: "Notch Therapy plus static and ocean-wave signals, standard",
    power: "Rechargeable",
    ipRating: null,
    price: null,
  },
  "starkey-omega-ai": {
    name: "Starkey Omega AI",
    released: "9 October 2025",
    styles: "RIC rechargeable, RIC on size 312, custom ITE/ITC/CIC, CIC on 312",
    measured: `Grade A, #2 of ${HEARADVISOR_TESTED_COUNT}`,
    // Left null on purpose. The grade and rank were stable across sources; the
    // sub-scores were not, and the reference forbids printing them.
    speechInNoise: null,
    telecoil: "On the RIC RT and some in-the-ear styles, not across the line",
    auracast: "Yes, shipping",
    tinnitus: null,
    power: "Rechargeable, or size 312 disposable",
    ipRating: null,
    price: null,
  },
  "widex-allure": {
    name: "Widex Allure",
    released: null,
    styles: "RIC, BTE, and a rechargeable custom ITE added December 2025",
    measured: `Grade A, #7 of ${HEARADVISOR_TESTED_COUNT} (RIC 440)`,
    speechInNoise: "2.5 / 5 (2.9 at the manufacturer's initial fit)",
    telecoil: "Yes",
    auracast: "Pending a Widex software update during 2026",
    // The reference calls this usually decisive for both practices, and it is
    // the row a reader scanning for a dealbreaker will find fastest.
    tinnitus: "None — Zen is Moment-only",
    power: "Rechargeable only, about 25 h RIC and 23 h custom",
    ipRating: "IP68",
    price: null,
  },
  "resound-vivia": {
    name: "ReSound Vivia",
    released: "February 2025",
    styles: null,
    measured: `Grade B, #20 of ${HEARADVISOR_TESTED_COUNT}`,
    speechInNoise: "1.3 / 5 (0.6 at the manufacturer's initial fit)",
    telecoil: null,
    auracast: "Yes",
    tinnitus: null,
    power: "Rechargeable",
    ipRating: null,
    price: null,
  },
  "resound-sensia": {
    name: "ReSound Sensia",
    released: "20 August 2026 (US)",
    styles:
      "Rechargeable microRIE, RIE on size 312 and 13, custom CIC/ITC/ITE, CROS and bimodal",
    measured: NOT_TESTED,
    speechInNoise: null,
    telecoil: "Selected models only",
    auracast: "Yes, working from launch",
    tinnitus: "Sound generator with broadband and six nature and ocean variants, plus the Relief app",
    power: "Rechargeable, or size 312 / 13 disposable",
    ipRating: "IP68",
    price: null,
  },
};

type SpecField = Exclude<keyof DeviceSpec, "name">;

/**
 * Row order, top to bottom. It runs from what the device is (date, styles),
 * through what somebody outside the manufacturer measured, to the four things
 * that most often decide a fitting in this practice — loops, broadcast audio,
 * tinnitus and batteries — and ends on price.
 *
 * The notes are only on the rows where the number invites a specific
 * misreading: a laboratory score read as a promise about a restaurant, a
 * hardware capability read as a working feature, and two battery maxima
 * measured under different feature sets read as comparable.
 */
const SPEC_ROWS: { label: string; field: SpecField; note?: string }[] = [
  { label: "Released", field: "released" },
  { label: "Styles", field: "styles" },
  { label: "Independent measurement", field: "measured" },
  {
    label: "Speech in noise, tuned",
    field: "speechInNoise",
    note: "A laboratory score at a tuned fitting, not a forecast of any particular restaurant.",
  },
  { label: "Telecoil", field: "telecoil" },
  {
    label: "Auracast",
    field: "auracast",
    note: "Hardware that supports Auracast and Auracast that works are not the same thing.",
  },
  { label: "Tinnitus programme", field: "tinnitus" },
  {
    label: "Rechargeable / battery",
    field: "power",
    note: "Quoted hours are manufacturer maxima measured under different feature sets, so two headline numbers rarely compare directly.",
  },
  { label: "IP rating", field: "ipRating" },
  { label: "Published price", field: "price" },
];

/**
 * Which record belongs on which page. Keying off the path rather than parsing
 * the slug means a comparison we have not built a record for renders nothing
 * at all, instead of half a table. The comparison pages take two columns; the
 * individual product pages take one.
 */
export const PAGE_SPEC_PAIRS: Record<string, readonly string[]> = {
  // Comparison pages.
  "/products/hearing-aids-by-brand/oticon/oticon-reveal-vs-oticon-intent/": ["oticon-reveal", "oticon-intent"],
  "/products/hearing-aids-by-brand/oticon/oticon-reveal-vs-phonak-sphere-infinio/": ["oticon-reveal", "phonak-infinio-ultra-sphere"],
  "/products/hearing-aids-by-brand/oticon/oticon-reveal-vs-resound-sensia/": ["oticon-reveal", "resound-sensia"],
  "/products/hearing-aids-by-brand/oticon/oticon-reveal-vs-starkey-omega-ai/": ["oticon-reveal", "starkey-omega-ai"],
  "/products/hearing-aids-by-brand/oticon/oticon-reveal-vs-widex-allure/": ["oticon-reveal", "widex-allure"],
  "/products/hearing-aids-by-brand/phonak/phonak-eon-vs-phonak-infinio/": ["phonak-eon", "phonak-infinio-ultra-sphere"],
  "/products/hearing-aids-by-brand/phonak/phonak-eon-vs-signia-max/": ["phonak-eon", "signia-max"],
  "/products/hearing-aids-by-brand/signia/signia-max-vs-oticon-reveal/": ["signia-max", "oticon-reveal"],
  "/products/hearing-aids-by-brand/signia/signia-max-vs-signia-ix/": ["signia-max", "signia-ix"],

  // Individual product pages, one column. Starkey Omega AI and ReSound Sensia
  // have no product page of their own yet; the stale starkey-edge-ai and
  // resound-vivia pages are a generation behind and are not given an Omega or
  // Sensia table, because that would state something the page does not.
  "/products/hearing-aids-by-brand/oticon/oticon-reveal/": ["oticon-reveal"],
  "/products/hearing-aids-by-brand/oticon/oticon-intent/": ["oticon-intent"],
  "/products/hearing-aids-by-brand/phonak/phonak-eon/": ["phonak-eon"],
  "/products/hearing-aids-by-brand/phonak/phonak-infinio/": ["phonak-infinio-ultra-sphere"],
  "/products/hearing-aids-by-brand/signia/signia-max/": ["signia-max"],
  "/products/hearing-aids-by-brand/signia/signia-ix/": ["signia-ix"],
  "/products/hearing-aids-by-brand/widex/widex-allure/": ["widex-allure"],
  "/products/hearing-aids-by-brand/resound/resound-vivia/": ["resound-vivia"],
};

export type SpecTableData = {
  caption: string;
  columns: string[];
  rows: SpecRow[];
  footnote: string;
};

/** "A", "A and B", "A, B and C" — a footnote reads worse with a bare list. */
function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function caption(devices: DeviceSpec[]): string {
  const subject =
    devices.length > 1
      ? `${joinNames(devices.map((d) => d.name))}, side by side`
      : `${devices[0].name}, in summary`;
  return `${subject}. Compiled by our audiologists from HearAdvisor's independent laboratory results and each manufacturer's own published specifications — not from either company's marketing claims.`;
}

function footnote(devices: DeviceSpec[]): string {
  const parts: string[] = [
    `HearAdvisor's speech-in-noise scores are laboratory measurements, and a rank is a place among the ${HEARADVISOR_TESTED_COUNT} prescription hearing aids it has tested. The average speech-in-noise score across those ${HEARADVISOR_TESTED_COUNT} is ${HEARADVISOR_CATEGORY_AVERAGE}.`,
  ];

  const untested = devices.filter((d) => d.measured === NOT_TESTED).map((d) => d.name);
  if (untested.length) {
    parts.push(
      `${joinNames(untested)} ${untested.length > 1 ? "have" : "has"} no independent measurement at all: no laboratory outside the manufacturer has published anything on ${untested.length > 1 ? "either" : "it"}.`,
    );
  }

  // Named rather than silently blank, so the empty cell reads as a decision.
  if (devices.some((d) => d.name === DEVICE_SPECS["starkey-omega-ai"].name)) {
    parts.push(
      "Starkey Omega AI's individual sub-scores are left out deliberately: our sources disagreed on them and only the grade and rank were stable enough to print.",
    );
  }

  parts.push(
    `An em dash means the figure is not published anywhere we can source it, which is not the same as zero. All figures re-checked ${FACTS_CHECKED}; ask us if you are reading this much later.`,
  );

  return parts.join(" ");
}

/**
 * The table for a page, or null if the page has no spec pair — which is most
 * of the site, and is why this is a lookup rather than a guess from the slug.
 *
 * Rows where more than half the cells would be empty are dropped: a row of em
 * dashes is not a summary, it is noise. The row survives in SPEC_ROWS so it
 * reappears the moment a manufacturer publishes the figure.
 */
export function specTableFor(path: string): SpecTableData | null {
  const ids = PAGE_SPEC_PAIRS[path];
  if (!ids) return null;

  const devices = ids.map((id) => DEVICE_SPECS[id]).filter(Boolean);
  if (!devices.length) return null;

  const rows: SpecRow[] = SPEC_ROWS.map(({ label, field, note }) => ({
    label,
    values: devices.map((d) => d[field]),
    note,
  })).filter((row) => row.values.filter((v) => v != null).length * 2 >= row.values.length);

  if (!rows.length) return null;

  return {
    caption: caption(devices),
    columns: devices.map((d) => d.name),
    rows,
    footnote: footnote(devices),
  };
}
