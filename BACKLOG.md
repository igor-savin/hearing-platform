# Backlog — California Hearing Center & Audiology Associates

Shared running list for both practices. **Add anything here yourself** — a line under
"Igor's inbox" is enough, however rough. Claude reads this file at the start of a
session and keeps the rest of it current.

Last updated: 26 August 2026 (GBP products live; three new bugs logged)

---

## Igor's inbox — unsorted, add freely

- **AAW article hero images are cropped and blown up** (raised 26 Aug). Root cause found,
  fix is small. `components/PageRenderer.tsx` renders every article image with
  `object-cover` into a 16:9 / 16:10 box — line **3529** (article hero, 1200×675),
  line **3405** (Related articles thumbs), line **5302** (blog index cards). The
  manufacturer device shots are *square* cutouts (Signia MaX and Phonak EON are 640×640,
  Oticon Reveal 540×540), so `object-cover` upscales them ~1.9× and slices the top and
  bottom off the device. That is exactly the giant blurry half-a-hearing-aid on
  `/signia-max-what-we-know` and `/phonak-eon-what-we-know`, and the oversized thumbs at
  the foot of `/fortell-hearing-aids-what-we-know`.
  Fix: add a `fit?: "cover" | "contain"` hint to the image type, default `cover` so
  photographs are unaffected, and set `contain` (on white, with padding) for the device
  cutouts. Three render sites, one flag. Do CHC at the same time — same asset shape.
- **Somers "Get directions" points at the wrong pin** (raised 26 Aug). Diagnosed; the
  correct link is already in the repo. See "Bugs with a known fix" below.
- **GBP Q&A — mine competitor reviews first** (raised 26 Aug). Google Business Profile
  has a Q&A section, and an owner may post a question and answer it themselves, so this
  is a real surface we are not using on any listing. Igor's ordering, which is the right
  one: analyse sentiment and recurring keywords/phrases in *competitors'* customer
  reviews first, then let what patients actually complain about and praise decide which
  questions get seeded. Deliverable: a phrase-frequency and sentiment read across the
  competitor set for each market, then a seeded Q&A set per listing. Constraint: answers
  must be true of the practice — Google removes Q&A that reads as a keyword dump.
- Recheck blog functionality on both sites (raised 26 Aug, not yet scoped)
- Scheduling for Threads posts — finish out the Meta brands (raised 26 Aug)
- Scheduling for Instagram posts — finish out the Meta brands (raised 26 Aug)

---

## Bugs with a known fix, ready to do

**1. Somers "Get directions" resolves to the building next door.**
`components/PageRenderer.tsx:3180`, in `LegacyLocationSectionView`, builds the button
from a plain address string (`mapQuery: "325 NY 100 Somers NY 10589"`, line 662) and
never consults `directionsUrl`. A bare address query resolves to Google's *address pin*,
not the Business Profile marker.
The correct link already exists at `lib/site.ts:267` — `cid=16978045113785245584`, which
decodes to the exact same business ID (`0xeb9e2213d3b9df90`) Igor identified. Nothing
needs looking up.
Also affected and not yet reported by anyone: **Harrison has the identical bug on three
sections** (lines 638, 701, 726), and the *embedded map* on those pages uses the same
query string, so the pin inside the map is wrong too — not just the button. The three
remaining `mapQuery` values are town names (Rye, Greenwich, Mt. Kisco) and are correct
as they stand. The footer is right because it uses `somers.directionsUrl` directly.

**2. Two duplicate Google Business Profiles.** The Business Profile Manager lists six
businesses at 67% verified. **AAW Somers is marked Duplicate and unverified** — a
management request was declined, it has no Products section, and it cannot be edited
from this account. Worth establishing whether the monthly GBP posts have actually been
reaching Somers at all, because it is the same profile. Separately there is a **duplicate
CHC San Mateo** (no store code) alongside the verified one (`349732a`). Duplicates split
reviews and ranking signals.

---

## In flight

Nothing. Both repos are clean and level with their remotes.

---

## Next up, in order

1. **Fix the sitemap `lastmod` fallback — 320 of 700 CHC URLs are machine-stamped.**
   `genContentDates.mjs` rule 4 says any URL with no content fragment of its own takes
   the commit date of `app/site/CaliforniaHearingSite.tsx`. That is 320 URLs, 46% of the
   site — products, brands, most service pages, the homepage, `/the-blog/`, `/reviews/`.
   We touch that component in almost every batch, so those 320 all claim to have changed
   that day whether or not a word of their content moved. The generator's own header
   warns against exactly this: *a lastmod that is provably wrong is one Google learns to
   discount for the whole site.* We fixed machine-stamped copy in the audit and left a
   machine-stamped date one layer up.
   The fix: hash each page's resolved content, store hash alongside date, and only move
   the date when the hash changes. Carry the previous date forward otherwise. Deterministic,
   honest, and it makes the component's commit date irrelevant.
   Check AAW's `scripts/refresh-content-dates.mjs` for the same fallback — its last run
   moved 6 lines, which suggests it does not have this bug, but confirm.

2. **Insurance and coverage cluster.** Two pages per site to test the thesis before
   committing to the set. "Does Kaiser cover hearing aids in California" and Medicare
   Advantage hearing benefits for CHC; the New York equivalents for AAW. Research
   first — no invented policy detail on a YMYL page.

3. **Audit the 412-entry redirect map by impressions, not clicks.** The Pride post was
   301'd to `/the-blog/` with its content deleted and nobody caught it, because every
   check we ran sorted by clicks and it is a top-*impressions* page (716,336
   impressions, position 6.6, 0.1% CTR). There may be more like it. This is the single
   highest-expected-value item on the list.

4. **June screening-week plan.** Partner list, outreach timeline, page copy. The only
   item here with a fixed deadline, because partner bookings need months of lead time.


---

## Standing / recurring

- **Watch Fortell's job postings.** Their CEO says hiring audiologists is what limits
  clinic openings, so postings will reveal the real San Francisco and Palo Alto dates
  months before the website does. Same for any Westchester expansion.
- **Repeat the launch-page play on every platform release**, both sites, within days of
  the announcement. Signia MaX proved it: page one for three city-qualified queries in
  24 hours. Oticon, Phonak, ReSound, Starkey, Widex.
- **Get listed on manufacturer provider locators** for each new platform. Signia's own
  locator outranked calhearing.com for "signia max palo alto" — with a competitor's
  practice on it.
- **Update the Fortell pages** when independent lab data appears. HearAdvisor has tested
  prototypes and says published data is coming.

---

## Needs a decision from Igor

- **Google Tag Manager access.** Container `GTM-M9CDTZP` holds five dead conversion tags
  and nobody on igorsavin@gmail.com can edit it. The sites now fire their own events so
  this is no longer urgent, but until it is sorted the second GA4 property
  (`G-XN799HLKX5`, the one most historic reporting sits in) cannot receive the new
  events. Worth finding out who owns that container.
- **Bot traffic is inflating GA4.** Direct sessions up 328% week on week, Singapore up
  707%, Ashburn Virginia up 1,140% — Ashburn is an AWS region. Every recent number on
  the CHC property is contaminated until this is filtered.
- **The two GA4 properties.** `G-3KT4C16M4V` (which the site configures directly, and
  where the new conversion events land) and `G-XN799HLKX5` (via GTM, where the history
  is). Running both is why no number has ever agreed with another. Worth choosing one as
  the system of record.
- **PRLog syndication.** The press release currently outranks calhearing.com's own page
  for "signia max palo alto". Worth deciding whether to keep feeding a third-party
  domain that then competes with you, and at minimum ensuring releases link back with
  real anchor text.
- **Uncommitted work sitting in both repos**, none of it mine: CHC has the starter-template
  cleanup (Drizzle, Vite, the Cloudflare worker, the `package.json` rename); AAW has
  `Header.tsx`, `ZocdocButton.tsx`, `globals.css`, `next.config.ts` and others. Say the
  word and either gets a ship block.
- **Two `ship.sh` fixes are uncommitted in both repos**, and they ride along with the
  next commit that touches scripts. (a) `--no-pager`, so the diffstat does not open in
  `less` and look like a hang. (b) The existence guard now accepts a path that is absent
  from disk but still tracked in git — i.e. a deletion or a rename's old name. Before
  this, any commit that removed a file failed the guard *after* the script had already
  switched branches.
- ~~Named clinician per city page~~ — **decided 26 Aug: no.** Doctors rotate between the
  offices; the brand is the durable thing, and naming one per city would be a staffing
  claim we cannot support.
- ~~City attribution for the 56 Google reviews~~ — **decided 26 Aug: no.** Reviews are of
  California Hearing Center as a whole, across both offices, and the city pages now say
  exactly that. A comment in `PracticeReviews` records why, so nobody re-opens it.

---

## Done — 26 August 2026

| Commit | What |
|---|---|
| `aa31b35`, `96b9139` | AAW site audit: reviewers named, FAQs rendered, stamped copy cleared |
| `dbbdb43` → merged | CHC site audit: four top pages restored, CLS and LCP fixed, copy cleared |
| both | **Conversion tracking rebuilt on both sites.** The GTM container was a WordPress artifact — `Schedule_Appointment` fired on *any* click whose element text contained the old header CTA, which is how the Pride post got credited with 197 bookings from 16-second sessions. Both sites now name their own conversions in code. Verified firing on production. |
| `fbf16f6` | **52 city pages folded into county hubs.** Kept 24 for catchment plus 8 that earn clicks; the 52 retired earned six clicks in 90 days between them, 21 with no impressions at all. Prose preserved as anchored hub sections. 0 chains, 0 sitemap leaks, 0 orphan links. |
| `b10eada` | CHC Fortell reference page |
| `3968c6a` | AAW Fortell reference page |
| `3ebb545` + `a4c973f` | **CHC: 24 catchment city pages, Portola Valley slug fix, affirming-care page, Pride post restored.** Visit panel (office, drive, parking, Caltrain where a station exists, booking CTA) plus a practice-level reviews block on all 24 — 5.0/203 combined across both offices, three verbatim reviews per page chosen by path hash, never attributed to the city. Portola Valley slug, hero image filename and redirect all corrected. `/lgbtq-affirming-hearing-care/` published. The Pride post — 716,336 impressions, 301'd to `/the-blog/` with its content deleted — restored at its original URL and rewritten to answer its own question in the first sentence. 0 of 9,035 rendered images missing dimensions. |
| GBP | **Three new products across the Google Business Profiles.** Signia MaX and Phonak EON added to San Mateo, San Carlos and Harrison — six entries, all approved or pending review. Oticon Reveal turned out to be on all three already. No price on any (none is published, and inventing one is a false claim on a medical profile); descriptions match the house pattern set by the existing Oticon Reveal entry; each button links to that practice's own product page. Somers got nothing — it is an unverified duplicate this account cannot edit. |
| `38ca2b2` | **AAW: `/lgbtq-affirming-hearing-care`**, the New York version — Gender Recognition Act, and 104,000 New Yorkers living with diagnosed HIV with 57% aged 50+. Linked from two service hubs. |

### Submitted for indexing — 26 August 2026

All returned **Indexing requested**. Marin failed once with a transient error and
succeeded on retry, so the daily quota was not the limit.

**calhearing.com** — 8 URLs

- `/fortell-hearing-aids-what-we-know/`
- `/areas-we-serve/contra-costa-county/` (14 cities folded in)
- `/areas-we-serve/alameda-county/` (10)
- `/areas-we-serve/santa-clara-county/` (8)
- `/areas-we-serve/solano-county/` (7)
- `/areas-we-serve/marin-county/` (6)
- `/areas-we-serve/sonoma-county/` (4)
- `/areas-we-serve/napa-county/` (2)

**audiologyassociates.org** — 1 URL

- `/fortell-hearing-aids-what-we-know`

Worth noting: every county hub reported *URL is unknown to Google* before submission.
They had existed for weeks and had never been crawled — the same "Discovered, currently
not indexed" problem the consolidation was meant to fix. That is the clearest evidence
yet that crawl budget, not page quality, was the binding constraint.

### Verified live

- https://www.calhearing.com/fortell-hearing-aids-what-we-know/
- https://www.audiologyassociates.org/fortell-hearing-aids-what-we-know
