import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { ZocdocButton } from "@/components/ZocdocButton";
import { logoUrl, primaryPhone, primaryPhoneHref } from "@/lib/site";

const navGroups = [
  {
    label: "About Us",
    links: [
      ["Meet the Team", "/meet-the-team"],
      ["Why Choose Us", "/why-choose-us"],
      ["Careers", "/careers"],
      ["Blog", "/blog"]
    ]
  },
  {
    label: "Hearing Loss",
    links: [
      ["Hearing Loss Misconceptions", "/hearing-loss-misconceptions"],
      ["Improve Your Hearing", "/improve-your-hearing"],
      ["Dizziness and Ringing in Your Ears", "/dizziness-and-ringing-in-your-ears"],
      ["Help a Loved One", "/help-a-loved-one"],
      ["Prevent Hearing Loss", "/prevent-hearing-loss"],
      ["Get Answers", "/get-answers"]
    ]
  },
  {
    label: "Hearing Aids",
    links: [
      ["Hearing Aids 101", "/hearing-aids-101"],
      ["Types of Hearing Aids", "/types-of-hearing-aids"],
      ["Hearing Aid Brands", "/hearing-aids-brands"],
      ["Batteries and Accessories", "/batteries-and-accessories"],
      ["Lyric Invisible Hearing", "/lyric-invisible-hearing"],
      ["Instructional Videos", "/instructional-videos"],
      ["Referral Program", "/hearing-aid-referral-program"]
    ]
  },
  {
    label: "Services",
    links: [
      ["Hearing Testing", "/hearing-testing"],
      ["Hearing Aid Fitting", "/hearing-aid-fitting"],
      ["Tinnitus Therapy", "/tinnitus-therapy"],
      ["Hearing Protection", "/hearing-protection"],
      ["Hearing Aid Repair", "/hearing-aid-repair"]
    ]
  },
  {
    label: "Contact",
    links: [
      ["Contact Us", "/contact-us"],
      ["Patient Forms", "/patient-forms"],
      ["Somers, NY Office", "/Somers-NY"],
      ["Harrison, NY Office", "/harrison-ny"],
      ["White Plains, NY", "/White-Plains-NY"],
      ["Scarsdale, NY", "/Scarsdale-NY"],
      ["Greenwich, CT", "/greenwich-ct"],
      ["Rye, NY", "/rye-ny"],
      ["Mt. Kisco, NY", "/mt-kisco-ny"]
    ]
  }
];

export function Header() {
  return (
    <header className="border-b border-[var(--line)] bg-white">
      <div className="bg-[var(--brand-dark)] text-white">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-2 text-sm">
          <Link className="focus-ring inline-flex items-center gap-2 font-bold" href="/why-choose-us">
            <MapPin size={16} aria-hidden="true" />
            Serving Westchester County
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="focus-ring inline-flex items-center gap-2 font-bold"
              data-track="phone-header"
              href={primaryPhoneHref}
            >
              <Phone size={16} aria-hidden="true" />
              {primaryPhone}
            </a>
            <ZocdocButton className="px-3 py-2" trackingId="appointment-header" />
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-5 py-5 lg:flex-row lg:justify-between">
        <Link className="focus-ring block" href="/" aria-label="Audiology Associates of Westchester home">
          <Image
            alt="Audiology Associates of Westchester logo"
            className="h-auto w-[290px] max-w-full"
            height={120}
            priority
            src={logoUrl}
            width={584}
          />
        </Link>
        <nav aria-label="Primary navigation" className="w-full lg:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <Link className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-[var(--brand-dark)]" href="/">
                Home
              </Link>
            </li>
            {navGroups.map((group) => (
              <li className="relative" key={group.label}>
                <details className="group">
                  <summary className="focus-ring cursor-pointer list-none rounded-md px-3 py-2 text-sm font-bold text-[var(--brand-dark)] marker:hidden">
                    {group.label}
                  </summary>
                  <div className="absolute left-1/2 z-40 mt-2 w-72 -translate-x-1/2 rounded-md border border-[var(--line)] bg-white p-2 medical-shadow">
                    {group.links.map(([label, href]) => (
                      <Link
                        className="focus-ring block rounded px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--brand-soft)]"
                        href={href}
                        key={href}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
