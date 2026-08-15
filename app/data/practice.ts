// Everything about the practice that gets older on its own.
//
// Why this file exists: the site is statically generated, so a duration typed
// into copy ("over 30 years") freezes on the day it was written and quietly
// drifts out of date. The live WordPress site currently says "over 30 years" on
// the homepage and "over 27 years" on /about-us/ — two different answers to the
// same question, both wrong. Nothing here is typed twice.
//
// Rule: never write a year count into copy. Either import a constant below, or
// — in the content data files, where you cannot run code — write a token like
// {{yearsInPractice}} and let resolveTokensDeep() fill it in at build time.
//
// One caveat worth knowing: because pages are prerendered, these numbers advance
// on the next deploy rather than at midnight on New Year's Eve. Vercel rebuilds
// on every push, so in normal use they stay current. If the site ever goes
// months without a deploy, trigger a rebuild (or wire a scheduled deploy hook)
// so the anniversary actually lands on the page.

/**
 * When the practice opened. `month` is 1-12 and only matters in the weeks around
 * the anniversary — set it to the real founding month and the arithmetic below
 * corrects itself.
 */
export const FOUNDED = { year: 1993, month: 1 } as const;

/** Whole years completed since a given month, as of `now`. */
export function yearsSince(year: number, month = 1, now: Date = new Date()): number {
  const elapsed = now.getFullYear() - year;
  return now.getMonth() + 1 >= month ? elapsed : elapsed - 1;
}

/** How long California Hearing Center has been open. */
export const YEARS_IN_PRACTICE = yearsSince(FOUNDED.year, FOUNDED.month);

/**
 * Individual clocks. Each start year was back-solved from the copy that was live
 * in 2026, so today's rendered numbers are unchanged — but these are inferences,
 * not records. Correct any that are wrong and every page follows.
 */
export const CAREER_START = {
  /** Founder — practising at least since she opened the practice. CONFIRM. */
  darcy: 1993,
  /** Copy said "17 years" in 2026. CONFIRM. */
  lais: 2009,
  /** Copy said "10+ years" in 2026. CONFIRM. */
  jarna: 2016,
} as const;

/** Copy said "over 20 years" of Oticon partnership in 2026. CONFIRM. */
export const OTICON_PARTNER_SINCE = 2005;

export const YEARS_DARCY = yearsSince(CAREER_START.darcy);
export const YEARS_LAIS = yearsSince(CAREER_START.lais);
export const YEARS_JARNA = yearsSince(CAREER_START.jarna);
export const YEARS_WITH_OTICON = yearsSince(OTICON_PARTNER_SINCE);

/** Tokens usable inside content strings in app/data/*.ts and the fragments they are built from. */
const TOKENS: Record<string, string> = {
  yearsInPractice: String(YEARS_IN_PRACTICE),
  foundedYear: String(FOUNDED.year),
  yearsDarcy: String(YEARS_DARCY),
  yearsLais: String(YEARS_LAIS),
  yearsJarna: String(YEARS_JARNA),
  yearsWithOticon: String(YEARS_WITH_OTICON),
};

const TOKEN_RE = /\{\{\s*(\w+)\s*\}\}/g;

/**
 * Replace {{token}} placeholders in a single string. An unrecognised token is
 * left intact and warned about, so a typo shows up in the build log rather than
 * silently deleting a number from a page.
 */
export function resolveTokens(text: string): string {
  return text.replace(TOKEN_RE, (whole, key: string) => {
    if (key in TOKENS) return TOKENS[key];
    console.warn(`[practice] unknown token ${whole} left unresolved`);
    return whole;
  });
}

/** Resolve tokens in every string of a nested data structure. Runs once, at module load. */
export function resolveTokensDeep<T>(value: T): T {
  if (typeof value === "string") return resolveTokens(value) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => resolveTokensDeep(v)) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = resolveTokensDeep(v);
    }
    return out as unknown as T;
  }
  return value;
}
