import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hear the whole story. | California Hearing Center",
    description: "See how sound becomes connection.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
