// Per-city local facts for the /areas-we-serve/ pages.
//
// The whole point of this file: uniqueness must be STRUCTURAL, not cosmetic.
// The reviewers found the old pages were one template with the city name swapped
// in (~97% identical), which reads as doorway / scaled content to Google. The fix
// is genuinely city-true prose — real geography, climate, flight-path noise,
// landmarks, drive context — so each page says something a human who knows the
// city would recognize as true. Every fragment below is written per city.
//
// All facts here are well-established, verifiable geography. No invented
// statistics, testimonials, or specific patient claims (YMYL medical site).
//
// Coordinates are approximate city centroids, used only for areaServed schema.

export type CityRegion =
  | "peninsula-core"   // close to one of the two offices
  | "peninsula-coast"  // over the hill, coastal / foggy
  | "peninsula-south"  // lower Peninsula edge
  | "sf"               // San Francisco
  | "south-bay"
  | "east-bay"
  | "north-bay"
  | "wine-country"
  | "solano";

export type CityProfile = {
  name: string;                 // display name, e.g. "Half Moon Bay"
  county: string;               // e.g. "San Mateo County"
  region: CityRegion;
  nearestOffice: "San Mateo" | "San Carlos";
  approxDrive: string;          // soft, honest, e.g. "about 10 minutes up the 101"
  distanceTier: "office" | "near" | "mid" | "far";
  geo: { lat: number; lng: number };

  // Visual motif for the generated hero image (see _migration/genCityImages.mjs).
  motif: "coast" | "airport" | "bayside" | "downtown" | "estate" | "wine" | "transit" | "civic";

  // --- written, city-specific prose (this is where uniqueness lives) ---
  lede: string;                 // opening paragraph, specific to this city
  hook: [string, string];       // [H2, paragraph] — the signature local section
  localScene: [string, string]; // [H2, paragraph] — real neighborhoods/streets/landmarks + a hearing tie-in (long-tail local SEO)
  whyHere: string;              // paragraph: why patients from here choose CHC
  landmarks?: string;           // one sentence naming real local reference points
  faqs: [string, string][];     // 2-3 city-specific Q&A
};

// Two office anchors, referenced in copy + schema.
export const OFFICES = {
  "San Mateo": { street: "88 N. San Mateo Drive", zip: "94401" },
  "San Carlos": { street: "1008 Laurel Street", zip: "94070" },
} as const;
export const cityProfiles: Record<string, CityProfile> = {
  "alameda-county": {
    name: "Alameda County",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "east across the bay",
    distanceTier: "far",
    geo: { lat: 37.65, lng: -122.05 },
    lede:
      "Alameda County spans the heart of the East Bay, from Oakland and Berkeley on the shoreline to Hayward and Fremont in the south and the Tri-Valley cities of Pleasanton and Livermore inland. It is a large, varied region, and it sits across the water from us. Our offices are on the Peninsula in San Mateo and San Carlos, so we serve East Bay patients who choose to travel for specialized care.",
    hook: [
      "What the East Bay already has, and what it does not",
      "Alameda County has plenty of audiologists, and for testing, hearing aid service, wax removal and repairs you should use one. Crossing a bridge adds nothing to a hearing test. What East Bay patients come over for is narrower: [tinnitus care](/tinnitus/) and Lenire, and second opinions on hearing aids that never worked, where the fitting was never checked against a prescriptive target.",
    ],
    motif: "civic",
    localScene: [
      "One county, many communities, one bridge away",
      "The county runs from the ports and neighborhoods of Oakland and the university culture of Berkeley, through the island of Alameda and the shoreline cities of San Leandro and Hayward, down to Union City and Fremont, and inland to the Tri-Valley vineyards of Pleasanton and Livermore. Access to the Peninsula varies a lot. Hayward is a quick 25-30 minutes over the San Mateo Bridge, while Livermore is closer to an hour.",
    ],
    whyHere:
      "East Bay patients get a long first appointment rather than a slot squeezed into a schedule, a fitting verified with real-ear measurement before they leave, and the same audiologist on every return visit.",
    landmarks:
      "From Oakland and Berkeley in the north to Hayward, Fremont, and the Tri-Valley inland, our San Mateo and San Carlos offices are reached east across the bay, with drive times ranging from about 25-30 minutes to an hour.",
    faqs: [
      ["I live in the East Bay. Is it worth coming to the Peninsula?", "Only for a few things. Ringing that has not responded to treatment, Lenire, and hearing aids that were never checked against your prescription. Everything else you can get closer to home, and we would rather you did."],
      ["Which East Bay cities are closest to your offices?", "Hayward is the shortest drive, roughly 25-30 minutes over the San Mateo Bridge, with San Leandro, Union City, and Fremont also fairly close. Northern cities like Berkeley and inland Livermore take longer."],
      ["Do you regularly see patients from across Alameda County?", "Yes. Our practice draws patients from throughout the Bay Area, and we schedule East Bay visits to reduce repeat trips. Call 650-342-9449 to arrange care."],
    ],
  },
  "alameda": {
    name: "Alameda",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 40 minutes across the San Mateo Bridge",
    distanceTier: "far",
    geo: { lat: 37.7652, lng: -122.2416 },
    lede:
      "Alameda is an island city, a quiet grid of Victorian and Craftsman homes ringed by water, connected to Oakland by bridge and tube. Its calm, small-town feel is part of the appeal. We will be candid that our offices are across the bay on the Peninsula, so Alamedans who come to us are usually looking for specialized tinnitus or complex hearing care rather than the nearest audiology desk.",
    hook: [
      "Island calm, salt air, and steady hearing care",
      "Alameda's charm is its stillness: tree-lined streets, the beach at Crown Memorial, the old Victorians of the Gold Coast. That same waterfront setting means damp, salt-tinged air, which is hard on hearing aids over time and worth planning around with moisture-smart devices and regular servicing. For that everyday upkeep a closer provider works well; for stubborn ringing or a fitting that never felt right, some islanders choose the deeper focus we offer in [tinnitus care](/tinnitus/).",
    ],
    motif: "bayside",
    localScene: [
      "A walkable island of neighborhoods",
      "Alameda invites walking: the shops and theater along Park Street, the antique stores and cafes on Webster, the Victorian Gold Coast, and the shoreline out at Crown Memorial State Beach. It is a community where neighbors talk on porches and follow conversation over coffee, and where clear hearing keeps that easygoing social life intact. Patients from the island who make their way to us tend to do so for a specific reason rather than convenience.",
    ],
    whyHere:
      "The Alamedans who cross the bay to us come for [tinnitus care](/tinnitus/) and Lenire, or for a second look at hearing aids that were never verified. They see the same audiologist each visit, which matters more than it sounds when a fitting needs three rounds of adjustment.",
    landmarks:
      "From Park Street, Webster Street, the Gold Coast, or Crown Beach, our San Mateo office is roughly 40 minutes over the San Mateo Bridge.",
    faqs: [
      ["Is the drive from Alameda really worth it?", "For testing and maintenance, no. A nearer audiologist will do those just as well. Islanders travel to us for tinnitus care, Lenire, and fittings that have already gone wrong once."],
      ["Does Alameda's waterfront air affect hearing aids?", "It does. Moisture gets inside the device and the sound goes muffled or starts cutting out. Salt air is worse than plain damp because it leaves a residue on the battery contacts. A drying box every night and a proper clean at intervals prevents most of it."],
      ["How far are you from the island?", "Roughly 40 minutes to San Mateo across the San Mateo Bridge, traffic depending. Call 650-342-9449 and we will schedule East Bay visits to minimize repeat trips."],
    ],
  },
  "albany": {
    name: "Albany",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 45 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.8869, lng: -122.2977 },
    lede:
      "Albany is a small, tight-knit city tucked between Berkeley and El Cerrito, barely a couple of square miles, with a friendly Solano Avenue main street and a strong neighborhood feel. Our offices are on the Peninsula, well across the bay.",
    hook: [
      "A main street where conversation happens at close range",
      "Life in Albany tends to happen within a few feet: Solano Avenue shops, school events, a neighbor on the sidewalk. That is exactly where hearing loss first announces itself, as missed words in a busy cafe or across a crowded room rather than as silence. Measuring it takes a speech-in-noise test on top of the audiogram, which adds a few minutes and changes what the results actually tell you.",
    ],
    motif: "downtown",
    localScene: [
      "Compact, walkable, and close-knit",
      "For such a small city, Albany packs in a lot: the shops and restaurants along Solano Avenue, the weekend crowds at the Albany Bulb and shoreline, Memorial Park, and the view up to Albany Hill. Neighbors know each other and much of daily life runs on easy face-to-face conversation, which is the first thing people miss when they start avoiding it.",
    ],
    whyHere:
      "Albany patients who come to us are usually here about [tinnitus](/tinnitus/) or Lenire, or about hearing aids that never worked and were never measured in the ear. Those are the two things worth crossing a bridge for.",
    landmarks:
      "From Solano Avenue, Memorial Park, or the Albany waterfront, our San Mateo office is roughly 45 minutes across the bay.",
    faqs: [
      ["Why drive from Albany when Berkeley clinics are minutes away?", "For everyday testing and maintenance, don't. Use them. People come across the bay for tinnitus treatment, Lenire, and second opinions on complicated cases where our narrower focus is the point."],
      ["Can you help if my hearing aids never sounded right?", "Often, yes. Poor fit or unverified programming is a common reason devices disappoint, and we use real-ear measurement to check that what your ears receive matches your prescription."],
      ["How far is your practice from Albany?", "About 45 minutes to San Mateo depending on bridge traffic. We plan East Bay visits to accomplish more per trip so the distance is less of a burden."],
    ],
  },
  "antioch": {
    name: "Antioch",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 70 minutes from our San Mateo office, west across the East Bay",
    distanceTier: "far",
    geo: { lat: 38.0049, lng: -121.8058 },
    motif: "bayside",
    lede:
      "Antioch grew up along the San Joaquin River, its historic Rivertown waterfront looking out over the Delta at the far northeast corner of the county. That's a long way from the Peninsula. Our offices are about 70 minutes southwest of here, in San Mateo and San Carlos, so we're candid that we're a specialist's trip, not the corner audiologist.",
    hook: [
      "Rivertown, and the edge of the county",
      "Out at the far end of East County the options for specialized hearing care thin out, though a routine hearing test is easy enough to find close to home and that is where it should happen. What Antioch patients travel for is [tinnitus care](/tinnitus/), Lenire, and hearing aids that have already been fitted once without success. People here are used to driving for specialists, and we try to justify it by making one visit do the work of three.",
    ],
    localScene: [
      "River town at the county's edge",
      "Antioch stretches from the old brick storefronts of Rivertown along the San Joaquin River out past Contra Loma Regional Park, the trails of Black Diamond Mines, and the fields of the far East County. Delta air keeps humidity up, and moisture inside a hearing aid is the most common reason one comes back muffled or cutting out. A drying box used nightly prevents most of that.",
    ],
    whyHere:
      "Antioch patients get a long appointment rather than a short one, a fitting verified with real-ear measurement while they are in the chair, and a follow-up plan built around a seventy-minute drive rather than around our schedule.",
    landmarks:
      "We're about 70 minutes from Rivertown, Contra Loma Regional Park, and the Antioch riverfront, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["That's a long drive. Why come to you from Antioch?", "For a routine test it does not make sense and we will say so. Patients make the trip for tinnitus care, Lenire, second opinions, and fittings that need more than a first pass."],
      ["Can you help with ringing in the ears?", "Often. The first job is working out what is driving it, because the answer changes the plan. Some tinnitus improves once an underlying hearing loss is treated. Some needs sound therapy, and some patients are candidates for Lenire."],
    ],
  },
  "atherton": {
    name: "Atherton",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 12–15 minutes from our San Carlos office, down the 101 or El Camino",
    distanceTier: "near",
    geo: { lat: 37.4613, lng: -122.1977 },
    lede:
      "Atherton is a quiet, tree-canopied residential town with no commercial downtown by design, which means residents travel a short distance for nearly every service, hearing care included. Our San Carlos office is a straightforward 12-to-15-minute drive, and many Atherton patients have been coming to us for years.",
    hook: [
      "Close enough to get the fitting right in stages",
      "Atherton is twelve to fifteen minutes from our San Carlos office, and that changes what a fitting can be. A hearing aid rarely lands perfectly on day one. What usually gets it there is three short visits over a few weeks, each one adjusting to what you noticed since the last. When the drive is short, that loop costs you almost nothing. We verify the first fitting with real-ear measurement so the starting point is right, then refine from what you report.",
    ],
    motif: "estate",
    localScene: [
      "A residential town that travels for its care",
      "Atherton is almost entirely residential by design: estate lots and tree canopy across Lindenwood, West Atherton, and Lloyden Park, with Holbrook-Palmer Park at its center and no commercial strip to speak of. Residents are used to driving a few minutes for services. Many want technology that keeps up with a full calendar while staying out of sight, and an independent practice rather than a retail counter.",
    ],
    whyHere:
      "Atherton residents come to us for diagnostic testing that includes speech in background noise, technology recommended on its merits rather than a supplier's quarterly target, and [tinnitus care](/tinnitus/) including Lenire. Many first came about ringing and stayed for everything after.",
    landmarks:
      "We are a short drive from Atherton's Lindenwood, West Atherton, and Lloyden Park areas, and from the Menlo-Atherton corridor along El Camino Real and Marsh Road.",
    faqs: [
      ["Do you offer truly invisible hearing aids?", "We fit several invisible and near-invisible styles, including deep-canal options. Whether they suit you depends on the size and shape of your ear canal, which we check at the evaluation before recommending anything."],
      ["Can I see a tinnitus specialist near Atherton?", "Yes. Dr. Emily McMahan, AuD, focuses on tinnitus care, including Lenire, and sees patients from Atherton and throughout the mid-Peninsula at our San Carlos office."],
      ["How far is the audiologist from Atherton?", "Our San Carlos office is about 12–15 minutes from Atherton via the 101 or El Camino Real. Call 650-342-9449 to arrange a visit."],
    ],
  },
  "bay-area": {
    name: "the Bay Area",
    county: "San Francisco Bay Area",
    region: "sf",
    nearestOffice: "San Mateo",
    approxDrive: "central to the Peninsula, within reach of the whole Bay Area",
    distanceTier: "far",
    geo: { lat: 37.7, lng: -122.2 },
    lede:
      "The San Francisco Bay Area is nine counties and dozens of cities wrapped around the bay, and California Hearing Center draws patients from across all of it. Our two offices sit centrally on the Peninsula, in San Mateo and San Carlos: well placed for the whole region, and while most patients live nearby, some travel from as far as Napa for care they want done right.",
    hook: [
      "A practice patients travel to reach",
      "Most of our patients come from the Peninsula and the cities just north and south of us. A fair number make longer drives, from the East Bay, the North Bay, wine country, and Solano, and they are nearly always coming for one of three things: [tinnitus](/tinnitus/) care, Lenire, or a second look at hearing aids that never worked. For anything else we tell people to stay near home, because a hearing test does not improve with mileage.",
    ],
    motif: "civic",
    localScene: [
      "Serving patients from across the region",
      "The Bay Area's hearing needs are as varied as its geography. Coastal and bayside communities from Half Moon Bay to the Sunset contend with marine humidity that's hard on hearing aids; office and tech hubs from San Francisco down through Silicon Valley bring demanding, noisy listening environments; and inland and wine-country areas send patients who've decided specialized care is worth a longer drive. Centrally located on the Peninsula, we see people from all of it, and each fitting is set for the environments a patient actually lives and works in.",
    ],
    whyHere:
      "Across the Bay Area, patients choose us for diagnostics that include speech in background noise, fittings verified with real-ear measurement, and a tinnitus practice that runs Lenire. Seeing the same audiologist every visit is why they keep driving past closer options.",
    landmarks:
      "Our San Mateo and San Carlos offices sit centrally on the Peninsula, within reach of San Francisco, Silicon Valley, the East Bay, and the North Bay. Patients travel to us from across the region, some from as far as Napa.",
    faqs: [
      ["Do patients really travel from across the Bay Area to see you?", "Yes. While most come from the Peninsula, patients travel from San Francisco, the South Bay, the East Bay, and the North Bay, some from as far as Napa, mainly for specialized tinnitus care and complex cases."],
      ["Should I travel to you or find someone closer?", "For routine hearing tests and standard hearing aids, find someone closer. The drive is worth it for tinnitus treatment, Lenire, and a second opinion on a fitting that has already failed."],
      ["Where are your offices located?", "We have two Peninsula offices, San Mateo at 88 N. San Mateo Drive and San Carlos at 1008 Laurel Street, about eight minutes apart. Call 650-342-9449 to find the one that's most convenient."],
    ],
  },
  "belmont": {
    name: "Belmont",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Carlos",
    approxDrive: "about 5 minutes from our San Carlos office, just up El Camino or the 101",
    distanceTier: "near",
    geo: { lat: 37.5202, lng: -122.2758 },
    lede:
      "Belmont climbs the hills between San Carlos and San Mateo, a leafy residential city built around Ralston Avenue and the wooded ridges above Water Dog Lake. It sits so close to our San Carlos office that many patients are here in about five minutes, which makes routine testing and quick hearing aid check-ins genuinely convenient.",
    hook: [
      "A neighbor practice, five minutes up the road",
      "Being this close changes how hearing care fits into your life. A clean-and-check, a reprogramming, or a fresh batch of domes and wax guards is not an expedition. Belmont patients tend to drop in, get what they need, and get on with the day. That matters most for the small, ongoing things: fine-tuning a new fitting over a few short visits, or troubleshooting a device the same week something changes rather than living with it.",
    ],
    motif: "downtown",
    localScene: [
      "From the hills to El Camino",
      "Belmont spreads from the trails around Water Dog Lake and Twin Pines Park down to the shops and cafes along Ralston Avenue and El Camino Real, with Carlmont and Notre Dame de Namur University anchoring the community. Whether you are up in the quiet cul-de-sacs above Hallmark Drive or down near the Caltrain station, we are a short, familiar drive away, straight up El Camino or a quick hop on the 101.",
    ],
    whyHere:
      "Belmont patients choose us for the combination of nearby convenience and genuine depth: thorough diagnostic testing, honest technology recommendations, and specialized tinnitus care from an audiologist they see every visit. The short drive means we can be part of your ongoing care, not just a one-time fitting.",
    landmarks:
      "We are minutes from Belmont's Ralston Avenue corridor, Twin Pines Park, and the Water Dog Lake neighborhoods, straight up El Camino Real or the 101 to our San Carlos office.",
    faqs: [
      ["Is there an audiologist close to Belmont?", "Yes. Our San Carlos office is about five minutes from most of Belmont, just up El Camino Real. It is one of the closest full-service audiology practices to the city."],
      ["Can I come in quickly for a hearing aid cleaning or adjustment?", "Absolutely. Because Belmont is so close, many patients pop in for cleanings, adjustments, and supplies between longer appointments. Call 650-342-9449 and we will find a time."],
      ["Do you help with tinnitus, not just hearing aids?", "Yes. We offer dedicated [tinnitus care](/tinnitus/), including Lenire, alongside hearing testing and fittings for patients throughout Belmont and the mid-Peninsula."],
    ],
  },
  "benicia": {
    name: "Benicia",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 70 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.0494, lng: -122.1586 },
    lede:
      "Benicia briefly served as California's state capital in the 1850s, and its waterfront downtown along the Carquinez Strait still carries that 19th-century character. Our offices are on the Peninsula in San Mateo and San Carlos, about 70 minutes southwest.",
    hook: [
      "Strait air and hearing aid moisture",
      "Benicia sits on the water, and marine air is hard on hearing aids. Moisture gets inside, and the result is sound that goes muffled, drops out, or comes back with corroded contacts. It is the single most common reason a device stops working properly, and it is largely preventable: a moisture-resistant model, a drying box used every night, and a proper cleaning at intervals. Any audiologist can set that up for you and most of them are closer than we are.",
    ],
    motif: "bayside",
    localScene: [
      "A historic waterfront on the strait",
      "The town runs along the water, from First Street's shops down to the marina, past the Camel Barns and the grounds of the old Benicia Arsenal, with the Capitol building left over from the city's brief turn as state capital. The old Arsenal and the industry along the strait meant a lot of local careers spent around heavy equipment, and that kind of sustained noise contributes to both hearing loss and tinnitus over a working life.",
    ],
    whyHere:
      "Benicia patients who come to us came for [tinnitus care](/tinnitus/), for Lenire, or because a set of hearing aids was never checked against a prescriptive target. We book those as one long appointment rather than a series, and you see the same audiologist each time.",
    landmarks:
      "Patients travel to our Peninsula offices from Benicia's First Street, the marina, and the historic Arsenal district, generally around 70 minutes southwest across the bridges.",
    faqs: [
      ["Benicia isn't close to you. Why make the drive?", "Mostly, don't. Testing, repairs and routine adjustments are all available nearer home. Patients make the seventy-minute trip for tinnitus treatment, Lenire, or a fitting that has failed once already. Call 650-342-9449 and we will tell you which you have."],
      ["Do you provide Lenire and tinnitus care?", "Yes, for suitable candidates. We work out what is driving the tinnitus first, because that changes the plan and not everyone turns out to be a candidate. Call 650-342-9449 to arrange an evaluation."],
    ],
  },
  "berkeley": {
    name: "Berkeley",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 45 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.8715, lng: -122.2730 },
    lede:
      "Berkeley is a university town at heart, shaped by UC Berkeley and a culture that takes ideas, and second opinions, seriously. In fairness, our offices are on the Peninsula in San Mateo and San Carlos, a good drive across the bay, so we are not the closest option for a routine hearing check. Berkeley patients tend to seek us out for the specialized, research-minded side of hearing care.",
    hook: [
      "A town that reads the research first",
      "Lectures, seminars, crowded cafes off Telegraph, and a lifelong habit of learning all put a premium on following speech rather than merely hearing it. Berkeley patients often arrive having already read about their own hearing, wanting the measurements rather than the pitch. So: we test speech understanding in noise, we verify every fitting with real-ear measurement, and we will show you where the independent laboratory data on a device is thin or missing.",
    ],
    motif: "civic",
    localScene: [
      "From campus to the hills",
      "Berkeley runs from the flats up into the hills: the UC campus and Sproul Plaza, the shops along Shattuck in the Gourmet Ghetto, College Avenue in Elmwood, and the views from Tilden and the Berkeley Hills. It is a walking, talking, seminar-going city where following conversation matters, whether that is a graduate lecture or dinner with old friends. Patients who come to us from Berkeley usually want the same rigor they expect of everything else: careful measurement and a plan they understand.",
    ],
    whyHere:
      "Berkeley patients who cross the bay come for [tinnitus care](/tinnitus/) and Lenire, or for a second opinion on hearing aids that were never verified. What they get is the measurement, the reasoning behind it, and the same audiologist at every visit.",
    landmarks:
      "From the UC campus, Shattuck Avenue, Elmwood, or the Berkeley Hills, our San Mateo office is roughly 45 minutes across the bay.",
    faqs: [
      ["Why would I drive from Berkeley when there are closer audiologists?", "For everyday hearing care, use them. People come across the bay for tinnitus treatment, Lenire, and second opinions on hearing or fitting problems that have already resisted one attempt."],
      ["I follow lectures and meetings closely. Can testing reflect that?", "Yes. We test speech understanding in background noise, not just tones in a quiet booth, so results reflect real listening. That helps us tune hearing aids for lecture halls, seminars, and busy rooms rather than ideal conditions."],
      ["How far is your office from Berkeley?", "Roughly 45 minutes to San Mateo depending on bridge traffic. We try to make each visit count for East Bay patients by grouping testing and follow-up efficiently."],
    ],
  },
  "brentwood": {
    name: "Brentwood",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 75 minutes east",
    distanceTier: "far",
    geo: { lat: 37.9319, lng: -121.6958 },
    motif: "civic",
    lede:
      "Brentwood is still orchard-and-field country at the county's eastern edge, famous for its summer u-pick cherries and sweet corn even as new neighborhoods spread across former farmland. It is one of the longer drives to our Peninsula offices, roughly 75 minutes east.",
    hook: [
      "Orchard and equipment noise",
      "Farm and equipment work carries steady noise exposure that adds up across a career, and the first sign is more often ringing in a quiet room than trouble with volume. If that has been your working life, a baseline evaluation is worth having on record, and Brentwood has closer places to get one than seventy-five minutes west. What patients travel to us for is [tinnitus care](/tinnitus/), Lenire, and fittings that failed the first time.",
    ],
    localScene: [
      "Cherry orchards and a growing downtown",
      "Brentwood keeps its agricultural character along Walnut Boulevard's u-pick farms and the Marsh Creek corridor, even as City Park's farmers market and the Streets of Brentwood shopping district anchor a fast-growing town. It's a place where a lot of people have worked outdoors and around equipment. We take that seriously: thorough baseline testing, honest guidance, and follow-up care that respects the distance you've come.",
    ],
    whyHere:
      "Brentwood patients get a long first appointment, a fitting measured in the ear rather than assumed from the manufacturer's first fit, and follow-up planned around the distance rather than around a standard schedule.",
    landmarks:
      "We're about 75 minutes from downtown Brentwood, the u-pick farms along Walnut Boulevard, and the Streets of Brentwood, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["Is the drive from Brentwood really worth it?", "For everyday hearing needs, no. Use a closer provider. Patients travel to us for tinnitus care, Lenire, second opinions, and fittings that have already gone wrong once."],
      ["I've worked around farm and shop equipment for years. Should I be tested?", "It's worth doing. Prolonged equipment noise can contribute to gradual hearing loss and tinnitus. A baseline evaluation gives you a clear starting point."],
    ],
  },
  "brisbane": {
    name: "Brisbane",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 15 minutes north of our San Mateo office on the 101",
    distanceTier: "mid",
    geo: { lat: 37.6805, lng: -122.3999 },
    lede:
      "Brisbane is a small, tight-knit hillside town tucked against San Bruno Mountain at the north edge of the county, looking out over the bay and its own lagoon. Known for the string of holiday stars residents light on the mountainside each winter, it has a village feel, and our San Mateo office is a straightforward fifteen minutes south on the 101.",
    hook: [
      "Small-town living, big-city listening",
      "Brisbane residents live in a quiet pocket but rarely stay put. The city sits between San Francisco and the Peninsula, and daily life means the bustle of both. Modern hearing aids are built for exactly that range of settings, shifting automatically from a hushed home on the hill to a loud restaurant, a crowded event, or a windy walk along the marina. Getting that performance depends on a fitting verified with real-ear measurement, so speech stays clear wherever your day takes you.",
    ],
    motif: "bayside",
    localScene: [
      "Between the mountain and the bay",
      "Brisbane runs from the trails of San Bruno Mountain State Park down through the neighborhoods off Old County Road and Visitacion Avenue to the Brisbane Lagoon, the marina, and the newer development out at Sierra Point. It is compact and neighborly, the kind of place where people know their audiologist by name. For that community we offer thorough testing, honest technology, and dependable follow-up, an easy drive down the bayside 101 to San Mateo.",
    ],
    whyHere:
      "Brisbane patients choose us for the personal, independent care that suits a small town: real time with the same audiologist, straightforward advice, and specialized tinnitus expertise. We make the short trip down the 101 worthwhile with testing and fittings done thoroughly, the first time.",
    landmarks:
      "We are about fifteen minutes from Brisbane's Old County Road, the Brisbane Lagoon, and Sierra Point, straight down the 101 to our San Mateo office.",
    faqs: [
      ["Where is the nearest audiologist to Brisbane?", "Our San Mateo office is about fifteen minutes south of Brisbane on the 101, one of the closer full-service audiology practices to the north county."],
      ["Will my hearing aids handle both quiet and noisy places?", "Yes. Today's devices adapt automatically between settings, and we verify performance with real-ear measurement so speech stays clear from a quiet home to a loud restaurant."],
      ["Do you treat tinnitus as well as fit hearing aids?", "We do. Alongside full diagnostic testing and fittings, we offer focused [tinnitus care](/tinnitus/), including Lenire, for patients across Brisbane and the north Peninsula."],
    ],
  },
  "burlingame": {
    name: "Burlingame",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 10 minutes from our San Mateo office, straight up El Camino or the 101",
    distanceTier: "near",
    geo: { lat: 37.5841, lng: -122.3661 },
    lede:
      "Burlingame sits just north of our San Mateo office, close enough that many patients are in and out on a lunch break. Known as the “City of Trees” for its eucalyptus-lined avenues, Burlingame runs right up to San Francisco International Airport, which is exactly why hearing matters here.",
    hook: [
      "Living under SFO's flight path and what it means for your hearing",
      "Much of Burlingame sits beneath SFO's arrival and departure corridors, and residents near the Bayfront or Broadway know the sound of jets overhead. Everyday overflight noise is usually more nuisance than hazard, but occupational exposure is different. If you work at or near the airport, in the Bayfront hotels, or around ground equipment, years on the job can quietly add up to noise-induced hearing loss. It is gradual and easy to miss until conversations start slipping, so a baseline hearing test, and custom protection where it makes sense, is simple prevention.",
    ],
    motif: "airport",
    localScene: [
      "From Burlingame Avenue to the Bayfront",
      "Burlingame packs a lot into a small city: the walkable Burlingame Avenue and Broadway shopping districts, the leafy Easton Addition, Washington Park, and the Bayfront hotel row that backs right up to SFO. That range matters for hearing care. A retiree strolling Burlingame Ave has very different listening needs from someone working the airport hotels or commuting the Bayshore. We fit and verify hearing aids for those specific environments, and we keep Mills-Peninsula-area patients close to home for follow-up.",
    ],
    whyHere:
      "Burlingame patients come to us because we are the closest independent audiology practice for many of them, and because they want more than a big-box hearing aid transaction. We provide diagnostic testing, real-ear-verified fittings, tinnitus care, and repairs, with the same audiologist each visit.",
    landmarks:
      "We are an easy drive from Burlingame Avenue, Broadway, the Mills-Peninsula area, and the Bayfront hotels, all within roughly 10 minutes of the office.",
    faqs: [
      ["Can airport and traffic noise really affect my hearing?", "Occupational noise can. Long-term exposure to loud sound, including work around aircraft or heavy freeway noise, can contribute to permanent, gradual hearing loss. A baseline hearing test establishes where you stand and helps track any change over time."],
      ["Do you offer custom hearing protection for noisy environments?", "We do. Custom-molded hearing protection is popular with patients who work near the airport, ride motorcycles, or attend loud events. It protects hearing while keeping sound natural."],
      ["How far is your office from Burlingame?", "Our San Mateo office is about 10 minutes from most of Burlingame, just south on El Camino Real or the 101. Call 650-342-9449 to schedule."],
    ],
  },
  "campbell": {
    name: "Campbell",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 40 minutes south",
    distanceTier: "far",
    geo: { lat: 37.2872, lng: -121.9500 },
    lede:
      "Campbell has kept a small-town center that its fruit-drying past would still recognize: the water tower over a walkable downtown, a busy weekend farmers market, and the Los Gatos Creek Trail running through it. It is a good 40 minutes south of our Peninsula offices, but patients travel that distance for specialized hearing and tinnitus care.",
    hook: [
      "Clear conversation where Campbell gathers",
      "Downtown Campbell is built around being together: sidewalk tables, the farmers market, live music, and the trail. Those are precisely the settings where hearing loss shows up first, as speech slipping under background noise. The fix is rarely just a better device; it is a device fitted and verified for real, layered sound. That is the work we specialize in, and it is what makes the drive up from Campbell worthwhile for the patients who choose us.",
    ],
    motif: "downtown",
    localScene: [
      "A downtown made for being together",
      "The heart of Campbell runs along Campbell Avenue beneath the old water tower, out to the Pruneyard, along the Los Gatos Creek Trail, and through neighborhoods near the light-rail line. Between the market crowds, restaurant patios, and trailside chatter, it is a city where daily life is social and rarely silent. For Campbell patients who come to us, we concentrate on clarity in noise and carefully verified fittings, plus tinnitus care that can be hard to find nearby.",
    ],
    whyHere:
      "Campbell patients travel to us for [tinnitus care](/tinnitus/) including Lenire, for fittings verified against a prescriptive target so they hold up in noise, and for a second look at devices that disappointed. For basic maintenance, a South Bay provider is closer and we will point that out.",
    landmarks:
      "We are about 40 minutes from downtown Campbell, the Pruneyard, and the Los Gatos Creek Trail, north up the 280 to our San Carlos office.",
    faqs: [
      ["Is the drive from Campbell really worth it?", "For everyday upkeep, no, and somewhere local will do it well. People come to us from Campbell when the ringing is the problem, when Lenire is worth considering, or when a fitting never worked in a noisy room."],
      ["Can you help with ringing in my ears, not just hearing loss?", "Yes. Tinnitus care is central to our practice, from evaluation through management options like Lenire, and it often goes hand in hand with a hearing assessment."],
      ["How far is your office from Campbell?", "About 40 minutes north via the 280 to San Carlos. Call 650-342-9449 and we will plan one visit around the drive."],
    ],
  },
  "colma": {
    name: "Colma",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 15 minutes north of our San Mateo office",
    distanceTier: "mid",
    geo: { lat: 37.6769, lng: -122.4553 },
    lede:
      "Colma is a singular little town: home to more than a dozen historic cemeteries and a small resident population, it is where much of the Bay Area comes to remember and to visit. It is also a busy commercial hub, with auto row, big-box shops, and the families and workers who keep it all running. Our San Mateo office is about fifteen minutes south.",
    hook: [
      "Care for the people who care for others",
      "Behind Colma's famous memorial grounds is a working community: florists, groundskeepers, monument makers, funeral and cemetery staff, retail workers, and the visiting families they serve every day. Good hearing is central to that work and to comforting others well: catching a quiet question, following a phone call, hearing clearly across a busy showroom or office. We help Colma's residents and workers keep hearing sharp with thorough testing and technology tuned to their daily surroundings.",
    ],
    motif: "civic",
    localScene: [
      "A community woven through Colma",
      "Colma is compact and distinctive: the tree-lined cemetery districts and Cypress Lawn, alongside the shops and dealerships of Colma's auto row and the retail off Serramonte Boulevard near the BART station. Its living community may be small, but it is close and hardworking. For residents and the many people who spend their days here, we provide careful hearing care and dependable follow-up, a short drive south to our San Mateo office.",
    ],
    whyHere:
      "Colma patients choose us for genuine, personal attention: thorough evaluations, honest recommendations, and the same audiologist each visit, plus specialized tinnitus care that is hard to find nearby. We treat every appointment with patience and respect.",
    landmarks:
      "We are about fifteen minutes from Colma's cemetery districts, auto row, and the shops near Serramonte and the BART station, an easy drive south to our San Mateo office.",
    faqs: [
      ["Is there an audiologist near Colma?", "Yes. Our San Mateo office is about fifteen minutes south of Colma. It offers full-service testing, fittings, and repairs for residents and the many people who work in town."],
      ["Can better hearing help me at work?", "Very much so. Clear hearing helps you follow phone calls, quiet conversations, and busy showrooms or offices. We tune technology to your specific work and listening environments."],
      ["Do you offer tinnitus treatment?", "Yes. We provide dedicated tinnitus care, including Lenire, alongside the rest of our hearing services. Call 650-342-9449 to learn more."],
    ],
  },
  "concord": {
    name: "Concord",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly an hour northeast",
    distanceTier: "far",
    geo: { lat: 37.9780, lng: -122.0311 },
    motif: "downtown",
    lede:
      "Concord is Contra Costa County's largest city, anchored by the plane trees and summer concerts of Todos Santos Plaza. It sits well east of the Peninsula, though. Our offices are in San Mateo and San Carlos, roughly an hour northeast by car, so we're upfront that we're not the closest choice for routine visits.",
    hook: [
      "From Todos Santos Plaza to a quiet listening booth",
      "Concord packs in a lot of different listening environments: the summer crowds and live music at Todos Santos Plaza, big shows at the Concord Pavilion, busy restaurants along Willow Pass Road, and quiet rooms at home. Hearing well across all of them takes more than an off-the-shelf device. [Speech-in-noise testing](/hearing-testing/) and real-ear verification tune your hearing aids for the loud places rather than the calm ones. That is the fitting patients are willing to travel for.",
    ],
    localScene: [
      "A big city with many soundscapes",
      "Concord spreads from the fountains and farmers market at Todos Santos Plaza out to the shops of The Veranda, the amphitheater lawn at the Concord Pavilion, and the trails around the old Naval Weapons Station. Each is a different hearing challenge: a loud concert, a crowded patio, a chat across the kitchen table. We fit and verify hearing aids so they hold up in the demanding spaces, and we build in the follow-up that keeps them working over the years.",
    ],
    whyHere:
      "Concord has routine options close by, so the patients who come to us are here for [tinnitus care](/tinnitus/) and Lenire, or because a fitting never worked and nobody measured what was reaching the eardrum. Every fitting we do is verified with real-ear measurement, and you see the same audiologist each visit.",
    landmarks:
      "We're roughly an hour northeast of Todos Santos Plaza, The Veranda, and the Concord Pavilion, reached by way of the East Bay bridges to our San Mateo office.",
    faqs: [
      ["Is it worth driving to the Peninsula from Concord?", "For a routine hearing test, a Concord-area provider will serve you fine. Patients make the trip to us for tinnitus care, Lenire, or a fitting that has not gone well elsewhere."],
      ["Can hearing aids keep up with places like the Concord Pavilion or a noisy restaurant?", "Yes, when they are fit and verified properly. We use speech-in-noise testing and real-ear measurement to program hearing aids for the volume and the crowd you are actually going to be sitting in."],
      ["Do you offer specialized tinnitus treatment?", "Yes. Tinnitus is a core part of the practice, Lenire included for suitable candidates, and we see patients from across the East Bay. Call 650-342-9449 to ask whether it is worth an appointment."],
    ],
  },
  "contra-costa-county": {
    name: "Contra Costa County",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "east and northeast of the bay",
    distanceTier: "far",
    geo: { lat: 37.92, lng: -122.03 },
    motif: "civic",
    lede:
      "Contra Costa County stretches from the bayfront cities of the west, across the central valleys around Walnut Creek and Concord, out to the Delta towns of far East County. It's a large, varied county that sits east and northeast of the bay from our Peninsula offices, an honest distance rather than a quick hop, and one patients cross for a reason.",
    hook: [
      "Why patients travel from across the county",
      "Contra Costa has no shortage of places to get a hearing test close to home, and for testing, repairs and routine service that is where it should happen. What is harder to find is a practice built around [tinnitus care](/tinnitus/), Lenire, and fittings that have already failed once. That is the reason people drive in from Walnut Creek, Concord, Danville, and the Delta cities, and we try to make one visit do the work of several.",
    ],
    localScene: [
      "One county, many communities",
      "Contra Costa is several regions at once: the West County bayfront around Richmond and El Cerrito; the Lamorinda hills of Lafayette and Orinda; the central hub of Walnut Creek, Concord, and Pleasant Hill under Mount Diablo; the San Ramon Valley through Danville and San Ramon; and the far East County Delta towns of Antioch, Pittsburg, Brentwood, and Oakley. Drive times to the Peninsula vary by nearly an hour across that spread.",
    ],
    whyHere:
      "Patients get a long first appointment, [testing](/hearing-testing/) that includes speech in background noise, a fitting verified with real-ear measurement before they leave, and the same audiologist on every return.",
    landmarks:
      "From West County's bayfront to the San Ramon Valley and the East County Delta, we're a drive east and northeast of the bay, reached by the region's bridges to our San Mateo and San Carlos offices.",
    faqs: [
      ["Why would I travel from Contra Costa to the Peninsula for hearing care?", "For routine testing, don't. Patients cross the bay to us for tinnitus treatment, Lenire, and second opinions on fittings that failed. Call 650-342-9449 and we will tell you which you have before you drive."],
      ["Which parts of Contra Costa do you serve?", "Patients come to us from across the county: West County, the Lamorinda hills, the central Walnut Creek and Concord area, the San Ramon Valley, and the East County Delta towns."],
      ["How do I know if the trip is worth it for me?", "If you're dealing with persistent tinnitus, considering Lenire, or struggling with hearing aids that never fit right, it often is. Call 650-342-9449 and we'll give you an honest read before you drive out."],
    ],
  },
  "cupertino": {
    name: "Cupertino",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 35 minutes south",
    distanceTier: "far",
    geo: { lat: 37.3230, lng: -122.0322 },
    lede:
      "Cupertino is best known as Apple's hometown, but it is also De Anza College, the Stevens Creek foothills, and quiet, well-kept neighborhoods. It lies deep in the South Bay from our Peninsula offices, around 35 minutes away, and residents make that drive when they want specialized care rather than the nearest option.",
    hook: [
      "Verified fittings for a life spent listening hard",
      "Many Cupertino patients live and work in demanding audio environments: long meetings, video calls, lectures at De Anza, and busy restaurants along Stevens Creek. The common thread is following speech when the room is not quiet, which depends far more on how a hearing aid is fitted than on which one you buy. We use speech-in-noise testing and real-ear verification to program devices for those exact settings, and that rigor is what draws patients from Cupertino our way.",
    ],
    motif: "downtown",
    localScene: [
      "From Main Street to the Stevens Creek foothills",
      "Cupertino gathers around Main Street Cupertino and Cupertino Village, the De Anza College campus, and neighborhoods like Rancho Rinconada and Monta Vista, with the Stevens Creek corridor climbing toward the hills. It is a studious, screen-and-conversation kind of city where clear speech matters all day. Video calls are their own problem: compressed audio strips out cues the brain uses to fill gaps, so people with mild loss struggle on calls long before they struggle in person.",
    ],
    whyHere:
      "Cupertino patients tend to be evidence-minded, and they come to us for measurements rather than a pitch: speech-in-noise testing, real-ear verification of the fitting, and [tinnitus care](/tinnitus/) including Lenire.",
    landmarks:
      "We are about 35 minutes from Main Street Cupertino, De Anza College, and the Stevens Creek foothills, north via the 280 to our San Carlos office.",
    faqs: [
      ["I do fine in quiet but lose people in noise. Can that be fixed?", "Often, yes. That pattern points to speech-in-noise difficulty, which we measure directly and then target with the right technology and real-ear-verified programming rather than a generic setting."],
      ["Why travel from Cupertino instead of going local?", "For simple upkeep, local is easier. Patients drive to us when tinnitus has not responded, when Lenire is on the table, or when a fitting was never measured in the ear."],
      ["How far is your office from Cupertino?", "About 35 minutes north on the 280 to San Carlos. Call 650-342-9449 and we will schedule a full visit so the trip accomplishes plenty."],
    ],
  },
  "daly-city": {
    name: "Daly City",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 18-20 minutes north of our San Mateo office",
    distanceTier: "mid",
    geo: { lat: 37.6879, lng: -122.4702 },
    lede:
      "Daly City is the gateway to the Peninsula, a big, diverse city spilling across the hills where the Pacific meets the bay. It is famous for one thing above all: fog. The marine layer pours over Daly City more often than almost anywhere in the Bay Area, and that persistent damp has a real, specific effect on hearing devices. Our San Mateo office is about twenty minutes south.",
    hook: [
      "Fog, damp air, and your hearing aids",
      "Daly City's fog belt means cool, humid air much of the year, and moisture is the single most common cause of hearing aid trouble. Residents notice it as muffled sound, intermittent cut-outs, or corroded contacts. It is very manageable once you know how: moisture-resistant devices, a nightly drying routine, and regular professional cleaning keep hearing aids reliable in a damp climate. When something does go wrong, we handle repairs so you are not left without your hearing.",
    ],
    motif: "coast",
    localScene: [
      "From Westlake to the ocean's edge",
      "Daly City stretches from the Westlake and Serramonte neighborhoods across the ridge to Skyline and the dramatic bluffs above Mussel Rock, with its large, close-knit Filipino community giving the city much of its character along Mission Street and John Daly Boulevard. What ties these neighborhoods together is the fog and wind off the ocean. For that damp climate we lean into moisture-resistant technology, drying habits, and durable fittings that hold up, a straightforward drive south on the 280 or the 101.",
    ],
    whyHere:
      "Daly City patients choose us for climate-smart fittings, thorough testing, and dependable repairs, care that accounts for the fog belt rather than ignoring it. They also come for specialized tinnitus treatment and the continuity of one audiologist who knows their history.",
    landmarks:
      "We are about eighteen to twenty minutes from Daly City's Westlake, Serramonte, and Skyline neighborhoods, heading south on the 280 or 101 to our San Mateo office.",
    faqs: [
      ["Why do my hearing aids act up in Daly City's damp weather?", "Moisture gets inside the device and the sound goes muffled or starts cutting out. The fog belt here is not seasonal, so a drying box is a year-round habit rather than a winter one. Rechargeable models also need their contacts wiped, because damp and metal do not sit well together."],
      ["My hearing aid has stopped working. Is it repairable?", "Often, and often the same day. Moisture and wax account for most of what comes in. Before you assume the worst, change the wax guard and dry it overnight. If that does not do it, bring it in."],
      ["How far is your office from Daly City?", "Our San Mateo office is about eighteen to twenty minutes south. Call 650-342-9449 to schedule a visit."],
    ],
  },
  "danville": {
    name: "Danville",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes east",
    distanceTier: "far",
    geo: { lat: 37.8216, lng: -121.9999 },
    motif: "estate",
    lede:
      "Danville keeps a small-town feel in the San Ramon Valley: the tree-lined blocks of Hartz Avenue, the estates out toward Blackhawk, Mount Diablo rising behind it all. It's about 50 minutes east of our Peninsula offices, so we're upfront that we're not the nearest audiologist, though Danville residents do travel to us for specialized care.",
    hook: [
      "Discreet devices, and the part that actually decides the result",
      "Danville patients often ask for two things at once: hearing that keeps up with a full week, and technology nobody notices. Modern in-canal and receiver-in-canal aids handle the second easily. The first is decided at the fitting, not at the purchase. We measure the output in your ear canal against your prescription and adjust until it matches, which routinely changes the result more than moving up a technology tier does.",
    ],
    localScene: [
      "From Hartz Avenue to Blackhawk",
      "Danville's character shows in the boutiques and cafes along Hartz Avenue, the playwright's retreat at Eugene O'Neill's Tao House, the upscale shops of Blackhawk Plaza, and the Iron Horse Trail threading through it under Mount Diablo. Residents here tend to value results and privacy over gadgetry. We match that with careful, verified fittings and technology chosen honestly for the way you actually live and listen.",
    ],
    whyHere:
      "Danville patients come to us for [tinnitus care](/tinnitus/) and Lenire, and for fittings that have already disappointed once. Many first came for the ringing and stayed for the rest of their hearing care, seeing the same audiologist each time.",
    landmarks:
      "We're about 50 minutes from Hartz Avenue, Blackhawk Plaza, and the Iron Horse Trail, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes, several in-canal and receiver-in-canal styles. The trade with the smallest ones is battery life, because a smaller shell takes a smaller battery. We will show you both so you can decide which trade you would rather make."],
      ["Can I see a tinnitus specialist?", "Yes. Dr. Emily McMahan, AuD focuses on tinnitus, including Lenire, and sees patients from throughout the San Ramon Valley. Call 650-342-9449 to arrange a visit."],
    ],
  },
  "dixon": {
    name: "Dixon",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 95 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.4455, lng: -121.8233 },
    lede:
      "Dixon is a small agricultural city on the eastern edge of Solano County, surrounded by farmland and known for its long-running Lambtown festival and its Mayfair. Our offices are on the San Mateo Peninsula, around 95 minutes to the southwest.",
    hook: [
      "Farm equipment, and the hearing loss nobody notices",
      "Tractors, combines, grain dryers, shop compressors: farm work runs on machines loud enough to do damage, and it does that damage slowly enough that almost nobody catches it happening. The usual first sign is not volume but ringing in a quiet house at night, or losing one voice at a crowded table. A diagnostic evaluation settles what is going on. Dixon is ninety-five minutes from us and there is no sense driving that for a test you can get at home.",
    ],
    motif: "civic",
    localScene: [
      "A farm town on the county's edge",
      "The town keeps its small, agricultural shape: the historic downtown around First and A Streets, the fairgrounds that host Lambtown and the county's events, and open farmland in every direction. It is quiet by day and quieter at night, which is exactly when tinnitus is loudest and hardest to ignore.",
    ],
    whyHere:
      "The Dixon patients who make this drive came for tinnitus that would not settle, for Lenire, or for a fitting nobody had verified. We fold testing, treatment and counseling into one visit and set up follow-up so a second ninety-five-minute drive is rare.",
    landmarks:
      "Patients reach our Peninsula offices from Dixon's downtown, the fairgrounds, and the surrounding farmland, generally around 95 minutes southwest along I-80.",
    faqs: [
      ["That's a long way from Dixon. Why would I come?", "For a hearing test or ordinary hearing aids, you shouldn't. Come for [tinnitus care](/tinnitus/), Lenire, or a fitting that has failed once already. Call 650-342-9449 and we will tell you before you commit to the drive."],
      ["Can years of farm and equipment noise damage hearing?", "It can, and it usually does it slowly enough that nobody catches it happening. A full diagnostic evaluation shows whether noise is part of the picture and what will help. Call 650-342-9449 to book one."],
    ],
  },
  "east-palo-alto": {
    name: "East Palo Alto",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 12 minutes from our San Carlos office on the 101",
    distanceTier: "near",
    geo: { lat: 37.4688, lng: -122.1411 },
    lede:
      "East Palo Alto sits along the bay at the southern edge of San Mateo County, a proud, close-knit community with deep roots and a fast-changing skyline of new offices and housing near the water. Good hearing care should be straightforward to reach here, and it is, with our San Carlos office about twelve minutes up the 101.",
    hook: [
      "Full-service hearing care within easy reach",
      "Thorough hearing care should be easy to reach, and East Palo Alto residents have it just up the freeway. A first hearing test, help for a parent who has started asking people to repeat themselves, ringing in the ears, hearing aids that need fitting and follow-up: all of it happens in one place. We explain results in plain language and recommend honestly, including when the honest recommendation is to wait and retest in a year.",
    ],
    motif: "bayside",
    localScene: [
      "A bayside community, close to real care",
      "East Palo Alto runs from the neighborhoods off University Avenue and Bay Road out to the shoreline at Cooley Landing and the Ravenswood Open Space Preserve, with newer development rising near the bay. It is a community that values respect and straight talk, and that is how we work: careful [hearing evaluations](/hearing-testing/), clear explanations, and honest technology recommendations, a short and easy drive up the 101 to San Carlos.",
    ],
    whyHere:
      "East Palo Alto patients choose us for real attention and real expertise: testing that includes speech in background noise, honest guidance across every price point, and [tinnitus care](/tinnitus/) including Lenire, with the same audiologist each visit.",
    landmarks:
      "We are about twelve minutes from East Palo Alto's University Avenue, Bay Road, and Cooley Landing, straight up the 101 to our San Carlos office.",
    faqs: [
      ["Is there a full-service audiologist near East Palo Alto?", "Yes. Our San Carlos office is about twelve minutes north on the 101, offering complete testing, fittings, tinnitus care, and repairs all in one place."],
      ["Do you offer hearing aids at different price points?", "We do. We carry a range of technology levels and recommend honestly based on your hearing needs and budget, never pushing the most expensive option."],
      ["How do I set up a first hearing test?", "Just call 650-342-9449. A full evaluation is the starting point, and we will walk you through the results in plain language."],
    ],
  },
  "el-cerrito": {
    name: "El Cerrito",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 45 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.9161, lng: -122.3108 },
    motif: "downtown",
    lede:
      "El Cerrito runs in a narrow band between the Berkeley hills and the bay, its life strung along San Pablo Avenue and the Ohlone Greenway. Our offices are on the Peninsula, about 45 minutes across the bay, so we're upfront that we're a destination practice for El Cerrito patients rather than the closest one.",
    hook: [
      "Between the hills and the bay",
      "A day in El Cerrito moves through cafes, transit platforms, and busy avenues, a range of listening situations where a properly verified hearing aid earns its keep. Patients who want a careful, independent approach rather than a rushed chain-store fitting are the ones who seek us out. We center on [speech-in-noise testing](/hearing-testing/) and real-ear verification so devices perform where you actually struggle.",
    ],
    localScene: [
      "The greenway and the avenue",
      "El Cerrito centers on El Cerrito Plaza, the restored Cerrito Theater, the walking-and-biking Ohlone Greenway, the trails of the Hillside Natural Area, and the San Pablo Avenue corridor with its BART stops. It's a compact, transit-woven city full of everyday listening demands. We fit and verify hearing aids to hold up across those settings, and keep up the follow-up care that keeps them working.",
    ],
    whyHere:
      "El Cerrito patients come to us for [tinnitus care](/tinnitus/) and Lenire, and for hearing aids that were sold but never verified. Every fitting is measured in the ear against a prescriptive target, and the same audiologist handles the follow-up.",
    landmarks:
      "We're roughly 45 minutes from El Cerrito Plaza, the Cerrito Theater, and the Ohlone Greenway, crossing the bay to our San Mateo office.",
    faqs: [
      ["My hearing aids were fine when I got them and are not now. What changed?", "Usually one of three things: wax in the ear or the receiver, moisture inside the device, or a hearing level that has shifted since the fitting. The first two are quick. The third needs a fresh test and a re-verification against your prescription, which is what people cross the bay for."],
      ["What makes an independent practice different from a big-box store?", "We aren't tied to one manufacturer, so we recommend honestly and verify every fitting with real-ear measurement. You also see the same audiologist for follow-up rather than a rotating counter."],
      ["Do you offer tinnitus treatment?", "Yes, and it is a real evaluation rather than a screening. We look at what is behind the ringing before recommending anything, and Lenire is one of several options for the patients it suits."],
    ],
  },
  "emeryville": {
    name: "Emeryville",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 40 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.8313, lng: -122.2852 },
    lede:
      "Emeryville is a compact city that reinvented itself from industry into a hub of biotech, studios, and shopping between Oakland and the Bay Bridge. It is dense, modern, and workplace-driven. To be clear, our offices are across the water on the Peninsula, so Emeryville patients typically come to us for specialized hearing work rather than the closest routine appointment.",
    hook: [
      "Open offices, labs, and hearing in demanding rooms",
      "Emeryville runs on workplaces: biotech labs, tech offices, and the busy retail around Bay Street and the Public Market. Open-plan offices and noisy, reverberant rooms are some of the toughest places to follow speech, and that is where mild hearing loss becomes a daily frustration. We test speech-in-noise and verify fittings so hearing keeps up with meetings and lab benches; for that focused approach, or for [tinnitus care](/tinnitus/), some Emeryville professionals make the drive, while simpler needs may be met closer to home.",
    ],
    motif: "downtown",
    localScene: [
      "A small city built around work and retail",
      "Emeryville is easy to picture: the shops and cinema at Bay Street, the Public Market food stalls, the studios and offices along Hollis Street, and the mudflat sculptures out by the marina. It is a place people come to work as much as to live, and workplace listening is where hearing problems tend to surface first. Those who seek us out from Emeryville usually want careful, workplace-realistic testing rather than a quick screening.",
    ],
    whyHere:
      "Emeryville patients come to us for fittings tuned to open-plan rooms, for [tinnitus care](/tinnitus/) and Lenire, and for honest advice on whether a device upgrade would actually change anything. Every fitting is verified with real-ear measurement, and you see the same audiologist each visit.",
    landmarks:
      "From Bay Street, the Public Market, Hollis Street, or the Emeryville marina, our San Mateo office is roughly 40 minutes across the bay.",
    faqs: [
      ["Why travel from Emeryville rather than using a local clinic?", "Routine care should stay close to home. Patients cross the bay for tinnitus treatment, Lenire, and workplace-focused fittings after a first attempt fell short."],
      ["I struggle to hear in open-plan meetings. Can you help?", "Yes. We measure how well you understand speech in background noise and program hearing aids for those exact settings, verifying the result with real-ear measurement rather than assuming the default fits."],
      ["How long is the trip from Emeryville?", "Roughly 40 minutes to San Mateo, traffic permitting. Call 650-342-9449 and we will arrange visits to reduce how often you make the drive."],
    ],
  },
  "fairfield": {
    name: "Fairfield",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 80 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.2494, lng: -122.0400 },
    lede:
      "Fairfield sits midway between San Francisco and Sacramento, best known as home to Travis Air Force Base and the Jelly Belly factory. Our offices are on the Peninsula, roughly 80 minutes southwest.",
    hook: [
      "Flight-line careers and what they cost",
      "Travis puts a large number of Fairfield careers around jet engines, ground equipment and maintenance bays. That is among the loudest routine work there is, and years of it contribute to permanent hearing loss and to tinnitus, often with the ringing arriving first. If that was your job, a full diagnostic evaluation is worth having, and having on record. Veterans in particular should get the audiogram documented whether or not anything is bothering them yet.",
    ],
    motif: "civic",
    localScene: [
      "The county seat between two valleys",
      "The county seat spreads between the Suisun Valley wine district, the hills toward Green Valley, and the flatlands around the base. Downtown, the valley and the base are three different sound environments, and the one that matters clinically is the third. For patients still working the line, custom-molded protection fits and seals better than foam plugs and is worth the appointment on its own.",
    ],
    whyHere:
      "Fairfield patients who travel to us came for [tinnitus care](/tinnitus/) and Lenire, or for a second opinion after hearing aids disappointed. We plan a single long visit, verify the fitting with real-ear measurement while you are in the chair, and keep return trips to what the treatment actually requires.",
    landmarks:
      "Patients reach our Peninsula offices from Fairfield, the Suisun and Green Valley areas, and near Travis Air Force Base, generally around 80 minutes southwest via I-80.",
    faqs: [
      ["Why travel from Fairfield when there are closer options?", "Most of the time you shouldn't. Testing, repairs and adjustments are all available nearer home. Fairfield patients drive down for tinnitus treatment, for Lenire, or because a set of hearing aids was never measured in the ear."],
      ["I spent years around aircraft. Should I get my hearing checked?", "Yes. Prolonged exposure to flight-line and engine noise can contribute to hearing loss, and a full diagnostic evaluation will show where things stand and what helps. Call 650-342-9449 to set one up."],
      ["Do you offer Lenire tinnitus treatment?", "Yes, for suitable candidates. Veterans and base personnel make up a fair share of the tinnitus patients we see. The first appointment is an evaluation rather than a sale."],
    ],
  },
  "foster-city": {
    name: "Foster City",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 10 minutes from our San Mateo office across or along the water",
    distanceTier: "near",
    geo: { lat: 37.5585, lng: -122.2711 },
    lede:
      "Foster City is unlike anywhere else on the Peninsula: a planned community built on engineered fill, laced with lagoons and levees, right at the western foot of the San Mateo Bridge. It is flat, walkable, and home to a large population of both families and active retirees, which shapes the hearing care people here look for.",
    hook: [
      "A bayside community, and the moisture that comes with it",
      "Life on the water is one of Foster City's pleasures, but humidity and moisture are the natural enemies of hearing aids. Sweat, marine air, and the occasional splash on the lagoon can shorten the life of a device that is not properly maintained. We fit Foster City patients with moisture-resistant options where it makes sense, teach simple drying routines, and keep rechargeable contacts clean, small habits that prevent the most common cause of hearing aid repairs.",
    ],
    motif: "bayside",
    localScene: [
      "Life on the lagoons",
      "Foster City is organized around its water: the lagoon system, the levee-top walking and biking trails, and neighborhoods like Edgewater, Sea Cloud, Mariners Island, and the areas around Leo J. Ryan Park. It draws an unusual mix of young families and active retirees, and the waterside lifestyle is exactly where hearing-aid moisture management earns its keep. We set Foster City patients up with moisture-resistant devices and simple drying habits so their hearing aids survive the humidity and the occasional splash on the water.",
    ],
    whyHere:
      "Foster City patients appreciate that our San Mateo office is only about 10 minutes away, with easy parking and no big-medical-center maze. We serve the community's wide age range with everything from first hearing tests and modern hearing aids to tinnitus care and device repairs.",
    landmarks:
      "We are a short drive from the Foster City lagoons, Edgewater and Metro Center, and the western approach to the San Mateo–Hayward Bridge (Highway 92).",
    faqs: [
      ["Does living near the water affect hearing aids?", "It can. Humidity and moisture are a leading cause of hearing aid problems. We recommend moisture-resistant devices and simple drying routines for patients in bayside communities like Foster City, and we service devices that have taken on moisture."],
      ["How close is your office to Foster City?", "Our San Mateo office is about 10 minutes from Foster City. Call 650-342-9449 to book a visit."],
    ],
  },
  "fremont": {
    name: "Fremont",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Carlos",
    approxDrive: "roughly 30 minutes across the Dumbarton Bridge",
    distanceTier: "far",
    geo: { lat: 37.5485, lng: -121.9886 },
    lede:
      "Fremont is one of the Bay Area's largest cities, a sprawling collection of former townships anchored by the historic Mission San Jose district and tied to the Peninsula by the Dumbarton Bridge. That bridge keeps our San Carlos office within reasonable range. Even so, our practice sits across the water, so Fremont patients generally come to us for specialized, focused hearing care.",
    hook: [
      "One bridge from our San Carlos office",
      "Fremont stretches across five old districts, but the Dumbarton Bridge lands close to our San Carlos location, roughly half an hour depending on traffic. That changes what is practical. [Tinnitus](/tinnitus/) and Lenire treatment involve a course of visits rather than one, and Lenire in particular is hard to run from ninety minutes away. From Fremont it is manageable. Routine testing is still better done in Fremont.",
    ],
    motif: "civic",
    localScene: [
      "From Mission San Jose to the flats",
      "Fremont is really several towns in one: the historic Mission San Jose with its old adobe church, the shops of Niles, the Central Park lawns around Lake Elizabeth, and the Warm Springs district out by the newer BART station. It is a large, family-centered, tech-employing community spread over a wide area. Patients who come to us from Fremont usually do so on purpose, seeking a level of tinnitus and hearing specialization that is harder to find nearby.",
    ],
    whyHere:
      "Fremont patients come for [tinnitus care](/tinnitus/) and Lenire, and for fittings that need measuring rather than guessing. The Dumbarton route keeps San Carlos close enough that follow-up visits are not an ordeal, and you see the same audiologist at each one.",
    landmarks:
      "From Mission San Jose, Niles, Central Park, or Warm Springs, our San Carlos office is roughly 30 minutes over the Dumbarton Bridge.",
    faqs: [
      ["How reachable is your office from Fremont?", "The Dumbarton Bridge lands close to our San Carlos office, roughly 30 minutes away. That makes specialized tinnitus care and complex fittings practical from Fremont."],
      ["Why not just see a Fremont audiologist?", "For routine testing and maintenance, do. People travel to us for tinnitus treatment, Lenire, and second opinions where a narrower focus is the point."],
      ["Do you offer Lenire for tinnitus?", "Yes. Lenire is part of our tinnitus program, and Fremont's straightforward Dumbarton access makes its follow-up visits manageable. Call 650-342-9449 to discuss whether it fits your situation."],
    ],
  },
  "gilroy": {
    name: "Gilroy",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 60 minutes south",
    distanceTier: "far",
    geo: { lat: 37.0058, lng: -121.5683 },
    lede:
      "Gilroy is the self-styled Garlic Capital of the World, a farming town at the rural southern end of the county, with a historic Monterey Street downtown and fields and vineyards spreading out around it. It is a full hour south of our Peninsula offices, so the Gilroy patients who come to us are clearly choosing specialized care over the nearest clinic.",
    hook: [
      "Plant and farm noise in south county",
      "Agriculture and food processing run on loud machinery, and years of that exposure contribute to hearing loss and to tinnitus. It builds slowly enough that most people notice the ringing first. A baseline evaluation settles what is happening and what protection is worth using going forward, and Gilroy has closer places to get one than an hour up the Peninsula. What patients travel to us for is [tinnitus care](/tinnitus/), Lenire, and fittings that have already failed once.",
    ],
    motif: "civic",
    localScene: [
      "A working town at the county's rural edge",
      "Gilroy centers on the old downtown along Monterey Street, with the premium outlets off the 101, Gilroy Gardens to the west, and garlic fields and wineries filling the valley around it. It is a hard-working, agricultural community where quiet is the norm but loud equipment is a daily reality on farms and in processing plants. For Gilroy patients who make the trip, we concentrate on occupational hearing changes, tinnitus, and carefully verified fittings.",
    ],
    whyHere:
      "Gilroy patients travel to us because specialized tinnitus care is thin on the ground in south county. They get a long appointment, a fitting verified with real-ear measurement, and Lenire where it suits.",
    landmarks:
      "We are about 60 minutes from downtown Gilroy, the Gilroy outlets, and Gilroy Gardens, north up the 101 to our San Carlos office.",
    faqs: [
      ["It's a long way from Gilroy. Is it worth it?", "For everyday hearing checks, a closer clinic is more practical. Patients make the drive when tinnitus has not eased, when Lenire is worth discussing, or when hearing aids were never verified against a prescription."],
      ["Can farm and plant noise affect my hearing?", "Yes. Sustained machine noise contributes to both hearing loss and tinnitus over a working life. A baseline evaluation tells you where you stand, and custom protection is worth fitting if you are still exposed."],
      ["How far is your office from Gilroy?", "About an hour north on the 101 to San Carlos. Call 650-342-9449 and we will schedule a full visit so one trip covers everything you need."],
    ],
  },
  "half-moon-bay": {
    name: "Half Moon Bay",
    county: "San Mateo County",
    region: "peninsula-coast",
    nearestOffice: "San Mateo",
    approxDrive: "about 25–30 minutes over Highway 92, coast to bay",
    distanceTier: "mid",
    geo: { lat: 37.4636, lng: -122.4286 },
    lede:
      "Half Moon Bay sits on the coast, over the hill from the rest of the Peninsula by way of Highway 92. Famous for its pumpkin festival, working harbor, and long foggy stretches, it is a beautiful place to live, and one where the marine climate has a real, specific effect on hearing devices.",
    hook: [
      "Coastal fog, humidity, and your hearing aids",
      "Half Moon Bay's marine layer means persistently high humidity, and moisture is the single most common cause of hearing aid trouble. Coastal patients see it as muffled sound, intermittent cut-outs, or corroded contacts. It is very manageable once you know how: moisture-resistant devices, a nightly drying routine, and regular professional cleaning keep coastal hearing aids working reliably. When something does go wrong, we handle repairs so you are not left without your hearing.",
    ],
    motif: "coast",
    localScene: [
      "One coast, many communities",
      "The Coastside is really a string of communities: downtown Half Moon Bay along Main Street, the harbor at Pillar Point and Princeton-by-the-Sea, El Granada, Miramar, and the surf breaks out at Mavericks. What they share is the marine layer: cool, damp air rolling in off the Pacific most mornings. That persistent humidity is hard on hearing aids, so for Coastside patients we lean into moisture-resistant technology, drying routines, and durable fittings that hold up to coastal living, over Highway 92 or up Highway 1.",
    ],
    whyHere:
      "For most of the coast, we are the nearest full-service audiology practice. There simply is not an audiologist over the hill for many listening needs. Coastside patients make the trip over 92 for thorough testing, moisture-smart hearing aid fittings, tinnitus care, and dependable repairs, and we make each visit count so the drive is worth it.",
    landmarks:
      "We are about 25–30 minutes from downtown Half Moon Bay, El Granada, Miramar, and Princeton-by-the-Sea by way of Highway 92 to our San Mateo office.",
    faqs: [
      ["Is it worth driving over the hill for hearing care?", "For most Coastside residents, yes, because there is very little full-service audiology on this side of the hill. We can usually bundle testing, fitting, and follow-up so one trip over Highway 92 does the work of two or three."],
      ["Why do my hearing aids struggle in the coastal climate?", "Moisture gets inside the device and the sound goes muffled or starts cutting out. On the coast the marine layer means it happens year-round rather than in a wet season. A drying box overnight and a regular clean handles nearly all of it."],
      ["Can a hearing aid that has died from damp be saved?", "Frequently, yes. Moisture and wax are the two commonest causes of a device that has gone silent, and a professional clean and dry resolves many of them without a repair order."],
    ],
  },
  "hayward": {
    name: "Hayward",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 25-30 minutes across the San Mateo Bridge (Highway 92)",
    distanceTier: "far",
    geo: { lat: 37.6688, lng: -122.0808 },
    lede:
      "Hayward anchors the East Bay at the foot of the San Mateo Bridge, a diverse, working city with a big state university and a long industrial history. Of all the East Bay cities it is the most straightforward drive to us, because Highway 92 lands almost directly at our San Mateo office.",
    hook: [
      "The shortest East Bay drive we see",
      "Hayward sits at the eastern end of the San Mateo-Hayward Bridge, so our San Mateo office is roughly 25-30 minutes away, the shortest crossing of any East Bay city we serve. That matters for [tinnitus](/tinnitus/) work in particular: Lenire runs as a course of appointments over weeks, and from Hayward those are a manageable errand rather than a project. Routine testing is fine locally, but the bridge is short enough that many Hayward patients simply come to us for everything.",
    ],
    motif: "transit",
    localScene: [
      "A crossroads city by the bridge",
      "Hayward is a hub: the shops and restaurants of a revitalizing downtown along B Street, the campus of Cal State East Bay up in the hills, the Japanese Gardens, and the shoreline and marsh trails where Highway 92 heads for the bridge. It is a busy, mixed community of students, families, and tradespeople, many with careers spent around noise. Because the bridge is right there, seeing a specialized audiologist is unusually convenient for a city this far east.",
    ],
    whyHere:
      "Hayward patients get a long first appointment, speech-in-noise testing rather than tones alone, a fitting verified with real-ear measurement, and the same audiologist each visit. The short bridge drive is what makes all of that practical from this far east.",
    landmarks:
      "From downtown Hayward, Cal State East Bay, or the shoreline along Highway 92, our San Mateo office is roughly 25-30 minutes over the San Mateo Bridge.",
    faqs: [
      ["Is Hayward really that close to your office?", "Yes. Highway 92 and the San Mateo Bridge put us roughly 25-30 minutes away, the shortest East Bay drive we see. That makes specialized tinnitus care and complex fittings genuinely practical from Hayward."],
      ["Do you treat tinnitus and offer Lenire?", "We do. Tinnitus is a core focus of the practice, including Lenire therapy, and Hayward's easy bridge access makes the follow-up visits Lenire involves very manageable. Call 650-342-9449 to learn more."],
      ["Should I still consider a local Hayward provider?", "For simple hearing tests and maintenance, a nearby clinic is reasonable. But given how short the 92 crossing is, many Hayward patients find it easy to come to us for both routine and specialized care."],
    ],
  },
  "hercules": {
    name: "Hercules",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 38.0171, lng: -122.2886 },
    motif: "bayside",
    lede:
      "Hercules takes its name from the explosives company that once ran along San Pablo Bay, and today it's a quiet, planned waterfront community at the county's western edge. Our offices are on the Peninsula, roughly 50 minutes across the bay, so we're honest that we're a specialist destination for Hercules patients rather than the nearest audiologist.",
    hook: [
      "Bayfront air and what it does to a hearing aid",
      "Living near San Pablo Bay means damp, salty air, and moisture is the single most common cause of hearing aid trouble: muffled sound, intermittent cut-outs, corroded contacts. It is manageable with a moisture-resistant device, a drying box used every night, and regular cleaning. None of that requires a drive across the bay. What patients here travel for is [tinnitus care](/tinnitus/) and Lenire.",
    ],
    localScene: [
      "A planned town on the water",
      "Hercules runs from its bayfront and the trails along San Pablo Bay through Refugio Valley Park and the Victoria by the Bay neighborhoods to the Capitol Corridor train station on John Muir Parkway. The waterfront setting is a big part of its appeal, and it means damp, coastal air that's hard on hearing devices over time. We lean into moisture-smart technology and durable fittings that hold up to life near the bay.",
    ],
    whyHere:
      "Hercules patients who come to us are here about the ringing, or about hearing aids that never worked. We book a long first visit, measure the fitting in the ear, and keep the same audiologist across the follow-up.",
    landmarks:
      "We're roughly 50 minutes from the Hercules waterfront, Refugio Valley Park, and the John Muir Parkway train station, crossing the bay to our San Mateo office.",
    faqs: [
      ["Do I need a hearing test before you will talk about tinnitus?", "Yes, and it is not a formality. Hearing loss and tinnitus travel together often enough that treating the loss sometimes changes the ringing on its own. We test first and recommend after."],
      ["What usually goes wrong with a hearing aid near the water?", "Moisture gets inside the device and the sound goes muffled or starts cutting out. Most of it is preventable with a drying box used every night, and much of what does fail is repairable rather than replaceable."],
    ],
  },
  "hillsborough": {
    name: "Hillsborough",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 8 minutes from our San Mateo office",
    distanceTier: "near",
    geo: { lat: 37.5741, lng: -122.3794 },
    lede:
      "Hillsborough is a purely residential town of gracious estates and winding, tree-lined roads, with no commercial district by design, so residents cross into Burlingame or San Mateo for nearly every errand. Our San Mateo office is one of the closest, about eight minutes away.",
    hook: [
      "Eight minutes, and what that buys you",
      "Being eight minutes away matters more than it sounds. Hearing aids are not a purchase, they are a setting that gets refined. A wax guard, a program that is too bright in the car, a new problem in one particular restaurant: each of those is a fifteen-minute visit rather than an afternoon. We verify the initial fitting with real-ear measurement, then keep adjusting from what you actually notice at home.",
    ],
    motif: "estate",
    localScene: [
      "A town of estates that travels for its services",
      "Hillsborough winds through neighborhoods like the Country Club district, Tobin Clark, and the roads around the historic Carolands Chateau, with Crystal Springs and Black Mountain framing the western hills. There is no shopping street here, so residents are accustomed to a short drive for their care. Many want discreet technology and an independent practice rather than a big-box counter, minutes down the hill.",
    ],
    whyHere:
      "Hillsborough patients come to us for testing that goes beyond an audiogram, for honest technology advice, and for [tinnitus care](/tinnitus/) including Lenire. You see the same audiologist at every visit, and appointments are private.",
    landmarks:
      "We are a short drive from Hillsborough's Country Club district and the roads near Carolands and Crystal Springs, an easy eight minutes to our San Mateo office.",
    faqs: [
      ["Do you offer truly discreet or invisible hearing aids?", "Yes, including deep-canal options. A deep fit needs a healthy, wax-free canal and a good ear impression, so we check that before ordering anything."],
      ["How long does the first appointment take?", "Close to an hour. That covers your history, the hearing test itself, speech understanding, a look inside the ears, and time to go through what the results mean before any technology is discussed."],
      ["How far is your office from Hillsborough?", "Our San Mateo office is about eight minutes away. Call 650-342-9449 to arrange a visit at a time that suits you."],
    ],
  },
  "lafayette": {
    name: "Lafayette",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes east",
    distanceTier: "far",
    geo: { lat: 37.8858, lng: -122.1180 },
    motif: "estate",
    lede:
      "Lafayette blends an easygoing, semi-rural feel with a polished downtown: the shops along Mt. Diablo Boulevard, the trails circling the Lafayette Reservoir, the oak-covered hills of Lamorinda. It is about 50 minutes east of our Peninsula offices.",
    hook: [
      "Reservoir walks, hard restaurants, and where fittings go wrong",
      "Lafayette life happens outdoors and over dinner, and the second of those is where hearing loss shows up first. Restaurants with hard ceilings defeat hearing aids that were never programmed for them. The fix is not usually a more expensive device. It is measuring what the device actually delivers in your ear canal, comparing that to your prescription, and adjusting until they agree, which is a step manufacturers' default settings routinely miss.",
    ],
    localScene: [
      "Reservoir trails and a downtown stroll",
      "Lafayette's rhythm shows in the walkers and joggers circling the Lafayette Reservoir, the boutiques and restaurants along Mt. Diablo Boulevard, the Lafayette-Moraga Trail, and the quiet lanes of Happy Valley. It's a place that prizes calm and quality. We mirror that in the clinic: taking time to test thoroughly, recommend honestly, and verify every fitting so your hearing keeps up with an active outdoor life.",
    ],
    whyHere:
      "Lafayette patients come to us for [tinnitus care](/tinnitus/) and Lenire, and for fittings that disappointed the first time. Every fitting is verified with real-ear measurement, and the same audiologist handles your follow-up.",
    landmarks:
      "We're about 50 minutes from the Lafayette Reservoir, Mt. Diablo Boulevard, and the Lafayette-Moraga Trail, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Why travel from Lafayette when there are closer options?", "Most of the time, don't. What Lafayette patients come for is tinnitus that has not eased, Lenire, or a fitting that disappointed and was never verified against a prescriptive target."],
      ["Do you fit discreet hearing aids?", "Yes, several low-profile and in-canal styles. How small you can go depends on your ear canal and on how much amplification your hearing needs, since a small shell holds a small receiver."],
      ["Can you help with ringing in the ears?", "Yes. We test first, because a hearing loss underneath the tinnitus is common and treating it sometimes settles the ringing on its own. Lenire is one of the options after that."],
    ],
  },
  "larkspur": {
    name: "Larkspur",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly an hour north",
    distanceTier: "far",
    geo: { lat: 37.9341, lng: -122.5350 },
    lede:
      "Larkspur is a compact, leafy town best known for its ferry terminal to San Francisco and the open-air Marin Country Mart beside it, with a historic downtown of redwood-shaded streets along Magnolia Avenue. It sits well north of us, across the bay and up the 101. Our offices are on the Peninsula, roughly an hour away. We are upfront about that: most Larkspur patients travel to us for something particular.",
    hook: [
      "A commuting town, and what that makes practical",
      "Plenty of Larkspur residents already commute, many of them onto the ferry each morning, so a longer trip for the right specialist is nothing new. Where we earn it is [tinnitus](/tinnitus/) work: Lenire runs as a course of appointments over weeks, and it needs somewhere willing to schedule around a distance rather than around a clinic diary. For a routine clean-and-check, a nearer Marin office is the sensible call and we will point you there.",
    ],
    motif: "bayside",
    localScene: [
      "A small town by the water",
      "Larkspur life gathers around a few landmarks: the ferry terminal and Larkspur Landing, the shops and cafés of Marin Country Mart, the historic downtown along Magnolia Avenue, and the redwood canyon trails up toward Baltimore Canyon. It is walkable and close-knit, the kind of place where people prefer a practice that knows them personally. Because the drive to us is a real commitment, we make visits count: pairing testing, fitting, and follow-up so one trip over the bridge does the most it can.",
    ],
    whyHere:
      "Larkspur patients come to us for thorough diagnostics, honest technology recommendations, and [tinnitus care](/tinnitus/) including Lenire, all with the same audiologist each visit. Many arrived first about ringing or a fitting nobody could solve and stayed for the rest of their hearing care.",
    landmarks:
      "We are about an hour south of the Larkspur Ferry Terminal, Marin Country Mart, and the Magnolia Avenue downtown, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Could I combine a hearing visit with a trip into the city?", "Some patients do plan their visit around a broader day out, though our offices are on the Peninsula rather than in San Francisco. We are glad to schedule so testing, fitting, and follow-up fit into one efficient trip."],
      ["Why choose a practice an hour away over one in Marin?", "For everyday care, we would not argue with convenience. People choose us for tinnitus and Lenire treatment, and for fittings that have already fallen short once, where the measurement matters more than the miles."],
      ["How far is your office from Larkspur?", "Roughly an hour south via Highway 101 and the Golden Gate to San Mateo. Call 650-342-9449 to arrange a visit with enough time set aside to make the drive worthwhile."],
    ],
  },
  "livermore": {
    name: "Livermore",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly an hour east",
    distanceTier: "far",
    geo: { lat: 37.6819, lng: -121.7680 },
    lede:
      "Livermore anchors the eastern edge of the Bay Area, a Tri-Valley city of vineyards, ranchland, and a science-and-tech heritage from its national laboratory. It is the farthest east of the cities we serve, and we will not pretend otherwise: our offices are a solid hour west on the Peninsula. Livermore patients who come to us are choosing a tinnitus-focused practice on purpose.",
    hook: [
      "The farthest east we go",
      "Livermore is an hour from our offices, the longest regular drive we see from the Tri-Valley, and for everyday hearing care a local provider is plainly the right choice. The exception is [tinnitus](/tinnitus/). Lenire and structured tinnitus management involve a course of appointments, and the patients who take that on from this distance do it because nothing closer was offering it. We schedule around the hour rather than pretending it away.",
    ],
    motif: "wine",
    localScene: [
      "Vineyards, downtown, and open valley",
      "Livermore stretches from a revitalized downtown around First Street and the Bankhead Theater out to the vineyards of the Livermore Valley, Wente and Concannon among the oldest, with ranch country and the lab shaping the city's edges. It is a community that blends agricultural roots, wine tourism, and scientific work. The patients who make the long drive to us do so because they want a practice that concentrates on the tinnitus and complex-hearing problems general clinics rarely specialize in.",
    ],
    whyHere:
      "Livermore patients get long appointments, testing that includes speech in background noise, and a fitting verified with real-ear measurement rather than left on the manufacturer's first fit. They see the same audiologist every visit, which is most of why they keep making the drive.",
    landmarks:
      "From downtown Livermore, the Bankhead Theater, or the Livermore Valley wineries, our San Mateo office is roughly an hour west.",
    faqs: [
      ["An hour is a long way. Why come to you?", "For everyday hearing care we would point you to a Tri-Valley provider. Livermore patients travel to us for tinnitus treatment, Lenire, and fittings that have already failed once."],
      ["Do you have real experience with difficult tinnitus?", "Yes. Tinnitus is a central focus of our practice, including Lenire therapy for suitable patients. If ringing is disrupting your sleep or concentration, call 650-342-9449 to talk it through before committing to the trip."],
      ["Can you make one visit accomplish more, given the distance?", "We try to. For patients traveling from as far as Livermore, we group testing, fitting, and follow-up where clinically sensible so fewer long drives are needed."],
    ],
  },
  "los-altos-hills": {
    name: "Los Altos Hills",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 28 minutes from our San Carlos office",
    distanceTier: "far",
    geo: { lat: 37.3797, lng: -122.1372 },
    lede:
      "Los Altos Hills is almost purely residential: winding lanes, large wooded lots, horse properties, and no commercial district by design. Our offices sit up on the Peninsula rather than in the South Bay, but residents used to traveling for specialized services make the roughly 28-minute drive for care they cannot find closer.",
    hook: [
      "What a second opinion actually consists of",
      "Patients from Los Altos Hills often arrive with hearing aids someone else sold them and a question about whether they are right. A useful second opinion is not a sales conversation. It is a fresh audiogram, a speech-in-noise measure, and a real-ear measurement of what your current devices are delivering at your eardrum compared with your prescription. Frequently they are under target, and frequently that can be fixed without buying anything.",
    ],
    motif: "estate",
    localScene: [
      "A rural residential town that travels for its services",
      "With Foothill College at its edge, the open space of Rancho San Antonio nearby, and estate parcels threaded along roads like Fremont, Page Mill, and Moody, Los Altos Hills has no downtown and never wanted one. Residents drive for nearly everything, so a trip up the Peninsula for a specialist is a familiar errand rather than an expedition.",
    ],
    whyHere:
      "Los Altos Hills patients come to us for [tinnitus care](/tinnitus/) including Lenire, for fittings measured in the ear rather than assumed, and for honest advice on technology. Many first crossed the county line for a problem no one nearer had solved.",
    landmarks:
      "We are about 28 minutes from Foothill College, Rancho San Antonio, and the Page Mill corridor, north via the 280 to our San Carlos office.",
    faqs: [
      ["Is it worth traveling this far when there are audiologists closer?", "For routine hearing aid checks, a nearby provider is perfectly fine. Patients travel to us when tinnitus has not responded, when Lenire is worth considering, or when a fitting needs measuring against a prescription rather than guessing."],
      ["Can you tell me whether the hearing aids I already own are set correctly?", "Yes, and it takes one appointment. We measure the sound your devices actually deliver in your ear canal and compare it against your prescription. If they are under target, adjusting them usually helps more than replacing them."],
      ["How far is your office from Los Altos Hills?", "Our San Carlos office is about 28 minutes north on the 280. Call 650-342-9449 and we can plan a longer, efficient visit to make the drive count."],
    ],
  },
  "los-altos": {
    name: "Los Altos",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 25 minutes from our San Carlos office",
    distanceTier: "mid",
    geo: { lat: 37.3852, lng: -122.1141 },
    lede:
      "Los Altos keeps a village feel that its old apricot orchards would still recognize, with a walkable downtown triangle and leafy streets. Residents here expect care that is personal and takes the time it needs, and our San Carlos office is a manageable 25-minute drive up the Peninsula.",
    hook: [
      "A downtown built for lunch, and what that asks of your hearing",
      "Downtown Los Altos runs on long lunches, farmers-market conversation, and tables close together. Those are the hardest listening conditions there are: several voices at once, hard surfaces, no visual cue about who is about to speak. People with early hearing loss manage fine one-to-one and struggle badly here. That gap is measurable. We test speech understanding with background noise running, which shows the problem an ordinary audiogram in a quiet booth hides.",
    ],
    motif: "downtown",
    localScene: [
      "A downtown triangle built for conversation",
      "Downtown Los Altos is made for lingering: the triangle of Main Street, State Street, and First Street, the Rancho Shopping Center, and shaded neighborhoods like Country Club and North Los Altos. It is a town of face-to-face conversation, farmers-market chatter, and long lunches, all of which depend on clear hearing. For Los Altos patients we emphasize discreet, well-verified fittings that hold up across exactly these everyday settings, so the social life the town is built around stays effortless.",
    ],
    whyHere:
      "Los Altos residents come to us for testing that measures speech in noise, technology matched to real needs rather than upsold, and one familiar audiologist over time. Many first came for [tinnitus care](/tinnitus/) or a fitting that failed elsewhere and stayed for everything after.",
    landmarks:
      "We are about 25 minutes from downtown Los Altos, the Rancho Shopping Center, and the First Street district by way of El Camino and the 101 to our San Carlos office.",
    faqs: [
      ["Do you fit discreet, nearly invisible hearing aids?", "Yes. One thing worth knowing: the very smallest custom styles have room for only one microphone, and it takes two for a hearing aid to give you any directional advantage in a noisy restaurant. If busy rooms are your main problem, that trade matters."],
      ["Why see an independent audiologist instead of a big retailer?", "An independent practice can spend the time that verified, comfortable fittings require, and you see the same audiologist for follow-ups and adjustments rather than whoever is on shift."],
      ["How far is the audiologist from Los Altos?", "Our San Carlos office is about 25 minutes north via El Camino and the 101. Call 650-342-9449 to arrange a visit."],
    ],
  },
  "los-gatos": {
    name: "Los Gatos",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 40 minutes south",
    distanceTier: "far",
    geo: { lat: 37.2358, lng: -121.9624 },
    lede:
      "Los Gatos tucks itself against the Santa Cruz Mountains: a polished downtown along Santa Cruz Avenue, the creek trail winding up toward the hills, and homes that climb into the trees. Our practice is roughly 40 minutes north on the Peninsula, and Los Gatos residents who expect the best will travel for hearing care that meets that standard.",
    hook: [
      "Patio dinners and a creek trail",
      "Los Gatos is built around being outside with other people: patio tables on Santa Cruz Avenue, the creek trail, gatherings that spill into a garden. Outdoors, speech loses the reflections that help indoors, so it arrives thinner and quieter, and background noise arrives from every direction. Hearing aids handle that only when the directional settings are configured for it, which is a fitting decision rather than a feature you buy.",
    ],
    motif: "estate",
    localScene: [
      "Downtown, Old Town, and the road to the hills",
      "The town centers on Santa Cruz Avenue and the shops of Old Town, with the Los Gatos Creek Trail leading down to Vasona Lake and neighborhoods rising toward the mountains and Highway 17. It is a place of patio dinners, trail walks, and close-knit gatherings, all of which depend on catching every word. For Los Gatos patients who make the trip, we prioritize discreet, carefully verified fittings and specialized tinnitus care that is not easy to find nearby.",
    ],
    whyHere:
      "Los Gatos residents come to us for fittings verified with real-ear measurement, honest technology advice, and [tinnitus care](/tinnitus/) including Lenire, with the same audiologist over time.",
    landmarks:
      "We are about 40 minutes from downtown Los Gatos, Old Town, and the Los Gatos Creek Trail, north up the 280 to our San Carlos office.",
    faqs: [
      ["Do you fit hearing aids that stay out of sight?", "Yes. The smallest custom styles are usually battery-powered rather than rechargeable, since there is no room for both a cell and a charging coil. If rechargeable matters to you, a slim receiver-in-canal style is the better compromise."],
      ["Should I make the drive from Los Gatos?", "For routine visits, a local provider is more practical. Patients come to us when tinnitus is the problem, when Lenire is worth discussing, or when a fitting was never checked against a prescription."],
      ["How far is your office from Los Gatos?", "About 40 minutes north via the 280 to San Carlos. Call 650-342-9449 to arrange a thorough visit built around the drive."],
    ],
  },
  "marin-county": {
    name: "Marin County",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "north over the Golden Gate Bridge",
    distanceTier: "far",
    geo: { lat: 38.0, lng: -122.55 },
    lede:
      "Marin County spans the whole stretch north of the Golden Gate, from the waterfront towns of Sausalito and Tiburon through San Rafael, Mill Valley, and Larkspur up to Novato and out to the coast at Point Reyes. It is a large, varied place, and our offices sit on the opposite side of the bay, down on the Peninsula. We are honest about that geography: Marin residents come to us across the bridge for reasons a nearer provider often cannot cover.",
    hook: [
      "A specialized destination, not a routine stop",
      "There are capable audiologists throughout Marin, and for testing, service and repairs you should use them. What patients cross the bridge for is narrower: [tinnitus](/tinnitus/) and Lenire therapy, moisture-related repairs on devices the damp bay air has got into, and second opinions on fittings that were never verified. We are a tinnitus-focused practice, and that is what draws people from across the region.",
    ],
    motif: "civic",
    localScene: [
      "One county, many communities",
      "Marin runs from bayfront towns like Sausalito, Tiburon, and Larkspur to the county seat at San Rafael, the redwood-shaded quiet of Mill Valley beneath Mount Tamalpais, and the more suburban north around Novato, with Muir Woods, Point Reyes, and open coast at the county's edges. Damp bay and marine air are a common thread that can be tough on hearing technology. Wherever in Marin you're coming from, we match the care to your setting and make the trip over the bridge count by pairing testing, fitting, and follow-up where we can.",
    ],
    whyHere:
      "Marin patients generally come to us for advanced [tinnitus care](/tinnitus/) and Lenire, honest technology advice, and the same audiologist rather than a rotating counter. Many first came about ringing or a fitting that had never sounded right.",
    landmarks:
      "From across Marin, Sausalito, Tiburon, San Rafael, Mill Valley, Larkspur, and Novato, the route to us runs south on Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why do Marin patients drive all the way to the Peninsula?", "Usually for tinnitus care, Lenire, or a fitting that has already failed once. For cleanings and basic checks, a provider closer to home in Marin is the practical choice, and we will say so."],
      ["What makes your tinnitus care different?", "Tinnitus is a core focus of our practice. We evaluate it carefully, rule out issues needing medical attention, and build a real plan that may include sound therapy or Lenire, rather than telling patients there is nothing to be done."],
      ["How far is your office from Marin County?", "It depends where in Marin you start, but plan on crossing the Golden Gate and heading down Highway 101 to San Mateo. Call 650-342-9449 and we will schedule enough time to make one visit worthwhile."],
    ],
  },
  "martinez": {
    name: "Martinez",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 55 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.0194, lng: -122.1341 },
    motif: "civic",
    lede:
      "Martinez wears a lot of hats: Contra Costa's county seat, John Muir's old hometown, a historic downtown by the marina, and a refinery town on the Carquinez Strait. It's roughly 55 minutes northeast of our Peninsula offices, so we're straightforward that we're a destination practice for Martinez patients rather than the nearest one.",
    hook: [
      "A county seat with an industrial waterfront",
      "The industrial side of Martinez matters for hearing. Refinery and trade work along the strait carries years of loud-noise exposure that contributes to hearing loss and tinnitus over time. If that is your background, a baseline [evaluation](/hearing-testing/) is worth having on record. For those still on the job we fit custom-molded hearing protection, which seals better and stays comfortable across a full shift in a way foam plugs do not.",
    ],
    localScene: [
      "From John Muir's home to the marina",
      "Martinez runs from the orchards around the John Muir National Historic Site through the brick-front downtown on Main Street to the marina, the waterfront park, and the refineries on the Carquinez Strait. It's a civic and industrial town at once. Many residents carry working lives spent around heavy equipment, so we emphasize baseline testing, honest results, and protection for people still exposed to that noise.",
    ],
    whyHere:
      "Martinez patients who travel to us come for a diagnostic workup after a career around noise, for custom hearing protection, or for [tinnitus care](/tinnitus/) including Lenire. A routine test belongs closer to home, and we will say so on the phone.",
    landmarks:
      "We're roughly 55 minutes from the John Muir site, downtown Martinez, and the marina, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["I worked around the refineries for years. Should I get my hearing checked?", "Yes. Long-term industrial noise can contribute to gradual hearing loss and tinnitus. A baseline evaluation gives you a clear picture and a reference point for the future."],
      ["Do you make custom hearing protection?", "We do. Custom-molded protection fits better and shields more reliably than generic plugs, which matters for anyone still working around loud equipment."],
    ],
  },
  "menlo-park": {
    name: "Menlo Park",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 12 minutes from our San Carlos office up the 101 or El Camino",
    distanceTier: "near",
    geo: { lat: 37.453, lng: -122.1817 },
    lede:
      "Menlo Park spans a lot of worlds: the Santa Cruz Avenue downtown, the Sand Hill Road venture corridor, the neighborhoods near Stanford, and the large tech campuses toward the Bayfront. That mix means we see everyone here, from young professionals in loud open offices to longtime residents managing hearing change.",
    hook: [
      "Hearing well in demanding listening environments",
      "Many Menlo Park patients spend their days in exactly the situations where hearing is hardest: back-to-back meetings, open-plan offices, video calls, and busy restaurants. Success in those settings is less about buying the most expensive device and more about precise programming, real-ear verification, and features matched to your real environments. We tune hearing aids to the rooms you actually spend time in.",
    ],
    motif: "estate",
    localScene: [
      "Downtown, the venture corridor, and everything between",
      "Menlo Park stretches from the Santa Cruz Avenue downtown and the Allied Arts district to Sharon Heights, the Sand Hill Road venture corridor, and the large campuses out toward the Bayfront. It is a city of demanding listening environments: glass-walled conference rooms, open offices, and restaurants that fill up fast. We help Menlo Park patients hear in exactly those rooms by testing speech-in-noise and measuring each fitting against a prescriptive target, so the benefit shows up where it counts.",
    ],
    whyHere:
      "Menlo Park patients come to us for careful diagnostics, honest technology guidance, and strong [tinnitus care](/tinnitus/), all a short drive up to our San Carlos office. What we measure is whether you can follow speech in the rooms that give you trouble, not whether you passed a screening.",
    landmarks:
      "We are an easy trip from downtown Menlo Park and Santa Cruz Avenue, the Sharon Heights and Allied Arts areas, and the Sand Hill Road corridor.",
    faqs: [
      ["I struggle to hear in meetings and restaurants. Can you help?", "Yes. Difficulty in noise is one of the most common reasons patients come in. We test speech-in-noise, then select and precisely verify technology for those specific situations, which usually helps far more than volume alone."],
      ["Which office serves Menlo Park?", "Our San Carlos office is closest, about 12 minutes from most of Menlo Park via the 101 or El Camino Real. Call 650-342-9449 to schedule."],
    ],
  },

  // ---------------------------------------------------------------- FAR / REGIONAL
  // Far cities. Say plainly that there is no office here, make the stay-local point
  // ONCE per profile, and spend the rest of the words on something only this city has.,
  "mill-valley": {
    name: "Mill Valley",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 55 minutes north over the Golden Gate",
    distanceTier: "far",
    geo: { lat: 37.9060, lng: -122.5450 },
    lede:
      "Tucked into the redwoods at the foot of Mount Tamalpais, Mill Valley wraps a small, walkable downtown around Lytton Square and the old railroad depot. It is a place people choose for quiet and beauty, and one where residents are used to traveling a bit for the right specialist. Our offices are on the Peninsula, about 55 minutes south over the Golden Gate, so Mill Valley patients tend to come to us deliberately.",
    hook: [
      "Redwood quiet, and what it does to ringing",
      "Mill Valley is quiet in a way most of the Bay Area is not, and that is exactly when tinnitus is hardest to live with. Patients describe it as fine in town and intolerable at home under the trees. Nothing is wrong with the ringing getting louder; the background that was covering it has gone. Understanding that is the start of [tinnitus care](/tinnitus/), and it is most of what brings Mill Valley patients down the 101.",
    ],
    motif: "estate",
    localScene: [
      "Redwoods, trails, and a walkable center",
      "Mill Valley life runs from the shops and cafés around Lytton Square and Throckmorton Avenue to Old Mill Park's redwoods, the Dipsea steps, and the trailheads climbing toward Mount Tam. Down at Tam Junction and Tam Valley the pace shifts, but the throughline is the same: people who value quiet and want to keep hearing the birdsong, the creek, and the conversation on the deck. For patients here we focus on natural, well-verified sound and technology that stays out of sight.",
    ],
    whyHere:
      "Mill Valley patients generally come to us about persistent [tinnitus](/tinnitus/), about Lenire, or about a fitting that finally sounded right after other attempts fell short. They see the same audiologist at every visit. For a quick adjustment or routine check, a closer Marin provider makes more sense and we will say so.",
    landmarks:
      "We sit about 55 minutes south of Mill Valley's Lytton Square, Old Mill Park, and the Tam Junction area, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes, several near-invisible and receiver-in-canal styles. Discretion does not have to cost you clarity, but that depends on the fitting rather than the device: we measure the output in your ear against your prescription instead of trusting the default."],
      ["Is the drive from Mill Valley worth it for hearing care?", "For tinnitus or Lenire, or a fitting that has already failed once, most patients feel it is. For routine maintenance, a nearer Marin office is the practical choice and we would rather tell you than waste your morning."],
      ["How far is your office from Mill Valley?", "About 55 minutes down Highway 101 and over the Golden Gate to our San Mateo office. Call 650-342-9449 and we will build in time so a single visit covers testing, fitting, and follow-up where possible."],
    ],
  },
  "millbrae": {
    name: "Millbrae",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 12–15 minutes north of our San Mateo office on the 101",
    distanceTier: "near",
    geo: { lat: 37.5985, lng: -122.3872 },
    lede:
      "Millbrae sits immediately south of San Francisco International Airport and is one of the Peninsula's great transit hubs, where BART and Caltrain meet. That location makes it convenient, and it also puts Millbrae squarely under the busiest part of SFO's flight path.",
    hook: [
      "A transit hub next door to SFO, and who that puts at risk",
      "Few Peninsula cities sit as close to SFO as Millbrae, and few are as defined by movement: trains, buses, and airport traffic all day. The people most exposed to real noise here are those who work the airport and its supply chain: operations, hospitality, ramp and ground transportation. For them, years on the job can add up to permanent noise-induced hearing loss, which is why a baseline evaluation and custom hearing protection are among the smartest steps an airport worker can take. For everyone else, it's simply a good place to know your numbers.",
    ],
    motif: "transit",
    localScene: [
      "A transit hub in SFO's shadow",
      "Millbrae's identity is tied to movement: the Millbrae Intermodal Station where BART meets Caltrain, the El Camino Real corridor, the Green Hills and Mills Estate neighborhoods climbing west into the hills, and the airport pressing in from the north. For residents near the flight path and the many who work in and around SFO, that adds up to real cumulative noise. We start airport-adjacent patients with a baseline evaluation and, where it fits, custom hearing protection, then keep devices dialed in for both quiet streets and loud terminals.",
    ],
    whyHere:
      "Millbrae patients value that our San Mateo office is a quick, direct trip down the 101 or El Camino, with none of the parking hassle of a hospital campus. We provide complete audiology care: testing, hearing aids, tinnitus treatment, protection, and repairs, with continuity of care you rarely get at a chain.",
    landmarks:
      "We are a straight shot from the Millbrae BART/Caltrain station, El Camino Real, and the Green Hills area, generally 12–15 minutes to the office.",
    faqs: [
      ["I live near SFO. Should I be worried about my hearing?", "Living near the airport does not guarantee hearing loss, but chronic loud-noise exposure is a known risk factor. A baseline hearing test is a simple way to know where you stand and to catch gradual change early."],
      ["How do I get to your office from Millbrae?", "Most Millbrae patients reach our San Mateo office in about 12–15 minutes via the 101 or El Camino Real. Call 650-342-9449 for directions."],
    ],
  },
  "milpitas": {
    name: "Milpitas",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 35 minutes south",
    distanceTier: "far",
    geo: { lat: 37.4323, lng: -121.8996 },
    lede:
      "Milpitas sits at the crossroads of the South Bay: where the 880 and 680 meet, the Great Mall draws crowds, and a BART station now anchors the transit hub. Our offices are across on the Peninsula, roughly 35 minutes away, and Milpitas patients travel that stretch when they want specialized hearing and tinnitus care.",
    hook: [
      "Clear hearing for a commuting, working city",
      "Milpitas is a city of commuters and industrial and manufacturing workplaces, and two things follow from that. First, some patients carry years of occupational sound exposure, which can contribute to hearing changes and tinnitus over time. Second, daily life plays out in noise: transit platforms, the mall, busy job sites. We evaluate hearing in realistic noisy conditions and verify fittings with real-ear measurement, which is the kind of thorough work that brings Milpitas patients our way.",
    ],
    motif: "transit",
    localScene: [
      "A transit crossroads of the South Bay",
      "Milpitas revolves around movement: the Milpitas BART and light-rail station, the Great Mall, the McCarthy Ranch shops, and neighborhoods spread between the 880 and 680 beneath the East Hills. Between commuting, shopping crowds, and industrial workplaces, quiet is scarce and clear speech in noise is the everyday test. For the Milpitas patients who choose us, we focus on speech-in-noise testing, verified fittings, and tinnitus care that closer options may not emphasize.",
    ],
    whyHere:
      "Milpitas patients travel to us for fittings that work in noise and are verified with real-ear measurement, for help with occupational hearing changes and [tinnitus](/tinnitus/), and for honest second opinions. For basic maintenance, a South Bay provider is nearer and we will say so.",
    landmarks:
      "We are about 35 minutes from the Great Mall, the Milpitas BART station, and McCarthy Ranch, west and north via the 237 and 101 to our San Carlos office.",
    faqs: [
      ["I've worked around loud equipment for years. Should I get tested?", "Yes. Long-term occupational noise exposure can contribute to hearing loss and tinnitus. A baseline evaluation shows where you stand and what protection or treatment is worth considering."],
      ["Why drive to the Peninsula instead of staying in the South Bay?", "Staying close is sensible for the ordinary things. People come to us from Milpitas when tinnitus is the problem, when Lenire is worth considering, or when a fitting never worked in a noisy room."],
      ["How far is your office from Milpitas?", "About 35 minutes west via the 237 and 101 to San Carlos. Call 650-342-9449 and we will plan an efficient, thorough visit."],
    ],
  },
  "monte-sereno": {
    name: "Monte Sereno",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 42 minutes from our San Carlos office",
    distanceTier: "far",
    geo: { lat: 37.2361, lng: -121.9922 },
    lede:
      "Monte Sereno is one of the Bay Area's smallest, quietest cities: almost entirely residential, with wooded lots and no commercial district, tucked between Los Gatos and Saratoga. Its residents already drive elsewhere for nearly every errand, so the roughly 42-minute trip north to our Peninsula offices is simply a longer version of a familiar habit.",
    hook: [
      "A very quiet town, and tinnitus",
      "Monte Sereno is about as quiet as a Bay Area city gets, and quiet is when tinnitus is loudest. Patients here often describe ringing that is unbearable at home and barely noticeable in town. That is masking, and understanding it is where treatment starts. Our [tinnitus care](/tinnitus/) starts with finding out what is driving it, not with selling a device.",
    ],
    motif: "estate",
    localScene: [
      "A hidden residential enclave between two towns",
      "Monte Sereno has no downtown by design, just secluded homes along roads like Via Sereno and Winden Drive, wrapped in oak and set between the villages of Los Gatos and Saratoga. Residents are long accustomed to traveling for services of every kind.",
    ],
    whyHere:
      "Monte Sereno patients come to us for tinnitus work including Lenire, and for fittings verified with real-ear measurement after an earlier one fell short.",
    landmarks:
      "We are about 42 minutes from Monte Sereno's residential lanes and the neighboring villages of Los Gatos and Saratoga, north via the 280 to our San Carlos office.",
    faqs: [
      ["Why is my tinnitus so much worse at home than in town?", "Because there is nothing to cover it. Background sound masks tinnitus, and a quiet house removes the masking. It is one of the most common things patients describe, and it is one of the things sound therapy addresses."],
      ["Can you keep everything private?", "Yes. Visits are confidential, and we fit several near-invisible styles for patients who would rather nobody noticed."],
      ["How far is your office from Monte Sereno?", "About 42 minutes north on the 280 to San Carlos. Call 650-342-9449 and we will plan one long visit that covers everything."],
    ],
  },
  "morgan-hill": {
    name: "Morgan Hill",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 55 minutes south",
    distanceTier: "far",
    geo: { lat: 37.1305, lng: -121.6544 },
    lede:
      "Morgan Hill spreads out beneath its landmark El Toro peak: a growing town of vineyards, orchards, and a revitalized downtown along Monterey Road, at the rural southern reach of the valley. Our offices are up on the Peninsula, close to an hour north, and residents here travel that way when they want specialized care their own area cannot readily offer.",
    hook: [
      "What is hard to find at the valley's southern end",
      "Morgan Hill's wineries, farms, and open space make for a fine place to live, but specialized audiology is thin on the ground this far south. When a hearing or tinnitus problem needs more than routine attention: a fitting that finally works in noise, relief from persistent ringing, or a careful second opinion. Patients look toward a focused practice. Ours is organized around that harder work, with thorough diagnostics, verified fittings, and [tinnitus care](/tinnitus/) including Lenire.",
    ],
    motif: "wine",
    localScene: [
      "Wine country at the valley's southern reach",
      "Morgan Hill gathers along downtown Monterey Road with its restaurants and events, out past the wineries of the Santa Clara Valley wine trail, Anderson Lake and its reservoir, and neighborhoods framed by El Toro and the surrounding hills. It is a community of tastings, festivals, and family gatherings, social settings where hearing every word counts. For Morgan Hill patients who travel to us, we focus on clarity in those environments and specialized tinnitus care.",
    ],
    whyHere:
      "Morgan Hill patients choose us for expertise that is hard to find in south county: fittings measured in the ear against a prescription, honest technology guidance, and tinnitus treatment including Lenire.",
    landmarks:
      "We are about 55 minutes from downtown Morgan Hill, Anderson Lake, and the local wineries, north up the 101 to our San Carlos office.",
    faqs: [
      ["Why travel nearly an hour to your practice?", "A nearer provider makes sense for testing and service. Morgan Hill patients come to us because the ringing has not eased, because Lenire is worth a look, or because a fitting has already fallen short once."],
      ["Do you offer specialized tinnitus treatment?", "Yes. Tinnitus care is a core focus of our practice, from thorough evaluation through management options including Lenire, chosen to fit your situation."],
      ["How far is your office from Morgan Hill?", "About 55 minutes north on the 101 to San Carlos. Call 650-342-9449 and we will set aside enough time that the trip is well spent."],
    ],
  },
  "mountain-view": {
    name: "Mountain View",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 25 minutes from our San Carlos office",
    distanceTier: "mid",
    geo: { lat: 37.3861, lng: -122.0839 },
    lede:
      "Mountain View mixes a lively Castro Street downtown, a busy Caltrain hub, and one of the densest concentrations of tech work anywhere. It is a well-connected city, and getting to our San Carlos office is an easy 25-minute trip up the Peninsula.",
    hook: [
      "Clarity in busy, layered listening environments",
      "Life in Mountain View happens in noisy places: the restaurants along Castro Street, open offices, transit platforms, and crowded events at Shoreline. Following one voice through that kind of background is a specific challenge, and it is exactly where standard hearing aids often fall short. We test speech-in-noise performance and verify each fitting with real-ear measurement, tuning devices for the demanding, layered sound of daily life here rather than for a quiet test booth.",
    ],
    motif: "transit",
    localScene: [
      "A connected city that lives in the noise",
      "Between Castro Street's restaurants, the Mountain View Caltrain and light-rail station, Shoreline Amphitheatre and its park, and neighborhoods like Old Mountain View and Cuesta Park, this is a community always on the move and rarely in silence. Commuting, meeting, and dining out all demand hearing that works in motion and in noise. For Mountain View patients we focus on real-ear-verified fittings and speech-in-noise clarity, so conversations hold up on the platform, at the table, and in the meeting room.",
    ],
    whyHere:
      "Mountain View patients choose us for careful, verified fittings over quick sales, and for specialized [tinnitus care](/tinnitus/) that is hard to find nearby. The short, predictable drive up the Peninsula makes follow-ups and adjustments simple to fit around a full work week.",
    landmarks:
      "We are about 25 minutes from Castro Street, the Mountain View transit center, and Shoreline by way of the 101 to our San Carlos office.",
    faqs: [
      ["Can hearing aids really help in noisy restaurants and offices?", "Yes, when they are chosen and programmed for it. We use speech-in-noise testing and real-ear verification to fit devices for exactly the busy environments you spend time in, then fine-tune from there."],
      ["Do you treat tinnitus as well as fit hearing aids?", "We do. Tinnitus care is a core focus of our practice, including options like Lenire, alongside hearing testing and fittings."],
      ["How far is your office from Mountain View?", "Our San Carlos office is about 25 minutes north up the 101. Call 650-342-9449 and we will find a convenient time."],
    ],
  },
  "napa-county": {
    name: "Napa County",
    county: "Napa County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 60–90 minutes each way, depending on where in the county you start",
    distanceTier: "far",
    geo: { lat: 38.2975, lng: -122.2869 },
    lede:
      "Napa County runs from the city of Napa and American Canyon up through Yountville and St. Helena to Calistoga, an hour or more from the Peninsula depending on where in the valley you start. Our offices are in San Mateo and San Carlos. Most of what people need from an audiologist is routine, and routine care belongs close to home. The Napa patients we do see almost always came for tinnitus.",
    hook: [
      "Harvest, cellar work, and hearing worth checking",
      "Wine work is louder than it looks. Tractors and blowers run through the rows, forklifts and crush equipment run the pad, and a bottling line puts sustained machine noise a few feet from whoever is standing at it. A career of that can contribute to hearing loss and to ringing that shows up later, in the quiet. If that describes your working life, get a baseline hearing test on record. Any audiologist can do one, and it does not need to be us.",
    ],
    motif: "wine",
    localScene: [
      "From the valley floor to the Peninsula",
      "The valley is a string of small towns along Highway 29 and the Silverado Trail, with long rural stretches between them and tourism layered over agriculture. Tasting rooms are hard rooms to hear in: stone and glass, high ceilings, a dozen conversations at once. That is the setting patients describe when they say they hear fine at home and lose people at a table. It is also the setting a hearing aid has to be programmed for, which is why we measure speech understanding with background noise running.",
    ],
    whyHere:
      "What we can offer at this distance is a schedule that does not keep pulling you back. Where it is clinically sensible we test, fit and verify in one visit, handle fine-tuning by phone, and keep you with the same audiologist rather than whoever is on shift. [Tinnitus care](/tinnitus/), including Lenire for suitable candidates, is the work Napa patients come down for.",
    landmarks:
      "Patients travel to our Peninsula offices from Napa, American Canyon, Yountville, St. Helena, and across the valley, generally an hour or more each way.",
    faqs: [
      ["You're far from Napa. Why would I travel to you?", "For most things you should not. A hearing test, a clean and check, or an adjustment to hearing aids that basically work are all better done in the valley. Patients drive down for tinnitus care, for Lenire, or for a second look at hearing aids that never sounded right. Call 650-342-9449 first and we will tell you honestly which of those you have."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. Lenire runs as a course of appointments rather than a single visit, which is worth knowing before you plan a drive from the valley around it. Call 650-342-9449 and we will explain the schedule first."],
    ],
  },
  "novato": {
    name: "Novato",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 70 minutes north",
    distanceTier: "far",
    geo: { lat: 38.1074, lng: -122.5697 },
    lede:
      "Novato is Marin's northernmost city, more spread-out and suburban than its neighbors down the 101, with an Old Town core along Grant Avenue and the redeveloped Hamilton district on the site of the former airfield. It sits at the far end of the county from us; our Peninsula offices are roughly 70 minutes south. So we are straightforward about it: Novato patients who come our way are usually after care they can't easily find closer to home.",
    hook: [
      "The far end of the county",
      "Novato residents have hearing care nearer at hand and should use it for the everyday things. What we tend to help with is the harder stuff: stubborn [tinnitus](/tinnitus/), Lenire, ringing that has not responded to anything else, or a hearing aid fitting that has never quite sounded right and was never measured in the ear. That work rewards a thorough evaluation and an audiologist who stays with it, which is why patients make the longer drive from northern Marin.",
    ],
    motif: "civic",
    localScene: [
      "Northern Marin, at its own pace",
      "Novato is a city of neighborhoods more than a single downtown: Old Town's shops along Grant Avenue, the newer Hamilton community, Indian Valley and Bel Marin Keys, and the open space around Stafford Lake and Mount Burdell. It runs quieter and more residential than the towns closer to the bridge. People here are practical about travel; when they choose a practice an hour-plus away, it is because the specific care matters more than the convenience, and we try to honor that by making each visit thorough.",
    ],
    whyHere:
      "Novato patients generally choose us for a reason a nearer office could not cover: advanced [tinnitus care](/tinnitus/), Lenire, a second opinion, or a fitting that needed real expertise. They come for the depth of the workup and stay for the continuity of one audiologist over time.",
    landmarks:
      "We are roughly 70 minutes south of Novato's Old Town along Grant Avenue, the Hamilton district, and the Stafford Lake area, down Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Novato is a long way from the Peninsula. Is it really worth it?", "For routine hearing care, probably not, and a closer Marin provider will save you the drive. For tinnitus or Lenire, or a fitting that has already fallen short once, the patients who make the trip generally feel it pays off."],
      ["What actually happens at a first tinnitus appointment?", "We take a careful history, test your hearing and how you process sound, and rule out issues that need medical attention, then talk through options, which may include sound therapy or Lenire. The goal of the first visit is a clear picture and a real plan, not a rushed sales pitch."],
      ["How long should I budget to reach your office from Novato?", "About 70 minutes down Highway 101 and across the Golden Gate to San Mateo. Call 650-342-9449 and we will schedule enough time to make the trip count."],
    ],
  },
  "oakland": {
    name: "Oakland",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 35-45 minutes via the San Mateo or Bay Bridge",
    distanceTier: "far",
    geo: { lat: 37.8044, lng: -122.2712 },
    lede:
      "Oakland is the East Bay's biggest city: a place of distinct neighborhoods, a working port, and a music and dining scene that rewards good hearing. We should be upfront: both of our offices sit across the water on the Peninsula, in San Mateo and San Carlos, so we are not the corner audiologist for most Oaklanders. What brings people over the bridge is specialized tinnitus and complex hearing care.",
    hook: [
      "A city built for listening, and one reason some cross the bay",
      "From live shows around the Fox and Paramount to loud, lively restaurants in Temescal, Oakland is full of the rooms that make hearing loss and tinnitus impossible to ignore. Everyday testing and hearing aid service belong closer to home. What brings Oakland patients over a bridge is ringing that has not responded to anything, Lenire, or a fitting that never sat right and was never measured. See our [tinnitus care](/tinnitus/) page for what that involves.",
    ],
    motif: "downtown",
    localScene: [
      "One city, many neighborhoods",
      "Oakland is really a patchwork: Rockridge and its College Avenue shops, Temescal's restaurant row, the walkers ringing Lake Merritt, the hills above Montclair, and the crowds downtown near Jack London Square. Each has its own soundscape, and each has residents whose hearing needs range from a first evaluation to advanced tinnitus management. Those who come to us usually do so on purpose, seeking a practice that concentrates on the harder problems rather than the nearest available appointment.",
    ],
    whyHere:
      "Oakland patients who choose us are here for focused tinnitus treatment including Lenire, for real-ear verification of a fitting nobody checked, or for a fresh look at hearing aids that have never felt right. They see the same audiologist at each visit rather than whoever is on the counter.",
    landmarks:
      "From Rockridge, Temescal, Lake Merritt, or Montclair, we are roughly 35-45 minutes away via the San Mateo Bridge or the Bay Bridge to our San Mateo office.",
    faqs: [
      ["There are audiologists in Oakland. Why travel to you?", "For routine testing and hearing aid maintenance, use them. Patients cross the bay to us mainly for tinnitus care, Lenire, and fittings that have already failed once."],
      ["Do you treat tinnitus for East Bay patients?", "Yes. Tinnitus care is a core focus of our practice, and we see patients from across the East Bay. If ringing or buzzing is affecting your sleep or concentration, call 650-342-9449 to talk through the options."],
      ["How long is the drive from Oakland?", "Plan on roughly 35-45 minutes to our San Mateo office depending on which bridge you take and traffic. We schedule East Bay patients with that trip in mind, often combining testing and follow-up into fewer visits."],
    ],
  },
  "oakley": {
    name: "Oakley",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 75 minutes east",
    distanceTier: "far",
    geo: { lat: 37.9974, lng: -121.7124 },
    motif: "bayside",
    lede:
      "Oakley sits right on the Delta, where Big Break Regional Shoreline opens onto the water and old vineyards and orchards still shape the town's character. It is a quiet, out-of-the-way corner of the county, which is part of its appeal and also why our Peninsula offices are about 75 minutes west.",
    hook: [
      "Delta quiet, and what it does to tinnitus",
      "Oakley is genuinely quiet, which is pleasant until you have ringing in your ears. Tinnitus is loudest in a silent room, and rural patients often describe it as worse at home than anywhere else. That is not imagination; it is masking, or the lack of it. [Tinnitus care](/tinnitus/) and Lenire are what patients here drive seventy-five minutes for. A routine hearing test is not, and we will say so.",
    ],
    localScene: [
      "Old vines and Delta shoreline",
      "Oakley runs from the waterfront trails and fishing pier at Big Break Regional Shoreline to the Main Street core and the pockets of old-vine vineyards the area is quietly known for. It's a small, spread-out Delta town where daily life is calm but specialty services mean a drive. That's the trade-off we work with, making each visit thorough enough that patients from this far out feel the trip was worthwhile.",
    ],
    whyHere:
      "Oakley patients get one long visit rather than a series of short ones, a fitting measured in the ear against their prescription, and the same audiologist each time they come back.",
    landmarks:
      "We're about 75 minutes from Big Break Regional Shoreline, downtown Oakley, and the Delta waterfront, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["Why would I drive from Oakley to the Peninsula for hearing care?", "For routine testing, a closer provider is the sensible option. Patients travel to us for tinnitus treatment, Lenire, and fittings that have already gone wrong once."],
      ["Do you treat tinnitus and offer Lenire?", "Yes. The evaluation comes first: hearing test, history, and a check for anything that needs medical attention. Then we talk about what will actually help, which may include Lenire."],
    ],
  },
  "orinda": {
    name: "Orinda",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes east",
    distanceTier: "far",
    geo: { lat: 37.8771, lng: -122.1797 },
    motif: "estate",
    lede:
      "Orinda sits just through the Caldecott Tunnel in the wooded Lamorinda hills, a leafy, low-key community known for its 1940s Art Deco theatre and its reservoir-and-canyon surroundings. It's about 50 minutes east of our Peninsula offices, so we're honest that we're not the nearest audiologist, though Orinda residents do travel to us for specialized care.",
    hook: [
      "Theatre Square, and rooms that defeat hearing aids",
      "The Orinda Theatre, a full restaurant, a family gathering in a room with hard floors: these are the settings where people first realize something has changed. A hearing aid handles them only if it was programmed for them. We measure the output in your ear canal against your prescription at the fitting and adjust until they match, then test how you actually follow speech with background noise running. Manufacturers' default settings frequently fall short of that target.",
    ],
    localScene: [
      "Theatre Square, reservoir, and canyon",
      "Orinda's character shows in the marquee of the historic Orinda Theatre at Theatre Square, the boaters and anglers at San Pablo Reservoir, the trails of Wildcat Canyon Regional Park, and the quiet homes around Lake Cascade. It is a wooded town that values calm, and calm is when ringing in the ears is most noticeable. We match that with thorough testing, honest recommendations, and fittings verified for an active outdoor life.",
    ],
    whyHere:
      "Orinda patients come to us about a stubborn case of [tinnitus](/tinnitus/), a Lenire evaluation, or a fitting a closer office could not get right. For a routine question we will answer it on the phone and point you nearer home.",
    landmarks:
      "We're about 50 minutes from Theatre Square, the San Pablo Reservoir, and Wildcat Canyon, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Do you offer discreet hearing aids?", "Yes, several low-profile and in-canal styles. The right one depends on your ear anatomy and hearing, which we assess at the evaluation before recommending anything."],
      ["Can you help with tinnitus?", "Yes. Tinnitus is a core part of what we do, Lenire included for suitable candidates. We find out what is driving it before building a plan. Call 650-342-9449 to talk it through."],
    ],
  },
  "pacifica": {
    name: "Pacifica",
    county: "San Mateo County",
    region: "peninsula-coast",
    nearestOffice: "San Mateo",
    approxDrive: "about 20-25 minutes over the hill from our San Mateo office",
    distanceTier: "mid",
    geo: { lat: 37.6138, lng: -122.4869 },
    lede:
      "Pacifica strings a series of surf-town neighborhoods along the ocean, from Sharp Park down to Linda Mar, wrapped in the marine layer and the sound of the Pacific. It is a beautiful place to live, over the ridge from the rest of the Peninsula, and the salt air and coastal damp have a direct, practical effect on hearing devices. Our San Mateo office is about twenty to twenty-five minutes over the hill.",
    hook: [
      "Salt air, marine humidity, and hearing aid moisture",
      "Pacifica's oceanfront setting means near-constant humidity and salt in the air, and moisture is the leading cause of hearing aid problems. Coastal residents tend to see it as muffled sound, dropouts, or corroded contacts. It is manageable: moisture-resistant devices, a nightly drying routine, and regular professional cleaning keep coastal hearing aids working reliably. When a device does fail, we handle repairs quickly so you are not left without your hearing.",
    ],
    motif: "coast",
    localScene: [
      "A town shaped by the ocean",
      "Pacifica runs from Sharp Park and the pier down past Rockaway Beach and Mori Point to the wide bowl of Linda Mar, with the Sanchez Adobe and Pedro Point rounding out its coastside character and Devil's Slide framing the drive south. What every neighborhood shares is damp, salt-laden ocean air that is hard on hearing aids. For Pacifica patients we lean into moisture-resistant technology, drying routines, and durable fittings, an easy trip over Highway 1 and 92 to San Mateo.",
    ],
    whyHere:
      "Pacifica patients make the trip over the hill because full-service audiology is scarce on the coast, and because coastal living calls for climate-smart care. They come for thorough testing, moisture-resistant fittings, dependable repairs, and specialized tinnitus treatment, and we make each visit count.",
    landmarks:
      "We are about twenty to twenty-five minutes from Pacifica's Linda Mar, Rockaway Beach, and Sharp Park, over Highway 1 and 92 to our San Mateo office.",
    faqs: [
      ["Why do my hearing aids struggle in Pacifica's coastal air?", "Moisture gets inside the device and the sound goes muffled or starts cutting out. Salt makes it worse, because the residue it leaves behind sits on the microphone ports and the contacts. A drying box every night and regular cleaning prevent most of it."],
      ["Is there anywhere closer than over the hill?", "Not for full-service audiology. The coast has very little of it, which is why Pacifica patients come over Highway 1 and 92 to us. We schedule so one trip covers testing, fitting and follow-up where it can."],
      ["Do you repair moisture-damaged hearing aids?", "Yes. Moisture issues are among the most common repairs we see, and many are resolved the same day. Call 650-342-9449 if your devices are acting up."],
    ],
  },
  "palo-alto": {
    name: "Palo Alto",
    county: "Santa Clara County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 15-20 minutes from our San Carlos office on the 101",
    distanceTier: "mid",
    geo: { lat: 37.4419, lng: -122.1430 },
    lede:
      "Palo Alto is where Stanford, University Avenue, and a dense cluster of technology companies meet, a city of demanding careers and packed calendars. That pace puts real demands on hearing, and it is a short 15-to-20-minute run up the 101 to our San Carlos office.",
    hook: [
      "Hearing well in demanding listening environments",
      "For many Palo Alto patients, the challenge is not quiet conversation at home but the hard stuff: back-to-back meetings, open-plan offices, video calls, and noisy University Avenue restaurants. Following speech when several people talk at once is a specific skill, and off-the-shelf devices rarely solve it on their own. We use speech-in-noise testing and real-ear verification to fit and program hearing aids for exactly those settings, so you can keep up where it actually matters.",
    ],
    motif: "downtown",
    localScene: [
      "A city that never stops listening hard",
      "From Old Palo Alto and Crescent Park to College Terrace and Professorville, and along the two downtowns of University Avenue and California Avenue, Palo Alto is full of people whose work depends on hearing every word. Add the Stanford campus and its lectures and events, and you have a community that needs clarity in complex, layered sound. For these patients we focus on speech-in-noise performance and precise verification, not just an audiogram, so hearing aids earn their keep in the rooms where the day happens.",
    ],
    whyHere:
      "Palo Alto patients tend to be discerning and evidence-minded, and they choose us for measured, verified fittings rather than a quick sale. They also come for specialized [tinnitus care](/tinnitus/) and the continuity of seeing the same audiologist each visit, close enough that a follow-up never means a lost afternoon.",
    landmarks:
      "We are about 15-20 minutes from University Avenue, California Avenue, and the Stanford campus by way of the 101 to our San Carlos office.",
    faqs: [
      ["Can you help me hear better in meetings and noisy restaurants?", "Yes. This is one of the most common reasons Palo Alto patients see us. We test how you follow speech in background noise and use real-ear verification to program hearing aids specifically for meetings, offices, and busy restaurants."],
      ["Do you offer speech-in-noise testing?", "We do. A standard audiogram measures soft tones in quiet, but real life is noisier. Speech-in-noise testing shows how you perform in realistic conditions and guides both technology choice and fine-tuning."],
      ["How far is your office from Palo Alto?", "Our San Carlos office is about 15-20 minutes north on the 101. Call 650-342-9449 to find a time that fits around your schedule."],
    ],
  },
  "petaluma": {
    name: "Petaluma",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 75 minutes north",
    distanceTier: "far",
    geo: { lat: 38.2324, lng: -122.6367 },
    lede:
      "Petaluma wears its history openly, from the cast-iron storefronts of its downtown to the riverfront that once made it the self-styled egg capital of the world. It is the closest of the wine-country cities to us and still about seventy-five minutes north, with our offices on the Peninsula in San Mateo and San Carlos.",
    hook: [
      "Dairy, feed and farm equipment",
      "Petaluma's agricultural side has always been more dairy and poultry than grapes, and that work runs on tractors, feed mills, compressors and shop tools. Sustained noise like that contributes to hearing loss slowly, and to tinnitus sometimes long before the loss is obvious in conversation. Anyone with that career behind them should have a baseline audiogram on file. Getting one locally is fine and we would rather you did that than wait.",
    ],
    motif: "wine",
    localScene: [
      "Iron-front downtown to the Peninsula",
      "The historic core along Petaluma Boulevard is unusually intact, with the turning basin on the river and neighborhoods spreading either side. It is a walking downtown, which means a lot of the conversation that matters here happens on a sidewalk with traffic behind it or in a restaurant with a hard ceiling. Those are the rooms a hearing aid has to be programmed for, and the ones a quiet test booth tells you nothing about.",
    ],
    whyHere:
      "Petaluma patients who drive down come for [tinnitus treatment](/tinnitus/), Lenire, or a fitting that has already failed once. We bundle the [evaluation](/hearing-testing/) and the [fitting](/hearing-aid-fitting/) into one visit where we can, and every fitting is verified with real-ear measurement.",
    landmarks:
      "Patients come south to our Peninsula offices from downtown Petaluma, the riverfront turning basin, and the east-side neighborhoods, about seventy-five minutes down Highway 101.",
    faqs: [
      ["Why would I drive from Petaluma when there are closer options?", "For routine hearing care, closer wins and we will say so. The reasons to come this far are tinnitus, Lenire, and hearing aids that were never verified. Call 650-342-9449 and we will work out which you need before you spend the morning driving."],
      ["Do you provide Lenire tinnitus therapy?", "Yes. Before anything else we test your hearing and check for causes that need medical attention. Lenire is one of the options after that, for the patients it suits."],
    ],
  },
  "pittsburg": {
    name: "Pittsburg",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 65 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.0280, lng: -121.8847 },
    motif: "bayside",
    lede:
      "Pittsburg has long been a working waterfront city, from its steel-mill days to the marina and power plants along the New York Slough. It sits at the far northeast reach of the county, about 65 minutes from our Peninsula offices, so for Pittsburg patients we're a specialist destination rather than a quick local visit.",
    hook: [
      "A steel town's noise, years later",
      "Generations of Pittsburg work happened around loud machinery: the Columbia Steel mill, the docks, the power plants along the water. Sustained industrial noise like that contributes to hearing loss and to ringing in the ears, usually with the ringing arriving first. For anyone with that history, a diagnostic [hearing test](/hearing-testing/) is worth having on record, and for those still on the job, custom-molded protection seals better and is more comfortable over a shift than foam plugs.",
    ],
    localScene: [
      "Old Town and the waterfront",
      "Pittsburg centers on the Railroad Avenue storefronts of Old Town, the marina and boardwalk on the New York Slough, the restored California Theatre, and the neighborhoods spreading toward Los Medanos. It is a city with deep industrial roots, which means a lot of residents carry years of workplace noise exposure. We put that first: baseline testing to catch changes early, and protection for people still working around loud equipment.",
    ],
    whyHere:
      "Pittsburg patients who travel to us come for a careful evaluation after a working life around noise, for custom protection, or for [tinnitus care](/tinnitus/) including Lenire. Routine testing belongs closer to home.",
    landmarks:
      "We're roughly 65 minutes from Old Town Pittsburg, the marina, and the California Theatre, driving west across the East Bay to our San Mateo office.",
    faqs: [
      ["I spent years in the mills and around loud equipment. Is testing worthwhile?", "Yes. Long-term industrial noise can gradually contribute to hearing loss and tinnitus. A baseline evaluation tells you where you stand and gives a reference point for the future."],
      ["Do you fit hearing protection for people still working?", "We do. Custom-molded protection seals better and is more comfortable for all-day wear than generic plugs, which matters for workers around ongoing noise."],
    ],
  },
  "pleasant-hill": {
    name: "Pleasant Hill",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 55 minutes east",
    distanceTier: "far",
    geo: { lat: 37.9480, lng: -122.0608 },
    motif: "downtown",
    lede:
      "Pleasant Hill built itself a genuine downtown, an open-air district of restaurants, plaza and cinema, alongside the campus bustle of Diablo Valley College. It sits about 55 minutes east of our Peninsula offices.",
    hook: [
      "An independent practice, not a big-box counter",
      "From noisy dinners downtown to a lecture hall at DVC, following speech across those settings takes a fitting done right, programmed and verified with real-ear measurement, not a device grabbed off a chain-store shelf. Patients who want that methodical, independent approach are the ones who seek us out. We focus on [speech-in-noise testing](/hearing-testing/) and careful verification so hearing aids work where you actually struggle.",
    ],
    localScene: [
      "Downtown, campus, and the trail",
      "Pleasant Hill centers on the walkable Downtown Pleasant Hill district with its plaza and cinema, the busy campus of Diablo Valley College, the greenery of Pleasant Hill Park, and the neighborhoods of Gregory Gardens and Poets Corner along the Iron Horse Trail. It's a city full of everyday listening challenges. We fit and verify hearing aids to hold up in the loud spots, and build in the follow-up that keeps them performing.",
    ],
    whyHere:
      "Pleasant Hill patients come to us for [tinnitus care](/tinnitus/) and Lenire, and for hearing aids that were fitted without anyone measuring the output in the ear. Routine testing can be handled closer to home and we will say so on the phone.",
    landmarks:
      "We're about 55 minutes from Downtown Pleasant Hill, Diablo Valley College, and Pleasant Hill Park, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["What's different about an independent practice versus a big-box store?", "We're not tied to one manufacturer, so we recommend technology honestly and take time to verify every fitting with real-ear measurement. You also see the same audiologist for follow-up, not a rotating counter."],
      ["Will hearing aids work in a loud restaurant?", "They can, when programmed and verified for noise. We use speech-in-noise testing and real-ear measurement so devices are set for the level of racket you actually eat dinner in."],
    ],
  },
  "pleasanton": {
    name: "Pleasanton",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 45 minutes east via the bridges",
    distanceTier: "far",
    geo: { lat: 37.6624, lng: -121.8747 },
    lede:
      "Pleasanton is a polished Tri-Valley city known for its walkable historic downtown, top-rated schools, and affluent, family-oriented neighborhoods. It sits well inland, so honesty is due: our offices are over on the Peninsula, a good drive west through the bridges. Pleasanton residents who come to us are typically after specialized tinnitus or complex hearing care rather than the nearest appointment.",
    hook: [
      "An active calendar, and the fitting that has to keep up",
      "Pleasanton life fills up: professional work, wineries and golf, dinners on Main Street. Patients want hearing that keeps pace and technology nobody notices. Near-invisible aids handle the second easily. The first depends on the fitting, and specifically on measuring what the device delivers in your ear against your prescription, which is the step that most often separates hearing aids people wear from hearing aids in a drawer. For [tinnitus care](/tinnitus/) some Pleasanton patients make the drive west; for routine needs a Tri-Valley provider is nearer.",
    ],
    motif: "downtown",
    localScene: [
      "A historic downtown and leafy neighborhoods",
      "Pleasanton centers on its charming Main Street, with the Alameda County Fairgrounds nearby, the wineries of the Livermore Valley just east, and residential enclaves like Ruby Hill and the neighborhoods around the golf clubs. It is an affluent, community-minded city where an active social calendar puts a premium on clear conversation in restaurants, clubs, and gatherings. Those who seek us out want technology matched honestly to that lifestyle.",
    ],
    whyHere:
      "Pleasanton patients come to us for [tinnitus care](/tinnitus/) and Lenire, and for fittings verified with real-ear measurement after an earlier attempt fell short. Many first came about the ringing and stayed because they see the same audiologist each visit.",
    landmarks:
      "From Main Street, the Fairgrounds, or the Ruby Hill area, our San Mateo office is roughly 45 minutes west through the bridges.",
    faqs: [
      ["Why travel from Pleasanton for hearing care?", "For routine testing, a Tri-Valley audiologist is more convenient. Pleasanton patients come to us for tinnitus treatment, Lenire, and discreet fittings measured against a prescriptive target."],
      ["Can you fit truly discreet hearing aids?", "Yes. We fit several invisible and near-invisible styles, choosing the right one for your ear anatomy and hearing needs, then verifying performance with real-ear measurement so discretion never costs you clarity."],
      ["How far is your office from Pleasanton?", "Roughly 45 minutes west via the bridges to San Mateo. We group testing and follow-up where possible so the drive accomplishes more each visit."],
    ],
  },
  "portolo-valley": {
    name: "Portola Valley",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 18 minutes from our San Carlos office",
    distanceTier: "mid",
    geo: { lat: 37.3841, lng: -122.2352 },
    lede:
      "Portola Valley tucks into the foothills below Windy Hill and Coal Mine Ridge, a small, semi-rural town of open space, oak-studded hills, and homes set back among the trees. Residents choose it for quiet and privacy, and they are accustomed to a short drive for services. Our San Carlos office is about eighteen minutes down the hill.",
    hook: [
      "Hearing outdoors, where wind is the problem",
      "Portola Valley life happens outside: trails at Windy Hill, riding, long walks along Alpine Road. Wind across a hearing aid microphone produces a low roar that can swamp speech entirely, which is why people sometimes love their devices indoors and switch them off on a ridge. Modern aids have wind management that works reasonably well, but it has to be enabled and set. That is a fitting decision, not a purchase decision, and it is worth asking about specifically.",
    ],
    motif: "estate",
    localScene: [
      "A town among the foothills",
      "Portola Valley spreads from its Town Center and the Ladera neighborhood along Portola Road and Alpine Road, up toward the Windy Hill Open Space Preserve, Coal Mine Ridge, and the trails that draw hikers and riders from across the Peninsula. It is deliberately rural, with no commercial strip. Our San Carlos office is about eighteen minutes down the hill, close enough that adjustments happen in the week you need them.",
    ],
    whyHere:
      "Portola Valley patients come to us for thorough testing, discreet technology chosen on its merits, and [tinnitus care](/tinnitus/) including Lenire, with the same audiologist at every visit.",
    landmarks:
      "We are about eighteen minutes from Portola Valley's Town Center, Ladera, and the trails at Windy Hill, heading down Alpine Road toward our San Carlos office.",
    faqs: [
      ["Do you offer discreet or invisible hearing aids?", "Yes, including deep-canal styles. Whether they suit you comes down to canal size and how much gain your hearing needs, because a small shell can only hold a small receiver."],
      ["Will hearing aids work outdoors, or only in a quiet room?", "They work outdoors if they are set up for it. Wind noise is the usual complaint, and current devices have wind programs that help. We set those up at the fitting and adjust them after you have tried them on your own trails."],
      ["How far is your office from Portola Valley?", "Our San Carlos office is about eighteen minutes away. Call 650-342-9449 to schedule at a time that suits you."],
    ],
  },
  "redwood-city": {
    name: "Redwood City",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Carlos",
    approxDrive: "about 8 minutes from our San Carlos office, just down the 101 or El Camino",
    distanceTier: "near",
    geo: { lat: 37.4852, lng: -122.2364 },
    lede:
      "Redwood City, whose old slogan, “Climate Best by Government Test,” still appears on the downtown arch, sits directly next to our San Carlos office. For most Redwood City residents we are the closest independent audiology practice, just minutes down Laurel Street's extension into town.",
    hook: [
      "A short trip for care that keeps up with you",
      "Redwood City has changed fast in the last decade, from the revived downtown theaters and restaurants to the tech campuses near Seaport and the Port of Redwood City. Whether you are still working in a busy open-plan office or enjoying retirement near Roosevelt or Mount Carmel, hearing well in real environments is the goal, and being minutes from your audiologist means adjustments happen when you need them, not weeks later.",
    ],
    motif: "downtown",
    localScene: [
      "A revived downtown, right next door",
      "Downtown Redwood City has become one of the Peninsula's liveliest, from Courthouse Square to the restored Fox Theatre and the restaurants along Broadway, while neighborhoods like Roosevelt, Mount Carmel, Emerald Hills, and the waterfront Redwood Shores each keep their own character. Whether you are catching a show downtown, working a campus near Seaport, or enjoying a quieter retirement in the hills, hearing well depends on devices tuned to your rooms rather than a factory default. Being minutes away at our San Carlos office means we can adjust them whenever life changes.",
    ],
    whyHere:
      "Redwood City patients choose us for thorough testing, honest technology recommendations, and tinnitus expertise, all a few minutes from home at our San Carlos office. Continuity matters here: you see the same audiologist who knows your history and your goals.",
    landmarks:
      "We are an easy drive from downtown Redwood City, Roosevelt, Mount Carmel, and the Seaport/Port area, generally under 10 minutes to the San Carlos office.",
    faqs: [
      ["Which office is closest to Redwood City?", "Our San Carlos office at 1008 Laurel Street is closest, about 8 minutes for most Redwood City residents. Call 650-342-9449 to schedule."],
      ["Do you treat tinnitus in Redwood City?", "Yes. We evaluate and treat tinnitus, including Lenire, for patients throughout Redwood City and the mid-Peninsula."],
    ],
  },

  // ---------------------------------------------------------------- COAST / SOUTH,
  "richmond": {
    name: "Richmond",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 45 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.9358, lng: -122.3477 },
    motif: "bayside",
    lede:
      "Richmond wraps around the north bay with a long, working shoreline: the Rosie the Riveter WWII Home Front park, Point Richmond's old neighborhoods, the refinery and port beyond. Our audiology offices are over on the Peninsula, roughly 45 minutes across the bay, so we're honest that we're a destination rather than a neighborhood stop for Richmond patients.",
    hook: [
      "Industrial work and a lifetime of noise",
      "Richmond's history runs through the WWII Kaiser Shipyards and the industry that still defines its waterfront: the refinery, the port, the rail yards. Heavy industry and the trades come with sustained loud-noise exposure, which over the years can contribute to hearing loss and tinnitus. If you've spent a career around that kind of noise, a thorough baseline [hearing evaluation](/hearing-testing/) is worth it, and we fit custom hearing protection for workers still on the job.",
    ],
    localScene: [
      "A working shoreline and its neighborhoods",
      "From the Craneway Pavilion in the historic Ford Assembly Building to the trails at Miller/Knox Regional Shoreline, the marina at Marina Bay, and the leafy streets of Point Richmond, this is a city shaped by its bayfront and its industry. Many residents have spent working lives around loud machinery. That is why we put real weight on baseline testing, on saying plainly what the results show, and on protection for people still exposed.",
    ],
    whyHere:
      "Richmond patients who come to us are here for a diagnostic workup after a career around industrial noise, for custom hearing protection, or for [tinnitus care](/tinnitus/) including Lenire. For a simple test a closer provider will do, and we will tell you that on the phone.",
    landmarks:
      "We're roughly 45 minutes from Point Richmond, Marina Bay, and the Craneway Pavilion, crossing the bay to our San Mateo office.",
    faqs: [
      ["I worked around heavy industry for years. Should I get tested?", "It's a good idea. Long-term loud-noise exposure can contribute to hearing loss and tinnitus, often gradually. A baseline evaluation gives you a clear picture and something to compare against later."],
      ["Do you make custom hearing protection for people still working?", "Yes. We fit custom-molded protection for industrial and trade workers, which fits better and protects more reliably than generic foam plugs."],
    ],
  },
  "rio-vista": {
    name: "Rio Vista",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 90 minutes northeast in the Delta",
    distanceTier: "far",
    geo: { lat: 38.1557, lng: -121.6913 },
    lede:
      "Rio Vista is a small Sacramento River town deep in the Delta, a boating and fishing community set among the sloughs and drawbridges at the county's far eastern reach. Our offices in San Mateo and San Carlos are around 90 minutes southwest.",
    hook: [
      "Delta damp and hearing aids",
      "Humidity out here is high year round, and moisture is the single most common cause of hearing aid trouble. It shows up as muffled sound, intermittent cut-outs, or contacts that corrode until the device stops charging. A moisture-resistant model, a drying box used nightly, and regular cleaning prevent nearly all of it. That is basic maintenance and it does not need a ninety-minute drive.",
    ],
    motif: "bayside",
    localScene: [
      "A river town among the sloughs",
      "The town lives on the water: the marina and waterfront on the Sacramento River, the drawbridge carrying Highway 12, and the Delta islands laced with sloughs and boat launches beyond. Boat engines and shop work put their own noise into a lot of local histories, and a baseline audiogram is worth having on file if yours is one of them.",
    ],
    whyHere:
      "Rio Vista patients who come to us came for [tinnitus care](/tinnitus/) or Lenire. We consolidate everything into one thorough visit and coordinate follow-up so the drive out of the Delta stays occasional.",
    landmarks:
      "Patients travel to our Peninsula offices from Rio Vista's waterfront, marina, and the surrounding Delta islands, generally around 90 minutes southwest by way of Highway 12 and I-80.",
    faqs: [
      ["I have ringing in my ears. What happens at the first appointment?", "A history, a hearing test, and a check for anything that needs medical attention before treatment is discussed. Only then do we talk about options, which may include sound therapy or Lenire. Nothing is recommended on the first ten minutes of a conversation."],
      ["Can you make one long trip accomplish more?", "That is how we schedule Delta patients. Testing, treatment and counseling go into one visit, and we set up follow-up so you are not driving Highway 12 every fortnight. Call 650-342-9449 to arrange it."],
    ],
  },
  "san-bruno": {
    name: "San Bruno",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 12 minutes north of our San Mateo office on the 101",
    distanceTier: "near",
    geo: { lat: 37.6305, lng: -122.4111 },
    lede:
      "San Bruno sits right at the edge of San Francisco International Airport, tucked between San Bruno Mountain and the bay. It is a working, family-rooted city, and for a lot of residents, work has meant years around aircraft, ground equipment, and industrial noise. Our San Mateo office is about twelve minutes south on the 101.",
    hook: [
      "Occupational noise and protecting the hearing you rely on",
      "SFO and its surrounding operations employ thousands of San Bruno-area residents, and jobs on the ramp, in maintenance, or around ground equipment can involve significant noise exposure over a career. Prolonged occupational noise can contribute to hearing loss, which is why baseline testing and custom hearing protection matter for people who work in loud environments. If you have spent years around aircraft or machinery, a thorough [hearing evaluation](/hearing-testing/) establishes where you stand and helps you protect what you have.",
    ],
    motif: "airport",
    localScene: [
      "A city between the mountain and the runways",
      "San Bruno runs from the trails of San Bruno Mountain State Park down through the neighborhoods off San Bruno Avenue and Cherry, past Skyline College and out toward the airport. It is a city of shift workers, tradespeople, and longtime families, many with a real occupational-noise history. For those patients we focus on honest testing, custom noise protection for the job, and hearing aids fine-tuned for busy, noisy surroundings, an easy drive down the 101 to San Mateo.",
    ],
    whyHere:
      "San Bruno patients come to us for careful, no-pressure testing and for real expertise in noise-related hearing concerns and tinnitus, not a quick sale. We take the time to explain your results, recommend protection that fits your work, and match technology honestly to how and where you listen.",
    landmarks:
      "We are a short drive from San Bruno's Skyline College, San Bruno Avenue, and the neighborhoods below San Bruno Mountain, straight down the 101 to our San Mateo office.",
    faqs: [
      ["I worked around aircraft and machinery for years. Should I get tested?", "Yes. Long-term occupational noise can contribute to gradual hearing loss and tinnitus, often before you notice it in conversation. A baseline evaluation shows where you stand and guides protection going forward."],
      ["Do you make custom hearing protection?", "We do. Custom earplugs and protection are shaped to your ears for jobs, music, and other loud settings, and they are far more effective and comfortable than generic foam plugs."],
      ["How close is your office to San Bruno?", "Our San Mateo office is about twelve minutes south of San Bruno on the 101. Call 650-342-9449 to schedule."],
    ],
  },
  "san-carlos": {
    name: "San Carlos",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Carlos",
    approxDrive: "right in town on Laurel Street, in the heart of downtown",
    distanceTier: "office",
    geo: { lat: 37.5072, lng: -122.2605 },
    lede:
      "San Carlos, the self-styled City of Good Living, is one of our two home offices. We see patients at 1008 Laurel Street, in the middle of the downtown Laurel Street district, so a hearing appointment fits easily around lunch, errands, or a stop at the farmers' market.",
    hook: [
      "A downtown office built around long-term hearing care",
      "Living minutes from your audiologist makes the ongoing side of hearing care effortless. Rechargeable hearing aids that need a firmware update, a wax guard change, a tinnitus check-in, or a warranty repair are all quick visits rather than a project. For San Carlos residents, that convenience is often the difference between hearing aids that get worn every day and ones that end up in a drawer.",
    ],
    motif: "downtown",
    localScene: [
      "A San Carlos practice that knows the neighborhoods",
      "The White Oaks and Howard Park neighborhoods, the mid-century Eichler tracts, and the hillside homes toward Crestview and Devonshire each bring their own patients through our doors. San Carlos also sits beside its own small airport and the Hiller Aviation Museum, and along the El Camino and 101 corridors: settings where a baseline hearing test and, when needed, custom protection make real sense. Being downtown on Laurel Street means we see our patients around town, which keeps care personal.",
    ],
    whyHere:
      "San Carlos patients choose us for careful evaluations and honest technology guidance right in their own downtown. We handle everything from first-time hearing tests to [tinnitus care](/tinnitus/) and Lenire, and we see patients across every stage of life, from working professionals to retirees.",
    landmarks:
      "The office is walkable from the Laurel Street shops and a short drive from White Oaks, Howard Park, and the Eichler neighborhoods, with San Carlos Airport and the 101 just to the east.",
    faqs: [
      ["Where is your San Carlos office located?", "We are at 1008 Laurel Street, 94070, in downtown San Carlos. Reach us at 650-342-9449 for hours and parking."],
      ["Can I be seen at either the San Mateo or San Carlos office?", "Yes. Many patients pick whichever office is more convenient on a given day. Your records and hearing aid settings are shared between both locations."],
    ],
  },

  // ---------------------------------------------------------------- CORE PENINSULA,
  "san-francisco-county": {
    name: "San Francisco County",
    county: "San Francisco County",
    region: "sf",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 20-30 minutes north",
    distanceTier: "mid",
    geo: { lat: 37.7749, lng: -122.4194 },
    lede:
      "San Francisco is both a city and a county: a single dense square of hills, neighborhoods, and microclimates that changes character block to block. Patients come to us from every corner of it, from Bernal Heights to the Presidio, and our San Mateo office sits just 20-30 minutes south, an easy reach for the whole city-and-county.",
    hook: [
      "One county, many microclimates, and what that means for hearing aids",
      "Few places pack as many climates into as small an area as San Francisco. The western avenues live under fog and marine damp, while the sheltered eastern neighborhoods stay warmer and drier. That matters more than most people realize: humidity is the leading cause of hearing aid trouble, so patients on the foggy side of the county benefit from moisture-resistant technology and a drying routine, while everyone benefits from fittings that are verified and maintained rather than sold and forgotten.",
    ],
    motif: "downtown",
    localScene: [
      "Care across the whole city",
      "Because it's a consolidated city-and-county, San Francisco has no suburbs of its own, just neighborhoods, and we see patients from across all of them. Professionals downtown and in the Financial District navigate loud, reverberant rooms all day; families out in the Sunset, the Richmond, and along the coast contend with fog and damp; and residents in the Mission, Bernal Heights, and the southern districts of Excelsior and Visitacion Valley are the quickest drive to us. Each fitting is set for the neighborhoods and rooms a patient actually spends time in.",
    ],
    whyHere:
      "Across the whole of San Francisco, patients choose us for careful diagnostics, technology matched honestly to their needs, and a level of [tinnitus](/tinnitus/) and diagnostic expertise that's the exception, not the rule. The continuity of seeing the same audiologist every visit is a big part of why city patients keep making the short trip south.",
    landmarks:
      "From anywhere in the city-and-county, the Marina and Pacific Heights, the Mission and Bernal Heights, the Sunset and the southern districts, we're roughly 20-30 minutes south to our San Mateo office.",
    faqs: [
      ["You cover the whole city and county of San Francisco?", "Yes. San Francisco is a single city-and-county with no separate towns, and we see patients from neighborhoods across all of it. Our San Mateo office is about 20-30 minutes south of most of the city."],
      ["Does the neighborhood I live in change what hearing aids I need?", "It can. Patients in the foggy western districts get more value from moisture-resistant devices and drying routines, while those in noisy central neighborhoods benefit most from speech-in-noise tuning. We fit for your specific environment."],
      ["Can I get specialized tinnitus care coming from the city?", "Yes, and the short drive helps: tinnitus treatment involves a course of appointments rather than one, which is far easier from twenty minutes away than from the North Bay. Call 650-342-9449 to arrange an evaluation."],
    ],
  },
  "san-francisco": {
    name: "San Francisco",
    county: "San Francisco County",
    region: "sf",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 20-30 minutes north on the 101 or 280",
    distanceTier: "mid",
    geo: { lat: 37.7749, lng: -122.4194 },
    lede:
      "San Francisco packs an enormous variety of listening environments into a compact seven-by-seven miles: echoing lobbies downtown, loud South of Market restaurants, foggy avenues out west, and quiet residential blocks in between. That range is exactly why good hearing matters here, and our San Mateo office is a straightforward 20-to-30-minute drive south on the 101 or 280, closer than many city residents expect.",
    hook: [
      "City listening, and the case for an independent audiologist",
      "A day in San Francisco can move from a noisy SoMa lunch to a conference room in the Financial District to a quiet dinner in Noe Valley. Each demanding something different from your hearing. Getting that right takes more than picking a device off a shelf. We do speech-in-noise testing and real-ear verification so your [hearing aids](/hearing-aid-fitting/) are tuned to how you actually live, and as an independent practice we fit the technology that fits you, not whatever a big-box counter happens to stock.",
    ],
    motif: "downtown",
    localScene: [
      "From the fog belt to the waterfront",
      "San Francisco's neighborhoods each listen differently. The Sunset and the Richmond sit under the marine layer for much of the year, and that persistent damp is hard on hearing aids, so moisture-resistant devices and a drying routine matter out in the avenues. Downtown, the Financial District, SoMa, and Union Square throw crowded, reverberant rooms at you. The city's southern edge, the Excelsior, Ingleside, and Visitacion Valley, is closest to us, a short hop down the 280. Wherever in the city you live, we tune for the rooms you spend time in.",
    ],
    whyHere:
      "San Francisco patients come to us for testing that goes beyond an audiogram, honest technology recommendations, and [tinnitus care](/tinnitus/) that is hard to fit into a busy city practice. Many first drove down about stubborn ringing or for a second opinion, and stayed because they see the same audiologist every visit.",
    landmarks:
      "We are roughly 20-30 minutes from the Sunset, the Mission, downtown, and the city's southern neighborhoods, down the 101 or 280 to our San Mateo office.",
    faqs: [
      ["Why do my hearing aids act up in the Sunset and Richmond?", "Those neighborhoods sit under the fog belt. Moisture gets inside the device and the sound goes muffled or starts cutting out. A drying box overnight and a regular clean prevent most of it, and it is worth doing year-round out in the avenues rather than only in winter."],
      ["Is it worth driving down from the city instead of finding someone in San Francisco?", "It is 20-30 minutes down the 101 or 280, which is shorter than many cross-town trips. City residents make it for speech-in-noise testing, fittings verified with real-ear measurement, and [tinnitus care](/tinnitus/) including Lenire."],
      ["Do you test hearing for noisy restaurants and meetings?", "Yes. We do speech-in-noise testing and real-ear verification specifically so your hearing aids perform where San Franciscans struggle most: loud restaurants, open offices, and busy rooms. Call 650-342-9449 to book."],
    ],
  },
  "san-jose": {
    name: "San Jose",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 40 minutes south on the 101 or 280",
    distanceTier: "far",
    geo: { lat: 37.3382, lng: -121.8863 },
    lede:
      "San Jose is the Bay Area's largest city: a sprawl of distinct neighborhoods from Willow Glen to Almaden, downtown to Japantown, each with its own character. It has audiology options of its own, and our Peninsula offices sit about 40 minutes north, so the San Jose residents who travel to us are the ones seeking specialized care rather than the closest door.",
    hook: [
      "Specialized tinnitus and complex hearing care",
      "In a city this size, everyday hearing needs are well covered, so patients tend to come to us for the difficult cases: persistent [tinnitus](/tinnitus/) that has not responded to other approaches, fittings that never sounded right, or a rigorous second opinion. The practice is organized around that work, with deep diagnostics, real-ear-verified fittings, and tinnitus treatment including Lenire. That is what makes a longer drive north worth considering.",
    ],
    motif: "downtown",
    localScene: [
      "One city, many neighborhoods",
      "San Jose is really a collection of communities: the Rose Garden and Willow Glen, Almaden and Cambrian, Japantown and the downtown core near San Pedro Square and Santana Row. Across all of them, life is busy and loud, from arena events to crowded restaurants, and clear speech in noise is the shared challenge. For San Jose patients who make the trip, we focus on the harder problems: tinnitus, complex fittings, and verified clarity in demanding sound.",
    ],
    whyHere:
      "San Jose patients choose us over closer providers when the situation is specialized: intractable tinnitus, a device that failed to satisfy, or a thorough reassessment. We are upfront that for routine testing and maintenance, staying in the South Bay is often the practical choice.",
    landmarks:
      "We are about 40 minutes from downtown San Jose, Santana Row, Willow Glen, and the Rose Garden, north via the 101 or 280 to our San Carlos office.",
    faqs: [
      ["There are audiologists in San Jose. Why come to you?", "A local office is more convenient for testing and service, and we will say so. San Jose patients travel to us when tinnitus has not responded, when Lenire is being considered, or when a fitting never sounded right and nobody measured it."],
      ["My tinnitus hasn't improved with other treatments. Can you help?", "Often, yes. Tinnitus is a central focus of our practice, and we build the management around your situation, including options like Lenire, after a full evaluation."],
      ["How far is your office from San Jose?", "Roughly 40 minutes north on the 101 or 280 to San Carlos, depending on your neighborhood. Call 650-342-9449 and we will book a long enough visit to cover it."],
    ],
  },
  "san-leandro": {
    name: "San Leandro",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 30-35 minutes across the San Mateo Bridge",
    distanceTier: "far",
    geo: { lat: 37.7249, lng: -122.1561 },
    lede:
      "San Leandro sits just south of Oakland along the East Bay shoreline, a working, family-oriented city with a long industrial and manufacturing tradition. Its position near the foot of the San Mateo Bridge actually makes us a more reachable choice than for cities further north. Still, our offices are on the Peninsula, so San Leandro patients most often come our way for specialized care.",
    hook: [
      "A manufacturing city and occupational noise",
      "San Leandro has deep roots in manufacturing, warehousing, and the trades, and years of on-the-job noise exposure can contribute to hearing loss and tinnitus over a career. Ringing in the ears after a long shift, or trouble following speech in a loud shop, are common reasons people first look into their hearing. For baseline testing a local provider works well; for persistent tinnitus, Lenire, or a hearing aid fitting that never sat right, San Leandro patients do make the manageable drive to us.",
    ],
    motif: "downtown",
    localScene: [
      "From downtown to the shoreline",
      "San Leandro spreads from its downtown around East 14th Street and the historic Casa Peralta to the marina and shoreline trails, with the Bal Theatre and the neighborhoods of Broadmoor and Estudillo in between. It is a hard-working, unpretentious community where many careers have involved noisy environments. Those who come to us usually want a thorough look at hearing that noise may have affected, and a plan they can trust.",
    ],
    whyHere:
      "San Leandro patients come to us for a full evaluation after a working life around noise, for [tinnitus care](/tinnitus/) and Lenire, and for fittings measured in the ear rather than left on a default setting. The San Mateo Bridge keeps the trip short enough that follow-up visits stay practical.",
    landmarks:
      "From downtown San Leandro, the marina, or the Estudillo and Broadmoor neighborhoods, our San Mateo office is roughly 30-35 minutes over the San Mateo Bridge.",
    faqs: [
      ["Could my old job have affected my hearing?", "Long-term exposure to loud machinery, tools, or engines can contribute to hearing loss and tinnitus over time. A full evaluation shows what has changed and whether hearing aids or tinnitus therapy would help."],
      ["Why come to you rather than a closer clinic?", "Mostly there is no need to. San Leandro patients travel to us for tinnitus treatment, Lenire, and fittings that failed once already. The San Mateo Bridge keeps that trip short enough to repeat when treatment requires it."],
      ["How far is your office from San Leandro?", "Roughly 30-35 minutes to San Mateo via the bridge. Call 650-342-9449 to set up a visit that fits your schedule."],
    ],
  },
  "san-mateo-county": {
    name: "San Mateo County",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "both of our offices are in San Mateo County, one in San Mateo and one in San Carlos",
    distanceTier: "near",
    geo: { lat: 37.56, lng: -122.36 },
    lede:
      "San Mateo County is our home. Both of our offices sit right here on the Peninsula, one in San Mateo, one in San Carlos, about eight minutes apart, which means most of the county is a short, familiar drive from full-service audiology. From the foggy coast to the bayside cities to the wooded estate towns, we care for patients across every corner of the county.",
    hook: [
      "One county, many listening environments",
      "San Mateo County is remarkably varied, and so are its hearing needs. The coast and fog belt bring marine humidity that is hard on hearing aids; the airport and industrial north county carry occupational noise; the biotech and office corridors demand clear hearing in meetings and noisy rooms; and the quiet estate towns want discreet devices and appointments that are not rushed. We match testing, technology, and follow-up to where you actually live, work, and listen.",
    ],
    motif: "civic",
    localScene: [
      "Serving the whole Peninsula, from two central offices",
      "Our two offices put us within easy reach of the county's core: San Mateo, Burlingame, Hillsborough, San Carlos, Belmont, Foster City, and Redwood City, while patients also come to us from the north county cities of Daly City, South San Francisco, and San Bruno, the coastside communities of Pacifica and Half Moon Bay over Highway 92, and the southern estate towns of Atherton, Woodside, and Portola Valley. Wherever you are in San Mateo County, one of our offices is a straightforward drive.",
    ],
    whyHere:
      "Across the county, patients choose us for real diagnostic depth, honest technology recommendations, and [tinnitus care](/tinnitus/) including Lenire, with the same audiologist at every visit. Two offices eight minutes apart share one set of records, so you can use whichever is easier that week.",
    landmarks:
      "Our San Mateo office is at 88 N. San Mateo Drive and our San Carlos office is at 1008 Laurel Street, about eight minutes apart and central to the county from the coast to the bay.",
    faqs: [
      ["Which of your two offices should I visit?", "Whichever is more convenient, San Mateo or San Carlos, about eight minutes apart. Both offer full-service testing, fittings, tinnitus care, and repairs. Call 650-342-9449 and we will help you choose."],
      ["Do you serve the whole of San Mateo County?", "Yes. Patients come to us from the coast, the north county, the bayside cities, and the southern estate towns. Both offices sit centrally on the Peninsula, so most of the county is a short drive."],
      ["What makes an independent county practice worth it?", "You get full diagnostic [hearing testing](/hearing-testing/), technology chosen for your needs rather than a limited lineup, verified fittings, and specialized tinnitus care, all with continuity of care from one audiologist who knows your history."],
    ],
  },
  "san-mateo": {
    name: "San Mateo",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "here in town, just off N. San Mateo Drive near downtown",
    distanceTier: "office",
    geo: { lat: 37.563, lng: -122.3255 },
    lede:
      "San Mateo is home. Our main office sits at 88 N. San Mateo Drive, a few blocks from the downtown B Street shops and Central Park, so for most San Mateo residents a hearing appointment is a short drive or even a walk rather than a trek across the county.",
    hook: [
      "Being your neighborhood audiologist changes the care",
      "Because we are based in San Mateo, follow-up is easy: a quick hearing-aid cleaning, a fine-tuning after a noisy weekend, or a fresh set of domes rarely means rearranging your day. That proximity matters more than people expect, because hearing care is not one appointment. It is an ongoing relationship of small adjustments that add up to hearing well in real life.",
    ],
    motif: "civic",
    localScene: [
      "Rooted in the neighborhoods we serve",
      "From Baywood and San Mateo Park to Hayward Park, Bay Meadows, and the busy Hillsdale district, San Mateo is a city of distinct neighborhoods, and of distinct listening challenges, from quiet residential streets to the constant hum near the 92/101 interchange and Hillsdale Shopping Center. We know these settings because we live and work here, and we tune hearing aids for the places our patients actually spend their days, whether that's Central Park on a Saturday or a loud lunch spot downtown on B Street.",
    ],
    whyHere:
      "San Mateo patients come to us for the full range of care under one roof: diagnostic hearing evaluations, hearing aid fittings with real-ear verification, [tinnitus and Lenire treatment](/tinnitus/), earwax removal, and repairs. There is no large hospital system to navigate. Many were referred by a neighbor or family member who is already a patient.",
    landmarks:
      "We are easy to reach from Hillsdale, Baywood, Aragon, and the Bay Meadows and Hayward Park neighborhoods, with parking right at the office.",
    faqs: [
      ["Where exactly is your San Mateo office?", "Our San Mateo office is at 88 N. San Mateo Drive, 94401, near downtown and Central Park. Call 650-342-9449 for directions or parking details."],
      ["Do I need a referral to be seen in San Mateo?", "Most hearing evaluations and hearing aid consultations do not require a physician referral. If your insurance plan requires one, our team can walk you through it before your visit."],
    ],
  },
  "san-pablo": {
    name: "San Pablo",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes across the bay",
    distanceTier: "far",
    geo: { lat: 37.9621, lng: -122.3455 },
    motif: "downtown",
    lede:
      "San Pablo is a compact, densely settled city in West County, wrapped by Richmond and threaded by the busy San Pablo Avenue corridor. Our audiology offices are over on the Peninsula, roughly 50 minutes across the bay, so we're honest that we're a destination rather than a neighborhood option for San Pablo patients.",
    hook: [
      "Noisy days, and a fitting that has to survive them",
      "Everyday life in San Pablo runs through busy places, and hearing well in them depends on how a device was programmed rather than on what it cost. We run [speech-in-noise testing](/hearing-testing/) and verify each fitting with real-ear measurement, so the settings match your prescription rather than the manufacturer's default. That is the work San Pablo patients cross the bay for. A hearing test on its own does not need the trip.",
    ],
    localScene: [
      "A dense city along San Pablo Avenue",
      "San Pablo packs a lot into a small footprint: the San Pablo Avenue commercial spine, Davis Park, the creekside greenery of Wildcat Creek, and the shops around San Pablo Towne Center. It's a busy, urban setting full of everyday listening demands. We fit and verify hearing aids to hold up across those environments, and keep up the follow-up care that makes devices last and keep working.",
    ],
    whyHere:
      "San Pablo patients who come to us are here for a full evaluation, for honest advice about whether new devices would change anything, or for [tinnitus care](/tinnitus/) including Lenire.",
    landmarks:
      "We're roughly 50 minutes from San Pablo Avenue, Davis Park, and San Pablo Towne Center, crossing the bay to our San Mateo office.",
    faqs: [
      ["Do you treat tinnitus?", "Yes. We evaluate what is behind the ringing, rule out anything that needs medical attention, then set out options, which may include sound therapy or Lenire. Call 650-342-9449 to learn more."],
      ["Will hearing aids help in noisy, everyday settings?", "They can, when they are fit and verified properly. We use speech-in-noise testing and real-ear measurement so the settings match your prescription rather than a factory default."],
    ],
  },
  "san-rafael": {
    name: "San Rafael",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly an hour north over the Golden Gate",
    distanceTier: "far",
    geo: { lat: 37.9735, lng: -122.5311 },
    lede:
      "San Rafael is Marin's county seat and its oldest city, built around Mission San Rafael Arcángel and the walkable stretch of Fourth Street downtown. It is a genuine city with theaters, restaurants, and civic life, and our offices sit down on the Peninsula, roughly an hour north over the Golden Gate from us. We are honest about that drive: San Rafael patients come to us on purpose, usually for specialized care.",
    hook: [
      "One independent practice, every listening environment",
      "A day in San Rafael moves through very different sound: a quiet county office, a busy lunch spot on Fourth Street, a crowded event at the Marin Center. Hearing well across all of them takes more than an off-the-shelf device. We test how you hear speech in noise, verify each fitting with real-ear measurement, and tune for the rooms you actually spend time in, which is what an [individualized fitting](/hearing-aid-fitting/) means in practice.",
    ],
    motif: "downtown",
    localScene: [
      "A county seat with a real downtown",
      "San Rafael holds a lot in a small area: the Fourth Street corridor, the Mission and Gerstle Park, the Montecito and Dominican neighborhoods, the Frank Lloyd Wright civic center out toward the freeway, and the tidal marsh at China Camp. Patients here tend to value an independent audiologist who knows them by name over a rotating retail counter. Because the trip south is a real one, we bundle testing, fitting, and follow-up so a single drive over the bridge does the work of several.",
    ],
    whyHere:
      "San Rafael patients typically find us for [tinnitus care](/tinnitus/), Lenire, a fitting no one else has solved, or a second opinion they trust. They stay because the same audiologist handles every visit. For cleanings and basic checks, a Marin provider is more convenient and we will tell you so.",
    landmarks:
      "We are roughly an hour south of San Rafael's Fourth Street, the Marin Civic Center, and the Gerstle Park and Montecito neighborhoods, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why would I drive from San Rafael all the way to the Peninsula?", "Not for routine work. People come for tinnitus treatment, Lenire, or a fitting that has been difficult elsewhere. If you just need a clean-and-check, a closer Marin office will serve you better and we will tell you so."],
      ["Can you help if my hearing aids sound fine in quiet but not in restaurants?", "Yes. That is one of the most common reasons people see us. We test your speech understanding in background noise and use real-ear measurement to verify the settings, then fine-tune for the noisy rooms you actually spend time in."],
      ["How long is the drive from San Rafael?", "Plan on about an hour down Highway 101 and over the Golden Gate to our San Mateo office. Call 650-342-9449 and we will schedule enough time so one visit accomplishes as much as possible."],
    ],
  },
  "san-ramon": {
    name: "San Ramon",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes east",
    distanceTier: "far",
    geo: { lat: 37.7799, lng: -121.9780 },
    motif: "downtown",
    lede:
      "San Ramon is built around Bishop Ranch, the sprawling business park home to corporate headquarters and thousands of office workers, with the newer City Center giving the city a walkable downtown. It sits about 50 minutes east of our Peninsula offices, so we're honest that we're a bit of a haul, but professionals here do make the drive for focused care.",
    hook: [
      "Hearing at work in Bishop Ranch",
      "Days full of meetings, conference calls, and open-plan offices are demanding listening environments, and missing words there carries a real professional cost. This is where an off-the-shelf device tends to fall short. We focus on [speech-in-noise testing](/hearing-testing/) and real-ear verification so hearing aids hold up in the conference room and the crowded lunch spot, in discreet styles that suit a corporate setting.",
    ],
    localScene: [
      "A business hub with a new downtown",
      "San Ramon runs from the office towers and campuses of Bishop Ranch to the shops and plaza of City Center Bishop Ranch, the historic Forest Home Farms, and the greens of Central Park along the Iron Horse Trail. It's a working, professional city where a lot of hearing happens in busy offices and restaurants. We fit and verify for exactly those settings, so you stay sharp in the rooms where it counts.",
    ],
    whyHere:
      "San Ramon patients come to us for fittings tuned to conference rooms and open-plan offices, and for [tinnitus care](/tinnitus/) including Lenire.",
    landmarks:
      "We're about 50 minutes from Bishop Ranch, City Center, and Central Park, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Can hearing aids really help in open-plan offices and meetings?", "Yes, when they're fit for noise. We use speech-in-noise testing and real-ear measurement to program devices for demanding work settings, and choose directional features that help you follow conversation."],
      ["Why travel from San Ramon instead of going local?", "For a routine test, local is fine. Patients make the trip for tinnitus treatment, Lenire, and fittings measured against a prescriptive target after an earlier one fell short."],
      ["Are there discreet hearing aids suited to a professional setting?", "Yes. Low-profile and in-canal styles stay unobtrusive in meetings. How small you can go depends on your ear canal and on how much amplification your hearing needs."],
    ],
  },
  "santa-clara-county": {
    name: "Santa Clara County",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "south of our San Carlos office, across the South Bay",
    distanceTier: "far",
    geo: { lat: 37.35, lng: -121.95 },
    lede:
      "Santa Clara County is the heart of Silicon Valley: a broad expanse from Palo Alto and Mountain View through San Jose and out to Gilroy, holding tech campuses, foothill towns, and farm country all at once. Our two offices sit just north of the county line on the Peninsula, and patients travel here from across the South Bay for specialized hearing and tinnitus care.",
    hook: [
      "A practice patients travel across the county to reach",
      "The county is well supplied with everyday audiology, so the people who come to us from across it are usually after something narrower: [tinnitus](/tinnitus/) that has resisted other approaches, Lenire, or a fitting that finally performs in noise after an earlier one did not. That is the work the practice is organized around, with deep diagnostics and real-ear-verified fittings. For routine testing and maintenance, a provider in your own city is the practical choice and we will say so.",
    ],
    motif: "civic",
    localScene: [
      "From the Peninsula's edge to the southern valley",
      "Santa Clara County spans a remarkable range: the tech corridors of Palo Alto, Mountain View, and Cupertino; the affluent foothill towns of Los Altos Hills, Saratoga, and Los Gatos; the big-city neighborhoods of San Jose; and the farm country around Morgan Hill and Gilroy. Listening challenges shift across that map, from demanding open offices to noisy job sites to lively downtowns. Whichever corner you are in, we focus on the harder cases: tinnitus, complex fittings, and verified clarity in real-world noise.",
    ],
    whyHere:
      "Patients across Santa Clara County choose us for a tinnitus-focused practice, fittings measured in the ear against a prescriptive target, and one familiar audiologist over time. Many first traveled up the Peninsula for a problem no nearer office had solved.",
    landmarks:
      "We draw patients from Palo Alto and Mountain View in the north to San Jose, Los Gatos, Morgan Hill, and Gilroy in the south, all reached via the 101 and 280 to our San Carlos office.",
    faqs: [
      ["Do you serve the whole of Santa Clara County?", "Yes. Patients come to us from the Peninsula-adjacent cities, the South Bay, the foothill towns, and the southern valley, most often about tinnitus or about a fitting that has already fallen short."],
      ["It's a long way from parts of the county. Is it worth it?", "For routine hearing checks, a provider in your own area is more practical. People travel to us when tinnitus has not responded, when Lenire is worth considering, or when a fitting has already fallen short."],
      ["How do I reach your office from the South Bay?", "Our San Carlos office is north on the 101 or 280, from roughly 20 minutes in the northern county to about an hour from the far south. Call 650-342-9449 and we will book one long visit rather than several short ones."],
    ],
  },
  "santa-clara": {
    name: "Santa Clara",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 35 minutes south",
    distanceTier: "far",
    geo: { lat: 37.3541, lng: -121.9552 },
    lede:
      "Santa Clara wraps history and spectacle together, the old Mission and university at its heart, Levi's Stadium and Great America out toward the bay. It sits well down in the South Bay from our Peninsula offices, roughly 35 minutes away, yet patients here travel to us when they need care beyond the routine.",
    hook: [
      "What Santa Clara patients actually drive up for",
      "Santa Clara is well served for everyday needs, so the patients who come to us are usually looking for something particular: relief from persistent [tinnitus](/tinnitus/), a fitting that finally works after an earlier one failed, or a second opinion they trust. That is the work the practice is built around, with thorough diagnostics, real-ear-verified fittings, and Lenire for suitable candidates.",
    ],
    motif: "civic",
    localScene: [
      "A city of landmarks, from the Mission to the stadium",
      "Santa Clara stretches from Mission Santa Clara and the university campus through the civic core near the Caltrain station out to Levi's Stadium, Great America, and the convention center. Between game days, big events, and busy neighborhoods like Old Quad and Rivermark, it is a lively, noisy place to live. Stadium noise is worth taking seriously on its own: a full house is loud enough to justify plugs, and ringing that lasts past the next morning is a reason to book a test.",
    ],
    whyHere:
      "Patients choose us over closer options when the problem is specialized: intractable tinnitus, a device that never sounded right, or a careful reassessment they could not get elsewhere. We are candid that everyday maintenance may be easier handled nearby.",
    landmarks:
      "We are about 35 minutes from Santa Clara University, the Mission, and the Levi's Stadium area, north up the 101 or 280 to our San Carlos office.",
    faqs: [
      ["What makes the drive from Santa Clara worthwhile?", "Our practice concentrates on tinnitus and complex hearing care, with thorough testing and verified fittings. When a problem has resisted easier fixes, that focus is usually what makes the trip up the Peninsula worth it."],
      ["Do you offer Lenire for tinnitus?", "Yes, for suitable candidates, alongside sound therapy and the hearing management that often does most of the work. Which combination fits you comes out of the evaluation, not out of a brochure."],
      ["How far is your office from Santa Clara?", "About 35 minutes north via the 101 or 280 to San Carlos. Call 650-342-9449 to arrange a visit built around one efficient trip."],
    ],
  },
  "santa-rosa": {
    name: "Santa Rosa",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 90 minutes north",
    distanceTier: "far",
    geo: { lat: 38.4404, lng: -122.7141 },
    lede:
      "Santa Rosa is the largest city in the North Bay and the hub of Sonoma County, with the brick blocks of Railroad Square and Luther Burbank's old home and gardens at its center. It is a good ninety minutes north of our offices in San Mateo and San Carlos.",
    hook: [
      "A city with its own audiologists",
      "Santa Rosa is big enough to have real hearing care of its own, which changes the honest answer to the question of whether to drive. For testing, hearing aid service, wax removal and repairs, use it. What sends a Santa Rosa patient south is narrower: tinnitus that has held on through everything tried locally, Lenire, or hearing aids that satisfied nobody and were never checked against a prescriptive target.",
    ],
    motif: "wine",
    localScene: [
      "From the Sonoma County seat to the bay",
      "The city runs from Railroad Square and Old Courthouse Square out through Rincon Valley and Bennett Valley toward the Russian River vineyards. It has the listening problems a mid-sized city has: busy restaurants, a lot of driving, and a large retired population who first notice hearing loss when a grandchild speaks quietly across a table. Speech-in-noise testing shows that pattern in a way a standard audiogram does not.",
    ],
    whyHere:
      "At ninety minutes we plan around the drive rather than pretending it is nothing. One long first visit, a fitting verified with real-ear measurement before you leave, follow-up by phone where it will do, and the same audiologist each time you come back.",
    landmarks:
      "Patients head south to our Peninsula offices from Railroad Square, Rincon Valley, and Bennett Valley, generally about ninety minutes down Highway 101.",
    faqs: [
      ["Ninety minutes is a long way. Why travel to you from Santa Rosa?", "Usually it isn't worth it, and we will say so on the phone. Santa Rosa has capable audiologists. What patients drive down for is [tinnitus care](/tinnitus/) and Lenire, or a second opinion on hearing aids nobody verified."],
      ["Do you offer Lenire for tinnitus?", "Yes. It is one of several approaches and not the first thing we reach for. Sometimes treating an underlying hearing loss changes the tinnitus enough on its own, and we would rather find that out first."],
    ],
  },
  "saratoga": {
    name: "Saratoga",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 40 minutes south",
    distanceTier: "far",
    geo: { lat: 37.2638, lng: -122.0230 },
    lede:
      "Saratoga sits where the valley meets the hills: a storybook village along Big Basin Way, wineries and gardens up in the foothills, and a reputation for the finer, quieter things. Our offices are a good 40 minutes north on the Peninsula, but Saratoga residents accustomed to seeking out the best will make the trip for care to match.",
    hook: [
      "Concerts at the Mountain Winery, and the other side of hearing care",
      "Saratoga has an unusual amount of live music for a town its size. Loud shows are one of the few noise exposures people choose, and they are worth protecting against: musicians' earplugs cut the level fairly evenly across frequencies rather than muffling everything, so the music still sounds like music. We take impressions and have them made to your ears. For anyone who already has ringing after a concert that does not settle by morning, that is a reason to get tested.",
    ],
    motif: "wine",
    localScene: [
      "A foothill village of gardens and wineries",
      "Saratoga's character lives along Big Basin Way in the village, up at the Mountain Winery and Hakone Gardens, around Villa Montalvo's arts grounds, and through the wooded neighborhoods climbing toward the hills. Concerts, tastings, and long dinners are the settings residents care about hearing well in, and they are all difficult ones.",
    ],
    whyHere:
      "Saratoga residents come to us for fittings verified with real-ear measurement, honest technology guidance, and [tinnitus care](/tinnitus/) including Lenire. Many first traveled up for a problem no one nearer had resolved.",
    landmarks:
      "We are about 40 minutes from Saratoga Village, the Mountain Winery, and Hakone Gardens, north via the 280 to our San Carlos office.",
    faqs: [
      ["Why come all the way to the Peninsula from Saratoga?", "For routine maintenance a local office is simpler. Patients travel to us when tinnitus has not eased, when Lenire is worth discussing, or when a fitting has already disappointed once and nobody measured it in the ear."],
      ["Do you make custom earplugs for concerts?", "Yes. Musicians' plugs use a filter that lowers the level fairly evenly instead of muffling the highs, so music keeps its shape. We take ear impressions and have them made to fit you."],
      ["How far is your office from Saratoga?", "About 40 minutes north on the 280 to San Carlos. Call 650-342-9449 and we can arrange a longer, thorough visit to make the drive count."],
    ],
  },
  "sausalito": {
    name: "Sausalito",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes north over the Golden Gate",
    distanceTier: "far",
    geo: { lat: 37.8591, lng: -122.4853 },
    lede:
      "Sausalito rises straight out of the water at the north foot of the Golden Gate, its hillside houses and famous houseboat community looking across Richardson Bay to the San Francisco skyline. It is the first town you reach coming over the bridge, which also means the trip runs the other way for us. Our offices are down on the Peninsula, about 50 minutes south, so Sausalito patients typically make the drive by choice.",
    hook: [
      "Living on the water, and what it means for hearing aids",
      "Between the houseboats at Waldo Point, the marinas along Bridgeway, and the salt air off Richardson Bay, a lot of Sausalito life happens right on the water, and marine moisture is hard on hearing aids, showing up as muffled sound, cut-outs, or corroded contacts. It is manageable with moisture-resistant devices, a nightly drying routine, and regular professional cleaning. When something does fail, we handle repairs so a waterfront lifestyle never leaves you without your hearing.",
    ],
    motif: "bayside",
    localScene: [
      "A town built on the bay",
      "Sausalito strings along the shoreline from the downtown waterfront and Bridgeway's galleries to the old Marinship yards, the Caledonia Street shops, the houseboat docks at Waldo Point, and Fort Baker tucked beneath the bridge. Damp bay air is a constant, and it takes a toll on hearing technology. For patients from Sausalito we lean into moisture-smart devices and durable fittings that stand up to life by the water, and we set up drying habits that keep them working reliably between visits.",
    ],
    whyHere:
      "Sausalito patients tend to seek us out for persistent [tinnitus](/tinnitus/) and Lenire therapy, for moisture-related repairs, or for a fitting that needs measuring rather than guessing. They see the same audiologist each visit. For routine checks, a closer Marin office is the easier choice.",
    landmarks:
      "We are about 50 minutes south of Sausalito's Bridgeway waterfront, the Waldo Point houseboats, and the Caledonia Street district, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["I live on a houseboat. Will the damp air ruin my hearing aids?", "Not if you dry them. Moisture gets inside the device and the sound goes muffled or starts cutting out, and living on the water simply makes it faster. A drying box every night is the single habit that matters most."],
      ["Is it worth driving from Sausalito to the Peninsula for care?", "For tinnitus or Lenire, for a fitting that has already failed once, or for moisture repairs, most patients feel it pays off. For a simple check or cleaning, a nearer Marin provider makes more sense and we would rather be honest than have you drive for something routine."],
      ["What should I do first if a hearing aid stops working?", "Change the wax guard and leave it in a drying box overnight. That fixes a surprising share of apparent failures. If it is still dead, call 650-342-9449 and bring it in rather than buying a replacement."],
    ],
  },
  "sebastopol": {
    name: "Sebastopol",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 90 minutes north",
    distanceTier: "far",
    geo: { lat: 38.4021, lng: -122.8239 },
    lede:
      "Sebastopol grew up around apples long before grapes, and the Gravenstein orchards, the arts scene, and the sculpture along the Laguna still give it a character of its own in west Sonoma County. Our offices are about ninety minutes south, on the Peninsula.",
    hook: [
      "Orchard work and shop noise",
      "Orchard and packing work involves tractors, sprayers, forklifts and shop tools, often for decades. That kind of exposure contributes to hearing loss quietly, and the first sign is usually ringing rather than volume. A baseline test settles the question. Sebastopol is ninety minutes from us and there is no reason to drive that for a baseline.",
    ],
    motif: "wine",
    localScene: [
      "Apple country to the bay",
      "The town runs from a walkable downtown and the Barlow district out through apple country to the wetlands of the Laguna de Santa Rosa. It is small, and the damp that hangs over the Laguna most mornings is the same damp that gets inside hearing aids. Moisture is still the most common reason a device goes muffled or cuts out, and a nightly drying routine prevents most of it.",
    ],
    whyHere:
      "The Sebastopol patients we see came for [tinnitus care](/tinnitus/) or Lenire. We schedule one long visit rather than several short ones and keep the follow-up on the phone wherever it works.",
    landmarks:
      "Patients travel south to our Peninsula offices from downtown Sebastopol, the Barlow, and the Laguna de Santa Rosa area, roughly ninety minutes by way of Highway 101.",
    faqs: [
      ["Is the drive from Sebastopol really worth it?", "Not for everyday care. For tinnitus that has not responded, for Lenire, or for a hearing aid fitting that failed elsewhere, most patients who make the drive think so. Call 650-342-9449 and we will give you an honest read first."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. Tinnitus care here starts with working out what is behind the ringing. Lenire is one of the options that follows, for the patients it suits."],
    ],
  },
  "solano-county": {
    name: "Solano County",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "northeast of the bay",
    distanceTier: "far",
    geo: { lat: 38.25, lng: -122.0 },
    lede:
      "Solano County stretches from the waterfront cities of the Carquinez Strait out to the farmland bordering Sacramento: Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista. Our offices are on the San Mateo Peninsula, an hour or more southwest of all of them.",
    hook: [
      "Two kinds of hearing risk in one county",
      "Solano splits neatly. Along the water at Vallejo, Benicia, Suisun City and Rio Vista, the constant is damp air, and moisture is still the leading cause of hearing aids going muffled or cutting out. Inland at Fairfield, Vacaville and Dixon, the constant is machine noise: flight lines, plant floors, farm equipment. Those two problems have different answers, and neither of them requires driving to the Peninsula. Get the baseline test locally.",
    ],
    motif: "civic",
    localScene: [
      "From the strait to the Delta",
      "The county holds the naval history of Vallejo and Mare Island, the 1850s state capitol at Benicia, the county seat at Fairfield beside Travis Air Force Base, Suisun City on its marsh, and the farm and Delta towns of Dixon and Rio Vista. It covers a lot of ground, and drive times to the Peninsula run from about seventy minutes at the strait to an hour and a half out toward Dixon.",
    ],
    whyHere:
      "The Solano patients who make that trip came for [tinnitus care](/tinnitus/) or Lenire, or for a second opinion on hearing aids nobody had verified. We build those as single long visits, measure the output in your ear at the fitting, and keep the follow-up on the phone where it will work.",
    landmarks:
      "Patients reach our Peninsula offices from across Solano County, Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista, generally an hour or more to the southwest via I-80 and the bridges.",
    faqs: [
      ["Solano is a long way from the Peninsula. Why come to you?", "Most Solano patients shouldn't. Every city in the county has closer options and we will point you at them. Tinnitus, Lenire, and a fitting that has already failed once are the exceptions. Call 650-342-9449 and describe the problem first."],
      ["Which Solano cities do you see patients from?", "From all of them: Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista. Each has its own drive to the Peninsula, generally an hour or more."],
      ["Do you offer Lenire and tinnitus care?", "Yes. Tinnitus care including Lenire is the main thing Solano patients travel to us for. Call 650-342-9449 and we will book an evaluation before anything else is discussed."],
    ],
  },
  "sonoma-county": {
    name: "Sonoma County",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "up in the North Bay wine country",
    distanceTier: "far",
    geo: { lat: 38.4, lng: -122.7 },
    lede:
      "Sonoma County spreads from the coast through the Russian River valley to the vineyards around Santa Rosa, Sonoma, and Healdsburg. Our offices are on the Peninsula, in San Mateo and San Carlos, well over an hour south of most of it.",
    hook: [
      "Where a specialist earns the drive, and where they do not",
      "Sonoma County is well supplied with audiologists, and for a hearing test, wax removal, a repair or a routine adjustment you should use one of them. The distance only buys you something when the problem is one a general clinic does not see often: tinnitus that has not responded to treatment, Lenire, or hearing aids that were fitted without anyone measuring the output in your ear. That is the work our practice is organized around.",
    ],
    motif: "wine",
    localScene: [
      "One county, many communities",
      "The county is really a set of separate places. Santa Rosa and Petaluma are cities; Sonoma, Sebastopol, Healdsburg and Windsor are towns with their own centers; the Russian River and the coast are something else again. Agriculture and cellar work run through all of it, and so does the machine noise that comes with them. Along the coast and the river, damp air is the other constant, and moisture remains the most common reason a hearing aid stops working properly.",
    ],
    whyHere:
      "Patients who travel this far get one long appointment rather than three short ones, a fitting verified with real-ear measurement before they leave, and the same audiologist on every return. [Tinnitus care](/tinnitus/) including Lenire is what most of them came for.",
    landmarks:
      "Patients come south to our Peninsula offices from Santa Rosa, Petaluma, Sonoma, Sebastopol, and Windsor, generally well over an hour down Highway 101.",
    faqs: [
      ["You're far from Sonoma County. Why would I travel to you?", "Usually you shouldn't, and we will say so on the phone. The exceptions are tinnitus care, Lenire, and a second opinion on hearing aids that never worked. Call 650-342-9449 and describe the problem before you plan a drive around it."],
      ["Do you offer Lenire tinnitus treatment?", "Yes, for suitable candidates. It involves a course of appointments rather than one visit, which matters when you are driving in from the county. We will set out the schedule before you start."],
    ],
  },
  "sonoma": {
    name: "Sonoma",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 80 minutes north",
    distanceTier: "far",
    geo: { lat: 38.2919, lng: -122.4580 },
    lede:
      "Sonoma is where California winemaking began, and the old Mission and the broad central Plaza still anchor a town that trades happily on its history. It is about eighty minutes north of our two offices, in San Mateo and San Carlos.",
    hook: [
      "Tasting rooms are difficult rooms",
      "The Plaza and the valley around it are built on hospitality, and tasting rooms are among the hardest places to follow a conversation: stone floors, high ceilings, no soft surfaces, and everybody talking. People working in them all day, and people visiting them at seventy, run into the same problem from different directions. Hearing the words rather than just the sound is a speech-in-noise problem, and it is worth measuring directly.",
    ],
    motif: "wine",
    localScene: [
      "From the birthplace of California wine to the bay",
      "Life here orbits the Plaza, the Mission San Francisco Solano, and the vineyards fanning out toward Glen Ellen and Kenwood. Cellar and vineyard work brings its own machine noise, most of it seasonal and concentrated. If you have spent harvests on a crush pad, a baseline audiogram is worth having, and there is no reason it has to be ours.",
    ],
    whyHere:
      "For patients driving eighty minutes we schedule longer appointments up front and handle as much follow-up as we can by phone. [Tinnitus treatment](/tinnitus/), including Lenire for suitable candidates, is what most Sonoma patients came for.",
    landmarks:
      "Patients drive south to our Peninsula offices from the Sonoma Plaza, the Mission district, and the valley toward Glen Ellen, about eighty minutes by Highways 121 and 101.",
    faqs: [
      ["Why travel eighty minutes to you instead of staying local?", "Stay local for the ordinary things. Sonoma patients come to us about ringing that has not eased, about Lenire, and about hearing aids that were never measured in the ear."],
      ["Do you offer Lenire tinnitus therapy?", "Yes. We evaluate first and recommend after. Some patients do best with sound therapy, some with hearing aids alone, and some with Lenire."],
    ],
  },
  "south-san-francisco": {
    name: "South San Francisco",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "about 15 minutes north of our San Mateo office on the 101",
    distanceTier: "mid",
    geo: { lat: 37.6547, lng: -122.4077 },
    lede:
      "South San Francisco wears its identity on the hillside, in the giant \"The Industrial City\" letters on Sign Hill. Once a manufacturing town, it is now the birthplace of biotech, home to Genentech and a dense cluster of labs and offices out at Oyster Point, layered over its historic Grand Avenue downtown. Our San Mateo office is about fifteen minutes south on the 101.",
    hook: [
      "Hearing clearly across very different workdays",
      "South San Francisco packs a lot of listening environments into one city: busy labs and open-plan offices, industrial floors, warehouses, and the everyday hum of a working downtown. Following speech in those settings is demanding, and it is where hearing loss shows up first. You hear the voice but cannot quite make out the words over the background. We use speech-in-noise testing and real-ear verified fittings so conversation stays clear in the exact settings you spend your days in.",
    ],
    motif: "downtown",
    localScene: [
      "From Grand Avenue to Oyster Point",
      "South City runs from the shops and restaurants of historic Grand Avenue up under Sign Hill, through the neighborhoods off El Camino, and out to the biotech campuses and marina at Oyster Point, with Orange Memorial Park at its heart. It is a city of scientists, tradespeople, and lifelong families, each with their own listening demands. For all of them we offer thorough testing, honest technology, and the personal attention of an independent practice, a short drive south on the 101.",
    ],
    whyHere:
      "South San Francisco patients choose us over a big-box counter for real diagnostic depth, unbiased technology recommendations, and specialized tinnitus care, with the same audiologist at every visit. We tune hearing aids to your actual work and life, and stand behind the fitting.",
    landmarks:
      "We are about fifteen minutes from South San Francisco's Grand Avenue, Sign Hill, and the Oyster Point biotech campuses, straight down the 101 to our San Mateo office.",
    faqs: [
      ["I hear fine one-on-one but struggle in meetings and noise. Why?", "That is a classic early sign of hearing loss. The ability to separate speech from background noise fades before the ability to hear it. We test specifically for speech-in-noise and fit technology that helps in exactly those settings."],
      ["Why choose an independent audiologist over a big-box store?", "You get full diagnostic testing, technology chosen for your needs rather than a limited lineup, verified fittings, and continuity of care with one audiologist who knows your history."],
      ["How far is your office from South San Francisco?", "Our San Mateo office is about fifteen minutes south on the 101. Call 650-342-9449 to book an appointment."],
    ],
  },
  "st-helena": {
    name: "St. Helena",
    county: "Napa County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 90 minutes north in the Napa Valley",
    distanceTier: "far",
    geo: { lat: 38.5052, lng: -122.4703 },
    lede:
      "St. Helena sits upvalley in the heart of Napa, a small town of tree-lined Main Street storefronts surrounded by some of the most celebrated vineyards in the country. It is roughly ninety minutes north of our offices in San Mateo and San Carlos.",
    hook: [
      "Ninety minutes is a lot to ask",
      "So we ask it rarely. Hearing tests, wax removal, repairs and routine hearing aid adjustments are all available closer than we are, and none of them get better for being done further away. The upvalley patients who come to us came for tinnitus that has not eased, for Lenire, or because a set of hearing aids never sounded right and nobody had measured what was actually reaching their eardrum.",
    ],
    motif: "wine",
    localScene: [
      "Upvalley Napa to the bay",
      "Main Street runs a few walkable blocks, with the stone cellars and wineries strung along Highway 29 north and south of town. Cellar and vineyard work carries real machine noise, and hearing loss from it is gradual enough that most people notice the ringing before they notice the loss. A baseline test is worth having on file wherever you get it.",
    ],
    whyHere:
      "For patients this far out we schedule a single long visit rather than a string of short ones, verify the fitting with real-ear measurement while you are in the chair, and keep the follow-up on the phone where it can be.",
    landmarks:
      "Patients travel south to our Peninsula offices from St. Helena's Main Street and the Highway 29 wineries, generally about ninety minutes down through the valley and Highway 101.",
    faqs: [
      ["Why drive ninety minutes when there are closer providers?", "For most hearing care you shouldn't. Stay upvalley. Tinnitus, Lenire, and a fitting that has failed once already are the three reasons St. Helena patients give us. Call 650-342-9449 before you set off."],
      ["Do you offer Lenire tinnitus treatment?", "Yes, for patients it suits. The first appointment is an evaluation: hearing test, history, and a check for anything that needs medical attention before treatment is discussed."],
    ],
  },
  "suisun-city": {
    name: "Suisun City",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 85 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.2382, lng: -122.0405 },
    lede:
      "Suisun City wraps around a tidal channel at the edge of the vast Suisun Marsh, with a revived waterfront district and a working harbor at its heart. Our offices sit on the Peninsula, roughly 85 minutes southwest.",
    hook: [
      "Living on the edge of a marsh",
      "The Suisun Marsh is one of the largest brackish wetlands on the West Coast, and the air over it is damp most of the year. That matters more for hearing aids than people expect. Moisture inside a device causes muffled sound and dropouts, and it is the leading reason hearing aids come in for repair. Moisture-resistant models and a nightly drying routine prevent most of it, and any local audiologist can set that up.",
    ],
    motif: "bayside",
    localScene: [
      "Life along the marsh and the waterfront",
      "Old Town runs along the promenade with the marina and harbor beside it and the marsh opening out beyond. It is a small waterfront town, quiet enough that ringing in the ears is noticeable in the evening, which is when most people first decide to do something about tinnitus.",
    ],
    whyHere:
      "Suisun City patients who make the trip came for [tinnitus care](/tinnitus/), Lenire, or a fitting that has failed elsewhere. We fold everything into one long appointment and keep the eighty-five-minute drive from becoming a routine.",
    landmarks:
      "Patients reach our Peninsula offices from Suisun City's Old Town waterfront, the marina, and the neighborhoods bordering the Suisun Marsh, generally around 85 minutes southwest.",
    faqs: [
      ["Why would I drive to the Peninsula from Suisun City?", "For most hearing care, you shouldn't. Tinnitus treatment, Lenire, and a second opinion on unverified hearing aids are what patients come this far for. Call 650-342-9449 and we will be honest about which you need."],
      ["Can you make one visit count when I'm coming from a distance?", "Yes. We consolidate testing, treatment, and counseling into a single efficient visit and build a follow-up plan that limits how often you need to travel down. Call 650-342-9449 to arrange it."],
    ],
  },
  "sunnyvale": {
    name: "Sunnyvale",
    county: "Santa Clara County",
    region: "south-bay",
    nearestOffice: "San Carlos",
    approxDrive: "about 30 minutes south on the 101",
    distanceTier: "far",
    geo: { lat: 37.3688, lng: -122.0363 },
    lede:
      "Sunnyvale pairs a historic Murphy Avenue downtown with a deep bench of technology employers, from long-established chipmakers to newer campuses. Our practice is up on the Peninsula rather than in Sunnyvale, and the drive north on the 101 runs about 30 minutes.",
    hook: [
      "Following speech where the day gets loud",
      "Whether the workday means an open-plan office, a factory or lab floor, or a crowded lunch on Murphy Avenue, Sunnyvale patients tend to struggle most with speech in background noise rather than quiet at home. Some also carry years of occupational sound exposure, which can contribute to hearing changes over time. We test how you hear in noise and verify fittings with real-ear measurement, aiming squarely at the environments where clarity is hardest to hold.",
    ],
    motif: "downtown",
    localScene: [
      "From Murphy Avenue to the tech campuses",
      "Downtown Sunnyvale centers on the walkable stretch of historic Murphy Avenue and the Caltrain station beside it, ringed by neighborhoods like the Heritage District and Ponderosa and the sprawling office parks toward Moffett. It is a city that lives between busy restaurants and busier workplaces. Those two settings share one demand, which is clear speech in noise, so for Sunnyvale patients who come our way we prioritize speech-in-noise testing and real-ear verification over a one-size fitting.",
    ],
    whyHere:
      "Sunnyvale patients who travel to us are usually after something specific: verified fittings that finally work in noise, help with stubborn [tinnitus](/tinnitus/), or an honest second opinion after a device disappointed.",
    landmarks:
      "We are about 30 minutes from Murphy Avenue, the Sunnyvale Caltrain station, and the Moffett-area office parks by way of the 101 to our San Carlos office.",
    faqs: [
      ["Why would I drive up to the Peninsula instead of staying local?", "Staying local makes sense for testing and service. People come to us from Sunnyvale when the ringing is the problem, when Lenire is worth discussing, or when a fitting never held up in a noisy room."],
      ["I work around noise. Could that affect my hearing?", "Long-term occupational noise exposure can contribute to hearing changes and sometimes tinnitus. A baseline evaluation shows where you stand and what protection or treatment makes sense."],
      ["How long is the drive from Sunnyvale?", "About 30 minutes north on the 101 to our San Carlos office. Call 650-342-9449 and we will schedule a thorough visit so one trip covers a lot."],
    ],
  },
  "tiburon": {
    name: "Tiburon",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly an hour north",
    distanceTier: "far",
    geo: { lat: 37.8735, lng: -122.4566 },
    lede:
      "Tiburon occupies a slender peninsula reaching into the bay, with some of the finest water views in Marin: across to Angel Island, Belvedere, and the San Francisco skyline beyond. Its downtown gathers along Main Street and the historic Ark Row near the ferry landing. We are candid that our offices are on the far side of the bay, about an hour south, so Tiburon patients generally travel to us for a specific reason rather than convenience.",
    hook: [
      "Salt air, bay views, and hearing that keeps up",
      "Life in Tiburon plays out along the water, on ferry rides, at waterfront tables, and on the walk out to Blackie's Pasture, and two things follow from that. The damp bay air is hard on hearing aids, so moisture-resistant devices and a drying routine matter. And the settings you care about, from a breezy deck to a lively restaurant, are demanding ones. We verify each fitting and tune it for the environments you actually live in, then keep it maintained against the salt air.",
    ],
    motif: "bayside",
    localScene: [
      "A peninsula town with the water on three sides",
      "Tiburon's landmarks trace its shoreline: the Main Street and Ark Row shops by the ferry, the path out to Blackie's Pasture and Richardson Bay, the hilltop chapel at Old St. Hilary's, and neighboring Belvedere's island lanes. Bay breezes and marine moisture are part of daily life here, and both influence how hearing technology holds up. For patients from Tiburon we favor durable, moisture-smart fittings, careful verification, and technology matched honestly to a life spent near the water.",
    ],
    whyHere:
      "Patients from Tiburon usually come to us for [tinnitus care](/tinnitus/) and Lenire, for moisture-related repairs, or for a second opinion on a fitting nobody verified. Many first arrived about ringing.",
    landmarks:
      "We are about an hour south of Tiburon's Main Street and Ark Row, Blackie's Pasture, and neighboring Belvedere, down Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why travel from Tiburon when there are closer options?", "For everyday care, convenience is a fair reason to stay local. People make the drive to us for tinnitus and Lenire treatment, and for fittings that were never measured against a prescription."],
      ["Does living by the bay affect my hearing aids?", "Yes. Moisture gets inside the device and the sound goes muffled or starts cutting out. One easy thing to change: do not store them in a bathroom overnight, which is the dampest room in most houses. A drying box on a bedside table is better."],
      ["How long is the drive from Tiburon to your office?", "Roughly an hour down Highway 101 and across the Golden Gate to San Mateo. Call 650-342-9449 and we will set aside time so one visit accomplishes as much as possible."],
    ],
  },
  "union-city": {
    name: "Union City",
    county: "Alameda County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 30 minutes across the Dumbarton or San Mateo Bridge",
    distanceTier: "far",
    geo: { lat: 37.5934, lng: -122.0438 },
    lede:
      "Union City sits in the southern East Bay, a diverse commuter community where BART and two bridges tie it to the rest of the region. Its transit links make the Peninsula reasonably reachable, though our offices are in San Mateo and San Carlos across the water, so Union City patients most often seek us out for specialized hearing care.",
    hook: [
      "Two bridges, and why that changes what is practical",
      "Union City is built around getting places: the Intermodal BART station, the Nimitz, and both the Dumbarton and San Mateo bridges within reach. Our offices are about half an hour away, which matters most for [tinnitus care](/tinnitus/). Lenire runs as a course of appointments over weeks, and half an hour makes that a manageable errand. Everyday testing is still easier close to home.",
    ],
    motif: "transit",
    localScene: [
      "Neighborhoods linked by transit",
      "Union City brings together the older Alvarado district, the neighborhoods around the BART station, Old Alvarado's historic core, and the trails and parks near the Alameda Creek corridor. It is a community of commuters and families spread across the southern East Bay, many of whom already travel daily for work. For them, crossing a bridge for a specialized audiology appointment is a familiar, manageable errand rather than an ordeal.",
    ],
    whyHere:
      "Union City patients come to us for in-depth tinnitus and Lenire treatment, and for fittings verified with real-ear measurement after a first attempt disappointed. Easy bridge access and the same audiologist at every visit are what make the follow-up work.",
    landmarks:
      "From the BART station, Old Alvarado, or the Alameda Creek trails, our San Mateo office is roughly 30 minutes over the Dumbarton or San Mateo Bridge.",
    faqs: [
      ["Which bridge is fastest from Union City?", "Either the Dumbarton or the San Mateo Bridge works, and both put us around 30 minutes away depending on traffic. We can suggest the better route for your appointment time."],
      ["Do you see patients from the southern East Bay regularly?", "Yes, regularly. We schedule around the commute and often group testing and follow-up together. Call 650-342-9449 to arrange a visit."],
    ],
  },
  "vacaville": {
    name: "Vacaville",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 90 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.3566, lng: -121.9877 },
    lede:
      "Vacaville sits in the rolling country between the Bay Area and Sacramento, a growing city known for its outlet shopping, its biotech corridor, and the surrounding Vaca Valley farmland. Our offices are on the San Mateo Peninsula, around 90 minutes southwest.",
    hook: [
      "Plant floors and a long, quiet buildup",
      "A lot of Vacaville careers have been spent on manufacturing and plant floors, where the noise is constant rather than sudden and the damage accumulates without a moment you can point to. People usually notice the ringing before they notice the loss. A full evaluation tells you which you have, how much, and whether protection or treatment is the next step. It is a test worth doing near home.",
    ],
    motif: "civic",
    localScene: [
      "Between the valley towns and the hills",
      "The city runs from its historic downtown along the creek out to the Nut Tree area, the outlet centers off I-80, and the biotech and manufacturing plants that anchor much of the local economy. Between the freeway, the plants and the farmland, the quiet parts of town are very quiet, and that contrast is what makes tinnitus hard to live with here.",
    ],
    whyHere:
      "Vacaville patients who come to us came for [tinnitus care](/tinnitus/), for Lenire, or for a fitting that had already failed once. We consolidate testing, treatment and counseling into a single visit and map out follow-up so a repeat drive is uncommon.",
    landmarks:
      "Patients travel to our Peninsula offices from Vacaville's downtown, the Nut Tree area, and the surrounding Vaca Valley, generally around 90 minutes southwest along I-80.",
    faqs: [
      ["That's a real drive from Vacaville. Is it worth it?", "Not for a hearing test, no, and we will say so on the phone. Vacaville patients drive down when the ringing has not settled, when Lenire is on the table, or when hearing aids were never checked against a prescription. Call 650-342-9449."],
      ["Can years of factory or plant noise cause hearing loss?", "Sustained occupational noise exposure can contribute to hearing loss over time. A full diagnostic evaluation shows whether noise is a factor and what will help most. Call 650-342-9449 to book."],
    ],
  },
  "vallejo": {
    name: "Vallejo",
    county: "Solano County",
    region: "solano",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 70 minutes northeast",
    distanceTier: "far",
    geo: { lat: 38.1041, lng: -122.2566 },
    lede:
      "Vallejo sits on the northern edge of San Pablo Bay, a working waterfront city with deep naval history and its own ferry link to San Francisco. Our offices are on the Peninsula in San Mateo and San Carlos, about 70 minutes southwest.",
    hook: [
      "Mare Island, and a generation of shipyard hearing",
      "Mare Island ran as a naval shipyard for well over a century, and the trades that filled it were loud ones: riveting, grinding, engine rooms, machine shops. Careers spent in that contribute to hearing loss and to tinnitus, and the loss is usually well advanced before anyone books a test. If you worked the yard, get the audiogram. It is a single appointment and there are places to do it in Vallejo.",
    ],
    motif: "bayside",
    localScene: [
      "A waterfront city with a naval past",
      "The city grew around the water, from the ferry terminal on the Mare Island Strait to the old shipyard across the channel, the marina, and the historic downtown along Georgia Street. Damp bay air is a constant here, which is the other thing that shortens the life of a hearing aid, and a nightly drying routine handles most of it.",
    ],
    whyHere:
      "Vallejo patients who make the trip came for [tinnitus care](/tinnitus/) and Lenire, or for a second look at hearing aids that never sounded right. We batch testing and treatment into a small number of long appointments so the drive around the bay is rarely something you repeat.",
    landmarks:
      "Patients travel to our Peninsula offices from Vallejo's waterfront, Mare Island, and the Georgia Street downtown, generally around 70 minutes southwest via the 80 and the bridges.",
    faqs: [
      ["I worked at the shipyard for years. Could that have affected my hearing?", "Very likely. Shipyard trades are among the loudest work there is, and the damage builds without a moment you can point to. A full diagnostic evaluation shows whether noise is part of the picture. Call 650-342-9449 to arrange one."],
      ["Can you make one long trip count for more?", "Yes. For patients driving from a distance we put testing, fitting and counseling into a small number of long appointments rather than a string of short ones, and handle what we can by phone in between."],
    ],
  },
  "walnut-creek": {
    name: "Walnut Creek",
    county: "Contra Costa County",
    region: "east-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 50 minutes east",
    distanceTier: "far",
    geo: { lat: 37.9101, lng: -122.0652 },
    motif: "downtown",
    lede:
      "Walnut Creek is the East Bay's upscale shopping and arts hub, where Broadway Plaza's boutiques and the Lesher Center for the Arts draw visitors from across the county, all under the ridgeline of Mount Diablo. It's a solid 50 minutes east of our Peninsula offices, so we won't pretend to be the closest audiologist, but Walnut Creek residents do make the drive for specialized care.",
    hook: [
      "Hearing well from Broadway Plaza to the Lesher Center",
      "So much of Walnut Creek life happens in demanding listening spaces: a lively lunch at a Broadway Plaza restaurant, a performance at the Lesher Center, a meeting downtown. Following conversation there is exactly where basic amplification falls short. We focus on [speech-in-noise testing](/hearing-testing/) and real-ear verification, so the settings match your prescription rather than the manufacturer's default, and we fit discreet devices that keep up with a full social calendar.",
    ],
    localScene: [
      "Downtown polish and a big retirement community",
      "Walnut Creek runs from the Broadway Plaza shops and Locust Street restaurants to the Iron Horse Trail and the trailheads up Mount Diablo, with the large Rossmoor community just to the south. It is a city with an active older population that wants to stay in the middle of things: theater, dining, walking groups. Getting hearing aids fit and verified for the noise those settings actually carry is what keeps people fully in the conversation.",
    ],
    whyHere:
      "Walnut Creek patients usually reach us by word of mouth, from someone whose tinnitus we helped or whose hearing aids finally sounded right after a proper [real-ear verification](/hearing-aid-fitting/). Everyday visits are easier handled locally. What brings people across the bridges is tinnitus care, Lenire, and fittings that have already gone wrong once.",
    landmarks:
      "We're about 50 minutes from Broadway Plaza, the Lesher Center, and the Rossmoor area, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Why would I travel from Walnut Creek when there are audiologists nearby?", "For routine testing, staying local makes sense. People make the trip to us for tinnitus treatment, Lenire, and fittings measured in the ear against a prescriptive target after an earlier attempt fell short."],
      ["Will hearing aids work in a busy Broadway Plaza restaurant?", "They can, when they are programmed and verified for noise. We use real-ear measurement and speech-in-noise testing so devices perform where you actually struggle."],
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes, several discreet and in-canal styles. Which one suits depends on your ear anatomy and how much amplification your hearing needs, both of which we assess at the evaluation."],
    ],
  },
  "windsor": {
    name: "Windsor",
    county: "Sonoma County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 100 minutes north",
    distanceTier: "far",
    geo: { lat: 38.5471, lng: -122.8164 },
    lede:
      "Windsor is one of the newer towns in northern Sonoma County, built around a walkable Town Green that hosts markets and summer concerts and gives the community a real center. It is close to a hundred minutes north of our Peninsula offices.",
    hook: [
      "The Town Green, and hearing in a crowd",
      "Outdoor concerts and a summer market are pleasant places to discover that your hearing has changed. Sound spreads, there is no wall to bounce speech back, and people who manage fine indoors find themselves nodding along. That is a normal early pattern and it does not mean hearing aids tomorrow. It means a test, which you can get in Windsor.",
    ],
    motif: "wine",
    localScene: [
      "North county to the Peninsula",
      "The Town Green sits at the center, with neighborhoods spreading toward the Russian River and the vineyards of the Chalk Hill corridor. This is the far end of the county, near the top of our service area, and a hundred minutes each way is a real day out.",
    ],
    whyHere:
      "Windsor patients who make that drive come for [tinnitus care](/tinnitus/), Lenire, or a second opinion on hearing aids that never worked. We run those as single long visits and keep return trips as rare as the treatment allows.",
    landmarks:
      "Patients head south to our Peninsula offices from the Windsor Town Green and the surrounding Russian River neighborhoods, roughly a hundred minutes down Highway 101.",
    faqs: [
      ["Do you provide Lenire tinnitus treatment?", "Yes, for suitable candidates. Lenire runs as a course of appointments rather than a one-off, which is worth planning for at a hundred minutes each way. Call 650-342-9449 and we will explain the schedule before you commit."],
      ["Can you handle testing and fitting in one trip?", "Where possible, yes. We combine the [evaluation](/hearing-testing/) and the [fitting](/hearing-aid-fitting/) and build follow-up so you drive down as seldom as the treatment allows."],
    ],
  },
  "woodside": {
    name: "Woodside",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 15 minutes from our San Carlos office",
    distanceTier: "near",
    geo: { lat: 37.4297, lng: -122.2536 },
    lede:
      "Woodside is a rural, wooded town of horse properties and estates spread along the base of the Santa Cruz Mountains, where redwoods, riding trails, and winding country roads set the pace. Residents are used to a short drive for their errands, and hearing care is no exception. Our San Carlos office is about fifteen minutes down the hill.",
    hook: [
      "Horses, wind, and quiet roads",
      "A lot of Woodside listening happens outdoors, on trails and around animals, where the sound you need is soft and the sound in the way is wind. Wind across a hearing aid microphone can drown out speech completely. Current devices manage it far better than older ones did, but only if the wind program is enabled and set at the fitting. Indoors, the harder problem is a dinner table with a hard floor, which is a different setting again.",
    ],
    motif: "estate",
    localScene: [
      "A country town among the redwoods",
      "Woodside gathers around its small Town Center and Roberts Market, then spreads along Cañada Road past Filoli, up toward Kings Mountain and Skyline, and into the trails of Huddart and Wunderlich Parks. It is equestrian, tree-shaded, and deliberately rural, with no commercial strip. Our San Carlos office is fifteen minutes down the hill.",
    ],
    whyHere:
      "Woodside patients come to us for careful testing, discreet technology chosen on its merits rather than a supplier's target, and [tinnitus care](/tinnitus/) including Lenire, with one audiologist who knows them across every visit.",
    landmarks:
      "We are about fifteen minutes from Woodside's Town Center, Cañada Road, and the trails at Huddart and Wunderlich Parks, an easy drive to our San Carlos office.",
    faqs: [
      ["Do you fit discreet or invisible hearing aids?", "Yes, several invisible and near-invisible styles, including deep-canal options. We check canal size and ear health first, because a deep fit is not right for every ear."],
      ["How many visits does a hearing aid fitting usually take?", "Plan on the fitting itself plus two follow-ups over the first few weeks. The first appointment sets the devices to your prescription and verifies that with real-ear measurement; the follow-ups adjust for what you noticed at home."],
      ["How far is your office from Woodside?", "Our San Carlos office is about fifteen minutes from Woodside. Call 650-342-9449 to arrange a visit."],
    ],
  },
  "yountville": {
    name: "Yountville",
    county: "Napa County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 80 minutes north in the Napa Valley",
    distanceTier: "far",
    geo: { lat: 38.4016, lng: -122.3608 },
    lede:
      "Yountville is a small Napa Valley town with an outsized reputation for food, home to The French Laundry and a walkable Washington Street packed with celebrated kitchens. Our offices are down in San Mateo and San Carlos, about eighty minutes south.",
    hook: [
      "Restaurant rooms, restaurant kitchens",
      "A town this size supports an unusual number of professional kitchens, and kitchens are loud: extraction hoods, dish pits, ticket printers, and everyone calling over the top of it. Line cooks and servers spend a full shift in that. So do the guests, at a lower level, in dining rooms built with hard surfaces. Both are the conditions where early hearing loss shows itself first, as a sense that you hear the voice but cannot pick out the words.",
    ],
    motif: "wine",
    localScene: [
      "A small valley town to the Peninsula",
      "Washington Street's restaurants and tasting rooms make up most of the town, with the Veterans Home grounds at one end and the vineyards running north toward Oakville. It is compact enough to walk. If you have worked hospitality here for twenty years and now find yourself asking for repeats at the pass, that is worth testing, and testing is available much closer than the Peninsula.",
    ],
    whyHere:
      "Yountville patients who make the drive are nearly always coming for [tinnitus care](/tinnitus/) or for a second opinion on hearing aids bought elsewhere. We book those as long appointments, verify every fitting with real-ear measurement, and do as much follow-up by phone as the situation allows.",
    landmarks:
      "Patients drive south to our Peninsula offices from Washington Street and the vineyards around Yountville, about eighty minutes down through the valley to Highway 101.",
    faqs: [
      ["Why travel from Yountville when closer options exist?", "For a routine test or ordinary hearing aids, don't. Go local. The reasons worth eighty minutes are tinnitus that has not responded to anything, Lenire, and hearing aids that were never verified against your prescription. Call 650-342-9449 and we will say which applies before you drive."],
      ["Do you offer Lenire tinnitus therapy?", "Yes, and it is one option among several. The evaluation decides. If a hearing loss is feeding the tinnitus, treating that comes first."],
    ],
  },
};

export const cityProfileSlugs = Object.keys(cityProfiles);
