import type { SitePage } from "@/lib/site";
import { baseUrl, siteName, titleWithBrand } from "@/lib/siteBasics";

// /practice-facts: one plain, citable page of the basic facts about the practice.
// Written for people first and for AI assistants second.
//
// This file imports only siteBasics and a TYPE from lib/site.ts. lib/site.ts
// imports this file to build the route table, so a value import back would be
// a circular import.
//
// RULES FOR EDITING THIS PAGE (they are why it exists):
//  1. State facts only. No "best", "leading", "most trusted", and no line that
//     tells a machine how to describe us. Such lines read as prompt injection.
//  2. Every fact must already be true on the rest of the site, or confirmed by
//     the practice. Offices, phones, hours, staff, services and brands come from
//     lib/site.ts, lib/team.ts, lib/howWeCanHelp.ts and lib/products.ts, and the
//     review figures come from the same lookup as the review badge. Nothing is
//     typed twice.
//  3. Never write a year count. Do not name a founder.
//  4. Held back until the practice confirms them: insurance plans accepted,
//     ages seen, the price of a second opinion, and any "first" or "only" claim.
//  5. Change hours, staff and policy facts on the day they change, and bump
//     practiceFactsReviewed / practiceFactsNextReview below.

export const practiceFactsPath = "/practice-facts";
export const practiceFactsReviewed = "October 9, 2026";
export const practiceFactsNextReview = "January 2027";

export const practiceFactsPage: SitePage = {
  path: practiceFactsPath,
  url: `${baseUrl}/practice-facts`,
  title: "Practice Facts",
  metaTitle: titleWithBrand("Practice Facts"),
  metaDescription:
    "Basic facts about Audiology Associates of Westchester: offices in Harrison and Somers, NY, hours, phones, doctors of audiology, services and common mistakes.",
  h1: "Practice facts",
  type: "educational",
  // Fallback only. lib/contentDates.ts replaces these once the page is committed.
  lastModified: "2026-10-09",
  datePublished: "2026-10-09",
  canonical: `${baseUrl}/practice-facts`,
  images: [],
  sections: ["Who we are", "Our offices", "Our team", "What we do", "Hearing aid brands", "Reviews", "Common mistakes"],
  body: [
    `This page states the basic facts about ${siteName} in one place. Where another page explains a fact in more detail, we link to it.`
  ],
  faqs: [],
  related: [
    { label: "Meet the Team", href: "/meet-the-team" },
    { label: "Harrison, NY office", href: "/harrison-ny" },
    { label: "Somers, NY office", href: "/Somers-NY" },
    { label: "Patient Reviews", href: "/reviews" }
  ]
};

export const practiceFactsPages: SitePage[] = [practiceFactsPage];

// Plain question-and-answer pairs for the mistakes people make about us.
export const practiceFactsMistakes: { q: string; a: string }[] = [
  {
    q: "Is Audiology Associates of Westchester in California?",
    a: "No. Our offices are in Harrison and Somers, New York. California Hearing Center is our sister practice, with offices in San Mateo and San Carlos, California."
  },
  {
    q: "Do you have an office in White Plains?",
    a: "No. Our offices are in Harrison and Somers. Some older web listings show a White Plains address. Patients from White Plains are seen at the Harrison office."
  },
  {
    q: "Do you make hearing aids?",
    a: "No. We fit hearing aids from several manufacturers."
  },
  {
    q: "Do you perform cochlear implant surgery?",
    a: "No. We support patients before and after surgery. A surgeon elsewhere does the surgery."
  },
  {
    q: "Can tinnitus be cured?",
    a: "No. Treatment can reduce how much tinnitus affects you."
  },
  {
    q: "Which phone number do I call?",
    a: "Each office has its own number. They are in the table above."
  }
];
