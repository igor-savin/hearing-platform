import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { OfficesStrip } from "@/components/OfficesStrip";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { ConversionTracking } from "@/components/ConversionTracking";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Audiology and Hearing Care in Westchester`,
    template: `%s`
  },
  description:
    "Audiology Associates of Westchester provides hearing testing, hearing aid fitting, tinnitus therapy, hearing protection, and hearing aid repair for Westchester County and nearby communities.",
  // VS-01. Without max-image-preview:large, Google is free to hold every image
  // on this site to a small thumbnail in Images, Discover and the AI surfaces.
  // It is a meta/X-Robots-Tag directive, NOT a robots.txt one — putting it in
  // robots.txt does nothing, which is worth knowing before someone "fixes" it
  // there. Set at the root so every page inherits it.
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: baseUrl,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link focus-ring" href="#main-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()])
          }}
        />
        <AnalyticsScripts />
        <OfficesStrip />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
        <ConversionTracking />
      </body>
    </html>
  );
}
