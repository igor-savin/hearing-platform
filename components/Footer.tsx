import Link from "next/link";
import { Facebook, MapPin, Phone, Star } from "lucide-react";
import { locations, primaryPhone, primaryPhoneHref, services, siteName } from "@/lib/site";

export function Footer() {
  const officeLocations = locations.filter((location) => location.type === "office");

  return (
    <footer className="bg-[var(--brand-dark)] text-white">
      <div className="container section">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-black">{siteName}</p>
            <p className="mt-4 max-w-xl text-white/82">
              Audiology and hearing care for Westchester County and nearby communities, with
              patient-centered support for hearing testing, hearing aids, tinnitus, hearing
              protection, and repair.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 font-bold text-[var(--brand-dark)]"
                data-track="phone-footer"
                href={primaryPhoneHref}
              >
                <Phone size={18} aria-hidden="true" />
                {primaryPhone}
              </a>
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/45 px-4 py-3 font-bold"
                href="https://www.facebook.com/AAofW"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook size={18} aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.14em] text-[#f3c37a]">Locations</p>
            <div className="mt-4 space-y-4">
              {officeLocations.map((location) => (
                <address className="not-italic text-white/82" key={location.path}>
                  <Link className="focus-ring inline-flex items-center gap-2 font-bold text-white" href={location.path}>
                    <MapPin size={17} aria-hidden="true" />
                    {location.name}
                  </Link>
                  <p className="mt-1">{location.address}</p>
                  <a className="focus-ring mt-1 inline-block underline" href={location.phoneHref}>
                    {location.phone}
                  </a>
                </address>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.14em] text-[#f3c37a]">Services</p>
            <ul className="mt-4 space-y-2 text-white/82">
              {services.map((service) => (
                <li key={service.path}>
                  <Link className="focus-ring inline-flex items-center gap-2 hover:text-white" href={service.path}>
                    <Star size={14} aria-hidden="true" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-white/75">
              <Link className="focus-ring block underline" href="/privacy">
                Privacy Policy
              </Link>
              <p>Website design attribution preserved from live site: Hearst Media Services.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
