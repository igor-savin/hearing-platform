import type { Metadata } from "next";
import { ScreenerApp } from "./ScreenerApp";
import { CLINICAL_APPROVED, PRACTICE, SCREENER_PATH } from "../lib/screener/config";

// Until an audiologist approves the result bands, keep this page out of search
// results. Setting NEXT_PUBLIC_SCREENER_CLINICAL_APPROVED=true makes it indexable.
export const metadata: Metadata = {
  title: "Free Online Hearing Test | California Hearing Center",
  description:
    "Take a free 3-minute online hearing check. Hear numbers in background noise, get your result and your next step. Screening only, not a diagnosis.",
  alternates: { canonical: SCREENER_PATH },
  robots: CLINICAL_APPROVED ? { index: true, follow: true } : { index: false, follow: false },
};

// Plain header and footer on purpose. The branded page comes in the look-and-feel pass.
// This route has no analytics scripts: next.config.ts sends a strict
// Content-Security-Policy for it, so test answers and contact details stay on our server.
export default function Page() {
  return (
    <>
      <header style={{ borderBottom: "1px solid #d6e0df", padding: "14px 16px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="/" style={{ fontWeight: 700, color: "#155f6b", textDecoration: "none" }}>
            {PRACTICE.name}
          </a>
          <a href={`tel:${PRACTICE.phoneE164}`} style={{ color: "#155f6b", fontWeight: 700 }}>
            {PRACTICE.phoneDisplay}
          </a>
        </div>
      </header>
      <main id="main-content">
        <ScreenerApp />
      </main>
      <footer style={{ borderTop: "1px solid #d6e0df", padding: "20px 16px", fontSize: 14, color: "#5c7178" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ margin: "0 0 6px" }}>
            {PRACTICE.name}. {PRACTICE.offices.map((o) => o.address).join(" | ")}
          </p>
          <p style={{ margin: 0 }}>
            <a href={PRACTICE.privacyPath}>Privacy policy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
