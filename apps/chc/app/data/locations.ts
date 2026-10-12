// The one approved record for each office. Every surface that shows an office
// fact — the footer, the office map cards, the contact page, the sidebar, and
// the LocalBusiness JSON-LD in app/layout.tsx — reads from here, so a change to
// hours, address or phone is made once (strategy audit OPS-001).
//
// Hours are stored as intervals, not display strings. Split days (San Carlos's
// midday break) are separate intervals so the schema never collapses them into
// continuous hours. Prose copy in app/data/corePages.ts and the fragments still
// repeats some of these facts; scripts/check-locations.mjs compares that prose
// against this file and fails if they drift.
//
// CONFIRM WITH THE CLINIC before editing hours, and update both Google Business
// Profile listings on the same day.

export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
/** 24-hour "HH:MM". */
export type Interval = { opens: string; closes: string };
/** Consecutive days that share the same intervals. */
export type HoursGroup = { days: Day[]; intervals: Interval[] };

export type Location = {
  id: "san-mateo" | "san-carlos";
  name: string;            // short display name
  label: string;           // display name used in headings
  schemaName: string;
  street: string;
  locality: string;
  region: "CA";
  postalCode: string;
  phone: string;           // E.164
  phoneDisplay: string;
  fax: string;
  geo: { lat: number; lng: number };
  hours: HoursGroup[];
  pagePath: string;
  lastOperationalReview: string; // ISO date the clinic last confirmed these facts
};

export const LOCATIONS: Record<Location["id"], Location> = {
  "san-mateo": {
    id: "san-mateo",
    name: "San Mateo",
    label: "San Mateo – Main Office",
    schemaName: "California Hearing Center — San Mateo",
    street: "88 N. San Mateo Drive",
    locality: "San Mateo",
    region: "CA",
    postalCode: "94401",
    phone: "+1-650-342-9449",
    phoneDisplay: "650-342-9449",
    fax: "+1-650-342-4435",
    // Geocoded to the exact street address (OpenStreetMap exact-match on
    // "88, North San Mateo Drive"); the previous pin was ~300m off.
    geo: { lat: 37.568109, lng: -122.327851 },
    hours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], intervals: [{ opens: "09:00", closes: "17:00" }] },
      { days: ["Friday"], intervals: [{ opens: "09:00", closes: "15:00" }] },
    ],
    pagePath: "/contact/san-mateo/",
    lastOperationalReview: "",
  },
  "san-carlos": {
    id: "san-carlos",
    name: "San Carlos",
    label: "San Carlos",
    schemaName: "California Hearing Center — San Carlos",
    street: "1008 Laurel Street",
    locality: "San Carlos",
    region: "CA",
    postalCode: "94070",
    phone: "+1-650-342-9449",
    phoneDisplay: "650-342-9449",
    fax: "+1-650-342-4435",
    // Geocoded to the exact street address (OpenStreetMap exact-match on
    // "1008, Laurel Street"); the previous pin was ~530m off.
    geo: { lat: 37.501047, lng: -122.25469 },
    hours: [
      { days: ["Monday", "Tuesday", "Wednesday"], intervals: [{ opens: "09:00", closes: "13:00" }, { opens: "14:00", closes: "17:00" }] },
      { days: ["Thursday"], intervals: [{ opens: "09:00", closes: "12:00" }, { opens: "13:00", closes: "17:00" }] },
      { days: ["Friday"], intervals: [{ opens: "09:00", closes: "12:00" }, { opens: "12:30", closes: "15:00" }] },
    ],
    pagePath: "/contact/san-carlos/",
    lastOperationalReview: "",
  },
};

export const LOCATION_LIST: Location[] = [LOCATIONS["san-mateo"], LOCATIONS["san-carlos"]];

const SHORT_DAY: Record<Day, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

function parts(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const meridiem = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return { text: m ? `${h12}:${String(m).padStart(2, "0")}` : String(h12), meridiem };
}

/** "9am–1pm", "2–5pm", "12:30–3pm" — the start drops its suffix when it matches the end's. */
function formatInterval(iv: Interval, first: boolean): string {
  const a = parts(iv.opens);
  const b = parts(iv.closes);
  const start = !first && a.meridiem === b.meridiem ? a.text : `${a.text}${a.meridiem}`;
  return `${start}–${b.text}${b.meridiem}`;
}

function dayRange(days: Day[], long: boolean): string {
  const f = (d: Day) => (long ? d : SHORT_DAY[d]);
  return days.length === 1 ? f(days[0]) : `${f(days[0])}–${f(days[days.length - 1])}`;
}

/** "Mon–Wed 9am–1pm, 2–5pm · Thu …" — footer and office cards. */
export function hoursShort(loc: Location): string {
  return loc.hours
    .map((g) => `${dayRange(g.days, false)} ${g.intervals.map((iv, i) => formatInterval(iv, i === 0)).join(", ")}`)
    .join(" · ");
}

/** "Monday–Wednesday 9am–1pm and 2–5pm, Thursday …" — prose. */
export function hoursLong(loc: Location): string {
  return loc.hours
    .map((g) => `${dayRange(g.days, true)} ${g.intervals.map((iv, i) => formatInterval(iv, i === 0)).join(" and ")}`)
    .join(", ");
}

export function cityLine(loc: Location): string {
  return `${loc.locality}, ${loc.region} ${loc.postalCode}`;
}

export function postalAddress(loc: Location) {
  return {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.locality,
    addressRegion: loc.region,
    postalCode: loc.postalCode,
    addressCountry: "US",
  };
}

/** One OpeningHoursSpecification per interval, so midday breaks survive. */
export function schemaHours(loc: Location) {
  return loc.hours.flatMap((g) =>
    g.intervals.map((iv) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: g.days.length === 1 ? g.days[0] : g.days,
      opens: iv.opens,
      closes: iv.closes,
    })),
  );
}

export function mapsQuery(loc: Location): string {
  return `${loc.street} ${loc.locality} ${loc.region} ${loc.postalCode}`.replace(/\s+/g, "+");
}
