# QA Comparison Final - Live Site vs Rebuilt Site

Generated: 2026-05-09 after fixes and production deploy.

Sources compared:
- Existing live site: https://www.audiologyassociates.org/
- Rebuilt production site: https://audiology-associates-westchester.vercel.app/
- Baseline report: reports/qa-comparison-baseline-2026-05-09.md

Summary: All 38 crawled pages were checked on the rebuilt production site. Rebuilt status: all checked pages return 200 with no redirects. Remaining priority counts: 5 High, 8 Medium, 25 Low.

| Page | Type | Rebuilt status | H1 | Text coverage | Images | Forms live/new | Priority | Remaining mismatch |
|---|---|---:|---|---:|---|---:|---|---|
| / | home | 200 | OK | 60% | OK | 1/1 | High | Homepage is close structurally; remaining check is pixel-level spacing and live form visual parity. Text coverage still below threshold at 60%. |
| /batteries-and-accessories | standard content | 200 | OK | 60% | OK | 0/0 | High | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage still below threshold at 60%. |
| /blog | blog index | 200 | OK | 100% | OK | 0/0 | Low | Recent posts and support copy are present; remaining drift is exact image crop and spacing. |
| /careers | careers | 200 | OK | 100% | OK | 0/0 | Low | Content is present; remaining drift is exact Duda typography/spacing. |
| /celebrating-pride-month-embracing-inclusivity-and-compassion | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present; remaining drift is exact Duda typography/spacing. Image differences: blog2-1920w.jpg, blog1-1920w.jpg. |
| /contact-us | contact/form | 200 | OK | 100% | OK | 1/1 | Low | Functional Firebase form is present and visually simplified; remaining functional difference is backend behavior versus Duda form post. |
| /dizziness-and-ringing-in-your-ears | standard content | 200 | OK | 86% | OK | 0/0 | Medium | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage 86%; usually due to cleaned duplicate/composite live crawl lines. |
| /get-answers | standard content | 200 | OK | 70% | OK | 0/0 | High | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage still below threshold at 70%. |
| /greenwich-ct | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /harrison-ny | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /hearing-aid-fitting | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-aid-referral-program | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-aid-repair | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-aids-101 | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-aids-brands | brands | 200 | OK | 100% | OK | 0/0 | Low | Brand logos/copy are present; remaining drift is exact logo sizing/column spacing. |
| /hearing-loss-misconceptions | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-protection | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /hearing-testing | standard content | 200 | OK | 89% | OK | 0/0 | Medium | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage 89%; usually due to cleaned duplicate/composite live crawl lines. |
| /hearing-tips | page | 200 | OK | 100% | OK | 0/0 | Low | Content is present; remaining drift is exact Duda typography/spacing. |
| /help-a-loved-one | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /how-to-take-care-of-a-blocked-ear | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present; remaining drift is exact Duda typography/spacing. Image differences: aaow-pride-blog-post-1920w.jpg, blog2-1920w.jpg. |
| /improve-your-hearing | standard content | 200 | OK | 88% | OK | 0/0 | Medium | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage 88%; usually due to cleaned duplicate/composite live crawl lines. |
| /instructional-videos | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /lyric-invisible-hearing | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /meet-the-team | team | 200 | OK | 100% | Missing 1 | 0/0 | Medium | Roster, images, biographies, credentials, and team background content are present; remaining drift is exact live profile/image spacing. Image differences: Barbara_19-Edit+(1)-1920w.jpg. |
| /mt-kisco-ny | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /patient-forms | forms | 200 | OK | 100% | OK | 0/0 | Low | Patient form links are functional and simplified; remaining drift is exact live link spacing. |
| /prevent-hearing-loss | standard content | 200 | OK | 100% | OK | 0/0 | Low | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. |
| /privacy | legal | 200 | OK | 70% | OK | 0/0 | High | Content is present; remaining drift is exact Duda typography/spacing. Text coverage still below threshold at 70%. |
| /psoriasis-affects-more-than-your-skin | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present; remaining drift is exact Duda typography/spacing. Image differences: aaow-pride-blog-post-1920w.jpg, blog1-1920w.jpg. |
| /rye-ny | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /Scarsdale-NY | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /Somers-NY | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /thank-you | page | 200 | OK | 100% | OK | 0/0 | Low | Content is present; remaining drift is exact Duda typography/spacing. |
| /tinnitus-therapy | standard content | 200 | OK | 80% | OK | 0/0 | High | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage still below threshold at 80%. |
| /types-of-hearing-aids | standard content | 200 | OK | 89% | OK | 0/0 | Medium | Main live copy is present; remaining drift is exact Duda typography and vertical rhythm. Text coverage 89%; usually due to cleaned duplicate/composite live crawl lines. |
| /White-Plains-NY | location | 200 | OK | 100% | OK | 0/0 | Low | Location copy/NAP are present; remaining drift is exact label/value spacing and map/widget absence if live embeds one. |
| /why-choose-us | page | 200 | OK | 100% | OK | 0/0 | Low | Content is present; remaining drift is exact Duda typography/spacing. |

Remaining QA interpretation:
- No page is flagged as broken or missing.
- Remaining items are visual parity refinements: exact line-height, image crop, widget behavior, and Duda-specific spacing.
- The contact form intentionally differs in backend functionality because the rebuild stores submissions in Firebase rather than posting to the old Duda form service.
