# Audiology Associates of Westchester Architecture Overview

This repository is a Next.js application that presents the Audiology Associates of Westchester website as a mostly data-driven site.

## High-level structure

- `app/layout.tsx` provides the global shell, shared metadata, and site-wide header and footer.
- `app/[[...slug]]/page.tsx` acts as the catch-all renderer for the majority of pages.
- `components/PageRenderer.tsx` turns the page model into the visible page content.
- `lib/site.ts` defines the page catalog, metadata helpers, and shared page data.
- `lib/howWeCanHelp.ts`, `lib/products.ts`, `lib/serviceAreas.ts`, `lib/team.ts`, and `lib/tinnitus.ts` organize the domain-specific content.
- `app/api/contact/route.ts` accepts form submissions and sends email through Resend when configured.

## Rendering flow

1. A visitor requests a URL.
2. Next.js matches either a dedicated route, like `/overview`, or the catch-all page route.
3. The page resolver looks up the page record in `lib/site.ts`.
4. Metadata and schema helpers build SEO data from the same page record.
5. `PageRenderer` composes the page sections, related links, FAQs, and calls to action.

## Content and SEO

- Metadata, Open Graph tags, robots rules, sitemap entries, and schema markup are generated from shared helpers.
- The site uses a centralized page model so page copy, structured data, and navigation stay aligned.
- The `public/llms.txt` file provides a quick reference for crawlers and AI tools.

## Contact form flow

- The form posts to `app/api/contact/route.ts`.
- The route sanitizes input and validates required fields.
- If email configuration is available, the request is sent through Resend.
- If configuration is missing, the API returns a clear fallback message for the practice.

## Where to start

- `app/layout.tsx`
- `lib/site.ts`
- `components/PageRenderer.tsx`
- `app/api/contact/route.ts`
- `app/overview/page.tsx`
