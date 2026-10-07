import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarDays, CheckCircle2, ExternalLink, FileText, MapPin, Newspaper, Phone, Quote, ShieldCheck, Star } from "lucide-react";
import { googleReviewsUrl, reviewAggregate, reviewThemes, testimonials } from "@/lib/reviews";
import { ReviewCount, ReviewRating } from "@/components/ReviewStats";
import {
  pressEventIsUpcoming,
  pressFeatureForPath,
  pressFeaturePath,
  pressFeatures,
  pressRootPath,
  type PressFeature
} from "@/lib/press";
import { AudiogramFigure, ClinicianCard, RedFlagPanel, SpecTable, VisitSteps } from "@/components/CareBlocks";
import {
  AUDIOGRAM_PAGES,
  TINNITUS_CARE_PAGES,
  TINNITUS_LEAD_CLINICIAN,
  TINNITUS_RED_FLAGS,
  TINNITUS_VISIT_FOOTNOTE,
  TINNITUS_VISIT_STEPS,
  specTableFor
} from "@/lib/carePageData";
import { ContactForm } from "@/components/ContactForm";
import { NotifyForm } from "@/components/NotifyForm";
import { InteractiveEarHero } from "@/components/InteractiveEarHero";
import { ZocdocButton } from "@/components/ZocdocButton";
import {
  appointmentConversionLinks,
  appointmentPrinciples,
  nearestOfficeText,
  planningGuideForLocation,
  serviceGuideForPage,
  trackingHref
} from "@/lib/conversion";
import {
  coreServiceDeepDives,
  helpServiceEyebrows,
  helpServiceForPath,
  helpServiceImages,
  helpServicePath,
  helpServices,
  howWeCanHelpRootPath,
  type HelpService
} from "@/lib/howWeCanHelp";
import {
  brandForPath,
  brandForProduct,
  brandPath,
  hearingAidBrandsPath,
  hearingAidProducts,
  productBrands,
  productForPath,
  productPath,
  productsRootPath
} from "@/lib/products";
import { productGuides } from "@/lib/productGuides";
import {
  activeHomepageVariantId,
  type HomepageVariantId
} from "@/lib/homepageVariants";
import { schemaForPage } from "@/lib/schema";
import {
  blogPosts,
  locationForPath,
  locations,
  primaryPhone,
  primaryPhoneHref,
  services,
  siteName,
  splitLongText,
  type SitePage
} from "@/lib/site";
import { tinnitusPageForPath, tinnitusPages, tinnitusPath, tinnitusRootPath, type TinnitusPage } from "@/lib/tinnitus";
import {
  areaCities,
  areaCounties,
  citiesForCounty,
  cityForPath,
  cityLinkPath,
  cityPath,
  countyForCity,
  countyForPath,
  countyPath,
  localFlavorForCity,
  localFlavorForCounty,
  officePathForCity,
  serviceAreasRootPath,
  type AreaCounty,
  type AreaCountyLocalFlavor,
  type AreaCity,
  type AreaCityLocalFlavor
} from "@/lib/serviceAreas";
import { providerForName, providerForPath, providerForSlug, providerPath, providerProfiles, providerRootPath, type ProviderProfile } from "@/lib/team";

// An article's byline and reviewer are free text today. When an article records
// a provider slug on its blogMeta, the clinician's name is shown instead and
// links to their profile, matching the Person node the JSON-LD emits. An
// unknown slug falls back to the text, so a typo cannot blank out a credit.
function ProviderCredit({ fallback, showCredential = false, slug }: { fallback: string; showCredential?: boolean; slug?: string }) {
  const provider = slug ? providerForSlug(slug) : undefined;
  if (!provider) return <>{fallback}</>;
  // Most names already end in a credential ("Dr. Caitlin Dold, Au.D."). When one
  // does not, the role is appended so a reviewer line always says who and what.
  const credential = showCredential && !provider.name.includes(",") ? `, ${provider.role}` : "";
  return (
    <>
      <Link className="underline underline-offset-2" href={providerPath(provider)}>
        {provider.name}
      </Link>
      {credential}
    </>
  );
}

function BlogComparisonTable({ table }: { table: NonNullable<NonNullable<SitePage["blogMeta"]>["comparisonTable"]> }) {
  return (
    <figure className="mt-8">
      {/* The wrapper scrolls, not the page, so a three-column table stays usable
          on a phone. It is focusable so keyboard users can scroll it. */}
      <div
        aria-label={table.caption}
        className="focus-ring w-full max-w-full overflow-x-auto border border-[#d5e7f4] bg-white"
        role="group"
        tabIndex={0}
      >
        <table className="w-full min-w-[560px] border-collapse text-left text-[17px] leading-6 max-md:text-[15px]">
          <caption className="px-5 pb-3 pt-5 text-left text-[20px] font-black leading-tight text-[#003f6f] max-md:text-[17px]">
            {table.caption}
          </caption>
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th
                  className="border-b-2 border-[#005a9c] bg-[#dbe9f3] px-5 py-3 text-[14px] font-black text-[#003f6f]"
                  key={header}
                  scope="col"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr className="odd:bg-white even:bg-[#f7fbfd]" key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th className="border-t border-[#dedede] px-5 py-3 align-top font-black text-[#262626]" key={`${row[0]}-${index}`} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td className="border-t border-[#dedede] px-5 py-3 align-top text-[#333]" key={`${row[0]}-${index}`}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

const patientForms = [
  {
    label: "New Adult Patient Forms",
    href: "/forms/new-adult-patient-forms.pdf"
  },
  {
    label: "New Pediatric Patient Forms",
    href: "/forms/new-pediatric-patient-forms.pdf"
  },
  {
    label: "Tinnitus Forms",
    href: "/forms/tinnitus-forms.pdf"
  },
  {
    label: "Audiology Associates of Westchester Privacy Notice",
    href: "/forms/privacy-notice.pdf"
  }
];

function anchorId(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const linkedLocationNames = new Map(
  locations.map((location) => [location.name.replace(/\s+Location$/, ""), location.path])
);

const linkedPlacePattern =
  /(Audiology Associates of Westchester|White Plains, NY|Harrison, NY|Scarsdale, NY|Rye, NY|Mt\. Kisco, NY|Greenwich, CT|Somers, NY)/g;

const urlPattern = /(https?:\/\/[^\s<>"')\]]+[^\s<>"')\].,;:])/g;

function linkifyText(text: string) {
  return text.split(urlPattern).map((chunk, chunkIndex) =>
    /^https?:\/\//.test(chunk) ? (
      <a
        className="text-[#005a9c] underline break-words"
        href={chunk}
        key={`url-${chunkIndex}`}
        rel="noopener"
        target="_blank"
      >
        {chunk}
      </a>
    ) : (
      <span key={`chunk-${chunkIndex}`}>{linkifyPlaces(chunk)}</span>
    )
  );
}

function linkifyPlaces(text: string) {
  return text.split(linkedPlacePattern).map((part, index) => {
    const href =
      part === "Audiology Associates of Westchester"
        ? "/"
        : linkedLocationNames.get(part) || null;

    return href ? (
      <Link className="text-[#005a9c] underline" href={href} key={`${part}-${index}`}>
        {part}
      </Link>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

const homeImages = {
  banner: "/assets/hearing-aids-audiologist-westchester-home-hero.jpg",
  meetTeam: "/assets/duda/meet-the-team.jpg",
  people: "/assets/duda/what-people-are-saying.jpg",
  experts: "/assets/duda/talk-to-experts.jpg",
  testing: "/assets/duda/hearing-test-audiologist-westchester.jpg",
  fitting: "/assets/duda/hearing-aid-fitting-ear-exam-westchester.jpg",
  tinnitus: "/assets/duda/tinnitus-ringing-in-ears-westchester.jpg",
  protection: "/assets/duda/hearing-protection-earmuffs-westchester.jpg",
  repair: "/assets/duda/hearing-aid-repair-westchester.png"
};

const homeServiceCards = [
  ["Hearing Testing", "/hearing-testing", homeImages.testing, "doctor administering hearing test on older man"],
  ["Hearing Aid Fitting", "/hearing-aid-fitting", homeImages.fitting, "hearing aid fitting appointment"],
  ["Tinnitus Therapy", "/tinnitus-therapy", homeImages.tinnitus, "sound reverberating around ear"],
  ["Hearing Protection", "/hearing-protection", homeImages.protection, "sound-cancelling earmuffs hanging up"],
  ["Hearing Aid Repair", "/hearing-aid-repair", homeImages.repair, "woman handing over small hearing aid for repair"]
];

const serviceVisuals = {
  "/hearing-testing": {
    image: homeImages.testing,
    imageAlt: "doctor administering hearing test on older man",
    eyebrow: "Diagnostic service",
    kicker: "Clarity starts here"
  },
  "/hearing-aid-fitting": {
    image: homeImages.fitting,
    imageAlt: "hearing aid fitting appointment",
    eyebrow: "Technology service",
    kicker: "Personalized hearing aid care"
  },
  "/tinnitus-therapy": {
    image: homeImages.tinnitus,
    imageAlt: "sound reverberating around ear",
    eyebrow: "Support service",
    kicker: "Tinnitus care that feels practical"
  },
  "/hearing-protection": {
    image: homeImages.protection,
    imageAlt: "sound-cancelling earmuffs hanging up",
    eyebrow: "Protection service",
    kicker: "Protection for work and life"
  },
  "/hearing-aid-repair": {
    image: homeImages.repair,
    imageAlt: "woman handing over small hearing aid for repair",
    eyebrow: "Repair service",
    kicker: "Keep your devices working well"
  }
} as const;

const homeFeatureCards = [
  {
    title: "MEET THE TEAM",
    href: "/meet-the-team",
    src: homeImages.meetTeam,
    alt: "doctor looking in woman's ear",
    text: "Learn more about our experienced team of hearing doctors."
  },
  {
    title: "WHY CHOOSE US",
    href: "/why-choose-us",
    src: homeImages.people,
    alt: "women laughing together over coffee",
    text: "Check out these many reasons to choose us for your hearing needs."
  },
  {
    title: "CONTACT US",
    href: "/contact-us",
    src: homeImages.experts,
    alt: "older man smiling on the phone",
    text: "Give us a call and take the first step towards restored hearing."
  }
];

const homeHearingBenefits = [
  ["Comfort & Convenience", "Hearing loss requires you to adjust everything you hear. Getting control of your hearing means you won’t be uncomfortable or inconvenienced from failing to hear what’s going on around you."],
  ["Confidence", "Boost your confidence in every area of your life with improved hearing."],
  ["Communication", "Missing out on the conversations around you can be hard on your relationships. Hearing solutions can ease the difficulties you have with speaking with family and friends."],
  ["Connection", "Those with hearing loss tend to avoid social situations altogether. Improve your hearing, and you’ll want to connect with others once again."]
];

// Three things the practice can actually prove, each linking to the page that
// substantiates it. The count is rendered live rather than typed: it was frozen
// at "486+" for months while Google kept adding reviews, which is how a figure
// nobody had updated ended up being quoted back at us.
const homeProofPoints = [
  { figure: <ReviewCount />, label: "Google reviews", href: "/reviews" },
  { figure: "6", label: "Doctors of Audiology on staff", href: "/meet-the-team" },
  { figure: "Dr. Cliff", label: "Approved Provider", href: "/dr-cliff-approved-provider" }
];

const homeTrustReasons = [
  "Our first priority is our patients. We would love to help you regain your ability to hear.",
  "Our hearing doctors can provide you with a hearing test to understand the root of your hearing loss.",
  "We stay up to date on the latest and most effective hearing solutions.",
  "We can adjust and repair your hearing aid as needed.",
  "We provide follow-up appointments so that our hearing doctors can always ensure your hearing stays top notch.",
  "We’re dedicated to your full satisfaction."
];

// The eight reasons render on /why-choose-us. They used to be generic
// reassurance any practice could have written — "We understand that hearing
// loss can affect every area of your life", "You deserve nothing but the best
// care" — plus an unbounded satisfaction guarantee with no stated terms and an
// unfalsifiable "best in the area". Each one now names something this practice
// actually does that a patient could check.
const whyChooseReasons = [
  {
    title: "Every fitting is measured in your own ear.",
    text: "Manufacturer default settings routinely land below prescriptive targets in the high frequencies, which is where consonants live. We put a probe microphone in your ear canal and measure what the hearing aid is actually delivering at your eardrum, then correct it. That is real-ear measurement, and it happens at every fitting."
  },
  {
    title: "You leave understanding your own audiogram.",
    text: "We go through the chart with you and translate it into the rooms you actually sit in: the restaurant, the meeting, the car, the phone. Then we tell you what technology will and will not change about each of them."
  },
  {
    title: "Doctors of Audiology, and the referral when you need one.",
    text: "Our audiologists hold doctorates in audiology and are licensed in New York. When something needs a physician rather than an audiologist, we say so and refer you to an ENT rather than fitting around it."
  },
  {
    title: "A full diagnostic battery, not a screening.",
    text: "A screening tells you whether to look further. A diagnostic evaluation is what we run: case history, otoscopy, air and bone thresholds, speech testing, and middle-ear measures where they are indicated. You get the results and the explanation in the same visit."
  },
  {
    title: "Every hearing aid comes with a trial period.",
    text: "You wear the devices in your own life before you commit. We go through the length of the trial and the return terms in writing first, and the follow-up visits inside it are already covered by the fitting fee."
  },
  {
    title: "We fit every major manufacturer.",
    text: "What we recommend is not constrained by what we happen to stock. If a different brand suits your hearing, your ears and your hands better, that is the one we fit."
  },
  {
    title: "The same audiologist, across the whole course of care.",
    text: "Your file stays with one clinician through the fitting, the follow-ups, the adjustments and the repairs. You are not starting the conversation again every visit."
  },
  {
    title: "Cleaning, checks and repairs are part of the deal.",
    text: "Wax guards clog, domes perish, receivers fail. We clean and check hearing aids here, and we handle repairs rather than posting you back to the manufacturer and leaving you without them."
  }
];

const teamMembers = [
  {
    name: "Dr. Jennifer Ratner, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "/assets/duda/dr-jennifer-ratner-audiologist-westchester.jpg",
    alt: "Jennifer Ratner, Au.D. - Doctor of Audiology - Audiology Associates of Westchester"
  },
  {
    name: "Dr. Caitlin Dold, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Lead Audiologist, Doctor of Audiology",
    image: "/assets/duda/dr-caitlin-dold-audiologist-westchester.jpg",
    alt: "Caitlin Dold, Au.D. - Doctor of Audiology at Audiology Associates of Westchester"
  },
  {
    name: "Dr. Jenna M. Elias, Au.D., F-AAA",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/duda/dr-jenna-elias-audiologist-westchester.jpg",
    alt: "Dr. Jenna Elias"
  },
  {
    name: "Dr. Leannmarie Senat",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/team/dr-leannmarie-senat-audiologist-westchester.jpg",
    alt: "Dr. Leannmarie Senat"
  },
  {
    name: "Dr. Julia Rivera, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "/assets/team/dr-julia-rivera-audiologist-westchester.jpg",
    alt: "Dr. Julia Rivera, Au.D."
  },
  {
    name: "Dr. Kira Savin, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "/assets/duda/dr-kira-savin-audiologist-westchester.jpg",
    alt: "Kira Savin, Au.D. - Doctor of Audiology at Audiology Associates of Westchester"
  },
  {
    name: "Jennifer Tarlton",
    pronouns: "(she/her/hers)",
    role: "Practice Administrator",
    image: "/assets/duda/jennifer-tarlton-practice-administrator-westchester.jpg",
    alt: "Jennifer Tarlton"
  },
  {
    name: "Alicia Rivera",
    pronouns: "",
    role: "Patient Care Coordinator Lead / Billing Specialist",
    image: "/assets/duda/alicia-rivera-patient-care-coordinator-westchester.jpg",
    alt: "Alicia Rivera - Patient Care Coordinator Lead/ Billing Specialist"
  },
  {
    name: "Hazel Icaza",
    pronouns: "",
    role: "Patient Care Coordinator",
    image: "/assets/duda/hazel-icaza-patient-care-coordinator-westchester.jpg",
    alt: "Hazel Icaza, Patient Care Coordinator at Audiology Associates of Westchester"
  },
  {
    name: "Francheska Cotto",
    pronouns: "(she/her/hers)",
    role: "Patient Care Coordinator",
    image: "/assets/team/francheska-cotto-patient-care-coordinator-westchester.jpg",
    alt: "Francheska Cotto"
  }
];

type LegacyTeamProfile = {
  name: string;
  pronouns: string;
  role: string;
  image: string;
  alt: string;
  paragraphs: string[];
  credentials?: string[];
  affiliations?: string[];
};

// The bios here used to be a second copy of the text in lib/team.ts, and the
// two had already drifted: this file still said "the top graduate audiology
// program in the country" months after lib/team.ts stopped. Every profile now
// reads its paragraphs from lib/team.ts, which is the single source, exactly as
// the Rivera entry always did. Credentials and photos stay local because the
// roster renders them differently from the bio pages.
const legacyTeamProfiles: Array<{ group: string; profiles: LegacyTeamProfile[] }> = [
  {
    group: "Doctors of Audiology",
    profiles: [
      {
        ...teamMembers[0],
        paragraphs: providerForName(teamMembers[0].name)?.paragraphs ?? [],
        credentials: [
          "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
          "College: B.A. Communication Sciences and Disorders, Magna Cum Laude; Florida State University, 2008",
          "Graduate: Au.D. Audiology, Vanderbilt University School of Medicine, 2012",
          "Board Certification: American Academy of Audiology",
          "Awards: American Academy of Audiology, 2013-2014 Scholar Award",
          "Certificate Holder: Tinnitus Management (CH-TM)",
          "Professional Affiliations:"
        ],
        affiliations: [
          "American Academy of Audiology",
          "Tinnitus Practitioners Association",
          "American Speech, Language, and Hearing Association"
        ]
      },
      {
        ...teamMembers[1],
        paragraphs: providerForName(teamMembers[1].name)?.paragraphs ?? [],
        credentials: [
          "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
          "College: B.A., Sociology; Self-Designed Second Major: Learning and Culture in the Deaf Community, College of the Holy Cross, 2010",
          "Graduate: Au.D. Audiology, Vanderbilt University School of Medicine, 2020",
          "Certificate Holder: Tinnitus Management (CH-TM); Auditory Preceptor (CH-AP)",
          "Professional Proficiency in American Sign Language",
          "Professional Affiliations:"
        ],
        affiliations: [
          "American Academy of Audiology – Academy Fellow",
          "American Speech-Language-Hearing Association – Certificate of Clinical Competence"
        ]
      },
      {
        ...teamMembers[2],
        paragraphs: providerForName(teamMembers[2].name)?.paragraphs ?? [],
        credentials: [
          "Audiology Licensure: New York State and NYS Hearing Aid Dispenser",
          "College: M.A. Audiology, Hofstra University, 2015",
          "Graduate: University of Florida, Doctor of Audiology; Spring 2018",
          "Professional Affiliations:"
        ],
        affiliations: [
          "American Academy of Audiology – Academy Fellow",
          "American Speech-Language-Hearing Association - Certificate of Clinical Competence"
        ]
      },
      {
        ...teamMembers[3],
        paragraphs: providerForName(teamMembers[3].name)?.paragraphs ?? [],
        credentials: [
          "College: CUNY Queens College, B.A., Communication Science and Disorders, Spring 2021",
          "Graduate: CUNY Graduate Center, Doctor of Audiology; Spring 2025"
        ]
      },
      {
        ...teamMembers[4],
        // Her bio lives in her provider profile (lib/team.ts) so the roster
        // and the profile page cannot drift. The other profiles in this list
        // still carry their own copy.
        paragraphs: providerForName(teamMembers[4].name)?.paragraphs ?? []
      }
    ]
  },
  {
    group: "Executive Team",
    profiles: [
      {
        ...teamMembers[5],
        paragraphs: providerForName(teamMembers[5].name)?.paragraphs ?? [],
        credentials: [
          "Audiology Licensure: New York State; New York State Hearing Aid Dispenser",
          "College: B.A., Communication Sciences and Disorders, Pace University, 2005",
          "Graduate: Au.D., Salus University, George S. Osborne College of Audiology, 2013",
          "Certification: American Academy of Audiology",
          "Certificate Holder: Tinnitus Management (CH-TM)",
          "Professional Affiliations:"
        ],
        affiliations: [
          "American Academy of Audiology – Academy Scholar",
          "American Speech-Language-Hearing Association",
          "Long Island Speech and Hearing Association"
        ]
      },
      {
        ...teamMembers[6],
        paragraphs: providerForName(teamMembers[6].name)?.paragraphs ?? [],
      }
    ]
  },
  {
    group: "Administrative Team",
    profiles: [
      {
        ...teamMembers[7],
        pronouns: "(she/her/hers)",
        role: "Patient Care Coordinator Lead/Billing Specialist",
        paragraphs: [
          "Alicia is a cornerstone of our audiology practice, serving with dedication and expertise as both the Patient Care Coordinator Lead/Billing Specialist. With a remarkable career spanning nearly four decades in the medical field, Alicia joined our team a decade ago and has since played a pivotal role in ensuring our operations run seamlessly.",
          "Since embarking on her medical career in 1985, Alicia has accumulated a wealth of experience and knowledge that enriches her dual roles within our practice. As the Patient Care Coordinator Lead/Billing Specialist, she warmly welcomes patients with a reassuring smile, coordinates appointments effortlessly, and ensures a hospitable environment for everyone who walks through our doors. Her attention to detail and organizational skills guarantee that every patient receives prompt and courteous service.",
          "In her capacity as Billing Specialist, Alicia meticulously oversees all financial aspects of our practice. Her precision ensures accurate billing processes, transparent financial communications, and effective management of insurance claims. Alicia's deep understanding of medical billing procedures and her commitment to efficiency contribute significantly to the smooth operation of our practice.",
          "Alicia's tenure of 10 years with our company reflects her loyalty and dedication to both our team and our patients. Beyond her professional responsibilities, she is known for her compassion and patience, always willing to go the extra mile to assist patients with their inquiries and concerns.",
          "Outside of work, Alicia enjoys spending time with her family and pursuing her interests in culinary and community volunteering. Her extensive experience, combined with her genuine care for our patients' well-being, makes her an indispensable asset to our audiology practice."
        ]
      },
      {
        ...teamMembers[8],
        pronouns: "(she/her/hers)",
        paragraphs: [
          "Hazel Icaza is a Patient Care Coordinator here at Audiology Associates of Westchester who strives to help our patients and meet their needs. With over 6+ years of experience in the healthcare field, she is continuing to grow her knowledge in the counseling and social work field. Currently attending Lehman College, she hopes to be an asset to those who are struggling with hearing loss and help them find the resources they need to meet their wants and be a resource for people in need."
        ]
      },
      {
        ...teamMembers[9],
        pronouns: "(she/her/hers)",
        // No bio supplied yet; the renderer maps over paragraphs, so an empty
        // array simply omits the body copy.
        paragraphs: []
      }
    ]
  }
];

// [title, description, logo, logo alt, destination]. The destination is the
// brand page we maintain for that manufacturer; an empty string means we carry
// the brand but have no page for it yet, so that card renders unlinked.
const hearingAidBrands: Array<[string, string, string, string, string]> = [
  ["Widex Hearing Aids", "Widex has been family-owned since 1956 and is known for very low processing latency and natural sound. Their current platform is Widex Allure. Worth knowing before you choose it: the Zen tinnitus programme is not available on Allure.", "/assets/duda/widexlogo.png", "Widex High Definition Hearing logo", brandPath("widex")],
  ["Starkey Hearing Aids", "Starkey Hearing Technologies was established back in 1964. They design all kinds of hearing aids, including ones that are receiver in canal, completely in canal, behind the ear, in the canal, and in the ear. Their current platform is Starkey Omega AI, which HearAdvisor grades A and ranks second of the thirty-six prescription hearing aids it has tested. Starkey also offers the widest range of custom in-the-ear styles on this list.", "/assets/duda/starkeylogo-250x131.png", "Starkey logo", brandPath("starkey")],
  ["Phonak Hearing Aids", "Phonak's current line is the Audéo Infinio Ultra Sphere and the new Audéo EON, alongside the rechargeable custom Virto R Infinio, the titanium in-the-canal models and CROS Infinio. Infinio Ultra Sphere is one of the few platforms with substantial independent measurement behind it.", "/assets/duda/phonaklogo-250x53.png", "Phonak logo", brandPath("phonak")],
  ["Lyric Hearing Aids", "Lyric creates extended wear, nearly invisible hearing aids. Phonak describes the Lyric™ as fully invisible: it sits deep in the ear canal, is placed by a trained professional, and stays in for months at a time between visits.", "/assets/duda/lyriclogo-250x128.png", "Lyric logo", "/lyric-invisible-hearing"],
  ["Unitron Hearing Aids", "Unitron makes straightforward hearing aids across receiver-in-canal and behind-the-ear styles. Ask us which of their current models we fit, and what they cost against the equivalent tier from the larger brands.", "/assets/duda/unitronlogo-250x64.png", "Unitron Connect logo", ""],
  ["Signia & Siemens Hearing Aids", "Signia's current flagship is MaX, released in August 2026, which runs four neural networks together. The wider Signia IX range covers custom, instant-fit, slim and CROS styles, and carries Notch Therapy and tinnitus signals as standard.", "/assets/duda/signia-logo.png", "Signia logo", brandPath("signia")],
  ["Rexton Hearing Aids", "Rexton offers hearing aids and accessories to improve your quality of life. Their focus is on accessibility and personalization to make sure everyone in need of a hearing aid finds what they need.", "/assets/duda/rextonlogo-250x47.png", "Rexton logo", ""],
  ["Oticon Hearing Aids", "Oticon's current platform is Oticon Reveal, with Oticon Intent still in the range. Reveal ships Bluetooth LE Audio, Auracast and a telecoil working from day one, and carries Tinnitus SoundSupport on all four technology levels.", "/assets/duda/oticon-hearing-aids-logo.png", "Oticon logo", brandPath("oticon")],
  ["Resound Hearing Aids", "ReSound has been making hearing aids since 1943 and has a long track record on wireless connectivity. Their current platforms are Vivia and Sensia, with a wide style range including bimodal and CROS fittings.", "/assets/duda/resoundlogo-250x102.png", "ReSound logo", brandPath("resound")],
  ["Caption Call", "CaptionCall makes a transcript of phone conversations so you can see what the other person is saying. This is a real-time solution for those with hearing loss who have trouble using a phone.", "/assets/duda/caption-call-trans-bg1.png", "Caption Call logo", ""],
  ["CapTel", "CapTel is a phone that amplifies the noise you want while reducing the noise you don’t want. It also provides a caption and transcript of the conversation.", "/assets/duda/captel-logo.png", "CapTel logo", ""]
];

const liveBlogOrder = [
  "/celebrating-pride-month-embracing-inclusivity-and-compassion",
  "/psoriasis-affects-more-than-your-skin",
  "/how-to-take-care-of-a-blocked-ear"
];

const liveBlue = "#005a9c";
const liveSoftBlue = "#dbe9f3";

type LegacyLocationSection = {
  title: string;
  paragraphs: string[];
  background?: "blue" | "white";
  // Path of the office in lib/site.ts that this section is about. SET THIS on
  // every section showing one of our offices.
  //
  // Why it exists: a bare address in `mapQuery` becomes
  // `maps/search/?api=1&query=<address>`, which Google resolves to its own
  // ADDRESS pin rather than to our Business Profile marker. At 325 NY-100 that
  // pin sits in the plaza next door, so "Get Directions" sent Somers patients
  // to the wrong unit, and the embedded map showed the wrong spot. With
  // `officePath` set, the button uses the office's verified `directionsUrl`
  // (a place/CID link) and the embed is queried by business name, both of
  // which land on the practice itself.
  officePath?: string;
  mapQuery?: string;
  mapCaption?: string;
  addressLines?: string[];
  phone?: string;
  phoneHref?: string;
  fax?: string;
  hours?: string[];
};

type LegacyLocationContent = {
  intro?: string;
  heading: string;
  paragraphs: string[];
  sections: LegacyLocationSection[];
};

const legacyAreaCitySlugs: Record<string, string> = {
  "/greenwich-ct": "greenwich",
  "/harrison-ny": "harrison",
  "/mt-kisco-ny": "mount-kisco",
  "/rye-ny": "rye",
  "/Scarsdale-NY": "scarsdale",
  "/Somers-NY": "somers",
  "/White-Plains-NY": "white-plains"
};

const legacyLocationContent: Record<string, LegacyLocationContent> = {
  "/rye-ny": {
    heading: "Expert Audiologists, Just 10 Minutes Away from Rye, NY",
    paragraphs: [
      "As the residents of Rye, NY continue to age, the need for reliable audiology services is greater than ever. While you may be experiencing the symptoms of hearing loss, advances in modern technology have made it possible to maximize your hearing throughout your golden years. All you have to do is visit Audiology Associates of Westchester to access the very latest in hearing aids and ear protection!",
      "For years, our certified team has continued to assist patients throughout Rye, NY and the rest of Westchester County. We've created a welcoming facility in the Harrison, NY community to ensure our patients feel calm and comfortable throughout their audiology screenings and hearing aid fittings. It's truly never been easier to access contemporary audiology services!"
    ],
    sections: [
      {
        title: "Contact our Hearing Doctor to Access the Latest in Audiology Services",
        background: "blue",
        paragraphs: [
          "The team at Audiology Associates of Westchester is proud to help local residents combat the symptoms of hearing loss. In fact, our Harrison, NY facility is located just 10 minutes away from the heart of Rye. Our specialists are always standing by to help reduce the discomfort that's associated with hearing loss, tinnitus, and many other related conditions.",
          "If you're interested in scheduling an appointment with our hearing experts, don't waste another moment. Simply contact one of the knowledgeable representatives at Audiology Associates of Westchester. Our certified team of hearing doctors are fully prepared to administer modern audiology services and hearing aid fittings."
        ],
        mapQuery: "Rye, NY",
        mapCaption: "Get Directions from the Rye, NY Community"
      }
    ]
  },
  "/greenwich-ct": {
    heading: "Expert audiologists, just 15 minutes away from Greenwich, CT!",
    paragraphs: [
      "Located at the southwestern tip of Connecticut, Greenwich is considered one of the most affluent areas to live in the United States. Our area is made up primarily of working professionals, though as time passes, many members of our community are beginning to think about their golden stages of life.",
      "Many people experience hearing loss as they age, though you can experience auditory issues at any age. If you live in Greenwich and are experiencing auditory problems, it's important to seek help right away. Ongoing hearing conditions such as tinnitus or consistent hearing loss can be difficult, annoying, and frightening to handle. An experienced audiologist can help you manage your symptoms and hear better.",
      "Audiology Associates of Westchester is conveniently located to provide hearing aids and therapy services to the entire Greenwich area."
    ],
    sections: [
      {
        title: "Audiologist Serving Greenwich, CT",
        background: "white",
        paragraphs: [
          `Audiology Associates of Westchester is a New York practice. Greenwich patients come to our Harrison office at 550 Mamaroneck Ave, Suite 407, about fifteen minutes away. Our audiologists are Doctors of Audiology. They provide hearing tests, hearing aids, tinnitus care and repairs there. Call ${primaryPhone} to book.`
        ]
      },
      {
        title: "Hearing Aids for Greenwich, CT Patients",
        background: "blue",
        paragraphs: [
          "If hearing aids are the answer, we fit and program them at our Harrison office. Every fitting is checked with a probe microphone in your own ear. Follow-up visits fine-tune the sound after you have worn the devices in real rooms.",
          "Your plan may follow Connecticut rules, and we are a New York practice. Ask your plan how it treats out-of-state providers. Our biller can check any plan for you. Our insurance guide explains the usual rules."
        ]
      },
      {
        title: "Tinnitus Treatment for Greenwich, CT Patients",
        background: "white",
        paragraphs: [
          "The National Institute on Deafness and Other Communication Disorders says there is no cure for most tinnitus, but there are ways to reduce symptoms. We start with a hearing test and a look in your ears. Then we talk about what you hear and what helps, such as counseling, sound support and hearing aids when hearing loss is part of the picture.",
          "See a doctor promptly if the ringing came on suddenly, is in one ear only, beats with your pulse, or comes with hearing loss, dizziness or weakness."
        ]
      },
      {
        title: "Quality Audiology Services for All of Greenwich, CT!",
        background: "blue",
        paragraphs: [
          "Greenwich patients cross the state line to our Harrison office, about fifteen minutes away on Mamaroneck Avenue. Hearing aids do not restore hearing, and we will not tell you otherwise. What a well-verified fitting does is give you back speech clarity in the rooms where you are currently losing it, and there is a measurable difference between a device set to the manufacturer default and one measured in your own ear.",
          "If you are experiencing hearing loss or discomfort related to auditory issues, reach out to our professional audiologists today. Our hearing doctors are here to help you manage your symptoms and regain some control over your condition. Our hearing doctors are proud to serve the entire Greenwich, CT area!"
        ],
        mapQuery: "Greenwich, CT",
        mapCaption: "Get Directions from the Greenwich, CT Community"
      },
      {
        title: "Contact our Hearing Doctor Today!",
        background: "white",
        paragraphs: [
          "Contact Audiology Associates of Westchester today to schedule an appointment with our hearing doctors and learn more about our audiology services."
        ]
      }
    ]
  },
  "/mt-kisco-ny": {
    heading: "Experienced audiologists located just a short drive from Mt. Kisco, NY!",
    paragraphs: [
      "Mt. Kisco is a small and quaint village in Westchester County, NY. The town can trace its origins back to hundreds of years and is home to a number of beautiful and historic buildings. The town is known for its diverse housing, including breathtaking historical homes, and its picturesque setting.",
      "Most residents of Mt. Kisco are working professionals raising their families together in a close-knit community. If you are part of the Mt. Kisco community and have been experiencing hearing loss or other symptoms of hearing problems, seek out an experienced local audiologist that can help you get to the bottom of the issue.",
      "Hearing problems can manifest in many different ways, including headaches and dizziness - you may not immediately realize that the problem lies with your auditory system. If you suspect that you or a loved one might be experiencing hearing problems, Audiology Associates of Westchester is here to help."
    ],
    sections: [
      {
        title: "Quality Audiology Services for Mt. Kisco, NY",
        background: "blue",
        paragraphs: [
          "You don't have to live with auditory issues, especially if they are causing problems in your day-to-day life. If you or a loved one are experiencing hearing loss, ringing in your ears, or other hearing problems, consult an experienced and knowledgeable professional that will work tirelessly to diagnose and treat the issue.",
          "The Somers office is a short drive from Mt. Kisco. Our professional audiologists will work with you to identify and treat the hearing problem you are experiencing. Contact us today to schedule an appointment with a hearing doctor or to learn more about our services!"
        ],
        mapQuery: "Mt. Kisco, NY",
        mapCaption: "Get Directions from the Mt. Kisco, NY Community"
      }
    ]
  },
  "/harrison-ny": {
    intro: "Hearing aids, hearing protection, tinnitus treatment & more!",
    heading: "Audiologist in Harrison, NY",
    paragraphs: [
      "Approximately twenty two miles north of Manhattan lies the coterminous town-village of Harrison, NY. Considered one of the most affluent suburbs in Westchester County, Harrison is home primarily to families and many individuals commute to New York City for work. About twenty percent of the population includes children under the age of eighteen.",
      "Harrison is our main office, on Mamaroneck Avenue. Most people arrive because one room has become hard: a restaurant, a conference call, a car with the radio on. The first appointment is a full diagnostic evaluation, and we go through the results with you the same day. Tinnitus care, hearing protection, fittings and repairs all run out of this office."
    ],
    sections: [
      {
        title: "Learn more about our audiology services",
        background: "blue",
        paragraphs: [
          "In order to best serve you, Audiology Associates of Westchester has an office on Mamaroneck Avenue in Harrison, NY. We offer the same array of professional audiology services at all of our locations. If you are experiencing any hearing loss symptoms or other auditory problems, our team of knowledgeable audiologists can help find the right solution for your specific needs, helping you hear more clearly.",
          "Our services include hearing aid fitting, repair, and service that helps your device fit more comfortably and operate correctly. In addition, we offer occupational hearing protection for those who work in loud environments. For more information about the audiology services we offer the Harrison, NY area, please don't hesitate to contact us today!"
        ],
        officePath: "/harrison-ny",
        mapQuery: "550 Mamaroneck Ave Suite 407 Harrison NY 10528",
        mapCaption: "Get Directions to Our Harrison, NY Office",
        addressLines: ["550 Mamaroneck Ave, Suite 407 (4th floor)", "Harrison, NY 10528"],
        phone: primaryPhone,
        phoneHref: primaryPhoneHref,
        hours: ["Monday-Friday: 8:30am - 5:00pm"]
      },
      {
        title: "Call (914) 949-0034 to Schedule An Appointment with Our Audiologists!",
        background: "white",
        paragraphs: [
          "We can answer all of your queries and schedule you an appointment for a hearing test. We look forward to providing you with the solutions you need to clearly and comfortably hear the world around you."
        ]
      }
    ]
  },
  "/Somers-NY": {
    heading: "Somers, NY Office",
    paragraphs: [],
    sections: [
      {
        title: "Call Now to Request an Appointment",
        background: "white",
        paragraphs: [],
        officePath: "/Somers-NY",
        mapQuery: "325 NY 100 Somers NY 10589",
        mapCaption: "Get Directions to Our Somers, NY Office",
        addressLines: ["325 NY 100, Somers, NY 10589"],
        phone: "(914) 556-6720",
        phoneHref: "tel:+19145566720",
        hours: [
          "Monday: 8:30am - 5:00pm",
          "Tuesday: 8:30am - 5:00pm",
          "Wednesday: 8:30am - 5:00pm",
          "Thursday: Closed",
          "Friday: 8:30am - 2:30pm"
        ]
      },
      {
        title: "Audiology Services for Somers, NY",
        background: "blue",
        paragraphs: [
          "If you live in Somers, Mahopac, Putnam Valley, or the surrounding areas and are experiencing hearing loss symptoms, be sure to reach out to us today. Our caring team will work with you to find a solution that takes into consideration your personal circumstance and comfort. Make an appointment to meet with our audiologist in Somers, NY today. We look forward to working with you.",
          "Our Somers office has served northern Westchester and Putnam since 2021. Dr. Caitlin Dold and Dr. Julia Rivera both see patients here as well as at Harrison, so you can usually keep the same audiologist whichever office is easier for you. Hearing tests, fittings, tinnitus care, hearing protection and repairs all happen at this location.",
          "We are proud to offer hearing aids and accessories from top-rated brands in the industry including Lyric®, Oticon, Phonak, and more."
        ]
      }
    ]
  },
  "/White-Plains-NY": {
    intro: "Audiology Care for White Plains, NY",
    heading: "Hearing Care Serving White Plains from Our Harrison Office",
    paragraphs: [
      "As one of the most sought-after places to live in Westchester County, White Plains, NY is well-known for its educational institutions, medical facilities, and historical points of interest. Community involvement is a hallmark of the city and with a recent focus on urban renewal, organizations and businesses throughout White Plains, NY are dedicated to providing visitors and residents alike with a high quality of life.",
      "White Plains is a service area, not a physical Audiology Associates office. Patients can visit our Harrison office at 550 Mamaroneck Ave, Suite 407 (4th floor), where our audiologists provide hearing testing, hearing aids, tinnitus therapy, hearing protection, and follow-up care."
    ],
    sections: [
      {
        title: "Audiologist Serving White Plains, NY",
        background: "white",
        paragraphs: [
          `Audiology Associates of Westchester serves White Plains patients from our Harrison office at 550 Mamaroneck Ave, Suite 407. White Plains is a service area, not an office. Our audiologists are Doctors of Audiology. Harrison is open Monday to Friday. Call ${primaryPhone} to book.`
        ]
      },
      {
        title: "Hearing Test in White Plains, NY",
        background: "blue",
        paragraphs: [
          "A hearing test is the first step. Ours is a full diagnostic evaluation, not a screening. We measure the softest tones you can hear across the pitch range and how well you understand speech, and we check the eardrum and middle ear. Your audiologist then explains your audiogram in plain words.",
          "Book your hearing test at our Harrison office. If you have ringing in your ears, an earwax problem or a sudden change in your hearing, tell us when you call."
        ]
      },
      {
        title: "Hearing Aids for White Plains Patients",
        background: "white",
        paragraphs: [
          "If hearing aids are the answer, we fit and program them at our Harrison office. Every fitting is checked with a probe microphone in your own ear. Follow-up visits fine-tune the sound after you have worn the devices in real rooms.",
          "We fit hearing aids from Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron and Rexton. Your hearing test, not a brand, decides what we recommend."
        ]
      },
      {
        title: "Hearing Aid Repair near White Plains, NY",
        background: "blue",
        paragraphs: [
          "Hearing aids that sound weak, whistle, cut out or will not charge are often blocked with wax, or need a new dome or filter. Bring both devices, the charger and spare parts to our Harrison office for cleaning, parts and repair.",
          "If you bought your hearing aids somewhere else, call first with the make and model. We tell you what we can do before you drive over."
        ]
      },
      {
        title: "Nearest Office: Harrison, NY",
        background: "white",
        paragraphs: [
          "If you are searching for an experienced hearing doctor in White Plains, Rye, Port Chester, or the nearby communities, we invite you to reach out to us today. Our caring and compassionate team will listen to your concerns and conduct testing based on your hearing loss symptoms. Following your diagnosis, our hearing doctor will recommend the product or therapy to help improve your hearing health or the hearing health of a loved one.",
          "If you live in White Plains, NY and have questions about your hearing, call Audiology Associates of Westchester today to schedule an appointment."
        ],
        officePath: "/harrison-ny",
        mapQuery: "550 Mamaroneck Ave Suite 407 Harrison NY 10528",
        mapCaption: "Get Directions to Our Harrison, NY Office",
        addressLines: ["550 Mamaroneck Ave, Suite 407 (4th floor)", "Harrison, NY 10528"],
        phone: primaryPhone,
        phoneHref: primaryPhoneHref,
        hours: ["Monday-Friday: 8:30am - 5:00pm"]
      }
    ]
  },
  "/Scarsdale-NY": {
    intro: "Audiology Care for Scarsdale, NY",
    heading: "Hearing Care Serving Scarsdale from Our Harrison Office",
    paragraphs: [
      "Scarsdale is a town and village in Westchester County, New York. Living in Scarsdale offers residents a suburban feel and most residents own their homes. In Scarsdale there are a lot of restaurants, coffee shops, and parks. The public schools in Scarsdale are highly rated, making this a great place to live and start a family.",
      "The scenic village is just about 35 minutes from New York City and has been ranked the richest town on the East Coast for years. If you live in the area and are noticing hearing loss symptoms, get in touch with the team at Audiology Associates of Westchester to schedule an appointment.",
      "Scarsdale patients are seen at our Harrison office on Mamaroneck Avenue. A first visit is a full diagnostic evaluation rather than a screening, and you leave the same appointment knowing what your audiogram says and what it means for the rooms you actually struggle in. If hearing aids are the answer, every fitting is verified with a probe microphone in your own ear."
    ],
    sections: [
      {
        title: "Audiologist Serving Scarsdale, NY",
        background: "white",
        paragraphs: [
          `Audiology Associates of Westchester serves Scarsdale patients from our Harrison office at 550 Mamaroneck Ave, Suite 407. Scarsdale is a service area, not an office. Our audiologists are Doctors of Audiology. Harrison is open Monday to Friday. Call ${primaryPhone} to book.`
        ]
      },
      {
        title: "Hearing Test in Scarsdale, NY",
        background: "blue",
        paragraphs: [
          "A hearing test is the first step. Ours is a full diagnostic evaluation, not a screening. We measure the softest tones you can hear across the pitch range and how well you understand speech, and we check the eardrum and middle ear. Your audiologist then explains your audiogram in plain words.",
          "Book your hearing test at our Harrison office. If you have ringing in your ears, an earwax problem or a sudden change in your hearing, tell us when you call."
        ]
      },
      {
        title: "Hearing Aids for Scarsdale Patients",
        background: "white",
        paragraphs: [
          "If hearing aids are the answer, we fit and program them at our Harrison office. Every fitting is checked with a probe microphone in your own ear. Follow-up visits fine-tune the sound after you have worn the devices in real rooms.",
          "We fit hearing aids from Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron and Rexton. Your hearing test, not a brand, decides what we recommend."
        ]
      },
      {
        title: "Hearing Aid Repair near Scarsdale, NY",
        background: "blue",
        paragraphs: [
          "Hearing aids that sound weak, whistle, cut out or will not charge are often blocked with wax, or need a new dome or filter. Bring both devices, the charger and spare parts to our Harrison office for cleaning, parts and repair.",
          "If you bought your hearing aids somewhere else, call first with the make and model. We tell you what we can do before you drive over."
        ]
      },
      {
        title: "Nearest Office: Harrison, NY",
        background: "white",
        paragraphs: [
          "If you are experiencing hearing loss symptoms or other auditory problems in Scarsdale, NY, our nearby Harrison office is ready to help. Scarsdale is a service area, not a physical Audiology Associates office.",
          "It’s important you don’t trust just anyone with your hearing aid fitting process; choose an experienced team that can perfect your customized fitting. We are proud to serve the entire Scarsdale, NY area and beyond! Contact us today to schedule an appointment!"
        ],
        officePath: "/harrison-ny",
        mapQuery: "550 Mamaroneck Ave Suite 407 Harrison NY 10528",
        mapCaption: "Get Directions to Our Harrison, NY Office",
        addressLines: ["550 Mamaroneck Ave, Suite 407 (4th floor)", "Harrison, NY 10528"],
        phone: primaryPhone,
        phoneHref: primaryPhoneHref,
        hours: ["Monday-Friday: 8:30am - 5:00pm"]
      }
    ]
  }
};

// Two offices, two numbers. The homepage used to carry a navy button labelled
// "Call the nearest location" whose href was /contact-us, so a patient who tapped
// a button that said "call" got a web page instead of the dialler. There is no
// single "nearest" office to link to, so both are offered by name.
// Patient reviews, wherever they are worth showing. Lifted out of the homepage
// so /hearing-testing and /how-we-can-help can carry the same block: those are
// the two other pages a patient reads before deciding, and 486 reviews were
// sitting on /reviews, which nothing links to prominently.
//
// The count is rendered live from lib/reviewStats.ts rather than typed in, so
// this band and the reviews page can never quote two different totals.
function PatientReviewsBand({
  heading = "In our patients\u2019 words",
  className = "section bg-[#f7fbfd]"
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">
          What patients say &middot; <ReviewCount /> reviews on {reviewAggregate.source}
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f]">{heading}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <article
              className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_14px_32px_rgba(0,90,156,0.08)]"
              key={testimonial.author}
            >
              <div aria-hidden="true" className="flex gap-1 text-[#ffd45a]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star fill="currentColor" key={star} size={18} strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-[17px] leading-7 text-[var(--foreground)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-5 font-black text-[#003f6f]">{testimonial.author}</p>
              <p className="text-[15px] text-[var(--muted)]">{testimonial.tag} &middot; Verified Google review</p>
            </article>
          ))}
        </div>
        <Link
          className="focus-ring mt-8 inline-flex min-h-[44px] items-center rounded-md border-2 border-[#005a9c] px-6 py-3 font-black text-[#005a9c] transition hover:bg-[#eaf4fb]"
          href="/reviews"
        >
          Read more patient reviews
        </Link>
      </div>
    </section>
  );
}

// Office addresses, hours and phone numbers in visible text, read from
// lib/site.ts so they cannot drift from the contact page. Added for the
// "audiologist near me" and "hearing test near me" searches, which want the
// address and hours on the page that ranks, not only on /contact-us.
function OfficesNearYouBand({
  heading,
  intro,
  className = "section bg-white"
}: {
  heading: string;
  intro: string;
  className?: string;
}) {
  const offices = locations.filter((location) => location.type === "office");
  return (
    <section className={className}>
      <div className="container">
        <h2 className="text-4xl font-black leading-tight text-[#003f6f]">{heading}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--foreground)]">{intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {offices.map((office) => (
            <article className="rounded-md border border-[#d5e7f4] bg-[#f7fbfd] p-6" key={office.path}>
              <h3 className="text-2xl font-black text-[#003f6f]">
                <Link className="focus-ring underline" href={office.path}>
                  {office.name}
                </Link>
              </h3>
              <address className="mt-3 space-y-1 text-[17px] leading-7 not-italic">
                <p>{office.address}</p>
                <p>
                  Phone:{" "}
                  <a className="font-bold text-[#005a9c] underline" href={office.phoneHref}>
                    {office.phone}
                  </a>
                </p>
              </address>
              <p className="mt-4 font-black">Office hours</p>
              <ul className="mt-1 text-[17px] leading-7">
                {office.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <a
                className="focus-ring mt-4 inline-flex items-center gap-2 font-bold text-[#005a9c] underline"
                href={office.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                rel="noreferrer"
                target="_blank"
              >
                <MapPin size={18} aria-hidden="true" /> Get directions
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Plain internal links for pages whose template has no related-links block
// (the recovered legacy pages and the product pages). Keyed by path.
const pageCrossLinks: Record<string, { heading: string; links: { label: string; href: string }[] }> = {
  "/lyric-invisible-hearing": {
    heading: "More about Lyric and invisible hearing aids",
    links: [
      { label: "Phonak Lyric: specifications and care", href: "/hearing-aids-brands/phonak/phonak-lyric" },
      { label: "Invisible Hearing Aids: Pros, Cons and Candidacy", href: "/invisible-hearing-aids-pros-cons-candidacy" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" }
    ]
  },
  "/hearing-aids-brands/phonak/phonak-lyric": {
    heading: "Lyric hearing aids in Westchester",
    links: [
      { label: "Lyric Hearing Aids in Westchester, NY", href: "/lyric-invisible-hearing" },
      { label: "Invisible Hearing Aids: Pros, Cons and Candidacy", href: "/invisible-hearing-aids-pros-cons-candidacy" },
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" }
    ]
  },
  "/types-of-hearing-aids": {
    heading: "Keep reading about hearing aids",
    links: [
      { label: "Hearing Aid Brands and Manufacturers", href: "/hearing-aids-brands" },
      { label: "Lyric Hearing Aids in Westchester", href: "/lyric-invisible-hearing" },
      { label: "Invisible Hearing Aids: Pros, Cons and Candidacy", href: "/invisible-hearing-aids-pros-cons-candidacy" },
      { label: "Rechargeable vs Battery Hearing Aids", href: "/rechargeable-vs-battery-hearing-aids" },
      { label: "Bluetooth Hearing Aids: What to Know Before Buying", href: "/bluetooth-hearing-aids-before-buying" },
      { label: "Hearing Testing", href: "/hearing-testing" }
    ]
  },
  "/hearing-aids-brands": {
    heading: "Keep reading about hearing aids",
    links: [
      { label: "Types of Hearing Aids", href: "/types-of-hearing-aids" },
      { label: "Lyric Hearing Aids in Westchester", href: "/lyric-invisible-hearing" },
      { label: "How Much Do Hearing Aids Cost in Westchester County?", href: "/hearing-aid-cost-westchester-county" },
      { label: "Questions to Ask Before Buying Hearing Aids", href: "/questions-before-buying-hearing-aids" }
    ]
  },
  "/Scarsdale-NY": {
    heading: "Services for Scarsdale patients",
    links: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Harrison office", href: "/harrison-ny" }
    ]
  },
  "/White-Plains-NY": {
    heading: "Services for White Plains patients",
    links: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Tinnitus Therapy", href: "/tinnitus-therapy" },
      { label: "Harrison office", href: "/harrison-ny" }
    ]
  },
  "/greenwich-ct": {
    heading: "Services for Greenwich patients",
    links: [
      { label: "Hearing Testing", href: "/hearing-testing" },
      { label: "Hearing Aid Fitting", href: "/hearing-aid-fitting" },
      { label: "Tinnitus Management", href: "/how-we-can-help/tinnitus-management" },
      { label: "Hearing Aid Repair", href: "/hearing-aid-repair" },
      { label: "Does Insurance Cover Hearing Aids or Hearing Tests?", href: "/does-insurance-cover-hearing-aids-tests" },
      { label: "Harrison office", href: "/harrison-ny" }
    ]
  }
};

function PageCrossLinks({ page }: { page: SitePage }) {
  const entry = pageCrossLinks[page.path];
  if (!entry) return null;
  return (
    <section className="bg-[#f7fbfd] py-12">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[30px] font-black leading-tight text-[#003f6f] max-md:text-[25px]">{entry.heading}</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {entry.links.map((link) => (
            <li key={link.href}>
              <Link className="focus-ring text-[19px] font-bold text-[#005a9c] underline" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OfficeCallButtons({ className = "" }: { className?: string }) {
  const offices = locations.filter((location) => location.type === "office");
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {offices.map((office) => (
        <a
          className="focus-ring inline-flex min-h-[52px] items-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 text-[18px] font-black text-white transition hover:bg-[#004a82]"
          data-track="phone-home-office"
          href={office.phoneHref}
          key={office.path}
        >
          <Phone aria-hidden="true" size={20} />
          Call {office.city} {office.phone}
        </a>
      ))}
    </div>
  );
}

// Homepage versions live here, one component each, and lib/homepageVariants.ts
// decides which one is live. See that file for why. Never edit a version in
// place to try an idea -- copy it to a new one, so the old homepage is always
// one line away from coming back.
function HomepageVariant({ variantId }: { variantId: HomepageVariantId }) {
  switch (variantId) {
    case "proof-first":
      return <HomepageProofFirst />;
    case "aug-2026-original":
    default:
      return <HomepageOriginal />;
  }
}

function HomePage({ variantId = activeHomepageVariantId }: { variantId?: HomepageVariantId }) {
  return <HomepageVariant variantId={variantId} />;
}

function HomepageOriginal() {
  return (
    // A <div>, not <main>: app/layout.tsx already wraps every page in
    // <main id="main-content">, and a second nested landmark leaves screen
    // readers with two "main" regions on the home page.
    <div className="bg-[var(--background)]">
      <InteractiveEarHero />
      <HomeQuickActionBand />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Trusted audiologist</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f] md:text-5xl">
              Your Trusted Audiologist
            </h2>
            <p className="mt-5 text-xl font-black leading-8 text-[var(--foreground)]">
              Serving{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/greenwich-ct">
                Greenwich, CT
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Scarsdale-NY">
                Scarsdale, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/mt-kisco-ny">
                Mt. Kisco, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/White-Plains-NY">
                White Plains, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/harrison-ny">
                Harrison, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/rye-ny">
                Rye, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Somers-NY">
                Somers, NY
              </Link>{" "}
              &amp; Beyond
            </p>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground)]">
            <p>
              Most people do not notice hearing loss as silence. They notice that the television is louder than
              anyone else in the house wants it, that a grandchild has to repeat themselves twice, that a
              restaurant has become work rather than dinner.
            </p>
            <p>
              Fortunately, the audiologist at Audiology Associates of Westchester can help you regain quality of life
              and hear the world around you. We offer a variety of audiology services like{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/hearing-testing">
                hearing tests
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/hearing-aid-fitting">
                hearing aid fitting
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/tinnitus-therapy">
                tinnitus therapy
              </Link>{" "}
              to improve your hearing, and more so you don&rsquo;t miss a sound.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-3">
            {homeFeatureCards.map((card) => (
              <Link
                className="focus-ring group overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-[0_18px_45px_rgba(0,90,156,0.10)] transition hover:-translate-y-1 hover:border-[#005a9c]"
                href={card.href}
                key={card.href}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image alt={card.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" height={470} src={card.src} width={720} />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,47,84,0.68)_0%,rgba(0,90,156,0)_58%)]" />
                  <h3 className="absolute bottom-5 left-5 text-2xl font-black text-white">{card.title}</h3>
                </div>
                <p className="p-5 text-[17px] leading-7 text-[var(--muted)]">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#eaf4fb]">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Quality of life</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f]">
              How Hearing Aids Help You Live a More Fulfilling Life
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
              The knowledgeable and experienced hearing doctors here at Audiology Associates of Westchester can help you
              enhance all these areas of your life and more - contact us today!
            </p>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeHearingBenefits.map(([title, text]) => (
              <article className="rounded-md border border-white bg-white/85 p-5 shadow-[0_14px_32px_rgba(0,90,156,0.09)]" key={title}>
                <CheckCircle2 className="text-[#005a9c]" size={26} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-[#003f6f]">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Our audiology services</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-[#003f6f]">Clear next steps for better hearing</h2>
              <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                Choose the service that best matches what you are noticing today.
              </p>
            </div>
            <Link className="focus-ring inline-flex rounded-md border border-[#005a9c] px-5 py-3 font-black text-[#003f6f] transition hover:bg-[#eaf4fb]" href="/hearing-testing">
              Read more +
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {homeServiceCards.map(([title, href, src, alt]) => (
              <Link className="focus-ring group block overflow-hidden rounded-md border border-[#d5e7f4] bg-[var(--background)] transition hover:-translate-y-1 hover:border-[#005a9c]" href={href} key={href}>
                <Image alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" height={360} src={src} width={360} />
                <div className="p-4">
                  <h3 className="text-lg font-black leading-tight text-[#003f6f]">{title}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#005a9c]">Learn more</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Improve your hearing</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f]">
              Live life to the fullest. Call now.
            </h2>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground)]">
            <p>
              Hearing loss is upsetting, but Audiology Associates of Westchester can help you regain control and
              communicate with family and friends once again. Call our professional hearing doctors today to schedule an
              appointment, so you never have to say &ldquo;What?&rdquo; again!
            </p>
            <p>
              Our experienced audiologists care for patients throughout{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/White-Plains-NY">
                White Plains, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/harrison-ny">
                Harrison, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/rye-ny">
                Rye, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/mt-kisco-ny">
                Mt. Kisco, NY
              </Link>
              , and{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Scarsdale-NY">
                Scarsdale, NY
              </Link>
              , as well as{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/greenwich-ct">
                Greenwich, CT
              </Link>{" "}
              and the rest of Westchester County.
            </p>
            <p>
              Call to book with one of our audiologists at either office: Harrison, on Mamaroneck Avenue, or{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Somers-NY">
                Somers, NY
              </Link>
              !
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#003f6f] py-16 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Why Choose Audiology Associates of Westchester?
            </h2>
            <div className="mt-7 grid gap-3">
              {homeTrustReasons.map((reason) => (
                <div className="flex gap-3 border-l-2 border-[#ffd45a] bg-[#005a9c]/28 p-4" key={reason}>
                  <CheckCircle2 className="mt-1 shrink-0 text-[#ffd45a]" size={21} aria-hidden="true" />
                  <p className="leading-7 text-white/88">{reason}</p>
                </div>
              ))}
            </div>
            <Link className="focus-ring mt-7 inline-flex rounded-md bg-[#005a9c] px-6 py-4 font-black text-white transition hover:bg-[#004a82]" href="/contact-us">
              Make an appointment today
            </Link>
          </div>
          <div className="rounded-md bg-white p-5 text-[var(--foreground)] shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:p-7">
            <h2 className="text-2xl font-black text-[#003f6f]">Contact Us</h2>
            <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">
              Tell us what you are noticing and the team will help you find the right next step.
            </p>
            <div className="mt-5">
              <ContactForm context="Homepage contact form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HomepageProofFirst() {
  return (
    // A <div>, not <main>: app/layout.tsx already wraps every page in
    // <main id="main-content">, and a second nested landmark leaves screen
    // readers with two "main" regions on the home page.
    <div className="bg-[var(--background)]">
      <InteractiveEarHero />
      <HomeQuickActionBand />

      <section className="border-y border-[#dbe9f3] bg-white py-9">
        <div className="container grid gap-7 text-center sm:grid-cols-3">
          {homeProofPoints.map((point) => (
            <Link className="focus-ring block rounded-md px-3 py-2 hover:bg-[#f7fbfd]" href={point.href} key={point.label}>
              <p className="text-[34px] font-black leading-none text-[#003f6f]">{point.figure}</p>
              <p className="mt-2 text-[17px] leading-6 text-[var(--muted)]">{point.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Trusted audiologist</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f] md:text-5xl">
              Your Trusted Audiologist
            </h2>
            <p className="mt-5 text-xl font-black leading-8 text-[var(--foreground)]">
              Serving{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/greenwich-ct">
                Greenwich, CT
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Scarsdale-NY">
                Scarsdale, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/mt-kisco-ny">
                Mt. Kisco, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/White-Plains-NY">
                White Plains, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/harrison-ny">
                Harrison, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/rye-ny">
                Rye, NY
              </Link>
              ;{" "}
              <Link className="text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Somers-NY">
                Somers, NY
              </Link>{" "}
              &amp; Beyond
            </p>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground)]">
            <p>
              Most people do not notice hearing loss as silence. They notice that the television is louder than
              anyone else in the house wants it, that a grandchild has to repeat themselves twice, that a
              restaurant has become work rather than dinner.
            </p>
            <p>
              Fortunately, the audiologist at Audiology Associates of Westchester can help you regain quality of life
              and hear the world around you. We offer a variety of audiology services like{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/hearing-testing">
                hearing tests
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/hearing-aid-fitting">
                hearing aid fitting
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/tinnitus-therapy">
                tinnitus therapy
              </Link>{" "}
              to improve your hearing, and more so you don&rsquo;t miss a sound.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-3">
            {homeFeatureCards.map((card) => (
              <Link
                className="focus-ring group overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-[0_18px_45px_rgba(0,90,156,0.10)] transition hover:-translate-y-1 hover:border-[#005a9c]"
                href={card.href}
                key={card.href}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image alt={card.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" height={470} src={card.src} width={720} />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,47,84,0.68)_0%,rgba(0,90,156,0)_58%)]" />
                  <h3 className="absolute bottom-5 left-5 text-2xl font-black text-white">{card.title}</h3>
                </div>
                <p className="p-5 text-[17px] leading-7 text-[var(--muted)]">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#eaf4fb]">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Quality of life</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f]">
              How Hearing Aids Help You Live a More Fulfilling Life
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
              The knowledgeable and experienced hearing doctors here at Audiology Associates of Westchester can help you
              enhance all these areas of your life and more - contact us today!
            </p>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeHearingBenefits.map(([title, text]) => (
              <article className="rounded-md border border-white bg-white/85 p-5 shadow-[0_14px_32px_rgba(0,90,156,0.09)]" key={title}>
                <CheckCircle2 className="text-[#005a9c]" size={26} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-[#003f6f]">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Our audiology services</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-[#003f6f]">Clear next steps for better hearing</h2>
              <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                Choose the service that best matches what you are noticing today.
              </p>
            </div>
            <Link className="focus-ring inline-flex rounded-md border border-[#005a9c] px-5 py-3 font-black text-[#003f6f] transition hover:bg-[#eaf4fb]" href="/hearing-testing">
              Read more +
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {homeServiceCards.map(([title, href, src, alt]) => (
              <Link className="focus-ring group block overflow-hidden rounded-md border border-[#d5e7f4] bg-[var(--background)] transition hover:-translate-y-1 hover:border-[#005a9c]" href={href} key={href}>
                <Image alt={alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" height={360} src={src} width={360} />
                <div className="p-4">
                  <h3 className="text-lg font-black leading-tight text-[#003f6f]">{title}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#005a9c]">Learn more</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Improve your hearing</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#003f6f]">
              Live life to the fullest. Call now.
            </h2>
            <OfficeCallButtons className="mt-7" />
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground)]">
            <p>
              Hearing loss is upsetting, but Audiology Associates of Westchester can help you regain control and
              communicate with family and friends once again. Call our professional hearing doctors today to schedule an
              appointment, so you never have to say &ldquo;What?&rdquo; again!
            </p>
            <p>
              Our experienced audiologists care for patients throughout{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/White-Plains-NY">
                White Plains, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/harrison-ny">
                Harrison, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/rye-ny">
                Rye, NY
              </Link>
              ,{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/mt-kisco-ny">
                Mt. Kisco, NY
              </Link>
              , and{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Scarsdale-NY">
                Scarsdale, NY
              </Link>
              , as well as{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/greenwich-ct">
                Greenwich, CT
              </Link>{" "}
              and the rest of Westchester County.
            </p>
            <p>
              Call to book with one of our audiologists at either office: Harrison, on Mamaroneck Avenue, or{" "}
              <Link className="font-bold text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4" href="/Somers-NY">
                Somers, NY
              </Link>
              !
            </p>
          </div>
        </div>
      </section>

      <OfficesNearYouBand
        heading="Audiologist and hearing test near you in Westchester"
        intro="Looking for an audiologist or a hearing test near you? Audiology Associates of Westchester has two offices in Westchester County, in Harrison and in Somers. Choose the one that is the easier drive. Call to book a hearing test, a hearing aid fitting, a tinnitus visit or a repair."
      />

      <PatientReviewsBand />

      <section className="bg-[#003f6f] py-16 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Why Choose Audiology Associates of Westchester?
            </h2>
            <div className="mt-7 grid gap-3">
              {whyChooseReasons.slice(0, 4).map((reason) => (
                <div className="flex gap-3 border-l-2 border-[#ffd45a] bg-[#005a9c]/28 p-4" key={reason.title}>
                  <CheckCircle2 className="mt-1 shrink-0 text-[#ffd45a]" size={21} aria-hidden="true" />
                  <div>
                    <p className="font-black leading-6 text-white">{reason.title}</p>
                    <p className="mt-1 leading-7 text-white/88">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link className="focus-ring mt-7 inline-flex rounded-md bg-[#005a9c] px-6 py-4 font-black text-white transition hover:bg-[#004a82]" href="/contact-us">
              Make an appointment today
            </Link>
          </div>
          <div className="rounded-md bg-white p-5 text-[var(--foreground)] shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:p-7">
            <h2 className="text-2xl font-black text-[#003f6f]">Contact Us</h2>
            <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">
              Tell us what you are noticing and the team will help you find the right next step.
            </p>
            <div className="mt-5">
              <ContactForm context="Homepage contact form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Breadcrumbs({ page }: { page: SitePage }) {
  const crumbs: ProductCrumb[] = [{ label: "Home", href: "/" }];
  if (page.path !== "/") crumbs.push({ label: page.h1 });
  return <StandardBreadcrumbs crumbs={crumbs} />;
}

type ProductCrumb = {
  label: string;
  href?: string;
};

function StandardBreadcrumbs({ crumbs }: { crumbs: ProductCrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f7f7f5] py-[14px] text-[18px] leading-tight text-[#4f4f4f] max-md:text-[16px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <ol className="flex flex-wrap items-center gap-x-[10px] gap-y-2">
          {crumbs.map((crumb, index) => (
            <li className="flex items-center gap-x-[10px]" key={`${crumb.label}-${index}`}>
              {crumb.href ? (
                <Link className="focus-ring text-[#4f4f4f] underline hover:text-[#005a9c]" href={crumb.href}>
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#4f4f4f]">{crumb.label}</span>
              )}
              {index < crumbs.length - 1 ? <span className="font-bold text-[#8b8b8b]">/</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function productCrumbsForPath(path: string): ProductCrumb[] {
  const product = productForPath(path);
  const brand = product ? brandForProduct(product) : brandForPath(path);

  if (path === productsRootPath) return [{ label: "Home", href: "/" }, { label: "Products" }];
  if (path === hearingAidBrandsPath) {
    return [
      { label: "Home", href: "/" },
      { label: "Products", href: productsRootPath },
      { label: "Hearing Aid Brands" }
    ];
  }
  if (product?.brandSlug && brand) {
    return [
      { label: "Home", href: "/" },
      { label: "Products", href: productsRootPath },
      { label: "Hearing Aid Brands", href: hearingAidBrandsPath },
      { label: brand.name, href: brandPath(brand.slug) },
      { label: product.title }
    ];
  }
  if (product) {
    return [
      { label: "Home", href: "/" },
      { label: "Products", href: productsRootPath },
      { label: product.title }
    ];
  }
  if (brand) {
    return [
      { label: "Home", href: "/" },
      { label: "Products", href: productsRootPath },
      { label: "Hearing Aid Brands", href: hearingAidBrandsPath },
      { label: brand.name }
    ];
  }
  return [{ label: "Home", href: "/" }];
}

function ProductBreadcrumbs({ page }: { page: SitePage }) {
  const crumbs = productCrumbsForPath(page.path);
  return <StandardBreadcrumbs crumbs={crumbs} />;
}

function AreaBreadcrumbs({ page }: { page: SitePage }) {
  const city = cityForPath(page.path);
  const county = city ? countyForCity(city) : countyForPath(page.path);
  const crumbs: Array<{ label: string; href?: string }> = [
    { label: "Home", href: "/" },
    { label: "Areas We Serve", href: page.path === serviceAreasRootPath ? undefined : serviceAreasRootPath }
  ];

  if (county) {
    crumbs.push({
      label: `${county.name}, ${county.state}`,
      href: city ? countyPath(county.slug) : undefined
    });
  }

  if (city) crumbs.push({ label: `${city.name}, ${city.state}` });

  return <StandardBreadcrumbs crumbs={crumbs} />;
}

function HowWeCanHelpBreadcrumbs({ page }: { page: SitePage }) {
  const helpService = helpServiceForPath(page.path);
  const tinnitusPage = tinnitusPageForPath(page.path);
  const crumbs: ProductCrumb[] = [
    { label: "Home", href: "/" },
    { label: "How We Can Help", href: page.path === howWeCanHelpRootPath ? undefined : howWeCanHelpRootPath }
  ];

  if (tinnitusPage) {
    crumbs.push({ label: "Tinnitus Management", href: tinnitusRootPath });
    crumbs.push({ label: tinnitusPage.title });
  } else if (helpService) {
    crumbs.push({ label: helpService.title });
  }

  return <StandardBreadcrumbs crumbs={crumbs} />;
}

function officeForAreaPath(path: string) {
  const city = cityForPath(path);
  if (!city) return null;
  const officePath = officePathForCity(city);
  return locations.find((location) => location.path === officePath) || null;
}

// The SVG "scene" system that used to fill the hero's right-hand panel --
// ten hand-drawn motifs (harbor, village, skyline, region...), their
// per-town and per-county lookup tables, and their aria labels -- came out
// with the panel itself. It drew a green circle for Westchester County and
// cartoon houses for Harrison, told a reader nothing, and sometimes failed
// to render at all. Deleted rather than left dormant: a hero slot that
// silently falls back to decoration is how it got filled with decoration.

type LocalHeroProps = {
  badge: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function LocalHeroPhoto({ accent, image, imageAlt, badge }: Pick<LocalHeroProps, "accent" | "image" | "imageAlt" | "badge">) {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/25 shadow-2xl max-md:min-h-[300px]">
      <Image
        alt={imageAlt || ""}
        className="object-cover"
        fill
        priority
        quality={72}
        sizes="(max-width: 768px) 100vw, 52vw"
        src={image as string}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00223d]/85 via-[#00223d]/25 to-transparent" />
      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
        <p className="inline-flex w-fit rounded-full bg-[#ffd45a] px-4 py-2 text-[13px] font-black uppercase tracking-[0.16em] text-[#003f6f]">
          {badge}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full" style={{ backgroundColor: accent }} />
    </div>
  );
}

// The right-hand panel used to hold, in order of preference: a photograph, an
// abstract SVG "scene", or a card of concentric circles. The latter two carried
// a yellow pill and three small chips whose text was scraped from further down
// the same page -- and the circles version reprinted the page's own H1 as an H2
// underneath it, which is what /get-answers was doing. None of it told a reader
// anything they were not about to read anyway.
//
// So: a photograph where one exists, and where none does, a single full-width
// column. A wide headline with nothing beside it beats a box with nothing in it.
function LocalHero({ accent, badge, eyebrow, image, imageAlt, primaryHref, primaryLabel, secondaryHref, secondaryLabel, subtitle, title }: LocalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#003f6f] py-[62px] text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,34,61,0.98) 0%, rgba(0,63,111,0.94) 58%, rgba(0,90,156,0.72) 100%)"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,212,90,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className={`mx-auto grid max-w-[1660px] gap-10 px-[64px] max-md:px-5 ${image ? "lg:grid-cols-[0.92fr_1.08fr] lg:items-center" : ""}`}>
        <div>
          <p className="text-[15px] font-black uppercase tracking-[0.24em] text-[#ffd45a]">{eyebrow}</p>
          <h1 className="mt-5 max-w-[860px] text-[58px] font-black leading-[0.98] max-md:text-[40px]">{title}</h1>
          <p className="mt-6 max-w-[780px] text-[22px] leading-8 text-white/88 max-md:text-[19px]">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryHref && primaryLabel ? (
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-full bg-[#ffd45a] px-6 py-4 text-[16px] font-black uppercase tracking-[0.04em] text-[#003f6f] hover:bg-white"
                href={primaryHref}
              >
                {primaryLabel}
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-4 text-[16px] font-black uppercase tracking-[0.04em] text-white hover:bg-white hover:text-[#003f6f]"
                href={secondaryHref}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        {image ? (
          <LocalHeroPhoto accent={accent} badge={badge} image={image} imageAlt={imageAlt} />
        ) : null}
      </div>
    </section>
  );
}

// Per-town accent, still used for the rule under a hero photograph.
const cityHeroAccents: Record<string, string> = {
  rye: "#7bdcb5",
  mamaroneck: "#9bd3f4",
  larchmont: "#86e0c3",
  greenwich: "#ffd45a",
  "port-chester": "#f4b6c2",
  "new-rochelle": "#ffd45a",
  "white-plains": "#9bd3f4",
  harrison: "#7bdcb5",
  hartsdale: "#86e0c3",
  scarsdale: "#c6b4f5",
  somers: "#9bd3f4",
  "yorktown-heights": "#7bdcb5",
  "mount-kisco": "#9bd3f4",
  bedford: "#86e0c3",
  katonah: "#c6b4f5",
  armonk: "#7bdcb5",
  chappaqua: "#7bdcb5",
  pleasantville: "#f4b6c2",
  purchase: "#c6b4f5",
  "rye-brook": "#86e0c3",
  mahopac: "#9bd3f4"
};

function countyHeroProps(county: AreaCounty, cities: AreaCity[]): LocalHeroProps {
  const isFairfield = county.slug === "fairfield-county-ct";
  const isPutnam = county.slug === "putnam-county-ny";
  const featuredCity = cities[0];
  return {
    badge: `${county.name} ${county.state}`,
    eyebrow: "Audiology service area",
    title: county.headline,
    subtitle: `${county.summary} ${county.officeContext}`,
    accent: isFairfield ? "#ffd45a" : isPutnam ? "#9bd3f4" : "#7bdcb5",
    primaryHref: featuredCity ? cityLinkPath(featuredCity) : "/contact-us",
    primaryLabel: featuredCity ? `Explore ${featuredCity.name}` : "Contact Us",
    secondaryHref: "/hearing-testing",
    secondaryLabel: "Schedule hearing testing"
  };
}

function cityHeroProps(city: AreaCity, office: ReturnType<typeof officeForAreaPath>): LocalHeroProps {
  const flavor = localFlavorForCity(city);
  const officeLabel = office ? `${office.city}, ${office.state} office` : "nearby Westchester office";
  return {
    badge: `${city.name}, ${city.state}`,
    eyebrow: "Local hearing care",
    // "Trusted" is the practice awarding itself an adjective; "audiologist"
    // is the word people actually search for, and lib/site.ts already builds
    // exactly this string for the <title>.
    title: `Audiologists near ${city.name}, ${city.state}`,
    // The hero carries the listening problem; the body below carries the
    // office and the travel note. This used to concatenate both, so the first
    // thing a visitor read was the same 38 words that appeared again 400px
    // down the page — the clearest doorway-page tell a human reader registers.
    subtitle: flavor?.intro || city.localContext,
    accent: cityHeroAccents[city.slug] || (city.state === "CT" ? "#ffd45a" : city.nearestOffice === "somers" ? "#9bd3f4" : "#7bdcb5"),
    primaryHref: office?.path || "/contact-us",
    primaryLabel: office ? `View ${office.city} office` : "Contact Us",
    secondaryHref: "/hearing-testing",
    secondaryLabel: "Hearing tests"
  };
}

const helpHeroAccents = ["#ffd45a", "#7bdcb5", "#9bd3f4", "#f4b6c2", "#c6b4f5"];

function helpHeroProps(service: HelpService): LocalHeroProps {
  const serviceIndex = helpServices.findIndex((item) => item.slug === service.slug);
  return {
    badge: service.menuTitle,
    eyebrow: helpServiceEyebrows[service.slug] || "How we can help",
    title: service.title,
    subtitle: service.shortDescription,
    accent: helpHeroAccents[Math.max(serviceIndex, 0) % helpHeroAccents.length],
    image: helpServiceImages[service.slug]?.src,
    imageAlt: helpServiceImages[service.slug]?.alt,
    primaryHref: "/contact-us",
    primaryLabel: "Ask which visit fits",
    secondaryHref: service.relatedServices[0]?.href || "/hearing-testing",
    secondaryLabel: service.relatedServices[0]?.label || "Hearing Testing"
  };
}

const hearingLossEducationDetails: Record<
  string,
  {
    accent: string;
    badge: string;
    focus: string[];
    intro: string;
    nextSteps: string[];
  }
> = {
  "/hearing-loss-misconceptions": {
    accent: "#ffd45a",
    badge: "Hearing loss myths",
    focus: ["Hearing loss can be subtle", "Speech clarity matters", "Family frustration is common"],
    intro:
      "Misconceptions can delay care. This page helps patients separate common hearing-loss myths from practical signs that deserve a real evaluation.",
    nextSteps: [
      "Schedule hearing testing if conversation clarity has changed.",
      "Bring examples of the listening situations that feel hardest.",
      "Ask whether hearing aids, monitoring, tinnitus support, or another recommendation fits the findings."
    ]
  },
  "/improve-your-hearing": {
    accent: "#7bdcb5",
    badge: "Hearing improvement",
    focus: ["Diagnostic testing first", "Technology plus follow-up", "Real-world listening goals"],
    intro:
      "Improving hearing usually starts with understanding the type of hearing difficulty, then matching the plan to daily communication needs.",
    nextSteps: [
      "Start with a comprehensive hearing assessment.",
      "Discuss where you most want improvement: restaurants, phone calls, meetings, television, or family conversation.",
      "Plan for fitting and follow-up if hearing technology is recommended."
    ]
  },
  "/dizziness-and-ringing-in-your-ears": {
    accent: "#9bd3f4",
    badge: "Symptoms to clarify",
    focus: ["Tinnitus", "Dizziness", "Ear pressure or hearing changes"],
    intro:
      "Dizziness and ringing can overlap with hearing concerns, tinnitus, ear conditions, or symptoms that need medical guidance. The goal is to clarify the right next step.",
    nextSteps: [
      "Seek prompt medical guidance for sudden hearing loss, severe dizziness, neurological symptoms, or heartbeat-like tinnitus.",
      "Track when ringing or dizziness started and whether hearing changed.",
      "Schedule audiology care when hearing clarity, tinnitus, or listening comfort needs evaluation."
    ]
  },
  "/help-a-loved-one": {
    accent: "#f4b6c2",
    badge: "Family guidance",
    focus: ["Supportive conversations", "Better appointment prep", "Shared communication goals"],
    intro:
      "Helping someone with hearing loss works best when the conversation is patient, specific, and focused on quality of life rather than blame.",
    nextSteps: [
      "Describe specific moments where communication has become harder.",
      "Offer to attend the appointment and help remember daily listening examples.",
      "Ask the audiologist how family members can support follow-up and communication strategies."
    ]
  },
  "/prevent-hearing-loss": {
    accent: "#c6b4f5",
    badge: "Prevention",
    focus: ["Noise exposure", "Custom protection", "Baseline testing"],
    intro:
      "Prevention is about reducing risk before damage accumulates and choosing protection patients will actually wear.",
    nextSteps: [
      "Consider baseline testing if you work or play in loud environments.",
      "Ask about custom protection for music, tools, recreation, motorsports, or occupational noise.",
      "Avoid waiting until ringing or muffled hearing becomes routine after loud sound."
    ]
  },
  "/get-answers": {
    accent: "#ffd45a",
    badge: "Hearing FAQs",
    focus: ["Common questions", "Clinical next steps", "No guesswork"],
    intro:
      "Good hearing care starts with clear answers. This page helps patients understand common questions before scheduling or comparing options.",
    nextSteps: [
      "Use FAQs to organize your questions before calling.",
      "Schedule testing when symptoms, tinnitus, or communication difficulty are affecting daily life.",
      "Use the appointment to get personalized recommendations instead of relying on generic online answers."
    ]
  }
};

function hearingLossEducationHeroProps(page: SitePage): LocalHeroProps {
  const details = hearingLossEducationDetails[page.path];
  return {
    badge: details?.badge || "Hearing loss education",
    eyebrow: "Hearing loss",
    title: page.h1,
    subtitle: details?.intro || page.metaDescription,
    accent: details?.accent || "#9bd3f4",
    primaryHref: "/hearing-testing",
    primaryLabel: "Start with hearing testing",
    secondaryHref: "/how-we-can-help/your-hearing",
    secondaryLabel: "Your Hearing"
  };
}

function AreaAppointmentCta({ cityName }: { cityName?: string }) {
  return (
    <section className="bg-white py-[54px] text-center">
      <div className="mx-auto max-w-[1120px] px-5">
        <h2 className="text-[34px] font-black leading-tight text-[#333] max-md:text-[28px]">
          Set Up Your Hearing Consultation with an Expert Today
        </h2>
        <p className="mx-auto mt-5 max-w-[820px] text-[22px] leading-[1.45] text-[#333] max-md:text-[18px]">
          {cityName
            ? `If you live in or near ${cityName}, call Audiology Associates of Westchester to confirm appointment availability and the best office for your needs.`
            : "Call Audiology Associates of Westchester to confirm appointment availability and the best office for your needs."}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <ZocdocButton className="legacy-live-button" label="Request an appointment" trackingId="area-page-appointment" />
          <a className="legacy-live-button" data-track="phone-area" href={primaryPhoneHref}>
            Call {primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
}

function AreaFaqSection({ page, title }: { page: SitePage; title: string }) {
  if (!page.faqs.length) return null;

  return (
    <section className="bg-[#dbe9f3] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">{title}</h2>
        <LiveRule />
        <div className="mt-9 grid gap-7 lg:grid-cols-2">
          {page.faqs.map((faq) => (
            <article className="bg-white p-7 text-black" key={faq.question}>
              <h3 className="text-[26px] font-black leading-tight">{faq.question}</h3>
              <p className="mt-4 text-[20px] leading-[1.38]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaServicesList() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link className="focus-ring block bg-[#dbe9f3] p-6 text-black hover:bg-[#d0e3ef]" href={service.path} key={service.path}>
          <h3 className="text-[24px] font-black">{service.title}</h3>
          <p className="mt-2 text-[19px] leading-[1.35]">{service.description}</p>
        </Link>
      ))}
    </div>
  );
}

function AreaCountyLocalFlavorSection({ county, flavor }: { county: AreaCounty; flavor: AreaCountyLocalFlavor }) {
  return (
    <section className="bg-[#dbe9f3] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">{flavor.heading}</h2>
        <LiveRule />
        <p className="mt-[38px] max-w-[1440px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
          {flavor.intro}
        </p>
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {flavor.regions.map((region) => (
            <article className="bg-white p-7 text-black" key={region.title}>
              <h3 className="text-[26px] font-black leading-tight">{region.title}</h3>
              <p className="mt-4 text-[20px] leading-[1.38]">{region.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 bg-white p-7 text-black">
          <h3 className="text-[28px] font-black leading-tight">Common hearing priorities in {county.name}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {flavor.hearingPriorities.map((priority) => (
              <div className="flex gap-3 text-[20px] leading-[1.35]" key={priority}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={23} aria-hidden="true" />
                <span>{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AreaCityLocalFlavorSection({ city, flavor }: { city: AreaCity; flavor: AreaCityLocalFlavor }) {
  return (
    <section className="bg-[#dbe9f3] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">{flavor.heading}</h2>
        <LiveRule />
        <p className="mt-[38px] max-w-[1440px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
          {flavor.intro}
        </p>
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {flavor.listeningEnvironments.map((environment) => (
            <article className="bg-white p-7 text-black" key={environment.title}>
              <h3 className="text-[26px] font-black leading-tight">{environment.title}</h3>
              <p className="mt-4 text-[20px] leading-[1.38]">{environment.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 bg-white p-7 text-black">
          <h3 className="text-[28px] font-black leading-tight">Common hearing priorities for {city.name} patients</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(flavor.hearingPriorities || city.patientNeeds).map((priority) => (
              <div className="flex gap-3 text-[20px] leading-[1.35]" key={priority}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={23} aria-hidden="true" />
                <span>{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreasIndexPage({ page }: { page: SitePage }) {
  const featured = areaCities.filter((city) => city.countySlug === "westchester-county-ny").slice(0, 12);

  return (
    <>
      <AreaBreadcrumbs page={page} />
      <LocalHero
        accent="#7bdcb5"
        badge="Westchester + nearby communities"
        eyebrow="Areas We Serve"
        primaryHref="/hearing-testing"
        primaryLabel="Start with hearing testing"
        secondaryHref="/contact-us"
        secondaryLabel="Find the right office"
        subtitle={page.body.join(" ")}
        title={page.h1}
      />
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Explore by County</h2>
          <LiveRule />
          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {areaCounties.map((county) => (
              <article className="bg-white p-7 text-black" key={county.slug}>
                <h3 className="text-[29px] font-black">{county.name}, {county.state}</h3>
                <p className="mt-3 text-[20px] leading-[1.35]">{county.summary}</p>
                <Link className="mt-5 inline-block text-[18px] font-bold text-[#005a9c] underline" href={countyPath(county.slug)}>
                  Visit county page →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Featured Westchester Cities and Communities</h2>
          <LiveRule />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((city) => (
              <Link className="focus-ring block border border-[#d3d3d3] bg-white p-5 text-[20px] font-bold text-[#005a9c] underline hover:bg-[#f7f7f7]" href={cityLinkPath(city)} key={city.slug}>
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AreaFaqSection page={page} title="Frequently Asked Questions About Our Service Areas" />
      <AreaAppointmentCta />
    </>
  );
}

function AreaCountyPage({ page }: { page: SitePage }) {
  const county = countyForPath(page.path);
  if (!county) return <LivePageBody page={page} />;
  const cities = citiesForCounty(county.slug);
  const localFlavor = localFlavorForCounty(county);
  const hero = countyHeroProps(county, cities);

  return (
    <>
      <AreaBreadcrumbs page={page} />
      <LocalHero {...hero} />
      {localFlavor ? <AreaCountyLocalFlavorSection county={county} flavor={localFlavor} /> : null}
      <AreaExpertiseSection locationLabel={county.name} office={null} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.78fr_1.22fr] max-md:px-5">
          <div>
            <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">County-level planning</p>
            <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              Choose care based on real local routines
            </h2>
            <LiveRule />
            <p className="mt-[30px] text-[21px] leading-8 text-black">
              The right appointment should account for where patients actually listen: restaurants, offices, trains, family gatherings,
              waterfront activity, quiet homes, and the office that is easiest to reach for follow-up.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Best first step", body: "Start with a comprehensive hearing test if you are unsure whether the issue is hearing loss, device performance, tinnitus, or another concern." },
              { title: "Nearby office fit", body: county.officeContext },
              { title: "Follow-up matters", body: "Good hearing aid outcomes depend on fitting, verification when appropriate, cleaning, repair support, and realistic follow-up adjustments." }
            ].map((item) => (
              <article className="bg-[#f7fbfd] p-6 text-black" key={item.title}>
                <h3 className="text-[24px] font-black leading-tight">{item.title}</h3>
                <p className="mt-4 text-[18px] leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Cities and Communities We Serve</h2>
          <LiveRule />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cities.map((city) => (
              <Link className="focus-ring block bg-[#dbe9f3] p-5 text-[20px] font-bold text-[#005a9c] underline hover:bg-[#d0e3ef]" href={cityLinkPath(city)} key={city.slug}>
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Audiology Services in {county.name}</h2>
          <LiveRule />
          <AreaServicesList />
        </div>
      </section>
      <AreaFaqSection page={page} title={`Frequently Asked Questions About Hearing Care in ${county.name}`} />
      <AreaAppointmentCta />
    </>
  );
}

// Curated, accurate one-line credential highlights (sourced from lib/team.ts)
// so the E-E-A-T block reads cleanly instead of dumping full credential lists.
// Offices a provider works from. Empty unless the profile lists more than the
// main Harrison office, in which case the CTA shows one number per location so
// patients call the right front desk.
function providerOffices(provider: ProviderProfile) {
  return (provider.officePaths || [])
    .map((path) => locationForPath(path))
    .filter((location): location is NonNullable<typeof location> => Boolean(location));
}

const providerCredentialHighlights: Record<string, string> = {
  "jennifer-ratner": "Au.D., Vanderbilt University School of Medicine · Tinnitus-certified (CH-TM) · musician-focused care",
  "kira-savin": "Au.D., Salus University · Lyric invisible extended-wear devices · Tinnitus management (CH-TM)",
  "caitlin-dold": "Au.D., Vanderbilt · cochlear implants, cerumen removal & ASL · White Plains native",
  "jenna-elias": "Au.D., University of Florida · Fellow, American Academy of Audiology",
  "leannmarie-senat": "Au.D., CUNY Graduate Center · adult amplification & vestibular assessment",
  "julia-rivera": "Au.D., Montclair State University · pediatric & adult diagnostics · tinnitus evaluation & cerumen removal"
};

const featuredAreaProviderSlugs = ["jennifer-ratner", "kira-savin", "caitlin-dold"];

// Shared expertise/trust section for area pages. Demonstrates real Experience,
// Expertise, Authoritativeness and Trust (Google E-E-A-T): named doctoral-level
// audiologists with verifiable credentials, grounded in the physical office that
// actually serves the location, with honest service-area framing.
function AreaExpertiseSection({ locationLabel, office }: { locationLabel: string; office: ReturnType<typeof officeForAreaPath> }) {
  const featured = featuredAreaProviderSlugs
    .map((slug) => providerProfiles.find((provider) => provider.slug === slug))
    .filter((provider): provider is ProviderProfile => Boolean(provider));
  const officeSentence = office
    ? `Patients near ${locationLabel} are seen at our ${office.city}, ${office.state} office at ${office.address}.`
    : `Patients near ${locationLabel} are seen at our Harrison and Somers offices.`;
  return (
    <section className="bg-[#f7fbfd] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Expertise &amp; trust</p>
        <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
          Care from Doctors of Audiology, not a sales counter
        </h2>
        <LiveRule />
        <p className="mt-[26px] max-w-[1000px] text-[21px] leading-8 text-black">
          {officeSentence} Every hearing evaluation and hearing aid fitting is performed by a New York State&ndash;licensed Doctor of
          Audiology (Au.D.) on our team &mdash; the same clinicians who provide diagnostic testing, real-ear verification, tinnitus care,
          and follow-up across Westchester. Where {locationLabel} is a service area rather than a physical office, we say so plainly and
          point you to the nearest location.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {featured.map((provider) => (
            <article className="flex flex-col bg-white p-6 text-black shadow-sm" key={provider.slug}>
              <h3 className="text-[24px] font-black leading-tight text-[#003f6f]">{provider.name}</h3>
              <p className="mt-1 text-[16px] font-bold text-[#a75e22]">{provider.role}</p>
              <p className="mt-4 text-[17px] leading-7">{providerCredentialHighlights[provider.slug] || provider.credentials[0]}</p>
              <Link className="mt-5 inline-block text-[16px] font-bold text-[#005a9c] underline" href={providerPath(provider)}>
                View profile
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "NY State–licensed Au.D. clinicians",
            "Diagnostic testing + real-ear verification",
            "Tinnitus-certified providers (CH-TM)",
            "Honest service-area guidance"
          ].map((point) => (
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dbe9f3] px-4 py-2 text-[15px] font-bold text-[#005a9c]" key={point}>
              <CheckCircle2 size={18} aria-hidden="true" /> {point}
            </span>
          ))}
        </div>
        <Link className="mt-8 inline-flex items-center gap-2 text-[18px] font-bold text-[#005a9c] underline" href={providerRootPath}>
          Meet the full audiology team
        </Link>
      </div>
    </section>
  );
}

function AreaCityPage({ page }: { page: SitePage }) {
  const city = cityForPath(page.path);
  if (!city) return <LivePageBody page={page} />;
  const county = countyForCity(city);
  const office = officeForAreaPath(page.path);
  const localFlavor = localFlavorForCity(city);
  const siblingCities = county ? citiesForCounty(county.slug).filter((item) => item.slug !== city.slug).slice(0, 8) : [];
  const nearbyCommunities = Array.from(new Set([...city.nearby, ...siblingCities.map((item) => item.name)])).slice(0, 10);

  return (
    <>
      <AreaBreadcrumbs page={page} />
      <LocalHero {...cityHeroProps(city, office)} />
      {office ? (
        <section className="bg-white py-[52px]">
          <div className="mx-auto grid max-w-[1660px] gap-[48px] px-[64px] lg:grid-cols-[minmax(0,1fr)_420px] max-md:px-5">
            <div>
              <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Practical appointment planning</p>
              <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
                What {city.name} patients should know before scheduling
              </h2>
              <LiveRule />
              <div className="mt-[30px] space-y-[22px] text-[22px] leading-8 text-black max-md:text-[18px]">
                <p>{city.localContext}</p>
                <p>{city.travelNote}</p>
                <p>
                  Bring notes about where hearing feels hardest — restaurants, phone calls, family conversations, commuting, outdoor activity,
                  tinnitus, or hearing aid comfort — so the visit can focus on the situations that matter most.
                </p>
              </div>
            </div>
            <aside className="bg-[#dbe9f3] p-7 text-black">
              <h2 className="text-[30px] font-black leading-tight">Nearest Office</h2>
              <Link className="mt-4 block text-[22px] font-bold text-[#005a9c] underline" href={office.path}>
                {office.name}
              </Link>
              <p className="mt-3 text-[20px] leading-[1.35]">{office.address}</p>
              <p className="mt-3 text-[20px] leading-[1.35]">
                Phone:{" "}
                <a className="font-bold text-[#005a9c] underline" href={office.phoneHref}>
                  {office.phone}
                </a>
              </p>
              <p className="mt-3 text-[18px] leading-[1.35]">{office.hours.join(" ")}</p>
              <a
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#005a9c] px-5 py-3 text-[15px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                href={office.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                rel="noreferrer"
                target="_blank"
              >
                <MapPin size={18} aria-hidden="true" /> Get Directions
              </a>
            </aside>
          </div>
        </section>
      ) : null}
      {localFlavor ? <AreaCityLocalFlavorSection city={city} flavor={localFlavor} /> : null}
      <AreaExpertiseSection locationLabel={`${city.name}, ${city.state}`} office={office} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Services for {city.name} Patients</h2>
          <LiveRule />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {city.patientNeeds.map((need) => (
              <div className="flex gap-3 bg-[#dbe9f3] p-5 text-[21px] leading-[1.35] text-black" key={need}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={24} aria-hidden="true" />
                <span>{need}</span>
              </div>
            ))}
          </div>
          <AreaServicesList />
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Nearby Communities</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            {nearbyCommunities.map((name, index) => {
              const linked = areaCities.find((item) => item.name === name);
              return linked ? (
                <Link className="focus-ring legacy-live-button" href={cityLinkPath(linked)} key={`${city.slug}-${linked.slug}-${index}`}>
                  {name}
                </Link>
              ) : (
                <span className="legacy-live-button" key={`${city.slug}-${name}-${index}`}>
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </section>
      <AreaFaqSection page={page} title={`Frequently Asked Questions About Hearing Care Near ${city.name}`} />
      <AreaAppointmentCta cityName={`${city.name}, ${city.state}`} />
    </>
  );
}

function ProductCta() {
  return (
    <section className="bg-white py-[54px] text-center">
      <div className="mx-auto max-w-[1120px] px-5">
        <h2 className="text-[34px] font-black leading-tight text-[#333] max-md:text-[28px]">
          Set Up Your Hearing Consultation with an Expert Today
        </h2>
        <p className="mx-auto mt-5 max-w-[820px] text-[22px] leading-[1.45] text-[#333] max-md:text-[18px]">
          Product information is educational. For personalized hearing aid recommendations, schedule an appointment
          with Audiology Associates of Westchester.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <ZocdocButton className="legacy-live-button" label="Request an appointment" trackingId="product-page-appointment" />
          <a className="legacy-live-button" data-track="phone-product" href={primaryPhoneHref}>
            Call {primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
}

function HelpServiceCard({ service }: { service: HelpService }) {
  return (
    <Link
      className="focus-ring block border border-[#d5d5d5] bg-white p-7 text-black transition hover:bg-[#f7f7f7]"
      href={helpServicePath(service)}
    >
      <h2 className="text-[28px] font-black leading-tight">{service.title}</h2>
      <p className="mt-4 text-[20px] leading-[1.35]">{service.shortDescription}</p>
      <span className="mt-6 inline-block text-[18px] font-bold text-[#005a9c] underline">Learn More</span>
    </Link>
  );
}

function HelpServiceMatrix() {
  return (
    <section className="bg-white py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
          Match the concern to the right hearing-care pathway
        </h2>
        <LiveRule />
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Not sure what changed?",
              text: "Start with Your Hearing or a comprehensive hearing assessment so the team can clarify whether testing, devices, tinnitus care, or another step fits.",
              href: "/how-we-can-help/your-hearing"
            },
            {
              title: "Current hearing aids are frustrating?",
              text: "Tune-ups, repairs, updated programming, or new technology may help when sound is weak, distorted, uncomfortable, or not clear enough.",
              href: "/how-we-can-help/hearing-aid-tune-ups"
            },
            {
              title: "Ringing or sound sensitivity?",
              text: "Tinnitus management and Lenire candidacy conversations should start with a personalized evaluation and realistic expectations.",
              href: "/how-we-can-help/tinnitus-management"
            },
            {
              title: "Need specialty support?",
              text: "Cochlear implant support, cognitive screening, executive communication support, and hearing protection each have different appointment goals.",
              href: "/how-we-can-help/cochlear-implants"
            }
          ].map((item) => (
            <Link className="focus-ring block bg-[#f7fbfd] p-6 text-black transition hover:bg-[#dbe9f3]" href={item.href} key={item.title}>
              <h3 className="text-[24px] font-black leading-tight text-[#003f6f]">{item.title}</h3>
              <p className="mt-4 text-[18px] leading-7">{item.text}</p>
              <span className="mt-5 inline-block text-[16px] font-bold text-[#005a9c] underline">Explore this path</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeCanHelpIndexPage({ page }: { page: SitePage }) {
  return (
    <>
      <HowWeCanHelpBreadcrumbs page={page} />
      <LocalHero
        accent="#ffd45a"
        badge="Patient-first next steps"
        eyebrow="How we can help"
        primaryHref="/contact-us"
        primaryLabel="Ask where to start"
        secondaryHref="/hearing-testing"
        secondaryLabel="Hearing testing"
        subtitle={page.body.join(" ")}
        title={page.h1}
      />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Explore care pathways</h2>
          <LiveRule />
          <div className="mt-[48px] grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {helpServices.map((service) => (
              <HelpServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <HelpServiceMatrix />
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Choose the Right Next Step</h2>
          <LiveRule />
          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {[
              "Start with a hearing assessment if you are unsure what changed.",
              "Schedule hearing aid service if your devices are weak, distorted, uncomfortable, or not connecting.",
              "Ask about tinnitus, earwax, cochlear implant, cognitive screening, or executive communication support when those needs match your symptoms."
            ].map((item) => (
              <article className="bg-white p-7 text-[21px] leading-[1.35] text-black" key={item}>
                <CheckCircle2 className="mb-4 text-[#005a9c]" size={28} aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PatientReviewsBand />
      <AreaFaqSection page={page} title="How We Can Help FAQs" />
      <ProductCta />
    </>
  );
}

function ServicesLandingPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="relative isolate overflow-hidden bg-[#003f6f] py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,212,90,0.2),transparent_34%),linear-gradient(90deg,rgba(0,47,84,0.96)_0%,rgba(0,63,111,0.88)_56%,rgba(0,90,156,0.52)_100%)]" />
        <div className="mx-auto grid max-w-[1660px] gap-10 px-[64px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center max-md:px-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Services</p>
            <h1 className="mt-4 max-w-4xl text-[58px] font-black leading-tight max-md:text-[38px]">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-[22px] leading-8 text-white/88 max-md:text-[19px]">
              {page.metaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 font-black text-white hover:bg-[#004a82] sm:w-auto" href={primaryPhoneHref}>
                <Phone size={19} aria-hidden="true" />
                Call {primaryPhone}
              </a>
              <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-6 py-4 font-black text-white hover:bg-white/10 sm:w-auto" href="/how-we-can-help">
                How We Can Help
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-[#003f6f] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Quick links</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  className="focus-ring rounded-xl border border-[#d5e7f4] bg-[#f7fbfd] p-4 transition hover:-translate-y-0.5 hover:bg-[#eaf4fb]"
                  href={service.path}
                  key={service.path}
                >
                  <h2 className="text-[20px] font-black leading-tight text-[#003f6f]">{service.title}</h2>
                  <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <SectionTitle
            eyebrow="Compare services"
            title="Choose the next step that matches your hearing needs"
            text="Each service page explains what the visit is for, who it helps, and what to expect."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Link
                className="focus-ring block rounded-2xl border border-[#d5e7f4] bg-[#f7fbfd] p-7 shadow-[0_18px_45px_rgba(0,90,156,0.08)] transition hover:-translate-y-1 hover:bg-white"
                href={service.path}
                key={service.path}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Service {index + 1}</p>
                <h3 className="mt-3 text-[28px] font-black leading-tight text-[#003f6f]">{service.title}</h3>
                <p className="mt-4 text-[18px] leading-7 text-[var(--muted)]">{service.description}</p>
                <span className="mt-6 inline-block text-[16px] font-bold text-[#005a9c] underline">Read More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#dbe9f3] py-16">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <SectionTitle
            eyebrow="Why patients start here"
            title="A simple way to match symptoms to the right visit"
            text="If you are undecided, starting with hearing testing gives the team the clearest picture of what should happen next."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              "Start with hearing testing when you are not sure what changed.",
              "Use hearing aid fitting or repair when the issue is with a current device.",
              "Choose tinnitus therapy or hearing protection when sound comfort is the main concern."
            ].map((item) => (
              <article className="rounded-2xl border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.08)]" key={item}>
                <CheckCircle2 className="text-[#005a9c]" size={28} aria-hidden="true" />
                <p className="mt-4 text-[20px] leading-8 text-[var(--foreground)]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HelpListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="bg-white p-7 text-black">
      <h2 className="text-[30px] font-black leading-tight max-md:text-[25px]">{title}</h2>
      <ul className="mt-5 space-y-4 text-[21px] leading-[1.35] max-md:text-[18px]">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={22} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function HelpServiceSeoSection({ service }: { service: HelpService }) {
  return (
    <section className="bg-[#f7f7f5] py-[52px]">
      <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.72fr_1.28fr] max-md:px-5">
        <div>
          <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Before you schedule</p>
          <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            Make the appointment more useful
          </h2>
          <LiveRule />
          <p className="mt-[30px] text-[21px] leading-8 text-black">
            The most productive hearing-care visits start with specific examples. Bring the moments where listening breaks down,
            the devices or apps you already use, and the questions you want answered.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Bring real examples",
              body: service.signs.slice(0, 2).map((sign) => sign.replace(/[.\s]*$/, ".")).join(" ")
            },
            {
              title: "Know the likely path",
              body: service.appointmentSteps[0]
            },
            {
              title: "Ask about follow-up",
              body: service.whyItMatters
            }
          ].map((item) => (
            <article className="bg-white p-6 text-black" key={item.title}>
              <h3 className="text-[24px] font-black leading-tight">{item.title}</h3>
              <p className="mt-4 text-[18px] leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── care blocks, wired by path ──────────────────────────────────────────────
//
// The tinnitus hub is the site's second-biggest traffic source and its worst
// converter: the pages answer the question and then hand the reader nowhere to
// go. These three wrappers are the answer to that, and they are lookups rather
// than layout decisions so the same block can be dropped into the four
// different page templates the hub is spread across without drifting.

function TinnitusRedFlags({ page }: { page: SitePage }) {
  if (!TINNITUS_CARE_PAGES.has(page.path)) return null;

  return (
    <section className="bg-white pt-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <RedFlagPanel
          flags={TINNITUS_RED_FLAGS}
          intro="Most tinnitus is not an emergency, and most of it is manageable. These are the exceptions, and they are the ones not to sit on."
        />
      </div>
    </section>
  );
}

function TinnitusVisitAndClinician({ page }: { page: SitePage }) {
  if (!TINNITUS_CARE_PAGES.has(page.path)) return null;

  return (
    <>
      <VisitSteps
        footnote={TINNITUS_VISIT_FOOTNOTE}
        heading="What a tinnitus appointment actually involves"
        steps={TINNITUS_VISIT_STEPS}
      />
      <ClinicianCard {...TINNITUS_LEAD_CLINICIAN} />
    </>
  );
}

// `inline` for the templates that already have a container around the body
// column; the banded default for the ones where this sits between full-width
// sections.
function PageAudiogram({ inline = false, page }: { inline?: boolean; page: SitePage }) {
  if (!AUDIOGRAM_PAGES.has(page.path)) return null;
  if (inline) return <AudiogramFigure />;

  return (
    <section className="bg-white py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <AudiogramFigure />
      </div>
    </section>
  );
}

function PageSpecTable({ page }: { page: SitePage }) {
  const specTable = specTableFor(page.path);
  if (!specTable) return null;
  return <SpecTable {...specTable} />;
}

function TinnitusHubLinks() {
  return (
    <section className="bg-[#f7f7f5] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Tinnitus Knowledge Hub</h2>
        <LiveRule />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tinnitusPages.map((topic) => (
            <Link
              className="focus-ring block border border-[#c9d8e3] bg-white p-7 text-black transition hover:bg-[#dbe9f3]"
              href={tinnitusPath(topic.slug)}
              key={topic.slug}
            >
              <h3 className="text-[26px] font-black leading-tight">{topic.title}</h3>
              <p className="mt-4 text-[19px] leading-[1.35]">{topic.description}</p>
              <span className="mt-6 inline-block text-[17px] font-bold text-[#005a9c] underline">Read More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TinnitusTopicPage({ page, topic }: { page: SitePage; topic: TinnitusPage }) {
  return (
    <>
      <HowWeCanHelpBreadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <p className="text-[22px] font-black uppercase tracking-[0.3em] text-[#a75e22] max-md:text-[16px]">Tinnitus Knowledge Hub</p>
          <h1 className="mt-5 max-w-[1440px] text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">{topic.title}</h1>
          <p className="mt-5 max-w-[1240px] text-[28px] font-black leading-tight text-[#333] max-md:text-[22px]">
            {topic.description}
          </p>
          <LiveRule />
          <div className="mt-[38px] max-w-[1320px] space-y-[30px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
            {topic.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <TinnitusRedFlags page={page} />
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="grid gap-7">
            {topic.sections.map((section) => (
              <article
                className="rounded-2xl border border-[#d5e7f4] bg-white p-7 text-black shadow-[0_18px_45px_rgba(0,90,156,0.08)]"
                key={section.title}
              >
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#005a9c] via-[#4d8fc5] to-[#ffd45a]" />
                <h2 className="mt-6 text-[32px] font-black leading-tight text-[#003f6f] max-md:text-[26px]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-[21px] leading-[1.35] text-[var(--muted)] max-md:text-[18px]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-6 space-y-3 text-[20px] leading-[1.35] text-black max-md:text-[18px]">
                    {section.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={22} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <TinnitusVisitAndClinician page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Related Tinnitus Topics</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="focus-ring legacy-live-button" href={tinnitusRootPath}>
              Tinnitus Management
            </Link>
            {tinnitusPages
              .filter((relatedTopic) => relatedTopic.slug !== topic.slug)
              .slice(0, 4)
              .map((relatedTopic) => (
                <Link className="focus-ring legacy-live-button" href={tinnitusPath(relatedTopic.slug)} key={relatedTopic.slug}>
                  {relatedTopic.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <AreaFaqSection page={page} title={`${topic.title} FAQs`} />
      <ProductCta />
    </>
  );
}

function HowWeCanHelpServicePage({ page }: { page: SitePage }) {
  const service = helpServiceForPath(page.path);
  if (!service) return <LivePageBody page={page} />;

  return (
    <>
      <HowWeCanHelpBreadcrumbs page={page} />
      <LocalHero {...helpHeroProps(service)} />
      <TinnitusRedFlags page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            What this page helps you decide
          </h2>
          <LiveRule />
          <div className="mt-[38px] grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-[30px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="bg-[#dbe9f3] p-7 text-black">
              <h3 className="text-[28px] font-black leading-tight">Good starting questions</h3>
              <ul className="mt-5 space-y-4 text-[20px] leading-7">
                {[
                  "What is the main listening problem I want solved?",
                  "Which symptoms, devices, or settings should I mention?",
                  "What should I expect after the first appointment?"
                ].map((question) => (
                  <li className="flex gap-3" key={question}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={20} aria-hidden="true" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="grid gap-7 lg:grid-cols-2">
            <HelpListSection items={service.whoWeHelp} title="Who This Helps" />
            <HelpListSection items={service.signs} title="When to Schedule" />
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">What to Expect During the Appointment</h2>
          <LiveRule />
          <ol className="mt-9 grid gap-7 text-black md:grid-cols-2">
            {service.appointmentSteps.map((step, index) => (
              <li className="bg-[#f7f7f5] p-7" key={step}>
                <p className="text-[18px] font-black text-[#005a9c]">Step {index + 1}</p>
                <p className="mt-3 text-[22px] leading-[1.35] max-md:text-[18px]">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-[48px] bg-[#dbe9f3] p-8 text-black">
            <h2 className="text-[34px] font-black leading-tight max-md:text-[28px]">{service.whyItMattersTitle ?? "Why Professional Audiology Care Matters"}</h2>
            <p className="mt-5 text-[22px] leading-[1.35] max-md:text-[18px]">{service.whyItMatters}</p>
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Related Care</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            {service.relatedServices.map((link) => (
              <Link className="focus-ring legacy-live-button" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageAudiogram page={page} />
      <HelpServiceSeoSection service={service} />
      <TinnitusVisitAndClinician page={page} />
      {page.path === tinnitusRootPath ? <TinnitusHubLinks /> : null}
      <AreaFaqSection page={page} title={`${service.title} FAQs`} />
      <ProductCta />
    </>
  );
}

function HearingLossEducationPage({ page }: { page: SitePage }) {
  const details = hearingLossEducationDetails[page.path];
  const related = page.related.filter((link) => link.href !== page.path).slice(0, 6);

  return (
    <>
      <Breadcrumbs page={page} />
      <LocalHero {...hearingLossEducationHeroProps(page)} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto grid max-w-[1660px] gap-[44px] px-[64px] lg:grid-cols-[1.05fr_0.95fr] max-md:px-5">
          <div>
            <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              Understand the concern before choosing a solution
            </h2>
            <LiveRule />
            <div className="mt-[38px] space-y-[30px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
              {/* No slice. This used to cap at five paragraphs, which meant
                  /get-answers rendered 2 of its 18 answers and
                  /hearing-loss-misconceptions rendered 2 of its 8. The rest was
                  written, shipped and invisible. */}
              {page.body.map((paragraph) => (
                <LegacyParagraph key={paragraph} text={paragraph} />
              ))}
            </div>
          </div>
          <aside className="bg-[#dbe9f3] p-7 text-black">
            <h2 className="text-[30px] font-black leading-tight">What to do next</h2>
            <ul className="mt-5 space-y-4 text-[20px] leading-7">
              {(details?.nextSteps || [
                "Write down what changed and when you notice it most.",
                "Schedule hearing testing when communication or tinnitus affects daily life.",
                "Ask the practice which appointment type fits your symptoms."
              ]).map((step) => (
                <li className="flex gap-3" key={step}>
                  <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={20} aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="bg-[#f7f7f5] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            Related hearing-loss resources
          </h2>
          <LiveRule />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              { label: "Comprehensive Hearing Assessments", href: "/how-we-can-help/comprehensive-hearing-assessments" },
              { label: "Your Hearing", href: "/how-we-can-help/your-hearing" },
              { label: "Audiologist vs ENT", href: "/audiologist-vs-ent-for-hearing-loss" },
              ...related
            ]
              .filter((link, index, all) => all.findIndex((item) => item.href === link.href) === index)
              .slice(0, 6)
              .map((link) => (
                <Link className="focus-ring block bg-white p-6 text-[20px] font-bold leading-7 text-[#005a9c] underline hover:bg-[#dbe9f3]" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <AreaFaqSection page={page} title={`${page.h1} FAQs`} />
      <ProductCta />
    </>
  );
}

function ProductCardGrid({ products = hearingAidProducts }: { products?: typeof hearingAidProducts }) {
  return (
    <div className="grid gap-x-[34px] gap-y-[30px] md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <Link
          className="focus-ring group grid min-h-[166px] grid-cols-[96px_1fr] items-center gap-5 bg-[#f4d5cc] p-5 text-black transition hover:bg-[#efc8bf]"
          href={productPath(product)}
          key={product.slug}
        >
          <Image alt={product.imageAlt} className="h-[108px] w-[96px] object-contain" height={140} src={product.image} width={140} />
          <span>
            <span className="block text-[28px] font-black leading-tight group-hover:underline">{product.shortTitle}</span>
            <span className="mt-2 block text-[21px] leading-[1.08]">{product.menuDescription}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function ProductVideos({ product }: { product: NonNullable<ReturnType<typeof productForPath>> }) {
  if (!product.videos?.length) return null;

  return (
    <>
      <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">
        {product.shortTitle} Video
      </h2>
      <LiveRule />
      <div className={`mt-8 grid gap-7 ${product.videos.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {product.videos.map((video) => (
          <div className="bg-black" key={video.youtubeId}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function ProductsIndexPage({ page }: { page: SitePage }) {
  return (
    <>
      <ProductBreadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1780px] px-8 max-md:px-5">
          <h1 className="text-[44px] font-black leading-tight text-[#003f6f] max-md:text-[34px]">{page.h1}</h1>
          <LiveRule />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Link className="focus-ring block bg-[#f5f5f5] p-8 text-black hover:bg-[#eeeeee]" href={hearingAidBrandsPath}>
              <div className="relative mx-auto h-[230px] w-full max-w-[300px] overflow-hidden bg-[#dbe9f3]">
                <Image
                  alt="Hearing aid lineup"
                  className="object-contain p-6"
                  fill
                  priority
                  sizes="300px"
                  src="/assets/brands/Oticon-Intent-scale.webp"
                />
              </div>
              <h2 className="mt-7 text-[34px] font-black">Hearing Aids</h2>
              <p className="mt-3 text-[22px] leading-[1.35]">
                Compare premium hearing aid brands and product families available to discuss with our audiology team.
              </p>
              <span className="legacy-live-button mt-6 inline-flex">View Hearing Aids</span>
            </Link>
            <Link className="focus-ring block bg-[#f5f5f5] p-8 text-black hover:bg-[#eeeeee]" href="/products/eargear">
              <div className="relative mx-auto h-[230px] w-full max-w-[300px] overflow-hidden bg-[#dbe9f3]">
                <Image
                  alt="Custom earplugs and earmolds"
                  className="object-contain p-6"
                  fill
                  priority
                  sizes="300px"
                  src="/assets/brands/earmolds-earplugs.webp"
                />
              </div>
              <h2 className="mt-7 text-[34px] font-black">Ear Gear</h2>
              <p className="mt-3 text-[22px] leading-[1.35]">
                Learn about custom earmolds, earplugs, and hearing protection options for work, music, recreation, and daily life.
              </p>
              <span className="legacy-live-button mt-6 inline-flex">View Ear and Hearing Protection</span>
            </Link>
          </div>
        </div>
      </section>
      <ProductCta />
    </>
  );
}

function ProductBrandIndexPage({ page }: { page: SitePage }) {
  return (
    <>
      <ProductBreadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1780px] px-8 max-md:px-5">
          <h1 className="text-[44px] font-black leading-tight text-[#003f6f] max-md:text-[34px]">Your Partner for Better Hearing</h1>
          <LiveRule />
          <div className="mt-9 max-w-[1420px] space-y-[26px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
            <p>
              At Audiology Associates of Westchester, selecting the right hearing aid starts with understanding your hearing,
              your communication goals, and the listening situations that matter most to you.
            </p>
            <p>
              Our audiologists can compare technology from leading manufacturers and explain how sound quality, comfort,
              connectivity, rechargeability, and follow-up care affect real-world results.
            </p>
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Our Featured Hearing Aid Brands</h2>
          <LiveRule />
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {productBrands.map((brand) => (
              <Link className="focus-ring block border border-[#d5d5d5] bg-white p-7 text-black hover:bg-[#f7f7f7]" href={brandPath(brand.slug)} key={brand.slug}>
                <h3 className="text-[28px] font-black">{brand.name} Hearing Aids</h3>
                <p className="mt-2 text-[20px] font-bold text-[#005a9c]">{brand.headline}</p>
                <p className="mt-4 text-[19px] leading-[1.35]">{brand.summary}</p>
                <span className="mt-6 inline-block text-[18px] font-bold text-[#005a9c] underline">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProductCta />
    </>
  );
}

function ProductBrandPage({ page }: { page: SitePage }) {
  const brand = brandForPath(page.path);
  if (!brand) return <LivePageBody page={page} />;
  const products = brand.products
    .map((slug) => hearingAidProducts.find((product) => product.slug === slug))
    .filter(Boolean) as typeof hearingAidProducts;
  const otherBrands = productBrands.filter((item) => item.slug !== brand.slug);
  // Comparison and cost pages for this brand, from lib/productGuides.ts. They are
  // deliberately not in brand.products, so they never appear as product cards --
  // but nothing else on the site links to them, so they get their own row.
  const brandGuides = productGuides.filter((guide) => guide.path.startsWith(`${brandPath(brand.slug)}/`));

  return (
    <>
      <ProductBreadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1780px] px-8 max-md:px-5">
          <h1 className="text-[44px] font-black leading-tight text-[#003f6f] max-md:text-[34px]">{brand.name} Hearing Aids</h1>
          <LiveRule />
          <div className="mt-9 max-w-[1420px] space-y-[26px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
            <p>{brand.legacy}</p>
            <p>
              At Audiology Associates of Westchester, our audiology team can help you decide whether{" "}
              {brand.name} technology is the right match for your hearing profile, lifestyle, and communication needs.
            </p>
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Groundbreaking {brand.name} Technology</h2>
          <LiveRule />
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {brand.technology.map((item) => (
              <article className="bg-[#dbe9f3] p-7 text-black" key={item.title}>
                <h3 className="text-[28px] font-black">{item.title}</h3>
                <p className="mt-3 text-[21px] leading-[1.35]">{item.body}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">{brand.name} Product Families</h2>
          <LiveRule />
          <div className="mt-10">
            <ProductCardGrid products={products} />
          </div>
          {brandGuides.length > 0 && (
            <>
              <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Compare and Cost</h2>
              <LiveRule />
              <div className="mt-8 flex flex-wrap gap-4">
                {brandGuides.map((guide) => (
                  <Link className="focus-ring legacy-live-button" href={guide.path} key={guide.path}>
                    {guide.title}
                  </Link>
                ))}
              </div>
            </>
          )}
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Explore Other Premium Hearing Aid Brands</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            {otherBrands.map((item) => (
              <Link className="focus-ring legacy-live-button" href={brandPath(item.slug)} key={item.slug}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProductCta />
    </>
  );
}

function HearingAidProductPage({ page }: { page: SitePage }) {
  const product = productForPath(page.path);
  if (!product) return <LivePageBody page={page} />;
  const brand = brandForProduct(product);
  const otherBrands = productBrands.filter((item) => item.slug !== brand?.slug);

  return (
    <>
      <ProductBreadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1780px] px-8 max-md:px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <h1 className="text-[44px] font-black leading-tight text-[#003f6f] max-md:text-[34px]">{product.title}</h1>
              <p className="mt-4 text-[30px] font-black leading-tight text-[#333] max-md:text-[23px]">{product.subtitle}</p>
              <LiveRule />
              <div className="mt-9 space-y-[26px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
                {product.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-[#f4d5cc] p-8">
              <Image
                alt={product.imageAlt}
                className="mx-auto h-auto max-h-[330px] w-full object-contain"
                height={420}
                src={product.image}
                width={420}
              />
            </div>
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">At a Glance</h2>
          <LiveRule />
          <ul className="mt-8 grid gap-4 text-[22px] leading-[1.35] text-black md:grid-cols-2">
            {product.highlights.map((highlight) => (
              <li className="flex gap-3" key={highlight}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={24} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <ProductVideos product={product} />
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">The Technology Inside {product.shortTitle}</h2>
          <LiveRule />
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {product.technology.map((item) => (
              <article className="bg-[#dbe9f3] p-7 text-black" key={item.title}>
                <h3 className="text-[28px] font-black">{item.title}</h3>
                <p className="mt-3 text-[21px] leading-[1.35]">{item.body}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Frequently Asked Questions</h2>
          <LiveRule />
          <div className="mt-8 space-y-7">
            {product.faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-[27px] font-black text-[#333]">{faq.question}</h3>
                <p className="mt-2 text-[21px] leading-[1.35] text-black">{faq.answer}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-[58px] text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[30px]">Explore Other Premium Hearing Aid Brands</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            {otherBrands.map((item) => (
              <Link className="focus-ring legacy-live-button" href={brandPath(item.slug)} key={item.slug}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageCrossLinks page={page} />
      <ProductCta />
    </>
  );
}

function LiveRule({ className = "" }: { className?: string }) {
  return <div className={`mt-[30px] h-[2px] w-full ${className}`} style={{ backgroundColor: liveBlue }} />;
}

function AppointmentDecisionBand({ page, heading = "Not sure what to schedule?" }: { page: SitePage; heading?: string }) {
  return (
    <section className="bg-[#003f6f] py-12 text-white">
      <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.82fr_1.18fr] lg:items-center max-md:px-5">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Appointment guidance</p>
          <h2 className="mt-3 text-[34px] font-black leading-tight max-md:text-[28px]">{heading}</h2>
          <p className="mt-3 text-[18px] leading-7 text-white/84">
            Call (914) 949-0034 and describe what you are noticing. We will tell you which appointment to book and which office is the shorter drive.
          </p>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-3">
            {appointmentConversionLinks.map((link) => (
              <Link
                className="focus-ring inline-flex min-h-[58px] items-center justify-center rounded-md border border-white/45 px-4 py-3 text-center text-[15px] font-black text-white hover:bg-white/10"
                data-track={trackingHref("decision-link", page.path)}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#005a9c] px-5 py-4 font-black text-white hover:bg-[#004a82]"
              data-track={trackingHref("phone-decision", page.path)}
              href={primaryPhoneHref}
            >
              <Phone size={19} aria-hidden="true" />
              Call {primaryPhone}
            </a>
            <Link
              className="focus-ring inline-flex flex-1 items-center justify-center rounded-md bg-white px-5 py-4 font-black text-[#003f6f] hover:bg-[#f4fbff]"
              data-track={trackingHref("contact-decision", page.path)}
              href="/contact-us"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeQuickActionBand() {
  return (
    <section className="bg-white py-6">
      <div className="container">
        <div className="grid gap-3 rounded-md border border-[#d5e7f4] bg-[#f7fbfd] p-4 shadow-[0_14px_32px_rgba(0,90,156,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#005a9c]">Choose your next step</p>
            <p className="mt-1 text-[18px] leading-7 text-[#253239]">
              Start with a hearing evaluation, pick the nearest office, or compare hearing aid options with a professional.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:justify-end">
            {appointmentConversionLinks.map((link) => (
              <Link
                className="focus-ring inline-flex min-h-[46px] items-center justify-center rounded-md border border-[#005a9c] px-4 py-2 text-center text-sm font-black text-[#003f6f] hover:bg-[#eaf4fb]"
                data-track="home-next-step"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDecisionGuide({ page }: { page: SitePage }) {
  const guide = serviceGuideForPage(page);
  if (!guide) return null;

  const groups = [
    ["This is a good fit when", guide.bestFor],
    ["This may not be the first step when", guide.notBestFor],
    ["What the visit should clarify", guide.appointmentIncludes],
    ["Useful questions to ask", guide.questionsToAsk]
  ] as const;

  return (
    <section className="bg-[#f7fbfd] py-16">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Decision guide</p>
        <h2 className="mt-3 text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
          Choose this appointment with confidence
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {groups.map(([title, items]) => (
            <article className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.08)]" key={title}>
              <h3 className="text-[22px] font-black leading-tight text-[#003f6f]">{title}</h3>
              <ul className="mt-4 space-y-3 text-[16px] leading-7 text-[var(--muted)]">
                {items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustProcessSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.78fr_1.22fr] max-md:px-5">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">What good care includes</p>
          <h2 className="mt-3 text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            A visit should end with clarity, not confusion
          </h2>
          <p className="mt-4 text-[18px] leading-8 text-[var(--muted)]">
            These are the practical pieces patients should expect when comparing hearing care options.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {appointmentPrinciples.map((principle) => (
            <div className="rounded-md border border-[#d5e7f4] bg-[#f7fbfd] p-5" key={principle}>
              <CheckCircle2 className="text-[#005a9c]" size={24} aria-hidden="true" />
              <p className="mt-3 text-[17px] font-bold leading-7 text-[#253239]">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationPlanningSection({ page }: { page: SitePage }) {
  const location = locationForPath(page.path);
  const guide = planningGuideForLocation(location);
  if (!location || !guide) return null;

  return (
    <section className="bg-white py-[56px]">
      <div className="mx-auto grid max-w-[1660px] gap-[40px] px-[64px] lg:grid-cols-[0.88fr_1.12fr] max-md:px-5">
        <div>
          <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Plan your visit</p>
          <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            {location.type === "office" ? `Make the ${location.city} office easier to choose` : `Plan hearing care near ${location.city}`}
          </h2>
          <LiveRule />
          <p className="mt-[30px] text-[22px] leading-[1.4] text-black max-md:text-[18px]">{guide.parking}</p>
          <p className="mt-5 text-[20px] leading-8 text-[#555]">
            Best nearby office guidance: <strong>{nearestOfficeText(location)}</strong>.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="bg-[#dbe9f3] p-6 text-black">
            <h3 className="text-[24px] font-black leading-tight">Best for</h3>
            <ul className="mt-4 space-y-3 text-[18px] leading-7">
              {guide.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="bg-[#f7f7f5] p-6 text-black">
            <h3 className="text-[24px] font-black leading-tight">Nearby landmarks</h3>
            <ul className="mt-4 space-y-3 text-[18px] leading-7">
              {guide.nearbyLandmarks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="bg-[#003f6f] p-6 text-white">
            <h3 className="text-[24px] font-black leading-tight">Communities served</h3>
            <ul className="mt-4 space-y-3 text-[18px] leading-7 text-white/88">
              {guide.nearbyCommunities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProviderTrustSection({ provider }: { provider: ProviderProfile }) {
  return (
    <section className="bg-white py-[52px]">
      <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.8fr_1.2fr] max-md:px-5">
        <div>
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            What patients can ask {provider.name.split(",")[0]}
          </h2>
          <LiveRule />
          <p className="mt-[30px] text-[21px] leading-[1.4] text-black max-md:text-[18px]">
            Provider pages should help patients prepare for a better visit, not only list credentials.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Which hearing or tinnitus findings matter most for my daily communication?",
            "What should I track between today and my follow-up appointment?",
            "Which device, therapy, repair, or referral option fits my goals and symptoms?"
          ].map((question) => (
            <article className="bg-[#dbe9f3] p-6 text-[19px] font-bold leading-7 text-black" key={question}>
              {question}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegacyParagraph({ text: paragraph }: { text: string }) {
  return <p>{linkifyText(paragraph)}</p>;
}

function LegacyParagraphs({ paragraphs, className = "" }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={`space-y-[30px] text-[24px] leading-[1.35] text-black ${className}`}>
      {paragraphs.map((paragraph) => (
        <LegacyParagraph key={paragraph} text={paragraph} />
      ))}
    </div>
  );
}

function LiveTextBlock({ lines }: { lines: string[] }) {
  return (
    <div className="legacy-live-copy max-w-[1440px] space-y-[30px] text-left text-[24px] leading-[1.35] text-black">
      {lines.map((line, index) => {
        const isQuestion = line.endsWith("?");
        const isLiveSubheading =
          /^(Reason #\d+:|Misconception:|Call (Our|Us|now)|Audiology Associates of Westchester Privacy Policy|Quality Hearing Aids|Your Source of Ear Protection|Our hearing care professionals|Hearing aids, hearing protection|Initial Hearing Consultation|Types of Hearing Tests|Audiometric Test|Tympanometry|OAEs|The Effects of Hearing Loss|Types of Hearing Loss|Conductive Hearing Loss:|Sensorineural Hearing Loss:|Mixed Hearing Loss:|Custom Ear Molds and Plugs|Cell Phone Accessories|Hearing Aid Accessories|FAQs$)/.test(line);
        const isHeading = (line.length < 140 && !/[.!]$/.test(line) && index > 0) || isLiveSubheading;
        if (isHeading) {
          return (
            <h2 className="pt-[22px] text-[40px] font-black leading-tight text-[#003f6f]" key={`${line}-${index}`}>
              {line}
              <LiveRule />
            </h2>
          );
        }
        if (isQuestion) {
          return (
            <h2 className="pt-[22px] text-[36px] font-black leading-tight text-[#003f6f]" key={`${line}-${index}`}>
              {line}
              <LiveRule />
            </h2>
          );
        }
        return <LegacyParagraph key={`${line}-${index}`} text={line} />;
      })}
    </div>
  );
}

function GoogleMapEmbed({
  query,
  title,
  className = "h-[320px] w-full border border-[#555]"
}: {
  query: string;
  title: string;
  className?: string;
}) {
  // z=17 frames a single building; without it a bare coordinate pair zooms out
  // far enough that the pin is not obviously on the office.
  const isLatLng = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(query);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}${isLatLng ? "&z=17" : ""}&output=embed`;

  return (
    <iframe
      className={className}
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
      title={title}
    />
  );
}

/**
 * How an article image should sit in its box.
 *
 * Manufacturer device shots under /assets/brands/ are SQUARE cut-outs on white,
 * 540-640px on a side. Rendering them with `object-cover` into a 16:9 hero or a
 * 16:10 card upscales them by roughly 1.9x and crops the top and bottom off the
 * device -- which is how /signia-max-what-we-know and /phonak-eon-what-we-know
 * ended up leading with a giant blurry fragment of a hearing aid, and why the
 * related-article thumbnails looked oversized.
 *
 * Contain those on white with a little padding. Photographs are shot to be
 * cropped and keep `object-cover`, so this only changes the product cut-outs.
 */
function imageFitClass(src: string) {
  return src.includes("/assets/brands/") ? "object-contain bg-white p-4" : "object-cover";
}

function LegacyLocationSectionView({ section }: { section: LegacyLocationSection }) {
  const hasMap = Boolean(section.mapQuery);
  const hasDetails = Boolean(section.addressLines?.length || section.phone || section.hours?.length);
  const office = section.officePath ? locationForPath(section.officePath) : undefined;
  // Verified place link first; the address query is only a fallback for
  // sections that are about a town rather than one of our offices.
  const directionsUrl =
    office?.directionsUrl ||
    (section.mapQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(section.mapQuery)}` : "");
  // Drop the pin on the office's own verified coordinates. A name-and-address
  // string looks like it should work and does not: the keyless embed endpoint
  // returns a blank frame for it, which is how this shipped with an empty map
  // for a few minutes. Coordinates always resolve, and they are exact.
  const mapQuery =
    office?.geo ? `${office.geo.latitude},${office.geo.longitude}` : section.mapQuery;

  return (
    <section
      className={`py-[56px] ${section.background === "blue" ? "bg-[#dbe9f3]" : "bg-white"}`}
      style={{ backgroundColor: section.background === "blue" ? liveSoftBlue : "#ffffff" }}
    >
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">{section.title}</h2>
        <LiveRule />

        <div className={hasMap || hasDetails ? "mt-[48px] grid gap-[64px] lg:grid-cols-[0.9fr_1fr]" : "mt-[48px]"}>
          <div className="space-y-[34px]">
            {section.paragraphs.length ? <LegacyParagraphs paragraphs={section.paragraphs} /> : null}
            {hasDetails ? (
              <address className="space-y-[10px] text-[24px] leading-[1.35] text-black not-italic">
                {section.addressLines?.map((line) => <p key={line}>{line}</p>)}
                {section.phone && section.phoneHref ? (
                  <p>
                    Phone:{" "}
                    <a className="text-[#005a9c] underline" href={section.phoneHref}>
                      {section.phone}
                    </a>
                  </p>
                ) : null}
                {section.fax ? <p>Fax: {section.fax}</p> : null}
                {section.hours?.length ? (
                  <>
                    <p className="pt-[8px] font-bold">Hours of Operation</p>
                    {section.hours.map((line) => <p key={line}>{line}</p>)}
                  </>
                ) : null}
                {office?.arrival ? (
                  <>
                    <p className="pt-[14px] font-bold">When you arrive</p>
                    <p>{office.arrival}</p>
                  </>
                ) : null}
              </address>
            ) : null}
          </div>

          {hasMap ? (
            <div>
              <GoogleMapEmbed query={mapQuery!} title={section.mapCaption || section.title} />
              <div className="mx-auto mt-[22px] flex max-w-[560px] flex-col gap-3 sm:flex-row">
                {section.phoneHref ? (
                  <a
                    className="focus-ring inline-flex flex-1 items-center justify-center gap-2 bg-[#005a9c] px-6 py-4 text-[20px] font-bold uppercase tracking-[0.04em] text-white hover:bg-[#004b82]"
                    data-track="phone-location-map"
                    href={section.phoneHref}
                  >
                    <Phone size={22} aria-hidden="true" />
                    Call Now
                  </a>
                ) : null}
                <a
                  className="focus-ring inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#005a9c] px-6 py-4 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                  href={directionsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function LegacyAreaCityPlanningSection({ page }: { page: SitePage }) {
  const city = areaCities.find((item) => item.slug === legacyAreaCitySlugs[page.path]);
  if (!city) return null;

  const flavor = localFlavorForCity(city);
  const county = countyForCity(city);
  const serviceAreaPath = cityLinkPath(city);
  const officePath = officePathForCity(city);
  const officeLocation = locationForPath(officePath);

  return (
    <section className="bg-white py-[56px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <div className="grid gap-[44px] lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Local hearing care planning</p>
            <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              {flavor?.heading || `Plan hearing care near ${city.name}`}
            </h2>
            <LiveRule />
            <div className="mt-[30px] space-y-5 text-[21px] leading-8 text-black max-md:text-[18px]">
              <p>{flavor ? city.localContext : city.travelNote}</p>
              {flavor ? <p>{city.travelNote}</p> : null}
              <p>
                Nearby communities include {city.nearby.join(", ")}. The most practical office is usually{" "}
                <Link className="font-bold text-[#005a9c] underline" href={officePath}>
                  {officeLocation ? nearestOfficeText(officeLocation) : "nearest Westchester office"}
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-full bg-[#005a9c] px-6 py-4 text-[16px] font-bold uppercase tracking-[0.04em] text-white hover:bg-[#004b82]"
                href={serviceAreaPath}
              >
                View full {city.name} service area
              </Link>
              {county ? (
                <Link
                  className="focus-ring inline-flex items-center justify-center rounded-full border-2 border-[#005a9c] px-6 py-4 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                  href={countyPath(county.slug)}
                >
                  Explore {county.name}
                </Link>
              ) : null}
              {officeLocation ? (
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#005a9c] px-6 py-4 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                  href={officeLocation.directionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeLocation.address)}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MapPin size={18} aria-hidden="true" /> Get Directions
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid gap-5">
            {flavor?.listeningEnvironments?.length ? (
              <div className="grid gap-5 md:grid-cols-3">
                {flavor.listeningEnvironments.map((environment) => (
                  <article className="bg-[#dbe9f3] p-6 text-black" key={environment.title}>
                    <h3 className="text-[23px] font-black leading-tight">{environment.title}</h3>
                    <p className="mt-4 text-[18px] leading-7">{environment.body}</p>
                  </article>
                ))}
              </div>
            ) : null}
            <article className="bg-[#003f6f] p-7 text-white">
              <h3 className="text-[26px] font-black leading-tight">What to discuss during an appointment</h3>
              <ul className="mt-5 grid gap-3 text-[18px] leading-7 text-white/90 md:grid-cols-2">
                {(flavor?.hearingPriorities || city.patientNeeds).map((priority) => (
                  <li className="flex gap-3" key={priority}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#ffd45a]" size={18} aria-hidden="true" />
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveLocationPage({ page }: { page: SitePage }) {
  const content = legacyLocationContent[page.path];
  if (!content) return <LivePageBody page={page} />;
  const legacyCity = areaCities.find((item) => item.slug === legacyAreaCitySlugs[page.path]);
  const legacyOffice = legacyCity ? locations.find((location) => location.path === officePathForCity(legacyCity)) || null : null;

  // Is this page one of the two offices, rather than a town we serve?
  const thisOffice = locations.find((location) => location.path === page.path && location.type === "office");

  // The sections that actually carry the address, phone, hours, arrival note
  // and map. On the office pages these were rendering LAST, so /harrison-ny --
  // a page titled "Audiologist in Harrison, NY" -- opened with a paragraph
  // about Harrison being a commuter suburb where twenty percent of the
  // population is under eighteen, and put the address four sections down.
  const detailSections = content.sections.filter(
    (section) => Boolean(section.addressLines?.length || section.phone || section.hours?.length || section.mapQuery)
  );
  const proseSections = content.sections.filter((section) => !detailSections.includes(section));

  // Lead with the paragraph about the practice, not the one about the census.
  const officeParagraph = content.paragraphs.find((paragraph) => /\bour (main )?office\b|out of this office/i.test(paragraph));
  const heroSubtitle = thisOffice
    ? officeParagraph || content.paragraphs[0] || ""
    : content.paragraphs.slice(0, 2).join(" ");

  const legacyHero = legacyCity
    ? {
        ...cityHeroProps(legacyCity, legacyOffice),
        title: content.heading,
        subtitle: heroSubtitle,
        // On the Harrison office page the primary button read "View Harrison
        // office". It linked to the page you were already on.
        ...(thisOffice
          ? { primaryHref: thisOffice.phoneHref, primaryLabel: `Call ${thisOffice.phone}` }
          : {})
      }
    : null;

  return (
    <>
      <Breadcrumbs page={page} />
      {legacyHero ? (
        <LocalHero {...legacyHero} />
      ) : (
        <section className="bg-white py-[52px]">
          <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
            {content.intro ? <h2 className="mb-[18px] text-[24px] font-black leading-tight text-[#003f6f]">{content.intro}</h2> : null}
            <h1 className="text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">{content.heading}</h1>
            <LiveRule />
            {content.paragraphs.length ? <LegacyParagraphs className="mt-[38px]" paragraphs={content.paragraphs} /> : null}
          </div>
        </section>
      )}
      {/* Address, hours, arrival note and map come first on an office page. */}
      {thisOffice
        ? detailSections.map((section) => (
            <LegacyLocationSectionView key={`${page.path}-${section.title}`} section={section} />
          ))
        : null}
      {thisOffice?.path === "/Somers-NY" ? <PressStrip /> : null}
      {legacyHero && content.paragraphs.length ? (
        <section className="bg-white py-[52px]">
          <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
            <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              Local audiology care for {legacyCity?.name || "this community"}
            </h2>
            <LiveRule />
            <LegacyParagraphs className="mt-[38px]" paragraphs={content.paragraphs} />
          </div>
        </section>
      ) : null}
      {(thisOffice ? proseSections : content.sections).map((section) => (
        <LegacyLocationSectionView key={`${page.path}-${section.title}`} section={section} />
      ))}
      <LegacyAreaCityPlanningSection page={page} />
      <PageCrossLinks page={page} />
      <LocationPlanningSection page={page} />
      <AppointmentDecisionBand page={page} heading="Need help choosing the right office or appointment?" />
    </>
  );
}

function BlogPostRelated({ page }: { page: SitePage }) {
  if (page.type !== "blog-post") return null;

  const relatedPosts = page.related
    .map((link) => blogPosts.find((post) => post.path === link.href))
    .filter((post): post is SitePage => Boolean(post));

  if (!relatedPosts.length) return null;

  return (
    <section className="bg-white pb-12 text-center">
      <div className="mx-auto max-w-[1320px] px-5">
        <h2 className="text-[34px] font-black leading-tight text-[#333] max-md:text-[28px]">Related articles</h2>
        <div className="mx-auto mt-8 grid gap-8 text-left md:grid-cols-3">
          {relatedPosts.map((post) => (
            <Link className="focus-ring block bg-white" href={post.path} key={post.path}>
              {post.heroImage ? (
                <Image
                  alt={post.heroImage.alt || post.h1}
                  className={`aspect-[16/10] w-full ${imageFitClass(post.heroImage.src)}`}
                  height={420}
                  unoptimized={post.heroImage.src.endsWith(".svg")}
                  src={post.heroImage.src}
                  width={720}
                />
              ) : null}
              <h2 className="mt-4 text-[20px] font-black leading-tight text-[#333]">{post.h1}</h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogInternalLinks({ page }: { page: SitePage }) {
  if (page.type !== "blog-post" || !page.related.length) return null;

  const relatedBlogPaths = new Set(blogPosts.map((post) => post.path));
  const relatedArticles = page.related.filter((link) => relatedBlogPaths.has(link.href));
  const helpfulNextSteps = page.related.filter((link) => !relatedBlogPaths.has(link.href));

  if (!relatedArticles.length && !helpfulNextSteps.length) return null;

  const groups = [
    { title: "Keep reading", links: relatedArticles },
    { title: "Helpful next steps", links: helpfulNextSteps }
  ].filter((group) => group.links.length);

  return (
    <section className="bg-[#f7f7f5] py-[52px]">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-7 md:grid-cols-2">
          {groups.map((group) => (
            <div className="border border-[#dedede] bg-white p-7" key={group.title}>
              <h2 className="text-[26px] font-black leading-tight text-[#333]">{group.title}</h2>
              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}`}>
                    <Link className="focus-ring font-bold leading-6 text-[#005a9c] underline" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function blogFrameClasses(frame?: string) {
  if (frame?.includes("Family")) return { accent: "#7a4f9a", soft: "bg-[#f4eff8]", label: "text-[#7a4f9a]" };
  if (frame?.includes("Red flag")) return { accent: "#b84a45", soft: "bg-[#fff1ef]", label: "text-[#b84a45]" };
  if (frame?.includes("Troubleshooting")) return { accent: "#0f7a7a", soft: "bg-[#eef8f8]", label: "text-[#0f7a7a]" };
  if (frame?.includes("Buyer")) return { accent: "#a75e22", soft: "bg-[#fff6ec]", label: "text-[#a75e22]" };
  if (frame?.includes("Local")) return { accent: "#005a9c", soft: "bg-[#edf6fc]", label: "text-[#005a9c]" };
  if (frame?.includes("Myth")) return { accent: "#765e00", soft: "bg-[#fff9df]", label: "text-[#765e00]" };
  return { accent: "#005a9c", soft: "bg-[#f0f7fb]", label: "text-[#005a9c]" };
}

function blogSections(page: SitePage) {
  const startIndex = page.blogMeta ? 2 : 0;
  const lines = page.body.slice(startIndex).filter(Boolean);
  const sections: { heading: string; text: string }[] = [];
  for (let index = 0; index < lines.length; index += 2) {
    sections.push({
      heading: lines[index],
      text: lines[index + 1] || ""
    });
  }
  return sections.filter((section) => section.heading && section.text);
}

function BlogArticlePage({ page }: { page: SitePage }) {
  const meta = page.blogMeta;
  const image = page.heroImage;
  const sections = blogSections(page);
  const styles = blogFrameClasses(meta?.frame);
  const intro = page.body.slice(0, 2).filter(Boolean);

  return (
    <>
      <Breadcrumbs page={page} />
      <article className="bg-white">
        <section className="border-b border-[#dedede] bg-[#f7f7f5] py-[52px]">
          <div className="mx-auto grid max-w-[1460px] gap-10 px-[64px] max-lg:px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className={`text-[14px] font-black uppercase tracking-[0.18em] ${styles.label}`}>{meta?.articleType || page.sections[0] || "Hearing health guide"}</p>
              <h1 className="mt-4 text-[54px] font-black leading-[1.03] text-[#262626] max-md:text-[38px]">{page.h1}</h1>
              <p className="mt-5 max-w-[760px] text-[22px] leading-[1.45] text-[#4b4b4b] max-md:text-[18px]">{page.metaDescription}</p>
              {/* Three things a reader can use, and nothing else. "Frame" was an
                  internal editorial taxonomy ("Buyer advisor") printed to
                  patients on 65 pages, and "Read time" fell back to a hard-coded
                  "5 min read" that was wrong by roughly 2x on every article that
                  hit it. A byline that reads "Smart shopping without the hype"
                  is a tagline, not a person, so it only renders when a real
                  clinician is attached. */}
              <div className="mt-7 grid gap-3 text-[16px] leading-6 text-[#555] sm:grid-cols-2">
                {meta?.readTime ? (
                  <p>
                    <span className="font-black text-[#262626]">Read time:</span> {meta.readTime}
                  </p>
                ) : null}
                {meta?.authorSlug ? (
                  <p>
                    <span className="font-black text-[#262626]">Written by:</span>{" "}
                    <ProviderCredit fallback={siteName} slug={meta.authorSlug} />
                  </p>
                ) : null}
                {meta?.reviewedBySlug ? (
                  <p>
                    <span className="font-black text-[#262626]">Reviewed by:</span>{" "}
                    <ProviderCredit fallback={`${siteName} team`} showCredential slug={meta.reviewedBySlug} />
                  </p>
                ) : null}
              </div>
            </div>
            {image ? (
              <Image
                alt={image.alt || page.h1}
                className={`w-full border border-[#d9d9d9] bg-white shadow-sm ${imageFitClass(image.src)}`}
                height={675}
                priority
                unoptimized={image.src.endsWith(".svg")}
                src={image.src}
                width={1200}
              />
            ) : null}
          </div>
        </section>

        <section className="py-[52px]">
          <div className="mx-auto grid max-w-[1460px] gap-10 px-[64px] max-lg:px-5 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
              <div className={`${styles.soft} border-l-4 p-6`} style={{ borderColor: styles.accent }}>
                <p className="text-[13px] font-black uppercase tracking-[0.16em] text-[#555]">Patient question</p>
                <p className="mt-3 text-[22px] font-black leading-tight text-[#262626]">{meta?.patientQuestion || page.h1}</p>
              </div>
              {meta?.keyTakeaways?.length ? (
                <div className="border border-[#dedede] bg-white p-6 shadow-sm">
                  <h2 className="text-[22px] font-black text-[#262626]">Key takeaways</h2>
                  <ul className="mt-4 space-y-3 text-[16px] leading-6 text-[#444]">
                    {meta.keyTakeaways.map((takeaway) => (
                      <li className="flex gap-3" key={takeaway}>
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: styles.accent }} />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <nav className="border border-[#dedede] bg-[#fbfbfa] p-6">
                <h2 className="text-[20px] font-black text-[#262626]">In this article</h2>
                <ol className="mt-4 space-y-3 text-[15px] leading-5">
                  {sections.slice(0, 7).map((section) => (
                    <li key={section.heading}>
                      <a className="focus-ring font-bold text-[#005a9c] underline" href={`#${anchorId(section.heading)}`}>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div>
              {intro.length ? (
                <div className="mb-10 border-b border-[#dedede] pb-8">
                  {intro.map((line) => (
                    <p className="mb-5 text-[24px] leading-[1.45] text-[#333] max-md:text-[19px]" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
              {meta?.pullQuote ? (
                <blockquote className={`${styles.soft} mb-10 p-8 text-[30px] font-black leading-tight text-[#262626] max-md:text-[23px]`}>
                  “{meta.pullQuote}”
                </blockquote>
              ) : null}
              <div className="space-y-10">
                {sections.map((section, index) => {
                  const isEmphasis = index % 4 === 1;
                  const isSplit = index % 5 === 2;
                  return (
                    <section
                      className={isEmphasis ? `${styles.soft} p-8` : isSplit ? "grid gap-6 border-y border-[#dedede] py-8 md:grid-cols-[0.38fr_0.62fr]" : ""}
                      id={anchorId(section.heading)}
                      key={`${section.heading}-${index}`}
                    >
                      <h2 className="text-[36px] font-black leading-tight text-[#262626] max-md:text-[28px]">{section.heading}</h2>
                      <p className="mt-4 text-[22px] leading-[1.55] text-[#333] max-md:text-[18px]">{section.text}</p>
                      {meta?.comparisonTable && meta.comparisonTable.afterHeading === section.heading ? (
                        <BlogComparisonTable table={meta.comparisonTable} />
                      ) : null}
                    </section>
                  );
                })}
              </div>
              <PageAudiogram inline page={page} />
              {/* These answers were being emitted as FAQPage JSON-LD while
                  appearing nowhere in the visible HTML. Google's structured-data
                  policy requires the content to be on the page, and three useful
                  answers per article were being withheld from readers for no
                  reason. */}
              {page.faqs.length ? (
                <section className="mt-12 border-t border-[#dedede] pt-8" aria-labelledby="article-faqs">
                  <h2 className="text-[28px] font-black leading-tight text-[#262626]" id="article-faqs">Common questions</h2>
                  <div className="mt-6 space-y-6">
                    {page.faqs.map((faq) => (
                      <article key={faq.question}>
                        <h3 className="text-[21px] font-black leading-tight text-[#262626]">{faq.question}</h3>
                        <p className="mt-3 text-[19px] leading-[1.5] text-[#333]">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}
              {meta?.notify ? (
                <NotifyForm body={meta.notify.body} button={meta.notify.button} context={meta.notify.context} heading={meta.notify.heading} />
              ) : null}
              {meta?.sources?.length ? (
                <section className="mt-12 border-t border-[#dedede] pt-8" aria-labelledby="article-sources">
                  <h2 className="text-[28px] font-black leading-tight text-[#262626]" id="article-sources">Sources and further reading</h2>
                  <ul className="mt-5 space-y-3 text-[17px] leading-6">
                    {meta.sources.map((source) => (
                      <li key={source.href}>
                        <a className="focus-ring font-bold text-[#005a9c] underline" href={source.href} rel="noreferrer" target="_blank">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        </section>
      </article>

      <BlogPostRelated page={page} />
      <BlogInternalLinks page={page} />
      <AppointmentDecisionBand page={page} heading="Not sure whether to book a hearing test or an ear check?" />
    </>
  );
}

function CoreServiceDetail({ page }: { page: SitePage }) {
  const detail = coreServiceDeepDives[page.path];
  if (!detail) return null;

  return (
    <>
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">{detail.title}</h2>
          <LiveRule />
          <p className="mt-[38px] max-w-[1320px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">{detail.intro}</p>
          <ol className="mt-9 grid gap-7 text-black md:grid-cols-2">
            {detail.appointmentSteps.map((step, index) => (
              <li className="bg-white p-7" key={step}>
                <p className="text-[18px] font-black text-[#005a9c]">Step {index + 1}</p>
                <p className="mt-3 text-[22px] leading-[1.35] max-md:text-[18px]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Before Your Visit</h2>
              <LiveRule />
              <ul className="mt-9 space-y-4 text-[22px] leading-[1.35] text-black max-md:text-[18px]">
                {detail.practicalNotes.map((note) => (
                  <li className="flex gap-3" key={note}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={24} aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f7f7f5] p-7 text-black">
              <h2 className="text-[30px] font-black leading-tight">Related Care</h2>
              <div className="mt-6 flex flex-col gap-4">
                {detail.related.map((link) => (
                  <Link className="focus-ring text-[20px] font-bold text-[#005a9c] underline" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HearingTestingPage({ page }: { page: SitePage }) {
  return <ServiceLandingPage page={page} />;
}

function CareersPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h1 className="text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">
            {page.h1 || "Careers"}
          </h1>
          <LiveRule />
          <p className="mt-[38px] max-w-[1320px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
            Audiology Associates of Westchester has served the tri-state community for over 30 years. We offer hearing aid fittings, hearing evaluations, hearing rehabilitation, tinnitus therapy, and more at our Somers and Harrison locations.
          </p>
        </div>
      </section>

      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            Audiologists
          </h2>
          <LiveRule />
          <ul className="mt-[38px] max-w-[1320px] space-y-4 text-[22px] leading-[1.35] text-black max-md:text-[18px]">
            {[
              "Au.D., current N.Y.S. licensure for audiology and hearing aid dispensing, and board certification.",
              "Excellent interpersonal skills for working with a diverse patient, colleague, and vendor population.",
              "Strong listening, sales, and problem-solving skills.",
              "Ability to organize time and prioritize numerous duties within deadlines.",
              "Ability to work in a team environment and maintain a positive, professional attitude in a fast-paced setting."
            ].map((item) => (
              <li className="flex gap-3" key={item}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={24} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            Hearing Instrument Specialists
          </h2>
          <LiveRule />
          <div className="mt-[38px] max-w-[1320px] space-y-6 text-[22px] leading-[1.35] text-black max-md:text-[18px]">
            <p>HIS, current N.Y.S. licensure for hearing aid dispensing.</p>
            <p>Administers tests to evaluate hearing and hearing aid fittings.</p>
            <p>
              Hearing aid specialists require exceptional customer service and oral communication skills. They also need to be capable teachers because they educate clients on how to care for the devices they purchase.
            </p>
            <p>
              Mechanical and problem-solving skills are needed to identify technical issues with a client's device and effectively repair the device.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
            Interested in working with us?
          </h2>
          <LiveRule />
          <p className="mt-[38px] max-w-[1320px] text-[22px] leading-[1.35] text-black max-md:text-[18px]">
            Call today to learn more about career opportunities with Audiology Associates of Westchester.
          </p>
          <a
            className="focus-ring mt-8 inline-flex items-center gap-2 bg-[#005a9c] px-8 py-4 text-[20px] font-bold uppercase tracking-[0.04em] text-white hover:bg-[#004b82]"
            data-track="phone-careers"
            href={primaryPhoneHref}
          >
            <Phone size={22} aria-hidden="true" />
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}

function WhyChooseUsPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="relative isolate overflow-hidden bg-[#003f6f] py-20 text-white">
        <Image
          alt="Patients and staff at Audiology Associates of Westchester"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-24"
          fill
          priority
          sizes="100vw"
          src={homeImages.people}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,47,84,0.96)_0%,rgba(0,63,111,0.84)_58%,rgba(0,90,156,0.54)_100%)]" />
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Why choose us</p>
          <h1 className="mt-4 max-w-5xl text-[58px] font-black leading-tight max-md:text-[38px]">
            Why Choose the Hearing Doctors at Audiology Associates of Westchester?
          </h1>
          <p className="mt-6 max-w-3xl text-[22px] leading-8 text-white/88 max-md:text-[19px]">
            A full diagnostic evaluation, results explained the same visit, and every hearing aid fitting measured in your own ear.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 font-black text-white hover:bg-[#004a82] sm:w-auto" data-track="phone-why-choose-us" href={primaryPhoneHref}>
              <Phone size={19} aria-hidden="true" />
              Call {primaryPhone}
            </a>
            <ZocdocButton
              className="!w-full !justify-center !bg-[#005a9c] !text-white border border-[#005a9c] px-6 py-4 font-black shadow-none transition hover:!bg-[#004a82] sm:!w-auto"
              label="Request Appointment"
              trackingId="appointment-why-choose-us"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1660px] gap-10 px-[64px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center max-md:px-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">A patient-first practice</p>
            <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              What the first appointment actually settles.
            </h2>
            <p className="mt-5 text-[20px] leading-8 text-[var(--muted)]">
              We test, we explain what the test found, and we tell you what technology will and will not change about the rooms you named. If the answer is that you do not need hearing aids yet, that is what you will hear.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Testing", "A full diagnostic battery, not a screening."],
                ["Fitting", "Measured in your own ear, not left on a default."],
                ["Follow-up", "Checks, cleaning and adjustments for as long as you wear them."]
              ].map(([label, blurb]) => (
                <div className="border-l-2 border-[#ffd45a] bg-[#eaf4fb] p-4" key={label}>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#005a9c]">{label}</p>
                  <p className="mt-1 font-black text-[#003f6f]">{blurb}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-[#d5e7f4] bg-white shadow-[0_18px_45px_rgba(0,90,156,0.12)]">
            <Image
              alt="Women laughing together over coffee"
              className="aspect-[16/11] w-full object-cover"
              height={720}
              src={homeImages.people}
              width={1080}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eaf4fb] py-16">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Eight reasons</p>
            <h2 className="mt-3 text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              What sets our hearing doctors apart
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseReasons.map((reason, index) => (
              <article className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.09)]" key={reason.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#005a9c] text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-[22px] font-black leading-tight text-[#003f6f]">{reason.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-[var(--muted)]">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#003f6f] py-14 text-white">
        <div className="mx-auto flex max-w-[1660px] flex-col gap-6 px-[64px] md:flex-row md:items-center md:justify-between max-md:px-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Ready for next steps?</p>
            <h2 className="mt-2 text-[34px] font-black leading-tight">Schedule with a hearing doctor</h2>
            <p className="mt-3 max-w-2xl text-white/82">Call or request an appointment to talk through testing, hearing aids, tinnitus, repairs, or follow-up care.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-[#005a9c] px-5 py-3 font-black text-white hover:bg-[#004a82] sm:w-auto" href={primaryPhoneHref}>
              Call {primaryPhone}
            </a>
            <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-5 py-3 font-black text-white hover:bg-white/10 sm:w-auto" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutTrustPage({ page }: { page: SitePage }) {
  const isDrCliff = page.path === "/dr-cliff-approved-provider";
  const drCliffLogo = "https://cdn.prod.website-files.com/5e727ccafd1fa831494b2e7b/5e727ccafd1fa815164b300c_dr%20cliff%20aud%20provider%20logo.png";
  const hearingUpGraphic = "https://evolutionhearing.com/wp-content/uploads/2022/09/HearingUp-White-BKGD.jpg";
  const californiaHearingLogo = "/assets/brands/California-Hearing-Center-1.webp";
  const kiraSavin = teamMembers.find((member) => member.name.includes("Kira Savin"));
  const cards = isDrCliff
    ? [
        ["Best-practice mindset", "Care begins with understanding your hearing, communication goals, symptoms, and listening environments."],
        ["Professional fittings", "Hearing technology recommendations should be paired with fitting, verification, counseling, and follow-up support."],
        ["Patient education", "Clear explanations help patients compare options and make confident choices about hearing care."]
      ]
    : [
        ["Sister practice", "California Hearing Center is connected to Audiology Associates of Westchester through a shared commitment to thoughtful hearing care."],
        ["Patient-first care", "Both practices focus on evaluations, hearing technology, counseling, follow-up, and real-life communication needs."],
        ["California resource", "This page gives patients and families an easy path to trusted hearing care resources in California."]
      ];

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-[#003f6f] py-16 text-white">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">
            About Audiology Associates of Westchester
          </p>
          <h1 className="mt-4 max-w-4xl text-[52px] font-black leading-tight max-md:text-[38px]">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-4xl text-[22px] leading-8 text-white/88 max-md:text-[19px]">
            {page.metaDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-[#005a9c] px-6 py-4 font-black text-white hover:bg-[#004a82] sm:w-auto" href="/contact-us">
              Schedule an Appointment
            </Link>
            {isDrCliff ? (
              <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-6 py-4 font-black text-white hover:bg-white/10 sm:w-auto" href="/why-choose-us">
                Why Choose Us
              </Link>
            ) : (
              <a
                className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-6 py-4 font-black text-white hover:bg-white/10 sm:w-auto"
                href="https://calhearing.com/"
                rel="noreferrer"
                target="_blank"
              >
                Visit California Hearing Center
              </a>
            )}
          </div>
        </div>
      </section>

      {isDrCliff ? (
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.95fr_1.05fr] max-md:px-5">
            <div className="space-y-6">
              <div className="rounded-md border border-[#d5e7f4] bg-[#f7fbfd] p-6 shadow-[0_18px_45px_rgba(0,90,156,0.10)]">
                <Image
                  alt="Dr. Cliff Approved Provider logo"
                  className="mx-auto h-auto max-h-[260px] w-full object-contain"
                  height={420}
                  src={drCliffLogo}
                  width={680}
                />
              </div>
              <div className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.10)]">
                <Image
                  alt="HearingUp best-practice hearing care graphic"
                  className="mx-auto h-auto w-full object-contain"
                  height={560}
                  src={hearingUpGraphic}
                  width={900}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">HearingUp resources</p>
              <h2 className="mt-3 text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
                Learn what best-practice audiology looks like
              </h2>
              <p className="mt-5 text-[20px] leading-8 text-[var(--muted)]">
                Dr. Cliff and HearingUp publish patient education about hearing tests, hearing aid fittings,
                real-ear measurement, verification, and what to look for when choosing a hearing care provider.
              </p>
              <div className="mt-7 overflow-hidden rounded-md border border-[#d5e7f4] bg-black shadow-[0_18px_45px_rgba(0,90,156,0.12)]">
                <iframe
                  aria-label="Dr. Cliff hearing care video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="aspect-video w-full"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/4F1pkDhb8ys"
                  title="Dr. Cliff hearing care video"
                />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-[#005a9c] px-5 py-3 font-black text-white hover:bg-[#004a82] sm:w-auto"
                  href="https://hearingup.com/providers"
                  rel="noreferrer"
                  target="_blank"
                >
                  Explore HearingUp Providers
                </a>
                <a
                  className="focus-ring rounded-md border border-[#005a9c] px-5 py-3 font-black text-[#003f6f] hover:bg-[#eaf4fb]"
                  href="https://www.youtube.com/c/DoctorCliffAuD"
                  rel="noreferrer"
                  target="_blank"
                >
                  Watch Dr. Cliff on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {!isDrCliff ? (
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[0.95fr_1.05fr] max-md:px-5">
            <div className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.10)]">
              <Image
                alt="California Hearing Center logo"
                className="mx-auto h-auto w-full max-w-[640px] object-contain"
                height={320}
                priority={false}
                src={californiaHearingLogo}
                width={1200}
              />
            </div>
            <div className="grid gap-6 rounded-md border border-[#d5e7f4] bg-[#f7fbfd] p-6 shadow-[0_18px_45px_rgba(0,90,156,0.10)] md:grid-cols-[220px_1fr] md:items-center">
              {kiraSavin ? (
                <Image
                  alt={kiraSavin.alt}
                  className="aspect-[4/5] w-full rounded-md object-cover"
                  height={520}
                  src={kiraSavin.image}
                  width={420}
                />
              ) : null}
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Lead audiologist</p>
                <h2 className="mt-3 text-[34px] font-black leading-tight text-[#003f6f]">Dr. Kira Savin, Au.D.</h2>
                <p className="mt-4 text-[18px] leading-8 text-[var(--muted)]">
                  Dr. Kira Savin is a partner and Doctor of Audiology at Audiology Associates of Westchester.
                  She brings the same patient-first approach to this sister-practice relationship: personalized
                  hearing solutions, careful counseling, and technology recommendations that fit real life.
                </p>
                <Link className="focus-ring mt-5 inline-flex rounded-md bg-[#005a9c] px-5 py-3 font-black text-white hover:bg-[#004a82]" href="/meet-the-team/kira-savin">
                  Meet Dr. Savin
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1660px] gap-10 px-[64px] lg:grid-cols-[0.82fr_1.18fr] max-md:px-5">
          <div>
            <h2 className="text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              {isDrCliff ? "What this recognition means" : "A trusted sister-site connection"}
            </h2>
            <LiveRule className="max-w-[320px]" />
          </div>
          <div className="space-y-6 text-[22px] leading-[1.45] text-black max-md:text-[18px]">
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {!isDrCliff ? (
              <p>
                <a className="font-bold text-[#005a9c] underline" href="https://calhearing.com/" rel="noreferrer" target="_blank">
                  Visit California Hearing Center
                </a>{" "}
                to learn more about its services and team.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf4fb] py-16">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map(([title, text]) => (
              <article className="rounded-md border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.10)]" key={title}>
                <CheckCircle2 className="text-[#005a9c]" size={28} aria-hidden="true" />
                <h3 className="mt-4 text-[24px] font-black leading-tight text-[#003f6f]">{title}</h3>
                <p className="mt-3 text-[17px] leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// The legacy service pages arrive as a flat list of lines -- a section title, a
// test name, that test's definition, a call to action, another paragraph -- and
// the grid below used to render every one of them as the same card. On the
// practice's primary service page that made a heading, a CTA and a definition
// visually identical, and left each test name sitting alone in an empty box.
type LabelledEntry = { key: string; label?: string; text?: string; kind: "pair" | "prose" | "heading" | "cta" };

function pairLabelledParagraphs(lines: string[]): LabelledEntry[] {
  const isLabel = (line: string) => line.length <= 48 && !/[.!?:,]$/.test(line);
  const isCta = (line: string) => /^call\b.{0,70}(appointment|today)!?$/i.test(line);
  const entries: LabelledEntry[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (isCta(line)) {
      entries.push({ key: line, label: line, kind: "cta" });
      continue;
    }
    const next = lines[index + 1];
    if (isLabel(line)) {
      if (next && !isLabel(next) && !isCta(next)) {
        entries.push({ key: line, label: line, text: next, kind: "pair" });
        index += 1;
      } else {
        entries.push({ key: line, label: line, kind: "heading" });
      }
      continue;
    }
    entries.push({ key: line, text: line, kind: "prose" });
  }

  return entries;
}

function ServiceLandingPage({ page }: { page: SitePage }) {
  const visual = serviceVisuals[page.path as keyof typeof serviceVisuals];
  const detail = coreServiceDeepDives[page.path];
  const service = services.find((item) => item.path === page.path);
  const paragraphs = page.body.filter(Boolean).flatMap(splitLongText);
  const highlightedSteps = detail?.appointmentSteps || [];
  const highlightedNotes = detail?.practicalNotes || page.sections.slice(0, 3);
  const highlightedRelated = detail?.related || page.related;

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="relative isolate overflow-hidden bg-[#003f6f] py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,212,90,0.22),transparent_38%),linear-gradient(90deg,rgba(0,47,84,0.96)_0%,rgba(0,63,111,0.88)_56%,rgba(0,90,156,0.54)_100%)]" />
        <div className="mx-auto grid max-w-[1660px] gap-10 px-[64px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center max-md:px-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">
              {visual?.eyebrow || "Services"}
            </p>
            <h1 className="mt-4 max-w-4xl text-[58px] font-black leading-tight max-md:text-[38px]">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-[22px] leading-8 text-white/88 max-md:text-[19px]">
              {service?.description || page.metaDescription}
            </p>
            {visual?.kicker ? (
              <p className="mt-5 max-w-2xl text-[18px] font-bold uppercase tracking-[0.14em] text-[#ffd45a]">
                {visual.kicker}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 font-black text-white hover:bg-[#004a82] sm:w-auto" href={primaryPhoneHref}>
                <Phone size={19} aria-hidden="true" />
                Call {primaryPhone}
              </a>
              <ZocdocButton
                className="!w-full !justify-center !bg-[#005a9c] !text-white border border-[#005a9c] px-6 py-4 font-black shadow-none transition hover:!bg-[#004a82] sm:!w-auto"
                label="Request Appointment"
                trackingId={`appointment-${page.path.slice(1).replace(/\//g, "-")}`}
              />
              <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-6 py-4 font-black text-white hover:bg-white/10 sm:w-auto" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
            <Image
              alt={visual?.imageAlt || page.h1}
              className="aspect-[16/10] w-full object-cover"
              height={760}
              src={visual?.image || homeImages.people}
              width={1080}
            />
            <div className="bg-white p-6 text-[#003f6f]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Appointment focus</p>
              <div className="mt-4 grid gap-3">
                {(highlightedSteps.length ? highlightedSteps : [page.metaDescription]).slice(0, 3).map((item, index) => (
                  <div className="flex gap-3 rounded-lg bg-[#eaf4fb] p-4" key={item}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#005a9c] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-[16px] leading-7 text-[#333]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TinnitusRedFlags page={page} />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1660px] gap-8 px-[64px] lg:grid-cols-[1.02fr_0.98fr] max-md:px-5">
          <div className="rounded-2xl border border-[#d5e7f4] bg-[#f7fbfd] p-8 shadow-[0_18px_45px_rgba(0,90,156,0.10)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">What to know</p>
            <h2 className="mt-3 text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              A clearer look at this service
            </h2>
            <div className="mt-6 space-y-5 text-[20px] leading-8 text-[var(--muted)]">
              {paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{linkifyText(paragraph)}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.09)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Helpful notes</p>
              <div className="mt-5 grid gap-3">
                {highlightedNotes.slice(0, 3).map((note) => (
                  <div className="flex gap-3 rounded-lg bg-[#eaf4fb] p-4" key={note}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#005a9c]" size={20} aria-hidden="true" />
                    <p className="text-[16px] leading-7 text-[#333]">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#d5e7f4] bg-[#003f6f] p-6 text-white shadow-[0_18px_45px_rgba(0,90,156,0.12)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Related care</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {highlightedRelated.slice(0, 3).map((link) => (
                  <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-4 py-3 text-sm font-black text-white hover:bg-white/10 sm:w-auto" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {paragraphs.length > 3 ? (
        <section className="bg-[#eaf4fb] py-16">
          <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
            <div className="grid gap-5 md:grid-cols-2">
              {pairLabelledParagraphs(paragraphs.slice(3)).map((entry) => {
                if (entry.kind === "heading") {
                  return (
                    <h2
                      className="text-[30px] font-black leading-tight text-[#003f6f] md:col-span-2 max-md:text-[25px]"
                      key={entry.key}
                    >
                      {entry.label}
                    </h2>
                  );
                }

                if (entry.kind === "cta") {
                  return (
                    <div className="md:col-span-2" key={entry.key}>
                      <a
                        className="focus-ring inline-flex min-h-[52px] items-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 text-[18px] font-black text-white transition hover:bg-[#004a82]"
                        data-track="phone-service-body"
                        href={primaryPhoneHref}
                      >
                        <Phone aria-hidden="true" size={20} />
                        {entry.label}
                      </a>
                    </div>
                  );
                }

                return (
                  <article className="rounded-2xl border border-[#d5e7f4] bg-white p-6 shadow-[0_18px_45px_rgba(0,90,156,0.08)]" key={entry.key}>
                    {entry.label ? (
                      <h3 className="text-[22px] font-black leading-tight text-[#003f6f]">{entry.label}</h3>
                    ) : null}
                    {entry.text ? (
                      <p className={`text-[18px] leading-8 text-[var(--muted)]${entry.label ? " mt-3" : ""}`}>
                        {linkifyText(entry.text)}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <PageAudiogram page={page} />
      <TinnitusVisitAndClinician page={page} />

      <ServiceDecisionGuide page={page} />
      {page.path === "/hearing-testing" ? (
        <OfficesNearYouBand
          className="bg-white py-16"
          heading="Hearing test near you: Harrison and Somers"
          intro="Our audiologists test hearing at two offices in Westchester County. Pick the closer one, or the one with the better hours for you. Call to book a hearing test."
        />
      ) : null}
      <PatientReviewsBand />
      <TrustProcessSection />

      {page.faqs.length ? (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">Frequently asked questions</p>
            <h2 className="mt-3 text-[40px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">
              Helpful answers before you schedule
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {page.faqs.map((faq) => (
                <article className="rounded-2xl border border-[#d5e7f4] bg-[#f7fbfd] p-6" key={faq.question}>
                  <h3 className="text-[22px] font-black leading-tight text-[#003f6f]">{faq.question}</h3>
                  <p className="mt-3 text-[16px] leading-7 text-[var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#003f6f] py-14 text-white">
        <div className="mx-auto flex max-w-[1660px] flex-col gap-6 px-[64px] md:flex-row md:items-center md:justify-between max-md:px-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Ready for next steps?</p>
            <h2 className="mt-2 text-[34px] font-black leading-tight">Schedule with a hearing doctor</h2>
            <p className="mt-3 max-w-2xl text-white/82">Call or request an appointment to talk through testing, hearing aids, tinnitus, repairs, or follow-up care.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-[#005a9c] px-5 py-3 font-black text-white hover:bg-[#004a82] sm:w-auto" href={primaryPhoneHref}>
              Call {primaryPhone}
            </a>
            <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-5 py-3 font-black text-white hover:bg-white/10 sm:w-auto" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewStars({ size = 18 }: { size?: number }) {
  return (
    <span className="inline-flex" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#ffc60a] text-[#ffc60a]" />
      ))}
    </span>
  );
}

function ReviewsPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />

      <section className="bg-[#003f6f] py-16 text-white">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">Patient reviews</p>
          <h1 className="mt-3 text-[44px] font-black leading-tight max-md:text-[34px]">{page.h1}</h1>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <span className="text-[56px] font-black leading-none"><ReviewRating /></span>
            <span className="flex flex-col items-center sm:items-start">
              <ReviewStars size={24} />
              <span className="mt-1 text-[17px] text-white/85">
                from <ReviewCount /> reviews left on {reviewAggregate.source}
              </span>
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-[720px] text-[19px] leading-8 text-white/88">{page.body[0]}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[#ffd45a] px-7 py-4 text-[16px] font-black text-[#003f6f] hover:bg-white"
              data-track="phone-reviews-hero"
              href={primaryPhoneHref}
            >
              <Phone aria-hidden="true" size={18} /> Call {primaryPhone}
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center rounded-md border-2 border-white/70 px-7 py-4 text-[16px] font-black text-white hover:bg-white hover:text-[#003f6f]"
              href={googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-3 px-6">
          <span className="text-[15px] font-bold text-[var(--muted)]">Patients most often mention:</span>
          {reviewThemes.map((theme) => (
            <span
              className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-[14px] font-bold text-[var(--brand-dark)]"
              key={theme.label}
            >
              {theme.label} <span className="text-[var(--muted)]">· {theme.count}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <figure
                className="flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6 medical-shadow"
                key={review.author}
              >
                <ReviewStars />
                <blockquote className="mt-4 flex-1 text-[17px] leading-7 text-[var(--foreground)]">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-[var(--line)] pt-4">
                  <span className="block font-black text-[var(--brand-dark)]">{review.author}</span>
                  <span className="text-[14px] text-[var(--muted)]">
                    {review.tag} · Verified Google review
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-[15px] text-[var(--muted)]">
            Reviews are drawn from our public Google Business Profile.{" "}
            <a className="focus-ring font-bold text-[var(--brand)] underline" href={googleReviewsUrl} rel="noreferrer" target="_blank">
              See all <ReviewCount /> reviews
            </a>{" "}
            or share your own.
          </p>
        </div>
      </section>

      <section className="bg-[#f1f5fa] py-14">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="text-[30px] font-black text-[var(--brand-dark)] max-md:text-[26px]">
            Experience the care our patients describe
          </h2>
          <p className="mt-4 text-[18px] leading-8 text-[var(--muted)]">
            Schedule a hearing evaluation at our Harrison or Somers, NY office and see the difference an attentive audiologist makes.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex items-center justify-center rounded-md bg-[#005a9c] px-7 py-4 text-[16px] font-black text-white hover:bg-[#004a82]"
              href="/contact-us"
            >
              Book an Appointment
            </Link>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-[#005a9c] px-7 py-4 text-[16px] font-black text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
              data-track="phone-reviews-cta"
              href={primaryPhoneHref}
            >
              <Phone aria-hidden="true" size={18} /> {primaryPhone}
            </a>
          </div>
        </div>
      </section>

      <AreaFaqSection page={page} title="Reviews — frequently asked" />
    </>
  );
}

// ─── In the News ────────────────────────────────────────────────────────────
// /in-the-news and one page per clipping. Data lives in lib/press.ts. The
// printed article is shown as an image only; the Q&A below it is our own
// summary, not a transcript of the paper's text.

function PressBreadcrumbs({ page }: { page: SitePage }) {
  const crumbs: ProductCrumb[] = [{ label: "Home", href: "/" }];
  if (page.path === pressRootPath) {
    crumbs.push({ label: "In the News" });
  } else {
    crumbs.push({ label: "In the News", href: pressRootPath }, { label: page.h1 });
  }
  return <StandardBreadcrumbs crumbs={crumbs} />;
}

function PressEventCallout({ feature, office }: { feature: PressFeature; office?: (typeof locations)[number] }) {
  const event = feature.event;
  if (!event || !pressEventIsUpcoming(feature)) return null;
  return (
    <aside
      aria-labelledby="press-event-heading"
      className="rounded-2xl border-2 border-[#ffd45a] bg-[#fffbeb] p-6 text-left shadow-[0_18px_45px_rgba(0,63,111,0.10)]"
    >
      <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[#9f5c1e]">
        <CalendarDays aria-hidden="true" size={18} /> Come say hello
      </p>
      <h2 className="mt-2 text-[26px] font-black leading-tight text-[#003f6f]" id="press-event-heading">
        Visit our table at {event.name}
      </h2>
      <p className="mt-2 text-[18px] font-bold text-[#253239]">{event.dateLabel}</p>
      <p className="mt-1 text-[17px] text-[#5d6b72]">
        {event.venue}, {event.address}
      </p>
      <p className="mt-3 text-[17px] leading-7 text-[#253239]">{event.note}</p>
      <p className="mt-3 text-[15px] text-[#5d6b72]">
        Hosted by the{" "}
        <a className="focus-ring font-bold text-[#005a9c] underline" href={event.organizerUrl} rel="noreferrer" target="_blank">
          {event.organizer}
        </a>
        .
      </p>
      {office ? (
        <a
          className="focus-ring mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#005a9c] px-5 py-3 text-[16px] font-black text-white hover:bg-[#003f6f]"
          data-track="phone-press-event"
          href={office.phoneHref}
        >
          <Phone aria-hidden="true" size={18} /> Somers office {office.phone}
        </a>
      ) : null}
    </aside>
  );
}

// A one-line pointer from the Somers office page to the press feature that
// is about Somers. Links the newest feature only.
function PressStrip() {
  const feature = pressFeatures[0];
  if (!feature) return null;
  return (
    <section className="bg-[#fff7ed] py-6">
      <div className="mx-auto flex max-w-[1660px] flex-wrap items-center gap-x-4 gap-y-2 px-[64px] max-md:px-5">
        <Newspaper aria-hidden="true" className="text-[#9f5c1e]" size={22} />
        <p className="text-[18px] font-bold text-[#253239]">
          As featured in <span className="text-[#003f6f]">{feature.publication}</span>
          {pressEventIsUpcoming(feature) && feature.event ? ` · See us at the festival, ${feature.event.dateLabel}` : ""}
        </p>
        <Link className="focus-ring text-[17px] font-black text-[#005a9c] underline" href={pressFeaturePath(feature)}>
          Read the feature &rarr;
        </Link>
      </div>
    </section>
  );
}

function PressIndexPage({ page }: { page: SitePage }) {
  return (
    <>
      <PressBreadcrumbs page={page} />
      <section className="bg-[#003f6f] py-16 text-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">
            <Newspaper aria-hidden="true" size={18} /> Press
          </p>
          <h1 className="mt-3 text-[48px] font-black leading-tight max-md:text-[36px]">{page.h1}</h1>
          <p className="mt-5 max-w-[720px] text-[19px] leading-8 text-white/88">{page.body[0]}</p>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-6">
          {pressFeatures.map((feature) => (
            <Link
              className="focus-ring group grid overflow-hidden rounded-2xl border border-[var(--line)] bg-white medical-shadow md:grid-cols-[320px_minmax(0,1fr)]"
              href={pressFeaturePath(feature)}
              key={feature.slug}
            >
              <Image
                alt={feature.cover.alt}
                className="h-full max-h-[360px] w-full object-cover object-top"
                height={feature.cover.height}
                sizes="(max-width: 768px) 100vw, 320px"
                src={feature.cover.src}
                width={feature.cover.width}
              />
              <div className="flex flex-col justify-center p-8 max-md:p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9f5c1e]">
                  {feature.publication} · {feature.issue}
                </p>
                <h2 className="mt-2 text-[30px] font-black leading-tight text-[#003f6f] group-hover:underline max-md:text-[26px]">
                  {feature.headline}
                </h2>
                <p className="mt-3 text-[18px] leading-8 text-[var(--muted)]">{feature.summary}</p>
                <span className="mt-5 text-[16px] font-black text-[#005a9c]">Read the feature &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function PressFeaturePage({ page, feature }: { page: SitePage; feature: PressFeature }) {
  const somers = locations.find((location) => location.path === "/Somers-NY");
  const interviewee = providerForSlug(feature.interviewee);
  const featured = feature.featuredProviderSlugs
    .map((slug) => providerForSlug(slug))
    .filter((provider): provider is ProviderProfile => Boolean(provider));

  return (
    <>
      <PressBreadcrumbs page={page} />

      <section className="bg-[#003f6f] py-14 text-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#ffd45a]">
              <Newspaper aria-hidden="true" size={18} /> In the news · {feature.issue}
            </p>
            <h1 className="mt-3 text-[48px] font-black leading-tight max-md:text-[34px]">{page.h1}</h1>
            <p className="mt-5 max-w-[680px] text-[19px] leading-8 text-white/88">{feature.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex items-center justify-center rounded-md bg-[#ffd45a] px-7 py-4 text-[16px] font-black text-[#003f6f] hover:bg-white"
                href="#the-article"
              >
                Read the article
              </a>
              {somers ? (
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-7 py-4 text-[16px] font-black text-white hover:bg-white hover:text-[#003f6f]"
                  data-track="phone-press-hero"
                  href={somers.phoneHref}
                >
                  <Phone aria-hidden="true" size={18} /> Call Somers {somers.phone}
                </a>
              ) : null}
            </div>
          </div>
          <PressEventCallout feature={feature} office={somers} />
          {!pressEventIsUpcoming(feature) ? (
            <Image
              alt={feature.cover.alt}
              className="mx-auto w-full max-w-[340px] rotate-[2deg] rounded-md border-4 border-white shadow-2xl max-lg:hidden"
              height={feature.cover.height}
              priority
              sizes="340px"
              src={feature.cover.src}
              width={feature.cover.width}
            />
          ) : null}
        </div>
      </section>

      <section className="scroll-mt-[90px] bg-[#f7f7f5] py-14" id="the-article">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-[34px] font-black leading-tight text-[#003f6f] max-md:text-[28px]">The article</h2>
          <LiveRule />
          <figure className="mt-8">
            <a className="focus-ring block" href={feature.clipping.src} rel="noreferrer" target="_blank">
              <Image
                alt={feature.clipping.alt}
                className="h-auto w-full rounded-lg border border-[#d7e2e3] bg-white shadow-[0_18px_45px_rgba(0,63,111,0.12)]"
                height={feature.clipping.height}
                priority
                sizes="(max-width: 1248px) 100vw, 1152px"
                src={feature.clipping.src}
                width={feature.clipping.width}
              />
            </a>
            <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[16px] text-[#5d6b72]">
              <span>
                As printed in the <strong className="text-[#253239]">{feature.publication}</strong> edition, {feature.issue}.
                {interviewee ? (
                  <>
                    {" "}
                    Interview with{" "}
                    <Link className="focus-ring font-bold text-[#005a9c] underline" href={providerPath(interviewee)}>
                      {interviewee.name}
                    </Link>
                    .
                  </>
                ) : null}
              </span>
              <a className="focus-ring inline-flex items-center gap-1 font-bold text-[#005a9c] underline" href={feature.clipping.src} rel="noreferrer" target="_blank">
                Open full size <ExternalLink aria-hidden="true" size={15} />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      {featured.length ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="text-[34px] font-black leading-tight text-[#003f6f] max-md:text-[28px]">Who you will meet</h2>
            <LiveRule />
            <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-[#5d6b72]">
              The doctors of audiology in the article photo. Each one has a full profile with training and specialties.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featured.map((provider) => (
                <Link
                  className="focus-ring group flex flex-col items-center rounded-2xl border border-[var(--line)] bg-white p-6 text-center medical-shadow"
                  href={providerPath(provider)}
                  key={provider.slug}
                >
                  <Image
                    alt={provider.alt}
                    className="h-[150px] w-[150px] rounded-full border border-[#dbe9f3] object-cover object-top"
                    height={300}
                    sizes="150px"
                    src={provider.image}
                    width={300}
                  />
                  <span className="mt-4 text-[21px] font-black leading-tight text-[#003f6f] group-hover:underline">{provider.name}</span>
                  <span className="mt-1 text-[16px] text-[#5d6b72]">{provider.role}</span>
                  <span className="mt-2 text-[15px] font-bold text-[#115e68]">{providerOfficeNames(provider.officePaths).join(" & ")}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f1f5fa] py-14">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="text-[34px] font-black leading-tight text-[#003f6f] max-md:text-[28px]">What we talked about</h2>
          <LiveRule />
          <p className="mt-6 text-[18px] leading-8 text-[#5d6b72]">The main points from the interview, in our own words.</p>
          <div className="mt-8 grid gap-5">
            {feature.questions.map((item) => (
              <article className="rounded-2xl border border-[#d5e7f4] bg-white p-6" key={item.question}>
                <h3 className="flex items-start gap-3 text-[22px] font-black leading-snug text-[#003f6f] max-md:text-[20px]">
                  <Quote aria-hidden="true" className="mt-1 shrink-0 text-[#c57a34]" size={20} />
                  {item.question}
                </h3>
                <p className="mt-3 text-[18px] leading-8 text-[#253239]">{item.answer}</p>
                <Link className="focus-ring mt-3 inline-block text-[16px] font-black text-[#005a9c] underline" href={item.link.href}>
                  {item.link.label} &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {somers ? (
        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-[1100px] gap-8 px-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-[34px] font-black leading-tight text-[#003f6f] max-md:text-[28px]">Visit us in Somers</h2>
              <LiveRule />
              <p className="mt-6 text-[18px] leading-8 text-[#253239]">
                Our Somers office is in Somers Towne Centre. We also see patients in Harrison.
              </p>
              <p className="mt-4 flex items-start gap-2 text-[18px] font-bold text-[#253239]">
                <MapPin aria-hidden="true" className="mt-1 shrink-0 text-[#005a9c]" size={20} /> {somers.address}
              </p>
              <ul className="mt-3 text-[16px] leading-7 text-[#5d6b72]">
                {somers.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[#005a9c] px-7 py-4 text-[17px] font-black text-white hover:bg-[#004a82]"
                data-track="phone-press-somers"
                href={somers.phoneHref}
              >
                <Phone aria-hidden="true" size={18} /> Call {somers.phone}
              </a>
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-md border border-[#005a9c] px-7 py-4 text-[17px] font-black text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                href="/contact-us"
              >
                Book an appointment
              </Link>
              <Link className="focus-ring text-center text-[16px] font-bold text-[#005a9c] underline" href={somers.path}>
                Somers office details and directions
              </Link>
            </div>
          </div>
        </section>
      ) : null}

    </>
  );
}

function LivePageBody({ page }: { page: SitePage }) {
  const paragraphs = page.body.filter(Boolean).flatMap(splitLongText);
  const image = page.heroImage;
  const isBlog = page.type === "blog-post";
  const showImage = (isBlog || page.path === "/hearing-aid-referral-program" || page.path === "/tinnitus-therapy") && image;
  const serviceVisual = serviceVisuals[page.path as keyof typeof serviceVisuals];

  if (page.path === "/services") {
    return <ServicesLandingPage page={page} />;
  }

  if (page.path === "/reviews") {
    return <ReviewsPage page={page} />;
  }

  if (page.path === pressRootPath) {
    return <PressIndexPage page={page} />;
  }

  const pressFeature = pressFeatureForPath(page.path);
  if (pressFeature) {
    return <PressFeaturePage feature={pressFeature} page={page} />;
  }

  if (page.type === "service" && serviceVisual) {
    return <ServiceLandingPage page={page} />;
  }

  if (isBlog && page.blogMeta) {
    return <BlogArticlePage page={page} />;
  }

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          {isBlog ? (
            <p className="mb-3 text-[15px] text-[#555]">Audiology Associates of Westchester</p>
          ) : null}
          <h1 className="max-w-[1440px] text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">
            {page.h1 || page.title}
          </h1>
          <LiveRule />
          {showImage ? (
            <Image
              alt={image.alt || page.h1}
              className={`mt-[38px] max-h-[430px] w-full max-w-[860px] ${imageFitClass(image.src)}`}
              height={760}
              priority
              unoptimized={image.src.endsWith(".svg")}
              src={image.src}
              width={1180}
            />
          ) : null}
          <div className="mt-[38px]">
            <LiveTextBlock lines={paragraphs.length ? paragraphs : [page.metaDescription]} />
          </div>
          <PageSpecTable page={page} />
          <PageAudiogram inline page={page} />
        </div>
      </section>

      {/* This is the fallback body, used by blog posts with no blogMeta and by
          the comparison pages. BlogArticlePage renders its own FAQ block; this
          branch did not, so five pages emitted FAQPage data for answers that
          appeared nowhere. */}
      <FaqSection page={page} />
      <PageCrossLinks page={page} />

      {page.type === "service" ? <CoreServiceDetail page={page} /> : null}
      {isBlog ? <BlogPostRelated page={page} /> : null}
      {isBlog ? <BlogInternalLinks page={page} /> : null}
      {isBlog ? <AppointmentDecisionBand page={page} heading="Not sure whether to book a hearing test or an ear check?" /> : null}
    </>
  );
}

function LiveContactPage({ page }: { page: SitePage }) {
  const intro = [
    page.body.find((line) => line.startsWith("When you visit") && !line.includes("With two convenient")),
    page.body.find((line) => line.startsWith("With two convenient"))
  ].filter((line): line is string => Boolean(line));
  const officeLocations = locations.filter((location) => location.type === "office");

  return (
    <>
      <Breadcrumbs page={page} />
      <LocalHero
        accent="#7bdcb5"
        badge="Contact"
        eyebrow="Contact us"
        primaryHref={officeLocations[0]?.phoneHref}
        primaryLabel={officeLocations[0] ? `Call ${officeLocations[0].city} ${officeLocations[0].phone}` : undefined}
        secondaryHref={officeLocations[1]?.phoneHref}
        secondaryLabel={officeLocations[1] ? `Call ${officeLocations[1].city} ${officeLocations[1].phone}` : undefined}
        subtitle={intro[0] || page.body[0] || ""}
        title={page.h1}
      />
      {intro.slice(1).length || page.body.length > 1 ? (
        <section className="bg-white py-[52px]">
          <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
            <LegacyParagraphs className="max-w-none" paragraphs={intro.slice(1).length ? intro.slice(1) : page.body.slice(1, 4)} />
          </div>
        </section>
      ) : null}
      <section className="bg-white pb-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Audiology Associates of Westchester</h2>
          <LiveRule />
          <div className="mt-[42px] grid gap-[40px] lg:grid-cols-2">
            {officeLocations.map((location) => {
                const mapQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
                // Coordinates, not the address string: "550 Mamaroneck Ave Suite 407"
                // geocodes to a frame with no marker on it.
                const mapQuery = location.geo
                  ? `${location.geo.latitude},${location.geo.longitude}`
                  : location.address;
                const directionsUrl = location.directionsUrl || mapQueryUrl;

                return (
                  <div className="flex h-full flex-col text-center" key={location.path}>
                    <address className="space-y-[10px] text-[21px] leading-[1.35] text-black not-italic">
                      <Link className="font-bold text-[#005a9c] underline" href={location.path}>
                        {location.name}
                      </Link>
                      <p>{location.address}</p>
                      <p>
                        Phone:{" "}
                        <a className="text-[#005a9c] underline" href={location.phoneHref}>
                          {location.phone}
                        </a>
                      </p>
                      {location.fax ? <p>Fax: {location.fax}</p> : null}
                    </address>

                    <div className="space-y-[10px] pt-[18px] text-[20px] leading-[1.35] text-black">
                      <p className="pt-[8px] font-bold">Hours of Operation</p>
                      {location.hours.map((hours) => <p key={hours}>{hours}</p>)}
                    </div>

                    {location.arrival ? (
                      <div className="mx-auto mt-[18px] max-w-[420px] border-l-2 border-[#ffd45a] bg-[#f7fbfd] px-5 py-4 text-left text-[18px] leading-[1.4] text-black">
                        <p className="font-bold">When you arrive</p>
                        <p className="mt-1">{location.arrival}</p>
                      </div>
                    ) : null}

                    <div className="mt-auto pt-[34px]">
                      <div className="overflow-hidden border border-[#d6d6d6] bg-[#f7f7f5]">
                        <GoogleMapEmbed className="h-[300px] w-full" query={mapQuery} title={`${location.name} map`} />
                      </div>
                    </div>

                    <div className="mx-auto mt-[22px] flex max-w-[560px] flex-col gap-3 sm:flex-row">
                      <a
                        className="focus-ring inline-flex flex-1 items-center justify-center gap-2 bg-[#005a9c] px-6 py-4 text-[20px] font-bold uppercase tracking-[0.04em] text-white hover:bg-[#004b82]"
                        data-track="phone-contact-location"
                        href={location.phoneHref}
                      >
                        <Phone size={22} aria-hidden="true" />
                        Call Now
                      </a>
                      <a
                        className="focus-ring inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#005a9c] px-6 py-4 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                        href={directionsUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="bg-white pb-[60px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Submit This Form to Contact Us</h2>
          <LiveRule />
          <div className="mt-[38px] max-w-[920px]">
            <h2 className="mb-[20px] text-[32px] font-black leading-tight text-[#003f6f]">Contact Us</h2>
            <ContactForm context={`Contact page: ${page.h1}`} />
          </div>
        </div>
      </section>
    </>
  );
}

function LivePatientFormsPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1160px] px-5">
          <div className="text-center">
            <h1 className="text-[38px] font-black text-[#333] max-md:text-[32px]">{page.h1}</h1>
            <p className="mx-auto mt-6 max-w-[1020px] text-[21px] leading-[1.45] text-black max-md:text-[18px]">
              Download and fill these in before your first visit if that suits you. If it does not, call the office and we will post them to you, or arrive fifteen minutes early and we will fill them in together.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[860px] rounded-2xl border border-[#d6d6d6] bg-[#fafafa] px-6 py-8 md:px-10">
            <div className="grid gap-5">
              {patientForms.map((form) => (
                <a
                  className="text-[18px] font-black leading-tight text-[#005a9c] underline underline-offset-4 transition hover:text-[#003f7a] md:text-[21px]"
                  href={form.href}
                  key={form.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {form.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LiveThankYouPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <div className="legacy-live-copy max-w-[1440px] text-left text-[24px] leading-[1.35] text-black">
            <h1 className="mb-[20px] text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">
              Thank You
            </h1>
            <p>{page.body[0] || "Thank you for contacting us! Your message has been received."}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function LiveTeamPage({ page }: { page: SitePage }) {
  const intro = [
    page.body.find((line) => line.startsWith("We all hope") && !line.includes("With locations")),
    page.body.find((line) => line.startsWith("With locations"))
  ].filter((line): line is string => Boolean(line));

  return (
    <>
      <Breadcrumbs page={page} />
      <LocalHero
        accent="#9bd3f4"
        badge="Our audiologists"
        eyebrow="About us"
        primaryHref={primaryPhoneHref}
        primaryLabel={`Call ${primaryPhone}`}
        secondaryHref="/contact-us"
        secondaryLabel="Contact us"
        subtitle={intro[0] || page.body[0] || ""}
        title={page.h1}
      />
      <section className="bg-white py-[46px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          {intro.slice(1).length ? (
            <LegacyParagraphs className="max-w-none" paragraphs={intro.slice(1)} />
          ) : null}
          {/* This page runs to 21,000px on a phone -- twenty-six screens of
              stacked bios. The credential wall stays, because it is the most
              persuasive content on the site for the person doing the choosing.
              What it needed was a way to reach the fifth audiologist without
              scrolling past the first four. */}
          <nav aria-label="Jump to a team member" className="mt-8 flex flex-wrap gap-3">
            {legacyTeamProfiles.flatMap((section) => section.profiles).map((person) => (
              <a
                className="focus-ring inline-flex min-h-[44px] items-center rounded-md border border-[#d5e7f4] bg-[#f7fbfd] px-4 text-[16px] font-bold text-[#005a9c] hover:bg-[#eaf4fb]"
                href={`#${anchorId(person.name)}`}
                key={person.name}
              >
                {person.name.replace(/^Dr\.\s*/, "").replace(/,.*$/, "")}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {legacyTeamProfiles.map((section) => (
        <section className="bg-white" key={section.group}>
          <div className="bg-[#005a9c] py-[18px] text-center">
            <h2 className="text-[36px] font-bold leading-tight text-white max-md:text-[30px]">{section.group}</h2>
          </div>
          <div className="mx-auto max-w-[1660px] px-[64px] pb-[20px] pt-[44px] max-md:px-5">
            {section.profiles.map((person, index) => (
              <article className="scroll-mt-[90px] pb-[54px]" id={anchorId(person.name)} key={person.name}>
                <div className="grid gap-[44px] md:grid-cols-[minmax(0,1fr)_340px] md:items-start">
                  <div>
                    <h3 className="text-[34px] font-bold leading-tight text-black max-md:text-[29px]">
                      {providerForName(person.name) ? (
                        <Link className="text-black underline decoration-[#005a9c] decoration-2 underline-offset-[5px]" href={providerPath(providerForName(person.name)!)}>
                          {person.name}
                        </Link>
                      ) : (
                        person.name
                      )}
                    </h3>
                    <h2 className="mt-[8px] text-[18px] font-black leading-tight text-[#003f6f]">{person.pronouns}</h2>
                    <h3 className="mt-[8px] text-[24px] font-bold leading-tight text-black max-md:text-[21px]">{person.role}</h3>
                    {providerForName(person.name) ? (
                      <p className="mt-[8px] text-[19px] leading-tight text-black">
                        <span className="font-bold">Sees patients at:</span>{" "}
                        {providerOfficeNames(providerForName(person.name)?.officePaths).join(" and ")}
                      </p>
                    ) : null}
                    {providerForName(person.name) ? (
                      <Link className="mt-[14px] inline-block text-[19px] font-bold text-[#005a9c] underline" href={providerPath(providerForName(person.name)!)}>
                        View {person.name.replace(/^Dr\.\s*/, "").replace(/,\s*Au\.D\..*$/, "")}&apos;s profile
                      </Link>
                    ) : null}
                    <LiveRule className="mt-[24px]" />
                    <div className="mt-[28px] space-y-[30px] text-[24px] leading-[1.35] text-black">
                      {person.paragraphs.map((paragraph, paragraphIndex) => (
                        <p className={paragraph.startsWith("“") ? "italic" : undefined} key={`${person.name}-${paragraphIndex}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <Image
                    alt={person.alt}
                    className="mx-auto aspect-square w-full max-w-[330px] object-cover"
                    height={500}
                    src={person.image}
                    width={500}
                  />
                </div>
                {person.credentials?.length ? (
                  <div className="mt-[28px] space-y-[8px] text-[20px] leading-[1.45] text-black">
                    {person.credentials.map((credential) => {
                      const [label, ...rest] = credential.split(":");
                      return (
                        <p key={`${person.name}-${credential}`}>
                          {rest.length ? (
                            <>
                              <strong>{label}:</strong>
                              {rest.join(":")}
                            </>
                          ) : (
                            credential
                          )}
                        </p>
                      );
                    })}
                    {person.affiliations?.length ? (
                      <ul className="ml-[28px] list-disc space-y-[4px]">
                        {person.affiliations.map((item) => (
                          <li key={`${person.name}-${item}`}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
                {index < section.profiles.length - 1 ? <div className="mt-[46px] h-px w-full bg-[#d7d7d7]" /> : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function ProviderCredentialList({ provider }: { provider: ProviderProfile }) {
  return (
    <div className="mt-[28px] space-y-[8px] text-[20px] leading-[1.45] text-black">
      {provider.credentials.map((credential) => {
        const [label, ...rest] = credential.split(":");
        return (
          <p key={`${provider.slug}-${credential}`}>
            {rest.length ? (
              <>
                <strong>{label}:</strong>
                {rest.join(":")}
              </>
            ) : (
              credential
            )}
          </p>
        );
      })}
      {provider.affiliations?.length ? (
        <>
          <p className="pt-[8px] font-bold">Professional Affiliations</p>
          <ul className="ml-[28px] list-disc space-y-[4px]">
            {provider.affiliations.map((item) => (
              <li key={`${provider.slug}-${item}`}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

// Which offices a clinician actually sees patients at. lib/team.ts documents
// officePaths as "omit for Harrison-only", so an absent list means Harrison.
// This was previously only discoverable in the third paragraph of a bio, which
// is not where someone booking on a parent's behalf will find it.
function providerOfficeNames(officePaths?: string[]) {
  const paths = officePaths?.length ? officePaths : ["/harrison-ny"];
  return paths
    .map((path) => locations.find((location) => location.path === path)?.city)
    .filter((city): city is string => Boolean(city));
}

function ProviderProfilePage({ page }: { page: SitePage }) {
  const provider = providerForPath(page.path);
  if (!provider) return <LivePageBody page={page} />;

  const otherProviders = providerProfiles.filter((item) => item.slug !== provider.slug);

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <Link className="mb-[22px] inline-block text-[20px] font-bold text-[#005a9c] underline" href="/meet-the-team">
            Meet the Team
          </Link>
          <div className="grid gap-[52px] lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
            <div>
              <p className="text-[18px] font-bold uppercase tracking-[0.28em] text-[#a45e1b]">Audiologist Profile</p>
              <h1 className="mt-5 text-[50px] font-black leading-tight text-[#003f6f] max-md:text-[36px]">{provider.name}</h1>
              <h2 className="mt-[10px] text-[26px] font-bold leading-tight text-black">{provider.role}</h2>
              <p className="mt-[8px] text-[18px] leading-tight text-black">{provider.pronouns}</p>
              <p className="mt-[14px] text-[20px] leading-tight text-black">
                <span className="font-bold">Sees patients at:</span>{" "}
                {providerOfficeNames(provider.officePaths).join(" and ")}
              </p>
              <LiveRule />
              {provider.quote ? (
                <blockquote className="mt-[38px] border-l-[6px] border-[#005a9c] pl-6 text-[27px] italic leading-[1.35] text-black max-md:text-[22px]">
                  &ldquo;{provider.quote}&rdquo;
                </blockquote>
              ) : null}
              <div className="mt-[38px] space-y-[30px] text-[24px] leading-[1.35] text-black max-md:text-[19px]">
                {provider.paragraphs.map((paragraph) => (
                  <p key={`${provider.slug}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside>
              <Image
                alt={provider.alt}
                className="mx-auto aspect-square w-full max-w-[420px] object-cover"
                height={620}
                priority
                src={provider.image}
                width={620}
              />
              <div className="mt-7 bg-[#dbe9f3] p-7 text-black">
                <h2 className="text-[28px] font-black leading-tight">Schedule Hearing Care</h2>
                <p className="mt-3 text-[20px] leading-[1.35]">
                  {providerOffices(provider).length > 1
                    ? `${provider.name} sees patients at both offices. Call the location that suits you to confirm appointment availability and provider scheduling.`
                    : "Call Audiology Associates of Westchester to confirm appointment availability and provider scheduling."}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {providerOffices(provider).length > 1 ? (
                    providerOffices(provider).map((office) => (
                      <a
                        className="legacy-live-button inline-flex w-full sm:w-auto"
                        data-track="phone-provider"
                        href={office.phoneHref}
                        key={office.path}
                      >
                        Call {office.city} {office.phone}
                      </a>
                    ))
                  ) : (
                    <a className="legacy-live-button inline-flex w-full sm:w-auto" data-track="phone-provider" href={primaryPhoneHref}>
                      Call {primaryPhone}
                    </a>
                  )}
                  <ZocdocButton className="legacy-live-button inline-flex w-full sm:w-auto" label="Book Online" trackingId={`provider-${provider.slug}-appointment`} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Specialties and Areas of Focus</h2>
          <LiveRule />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {provider.specialties.map((specialty) => (
              <div className="flex gap-3 bg-white p-5 text-[21px] leading-[1.35] text-black" key={specialty}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#005a9c]" size={24} aria-hidden="true" />
                <span>{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Credentials</h2>
          <LiveRule />
          <ProviderCredentialList provider={provider} />
        </div>
      </section>
      <ProviderTrustSection provider={provider} />
      <section className="bg-[#dbe9f3] py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Frequently Asked Questions About {provider.name}</h2>
          <LiveRule />
          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {page.faqs.map((faq) => (
              <article className="bg-white p-7 text-black" key={faq.question}>
                <h3 className="text-[24px] font-black leading-tight">{faq.question}</h3>
                <p className="mt-4 text-[19px] leading-[1.38]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-[52px]">
        <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
          <h2 className="text-[42px] font-black leading-tight text-[#003f6f] max-md:text-[32px]">Meet More Audiologists</h2>
          <LiveRule />
          <div className="mt-8 flex flex-wrap gap-4">
            {otherProviders.map((item) => (
              <Link className="focus-ring legacy-live-button" href={providerPath(item)} key={item.slug}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function LiveBrandsPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-10 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h1 className="text-[38px] font-black text-[#333]">{page.h1}</h1>
          <p className="mx-auto mt-6 max-w-[900px] text-left text-[19px] leading-8 text-[#333]">
            There is no single best hearing aid brand. Each hearing aid company makes several brands and models, and
            the right one depends on your hearing test, your daily life and the follow-up care you get. We fit hearing
            aids from Oticon, Phonak, ReSound, Signia, Starkey, Widex, Unitron and Rexton. The list below shows each
            brand, and the table further down shows which company makes it.
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-10 text-left md:grid-cols-2">
            {hearingAidBrands.map(([title, text, src, alt, href]) => {
              // Brands we have a page for get a clickable logo/title plus an
              // explicit text link. The four we carry without a page of their
              // own (Unitron, Rexton, CaptionCall, CapTel) render unlinked
              // rather than pointing somewhere that would dead-end the visitor.
              const shortName = title.replace(" Hearing Aids", "");
              const masthead = (
                <>
                  <div className="flex min-h-[86px] flex-wrap items-center gap-5">
                    <Image alt={alt} className="max-h-[72px] w-auto object-contain" height={120} src={src} width={270} />
                    {title === "Signia & Siemens Hearing Aids" ? (
                      <Image
                        alt="Siemens logo"
                        className="max-h-[52px] w-auto object-contain"
                        height={80}
                        src="/assets/duda/siemenslogo-250x40.png"
                        width={250}
                      />
                    ) : null}
                  </div>
                  <h2 className="mt-3 text-[24px] font-black text-[#333]">{title}</h2>
                </>
              );
              return (
                <article className="border-b border-[#d3d3d3] pb-8" key={title}>
                  {href ? (
                    <Link className="focus-ring block transition hover:opacity-75" href={href}>
                      {masthead}
                    </Link>
                  ) : (
                    masthead
                  )}
                  <p className="mt-3 text-[17px] leading-7 text-[#333]">{text}</p>
                  {href ? (
                    <Link
                      className="focus-ring mt-4 inline-block text-[17px] font-bold text-[#005a9c] underline underline-offset-4 hover:text-[#003f7a]"
                      href={href}
                    >
                      Learn More About {shortName}
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
          <HearingAidMakersTable />
        </div>
      </section>
      <PageCrossLinks page={page} />
    </>
  );
}

// Who makes which brand. The company grouping is the only fact added here; the
// model names come from lib/products.ts so this table cannot list a model the
// site does not describe. Ownership as of October 2026, from each company's
// public information. Rexton and Unitron have no product pages of their own.
const hearingAidMakers: Array<{ company: string; brands: Array<{ name: string; slug?: string }> }> = [
  { company: "Sonova", brands: [{ name: "Phonak", slug: "phonak" }, { name: "Unitron" }] },
  { company: "Demant", brands: [{ name: "Oticon", slug: "oticon" }] },
  { company: "GN", brands: [{ name: "ReSound", slug: "resound" }] },
  {
    company: "WS Audiology",
    brands: [{ name: "Signia", slug: "signia" }, { name: "Widex", slug: "widex" }, { name: "Rexton" }]
  },
  { company: "Starkey Hearing Technologies", brands: [{ name: "Starkey", slug: "starkey" }] }
];

function HearingAidMakersTable() {
  return (
    <div className="mt-14 text-left">
      <h2 className="text-[30px] font-black text-[#333]">Hearing aid companies: who makes which brand</h2>
      <p className="mt-3 max-w-[900px] text-[18px] leading-8 text-[#333]">
        Hearing aid manufacturers often own more than one brand. This table shows the company behind each brand we
        fit, as of October 2026, and the current models we describe on this site.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-[17px] leading-7">
          <caption className="sr-only">Hearing aid manufacturers, their brands and current models</caption>
          <thead>
            <tr className="bg-[#dbe9f3] text-[#003f6f]">
              <th className="border border-[#d3d3d3] p-3" scope="col">Company</th>
              <th className="border border-[#d3d3d3] p-3" scope="col">Brands we fit</th>
              <th className="border border-[#d3d3d3] p-3" scope="col">Current models on this site</th>
            </tr>
          </thead>
          <tbody>
            {hearingAidMakers.map((maker) => {
              const models = hearingAidProducts.filter((product) =>
                maker.brands.some((brand) => brand.slug && brand.slug === product.brandSlug)
              );
              return (
                <tr key={maker.company}>
                  <th className="border border-[#d3d3d3] p-3 align-top font-black" scope="row">{maker.company}</th>
                  <td className="border border-[#d3d3d3] p-3 align-top">{maker.brands.map((brand) => brand.name).join(", ")}</td>
                  <td className="border border-[#d3d3d3] p-3 align-top">
                    {models.length ? (
                      models.map((product, index) => (
                        <span key={product.slug}>
                          {index > 0 ? ", " : ""}
                          <Link className="font-bold text-[#005a9c] underline" href={productPath(product)}>
                            {product.shortTitle}
                          </Link>
                        </span>
                      ))
                    ) : (
                      "Ask us which current models we fit"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-[900px] text-[18px] leading-8 text-[#333]">
        Not sure which hearing aid type or style suits you? Read our guide to the{" "}
        <Link className="font-bold text-[#005a9c] underline" href="/types-of-hearing-aids">types of hearing aids</Link>.
      </p>
    </div>
  );
}

function Hero({ page }: { page: SitePage }) {
  return (
    <section className="bg-[var(--brand-soft)]">
      <div className="container grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-dark)]">
            {page.type === "home" ? "Audiology and hearing care" : readableType(page.type)}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[var(--brand-dark)] md:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--foreground)]">
            {page.metaDescription}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-5 py-3 font-black text-white sm:w-auto"
              data-track="phone-hero"
              href={primaryPhoneHref}
            >
              <Phone size={19} aria-hidden="true" />
              Call {primaryPhone}
            </a>
            <ZocdocButton
              className="!w-full !justify-center border border-[var(--brand)] bg-white px-5 py-3 font-black text-[var(--brand-dark)] sm:!w-auto"
              label="Request Appointment"
              trackingId="appointment-hero"
            />
          </div>
        </div>
        <div className="rounded-lg bg-white p-3 medical-shadow">
          {page.heroImage ? (
            <Image
              alt={page.heroImage.alt || page.h1}
              className="aspect-[4/3] w-full rounded-md object-cover"
              height={720}
              priority={page.path === "/"}
              src={page.heroImage.src}
              width={960}
            />
          ) : (
            <div className="grid aspect-[4/3] place-items-center rounded-md bg-[var(--brand)] p-8 text-center text-white">
              <div>
                <ShieldCheck className="mx-auto" size={48} aria-hidden="true" />
                <p className="mt-4 text-2xl font-black">{siteName}</p>
                <p className="mt-2 text-white/82">Trusted hearing care in Westchester County</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function readableType(type: SitePage["type"]) {
  return type
    .replace("blog-index", "blog")
    .replace("blog-post", "article")
    .replace("service-area", "service area")
    .replace(/-/g, " ");
}

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-dark)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-black leading-tight text-[var(--brand-dark)]">{title}</h2>
      {text ? <p className="mt-3 text-lg leading-8 text-[var(--muted)]">{text}</p> : null}
    </div>
  );
}

function ContentText({ page }: { page: SitePage }) {
  const paragraphs = page.body.flatMap(splitLongText).slice(0, page.type === "team" ? 90 : 45);

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="rich-text rounded-lg border border-[var(--line)] bg-white p-6 leading-8 medical-shadow md:p-8">
          {paragraphs.map((line, index) => {
            const headingLike = line.length < 90 && !/[.!?]$/.test(line) && index > 0;
            if (headingLike) {
              return (
                <h2 key={`${line}-${index}`} className="text-2xl font-black text-[var(--brand-dark)]">
                  {line}
                </h2>
              );
            }
            return (
              <p className="text-[var(--foreground)]" key={`${line}-${index}`}>
                {linkifyText(line)}
              </p>
            );
          })}
        </article>
        <aside className="space-y-4">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--cream)] p-5">
            <p className="font-black text-[var(--brand-dark)]">Need help choosing the right next step?</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Call the office for appointment availability and personalized care guidance.
            </p>
            <a
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 font-bold text-white"
              data-track="phone-sidebar"
              href={primaryPhoneHref}
            >
              <Phone size={17} aria-hidden="true" />
              {primaryPhone}
            </a>
          </div>
          <RelatedLinks page={page} />
        </aside>
      </div>
    </section>
  );
}

function RelatedLinks({ page }: { page: SitePage }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white p-5">
      <p className="font-black text-[var(--brand-dark)]">Related pages</p>
      <ul className="mt-3 space-y-2 text-sm">
        {page.related.map((link) => (
          <li key={link.href}>
            <Link className="focus-ring text-[var(--brand)] underline" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Audiology services focused on clearer communication"
          text="Core care pathways are easy to find, internally linked, and written for patients rather than search engines."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              className="focus-ring rounded-lg border border-[var(--line)] bg-[var(--background)] p-5 transition hover:-translate-y-1 hover:border-[var(--brand)]"
              href={service.path}
              key={service.path}
            >
              <CheckCircle2 className="text-[var(--accent)]" size={24} aria-hidden="true" />
              <h3 className="mt-4 font-black text-[var(--brand-dark)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCards() {
  const officeLocations = locations.filter((location) => location.type === "office");
  return (
    <section className="section bg-[var(--brand-soft)]">
      <div className="container">
        <SectionTitle
          eyebrow="Locations"
          title="Two office locations serving Westchester County and nearby communities"
          text="Visit Audiology Associates of Westchester in Harrison or Somers."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {officeLocations.map((location) => (
            <Link className="focus-ring rounded-lg bg-white p-5 medical-shadow" href={location.path} key={location.path}>
              <MapPin className="text-[var(--accent)]" size={24} aria-hidden="true" />
              <h3 className="mt-3 text-lg font-black text-[var(--brand-dark)]">{location.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{location.address}</p>
              <p className="mt-3 text-sm font-bold text-[var(--brand)]">{location.phone}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeExtras() {
  return (
    <>
      <ServicesGrid />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Why choose us"
              title="Patient-first hearing care with long-term follow-up"
              text="The current site emphasizes trust, communication, family connection, and quality of life. This rebuild keeps that positioning while improving clarity and structure."
            />
            <div className="mt-6 grid gap-3">
              {["Hearing tests to understand the root of hearing concerns", "Current hearing aid technology and fitting support", "Follow-up appointments for cleaning, adjustment, and repair", "Educational support for loved ones and hearing loss prevention"].map(
                (item) => (
                  <div className="flex gap-3 rounded-lg border border-[var(--line)] bg-white p-4" key={item}>
                    <CheckCircle2 className="shrink-0 text-[var(--accent)]" size={22} aria-hidden="true" />
                    <p className="font-bold text-[var(--brand-dark)]">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <ContactForm context="Homepage contact form" />
        </div>
      </section>
      <LocationCards />
    </>
  );
}

function ServiceExtras({ page }: { page: SitePage }) {
  if (page.type !== "service" && page.type !== "hearing-aids" && page.type !== "educational") return null;

  return (
    <section className="section bg-[var(--brand-soft)]">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6">
            <h2 className="text-xl font-black text-[var(--brand-dark)]">Who we help</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Adults and families who are noticing hearing changes, communication strain, tinnitus,
              hearing aid concerns, or exposure to loud sound.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6">
            <h2 className="text-xl font-black text-[var(--brand-dark)]">When to schedule</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Schedule when hearing feels unclear, conversations are harder to follow, devices need
              attention, or tinnitus and sound comfort affect daily life.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6">
            <h2 className="text-xl font-black text-[var(--brand-dark)]">What to expect</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              The team reviews your concerns, explains options clearly, and recommends next steps
              based on your appointment and clinical needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationDetails({ page }: { page: SitePage }) {
  const location = locationForPath(page.path);
  if (!location) return null;

  return (
    <section className="section bg-white">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--cream)] p-6">
          <h2 className="text-2xl font-black text-[var(--brand-dark)]">
            {location.type === "office" ? `Audiologist in ${location.city}, ${location.state}` : `${location.city} hearing care`}
          </h2>
          <address className="mt-4 space-y-3 not-italic leading-7">
            <p>{location.address}</p>
            <a className="focus-ring inline-flex items-center gap-2 font-bold text-[var(--brand)] underline" href={location.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              {location.phone}
            </a>
            {location.fax ? <p>Fax: {location.fax}</p> : null}
          </address>
          <div className="mt-5">
            <p className="font-black text-[var(--brand-dark)]">Hours</p>
            <ul className="mt-2 space-y-1 text-[var(--muted)]">
              {location.hours.map((hours) => (
                <li key={hours}>{hours}</li>
              ))}
            </ul>
          </div>
          {location.note ? <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{location.note}</p> : null}
        </div>
        <div>
          <h2 className="text-2xl font-black text-[var(--brand-dark)]">Services available</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <Link className="focus-ring rounded-lg border border-[var(--line)] p-4 hover:bg-[var(--brand-soft)]" href={service.path} key={service.path}>
                <p className="font-black text-[var(--brand-dark)]">{service.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-[var(--line)] p-4">
            <p className="font-black text-[var(--brand-dark)]">Nearby areas served</p>
            <p className="mt-2 text-[var(--muted)]">{location.nearby.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// sections[0] is an article's first H2, not a taxonomy field. For posts that came
// out of the old-site crawl and for a few of the generated ones it is a sentence,
// which put strays like "You Can Try Putting Hydrogen Peroxide Drops in Your Ear"
// in the topic list of a clinical practice, reading as practice advice.
const nonCategorySections = new Set([
  "The idea",
  "What changed",
  "Following the evidence",
  "Why this concerns Westchester now",
  "You Can Try Putting Hydrogen Peroxide Drops in Your Ear",
  "Psoriasis Affects More Than Your Skin",
  "Pride Month: Celebrating Diversity and Equality"
]);

function BlogIndex({ page, scheduledPosts = [] }: { page: SitePage; scheduledPosts?: SitePage[] }) {
  const orderedPosts = [...blogPosts, ...scheduledPosts]
    .filter((post, index, posts) => posts.findIndex((candidate) => candidate.path === post.path) === index)
    .sort((first, second) => (second.lastModified || "").localeCompare(first.lastModified || ""));
  const groupedPosts = orderedPosts.reduce<Record<string, SitePage[]>>((groups, post) => {
    const rawCategory = post.sections[0];
    const category =
      rawCategory && !nonCategorySections.has(rawCategory) ? rawCategory : "Hearing Health Guide";
    groups[category] = [...(groups[category] || []), post];
    return groups;
  }, {});
  const categories = Object.keys(groupedPosts);

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-[#f7f7f5] py-14 text-center" id="top">
        <div className="mx-auto max-w-[1180px] px-5">
          <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#a75e22]">Audiology Associates of Westchester</p>
          <h1 className="mt-3 text-[42px] font-black text-[#333] max-md:text-[34px]">Hearing Health Resources</h1>
          <p className="mx-auto mt-4 max-w-[760px] text-[20px] leading-[1.45] text-[#555] max-md:text-[18px]">
            Clear, practical guidance on hearing aids, tinnitus, ear care, and the moments when it is time to speak with an audiologist.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                className="focus-ring rounded-full border border-[#c9d6df] bg-white px-4 py-2 text-[15px] font-black text-[#005a9c] transition hover:border-[#005a9c]"
                href={`#${anchorId(category)}`}
                key={category}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
      {categories.map((category, index) => (
        <section className={index % 2 === 0 ? "bg-white py-14" : "bg-[#f7f7f5] py-14"} id={anchorId(category)} key={category}>
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-black uppercase tracking-[0.16em] text-[#a75e22]">Resource collection</p>
                <h2 className="mt-2 text-[34px] font-black leading-tight text-[#333] max-md:text-[28px]">{category}</h2>
              </div>
              <a className="focus-ring text-[16px] font-bold text-[#005a9c] underline" href="#top">
                Back to topics
              </a>
            </div>
            <div className="mt-8 grid gap-7 text-left md:grid-cols-2 xl:grid-cols-3">
              {groupedPosts[category].map((post) => (
                <Link className="focus-ring group flex h-full flex-col overflow-hidden border border-[#dedede] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md" href={post.path} key={post.path}>
                  {post.heroImage ? (
                    <Image
                      alt={post.heroImage.alt || post.h1}
                      className={`aspect-[16/10] w-full transition duration-300 group-hover:scale-[1.02] ${imageFitClass(post.heroImage.src)}`}
                      height={420}
                      unoptimized={post.heroImage.src.endsWith(".svg")}
                      src={post.heroImage.src}
                      width={720}
                    />
                  ) : <div className="aspect-[16/10] bg-[#dbe9f3]" />}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[13px] font-black uppercase tracking-[0.14em] text-[#a75e22]">{post.sections[0] || "Hearing health guide"}</p>
                    <h3 className="mt-3 text-[24px] font-black leading-tight text-[#333] group-hover:text-[#005a9c]">{post.h1}</h3>
                    <p className="mt-3 line-clamp-3 text-[16px] leading-6 text-[#555]">{post.metaDescription}</p>
                    <span className="mt-6 inline-block text-[16px] font-bold text-[#005a9c] underline">Read article</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function PatientForms() {
  return (
    <section className="section bg-[var(--brand-soft)]">
      <div className="container">
        <SectionTitle eyebrow="Forms" title="Download patient forms before your visit" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {patientForms.map((form) => (
            <a
              className="focus-ring inline-flex items-center gap-3 rounded-lg border border-[var(--line)] bg-white p-5 font-black text-[var(--brand-dark)] medical-shadow"
              href={form.href}
              key={form.href}
              rel="noreferrer"
              target="_blank"
            >
              <FileText className="text-[var(--accent)]" size={24} aria-hidden="true" />
              {form.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ page }: { page: SitePage }) {
  if (page.type !== "contact") return null;
  return (
    <section className="section bg-[var(--brand-soft)]">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Submit this form to contact us"
            text="The form sends a secure email notification to the practice team."
          />
          <div className="mt-6 space-y-3 rounded-lg bg-white p-5">
            {locations
              .filter((location) => location.type === "office")
              .slice(0, 2)
              .map((location) => (
                <div key={location.path}>
                  <p className="font-black text-[var(--brand-dark)]">{location.name}</p>
                  <p className="text-sm text-[var(--muted)]">{location.address}</p>
                  <a className="text-sm font-bold text-[var(--brand)] underline" href={location.phoneHref}>
                    {location.phone}
                  </a>
                </div>
              ))}
          </div>
        </div>
        <ContactForm context={`Contact page: ${page.h1}`} />
      </div>
    </section>
  );
}

function FaqSection({ page }: { page: SitePage }) {
  if (!page.faqs.length) return null;
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Helpful answers" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {page.faqs.map((faq) => (
            <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-5" key={faq.question}>
              <h2 className="text-lg font-black text-[var(--brand-dark)]">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[var(--brand)] py-10 text-white">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black">Ready to talk with an audiologist?</h2>
          <p className="mt-2 text-white/82">
            Contact the practice for appointment availability and personalized recommendations.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="focus-ring inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 font-black text-[var(--brand-dark)] sm:w-auto" href={primaryPhoneHref}>
            Call {primaryPhone}
          </a>
          <Link className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-white/60 px-5 py-3 font-black sm:w-auto" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

// Page types whose own template already renders page.faqs somewhere. Every
// other type gets the shared section below, so the FAQPage structured data can
// never describe content that is not on the page — which is what was happening
// on 57 pages, including seven location pages and every product comparison.
const TEMPLATES_WITH_OWN_FAQ_SECTION = new Set([
  "area-city",
  "area-county",
  "service-areas-index",
  "service",
  "how-we-can-help-index",
  "blog-post",
  "team",
  "provider",
  "contact",
  "home",
  // Product detail pages render their own FAQ block, and /reviews renders its
  // questions inline. Verified empirically: every question in each page's
  // FAQPage node appears exactly once in the rendered HTML.
  "product",
  "reviews"
]);

function PageWithSchema({ page, children }: { page: SitePage; children: ReactNode }) {
  const schema = schemaForPage(page);
  const needsSharedFaqs = page.faqs.length > 0 && !TEMPLATES_WITH_OWN_FAQ_SECTION.has(page.type);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
      {needsSharedFaqs ? <FaqSection page={page} /> : null}
    </>
  );
}

export function PageRenderer({
  page,
  scheduledPosts = [],
  homepageVariantId
}: {
  page: SitePage;
  scheduledPosts?: SitePage[];
  // Only set by /homepage-preview/<id>. Live traffic leaves it undefined and
  // gets whichever version lib/homepageVariants.ts has made active.
  homepageVariantId?: HomepageVariantId;
}) {
  if (page.type === "home") {
    return (
      <PageWithSchema page={page}>
        <HomePage variantId={homepageVariantId} />
      </PageWithSchema>
    );
  }

  if (page.type === "contact") {
    return (
      <PageWithSchema page={page}>
        <LiveContactPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "form") {
    return (
      <PageWithSchema page={page}>
        <LivePatientFormsPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "team") {
    return (
      <PageWithSchema page={page}>
        <LiveTeamPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "provider") {
    return (
      <PageWithSchema page={page}>
        <ProviderProfilePage page={page} />
      </PageWithSchema>
    );
  }

  if (page.path === "/hearing-testing") {
    return (
      <PageWithSchema page={page}>
        <HearingTestingPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.path === "/careers") {
    return (
      <PageWithSchema page={page}>
        <CareersPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.path === "/why-choose-us") {
    return (
      <PageWithSchema page={page}>
        <WhyChooseUsPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.path === "/dr-cliff-approved-provider" || page.path === "/california-hearing-center") {
    return (
      <PageWithSchema page={page}>
        <AboutTrustPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "thank-you") {
    return (
      <PageWithSchema page={page}>
        <LiveThankYouPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "location" || page.type === "service-area") {
    return (
      <PageWithSchema page={page}>
        <LiveLocationPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.path === "/hearing-aids-brands") {
    return (
      <PageWithSchema page={page}>
        <LiveBrandsPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "how-we-can-help-index") {
    return (
      <PageWithSchema page={page}>
        <HowWeCanHelpIndexPage page={page} />
      </PageWithSchema>
    );
  }

  const tinnitusPage = tinnitusPageForPath(page.path);
  if (tinnitusPage) {
    return (
      <PageWithSchema page={page}>
        <TinnitusTopicPage page={page} topic={tinnitusPage} />
      </PageWithSchema>
    );
  }

  if (helpServiceForPath(page.path)) {
    return (
      <PageWithSchema page={page}>
        <HowWeCanHelpServicePage page={page} />
      </PageWithSchema>
    );
  }

  if (hearingLossEducationDetails[page.path]) {
    return (
      <PageWithSchema page={page}>
        <HearingLossEducationPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "products-index") {
    return (
      <PageWithSchema page={page}>
        <ProductsIndexPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "product-brand-index") {
    return (
      <PageWithSchema page={page}>
        <ProductBrandIndexPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "product-brand") {
    return (
      <PageWithSchema page={page}>
        <ProductBrandPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "product") {
    return (
      <PageWithSchema page={page}>
        <HearingAidProductPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "service-areas-index") {
    return (
      <PageWithSchema page={page}>
        <ServiceAreasIndexPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "area-county") {
    return (
      <PageWithSchema page={page}>
        <AreaCountyPage page={page} />
      </PageWithSchema>
    );
  }

  if (page.type === "area-city") {
    return (
      <PageWithSchema page={page}>
        <AreaCityPage page={page} />
      </PageWithSchema>
    );
  }

  return (
    <PageWithSchema page={page}>
      {page.type === "blog-index" ? <BlogIndex page={page} scheduledPosts={scheduledPosts} /> : <LivePageBody page={page} />}
    </PageWithSchema>
  );
}
