# Local SEO Citations (`sameAs`)

Recovered 2026-08-11 from the JSON-LD on the live Duda homepage at
`https://www.audiologyassociates.org/`, which was the only place this list was
written down. Recording it here so the list survives the Duda decommission
independently of `lib/schema.ts`.

The live markup split the citations across two `MedicalClinic` blocks — one for
White Plains (19 URLs) and one for Harrison (8) — with no overlap, for 27 unique
URLs. Both blocks describe the same organization, so they are merged into a
single `sameAs` on `organizationSchema()`.

`sameAs` asserts "this website and these listings are the same entity." That is
the whole value: keep it to profiles OF the practice.

## Carried over — 24 entries

Twenty-three of the 27 live URLs, plus the X/Twitter profile, which the rebuild
already had and the live homepage did not list.

See `entityCitations` in `lib/schema.ts` for the authoritative list, grouped by
source type (social, review/healthcare directories, NPI registries, general
business directories, maps, industry locators).

## Deliberately not carried over — 4 entries

| URL | Why |
| --- | --- |
| `carecredit.com/doctor-locator/…/Audiology-Associates-of-Westchester/` | Returns 404. Verified twice on 2026-08-11. |
| `theboxwood.org/audiology-associates-westchester/` | Returns 404. Verified twice on 2026-08-11. |
| `prweb.com/releases/2015/12/prweb13117331.htm` | A 2015 press release. Press coverage is about the entity, not a profile of it. |
| `healthcare6.com/physician/white-plains-ny/debra-skorney-1512352.html` | A profile of an individual audiologist, not the organization. Debra Skorney is not on the current team; see `providerProfiles` in `lib/team.ts`. |

If any of these should be reinstated, the CareCredit and Boxwood URLs need
working replacements first — do not re-add a 404.

## Entries worth a second look

Live and carried over, but flagged:

- `superpages.com/bp/harrison-ny/sensible-hearing-solutions-…` — filed under a
  different business name, "Sensible Hearing Solutions," at the Harrison
  address. Plausibly a predecessor name. If it is a different business, remove
  it: pointing `sameAs` at another entity is worse than omitting a citation.
- Several listings describe the practice at White Plains, Scarsdale Medical
  Group, or Burke Rehabilitation Hospital. Only Harrison and Somers are physical
  offices (confirmed 2026-08-11, see `local-seo-checklist.md`). These are still
  valid identity references, but the underlying directory entries are stale and
  worth correcting at the source.

## Verification

All 27 URLs were requested on 2026-08-11 with a browser user agent. Beyond the
two 404s above, the non-200 responses were `403` bot blocks (Yelp, YellowPages,
Superpages, DexKnows, npidb, find-open, WhitePages) and one connection failure
(HealthyHearing). Those are anti-automation defenses, not dead links — confirm
in a real browser before treating any of them as broken.
