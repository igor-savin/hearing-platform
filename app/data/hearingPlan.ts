// The Hearing Plan: every word the page says, in one place.
//
// WHY ONE FILE. The page, the printable sheets and (later) the PDF and the emails
// must say the same thing. They all read from here. Change a fact once.
//
// CLINICAL REVIEW. Anything marked `review: true` is a claim an audiologist must
// confirm before the page is indexed. The review sheet is written from these
// flags. Until REVIEWED_BY is filled in, the page is noindex and the sitemap
// leaves it out (see app/site/HearingPlanPage.tsx and app/sitemap.ts).
//
// RULES FOR EDITING (same spirit as app/site/PracticeFactsPage.tsx):
//  1. Plain words. Short sentences. No scare language. No "best" or "leading".
//  2. Never name a brand or a model. Never say which level of technology a
//     person needs. Only an evaluation can say that.
//  3. Every price carries an "as of" date. Change PRICES_AS_OF when you re-check.
//  4. Nothing here may say what a screening result means for treatment.
//  5. Facts about the practice come from the rest of the site, not from memory.

export const PLAN_PATH = "/hearing-plan/";
export const PLAN_TITLE = "Hearing Aid Buyer's Guide for Any Audiologist | California Hearing Center";
export const PLAN_DESC =
  "A free, plain guide to use with any audiologist or hearing aid provider: what a good first visit includes, what hearing aids cost, and how to check any quote. No sign-up. Checklists you can print.";

/** Day the words on this page were last checked. */
export const PLAN_REVIEWED = "October 6, 2026";
/** Month the next full check is due. */
export const PLAN_NEXT_REVIEW = "January 2027";
/** Month the price ranges were last checked against the cost page. */
export const PRICES_AS_OF = "October 2026";

/**
 * The audiologist who reviewed the clinical content, e.g. "Dr. Name, AuD".
 * Empty means NOT reviewed: the page stays noindex and shows a review notice.
 * Set NEXT_PUBLIC_HEARING_PLAN_REVIEWED=true in Vercel on the day the reviewer
 * signs off, and fill in the two constants below in the same commit.
 */
export const REVIEWED_BY = "";
export const REVIEWED_ON = "";

export type Area = "warning-signs" | "first-visit" | "costs" | "quote" | "questions" | "wording";

/** One line of content that may need clinical sign-off. */
export type Claim = {
  id: string;
  text: string;
  /** True when an audiologist must confirm this line. */
  review?: boolean;
  /** Where the fact already lives on the site or in the literature. */
  source?: string;
};

// ---------------------------------------------------------------------------
// Start here: the four doors
// ---------------------------------------------------------------------------

export type Who = "me" | "loved" | "quote" | "learning";

export const WHO_OPTIONS: { id: Who; label: string }[] = [
  { id: "me", label: "For me" },
  { id: "loved", label: "For someone I love" },
  { id: "quote", label: "I have a quote" },
  { id: "learning", label: "I am just learning" },
];

export const START_HERE: Record<Who, { heading: string; steps: { text: string; href: string }[] }> = {
  me: {
    heading: "If this is for you",
    steps: [
      { text: "Read the warning signs. They come first.", href: "#doctor-first" },
      { text: "Pick the three places where you most want to hear well.", href: "#goals" },
      { text: "Know what a good first visit includes.", href: "#first-visit" },
      { text: "Book a visit, or ask for a free second opinion.", href: "#next-steps" },
    ],
  },
  loved: {
    heading: "If this is for someone you love",
    steps: [
      { text: "Read how to start the talk, and share this page.", href: "#share" },
      { text: "Know the warning signs that mean a doctor first.", href: "#doctor-first" },
      { text: "Offer to come along to the visit.", href: "#first-visit" },
      { text: "Learn what hearing aids cost, so there are no surprises.", href: "#costs" },
    ],
  },
  quote: {
    heading: "If you have a quote",
    steps: [
      { text: "Check what your quote includes.", href: "#quote-check" },
      { text: "See what a fair price should cover.", href: "#costs" },
      { text: "Bring the quote for a free second opinion.", href: "#next-steps" },
    ],
  },
  learning: {
    heading: "If you are just learning",
    steps: [
      { text: "See what a good first visit includes.", href: "#first-visit" },
      { text: "See what hearing aids cost, and why.", href: "#costs" },
      { text: "Read the ten questions to ask any provider.", href: "#questions" },
    ],
  },
};

// ---------------------------------------------------------------------------
// 1. Doctor first (warning signs)
// ---------------------------------------------------------------------------

export const WARNING_SIGNS = {
  heading: "See a doctor first if any of these is true",
  intro:
    "Most hearing change builds slowly. The signs below are different. They need a doctor, or an urgent visit, before anyone talks about hearing aids.",
  items: [
    {
      id: "ws-sudden",
      text: "Your hearing dropped suddenly in one ear or both, over a few hours or a few days.",
      review: true,
    },
    { id: "ws-one-ear", text: "One ear hears much worse than the other.", review: true },
    { id: "ws-pain", text: "You have ear pain, drainage, or bleeding from an ear.", review: true },
    { id: "ws-dizzy", text: "You feel dizzy, or the room spins.", review: true },
    { id: "ws-tinnitus", text: "You hear ringing or a heartbeat sound in one ear only.", review: true },
    { id: "ws-injury", text: "Your hearing changed after a head injury or a very loud blast.", review: true },
  ] as Claim[],
  action: {
    text: "If any of these is true, call us today, or see a doctor today. Do not wait for it to come back.",
    review: true,
  } as Claim,
  emergency: {
    text: "Call 911 if hearing change comes with sudden weakness, a drooping face, trouble speaking, or severe dizziness.",
    review: true,
  } as Claim,
  wax: "Earwax can also block hearing. We can look in your ears and clear it.",
};

// ---------------------------------------------------------------------------
// 2. A fair first visit
// ---------------------------------------------------------------------------

export const FIRST_VISIT = {
  heading: "What a good first visit includes",
  intro: "A first visit at California Hearing Center takes about one hour. A fair visit has these parts, wherever you go.",
  steps: [
    { id: "fv-talk", text: "A talk about your hearing, your health, and the places where listening is hard.", review: true },
    { id: "fv-look", text: "A look in your ears for earwax or other problems.", review: true },
    { id: "fv-test", text: "A full hearing test. You hear tones and words in a quiet room.", review: true },
    { id: "fv-explain", text: "Your results, explained in plain words at the same visit, with a copy for you.", review: true },
    {
      id: "fv-plan",
      text: "A clear plan. If hearing aids can help, you hear your options. If they cannot, you hear that too.",
      review: true,
    },
  ] as Claim[],
  ifAids: {
    heading: "If you choose hearing aids",
    steps: [
      {
        id: "fv-rem",
        text: "Real-ear measurement at the fitting. A small probe microphone in your ear canal checks the sound the hearing aid delivers.",
        review: true,
        source: "app/site/PracticeFactsPage.tsx, services",
      },
      {
        id: "fv-follow",
        text: "Follow-up visits to adjust the settings as your brain adapts.",
        review: true,
      },
      {
        id: "fv-trial",
        text: "A written trial period. At California Hearing Center the trial is 45 days, with no restocking fee.",
        review: true,
        source: "Igor, Sept 2026; Practice Facts page",
      },
    ] as Claim[],
  },
};

// ---------------------------------------------------------------------------
// 3. Costs and evidence
// ---------------------------------------------------------------------------

export const COSTS = {
  heading: "What hearing aids cost",
  intro:
    "Prescription hearing aids cost about $1,000 to more than $4,000 for each device. These are typical U.S. market ranges, not a quote. Your own price depends on your evaluation.",
  /** Same ranges as app/data/corePages.ts, hearing-aid-cost. */
  ranges: [
    { level: "Entry level", range: "About $1,000 to $2,000" },
    { level: "Mid range", range: "About $2,000 to $3,000" },
    { level: "Premium", range: "About $3,000 to $4,000 or more" },
  ],
  rangesNote: "Prices are per device. A pair often costs between about $4,000 and $8,000.",
  higherTiers:
    "Higher tiers add more sound processing for hard places, such as a busy restaurant. In a quiet one-to-one talk, they add little.",
  evidenceHeading: "What the evidence says",
  evidence: [
    {
      id: "ev-wu",
      text: "In 2025, Wu and colleagues compared hearing aids that cost about $4,400 with hearing aids that cost about $1,100. They studied 245 adults. They found no significant difference in outcome. (JAMA Otolaryngology)",
      review: true,
      source: "app/data/corePages.ts, hearing-aid-cost",
    },
    {
      id: "ev-humes",
      text: "Humes and colleagues reached the same finding in 2017. (American Journal of Audiology)",
      review: true,
      source: "app/data/corePages.ts, hearing-aid-cost",
    },
    {
      id: "ev-fit",
      text: "In these studies, how well the hearing aids were fitted mattered more than what they cost.",
      review: true,
    },
  ] as Claim[],
  includedHeading: "What a fair price includes",
  included: [
    "The fitting and programming",
    "Real-ear measurement, to check the settings in your ear",
    "Follow-up visits to adjust the settings",
    "Cleanings and routine maintenance",
    "The manufacturer warranty",
    "Coaching on how to get the most from your hearing aids",
  ],
  bundling:
    "Some providers bundle the devices and all services into one price. Others list each item. A list can look cheaper at first and cost more over the years of follow-up. Ask what is and is not included, so you compare the same things.",
  otc:
    "Over-the-counter hearing aids typically cost about $200 to $1,000. They are made for adults with mild to moderate hearing loss they notice themselves. You set them up yourself, with no testing or follow-up visits. Prescription hearing aids cost more because they include the evaluation, the programming and the care.",
  payingHeading: "Ways people pay",
  paying: [
    "Insurance. Some plans pay part of the cost. We check your benefits for you. We cannot promise what a plan will pay. Original Medicare generally does not cover hearing aids. Some Medicare Advantage and private plans do.",
    "Financing. CareCredit spreads the cost into monthly payments.",
    "HSA and FSA. Hearing aids are typically an eligible expense.",
  ],
  links: [
    { text: "Hearing aid cost, in full", href: "/hearing-aid-cost/" },
    { text: "Insurance and Medicare", href: "/resources/insurance/" },
    { text: "Financing", href: "/hearing-aid-financing/" },
  ],
};

// ---------------------------------------------------------------------------
// 4. My hearing goals
// ---------------------------------------------------------------------------

export const GOALS = {
  heading: "My hearing goals",
  intro:
    "Hearing aids work best when they are set for your life. Pick up to three places where you most want to hear well. Print the sheet and bring it to any visit.",
  max: 3,
  options: [
    { id: "family", label: "Family dinners and group talks" },
    { id: "restaurants", label: "Restaurants and busy places" },
    { id: "tv", label: "TV and streaming" },
    { id: "phone", label: "Phone and video calls" },
    { id: "work", label: "Meetings and work" },
    { id: "grandchildren", label: "Hearing my grandchildren" },
    { id: "outside", label: "Walking, driving and talking outside" },
    { id: "events", label: "Church, theater and talks" },
  ],
  noteLabel: "Anything else you want your audiologist to know?",
  sheetTitle: "My hearing goals",
  sheetFooter: "Bring this sheet to your visit. It is yours. It is not stored anywhere.",
};

// ---------------------------------------------------------------------------
// 5. Quote Check
// ---------------------------------------------------------------------------

export const QUOTE_CHECK = {
  heading: "Quote Check",
  intro:
    "A fair quote is easy to compare. Tick what your quote lists. We show what is missing and what to ask. We never judge a brand or a price. Nothing you tick leaves your device.",
  items: [
    {
      id: "q-price",
      label: "The price for each hearing aid and for the pair, with every fee",
      ask: "What is the total price for the pair, with tax and every fee?",
    },
    {
      id: "q-model",
      label: "The make, model and technology level, in writing",
      ask: "Please write the make, model and technology level on the quote.",
    },
    {
      id: "q-fitting",
      label: "The fitting and programming",
      ask: "Is the fitting included in the price?",
    },
    {
      id: "q-rem",
      label: "Real-ear measurement at the fitting",
      ask: "Will you measure the sound in my ear with a probe microphone when you fit them?",
    },
    {
      id: "q-follow",
      label: "Follow-up visits: how many, how long, and any fee",
      ask: "How many follow-up visits are included, and what happens after that?",
    },
    {
      id: "q-trial",
      label: "The trial period, and what it costs to return them",
      ask: "How many days do I have to try them, and is there a restocking fee?",
    },
    {
      id: "q-warranty",
      label: "The warranty length, and cover for loss and damage",
      ask: "How long is the warranty? Does it cover loss and damage?",
    },
    {
      id: "q-repair",
      label: "Cleanings and repairs after the warranty ends",
      ask: "What do cleanings and repairs cost after the warranty ends?",
    },
    {
      id: "q-extras",
      label: "Batteries or a charger, and any accessories",
      ask: "Does the price include the charger or batteries, and any accessories?",
    },
    {
      id: "q-who",
      label: "Who fits the hearing aids, and how to reach them between visits",
      ask: "Who will fit my hearing aids, and how do I reach someone between visits?",
    },
  ],
  sheetTitle: "Quote Check",
  sheetFooter:
    "Bring this sheet and your quote to any provider. At California Hearing Center, the second opinion on a quote is free, and you do not have to buy anything.",
  secondOpinion: { text: "Free second opinion on your quote", href: "/hearing-aid-second-opinion/" },
};

// ---------------------------------------------------------------------------
// 6. Ten questions to ask any provider
// ---------------------------------------------------------------------------

export const QUESTIONS = {
  heading: "Ten questions to ask any provider",
  intro: "Ask these at any practice, including ours. A good provider answers each one plainly.",
  items: [
    "Is the hearing test a full evaluation? Will you explain the results today?",
    "How will you check that the hearing aids are set correctly for my ears?",
    "What exactly does the price include?",
    "How many follow-up visits do I get, and for how long?",
    "How long is the trial, and what happens if I return the hearing aids?",
    "What does the warranty cover? Does it cover loss and damage?",
    "Why do you suggest this level of technology for the places where I listen?",
    "What are my other options, including a lower price?",
    "Who will I see each time? How do I reach someone between visits?",
    "What happens if I need a repair after the warranty ends?",
  ],
  sheetTitle: "Ten questions to ask any provider",
};

// ---------------------------------------------------------------------------
// 7. The optional check
// ---------------------------------------------------------------------------

export const CHECK = {
  heading: "Want to make this personal? Take the 3-minute check.",
  body:
    "The check is a short listening test on your phone or computer. You hear numbers in background noise. It shows whether a full hearing test is worth doing. It is a screening, not a diagnosis. You need headphones, a quiet room, and an email address for your report.",
  button: "Take the free hearing check",
  previewNote: "Preview. An audiologist has not yet approved the results.",
};

// ---------------------------------------------------------------------------
// 8. Share, and how to start the talk
// ---------------------------------------------------------------------------

export const SHARE = {
  heading: "Share this with someone you love",
  intro: "Most people take the first step because someone they love asked them to. Here are five ways to ask well.",
  tips: [
    "Pick a calm, private moment. Not a loud dinner.",
    "Say what you noticed. For example: \"I see you ask people to repeat things at dinner.\"",
    "Ask. Do not tell. For example: \"Would you want to get your hearing checked?\"",
    "Offer to come along. Many people feel braver with someone beside them.",
    "Give it time. A first \"no\" is common. Try again in a few weeks.",
  ],
  message:
    "I found a plain guide to getting your hearing checked. It shows what a good visit includes, what hearing aids cost, and a checklist to compare any quote. There is no sign-up and no pressure. I thought it might help.",
  subject: "A guide I thought might help",
};

// ---------------------------------------------------------------------------
// 9. Next steps, and how this page was made
// ---------------------------------------------------------------------------

export const NEXT_STEPS = {
  heading: "Next steps",
  intro: "Pick the one that fits. You do not need a referral for most visits.",
  secondOpinionLine: "Have a quote? Bring it and your hearing test results. We tell you if it matches your hearing and what it includes. It is free, and you do not have to buy anything.",
};

export const METHOD = {
  heading: "How this plan was made",
  points: [
    "We do not name hearing aid brands or models here. We fit hearing aids from several manufacturers.",
    "Prices are typical U.S. market ranges as of " + PRICES_AS_OF + ". We check them every three months.",
    "Nothing you tick or type on this page leaves your device. We do not store it.",
    "This plan is general information. It does not replace a hearing evaluation or a doctor's advice.",
  ],
};

/**
 * The page is public and indexed. It is a patient's guide to approaching any
 * provider, not a clinical protocol. Do not add a "Reviewed by" line unless a
 * named audiologist really signs off: fill in REVIEWED_BY and REVIEWED_ON.
 */
export const PLAN_INDEXABLE = true;

export const SCHEDULE_URL =
  "https://www.zocdoc.com/practice/california-hearing-and-research-institute-inc-72249";
