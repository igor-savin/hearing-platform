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

  // Set when this city no longer has its own page. Search Console showed the
  // 52 cities carrying this field earned six clicks between them in ninety days,
  // and forty-two of them had never been clicked at all. Their writing is good
  // and stays — it renders as a section of the county hub named here (or of
  // /areas-we-serve/ when the value is null, which is only the Bay Area entry).
  // The page URL 301s to that hub. Keeping the prose is the point: the pages
  // failed for want of demand, not for want of quality.
  // True only for cities with their own Caltrain station, which makes the
  // journey to either office station-to-station on one line. Both offices are a
  // short walk from theirs. Not set for BART-served cities: BART reaches neither
  // office without a Caltrain transfer at Millbrae, so offering it as a route
  // would mislead rather than help.
  onCaltrain?: boolean;

  consolidatedInto?: string | null;

  // Optional hand-written title tag and meta description for the main city page
  // (not the city x service pages). Use only when the templated ones underperform.
  metaTitle?: string;
  metaDescription?: string;
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
      "Alameda County spans the heart of the East Bay — from Oakland and Berkeley on the shoreline to Hayward and Fremont in the south and the Tri-Valley cities of Pleasanton and Livermore inland. It is a large, varied region, and it sits across the water from us. Our offices are on the Peninsula in San Mateo and San Carlos, so we serve East Bay patients who choose to travel for specialized care.",
    hook: [
      "A regional practice for East Bay patients who want specialization",
      "Across Alameda County there are capable audiologists for routine testing and hearing aid service close to home, and for everyday needs that is usually the right call. What brings East Bay patients over the bridges to us is focus: in-depth [tinnitus care](/tinnitus/) and Lenire treatment, real-ear-verified fittings, and second opinions on devices that never worked as promised. We are honest about the distance and reserve the trip for the specialized problems where it genuinely pays off.",
    ],
    motif: "civic",
    localScene: [
      "One county, many communities, one bridge away",
      "The county runs from the ports and neighborhoods of Oakland and the university culture of Berkeley, through the island of Alameda and the shoreline cities of San Leandro and Hayward, down to Union City and Fremont, and inland to the Tri-Valley vineyards of Pleasanton and Livermore. Access to the Peninsula varies — Hayward is a quick 25-30 minutes over the San Mateo Bridge, while Livermore is closer to an hour. Wherever in the county a patient starts, the reason to come to us is the same: specialized, focused hearing care.",
    ],
    whyHere:
      "East Bay patients choose California Hearing Center for depth rather than proximity — a genuine specialty in tinnitus and Lenire, meticulous diagnostic testing, and honest, verified fittings. They value continuity with one dedicated audiologist and are willing to cross the bay for expertise that is harder to find at a general clinic. Our page for [Fremont](/areas-we-serve/fremont/) gives the drive time to our San Carlos office.",
    landmarks:
      "From Oakland and Berkeley in the north to Hayward, Fremont, and the Tri-Valley inland, our San Mateo and San Carlos offices are reached east across the bay, with drive times ranging from about 25-30 minutes to an hour.",
    faqs: [
      ["I live in the East Bay — is it worth coming to the Peninsula?", "For routine hearing care, a local Alameda County audiologist is often the practical choice. Patients cross the bay to us for specialized tinnitus treatment, Lenire, and complex fittings where our focus makes a real difference."],
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
      "Alameda is an island city — a quiet grid of Victorian and Craftsman homes ringed by water, connected to Oakland by bridge and tube. Its calm, small-town feel is part of the appeal. We will be candid that our offices are across the bay on the Peninsula, so Alamedans who come to us are usually looking for specialized tinnitus or complex hearing care rather than the nearest audiology desk.",
    hook: [
      "Island calm, salt air, and steady hearing care",
      "Alameda's charm is its stillness — tree-lined streets, the beach at Crown Memorial, the old Victorians of the Gold Coast. That same waterfront setting means damp, salt-tinged air, which is hard on hearing aids over time and worth planning around with moisture-smart devices and regular servicing. For that everyday upkeep a closer provider works well; for stubborn ringing or a fitting that never felt right, some islanders choose the deeper focus we offer in [tinnitus care](/tinnitus/).",
    ],
    motif: "bayside",
    localScene: [
      "A walkable island of neighborhoods",
      "Alameda invites walking — the shops and theater along Park Street, the antique stores and cafes on Webster, the Victorian Gold Coast, and the shoreline out at Crown Memorial State Beach. It is a community where neighbors talk on porches and follow conversation over coffee, and where clear hearing keeps that easygoing social life intact. Patients from the island who make their way to us tend to do so for a specific reason rather than convenience.",
    ],
    whyHere:
      "Alameda patients pick California Hearing Center for concentrated expertise — thorough diagnostic testing, honest device recommendations, and a real specialty in tinnitus and Lenire treatment. The continuity of one dedicated audiologist, visit after visit, is a large part of why they are willing to cross the bay.",
    landmarks:
      "From Park Street, Webster Street, the Gold Coast, or Crown Beach, our San Mateo office is roughly 40 minutes over the San Mateo Bridge.",
    faqs: [
      ["Is the drive from Alameda really worth it?", "For basic testing and maintenance, a nearer audiologist is sensible. Islanders travel to us mainly for specialized tinnitus care, Lenire, and difficult fittings — the situations where a focused practice earns the trip."],
      ["Does Alameda's waterfront air affect hearing aids?", "Damp, salty coastal air can let moisture build inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices, nightly drying, and regular cleaning prevent most trouble, and we help patients set up a routine that lasts."],
      ["How far are you from the island?", "Roughly 40 minutes to San Mateo across the San Mateo Bridge, traffic depending. Call 650-342-9449 and we will schedule East Bay visits to minimize repeat trips."],
    ],
    consolidatedInto: "alameda-county",
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
      "Albany is a small, tight-knit city tucked between Berkeley and El Cerrito — barely a couple of square miles, with a friendly Solano Avenue main street and a strong neighborhood feel. It is worth saying plainly that our offices are on the Peninsula, well across the bay, so for routine hearing care a closer audiologist is often the practical pick. Albany residents who come to us usually want a specialist's focus.",
    hook: [
      "A small-town main street where conversation matters",
      "Life in Albany tends to happen at conversational range — Solano Avenue shops, school events, the community feel that draws families here. That is exactly where hearing loss first shows up, as missed words in a busy cafe or across a crowded room. For a first evaluation or ongoing device care, staying local is reasonable; patients tend to travel to us specifically for [tinnitus](/tinnitus/) and Lenire treatment or a careful second opinion on a fitting that has not worked out.",
    ],
    motif: "downtown",
    localScene: [
      "Compact, walkable, and close-knit",
      "For such a small city, Albany packs in a lot — the shops and restaurants along Solano Avenue, the weekend crowds at the Albany Bulb and shoreline, Memorial Park, and the view up to Albany Hill. Neighbors know each other, and much of daily life runs on easy face-to-face conversation. When Albany residents seek us out, it is generally for the specialized care that is harder to find nearby, not for a routine appointment they could book down the street.",
    ],
    whyHere:
      "Albany patients choose California Hearing Center for its concentration on the difficult cases — persistent tinnitus, Lenire therapy, and fittings that other clinics could not get right. They value straightforward advice and the continuity of one audiologist who knows their history, which makes the longer drive feel worthwhile.",
    landmarks:
      "From Solano Avenue, Memorial Park, or the Albany waterfront, our San Mateo office is roughly 45 minutes across the bay.",
    faqs: [
      ["Why drive from Albany when Berkeley clinics are minutes away?", "For everyday hearing testing and maintenance, a nearby clinic is perfectly reasonable. People come to us across the bay for specialized tinnitus treatment, Lenire, and complex second opinions where our narrower focus is an advantage."],
      ["Can you help if my hearing aids never sounded right?", "Often, yes. Poor fit or unverified programming is a common reason devices disappoint, and we use real-ear measurement to check that what your ears receive matches your prescription."],
      ["How far is your practice from Albany?", "About 45 minutes to San Mateo depending on bridge traffic. We plan East Bay visits to accomplish more per trip so the distance is less of a burden."],
    ],
    consolidatedInto: "alameda-county",
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
      "Antioch grew up along the San Joaquin River, its historic Rivertown waterfront looking out over the Delta at the far northeast corner of the county. That's a long way from the Peninsula — our offices are about 70 minutes southwest of here, in San Mateo and San Carlos — so we're candid that we're a specialist's trip, not the corner audiologist.",
    hook: [
      "Rivertown roots, and where specialized care lives",
      "Out at the edge of the Delta, the options for specialized hearing care thin out. A routine hearing test you can find close to home, but complex [tinnitus care](/tinnitus/), Lenire treatment, and difficult hearing-aid fittings are another matter — those tend to require a longer trip anywhere in far East County. Antioch patients who need that depth of care are already used to traveling for it, and we make the drive worthwhile by making each visit thorough.",
    ],
    localScene: [
      "River town at the county's edge",
      "Antioch stretches from the old brick storefronts of Rivertown along the San Joaquin River out past Contra Loma Regional Park, the trails of Black Diamond Mines, and the fields of the far East County. It's a spread-out, riverside city where getting to specialized services often means driving. For patients dealing with persistent tinnitus or hearing aids that never fit right, that longer trip to a focused practice is one many decide is worth making.",
    ],
    whyHere:
      "Antioch patients come to us for the things that are hard to find nearby — a meticulous diagnostic evaluation, honest device guidance, and dedicated tinnitus and Lenire care. For everyday needs we'll gladly say a closer provider may suit you; we're here for the complex cases.",
    landmarks:
      "We're about 70 minutes from Rivertown, Contra Loma Regional Park, and the Antioch riverfront, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["That's a long drive — why come to you from Antioch?", "Honestly, for a routine test it may not make sense. Patients make the trip for specialized tinnitus care, Lenire, second opinions, and fittings that need extra expertise. We plan visits so the drive accomplishes as much as possible."],
      ["Can you help with ringing in the ears (tinnitus)?", "Yes — our practice is tinnitus-focused, including the Lenire device for suitable candidates. We evaluate the cause and build a management plan around your specific case."],
      ["Can you bundle testing and fitting into fewer trips?", "We try to. For patients traveling from far East County, we often combine evaluation, fitting, and follow-up efficiently. Call 650-342-9449 and we'll plan around the distance."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Atherton is a quiet, tree-canopied residential town with no commercial downtown by design — which means residents travel a short distance for nearly every service, hearing care included. Our San Carlos office is a straightforward 12-to-15-minute drive, and many Atherton patients have been coming to us for years.",
    hook: [
      "Discreet technology and unhurried, private care",
      "Atherton patients often prioritize two things: hearing that keeps up with an active professional and social life, and technology that stays discreet. Modern invisible and receiver-in-canal hearing aids deliver both, and getting the most out of them depends on expert fitting and verification rather than the device alone. We take the time to program, verify, and fine-tune — and to keep it all private and unrushed.",
    ],
    motif: "estate",
    localScene: [
      "A residential town that travels for its care",
      "Atherton is almost entirely residential by design — estate lots and tree canopy across Lindenwood, West Atherton, and Lloyden Park, with Holbrook-Palmer Park at its center and no commercial strip to speak of. Residents are used to traveling a few minutes for services, and hearing care is no exception. Many are active professionals and community members who want technology that keeps up with a full calendar while staying completely discreet, and the unhurried privacy of an independent practice over a big-box counter.",
    ],
    whyHere:
      "Atherton residents choose us for meticulous testing, premium technology matched honestly to their needs, and specialized tinnitus care — with the continuity of seeing the same audiologist each time. Many first came for tinnitus or Lenire treatment and stayed for the whole of their hearing care.",
    landmarks:
      "We are a short drive from Atherton's Lindenwood, West Atherton, and Lloyden Park areas, and from the Menlo-Atherton corridor along El Camino Real and Marsh Road.",
    faqs: [
      ["Do you offer truly invisible hearing aids?", "We fit several invisible and near-invisible styles, including deep-canal options. The right choice depends on your ear anatomy and hearing needs, which we assess during your evaluation."],
      ["Can I see a tinnitus specialist near Atherton?", "Yes. Dr. Emily McMahan, AuD, focuses on tinnitus care, including Lenire, and sees patients from Atherton and throughout the mid-Peninsula when she visits our practice, every six to eight weeks. Her appointments fill quickly, so call early."],
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
      "The San Francisco Bay Area is nine counties and dozens of cities wrapped around the bay, and California Hearing Center draws patients from across all of it. Our two offices sit centrally on the Peninsula, in San Mateo and San Carlos — well placed for the whole region — and while most patients live nearby, some travel from as far as Napa for care they want done right.",
    hook: [
      "A premier practice patients travel to reach",
      "Most of our patients come from the Peninsula and the cities just north and south of us. But a fair number make longer drives — from the East Bay, the North Bay, wine country, and Solano — because they're after something specific: complex [tinnitus](/tinnitus/) care, Lenire treatment, a fitting that's been difficult elsewhere, or a thorough second opinion. For routine care we always encourage patients to consider someone close to home; where distance is worth it is specialized expertise, and we structure longer visits to make every trip count.",
    ],
    motif: "civic",
    localScene: [
      "Serving patients from across the region",
      "The Bay Area's hearing needs are as varied as its geography. Coastal and bayside communities from Half Moon Bay to the Sunset contend with marine humidity that's hard on hearing aids; office and tech hubs from San Francisco down through Silicon Valley bring demanding, noisy listening environments; and inland and wine-country areas send patients who've decided specialized care is worth a longer drive. Centrally located on the Peninsula, we see people from all of it — and we tailor each fitting to the environments a patient actually lives and works in.",
    ],
    whyHere:
      "Across the Bay Area, patients choose us for meticulous diagnostics, honest technology recommendations, and specialized tinnitus expertise, with the continuity of seeing the same audiologist every visit. It's why some are willing to drive well past a dozen closer options to reach us.",
    landmarks:
      "Our San Mateo and San Carlos offices sit centrally on the Peninsula, within reach of San Francisco, Silicon Valley, the East Bay, and the North Bay — patients travel to us from across the region, some from as far as Napa.",
    faqs: [
      ["Do patients really travel from across the Bay Area to see you?", "Yes. While most come from the Peninsula, patients travel from San Francisco, the South Bay, the East Bay, and the North Bay — some from as far as Napa — mainly for specialized tinnitus care and complex cases."],
      ["Should I travel to you or find someone closer?", "For routine hearing tests and standard hearing aids, a local provider is usually the practical choice. The drive to us tends to be worth it for specialized tinnitus treatment, Lenire, difficult fittings, or a careful second opinion."],
      ["Where are your offices located?", "We have two Peninsula offices — San Mateo at 88 N. San Mateo Drive and San Carlos at 1008 Laurel Street, about eight minutes apart. Call 650-342-9449 to find the one that's most convenient."],
    ],
    consolidatedInto: null,
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
      "Being this close changes how hearing care fits into your life. There is no all-day expedition for a clean-and-check, a reprogramming, or a fresh batch of domes and wax guards — Belmont patients tend to drop in, get what they need, and get on with the day. That proximity matters most for the small, ongoing things: fine-tuning a new fitting over a few short visits, or troubleshooting a device the same week something changes rather than living with it.",
    ],
    motif: "downtown",
    localScene: [
      "From the hills to El Camino",
      "Belmont spreads from the trails around Water Dog Lake and Twin Pines Park down to the shops and cafes along Ralston Avenue and El Camino Real, with Carlmont and Notre Dame de Namur University anchoring the community. Wherever you are in town — the quiet cul-de-sacs above Hallmark Drive or the bustle near the Caltrain station — we are a short, familiar drive away, straight up El Camino or a quick hop on the 101.",
    ],
    whyHere:
      "Belmont patients choose us for the combination of nearby convenience and genuine depth — thorough diagnostic testing, honest technology recommendations, and specialized tinnitus care from an audiologist they see every visit. The short drive means we can be part of your ongoing care, not just a one-time fitting.",
    landmarks:
      "We are minutes from Belmont's Ralston Avenue corridor, Twin Pines Park, and the Water Dog Lake neighborhoods, straight up El Camino Real or the 101 to our San Carlos office.",
    faqs: [
      ["Is there an audiologist close to Belmont?", "Yes — our San Carlos office is about five minutes from most of Belmont, just up El Camino Real. It is one of the closest full-service audiology practices to the city."],
      ["Can I come in quickly for a hearing aid cleaning or adjustment?", "Absolutely. Because Belmont is so close, many patients pop in for cleanings, adjustments, and supplies between longer appointments. Call 650-342-9449 and we will find a time."],
      ["Do you help with tinnitus, not just hearing aids?", "Yes. We offer dedicated [tinnitus care](/tinnitus/), including Lenire, alongside comprehensive hearing testing and fittings for patients throughout Belmont and the mid-Peninsula."],
    ],
    onCaltrain: true,
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
      "Benicia briefly served as California's state capital in the 1850s, and its waterfront downtown along the Carquinez Strait still carries that 19th-century character. It sits well to the northeast of us — our offices are on the Peninsula in San Mateo and San Carlos, about 70 minutes away — so for routine hearing care, a Benicia-area provider will usually be more convenient.",
    hook: [
      "Care that's worth the trip from Benicia",
      "For everyday hearing tests and standard hearing aids, we'll always suggest starting with someone close to home. The drive south becomes worthwhile for specialized care — hard-to-treat [tinnitus](/tinnitus/), Lenire therapy, a fitting that hasn't gone right elsewhere, or a second opinion you want handled carefully. Benicia patients who travel to us come for that expertise, and we organize their visit so one trip covers a full evaluation, treatment, and a follow-up plan.",
    ],
    motif: "bayside",
    localScene: [
      "A historic waterfront on the strait",
      "Benicia's charm runs along the water — First Street's shops and restaurants leading down to the marina, the Camel Barns and grounds of the old Benicia Arsenal, and the Capitol building from the city's brief turn as state capital. It's a maritime, strait-side town, and that marine air keeps humidity up, which is hard on hearing aids since moisture is the leading cause of device trouble. Waterfront patients benefit from moisture-resistant technology, and those with more complex needs sometimes choose to make the drive to the Peninsula for specialized care.",
    ],
    whyHere:
      "Benicia patients who come to us are typically after a level of tinnitus and diagnostic expertise they couldn't find nearby. We respect the distance by consolidating care into efficient visits and coordinating follow-up so the drive stays the exception, not the routine.",
    landmarks:
      "Patients travel to our Peninsula offices from Benicia's First Street, the marina, and the historic Arsenal district, generally around 70 minutes southwest across the bridges.",
    faqs: [
      ["Benicia isn't close to you — why make the drive?", "For routine care, a local provider usually makes better sense. Benicia patients come to us mainly for specialized tinnitus treatment, Lenire, and complex cases where the expertise justifies the trip. We plan visits to minimize repeat drives."],
      ["Does Benicia's waterfront climate affect hearing aids?", "The damp marine air along the strait lets moisture build up inside hearing aids, which can cause muffled or cutting-out sound. Moisture-resistant devices and a drying routine prevent most of it."],
      ["Do you provide Lenire and comprehensive tinnitus care?", "Yes. Tinnitus care, including Lenire, is one of the main reasons patients travel to us from around the Bay Area, Benicia included. Call 650-342-9449 to arrange an evaluation."],
    ],
    consolidatedInto: "solano-county",
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
      "Berkeley is a university town at heart, shaped by UC Berkeley and a culture that takes ideas — and second opinions — seriously. In fairness, our offices are on the Peninsula in San Mateo and San Carlos, a good drive across the bay, so we are not the closest option for a routine hearing check. Berkeley patients tend to seek us out for the specialized, research-minded side of hearing care.",
    hook: [
      "A questioning town that values a thorough answer",
      "Lectures, seminars, crowded cafes off Telegraph, and a lifelong habit of learning all put a premium on clear hearing and speech understanding. Berkeley residents often arrive already well-read on their own hearing, wanting evidence-based testing and honest technology recommendations rather than a sales pitch. For that kind of unhurried, thorough evaluation — or for persistent [tinnitus](/tinnitus/) that deserves a specialist's attention — some make the trip to us; for simpler needs, a nearer audiologist may serve just as well.",
    ],
    motif: "civic",
    localScene: [
      "From campus to the hills",
      "Berkeley runs from the flats up into the hills — the UC campus and Sproul Plaza, the shops along Shattuck in the Gourmet Ghetto, College Avenue in Elmwood, and the views from Tilden and the Berkeley Hills. It is a walking, talking, seminar-going city where following conversation matters, whether that is a graduate lecture or dinner with old friends. Patients who come to us from Berkeley usually want the same rigor they expect of everything else: careful measurement and a plan they understand.",
    ],
    whyHere:
      "Berkeley patients choose California Hearing Center for depth rather than proximity — comprehensive testing, real-ear verification, and a genuine focus on tinnitus and Lenire treatment. They value seeing the same audiologist over time and getting straight, well-explained recommendations, which is worth a longer drive to the people who make it.",
    landmarks:
      "From the UC campus, Shattuck Avenue, Elmwood, or the Berkeley Hills, our San Mateo office is roughly 45 minutes across the bay.",
    faqs: [
      ["Why would I drive from Berkeley when there are closer audiologists?", "For everyday hearing care, staying local is reasonable. People come across the bay to us for specialized tinnitus treatment, Lenire, and thorough second opinions on complex hearing or fitting problems, where a focused practice makes a real difference."],
      ["I follow lectures and meetings closely — can testing reflect that?", "Yes. We test speech understanding in background noise, not just tones in a quiet booth, so results reflect real listening. That helps us tune hearing aids for lecture halls, seminars, and busy rooms rather than ideal conditions."],
      ["How far is your office from Berkeley?", "Roughly 45 minutes to San Mateo depending on bridge traffic. We try to make each visit count for East Bay patients by grouping testing and follow-up efficiently."],
    ],
    consolidatedInto: "alameda-county",
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
      "Brentwood is still orchard-and-field country at the county's eastern edge, famous for its summer u-pick cherries and sweet corn even as new neighborhoods spread across former farmland. It's one of the longer drives to our Peninsula offices — roughly 75 minutes east — so we're clear that we're a specialist's destination for Brentwood patients, not the closest audiologist.",
    hook: [
      "Farm country, and the trip for specialized care",
      "Farm and equipment work carries its own steady noise exposure, which over the years can contribute to hearing changes worth checking. And because Brentwood sits so far east, patients who want specialized [tinnitus care](/tinnitus/), Lenire, or a meticulous hearing-aid fitting are already accustomed to traveling for it — the drive west to the Peninsula is simply a longer version of that same trip, made for care that's hard to find nearby.",
    ],
    localScene: [
      "Cherry orchards and a growing downtown",
      "Brentwood keeps its agricultural character along Walnut Boulevard's u-pick farms and the Marsh Creek corridor, even as City Park's farmers market and the Streets of Brentwood shopping district anchor a fast-growing town. It's a place where a lot of people have worked outdoors and around equipment. We take that seriously — thorough baseline testing, honest guidance, and follow-up care that respects the distance you've come.",
    ],
    whyHere:
      "Brentwood patients choose us for depth rather than convenience: careful diagnostics, technology matched honestly to real needs, and dedicated tinnitus and Lenire care. For a routine test we'll happily point you somewhere closer; the longer trip is for the specialized work.",
    landmarks:
      "We're about 75 minutes from downtown Brentwood, the u-pick farms along Walnut Boulevard, and the Streets of Brentwood, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["Is the drive from Brentwood really worth it?", "For everyday hearing needs, probably not — a closer provider makes sense. Patients travel to us for complex tinnitus care, Lenire, second opinions, and fittings that need extra expertise, and we plan visits to make the distance count."],
      ["I've worked around farm and shop equipment for years — should I be tested?", "It's worth doing. Prolonged equipment noise can contribute to gradual hearing loss and tinnitus. A baseline evaluation gives you a clear starting point."],
      ["Can you handle fitting and follow-up in fewer trips?", "Yes. For patients coming from far East County, we combine steps where we can. Call 650-342-9449 and we'll build a plan around the drive."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Brisbane is a small, tight-knit hillside town tucked against San Bruno Mountain at the north edge of the county, looking out over the bay and its own lagoon. Known for the string of holiday stars residents light on the mountainside each winter, it has a village feel — and our San Mateo office is a straightforward fifteen minutes south on the 101.",
    hook: [
      "Small-town living, big-city listening",
      "Brisbane residents live in a quiet pocket but rarely stay put — the city sits between San Francisco and the Peninsula, and daily life means the bustle of both. Modern hearing aids are built for exactly that range of settings, shifting automatically from a hushed home on the hill to a loud restaurant, a crowded event, or a windy walk along the marina. Getting that performance depends on a careful fitting verified with real-ear measurement, so speech stays clear wherever your day takes you.",
    ],
    motif: "bayside",
    localScene: [
      "Between the mountain and the bay",
      "Brisbane runs from the trails of San Bruno Mountain State Park down through the neighborhoods off Old County Road and Visitacion Avenue to the Brisbane Lagoon, the marina, and the newer development out at Sierra Point. It is compact and neighborly, the kind of place where people know their audiologist by name. For that community we offer thorough testing, honest technology, and dependable follow-up, an easy drive down the bayside 101 to San Mateo.",
    ],
    whyHere:
      "Brisbane patients choose us for the personal, independent care that suits a small town — real time with the same audiologist, straightforward advice, and specialized tinnitus expertise. We make the short trip down the 101 worthwhile with testing and fittings done thoroughly, the first time.",
    landmarks:
      "We are about fifteen minutes from Brisbane's Old County Road, the Brisbane Lagoon, and Sierra Point, straight down the 101 to our San Mateo office.",
    faqs: [
      ["Where is the nearest audiologist to Brisbane?", "Our San Mateo office is about fifteen minutes south of Brisbane on the 101, one of the closer full-service audiology practices to the north county."],
      ["Will my hearing aids handle both quiet and noisy places?", "Yes. Today's devices adapt automatically between settings, and we verify performance with real-ear measurement so speech stays clear from a quiet home to a loud restaurant."],
      ["Do you treat tinnitus as well as fit hearing aids?", "We do. Alongside comprehensive testing and fittings, we offer focused [tinnitus care](/tinnitus/), including Lenire, for patients across Brisbane and the north Peninsula."],
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
      "Burlingame sits just north of our San Mateo office, close enough that many patients are in and out on a lunch break. Known as the “City of Trees” for its eucalyptus-lined avenues, Burlingame runs right up to San Francisco International Airport — which is exactly why hearing matters here.",
    hook: [
      "Living under SFO's flight path and what it means for your hearing",
      "Much of Burlingame sits beneath SFO's arrival and departure corridors, and residents near the Bayfront or Broadway know the sound of jets overhead. Everyday overflight noise is usually more nuisance than hazard — but occupational exposure is different. If you work at or near the airport, in the Bayfront hotels, or around ground equipment, years on the job can quietly add up to noise-induced hearing loss. It is gradual and easy to miss until conversations start slipping, so a baseline hearing test — and custom protection where it makes sense — is simple prevention.",
    ],
    motif: "airport",
    localScene: [
      "From Burlingame Avenue to the Bayfront",
      "Burlingame packs a lot into a small city: the walkable Burlingame Avenue and Broadway shopping districts, the leafy Easton Addition, Washington Park, and the Bayfront hotel row that backs right up to SFO. That range matters for hearing care — a retiree strolling Burlingame Ave has very different listening needs than someone working the airport hotels or commuting the Bayshore. We fit and verify hearing aids for those specific environments, and we keep Mills-Peninsula-area patients close to home for follow-up.",
    ],
    whyHere:
      "Burlingame patients come to us because we are the closest independent audiology practice for many of them, and because they want more than a big-box hearing aid transaction. We provide diagnostic testing, real-ear-verified fittings, tinnitus care, and repairs, with the same audiologist each visit.",
    landmarks:
      "We are an easy drive from Burlingame Avenue, Broadway, the Mills-Peninsula area, and the Bayfront hotels, all within roughly 10 minutes of the office.",
    faqs: [
      ["Can airport and traffic noise really affect my hearing?", "Occupational noise can. Long-term exposure to loud sound — including work around aircraft, or heavy freeway noise — can contribute to permanent, gradual hearing loss. A baseline hearing test establishes where you stand and helps track any change over time."],
      ["Do you offer custom hearing protection for noisy environments?", "We do. Custom-molded hearing protection is popular with patients who work near the airport, ride motorcycles, or attend loud events. It protects hearing while keeping sound natural."],
      ["How far is your office from Burlingame?", "Our San Mateo office is about 10 minutes from most of Burlingame, just south on El Camino Real or the 101. Call 650-342-9449 to schedule."],
    ],
    onCaltrain: true,
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
      "Campbell has kept a small-town center that its fruit-drying past would still recognize — the water tower over a walkable downtown, a busy weekend farmers market, and the Los Gatos Creek Trail running through it. It is a good 40 minutes south of our Peninsula offices, but patients travel that distance for specialized hearing and tinnitus care.",
    hook: [
      "Clear conversation where Campbell gathers",
      "Downtown Campbell is built around being together — sidewalk tables, the farmers market, live music, and the trail. Those are precisely the settings where hearing loss shows up first, as speech slipping under background noise. The fix is rarely just a better device; it is a device fitted and verified for real, layered sound. That is the work we specialize in, and it is what makes the drive up from Campbell worthwhile for the patients who choose us.",
    ],
    motif: "downtown",
    localScene: [
      "A downtown made for being together",
      "The heart of Campbell runs along Campbell Avenue beneath the old water tower, out to the Pruneyard, along the Los Gatos Creek Trail, and through neighborhoods near the light-rail line. Between the market crowds, restaurant patios, and trailside chatter, it is a city where daily life is social and rarely silent. For Campbell patients who come to us, we concentrate on clarity in noise and carefully verified fittings — plus tinnitus care that can be hard to find nearby.",
    ],
    whyHere:
      "Campbell patients travel to us for what a routine visit cannot offer: focused [tinnitus care](/tinnitus/) including Lenire, verified fittings that hold up in noise, and unhurried second opinions. For basic maintenance, a South Bay provider is closer, and we will point that out honestly.",
    landmarks:
      "We are about 40 minutes from downtown Campbell, the Pruneyard, and the Los Gatos Creek Trail, north up the 280 to our San Carlos office.",
    faqs: [
      ["Is the drive from Campbell really worth it?", "For everyday upkeep, probably not — somewhere local will do. People come to us from Campbell for specialized care: complex tinnitus, difficult fittings, Lenire, or a rigorous reassessment where our expertise makes the difference."],
      ["Can you help with ringing in my ears, not just hearing loss?", "Yes. Tinnitus care is central to our practice, from evaluation through management options like Lenire, and it often goes hand in hand with a hearing assessment."],
      ["How far is your office from Campbell?", "About 40 minutes north via the 280 to San Carlos. Call 650-342-9449 and we will plan an efficient visit around the drive."],
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
      "Behind Colma's famous memorial grounds is a working community — florists, groundskeepers, monument makers, funeral and cemetery staff, retail workers, and the visiting families they serve every day. Good hearing is central to that work and to comforting others well: catching a quiet question, following a phone call, hearing clearly across a busy showroom or office. We help Colma's residents and workers keep hearing sharp with thorough testing and technology tuned to their daily surroundings.",
    ],
    motif: "civic",
    localScene: [
      "A community woven through Colma",
      "Colma is compact and distinctive — the tree-lined cemetery districts and Cypress Lawn, alongside the shops and dealerships of Colma's auto row and the retail off Serramonte Boulevard near the BART station. Its living community may be small, but it is close and hardworking. For residents and the many people who spend their days here, we provide careful, unhurried hearing care and dependable follow-up, a short drive south to our San Mateo office.",
    ],
    whyHere:
      "Colma patients choose us for genuine, personal attention — thorough evaluations, honest recommendations, and the same audiologist each visit — plus specialized tinnitus care that is hard to find nearby. We treat every appointment with patience and respect.",
    landmarks:
      "We are about fifteen minutes from Colma's cemetery districts, auto row, and the shops near Serramonte and the BART station, an easy drive south to our San Mateo office.",
    faqs: [
      ["Is there an audiologist near Colma?", "Yes — our San Mateo office is about fifteen minutes south of Colma. It offers full-service testing, fittings, and repairs for residents and the many people who work in town."],
      ["Can better hearing help me at work?", "Very much so. Clear hearing helps you follow phone calls, quiet conversations, and busy showrooms or offices. We tune technology to your specific work and listening environments."],
      ["Do you offer tinnitus treatment?", "Yes. We provide dedicated tinnitus care, including Lenire, alongside comprehensive hearing services. Call 650-342-9449 to learn more."],
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
      "Concord is Contra Costa County's largest city, anchored by the plane trees and summer concerts of Todos Santos Plaza. It sits well east of the Peninsula, though — our offices are in San Mateo and San Carlos, roughly an hour northeast by car — so we're upfront that we're not the closest choice for routine visits.",
    hook: [
      "From Todos Santos Plaza to a quiet listening booth",
      "Concord packs in a lot of different listening environments — the summer crowds and live music at Todos Santos Plaza, big shows at the Concord Pavilion, busy restaurants along Willow Pass Road, and quiet rooms at home. Hearing well across all of them takes more than an off-the-shelf device. [Speech-in-noise testing](/hearing-testing/) and careful real-ear verification tune your hearing aids for the noisy places, not just the silent exam room — the kind of fitting patients are willing to travel for.",
    ],
    localScene: [
      "A big city with many soundscapes",
      "Concord spreads from the fountains and farmers market at Todos Santos Plaza out to the shops of The Veranda, the amphitheater lawn at the Concord Pavilion, and the trails around the old Naval Weapons Station. Each is a different hearing challenge — a loud concert, a crowded patio, a chat across the kitchen table. We fit and verify hearing aids so they hold up in the demanding spaces, and we build in the follow-up that keeps them working over the years.",
    ],
    whyHere:
      "Concord patients generally have plenty of routine options nearby, so the ones who come to us are looking for something specific: meticulous diagnostics, honest technology recommendations, and focused [tinnitus care](/tinnitus/) including Lenire. We aim to make each longer visit thorough enough to be worth the drive.",
    landmarks:
      "We're roughly an hour northeast of Todos Santos Plaza, The Veranda, and the Concord Pavilion, reached by way of the East Bay bridges to our San Mateo office.",
    faqs: [
      ["Is it worth driving to the Peninsula from Concord?", "For a routine hearing test, a Concord-area provider may serve you just fine. Patients tend to make the trip to us for complex tinnitus care, Lenire, or a difficult fitting that hasn't gone well elsewhere — and we make those visits count."],
      ["Can hearing aids keep up with places like the Concord Pavilion or a noisy restaurant?", "Yes, when they're fit and verified properly. We use speech-in-noise testing and real-ear measurement to program hearing aids for real, loud settings rather than only the quiet booth."],
      ["Do you offer specialized tinnitus treatment?", "We do. Our practice is tinnitus-focused, including Lenire, and sees patients from across the East Bay. Call 650-342-9449 to ask whether it's a fit for you."],
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
      "Contra Costa County stretches from the bayfront cities of the west, across the central valleys around Walnut Creek and Concord, out to the Delta towns of far East County. It's a large, varied county that sits east and northeast of the bay from our Peninsula offices — an honest distance rather than a quick hop, and one patients cross for a reason.",
    hook: [
      "Why patients travel from across the county",
      "Contra Costa has no shortage of places to get a routine hearing test close to home, and for everyday needs that's often the sensible choice. What's harder to find is a practice built around complex [tinnitus care](/tinnitus/), Lenire treatment, difficult hearing-aid fittings, and unhurried second opinions. That's the reason people drive in from Walnut Creek, Concord, Danville, and the Delta cities — for the depth of specialized care rather than convenience, and we work to make the trip worthwhile.",
    ],
    localScene: [
      "One county, many communities",
      "Contra Costa is really several regions at once: the West County bayfront around Richmond and El Cerrito; the Lamorinda hills of Lafayette and Orinda; the central hub of Walnut Creek, Concord, and Pleasant Hill under Mount Diablo; the San Ramon Valley through Danville and San Ramon; and the far East County Delta towns of Antioch, Pittsburg, Brentwood, and Oakley. Patients come to us from all of them for the same reasons — thorough diagnostics, honest technology recommendations, and specialized tinnitus and Lenire care worth the drive across the bay.",
    ],
    whyHere:
      "Across Contra Costa, patients choose California Hearing Center for a level of specialization that's hard to match locally: a tinnitus-focused practice, meticulous [testing](/hearing-testing/) and real-ear verification, and the continuity of the same audiologist each visit. We're honest that routine care is fine to keep close to home, and we're the destination for the complex cases. Our pages for [Concord](/areas-we-serve/concord/) and [El Cerrito](/areas-we-serve/el-cerrito/) give the drive time to our San Mateo office.",
    landmarks:
      "From West County's bayfront to the San Ramon Valley and the East County Delta, we're a drive east and northeast of the bay, reached by the region's bridges to our San Mateo and San Carlos offices.",
    faqs: [
      ["Why would I travel from Contra Costa to the Peninsula for hearing care?", "For routine testing, a local provider often makes sense. Patients cross the bay to us for specialized tinnitus treatment, Lenire, difficult fittings, and second opinions — the depth of care that's harder to find nearby."],
      ["Which parts of Contra Costa do you serve?", "Patients come to us from across the county — West County, the Lamorinda hills, the central Walnut Creek and Concord area, the San Ramon Valley, and the East County Delta towns."],
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
      "Cupertino is best known as Apple's hometown, but it is also De Anza College, the Stevens Creek foothills, and quiet, well-kept neighborhoods. It lies deep in the South Bay from our Peninsula offices — around 35 minutes away — and residents make that drive when they want specialized care rather than the nearest option.",
    hook: [
      "Verified fittings for a life spent listening hard",
      "Many Cupertino patients live and work in demanding audio environments: long meetings, video calls, lectures at De Anza, and busy restaurants along Stevens Creek. The common thread is following speech when the room is not quiet, which depends far more on how a hearing aid is fitted than on which one you buy. We use speech-in-noise testing and real-ear verification to program devices for those exact settings, and that rigor is what draws patients from Cupertino our way.",
    ],
    motif: "downtown",
    localScene: [
      "From Main Street to the Stevens Creek foothills",
      "Cupertino gathers around Main Street Cupertino and Cupertino Village, the De Anza College campus, and neighborhoods like Rancho Rinconada and Monta Vista, with the Stevens Creek corridor climbing toward the hills. It is a studious, screen-and-conversation kind of city where clear speech matters all day. For the Cupertino patients who travel to us, we focus on speech-in-noise clarity and precisely verified fittings, plus specialized tinnitus help that is harder to find close to home.",
    ],
    whyHere:
      "Cupertino patients tend to be careful and evidence-minded, and they come to us for measured, verified fittings and focused [tinnitus care](/tinnitus/) rather than a fast transaction. For routine adjustments, we are honest that somewhere nearer may be more convenient.",
    landmarks:
      "We are about 35 minutes from Main Street Cupertino, De Anza College, and the Stevens Creek foothills, north via the 280 to our San Carlos office.",
    faqs: [
      ["I do fine in quiet but lose people in noise — can that be fixed?", "Often, yes. That pattern points to speech-in-noise difficulty, which we measure directly and then target with the right technology and real-ear-verified programming rather than a generic setting."],
      ["Why travel from Cupertino instead of going local?", "For simple upkeep, local is easier. Patients drive to us for specialized problems — persistent tinnitus, difficult fittings, Lenire, or a thorough reassessment — where our focus justifies the distance."],
      ["How far is your office from Cupertino?", "About 35 minutes north on the 280 to San Carlos. Call 650-342-9449 and we will schedule a full visit so the trip accomplishes plenty."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Daly City is the gateway to the Peninsula — a big, diverse city spilling across the hills where the Pacific meets the bay. It is famous for one thing above all: fog. The marine layer pours over Daly City more often than almost anywhere in the Bay Area, and that persistent damp has a real, specific effect on hearing devices. Our San Mateo office is about twenty minutes south.",
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
      "Daly City patients choose us for climate-smart fittings, thorough testing, and dependable repairs — care that accounts for the fog belt rather than ignoring it. They also come for specialized tinnitus treatment and the continuity of one audiologist who knows their history.",
    landmarks:
      "We are about eighteen to twenty minutes from Daly City's Westlake, Serramonte, and Skyline neighborhoods, heading south on the 280 or 101 to our San Mateo office.",
    faqs: [
      ["Why do my hearing aids act up in Daly City's damp weather?", "Persistent fog and humidity let moisture build up inside the devices, causing muffled or intermittent sound. Moisture-resistant models, nightly drying, and regular cleaning prevent most problems, and we help you set up a routine that works."],
      ["Do you repair hearing aids damaged by moisture?", "Yes. Moisture-related issues are among the most common repairs we handle, and many can be resolved the same day with professional cleaning and drying."],
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
      "Danville keeps a small-town feel in the San Ramon Valley — the tree-lined blocks of Hartz Avenue, the estates out toward Blackhawk, Mount Diablo rising behind it all. It's about 50 minutes east of our Peninsula offices, so we're upfront that we're not the nearest audiologist, though Danville residents do travel to us for specialized care.",
    hook: [
      "Discreet technology, unhurried care",
      "Danville patients often want two things at once: hearing that keeps up with an active professional and social life, and technology that stays genuinely discreet. Modern in-canal and receiver-in-canal hearing aids deliver both, but getting the most from them depends on expert fitting and verification far more than the device alone. We take the time to program, measure, and fine-tune — privately and without the rush of a retail counter.",
    ],
    localScene: [
      "From Hartz Avenue to Blackhawk",
      "Danville's character shows in the boutiques and cafes along Hartz Avenue, the playwright's retreat at Eugene O'Neill's Tao House, the upscale shops of Blackhawk Plaza, and the Iron Horse Trail threading through it under Mount Diablo. Residents here tend to value results and privacy over gadgetry. We match that with careful, verified fittings and technology chosen honestly for the way you actually live and listen.",
    ],
    whyHere:
      "Danville patients choose us for meticulous testing, premium technology matched honestly to their needs, and specialized [tinnitus care](/tinnitus/) — with the continuity of seeing the same audiologist each visit. Many first came for tinnitus or Lenire and stayed for all of their hearing care.",
    landmarks:
      "We're about 50 minutes from Hartz Avenue, Blackhawk Plaza, and the Iron Horse Trail, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes. We fit several discreet and deep-canal styles. The right choice depends on your ear anatomy and hearing needs, which we assess during your evaluation."],
      ["Why travel from Danville when there are closer options?", "For routine care, staying local is reasonable. Patients come to us for specialized tinnitus treatment, Lenire, and the unhurried, meticulous fitting that's harder to find nearby."],
      ["Can I see a tinnitus specialist?", "Yes. Our practice is tinnitus-focused, including Lenire, and sees patients from throughout the San Ramon Valley. Call 650-342-9449 to arrange a visit."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Dixon is a small agricultural city on the eastern edge of Solano County, surrounded by farmland and known for its long-running Lambtown festival and its Mayfair. It's a genuine haul from the coast — our offices are on the San Mateo Peninsula, around 95 minutes to the southwest — so for routine hearing care, a provider nearer Dixon will nearly always be the practical choice.",
    hook: [
      "The specialized needs that bring Dixon patients our way",
      "We believe in being honest about distance. For standard hearing tests and everyday hearing aids, staying close to home makes sense. The drive to the Peninsula is worth considering only for specialized care — persistent [tinnitus](/tinnitus/), Lenire treatment, a difficult fitting, or a thorough second opinion. Dixon patients who come this far come for that expertise, and we build the day around one comprehensive visit so the long trip does real work.",
    ],
    motif: "civic",
    localScene: [
      "A farm town on the county's edge",
      "Dixon keeps its small-town, agricultural character — the historic downtown around First and A Streets, the fairgrounds that host Lambtown and the county's events, and the open farmland that rings the city. Farming and equipment work here often mean long hours around loud machinery, and that kind of sustained occupational noise exposure can contribute to hearing loss over the years. For Dixon residents noticing hearing changes or living with tinnitus, the specialized care down on the Peninsula is a trip a few decide to make.",
    ],
    whyHere:
      "Dixon patients who travel to us are usually seeking tinnitus and diagnostic expertise that isn't available close by. We honor the long distance by consolidating testing, treatment, and counseling into efficient visits and planning follow-up so repeat drives stay rare.",
    landmarks:
      "Patients reach our Peninsula offices from Dixon's downtown, the fairgrounds, and the surrounding farmland, generally around 95 minutes southwest along I-80.",
    faqs: [
      ["That's a long way from Dixon — why would I come?", "For routine care, a nearby provider is usually best. Dixon patients travel to us mainly for specialized tinnitus care, Lenire, and complex fittings where the expertise justifies the distance. We plan visits to keep repeat trips low."],
      ["Can years of farm and equipment noise damage hearing?", "Long-term exposure to loud machinery can contribute to hearing loss over time. A full diagnostic evaluation will show whether noise is part of the picture and what will help. Call 650-342-9449 to book."],
      ["How do you make a trip from this far worthwhile?", "For distant patients, we fold testing, treatment, and counseling into one efficient visit and set up a follow-up plan that limits how often you need to drive down to the Peninsula."],
    ],
    consolidatedInto: "solano-county",
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
      "East Palo Alto sits along the bay at the southern edge of San Mateo County, a proud, close-knit community with deep roots and a fast-changing skyline of new offices and housing near the water. Good hearing care should be straightforward to reach here — and it is, with our San Carlos office about twelve minutes up the 101.",
    hook: [
      "Full-service hearing care within easy reach",
      "Everyone deserves thorough, professional hearing care close to home, and East Palo Alto residents have it just up the freeway. Whether it is a first hearing test, help for a parent who has started asking people to repeat themselves, ringing in the ears, or hearing aids that need fitting and follow-up, we provide the complete range under one roof. We explain results in plain language, recommend honestly, and never pressure — the goal is hearing that fits your life and your budget.",
    ],
    motif: "bayside",
    localScene: [
      "A bayside community, close to real care",
      "East Palo Alto runs from the neighborhoods off University Avenue and Bay Road out to the shoreline at Cooley Landing and the Ravenswood Open Space Preserve, with newer development rising near the bay. It is a community that values respect and straight talk, and that is how we work: careful [hearing evaluations](/hearing-testing/), clear explanations, and honest technology recommendations, a short and easy drive up the 101 to San Carlos.",
    ],
    whyHere:
      "East Palo Alto patients choose us for genuine, unhurried attention and real expertise — comprehensive testing, honest guidance across every price point, and specialized tinnitus care — delivered by the same audiologist each visit. Quality care, close by, without the runaround.",
    landmarks:
      "We are about twelve minutes from East Palo Alto's University Avenue, Bay Road, and Cooley Landing, straight up the 101 to our San Carlos office.",
    faqs: [
      ["Is there a full-service audiologist near East Palo Alto?", "Yes — our San Carlos office is about twelve minutes north on the 101, offering complete testing, fittings, tinnitus care, and repairs all in one place."],
      ["Do you offer hearing aids at different price points?", "We do. We carry a range of technology levels and recommend honestly based on your hearing needs and budget, never pushing the most expensive option."],
      ["How do I set up a first hearing test?", "Just call 650-342-9449. A comprehensive evaluation is the starting point, and we will walk you through the results in plain language."],
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
      "A day in El Cerrito moves through cafes, transit platforms, and busy avenues — a range of listening situations where a properly verified hearing aid earns its keep. Patients who want a careful, independent approach rather than a rushed chain-store fitting are the ones who seek us out. We center on [speech-in-noise testing](/hearing-testing/) and real-ear verification so devices perform where you actually struggle.",
    ],
    localScene: [
      "The greenway and the avenue",
      "El Cerrito centers on El Cerrito Plaza, the restored Cerrito Theater, the walking-and-biking Ohlone Greenway, the trails of the Hillside Natural Area, and the San Pablo Avenue corridor with its BART stops. It's a compact, transit-woven city full of everyday listening demands. We fit and verify hearing aids to hold up across those settings, and keep up the follow-up care that keeps them working.",
    ],
    whyHere:
      "El Cerrito patients choose us for meticulous diagnostics, honest technology guidance, and dedicated [tinnitus care](/tinnitus/) including Lenire — with the continuity of the same audiologist each visit. We're clear that routine testing can be handled closer to home, and reserve the drive for the specialized work.",
    landmarks:
      "We're roughly 45 minutes from El Cerrito Plaza, the Cerrito Theater, and the Ohlone Greenway, crossing the bay to our San Mateo office.",
    faqs: [
      ["Why travel across the bay from El Cerrito?", "For routine care, a nearby provider is reasonable. Patients come to us for specialized tinnitus treatment, Lenire, second opinions, and difficult fittings — the depth of care worth the drive."],
      ["What makes an independent practice different from a big-box store?", "We aren't tied to one manufacturer, so we recommend honestly and verify every fitting with real-ear measurement. You also see the same audiologist for follow-up rather than a rotating counter."],
      ["Do you offer tinnitus treatment?", "Yes. Our practice is tinnitus-focused, including Lenire for suitable candidates. Call 650-342-9449 to ask whether it's a fit for you."],
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
      "Emeryville runs on workplaces — biotech labs, tech offices, and the busy retail around Bay Street and the Public Market. Open-plan offices and noisy, reverberant rooms are some of the toughest places to follow speech, and that is where mild hearing loss becomes a daily frustration. We test speech-in-noise and verify fittings so hearing keeps up with meetings and lab benches; for that focused approach, or for [tinnitus care](/tinnitus/), some Emeryville professionals make the drive, while simpler needs may be met closer to home.",
    ],
    motif: "downtown",
    localScene: [
      "A small city built around work and retail",
      "Emeryville is easy to picture — the shops and cinema at Bay Street, the Public Market food stalls, the studios and offices along Hollis Street, and the mudflat sculptures out by the marina. It is a place people come to work as much as to live, and workplace listening is where hearing problems tend to surface first. Those who seek us out from Emeryville usually want careful, workplace-realistic testing rather than a quick screening.",
    ],
    whyHere:
      "Emeryville patients choose California Hearing Center for real-ear-verified fittings tuned to demanding listening environments, plus a genuine specialty in tinnitus and Lenire. They come for expertise and honest technology guidance, and for the steadiness of working with the same audiologist across every visit.",
    landmarks:
      "From Bay Street, the Public Market, Hollis Street, or the Emeryville marina, our San Mateo office is roughly 40 minutes across the bay.",
    faqs: [
      ["Why travel from Emeryville instead of staying local?", "Routine care is fine to keep close to home. Patients cross the bay to us for specialized tinnitus treatment, Lenire, and precise, workplace-focused fittings where our concentration pays off."],
      ["I struggle to hear in open-plan meetings — can you help?", "Yes. We measure how well you understand speech in background noise and program hearing aids for those exact settings, verifying the result with real-ear measurement rather than assuming the default fits."],
      ["How long is the trip from Emeryville?", "Roughly 40 minutes to San Mateo, traffic permitting. Call 650-342-9449 and we will arrange visits to reduce how often you make the drive."],
    ],
    consolidatedInto: "alameda-county",
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
      "Fairfield sits midway between San Francisco and Sacramento, best known as home to Travis Air Force Base and the Jelly Belly factory. It's genuinely far from us — our offices are on the Peninsula in San Mateo and San Carlos, roughly 80 minutes southwest — so for everyday hearing care, a provider closer to Fairfield will generally serve you better.",
    hook: [
      "Specialized care worth the trip from Fairfield",
      "We always encourage patients to weigh distance honestly. For routine tests and standard hearing aids, closer is better. But for stubborn [tinnitus](/tinnitus/), Lenire therapy, complex fittings, or a careful second opinion, some Fairfield patients decide the specialized expertise is worth the drive to the Peninsula. When they come, we structure the day around one thorough visit — evaluation, treatment, and a plan — so the trip accomplishes as much as possible.",
    ],
    motif: "civic",
    localScene: [
      "The county seat between two valleys",
      "Fairfield is Solano County's seat, spread between the Suisun Valley wine district, the hills toward Green Valley, and the flatlands around Travis Air Force Base. Aviation and flight-line work put a lot of local careers around powerful engines and equipment, and sustained occupational noise exposure like that can contribute to hearing loss over the years. For veterans, base personnel, and retirees around Fairfield who are dealing with hearing changes or persistent ringing, the specialized care down on the Peninsula is something some choose to travel for.",
    ],
    whyHere:
      "Fairfield patients who come to us are typically seeking a depth of tinnitus and diagnostic care they couldn't find close by. We plan their visits to be thorough and combined from the start, so someone driving in from Solano County rarely needs a second trip for the same issue.",
    landmarks:
      "Patients reach our Peninsula offices from Fairfield, the Suisun and Green Valley areas, and near Travis Air Force Base, generally around 80 minutes southwest via I-80.",
    faqs: [
      ["Why travel from Fairfield when there are closer options?", "For routine care, closer usually wins. Fairfield patients travel to us mainly for specialized tinnitus treatment, Lenire, and difficult cases where the expertise makes the drive worthwhile. We plan visits to minimize repeat trips."],
      ["I spent years around aircraft — should I get my hearing checked?", "Yes. Prolonged exposure to flight-line and engine noise can contribute to hearing loss, and a full diagnostic evaluation will show where things stand and what helps. Call 650-342-9449 to set one up."],
      ["Do you offer Lenire tinnitus treatment?", "We do. Lenire and comprehensive tinnitus care are among the main reasons patients travel to us from farther corners of the Bay Area, Fairfield included."],
    ],
    consolidatedInto: "solano-county",
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
      "Foster City is unlike anywhere else on the Peninsula — a planned community built on engineered fill, laced with lagoons and levees, right at the western foot of the San Mateo Bridge. It is flat, walkable, and home to a large population of both families and active retirees, which shapes the hearing care people here look for.",
    hook: [
      "A bayside community, and the moisture that comes with it",
      "Life on the water is one of Foster City's pleasures, but humidity and moisture are the natural enemies of hearing aids. Sweat, marine air, and the occasional splash on the lagoon can shorten the life of a device that is not properly maintained. We fit Foster City patients with moisture-resistant options where it makes sense, teach simple drying routines, and keep rechargeable contacts clean — small habits that prevent the most common cause of hearing aid repairs.",
    ],
    motif: "bayside",
    localScene: [
      "Life on the lagoons",
      "Foster City is organized around its water — the lagoon system, the levee-top walking and biking trails, and neighborhoods like Edgewater, Sea Cloud, Mariners Island, and the areas around Leo J. Ryan Park. It draws an unusual mix of young families and active retirees, and the waterside lifestyle is exactly where hearing-aid moisture management earns its keep. We set Foster City patients up with moisture-resistant devices and simple drying habits so their hearing aids survive the humidity and the occasional splash on the water.",
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
      "A big city one bridge from our San Carlos office",
      "Fremont stretches across five old districts, but the Dumbarton Bridge lands close to our San Carlos location — roughly half an hour, traffic depending. That makes specialized care realistic here: in-depth [tinnitus](/tinnitus/) and Lenire treatment, real-ear-verified fittings, and second opinions on devices that never quite worked. For routine testing a local Fremont audiologist is a fair choice, but the direct Dumbarton connection is why many patients here decide the trip is worth it.",
    ],
    motif: "civic",
    localScene: [
      "From Mission San Jose to the flats",
      "Fremont is really several towns in one — the historic Mission San Jose with its old adobe church, the shops of Niles, the Central Park lawns around Lake Elizabeth, and the Warm Springs district out by the newer BART station. It is a large, family-centered, tech-employing community spread over a wide area. Patients who come to us from Fremont usually do so on purpose, seeking a level of tinnitus and hearing specialization that is harder to find nearby.",
    ],
    whyHere:
      "Fremont patients choose California Hearing Center for its depth in the hard cases — persistent tinnitus, Lenire therapy, and complex fittings — along with thorough testing and honest technology advice. The Dumbarton route keeps San Carlos close enough, and the continuity of one dedicated audiologist keeps them coming back.",
    landmarks:
      "From Mission San Jose, Niles, Central Park, or Warm Springs, our San Carlos office is roughly 30 minutes over the Dumbarton Bridge.",
    faqs: [
      ["How reachable is your office from Fremont?", "The Dumbarton Bridge lands close to our San Carlos office, roughly 30 minutes away. That makes specialized tinnitus care and complex fittings practical from Fremont."],
      ["Why not just see a Fremont audiologist?", "For routine testing and maintenance, a local provider is reasonable. People travel to us for specialized tinnitus treatment, Lenire, and second opinions where our narrower focus makes the difference."],
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
      "Gilroy is the self-styled Garlic Capital of the World — a farming town at the rural southern end of the county, with a historic Monterey Street downtown and fields and vineyards spreading out around it. It is a full hour south of our Peninsula offices, so the Gilroy patients who come to us are clearly choosing specialized care over the nearest clinic.",
    hook: [
      "Farm-country hearing care and the reasons people travel for it",
      "Agriculture and food processing run on loud machinery, and years of that kind of occupational exposure can contribute to hearing loss and tinnitus. Rural south county also has fewer specialized audiology options, so when a Gilroy patient needs more than routine care — stubborn [tinnitus](/tinnitus/), a fitting that never worked, a thorough reassessment — the search often leads up the Peninsula. Our practice is built around exactly those harder problems, which is what justifies the longer drive.",
    ],
    motif: "civic",
    localScene: [
      "A working town at the county's rural edge",
      "Gilroy centers on the old downtown along Monterey Street, with the premium outlets off the 101, Gilroy Gardens to the west, and garlic fields and wineries filling the valley around it. It is a hard-working, agricultural community where quiet is the norm but loud equipment is a daily reality on farms and in processing plants. For Gilroy patients who make the trip, we concentrate on occupational hearing changes, tinnitus, and carefully verified fittings.",
    ],
    whyHere:
      "Gilroy patients travel to us because specialized hearing and tinnitus care is scarce in south county, and because our focus — deep diagnostics, verified fittings, and Lenire for tinnitus — is worth a real drive. For routine testing, we are honest that something closer to home makes more sense.",
    landmarks:
      "We are about 60 minutes from downtown Gilroy, the Gilroy outlets, and Gilroy Gardens, north up the 101 to our San Carlos office.",
    faqs: [
      ["It's a long way from Gilroy — is it worth it?", "For everyday hearing checks, a closer clinic is more practical. Patients make the drive to us for specialized care — persistent tinnitus, difficult fittings, Lenire, or a rigorous second opinion — where our expertise earns the distance."],
      ["Can farm and plant noise affect my hearing?", "Yes. Sustained occupational noise from machinery can contribute to hearing loss and tinnitus over time. A baseline evaluation shows where you stand and what protection helps going forward."],
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
      "Half Moon Bay sits on the coast, over the hill from the rest of the Peninsula by way of Highway 92. Famous for its pumpkin festival, working harbor, and long foggy stretches, it is a beautiful place to live — and one where the marine climate has a real, specific effect on hearing devices.",
    hook: [
      "Coastal fog, humidity, and your hearing aids",
      "Half Moon Bay's marine layer means persistently high humidity, and moisture is the single most common cause of hearing aid trouble. Coastal patients see it as muffled sound, intermittent cut-outs, or corroded contacts. It is very manageable once you know how: moisture-resistant devices, a nightly drying routine, and regular professional cleaning keep coastal hearing aids working reliably. When something does go wrong, we handle repairs so you are not left without your hearing.",
    ],
    motif: "coast",
    localScene: [
      "One coast, many communities",
      "The Coastside is really a string of communities — downtown Half Moon Bay along Main Street, the harbor at Pillar Point and Princeton-by-the-Sea, El Granada, Miramar, and the surf breaks out at Mavericks. What they share is the marine layer: cool, damp air rolling in off the Pacific most mornings. That persistent humidity is hard on hearing aids, so for Coastside patients we lean into moisture-resistant technology, drying routines, and durable fittings that hold up to coastal living, over Highway 92 or up Highway 1.",
    ],
    whyHere:
      "For most of the coast, we are the nearest full-service audiology practice — there simply is not an audiologist over the hill for many listening needs. Coastside patients make the trip over 92 for thorough testing, moisture-smart hearing aid fittings, tinnitus care, and dependable repairs, and we make each visit count so the drive is worth it.",
    landmarks:
      "We are about 25–30 minutes from downtown Half Moon Bay, El Granada, Miramar, and Princeton-by-the-Sea by way of Highway 92 to our San Mateo office.",
    faqs: [
      ["Is it worth driving over the hill for hearing care?", "For most Coastside residents, yes — there are few full-service audiology options nearby. We make visits thorough and efficient, and we can often bundle testing, fitting, and follow-up so the drive over Highway 92 accomplishes more in one trip."],
      ["Why do my hearing aids struggle in the coastal climate?", "Coastal humidity and marine air let moisture build up inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices, nightly drying, and regular cleaning prevent most problems. We help Coastside patients set up a routine that works."],
      ["Do you repair hearing aids damaged by moisture?", "Yes. Moisture-related issues are among the most common repairs we handle, and many can be resolved same-day with professional cleaning and drying."],
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
      "Hayward anchors the East Bay at the foot of the San Mateo Bridge, a diverse, working city with a big state university and a long industrial history. Of all the East Bay cities, it is the most straightforward drive to us — Highway 92 lands almost directly at our San Mateo office. Our practice is still on the Peninsula, but for Hayward the crossing is genuinely quick.",
    hook: [
      "The most feasible East Bay drive across the 92",
      "Hayward sits right at the eastern end of the San Mateo-Hayward Bridge, so the trip to our San Mateo office is roughly 25-30 minutes — the shortest of any East Bay city we serve. That makes specialized care realistic here in a way it is not further north: focused [tinnitus](/tinnitus/) and Lenire treatment, verified fittings, and second opinions are all within an easy reach. For routine testing a local clinic is fine, but the short bridge hop means many Hayward patients simply come to us.",
    ],
    motif: "transit",
    localScene: [
      "A crossroads city by the bridge",
      "Hayward is a hub — the shops and restaurants of a revitalizing downtown along B Street, the campus of Cal State East Bay up in the hills, the Japanese Gardens, and the shoreline and marsh trails where Highway 92 heads for the bridge. It is a busy, mixed community of students, families, and tradespeople, many with careers spent around noise. Because the bridge is right there, seeing a specialized audiologist is unusually convenient for a city this far east.",
    ],
    whyHere:
      "Hayward patients choose California Hearing Center because the short bridge drive puts specialized care within reach — thorough testing, real-ear-verified fittings, and a genuine focus on tinnitus and Lenire. They get the depth of a dedicated practice and the continuity of one audiologist without a punishing commute.",
    landmarks:
      "From downtown Hayward, Cal State East Bay, or the shoreline along Highway 92, our San Mateo office is roughly 25-30 minutes over the San Mateo Bridge.",
    faqs: [
      ["Is Hayward really that close to your office?", "Yes — Highway 92 and the San Mateo Bridge put us roughly 25-30 minutes away, the shortest East Bay drive we see. That makes specialized tinnitus care and complex fittings genuinely practical from Hayward."],
      ["Do you treat tinnitus and offer Lenire?", "We do. Tinnitus is a core focus of the practice, including Lenire therapy, and Hayward's easy bridge access makes the follow-up visits Lenire involves very manageable. Call 650-342-9449 to learn more."],
      ["Should I still consider a local Hayward provider?", "For simple hearing tests and maintenance, a nearby clinic is reasonable. But given how short the 92 crossing is, many Hayward patients find it easy to come to us for both routine and specialized care."],
    ],
    consolidatedInto: "alameda-county",
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
      "Bayfront living and your hearing aids",
      "Living near San Pablo Bay means damp, salty air, and moisture is the single most common cause of hearing-aid trouble — muffled sound, intermittent cut-outs, corroded contacts. It's manageable with moisture-resistant devices, a nightly drying routine, and regular cleaning. Beyond that upkeep, patients here who need specialized [tinnitus care](/tinnitus/) or a fitting that's given real time and attention are the ones who make the trip across the bay to us.",
    ],
    localScene: [
      "A planned town on the water",
      "Hercules runs from its bayfront and the trails along San Pablo Bay through Refugio Valley Park and the Victoria by the Bay neighborhoods to the Capitol Corridor train station on John Muir Parkway. The waterfront setting is a big part of its appeal — and it means damp, coastal air that's hard on hearing devices over time. We lean into moisture-smart technology and durable fittings that hold up to life near the bay.",
    ],
    whyHere:
      "Hercules patients come to us for what's harder to find nearby: careful diagnostics, moisture-aware hearing-aid fittings, and dedicated tinnitus and Lenire care with the same audiologist each time. For routine testing we'll gladly point you somewhere closer; the drive is for the specialized work.",
    landmarks:
      "We're roughly 50 minutes from the Hercules waterfront, Refugio Valley Park, and the John Muir Parkway train station, crossing the bay to our San Mateo office.",
    faqs: [
      ["Why do my hearing aids struggle near the bay?", "Damp, salty bayfront air lets moisture build up inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices, nightly drying, and regular cleaning prevent most of it, and we help you set up a routine."],
      ["Is the drive across the bay worth it from Hercules?", "For routine care, a local provider may be simpler. Patients travel to us for specialized tinnitus treatment, Lenire, and complex fittings — care worth the trip."],
      ["Do you repair hearing aids damaged by moisture?", "Yes. Moisture-related issues are among the most common repairs we handle, and many can be resolved with professional cleaning and drying."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Hillsborough is a purely residential town of gracious estates and winding, tree-lined roads, with no commercial district by design — residents cross into Burlingame or San Mateo for nearly every errand. Our San Mateo office is one of the closest, about eight minutes away, and privacy and unhurried care are exactly what many Hillsborough patients are after.",
    hook: [
      "Discreet technology and private, unhurried care",
      "For many Hillsborough residents, two things matter most: hearing that keeps pace with an active professional and social life, and devices that stay out of sight. Today's invisible and receiver-in-canal hearing aids deliver both — but the result depends far more on expert fitting and real-ear verification than on the device alone. We take the time to program, measure, and refine, in a calm setting where nothing feels rushed and everything stays confidential.",
    ],
    motif: "estate",
    localScene: [
      "A town of estates that travels for its services",
      "Hillsborough winds through neighborhoods like the Country Club district, Tobin Clark, and the roads around the historic Carolands Chateau, with Crystal Springs and Black Mountain framing the western hills. There is no shopping street here — residents are accustomed to a short drive for their care. Many are active professionals and longtime community members who want technology that keeps up with a full calendar while remaining completely discreet, and the privacy of an independent practice over a big-box counter, just minutes down the hill.",
    ],
    whyHere:
      "Hillsborough patients choose us for meticulous testing, premium technology matched honestly to their needs, and specialized tinnitus care — with the continuity of the same audiologist at every visit. The care is private, patient, and thorough, the way they expect it to be.",
    landmarks:
      "We are a short drive from Hillsborough's Country Club district and the roads near Carolands and Crystal Springs, an easy eight minutes to our San Mateo office.",
    faqs: [
      ["Do you offer truly discreet or invisible hearing aids?", "Yes — we fit several invisible and near-invisible styles, including deep-canal options. The best fit depends on your ear anatomy and hearing needs, which we assess carefully during your evaluation."],
      ["Can I expect a private, unhurried appointment?", "That is how we work. Hillsborough patients value the calm, confidential pace of an independent practice, with time to ask questions and fine-tune results across visits."],
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
      "Lafayette blends an easygoing, semi-rural feel with a polished downtown — the shops along Mt. Diablo Boulevard, the trails circling the Lafayette Reservoir, the oak-covered hills of Lamorinda. It's about 50 minutes east of our Peninsula offices, so we're candid that we're not the closest audiologist, though Lafayette residents do travel to us for specialized care.",
    hook: [
      "Unhurried, private hearing care",
      "Residents here generally value technology that's effective yet discreet, and results that come from attentive fitting rather than the newest gadget alone. We work in an unhurried, private way — measuring, programming, and verifying each fitting so it truly fits your ears and your life. That kind of careful attention, along with focused [tinnitus care](/tinnitus/), is what draws Lafayette patients over the hills to us.",
    ],
    localScene: [
      "Reservoir trails and a downtown stroll",
      "Lafayette's rhythm shows in the walkers and joggers circling the Lafayette Reservoir, the boutiques and restaurants along Mt. Diablo Boulevard, the Lafayette-Moraga Trail, and the quiet lanes of Happy Valley. It's a place that prizes calm and quality. We mirror that in the clinic — taking time to test thoroughly, recommend honestly, and verify every fitting so your hearing keeps up with an active outdoor life.",
    ],
    whyHere:
      "Lafayette patients choose us for meticulous diagnostics, premium technology matched honestly to their needs, and specialized tinnitus and Lenire care — with the continuity of the same audiologist each visit. We're clear that routine care can be handled closer to home, and save the drive for the specialized work.",
    landmarks:
      "We're about 50 minutes from the Lafayette Reservoir, Mt. Diablo Boulevard, and the Lafayette-Moraga Trail, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Why travel from Lafayette when there are closer options?", "For routine care, staying local is reasonable. Patients come to us for specialized tinnitus treatment, Lenire, and the unhurried, meticulous fitting that's harder to find nearby."],
      ["Do you offer discreet hearing aids?", "Yes. We fit several low-profile and in-canal styles that stay unobtrusive. The best choice depends on your ear anatomy and hearing, which we assess in your evaluation."],
      ["Can you help with ringing in the ears?", "Yes. Our practice is tinnitus-focused, including Lenire for suitable candidates. We evaluate the cause first, then build a plan around your case. Call 650-342-9449 to ask about it."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Larkspur is a compact, leafy town best known for its ferry terminal to San Francisco and the open-air Marin Country Mart beside it, with a historic downtown of redwood-shaded streets along Magnolia Avenue. It sits well north of us, across the bay and up the 101 — our offices are on the Peninsula, roughly an hour away. We are upfront about that: most Larkspur patients travel to us for something particular.",
    hook: [
      "Care worth the ferry-town commute",
      "Plenty of Larkspur residents already commute — many step onto the ferry each morning — so a longer trip for the right specialist is nothing new. Where we earn that trip is specialized work: complex [tinnitus](/tinnitus/) and Lenire therapy, difficult fittings, and second opinions that call for a deliberate, verified approach. For a routine clean-and-check, a nearer Marin office is the sensible call, and we will point you there without hesitation.",
    ],
    motif: "bayside",
    localScene: [
      "A small town by the water",
      "Larkspur life gathers around a few landmarks: the ferry terminal and Larkspur Landing, the shops and cafés of Marin Country Mart, the historic downtown along Magnolia Avenue, and the redwood canyon trails up toward Baltimore Canyon. It is walkable and close-knit, the kind of place where people prefer a practice that knows them personally. Because the drive to us is a real commitment, we make visits count — pairing testing, fitting, and follow-up so one trip over the bridge does the most it can.",
    ],
    whyHere:
      "Larkspur patients usually come to us for depth rather than convenience — thorough diagnostics, honest technology recommendations, and specialized [tinnitus care](/tinnitus/) including Lenire, all with the same audiologist each visit. Many arrived first for ringing or a hard-to-solve fitting and stayed for the rest of their hearing care. For basic upkeep, we happily acknowledge a closer office may suit you better.",
    landmarks:
      "We are about an hour south of the Larkspur Ferry Terminal, Marin Country Mart, and the Magnolia Avenue downtown, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Could I combine a hearing visit with a trip into the city?", "Some patients do plan their visit around a broader day out, though our offices are on the Peninsula rather than in San Francisco. We are glad to schedule so testing, fitting, and follow-up fit into one efficient trip."],
      ["Why choose a practice an hour away over one in Marin?", "For everyday care, we would not argue with convenience. People choose us for specialized tinnitus and Lenire treatment, difficult fittings, and careful second opinions — situations where expertise and time matter more than the miles."],
      ["How far is your office from Larkspur?", "Roughly an hour south via Highway 101 and the Golden Gate to San Mateo. Call 650-342-9449 to arrange a visit with enough time set aside to make the drive worthwhile."],
    ],
    consolidatedInto: "marin-county",
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
      "Livermore anchors the eastern edge of the Bay Area, a Tri-Valley city of vineyards, ranchland, and a science-and-tech heritage from its national laboratory. It is the farthest east of the cities we serve, and we will not pretend otherwise: our offices are a solid hour west on the Peninsula. Livermore patients who come to us are choosing a premier, tinnitus-focused practice on purpose.",
    hook: [
      "Wine country distance, and why some still travel",
      "Livermore is genuinely wine country — dozens of wineries spread across the valley, a lifestyle of tastings and long outdoor afternoons. It is also an hour from our offices, so for everyday hearing care a Tri-Valley provider is the sensible choice. What draws a Livermore patient this far west is the specialization: complex [tinnitus care](/tinnitus/) and Lenire, difficult fittings that other clinics could not resolve, and second opinions worth the trip. We are honest that the distance only makes sense for that focused need.",
    ],
    motif: "wine",
    localScene: [
      "Vineyards, downtown, and open valley",
      "Livermore stretches from a revitalized downtown around First Street and the Bankhead Theater out to the vineyards of the Livermore Valley — Wente and Concannon among the oldest — with ranch country and the lab shaping the city's edges. It is a community that blends agricultural roots, wine tourism, and scientific work. The patients who make the long drive to us do so because they want a practice that concentrates on the tinnitus and complex-hearing problems general clinics rarely specialize in.",
    ],
    whyHere:
      "Livermore patients who choose California Hearing Center are seeking depth that justifies an hour's drive — focused tinnitus and Lenire treatment, meticulous testing, and honest technology guidance. They value one consistent audiologist who knows their history, and they accept the distance because the specialization is what they came for.",
    landmarks:
      "From downtown Livermore, the Bankhead Theater, or the Livermore Valley wineries, our San Mateo office is roughly an hour west.",
    faqs: [
      ["An hour is a long way — why come to you?", "For routine hearing care, we would point you to a closer Tri-Valley provider. Livermore patients travel to us specifically for specialized tinnitus treatment, Lenire, and complex fittings where a dedicated, focused practice is worth the drive."],
      ["Do you have real experience with difficult tinnitus?", "Yes. Tinnitus is a central focus of our practice, including Lenire therapy for suitable patients. If ringing is disrupting your sleep or concentration, call 650-342-9449 to talk it through before committing to the trip."],
      ["Can you make one visit accomplish more, given the distance?", "We try to. For patients traveling from as far as Livermore, we group testing, fitting, and follow-up where clinically sensible so fewer long drives are needed."],
    ],
    consolidatedInto: "alameda-county",
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
      "Los Altos Hills is almost purely residential — winding lanes, large wooded lots, horse properties, and no commercial district by design. Our offices sit up on the Peninsula rather than in the South Bay, but residents used to traveling for specialized services make the roughly 28-minute drive for care they cannot find closer.",
    hook: [
      "Discreet technology and private, unhurried care",
      "Patients from Los Altos Hills often want hearing that keeps up with an active life while staying completely out of sight, and they value being cared for without being rushed. Modern invisible and receiver-in-canal devices can deliver both, but the result depends on expert programming and verification, not the hardware alone. We take the time to fit, measure, and fine-tune privately — and for those who come to us, it is usually that depth of attention that made the trip worth it.",
    ],
    motif: "estate",
    localScene: [
      "A rural residential town that travels for its services",
      "With Foothill College at its edge, the open space of Rancho San Antonio nearby, and estate parcels threaded along roads like Fremont, Page Mill, and Moody, Los Altos Hills has no downtown and never wanted one. Residents are accustomed to driving for nearly everything, so a trip up the Peninsula for a specialist is nothing new. Those who choose us are usually looking for complex tinnitus help, a difficult fitting solved, or an unhurried second opinion — and for routine visits, a closer provider may serve just as well.",
    ],
    whyHere:
      "Los Altos Hills patients come to us for depth rather than convenience: specialized [tinnitus care](/tinnitus/) including Lenire, meticulous verified fittings, and honest guidance on technology. Many first crossed the county line for a problem no one nearby had solved.",
    landmarks:
      "We are about 28 minutes from Foothill College, Rancho San Antonio, and the Page Mill corridor, north via the 280 to our San Carlos office.",
    faqs: [
      ["Is it worth traveling this far when there are audiologists closer?", "For routine hearing aid checks, a nearby provider may be perfectly fine. Patients travel to us for specialized needs — complex tinnitus, difficult fittings, Lenire, or a thorough second opinion — where the extra distance buys real expertise."],
      ["Can you keep my care completely discreet and private?", "Yes. We fit several invisible and near-invisible styles and keep every visit unhurried and confidential, which is a large part of why Los Altos Hills patients choose us."],
      ["How far is your office from Los Altos Hills?", "Our San Carlos office is about 28 minutes north on the 280. Call 650-342-9449 and we can plan a longer, efficient visit to make the drive count."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Los Altos keeps a village feel that its old apricot orchards would still recognize — a walkable downtown triangle, leafy streets, and no rush. Residents here expect care that is personal and unhurried, and our San Carlos office is a manageable 25-minute drive up the Peninsula.",
    hook: [
      "Unhurried, personal hearing care that fits the details",
      "Los Altos patients often want two things at once: hearing that keeps pace with an active social and professional life, and technology discreet enough to forget they are wearing. Both come down to the fitting, not just the device. We take the time to verify each program, match technology honestly to how you actually live, and fine-tune until it disappears into the background — the kind of attention an independent practice can give and a big-box counter cannot.",
    ],
    motif: "downtown",
    localScene: [
      "A downtown triangle built for conversation",
      "Downtown Los Altos is made for lingering — the triangle of Main Street, State Street, and First Street, the Rancho Shopping Center, and shaded neighborhoods like Country Club and North Los Altos. It is a town of face-to-face conversation, farmers-market chatter, and long lunches, all of which depend on clear hearing. For Los Altos patients we emphasize discreet, well-verified fittings that hold up across exactly these everyday settings, so the social life the town is built around stays effortless.",
    ],
    whyHere:
      "Los Altos residents choose us for meticulous testing, premium technology matched to real needs rather than upsold, and the continuity of one familiar audiologist over time. Many first came for [tinnitus care](/tinnitus/) or a difficult fitting elsewhere and stayed for everything after.",
    landmarks:
      "We are about 25 minutes from downtown Los Altos, the Rancho Shopping Center, and the First Street district by way of El Camino and the 101 to our San Carlos office.",
    faqs: [
      ["Do you fit discreet, nearly invisible hearing aids?", "Yes. We fit several near-invisible and receiver-in-canal styles. The right one depends on your ear anatomy and hearing needs, which we assess carefully before recommending anything."],
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
      "Los Gatos tucks itself against the Santa Cruz Mountains — a polished downtown along Santa Cruz Avenue, the creek trail winding up toward the hills, and homes that climb into the trees. Our practice is roughly 40 minutes north on the Peninsula, and Los Gatos residents who expect the best will travel for hearing care that meets that standard.",
    hook: [
      "Discreet devices and expert, unhurried fittings",
      "Los Gatos patients often want hearing that keeps pace with an active, social life without announcing itself, and they value being cared for without a rushed appointment clock. The devices that deliver that — invisible and receiver-in-canal styles — only perform when they are expertly programmed and verified. We spend the time to measure, refine, and personalize each fitting, and it is that thoroughness patients come up the Peninsula to find.",
    ],
    motif: "estate",
    localScene: [
      "Downtown, Old Town, and the road to the hills",
      "The town centers on Santa Cruz Avenue and the shops of Old Town, with the Los Gatos Creek Trail leading down to Vasona Lake and neighborhoods rising toward the mountains and Highway 17. It is a place of patio dinners, trail walks, and close-knit gatherings — all of which depend on catching every word. For Los Gatos patients who make the trip, we prioritize discreet, carefully verified fittings and specialized tinnitus care that is not easy to find nearby.",
    ],
    whyHere:
      "Los Gatos residents choose us for precision and continuity: verified fittings, honest technology advice, and focused [tinnitus care](/tinnitus/) including Lenire, all with the same audiologist over time. For simple upkeep, we are candid that a closer office may suit better.",
    landmarks:
      "We are about 40 minutes from downtown Los Gatos, Old Town, and the Los Gatos Creek Trail, north up the 280 to our San Carlos office.",
    faqs: [
      ["Do you fit hearing aids that stay out of sight?", "Yes. We fit several invisible and near-invisible options and verify each fitting carefully, since the right result depends as much on programming as on the device itself."],
      ["Is it worth the drive from Los Gatos?", "For routine visits, a local provider may be more practical. Patients come to us for specialized care — stubborn tinnitus, difficult fittings, Lenire, or a detailed second opinion — where our expertise is worth the trip."],
      ["How far is your office from Los Gatos?", "About 40 minutes north via the 280 to San Carlos. Call 650-342-9449 to arrange a thorough visit built around the drive."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Marin County spans the whole stretch north of the Golden Gate — from the waterfront towns of Sausalito and Tiburon through San Rafael, Mill Valley, and Larkspur up to Novato and out to the coast at Point Reyes. It is a large, varied place, and our offices sit on the opposite side of the bay, down on the Peninsula. We are honest about that geography: Marin residents come to us across the bridge for reasons a nearer provider often cannot cover.",
    hook: [
      "A specialized destination, not a routine stop",
      "There are capable audiologists throughout Marin for everyday hearing care, and for routine needs staying local usually makes sense. Where patients cross the bridge to us is the specialized work: stubborn [tinnitus](/tinnitus/) and Lenire therapy, difficult or previously unsuccessful fittings, moisture-related repairs, and second opinions that call for a thorough, verified approach. We are a tinnitus-focused practice, and that draws people from across the region and beyond.",
    ],
    motif: "civic",
    localScene: [
      "One county, many communities",
      "Marin runs from bayfront towns like Sausalito, Tiburon, and Larkspur to the county seat at San Rafael, the redwood-shaded quiet of Mill Valley beneath Mount Tamalpais, and the more suburban north around Novato — with Muir Woods, Point Reyes, and open coast at the county's edges. Damp bay and marine air are a common thread that can be tough on hearing technology. Wherever in Marin you're coming from, we tailor care to your setting and make the trip over the bridge count by pairing testing, fitting, and follow-up where we can.",
    ],
    whyHere:
      "Marin patients generally choose us for depth: advanced [tinnitus care](/tinnitus/) and Lenire, honest technology matched to real needs, and the continuity of one audiologist rather than a rotating counter. Many first came for ringing or a fitting that had never sounded right and stayed for the whole of their hearing care. For routine visits, we readily point people to a closer option.",
    landmarks:
      "From across Marin — Sausalito, Tiburon, San Rafael, Mill Valley, Larkspur, and Novato — the route to us runs south on Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why do Marin patients drive all the way to the Peninsula?", "Usually for specialized care — complex tinnitus, Lenire, a difficult fitting, or a second opinion — where our focus and thoroughness justify the trip. For routine cleanings and basic checks, a provider closer to home in Marin is often the more practical choice, and we will say so."],
      ["What makes your tinnitus care different?", "Tinnitus is a core focus of our practice. We evaluate it carefully, rule out issues needing medical attention, and build a real plan that may include sound therapy or Lenire — rather than telling patients there is nothing to be done."],
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
      "Martinez wears a lot of hats — Contra Costa's county seat, John Muir's old hometown, a historic downtown by the marina, and a refinery town on the Carquinez Strait. It's roughly 55 minutes northeast of our Peninsula offices, so we're straightforward that we're a destination practice for Martinez patients rather than the nearest one.",
    hook: [
      "A county seat with an industrial waterfront",
      "That industrial side of Martinez matters for hearing. Refinery and trade work along the strait carries years of loud-noise exposure that can contribute to hearing loss and tinnitus over time. A baseline [evaluation](/hearing-testing/) is worthwhile if that's your background, and we fit custom-molded hearing protection for those still on the job — the kind of specialized, preventive attention that's the groundwork for catching problems early.",
    ],
    localScene: [
      "From John Muir's home to the marina",
      "Martinez runs from the orchards around the John Muir National Historic Site through the brick-front downtown on Main Street to the marina, the waterfront park, and the refineries on the Carquinez Strait. It's a civic and industrial town at once. Many residents carry working lives spent around heavy equipment, so we emphasize baseline testing, honest results, and protection for people still exposed to that noise.",
    ],
    whyHere:
      "Martinez patients who travel to us are usually after specialized help — a thorough diagnostic workup, custom hearing protection, or focused [tinnitus care](/tinnitus/) including Lenire. We say plainly that a routine test can be done closer to home, and reserve the trip for the complex cases.",
    landmarks:
      "We're roughly 55 minutes from the John Muir site, downtown Martinez, and the marina, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["I worked around the refineries for years — should I get my hearing checked?", "Yes. Long-term industrial noise can contribute to gradual hearing loss and tinnitus. A baseline evaluation gives you a clear picture and a reference point for the future."],
      ["Do you make custom hearing protection?", "We do. Custom-molded protection fits better and shields more reliably than generic plugs, which matters for anyone still working around loud equipment."],
      ["Why come to the Peninsula from Martinez?", "For routine care, a closer provider may be simpler. Patients travel to us for specialized tinnitus treatment, Lenire, and difficult fittings. Call 650-342-9449 to talk it through."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Menlo Park spans a lot of worlds — the Santa Cruz Avenue downtown, the Sand Hill Road venture corridor, the neighborhoods near Stanford, and the large tech campuses toward the Bayfront. That mix means we see everyone here, from young professionals in loud open offices to longtime residents managing hearing change.",
    hook: [
      "Hearing well in demanding listening environments",
      "Many Menlo Park patients spend their days in exactly the situations where hearing is hardest: back-to-back meetings, open-plan offices, video calls, and busy restaurants. Success in those settings is less about buying the most expensive device and more about precise programming, real-ear verification, and features matched to your real environments. We tune hearing aids to the rooms you actually spend time in.",
    ],
    motif: "estate",
    localScene: [
      "Downtown, the venture corridor, and everything between",
      "Menlo Park stretches from the Santa Cruz Avenue downtown and the Allied Arts district to Sharon Heights, the Sand Hill Road venture corridor, and the large campuses out toward the Bayfront. It is a city of demanding listening environments — glass-walled conference rooms, open offices, and restaurants that fill up fast. We help Menlo Park patients hear in exactly those rooms by testing speech-in-noise and verifying each fitting against a real target, so the benefit shows up where it counts, not just in a quiet booth.",
    ],
    whyHere:
      "Menlo Park patients come to us for careful diagnostics, honest technology guidance, and strong tinnitus care, all a short drive up to our San Carlos office. We focus on measurable results in the environments that matter to you, not just a passing score in a quiet booth.",
    landmarks:
      "We are an easy trip from downtown Menlo Park and Santa Cruz Avenue, the Sharon Heights and Allied Arts areas, and the Sand Hill Road corridor.",
    faqs: [
      ["I struggle to hear in meetings and restaurants — can you help?", "Yes. Difficulty in noise is one of the most common reasons patients come in. We test speech-in-noise, then select and precisely verify technology for those specific situations, which usually helps far more than volume alone."],
      ["Which office serves Menlo Park?", "Our San Carlos office is closest, about 12 minutes from most of Menlo Park via the 101 or El Camino Real. Call 650-342-9449 to schedule."],
    ],
    onCaltrain: true,
    metaTitle: "Audiologist in Menlo Park: Hearing Tests and Aids",
    metaDescription: "Menlo Park hearing tests, hearing aids and tinnitus care at our San Carlos office, 1008 Laurel Street. Real-ear verified fittings. Call 650-342-9449.",
  },

  // ---------------------------------------------------------------- FAR / REGIONAL
  // The "premier practice, patients travel to us" positioning. Honest: we say plainly
  // there is no office here, and frame the page around patients who choose the drive.,
  "mill-valley": {
    name: "Mill Valley",
    county: "Marin County",
    region: "north-bay",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 55 minutes north over the Golden Gate",
    distanceTier: "far",
    geo: { lat: 37.9060, lng: -122.5450 },
    lede:
      "Tucked into the redwoods at the foot of Mount Tamalpais, Mill Valley wraps a small, walkable downtown around Lytton Square and the old railroad depot. It is a place people choose for quiet and beauty — and one where residents are used to traveling a bit for the right specialist. Our offices are on the Peninsula, about 55 minutes south over the Golden Gate, so Mill Valley patients tend to come to us deliberately.",
    hook: [
      "Unhurried, private hearing care worth the trip",
      "Mill Valley residents often want two things from hearing care: technology discreet enough to disappear, and a practice unhurried enough to get it exactly right. Modern receiver-in-canal and near-invisible devices deliver the first; expert programming and verification deliver the second. We spend the time to measure, fit, and fine-tune rather than hand you a device and send you off — the kind of private, attentive care that makes an hour's drive feel reasonable.",
    ],
    motif: "estate",
    localScene: [
      "Redwoods, trails, and a walkable center",
      "Mill Valley life runs from the shops and cafés around Lytton Square and Throckmorton Avenue to Old Mill Park's redwoods, the Dipsea steps, and the trailheads climbing toward Mount Tam. Down at Tam Junction and Tam Valley the pace shifts, but the throughline is the same: people who value quiet and want to keep hearing the birdsong, the creek, and the conversation on the deck. For patients here we focus on natural, well-verified sound and technology that stays out of sight.",
    ],
    whyHere:
      "People from Mill Valley generally seek us out for specialized needs — persistent [tinnitus](/tinnitus/), Lenire therapy, or a fitting that finally sounds right after other attempts fell short. They value continuity with a single audiologist and care that isn't rushed. For a quick adjustment or routine check, a closer Marin provider may make more sense, and we are candid about that.",
    landmarks:
      "We sit about 55 minutes south of Mill Valley's Lytton Square, Old Mill Park, and the Tam Junction area, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes. We fit several near-invisible and receiver-in-canal styles; the best choice depends on your ear anatomy and hearing needs, which we assess during your evaluation. Getting the most from any of them comes down to careful fitting and verification."],
      ["Is the drive from Mill Valley worth it for hearing care?", "If you need specialized tinnitus or Lenire care, a second opinion, or a difficult fitting solved, most patients feel it is. For routine maintenance, a nearer Marin office may be the practical choice — we would rather tell you honestly than waste your trip."],
      ["How far is your office from Mill Valley?", "About 55 minutes down Highway 101 and over the Golden Gate to our San Mateo office. Call 650-342-9449 and we will build in time so a single visit covers testing, fitting, and follow-up where possible."],
    ],
    consolidatedInto: "marin-county",
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
      "Millbrae sits immediately south of San Francisco International Airport and is one of the Peninsula's great transit hubs, where BART and Caltrain meet. That location makes it convenient — and it also puts Millbrae squarely under the busiest part of SFO's flight path.",
    hook: [
      "A transit hub next door to SFO — and who that puts at risk",
      "Few Peninsula cities sit as close to SFO as Millbrae, and few are as defined by movement — trains, buses, and airport traffic all day. The people most exposed to real noise here are those who work the airport and its supply chain: operations, hospitality, ramp and ground transportation. For them, years on the job can add up to permanent noise-induced hearing loss, which is why a baseline evaluation and custom hearing protection are among the smartest steps an airport worker can take. For everyone else, it's simply a good place to know your numbers.",
    ],
    motif: "transit",
    localScene: [
      "A transit hub in SFO's shadow",
      "Millbrae's identity is tied to movement — the Millbrae Intermodal Station where BART meets Caltrain, the El Camino Real corridor, the Green Hills and Mills Estate neighborhoods climbing west into the hills, and the airport pressing in from the north. For residents near the flight path and the many who work in and around SFO, that adds up to real cumulative noise. We start airport-adjacent patients with a baseline evaluation and, where it fits, custom hearing protection, then keep devices dialed in for both quiet streets and loud terminals.",
    ],
    whyHere:
      "Millbrae patients value that our San Mateo office is a quick, direct trip down the 101 or El Camino, with none of the parking hassle of a hospital campus. We provide complete audiology care — testing, hearing aids, tinnitus treatment, protection, and repairs — with continuity of care you rarely get at a chain.",
    landmarks:
      "We are a straight shot from the Millbrae BART/Caltrain station, El Camino Real, and the Green Hills area, generally 12–15 minutes to the office.",
    faqs: [
      ["I live near SFO — should I be worried about my hearing?", "Living near the airport does not guarantee hearing loss, but chronic loud-noise exposure is a known risk factor. A baseline hearing test is a simple way to know where you stand and to catch gradual change early."],
      ["How do I get to your office from Millbrae?", "Most Millbrae patients reach our San Mateo office in about 12–15 minutes via the 101 or El Camino Real. Call 650-342-9449 for directions."],
    ],
    onCaltrain: true,
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
      "Milpitas sits at the crossroads of the South Bay — where the 880 and 680 meet, the Great Mall draws crowds, and a BART station now anchors the transit hub. Our offices are across on the Peninsula, roughly 35 minutes away, and Milpitas patients travel that stretch when they want specialized hearing and tinnitus care.",
    hook: [
      "Clear hearing for a commuting, working city",
      "Milpitas is a city of commuters and industrial and manufacturing workplaces, and two things follow from that. First, some patients carry years of occupational sound exposure, which can contribute to hearing changes and tinnitus over time. Second, daily life plays out in noise — transit platforms, the mall, busy job sites. We evaluate hearing in realistic noisy conditions and verify fittings with real-ear measurement, which is the kind of thorough work that brings Milpitas patients our way.",
    ],
    motif: "transit",
    localScene: [
      "A transit crossroads of the South Bay",
      "Milpitas revolves around movement — the Milpitas BART and light-rail station, the Great Mall, the McCarthy Ranch shops, and neighborhoods spread between the 880 and 680 beneath the East Hills. Between commuting, shopping crowds, and industrial workplaces, quiet is scarce and clear speech in noise is the everyday test. For the Milpitas patients who choose us, we focus on speech-in-noise testing, verified fittings, and tinnitus care that closer options may not emphasize.",
    ],
    whyHere:
      "Milpitas patients travel to us for what a quick appointment cannot deliver: verified fittings that work in noise, help with occupational hearing changes and [tinnitus](/tinnitus/), and honest second opinions. For basic maintenance, a South Bay provider is nearer, and we will say so plainly.",
    landmarks:
      "We are about 35 minutes from the Great Mall, the Milpitas BART station, and McCarthy Ranch, west and north via the 237 and 101 to our San Carlos office.",
    faqs: [
      ["I've worked around loud equipment for years — should I get tested?", "Yes. Long-term occupational noise exposure can contribute to hearing loss and tinnitus. A baseline evaluation shows where you stand and what protection or treatment is worth considering."],
      ["Why drive to the Peninsula instead of staying in the South Bay?", "For routine care, staying close is sensible. People come to us from Milpitas for specialized needs — complex tinnitus, difficult fittings, Lenire, or a careful reassessment — where our expertise makes the trip worthwhile."],
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
      "Monte Sereno is one of the Bay Area's smallest, quietest cities — almost entirely residential, with wooded lots and no commercial district, tucked between Los Gatos and Saratoga. Its residents already drive elsewhere for nearly every errand, so the roughly 42-minute trip north to our Peninsula offices is simply a longer version of a familiar habit.",
    hook: [
      "Private, unhurried care and technology that disappears",
      "For Monte Sereno patients, discretion and unhurried attention usually matter as much as the hearing itself. They want devices that stay invisible and appointments that never feel rushed, and both depend on expert fitting rather than the hardware alone. We take the time to program, verify, and fine-tune privately, tailoring each device to how you actually live — and for those who travel to us, that depth of care is the point of the drive.",
    ],
    motif: "estate",
    localScene: [
      "A hidden residential enclave between two towns",
      "Monte Sereno has no downtown by design — just secluded homes along roads like Via Sereno and Winden Drive, wrapped in oak and set between the villages of Los Gatos and Saratoga, with the creek and foothill trails a short way off. Residents are long accustomed to traveling for services of every kind. Those who choose us are typically seeking specialized help — complex tinnitus, a difficult fitting, a careful reassessment — and for routine needs, somewhere nearer may serve just as well.",
    ],
    whyHere:
      "Monte Sereno patients come to us for expertise and privacy rather than convenience: meticulous verified fittings, honest counsel on technology, and specialized [tinnitus care](/tinnitus/) including Lenire. Many first made the trip for a problem that had gone unsolved closer to home.",
    landmarks:
      "We are about 42 minutes from Monte Sereno's residential lanes and the neighboring villages of Los Gatos and Saratoga, north via the 280 to our San Carlos office.",
    faqs: [
      ["Why travel this far when I could go local?", "For everyday maintenance, local is easier and we will say so. Patients travel to us for specialized care — persistent tinnitus, tricky fittings, Lenire, or a thorough second opinion — where our focus makes the distance worthwhile."],
      ["Can you keep everything private and unrushed?", "Yes. We keep visits confidential and unhurried and fit discreet, near-invisible devices, which is a large part of why patients from quiet communities like Monte Sereno choose us."],
      ["How far is your office from Monte Sereno?", "About 42 minutes north on the 280 to San Carlos. Call 650-342-9449 and we will plan one efficient, comprehensive visit."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Morgan Hill spreads out beneath its landmark El Toro peak — a growing town of vineyards, orchards, and a revitalized downtown along Monterey Road, at the rural southern reach of the valley. Our offices are up on the Peninsula, close to an hour north, and residents here travel that way when they want specialized care their own area cannot readily offer.",
    hook: [
      "The premier-practice reasons to make the drive",
      "Morgan Hill's wineries, farms, and open space make for a fine place to live, but specialized audiology is thin on the ground this far south. When a hearing or tinnitus problem needs more than routine attention — a fitting that finally works in noise, relief from persistent ringing, or a careful second opinion — patients look toward a focused practice. Ours is organized around that harder work, with thorough diagnostics, verified fittings, and [tinnitus care](/tinnitus/) including Lenire.",
    ],
    motif: "wine",
    localScene: [
      "Wine country at the valley's southern reach",
      "Morgan Hill gathers along downtown Monterey Road with its restaurants and events, out past the wineries of the Santa Clara Valley wine trail, Anderson Lake and its reservoir, and neighborhoods framed by El Toro and the surrounding hills. It is a community of tastings, festivals, and family gatherings — social settings where hearing every word counts. For Morgan Hill patients who travel to us, we focus on clarity in those environments and specialized tinnitus care.",
    ],
    whyHere:
      "Morgan Hill patients choose us for expertise that is hard to find in south county: verified fittings, honest technology guidance, and focused tinnitus treatment. For simple maintenance, we are candid that somewhere closer will spare you the drive.",
    landmarks:
      "We are about 55 minutes from downtown Morgan Hill, Anderson Lake, and the local wineries, north up the 101 to our San Carlos office.",
    faqs: [
      ["Why travel nearly an hour to your practice?", "For routine care, a nearer provider makes sense. Patients come to us from Morgan Hill for specialized needs — complex tinnitus, difficult fittings, Lenire, or a detailed reassessment — where our focus is worth the distance."],
      ["Do you offer specialized tinnitus treatment?", "Yes. Tinnitus care is a core focus of our practice, from thorough evaluation through management options including Lenire, tailored to your situation."],
      ["How far is your office from Morgan Hill?", "About 55 minutes north on the 101 to San Carlos. Call 650-342-9449 and we will arrange a comprehensive visit so the trip is well spent."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Life in Mountain View happens in noisy places — the restaurants along Castro Street, open offices, transit platforms, and crowded events at Shoreline. Following one voice through that kind of background is a specific challenge, and it is exactly where standard hearing aids often fall short. We test speech-in-noise performance and verify each fitting with real-ear measurement, tuning devices for the demanding, layered sound of daily life here rather than for a quiet test booth.",
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
      ["Do you treat tinnitus as well as fit hearing aids?", "We do. Tinnitus care is a core focus of our practice, including options like Lenire, alongside comprehensive hearing testing and fittings."],
      ["How far is your office from Mountain View?", "Our San Carlos office is about 25 minutes north up the 101. Call 650-342-9449 and we will find a convenient time."],
    ],
    onCaltrain: true,
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
      "Napa County is a real drive from the Peninsula — and yet patients make it. We are candid that our offices are in San Mateo and San Carlos, not in the North Bay. But some Napa Valley patients choose to travel to us for specialized care they want done right, particularly complex tinnitus treatment.",
    hook: [
      "Why some patients travel from wine country to the Peninsula",
      "For everyday hearing tests and routine hearing aids, we always encourage patients to consider a provider close to home. Where distance can be worth it is specialized care — stubborn tinnitus, Lenire treatment, difficult fittings, or a second opinion after a frustrating experience elsewhere. Patients who travel to us from Napa typically come for that kind of expertise, and we structure their visits to make the trip count: thorough evaluation, treatment, and a follow-up plan that minimizes repeat drives.",
    ],
    motif: "wine",
    localScene: [
      "From the valley floor to the Peninsula",
      "Napa County spans the city of Napa, American Canyon, Yountville, St. Helena, and Calistoga — wine country, tourism, and long rural stretches. It is genuinely far from the Peninsula, and for routine hearing care we'd point you to someone closer. But for specialized tinnitus treatment and Lenire, complex fittings, or a second opinion, some Napa Valley patients decide the expertise is worth the drive south — and when they do, we make the visit count.",
    ],
    whyHere:
      "Napa County patients who come to us are usually seeking a level of tinnitus and diagnostic expertise they could not find locally. We respect the distance by consolidating care into efficient visits and coordinating follow-up so the drive is the exception, not the routine.",
    landmarks:
      "Patients travel to our Peninsula offices from Napa, American Canyon, Yountville, St. Helena, and across the valley, generally an hour or more each way.",
    faqs: [
      ["You're far from Napa — why would I travel to you?", "For routine care, a local provider often makes sense. Patients travel to us from Napa mainly for specialized tinnitus treatment, Lenire, and complex cases, where the expertise justifies the drive. We plan visits to minimize repeat trips."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. We provide Lenire and comprehensive tinnitus care, which is one of the main reasons patients travel to us from farther parts of the Bay Area, including Napa County."],
      ["Can you coordinate care so I don't have to drive down often?", "Yes. For patients traveling a distance, we consolidate testing, treatment, and counseling into efficient visits and build a follow-up plan that limits how often you need to make the trip."],
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
      "Novato is Marin's northernmost city — more spread-out and suburban than its neighbors down the 101, with an Old Town core along Grant Avenue and the redeveloped Hamilton district on the site of the former airfield. It sits at the far end of the county from us; our Peninsula offices are roughly 70 minutes south. So we are straightforward about it: Novato patients who come our way are usually after care they can't easily find closer to home.",
    hook: [
      "Specialized care that justifies the miles",
      "For everyday hearing needs, Novato residents have options nearer at hand, and we will happily say so. Where we tend to help is the harder stuff: stubborn [tinnitus](/tinnitus/), Lenire treatment, ringing that hasn't responded to anything else, or a hearing aid fitting that has never quite sounded right. That kind of work rewards a thorough evaluation and an audiologist who sticks with it — and it is why patients make the longer drive from northern Marin.",
    ],
    motif: "civic",
    localScene: [
      "Northern Marin, at its own pace",
      "Novato is a city of neighborhoods more than a single downtown — Old Town's shops along Grant Avenue, the newer Hamilton community, Indian Valley and Bel Marin Keys, and the open space around Stafford Lake and Mount Burdell. It runs quieter and more residential than the towns closer to the bridge. People here are practical about travel; when they choose a practice an hour-plus away, it is because the specific care matters more than the convenience, and we try to honor that by making each visit thorough.",
    ],
    whyHere:
      "Novato patients generally choose us for a reason a nearer office couldn't cover — advanced [tinnitus care](/tinnitus/), Lenire, a second opinion, or a fitting that needed real expertise. They come for the depth of the workup and stay for the continuity of one audiologist over time. For routine visits, we are honest that somewhere closer may serve you just as well.",
    landmarks:
      "We are roughly 70 minutes south of Novato's Old Town along Grant Avenue, the Hamilton district, and the Stafford Lake area, down Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Novato is a long way from the Peninsula — is it really worth it?", "For routine hearing care, probably not; a closer Marin provider will save you the drive. For specialized tinnitus or Lenire treatment, a tricky fitting, or a second opinion, the patients who make the trip generally feel it pays off."],
      ["What actually happens at a first tinnitus appointment?", "We take a careful history, test your hearing and how you process sound, and rule out issues that need medical attention, then talk through options — which may include sound therapy or Lenire. The goal of the first visit is a clear picture and a real plan, not a rushed sales pitch."],
      ["How long should I budget to reach your office from Novato?", "About 70 minutes down Highway 101 and across the Golden Gate to San Mateo. Call 650-342-9449 and we will schedule enough time to make the trip count."],
    ],
    consolidatedInto: "marin-county",
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
      "Oakland is the East Bay's biggest city — a place of distinct neighborhoods, a working port, and a music and dining scene that rewards good hearing. We should be upfront: both of our offices sit across the water on the Peninsula, in San Mateo and San Carlos, so we are not the corner audiologist for most Oaklanders. What brings people over the bridge is specialized tinnitus and complex hearing care.",
    hook: [
      "A city built for listening — and a reason some cross the bay",
      "From live shows around the Fox and Paramount to loud, lively restaurants in Temescal, Oakland is full of the demanding listening situations that make hearing loss and tinnitus hardest to ignore. For everyday testing and hearing aid service, an audiologist closer to home may make more sense. But for stubborn ringing, a difficult fitting that never sat right, or a second opinion on [tinnitus care](/tinnitus/), Oakland patients do make the drive to us for the depth of that focus.",
    ],
    motif: "downtown",
    localScene: [
      "One city, many neighborhoods",
      "Oakland is really a patchwork — Rockridge and its College Avenue shops, Temescal's restaurant row, the walkers ringing Lake Merritt, the hills above Montclair, and the crowds downtown near Jack London Square. Each has its own soundscape, and each has residents whose hearing needs range from a first evaluation to advanced tinnitus management. Those who come to us usually do so on purpose, seeking a practice that concentrates on the harder problems rather than the nearest available appointment.",
    ],
    whyHere:
      "Oakland patients who choose California Hearing Center are generally after something specific: focused tinnitus treatment including Lenire, careful real-ear verification, or a fresh look at a fitting that has never felt right. They come for expertise and continuity with the same audiologist, and they accept the drive because the specialization is worth it to them.",
    landmarks:
      "From Rockridge, Temescal, Lake Merritt, or Montclair, we are roughly 35-45 minutes away via the San Mateo Bridge or the Bay Bridge to our San Mateo office.",
    faqs: [
      ["There are audiologists in Oakland — why travel to you?", "For routine testing and hearing aid maintenance, a local Oakland provider is often the practical choice. Patients cross the bay to us mainly for specialized tinnitus care, Lenire, and complex or previously unsuccessful fittings where a focused, second-opinion approach helps."],
      ["Do you treat tinnitus for East Bay patients?", "Yes. Tinnitus care is a core focus of our practice, and we see patients from across the East Bay. If ringing or buzzing is affecting your sleep or concentration, call 650-342-9449 to talk through the options."],
      ["How long is the drive from Oakland?", "Plan on roughly 35-45 minutes to our San Mateo office depending on which bridge you take and traffic. We schedule East Bay patients with that trip in mind, often combining testing and follow-up into fewer visits."],
    ],
    consolidatedInto: "alameda-county",
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
      "Oakley sits right on the Delta, where Big Break Regional Shoreline opens onto the water and old vineyards and orchards still shape the town's character. It's a quiet, out-of-the-way corner of the county — part of its appeal, and also about 75 minutes east of our Peninsula offices, which we won't dress up as a short hop.",
    hook: [
      "Delta quiet, and where the specialists are",
      "Being tucked away on the Delta is part of what makes Oakley pleasant, and also why specialized hearing care isn't around the corner. Patients here dealing with persistent tinnitus, weighing [Lenire treatment](/tinnitus/), or wrestling with hearing aids that never quite fit are the ones who make the longer drive to a focused practice. For a routine test, somewhere closer will likely serve you just as well — we're honest about that.",
    ],
    localScene: [
      "Old vines and Delta shoreline",
      "Oakley runs from the waterfront trails and fishing pier at Big Break Regional Shoreline to the Main Street core and the pockets of old-vine vineyards the area is quietly known for. It's a small, spread-out Delta town where daily life is calm but specialty services mean a drive. That's the trade-off we work with — making each visit thorough enough that patients from this far out feel the trip was worthwhile.",
    ],
    whyHere:
      "Oakley patients come to us for what's genuinely hard to find nearby: careful diagnostics, honest device recommendations, and dedicated tinnitus and Lenire care with the same audiologist each time. We reserve the drive for the complex work and say so plainly.",
    landmarks:
      "We're about 75 minutes from Big Break Regional Shoreline, downtown Oakley, and the Delta waterfront, heading west across the East Bay to our San Mateo office.",
    faqs: [
      ["Why would I drive from Oakley to the Peninsula for hearing care?", "For routine testing, a closer provider is the sensible option. Patients travel to us for specialized tinnitus treatment, Lenire, and difficult fittings — care that's worth the distance."],
      ["Do you treat tinnitus and offer Lenire?", "Yes. Our practice focuses on tinnitus, including Lenire for suitable candidates. We first evaluate what's driving it, then build a plan around your case."],
      ["Can you make the trip efficient with fewer visits?", "We try to combine testing, fitting, and follow-up for patients coming from the Delta. Call 650-342-9449 and we'll plan around the drive."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Room for careful, private care",
      "Residents here tend to prefer hearing solutions that are discreet and simply work, achieved through patient fitting rather than the flashiest device. We give each visit the time it needs — testing, programming, and real-ear verification in a calm, private setting. That unhurried attention, together with focused [tinnitus care](/tinnitus/), is what draws Orinda patients over the hill to us.",
    ],
    localScene: [
      "Theatre Square, reservoir, and canyon",
      "Orinda's character shows in the marquee of the historic Orinda Theatre at Theatre Square, the boaters and anglers at San Pablo Reservoir, the trails of Wildcat Canyon Regional Park, and the quiet homes around Lake Cascade. It's a wooded, unhurried town that values calm and quality. We match that with thorough testing, honest recommendations, and verified fittings suited to an active, outdoor life.",
    ],
    whyHere:
      "Orinda patients tend to come to us for a specific reason — a stubborn case of tinnitus, a Lenire evaluation, or a fitting a closer office couldn't get right. We answer routine questions honestly and point you to a nearer provider when that makes sense, reserving the drive over the hill for the work that genuinely benefits from a specialist's time.",
    landmarks:
      "We're about 50 minutes from Theatre Square, the San Pablo Reservoir, and Wildcat Canyon, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Why travel from Orinda when closer options exist?", "For routine care, staying local is reasonable. Patients come to us for specialized tinnitus treatment, Lenire, and the unhurried, meticulous fitting that's harder to find nearby."],
      ["Do you offer discreet hearing aids?", "Yes. We fit several low-profile and in-canal styles that stay unobtrusive. The right choice depends on your ears and hearing, which we assess in your evaluation."],
      ["Can you help with tinnitus?", "Yes. Our practice is tinnitus-focused, including Lenire for suitable candidates. We evaluate the cause first, then build a plan. Call 650-342-9449 to learn more."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Pacifica strings a series of surf-town neighborhoods along the ocean, from Sharp Park down to Linda Mar, wrapped in the marine layer and the sound of the Pacific. It is a beautiful place to live, over the ridge from the rest of the Peninsula — and the salt air and coastal damp have a direct, practical effect on hearing devices. Our San Mateo office is about twenty to twenty-five minutes over the hill.",
    hook: [
      "Salt air, marine humidity, and hearing aid moisture",
      "Pacifica's oceanfront setting means near-constant humidity and salt in the air, and moisture is the leading cause of hearing aid problems. Coastal residents tend to see it as muffled sound, dropouts, or corroded contacts. The good news is it is very manageable: moisture-resistant devices, a nightly drying routine, and regular professional cleaning keep coastal hearing aids working reliably. When a device does fail, we handle repairs quickly so you are not left without your hearing.",
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
      ["Why do my hearing aids struggle in Pacifica's coastal air?", "Salt and marine humidity let moisture build up inside hearing aids, causing muffled or intermittent sound. Moisture-resistant models, nightly drying, and regular cleaning prevent most problems, and we help you build a routine that holds up at the coast."],
      ["Is it worth driving over the hill for hearing care?", "For most Pacifica residents, yes — there are few full-service audiology options on the coast. We make visits thorough and efficient, often bundling testing, fitting, and follow-up so the trip accomplishes more at once."],
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
      "Palo Alto is where Stanford, University Avenue, and a dense cluster of technology companies meet — a city of demanding careers and packed calendars. That pace puts real demands on hearing, and it is a short 15-to-20-minute run up the 101 to our San Carlos office.",
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
    onCaltrain: true,
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
      "Petaluma wears its history openly, from the cast-iron storefronts of its downtown to the riverfront that once made it the self-styled egg capital of the world. It is the closest of the wine-country cities to us, but still about seventy-five minutes north, and our offices are on the Peninsula in San Mateo and San Carlos. Some Petaluma patients make that drive on purpose, for care they want handled by a specialist.",
    hook: [
      "Choosing a practice, not just a nearby door",
      "There is nothing wrong with seeing a hearing provider close to home for a routine test or a simple set of hearing aids, and for that we would steer you local. The reason a Petaluma patient might point the car south is a tougher problem: tinnitus that will not quiet down, Lenire treatment, a fitting that has never felt right, or a fresh opinion after a letdown elsewhere. For those cases we run a thorough workup and lay out a plan meant to limit how often you return.",
    ],
    motif: "wine",
    localScene: [
      "Iron-front downtown to the Peninsula",
      "Petaluma's character lives in its unusually intact historic core — the iron-front blocks along Petaluma Boulevard, the turning basin on the Petaluma River, and the neighborhoods spreading east and west of it. It is genuinely far from the Peninsula, and for everyday hearing care we would send you to someone nearer. For dedicated tinnitus treatment, Lenire, or a complicated fitting, some Petaluma patients weigh the specialist experience against the drive and decide it is worth it, and we make the visit earn the trip.",
    ],
    whyHere:
      "Petaluma patients who travel to us are usually looking for tinnitus and diagnostic depth they could not find nearby. We respect the seventy-five-minute drive by consolidating care into focused visits and organizing follow-up so returning is the exception rather than the rhythm.",
    landmarks:
      "Patients come south to our Peninsula offices from downtown Petaluma, the riverfront turning basin, and the east-side neighborhoods, about seventy-five minutes down Highway 101.",
    faqs: [
      ["Why would I drive from Petaluma when there are closer options?", "For routine hearing care, closer usually wins, and we will say so. Petaluma patients tend to come to us for specialized [tinnitus treatment](/tinnitus/), Lenire, and difficult fittings, where the expertise is worth the extra time. We schedule to keep repeat drives rare."],
      ["Do you provide Lenire tinnitus therapy?", "Yes. Lenire and full tinnitus care are among the main reasons North Bay patients, including from Petaluma, choose to travel to us."],
      ["Can one visit cover testing and fitting so I'm not driving back often?", "Yes. For distance patients we bundle the [evaluation](/hearing-testing/) and [fitting](/hearing-aid-fitting/) where we can, then build follow-up so you make the drive as seldom as possible."],
    ],
    consolidatedInto: "sonoma-county",
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
      "Pittsburg has long been a working waterfront city, from its steel-mill days to the marina and power plants along the New York Slough. It sits at the far northeast reach of the county, about 65 minutes from our Peninsula offices — so for Pittsburg patients we're a specialist destination rather than a quick local visit.",
    hook: [
      "A steel town's noise, years later",
      "Generations of Pittsburg work happened around loud machinery — the Columbia Steel mill, the docks, the power plants along the water. That kind of sustained industrial and trade noise can contribute to hearing loss and ringing in the ears over time. For anyone with that history, we offer thorough diagnostic [testing](/hearing-testing/) and, for those still on the job, custom-molded hearing protection — plus the tinnitus care that's harder to find out this far east.",
    ],
    localScene: [
      "Old Town and the waterfront",
      "Pittsburg centers on the Railroad Avenue storefronts of Old Town, the marina and boardwalk on the New York Slough, the restored California Theatre, and the neighborhoods spreading toward Los Medanos. It's a city with deep industrial roots, which means a lot of residents carry years of workplace noise exposure. We put that front and center — baseline testing to catch changes early, and protection for people still working around loud equipment.",
    ],
    whyHere:
      "Pittsburg patients who travel to us are typically after specialized help: a careful evaluation, custom hearing protection, or focused [tinnitus care](/tinnitus/) including Lenire. We're straightforward that routine testing can be handled closer to home, and save the longer trip for the complex work.",
    landmarks:
      "We're roughly 65 minutes from Old Town Pittsburg, the marina, and the California Theatre, driving west across the East Bay to our San Mateo office.",
    faqs: [
      ["I spent years in the mills and around loud equipment — is testing worthwhile?", "Yes. Long-term industrial noise can gradually contribute to hearing loss and tinnitus. A baseline evaluation tells you where you stand and gives a reference point for the future."],
      ["Do you fit hearing protection for people still working?", "We do. Custom-molded protection seals better and is more comfortable for all-day wear than generic plugs, which matters for workers around ongoing noise."],
      ["Why travel all the way to the Peninsula from Pittsburg?", "For routine care, a nearer provider may be the practical choice. Patients come to us for specialized tinnitus treatment, Lenire, and difficult fittings — care worth the drive."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Pleasant Hill built itself a genuine downtown — the open-air district of restaurants, plaza, and cinema — alongside the campus bustle of Diablo Valley College. It sits about 55 minutes east of our Peninsula offices, so we won't pretend to be the closest audiologist, though patients here do travel to us for specialized care.",
    hook: [
      "An independent practice, not a big-box counter",
      "From noisy dinners downtown to a lecture hall at DVC, following speech across those settings takes a fitting done right — programmed and verified with real-ear measurement, not a device grabbed off a chain-store shelf. Patients who want that methodical, independent approach are the ones who seek us out. We focus on [speech-in-noise testing](/hearing-testing/) and careful verification so hearing aids work where you actually struggle.",
    ],
    localScene: [
      "Downtown, campus, and the trail",
      "Pleasant Hill centers on the walkable Downtown Pleasant Hill district with its plaza and cinema, the busy campus of Diablo Valley College, the greenery of Pleasant Hill Park, and the neighborhoods of Gregory Gardens and Poets Corner along the Iron Horse Trail. It's a city full of everyday listening challenges. We fit and verify hearing aids to hold up in the loud spots, and build in the follow-up that keeps them performing.",
    ],
    whyHere:
      "Pleasant Hill patients choose us for careful diagnostics, honest technology guidance, and dedicated [tinnitus care](/tinnitus/) including Lenire — with the same audiologist each visit. We're clear that routine testing can be handled closer to home, and focus the drive on the specialized work.",
    landmarks:
      "We're about 55 minutes from Downtown Pleasant Hill, Diablo Valley College, and Pleasant Hill Park, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["What's different about an independent practice versus a big-box store?", "We're not tied to one manufacturer, so we recommend technology honestly and take time to verify every fitting with real-ear measurement. You also see the same audiologist for follow-up, not a rotating counter."],
      ["Will hearing aids work in a loud restaurant?", "They can, when programmed and verified for noise. We use speech-in-noise testing and real-ear measurement so devices perform in demanding settings, not only the quiet booth."],
      ["Why travel to the Peninsula from Pleasant Hill?", "For routine care, a nearer provider is reasonable. Patients come to us for specialized tinnitus treatment, Lenire, and complex fittings worth the drive."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Discreet, unhurried care for an active community",
      "Pleasanton residents tend to lead full, active lives — professional careers, wineries and golf, downtown dinners on Main Street — and want hearing that keeps pace while staying discreet. Modern near-invisible hearing aids can deliver both, but the result depends on expert fitting and verification, not the device alone. For that unhurried, private approach, or for stubborn [tinnitus care](/tinnitus/), some Pleasanton patients make the drive west; for routine needs a Tri-Valley provider may suit better.",
    ],
    motif: "downtown",
    localScene: [
      "A historic downtown and leafy neighborhoods",
      "Pleasanton centers on its charming Main Street, with the Alameda County Fairgrounds nearby, the wineries of the Livermore Valley just east, and residential enclaves like Ruby Hill and the neighborhoods around the golf clubs. It is an affluent, community-minded city where an active social calendar puts a premium on clear conversation in restaurants, clubs, and gatherings. Those who seek us out want technology matched honestly to that lifestyle.",
    ],
    whyHere:
      "Pleasanton patients choose California Hearing Center for meticulous testing, premium technology fitted to genuine need rather than a sales quota, and a real specialty in tinnitus and Lenire. Many first came for tinnitus and stayed for the continuity of seeing the same audiologist, which they find worth the longer drive.",
    landmarks:
      "From Main Street, the Fairgrounds, or the Ruby Hill area, our San Mateo office is roughly 45 minutes west through the bridges.",
    faqs: [
      ["Why travel from Pleasanton for hearing care?", "For routine testing, a Tri-Valley audiologist is often more convenient. Pleasanton patients come to us for specialized tinnitus treatment, Lenire, and discreet, expertly verified fittings where the specialization justifies the trip."],
      ["Can you fit truly discreet hearing aids?", "Yes. We fit several invisible and near-invisible styles, choosing the right one for your ear anatomy and hearing needs, then verifying performance with real-ear measurement so discretion never costs you clarity."],
      ["How far is your office from Pleasanton?", "Roughly 45 minutes west via the bridges to San Mateo. We group testing and follow-up where possible so the drive accomplishes more each visit."],
    ],
    consolidatedInto: "alameda-county",
  },
  "portola-valley": {
    name: "Portola Valley",
    county: "San Mateo County",
    region: "peninsula-south",
    nearestOffice: "San Carlos",
    approxDrive: "about 18 minutes from our San Carlos office",
    distanceTier: "mid",
    geo: { lat: 37.3841, lng: -122.2352 },
    lede:
      "Portola Valley tucks into the foothills below Windy Hill and Coal Mine Ridge, a small, semi-rural town of open space, oak-studded hills, and homes set back among the trees. Residents choose it for quiet and privacy, and they are accustomed to a short drive for services — our San Carlos office is about eighteen minutes down the hill.",
    hook: [
      "Unhurried, discreet hearing care",
      "For many Portola Valley residents, the priorities are hearing that keeps pace with an active outdoor and social life and technology that stays out of sight. Today's invisible and receiver-in-canal hearing aids deliver both, though the real difference comes from expert fitting and real-ear verification rather than the device on its own. We take the time to program, measure, and refine, in a private, unhurried setting that matches the calm of the town itself.",
    ],
    motif: "estate",
    localScene: [
      "A town among the foothills",
      "Portola Valley spreads from its Town Center and the Ladera neighborhood along Portola Road and Alpine Road, up toward the Windy Hill Open Space Preserve, Coal Mine Ridge, and the trails that draw hikers and riders from across the Peninsula. It is deliberately rural, with no commercial strip to speak of. For its residents we offer discreet technology, meticulous fittings, and the personal attention of an independent practice, an easy drive down to our San Carlos office.",
    ],
    whyHere:
      "Portola Valley patients choose us for thorough testing, premium technology matched honestly to their needs, and specialized tinnitus care — with the continuity of the same audiologist each visit. The care is private, patient, and precise, worth the short trip down the hill.",
    landmarks:
      "We are about eighteen minutes from Portola Valley's Town Center, Ladera, and the trails at Windy Hill, heading down Alpine Road toward our San Carlos office.",
    faqs: [
      ["Do you offer discreet or invisible hearing aids?", "Yes — we fit several invisible and near-invisible styles, including deep-canal options. The best choice depends on your ear anatomy and hearing needs, which we assess carefully during your evaluation."],
      ["Can I expect a private, unhurried visit?", "That is how we work. Portola Valley patients value the calm, confidential pace of an independent practice, with time to ask questions and refine results across visits."],
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
      "Redwood City — whose old slogan, “Climate Best by Government Test,” still appears on the downtown arch — sits directly next to our San Carlos office. For most Redwood City residents we are the closest independent audiology practice, just minutes down Laurel Street's extension into town.",
    hook: [
      "A short trip for care that keeps up with you",
      "Redwood City has transformed in the last decade, from the revived downtown theaters and restaurants to the tech campuses near Seaport and the Port of Redwood City. Whether you are still working in a busy open-plan office or enjoying retirement near Roosevelt or Mount Carmel, hearing well in real environments is the goal — and being minutes from your audiologist means adjustments happen when you need them, not weeks later.",
    ],
    motif: "downtown",
    localScene: [
      "A revived downtown, right next door",
      "Redwood City's downtown — Courthouse Square, the restored Fox Theatre, the restaurants along Broadway — has become one of the Peninsula's liveliest, while neighborhoods like Roosevelt, Mount Carmel, Emerald Hills, and the waterfront Redwood Shores each keep their own character. Whether you're catching a show downtown, working a campus near Seaport, or enjoying a quieter retirement in the hills, hearing well depends on devices tuned to your rooms, not a factory default. Being minutes away at our San Carlos office means we can adjust them whenever life changes.",
    ],
    whyHere:
      "Redwood City patients choose us for thorough testing, honest technology recommendations, and tinnitus expertise — all a few minutes from home at our San Carlos office. Continuity matters here: you see the same audiologist who knows your history and your goals.",
    landmarks:
      "We are an easy drive from downtown Redwood City, Roosevelt, Mount Carmel, and the Seaport/Port area, generally under 10 minutes to the San Carlos office.",
    faqs: [
      ["Which office is closest to Redwood City?", "Our San Carlos office at 1008 Laurel Street is closest — about 8 minutes for most Redwood City residents. Call 650-342-9449 to schedule."],
      ["Do you treat tinnitus in Redwood City?", "Yes. We provide comprehensive tinnitus evaluation and treatment, including Lenire, for patients throughout Redwood City and the mid-Peninsula."],
    ],
    onCaltrain: true,
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
      "Richmond wraps around the north bay with a long, working shoreline — the Rosie the Riveter WWII Home Front park, Point Richmond's old neighborhoods, the refinery and port beyond. Our audiology offices are over on the Peninsula, roughly 45 minutes across the bay, so we're honest that we're a destination rather than a neighborhood stop for Richmond patients.",
    hook: [
      "Industrial work and a lifetime of noise",
      "Richmond's history runs through the WWII Kaiser Shipyards and the industry that still defines its waterfront — the refinery, the port, the rail yards. Heavy industry and the trades come with sustained loud-noise exposure, which over the years can contribute to hearing loss and tinnitus. If you've spent a career around that kind of noise, a thorough baseline [hearing evaluation](/hearing-testing/) is worth it, and we fit custom hearing protection for workers still on the job.",
    ],
    localScene: [
      "A working shoreline and its neighborhoods",
      "From the Craneway Pavilion in the historic Ford Assembly Building to the trails at Miller/Knox Regional Shoreline, the marina at Marina Bay, and the leafy streets of Point Richmond, this is a city shaped by its bayfront and its industry. Many residents have spent working lives around loud machinery, so we put real weight on baseline testing, honest results, and protection for those still exposed — the groundwork for catching changes early.",
    ],
    whyHere:
      "Richmond patients who come to us are usually after something specific — a careful diagnostic workup, custom hearing protection, or specialized [tinnitus care](/tinnitus/) including Lenire. We're clear that for a simple test a closer provider may do, and reserve the drive for the care that benefits from our focus.",
    landmarks:
      "We're roughly 45 minutes from Point Richmond, Marina Bay, and the Craneway Pavilion, crossing the bay to our San Mateo office.",
    faqs: [
      ["I worked around heavy industry for years — should I get tested?", "It's a good idea. Long-term loud-noise exposure can contribute to hearing loss and tinnitus, often gradually. A baseline evaluation gives you a clear picture and something to compare against later."],
      ["Do you make custom hearing protection for people still working?", "Yes. We fit custom-molded protection for industrial and trade workers, which fits better and protects more reliably than generic foam plugs."],
      ["Is the drive across the bay worth it from Richmond?", "For routine care, a local option may be simpler. Patients travel to us for specialized tinnitus treatment, Lenire, and complex fittings — the depth of care that justifies the trip."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Rio Vista is a small Sacramento River town deep in the Delta, a boating and fishing community set among the sloughs and drawbridges at the county's far eastern reach. It's a long way from the Peninsula — our offices in San Mateo and San Carlos are around 90 minutes southwest — so for routine hearing care, a provider closer to the Delta will usually make far more sense.",
    hook: [
      "When the drive out of the Delta is worth it",
      "We won't pretend distance doesn't matter. For everyday hearing tests and standard hearing aids, stay close to home. The trip to the Peninsula pays off only for specialized care — stubborn [tinnitus](/tinnitus/), Lenire treatment, a fitting that's been difficult, or a careful second opinion. Rio Vista patients who make the drive come for that expertise, and we shape their visit so one trip out of the Delta covers evaluation, treatment, and a follow-up plan.",
    ],
    motif: "bayside",
    localScene: [
      "A river town among the sloughs",
      "Rio Vista lives on the water — the marina and waterfront along the Sacramento River, the drawbridge carrying Highway 12, and the surrounding Delta islands laced with sloughs and boat launches. All that river and Delta air keeps humidity high year-round, and moisture is the single most common cause of hearing aid problems. For Delta patients who wear hearing aids, moisture-resistant devices and a drying routine really matter — and for more complex needs, some choose to travel out to the Peninsula for specialized care.",
    ],
    whyHere:
      "Rio Vista patients who come to us are generally after tinnitus and diagnostic expertise they couldn't find in the Delta. We respect the long haul by consolidating everything into thorough, efficient visits and coordinating follow-up so the drive stays occasional.",
    landmarks:
      "Patients travel to our Peninsula offices from Rio Vista's waterfront, marina, and the surrounding Delta islands, generally around 90 minutes southwest by way of Highway 12 and I-80.",
    faqs: [
      ["Rio Vista's deep in the Delta — why travel to you?", "For routine care, a closer provider usually makes the most sense. Rio Vista patients come to us mainly for specialized tinnitus care, Lenire, and complex fittings where the expertise justifies the drive. We plan visits to keep repeat trips low."],
      ["Does the Delta's damp climate affect hearing aids?", "Yes. The constant river and Delta humidity lets moisture build up inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices and nightly drying prevent most of the trouble."],
      ["Can you make one long trip accomplish more?", "For distant patients, we combine testing, treatment, and counseling into a single efficient visit and build a follow-up plan that limits how often you need to come down. Call 650-342-9449 to arrange it."],
    ],
    consolidatedInto: "solano-county",
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
      "San Bruno sits right at the edge of San Francisco International Airport, tucked between San Bruno Mountain and the bay. It is a working, family-rooted city — and for a lot of residents, work has meant years around aircraft, ground equipment, and industrial noise. Our San Mateo office is about twelve minutes south on the 101.",
    hook: [
      "Occupational noise and protecting the hearing you rely on",
      "SFO and its surrounding operations employ thousands of San Bruno-area residents, and jobs on the ramp, in maintenance, or around ground equipment can involve significant noise exposure over a career. Prolonged occupational noise can contribute to hearing loss, which is why baseline testing and custom hearing protection matter for people who work in loud environments. If you have spent years around aircraft or machinery, a thorough [hearing evaluation](/hearing-testing/) establishes where you stand and helps you protect what you have.",
    ],
    motif: "airport",
    localScene: [
      "A city between the mountain and the runways",
      "San Bruno runs from the trails of San Bruno Mountain State Park down through the neighborhoods off San Bruno Avenue and Cherry, past Skyline College and out toward the airport. It is a city of shift workers, tradespeople, and longtime families — many with a real occupational-noise history. For those patients we focus on honest testing, custom noise protection for the job, and hearing aids fine-tuned for busy, noisy surroundings, an easy drive down the 101 to San Mateo.",
    ],
    whyHere:
      "San Bruno patients come to us for careful, no-pressure testing and for real expertise in noise-related hearing concerns and tinnitus — not a quick sale. We take the time to explain your results, recommend protection that fits your work, and match technology honestly to how and where you listen.",
    landmarks:
      "We are a short drive from San Bruno's Skyline College, San Bruno Avenue, and the neighborhoods below San Bruno Mountain, straight down the 101 to our San Mateo office.",
    faqs: [
      ["I worked around aircraft and machinery for years. Should I get tested?", "Yes. Long-term occupational noise can contribute to gradual hearing loss and tinnitus, often before you notice it in conversation. A baseline evaluation shows where you stand and guides protection going forward."],
      ["Do you make custom hearing protection?", "We do. Custom earplugs and protection are shaped to your ears for jobs, music, and other loud settings, and they are far more effective and comfortable than generic foam plugs."],
      ["How close is your office to San Bruno?", "Our San Mateo office is about twelve minutes south of San Bruno on the 101. Call 650-342-9449 to schedule."],
    ],
    onCaltrain: true,
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
      "San Carlos — the “City of Good Living” — is one of our two home offices. We see patients at 1008 Laurel Street, in the middle of the downtown Laurel Street district, so a hearing appointment fits easily around lunch, errands, or a stop at the farmers' market.",
    hook: [
      "A downtown office built around long-term hearing care",
      "Living minutes from your audiologist makes the ongoing side of hearing care effortless. Rechargeable hearing aids that need a firmware update, a wax guard change, a tinnitus check-in, or a warranty repair are all quick visits rather than a project. For San Carlos residents, that convenience is often the difference between hearing aids that get worn every day and ones that end up in a drawer.",
    ],
    motif: "downtown",
    localScene: [
      "A San Carlos practice that knows the neighborhoods",
      "The White Oaks and Howard Park neighborhoods, the mid-century Eichler tracts, and the hillside homes toward Crestview and Devonshire each bring their own patients through our doors. San Carlos also sits beside its own small airport and the Hiller Aviation Museum, and along the El Camino and 101 corridors — settings where a baseline hearing test and, when needed, custom protection make real sense. Being downtown on Laurel Street means we see our patients around town, which keeps care personal.",
    ],
    whyHere:
      "San Carlos patients choose us for careful, unhurried evaluations and honest technology guidance right in their own downtown. We handle everything from first-time hearing tests to complex tinnitus care and Lenire treatment, and we see patients across every stage of life, from working professionals to retirees.",
    landmarks:
      "The office is walkable from the Laurel Street shops and a short drive from White Oaks, Howard Park, and the Eichler neighborhoods, with San Carlos Airport and the 101 just to the east.",
    faqs: [
      ["Where is your San Carlos office located?", "We are at 1008 Laurel Street, 94070, in downtown San Carlos. Reach us at 650-342-9449 for hours and parking."],
      ["Can I be seen at either the San Mateo or San Carlos office?", "Yes. Many patients pick whichever office is more convenient on a given day. Your records and hearing aid settings are shared between both locations."],
    ],
    onCaltrain: true,
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
      "San Francisco is both a city and a county — a single dense square of hills, neighborhoods, and microclimates that changes character block to block. Patients come to us from every corner of it, from Bernal Heights to the Presidio, and our San Mateo office sits just 20-30 minutes south, an easy reach for the whole city-and-county.",
    hook: [
      "One county, many microclimates — and what that means for hearing aids",
      "Few places pack as many climates into as small an area as San Francisco. The western avenues live under fog and marine damp, while the sheltered eastern neighborhoods stay warmer and drier. That matters more than most people realize: humidity is the leading cause of hearing aid trouble, so patients on the foggy side of the county benefit from moisture-resistant technology and a drying routine, while everyone benefits from fittings that are verified and maintained rather than sold and forgotten.",
    ],
    motif: "downtown",
    localScene: [
      "Care across the whole city",
      "Because it's a consolidated city-and-county, San Francisco has no suburbs of its own — just neighborhoods, and we see patients from across all of them. Professionals downtown and in the Financial District navigate loud, reverberant rooms all day; families out in the Sunset, the Richmond, and along the coast contend with fog and damp; and residents in the Mission, Bernal Heights, and the southern districts of Excelsior and Visitacion Valley are the quickest drive to us. We tailor each fitting to the neighborhoods and rooms a patient actually spends time in.",
    ],
    whyHere:
      "Across the whole of San Francisco, patients choose us for careful diagnostics, technology matched honestly to their needs, and a level of [tinnitus](/tinnitus/) and diagnostic expertise that's the exception, not the rule. The continuity of seeing the same audiologist every visit is a big part of why city patients keep making the short trip south.",
    landmarks:
      "From anywhere in the city-and-county — the Marina and Pacific Heights, the Mission and Bernal Heights, the Sunset and the southern districts — we're roughly 20-30 minutes south to our San Mateo office.",
    faqs: [
      ["You cover the whole city and county of San Francisco?", "Yes. San Francisco is a single city-and-county with no separate towns, and we see patients from neighborhoods across all of it. Our San Mateo office is about 20-30 minutes south of most of the city."],
      ["Does the neighborhood I live in change what hearing aids I need?", "It can. Patients in the foggy western districts get more value from moisture-resistant devices and drying routines, while those in noisy central neighborhoods benefit most from speech-in-noise tuning. We fit for your specific environment."],
      ["Can I get specialized tinnitus care coming from the city?", "Yes. Comprehensive tinnitus care, including Lenire, is one of the main reasons San Francisco patients travel to us. Call 650-342-9449 to arrange an evaluation."],
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
      "San Francisco packs an enormous variety of listening environments into a compact seven-by-seven miles — echoing lobbies downtown, loud South of Market restaurants, foggy avenues out west, and quiet residential blocks in between. That range is exactly why good hearing matters here, and our San Mateo office is a straightforward 20-to-30-minute drive south on the 101 or 280, closer than many city residents expect.",
    hook: [
      "City listening, and the case for an independent audiologist",
      "A day in San Francisco can move from a noisy SoMa lunch to a conference room in the Financial District to a quiet dinner in Noe Valley — each demanding something different from your hearing. Getting that right takes more than picking a device off a shelf. We do speech-in-noise testing and real-ear verification so your [hearing aids](/hearing-aid-fitting/) are tuned to how you actually live, and as an independent practice we fit the technology that fits you, not whatever a big-box counter happens to stock.",
    ],
    motif: "downtown",
    localScene: [
      "From the fog belt to the waterfront",
      "San Francisco's neighborhoods each listen differently. The Sunset and the Richmond sit under the marine layer for much of the year, and that persistent damp is hard on hearing aids — moisture-resistant devices and a drying routine matter out in the avenues. Downtown, the Financial District, SoMa, and Union Square throw crowded, reverberant rooms at you. And the city's southern edge — the Excelsior, Ingleside, and Visitacion Valley — is closest to us, a short hop down the 280. Wherever in the city you live, we tune for the rooms you spend time in.",
    ],
    whyHere:
      "San Francisco patients come to us for meticulous testing, honest technology recommendations, and specialized [tinnitus care](/tinnitus/) that can be hard to find in a busy city practice. Many first drove down for a stubborn tinnitus problem or a second opinion and stayed because they see the same audiologist every visit.",
    landmarks:
      "We are roughly 20-30 minutes from the Sunset, the Mission, downtown, and the city's southern neighborhoods, down the 101 or 280 to our San Mateo office, at 88 N. San Mateo Drive. We have no office in San Francisco. Caltrain's schedule tables show sample San Mateo-to-San Francisco trips of about 23 to 29 minutes (checked October 2026).",
    faqs: [
      ["Where can I get a hearing test or hearing aids near San Francisco?", "We have no office in San Francisco. Our San Mateo office, at 88 N. San Mateo Drive, offers hearing tests, hearing aid fittings and tinnitus care for San Francisco patients, and our San Carlos office is at 1008 Laurel Street. Call 650-342-9449 to book."],
      ["Why do my hearing aids act up in the Sunset and Richmond?", "Those neighborhoods sit under the fog belt, and the constant marine humidity lets moisture build up inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices, nightly drying, and regular cleaning prevent most of it."],
      ["Is it worth driving down from the city instead of finding someone in San Francisco?", "For routine care, plenty of city residents make the short trip south for our testing standards and tinnitus focus. It's 20-30 minutes down the 101 or 280, and we make each visit thorough so it's worth the drive."],
      ["Do you test hearing for noisy restaurants and meetings?", "Yes. We do speech-in-noise testing and real-ear verification specifically so your hearing aids perform where San Franciscans struggle most — loud restaurants, open offices, and busy rooms. Call 650-342-9449 to book."],
    ],
    onCaltrain: true,
    metaTitle: "Hearing Test and Hearing Aids for San Francisco Patients",
    metaDescription: "No office in San Francisco: our San Mateo office offers hearing tests, hearing aids and tinnitus care for city patients. Call 650-342-9449.",
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
      "San Jose is the Bay Area's largest city — a sprawl of distinct neighborhoods from Willow Glen to Almaden, downtown to Japantown, each with its own character. It has audiology options of its own, and our Peninsula offices sit about 40 minutes north, so the San Jose residents who travel to us are the ones seeking specialized care rather than the closest door.",
    hook: [
      "Specialized tinnitus and complex hearing care",
      "In a city this size, everyday hearing needs are well covered, so patients tend to come to us for the difficult cases: persistent [tinnitus](/tinnitus/) that has not responded to other approaches, fittings that never sounded right, or a rigorous second opinion. Our practice is organized around exactly that work — deep diagnostics, real-ear-verified fittings, and tinnitus-focused treatment including Lenire — which is what makes a longer drive north worthwhile.",
    ],
    motif: "downtown",
    localScene: [
      "One city, many neighborhoods",
      "San Jose is really a collection of communities — the Rose Garden and Willow Glen, Almaden and Cambrian, Japantown and the downtown core near San Pedro Square and Santana Row. Across all of them, life is busy and loud, from arena events to crowded restaurants, and clear speech in noise is the shared challenge. For San Jose patients who make the trip, we focus on the harder problems: tinnitus, complex fittings, and verified clarity in demanding sound.",
    ],
    whyHere:
      "San Jose patients choose us over closer providers when the situation is specialized — intractable tinnitus, a device that failed to satisfy, or a thorough reassessment. We are upfront that for routine testing and maintenance, staying in the South Bay is often the practical choice.",
    landmarks:
      "We are about 40 minutes from downtown San Jose, Santana Row, Willow Glen, and the Rose Garden, north via the 101 or 280 to our San Carlos office.",
    faqs: [
      ["There are audiologists in San Jose — why come to you?", "For routine care, a local office may be more convenient. Patients travel to us for specialized help: complex tinnitus, Lenire, difficult fittings, and detailed second opinions, where our focus makes the extra distance count."],
      ["My tinnitus hasn't improved with other treatments. Can you help?", "Often, yes. Tinnitus is a central focus of our practice, and we tailor management — including options like Lenire — to your specific situation after a full evaluation."],
      ["How far is your office from San Jose?", "Roughly 40 minutes north on the 101 or 280 to San Carlos, depending on your neighborhood. Call 650-342-9449 and we will schedule a comprehensive visit."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "San Leandro patients choose California Hearing Center for careful diagnostic testing, honest recommendations rather than upsells, and a real focus on tinnitus and Lenire treatment. The relative closeness of the San Mateo Bridge, plus continuity with one dedicated audiologist, makes the trip an easy call for those seeking specialized care.",
    landmarks:
      "From downtown San Leandro, the marina, or the Estudillo and Broadmoor neighborhoods, our San Mateo office is roughly 30-35 minutes over the San Mateo Bridge.",
    faqs: [
      ["Could my old job have affected my hearing?", "Long-term exposure to loud machinery, tools, or engines can contribute to hearing loss and tinnitus over time. A full evaluation shows what has changed and whether hearing aids or tinnitus therapy would help."],
      ["Why come to you rather than a closer clinic?", "For routine care, staying local is reasonable. San Leandro patients travel to us mainly for specialized tinnitus treatment, Lenire, and complex fittings — and the San Mateo Bridge keeps that trip relatively short."],
      ["How far is your office from San Leandro?", "Roughly 30-35 minutes to San Mateo via the bridge. Call 650-342-9449 to set up a visit that fits your schedule."],
    ],
    consolidatedInto: "alameda-county",
  },
  "san-mateo-county": {
    name: "San Mateo County",
    county: "San Mateo County",
    region: "peninsula-core",
    nearestOffice: "San Mateo",
    approxDrive: "both of our offices are in San Mateo County — San Mateo and San Carlos",
    distanceTier: "near",
    geo: { lat: 37.56, lng: -122.36 },
    lede:
      "San Mateo County is our home. Both of our offices sit right here on the Peninsula — one in San Mateo, one in San Carlos, about eight minutes apart — which means most of the county is a short, familiar drive from full-service audiology. From the foggy coast to the bayside cities to the wooded estate towns, we care for patients across every corner of the county.",
    hook: [
      "One county, many listening environments",
      "San Mateo County is remarkably varied, and so are its hearing needs. The coast and fog belt bring marine humidity that is hard on hearing aids; the airport and industrial north county carry occupational noise; the biotech and office corridors demand clear hearing in meetings and noisy rooms; and the quiet estate towns call for discreet, unhurried care. Rather than a one-size-fits-all approach, we tailor testing, technology, and follow-up to where you actually live, work, and listen.",
    ],
    motif: "civic",
    localScene: [
      "Serving the whole Peninsula, from two central offices",
      "Our two offices put us within easy reach of the county's core — San Mateo, Burlingame, Hillsborough, San Carlos, Belmont, Foster City, and Redwood City — while patients also come to us from the north county cities of Daly City, South San Francisco, and San Bruno, the coastside communities of Pacifica and Half Moon Bay over Highway 92, and the southern estate towns of Atherton, Woodside, and Portola Valley. Wherever you are in San Mateo County, one of our offices is a straightforward drive.",
    ],
    whyHere:
      "Across the county, patients choose us for real diagnostic depth, honest technology recommendations, and specialized tinnitus care — including Lenire — with the continuity of the same audiologist at every visit. As an independent practice with two convenient locations, we offer the thoroughness and personal attention that a big-box counter cannot. Our pages for [San Mateo](/areas-we-serve/san-mateo/) and [San Carlos](/areas-we-serve/san-carlos/) describe the two towns where our offices are.",
    landmarks:
      "Our San Mateo office is at 88 N. San Mateo Drive and our San Carlos office is at 1008 Laurel Street, about eight minutes apart and central to the county from the coast to the bay.",
    faqs: [
      ["Which of your two offices should I visit?", "Whichever is more convenient — San Mateo or San Carlos, about eight minutes apart. Both offer full-service testing, fittings, tinnitus care, and repairs. Call 650-342-9449 and we will help you choose."],
      ["Do you serve the whole of San Mateo County?", "Yes. Patients come to us from the coast, the north county, the bayside cities, and the southern estate towns. Both offices sit centrally on the Peninsula, so most of the county is a short drive."],
      ["What makes an independent county practice worth it?", "You get comprehensive [hearing testing](/hearing-testing/), technology chosen for your needs rather than a limited lineup, verified fittings, and specialized tinnitus care — all with continuity of care from one audiologist who knows your history."],
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
      "Because we are based in San Mateo, follow-up is easy: a quick hearing-aid cleaning, a fine-tuning after a noisy weekend, or a fresh set of domes rarely means rearranging your day. That proximity matters more than people expect, because hearing care is not one appointment — it is an ongoing relationship of small adjustments that add up to hearing well in real life.",
    ],
    motif: "civic",
    localScene: [
      "Rooted in the neighborhoods we serve",
      "From Baywood and San Mateo Park to Hayward Park, Bay Meadows, and the busy Hillsdale district, San Mateo is a city of distinct neighborhoods — and of distinct listening challenges, from quiet residential streets to the constant hum near the 92/101 interchange and Hillsdale Shopping Center. We know these settings because we live and work here, and we tune hearing aids for the places our patients actually spend their days, whether that's Central Park on a Saturday or a loud lunch spot downtown on B Street.",
    ],
    whyHere:
      "San Mateo patients come to us for the full range of care under one roof — diagnostic hearing evaluations, hearing aid fittings with real-ear verification, tinnitus and Lenire treatment, earwax removal, and repairs — without navigating a large hospital system. Many were referred by a neighbor or family member who is already a patient.",
    landmarks:
      "We are easy to reach from Hillsdale, Baywood, Aragon, and the Bay Meadows and Hayward Park neighborhoods, with parking right at the office.",
    faqs: [
      ["Where exactly is your San Mateo office?", "Our San Mateo office is at 88 N. San Mateo Drive, 94401, near downtown and Central Park. Call 650-342-9449 for directions or parking details."],
      ["Do I need a referral to be seen in San Mateo?", "Most hearing evaluations and hearing aid consultations do not require a physician referral. If your insurance plan requires one, our team can walk you through it before your visit."],
    ],
    onCaltrain: true,
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
      "Straightforward, specialized care across the bay",
      "Everyday life in San Pablo runs through plenty of noisy places, and hearing well in them takes a careful fitting rather than a one-size guess. We're upfront that we're across the bay, not around the corner — but for thorough [testing](/hearing-testing/), specialized tinnitus work, and fittings verified with real-ear measurement, San Pablo patients do make the trip, and we make each visit worth it.",
    ],
    localScene: [
      "A dense city along San Pablo Avenue",
      "San Pablo packs a lot into a small footprint — the San Pablo Avenue commercial spine, Davis Park, the creekside greenery of Wildcat Creek, and the shops around San Pablo Towne Center. It's a busy, urban setting full of everyday listening demands. We fit and verify hearing aids to hold up across those environments, and keep up the follow-up care that makes devices last and keep working.",
    ],
    whyHere:
      "San Pablo patients who come to us are usually after something specific — a meticulous evaluation, honest device guidance, or dedicated [tinnitus care](/tinnitus/) including Lenire. For a simple test we'll gladly say a closer provider may do; we're here for the specialized cases.",
    landmarks:
      "We're roughly 50 minutes from San Pablo Avenue, Davis Park, and San Pablo Towne Center, crossing the bay to our San Mateo office.",
    faqs: [
      ["Why travel across the bay from San Pablo?", "For routine care, a local provider is the practical choice. Patients come to us for specialized tinnitus treatment, Lenire, second opinions, and difficult fittings — the depth of care worth the drive."],
      ["Do you treat tinnitus?", "Yes. Our practice is tinnitus-focused, including Lenire for suitable candidates. We evaluate what's driving the ringing, then build a management plan around it. Call 650-342-9449 to learn more."],
      ["Will hearing aids help in noisy, everyday settings?", "They can, when they're fit and verified properly. We use speech-in-noise testing and real-ear measurement so devices perform in busy places, not just the exam room."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "San Rafael is Marin's county seat and its oldest city, built around Mission San Rafael Arcángel and the walkable stretch of Fourth Street downtown. It is a genuine city with theaters, restaurants, and civic life — and our offices sit down on the Peninsula, roughly an hour north over the Golden Gate from us. We are honest about that drive: San Rafael patients come to us on purpose, usually for specialized care.",
    hook: [
      "One independent practice, every listening environment",
      "A day in San Rafael moves through very different sound: a quiet county office, a busy lunch spot on Fourth Street, a crowded event at the Marin Center. Hearing well across all of them takes more than an off-the-shelf device from a big-box counter. We test how you hear speech in noise, verify each fitting with real-ear measurement, and tune for the rooms you actually spend time in — the kind of unhurried, [individualized fitting](/hearing-aid-fitting/) an independent practice is built to provide.",
    ],
    motif: "downtown",
    localScene: [
      "A county seat with a real downtown",
      "San Rafael packs a lot into a small footprint — the Fourth Street corridor, the Mission and Gerstle Park, the Montecito and Dominican neighborhoods, the Frank Lloyd Wright civic center out toward the freeway, and the tidal marsh at China Camp. Patients here tend to value an independent audiologist who knows them by name over a rotating retail counter. Because the trip south is a real one, we make each visit count, bundling testing, fitting, and follow-up so a single drive over the bridge does the work of several.",
    ],
    whyHere:
      "San Rafael patients typically find us for something specific: complex [tinnitus care](/tinnitus/), Lenire treatment, a difficult fitting no one else has solved, or a second opinion they trust. They stay because we take the time to get it right and they see the same audiologist each visit. For routine cleanings and basic checks, a Marin provider may be more convenient — and we will tell you so.",
    landmarks:
      "We are roughly an hour south of San Rafael's Fourth Street, the Marin Civic Center, and the Gerstle Park and Montecito neighborhoods, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why would I drive from San Rafael all the way to the Peninsula?", "Most people don't come to us for routine care — they come for specialized tinnitus treatment, Lenire, or a fitting that has been difficult elsewhere. If that describes you, the trip is usually worth it; if you just need a quick clean-and-check, a closer Marin office may serve you better."],
      ["Can you help if my hearing aids sound fine in quiet but not in restaurants?", "Yes — that is one of the most common reasons people see us. We test your speech understanding in background noise and use real-ear measurement to verify the settings, then fine-tune for the noisy rooms you actually spend time in."],
      ["How long is the drive from San Rafael?", "Plan on about an hour down Highway 101 and over the Golden Gate to our San Mateo office. Call 650-342-9449 and we will schedule enough time so one visit accomplishes as much as possible."],
    ],
    consolidatedInto: "marin-county",
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
      "San Ramon is built around Bishop Ranch, the sprawling business park home to corporate headquarters and thousands of office workers, with the newer City Center giving the city a walkable downtown. It sits about 50 minutes east of our Peninsula offices, so we're honest that we're a bit of a haul — but professionals here do make the drive for focused care.",
    hook: [
      "Hearing at work in Bishop Ranch",
      "Days full of meetings, conference calls, and open-plan offices are demanding listening environments, and missing words there carries a real professional cost. This is where an off-the-shelf device tends to fall short. We focus on [speech-in-noise testing](/hearing-testing/) and real-ear verification so hearing aids perform in the conference room and the crowded lunch spot — not just in a quiet booth — with discreet styles that suit a corporate setting.",
    ],
    localScene: [
      "A business hub with a new downtown",
      "San Ramon runs from the office towers and campuses of Bishop Ranch to the shops and plaza of City Center Bishop Ranch, the historic Forest Home Farms, and the greens of Central Park along the Iron Horse Trail. It's a working, professional city where a lot of hearing happens in busy offices and restaurants. We fit and verify for exactly those settings, so you stay sharp in the rooms where it counts.",
    ],
    whyHere:
      "San Ramon patients come to us for careful diagnostics, technology tuned to demanding work environments, and specialized [tinnitus care](/tinnitus/) including Lenire. We're candid that routine testing can be handled closer to home, and focus the longer trip on the care that benefits from our depth.",
    landmarks:
      "We're about 50 minutes from Bishop Ranch, City Center, and Central Park, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Can hearing aids really help in open-plan offices and meetings?", "Yes, when they're fit for noise. We use speech-in-noise testing and real-ear measurement to program devices for demanding work settings, and choose directional features that help you follow conversation."],
      ["Why travel from San Ramon instead of going local?", "For a routine test, local is fine. Patients make the trip for specialized tinnitus treatment, Lenire, and precise fittings — the depth of care worth the drive."],
      ["Are there discreet hearing aids suited to a professional setting?", "Yes. We fit several low-profile and in-canal styles that stay unobtrusive in meetings; the best fit depends on your ears and hearing, which we assess in your evaluation."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Santa Clara County is the heart of Silicon Valley — a broad expanse from Palo Alto and Mountain View through San Jose and out to Gilroy, holding tech campuses, foothill towns, and farm country all at once. Our two offices sit just north of the county line on the Peninsula, and patients travel here from across the South Bay for specialized hearing and tinnitus care.",
    hook: [
      "A specialized practice patients travel across the county to reach",
      "The county is well supplied with everyday audiology, so the people who come to us from across it are usually seeking something more focused: relief from persistent [tinnitus](/tinnitus/) that has resisted other approaches, fittings that finally perform in noise, Lenire treatment, or a rigorous second opinion. Our practice is built around exactly that kind of problem-solving, with deep diagnostics and real-ear-verified fittings. For routine testing and maintenance, a provider in your own city is often the practical choice, and we will say so.",
    ],
    motif: "civic",
    localScene: [
      "From the Peninsula's edge to the southern valley",
      "Santa Clara County spans a remarkable range — the tech corridors of Palo Alto, Mountain View, and Cupertino; the affluent foothill towns of Los Altos Hills, Saratoga, and Los Gatos; the big-city neighborhoods of San Jose; and the farm country around Morgan Hill and Gilroy. Listening challenges shift across that map, from demanding open offices to noisy job sites to lively downtowns. Whichever corner you are in, we focus on the harder cases: tinnitus, complex fittings, and verified clarity in real-world noise.",
    ],
    whyHere:
      "Patients across Santa Clara County choose us for depth rather than proximity — a tinnitus-focused practice with meticulous, verified fittings and the continuity of one familiar audiologist. Many first traveled up the Peninsula for a problem no nearer office had solved, and stayed for the rest of their care. Our pages for [Campbell](/areas-we-serve/campbell/), [Gilroy](/areas-we-serve/gilroy/) and [Milpitas](/areas-we-serve/milpitas/) give the drive time to our San Carlos office.",
    landmarks:
      "We draw patients from Palo Alto and Mountain View in the north to San Jose, Los Gatos, Morgan Hill, and Gilroy in the south, all reached via the 101 and 280 to our San Carlos office.",
    faqs: [
      ["Do you serve the whole of Santa Clara County?", "Yes. Patients come to us from across the county — the Peninsula-adjacent cities, the South Bay, the foothill towns, and the southern valley — most often for specialized tinnitus and complex hearing care."],
      ["It's a long way from parts of the county. Is it worth it?", "For routine hearing checks, a provider in your own area may be more practical. People travel to us for specialized care — persistent tinnitus, difficult fittings, Lenire, or a thorough second opinion — where our focus makes the distance worthwhile."],
      ["How do I reach your office from the South Bay?", "Our San Carlos office is north on the 101 or 280, from roughly 20 minutes in the northern county to about an hour from the far south. Call 650-342-9449 and we will schedule an efficient, comprehensive visit."],
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
      "Santa Clara wraps history and spectacle together — the old Mission and university at its heart, Levi's Stadium and Great America out toward the bay. It sits well down in the South Bay from our Peninsula offices, roughly 35 minutes away, yet patients here travel to us when they need care beyond the routine.",
    hook: [
      "Specialized hearing and tinnitus care worth the trip",
      "Santa Clara is well served for everyday needs, so the patients who come to us are usually looking for something particular: relief from persistent [tinnitus](/tinnitus/), a fitting that finally works after others failed, or a rigorous second opinion. Our practice is built around exactly that kind of problem-solving — thorough diagnostics, real-ear-verified fittings, and tinnitus-focused treatment including Lenire — which is what makes the drive up the Peninsula pay off.",
    ],
    motif: "civic",
    localScene: [
      "A city of landmarks, from the Mission to the stadium",
      "Santa Clara stretches from Mission Santa Clara and the university campus through the civic core near the Caltrain station out to Levi's Stadium, Great America, and the convention center. Between game days, big events, and busy neighborhoods like Old Quad and Rivermark, it is a lively, noisy place to live. For the Santa Clara patients who make the trip, we concentrate on the harder cases — tinnitus, complex fittings, and clarity in the noise that fills a city like this.",
    ],
    whyHere:
      "Patients choose us over closer options when the problem is specialized: intractable tinnitus, a device that never sounded right, or a careful reassessment they could not get elsewhere. We are candid that everyday maintenance may be easier handled nearby.",
    landmarks:
      "We are about 35 minutes from Santa Clara University, the Mission, and the Levi's Stadium area, north up the 101 or 280 to our San Carlos office.",
    faqs: [
      ["What makes the drive from Santa Clara worthwhile?", "Our practice concentrates on tinnitus and complex hearing care, with thorough testing and verified fittings. When a problem has resisted easier fixes, that focus is usually what makes the trip up the Peninsula worth it."],
      ["Do you offer Lenire for tinnitus?", "Yes. We provide Lenire alongside a broader set of tinnitus management approaches, chosen to fit your specific situation after a full evaluation."],
      ["How far is your office from Santa Clara?", "About 35 minutes north via the 101 or 280 to San Carlos. Call 650-342-9449 to arrange a visit built around one efficient trip."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Santa Rosa is the largest city in the North Bay and the hub of Sonoma County, with the walkable brick blocks of Railroad Square and Luther Burbank's old home and gardens at its center. It is a good ninety minutes north of us, so we will say it plainly: our offices sit down on the Peninsula, in San Mateo and San Carlos. What brings some Santa Rosa patients south is specialized care they would rather have done right the first time.",
    hook: [
      "When a long drive buys the right expertise",
      "If you need a standard hearing screening or an everyday pair of hearing aids, a Santa Rosa provider is the sensible choice, and we will tell you so. The trip to the Peninsula tends to pay off in the harder cases: persistent tinnitus that has not responded to anything, Lenire treatment, a fitting that never sat right, or a second opinion after care that disappointed. Patients who drive down for that kind of work get a full evaluation and a plan built to spare them repeat trips.",
    ],
    motif: "wine",
    localScene: [
      "From the Sonoma County seat to the bay",
      "Santa Rosa stretches from historic Railroad Square and Old Courthouse Square through Rincon Valley, Bennett Valley, and out toward the vineyards of the Russian River corridor. It is a real city with real distance between it and the Peninsula, and for routine hearing needs someone closer to home makes sense. For focused tinnitus treatment, Lenire, or a complex fitting, though, some Santa Rosa patients decide the expertise is worth the drive south, and we build the visit around making that trip count.",
    ],
    whyHere:
      "Santa Rosa patients who come to us are usually after a depth of tinnitus and diagnostic experience they could not line up locally. We honor the distance by folding testing, treatment, and counseling into efficient visits and coordinating follow-up so the ninety-minute drive stays a rare event.",
    landmarks:
      "Patients head south to our Peninsula offices from Railroad Square, Rincon Valley, and Bennett Valley, generally about ninety minutes down Highway 101.",
    faqs: [
      ["Ninety minutes is a long way — why travel to you from Santa Rosa?", "For routine care, a Sonoma County provider is usually the better call. Patients come to us from Santa Rosa mainly for specialized [tinnitus care](/tinnitus/), Lenire, and difficult fittings, where the added expertise justifies the drive. We plan visits to keep repeat trips to a minimum."],
      ["Do you offer Lenire for tinnitus?", "Yes. We provide Lenire alongside comprehensive tinnitus evaluation and management, and it is one of the main reasons patients travel to us from the North Bay, Santa Rosa included."],
      ["Can you handle everything in fewer visits since I'm driving far?", "That is how we prefer to work it for distant patients — consolidating [testing](/hearing-testing/), treatment, and follow-up so the drive accomplishes as much as possible each time."],
    ],
    consolidatedInto: "sonoma-county",
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
      "Saratoga sits where the valley meets the hills — a storybook village along Big Basin Way, wineries and gardens up in the foothills, and a reputation for the finer, quieter things. Our offices are a good 40 minutes north on the Peninsula, but Saratoga residents accustomed to seeking out the best will make the trip for care to match.",
    hook: [
      "Refined, unhurried care and technology you forget you are wearing",
      "Saratoga patients often ask for two things together: hearing sharp enough for concerts at the Mountain Winery, dinners in the village, and lively family gatherings, and technology discreet enough to stay invisible. Both hinge on the fitting rather than the label on the box. We take the time to program, measure, and refine each device privately, and that unhurried, high-touch approach is what patients travel here to find.",
    ],
    motif: "wine",
    localScene: [
      "A foothill village of gardens and wineries",
      "Saratoga's charm lives along Big Basin Way in the village, up at the Mountain Winery and Hakone Gardens, around Villa Montalvo's arts grounds, and through the wooded neighborhoods climbing toward the hills. It is a place of concerts, tastings, and long dinners — settings where hearing every word and note truly matters. For the Saratoga patients who come to us, we emphasize discreet, precisely verified fittings and focused tinnitus care that closer offices may not provide.",
    ],
    whyHere:
      "Saratoga residents choose us for depth over proximity: meticulous verified fittings, honest technology guidance, and specialized [tinnitus care](/tinnitus/) including Lenire. Many first traveled up for a problem no one nearer had resolved, and stayed for the continuity.",
    landmarks:
      "We are about 40 minutes from Saratoga Village, the Mountain Winery, and Hakone Gardens, north via the 280 to our San Carlos office.",
    faqs: [
      ["Why come all the way to the Peninsula from Saratoga?", "For routine maintenance a local office is simpler. Patients travel to us for specialized needs — complex tinnitus, difficult or unsatisfying fittings, Lenire, or a careful second opinion — where our focus earns the distance."],
      ["Can I get hearing aids that stay truly discreet?", "Yes. We fit several invisible and near-invisible styles and take the time to verify each one, keeping both the technology and the visits private and unhurried."],
      ["How far is your office from Saratoga?", "About 40 minutes north on the 280 to San Carlos. Call 650-342-9449 and we can arrange a longer, thorough visit to make the drive count."],
    ],
    consolidatedInto: "santa-clara-county",
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
      "Sausalito rises straight out of the water at the north foot of the Golden Gate, its hillside houses and famous houseboat community looking across Richardson Bay to the San Francisco skyline. It is the first town you reach coming over the bridge — which also means the trip runs the other way for us. Our offices are down on the Peninsula, about 50 minutes south, so Sausalito patients typically make the drive by choice.",
    hook: [
      "Living on the water, and what it means for hearing aids",
      "Between the houseboats at Waldo Point, the marinas along Bridgeway, and the salt air off Richardson Bay, a lot of Sausalito life happens right on the water — and marine moisture is hard on hearing aids, showing up as muffled sound, cut-outs, or corroded contacts. It is manageable with moisture-resistant devices, a nightly drying routine, and regular professional cleaning. When something does fail, we handle repairs so a waterfront lifestyle never leaves you without your hearing.",
    ],
    motif: "bayside",
    localScene: [
      "A town built on the bay",
      "Sausalito strings along the shoreline from the downtown waterfront and Bridgeway's galleries to the old Marinship yards, the Caledonia Street shops, the houseboat docks at Waldo Point, and Fort Baker tucked beneath the bridge. Damp bay air is a constant, and it takes a toll on hearing technology. For patients from Sausalito we lean into moisture-smart devices and durable fittings that stand up to life by the water — and we set up drying habits that keep them working reliably between visits.",
    ],
    whyHere:
      "Sausalito patients tend to seek us out for the specialized end of hearing care — persistent [tinnitus](/tinnitus/) and Lenire therapy, moisture-related repairs, or fittings that need real expertise. They value seeing the same audiologist and getting an honest match of technology to their needs. For routine checks, we readily acknowledge a closer Marin office may be the easier choice.",
    landmarks:
      "We are about 50 minutes south of Sausalito's Bridgeway waterfront, the Waldo Point houseboats, and the Caledonia Street district, down Highway 101 and across the Golden Gate to our San Mateo office.",
    faqs: [
      ["I live on a houseboat — will the damp air ruin my hearing aids?", "Marine humidity does let moisture build up inside hearing aids, but it is very manageable. Moisture-resistant devices, a nightly drying routine, and regular professional cleaning prevent most trouble, and we help waterfront patients set up a routine that lasts."],
      ["Is it worth driving from Sausalito to the Peninsula for care?", "For specialized tinnitus or Lenire treatment, tricky fittings, or moisture repairs, most patients feel the trip pays off. For a simple check or cleaning, a nearer Marin provider may make more sense — we would rather be honest than have you drive for something routine."],
      ["Do you repair hearing aids damaged by moisture?", "Yes. Moisture-related issues are among the most common repairs we see, and many are resolved same-day with professional cleaning and drying. Call 650-342-9449 to arrange a visit."],
    ],
    consolidatedInto: "marin-county",
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
      "Sebastopol grew up around apples long before grapes, and the Gravenstein orchards, the arts scene, and the offbeat sculpture along the Laguna still give it a character all its own in west Sonoma County. It is about ninety minutes north of us, and we will not pretend otherwise: our offices are down on the Peninsula. A few Sebastopol patients drive that stretch anyway, when the care they want is worth going out of their way for.",
    hook: [
      "Reserving the drive for the difficult cases",
      "A routine hearing check or an ordinary pair of hearing aids is best handled close to home, and we would gladly point a Sebastopol patient to someone nearby for that. Where the trip south starts to make sense is the stubborn stuff: tinnitus that has resisted every attempt, Lenire treatment, a fitting that never quite worked, or a second opinion after a disappointing experience. Those are the visits we build carefully, with a full evaluation and a plan designed to keep you from driving back repeatedly.",
    ],
    motif: "wine",
    localScene: [
      "Apple country to the bay",
      "Sebastopol runs from its walkable downtown and the Barlow arts-and-food district out through Gravenstein apple country and the wetlands of the Laguna de Santa Rosa. It sits a real distance from the Peninsula, and for routine hearing needs we would encourage you to look locally first. For focused tinnitus treatment, Lenire, or a tricky fitting, some Sebastopol patients decide the specialist experience justifies the drive south, and we make sure the visit is worth the effort.",
    ],
    whyHere:
      "Sebastopol patients who come our way are typically seeking tinnitus and diagnostic expertise they could not assemble nearby. We respect the ninety-minute distance by packing care into efficient visits and coordinating follow-up so the drive stays occasional.",
    landmarks:
      "Patients travel south to our Peninsula offices from downtown Sebastopol, the Barlow, and the Laguna de Santa Rosa area, roughly ninety minutes by way of Highway 101.",
    faqs: [
      ["Is the drive from Sebastopol really worth it?", "For everyday care, a closer provider usually makes more sense. Sebastopol patients come to us mainly for specialized [tinnitus care](/tinnitus/), Lenire, and complex fittings, where the expertise justifies the trip, and we plan visits to minimize how often you return."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. Lenire and comprehensive tinnitus management are among the main reasons patients travel to us from across the North Bay, including Sebastopol."],
      ["Can you consolidate my care into fewer trips?", "Yes. For patients driving a distance we combine testing, treatment, and counseling into focused visits and set up follow-up so the drive is a rare event."],
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
      "Solano County stretches from the waterfront cities of the Carquinez Strait out to the farmland bordering Sacramento — Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista. It sits well to the northeast of the bay, a real distance from us: our offices are on the San Mateo Peninsula, so for routine hearing care, most Solano residents will find a closer provider more practical.",
    hook: [
      "Why some Solano patients travel to the Peninsula",
      "We're candid about the drive. For standard hearing tests and everyday hearing aids, a provider close to home is the sensible choice. Where the distance can be worth it is specialized care — complex [tinnitus](/tinnitus/), Lenire treatment, difficult fittings, or a second opinion after a frustrating experience elsewhere. Solano patients who come to us come for that kind of expertise, and we design their visits to make the trip count with a thorough evaluation, treatment, and a follow-up plan that limits repeat drives.",
    ],
    motif: "civic",
    localScene: [
      "From the strait to the Delta",
      "Solano County packs a lot of variety into its borders — the naval and maritime history of Vallejo and Mare Island, historic Benicia on the Carquinez Strait, the county seat at Fairfield near Travis Air Force Base, marsh-side Suisun City, growing Vacaville, and the farm and Delta towns of Dixon and Rio Vista. Between the marine and Delta humidity along the water and the industrial and agricultural noise inland, county residents face a real mix of hearing challenges — and a few decide the specialized care down on the Peninsula is worth the drive.",
    ],
    whyHere:
      "Solano County patients who travel to us are usually seeking a depth of tinnitus and diagnostic expertise they couldn't find locally. We respect the distance by consolidating testing, treatment, and counseling into efficient visits and coordinating follow-up so the long drive stays the exception.",
    landmarks:
      "Patients reach our Peninsula offices from across Solano County — Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista — generally an hour or more to the southwest via I-80 and the bridges.",
    faqs: [
      ["Solano's a long way from the Peninsula — why come to you?", "For routine care, a local provider usually makes more sense. Solano patients travel to us mainly for specialized tinnitus treatment, Lenire, and complex cases where the expertise justifies the drive. We plan visits to minimize repeat trips."],
      ["Which Solano cities do you see patients from?", "From all of them — Vallejo, Benicia, Fairfield, Suisun City, Vacaville, Dixon, and Rio Vista. Each has its own drive to the Peninsula, generally an hour or more."],
      ["Do you offer Lenire and comprehensive tinnitus care?", "Yes. Tinnitus care, including Lenire, is one of the main reasons patients travel to us from farther parts of the Bay Area, Solano County included. Call 650-342-9449 to learn more."],
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
      "Sonoma County spreads from the coast through the Russian River valley to the vineyards around Santa Rosa, Sonoma, and Healdsburg — wine country, redwoods, and a string of distinct towns. It is a long way from the Peninsula, where our offices actually are, in San Mateo and San Carlos. We say that plainly, because the Sonoma County patients who come to us are the ones who have decided a specialist is worth the drive.",
    hook: [
      "When specialized care justifies the North Bay drive",
      "For routine hearing tests and everyday hearing aids, a provider in your own part of the county is almost always the better choice, and we will tell you so. The trip south starts to make sense for harder problems — tinnitus that has not responded, Lenire treatment, a fitting that never worked, or a second opinion after care that disappointed. Patients who travel to us from Sonoma County typically come for that kind of expertise, and we structure their visits so the distance buys as much progress as possible.",
    ],
    motif: "wine",
    localScene: [
      "One county, many communities",
      "Sonoma County is really a collection of places — Santa Rosa and Petaluma, the town of Sonoma and its Plaza, Sebastopol's apple country, Healdsburg, Windsor, and the Russian River and coastal reaches beyond. All of them sit a genuine distance from the Peninsula, and for routine hearing care we would point you to someone nearer home. For specialized tinnitus treatment, Lenire, or complex diagnostics, some county residents decide the expertise is worth the drive south, and we make the visit earn it.",
    ],
    whyHere:
      "Patients who travel to us from Sonoma County are usually seeking a depth of tinnitus and diagnostic experience they could not line up locally. We respect the distance by consolidating care into efficient visits and coordinating follow-up so the drive is the exception rather than the routine. Our page for [Sebastopol](/areas-we-serve/sebastopol/) gives the drive time to our San Mateo office.",
    landmarks:
      "Patients come south to our Peninsula offices from Santa Rosa, Petaluma, Sonoma, Sebastopol, and Windsor, generally well over an hour down Highway 101.",
    faqs: [
      ["You're far from Sonoma County — why would I travel to you?", "For routine care, a local provider usually makes more sense. County patients come to us mainly for specialized [tinnitus treatment](/tinnitus/), Lenire, and complex cases, where the expertise justifies the drive. We plan visits to minimize repeat trips."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. We provide Lenire and comprehensive tinnitus care, which is one of the main reasons patients travel to us from farther parts of the Bay Area, including Sonoma County."],
      ["Can you coordinate care so I don't drive down often?", "Yes. For distance patients we consolidate testing, treatment, and counseling into efficient visits and build a follow-up plan that limits how often you make the trip."],
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
      "Sonoma is where California winemaking began, and the old Mission and the broad central Plaza still anchor a town that trades happily on its history. It is about eighty minutes north of the Peninsula, where our two offices actually are, in San Mateo and San Carlos. We are up front about that distance, because the Sonoma patients who drive it are doing so deliberately, for care they would rather not compromise on.",
    hook: [
      "The kind of care worth going out of your way for",
      "For a routine hearing test or a straightforward pair of hearing aids, a provider near the Plaza is the practical choice, and we would say as much. The drive to the Peninsula earns its keep on the harder problems: tinnitus that has not eased despite everything, Lenire treatment, a fitting that never felt natural, or a second opinion after care that fell short. When a Sonoma patient comes for that, we take the time to evaluate thoroughly and map out a plan that keeps return drives to a minimum.",
    ],
    motif: "wine",
    localScene: [
      "From the birthplace of California wine to the bay",
      "Life in Sonoma orbits the historic Plaza, the Mission San Francisco Solano, and the vineyards fanning out across the valley toward Glen Ellen and Kenwood. It is a real distance from the Peninsula, and for routine hearing care we would point you somewhere closer. But for dedicated tinnitus treatment, Lenire, or a complex fitting, some Sonoma patients decide the specialist expertise outweighs the drive south, and we make certain the visit rewards the effort.",
    ],
    whyHere:
      "Sonoma patients who choose us are generally seeking tinnitus and diagnostic experience they could not find in the valley. We make the long trip worthwhile by scheduling fuller appointments up front and handling as much follow-up as we can by phone, so repeat drives stay uncommon.",
    landmarks:
      "Patients drive south to our Peninsula offices from the Sonoma Plaza, the Mission district, and the valley toward Glen Ellen, about eighty minutes by Highways 121 and 101.",
    faqs: [
      ["Why travel eighty minutes to you instead of staying local?", "For routine care, local usually makes sense. Sonoma patients come to us chiefly for specialized [tinnitus treatment](/tinnitus/), Lenire, and difficult fittings, where the expertise justifies the drive. We plan each visit to reduce how often you return."],
      ["Do you offer Lenire tinnitus therapy?", "Yes. Lenire and comprehensive tinnitus care are among the main reasons patients travel to us from the wine country, Sonoma included."],
      ["Can you fit everything into fewer visits?", "Yes. For distance patients we consolidate [testing](/hearing-testing/) and treatment where possible and build follow-up so the drive stays infrequent. Call 650-342-9449 to plan a visit."],
    ],
    consolidatedInto: "sonoma-county",
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
      "South San Francisco wears its identity on the hillside — the giant \"The Industrial City\" letters on Sign Hill say it plainly. Once a manufacturing town, it is now the birthplace of biotech, home to Genentech and a dense cluster of labs and offices out at Oyster Point, layered over its historic Grand Avenue downtown. Our San Mateo office is about fifteen minutes south on the 101.",
    hook: [
      "Hearing clearly across very different workdays",
      "South San Francisco packs a lot of listening environments into one city — busy labs and open-plan offices, industrial floors, warehouses, and the everyday hum of a working downtown. Following speech in those settings is demanding, and it is where hearing loss shows up first: you hear, but you cannot quite make out the words over background noise. We use speech-in-noise testing and real-ear verified fittings so conversation stays clear in the exact settings you spend your days in, not just in a quiet booth.",
    ],
    motif: "downtown",
    localScene: [
      "From Grand Avenue to Oyster Point",
      "South City runs from the shops and restaurants of historic Grand Avenue up under Sign Hill, through the neighborhoods off El Camino, and out to the biotech campuses and marina at Oyster Point, with Orange Memorial Park at its heart. It is a city of scientists, tradespeople, and lifelong families, each with their own listening demands. For all of them we offer thorough testing, honest technology, and the personal attention of an independent practice, a short drive south on the 101.",
    ],
    whyHere:
      "South San Francisco patients choose us over a big-box counter for real diagnostic depth, unbiased technology recommendations, and specialized tinnitus care — with the same audiologist at every visit. We tune hearing aids to your actual work and life, and stand behind the fitting.",
    landmarks:
      "We are about fifteen minutes from South San Francisco's Grand Avenue, Sign Hill, and the Oyster Point biotech campuses, straight down the 101 to our San Mateo office.",
    faqs: [
      ["I hear fine one-on-one but struggle in meetings and noise. Why?", "That is a classic early sign of hearing loss — the ability to separate speech from background noise fades first. We test specifically for speech-in-noise and fit technology that helps in exactly those settings."],
      ["Why choose an independent audiologist over a big-box store?", "You get comprehensive diagnostic testing, technology chosen for your needs rather than a limited lineup, verified fittings, and continuity of care with one audiologist who knows your history."],
      ["How far is your office from South San Francisco?", "Our San Mateo office is about fifteen minutes south on the 101. Call 650-342-9449 to book an appointment."],
    ],
    onCaltrain: true,
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
      "St. Helena sits upvalley in the heart of Napa, a small town of tree-lined Main Street storefronts surrounded by some of the most celebrated vineyards in the country. It is roughly ninety minutes north of the Peninsula, and there is no getting around it: our offices are down in San Mateo and San Carlos. The St. Helena patients who make the drive are the ones who want a specialist for care that matters to them.",
    hook: [
      "Reserving the trip for care that warrants it",
      "For a routine hearing screening or an ordinary pair of hearing aids, an upvalley or Napa provider is the practical answer, and we would say so. The Peninsula drive earns its place with the difficult cases: tinnitus that has resisted treatment, Lenire, a fitting that never felt right, or a second opinion after a disappointing experience. St. Helena patients who come for that get a thorough evaluation and a plan built to keep the long drives infrequent.",
    ],
    motif: "wine",
    localScene: [
      "Upvalley Napa to the bay",
      "St. Helena's rhythm runs along its historic Main Street, out to the wineries and stone cellars that line Highway 29, and up toward the vineyards near Calistoga. It is a real distance from the Peninsula, and for routine hearing needs we would send you to someone closer. For dedicated tinnitus treatment, Lenire, or a complex fitting, some St. Helena patients decide the specialist experience is worth the drive south, and we make sure the visit rewards it.",
    ],
    whyHere:
      "St. Helena patients who choose us are typically after tinnitus and diagnostic expertise they could not find in the valley. We respect the ninety-minute distance by folding testing, treatment, and counseling into efficient visits and coordinating follow-up so the drive stays a rare event.",
    landmarks:
      "Patients travel south to our Peninsula offices from St. Helena's Main Street and the Highway 29 wineries, generally about ninety minutes down through the valley and Highway 101.",
    faqs: [
      ["Why drive ninety minutes when there are closer providers?", "For routine care, closer usually makes sense. St. Helena patients come to us mainly for specialized [tinnitus care](/tinnitus/), Lenire, and complex fittings, where the expertise justifies the trip, and we plan visits to reduce repeat drives."],
      ["Do you offer Lenire tinnitus treatment?", "Yes. Lenire and comprehensive tinnitus management are among the main reasons patients travel to us from the Napa Valley, including St. Helena."],
      ["Can you consolidate my care into fewer visits?", "Yes. For patients driving a distance we combine [testing](/hearing-testing/) and treatment where possible and set up follow-up so the drive is the exception, not the routine."],
    ],
    consolidatedInto: "napa-county",
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
      "Suisun City wraps around a tidal channel at the edge of the vast Suisun Marsh, with a revived waterfront district and a working harbor at its heart. It's a fair distance from us — our offices sit on the Peninsula in San Mateo and San Carlos, roughly 85 minutes southwest — so for routine hearing care, a provider nearer Suisun will usually be the sensible option.",
    hook: [
      "When Suisun patients choose to travel for care",
      "Our honest guidance is to keep everyday hearing care close to home. The drive to the Peninsula earns its keep only for specialized situations — persistent [tinnitus](/tinnitus/), Lenire treatment, a complicated fitting, or a second opinion you want done thoroughly. The Suisun-area patients who come to us come for exactly that, and we plan each visit so a single trip delivers a full evaluation, treatment, and a follow-up path.",
    ],
    motif: "bayside",
    localScene: [
      "Life along the marsh and the waterfront",
      "Suisun City is defined by water — the restored Old Town waterfront along the promenade, the marina and harbor, and the enormous Suisun Marsh stretching out beyond, one of the largest brackish wetlands on the West Coast. That marine, marsh-side setting keeps humidity high, and moisture is the most common source of hearing aid trouble. For waterfront-area patients who wear hearing aids, moisture-resistant devices and a drying routine matter — and for those with more complex needs, some decide the specialized care on the Peninsula is worth the drive.",
    ],
    whyHere:
      "Suisun City patients who make the trip are usually seeking tinnitus and diagnostic expertise they couldn't find locally. We honor the distance by folding everything into efficient, thorough visits and coordinating follow-up so the long drive stays occasional.",
    landmarks:
      "Patients reach our Peninsula offices from Suisun City's Old Town waterfront, the marina, and the neighborhoods bordering the Suisun Marsh, generally around 85 minutes southwest.",
    faqs: [
      ["Why would I drive to the Peninsula from Suisun City?", "For routine care, a closer provider usually makes more sense. Suisun patients travel to us mainly for specialized tinnitus care, Lenire, and difficult fittings where the expertise justifies the trip. We plan visits to keep repeat drives to a minimum."],
      ["Does living by the marsh affect my hearing aids?", "The damp, marine air around the marsh and waterfront lets moisture build up inside hearing aids, which can cause muffled or intermittent sound. Moisture-resistant devices and a nightly drying routine prevent most of it."],
      ["Can you make one visit count when I'm coming from a distance?", "Yes. We consolidate testing, treatment, and counseling into a single efficient visit and build a follow-up plan that limits how often you need to travel down. Call 650-342-9449 to arrange it."],
    ],
    consolidatedInto: "solano-county",
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
      "Sunnyvale pairs a historic Murphy Avenue downtown with a deep bench of technology employers, from long-established chipmakers to newer campuses. Our practice is up on the Peninsula rather than in Sunnyvale, but the drive north on the 101 runs about 30 minutes, and patients make it for care worth the trip.",
    hook: [
      "Following speech where the day gets loud",
      "Whether the workday means an open-plan office, a factory or lab floor, or a crowded lunch on Murphy Avenue, Sunnyvale patients tend to struggle most with speech in background noise rather than quiet at home. Some also carry years of occupational sound exposure, which can contribute to hearing changes over time. We test how you hear in noise and verify fittings with real-ear measurement, aiming squarely at the environments where clarity is hardest to hold.",
    ],
    motif: "downtown",
    localScene: [
      "From Murphy Avenue to the tech campuses",
      "Downtown Sunnyvale centers on the walkable stretch of historic Murphy Avenue and the Caltrain station beside it, ringed by neighborhoods like the Heritage District and Ponderosa and the sprawling office parks toward Moffett. It is a city that lives between busy restaurants and busier workplaces. Those two settings share one demand — clear speech in noise — so for Sunnyvale patients who come our way, we prioritize speech-in-noise testing and precise verification over a one-size fitting.",
    ],
    whyHere:
      "Sunnyvale patients who travel to us are usually after something specific: verified fittings that finally work in noise, help with stubborn [tinnitus](/tinnitus/), or an honest second opinion after a device disappointed. For simple maintenance, a South Bay provider may be closer, and we will say so.",
    landmarks:
      "We are about 30 minutes from Murphy Avenue, the Sunnyvale Caltrain station, and the Moffett-area office parks by way of the 101 to our San Carlos office.",
    faqs: [
      ["Why would I drive up to the Peninsula instead of staying local?", "For routine care, staying local makes sense. People come to us from Sunnyvale for specialized help — complex tinnitus, difficult fittings, Lenire, or a careful reassessment — where our focus and verification make the distance worthwhile."],
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
      "Tiburon occupies a slender peninsula reaching into the bay, with some of the finest water views in Marin — across to Angel Island, Belvedere, and the San Francisco skyline beyond. Its downtown gathers along Main Street and the historic Ark Row near the ferry landing. We are candid that our offices are on the far side of the bay, about an hour south, so Tiburon patients generally travel to us for a specific reason rather than convenience.",
    hook: [
      "Salt air, bay views, and hearing that keeps up",
      "Life in Tiburon plays out along the water — ferry rides, waterfront dining, walks out to Blackie's Pasture — and two things follow from that. The damp bay air is hard on hearing aids, so moisture-resistant devices and a drying routine matter; and the settings you care about, from a breezy deck to a lively restaurant, demand hearing that performs in real conditions. We verify each fitting and tune it for the environments you actually live in, then keep it maintained against the salt air.",
    ],
    motif: "bayside",
    localScene: [
      "A peninsula town with the water on three sides",
      "Tiburon's landmarks trace its shoreline: the Main Street and Ark Row shops by the ferry, the path out to Blackie's Pasture and Richardson Bay, the hilltop chapel at Old St. Hilary's, and neighboring Belvedere's island lanes. Bay breezes and marine moisture are part of daily life here, and both influence how hearing technology holds up. For patients from Tiburon we favor durable, moisture-smart fittings, careful verification, and technology matched honestly to a life spent near the water.",
    ],
    whyHere:
      "Patients from Tiburon usually come to us for the specialized work — complex [tinnitus care](/tinnitus/) and Lenire, difficult fittings, moisture-related repairs, or a trusted second opinion — with the continuity of one audiologist over time. Many first arrived for ringing or a fitting that hadn't gone right elsewhere. For routine maintenance, we are the first to say a closer Marin office may be more practical.",
    landmarks:
      "We are about an hour south of Tiburon's Main Street and Ark Row, Blackie's Pasture, and neighboring Belvedere, down Highway 101 and over the Golden Gate to our San Mateo office.",
    faqs: [
      ["Why travel from Tiburon when there are closer options?", "For everyday care, convenience is a fair reason to stay local. People make the drive to us for specialized tinnitus and Lenire treatment, hard fittings, and second opinions — where expertise and time outweigh the distance."],
      ["Does living by the bay affect my hearing aids?", "Salt air and humidity can let moisture collect inside hearing aids, causing muffled or intermittent sound. Moisture-resistant devices, nightly drying, and regular cleaning prevent most of it, and we help waterfront patients set up a routine that holds."],
      ["How long is the drive from Tiburon to your office?", "Roughly an hour down Highway 101 and across the Golden Gate to San Mateo. Call 650-342-9449 and we will set aside time so one visit accomplishes as much as possible."],
    ],
    consolidatedInto: "marin-county",
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
      "Union City sits in the southern East Bay, a diverse commuter community where BART and two bridges tie it to the rest of the region. Its transit links actually make the Peninsula reasonably reachable. That said, our offices are in San Mateo and San Carlos across the water, so Union City patients most often seek us out for specialized hearing care.",
    hook: [
      "A commuter hub with two bridges to the Peninsula",
      "Union City is built around getting places — the Intermodal BART station, the Nimitz and the Dumbarton and San Mateo bridges all within reach. That connectivity means our Peninsula offices are only about half an hour away, which puts specialized care within practical range. For everyday testing a nearby provider is sensible, but for focused [tinnitus care](/tinnitus/), Lenire, or a fitting that never worked, the short bridge trip is one Union City patients are glad to make.",
    ],
    motif: "transit",
    localScene: [
      "Neighborhoods linked by transit",
      "Union City brings together the older Alvarado district, the neighborhoods around the BART station, Old Alvarado's historic core, and the trails and parks near the Alameda Creek corridor. It is a community of commuters and families spread across the southern East Bay, many of whom already travel daily for work. For them, crossing a bridge for a specialized audiology appointment is a familiar, manageable errand rather than an ordeal.",
    ],
    whyHere:
      "Union City patients choose California Hearing Center for specialized expertise the neighborhood clinic may not offer — in-depth tinnitus and Lenire treatment, real-ear-verified fittings, and honest guidance. Easy bridge and freeway access, plus continuity with one audiologist, makes the modest drive worthwhile.",
    landmarks:
      "From the BART station, Old Alvarado, or the Alameda Creek trails, our San Mateo office is roughly 30 minutes over the Dumbarton or San Mateo Bridge.",
    faqs: [
      ["Which bridge is fastest from Union City?", "Either the Dumbarton or the San Mateo Bridge works, and both put us around 30 minutes away depending on traffic. We can suggest the better route for your appointment time."],
      ["Why choose you over a closer audiologist?", "For routine care, local is often easier. Union City patients come to us for specialized tinnitus treatment, Lenire, and complex second opinions, where a focused practice is worth the short bridge drive."],
      ["Do you see patients from the southern East Bay regularly?", "Yes, regularly. We schedule around the commute and often group testing and follow-up together. Call 650-342-9449 to arrange a visit."],
    ],
    consolidatedInto: "alameda-county",
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
      "Vacaville sits in the rolling country between the Bay Area and Sacramento, a growing city known for its outlet shopping, its biotech corridor, and the surrounding Vaca Valley farmland. It's a long way from the coast — our offices are on the San Mateo Peninsula, around 90 minutes southwest — so for routine hearing care, a provider nearer Vacaville will almost always be the practical choice.",
    hook: [
      "The kind of care that justifies a longer drive",
      "We're upfront about distance: for standard testing and everyday hearing aids, stay close to home. The trip to the Peninsula tends to make sense only for specialized needs — complex [tinnitus](/tinnitus/), Lenire treatment, a fitting that's proven difficult, or a second opinion you want handled meticulously. Vacaville patients who travel to us come for that level of care, and we design their visits so one trip covers evaluation, treatment, and a clear follow-up plan.",
    ],
    motif: "civic",
    localScene: [
      "Between the valley towns and the hills",
      "Vacaville stretches from its historic downtown along the creek out to the Nut Tree area, the outlet centers off I-80, and the biotech and manufacturing plants that anchor much of the local economy. Plenty of residents have spent careers in industrial and plant settings where sustained noise exposure can, over time, contribute to hearing loss. For those noticing hearing changes or living with tinnitus, the specialized care down on the Peninsula is a trip some are willing to make, even from this far inland.",
    ],
    whyHere:
      "Vacaville patients who come to us are generally after tinnitus and diagnostic expertise they couldn't locate nearby. We respect the long haul by consolidating care into thorough, efficient visits and mapping out follow-up so repeat drives stay uncommon.",
    landmarks:
      "Patients travel to our Peninsula offices from Vacaville's downtown, the Nut Tree area, and the surrounding Vaca Valley, generally around 90 minutes southwest along I-80.",
    faqs: [
      ["That's a real drive from Vacaville — is it worth it?", "For routine care, a nearby provider is usually the better call. Vacaville patients come to us mainly for specialized tinnitus care, Lenire, and complex fittings where the expertise earns the drive. We plan visits to keep repeat trips low."],
      ["Can years of factory or plant noise cause hearing loss?", "Sustained occupational noise exposure can contribute to hearing loss over time. A comprehensive evaluation shows whether noise is a factor and what will help most. Call 650-342-9449 to book."],
      ["How do you make a long trip worthwhile?", "For distant patients, we combine testing, treatment, and counseling into one efficient visit and set up a follow-up plan that limits how often you need to come to the Peninsula."],
    ],
    consolidatedInto: "solano-county",
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
      "Vallejo sits on the northern edge of San Pablo Bay, a working waterfront city with deep naval history and its own ferry link to San Francisco. We'll be straight with you: our offices are on the Peninsula in San Mateo and San Carlos, about 70 minutes southwest — so for routine hearing care, a Vallejo-area provider will usually be more convenient.",
    hook: [
      "When the drive from Vallejo makes sense",
      "For standard hearing tests and everyday hearing aids, we'd point you toward someone closer to home. Where the trip can be worth it is specialized care — persistent [tinnitus](/tinnitus/), Lenire treatment, a difficult fitting that hasn't gone right elsewhere, or a second opinion you want done thoroughly. Vallejo patients who come to us tend to come for that kind of expertise, and we build their visits to make the distance count: a full evaluation, treatment, and a follow-up plan that keeps repeat drives to a minimum.",
    ],
    motif: "bayside",
    localScene: [
      "A waterfront city with a naval past",
      "Vallejo grew up around the water — the ferry terminal on the Mare Island Strait, the former Mare Island Naval Shipyard across the channel, the marina and the historic downtown along Georgia Street. Generations of shipyard and maritime workers here spent careers around heavy machinery, and occupational noise exposure over the years can contribute to hearing loss later in life. For patients who suspect noise has taken a toll, or who are wrestling with tinnitus, some decide the specialized care down on the Peninsula is worth the drive around the bay.",
    ],
    whyHere:
      "Vallejo patients who make the trip are usually after tinnitus and diagnostic expertise they couldn't find nearby. For them we batch the testing and treatment into a small number of thorough appointments, so the bridge drive is rarely something they have to repeat.",
    landmarks:
      "Patients travel to our Peninsula offices from Vallejo's waterfront, Mare Island, and the Georgia Street downtown, generally around 70 minutes southwest via the 80 and the bridges.",
    faqs: [
      ["Vallejo's an hour-plus away — why would I come to you?", "For routine care, a local provider usually makes more sense. Patients travel to us from Vallejo mainly for specialized tinnitus treatment, Lenire, and complex cases where the expertise justifies the drive. We plan visits to limit repeat trips."],
      ["I worked at the shipyard for years — could that have affected my hearing?", "Long-term occupational noise exposure can contribute to hearing loss over time. A thorough diagnostic evaluation can show whether noise is part of the picture and what will help. Call 650-342-9449 to arrange one."],
      ["Can you make one long trip count for more?", "Yes. For patients driving from a distance, we consolidate testing, fitting, and counseling into efficient visits and build a follow-up plan that limits how often you need to come down."],
    ],
    consolidatedInto: "solano-county",
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
      "Walnut Creek is the East Bay's upscale shopping and arts hub, where Broadway Plaza's boutiques and the Lesher Center for the Arts draw visitors from across the county, all under the ridgeline of Mount Diablo. It's a solid 50 minutes east of our Peninsula offices, so we won't pretend to be the closest audiologist — but Walnut Creek residents do make the drive for specialized care.",
    hook: [
      "Hearing well from Broadway Plaza to the Lesher Center",
      "So much of Walnut Creek life happens in demanding listening spaces — a lively lunch at a Broadway Plaza restaurant, a performance at the Lesher Center, a meeting downtown. Following conversation there is exactly where basic amplification falls short and precise fitting matters. We focus on [speech-in-noise testing](/hearing-testing/) and real-ear verification, plus discreet, high-performing technology that keeps up with a full social calendar without announcing itself.",
    ],
    localScene: [
      "Downtown polish and a big retirement community",
      "Walnut Creek runs from the Broadway Plaza shops and Locust Street restaurants to the Iron Horse Trail and the trailheads up Mount Diablo, with the large Rossmoor community just to the south. It's a city with an active older population that wants to stay in the middle of things — theater, dining, walking groups. Getting hearing aids fit and verified for those real settings, rather than a quiet showroom, is what keeps people fully in the conversation.",
    ],
    whyHere:
      "Walnut Creek patients usually reach us through word of mouth — someone whose tinnitus we helped, or whose hearing aids finally sounded right after a proper [real-ear verification](/hearing-aid-fitting/). We're straightforward that everyday visits are easier handled locally; what brings people across the bridges is tinnitus care, Lenire, and complex fittings.",
    landmarks:
      "We're about 50 minutes from Broadway Plaza, the Lesher Center, and the Rossmoor area, taking the East Bay bridges over to our San Mateo office.",
    faqs: [
      ["Why would I travel from Walnut Creek when there are audiologists nearby?", "For routine testing, staying local makes sense. People make the trip to us for specialized tinnitus treatment, Lenire, and meticulous fittings — the depth of care that's harder to find close to home."],
      ["Will hearing aids work in a busy Broadway Plaza restaurant?", "They can, when they're programmed and verified for noise. We use real-ear measurement and speech-in-noise testing so devices perform where you actually struggle, not only in the exam room."],
      ["Do you offer discreet, nearly invisible hearing aids?", "Yes. We fit several discreet and in-canal styles; the right one depends on your ear anatomy and hearing, which we assess during your evaluation."],
    ],
    consolidatedInto: "contra-costa-county",
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
      "Windsor is one of the newer towns in northern Sonoma County, built around a walkable Town Green that hosts markets and summer concerts and gives the community a real center of gravity. It is also one of the farthest points we serve — close to a hundred minutes north of our Peninsula offices in San Mateo and San Carlos. We are honest about the length of that drive, because the Windsor patients who make it are choosing us on purpose.",
    hook: [
      "Long drive, specialized reason",
      "When the need is a routine hearing test or a basic set of hearing aids, a provider closer to the Town Green is the sensible option, and we will point you there. The trip to the Peninsula makes sense for the difficult cases: tinnitus that has held on despite treatment, Lenire, a fitting that never settled, or a second opinion after a frustrating go elsewhere. For those patients we run a complete evaluation and design a plan meant to keep the long round trips to a minimum.",
    ],
    motif: "wine",
    localScene: [
      "North county to the Peninsula",
      "Windsor centers on its Town Green, with neighborhoods spreading out toward the Russian River and the vineyards of the Chalk Hill and Russian River corridors nearby. Being near the top of the county, it is a substantial haul from the Peninsula, and for everyday hearing care we would encourage you to look locally. For focused tinnitus treatment, Lenire, or a complex fitting, though, some Windsor patients weigh the specialist experience against the drive and decide it is worth it, and we make the visit count accordingly.",
    ],
    whyHere:
      "Windsor patients who travel to us are usually after tinnitus and diagnostic expertise they could not assemble nearby. We respect the hundred-minute distance by concentrating care into thorough single visits and coordinating follow-up so the drive stays a rare occasion.",
    landmarks:
      "Patients head south to our Peninsula offices from the Windsor Town Green and the surrounding Russian River neighborhoods, roughly a hundred minutes down Highway 101.",
    faqs: [
      ["That's a long drive — why choose you over someone in Sonoma County?", "For routine care, closer is usually smarter, and we will say so. Windsor patients come to us mainly for specialized [tinnitus care](/tinnitus/), Lenire, and complex fittings, where the expertise justifies the trip, and we schedule to keep repeat drives rare."],
      ["Do you provide Lenire tinnitus treatment?", "Yes. Lenire and full tinnitus management are among the main reasons North Bay patients, including from Windsor, decide the drive is worthwhile."],
      ["Can you handle testing and fitting in one trip?", "Where possible, yes. For distance patients we combine the [evaluation](/hearing-testing/) and [fitting](/hearing-aid-fitting/) and build follow-up so you drive down as seldom as we can manage."],
    ],
    consolidatedInto: "sonoma-county",
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
      "Woodside is a rural, wooded town of horse properties and estates spread along the base of the Santa Cruz Mountains, where redwoods, riding trails, and winding country roads set the pace. Residents are used to a short drive for their errands, and hearing care is no exception — our San Carlos office is about fifteen minutes down the hill.",
    hook: [
      "Discreet devices and calm, private care",
      "Woodside residents tend to want two things from hearing technology: performance that keeps up with an active life outdoors and in company, and a device that stays discreet. Modern invisible and receiver-in-canal hearing aids do both, but the outcome rests on expert fitting and real-ear verification far more than on the hardware itself. We take the time to program, measure, and refine, in an unhurried, confidential setting where the whole visit feels calm.",
    ],
    motif: "estate",
    localScene: [
      "A country town among the redwoods",
      "Woodside gathers around its small Town Center and Roberts Market, then spreads out along Cañada Road past Filoli, up toward Kings Mountain and Skyline, and into the trails of Huddart and Wunderlich Parks. It is equestrian, tree-shaded, and deliberately rural, with no bustling commercial strip. For its residents we offer discreet technology, meticulous fittings, and the private attention of an independent practice, an easy fifteen minutes down to our San Carlos office.",
    ],
    whyHere:
      "Woodside patients choose us for careful testing, premium technology matched honestly to their needs, and specialized tinnitus care — with the continuity of one audiologist who knows them. The pace is unhurried and private, and the follow-through is thorough.",
    landmarks:
      "We are about fifteen minutes from Woodside's Town Center, Cañada Road, and the trails at Huddart and Wunderlich Parks, an easy drive to our San Carlos office.",
    faqs: [
      ["Do you fit discreet or invisible hearing aids?", "Yes — we offer several invisible and near-invisible styles, including deep-canal options. The right fit depends on your ear anatomy and hearing needs, which we assess during a thorough evaluation."],
      ["Can I get an unhurried, private appointment?", "That is our standard. Woodside patients appreciate the calm, confidential pace of an independent practice, with time to ask questions and fine-tune results over follow-up visits."],
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
      "Yountville is a small Napa Valley town with an outsized reputation for food, home to The French Laundry and a walkable Washington Street packed with celebrated kitchens. It is about eighty minutes north of the Peninsula, and we will be candid: our offices are down in San Mateo and San Carlos, not in the valley. The Yountville patients who travel to us are choosing a specialist for care they want done well.",
    hook: [
      "Why some Napa Valley patients drive south",
      "For everyday hearing tests and standard hearing aids, a provider nearer to Yountville is the sensible pick, and we would happily point you there. The drive to the Peninsula makes sense for the harder problems — tinnitus that has not quieted, Lenire treatment, a fitting that never worked out, or a second opinion after care that let you down. Those are the visits we build deliberately, with a full evaluation and a plan aimed at keeping return drives to a minimum.",
    ],
    motif: "wine",
    localScene: [
      "A small valley town to the Peninsula",
      "Yountville is compact and easy to know — Washington Street's restaurants and tasting rooms, the old Veterans Home grounds, and the vineyards stretching north toward Oakville and south toward Napa. It sits a genuine distance from the Peninsula, and for routine hearing care we would encourage you to look closer to home. For focused tinnitus treatment, Lenire, or a complex fitting, some Yountville patients decide the specialist expertise justifies the drive south, and we make the visit worth the trip.",
    ],
    whyHere:
      "Yountville patients who come to us are usually seeking tinnitus and diagnostic experience they could not find nearby. We honor the eighty-minute distance by concentrating care into efficient visits and coordinating follow-up so the drive stays occasional rather than routine.",
    landmarks:
      "Patients drive south to our Peninsula offices from Washington Street and the vineyards around Yountville, about eighty minutes down through the valley to Highway 101.",
    faqs: [
      ["Why travel from Yountville when closer options exist?", "For routine care, a nearby provider usually makes more sense. Yountville patients come to us mainly for specialized [tinnitus treatment](/tinnitus/), Lenire, and difficult fittings, where the expertise justifies the drive. We plan visits to minimize repeat trips."],
      ["Do you offer Lenire tinnitus therapy?", "Yes. Lenire and full tinnitus care are among the main reasons patients travel to us from the Napa Valley, Yountville included."],
      ["Can you handle everything in fewer visits since I'm driving far?", "Yes. For distance patients we consolidate the [evaluation](/hearing-testing/), treatment, and follow-up so the drive accomplishes as much as possible each time. Call 650-342-9449 to arrange a visit."],
    ],
    consolidatedInto: "napa-county",
  },
};

export const cityProfileSlugs = Object.keys(cityProfiles);
