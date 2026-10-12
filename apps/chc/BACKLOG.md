# Backlog — California Hearing Center & Audiology Associates

Shared running list for both practices. **Add anything here yourself** — a line under
"Igor's inbox" is enough, however rough. Claude reads this file at the start of a
session and keeps the rest of it current.

Last updated: 28 August 2026 (visual-search backlog opened; VS-01, VS-02, VS-03 shipped)

---

## Igor's inbox — unsorted, add freely

- **The San Mateo front door advertises a lunch closure that does not exist**
  (raised 28 Aug, needs a person not code). The entrance decal reads "Closed for lunch
  12:00pm - 1:00pm". Igor confirmed 28 Aug that this is stale: there is no lunch
  closure, and the website and Google Business Profile are both correct at Mon-Thu
  9-5, Fri 9-3. Two things follow. (1) The decal should be replaced -- it is the last
  thing a patient reads before pulling on the door. (2) More urgently, **a photograph
  of that door is the second most-viewed image on the San Mateo Business Profile at
  1,670 views**, so Google is showing 1,670 people a year hours the practice does not
  keep. Worth deleting or replacing that photo in the GBP photo manager now, well
  before the decal itself gets changed. It is also why that photo, which is otherwise
  a good one, is not being used on the website.
- **Visual Search Backlog lives in an artifact, not here** (raised 28 Aug). 20 items
  scored against the AWR images and visual-search guide, tick boxes saving to the page:
  https://claude.ai/code/artifact/b0bc18c9-6a80-49cf-9dcc-837385ec21e7
  Done so far: VS-01 max-image-preview:large (both sites, verified on all 194 AAW and
  310 CHC sitemap URLs), VS-02 sitemap image entries (261 on CHC, 133 on AAW, every
  URL resolving), VS-03 the AAW homepage hero alt. Next two worth doing: VS-05 pull
  office photography from the CHC Google Business Profile library, and VS-19 the CHC
  homepage, which still has no photograph of the practice on it.
- **Reading artifacts from a cloud session is blocked** (raised 28 Aug). The Artifact
  read tool cannot fetch *.frame.claudeusercontent.com under this environment's network
  allowlist, so I had to read the backlog through your browser a screenshot at a time.
  Adding that domain under environment settings -> Code -> Network access would fix it.
- **12 brand device shots render on the AAW homepage but are listed only on their own
  product pages** (raised 28 Aug). Not a defect -- every one of them is in the sitemap,
  and the product page is the better page for Google to associate a device shot with.
  Noted so nobody "fixes" it by duplicating them onto the homepage entry.
- **Two arrival facts only you can confirm** (raised 28 Aug). The new walkthrough on
  `/contact/san-mateo/` describes exactly what the photographs show and no more, because
  I could not confirm either of these: (a) is the lot behind the building free, and is it
  ours or shared with the neighbouring buildings? (b) the ramp from the lot runs to a red
  door at the back — is that a patient entrance, or staff only? Both answers make the
  page more useful and neither can be inferred from a photograph. Tell me and I will
  tighten the copy.
- **San Carlos has no photography at all** (raised 28 Aug). Same shoot, same phone,
  fifteen minutes: the sign, the door, where to park on Laurel Street. Until then
  `/contact/san-carlos/` runs on the same stock consultation photo as five other pages —
  it no longer *claims* to be 1008 Laurel Street, but it is still not the office.
- **The other 39 photos are exteriors too** (raised 28 Aug). The whole set is the outside
  of the building. Nothing of the waiting room, the booth, a fitting, or a person. That
  is the gap for the next shoot, at both practices — and it is what the service pages
  actually need.
- **GBP photos for AAW Harrison** (raised 26 Aug, in progress). Logo and cover photo
  built to Google's sizes and handed over: cover 1920×1080, and the logo square at
  720×720 in two versions — the ear mark alone, and the full wordmark. The rejections
  were a sizing problem: a 584×120 wordmark cannot satisfy a 250×250 square minimum at
  any scale. Igor uploads them; then set one of his newly uploaded interior photos as
  the cover in the GBP photo manager and check how it renders.
- **GBP Q&A — mine competitor reviews first** (raised 26 Aug). Google Business Profile
  has a Q&A section, and an owner may post a question and answer it themselves, so this
  is a real surface we are not using on any listing. Igor's ordering, which is the right
  one: analyse sentiment and recurring keywords/phrases in *competitors'* customer
  reviews first, then let what patients actually complain about and praise decide which
  questions get seeded. Constraint: answers must be true of the practice — Google
  removes Q&A that reads as a keyword dump.
- Recheck blog functionality on both sites (raised 26 Aug, not yet scoped)
- Scheduling for Threads posts — finish out the Meta brands (raised 26 Aug)
- Scheduling for Instagram posts — finish out the Meta brands (raised 26 Aug)

---

## Needs Igor, not code

**Getting access to the Somers Business Profile.** This is the blocker, not the
duplicate cleanup — Igor is not posting to the duplicates and does not care about them.

What the screens actually say, checked 26 Aug:

- The Somers profile is real and distinct: 325 NY-100, its own phone (914) 556-6720,
  its own hours, **14 of its own reviews**, and "Located in: Towne Centre at Somers".
  It is not plausibly a duplicate of Harrison, which is a different address, a different
  phone number and 486 separate reviews.
- Business Profile Manager lists it as **Duplicate**, unverified, with a *Manage profile*
  button rather than the owner toolbar.
- On the profile itself: *"Your request to manage an existing profile was declined. To
  manage a new profile, you need to be verified."* No Products section, and
  *Suggest an edit* where *Edit your business information* would be.

So the request was submitted and refused, and the "Duplicate" classification is the most
likely reason. The case to make to support is that this is a misclassification: two
locations, two addresses, two phone numbers, two independent review sets.

**Do not click "Get verified" on that banner without thinking.** It offers to verify a
*new* profile. Creating a second Somers listing is the one outcome worse than the
current state — it would make the duplicate real and split the 14 reviews.

**Operational consequence worth connecting.** `aaw-gbp-monthly` writes eight topics a
month twice, once for Harrison and once for Somers, each with its own office's phone
number. Harrison's Posts list shows single posts with no paired Somers equivalents, so
half of every month's output has had nowhere to go for as long as this has been true.
Worth deciding whether to keep producing the Somers half while it cannot be published.

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
| `933dc0a`, `d08a05b` | **AAW: office map links and product images.** "Get Directions" on both office pages was built from a plain address string, which Google resolves to its address pin — next door at 325 NY-100. It now uses each office's verified place link, and the embedded map its verified coordinates at z=17. Harrison had the same defect on three sections. Separately, square manufacturer device shots were rendered `object-cover` into 16:9 and 16:10 boxes, upscaling ~1.9× and cropping the device; assets under `/assets/brands/` now render `object-contain`. Four render sites, 2,432 image renders, 0 still cropping. **A mistake worth remembering: the first attempt queried the embed by business name and address, which returns a blank frame from the keyless endpoint — both office pages went live with an empty map for a few minutes, because the HTML was verified and the rendered page was not.** |
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

## Hearing Better: social ideas

Moved to `marketing/social-ideas-chc.md`, the living list of CHC social post ideas. Add new ideas there.
