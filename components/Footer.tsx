import Link from "next/link";
import { locations, primaryPhone, siteName } from "@/lib/site";

function SocialCircle({ label, href, children }: { label: string; href: string; children: string }) {
  return (
    <a
      aria-label={label}
      className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#005a9c] text-sm font-black leading-none text-[#005a9c]"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const harrison = locations.find((location) => location.path === "/harrison-ny");
  const somers = locations.find((location) => location.path === "/Somers-NY");

  return (
    <footer className="legacy-footer border-t border-[#7da4c3] bg-[#005a9c] text-center text-white">
      <div className="mx-auto max-w-[1180px] px-5 pb-[17px] pt-[25px]">
        <p className="mb-[43px] text-[28px] font-normal uppercase leading-tight tracking-normal">{siteName}</p>

        <div className="mx-auto grid max-w-[1100px] gap-8 text-[20px] leading-tight md:grid-cols-2">
          {harrison ? (
            <address className="not-italic">
              <Link className="focus-ring font-bold text-white underline" href={harrison.path}>
                Harrison, NY Location
              </Link>
              <p className="mt-[7px]">{harrison.address}</p>
            </address>
          ) : null}
          {somers ? (
            <address className="not-italic">
              <Link className="focus-ring font-bold text-white underline" href={somers.path}>
                Somers, NY Location
              </Link>
              <p className="mt-[7px]">
                {somers.address} | Phone:{" "}
                <a className="focus-ring underline" href={somers.phoneHref}>
                  {somers.phone}
                </a>
              </p>
            </address>
          ) : null}
        </div>

        <div className="mt-[22px] flex justify-center gap-1">
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

        <div className="mt-[20px] space-y-[15px] text-[16px] leading-tight">
          <Link className="focus-ring text-white underline" href="/privacy">
            Privacy Policy
          </Link>
          <p>
            <Link className="focus-ring text-white underline" href="https://hearstdms.com">
              WEBSITE DESIGN
            </Link>{" "}
            BY{" "}
            <Link className="focus-ring text-white underline" href="https://hearstmediaservices.com">
              HEARST MEDIA SERVICES
            </Link>
            , ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
