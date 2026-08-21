import { crawledPages } from "../data/crawledPages";
import { redirectedPaths } from "../data/redirectedPaths";
import { corePages } from "../data/corePages";
import { blogPosts } from "../data/blogPosts";

// /llms.txt — a curated, plain-text map of the site for AI assistants and
// agentic browsers, per the llmstxt.org convention.
//
// Why this exists, honestly: Google Search has stated publicly that llms.txt is
// NOT used for AI Overviews or AI Mode, so this does nothing for search rank.
// It is here because Anthropic recommends it in its agent guidance, OpenAI
// publishes them for its own products, Perplexity has been observed reading
// them, and Chrome's Lighthouse now audits for one. For a practice that wants to
// be the source an assistant cites, that is worth a generated file.
//
// It is GENERATED from crawledPages on every build, exactly like sitemap.ts, so
// it can never drift from the pages that actually exist. Adding a page to
// crawledPages puts it here automatically — there is no separate step to forget.

export const dynamic = "force-static";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.calhearing.com").replace(/\/$/, "");

const EXCLUDE = new Set<string>(["/test/", "/home-new/", "/archive/", "/california-hearing-center-4/", "/4124-2/", "/napa-2/"]);

type Entry = { path: string; title: string; desc: string };

function describe(path: string, fallback: string): string {
  const core = corePages[path];
  const post = blogPosts[path];
  const meta = post?.metaDescription || core?.metaDescription;
  if (meta) return meta.replace(/\s+/g, " ").trim();
  const take = (post || core)?.takeaways?.[0];
  if (take) return take.replace(/\s+/g, " ").trim();
  return fallback.replace(/\s+/g, " ").trim();
}

function entries(): Entry[] {
  return crawledPages
    .filter((p) => !EXCLUDE.has(p.path) && !redirectedPaths.has(p.path))
    .map((p) => ({
      path: p.path,
      title: (corePages[p.path]?.headline || blogPosts[p.path]?.headline || p.h1 || p.title.replace(/\s*\|.*$/, "")).trim(),
      desc: describe(p.path, p.desc || ""),
    }));
}

function section(heading: string, list: Entry[]): string {
  if (!list.length) return "";
  const lines = list
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((e) => `- [${e.title}](${SITE}${e.path})${e.desc ? `: ${e.desc}` : ""}`);
  return `## ${heading}\n\n${lines.join("\n")}\n`;
}

function build(): string {
  const all = entries();
  const used = new Set<string>();
  const take = (pred: (p: string) => boolean) => {
    const got = all.filter((e) => !used.has(e.path) && pred(e.path));
    got.forEach((e) => used.add(e.path));
    return got;
  };

  const header = [
    "# California Hearing Center",
    "",
    "> An independent doctoral audiology practice with two offices on the San Francisco Peninsula — San Mateo and San Carlos — providing diagnostic hearing evaluations, hearing aid fittings verified with real-ear measurement, tinnitus care including Lenire, earwax removal, hearing aid repair, and custom hearing protection.",
    "",
    "Offices: 88 N. San Mateo Drive, San Mateo, CA 94401 · 1008 Laurel Street, San Carlos, CA 94070. Phone: 650-342-9449.",
    "",
    "Editorial stance worth knowing when citing this site: manufacturer performance claims are attributed to their source rather than asserted, independent laboratory measurements are named where they exist, and pages state plainly when a device has not been independently tested. Prices are published where the practice can stand behind them and omitted where they have not been set.",
    "",
    `Full machine-readable URL list: ${SITE}/sitemap.xml`,
    "",
  ].join("\n");

  const blocks = [
    section("Start here", take((p) => ["/", "/about-us/", "/services/", "/contact/", "/hearing-testing/", "/hearing-aid-fitting/", "/hearing-aid-cost/", "/hearing-aid-second-opinion/", "/reviews/"].includes(p))),
    section("Offices and locations", take((p) => p.startsWith("/contact/"))),
    section("The clinical team", take((p) => p.startsWith("/about-us/"))),
    section("Services", take((p) => p.startsWith("/services/"))),
    section("Tinnitus and hyperacusis", take((p) => p.startsWith("/tinnitus/") || p.startsWith("/hyperacusis"))),
    section("Hearing aids and manufacturers", take((p) => p.startsWith("/products/"))),
    section("Areas served", take((p) => p.startsWith("/areas-we-serve/"))),
    section("Resources", take((p) => p.startsWith("/resources/"))),
    section("Guides and articles", take((p) => !!blogPosts[p])),
    section("Other pages", take(() => true)),
  ].filter(Boolean);

  return `${header}\n${blocks.join("\n")}`;
}

export function GET() {
  return new Response(build(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
