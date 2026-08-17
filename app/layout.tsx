import type { Metadata } from "next";
import { FOUNDED } from "./data/practice";
import Script from "next/script";
import "./globals.css";

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
    title: "California Hearing Center",
    description:
      "See how sound travels through the ear—and how modern hearing technology helps every word arrive more clearly.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hear the whole story. | California Hearing Center",
    description: "See how sound becomes connection.",
    images: ["/og.jpg"],
  },
  // Google Search Console ownership verification. Set GOOGLE_SITE_VERIFICATION
  // in the environment (Vercel project env var) to emit the meta tag.
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
