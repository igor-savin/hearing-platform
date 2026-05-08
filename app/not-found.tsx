import Link from "next/link";

export default function NotFound() {
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
      </div>
    </div>
  );
}
