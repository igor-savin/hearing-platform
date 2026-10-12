import type { Metadata } from "next";
import Link from "next/link";

const architectureLayers = [
  {
    title: "Visitors",
    items: ["Patients on phones and desktops", "Search engines and AI crawlers", "Direct traffic from shared links"]
  },
  {
    title: "Next.js app",
    items: ["Catch-all content rendering", "Static metadata and SEO", "Route-level pages for key experiences"]
  },
  {
    title: "Content and logic",
    items: ["Structured page data in `lib/`", "Schema and metadata helpers", "Contact form validation and mail delivery"]
  },
  {
    title: "External services",
    items: ["Resend for contact emails", "Firebase when configured", "Google Maps, Zocdoc, and embedded assets"]
  }
];

const highlights = [
  {
    title: "Content model",
    body:
      "Most page content is generated from structured data in `lib/site.ts` and the related domain files for services, products, team, service areas, and tinnitus."
  },
  {
    title: "Routing",
    body:
      "A catch-all route renders the majority of the site, while explicit pages such as this overview route can be added where the experience benefits from custom layout."
  },
  {
    title: "SEO",
    body:
      "Metadata, Open Graph, sitemap, robots, and schema markup are generated centrally so the site stays consistent and easy to maintain."
  },
  {
    title: "Lead capture",
    body:
      "The contact form posts to a server route that validates input and sends email through Resend when the environment is configured."
  }
];

export const metadata: Metadata = {
  title: "Site Overview",
  description:
    "A fast-read overview of the Audiology Associates of Westchester website architecture, content flow, and publishing structure.",
  // Internal architecture reference, not patient-facing content. Keep it
  // reachable for the team but out of the index so it cannot compete with
  // clinical pages in search results.
  robots: { index: false, follow: true }
};

export default function OverviewPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#eef6f6_0%,#fbfaf7_48%,#ffffff_100%)]">
      <section className="container section pb-8 pt-16">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
            Documentation
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--brand-dark)] md:text-5xl">
            Site overview and architecture
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page gives a quick map of how the website is put together so a new teammate can understand the
            moving parts in a minute or two.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring rounded-full bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/contact-us">
              Contact the practice
            </Link>
            <Link
              className="focus-ring rounded-full border border-[var(--brand)] bg-white px-5 py-3 font-bold text-[var(--brand-dark)]"
              href="/"
            >
              View the homepage
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-4">
        <div className="grid gap-4 lg:grid-cols-4">
          {architectureLayers.map((layer, index) => (
            <div key={layer.title} className="rounded-2xl border border-[var(--line)] bg-white p-5 medical-shadow">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                Layer {index + 1}
              </p>
              <h2 className="mt-2 text-xl font-black text-[var(--brand-dark)]">{layer.title}</h2>
              <ul className="mt-4 space-y-2 text-[15px] leading-6 text-[var(--muted)]">
                {layer.items.map((item) => (
                  <li key={item} className="rounded-lg bg-[var(--background)] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[var(--line)] bg-white p-6 medical-shadow">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">Architecture diagram</p>
            <div className="mt-5 space-y-4">
              {[
                ["Visitors", "Next.js pages and metadata", "Structured content in `lib/`", "External services"],
                ["SEO and sharing", "Catch-all routing", "Schema and sitemap generation", "Resend and Firebase"]
              ].map((row) => (
                <div key={row.join("-")} className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
                  <div className="rounded-2xl border border-[var(--line)] bg-[var(--brand-soft)] p-4 text-center">
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{row[0]}</div>
                  </div>
                  <div className="hidden text-center text-2xl font-black text-[var(--accent-dark)] md:block">→</div>
                  <div className="rounded-2xl border border-[var(--line)] bg-[#f8fbfb] p-4 text-center">
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{row[1]}</div>
                  </div>
                  <div className="hidden text-center text-2xl font-black text-[var(--accent-dark)] md:block">→</div>
                  <div className="rounded-2xl border border-[var(--line)] bg-[#fff8ef] p-4 text-center">
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent-dark)]">{row[2]}</div>
                  </div>
                  <div className="hidden text-center text-2xl font-black text-[var(--accent-dark)] md:block">→</div>
                  <div className="rounded-2xl border border-[var(--line)] bg-[#f6faf6] p-4 text-center">
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#3e6f47]">{row[3]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[var(--line)] bg-white p-6 medical-shadow">
                <h2 className="text-2xl font-black text-[var(--brand-dark)]">{item.title}</h2>
                <p className="mt-3 text-[var(--muted)] leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[var(--line)] bg-[var(--brand-dark)] p-6 text-white">
            <h2 className="text-2xl font-black">What to look at first</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-white/90">
              <li>Start with `app/layout.tsx` for the site shell and shared metadata.</li>
              <li>Use `lib/site.ts` to understand the page model and generated content.</li>
              <li>Open `components/PageRenderer.tsx` to see how the shared page UI is assembled.</li>
              <li>Check `app/api/contact/route.ts` for the contact form flow and email delivery.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[var(--line)] bg-white p-6 medical-shadow">
            <h2 className="text-2xl font-black text-[var(--brand-dark)]">Useful links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Home", "/"],
                ["Contact", "/contact-us"],
                ["How We Can Help", "/how-we-can-help"],
                ["Tinnitus Management", "/how-we-can-help/tinnitus-management"],
                ["Areas We Serve", "/areas-we-serve"],
                ["Meet the Team", "/meet-the-team"]
              ].map(([label, href]) => (
                <Link
                  className="focus-ring rounded-2xl border border-[var(--line)] px-4 py-3 text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
