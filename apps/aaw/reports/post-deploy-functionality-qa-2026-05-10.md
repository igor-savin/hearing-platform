# Functionality QA Report

Base URL: https://audiology-associates-westchester.vercel.app
Run date: 2026-05-11T05:22:14.972Z

## Summary

- Crawled rebuilt pages checked: 38
- Page-level failures: 0
- Internal links checked: 33
- Broken internal links: 0
- Redirect checks passed: 5/5
- Sitemap/robots/llms checks passed: 3/3
- Tracking/widget checks passed: 7/7
- Form structure/API checks passed: 3/3
- External PDF/widget assets checked: 4
- External PDF/widget asset failures: 0

## Failures

No automated functionality failures found.

## Page Checks

| Path | HTTP | Header Controls | Phone Links | Appointment Links | Forms | Result |
| --- | --- | --- | --- | --- | --- | --- |
| / | 200 | 40 | 2 | 1 | 1 | Pass |
| /batteries-and-accessories | 200 | 40 | 2 | 1 |  | Pass |
| /blog | 200 | 40 | 2 | 1 |  | Pass |
| /careers | 200 | 40 | 2 | 1 |  | Pass |
| /celebrating-pride-month-embracing-inclusivity-and-compassion | 200 | 40 | 2 | 1 |  | Pass |
| /contact-us | 200 | 40 | 4 | 1 | 1 | Pass |
| /dizziness-and-ringing-in-your-ears | 200 | 40 | 2 | 1 |  | Pass |
| /get-answers | 200 | 40 | 2 | 1 |  | Pass |
| /greenwich-ct | 200 | 40 | 2 | 1 |  | Pass |
| /harrison-ny | 200 | 40 | 3 | 1 |  | Pass |
| /hearing-aid-fitting | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-aid-referral-program | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-aid-repair | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-aids-101 | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-aids-brands | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-loss-misconceptions | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-protection | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-testing | 200 | 40 | 2 | 1 |  | Pass |
| /hearing-tips | 200 | 40 | 2 | 1 |  | Pass |
| /help-a-loved-one | 200 | 40 | 2 | 1 |  | Pass |
| /how-to-take-care-of-a-blocked-ear | 200 | 40 | 2 | 1 |  | Pass |
| /improve-your-hearing | 200 | 40 | 2 | 1 |  | Pass |
| /instructional-videos | 200 | 40 | 2 | 1 |  | Pass |
| /lyric-invisible-hearing | 200 | 40 | 2 | 1 |  | Pass |
| /meet-the-team | 200 | 40 | 2 | 1 |  | Pass |
| /mt-kisco-ny | 200 | 40 | 2 | 1 |  | Pass |
| /patient-forms | 200 | 40 | 2 | 1 |  | Pass |
| /prevent-hearing-loss | 200 | 40 | 2 | 1 |  | Pass |
| /privacy | 200 | 40 | 2 | 1 |  | Pass |
| /psoriasis-affects-more-than-your-skin | 200 | 40 | 2 | 1 |  | Pass |
| /rye-ny | 200 | 40 | 2 | 1 |  | Pass |
| /Scarsdale-NY | 200 | 40 | 3 | 1 |  | Pass |
| /Somers-NY | 200 | 40 | 3 | 1 |  | Pass |
| /thank-you | 200 | 40 | 2 | 1 |  | Pass |
| /tinnitus-therapy | 200 | 40 | 2 | 1 |  | Pass |
| /types-of-hearing-aids | 200 | 40 | 2 | 1 |  | Pass |
| /White-Plains-NY | 200 | 40 | 3 | 1 |  | Pass |
| /why-choose-us | 200 | 40 | 2 | 1 |  | Pass |

## Form and API Checks

| Path | Pass | Detail |
| --- | --- | --- |
| / | yes | form: present; required name: present; required phone: present; email field: present; required message: present; tracked submit: present |
| /contact-us | yes | form: present; required name: present; required phone: present; email field: present; required message: present; tracked submit: present |
| /api/contact | yes | POST 200 |

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
| Zocdoc Embed Script | offsiteschedule.zocdoc.com/plugin/embed | yes |

## External PDF and Widget Assets

| Asset | HTTP | Pass | Method |
| --- | --- | --- | --- |
| https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Audiology-Associates-of-Westchester-Privacy-Notice.pdf | 200 | yes | HEAD |
| https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/New%20Adult%20Patient%20Forms%20-merge.pdf | 200 | yes | HEAD |
| https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Pediatric-Intake-Form-merge.pdf | 200 | yes | HEAD |
| https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Tinnitus%20Forms%20-merged.pdf | 200 | yes | HEAD |

## Manual Browser Checks To Pair With This Report

- Header dropdowns open on hover/focus and collapse when the pointer leaves the nav item.
- Zocdoc opens in a new tab or activates the embedded Zocdoc booking widget without blocking navigation.
- Contact forms can save to Firebase Firestore using the live public rules.
- Phone links trigger the device/browser call handler.
- Patient form PDFs open in a new browser tab.
