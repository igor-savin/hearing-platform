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
  // ---------------------------------------------------------------- OFFICE CITIES
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
  },

  // ---------------------------------------------------------------- CORE PENINSULA
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
      "Much of Burlingame sits beneath SFO's arrival and departure corridors, and residents near the Bayfront or Broadway know the sound of jets overhead. Repeated loud noise is a real contributor to noise-induced hearing loss over time. If you have spent years under the flight path, or work at or near the airport, a baseline hearing evaluation is worth doing even before you notice a problem — hearing loss from noise is gradual and easy to miss until conversations start slipping.",
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
      ["How far is your office from Burlingame?", "Our San Mateo office is about 10 minutes from most of Burlingame, just south on El Camino Real or the 101. Call 650-342-9449 to schedule."],
      ["Can airport and traffic noise really affect my hearing?", "Yes. Long-term exposure to loud noise — including aircraft and freeway noise — can contribute to permanent, gradual hearing loss. A baseline hearing test establishes where you stand and helps track any change over time."],
      ["Do you offer custom hearing protection for noisy environments?", "We do. Custom-molded hearing protection is popular with patients who live or work near the airport, ride motorcycles, or attend loud events. It protects hearing while keeping sound natural."],
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
      "Millbrae sits immediately south of San Francisco International Airport and is one of the Peninsula's great transit hubs, where BART and Caltrain meet. That location makes it convenient — and it also puts Millbrae squarely under the busiest part of SFO's flight path.",
    hook: [
      "Airport-adjacent living and noise-induced hearing loss",
      "Few Peninsula cities sit as close to SFO as Millbrae. Residents in the neighborhoods nearest the airport, and the many people who work in airport operations, hospitality, and ground transportation, can accumulate significant noise exposure over the years. Noise-induced hearing loss builds quietly and is permanent, but it is also highly preventable. A baseline evaluation plus custom hearing protection is one of the smartest things an airport-adjacent resident can do for long-term hearing health.",
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
  },

  // ---------------------------------------------------------------- COAST / SOUTH
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
      ["How far is the audiologist from Atherton?", "Our San Carlos office is about 12–15 minutes from Atherton via the 101 or El Camino Real. Call 650-342-9449 to arrange a visit."],
      ["Do you offer truly invisible hearing aids?", "We fit several invisible and near-invisible styles, including deep-canal options. The right choice depends on your ear anatomy and hearing needs, which we assess during your evaluation."],
      ["Can I see a tinnitus specialist near Atherton?", "Yes. Dr. Emily McMahan, AuD, leads our tinnitus care, including Lenire treatment, and sees patients from Atherton and throughout the mid-Peninsula at our San Carlos office."],
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
      ["Which office serves Menlo Park?", "Our San Carlos office is closest, about 12 minutes from most of Menlo Park via the 101 or El Camino Real. Call 650-342-9449 to schedule."],
      ["I struggle to hear in meetings and restaurants — can you help?", "Yes. Difficulty in noise is one of the most common reasons patients come in. We test speech-in-noise, then select and precisely verify technology for those specific situations, which usually helps far more than volume alone."],
    ],
  },

  // ---------------------------------------------------------------- FAR / REGIONAL
  // The "premier practice, patients travel to us" positioning. Honest: we say plainly
  // there is no office here, and frame the page around patients who choose the drive.
  "napa-county": {
    name: "Napa County",
    county: "Napa County",
    region: "wine-country",
    nearestOffice: "San Mateo",
    approxDrive: "roughly 60–90 minutes south, depending on where in the county you start",
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
};

export const cityProfileSlugs = Object.keys(cityProfiles);
