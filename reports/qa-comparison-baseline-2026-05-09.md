# QA Comparison Baseline - Live Site vs Rebuilt Site

Generated: 2026-05-09

Sources compared:
- Existing live site: https://www.audiologyassociates.org/
- Rebuilt production site: https://audiology-associates-westchester.vercel.app/
- Crawl inventory: data/crawl.json

Method: page status checks, H1/title comparison, sampled live-body text coverage, key image presence, form-count comparison, and QA visual/functionality notes by template/page type. This baseline is intentionally strict and lists remaining visual drift, not just broken pages.

Global findings before fixes:
- Header/footer are much closer to the live site than the original rebuild, but not yet pixel-perfect at every viewport.
- Most standard pages now use the correct live content, but typography, heading spacing, and CTA placement still need closer live-Duda matching.
- Team and contact pages are the largest remaining mismatches because the live site has long profile/form-specific body structures.
- Functionality is generally present, but form behavior differs because the rebuild saves to Firebase while the live Duda form posts through the old platform.

| Page | Type | Rebuilt status | H1 | Text coverage | Images | Forms live/new | Priority | Remaining mismatch |
|---|---|---:|---|---:|---|---:|---|---|
| / | home | 200 | OK | 50% | OK | 1/1 | High | Homepage broadly follows the live structure, but lower-page form styling and some spacing still feel rebuilt rather than Duda-native. Only 50% of sampled long live text matched in rebuilt page. |
| /batteries-and-accessories | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /blog | blog index | 200 | OK | 75% | OK | 0/0 | High | Post list and support copy are present; spacing/image proportions should be tightened against the live Recent Posts layout. Only 75% of sampled long live text matched in rebuilt page. |
| /careers | careers | 200 | OK | 100% | OK | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. |
| /celebrating-pride-month-embracing-inclusivity-and-compassion | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. Missing/changed key image assets: blog2-1920w.jpg, blog1-1920w.jpg. |
| /contact-us | contact/form | 200 | OK | 60% | OK | 1/1 | High | Functional form works, but visual form treatment is modern/card-like and fields do not match the live Duda form one-to-one. Only 60% of sampled long live text matched in rebuilt page. |
| /dizziness-and-ringing-in-your-ears | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /get-answers | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /greenwich-ct | location | 200 | OK | 100% | OK | 0/0 | Medium | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. |
| /harrison-ny | location | 200 | OK | 100% | OK | 0/0 | Medium | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. |
| /hearing-aid-fitting | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-aid-referral-program | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-aid-repair | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-aids-101 | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-aids-brands | brands | 200 | OK | 100% | OK | 0/0 | Medium | Brand copy/logos are present; logo sizing, two-column layout, and spacing still need closer matching to the live page. |
| /hearing-loss-misconceptions | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-protection | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-testing | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /hearing-tips | page | 200 | OK | 100% | OK | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. |
| /help-a-loved-one | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /how-to-take-care-of-a-blocked-ear | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. Missing/changed key image assets: aaow-pride-blog-post-1920w.jpg, blog2-1920w.jpg. |
| /improve-your-hearing | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /instructional-videos | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /lyric-invisible-hearing | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /meet-the-team | team | 200 | OK | 38% | Missing 1 | 0/0 | High | Provider grid is present, but live page includes full provider biographies, credentials, and profile text that are simplified/missing in the rebuild. Only 38% of sampled long live text matched in rebuilt page. Missing/changed key image assets: Barbara_19-Edit+(1)-1920w.jpg. |
| /mt-kisco-ny | location | 200 | OK | 100% | OK | 0/0 | Medium | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. |
| /patient-forms | forms | 200 | OK | 100% | OK | 0/0 | Medium | Download links are functional, but button layout is more app-like than the simple live form-link presentation. |
| /prevent-hearing-loss | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /privacy | legal | 200 | OK | 100% | OK | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. |
| /psoriasis-affects-more-than-your-skin | page | 200 | OK | 100% | Missing 2 | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. Missing/changed key image assets: aaow-pride-blog-post-1920w.jpg, blog1-1920w.jpg. |
| /rye-ny | location | 200 | OK | 100% | OK | 0/0 | Medium | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. |
| /Scarsdale-NY | location | 200 | OK | 80% | OK | 0/0 | High | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. Only 80% of sampled long live text matched in rebuilt page. |
| /Somers-NY | location | 200 | OK | 67% | OK | 0/0 | High | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. Only 67% of sampled long live text matched in rebuilt page. |
| /thank-you | page | 200 | OK | 100% | OK | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. |
| /tinnitus-therapy | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /types-of-hearing-aids | standard content | 200 | OK | 100% | OK | 0/0 | Medium | Main copy is present; standard page typography, heading hierarchy, and CTA spacing should be tightened against live Duda pages. |
| /White-Plains-NY | location | 200 | OK | 67% | OK | 0/0 | High | Content and NAP are present, but location detail rows need to more closely match live label/value hierarchy and spacing. Only 67% of sampled long live text matched in rebuilt page. |
| /why-choose-us | page | 200 | OK | 100% | OK | 0/0 | Medium | Content is present, but page should be visually checked for exact Duda typography/spacing. |

Fix plan from this baseline:
1. Add full live-style team biography/detail content under the staff roster.
2. Restyle contact/home forms to remove modern card treatment and align closer to the Duda form surface.
3. Tighten patient form links and standard page CTA/button styling.
4. Re-run the same page-by-page report after publishing.
