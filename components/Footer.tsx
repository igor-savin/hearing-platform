import Link from "next/link";
import { locations, primaryPhone, siteName } from "@/lib/site";

function SocialCircle({ label, href, children }: { label: string; href: string; children: string }) {
  return (
    <a
      aria-label={label}
      className="focus-ring legacy-footer-social inline-flex items-center justify-center rounded-full border-[5px] border-white text-[42px] font-black leading-none text-white"
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
      <div className="mx-auto max-w-[1500px] px-5 pb-[18px] pt-[40px]">
        <p className="mb-[72px] text-[31px] font-normal uppercase leading-tight tracking-normal">{siteName}</p>

        <div className="mx-auto grid max-w-[1250px] gap-8 text-[20px] leading-tight md:grid-cols-2">
          {harrison ? (
            <address className="not-italic">
              <Link className="focus-ring text-[20px] font-bold text-white underline" href={harrison.path}>
                Harrison, NY Location
              </Link>
              <p className="mt-[8px] whitespace-nowrap text-[20px]">{harrison.address}</p>
            </address>
          ) : null}
          {somers ? (
            <address className="not-italic">
              <Link className="focus-ring text-[20px] font-bold text-white underline" href={somers.path}>
                Somers, NY Location
              </Link>
              <p className="mt-[8px] whitespace-nowrap text-[20px]">
                {somers.address} | Phone:{" "}
                <a className="focus-ring underline" href={somers.phoneHref}>
                  {somers.phone}
                </a>
              </p>
            </address>
          ) : null}
        </div>

        <div className="mt-[27px] flex justify-center gap-[7px]">
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
