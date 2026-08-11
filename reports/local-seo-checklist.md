# Local SEO Checklist

- [x] Location pages include city-focused H1s or page titles.
- [x] Harrison, Somers, White Plains, and Scarsdale NAP details are preserved from the live crawl.
- [x] Greenwich, Rye, and Mt. Kisco are treated as service-area pages.
- [x] Location pages include services offered, nearby areas, phone CTAs, hours, and FAQs.
- [x] MedicalBusiness schema is added for office pages.
- [x] Organization schema references locations with stable `@id` values.
- [x] Service pages reference the organization and office locations.
- [x] Footer includes NAP details and key services.
- [x] Internal links connect service pages to location pages.
- [x] Confirmed 2026-08-11 by the practice owner: Harrison and Somers are the only physical offices. White Plains and Scarsdale are service areas, not staffed locations.

## Two-office claim

The Duda site advertised "4 Convenient Locations" and listed White Plains,
Harrison, Scarsdale, and Somers together. That overstates the practice, so
`correctOfficeClaims()` in `lib/site.ts` rewrites those phrases as content is
generated from the crawl, and `lib/llmGuide.ts` states the two-office fact
outright for AI crawlers.

This changes the branded search snippet on the homepage, which was accepted
deliberately: claiming offices that do not exist is the worse trade. If a third
office ever opens, update `correctOfficeClaims()`, the `locations` list in
`lib/site.ts`, and the llms guide together — they must agree.
