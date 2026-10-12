import type { Metadata } from "next";
import Image from "next/image";
import { ScreenerApp } from "./ScreenerApp";
import { CLINICAL_APPROVED, PRACTICE, SCREENER_PATH } from "../lib/screener/config";
import { SCREENING_NOT_DIAGNOSIS } from "../lib/screener/copy";
import "./screener.css";

// Until an audiologist approves the result bands, keep this page out of search
// results. Setting NEXT_PUBLIC_SCREENER_CLINICAL_APPROVED=true makes it indexable.
export const metadata: Metadata = {
  title: "Free Online Hearing Test | California Hearing Center",
  description:
    "Take a free 3-minute online hearing check. Hear numbers in background noise, get your result and your next step. Screening only, not a diagnosis.",
  alternates: { canonical: SCREENER_PATH },
  robots: CLINICAL_APPROVED ? { index: true, follow: true } : { index: false, follow: false },
};

const FAQ = [
  {
    q: "Is this a real hearing test?",
    a: `It is a screening. ${SCREENING_NOT_DIAGNOSIS} If your result is Fair or Poor, we suggest an in-office evaluation.`,
  },
  {
    q: "Why do I listen for numbers in noise?",
    a: "Trouble following speech in noise is often the first sign of hearing change. Numbers are easy to understand without a big vocabulary, so the test works for most adults.",
  },
  {
    q: "Do I need headphones?",
    a: "Yes, please use them. Headphones block room noise and let us test each ear. Speakers work, but the result is less reliable.",
  },
  {
    q: "What happens to my information?",
    a: "We use your name and email to send your report and to follow up about your hearing. We do not sell your information. No advertising or analytics scripts run on this page.",
  },
];

// The page shell uses the practice's own colors and logo. The screener card itself
// lives in ScreenerApp. No analytics scripts run here: next.config.ts sends a strict
// Content-Security-Policy for this route, so test answers and contact details stay
// on our server. Funnel counts are first-party and anonymous (see track.ts).
export default function Page() {
  return (
    <>
      <a className="scr-skip" href="#main-content">
        Skip to the test
      </a>
      <header className="scr-top">
        <div className="scr-top-in">
          <a href="/" aria-label={`${PRACTICE.name} home`}>
            <Image src="/assets/logo.png" alt={PRACTICE.name} width={214} height={54} priority />
          </a>
          <a className="scr-phone" href={`tel:${PRACTICE.phoneE164}`}>
            {PRACTICE.phoneDisplay}
          </a>
        </div>
      </header>
      <main id="main-content">
        <ScreenerApp />
        <section className="scr scr-faq" aria-labelledby="scr-faq-h">
          <h2 id="scr-faq-h">Common questions</h2>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </main>
      <footer className="scr-foot">
        <div className="scr-foot-in">
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
