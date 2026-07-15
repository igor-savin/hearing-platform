# Functionality QA Report

Base URL: http://localhost:3004
Run date: 2026-07-15T03:15:23.653Z

## Summary

- Crawled rebuilt pages checked: 38
- Page-level failures: 0
- Internal links checked: 154
- Broken internal links: 0
- Redirect checks passed: 5/5
- Sitemap/robots/llms checks passed: 3/3
- Tracking/widget checks passed: 7/7
- Form structure/API checks passed: 3/3
- External PDF/widget assets checked: 0
- External PDF/widget asset failures: 0

## Failures

No automated functionality failures found.

## Page Checks

| Path | HTTP | Header Controls | Phone Links | Appointment Links | Forms | Result |
| --- | --- | --- | --- | --- | --- | --- |
| / | 200 | 139 | 5 | 3 | 1 | Pass |
| /batteries-and-accessories | 200 | 139 | 4 | 2 |  | Pass |
| /blog | 200 | 139 | 4 | 2 |  | Pass |
| /careers | 200 | 139 | 5 | 2 |  | Pass |
| /celebrating-pride-month-embracing-inclusivity-and-compassion | 200 | 139 | 5 | 2 |  | Pass |
| /contact-us | 200 | 139 | 12 | 2 | 1 | Pass |
| /dizziness-and-ringing-in-your-ears | 200 | 139 | 5 | 3 |  | Pass |
| /get-answers | 200 | 139 | 5 | 3 |  | Pass |
| /greenwich-ct | 200 | 139 | 5 | 2 |  | Pass |
| /harrison-ny | 200 | 139 | 7 | 2 |  | Pass |
| /hearing-aid-fitting | 200 | 139 | 6 | 3 |  | Pass |
| /hearing-aid-referral-program | 200 | 139 | 4 | 2 |  | Pass |
| /hearing-aid-repair | 200 | 139 | 6 | 3 |  | Pass |
| /hearing-aids-101 | 200 | 139 | 4 | 2 |  | Pass |
| /hearing-aids-brands | 200 | 139 | 4 | 2 |  | Pass |
| /hearing-loss-misconceptions | 200 | 139 | 5 | 3 |  | Pass |
| /hearing-protection | 200 | 139 | 6 | 3 |  | Pass |
| /hearing-testing | 200 | 139 | 6 | 3 |  | Pass |
| /hearing-tips | 200 | 139 | 4 | 2 |  | Pass |
| /help-a-loved-one | 200 | 139 | 5 | 3 |  | Pass |
| /how-to-take-care-of-a-blocked-ear | 200 | 139 | 5 | 2 |  | Pass |
| /improve-your-hearing | 200 | 139 | 5 | 3 |  | Pass |
| /instructional-videos | 200 | 139 | 4 | 2 |  | Pass |
| /lyric-invisible-hearing | 200 | 139 | 4 | 2 |  | Pass |
| /meet-the-team | 200 | 139 | 4 | 2 |  | Pass |
| /mt-kisco-ny | 200 | 139 | 5 | 2 |  | Pass |
| /patient-forms | 200 | 139 | 4 | 2 |  | Pass |
| /prevent-hearing-loss | 200 | 139 | 5 | 3 |  | Pass |
| /privacy | 200 | 139 | 4 | 2 |  | Pass |
| /psoriasis-affects-more-than-your-skin | 200 | 139 | 5 | 2 |  | Pass |
| /rye-ny | 200 | 139 | 5 | 2 |  | Pass |
| /Scarsdale-NY | 200 | 139 | 7 | 2 |  | Pass |
| /Somers-NY | 200 | 139 | 7 | 2 |  | Pass |
| /thank-you | 200 | 139 | 4 | 2 |  | Pass |
| /tinnitus-therapy | 200 | 139 | 6 | 3 |  | Pass |
| /types-of-hearing-aids | 200 | 139 | 4 | 2 |  | Pass |
| /White-Plains-NY | 200 | 139 | 7 | 2 |  | Pass |
| /why-choose-us | 200 | 139 | 6 | 3 |  | Pass |

## Form and API Checks

| Path | Pass | Detail |
| --- | --- | --- |
| / | yes | form: present; required name: present; required phone: present; email field: present; required message: present; tracked submit: present |
| /contact-us | yes | form: present; required name: present; required phone: present; email field: present; required message: present; tracked submit: present |
| /api/contact | yes | validation POST 400 |

## Redirect Checks

| From | HTTP | Location | Pass | Detail |
| --- | --- | --- | --- | --- |
| /privacy-policy | 301 | /privacy | yes | Pass |
| /hearing-aid-brands | 301 | /hearing-aids-brands | yes | Pass |
| /locations | 301 | /contact-us | yes | Pass |
| /services | 301 | /hearing-testing | yes | Pass |
| /null | 301 | / | yes | Pass |

## Sitemap, Robots, and LLM Checks

| Path | HTTP | Pass | Detail |
| --- | --- | --- | --- |
| /sitemap.xml | 200 | yes | Pass |
| /robots.txt | 200 | yes | Pass |
| /llms.txt | 200 | yes | Pass |

## Tracking and Widget Checks

| Integration | Expected Value | Present |
| --- | --- | --- |
| Google Tag Manager | GTM-T6X664N | yes |
| Facebook Pixel | 2514209258866599 | yes |
| Piwik Pro | 33153b90-8d23-4967-9b24-5a3b3f41f3f7 | yes |
| Snowplow App | d8404b56 | yes |
| Snowplow Collector | d32hwlnfiv2gyn.cloudfront.net | yes |
| Zocdoc Practice | 69184 | yes |
| Zocdoc Lazy Loader | loadZocdocPlugin | yes |

## External PDF and Widget Assets

| Asset | HTTP | Pass | Method |
| --- | --- | --- | --- |

## Manual Browser Checks To Pair With This Report

- Header dropdowns open on hover/focus and collapse when the pointer leaves the nav item.
- Zocdoc opens in a new tab or activates the embedded Zocdoc booking widget without blocking navigation.
- Contact forms can save to Firebase Firestore using the live public rules.
- Phone links trigger the device/browser call handler.
- Patient form PDFs open in a new browser tab.
