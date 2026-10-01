// Builds the patient's PDF report. Dependency-free on purpose: the PDF is a
// handful of text lines, rectangles and one scale graphic, drawn with the
// built-in Helvetica fonts. That keeps both practice sites free of a new package
// and means the report works anywhere the server runs.
//
// LOOK AND FEEL IS NOT DONE. Colours and layout are in THEME and buildReportPdf()
// below. When the brand pass happens, a logo can be embedded as a JPEG
// (DCTDecode image) and the fonts swapped; if the layout needs more than that,
// move to a library such as pdf-lib.

import { PARAMS, type Summary } from "./scoring";
import { resultCopy, SCREENING_NOT_DIAGNOSIS, earNote, levelNotes, levelRangeText, reliabilityTips } from "./copy";
import { CLINICAL_APPROVED, PRACTICE, SCREENER_VERSION } from "./config";

type RGB = [number, number, number];

const THEME = {
  brand: [21, 95, 107] as RGB, // header band, headings
  ink: [33, 66, 75] as RGB,
  muted: [92, 113, 120] as RGB,
  line: [214, 224, 223] as RGB,
  white: [255, 255, 255] as RGB,
  soft: [236, 244, 245] as RGB,
  warn: [253, 243, 217] as RGB,
  warnInk: [110, 78, 8] as RGB,
  band: {
    good: [47, 133, 90] as RGB,
    fair: [224, 174, 60] as RGB,
    poor: [201, 70, 28] as RGB,
    unreliable: [110, 120, 125] as RGB,
  },
};

// Helvetica glyph widths (per 1000 em) for ASCII 32..126, from the standard font metrics.
const W_REG = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
const W_BOLD = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584];

// Typographic characters that exist in the PDF's WinAnsi encoding.
const WIN: Record<string, { code: number; reg: number; bold: number }> = {
  "–": { code: 0x96, reg: 556, bold: 556 },
  "—": { code: 0x97, reg: 1000, bold: 1000 },
  "‘": { code: 0x91, reg: 222, bold: 278 },
  "’": { code: 0x92, reg: 222, bold: 278 },
  "“": { code: 0x93, reg: 333, bold: 500 },
  "”": { code: 0x94, reg: 333, bold: 500 },
  "•": { code: 0x95, reg: 350, bold: 350 },
  "…": { code: 0x85, reg: 1000, bold: 1000 },
};

function glyphWidth(ch: string, bold: boolean) {
  const c = ch.charCodeAt(0);
  if (c >= 32 && c <= 126) return (bold ? W_BOLD : W_REG)[c - 32];
  const w = WIN[ch];
  return w ? (bold ? w.bold : w.reg) : 556;
}

function measure(s: string, bold: boolean, size: number) {
  let w = 0;
  for (const ch of s) w += glyphWidth(ch, bold);
  return (w * size) / 1000;
}

function wrap(s: string, bold: boolean, size: number, maxWidth: number): string[] {
  const lines: string[] = [];
  for (const para of s.split("\n")) {
    let line = "";
    for (const word of para.split(/\s+/).filter(Boolean)) {
      const trial = line ? `${line} ${word}` : word;
      if (measure(trial, bold, size) <= maxWidth || !line) line = trial;
      else {
        lines.push(line);
        line = word;
      }
    }
    lines.push(line);
  }
  return lines;
}

// One PDF string literal, as Latin-1 characters (each JS char is one byte).
function pdfString(s: string) {
  let out = "";
  for (const ch of s) {
    const c = ch.charCodeAt(0);
    let code: number;
    if (WIN[ch]) code = WIN[ch].code;
    else if (c >= 32 && c <= 126) code = c;
    else if (c >= 160 && c <= 255) code = c;
    else code = 63; // "?"
    const chr = String.fromCharCode(code);
    out += chr === "(" || chr === ")" || chr === "\\" ? `\\${chr}` : chr;
  }
  return `(${out})`;
}

const num = (n: number) => (Math.round(n * 100) / 100).toString();
const rgb = (c: RGB) => `${num(c[0] / 255)} ${num(c[1] / 255)} ${num(c[2] / 255)}`;

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN = 54;
const CONTENT_W = PAGE_W - MARGIN * 2;

class Doc {
  pages: string[][] = [[]];
  top = 0; // distance from the top of the page to the next thing to draw

  private get ops() {
    return this.pages[this.pages.length - 1];
  }

  newPage() {
    this.pages.push([]);
    this.top = MARGIN;
  }

  /** Starts a new page if the next block would run into the footer. */
  ensure(height: number) {
    if (this.top + height > PAGE_H - 62) this.newPage();
  }

  rect(x: number, top: number, w: number, h: number, color: RGB) {
    this.ops.push(`${rgb(color)} rg ${num(x)} ${num(PAGE_H - top - h)} ${num(w)} ${num(h)} re f`);
  }

  strokeRect(x: number, top: number, w: number, h: number, color: RGB, width = 0.75) {
    this.ops.push(`${rgb(color)} RG ${width} w ${num(x)} ${num(PAGE_H - top - h)} ${num(w)} ${num(h)} re S`);
  }

  triangleDown(cx: number, top: number, size: number, color: RGB) {
    const y = PAGE_H - top;
    this.ops.push(`${rgb(color)} rg ${num(cx - size)} ${num(y)} m ${num(cx + size)} ${num(y)} l ${num(cx)} ${num(y - size * 1.4)} l h f`);
  }

  /** Draws one line of text whose baseline is `baseline` from the top. */
  text(x: number, baseline: number, s: string, opts: { size?: number; bold?: boolean; color?: RGB; align?: "left" | "center" | "right"; width?: number } = {}) {
    const size = opts.size ?? 11;
    const bold = !!opts.bold;
    let dx = x;
    if (opts.align === "center" && opts.width) dx = x + (opts.width - measure(s, bold, size)) / 2;
    if (opts.align === "right" && opts.width) dx = x + opts.width - measure(s, bold, size);
    this.ops.push(`BT ${rgb(opts.color ?? THEME.ink)} rg /${bold ? "F2" : "F1"} ${size} Tf ${num(dx)} ${num(PAGE_H - baseline)} Td ${pdfString(s)} Tj ET`);
  }

  /** Wrapped paragraph; returns nothing, moves this.top below it. */
  para(s: string, opts: { x?: number; width?: number; size?: number; bold?: boolean; color?: RGB; lead?: number } = {}) {
    const size = opts.size ?? 11;
    const lead = opts.lead ?? size * 1.45;
    const x = opts.x ?? MARGIN;
    const width = opts.width ?? CONTENT_W;
    const lines = wrap(s, !!opts.bold, size, width);
    for (const line of lines) {
      this.ensure(lead);
      this.text(x, this.top + size, line, { size, bold: opts.bold, color: opts.color });
      this.top += lead;
    }
  }

  /** A shaded box around wrapped text. */
  callout(s: string, opts: { fill: RGB; ink: RGB; size?: number; bold?: boolean; border?: RGB }) {
    const size = opts.size ?? 11;
    const pad = 12;
    const lead = size * 1.45;
    const lines = wrap(s, !!opts.bold, size, CONTENT_W - pad * 2);
    const h = lines.length * lead + pad * 2 - (lead - size) + 2;
    this.ensure(h + 8);
    this.rect(MARGIN, this.top, CONTENT_W, h, opts.fill);
    if (opts.border) this.strokeRect(MARGIN, this.top, CONTENT_W, h, opts.border);
    let y = this.top + pad + size;
    for (const line of lines) {
      this.text(MARGIN + pad, y, line, { size, bold: opts.bold, color: opts.ink });
      y += lead;
    }
    this.top += h + 10;
  }

  heading(s: string) {
    this.ensure(30);
    this.top += 6;
    this.text(MARGIN, this.top + 13, s, { size: 13, bold: true, color: THEME.brand });
    this.top += 22;
  }
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "America/Los_Angeles" });
}

function pdfDate(d: Date) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `D:${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}Z`;
}

/** Where on the scale (0..1) a result sits. Range is a display choice, not a clinical one. */
function scalePosition(srt: number) {
  const lo = -14;
  const hi = 4;
  return Math.min(1, Math.max(0, (srt - lo) / (hi - lo)));
}

export function buildReportPdf(input: { firstName: string; summary: Summary; date: Date }): Buffer {
  const { firstName, summary, date } = input;
  const band = summary.band;
  const copy = resultCopy(band, summary.asymmetry);
  const doc = new Doc();

  // Header band.
  doc.rect(0, 0, PAGE_W, 72, THEME.brand);
  doc.text(MARGIN, 36, PRACTICE.name, { size: 20, bold: true, color: THEME.white });
  doc.text(MARGIN, 57, "Your online hearing check", { size: 12, color: THEME.white });
  doc.top = 90;

  doc.para(`Prepared for ${firstName} on ${formatDate(date)}`, { size: 11, color: THEME.muted });
  doc.top += 4;

  if (!CLINICAL_APPROVED) {
    doc.callout("PREVIEW. The result bands in this report have not yet been reviewed by an audiologist. Do not rely on it.", {
      fill: THEME.warn,
      ink: THEME.warnInk,
      bold: true,
      size: 10.5,
    });
  }

  // Result.
  doc.ensure(120);
  const chipW = 128;
  doc.rect(MARGIN, doc.top, chipW, 34, THEME.band[copy.look]);
  doc.text(MARGIN, doc.top + 23, copy.label, { size: 17, bold: true, color: copy.look === "fair" ? THEME.ink : THEME.white, align: "center", width: chipW });
  doc.text(MARGIN + chipW + 16, doc.top + 22, copy.headline, { size: 13, bold: true });
  doc.top += 50;
  doc.para(copy.body, { size: 11.5 });
  doc.top += 8;

  // Scale graphic: only for a real result. Words carry the meaning; colour is a hint.
  if (band !== "unreliable" && summary.srtBoth !== null) {
    doc.ensure(90);
    const barX = MARGIN;
    const barW = CONTENT_W;
    const barTop = doc.top + 24;
    const xGood = barX + barW * scalePosition(PARAMS.goodMax);
    const xFair = barX + barW * scalePosition(PARAMS.fairMax);
    doc.rect(barX, barTop, xGood - barX, 16, THEME.band.good);
    doc.rect(xGood, barTop, xFair - xGood, 16, THEME.band.fair);
    doc.rect(xFair, barTop, barX + barW - xFair, 16, THEME.band.poor);
    doc.text(barX, barTop + 32, "Good", { size: 9.5, bold: true, color: THEME.ink, align: "center", width: xGood - barX });
    doc.text(xGood, barTop + 32, "Fair", { size: 9.5, bold: true, color: THEME.ink, align: "center", width: xFair - xGood });
    doc.text(xFair, barTop + 32, "Poor", { size: 9.5, bold: true, color: THEME.ink, align: "center", width: barX + barW - xFair });
    const mx = barX + barW * scalePosition(summary.srtBoth);
    doc.triangleDown(mx, barTop - 3, 6, THEME.ink);
    doc.text(mx - 20, barTop - 17, "Your result", { size: 9.5, bold: true, color: THEME.ink, align: "center", width: 40 });
    doc.top = barTop + 48;
  } else if (band === "unreliable") {
    doc.heading("What may have gone wrong");
    for (const tip of reliabilityTips(summary.validity)) doc.para(`•  ${tip}`, { size: 11 });
    doc.top += 6;
  }

  // Ears.
  const ear = earNote(summary);
  if (ear) {
    doc.callout(ear, { fill: THEME.warn, ink: THEME.warnInk, size: 11, bold: true });
  } else if (summary.earCheck === "done") {
    doc.para("You also tried each ear on its own. Both ears scored about the same.", { size: 11, color: THEME.muted });
    doc.top += 6;
  } else if (summary.earCheck === "unreliable") {
    doc.para("The one-ear check could not be scored, so we cannot say how your ears compare.", { size: 11, color: THEME.muted });
    doc.top += 6;
  }

  // Support level direction.
  const levelText = levelRangeText(band);
  if (levelText) {
    doc.heading("The kind of support to ask about");
    doc.para(levelText, { size: 11 });
    for (const l of levelNotes(band)) doc.para(`•  Level ${l.level}: ${l.note}`, { size: 10.5, x: MARGIN + 6, width: CONTENT_W - 6 });
    doc.top += 4;
  }

  // Next steps.
  doc.heading("What to do next");
  doc.para(copy.next, { size: 11 });
  doc.top += 6;
  doc.para(`Book online: ${PRACTICE.siteUrl}${PRACTICE.bookingPath}`, { size: 11, bold: true });
  doc.para(`Call: ${PRACTICE.phoneDisplay}`, { size: 11, bold: true });
  doc.top += 4;
  for (const o of PRACTICE.offices) doc.para(`${o.name}: ${o.address}`, { size: 10.5, color: THEME.muted });

  // What this is not. Kept together: the disclaimer must never be split across pages.
  doc.ensure(80);
  doc.heading("What this is not");
  doc.para(SCREENING_NOT_DIAGNOSIS, { size: 11 });
  if (PRACTICE.reviewerLine) {
    doc.top += 4;
    doc.para(PRACTICE.reviewerLine, { size: 10.5, color: THEME.muted });
  }

  // Footers, drawn last so they can say "page X of N".
  const total = doc.pages.length;
  doc.pages.forEach((ops, i) => {
    const y = PAGE_H - 40;
    ops.push(`${rgb(THEME.line)} RG 0.75 w ${MARGIN} ${PAGE_H - y + 14} m ${PAGE_W - MARGIN} ${PAGE_H - y + 14} l S`);
    const left = `${PRACTICE.name}  |  ${PRACTICE.phoneDisplay}  |  ${PRACTICE.siteUrl.replace(/^https?:\/\//, "")}`;
    ops.push(`BT ${rgb(THEME.muted)} rg /F1 9 Tf ${MARGIN} ${PAGE_H - y} Td ${pdfString(left)} Tj ET`);
    const right = `Page ${i + 1} of ${total}`;
    ops.push(`BT ${rgb(THEME.muted)} rg /F1 9 Tf ${num(PAGE_W - MARGIN - measure(right, false, 9))} ${PAGE_H - y} Td ${pdfString(right)} Tj ET`);
  });

  return assemble(doc.pages, `Your hearing check - ${PRACTICE.name}`, date);
}

function assemble(pages: string[][], title: string, date: Date): Buffer {
  // Object numbers: 1 catalog, 2 page tree, 3 and 4 fonts, 5 info, then a page
  // object and a content stream for each page.
  const firstPageObj = 6;
  const kids = pages.map((_, i) => `${firstPageObj + i * 2} 0 R`).join(" ");
  const bodies: string[] = [];
  bodies[1] = `<< /Type /Catalog /Pages 2 0 R >>`;
  bodies[2] = `<< /Type /Pages /Kids [${kids}] /Count ${pages.length} >>`;
  bodies[3] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`;
  bodies[4] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`;
  bodies[5] = `<< /Title ${pdfString(title)} /Producer ${pdfString(PRACTICE.name)} /Creator ${pdfString(`Hearing screener ${SCREENER_VERSION}`)} /CreationDate (${pdfDate(date)}) >>`;
  pages.forEach((ops, i) => {
    const pageObj = firstPageObj + i * 2;
    const contentObj = pageObj + 1;
    const stream = ops.join("\n");
    bodies[pageObj] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObj} 0 R >>`;
    bodies[contentObj] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  let out = "%PDF-1.4\n%âãÏÓ\n";
  const offsets: number[] = [];
  for (let n = 1; n < bodies.length; n++) {
    offsets[n] = out.length;
    out += `${n} 0 obj\n${bodies[n]}\nendobj\n`;
  }
  const xrefAt = out.length;
  out += `xref\n0 ${bodies.length}\n0000000000 65535 f \n`;
  for (let n = 1; n < bodies.length; n++) out += `${String(offsets[n]).padStart(10, "0")} 00000 n \n`;
  out += `trailer\n<< /Size ${bodies.length} /Root 1 0 R /Info 5 0 R >>\nstartxref\n${xrefAt}\n%%EOF\n`;

  return Buffer.from(out, "latin1");
}
