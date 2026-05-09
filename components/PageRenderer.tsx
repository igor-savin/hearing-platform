import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, FileText, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ZocdocButton } from "@/components/ZocdocButton";
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

const patientForms = [
  {
    label: "New Adult Patient Forms",
    href: "https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/New%20Adult%20Patient%20Forms%20-merge.pdf"
  },
  {
    label: "New Pediatric Patient Forms",
    href: "https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Pediatric-Intake-Form-merge.pdf"
  },
  {
    label: "Tinnitus Forms",
    href: "https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Tinnitus%20Forms%20-merged.pdf"
  },
  {
    label: "Audiology Associates of Westchester Privacy Notice",
    href: "https://irp-cdn.multiscreensite.com/d8404b56/files/uploaded/Audiology-Associates-of-Westchester-Privacy-Notice.pdf"
  }
];

const homeImages = {
  banner: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/banner-1920w.jpg",
  meetTeam: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/meet-the-team-1920w.jpg",
  people: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/what-people-are-saying-1920w.jpg",
  experts: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/talk-to-experts-1920w.jpg",
  testing: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/w2-1920w.jpg",
  fitting: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/AdobeStock_232317406-1920w.jpg",
  tinnitus: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/w4-1920w.jpg",
  protection: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/w1-1920w.jpg",
  repair: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Hearst+Widex+photo-1920w.png"
};

const homeServiceCards = [
  ["Hearing Testing", "/hearing-testing", homeImages.testing, "doctor administering hearing test on older man"],
  ["Hearing Aid Fitting", "/hearing-aid-fitting", homeImages.fitting, "hearing aid fitting appointment"],
  ["Tinnitus Therapy", "/tinnitus-therapy", homeImages.tinnitus, "sound reverberating around ear"],
  ["Hearing Protection", "/hearing-protection", homeImages.protection, "sound-cancelling earmuffs hanging up"],
  ["Hearing Aid Repair", "/hearing-aid-repair", homeImages.repair, "woman handing over small hearing aid for repair"]
];

const teamMembers = [
  {
    name: "Dr. Jennifer Ratner, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Jen-Ratner-img-1920w.jpg",
    alt: "Jennifer Ratner, Au.D. - Doctor of Audiology - Audiology Associates of Westchester"
  },
  {
    name: "Dr. Caitlin Dold, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Lead Audiologist, Doctor of Audiology",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/0255MFox9-2021-Edit-368076c6-1920w.jpg",
    alt: "Caitlin Dold, Au.D. - Doctor of Audiology at Audiology Associates of Westchester"
  },
  {
    name: "Dr. Jenna M. Elias, Au.D., F-AAA",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Untitled-3-1920w.jpg",
    alt: "Dr. Jenna Elias"
  },
  {
    name: "Dr. Leannmarie Senat",
    pronouns: "(she/her/hers)",
    role: "Audiology Staff, Doctor of Audiology",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Leannmarie-Senat-img-1920w.jpg",
    alt: "Dr. Leannmarie Senat"
  },
  {
    name: "Julia Rivera",
    pronouns: "(she/her/hers)",
    role: "Doctorate of Audiology Extern",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/IMG_6425-1920w.jpg",
    alt: "Julia Rivera"
  },
  {
    name: "Dr. Kira Savin, Au.D.",
    pronouns: "(she/her/hers)",
    role: "Partner, Doctor of Audiology",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/0422MFox9-2021-Edit-489c6f34-1920w.jpg",
    alt: "Kira Savin, Au.D. - Doctor of Audiology at Audiology Associates of Westchester"
  },
  {
    name: "Jennifer Tarlton",
    pronouns: "(she/her/hers)",
    role: "Practice Administrator",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Jennifer-Tarlton-img-1920w.jpg",
    alt: "Jennifer Tarlton"
  },
  {
    name: "Alicia Rivera",
    pronouns: "",
    role: "Patient Care Coordinator Lead / Billing Specialist",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/0643MFox9-2021-Edit-fb1663ce-1920w.jpg",
    alt: "Alicia Rivera - Patient Care Coordinator Lead/ Billing Specialist"
  },
  {
    name: "Barbara Lawrence",
    pronouns: "",
    role: "Patient Care Coordinator",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Barbara_19-Edit+%281%29-1920w.jpg",
    alt: "Barbara Lawrence"
  },
  {
    name: "Hazel Icaza",
    pronouns: "",
    role: "Patient Care Coordinator",
    image: "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Hazel_26-Edit-1920w.jpg",
    alt: "Hazel Icaza"
  }
];

const hearingAidBrands = [
  ["Widex Hearing Aids", "Widex is a family-owned company that has been advancing the hearing aid industry since 1956. They specialize in tinnitus solutions and create high-quality hearing aids like their EVOKE™ line.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/WidexLogo-1920w.png", "Widex High Definition Hearing logo"],
  ["Starkey Hearing Aids", "Starkey Hearing Technologies was established back in 1964. They design all kinds of hearing aids, including ones that are receiver in canal, completely in canal, behind the ear, in the canal, and in the ear. They create some of the most advanced products, including ones that are smartphone compatible and have activity tracking capabilities.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/StarkeyLogo-250x131-1920w.png", "Starkey logo"],
  ["Phonak Hearing Aids", "Phonak hearing aids offer new solutions to hearing loss problems. Their products are continually changed to meet hearing loss problems. Their products include Phonak Audéo™ Marvel, Phonak Bolero™ Marvel, Phonak Sky™ Marvel, and many others.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/PhonakLogo-250x53-1920w.png", "Phonak logo"],
  ["Lyric Hearing Aids", "Lyric creates extended wear, nearly invisible hearing aids. In fact, they created the Phonak Lyric™, touted as the world’s only 100% invisible hearing aid. All of their products are designed to provide superb sound quality.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/LyricLogo-250x128-1920w.png", "Lyric logo"],
  ["Unitron Hearing Aids", "Unitron creates simple yet effective hearing aids that have won numerous Red Dot awards. Some of their products include Moxi Now, Stride M, Stride P, Moxi Fit, and Moxi Kiss.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/UnitronLogo-250x64-1920w.png", "Unitron Connect logo"],
  ["Signia & Siemens Hearing Aids", "Signia has provided over 120 countries with high-quality hearing aids that deliver crystal-clear results. Siemens, under the Signia name, has provided customized audiology solutions for more than 100 years.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/Signia_logo-1920w.png", "Signia logo"],
  ["Rexton Hearing Aids", "Rexton offers hearing aids and accessories to improve your quality of life. Their focus is on accessibility and personalization to make sure everyone in need of a hearing aid finds what they need.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/RextonLogo-250x47-1920w.png", "Rexton logo"],
  ["Oticon Hearing Aids", "Oticon has led the way for many changes in the hearing aid industry, recently with their Oticon Opn S™ and Oticon Opn Play™. These products can be used by children and adults who wish to hear clearly while enjoying an active life.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/oticon-hearing-aids-logo-1920w.png", "Oticon logo"],
  ["Resound Hearing Aids", "ReSound has been offering hearing loss solutions to people of all ages since 1943. They provide advanced, cutting edge technology, earning them the CES Innovation Award, the Die Goldene Concha award, the Golden Lobe Award, and more.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/ResoundLogo-250x102-1920w.png", "ReSound logo"],
  ["Caption Call", "CaptionCall makes a transcript of phone conversations so you can see what the other person is saying. This is a real-time solution for those with hearing loss who have trouble using a phone.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/caption-call-trans-bg1-1920w.png", "Caption Call logo"],
  ["CapTel", "CapTel is a phone that amplifies the noise you want while reducing the noise you don’t want. It also provides a caption and transcript of the conversation.", "https://lirp.cdn-website.com/d8404b56/dms3rep/multi/opt/CapTel_logo-1920w.png", "CapTel logo"]
];

const liveBlogOrder = [
  "/celebrating-pride-month-embracing-inclusivity-and-compassion",
  "/psoriasis-affects-more-than-your-skin",
  "/how-to-take-care-of-a-blocked-ear"
];

function HomePage() {
  return (
    <>
      <section className="legacy-home-hero relative grid min-h-[390px] place-items-center overflow-hidden bg-[#05446a] px-5 py-20 text-center text-white">
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src={homeImages.banner}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10">
          <h1 className="text-[44px] font-black leading-tight drop-shadow-lg md:text-[58px]">
            You&rsquo;ll Never Say &ldquo;What?&rdquo; Again!
          </h1>
          <p className="mt-7 text-[18px] font-black uppercase tracking-[0.4em] drop-shadow-md md:text-[26px]">
            Improve Your Hearing <span className="mx-3">•</span> Hearing Aids <span className="mx-3">•</span> Hearing Testing
          </p>
        </div>
      </section>

      <section className="bg-white py-12 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h2 className="text-[36px] font-black leading-tight text-[#0a3d45] md:text-[48px]">
            Your Trusted Audiologist
            <br />
            <span className="text-[22px] font-black text-[#4f4f4f]">
              Serving Greenwich, CT; Scarsdale, Mt. Kisco, White Plains, Harrison, Rye, Somers, NY &amp; Beyond
            </span>
          </h2>
          <div className="mx-auto mt-7 max-w-[1040px] space-y-5 text-[18px] leading-8 text-[#333]">
            <p>
              Hearing loss can be frustrating and cause you to miss out on everything around you. Whether you want
              to watch TV without turning the volume all the way up, you want to hear your grandchildren, or you
              want to have a conversation with a friend, hearing impairment can get in the way.
            </p>
            <p>
              Fortunately, the audiologist at Audiology Associates of Westchester can help you regain quality of life
              and hear the world around you. We offer a variety of audiology services like{" "}
              <Link className="text-[#005a9c] underline" href="/hearing-testing">
                hearing tests
              </Link>
              ,{" "}
              <Link className="text-[#005a9c] underline" href="/hearing-aid-fitting">
                hearing aid fitting
              </Link>
              ,{" "}
              <Link className="text-[#005a9c] underline" href="/tinnitus-therapy">
                tinnitus therapy
              </Link>{" "}
              to improve your hearing, and more so you don&rsquo;t miss a sound.
            </p>
          </div>
          <p className="mt-7 text-[22px] font-black text-[#333]">Improve your hearing and live life to the fullest. Call now.</p>
          <Link className="legacy-live-button mt-6 inline-flex" href="/contact-us">
            CALL THE NEAREST LOCATION
          </Link>
        </div>
      </section>

      <section className="bg-[#005a9c] py-12 text-center text-white">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 md:grid-cols-3">
          {[
            ["MEET THE TEAM", "/meet-the-team", homeImages.meetTeam, "doctor looking in woman's ear", "Learn more about our experienced team of hearing doctors."],
            ["WHY CHOOSE US", "/why-choose-us", homeImages.people, "women laughing together over coffee", "Check out these many reasons to choose us for your hearing needs."],
            ["CONTACT US", "/contact-us", homeImages.experts, "older man smiling on the phone", "Give us a call and take the first step towards restored hearing."]
          ].map(([title, href, src, alt, text]) => (
            <div key={href}>
              <Image alt={alt} className="h-[235px] w-full object-cover" height={470} src={src} width={720} />
              <Link className="legacy-live-button mt-5 inline-flex" href={href}>
                {title}
              </Link>
              <p className="mx-auto mt-4 max-w-[310px] text-[16px] leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-center text-[32px] font-black leading-tight text-[#333]">
              How Hearing Aids Help You Live a More Fulfilling Life
            </h2>
            <div className="mx-auto my-5 h-[2px] w-full max-w-[450px] bg-gray-400" />
            <ul className="space-y-5 text-[17px] leading-8 text-[#333]">
              <li><strong>Comfort &amp; Convenience:</strong> Hearing loss requires you to adjust everything you hear. Getting control of your hearing means you won&rsquo;t be uncomfortable or inconvenienced from failing to hear what&rsquo;s going on around you.</li>
              <li><strong>Confidence:</strong> Boost your confidence in every area of your life with improved hearing.</li>
              <li><strong>Communication:</strong> Missing out on the conversations around you can be hard on your relationships. Hearing solutions can ease the difficulties you have with speaking with family and friends.</li>
              <li><strong>Connection:</strong> Those with hearing loss tend to avoid social situations altogether. Improve your hearing, and you&rsquo;ll want to connect with others once again.</li>
            </ul>
            <p className="mt-6 text-[17px] leading-8 text-[#333]">
              The knowledgeable and experienced hearing doctors here at Audiology Associates of Westchester can help you
              enhance all these areas of your life and more - contact us today!
            </p>
            <Link className="legacy-live-button mt-7 inline-flex" href="/contact-us">
              CALL THE NEAREST LOCATION
            </Link>
          </div>
          <div className="hidden min-h-[360px] bg-[#f5f5f5] lg:block" />
        </div>
      </section>

      <section className="bg-white pb-14 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h2 className="mb-7 text-[30px] font-black text-[#333]">Our Audiology Services</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {homeServiceCards.map(([title, href, src, alt]) => (
              <Link className="group block" href={href} key={href}>
                <Image alt={alt} className="aspect-square w-full object-cover transition group-hover:scale-[0.98]" height={360} src={src} width={360} />
                <h3 className="mt-3 text-[18px] font-black text-[#005a9c]">{title}</h3>
              </Link>
            ))}
          </div>
          <Link className="legacy-live-button mt-8 inline-flex" href="/hearing-testing">
            READ MORE +
          </Link>
        </div>
      </section>

      <section className="bg-[#f3f3f3] py-14">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-2">
          <div>
            <h2 className="text-center text-[30px] font-black leading-tight text-[#333]">
              Why Choose Audiology Associates of Westchester?
            </h2>
            <ul className="mt-8 list-disc space-y-4 pl-6 text-[17px] leading-7 text-[#333]">
              <li>Our first priority is our patients. We would love to help you regain your ability to hear.</li>
              <li>Our hearing doctors can provide you with a hearing test to understand the root of your hearing loss.</li>
              <li>We stay up to date on the latest and most effective hearing solutions.</li>
              <li>We can adjust and repair your hearing aid as needed.</li>
              <li>We provide follow-up appointments so that our hearing doctors can always ensure your hearing stays top notch.</li>
              <li>We&rsquo;re dedicated to your full satisfaction.</li>
            </ul>
            <Link className="legacy-live-button mt-7 inline-flex" href="/contact-us">
              MAKE AN APPOINTMENT TODAY
            </Link>
          </div>
          <div>
            <h2 className="text-[24px] font-black text-[#333]">Get In Touch</h2>
            <ContactForm context="Homepage contact form" />
          </div>
        </div>
      </section>
    </>
  );
}

function Breadcrumbs({ page }: { page: SitePage }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f7f7f5] py-[13px] text-[16px] text-[#4f4f4f]">
      <div className="mx-auto max-w-[1180px] px-5">
      <Link className="focus-ring underline" href="/">
        Home
      </Link>
      {page.path !== "/" ? <span aria-hidden="true"> / </span> : null}
      {page.path !== "/" ? <span>{page.h1}</span> : null}
      </div>
    </nav>
  );
}

function LiveTextBlock({ lines }: { lines: string[] }) {
  return (
    <div className="legacy-live-copy mx-auto max-w-[1030px] space-y-5 text-center text-[17px] leading-[1.75] text-[#333]">
      {lines.map((line, index) => {
        const isHeading = line.length < 115 && !/[.!?]$/.test(line) && index > 0;
        if (isHeading) {
          return (
            <h2 className="pt-4 text-[25px] font-black leading-tight text-[#333]" key={`${line}-${index}`}>
              {line}
            </h2>
          );
        }
        return <p key={`${line}-${index}`}>{line}</p>;
      })}
    </div>
  );
}

function LivePageBody({ page }: { page: SitePage }) {
  const paragraphs = page.body.filter(Boolean);
  const image = page.heroImage;
  const isBlog = page.type === "blog-post";
  const showImage = isBlog && image;

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-10 text-center md:py-12">
        <div className="mx-auto max-w-[1180px] px-5">
          {isBlog ? (
            <p className="mb-3 text-[15px] text-[#555]">Audiology Associates of Westchester</p>
          ) : null}
          <h1 className="mx-auto max-w-[1080px] text-[32px] font-black leading-[1.15] text-[#333] md:text-[38px]">
            {page.h1 || page.title}
          </h1>
          {showImage ? (
            <Image
              alt={image.alt || page.h1}
              className="mx-auto mt-8 max-h-[430px] w-full max-w-[860px] object-cover"
              height={760}
              priority={false}
              src={image.src}
              width={1180}
            />
          ) : null}
          <div className="mt-8">
            <LiveTextBlock lines={paragraphs.length ? paragraphs : [page.metaDescription]} />
          </div>
        </div>
      </section>

      {page.type === "service" || page.type === "hearing-aids" || page.type === "educational" ? (
        <section className="bg-white pb-12 text-center">
          <div className="mx-auto max-w-[900px] px-5">
            <Link className="legacy-live-button mt-6 inline-flex" href="/contact-us">
              MAKE AN APPOINTMENT TODAY
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}

function LiveContactPage({ page }: { page: SitePage }) {
  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-10 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h1 className="text-[38px] font-black leading-tight text-[#333]">{page.h1}</h1>
          <LiveTextBlock lines={page.body.slice(0, 6)} />
          <div className="mt-10 grid gap-8 text-left lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5 text-[17px] leading-7 text-[#333]">
              {locations
                .filter((location) => location.type === "office")
                .slice(0, 2)
                .map((location) => (
                  <address className="not-italic" key={location.path}>
                    <Link className="font-black text-[#005a9c] underline" href={location.path}>
                      {location.name}
                    </Link>
                    <p>{location.address}</p>
                    <a className="font-bold text-[#005a9c] underline" href={location.phoneHref}>
                      {location.phone}
                    </a>
                  </address>
                ))}
            </div>
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
      <section className="bg-white py-10 text-center">
        <div className="mx-auto max-w-[980px] px-5">
          <h1 className="text-[38px] font-black text-[#333]">{page.h1}</h1>
          <LiveTextBlock lines={page.body.slice(0, 8)} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {patientForms.map((form) => (
              <a className="legacy-live-button inline-flex" href={form.href} key={form.href} rel="noreferrer" target="_blank">
                {form.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function LiveTeamPage({ page }: { page: SitePage }) {
  const intro = page.body.filter((line) => line.includes("We all hope") || line.includes("With locations")).slice(0, 2);

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-10 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h1 className="text-[38px] font-black leading-tight text-[#333]">{page.h1}</h1>
          <div className="mt-7">
            <LiveTextBlock lines={intro.length ? intro : page.body.slice(0, 2)} />
          </div>
          <h2 className="mt-12 text-[28px] font-black text-[#333]">Doctors of Audiology</h2>
          <div className="mt-8 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(0, 6).map((person) => (
              <article className="text-center" key={person.name}>
                <Image
                  alt={person.alt}
                  className="mx-auto aspect-[4/5] w-full max-w-[290px] object-cover"
                  height={520}
                  src={person.image}
                  width={420}
                />
                <h3 className="mt-4 text-[22px] font-black text-[#333]">{person.name}</h3>
                {person.pronouns ? <p className="mt-1 text-[16px] leading-6 text-[#333]">{person.pronouns}</p> : null}
                <p className="text-[16px] font-bold leading-6 text-[#333]">{person.role}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-14 text-[28px] font-black text-[#333]">Executive Team</h2>
          <div className="mt-8 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(6).map((person) => (
              <article className="text-center" key={person.name}>
                <Image
                  alt={person.alt}
                  className="mx-auto aspect-[4/5] w-full max-w-[250px] object-cover"
                  height={500}
                  src={person.image}
                  width={380}
                />
                <h3 className="mt-4 text-[21px] font-black text-[#333]">{person.name}</h3>
                {person.pronouns ? <p className="mt-1 text-[15px] leading-6 text-[#333]">{person.pronouns}</p> : null}
                <p className="text-[15px] font-bold leading-6 text-[#333]">{person.role}</p>
              </article>
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
          <div className="mt-10 grid gap-x-12 gap-y-10 text-left md:grid-cols-2">
            {hearingAidBrands.map(([title, text, src, alt]) => (
              <article className="border-b border-[#d3d3d3] pb-8" key={title}>
                <div className="flex min-h-[86px] items-center">
                  <Image alt={alt} className="max-h-[72px] w-auto object-contain" height={120} src={src} width={270} />
                </div>
                <h2 className="mt-3 text-[24px] font-black text-[#333]">{title}</h2>
                <p className="mt-3 text-[17px] leading-7 text-[#333]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
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
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-[var(--brand)] px-5 py-3 font-black text-white"
              data-track="phone-hero"
              href={primaryPhoneHref}
            >
              <Phone size={19} aria-hidden="true" />
              Call {primaryPhone}
            </a>
            <ZocdocButton
              className="border border-[var(--brand)] bg-white px-5 py-3 font-black text-[var(--brand-dark)]"
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
                {line}
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
  return (
    <section className="section bg-[var(--brand-soft)]">
      <div className="container">
        <SectionTitle
          eyebrow="Locations"
          title="Hearing care across Westchester County and nearby communities"
          text="NAP information from the current website is preserved, with conflicts flagged in the QA report."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {locations.map((location) => (
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

function BlogIndex({ page }: { page: SitePage }) {
  const orderedPosts = liveBlogOrder
    .map((path) => blogPosts.find((post) => post.path === path))
    .filter((post): post is SitePage => Boolean(post));

  return (
    <>
      <Breadcrumbs page={page} />
      <section className="bg-white py-10 text-center">
        <div className="mx-auto max-w-[1180px] px-5">
          <h1 className="text-[38px] font-black text-[#333]">Recent Posts</h1>
          <div className="mt-8 grid gap-8 text-left md:grid-cols-3">
          {orderedPosts.map((post) => (
            <Link className="focus-ring block bg-white" href={post.path} key={post.path}>
              {post.heroImage ? (
                <Image
                  alt={post.heroImage.alt || post.h1}
                  className="aspect-[16/10] w-full object-cover"
                  height={420}
                  src={post.heroImage.src}
                  width={720}
                />
              ) : null}
              <h2 className="mt-4 text-[20px] font-black leading-tight text-[#333]">{post.h1}</h2>
            </Link>
          ))}
          </div>
          <div className="mx-auto mt-12 max-w-[940px] space-y-5 text-center text-[18px] leading-8 text-[#333]">
            <h2 className="text-[28px] font-black text-[#333]">
              Hear Clearly and Protect Your Hearing with Audiology Associates of Westchester
            </h2>
            <p>
              At Audiology Associates of Westchester, we are dedicated to your hearing health. We offer a comprehensive
              range of audiology services to address all your hearing needs, from routine hearing tests to advanced
              hearing aid fitting and tinnitus therapy.
            </p>
            <p>
              Let us help you hear clearly and enjoy the sounds you love again. Contact Audiology Associates of
              Westchester today to schedule a hearing test and discuss your hearing healthcare options.
            </p>
          </div>
        </div>
      </section>
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
            text="The form is backed by Firebase Firestore, with optional attachment storage in Firebase Storage."
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
        <div className="flex flex-wrap gap-3">
          <a className="focus-ring rounded-md bg-white px-5 py-3 font-black text-[var(--brand-dark)]" href={primaryPhoneHref}>
            Call {primaryPhone}
          </a>
          <Link className="focus-ring rounded-md border border-white/60 px-5 py-3 font-black" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageRenderer({ page }: { page: SitePage }) {
  const schema = schemaForPage(page);

  if (page.type === "home") {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <HomePage />
      </>
    );
  }

  if (page.type === "contact") {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <LiveContactPage page={page} />
      </>
    );
  }

  if (page.type === "form") {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <LivePatientFormsPage page={page} />
      </>
    );
  }

  if (page.type === "team") {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <LiveTeamPage page={page} />
      </>
    );
  }

  if (page.path === "/hearing-aids-brands") {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <LiveBrandsPage page={page} />
      </>
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {page.type === "blog-index" ? <BlogIndex page={page} /> : <LivePageBody page={page} />}
    </>
  );
}
