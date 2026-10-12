# Live Site Gap Scan - July 8, 2026

Compared:
- Live site: https://www.audiologyassociates.org/
- Rebuild: https://audiology-associates-westchester.vercel.app/

## Method

- Fetched and compared `robots.txt` and `sitemap.xml`.
- Crawled same-domain links from each homepage.
- Compared URL path, status, page title, canonical, H1, text length, and forms.
- Direct-checked the pages that were not discovered by the first crawl.

## Summary

- Live sitemap URLs found: 37
- Rebuild sitemap URLs found: 104
- Live sitemap paths missing from rebuild sitemap: 0
- Live sitemap paths returning non-200 on rebuild: 0

The rebuild is not missing any currently indexed live sitemap page. It also adds many new SEO pages: service areas, provider profiles, product/brand pages, tinnitus topic pages, and the "How We Can Help" hub.

## Important Discovery Note

The rebuild sitemap and robots file advertise `https://www.audiologyassociates.org` as the canonical host, even when viewed on the Vercel preview domain.

This is correct if the final production domain will be `www.audiologyassociates.org`. However, when crawling only `audiology-associates-westchester.vercel.app`, a crawler may not treat those sitemap URLs as belonging to the Vercel host.

Action:
- Keep this as-is for final domain migration.
- When the custom domain is switched to the rebuild, submit `https://www.audiologyassociates.org/sitemap.xml` in Google Search Console.

## Live Pages Confirmed Present On Rebuild

These live pages initially looked missing in link-crawl discovery, but direct checks confirmed they exist and return 200 on the rebuild:

| Path | Rebuild Status | Notes |
|---|---:|---|
| `/greenwich-ct` | 200 | Title, H1, canonical match; rebuild has extra content |
| `/hearing-aid-referral-program` | 200 | Title and H1 match; rebuild adds meta description |
| `/hearing-aids-brands` | 200 | Title and H1 match; rebuild adds improved meta description |
| `/hearing-tips` | 200 | Title and H1 match; rebuild adds meta description/content |
| `/mt-kisco-ny` | 200 | Title and H1 match; rebuild has extra content |
| `/privacy` | 200 | Long legal content present |
| `/rye-ny` | 200 | Title, H1, canonical match; rebuild has extra content |
| `/thank-you` | 200 | Title and canonical match |

## Issues To Consider Fixing

1. H1 spacing bugs on a few rebuilt pages:
   - `/hearing-testing`: `Hearing Testfor...`
   - `/hearing-protection`: `Hearing Protectionfor...`
   - `/improve-your-hearing`: `Hearing Loss Treatmentfor...`
   - `/get-answers`: `Frequently Asked QuestionsAbout...`

2. Internal discoverability could be stronger for legacy/support pages:
   - `/hearing-aid-referral-program`
   - `/hearing-tips`
   - `/privacy`
   - `/thank-you`

3. `/thank-you` is in the live sitemap and has been preserved, but from an SEO standpoint this type of page is usually better as `noindex` and omitted from sitemap. Confirm business preference before changing because the current live site indexes it.

4. There are now two brand-related page families:
   - Legacy page: `/hearing-aids-brands`
   - New product hub: `/products/hearing-aids-by-brand`

   This is acceptable if they serve different intent, but we should interlink them clearly and avoid duplicate content.

5. `/privacy` has no meaningful H1 on the live site or rebuild. For accessibility and SEO, consider adding a visible or screen-reader-friendly `Privacy Policy` H1 unless exact visual parity is more important.

## Recommendation

No major page inventory gap was found. The next best cleanup is small:

- Fix the four H1 spacing bugs.
- Add subtle internal links to `/hearing-aid-referral-program`, `/hearing-tips`, and `/privacy`.
- Decide whether `/thank-you` should stay indexable.
- After custom domain launch, resubmit the rebuild sitemap at `https://www.audiologyassociates.org/sitemap.xml`.
