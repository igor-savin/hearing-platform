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

function Breadcrumbs({ page }: { page: SitePage }) {
  return (
    <nav aria-label="Breadcrumb" className="container pt-5 text-sm text-[var(--muted)]">
      <Link className="focus-ring underline" href="/">
        Home
      </Link>
      {page.path !== "/" ? <span aria-hidden="true"> / </span> : null}
      {page.path !== "/" ? <span>{page.h1}</span> : null}
    </nav>
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

function BlogIndex() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link className="focus-ring rounded-lg border border-[var(--line)] bg-white p-4 medical-shadow" href={post.path} key={post.path}>
              {post.heroImage ? (
                <Image
                  alt={post.heroImage.alt || post.h1}
                  className="aspect-[16/10] w-full rounded-md object-cover"
                  height={420}
                  src={post.heroImage.src}
                  width={720}
                />
              ) : null}
              <h2 className="mt-4 text-xl font-black text-[var(--brand-dark)]">{post.h1}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{post.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs page={page} />
      <Hero page={page} />
      {page.type === "blog-index" ? <BlogIndex /> : <ContentText page={page} />}
      {page.type === "home" ? <HomeExtras /> : null}
      {page.type === "form" ? <PatientForms /> : null}
      <ServiceExtras page={page} />
      <LocationDetails page={page} />
      <ContactSection page={page} />
      <FaqSection page={page} />
      {page.type !== "home" ? <FinalCta /> : null}
    </>
  );
}
