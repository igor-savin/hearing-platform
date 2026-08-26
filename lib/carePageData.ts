import type { RedFlag, SpecTableData, VisitStep } from "@/components/CareBlocks";

// Content for the care blocks, kept out of the components so it can be edited
// without touching layout, and out of lib/site.ts so it is not duplicated
// across the twelve tinnitus pages that render it.
//
// SOURCING RULE FOR THIS FILE: every clinical statement, credential and
// product figure below already exists somewhere in this repository, and the
// comment above each block says where. Nothing is written from memory. Where a
// number has not been published anywhere we can point at — appointment
// durations, most notably — the field is simply absent, because "we did not
// say" is true and a plausible-looking guess is not.

/**
 * The exceptions to "tinnitus is not an emergency". Every one of these is a
 * reason to be seen the same day rather than booked in for next week, and the
 * page has to say so before it says anything else.
 *
 * Sourced from this site's own safety copy: the standing warning line repeated
 * across lib/blogSeed.ts ("sudden hearing loss, severe dizziness, new
 * one-sided symptoms, drainage, significant ear pain, facial weakness, head
 * injury, or heartbeat-like tinnitus"), the SAFETY constant in
 * lib/hearingLoss.ts, the "When tinnitus deserves attention" section of
 * lib/tinnitus.ts, and the live /tinnitus-therapy copy in data/crawl.json
 * ("Tinnitus in one ear only, tinnitus that pulses with your heartbeat, a
 * sudden drop in hearing, or severe dizziness should be discussed with a
 * doctor promptly rather than held for a routine appointment").
 */
export const TINNITUS_RED_FLAGS: RedFlag[] = [
  {
    sign: "It started suddenly, in one ear, with a drop in hearing",
    why: "Sudden sensorineural hearing loss is treated as a medical urgency. Treatment works best when it begins within the first days, and waiting to see whether it comes back can reduce the chance of recovery."
  },
  {
    sign: "It pulses in time with your heartbeat",
    why: "Heartbeat-like tinnitus should be discussed with a doctor promptly rather than held for a routine appointment. It is often benign, and it still needs to be looked at."
  },
  {
    sign: "It came with severe dizziness, other neurological symptoms, or facial weakness",
    why: "That combination points beyond the ear alone, and it is a reason to seek medical guidance rather than schedule an audiology visit and wait."
  },
  {
    sign: "It followed a head injury or a sudden very loud noise",
    why: "Head injury and acoustic trauma both change what should be tested and how quickly."
  },
  {
    sign: "It is in one ear only and has not settled",
    why: "New one-sided symptoms are worth ruling things out for, even when the hearing test looks normal."
  }
];

/**
 * What a tinnitus appointment here actually involves.
 *
 * Steps are drawn from the tinnitus-management service in lib/howWeCanHelp.ts
 * (its `appointmentSteps`), the "/tinnitus-therapy" entry in that file's
 * `coreServiceDeepDives`, and the "How tinnitus is evaluated" section of
 * lib/tinnitus.ts.
 *
 * No step carries a duration. The practice publishes no appointment lengths
 * anywhere in this repository, and VisitStep.minutes is optional precisely so
 * that a timing can be added the day someone can source one.
 */
export const TINNITUS_VISIT_STEPS: VisitStep[] = [
  {
    title: "We take the history first",
    text: "When the sound started, what it sounds like, whether it is in one ear or both, what makes it better or worse, and how much it is affecting sleep, concentration, stress and daily life."
  },
  {
    title: "A hearing evaluation, because tinnitus rarely travels alone",
    text: "Tinnitus and hearing loss commonly occur together, even in patients who have not noticed any hearing difficulty. Testing may include a hearing evaluation, speech understanding, middle-ear measures and an ear inspection."
  },
  {
    title: "Tinnitus pitch or loudness matching, where it helps",
    text: "Some patients benefit from matching the frequency and level their tinnitus most closely resembles. It is not a severity score; it is a starting point for counseling and a way to track change."
  },
  {
    title: "We go through the findings in clear language",
    text: "What we found, what we did not, and which management options actually apply to you: education, sound strategies, hearing aids, maskers, treating an allergy or earwax that is making it worse, a Lenire candidacy conversation, or a medical referral."
  },
  {
    title: "A plan matched to your results and symptoms",
    text: "Recommendations are personalized rather than generic, and nobody here will promise you a cure. What the first visit does is establish whether hearing loss, earwax, noise exposure or a medication is part of the picture, and what can be done about the part that is treatable."
  }
];

/**
 * The footnote under the visit steps. This is the practice's strongest and
 * least-used tinnitus asset, and it is all on the live /tinnitus-therapy page
 * captured in data/crawl.json.
 */
export const TINNITUS_VISIT_FOOTNOTE =
  "Tinnitus care at the Harrison office runs alongside NYHD | TinnitusCare, who have been seeing patients there since February 2024 and whose options include Lenire, a bimodal neuromodulation device holding FDA De Novo authorization for the treatment of tinnitus. De Novo is a marketing authorization for a device type the FDA had not classified before — it is not a finding that the device will work for you, and candidacy is decided after an evaluation. Several of our audiologists are Certificate Holders of Tinnitus Management (CH-TM), recognized by the American Board of Audiology.";

/**
 * Who you will see. Dr. Ratner is the clinician whose recorded credentials
 * speak most directly to tinnitus — every clause below is from her entry in
 * lib/team.ts. The card deliberately does not claim she personally sees every
 * tinnitus patient, because nothing in this repository says that; the footnote
 * above carries the honest version, which is that several of the audiologists
 * hold the certificate.
 */
export const TINNITUS_LEAD_CLINICIAN = {
  slug: "jennifer-ratner",
  name: "Dr. Jennifer Ratner",
  credential: "Au.D.",
  line: "Partner and Doctor of Audiology, trained at Vanderbilt University School of Medicine. She is a Certificate Holder of Tinnitus Management (CH-TM) and a fellow of the Tinnitus Practitioners Association.",
  image: "/assets/duda/jen-ratner-img.jpg",
  imageAlt: "Jennifer Ratner, Au.D. - Doctor of Audiology - Audiology Associates of Westchester"
};

/**
 * Pages that carry the red-flag panel, the visit steps and the clinician card:
 * the tinnitus hub and nothing else. Checked against the live sitemap.
 *
 * The two service pages and the nine knowledge-hub topics are here because a
 * reader arriving on any of them is asking about their own tinnitus. The
 * tinnitus blog posts are not: they render through a different layout with
 * their own key-takeaways rail, and repeating the panel there would turn it
 * into wallpaper, which is the thing that stops people reading it.
 */
export const TINNITUS_CARE_PAGES = new Set<string>([
  "/tinnitus-therapy",
  "/how-we-can-help/tinnitus-management",
  "/how-we-can-help/lenire-for-tinnitus",
  "/how-we-can-help/tinnitus-management/what-is-tinnitus",
  "/how-we-can-help/tinnitus-management/causes-and-triggers",
  "/how-we-can-help/tinnitus-management/treatment-and-relief-options",
  "/how-we-can-help/tinnitus-management/pulsatile-tinnitus",
  "/how-we-can-help/tinnitus-management/one-ear",
  "/how-we-can-help/tinnitus-management/sudden-or-worsening-tinnitus",
  "/how-we-can-help/tinnitus-management/getting-louder",
  "/how-we-can-help/tinnitus-management/habituation",
  "/how-we-can-help/tinnitus-management/relief-exercises-and-sleep"
]);

/**
 * Pages where the audiogram figure earns its place: the ones that describe
 * what a hearing test measures, or what a particular loss does to speech.
 * Deliberately a short list — a diagram that appears everywhere stops being
 * information and becomes wallpaper. Every path here was checked against
 * /sitemap.xml.
 */
export const AUDIOGRAM_PAGES = new Set<string>([
  "/hearing-testing",
  "/how-we-can-help/comprehensive-hearing-assessments",
  "/understanding-hearing-loss-at-4000-hz",
  "/what-high-frequency-hearing-loss-sounds-like",
  "/hear-people-talking-not-understand-words"
]);

/**
 * The comparison tables.
 *
 * Across this site there was not a single <table>, while the product pages ran
 * to thousands of words of prose comparing two devices. This is the missing
 * element — but only where the comparison already exists in writing.
 *
 * There is exactly one such page today. Every cell below is a sentence from
 * the body copy of /hearing-aids-brands/signia/signia-max-vs-oticon-reveal in
 * lib/productGuides.ts, restated as a cell; nothing came from a manufacturer's
 * press release, a retailer blog, or memory. Where that page says a figure has
 * not been published, the cell is null and prints an em dash, because "nobody
 * has said" is a true statement and a plausible-looking guess is not.
 *
 * The other comparison pages — signia-max-vs-signia-ix, phonak-eon-vs-*, and
 * the cost guides — argue in prose about styles, fitting and evidence rather
 * than tabulating specifications, and lib/products.ts records no structured
 * spec fields at all. Adding rows for them would mean inventing the figures,
 * so they get no table until someone sources one.
 */
const SPEC_TABLES: Record<string, SpecTableData> = {
  "/hearing-aids-brands/signia/signia-max-vs-oticon-reveal": {
    caption: "Signia MaX and Oticon Reveal, on the published record",
    columns: ["Signia MaX", "Oticon Reveal"],
    rows: [
      {
        label: "Announced",
        values: ["24 August 2026", "11 August 2026"]
      },
      {
        label: "Styles at launch",
        note: "Ear shape, dexterity and degree of loss rule a form factor in or out before any feature comparison starts.",
        values: [
          "One receiver-in-canal model. The Signia IX range behind it still covers custom, instant-fit, slim, powerful and CROS fittings",
          "One receiver-in-canal form, with a CROS transmitter alongside"
        ]
      },
      {
        label: "Telecoil",
        note: "A loop is still what most theatres, halls and congregations around Westchester actually broadcast.",
        values: ["In the standard device, working today", "Working from the day it shipped"]
      },
      {
        label: "Auracast",
        note: "Broadcast audio in public venues — the feature both makers are promoting hardest right now.",
        values: [
          "Hardware present; Signia's own footnote puts full Auracast behind a firmware update due by March 2027",
          "Working from the day it shipped"
        ]
      },
      {
        label: "Tinnitus sound therapy",
        values: [
          "Not mentioned anywhere in the launch material. We expect Signia's notch therapy carries over from IX, and we will confirm it in the fitting software before telling a patient it is there",
          "Confirmed on every performance level"
        ]
      },
      {
        label: "Performance levels published",
        values: [null, "Four"]
      },
      {
        label: "Ingress rating for dust and water",
        values: [null, "IP68"]
      },
      {
        label: "Independent laboratory measurement",
        note: "Every figure in circulation for either device was produced by the company selling it.",
        values: ["None published", "None published"]
      }
    ],
    footnote:
      "Every cell is taken from this page's own account of the two launches, last checked 24 August 2026. An em dash means the manufacturer has published no figure — not that the feature is absent."
  }
};

/** The table for a page, or null, which is the answer for almost every page. */
export function specTableFor(path: string): SpecTableData | null {
  return SPEC_TABLES[path] ?? null;
}
