import { Phone } from "lucide-react";
import { locations } from "@/lib/site";

/**
 * A permanent way to call, on phones only.
 *
 * Measured on a real 390px viewport before this existed: inside an article --
 * which is where Facebook and Google send people -- the first call affordance
 * in the page body sat at 7,416px of an 8,485px page. Nine screens. On
 * /meet-the-team it was 20,571px of 21,333px, so a reader could pass twenty-five
 * screens of a page about the audiologists without ever being offered a way to
 * reach one. The homepage and /contact-us were fine; it is the content pages,
 * the ones people actually land on, that had the dead zone.
 *
 * The header does carry a number on mobile, but behind the hamburger, and it is
 * Harrison's only -- so a Somers patient was one tap away from the wrong office.
 * Hence two buttons, named, rather than one "call us".
 *
 * Deliberately always visible rather than appearing on scroll: this audience
 * converts by dialling, and 64px of a 812px screen is a cheap price for never
 * having to look for the number.
 */
export function MobileCallBar() {
  const offices = locations.filter((location) => location.type === "office");

  return (
    <nav
      aria-label="Call an office"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t-[3px] border-[#ffd45a] bg-[#003f6f] pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      {offices.map((office) => (
        <a
          className="focus-ring flex min-h-[60px] items-center justify-center gap-2 bg-[#005a9c] px-3 py-2 text-white no-underline active:bg-[#004a82]"
          data-track="phone-mobile-bar"
          href={office.phoneHref}
          key={office.path}
        >
          <Phone aria-hidden="true" className="shrink-0" size={20} />
          <span>
            <span className="block text-[16px] font-black leading-tight">Call {office.city}</span>
            <span className="block text-[13px] leading-tight text-white/85">{office.phone}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
