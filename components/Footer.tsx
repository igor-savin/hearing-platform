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
    <footer className="border-t border-[#d7e2e3] bg-white text-center text-[#253239]">
      <div className="mx-auto max-w-[1060px] px-5 py-10">
        <div className="mb-5 flex justify-center gap-1">
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

        <p className="mb-5 text-[18px] font-bold uppercase tracking-[0.06em]">{siteName}</p>

        <div className="mx-auto grid max-w-[900px] gap-5 text-[15px] md:grid-cols-2">
          {harrison ? (
            <address className="not-italic">
              <Link className="focus-ring font-bold text-[#005a9c] underline" href={harrison.path}>
                Harrison, NY Location
              </Link>
              <p className="mt-1">{harrison.address}</p>
            </address>
          ) : null}
          {somers ? (
            <address className="not-italic">
              <Link className="focus-ring font-bold text-[#005a9c] underline" href={somers.path}>
                Somers, NY Location
              </Link>
              <p className="mt-1">
                {somers.address} | Phone: {somers.phone}
              </p>
            </address>
          ) : null}
        </div>

        <div className="mt-7 space-y-2 text-[13px] text-[#4a555b]">
          <Link className="focus-ring font-bold text-[#005a9c] underline" href="/privacy">
            Privacy Policy
          </Link>
          <p>
            <Link className="focus-ring font-bold text-[#005a9c] underline" href="https://hearstdms.com">
              WEBSITE DESIGN
            </Link>{" "}
            BY{" "}
            <Link className="focus-ring font-bold text-[#005a9c] underline" href="https://hearstmediaservices.com">
              HEARST MEDIA SERVICES
            </Link>
            , ALL RIGHTS RESERVED
          </p>
          <p>Call Us Today {primaryPhone}</p>
        </div>
      </div>
    </footer>
  );
}
