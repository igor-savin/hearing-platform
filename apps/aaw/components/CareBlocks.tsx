import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, TriangleAlert } from "lucide-react";
import { primaryPhone, primaryPhoneHref } from "@/lib/siteBasics";

// Blocks that exist because of what the analytics said, not because a page
// looked empty.
//
// The tinnitus hub is the second-largest source of traffic on the sister site
// (1,645 sessions a month) and the worst converter on it: 0.7% against 6.2%
// for the rest of the article library. Those pages answered the question and
// then handed the reader a generic sidebar. What was missing was the thing a
// frightened person at 2am actually needs — whether this is urgent, what an
// appointment involves, who does it, and one specific next step. Westchester
// has the same page structure and a stronger story to tell: the NYHD |
// TinnitusCare partnership at the Harrison office since February 2024, Lenire,
// and audiologists holding the American Board of Audiology's tinnitus
// certificate.
//
// Ported from California Hearing Center's app/site/CareBlocks.tsx. The prop
// shapes are deliberately identical so content can move between the two
// practices; the styling is not — CHC hand-writes a stylesheet, this site is
// Tailwind utilities inline, so none of its CSS came across.
//
// Each block renders at most once per page, so the aria ids below are fixed
// constants rather than generated. If a page ever needs two of the same block,
// give the ids a prefix prop first.

/* ── When to call today ─────────────────────────────────────────────────── */

export type RedFlag = { sign: string; why: string };

export function RedFlagPanel({
  heading = "Call us today if any of these apply",
  intro,
  flags
}: {
  heading?: string;
  intro?: string;
  flags: RedFlag[];
}) {
  return (
    <aside
      aria-labelledby="red-flags"
      className="rounded-2xl border border-[#e0bd85] bg-[#fff7ec] p-8 text-[#262626] shadow-[0_18px_45px_rgba(167,94,34,0.10)] max-md:p-6"
    >
      <p className="text-[15px] font-black uppercase tracking-[0.18em] text-[#9f5c1e]">Do not wait for an appointment</p>
      <h2 className="mt-3 text-[34px] font-black leading-tight text-[#003f6f] max-md:text-[26px]" id="red-flags">
        {heading}
      </h2>
      {intro ? <p className="mt-4 max-w-[900px] text-[20px] leading-[1.45] text-[var(--muted)] max-md:text-[17px]">{intro}</p> : null}
      <ul className="mt-6 grid gap-4">
        {flags.map((flag) => (
          // A shape, not just a colour. The triangle carries the warning on its
          // own, so the panel still reads in greyscale and for the 8% of men
          // who cannot rely on the accent colour.
          <li className="flex gap-4" key={flag.sign}>
            <TriangleAlert aria-hidden="true" className="mt-1 shrink-0 text-[#9f5c1e]" size={24} strokeWidth={2.25} />
            <span>
              <strong className="block text-[21px] font-black leading-tight text-[#262626] max-md:text-[18px]">{flag.sign}</strong>
              <span className="mt-1 block text-[18px] leading-[1.5] text-[var(--muted)] max-md:text-[16px]">{flag.why}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[#e0bd85] pt-6">
        <a
          className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#005a9c] px-6 py-4 font-black text-white transition-colors hover:bg-[#004a82] motion-reduce:transition-none sm:w-auto"
          href={primaryPhoneHref}
        >
          <Phone aria-hidden="true" size={19} />
          Call {primaryPhone}
        </a>
        <p className="flex-1 basis-[280px] text-[17px] leading-[1.5] text-[var(--muted)]">
          If we are closed and something on this list has just started, go to urgent care or an emergency department.
          Sudden hearing loss is treated as a medical urgency: treatment works best when it begins within the first days,
          and waiting to see whether it comes back can reduce the chance of regaining hearing.
        </p>
      </div>
    </aside>
  );
}

/* ── What the appointment actually involves ─────────────────────────────── */

export type VisitStep = { title: string; text: string; minutes?: string };

export function VisitSteps({
  kicker = "What to expect",
  heading,
  steps,
  footnote
}: {
  kicker?: string;
  heading: string;
  steps: VisitStep[];
  footnote?: string;
}) {
  return (
    <section aria-labelledby="visit-steps-heading" className="bg-white py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]">{kicker}</p>
        <h2 className="mt-3 text-[42px] font-normal leading-tight text-black max-md:text-[32px]" id="visit-steps-heading">
          {heading}
        </h2>
        <div className="mt-6 h-1 w-[120px] bg-[#ffd45a]" />
        <ol className="mt-9 grid max-w-[1320px] gap-6">
          {steps.map((step, index) => (
            <li className="flex gap-5" key={step.title}>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#005a9c] text-[18px] font-black text-white"
              >
                {index + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <strong className="text-[24px] font-black leading-tight text-[#003f6f] max-md:text-[20px]">{step.title}</strong>
                  {/* Optional by design. This practice publishes no appointment
                      durations anywhere in the repo, so nothing here sets one —
                      the prop exists so sourced timings can be added later. */}
                  {step.minutes ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dbe9f3] px-3 py-1 text-[13px] font-black uppercase tracking-[0.08em] text-[#003f6f]">
                      <Clock aria-hidden="true" size={14} />
                      {step.minutes}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-[20px] leading-[1.45] text-[var(--muted)] max-md:text-[17px]">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {footnote ? (
          <p className="mt-8 max-w-[1100px] border-l-4 border-[#dbe9f3] pl-5 text-[18px] leading-[1.5] text-[var(--muted)]">
            {footnote}
          </p>
        ) : null}
      </div>
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
  imageAlt,
  heading = "Who you will see"
}: {
  slug: string;
  name: string;
  credential: string;
  line: string;
  image: string;
  imageAlt: string;
  heading?: string;
}) {
  return (
    <section className="bg-[#f7f7f5] py-[52px]">
      <div className="mx-auto max-w-[1660px] px-[64px] max-md:px-5">
        <aside
          aria-labelledby="clinician-card-heading"
          className="max-w-[1000px] rounded-2xl border border-[#d5e7f4] bg-white p-8 shadow-[0_18px_45px_rgba(0,90,156,0.08)] max-md:p-6"
        >
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#005a9c]" id="clinician-card-heading">
            {heading}
          </h2>
          <div className="mt-6 flex items-center gap-6 max-md:flex-col max-md:items-start">
            <Image
              alt={imageAlt}
              className="h-[110px] w-[110px] shrink-0 rounded-full border border-[#dbe9f3] object-cover object-top"
              height={220}
              sizes="110px"
              src={image}
              width={220}
            />
            <div>
              <p className="text-[26px] font-black leading-tight text-[#003f6f] max-md:text-[22px]">
                <Link
                  className="focus-ring text-[#005a9c] underline decoration-[#ffd45a] decoration-2 underline-offset-4"
                  href={`/meet-the-team/${slug}`}
                >
                  {name}
                </Link>
                {credential ? <span className="text-[#003f6f]">, {credential}</span> : null}
              </p>
              <p className="mt-3 text-[19px] leading-[1.5] text-[var(--muted)] max-md:text-[17px]">{line}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
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

export type SpecTableData = {
  caption: string;
  columns: string[];
  rows: SpecRow[];
  footnote?: string;
};

export function SpecTable({ caption, columns, rows, footnote }: SpecTableData) {
  return (
    <figure className="my-10">
      {/* The container scrolls, not the page. A three-column spec table on a
          360px phone has to go somewhere, and it is not going to be the body. */}
      <div
        aria-label={caption}
        className="focus-ring w-full max-w-full overflow-x-auto rounded-2xl border border-[#d5e7f4]"
        role="group"
        tabIndex={0}
      >
        <table className="w-full border-collapse text-left text-[17px] tabular-nums max-md:text-[15px]">
          <caption className="px-6 pb-4 pt-6 text-left text-[20px] font-black leading-tight text-[#003f6f] max-md:text-[17px]">
            {caption}
          </caption>
          <thead>
            <tr>
              <th className="border-b-2 border-[#005a9c] bg-[#dbe9f3] px-6 py-4 text-[13px] font-black uppercase tracking-[0.08em] text-[#003f6f]" scope="col">
                <span className="sr-only">Specification</span>
              </th>
              {columns.map((column) => (
                <th
                  className="whitespace-nowrap border-b-2 border-[#005a9c] bg-[#dbe9f3] px-6 py-4 text-[13px] font-black uppercase tracking-[0.08em] text-[#003f6f]"
                  key={column}
                  scope="col"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th className="min-w-[220px] border-b border-[#d5e7f4] px-6 py-4 align-top font-black text-[#262626]" scope="row">
                  {row.label}
                  {row.note ? (
                    <span className="mt-1 block text-[15px] font-normal leading-[1.4] text-[var(--muted)]">{row.note}</span>
                  ) : null}
                </th>
                {row.values.map((value, index) => (
                  <td
                    className="border-b border-[#d5e7f4] px-6 py-4 align-top leading-[1.45] text-[var(--muted)]"
                    key={`${row.label}-${columns[index] ?? index}`}
                  >
                    {value ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? <figcaption className="mt-4 text-[16px] leading-[1.5] text-[var(--muted)]">{footnote}</figcaption> : null}
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
//
// The geometry is CHC's, unchanged. Only the colours moved to this palette.

const AUDIO_FREQS = [250, 500, 1000, 2000, 4000, 8000];
const AUDIO_LEVELS = [0, 20, 40, 60, 80, 100, 120];

export function AudiogramFigure({
  caption = "Where conversation lives on the chart. The shaded area is the speech banana; a hearing loss that dips below it on the right takes the consonants out of speech first."
}: {
  caption?: string;
}) {
  // Plot box in user units. x: frequency (evenly spaced octaves).
  // y: hearing level in dB HL, 0 at the top.
  const L = 62;
  const R = 470;
  const T = 24;
  const B = 268;
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
    lower.map((_, i) => `L${x(lower.length - 1 - i)},${y(lower[lower.length - 1 - i])}`).join(" ") +
    " Z";

  return (
    <figure className="my-10 max-w-[860px]">
      <svg
        aria-labelledby="audiogram-title audiogram-desc"
        className="block h-auto w-full"
        role="img"
        viewBox="0 0 500 300"
      >
        <title id="audiogram-title">An audiogram with the speech banana marked</title>
        <desc id="audiogram-desc">
          A chart with frequency from 250 to 8000 hertz along the bottom and hearing level from 0 to 120 decibels down the
          side. A shaded band curves from the upper left to the lower right, marking where the sounds of ordinary speech
          fall. Vowels sit at the low-frequency end and consonants at the high-frequency end, which is why a
          high-frequency loss removes clarity before it removes volume.
        </desc>

        {AUDIO_LEVELS.map((db) => (
          <g key={db}>
            <line stroke="#c9d8e3" strokeWidth={1} x1={L} x2={R} y1={y(db)} y2={y(db)} />
            <text fill="var(--muted)" fontSize={12} textAnchor="end" x={L - 10} y={y(db) + 4}>
              {db}
            </text>
          </g>
        ))}
        {AUDIO_FREQS.map((f, i) => (
          <g key={f}>
            <line stroke="#c9d8e3" strokeWidth={1} x1={x(i)} x2={x(i)} y1={T} y2={B} />
            <text fill="var(--muted)" fontSize={12} textAnchor="middle" x={x(i)} y={B + 18}>
              {f >= 1000 ? `${f / 1000}k` : f}
            </text>
          </g>
        ))}

        <path d={banana} fill="rgba(0, 90, 156, 0.18)" stroke="#005a9c" strokeWidth={1.5} />

        {/* the two ends of speech, labelled where they actually sit */}
        <text fill="#003f6f" fontSize={12} fontWeight={700} x={x(0) + 8} y={y(36)}>
          vowels
        </text>
        <text fill="#003f6f" fontSize={12} fontWeight={700} textAnchor="middle" x={x(4) - 4} y={y(30)}>
          s · f · th
        </text>

        <rect fill="none" height={B - T} stroke="#003f6f" strokeWidth={1.5} width={R - L} x={L} y={T} />
        <text fill="#262626" fontSize={12} fontWeight={700} letterSpacing="0.04em" textAnchor="middle" x={(L + R) / 2} y={B + 40}>
          Frequency (Hz) — low pitch to high pitch
        </text>
        <text
          fill="#262626"
          fontSize={12}
          fontWeight={700}
          letterSpacing="0.04em"
          textAnchor="middle"
          transform={`rotate(-90 16 ${(T + B) / 2})`}
          x={16}
          y={(T + B) / 2}
        >
          Hearing level (dB HL)
        </text>
      </svg>
      <figcaption className="mt-4 text-[17px] leading-[1.5] text-[var(--muted)]">{caption}</figcaption>
    </figure>
  );
}
