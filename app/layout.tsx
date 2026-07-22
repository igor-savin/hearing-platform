import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "California Hearing Center | Turn Up Your Life with Better Hearing",
  description:
    "Patient-centered audiology care, hearing aids, tinnitus therapy, and hearing protection in San Mateo and San Carlos, CA.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
      name: "California Hearing Center \u2014 San Mateo",
      telephone: "+1-650-342-9449",
      address: {
        "@type": "PostalAddress",
        streetAddress: "88 N. San Mateo Drive",
        addressLocality: "San Mateo",
        addressRegion: "CA",
        postalCode: "94401",
        addressCountry: "US",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "California Hearing Center \u2014 San Carlos",
      telephone: "+1-650-342-9449",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1008 Laurel Street",
        addressLocality: "San Carlos",
        addressRegion: "CA",
        postalCode: "94070",
        addressCountry: "US",
      },
    },
  ],
  areaServed: [
    { "@type": "City", name: "San Mateo" },
    { "@type": "City", name: "San Carlos" },
    { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
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
