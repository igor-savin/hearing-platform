import Link from "next/link";
import { LOCATION_LIST } from "../data/locations";
import {
  CHECK, COSTS, FIRST_VISIT, GOALS, METHOD, NEXT_STEPS, PLAN_DESC, PLAN_INDEXABLE, PLAN_NEXT_REVIEW,
  PLAN_PATH, PLAN_REVIEWED, PLAN_TITLE, QUESTIONS, QUOTE_CHECK, REVIEWED_BY, REVIEWED_ON, SCHEDULE_URL,
  SHARE, WARNING_SIGNS,
} from "../data/hearingPlan";
import { GoalsTool, QuestionsPrint, QuoteCheckTool, ShareTool, StartHere } from "./HearingPlanTools";

// /hearing-plan/ — the open Hearing Plan. No sign-up, no test needed.
// Words live in app/data/hearingPlan.ts. Read the rules at the top of that file.

export { PLAN_PATH as HEARING_PLAN_PATH, PLAN_TITLE as HEARING_PLAN_TITLE, PLAN_DESC as HEARING_PLAN_DESC };

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://calhearing.com").replace(/\/$/, "");

const STYLES = `
.hp{max-width:860px;margin:0 auto;padding:40px 20px 64px;line-height:1.6}
.hp h1{margin:0 0 8px}
.hp h2{margin:44px 0 10px;scroll-margin-top:90px;font-size:clamp(1.5rem,3.2vw,2rem);line-height:1.2}
.hp ul{list-style:disc;padding-left:1.4em}
.hp ol{list-style:decimal;padding-left:1.6em}
.hp .hp-sheet ol,.hp-start-out ol{list-style:decimal}
.hp-start-out h3{font-size:1.2rem}
.hp h3{margin:18px 0 6px}
.hp .hp-meta,.hp .hp-small{color:#555;font-size:.95em}
.hp .hp-review{border:2px solid #b45309;background:#fff7ed;padding:12px 16px;border-radius:10px;margin:16px 0}
.hp .hp-alert{border:2px solid #b91c1c;background:#fef2f2;padding:16px 18px;border-radius:12px}
.hp .hp-alert h2{margin-top:0}
.hp .hp-card{border:1px solid #d9dde3;border-radius:12px;padding:16px 18px;background:#fff;margin:12px 0}
.hp table{width:100%;border-collapse:collapse;margin:12px 0}
.hp th,.hp td{border:1px solid #d9dde3;padding:10px 12px;text-align:left}
.hp th{background:#f4f6f8}
.hp li{margin:0 0 8px}
.hp-chips,.hp-row{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0}
.hp-chip{min-height:44px;padding:10px 18px;border-radius:999px;border:2px solid #1f3a5f;background:#fff;color:#1f3a5f;font:inherit;font-weight:700;cursor:pointer}
.hp-chip[aria-pressed="true"]{background:#1f3a5f;color:#fff}
.hp-tool fieldset{border:0;margin:0 0 12px;padding:0}
.hp-tool legend{font-weight:700;margin-bottom:8px}
.hp-checks{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px}
.hp-checks.one{grid-template-columns:1fr}
.hp-checks label{display:flex;gap:10px;align-items:flex-start;border:1px solid #d9dde3;border-radius:10px;padding:12px;min-height:44px;cursor:pointer}
.hp-checks label.on{border-color:#1f3a5f;background:#eef3fa}
.hp-checks input{width:22px;height:22px;flex:none;margin-top:2px}
.hp-note{display:block;font-weight:700;margin:12px 0}
.hp-note textarea{display:block;width:100%;font:inherit;font-weight:400;margin-top:6px;padding:10px;border:1px solid #9aa4b2;border-radius:8px}
.hp-result{margin:12px 0;min-height:1.6em}

.hp button:disabled{opacity:.5;cursor:not-allowed}
.hp-sheet{display:none}
@media print{
  html[data-hp-print] body *{visibility:hidden}
  html[data-hp-print] .site-shell{height:0;overflow:hidden}
  html[data-hp-print="goals"] #hp-sheet-goals,html[data-hp-print="goals"] #hp-sheet-goals *,
  html[data-hp-print="quote"] #hp-sheet-quote,html[data-hp-print="quote"] #hp-sheet-quote *,
  html[data-hp-print="questions"] #hp-sheet-questions,html[data-hp-print="questions"] #hp-sheet-questions *{visibility:visible}
  html[data-hp-print="goals"] #hp-sheet-goals,html[data-hp-print="quote"] #hp-sheet-quote,html[data-hp-print="questions"] #hp-sheet-questions{display:block;position:fixed;left:0;top:0;width:100%;padding:24px;font-size:14pt;color:#000}
  .hp-sheet li{margin:0 0 12px}
  .hp-sheet-foot{margin-top:28px;font-size:11pt}
}
`;

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id}>{children}</section>;
}

export function HearingPlanPage() {
  const phone = LOCATION_LIST[0].phoneDisplay;
  const tel = LOCATION_LIST[0].phone;
  return (
    <>
      <style href="hp-styles" precedence="medium">{STYLES}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE}${PLAN_PATH}#webpage`,
            url: `${SITE}${PLAN_PATH}`,
            name: "Hearing Aid Buyer's Guide for Any Audiologist",
            dateModified: "2026-10-06",
            isPartOf: { "@id": `${SITE}/#website` },
            publisher: { "@id": `${SITE}/#organization` },
          }),
        }}
      />
      <article className="hp">
        <h1>Your Hearing Plan</h1>
        <p className="hp-meta">
          Last checked {PLAN_REVIEWED}. Next check {PLAN_NEXT_REVIEW}.
          {REVIEWED_BY ? ` Reviewed by ${REVIEWED_BY}${REVIEWED_ON ? `, ${REVIEWED_ON}` : ""}.` : ""}
        </p>
        <p>
          A free, plain guide to getting your hearing checked, what hearing aids cost, and how to check any quote. There is no
          sign-up.
        </p>
        <p>
          <strong>This guide works with any audiologist.</strong> Print it. Take it to any clinic you visit, including one that
          is not us. The questions and the quote check are the same wherever you go. A good provider will welcome them.
        </p>

        <StartHere />

        <Section id="doctor-first">
          <div className="hp-alert">
            <h2>{WARNING_SIGNS.heading}</h2>
            <p>{WARNING_SIGNS.intro}</p>
            <ul>{WARNING_SIGNS.items.map((i) => <li key={i.id}>{i.text}</li>)}</ul>
            <p><strong>{WARNING_SIGNS.action.text}</strong> <a href={`tel:${tel}`}>{phone}</a></p>
            <p><strong>{WARNING_SIGNS.emergency.text}</strong></p>
            <p className="hp-small">{WARNING_SIGNS.wax}</p>
          </div>
        </Section>

        <Section id="first-visit">
          <h2>{FIRST_VISIT.heading}</h2>
          <p>{FIRST_VISIT.intro}</p>
          <ol>{FIRST_VISIT.steps.map((s) => <li key={s.id}>{s.text}</li>)}</ol>
          <h3>{FIRST_VISIT.ifAids.heading}</h3>
          <ul>{FIRST_VISIT.ifAids.steps.map((s) => <li key={s.id}>{s.text}</li>)}</ul>
        </Section>

        <Section id="goals">
          <h2>{GOALS.heading}</h2>
          <p>{GOALS.intro}</p>
          <GoalsTool />
        </Section>

        <Section id="costs">
          <h2>{COSTS.heading}</h2>
          <p>{COSTS.intro}</p>
          <table>
            <thead><tr><th scope="col">Level</th><th scope="col">Typical price, each</th></tr></thead>
            <tbody>{COSTS.ranges.map((r) => <tr key={r.level}><th scope="row">{r.level}</th><td>{r.range}</td></tr>)}</tbody>
          </table>
          <p className="hp-small">{COSTS.rangesNote} Ranges as of October 2026.</p>
          <p>{COSTS.higherTiers}</p>
          <h3>{COSTS.evidenceHeading}</h3>
          <ul>{COSTS.evidence.map((e) => <li key={e.id}>{e.text}</li>)}</ul>
          <h3>{COSTS.includedHeading}</h3>
          <ul>{COSTS.included.map((i) => <li key={i}>{i}</li>)}</ul>
          <p>{COSTS.bundling}</p>
          <h3>Over-the-counter hearing aids</h3>
          <p>{COSTS.otc}</p>
          <h3>{COSTS.payingHeading}</h3>
          <ul>{COSTS.paying.map((p) => <li key={p}>{p}</li>)}</ul>
          <p>
            {COSTS.links.map((l, i) => (
              <span key={l.href}>{i > 0 && " · "}<Link href={l.href}>{l.text}</Link></span>
            ))}
          </p>
        </Section>

        <Section id="quote-check">
          <h2>{QUOTE_CHECK.heading}</h2>
          <p>{QUOTE_CHECK.intro}</p>
          <QuoteCheckTool />
        </Section>

        <Section id="questions">
          <h2>{QUESTIONS.heading}</h2>
          <p>{QUESTIONS.intro}</p>
          <ol>{QUESTIONS.items.map((q) => <li key={q}>{q}</li>)}</ol>
          <QuestionsPrint />
        </Section>

        <Section id="check">
          <h2>{CHECK.heading}</h2>
          <p>{CHECK.body}</p>
          <p className="hp-small">{CHECK.previewNote}</p>
          <Link className="button primary" href="/free-online-hearing-test/">{CHECK.button}</Link>
        </Section>

        <Section id="share">
          <h2>{SHARE.heading}</h2>
          <p>{SHARE.intro}</p>
          <ol>{SHARE.tips.map((t) => <li key={t}>{t}</li>)}</ol>
          <ShareTool />
        </Section>

        <Section id="next-steps">
          <h2>{NEXT_STEPS.heading}</h2>
          <p>{NEXT_STEPS.intro}</p>
          <div className="hp-card">
            <h3>Book a hearing evaluation</h3>
            <p><a className="button primary" href={SCHEDULE_URL}>Schedule an appointment</a></p>
          </div>
          <div className="hp-card">
            <h3>Book a second opinion visit</h3>
            <p>{NEXT_STEPS.secondOpinionLine}</p>
            <p><Link className="button outline" href={QUOTE_CHECK.secondOpinion.href}>See how it works</Link></p>
          </div>
          <div className="hp-card">
            <h3>Call us</h3>
            <p><a href={`tel:${tel}`}>{phone}</a> · San Mateo and San Carlos</p>
          </div>
        </Section>

        <Section id="method">
          <h2>{METHOD.heading}</h2>
          <ul>{METHOD.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </Section>
      </article>
    </>
  );
}
