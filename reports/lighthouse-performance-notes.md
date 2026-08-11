# Lighthouse and Performance Notes

The rebuild is designed for strong Core Web Vitals:

- Static App Router pages are generated from crawl data.
- Images are self-hosted under `public/assets/` and served through `next/image`.
- No heavy runtime website-builder scripts are carried over.
- Contact behavior is isolated to the contact form client component.
- Metadata, sitemap, robots.txt, and llms.txt are generated without client JavaScript.
- Fonts use the system stack to avoid render-blocking external font requests.

Recommended post-deployment checks:

- Run Lighthouse on Home, Contact, one service page, one location page, and one blog post.
- Confirm Firebase rules do not block intended contact form submissions.
- Confirm all production analytics IDs load only when environment variables are present.

## Recorded baselines

Numeric Lighthouse results to diff future changes against. Don't regress these.

### 2026-07-21 — Home `/` (mobile)

Deploy: staging (`audiology-associates-westchester.vercel.app`), commit `54f4c1d`
(the "hear the difference" live-audio hero). Lighthouse CLI, `--only-categories=performance`.

| Metric | Value |
|--------|-------|
| Performance score | **88** |
| First Contentful Paint | 1.2 s |
| Largest Contentful Paint | 3.3 s |
| Total Blocking Time | 180 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 4.0 s |

Notes: LCP is driven by the hero background image (`/assets/interactive-ear-hero.png`),
the biggest lever if we want to push the score higher. The live-audio engine
(`lib/audio/hearingScene.ts`) only instantiates on a user gesture, so it does not
affect FCP/LCP.

### 2026-08-11 — Home `/` (mobile)

Deploy: staging (`audiology-associates-westchester.vercel.app`), commit `4b87ab1`
(self-hosting all Duda CDN images). Lighthouse CLI, `--only-categories=performance`.

| Metric | Value | vs. 2026-07-21 |
|--------|-------|----------------|
| Performance score | **91** | +3 |
| First Contentful Paint | 1.2 s | — |
| Largest Contentful Paint | 3.3 s | — |
| Total Blocking Time | 150 ms | −30 ms |
| Cumulative Layout Shift | 0 | — |
| Speed Index | 2.0 s | −2.0 s |

Notes: the gain comes from dropping the third-party image CDN — no cross-origin DNS,
TLS, and connection setup on the critical path, which is what Speed Index was paying
for. LCP is unchanged because it is still the hero image, not a Duda asset. Remaining
opportunity is ~50 KiB of unused JavaScript.

Two source images are large on disk and worth re-compressing if we chase the next
few points: `public/assets/duda/hearst-widex-photo.png` (929 KB) and
`public/assets/duda/adobestock-232317406.jpg` (591 KB). `next/image` resizes them
on delivery, so this affects optimizer work, not bytes on the wire.
