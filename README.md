# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## California Hearing Center — Environment & Cutover

All integrations are **off until their env var is set**, so the code is safe to
deploy before the domain moves. Set these in the Vercel project (Settings →
Environment Variables). Scope analytics to **Production only** so the preview
deployment never sends staging traffic to the live GA4 property.

### Analytics (match calhearing.com)

| Variable | Value | Scope | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | `GTM-M9CDTZP` | Production | **Recommended.** Same GTM container as calhearing.com — fires GA4 and everything configured in the container. |
| `GOOGLE_SITE_VERIFICATION` | `WBZFrlITOmQaGoGa30a3lDHt6muz2pp_U7k-Pvb8sQ4` | Production | Google Search Console ownership meta (matches calhearing.com). |
| `NEXT_PUBLIC_GA4_ID` | `G-XN799HLKX5` | Production | **Only if GA4 is not already inside GTM.** Do not set alongside GTM for the same property, or hits double-count. |

- Universal Analytics (`UA-100763869-1`) is intentionally **not** carried over — Google stopped processing UA in 2023.
- The contact form already pushes a `contact-submit-success` event to `dataLayer`. To count it as a GA4 conversion, add a Custom Event trigger (`website_interaction` / `contact-submit-success`) + a GA4 event tag inside the GTM container.
- Third-party tools on the legacy site (WhatConverts, DataFast, VisibilityKit) are not included — add only if still in active use.

### Contact form (Resend — shared with the Westchester site)

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | *(your Resend key)* | Reuse the Audiology Associates of Westchester account so `hearing-care.org` is already a verified sender — or verify `calhearing.com` in Resend. |
| `CONTACT_FORM_TO_EMAIL` | *(practice inbox)* | Where lead submissions are delivered. |
| `CONTACT_FORM_FROM_EMAIL` | `California Hearing Center <noreply@calhearing.com>` | Only needed if sending from the calhearing.com domain (must be verified in Resend). Defaults to the shared hearing-care.org sender. |
| `CONTACT_FORM_BCC_EMAIL` | *(optional)* | Optional BCC copy. |

### Site domain

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://calhearing.com` | Drives canonicals, sitemap, robots, and `metadataBase`. Already defaults to this. |

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
