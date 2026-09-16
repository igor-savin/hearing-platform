import type { SitePage } from "@/lib/site";
import { baseUrl, siteName } from "@/lib/siteBasics";

// Press coverage of the practice. One entry per article, plus the /in-the-news
// index that lists them. lib/site.ts adds every page here to the route table,
// the sitemap and lib/contentDates.ts, so a new clipping is one new entry.
//
// Content rule: the printed article belongs to the paper. We show a photo of
// the printed page as a clipping and summarise the interview IN OUR OWN WORDS.
// Do not paste the printed Q&A into the page body as text.

export const pressRootPath = "/in-the-news";

export type PressQuestion = {
  question: string;
  answer: string;
  link: { label: string; href: string };
};

export type PressFeature = {
  slug: string;
  headline: string;
  publication: string;
  // Month the edition came out, for display. Not a publication date claim.
  issue: string;
  summary: string;
  interviewee: string;
  featuredProviderSlugs: string[];
  clipping: { src: string; alt: string; width: number; height: number };
  cover: { src: string; alt: string; width: number; height: number };
  questions: PressQuestion[];
  event?: {
    name: string;
    organizer: string;
    organizerUrl: string;
    dateLabel: string;
    venue: string;
    address: string;
    // After this instant the "visit us" callout disappears on its own.
    // Eastern time, because that is where the event happens.
    endsAt: string;
    note: string;
  };
};

export const celebrateSomers2026: PressFeature = {
  slug: "celebrate-somers-2026",
  headline: "Hearing solutions for everyday lives",
  publication: "Celebrate Somers 2026",
  issue: "September 2026",
  summary:
    "Our practice is featured in the Celebrate Somers 2026 edition. Dr. Jennifer Ratner spoke about how hearing loss starts, what a first visit looks like, and the care we give in Somers and Harrison.",
  interviewee: "jennifer-ratner",
  featuredProviderSlugs: ["caitlin-dold", "jennifer-ratner", "julia-rivera"],
  clipping: {
    src: "/assets/press/celebrate-somers-2026-article.webp",
    alt: "Newspaper page from the Celebrate Somers 2026 edition: Audiology Associates of Westchester, Hearing solutions for every day lives, with a photo of Dr. Caitlin Dold, Dr. Jennifer Ratner and Dr. Julia Rivera",
    width: 2000,
    height: 1087
  },
  cover: {
    src: "/assets/press/celebrate-somers-2026-cover.webp",
    alt: "Cover of the Celebrate Somers 2026 edition, a painting of the Elephant Hotel in Somers, NY",
    width: 900,
    height: 1030
  },
  questions: [
    {
      question: "How do people notice hearing loss?",
      answer:
        "It usually comes on slowly. The TV volume goes up. Restaurants get harder. Family members start to repeat themselves. Most people adapt for years before they ask for help.",
      link: { label: "Signs of hearing loss", href: "/how-we-can-help/your-hearing" }
    },
    {
      question: "What is the first step?",
      answer:
        "Book a full hearing evaluation. A doctor of audiology does the diagnostic tests. Then we go through the results with you, so you know what your hearing looks like and what your options are.",
      link: { label: "Comprehensive hearing assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" }
    },
    {
      question: "Is hearing loss only a problem for older adults?",
      answer:
        "No. Hearing changes can start at any age. That is why an early evaluation matters, even if you think you are too young to need one.",
      link: { label: "Hearing testing", href: "/hearing-testing" }
    },
    {
      question: "How do you make sure a hearing aid works?",
      answer:
        "We use real-ear measurement. We put a thin probe microphone in your ear canal and measure what the hearing aid actually delivers in your ear. Then we adjust it to your prescription.",
      link: { label: "Hearing aid fitting", href: "/hearing-aid-fitting" }
    },
    {
      question: "What if my ears ring?",
      answer:
        "We offer tinnitus therapy. We help you understand the ringing and choose a management plan that suits you.",
      link: { label: "Tinnitus management", href: "/how-we-can-help/tinnitus-management" }
    },
    {
      question: "Do you do more than tests and hearing aids?",
      answer:
        "Yes. We also do earwax removal, custom hearing protection, cochlear implant support, and hearing aid repairs and tune-ups.",
      link: { label: "All the ways we can help", href: "/how-we-can-help" }
    }
  ],
  event: {
    name: "Celebrate Somers",
    organizer: "Somers Chamber of Commerce",
    organizerUrl: "https://somerschamber.com/",
    dateLabel: "Saturday, September 26, 2026, 10 a.m. to 3 p.m.",
    venue: "Somers Towne Centre",
    address: "325 Route 100, Somers, NY",
    endsAt: "2026-09-26T15:00:00-04:00",
    note: "The festival is at Somers Towne Centre, the same address as our Somers office. Stop by our table and meet the team."
  }
};

export const pressFeatures: PressFeature[] = [celebrateSomers2026];

export function pressFeaturePath(feature: PressFeature) {
  return `${pressRootPath}/${feature.slug}`;
}

export function pressFeatureForPath(path: string) {
  return pressFeatures.find((feature) => pressFeaturePath(feature).toLowerCase() === path.toLowerCase());
}

export function pressEventIsUpcoming(feature: PressFeature, now = Date.now()) {
  return Boolean(feature.event && now < Date.parse(feature.event.endsAt));
}

const pressIndexPage: SitePage = {
  path: "/in-the-news",
  url: `${baseUrl}/in-the-news`,
  title: "In the News",
  metaTitle: `In the News | ${siteName}`,
  metaDescription:
    "Press coverage of Audiology Associates of Westchester, including our feature in the Celebrate Somers 2026 edition. Hearing care in Somers and Harrison, NY.",
  h1: "In the news",
  type: "educational",
  // Fallback only. lib/contentDates.ts replaces these once the page is committed.
  lastModified: "2026-09-16",
  datePublished: "2026-09-16",
  canonical: `${baseUrl}/in-the-news`,
  heroImage: { src: celebrateSomers2026.clipping.src, alt: celebrateSomers2026.clipping.alt },
  images: [{ src: celebrateSomers2026.clipping.src, alt: celebrateSomers2026.clipping.alt }],
  sections: ["Press coverage"],
  body: [
    "Local press coverage of Audiology Associates of Westchester and our doctors of audiology in Somers and Harrison, NY."
  ],
  faqs: [
    {
      question: "Where has Audiology Associates of Westchester been featured?",
      answer:
        "Most recently in the Celebrate Somers 2026 edition, where Dr. Jennifer Ratner talked about hearing loss, hearing evaluations, hearing aid fitting and tinnitus care."
    }
  ],
  related: [
    { label: "Meet the Team", href: "/meet-the-team" },
    { label: "Somers, NY Office", href: "/Somers-NY" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Contact Us", href: "/contact-us" }
  ]
};

const celebrateSomersPage: SitePage = {
  path: "/in-the-news/celebrate-somers-2026",
  url: `${baseUrl}/in-the-news/celebrate-somers-2026`,
  title: "Featured in Celebrate Somers 2026",
  metaTitle: `Featured in Celebrate Somers 2026 | ${siteName}`,
  metaDescription:
    "Dr. Jennifer Ratner talks hearing loss, hearing tests, real-ear hearing aid fitting and tinnitus care in the Celebrate Somers 2026 edition. See the article and visit us in Somers, NY.",
  h1: "As featured in Celebrate Somers 2026",
  type: "educational",
  // Fallback only. lib/contentDates.ts replaces these once the page is committed.
  lastModified: "2026-09-16",
  datePublished: "2026-09-16",
  canonical: `${baseUrl}/in-the-news/celebrate-somers-2026`,
  heroImage: { src: "/assets/press/celebrate-somers-2026-og.jpg", alt: celebrateSomers2026.clipping.alt },
  images: [
    { src: celebrateSomers2026.clipping.src, alt: celebrateSomers2026.clipping.alt },
    { src: celebrateSomers2026.cover.src, alt: celebrateSomers2026.cover.alt }
  ],
  sections: ["The article", "Who you will meet", "What we talked about", "Visit us in Somers"],
  body: [celebrateSomers2026.summary, ...celebrateSomers2026.questions.map((item) => `${item.question} ${item.answer}`)],
  faqs: [
    {
      question: "Who was interviewed for the Celebrate Somers 2026 article?",
      answer:
        "Dr. Jennifer Ratner, Au.D., a partner at Audiology Associates of Westchester. The article photo shows Dr. Caitlin Dold, Dr. Jennifer Ratner and Dr. Julia Rivera."
    },
    {
      question: "Where is the Somers office?",
      answer:
        "Our Somers office is at 325 NY 100, Somers, NY 10589, in Somers Towne Centre. That is where the Celebrate Somers festival takes place."
    },
    {
      question: "Which Somers audiologists can I see?",
      answer:
        "Dr. Caitlin Dold and Dr. Julia Rivera see patients in Somers and in Harrison."
    }
  ],
  related: [
    { label: "Somers, NY Office", href: "/Somers-NY" },
    { label: "Meet the Team", href: "/meet-the-team" },
    { label: "Hearing Testing", href: "/hearing-testing" },
    { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" }
  ]
};

export const pressPages: SitePage[] = [pressIndexPage, celebrateSomersPage];
