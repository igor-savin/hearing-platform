import type { Metadata, Viewport } from "next";
import { FOUNDED } from "./data/practice";
import Script from "next/script";
import { ConversionTracking } from "./site/ConversionTracking";
import "./globals.css";

// Canonical host is www, matching the sister practice's site so both properties
// are configured the same way. The legacy WordPress site was non-www, so every
// currently-indexed URL will take one 301 to its www equivalent at cutover —
// a normal canonical consolidation, but it lands at the same moment as the
// platform move, which is worth remembering if rankings wobble and you are
// trying to attribute it.
//
// Vercel serves that redirect once www is set as the primary domain; nothing in
// the app performs it.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

// Analytics are OFF until these env vars are set — scope them to the Production
// environment in Vercel so the preview deployment never sends staging traffic to
// the live GA4 property.
//
// calhearing.com runs TWO DISTINCT GA4 properties, which is why both vars below
// are wanted (the usual "don't set both" advice only applies when they would
// double-count a single property):
//   NEXT_PUBLIC_GTM_ID = GTM-M9CDTZP   container; carries G-XN799HLKX5 plus the
//                                      eight conversion tags (Click_to_Call,
//                                      Contact_Form_Submission, Get_Directions,
//                                      Schedule_Appointment, Facebook_Click, …)
//   NEXT_PUBLIC_GA4_ID = G-3KT4C16M4V  the second property, injected directly on
//                                      the legacy pages and NOT present in the
//                                      container — set it here or it is lost at
//                                      cutover.
// UA-100763869-1 also runs on the legacy site; it is dead (UA sunset) — do not carry it.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

// Three third-party trackers carried over from the legacy WordPress site by
// explicit decision. Each is off unless its env var is set, same as GTM/GA4, so
// preview deployments never pollute the vendors' data. Legacy values:
//   NEXT_PUBLIC_WHATCONVERTS_ID  = 90165
//   NEXT_PUBLIC_DATAFAST_ID      = dfid_jRAMAdrt7rJeDVkOBcUJc
//   NEXT_PUBLIC_VISIBILITYKIT_ID = 38a9f2e12389d095
// WhatConverts also swaps the displayed phone number to its tracking line, so
// what a visitor sees will stop matching the number in the markup — that is the
// product working as intended, not a NAP bug.
const WHATCONVERTS_ID = process.env.NEXT_PUBLIC_WHATCONVERTS_ID;
const DATAFAST_ID = process.env.NEXT_PUBLIC_DATAFAST_ID;
const VISIBILITYKIT_ID = process.env.NEXT_PUBLIC_VISIBILITYKIT_ID;

// Tints the browser chrome on mobile — a small brand cue on the device most
// patients arrive on. Both values come from the existing palette in globals.css
// (--teal / --teal-dark) rather than introducing a new colour.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#155f6b" },
    { media: "(prefers-color-scheme: dark)", color: "#105966" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "California Hearing Center | Turn Up Your Life with Better Hearing",
  description:
    "Patient-centered audiology care, hearing aids, tinnitus therapy, and hearing protection in San Mateo and San Carlos, CA.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    // type/url/siteName/locale were on the legacy site and were missing here.
    // og:url in particular matters: without it a share of calhearing.com/?utm=...
    // is treated by some platforms as a distinct object from the clean URL, so
    // likes and shares scatter across variants instead of accumulating.
    type: "website",
    url: siteUrl,
    siteName: "California Hearing Center",
    locale: "en_US",
    title: "California Hearing Center | Turn Up Your Life with Better Hearing",
    description:
      "See how sound travels through the ear—and how modern hearing technology helps every word arrive more clearly.",
    // Explicit dimensions let Facebook and LinkedIn lay the card out on first
    // scrape instead of rendering a blank box until they fetch the image.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "California Hearing Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "California Hearing Center | Turn Up Your Life with Better Hearing",
    description: "See how sound becomes connection.",
    images: ["/og.jpg"],
  },
  // Search-engine ownership verification, carried over from the legacy site.
  //
  // These are deliberately HARDCODED rather than env-gated. Unlike the analytics
  // IDs, a verification token is not a secret and carries no risk on a preview
  // deployment — it is a public string, readable in view-source on the live site
  // right now, and it only ever proves ownership of a domain the preview is not
  // served on. Gating them behind env vars bought nothing and added two more
  // ways to arrive at cutover unverified. An env var still overrides, for the
  // case where a token is ever reissued.
  //
  // Search Console is belt-and-braces: calhearing.com is ALSO verified by two
  // DNS TXT records with different tokens, which a cutover cannot disturb.
  // Bing has no DNS fallback — this tag is the only thing proving ownership.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "WBZFrlITOmQaGoGa30a3lDHt6muz2pp_U7k-Pvb8sQ4",
    other: {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION || "CEFD93DA081A53DA60065D3F4F62C073",
    },
  },
};

// Booking runs through Zocdoc; the practice has no first-party scheduler.
const ZOCDOC_URL =
  "https://www.zocdoc.com/practice/california-hearing-and-research-institute-inc-72249";

// The services each office actually provides, each pointing at its own page.
// Modelled on the sister practice's markup, which lists services as Offers so
// Google can associate them with the location rather than just the domain.
const SERVICE_OFFERS = [
  ["Hearing Testing", "/hearing-testing/"],
  ["Hearing Aid Fitting", "/hearing-aid-fitting/"],
  ["Hearing Aid Second Opinion", "/hearing-aid-second-opinion/"],
  ["Tinnitus Therapy", "/services/tinnitus-therapy/"],
  ["Hyperacusis Treatment", "/hyperacusis/"],
  ["Hearing Protection", "/services/hearing-protection/"],
  ["Hearing Aid Repair", "/services/hearing-aid-repair/"],
  ["Hearing Aids", "/products/hearing-aids/"],
].map(([name, path]) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, url: `${siteUrl}${path}` },
}));

const RESERVE_ACTION = {
  "@type": "ReserveAction",
  name: "Book an audiology appointment",
  target: ZOCDOC_URL,
};

const APPOINTMENTS_CONTACT = {
  "@type": "ContactPoint",
  telephone: "+1-650-342-9449",
  contactType: "appointments",
  areaServed: "US",
  availableLanguage: ["English", "Arabic", "Portuguese"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: "California Hearing Center",
  url: siteUrl,
  telephone: "+1-650-342-9449",
  faxNumber: "+1-650-342-4435",
  email: "info@calhearing.com",
  image: `${siteUrl}/assets/logo.png`,
  logo: `${siteUrl}/assets/logo.png`,
  medicalSpecialty: "Audiology",
  priceRange: "$$",
  contactPoint: APPOINTMENTS_CONTACT,
  makesOffer: SERVICE_OFFERS,
  potentialAction: RESERVE_ACTION,
  // Google requires address on LocalBusiness. Both offices carry their own
  // under `department`; this top-level one is the San Mateo main office.
  address: {
    "@type": "PostalAddress",
    streetAddress: "88 N. San Mateo Drive",
    addressLocality: "San Mateo",
    addressRegion: "CA",
    postalCode: "94401",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.568109, longitude: -122.327851 },
  foundingDate: String(FOUNDED.year),
  award: "Inspired by Ida Quality Benchmark — first clinic worldwide to receive the label",
  hasCredential: [
    "California Licensed Audiology and Hearing Aid Dispensing Practice",
    "American Speech-Language-Hearing Association Accredited",
    "American Academy of Audiology Member Practice",
  ],
  // Languages spoken by current clinical staff (per their bios): Lebanese Arabic
  // (Dr. Hatem) and Portuguese (Lais Ama, who practiced in Brazil).
  knowsLanguage: ["English", "Arabic", "Portuguese"],
  paymentAccepted: ["Cash", "Check", "Credit Card", "Insurance", "CareCredit financing"],
  // NOTE: deliberately no aggregateRating/Review markup. The practice's reviews
  // are collected on Google, and Google's structured-data policy disallows
  // marking up third-party reviews as your own first-party ratings.
  department: [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#san-mateo`,
      name: "California Hearing Center \u2014 San Mateo",
      telephone: "+1-650-342-9449",
      medicalSpecialty: "Audiology",
      priceRange: "$$",
      makesOffer: SERVICE_OFFERS,
      potentialAction: RESERVE_ACTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: "88 N. San Mateo Drive",
        addressLocality: "San Mateo",
        addressRegion: "CA",
        postalCode: "94401",
        addressCountry: "US",
      },
      // Geocoded to the exact street address (OpenStreetMap exact-match on
      // "88, North San Mateo Drive"); the previous pin was ~300m off.
      geo: { "@type": "GeoCoordinates", latitude: 37.568109, longitude: -122.327851 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=88+N+San+Mateo+Drive+San+Mateo+CA+94401",
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "15:00" },
      ],
    },
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#san-carlos`,
      name: "California Hearing Center \u2014 San Carlos",
      telephone: "+1-650-342-9449",
      medicalSpecialty: "Audiology",
      priceRange: "$$",
      makesOffer: SERVICE_OFFERS,
      potentialAction: RESERVE_ACTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1008 Laurel Street",
        addressLocality: "San Carlos",
        addressRegion: "CA",
        postalCode: "94070",
        addressCountry: "US",
      },
      // Geocoded to the exact street address (OpenStreetMap exact-match on
      // "1008, Laurel Street"); the previous pin was ~530m off.
      geo: { "@type": "GeoCoordinates", latitude: 37.501047, longitude: -122.254690 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=1008+Laurel+Street+San+Carlos+CA+94070",
      // Split (lunch-break) hours.
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "09:00", closes: "13:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "14:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "12:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "13:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "12:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "12:30", closes: "15:00" },
      ],
    },
  ],
  areaServed: [
    { "@type": "City", name: "San Mateo" },
    { "@type": "City", name: "San Carlos" },
    { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
  ],
  // Google Business Profile listings for the two offices.
  sameAs: [
    "https://www.google.com/search?q=California+Hearing+Center&stick=H4sIAAAAAAAAAONgU1I1qLAwsEizTDU3MbIwNEixMEuzMqhISTM3M05NNk5KNTC0NLAwXsQq6ZyYk5mWX5SXmajgkZpYlJmXruCcmleSWgQAfY_KOkUAAAA",
    "https://www.google.com/search?q=California+Hearing+Center&stick=H4sIAAAAAAAAAONgU1I1qLAwsEhLNDK0TDY2TrRINE-zMqgwT01NSTJLNk9JMk42SUlLWcQq6ZyYk5mWX5SXmajgkZpYlJmXruCcmleSWgQAW8hyKkUAAAA",
  ],
  // Top-level hours reflect the San Mateo main office.
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "15:00" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "California Hearing Center",
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "ContactAction",
    name: "Request a hearing appointment",
    target: `${siteUrl}/contact/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* The subhero background art is the largest-contentful-paint element on
            almost every page: at 390x844 it covers 236,767 px against the h1's
            50,160. It is a CSS background behind a media query and an @supports
            block, so the preload scanner cannot see it and the browser only
            discovers it after CSSOM and layout. These two links are the whole
            point — nothing else on the page needs preloading, and until now the
            only images being preloaded were the header logo and a sidebar
            decoration 5,249 px down the page.

            Kept in sync by hand with the .subhero rules at the end of
            globals.css. AVIF only: every browser that supports image-set here
            supports AVIF, and the WebP fallback path is discovered normally. */}
        <link
          rel="preload"
          as="image"
          href="/assets/hero-1600.avif"
          type="image/avif"
          fetchPriority="high"
          media="(min-width: 761px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero-900.avif"
          type="image/avif"
          fetchPriority="high"
          media="(max-width: 760px)"
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
          </>
        )}
        {WHATCONVERTS_ID && (
          <>
            {/* $wc_leads must exist before the tracker loads — it snapshots the
                landing URL and referrer, which is how WhatConverts attributes a
                call to its source. Loading the tracker without it loses that. */}
            <Script id="whatconverts-init" strategy="afterInteractive">
              {`var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};`}
            </Script>
            <Script
              id="whatconverts-tracking-script"
              src={`https://s.ksrndkehqnwntyxlhgto.com/${WHATCONVERTS_ID}.js`}
              strategy="afterInteractive"
            />
          </>
        )}
        {DATAFAST_ID && (
          <Script
            id="datafast-tracking"
            data-website-id={DATAFAST_ID}
            data-domain={siteUrl}
            data-disable-payments="true"
            src="https://datafa.st/js/script.js"
            strategy="afterInteractive"
          />
        )}
        {VISIBILITYKIT_ID && (
          <Script
            id="vk-core"
            src={`https://cdn.visibilitykit.ai/t/${VISIBILITYKIT_ID}/vk.js`}
            strategy="afterInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        {children}
        <ConversionTracking />
      </body>
    </html>
  );
}
