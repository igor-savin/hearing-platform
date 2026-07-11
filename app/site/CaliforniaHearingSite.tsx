import type { SitePage } from "../data/crawledPages";
import { crawledPages } from "../data/crawledPages";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/kira-savin/" },
  { label: "Services", href: "/services/" },
  { label: "Hearing Aids", href: "/products/hearing-aids/" },
  { label: "Resources", href: "/resources/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Contact", href: "/contact/" },
];

const team = ["Kira Savin", "Lais Ama", "Giana Hatem", "Jennifer Ratner", "Darcy Benson", "Emily McMahan", "Jarna Kothari"];

const services = [
  ["Hearing Testing", "/hearing-testing/", "Thorough evaluations built around your lifestyle, communication goals, and listening environments."],
  ["Hearing Aid Fitting", "/hearing-aid-fitting/", "Personalized fittings, real-ear verification, adjustments, and ongoing support."],
  ["Tinnitus Therapy", "/services/tinnitus-therapy/", "Evidence-based relief plans for ringing, buzzing, sleep disruption, and sound sensitivity."],
  ["Hearing Protection", "/services/hearing-protection/", "Custom protection for musicians, law enforcement, hunters, work, travel, and daily life."],
  ["Hearing Aid Repair", "/services/hearing-aid-repair/", "Cleaning, troubleshooting, repairs, and fine-tuning for better performance."],
  ["Hyperacusis", "/hyperacusis/", "Care for sound sensitivity with careful evaluation, counseling, and gradual sound strategies."],
];

const products = [
  ["Oticon Intent", "BrainHearing™ technology for natural, effortless hearing in noise.", "/assets/oticon.webp"],
  ["Phonak Lyric", "Invisible extended-wear hearing with total discretion.", "/assets/phonak.webp"],
  ["Widex Allure", "Natural clarity from a family-owned innovator.", "/assets/widex.webp"],
  ["ReSound Vivia", "Award-winning connectivity and refined everyday sound.", "/assets/resound.webp"],
  ["Starkey Edge AI", "American innovation with AI-powered adaptive listening.", "/assets/starkey.webp"],
  ["Signia IX", "Rechargeable hearing aids with over a century of engineering.", "/assets/signia.webp"],
];

const tinnitus = [
  ["What is Tinnitus?", "/tinnitus/what-is-tinnitus/"],
  ["Causes & Triggers", "/tinnitus/causes/"],
  ["Treatment Options", "/tinnitus/"],
  ["Sound Therapy", "/tinnitus/sound-therapy/"],
  ["Pulsatile Tinnitus", "/tinnitus/pulsatile/"],
  ["Sleep Strategies", "/tinnitus/sleep-strategies/"],
];

const featuredRoutes = [
  "/", "/services/", "/products/hearing-aids/", "/contact/", "/contact/san-carlos/", "/contact/san-mateo/",
  "/areas-we-serve/", "/tinnitus/", "/resources/", "/reviews/",
];

function titleFromPath(path: string) {
  return path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "California Hearing Center";
}

function getPageKind(page?: SitePage) {
  const path = page?.path || "/";
  if (path.includes("/areas-we-serve/")) return "area";
  if (path.includes("/tinnitus/") || path.includes("/hyperacusis/")) return "tinnitus";
  if (path.includes("/products/")) return "product";
  if (path.includes("/about-us/")) return "team";
  if (path.includes("/the-blog/") || path.includes("/blog/")) return "resource";
  if (path.includes("/contact/")) return "contact";
  if (path.includes("/services/") || path.includes("hearing")) return "service";
  return "general";
}

function InnerPage({ page }: { page: SitePage }) {
  const kind = getPageKind(page);
  const pageTitle = page.h1 || titleFromPath(page.path);
  const related = crawledPages
    .filter((item) => item.path !== page.path && getPageKind(item) === kind)
    .slice(0, 8);

  return (
    <>
      <section className={`subhero subhero-${kind}`}>
        <div className="container">
          <p className="eyebrow">California Hearing Center</p>
          <h1>{pageTitle}</h1>
          <p>{page.desc || "Patient-centered audiology care for San Mateo, San Carlos, and the greater Bay Area."}</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact/">Request an Appointment</a>
            <a className="button ghost" href="tel:6503429449">650-342-9449</a>
          </div>
        </div>
      </section>

      <section className="content-grid container">
        <article className="copy-card">
          <p className="section-kicker">{kind === "area" ? "Local care, close by" : "Personalized hearing care"}</p>
          <h2>{pageTitle}</h2>
          {(page.paragraphs.length ? page.paragraphs : [
            "California Hearing Center helps patients turn life up through better hearing. Our team combines clinical expertise, thoughtful listening, and modern hearing technology to make care feel personal instead of transactional.",
            "Whether you need a hearing test, hearing aids, tinnitus support, hearing protection, or help choosing the right next step, we focus on what matters most in your daily life.",
          ]).slice(0, 3).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="feature-list">
            <span>Comprehensive evaluations</span>
            <span>Doctor-level audiology care</span>
            <span>San Mateo & San Carlos offices</span>
            <span>Modern hearing technology</span>
          </div>
        </article>
        <aside className="sidebar-card">
          <h3>Set up your FREE hearing consultation</h3>
          <p>Tell us what you’re noticing. We’ll help you understand your options and build a plan around your life.</p>
          <a className="button primary wide" href="/contact/">Request an appointment</a>
          <hr />
          <strong>San Mateo – Main Office</strong>
          <p>88 N. San Mateo Drive<br />San Mateo, CA 94401</p>
          <strong>San Carlos</strong>
          <p>1008 Laurel Street<br />San Carlos, CA 94070</p>
        </aside>
      </section>

      <section className="container route-index">
        <p className="section-kicker">Explore related pages</p>
        <div className="pill-grid">
          {related.map((item) => <a key={item.path} href={item.path}>{item.h1 || titleFromPath(item.path)}</a>)}
        </div>
      </section>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-panel">
          <p className="eyebrow">San Mateo & San Carlos Audiologists</p>
          <h1>Turn Up Your Life with Better Hearing</h1>
          <p>For over 30 years, California Hearing Center has helped people reconnect with family, restaurants, work, music, and the everyday moments that make life feel full.</p>
          <div className="hero-actions">
            <a className="button primary" href="/contact/">Request an Appointment</a>
            <a className="button ghost" href="/services/">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="intro container">
        <div>
          <p className="section-kicker">Combining expertise with personal care</p>
          <h2>We listen because we care.</h2>
        </div>
        <p>Helping people hear starts with knowing how to listen. We take time to understand your needs, your routines, and the hearing moments you most want back.</p>
      </section>

      <section className="service-band">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h2>Hearing care for every part of life</h2>
          <div className="cards">
            {services.map(([title, href, text]) => (
              <a className="service-card" href={href} key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="split container">
        <div className="image-card doctor" />
        <div>
          <p className="section-kicker">Person-centered care</p>
          <h2>We’re all ears</h2>
          <p>The Inspired by Ida label recognizes clinics dedicated to person-centered care. California Hearing Center is proud to pair advanced audiology with a warm, collaborative approach.</p>
          <div className="quote">“I feel much more comfortable at work meetings and restaurants — I’m able to hear over the background noise.”<strong>Bob F.</strong></div>
        </div>
      </section>

      <section className="products container">
        <p className="section-kicker">Hearing aids</p>
        <h2>Leading technology, carefully fit</h2>
        <div className="product-grid">
          {products.map(([title, text, image]) => (
            <article className="product-card" key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tinnitus-hub">
        <div className="container">
          <p className="section-kicker">Tinnitus knowledge hub</p>
          <h2>Relief starts with understanding what you hear</h2>
          <div className="pill-grid">
            {tinnitus.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </div>
      </section>

      <section className="container route-index">
        <p className="section-kicker">Site inventory</p>
        <h2>Core pages copied into the new stack</h2>
        <div className="pill-grid">
          {featuredRoutes.map((path) => <a href={path} key={path}>{titleFromPath(path)}</a>)}
        </div>
      </section>
    </>
  );
}

export function CaliforniaHearingSite({ page }: { page?: SitePage }) {
  return (
    <main>
      <div className="topbar">
        <a href="https://www.google.com/maps/search/?api=1&query=1008+Laurel+Street+San+Carlos+CA">SAN CARLOS: 1008 Laurel Street</a>
        <a href="https://www.google.com/maps/search/?api=1&query=88+N.+San+Mateo+Drive+San+Mateo+CA">SAN MATEO: 88 N. San Mateo Drive</a>
        <a href="tel:6503429449">650-342-9449</a>
      </div>
      <header className="site-header">
        <a className="logo" href="/">
          <img src="/assets/logo.png" alt="California Hearing Center" />
        </a>
        <nav>
          {nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="schedule" href="/contact/">Schedule Now</a>
      </header>
      {page ? <InnerPage page={page} /> : <HomePage />}
      <section className="appointment">
        <div>
          <p className="section-kicker">Set up your free hearing consultation</p>
          <h2>Turn life up with better hearing.</h2>
        </div>
        <a className="button primary" href="/contact/">Request an appointment</a>
      </section>
      <footer>
        <div className="footer-grid">
          <div>
            <img src="/assets/logo-alt.png" alt="California Hearing Center" />
            <p>California Hearing Center and Audiology Services, Inc.</p>
          </div>
          <div>
            <strong>About Us</strong>
            {team.slice(0, 5).map((person) => <a href={`/about-us/${person.toLowerCase().replaceAll(" ", "-")}/`} key={person}>{person}</a>)}
          </div>
          <div>
            <strong>Locations</strong>
            <a href="/contact/san-mateo/">San Mateo – Main Office</a>
            <a href="/contact/san-carlos/">San Carlos</a>
            <a href="/areas-we-serve/">Service Areas</a>
          </div>
          <div>
            <strong>Care</strong>
            <a href="/services/">Services</a>
            <a href="/products/hearing-aids/">Hearing Aids</a>
            <a href="/tinnitus/">Tinnitus Therapy</a>
            <a href="/reviews/">Reviews</a>
          </div>
        </div>
        <p className="copyright">© 2026 California Hearing Center and Audiology Services, Inc. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
