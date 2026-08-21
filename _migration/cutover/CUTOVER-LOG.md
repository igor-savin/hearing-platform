# calhearing.com — migration record

WordPress on GoDaddy/Automattic → Next.js on Vercel.
Planned 17–20 Aug 2026, executed 20 Aug 2026.

## What changed

| | Before | After |
|---|---|---|
| Platform | WordPress (Automattic Atomic, `openresty`) | Next.js on Vercel |
| Host IP | `34.149.86.124` | `216.150.1.1` (Vercel anycast) |
| DNS provider | GoDaddy (`ns33`/`ns34.domaincontrol.com`) | Cloudflare (`braelyn`/`konnor.ns.cloudflare.com`), DNS-only |
| Canonical host | non-www | **www** (apex 308 → www, served by Vercel) |
| Mail | Google Workspace | unchanged — same five MX, verified by live delivery |

## How it was sequenced, and why

The nameserver move and the website move were done as **two separate steps**,
with the zone recreated in Cloudflare *identically* first — apex still pointing
at WordPress. Switching nameservers then changed nothing for any visitor or any
message, which meant the email risk and the website risk could be verified and
reversed independently. Bundled together, a failure would have left two
candidate causes and an ambiguous rollback.

1. Recreated the zone in Cloudflare, byte-for-byte identical to GoDaddy
2. Switched nameservers — nothing changed; site still WordPress
3. Verified mail by sending a real message end-to-end
4. Attached both hostnames in Vercel, set env vars, redeployed
5. Verified every tag rendered before touching DNS
6. Changed two records — apex A and www CNAME. **This was the cutover.**

## Verified after cutover

- **680 / 680** legacy WordPress URLs → 200
- **362 / 362** sitemap URLs → 200
- **439 / 439** mirrored media URLs → 200
- Certificate valid, apex 308 → www, `x-vercel` headers present
- GTM `GTM-M9CDTZP`, GA4 `G-XN799HLKX5` (via GTM) and `G-3KT4C16M4V` all firing
- WhatConverts, DataFast, VisibilityKit all loading
- Google and Bing verification tags present on all 362 pages
- MX unchanged throughout; mail confirmed by real delivery

## Two bugs caught at the verification gate

Both would have failed **silently** — no error, no console warning:

- `EXT_PUBLIC_DATAFAST_ID` — missing the leading `N`, so DataFast never loaded
- `NEXT_PUBLIC_GA4_ID` set to `3KT4C16M4V` without the `G-` prefix, so that
  property emitted `gtag('config','3KT4C16M4V')` and would have recorded nothing

The lesson: verify *rendered output*, not the dashboard. A tracking tag that is
misconfigured looks exactly like one that is absent, and neither complains.

## Records deliberately not carried

`mail` and `admin` (dead Linode host, all ten common ports verified closed),
`_domainconnect` (GoDaddy-only automation), `email` (GoDaddy Email Marketing,
no valid HTTPS), `link` (an internal indexer app, not currently needed).

One record was nearly lost: a Bing Webmaster verification CNAME on a random
32-hex hostname. Neither a `dig` sweep nor Cloudflare's own scan could find it,
because zone transfers are refused and the name is unguessable. **The
registrar's own record list is the only complete source** — page through it
before switching nameservers.

## Rollback (available while GoDaddy hosting remains active)

In Cloudflare, revert the two records:

    A      @     216.150.1.1                          →  34.149.86.124
    CNAME  www   530b5dc4c634bf7f.vercel-dns-016.com  →  host.websiteprohosting.com

Roughly five minutes, one TTL. Use the records, not the nameservers —
reverting nameservers propagates far more slowly.

## Still open

- **Export WordPress before the GoDaddy hosting lapses.** Content, and the
  Gravity Forms entries — those are patient enquiries with names and phone
  numbers. This is the only item with a real deadline.
- Submit the sitemap in Search Console. No Change of Address filing; the domain
  did not change.
- Two GTM edits: repoint `Schedule_Appointment` at a Zocdoc `href` rather than
  the old button text, and add a trigger on the contact form's success event.
- Test the contact form end-to-end now that it delivers to the practice inbox.
