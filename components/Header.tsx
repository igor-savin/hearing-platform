"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { ZocdocButton } from "@/components/ZocdocButton";
import { helpServicePath, helpServices, howWeCanHelpRootPath } from "@/lib/howWeCanHelp";
import { productMenuCards } from "@/lib/products";
import { canonicalPathFor, primaryPhone, primaryPhoneHref } from "@/lib/siteBasics";
import { providerPath, providerProfiles } from "@/lib/team";
import { tinnitusPages, tinnitusPath, tinnitusRootPath } from "@/lib/tinnitus";

const navGroups = [
  {
    label: "ABOUT US",
    links: [
      ["MEET THE TEAM", "/meet-the-team"],
      ["WHY CHOOSE US", "/why-choose-us"],
      ["DR. CLIFF APPROVED PROVIDER", "/dr-cliff-approved-provider"],
      ["CAREERS", "/careers"],
      ["AREAS WE SERVE", "/areas-we-serve"],
      ["Blog", "/blog"]
    ]
  },
  {
    label: "HOW WE CAN HELP",
    href: howWeCanHelpRootPath,
    links: helpServices
      .filter((service) => !service.hideFromMenu)
      .map((service) => [service.menuTitle.toUpperCase(), canonicalPathFor(helpServicePath(service))])
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
    href: "/hearing-aids-brands",
    links: [
      ["HEARING AIDS 101", "/hearing-aids-101"],
      ["TYPES OF HEARING AIDS", "/types-of-hearing-aids"],
      ["HEARING AIDS BRANDS", "/hearing-aids-brands"],
      ["BATTERIES AND ACCESSORIES", "/batteries-and-accessories"],
      ["LYRIC® INVISIBLE HEARING™", "/lyric-invisible-hearing"],
      ["INSTRUCTIONAL VIDEOS", "/instructional-videos"]
    ]
  },
  {
    label: "SERVICES",
    // /services 301s to /hearing-testing. Linking the redirect from every page
    // in the site nav wasted crawl budget on all 186 pages.
    href: "/hearing-testing",
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
      ["SOMERS, NY", "/Somers-NY"],
      ["HARRISON, NY", "/harrison-ny"]
    ]
  }
];

const navItemClass =
  "focus-ring legacy-primary-nav-link flex h-full items-center justify-center gap-2 whitespace-nowrap border-2 border-transparent px-[14px] py-[16px]";

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setOpenMenu(null);
    setDismissedMenu(null);
    setMobileMenuOpen(false);
    setMobileOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  function openDropdown(label: string) {
    if (dismissedMenu !== label) setOpenMenu(label);
  }

  function closeDropdown() {
    setOpenMenu(null);
  }

  function dismissDropdown(label?: string) {
    setOpenMenu(null);
    setDismissedMenu(label || null);
  }

  return (
    <header className="legacy-header bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-[#d7e2e3] px-4 py-3 lg:hidden">
        <Link className="focus-ring block" href="/" aria-label="Audiology Associates of Westchester home">
          <Image
            alt="Audiology Associates of Westchester logo"
            className="h-auto w-[270px] max-w-[68vw]"
            height={120}
            priority
            sizes="68vw"
            src="/assets/audiology-associates-logo.png"
            unoptimized
            width={584}
          />
        </Link>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d7e2e3] bg-white text-[#005a9c] shadow-sm"
          onClick={() => setMobileMenuOpen((value) => !value)}
          type="button"
        >
          {mobileMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div className="relative mx-auto hidden min-h-[171px] w-full max-w-[2048px] items-center justify-center px-5 py-4 lg:flex">
        <Link
          className="focus-ring legacy-why-button absolute left-[78px] top-[40px] hidden rounded-[4px] bg-[#005a9c] px-[36px] py-[13px] text-[18px] leading-none text-white lg:inline-flex"
          href="/why-choose-us"
        >
          Why Choose Us?
        </Link>

        <Link className="focus-ring block" href="/" aria-label="Audiology Associates of Westchester home">
          <Image
            alt="Audiology Associates of Westchester logo"
            className="h-auto w-[360px] max-w-[78vw] md:w-[575px] lg:w-[700px]"
            height={120}
            priority
            sizes="(max-width: 767px) 78vw, (max-width: 1023px) 575px, 700px"
            src="/assets/audiology-associates-logo.png"
            unoptimized
            width={584}
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
              Y
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

      <nav aria-label="Primary navigation" className="legacy-primary-nav relative hidden bg-[#005a9c] text-white lg:block">
        <div className="mx-auto max-w-[1760px] px-2">
          <ul className="flex flex-nowrap items-stretch justify-center">
            <li className="flex">
              <Link className={navItemClass} href="/" onClick={() => dismissDropdown()}>
                HOME
              </Link>
            </li>
            {navGroups.map((group) => (
              <Fragment key={group.label}>
              <li
                className={`legacy-nav-item flex ${group.label === "HEARING AIDS" ? "" : "relative"}`}
                data-open={openMenu === group.label ? "true" : undefined}
                onFocus={() => openDropdown(group.label)}
                onMouseEnter={() => openDropdown(group.label)}
                onMouseLeave={() => {
                  closeDropdown();
                  setDismissedMenu(null);
                }}
              >
                <div className="legacy-nav-trigger flex h-full items-stretch">
                  {group.href ? (
                    <Link
                      className={navItemClass}
                      href={group.href}
                      onClick={() => dismissDropdown(group.label)}
                    >
                      {group.label}
                      <ChevronDown size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <button
                      className={`${navItemClass} cursor-default`}
                      onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
                      type="button"
                    >
                      {group.label}
                      <ChevronDown size={16} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {group.label === "HEARING AIDS" ? (
                  <div className="legacy-dropdown legacy-hearing-aids-mega absolute left-1/2 top-full z-50 hidden w-[min(1760px,calc(100vw-32px))] -translate-x-1/2 bg-[#f7fbfd] p-[22px] text-black shadow-lg">
                    <div className="grid gap-x-[54px] gap-y-[48px] lg:grid-cols-3">
                      {productMenuCards.map((product) => (
                        <Link
                          className="focus-ring grid min-h-[130px] grid-cols-[86px_1fr] items-center gap-[28px] bg-[#dbe9f3] px-[20px] py-[10px] text-black transition hover:bg-[#c8deee]"
                          href={product.href}
                          key={product.href}
                          onClick={() => dismissDropdown(group.label)}
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
                          onClick={() => dismissDropdown(group.label)}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="legacy-dropdown absolute left-0 top-full z-50 hidden min-w-[280px] bg-[#005a9c] text-white shadow-lg">
                    {group.links.map(([label, href]) =>
                      group.label === "ABOUT US" && href === "/meet-the-team" ? (
                        <div className="legacy-submenu-item relative border-b border-white/55 last:border-b-0" key={href}>
                          <Link
                            className="focus-ring legacy-primary-nav-link flex whitespace-nowrap px-[28px] py-[17px] hover:bg-[#005a9c]"
                            href={href}
                            onClick={() => dismissDropdown(group.label)}
                          >
                            <span>{label}</span>
                            <ChevronDown className="-rotate-90" size={16} aria-hidden="true" />
                          </Link>
                          <div className="legacy-submenu absolute left-full top-0 z-50 hidden min-w-[360px] bg-[#005a9c] text-white shadow-lg">
                            {providerProfiles.map((provider) => (
                              <Link
                                className="focus-ring legacy-primary-nav-link block whitespace-nowrap border-b border-white/55 px-[28px] py-[17px] last:border-b-0 hover:bg-[#005a9c]"
                                href={providerPath(provider)}
                                key={provider.slug}
                                onClick={() => dismissDropdown(group.label)}
                              >
                                {provider.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : group.label === "HOW WE CAN HELP" && href === tinnitusRootPath ? (
                        <div className="legacy-submenu-item relative border-b border-white/55 last:border-b-0" key={href}>
                          <Link
                            className="focus-ring legacy-primary-nav-link flex whitespace-nowrap px-[28px] py-[17px] hover:bg-[#005a9c]"
                            href={href}
                            onClick={() => dismissDropdown(group.label)}
                          >
                            <span>{label}</span>
                            <ChevronDown className="-rotate-90" size={16} aria-hidden="true" />
                          </Link>
                          <div className="legacy-submenu absolute left-full top-0 z-50 hidden min-w-[370px] bg-[#005a9c] text-white shadow-lg">
                            <Link
                              className="focus-ring legacy-primary-nav-link block whitespace-nowrap border-b border-white/55 px-[28px] py-[17px] hover:bg-[#005a9c]"
                              href={tinnitusRootPath}
                              onClick={() => dismissDropdown(group.label)}
                            >
                              TINNITUS KNOWLEDGE HUB
                            </Link>
                            {tinnitusPages.map((topic) => (
                              <Link
                                className="focus-ring legacy-primary-nav-link block whitespace-nowrap border-b border-white/55 px-[28px] py-[17px] last:border-b-0 hover:bg-[#005a9c]"
                                href={tinnitusPath(topic.slug)}
                                key={topic.slug}
                                onClick={() => dismissDropdown(group.label)}
                              >
                                {topic.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          className="focus-ring legacy-primary-nav-link block whitespace-nowrap border-b border-white/55 px-[28px] py-[17px] last:border-b-0 hover:bg-[#005a9c]"
                          href={href}
                          key={href}
                          onClick={() => dismissDropdown(group.label)}
                        >
                          {label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </li>
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>

      <div
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-[60] lg:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        id="mobile-navigation"
        inert={!mobileMenuOpen}
      >
        <button
          aria-label="Close menu backdrop"
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenuOpen(false)}
          type="button"
        />
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-[420px] overflow-hidden bg-[#f7fbfd] shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#d7e2e3] px-5 py-4">
            <Link className="focus-ring block" href="/" aria-label="Audiology Associates of Westchester home">
              <Image
                alt="Audiology Associates of Westchester logo"
                className="h-auto w-[210px] max-w-[58vw]"
                height={120}
                sizes="58vw"
                src="/assets/audiology-associates-logo.png"
                unoptimized
                width={584}
              />
            </Link>
            <button
              aria-label="Close menu"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e2e3] bg-white text-[#005a9c]"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <div className="max-h-[calc(100dvh-81px)] overflow-y-auto px-5 py-5">
            <div className="space-y-3">
              <Link
                className="block rounded-2xl border border-[#d5e7f4] bg-white px-4 py-4 text-[17px] font-black uppercase tracking-[0.08em] text-[#003f6f]"
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navGroups.map((group) => {
                const isOpen = mobileOpenGroup === group.label;
                return (
                  <div className="overflow-hidden rounded-2xl border border-[#d5e7f4] bg-white" key={group.label}>
                    <div className="flex items-stretch">
                      {group.href ? (
                        <Link
                          className="flex-1 px-4 py-4 text-[17px] font-black uppercase tracking-[0.08em] text-[#003f6f]"
                          href={group.href}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {group.label}
                        </Link>
                      ) : (
                        <div className="flex-1 px-4 py-4 text-[17px] font-black uppercase tracking-[0.08em] text-[#003f6f]">
                          {group.label}
                        </div>
                      )}
                      <button
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${group.label}`}
                        className="flex w-14 items-center justify-center border-l border-[#d5e7f4] text-[#005a9c]"
                        onClick={() => setMobileOpenGroup(isOpen ? null : group.label)}
                        type="button"
                      >
                        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} size={18} aria-hidden="true" />
                      </button>
                    </div>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className="border-t border-[#d5e7f4] px-4 py-3">
                          {group.href ? (
                            <Link
                              className="mb-3 block rounded-xl bg-[#eaf4fb] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#003f6f]"
                              href={group.href}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View {group.label}
                            </Link>
                          ) : null}
                          <div className="space-y-2">
                            {group.links.map(([label, href]) => (
                              <Link
                                className="block rounded-xl px-3 py-3 text-[16px] font-bold leading-6 text-[#003f6f] hover:bg-[#f7fbfd]"
                                href={href}
                                key={href}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3">
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-[#005a9c] px-5 py-4 text-center text-[16px] font-black !text-white"
                data-track="phone-header-mobile"
                href={primaryPhoneHref}
              >
                Call {primaryPhone}
              </a>
              <ZocdocButton
                className="!w-full !justify-center !rounded-2xl !bg-[#005a9c] !px-5 !py-4 !text-[16px] !font-black !text-white border border-[#005a9c] shadow-none"
                label="Request Appointment"
                trackingId="appointment-mobile-menu"
              />
              <Link
                className="focus-ring inline-flex items-center justify-center rounded-2xl border border-[#005a9c] px-5 py-4 text-[16px] font-black text-[#005a9c]"
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
