import Image from "next/image";
import Link from "next/link";
import { locations, primaryPhone, siteName } from "@/lib/site";

const googleReviewsUrl =
  "https://www.google.com/maps/place/Audiology+Associates+of+Westchester/@40.9796102,-73.7452172,17z/data=!4m18!1m9!3m8!1s0x89c2941f220a4edf:0x3781801f76f64a38!2sAudiology+Associates+of+Westchester!8m2!3d40.9796062!4d-73.7426423!9m1!1b1!16s%2Fg%2F1thvtmkc!3m7!1s0x89c2941f220a4edf:0x3781801f76f64a38!8m2!3d40.9796062!4d-73.7426423!9m1!1b1!16s%2Fg%2F1thvtmkc?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";

const harrisonGoogleMapsUrl =
  "https://www.google.com/maps/place/Audiology+Associates+of+Westchester/@40.9796102,-73.7452172,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2941f220a4edf:0x3781801f76f64a38!8m2!3d40.9796062!4d-73.7426423!16s%2Fg%2F1thvtmkc?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";

const somersGoogleMapsUrl =
  "https://google.com/maps?ll=41.326271,-73.688044&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=16978045113785245584";

export function Footer() {
  const harrison = locations.find((location) => location.path === "/harrison-ny");
  const somers = locations.find((location) => location.path === "/Somers-NY");

  return (
    <footer className="legacy-footer border-t border-[#d7e2e3] bg-white text-center text-black">
      <div className="mx-auto max-w-[1500px] px-5 pb-[26px] pt-[40px]">
        <div className="mx-auto grid max-w-[1350px] items-start gap-8 md:grid-cols-[1fr_0.9fr_1fr]">
          {harrison ? (
            <address className="not-italic md:text-left">
              <Link className="focus-ring text-[26px] font-normal leading-tight text-black hover:underline" href={harrison.path}>
                Harrison, NY Location
              </Link>
              <p className="mt-2 text-[21px] leading-[1.25]">{harrison.address}</p>
              <p className="text-[21px] leading-[1.25]">
                Phone:{" "}
                <a className="focus-ring text-[#005a9c] underline" href={harrison.phoneHref}>
                  {harrison.phone}
                </a>
              </p>
              <a
                className="focus-ring mt-5 inline-flex rounded-full border-2 border-[#005a9c] px-7 py-3 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                href={harrisonGoogleMapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get Directions
              </a>
            </address>
          ) : null}

          <div className="flex flex-col items-center">
            <a
              aria-label="Read Audiology Associates of Westchester Google reviews"
              className="focus-ring inline-flex"
              href={googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="Google verified customer reviews"
                className="h-auto w-[320px] max-w-full"
                height={446}
                src="/google-reviews.webp"
                width={594}
              />
            </a>
          </div>

          {somers ? (
            <address className="not-italic md:text-right">
              <Link className="focus-ring text-[26px] font-normal leading-tight text-black hover:underline" href={somers.path}>
                Somers, NY Location
              </Link>
              <p className="mt-2 text-[21px] leading-[1.25]">{somers.address}</p>
              <p className="text-[21px] leading-[1.25]">
                Phone:{" "}
                <a className="focus-ring text-[#005a9c] underline" href={somers.phoneHref}>
                  {somers.phone}
                </a>
              </p>
              <a
                className="focus-ring mt-5 inline-flex rounded-full border-2 border-[#005a9c] px-7 py-3 text-[16px] font-bold uppercase tracking-[0.04em] text-[#005a9c] hover:bg-[#005a9c] hover:text-white"
                href={somersGoogleMapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get Directions
              </a>
            </address>
          ) : null}
        </div>

        <nav aria-label="Helpful links" className="mt-[34px] flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] leading-tight">
          <Link className="focus-ring text-[#005a9c] underline" href="/overview">
            Site Overview
          </Link>
          <Link className="focus-ring text-[#005a9c] underline" href="/hearing-aid-referral-program">
            Hearing Aid Referral Program
          </Link>
          <Link className="focus-ring text-[#005a9c] underline" href="/hearing-tips">
            Hearing Tips
          </Link>
          <Link className="focus-ring text-[#005a9c] underline" href="/privacy">
            Privacy
          </Link>
        </nav>

        <p className="mt-[42px] text-[19px] leading-tight text-[#333]">
          © 2026 {siteName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
