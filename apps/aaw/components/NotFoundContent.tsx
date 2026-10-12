import Link from "next/link";

// Shared by the root not-found boundary and the one inside the catch-all
// segment. Both need identical output; the second exists so the 404 renders
// inside the root layout (header, nav, footer) as server HTML instead of
// Next's bare __next_error__ client shell.

const helpfulLinks: Array<{ label: string; href: string }> = [
  { label: "Hearing tests", href: "/hearing-testing" },
  { label: "Hearing aids", href: "/hearing-aids-101" },
  { label: "Hearing aid brands", href: "/hearing-aids-brands" },
  { label: "Tinnitus therapy", href: "/tinnitus-therapy" },
  { label: "Meet the team", href: "/meet-the-team" },
  { label: "Harrison, NY office", href: "/harrison-ny" },
  { label: "Somers, NY office", href: "/Somers-NY" },
  { label: "Audiology blog", href: "/blog" }
];

export function NotFoundContent() {
  return (
    <div className="container section">
      <div className="max-w-2xl rounded-lg border border-[var(--line)] bg-white p-8 medical-shadow">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
          Page not found
        </p>
        <h1 className="mt-3 text-3xl font-black text-[var(--brand-dark)]">
          We could not find that page.
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          The page may have moved, or the link may be incomplete. You can return home or contact
          Audiology Associates of Westchester for help scheduling care.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="focus-ring rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/">
            Return home
          </Link>
          <Link
            className="focus-ring rounded-md border border-[var(--brand)] px-5 py-3 font-bold text-[var(--brand-dark)]"
            href="/contact-us"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-8 border-t border-[var(--line)] pt-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
            Popular pages
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="focus-ring font-semibold text-[var(--brand-dark)] underline underline-offset-4"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
