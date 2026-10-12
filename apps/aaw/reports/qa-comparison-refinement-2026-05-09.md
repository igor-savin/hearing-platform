# QA Comparison Refinement - Live Site vs Rebuilt Site

Generated: 2026-05-09 after the follow-up designer/engineer fixes and production deploy.

Compared sources: live https://www.audiologyassociates.org vs rebuilt production https://audiology-associates-westchester.vercel.app.

Summary: 38 pages checked. High: 0. Medium: 0. Low/pass: 38.

| Page | Type | Status | H1 | Text coverage | Images | Priority | Result |
|---|---|---:|---|---:|---|---|---|
| / | home | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /batteries-and-accessories | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /blog | blog index | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /careers | careers | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /celebrating-pride-month-embracing-inclusivity-and-compassion | blog post | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /contact-us | contact | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Firebase submission intentionally replaces old Duda form post. Previous text-coverage issue resolved. |
| /dizziness-and-ringing-in-your-ears | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /get-answers | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /greenwich-ct | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /harrison-ny | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-aid-fitting | service | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-aid-referral-program | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-aid-repair | service | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-aids-101 | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-aids-brands | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-loss-misconceptions | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-protection | service | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-testing | service | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /hearing-tips | page | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /help-a-loved-one | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /how-to-take-care-of-a-blocked-ear | blog post | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /improve-your-hearing | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /instructional-videos | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /lyric-invisible-hearing | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /meet-the-team | team | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /mt-kisco-ny | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /patient-forms | form | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /prevent-hearing-loss | educational | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /privacy | legal | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /psoriasis-affects-more-than-your-skin | blog post | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /rye-ny | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /Scarsdale-NY | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /Somers-NY | location | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /thank-you | page | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /tinnitus-therapy | service | 200 | OK | 90% | OK | Low | Matches current live content/functionality within rebuild constraints. Previous text-coverage issue resolved. |
| /types-of-hearing-aids | hearing-aids | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /White-Plains-NY | location | 200 | OK | 92% | OK | Low | Matches current live content/functionality within rebuild constraints. |
| /why-choose-us | page | 200 | OK | 100% | OK | Low | Matches current live content/functionality within rebuild constraints. |

## Fixes Applied In This Pass

- Restored the homepage live-copy block that was causing the 60% coverage flag.
- Preserved FAQ question labels and answers on Batteries & Accessories and Get Answers pages.
- Increased Privacy Policy rendering to include the full live legal copy through the contact section.
- Matched the live thank-you page message.
- Restored contact-page hours/fax details for the office listings.
- Added live related-post image tiles to individual blog posts.
- Added the referral-program image, the tinnitus/NYHD image, and the Siemens brand logo.
- Split Duda-glued credential/legal/service lines into readable visible headings and paragraphs while preserving the underlying wording.

## Remaining Designer Notes

- No broken or missing pages were found in this pass.
- Contact form behavior remains intentionally modernized: Firebase storage replaces the old Duda form post flow.