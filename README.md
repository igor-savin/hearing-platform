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

Firebase Hosting config remains in the repo only as a fallback. Firestore and Storage rules are retained for historical reference and should only be deployed if Firebase-backed features are reintroduced:

```bash
firebase deploy --only firestore:rules,storage --project audiology-associates-ca8ab
```
