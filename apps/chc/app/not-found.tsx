import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | California Hearing Center",
  description:
    "That page could not be found. Find hearing tests, hearing aids, tinnitus care, and our San Mateo and San Carlos offices, or call 650-342-9449.",
  robots: { index: false, follow: true },
};

// A migration will always miss a few old URLs. Rather than drop those visitors on
// a blank page, give them the paths they were most likely looking for and a way
// to call the practice.
const LINKS: [label: string, href: string, hint: string][] = [
  ["Hearing tests", "/hearing-testing/", "Full diagnostic evaluations"],
  ["Hearing aids", "/products/hearing-aids/", "Brands, styles, and fitting"],
  ["Tinnitus care", "/tinnitus/", "Ringing, buzzing, and sound sensitivity"],
  ["What it costs", "/hearing-aid-cost/", "Pricing, insurance, and financing"],
  ["Areas we serve", "/areas-we-serve/", "Cities across the Bay Area"],
  ["Our team", "/about-us/", "Meet the audiologists"],
  ["Articles", "/the-blog/", "Hearing health guidance"],
  ["Contact us", "/contact/", "Both offices and hours"],
];

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container">
        <p className="section-kicker">Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p className="notfound-lede">
          The link may be out of date, or the page may have moved when we rebuilt the site. Here are
          the places people usually need — or call us and we’ll point you the right way.
        </p>
        <div className="notfound-actions">
          <a className="button primary" href="tel:6503429449">Call 650-342-9449</a>
          <a className="button outline" href="/">Go to the homepage</a>
        </div>
        <div className="notfound-grid">
          {LINKS.map(([label, href, hint]) => (
            <a key={href} href={href}>
              <strong>{label}</strong>
              <span>{hint}</span>
            </a>
          ))}
        </div>
        <p className="notfound-foot">
          California Hearing Center — 88 N. San Mateo Drive, San Mateo, CA 94401 · 1008 Laurel Street,
          San Carlos, CA 94070
        </p>
      </div>
    </main>
  );
}
