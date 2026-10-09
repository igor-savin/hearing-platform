# California Hearing Center

The calhearing.com website — a Next.js rebuild of the practice's legacy
WordPress site, preserving the live URLs and their search equity.

Sister property: [Audiology Associates of Westchester](https://github.com/igor-savin/Audiology-Associates).
The two sites are the same business and are managed together; anything marked
"kept identical to the sister practice" in this repo should not be changed on
one side alone.

## Stack

- Next.js 16 / React 19, App Router, Turbopack
- Tailwind 4 for utilities, plus a large hand-authored stylesheet in `app/globals.css`
- Deployed on Vercel — `npm run build` is the whole build

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Copy `.env.example` to `.env.local` first. Only `RESEND_API_KEY` is a real
secret; everything else is optional and documented inline in that file.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build — 684 static pages |
| `npm run start` | Serve the production build |
| `npm run lint` | `tsc --noEmit` plus ESLint |
| `npm run indexnow` | Submit sitemap URLs to IndexNow (see below) |

## How the site is put together

Everything is prerendered at build time. There is no database and no CMS —
content lives in the repo as typed TypeScript.

```
app/[...slug]/page.tsx      one catch-all route; renders every page
app/site/                   the components; CaliforniaHearingSite.tsx is the shell
app/data/                   all site content
  crawledPages.ts             the page inventory (path, title, description)
  corePages.ts                service / product / facility page content
  blogPosts.ts                blog post content
  blog-entries/*.txt          per-post source fragments
  cityProfiles.ts             areas-we-serve content
  contentDates.ts             real per-page lastmod dates for the sitemap
app/lib/contactForm.ts      option lists shared by the form and the API route
app/api/contact/route.ts    contact form → Resend
```

`app/data/corePages.ts` is **generated** from `_migration/core-entries/*.txt` by
`_migration/assembleCorePages.mjs`. Edit the fragment and re-run the assembler,
not the generated file.

`app/data/contentDates.ts` is likewise generated — regenerate with
`node _migration/genContentDates.mjs`. It exists so the sitemap can emit a real
`lastmod` per URL instead of the build timestamp, which would otherwise claim
all 684 pages changed on every deploy.

## Redirects

`next.config.ts` carries three redirect tables covering the WordPress archive
URLs, the legacy sitemap, and the blog-curation pass. The site uses
**trailing-slash** URLs (`/hearing-testing/`), matching the legacy site — note
the sister practice does not, so cross-site links need care.

## Performance

`.github/workflows/lighthouse.yml` runs Lighthouse CI on every push and PR,
asserting performance ≥ 0.80, accessibility ≥ 0.95, best practices ≥ 0.90 and
SEO ≥ 0.95. The thresholds are deliberately identical to the sister practice's,
so a score on one site means the same thing as a score on the other.

Two things worth preserving: the site loads no web font (system Arial stack),
and images carry explicit dimensions plus `loading`/`decoding` hints. Verify any
change to the frosted-glass header on a **deployed** preview rather than
locally — `app/globals.css` documents why.

## IndexNow

IndexNow tells Bing and other participating search engines about new or
changed URLs. Google does not use IndexNow, so it does not replace Search
Console or the sitemap for Google.

After a deploy, run:

```
node scripts/indexnow.mjs
```

This submits every URL in `https://calhearing.com/sitemap.xml`. To submit only
some URLs, list them: `node scripts/indexnow.mjs https://calhearing.com/a/ https://calhearing.com/b/`.
Add `--dry-run` to print what would be sent without sending it. The script
only submits URLs on `calhearing.com`.

The key file `public/<key>.txt` (a 32-character hex name, content equal to the
name) must stay in place. Search engines fetch it to confirm that the site owns
the key. If you delete or rename it, submissions fail with 403 or 422.
