# Body Parity Gap Report

Run date: 2026-05-10

Scope: compare rebuilt page bodies against the live Audiology Associates page structure, not just text similarity. This pass was prompted by the Rye, NY page, where the rebuilt page had similar copy but did not match the live body layout.

## Global Issues Found

| Area | Mismatch | Fix Required |
| --- | --- | --- |
| Body alignment | Rebuilt interior pages were centered like a modern article template; live pages are mostly left-aligned inside a wide Duda-style content area. | Replace generic centered body rendering with left-aligned legacy body rendering. |
| Heading treatment | Rebuilt H1/H2 styles were heavier, darker-gray, and centered; live headings are larger, regular-weight, black, and paired with thin blue divider rules. | Use live-style heading sizes, black text, and blue divider rules. |
| Section structure | Rebuilt pages flattened multiple live sections into one white block. | Restore section breaks, including white and pale-blue bands. |
| Location/service-area maps | Rebuilt service-area pages lost the map modules visible on live pages. | Add embedded map sections to service-area and office pages. |
| Local office details | Rebuilt location pages did not preserve the live address/phone/hour block placement. | Add location-specific detail blocks beside maps. |
| Paragraph splitting | Some crawled text had live paragraphs joined together, such as `protection!For years`. | Split long crawled text into readable paragraphs and manually rebuild location-page copy. |
| Link styling | Some live body links were missing or visually flattened. | Restore blue underlined text links inside body copy. |

## Page-Level Findings

| Page | Body Parity Status Before Fix | Main Issue |
| --- | --- | --- |
| `/` | Needs continued page-specific review | Homepage body has been hand-built, but future pass should continue comparing every live module below the fold. |
| `/batteries-and-accessories` | Template mismatch | Centered body template and missing live-style rules/spacing. |
| `/blog` | Mostly custom, needs review | Blog index structure exists, but body should continue to be checked against live cards and spacing. |
| `/careers` | Template mismatch | Centered body template and flattened section hierarchy. |
| `/celebrating-pride-month-embracing-inclusivity-and-compassion` | Template mismatch | Blog/article body needed left alignment and live-style typography. |
| `/contact-us` | Custom page, partial parity | Contact structure exists; should be checked against live form spacing and address placement. |
| `/dizziness-and-ringing-in-your-ears` | Template mismatch | Centered text and missing live divider treatment. |
| `/get-answers` | Template mismatch | FAQ content present, but body typography/spacing needed live-style treatment. |
| `/greenwich-ct` | Major mismatch | Missing pale-blue section, map, and live local-service layout. |
| `/harrison-ny` | Major mismatch | Missing map/address block placement and live section bands. |
| `/hearing-aid-fitting` | Template mismatch | Centered service content and missing live divider treatment. |
| `/hearing-aid-referral-program` | Template mismatch | Body needed left-aligned live typography. |
| `/hearing-aid-repair` | Template mismatch | Body needed left-aligned live typography. |
| `/hearing-aids-101` | Template mismatch | Body needed left-aligned live typography. |
| `/hearing-aids-brands` | Custom page, partial parity | Brand grid exists; should continue to be visually checked against live card spacing/logos. |
| `/hearing-loss-misconceptions` | Template mismatch | Body needed left-aligned live typography and rules. |
| `/hearing-protection` | Template mismatch | Body needed left-aligned live typography and section hierarchy. |
| `/hearing-testing` | Template mismatch | Body needed left-aligned live typography and section hierarchy. |
| `/hearing-tips` | Content gap | Live crawl contains minimal content; verify whether this page should remain live. |
| `/help-a-loved-one` | Template mismatch | Body needed left-aligned live typography and section hierarchy. |
| `/how-to-take-care-of-a-blocked-ear` | Template mismatch | Article body needed live-style typography. |
| `/improve-your-hearing` | Template mismatch | Body needed live-style typography and section hierarchy. |
| `/instructional-videos` | Template mismatch | Video/page module requires additional live-module review. |
| `/lyric-invisible-hearing` | Template mismatch | Body needed live-style typography and section hierarchy. |
| `/meet-the-team` | Custom page, partial parity | Team grid exists, but should continue to be checked against live card spacing and staff ordering. |
| `/mt-kisco-ny` | Major mismatch | Missing pale-blue section, map, and live local-service layout. |
| `/patient-forms` | Custom page, partial parity | PDF links exist; spacing should continue to be checked against live. |
| `/prevent-hearing-loss` | Template mismatch | Body needed live-style typography and section hierarchy. |
| `/privacy` | Template mismatch | Legal body needed live-style typography. |
| `/psoriasis-affects-more-than-your-skin` | Template mismatch | Article body needed live-style typography. |
| `/rye-ny` | Major mismatch | Missing live section structure, pale-blue band, map, blue rule, and left-aligned body copy. |
| `/Scarsdale-NY` | Major mismatch | Missing map/address block placement and live section bands. |
| `/Somers-NY` | Major mismatch | Missing map/address block placement and live section bands. |
| `/thank-you` | Minor | Simple confirmation page; verify against live if still used. |
| `/tinnitus-therapy` | Template mismatch | Body needed live-style typography and section hierarchy. |
| `/types-of-hearing-aids` | Template mismatch | Body needed live-style typography and section hierarchy. |
| `/White-Plains-NY` | Major mismatch | Missing map/address block placement and live section bands. |
| `/why-choose-us` | Template mismatch | Body needed live-style typography and section hierarchy. |

## Fix Direction

- First pass: fix shared body rendering and the seven location/service-area pages.
- Second pass: verify screenshots page by page after deployment and continue tightening bespoke modules where live pages use unique layouts.
