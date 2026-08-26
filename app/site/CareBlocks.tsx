import { SiteImage } from "./SiteImage";

// Blocks that exist because of what the analytics said, not because a page
// looked empty.
//
// The tinnitus hub is the second-largest source of traffic on the site (1,645
// sessions a month) and the worst converter on it: 0.7% against 6.2% for the
// rest of the article library and 21% for the service pages. Those pages
// answered the question and then handed the reader a generic sidebar. What was
// missing was the thing a frightened person at 2am actually needs — whether
// this is urgent, what an appointment involves, who does it, and one specific
// next step.
//
// Separately: across 572 live pages on the two practice sites there was not a
// single <table>, while the product pages ran to 2,500 words of prose
// comparing two devices. SpecTable is that missing element.

/* ── When to call today ─────────────────────────────────────────────────── */

export type RedFlag = { sign: string; why: string };

export function RedFlagPanel({
  heading = "Call us today if any of these apply",
  intro,
  flags,
}: {
  heading?: string;
  intro?: string;
  flags: RedFlag[];
}) {
  return (
    <aside className="red-flag-panel" aria-labelledby="red-flags">
      <p className="red-flag-kicker">Do not wait for an appointment</p>
      <h2 id="red-flags">{heading}</h2>
      {intro ? <p className="red-flag-intro">{intro}</p> : null}
      <ul>
        {flags.map((f) => (
          <li key={f.sign}>
            <strong>{f.sign}</strong>
            <span>{f.why}</span>
          </li>
        ))}
      </ul>
      <p className="red-flag-action">
        <a className="button primary" href="tel:6503429449">Call 650-342-9449</a>
        <span>
          If we are closed and something on this list has just started, go to urgent care or an
          emergency department. Sudden hearing loss is treated as an emergency because the window
          for treatment is measured in days.
        </span>
      </p>
    </aside>
  );
}

/* ── What the appointment actually involves ─────────────────────────────── */

export type VisitStep = { title: string; text: string; minutes?: string };

export function VisitSteps({
  kicker = "What to expect",
  heading,
  steps,
  footnote,
}: {
  kicker?: string;
  heading: string;
  steps: VisitStep[];
  footnote?: string;
}) {
  return (
    <section className="visit-steps" aria-labelledby="visit-steps-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 id="visit-steps-heading">{heading}</h2>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="visit-step-n" aria-hidden="true">{i + 1}</span>
            <div>
              <strong>{s.title}</strong>
              {s.minutes ? <span className="visit-step-time">{s.minutes}</span> : null}
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      {footnote ? <p className="visit-steps-footnote">{footnote}</p> : null}
    </section>
  );
}

/* ── Who will actually see you ──────────────────────────────────────────── */

export function ClinicianCard({
  slug,
  name,
  credential,
  line,
  image,
  heading = "Who you will see",
}: {
  slug: string;
  name: string;
  credential: string;
  line: string;
  image: string;
  heading?: string;
}) {
  return (
    <aside className="clinician-card">
      <p className="section-kicker">{heading}</p>
      <div className="clinician-card-body">
        <SiteImage src={image} alt={`${name}, ${credential}`} sizes="96px" />
        <div>
          <strong>
            <a href={`/about-us/${slug}/`}>{name}</a>, {credential}
          </strong>
          <p>{line}</p>
        </div>
      </div>
    </aside>
  );
}

/* ── The comparison table the product pages never had ───────────────────── */

export type SpecRow = {
  label: string;
  /** One cell per column, in column order. `null` renders an em dash. */
  values: (string | null)[];
  /** Optional one-line explanation of why the row matters. */
  note?: string;
};

export function SpecTable({
  caption,
  columns,
  rows,
  footnote,
}: {
  caption: string;
  columns: string[];
  rows: SpecRow[];
  footnote?: string;
}) {
  return (
    <figure className="spec-table-wrap">
      {/* The container scrolls, not the page. A four-column spec table on a
          360px phone has to go somewhere. */}
      <div className="spec-table-scroll" tabIndex={0} role="group" aria-label={caption}>
        <table className="spec-table">
          <caption>{caption}</caption>
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              {columns.map((c) => (
                <th key={c} scope="col">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">
                  {r.label}
                  {r.note ? <span className="spec-note">{r.note}</span> : null}
                </th>
                {r.values.map((v, i) => (
                  <td key={`${r.label}-${columns[i] ?? i}`}>{v ?? "—"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? <figcaption>{footnote}</figcaption> : null}
    </figure>
  );
}

/* ── The audiogram, drawn once and reused ───────────────────────────────── */

// Neither practice site had one, which is odd: it is the single most
// explanatory picture in audiology, and both sites spend thousands of words
// describing what it shows. Frequency runs left to right, loudness top to
// bottom, and the shaded region is the speech banana — where the sounds of
// ordinary conversation sit. A loss that dips below the banana on the right is
// why someone hears that you are talking and cannot tell what you said.

const AUDIO_FREQS = [250, 500, 1000, 2000, 4000, 8000];
const AUDIO_LEVELS = [0, 20, 40, 60, 80, 100, 120];

export function AudiogramFigure({
  caption = "Where conversation lives on the chart. The shaded area is the speech banana; a hearing loss that dips below it on the right takes the consonants out of speech first.",
}: {
  caption?: string;
}) {
  // Plot box in user units. x: frequency (log-ish, evenly spaced octaves).
  // y: hearing level in dB HL, 0 at the top.
  const L = 62, R = 470, T = 24, B = 268;
  const x = (i: number) => L + (i * (R - L)) / (AUDIO_FREQS.length - 1);
  const y = (db: number) => T + (db / 120) * (B - T);

  // Speech banana, traced as an upper and lower bound in dB HL at each octave.
  // These are the conventional teaching values, not a measurement of any
  // individual: vowels are low-frequency and louder, consonants high-frequency
  // and quieter, which is the whole point of the shape.
  const upper = [20, 20, 25, 30, 35, 45];
  const lower = [50, 55, 55, 55, 55, 60];
  const banana =
    upper.map((db, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(db)}`).join(" ") +
    " " +
    lower
      .map((db, i) => `L${x(lower.length - 1 - i)},${y(lower[lower.length - 1 - i])}`)
      .join(" ") +
    " Z";

  return (
    <figure className="audiogram-figure">
      <svg viewBox="0 0 500 300" role="img" aria-labelledby="audiogram-title audiogram-desc">
        <title id="audiogram-title">An audiogram with the speech banana marked</title>
        <desc id="audiogram-desc">
          A chart with frequency from 250 to 8000 hertz along the bottom and hearing level from 0 to
          120 decibels down the side. A shaded band curves from the upper left to the lower right,
          marking where the sounds of ordinary speech fall. Vowels sit at the low-frequency end and
          consonants at the high-frequency end, which is why a high-frequency loss removes clarity
          before it removes volume.
        </desc>

        {/* grid */}
        {AUDIO_LEVELS.map((db) => (
          <g key={db}>
            <line x1={L} x2={R} y1={y(db)} y2={y(db)} className="ag-grid" />
            <text x={L - 10} y={y(db) + 4} className="ag-axis" textAnchor="end">{db}</text>
          </g>
        ))}
        {AUDIO_FREQS.map((f, i) => (
          <g key={f}>
            <line x1={x(i)} x2={x(i)} y1={T} y2={B} className="ag-grid" />
            <text x={x(i)} y={B + 18} className="ag-axis" textAnchor="middle">
              {f >= 1000 ? `${f / 1000}k` : f}
            </text>
          </g>
        ))}

        <path d={banana} className="ag-banana" />

        {/* the two ends of speech, labelled where they actually sit */}
        <text x={x(0) + 8} y={y(36)} className="ag-label">vowels</text>
        <text x={x(4) - 4} y={y(30)} className="ag-label" textAnchor="middle">s · f · th</text>

        <rect x={L} y={T} width={R - L} height={B - T} className="ag-frame" />
        <text x={(L + R) / 2} y={B + 40} className="ag-axis-title" textAnchor="middle">
          Frequency (Hz) — low pitch to high pitch
        </text>
        <text x={16} y={(T + B) / 2} className="ag-axis-title" textAnchor="middle" transform={`rotate(-90 16 ${(T + B) / 2})`}>
          Hearing level (dB HL)
        </text>
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
