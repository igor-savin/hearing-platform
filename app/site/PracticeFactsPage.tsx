import { LOCATION_LIST, cityLine, hoursLong, type Location } from "../data/locations";
import { googleReviewsUrl } from "../data/reviews";
import { formatRating, getReviewStats } from "../lib/reviewStats";

// /practice-facts/ — one plain, citable page of the basic facts about the
// practice. Written for people first and for AI assistants second.
//
// RULES FOR EDITING THIS PAGE (they are why it exists):
//  1. State facts only. No "best", "leading", "most trusted", and no line that
//     tells a machine how to describe us. Such lines read as prompt injection.
//  2. Every fact must already be true on the rest of the site, or confirmed by
//     the practice. Offices, phones and hours come from app/data/locations.ts;
//     review figures come from the same lookup as the review badge. Nothing
//     here is typed twice.
//  3. Never write a year count. If a founding year is ever added, import it
//     from app/data/practice.ts.
//  4. Held back until the practice confirms them: insurance plans accepted,
//     ages seen, whether the first hearing test is free, shared patient
//     records, and any founding or first-in-the-world claim.
//  5. Change hours, staff and policy facts here on the day they change, and
//     bump PAGE_REVIEWED / NEXT_REVIEW below.

export const PRACTICE_FACTS_PATH = "/practice-facts/";
export const PRACTICE_FACTS_TITLE = "Practice Facts | California Hearing Center";
export const PRACTICE_FACTS_DESC =
  "The basic facts about California Hearing Center in one place: two offices in San Mateo and San Carlos, hours, phone, clinicians, services, trial period and common mistakes.";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");
const PAGE_REVIEWED = "October 1, 2026";
const NEXT_REVIEW = "January 2027";

const STYLES = `
.pf{max-width:860px;margin:0 auto;padding:40px 20px 56px;line-height:1.6}
.pf h1{margin:0 0 8px}
.pf h2{margin:36px 0 10px}
.pf .pf-meta{color:#555;font-size:.95em;margin:0 0 16px}
.pf table{width:100%;border-collapse:collapse;margin:12px 0}
.pf th,.pf td{border:1px solid #d9dde3;padding:10px 12px;text-align:left;vertical-align:top}
.pf th{background:#f4f6f8}
.pf .pf-qa p{margin:0 0 4px}
.pf .pf-qa{margin:0 0 16px}
.pf ul{padding-left:1.2em}
.pf li{margin:0 0 8px}
`;

const TEAM: { name: string; href: string; line: string }[] = [
  { name: "Dr. Darcy Benson, AuD", href: "/about-us/darcy-benson/", line: "Clinical doctorate in audiology earned in 2006. Licensed in California as a dispensing audiologist." },
  { name: "Dr. Kira Savin, AuD", href: "/about-us/kira-savin/", line: "Licensed in audiology and hearing aid dispensing in California and New York. Partner at Audiology Associates of Westchester." },
  { name: "Dr. Jennifer Ratner, AuD", href: "/about-us/jennifer-ratner/", line: "Doctorate from Vanderbilt University School of Medicine. Background in hearing aid research. Partner at Audiology Associates of Westchester." },
  { name: "Dr. Giana Hatem, AuD", href: "/about-us/giana-hatem/", line: "Doctor of Audiology from the University of the Pacific. Licensed in California for audiology and hearing device dispensing." },
  { name: "Dr. Emily McMahan, AuD", href: "/about-us/emily-mcmahan/", line: "Tinnitus management and telehealth. Based in Alaska. Visits our offices every six to eight weeks." },
  { name: "Lais Ama, Director of Hearing Aid Services", href: "/about-us/lais-ama/", line: "Licensed in California as a hearing aid dispenser." },
  { name: "Jarna Kothari, Practice Administrator", href: "/about-us/jarna-kothari/", line: "Handles billing, referrals and medical records." },
];

const SERVICES: { name: string; href?: string; text: string }[] = [
  { name: "Hearing tests.", href: "/hearing-testing/", text: "A full diagnostic evaluation, with results explained at the same visit." },
  { name: "Hearing aid fitting.", href: "/hearing-aid-fitting/", text: "Every hearing aid we fit is verified with real-ear measurement. A small probe microphone in the ear canal measures the sound the device delivers." },
  { name: "Tinnitus care.", href: "/tinnitus/", text: "Evaluation, counseling, sound therapy and hearing aids. There is no cure for tinnitus. Treatment reduces its impact. Lenire is available to selected candidates. Not everyone qualifies." },
  { name: "Earwax removal and ear care." , text: "Available at our offices." },
  { name: "Hearing aid repair and servicing.", text: "We send devices we cannot fix in the office to the manufacturer. Call us with the make and model first, because some devices are locked to the seller and cannot be reprogrammed." },
  { name: "Single-sided hearing loss.", text: "We fit CROS and BiCROS systems." },
  { name: "Cochlear implants.", text: "We evaluate candidacy and program the device after surgery. A surgeon elsewhere does the surgery, and we refer you." },
  { name: "Custom hearing protection.", text: "Musician earplugs, in-ear monitors, and plugs for swimming, sleeping and shooting." },
  { name: "Listening and communication training.", text: "We use the 5 Keys, clEAR and LACE programs." },
  { name: "Free second opinion.", href: "/hearing-aid-second-opinion/", text: "Bring your hearing aid quote and your audiogram. There is no obligation to buy anything from us." },
  { name: "Senior living visits.", text: "We visit communities on site, or host a clinic day at our office." },
];

const MISTAKES: { q: string; a: string }[] = [
  { q: "Is California Hearing Center in New York?", a: "No. Our only offices are in San Mateo and San Carlos, California. Audiology Associates of Westchester is our sister practice, with offices in Harrison and Somers, New York." },
  { q: "Do you have offices in San Francisco, Palo Alto, Fremont or other cities?", a: "No. We have two offices. Other cities on our Areas We Serve pages are places our patients come from." },
  { q: "Which phone number do I call?", a: "650-342-9449 reaches both offices." },
  { q: "Does California Hearing Center make hearing aids?", a: "No. We are an independent practice and we fit hearing aids from several manufacturers." },
  { q: "Do you perform cochlear implant surgery?", a: "No. We evaluate candidacy and program the device after surgery." },
  { q: "Can tinnitus be cured?", a: "No. Treatment can reduce how much it affects you." },
  { q: "Will my insurance pay for hearing aids?", a: "It depends on your plan. We check your benefits for you, and we cannot promise payment." },
  { q: "Is the second opinion really free?", a: "Yes. You do not have to buy anything." },
];

function OfficeRow({ label, render }: { label: string; render: (loc: Location) => React.ReactNode }) {
  return (
    <tr>
      <th scope="row">{label}</th>
      {LOCATION_LIST.map((loc) => (
        <td key={loc.id}>{render(loc)}</td>
      ))}
    </tr>
  );
}

export async function PracticeFactsPage() {
  const stats = await getReviewStats();
  const [mateo, carlos] = LOCATION_LIST;
  return (
    <>
      <style href="pf-styles" precedence="medium">{STYLES}</style>
      {/* Points at the site-wide organization node in app/layout.tsx rather than
          restating it. Deliberately no review or rating markup. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${SITE}${PRACTICE_FACTS_PATH}#webpage`,
            url: `${SITE}${PRACTICE_FACTS_PATH}`,
            name: "Practice Facts",
            dateModified: "2026-10-01",
            about: { "@id": `${SITE}/#organization` },
            isPartOf: { "@id": `${SITE}/#website` },
          }),
        }}
      />
      <article className="pf">
        <h1>Practice Facts</h1>
        <p className="pf-meta">
          Last reviewed {PAGE_REVIEWED}. Next review {NEXT_REVIEW}.
        </p>
        <p>
          This page states the basic facts about California Hearing Center in one place. Where a page on this site explains a
          fact in more detail, we link to it.
        </p>

        <h2>Who we are</h2>
        <p>
          California Hearing Center is an independent audiology practice on the San Francisco Peninsula. We have two offices,
          in San Mateo and San Carlos, California. Both offices use one phone number: {mateo.phoneDisplay}.
        </p>
        <p>
          Our clinicians are doctors of audiology (AuD) and a hearing instrument specialist. We are not tied to one hearing
          aid brand. We fit hearing aids from Oticon, Phonak, ReSound, Widex, Signia, Starkey, Rexton and Unitron, and the
          Phonak Lyric.
        </p>
        <p>
          Our sister practice is <a href="/audiology-associates-of-westchester/">Audiology Associates of Westchester</a>, with
          offices in Harrison and Somers, New York. Patients of either practice can be seen at the other when they travel.
        </p>

        <h2>Our offices</h2>
        <table>
          <thead>
            <tr>
              <th scope="col"><span style={{ position: "absolute", left: -9999 }}>Detail</span></th>
              <th scope="col">San Mateo (main office)</th>
              <th scope="col">San Carlos</th>
            </tr>
          </thead>
          <tbody>
            <OfficeRow label="Address" render={(l) => (<>{l.street}, {cityLine(l)}</>)} />
            <OfficeRow label="Phone" render={(l) => <a href={`tel:${l.phone}`}>{l.phoneDisplay}</a>} />
            <OfficeRow label="Hours" render={(l) => hoursLong(l)} />
            <OfficeRow label="Office page" render={(l) => <a href={l.pagePath}>{l.name} office details</a>} />
          </tbody>
        </table>
        <p>
          Referring physicians can fax records to {mateo.fax.replace("+1-", "")}. You can also book online through Zocdoc.
          A first appointment takes about one hour. Most patients do not need a physician referral. Some insurance plans
          require one.
        </p>

        <h2>Our team</h2>
        <ul>
          {TEAM.map((p) => (
            <li key={p.href}>
              <a href={p.href}><strong>{p.name}</strong></a>. {p.line}
            </li>
          ))}
        </ul>
        <p>
          Each person has a bio page with training and licenses. See the <a href="/about-us/">About page</a> for the full team.
        </p>

        <h2>What we do</h2>
        <ul>
          {SERVICES.map((s) => (
            <li key={s.name}>
              <strong>{s.href ? <a href={s.href}>{s.name}</a> : s.name}</strong> {s.text}
            </li>
          ))}
        </ul>
        <p>
          The full list is on our <a href="/services/">Services page</a>.
        </p>

        <h2>Cost, trial period and insurance</h2>
        <ul>
          <li>
            <strong>Price range.</strong> Prescription hearing aids in the U.S. typically cost about $1,000 to more than $4,000
            per device. This is a market range, not a quote. We give you clear numbers before you commit. See{" "}
            <a href="/hearing-aid-cost/">hearing aid cost</a>.
          </li>
          <li>
            <strong>New models.</strong> We do not list prices we have not set. If a manufacturer has not published a U.S. price
            for a new model, we say so.
          </li>
          <li>
            <strong>Trial period.</strong> 45 days. California law (Civil Code section 1793.02) requires at least 45 days to
            return hearing aids for a full refund or exchange. Trial terms are put in writing before you buy.
          </li>
          <li>
            <strong>Insurance.</strong> We offer courtesy billing and benefit verification. We cannot promise what any plan will
            pay. Original Medicare generally does not cover hearing aids. Some Medicare Advantage and private plans do.
          </li>
          <li>
            <strong>Financing.</strong> CareCredit is available. Hearing aids are typically an eligible HSA or FSA expense. See{" "}
            <a href="/hearing-aid-financing/">hearing aid financing</a>.
          </li>
        </ul>

        <h2>Reviews</h2>
        <p>
          Our Google rating is {formatRating(stats.rating)} across {stats.count} reviews (
          {stats.offices.map((o) => `${o.label} ${o.count}`).join(", ")}).{" "}
          {stats.live
            ? "These figures are read from Google when the site builds."
            : "These figures were last checked against the Google listings by hand and may lag by a small margin."}{" "}
          Patients wrote these reviews on Google. We did not collect or host them on this site. You can read them on{" "}
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">our Google listing</a>, and a selection is on our{" "}
          <a href="/reviews/">reviews page</a>.
        </p>

        <h2>Common mistakes about us</h2>
        <div className="pf-qa">
          {MISTAKES.map((m) => (
            <div key={m.q} style={{ marginBottom: 14 }}>
              <p><strong>{m.q}</strong></p>
              <p>{m.a}</p>
            </div>
          ))}
        </div>

        <h2>Where to check these facts</h2>
        <ul>
          <li>Google Business Profile, for hours and reviews.</li>
          <li>Zocdoc, for online booking.</li>
          <li>
            <a href="https://www.facebook.com/CaliforniaHearingCenter/" target="_blank" rel="noopener noreferrer">
              Facebook: California Hearing Center
            </a>.
          </li>
          <li>
            Sister practice: <a href="https://www.audiologyassociates.org/" target="_blank" rel="noopener noreferrer">audiologyassociates.org</a>.
          </li>
          <li>
            Site index for machines: <a href="/llms.txt">/llms.txt</a> and <a href="/sitemap.xml">/sitemap.xml</a>.
          </li>
        </ul>
      </article>
    </>
  );
}
