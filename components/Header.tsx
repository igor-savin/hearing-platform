"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { ZocdocButton } from "@/components/ZocdocButton";
import { helpServicePath, helpServices, howWeCanHelpRootPath } from "@/lib/howWeCanHelp";
import { productMenuCards } from "@/lib/products";
import { logoUrl, primaryPhone, primaryPhoneHref } from "@/lib/site";

const navGroups = [
  {
    label: "ABOUT US",
    links: [
      ["MEET THE TEAM", "/meet-the-team"],
      ["WHY CHOOSE US", "/why-choose-us"],
      ["CAREERS", "/careers"],
      ["Blog", "/blog"]
    ]
  },
  {
    label: "HOW WE CAN HELP",
    href: howWeCanHelpRootPath,
    links: helpServices.map((service) => [service.menuTitle.toUpperCase(), helpServicePath(service)])
  },
  {
    label: "HEARING LOSS",
    links: [
      ["HEARING LOSS MISCONCEPTIONS", "/hearing-loss-misconceptions"],
      ["IMPROVE YOUR HEARING", "/improve-your-hearing"],
      ["DIZZINESS AND RINGING IN YOUR EARS", "/dizziness-and-ringing-in-your-ears"],
      ["HELP A LOVED ONE", "/help-a-loved-one"],
      ["PREVENT HEARING LOSS", "/prevent-hearing-loss"],
      ["GET ANSWERS", "/get-answers"]
    ]
  },
  {
    label: "HEARING AIDS",
    links: [
      ["HEARING AIDS 101", "/hearing-aids-101"],
      ["TYPES OF HEARING AIDS", "/types-of-hearing-aids"],
      ["HEARING AIDS BRANDS", "/products/hearing-aids-by-brand"],
      ["BATTERIES AND ACCESSORIES", "/batteries-and-accessories"],
      ["LYRIC® INVISIBLE HEARING™", "/lyric-invisible-hearing"],
      ["INSTRUCTIONAL VIDEOS", "/instructional-videos"]
    ]
  },
  {
    label: "SERVICES",
    links: [
      ["HEARING TESTING", "/hearing-testing"],
      ["HEARING AID FITTING", "/hearing-aid-fitting"],
      ["TINNITUS THERAPY", "/tinnitus-therapy"],
      ["HEARING PROTECTION", "/hearing-protection"],
      ["HEARING AID REPAIR", "/hearing-aid-repair"]
    ]
  },
  {
    label: "CONTACT US",
    href: "/contact-us",
    links: [
      ["PATIENT FORMS", "/patient-forms"],
      ["SOMERS, NY OFFICE", "/Somers-NY"],
      ["GREENWICH, CT", "/greenwich-ct"],
      ["RYE, NY", "/rye-ny"],
      ["MT. KISCO, NY", "/mt-kisco-ny"],
      ["HARRISON, NY", "/harrison-ny"]
    ]
  }
];

function SocialCircle({ label, href, children }: { label: string; href: string; children: string }) {
  return (
    <a
      aria-label={label}
      className="focus-ring legacy-social-circle inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-[3px] border-[#005a9c] text-[21px] font-black leading-none text-[#005a9c]"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [suppressMenus, setSuppressMenus] = useState(false);

  useEffect(() => {
    setSuppressMenus(false);
  }, [pathname]);

  function closeMenus() {
    setSuppressMenus(true);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <header className={`legacy-header bg-white ${suppressMenus ? "legacy-menu-suppressed" : ""}`}>
      <div className="relative mx-auto flex min-h-[171px] w-full max-w-[2048px] items-center justify-center px-5 py-4">
        <Link
          className="focus-ring legacy-why-button absolute left-[78px] top-[40px] hidden rounded-[4px] bg-[#005a9c] px-[36px] py-[13px] text-[18px] leading-none text-white lg:inline-flex"
          href="/why-choose-us"
          onClick={closeMenus}
        >
          Why Choose Us?
        </Link>

        <Link className="focus-ring block" href="/" aria-label="Audiology Associates of Westchester home" onClick={closeMenus}>
          <Image
            alt="Audiology Associates of Westchester logo"
            className="h-auto w-[360px] max-w-[78vw] md:w-[575px] lg:w-[700px]"
            height={192}
            priority
            src={logoUrl}
            width={1200}
          />
        </Link>

        <div className="absolute right-[220px] top-[3px] hidden min-w-[170px] text-center lg:block">
          <div className="mb-[7px] flex justify-center gap-1">
            <SocialCircle href="https://www.facebook.com/AAofW" label="Facebook">
              f
            </SocialCircle>
            <SocialCircle href="https://twitter.com/audiologyassoci" label="X">
              X
            </SocialCircle>
            <SocialCircle href="https://www.yelp.com/biz/audiology-associates-of-westchester-white-plains-2" label="Yelp">
              *
            </SocialCircle>
          </div>
          <p className="text-[16px] leading-tight text-black">Call Us Today</p>
          <a
            className="focus-ring text-[16px] font-bold leading-tight text-[#005a9c] underline"
            data-track="phone-header"
            href={primaryPhoneHref}
          >
            {primaryPhone}
          </a>
          <div className="mt-[9px] flex justify-center">
            <ZocdocButton
              className="legacy-book-button rounded-none px-[29px] py-[10px] text-[20px] font-black"
              trackingId="appointment-header"
            />
          </div>
        </div>
      </div>

      <nav aria-label="Primary navigation" className="bg-[#005a9c] text-white">
        <div className="mx-auto max-w-[1760px] px-2">
          <ul className="flex flex-nowrap items-stretch justify-center">
            <li>
              <Link
                className="focus-ring inline-flex h-full items-center border-2 border-white px-[19px] py-[17px] text-[20px] uppercase tracking-[0.06em]"
                href="/"
                onClick={closeMenus}
              >
                HOME
              </Link>
            </li>
            {navGroups.map((group) => (
              <Fragment key={group.label}>
              {group.label === "CONTACT US" ? (
                <li>
                  <Link
                    className="focus-ring flex h-full items-center whitespace-nowrap px-[22px] py-[19px] text-[19px] uppercase tracking-[0.06em]"
                    href="/areas-we-serve"
                    onClick={closeMenus}
                  >
                    AREAS WE SERVE
                  </Link>
                </li>
              ) : null}
              <li className="legacy-nav-item relative">
                <div className="legacy-nav-trigger flex items-center">
                  {group.href ? (
                    <Link
                      className="focus-ring flex items-center gap-3 whitespace-nowrap px-[22px] py-[19px] text-[19px] uppercase tracking-[0.06em]"
                      href={group.href}
                      onClick={closeMenus}
                    >
                      {group.label}
                      <ChevronDown size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <button
                      className="focus-ring flex cursor-default items-center gap-3 whitespace-nowrap px-[22px] py-[19px] text-[19px] uppercase tracking-[0.06em]"
                      type="button"
                    >
                      {group.label}
                      <ChevronDown size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {group.label === "HEARING AIDS" ? (
                  <div className="legacy-dropdown legacy-hearing-aids-mega absolute left-1/2 top-full z-50 hidden w-[min(1980px,calc(100vw-46px))] -translate-x-1/2 bg-[#f3f3f3] p-[22px] text-black shadow-lg">
                    <div className="grid gap-x-[54px] gap-y-[48px] lg:grid-cols-3">
                      {productMenuCards.map((product) => (
                        <Link
                          className="focus-ring grid min-h-[130px] grid-cols-[86px_1fr] items-center gap-[28px] bg-[#f4d5cc] px-[20px] py-[10px] text-black transition hover:bg-[#efc8bf]"
                          href={product.href}
                          key={product.href}
                          onClick={closeMenus}
                        >
                          <Image
                            alt={product.title}
                            className="h-[90px] w-[86px] object-contain"
                            height={120}
                            src={product.image}
                            width={120}
                          />
                          <span className="block">
                            <span className="block text-[27px] font-black leading-tight">{product.title}</span>
                            <span className="mt-[3px] block text-[24px] font-normal leading-[1.02]">{product.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-[22px] flex flex-wrap justify-center gap-x-[28px] gap-y-[10px] border-t border-[#d2d2d2] pt-[16px]">
                      {group.links.map(([label, href]) => (
                        <Link
                          className="focus-ring text-[16px] font-bold uppercase tracking-[0.06em] text-[#005a9c] underline"
                          href={href}
                          key={href}
                          onClick={closeMenus}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="legacy-dropdown absolute left-0 top-full z-50 hidden min-w-[280px] bg-[#005a9c] text-white shadow-lg">
                    {group.links.map(([label, href]) => (
                      <Link
                        className="focus-ring block whitespace-nowrap border-b border-white/55 px-[28px] py-[17px] text-[18px] uppercase leading-tight tracking-[0.05em] last:border-b-0 hover:bg-[#005a9c]"
                        href={href}
                        key={href}
                        onClick={closeMenus}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
