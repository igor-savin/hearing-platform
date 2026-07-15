# Audiology Associates of Westchester Rebuild

Modern Next.js rebuild of the Audiology Associates of Westchester website with preserved live URLs, SEO metadata, local SEO schema, email-backed contact submissions, sitemap, robots.txt, and llms.txt.

## Setup

1. Install dependencies:

```bash
npm install --cache .npm-cache
```

2. Add environment variables in `.env.local`:

```bash
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=
NEXT_PUBLIC_PIWIK_PRO_URL=
NEXT_PUBLIC_PIWIK_PRO_SITE_ID=
NEXT_PUBLIC_SNOWPLOW_DOMAIN=
NEXT_PUBLIC_SNOWPLOW_APP_ID=
RESEND_API_KEY=
CONTACT_FORM_TO_EMAIL=
CONTACT_FORM_BCC_EMAIL=
CONTACT_FORM_FROM_EMAIL=
```

3. Run locally:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Contact Form Email

The contact form posts to `/api/contact`, validates the submission server-side, and sends an email notification through Resend.

Required production variables:

- `RESEND_API_KEY`

Optional:

- `CONTACT_FORM_TO_EMAIL`
- `CONTACT_FORM_BCC_EMAIL`
- `CONTACT_FORM_FROM_EMAIL`

If `CONTACT_FORM_TO_EMAIL` is not set, submissions route to the built-in practice recipient. Use a verified sending domain in Resend before launch. For testing, Resend's default sender can be used, but production email should come from an approved practice/domain address.

## Tracking Pixels

The live-site tracking layer is mirrored by default:

- Google Tag Manager: `GTM-T6X664N`
- Facebook Pixel: `2514209258866599`
- Piwik Pro: `33153b90-8d23-4967-9b24-5a3b3f41f3f7`
- Zocdoc booking widget: practice ID `69184`
- Duda/Snowplow platform telemetry: app ID `d8404b56`

Environment variables can override these defaults if the business changes tags before launch.

## Reports

- `reports/page-inventory.md`
- `reports/seo-metadata-map.md`
- `reports/redirect-map.md`
- `reports/page-compliance.md`
- `reports/qa-checklist.md`
- `reports/local-seo-checklist.md`
- `reports/lighthouse-performance-notes.md`
- `reports/future-content-recommendations.md`
- `reports/pixel-parity.md`

## Deployment

Vercel is the preferred public deployment target for this build.

```bash
npm run build
vercel deploy --prod
```

Firebase Hosting remains a fallback. Firestore now backs scheduled article publishing, while Firebase Storage remains available for the legacy attachment workflow:

```bash
firebase deploy --only firestore:rules,storage --project audiology-associates-ca8ab
```

## Scheduled Article Publishing

The publishing back office is available at `/back-office` and uses Firebase Authentication with Google plus Firestore for the article queue.

Required Firebase variables:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `CMS_ADMIN_EMAILS` — comma-separated Google accounts allowed to request the protected 100-article seed payload

The same admin email list must be kept in sync with `firestore.rules`, because Firestore independently authorizes reads and writes. Google must be enabled as a sign-in provider in Firebase Authentication, and the production Vercel domain must be listed as an authorized authentication domain.

### Publishing behavior

- `draft`: visible only in the authenticated back office.
- `scheduled`: becomes public automatically when `publishAt` is reached.
- `archived`: removed from public article queries.

No cron job is required. Public article queries compare `publishAt` with the current time, while the blog index and sitemap revalidate hourly. The direct article URL becomes eligible immediately at its scheduled time; discovery surfaces may take up to one hour to refresh.

The “Generate and schedule 100 articles” action accepts the first publication date and alternates 3-day and 4-day intervals. Running it again updates the same deterministic document IDs rather than creating duplicates.

Deploy the CMS rules and index before using the back office:

```bash
firebase deploy --only firestore:rules,firestore:indexes --project audiology-associates-ca8ab
```
