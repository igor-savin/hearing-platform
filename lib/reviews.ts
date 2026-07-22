import type { SitePage } from "@/lib/site";

const baseUrl = "https://www.audiologyassociates.org";

// Real reviews sourced from the practice's public Google Business Profile.
// Excerpts are verbatim (lightly de-typo'd, meaning unchanged); "…" marks a trim.
// Aggregate figures are shown as text and link to Google — we do NOT emit
// Review/AggregateRating structured data for third-party reviews, per Google's
// structured-data guidelines. First-party review collection would be needed for
// rich-result stars.

export const googleReviewsUrl =
  "https://www.google.com/maps/place/Audiology+Associates+of+Westchester/@40.9796102,-73.7452172,17z/data=!4m8!3m7!1s0x89c2941f220a4edf:0x3781801f76f64a38!9m1!1b1";

export const reviewAggregate = {
  rating: 4.9,
  count: 486,
  source: "Google"
};

// Review themes surfaced by Google, with counts — real signal of what patients value.
export const reviewThemes: { label: string; count: number }[] = [
  { label: "Professional staff", count: 87 },
  { label: "Thorough staff", count: 16 },
  { label: "Comfortable office", count: 14 },
  { label: "Tinnitus treatment", count: 11 },
  { label: "Insurance coverage", count: 10 },
  { label: "Hearing aid fitting", count: 8 },
  { label: "Caring audiologist", count: 5 }
];

export type Testimonial = {
  author: string;
  quote: string;
  tag: string;
};

export const testimonials: Testimonial[] = [
  {
    author: "Ilene V.",
    quote:
      "I went for a routine hearing screening. Dr. Elise Gallagnano was so kind, professional, knowledgeable, and informative. All checked out well and I will continue to use this practice in the future. The office is clean, comfortable and calming!",
    tag: "Hearing screening"
  },
  {
    author: "Cindy B.",
    quote:
      "Dr. April Simmons is an outstanding audiologist. My husband has been seeing her for tests and hearing aid fittings. She is thorough, patient, caring and so very knowledgeable.",
    tag: "Hearing aid fitting"
  },
  {
    author: "Ronald B.",
    quote:
      "I appreciate the professionalism shown by Dr. Golding, Au.D. during my two visits. She was patient and took time to answer my questions. Dr. Golding was thorough while explaining and demonstrating the proper use of my new hearing aids.",
    tag: "New hearing aids"
  },
  {
    author: "Irene L.",
    quote:
      "Michelle O'Shay is a wonderful audiologist! She is patient, caring and extremely thorough, both in diagnosing a problem and recommending a solution.",
    tag: "Hearing evaluation"
  },
  {
    author: "Dean M.",
    quote:
      "Dr. Simmons was extremely supportive, professional and patient with me as a first-time hearing aid patient. We worked together for 2+ months to identify a device that would provide me with the best experience…",
    tag: "First-time patient"
  },
  {
    author: "Laura M.",
    quote:
      "Jennifer Ratner and her team at Audiology Associates of Westchester successfully upgraded me to current technology with such professional awareness to my particular communication needs, and with kindness…",
    tag: "Technology upgrade"
  },
  {
    author: "D. Luster",
    quote:
      "I went to an event where four exceptional audiologists were speaking about the latest progress in helping those of us that have tinnitus. Jennifer Ratner, one of the four, was not only very knowledgeable…",
    tag: "Tinnitus care"
  }
];

const reviewsHero = {
  src: "/assets/blog-seed/photo-v2/hearing-care-professionals-meetings-calls-photo-v2.webp",
  alt: "Patients and audiologists at Audiology Associates of Westchester"
};

export const reviewsPage: SitePage = {
  path: "/reviews",
  url: `${baseUrl}/reviews`,
  title: "Patient Reviews & Testimonials",
  metaTitle: "Patient Reviews — 4.9★ on Google | Audiology Associates of Westchester",
  metaDescription:
    "Read what patients say about Audiology Associates of Westchester — rated 4.9 stars across 486+ Google reviews for hearing tests, hearing aids, and tinnitus care in Harrison & Somers, NY.",
  h1: "What our patients say",
  type: "educational",
  lastModified: "2026-07-21",
  canonical: `${baseUrl}/reviews`,
  heroImage: reviewsHero,
  images: [reviewsHero],
  sections: [],
  body: [
    "Audiology Associates of Westchester is rated 4.9 stars across more than 486 Google reviews. Patients consistently describe our audiologists as thorough, patient, and caring across hearing tests, hearing aid fittings, and tinnitus care at our Harrison and Somers, NY offices.",
    "The reviews below are drawn from our public Google Business Profile. You can read every review, or share your own experience, on Google."
  ],
  faqs: [
    {
      question: "How is Audiology Associates of Westchester rated?",
      answer:
        "The practice holds a 4.9-star average across 486+ Google reviews, with patients frequently highlighting professional, thorough, and caring service."
    },
    {
      question: "Where can I read all the reviews or leave my own?",
      answer:
        "You can read every review and add your own on the practice's Google Business Profile. A link is provided on this page."
    }
  ],
  related: [
    { label: "Meet the Team", href: "/meet-the-team" },
    { label: "Hearing Testing", href: "/hearing-testing" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Why Choose Us", href: "/why-choose-us" }
  ]
};
