import { Phone } from "lucide-react";
import { trackingHref } from "@/lib/conversion";
import { locations } from "@/lib/site";

// Top-of-article booking strip for blog posts. Rendered by BlogArticlePage in
// components/PageRenderer.tsx, between the breadcrumbs and the article.
//
// Design rules:
// - Static server markup. No script, no image, no font: nothing can shift.
// - Two links, one per office, both tel: links. Office name, phone number and
//   href come from locations in lib/site.ts. Nothing is typed in here.
// - ConversionTracking already counts every tel: click (click_to_call), so no
//   extra analytics code is needed. data-track follows the other bands.
// - Each link is at least 48px tall. Visible text starts with the accessible name.
// - No claim about price, insurance or free services.
//
// Below the lg breakpoint (1024px) the fixed MobileCallBar already shows the same
// two numbers at the bottom of the screen, so the strip hides there (max-lg:hidden)
// and shows from lg up. Keep the two breakpoints the same.
//
// Pages where a routine booking strip would sit badly: the sudden hearing loss
// pages tell the reader to get care the same day.
const NO_STRIP = new Set(["/hearing-loss/sudden-hearing-loss", "/sudden-hearing-loss-why-not-wait"]);

export function BlogBookingStrip({ pagePath }: { pagePath: string }) {
  if (NO_STRIP.has(pagePath)) return null;
  const offices = locations.filter((location) => location.type === "office");
  if (offices.length < 2) return null;

  return (
    <aside aria-label="Book a hearing visit" className="border-b border-[#d5e7f4] bg-[#eaf4fb] max-lg:hidden">
      <div className="mx-auto flex max-w-[1460px] flex-col gap-3 px-[64px] py-3 max-lg:px-5 md:flex-row md:items-center md:justify-between">
        <p className="text-[18px] font-black leading-7 text-[#003f6f]">Book a hearing visit at Harrison or Somers.</p>
        <div className="grid gap-3 sm:grid-cols-2 md:min-w-[500px]">
          {offices.map((office) => (
            <a
              className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-[#005a9c] px-5 py-2 text-left font-black text-white hover:bg-[#004a82]"
              data-track={trackingHref(`blog-booking-${office.city.toLowerCase()}`, pagePath)}
              href={office.phoneHref}
              key={office.path}
            >
              <Phone aria-hidden="true" className="shrink-0" size={19} />
              <span>
                <span className="block text-[16px] leading-tight">Book at {office.city}</span>
                <span className="block text-[14px] font-bold leading-tight text-white/90">Call {office.phone}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
