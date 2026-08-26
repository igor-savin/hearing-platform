import type { RedFlag, VisitStep } from "./CareBlocks";

// Content for the care blocks, kept out of the component so it can be edited
// without touching layout, and out of corePages.ts so it is not duplicated
// across the 34 tinnitus pages that render it.

/**
 * The exceptions to "tinnitus is not an emergency". Every one of these is a
 * reason to be seen the same day rather than booked in for next week, and the
 * page has to say so before it says anything else.
 */
export const TINNITUS_RED_FLAGS: RedFlag[] = [
  {
    sign: "It started suddenly, in one ear, with a drop in hearing",
    why: "Sudden sensorineural hearing loss is treated as a medical emergency. The treatment window is measured in days, and outcomes are better the earlier it starts.",
  },
  {
    sign: "It pulses in time with your heartbeat",
    why: "Pulsatile tinnitus can have a vascular cause, which needs a physician rather than an audiologist. It is usually benign, and it still needs to be looked at.",
  },
  {
    sign: "It came with dizziness, vertigo or a facial droop",
    why: "That combination points at the balance system or the facial nerve, not at the ear alone.",
  },
  {
    sign: "It followed a head injury, a blast, or a sudden very loud noise",
    why: "Acoustic trauma and head injury both change what should be tested and how quickly.",
  },
  {
    sign: "It is in one ear only and has not settled",
    why: "One-sided tinnitus is worth ruling things out for, even when the hearing test looks normal.",
  },
];

export const TINNITUS_VISIT_STEPS: VisitStep[] = [
  {
    title: "We take the history first",
    minutes: "15 min",
    text: "When it started, whether it is one ear or both, what it sounds like, what makes it worse, and what it is stopping you doing. Sleep and concentration matter here as much as the sound itself.",
  },
  {
    title: "A full diagnostic hearing evaluation",
    minutes: "30 min",
    text: "Air and bone thresholds, speech testing, and middle-ear measures. Most tinnitus sits on top of a hearing loss, and the shape of that loss changes what will help.",
  },
  {
    title: "Pitch and loudness matching, where it is useful",
    minutes: "10 min",
    text: "We find the frequency and level your tinnitus most closely matches. It is not a severity score. It is a starting point for sound therapy and a way to track change.",
  },
  {
    title: "We go through what we found, the same visit",
    minutes: "20 min",
    text: "What is causing it if we can tell, what it is not, and which of the options actually apply to you: amplification, sound therapy, tinnitus retraining, Lenire, or a referral.",
  },
  {
    title: "A plan you leave with",
    text: "Written down, with the next appointment booked if you need one. Habituation is a course of care over months, not a device you are handed at the door.",
  },
];

export const TINNITUS_LEAD_CLINICIAN = {
  slug: "emily-mcmahan",
  name: "Dr. Emily McMahan",
  credential: "AuD",
  line: "Leads tinnitus care at both offices, and is nationally recognised for tinnitus management and telehealth audiology.",
  image: "/assets/team/thumb/emily-mcmahan.webp",
};

/**
 * Pages where the audiogram figure earns its place: the ones that describe
 * what a hearing test measures or what a particular loss does to speech.
 * Deliberately a short list — a diagram that appears everywhere stops being
 * information and becomes wallpaper.
 */
export const AUDIOGRAM_PAGES = new Set<string>([
  "/hearing-testing/",
  "/services/hearing-testing/",
  "/understanding-hearing-loss-at-4000-hz/",
  "/what-is-word-recognition-score-wrs/",
  "/a-patients-journey-to-better-hearing/",
  "/how-do-i-read-my-audiogram/",
  "/types-of-hearing-loss/",
]);
