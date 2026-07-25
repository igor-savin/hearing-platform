import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

// Analytics are OFF until these env vars are set — scope them to the Production
// environment in Vercel so the preview deployment never sends staging traffic to
// the live GA4 property. Reuse the same IDs as calhearing.com for continuity:
//   NEXT_PUBLIC_GTM_ID = GTM-M9CDTZP   (recommended — fires GA4 + everything in the container)
//   NEXT_PUBLIC_GA4_ID = G-XN799HLKX5  (only if GA4 is NOT already inside GTM — don't set both for one property)
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
  image: `${siteUrl}/assets/logo.png`,
  logo: `${siteUrl}/assets/logo.png`,
  medicalSpecialty: "Audiology",
  priceRange: "$$",
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
      // Approximate coordinates for the street address \u2014 verify against the GBP pin.
      geo: { "@type": "GeoCoordinates", latitude: 37.5686, longitude: -122.3245 },
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
      // Approximate coordinates for the street address \u2014 verify against the GBP pin.
      geo: { "@type": "GeoCoordinates", latitude: 37.5011, longitude: -122.2607 },
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
