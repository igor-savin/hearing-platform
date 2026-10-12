import Link from "next/link";
import { ReviewCount, ReviewOfficeSplit, ReviewRating } from "@/components/ReviewStats";
import { helpServices, helpServicePath } from "@/lib/howWeCanHelp";
import { productBrands, brandPath } from "@/lib/products";
import { googleReviewsUrl } from "@/lib/reviews";
import { practiceFactsMistakes, practiceFactsNextReview, practiceFactsReviewed } from "@/lib/practiceFacts";
import { locations, type SitePage } from "@/lib/site";
import { providerPath, providerProfiles } from "@/lib/team";
import { baseUrl, siteName, zocdocUrl } from "@/lib/siteBasics";

// Facts only. See the rules at the top of lib/practiceFacts.ts.

const h2 = "mt-10 text-[28px] font-black leading-tight text-[#003f6f] max-md:text-[24px]";
const link = "focus-ring text-[#005a9c] underline hover:text-[#003f6f]";

function graduateLine(credentials: string[]) {
  const entry = credentials.find((c) => c.startsWith("Graduate:"));
  return entry ? entry.replace(/^Graduate:\s*/, "") : null;
}

export function PracticeFactsPage({ page }: { page: SitePage }) {
  const offices = locations.filter((l) => l.type === "office");
  const services = helpServices.filter((s) => !s.hideFromMenu && s.slug !== "your-hearing");

  return (
    <>
      <section className="bg-[#003f6f] py-14 text-white">
        <div className="mx-auto max-w-[1000px] px-6">
          <h1 className="text-[44px] font-black leading-tight max-md:text-[34px]">{page.h1}</h1>
          <p className="mt-4 text-[17px] text-white/85">
            Last reviewed {practiceFactsReviewed}. Next review {practiceFactsNextReview}.
          </p>
        </div>
      </section>

      <article className="bg-white py-12 text-[18px] leading-8 text-[#222]">
        <div className="mx-auto max-w-[1000px] px-6">
          <p>{page.body[0]}</p>

          <h2 className={h2}>Who we are</h2>
          <p className="mt-3">
            {siteName} is an independent audiology practice in Westchester County, New York. We have two offices, in
            Harrison and Somers. Our clinicians are doctors of audiology. We are not tied to one hearing aid brand.
          </p>
          <p className="mt-3">
            Our sister practice is{" "}
            <a className={link} href="https://www.calhearing.com/" rel="noopener noreferrer" target="_blank">
              California Hearing Center
            </a>
            , with offices in San Mateo and San Carlos, California.
          </p>

          <h2 className={h2}>Our offices</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[17px]">
              <thead>
                <tr>
                  <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3" scope="col">
                    <span className="sr-only">Detail</span>
                  </th>
                  {offices.map((o) => (
                    <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3" key={o.path} scope="col">
                      {o.city}, {o.state}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3 align-top" scope="row">Address</th>
                  {offices.map((o) => (
                    <td className="border border-[#d9dde3] p-3 align-top" key={o.path}>{o.address}</td>
                  ))}
                </tr>
                <tr>
                  <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3 align-top" scope="row">Phone</th>
                  {offices.map((o) => (
                    <td className="border border-[#d9dde3] p-3 align-top" key={o.path}>
                      <a className={link} href={o.phoneHref}>{o.phone}</a>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3 align-top" scope="row">Hours</th>
                  {offices.map((o) => (
                    <td className="border border-[#d9dde3] p-3 align-top" key={o.path}>
                      {o.hours.map((line) => (
                        <span className="block" key={line}>{line}</span>
                      ))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="border border-[#d9dde3] bg-[#f4f6f8] p-3 align-top" scope="row">Office page</th>
                  {offices.map((o) => (
                    <td className="border border-[#d9dde3] p-3 align-top" key={o.path}>
                      <Link className={link} href={o.path}>{o.city} office details</Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            You can also book online through{" "}
            <a className={link} href={zocdocUrl} rel="noopener noreferrer" target="_blank">Zocdoc</a>.
          </p>

          <h2 className={h2}>Our team</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {providerProfiles.map((p) => {
              const grad = graduateLine(p.credentials);
              return (
                <li key={p.slug}>
                  <Link className={link} href={providerPath(p)}><strong>{p.name}</strong></Link>. {p.role}.
                  {grad ? ` ${grad}.` : ""}
                </li>
              );
            })}
          </ul>
          <p className="mt-3">
            Each person has a profile page. See <Link className={link} href="/meet-the-team">Meet the Team</Link>.
          </p>

          <h2 className={h2}>What we do</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className={link} href={helpServicePath(s)}><strong>{s.title}.</strong></Link> {s.shortDescription}
              </li>
            ))}
          </ul>
          <p className="mt-3">
            The full list is on <Link className={link} href="/how-we-can-help">How We Can Help</Link>.
          </p>

          <h2 className={h2}>Hearing aid brands</h2>
          <p className="mt-3">
            We fit hearing aids from several manufacturers:{" "}
            {productBrands.map((b, i) => (
              <span key={b.slug}>
                <Link className={link} href={brandPath(b.slug)}>{b.name}</Link>
                {i < productBrands.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>

          <h2 className={h2}>Reviews</h2>
          <p className="mt-3">
            Our Google rating is <ReviewRating /> across <ReviewCount /> reviews (<ReviewOfficeSplit />). Patients wrote
            these reviews on Google. We did not collect or host them on this site. You can read them on{" "}
            <a className={link} href={googleReviewsUrl} rel="noopener noreferrer" target="_blank">our Google listing</a>
            , and a selection is on our <Link className={link} href="/reviews">reviews page</Link>.
          </p>

          <h2 className={h2}>Common mistakes about us</h2>
          <div className="mt-4 space-y-4">
            {practiceFactsMistakes.map((m) => (
              <div key={m.q}>
                <p><strong>{m.q}</strong></p>
                <p>{m.a}</p>
              </div>
            ))}
          </div>

          <h2 className={h2}>Where to check these facts</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Google Business Profile, for hours and reviews.</li>
            <li>
              <a className={link} href="https://www.facebook.com/AAofW" rel="noopener noreferrer" target="_blank">Facebook: Audiology Associates of Westchester</a>.
            </li>
            <li>
              <a className={link} href="https://www.instagram.com/westchesteraudiology/" rel="noopener noreferrer" target="_blank">Instagram: Audiology Associates of Westchester</a>.
            </li>
            <li>
              <a className={link} href="https://www.threads.com/@westchesteraudiology" rel="noopener noreferrer" target="_blank">Threads: Audiology Associates of Westchester</a>.
            </li>
            <li>
              Site index for machines: <a className={link} href="/llms.txt">/llms.txt</a> and{" "}
              <a className={link} href={`${baseUrl}/sitemap.xml`}>/sitemap.xml</a>.
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
