# Pixel and Widget Parity

Live-site tracking and appointment integrations preserved in the rebuild:

Verified in the production build output after `npm run build`.

| Integration | Live value | Rebuild implementation |
| --- | --- | --- |
| Google Tag Manager | `GTM-T6X664N` | Loaded by `components/AnalyticsScripts.tsx`, with matching `noscript` iframe |
| Facebook Pixel | `2514209258866599` | Loaded by `components/AnalyticsScripts.tsx`, with matching `noscript` image |
| Piwik Pro / LocalEdge | `33153b90-8d23-4967-9b24-5a3b3f41f3f7` | Loaded by `components/AnalyticsScripts.tsx` against `https://localedge.piwik.pro/` |
| Zocdoc widget | Practice ID `69184` | Loaded by `components/AnalyticsScripts.tsx`; appointment CTAs use `.zd-plugin`, `data-type="book-button"`, and `data-practice-id="69184"` |
| Duda/Snowplow platform telemetry | App ID `d8404b56`; collector `d32hwlnfiv2gyn.cloudfront.net` | Loaded by `components/AnalyticsScripts.tsx` for live-site parity |

Additional conversion events pushed to `dataLayer`:

- `phone-header`
- `phone-hero`
- `phone-sidebar`
- `phone-footer`
- `appointment-header`
- `appointment-hero`
- `contact-submit`

Notes:

- `NEXT_PUBLIC_GA4_ID` remains optional because the live crawl exposed GTM directly rather than a hard-coded GA4 measurement ID.
- Tracking IDs can be overridden with environment variables if the business changes vendors before launch.
- The Duda/Snowplow tag is old-platform telemetry. It is included for exact parity, but can be disabled later by setting a business policy to remove legacy vendor telemetry.
