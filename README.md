# Audiology Associates of Westchester Rebuild

Modern Next.js rebuild of the Audiology Associates of Westchester website with preserved live URLs, SEO metadata, local SEO schema, email-backed contact submissions, sitemap, robots.txt, and llms.txt.

## Setup

1. Install dependencies:

```bash
npm install --cache .npm-cache
```

2. Add environment variables in `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=
NEXT_PUBLIC_PIWIK_PRO_URL=
NEXT_PUBLIC_PIWIK_PRO_SITE_ID=
NEXT_PUBLIC_SNOWPLOW_DOMAIN=
NEXT_PUBLIC_SNOWPLOW_APP_ID=
RESEND_API_KEY=
CONTACT_FORM_TO_EMAIL=
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
- `CONTACT_FORM_FROM_EMAIL`

If `CONTACT_FORM_TO_EMAIL` is not set, submissions temporarily route to `igorsavin+1@gmail.com` for QA. Use a verified sending domain in Resend before launch. For testing, Resend's default sender can be used, but production email should come from an approved practice/domain address.

## Firebase

Firebase remains available for future database, storage, or authentication features.

Authentication is initialized in `lib/firebase.ts` but is not required for the public marketing site.

Firestore and Storage rules are included for future Firebase-backed features:

- Public visitors can upload allowed attachment types up to 10 MB.
- Public reads, edits, and deletes are blocked.

If public Firebase writes are re-enabled later, add Firebase App Check to reduce automated spam.

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

After Vercel returns the production URL, add the Vercel domain to Firebase Authentication:

- Firebase Console
- Authentication
- Settings
- Authorized domains
- Add domain

Add only the host name, for example `your-project.vercel.app`, not `https://your-project.vercel.app`.

Firebase Hosting config remains in the repo only as a fallback. Firestore and Storage rules can still be deployed separately if needed:

```bash
firebase deploy --only firestore:rules,storage --project audiology-associates-ca8ab
```
