import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/site";

/**
 * Where the practice actually is, on every page, above everything else.
 *
 * The site review's finding: nowhere above the fold did this site say where it
 * was. The one place that tried -- the hero's SERVING row -- listed Greenwich,
 * Westchester County and Somers, and omitted Harrison, the main office. For a
 * two-office practice the most expensive real-world failure is a patient
 * driving to the wrong place, and this site named four towns and no offices.
 *
 * Sticky rather than a full sticky header: a whole nav bar pinned to the top
 * eats roughly a third of a laptop viewport on a 3,000px article. Forty pixels
 * does not. This is the pattern the sister practice (California Hearing Center)
 * uses, and it is the cheapest element on their page.
 *
 * On phones it collapses to the two office names only -- addresses and numbers
 * would not fit, and the fixed call bar at the bottom already carries both
 * numbers. What the phone version adds is the answer to "where are you", which
 * nothing else on a mobile screen was giving.
 */
export function OfficesStrip() {
  const offices = locations.filter((location) => location.type === "office");

  return (
    <div className="sticky top-0 z-40 bg-[#003f6f] text-white">
      <div className="mx-auto flex max-w-[1760px] flex-wrap items-center justify-center gap-x-9 gap-y-0 px-4 py-0 text-[15px] leading-tight max-lg:gap-x-6 max-lg:text-[15px]">
        <MapPin aria-hidden="true" className="shrink-0 text-[#ffd45a] max-lg:hidden" size={16} />
        {offices.map((office) => (
          <p className="flex items-center gap-2 max-lg:gap-1.5" key={office.path}>
            <Link
              className="focus-ring inline-flex min-h-[40px] items-center font-black underline-offset-2 hover:underline max-lg:min-h-[44px]"
              href={office.path}
            >
              {office.city}
            </Link>
            <span className="text-white/75 max-lg:hidden">{office.streetAddress}</span>
            <a
              className="focus-ring inline-flex min-h-[40px] items-center font-bold underline decoration-[#ffd45a] decoration-2 underline-offset-2 max-lg:hidden"
              data-track="phone-offices-strip"
              href={office.phoneHref}
            >
              {office.phone}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
