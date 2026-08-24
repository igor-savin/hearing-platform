#!/usr/bin/env python3
"""Scaffold the five-page cluster for one product launch.

Writes the fragments with the required section skeleton, inserts the route
entries (the step whose omission 404s the page), adds the dates, and prints
what still has to be done by hand.

    python3 scripts/scaffold.py packs/calhearing.json \
        --brand signia --product signia-max --replaces signia-ix \
        --rival oticon/oticon-reveal --date 2026-08-24

Nothing is overwritten. Re-running is safe and reports what already exists.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from sitepack import SitePack, PackError  # noqa: E402

# The section headings each page must carry. Prose is the writer's job; the
# structure is the skill's, because the structure is what makes the page citable.
HUB_SECTIONS = [
    "What the technology actually is",
    "What {Vendor} claims — and who measured it",
    "What is genuinely confirmed",
    "The caveat nobody is printing",
    "What it cannot do yet",
    "Nobody has measured it — and what has been",
    "How it compares to the other flagships this season",
    "Verified to your prescription, not to the brochure",
    "Hear it for yourself",
]
UPGRADE_SECTIONS = [
    "What actually changed",
    "The numbers, and what stands behind them",
    "What {Old} still does better",
    "{Old} is not being discontinued",
    "Who should upgrade",
    "Who should not",
    "The thing that matters more than either",
    "Try them side by side",
]
COST_SECTIONS = [
    "Why there is no price yet",
    "What actually drives the number",
    "What should be included in the fee here",
    "Being early costs something",
    "What the research says about paying more",
    "Insurance, HSA and financing",
    "Bring us a quote",
]
RIVAL_SECTIONS = [
    "Two different bets on the same problem",
    "Connectivity, compared",
    "Styles, and who gets left out",
    "The claims, compared",
    "Neither has been independently measured",
    "Which we would suggest, and when",
    "What settles it is a demonstration and a verified fitting",
]
POST_SECTIONS = [
    "The idea, in one paragraph",
    "The claims, and where they come from",
    "What is actually confirmed",
    "The caveat nobody is printing",
    "What nobody knows yet",
    "The limitation most coverage leaves out",
    "Who should be interested, and who should not",
    "What we are doing about it locally",
]

TODO = "TODO — write this from the research, not from the press release."


def titleise(slug: str) -> str:
    return " ".join(w.capitalize() for w in slug.replace("_", "-").split("-"))


def core_fragment(route: str, kicker: str, headline: str, meta_title: str,
                  sections: list[str], office_phrase: str, phone: str) -> str:
    body = [f'"{route}": {{']
    body.append(f'  kicker: "{kicker}",')
    body.append(f'  headline: "{headline}",')
    body.append(f'  metaTitle: "{meta_title}",')
    body.append(f'  metaDescription: "{TODO} Under 160 characters.",')
    body.append("  intro: [")
    for _ in range(3):
        body.append(f'    "{TODO}",')
    body.append("  ],")
    body.append("  sections: [")
    for s in sections:
        body.append(f'    ["{s}", "{TODO}"],')
    body.append("  ],")
    body.append("  bulletLinks: [")
    body.append('    ["TODO label", "/TODO/"],')
    body.append("  ],")
    body.append("  takeaways: [")
    body.append(f'    "{TODO} Plain text only — linkify does NOT run here.",')
    body.append("  ],")
    body.append("  faqs: [")
    for _ in range(4):
        body.append(f'    ["TODO question?", "{TODO}"],')
    body.append("  ],")
    body.append('  image: "/assets/TODO.webp",')
    body.append(f'  imageLabel: "{TODO}"')
    body.append("},")
    return "\n".join(body) + "\n"


def blog_fragment(route: str, headline: str, slug: str, date: str,
                  sections: list[str]) -> str:
    b = [f'  "{route}": {{']
    b.append('    kicker: "Hearing Aid Technology",')
    b.append(f'    headline: "{headline}",')
    b.append('    variant: "product",')
    b.append(f'    datePublished: "{date}",')
    b.append(f'    dateModified: "{date}",')
    b.append("    metaDescription:")
    b.append(f'      "{TODO} Under 160 characters.",')
    b.append("    intro: [")
    for _ in range(3):
        b.append(f'      "{TODO}",')
    b.append("    ],")
    b.append("    takeaways: [")
    b.append(f'      "{TODO} Plain text only — linkify does NOT run here.",')
    b.append("    ],")
    b.append("    sections: [")
    for s in sections:
        b.append(f'      ["{s}", "{TODO}"],')
    b.append("    ],")
    b.append('    bullets: ["TODO chip", "TODO chip", "TODO chip"],')
    b.append("    faqs: [")
    for _ in range(5):
        b.append(f'      ["TODO question?", "{TODO}"],')
    b.append("    ],")
    b.append(f'    image: "/assets/blog/{slug}-1.svg",')
    b.append(f'    imageLabel: "{TODO}",')
    b.append(f'    image2: "/assets/blog/{slug}-2.svg",')
    b.append('    image2Label: "Confirmed, claimed, and unknown",')
    b.append(f'    image2Caption: "{TODO} Plain text only.",')
    b.append("  },")
    return "\n".join(b) + "\n"


def route_entry(route: str, title: str, h1: str) -> str:
    import json as _json
    return (
        "  {\n"
        f'    "path": {_json.dumps(route)},\n'
        f'    "title": {_json.dumps(title)},\n'
        f'    "h1": {_json.dumps(h1)},\n'
        f'    "desc": {_json.dumps(TODO)},\n'
        '    "h2": [],\n'
        '    "paragraphs": []\n'
        "  },\n"
    )


def insert_routes(crawled: Path, entries: list[tuple[str, str, str]]) -> list[str]:
    """Append route entries just before the final closing bracket. Idempotent."""
    text = crawled.read_text()
    added = []
    block = ""
    for route, title, h1 in entries:
        if f'"{route}"' in text:
            continue
        block += route_entry(route, title, h1)
        added.append(route)
    if not block:
        return added
    # Insert before the last "];" or "]" that closes the array.
    m = None
    for m in re.finditer(r"\n\]\s*;?\s*$", text):
        pass
    if m is None:
        raise PackError(
            f"Could not find the end of the array in {crawled.name}. "
            f"Insert these routes by hand: {', '.join(added)}"
        )
    head = text[: m.start()]
    # The element before the insertion point may have no trailing comma — the
    # last entry in a hand-maintained array usually does not. Appending after it
    # without one produces "} {", which is a TS1005 syntax error that neither
    # the assemblers nor preflight will notice. Learned at the Phonak EON
    # launch, 24 Aug 2026.
    if head.rstrip().endswith("}"):
        cut = head.rstrip()
        head = cut + "," + head[len(cut):]
    text = head + "\n" + block.rstrip("\n") + text[m.start():]
    crawled.write_text(text)
    return added


def insert_dates(dates_file: Path, mapping: dict[str, str]) -> list[str]:
    """Add date entries, keeping the file's sorted-entry block sorted."""
    lines = dates_file.read_text().split("\n")
    idx = [i for i, l in enumerate(lines)
           if re.match(r'^\s{2}"/.*":\s*"\d{4}-\d{2}-\d{2}",$', l)]
    if not idx:
        raise PackError(f"No date entries recognised in {dates_file.name}")
    start, end = idx[0], idx[-1]
    block = lines[start:end + 1]
    existing = {re.match(r'^\s{2}"([^"]+)"', l).group(1) for l in block}
    added = []
    for route, date in mapping.items():
        if route in existing:
            continue
        block.append(f'  "{route}": "{date}",')
        added.append(route)
    if not added:
        return added
    block = sorted(set(block))
    dates_file.write_text("\n".join(lines[:start] + block + lines[end + 1:]))
    return added


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Scaffold one product launch cluster.")
    ap.add_argument("pack")
    ap.add_argument("--brand", required=True, help="brand slug, e.g. signia")
    ap.add_argument("--product", required=True, help="product slug, e.g. signia-max")
    ap.add_argument("--replaces", required=True, help="outgoing product slug, e.g. signia-ix")
    ap.add_argument("--rival", default=None,
                    help="rival flagship as brand/product, e.g. oticon/oticon-reveal")
    ap.add_argument("--date", required=True, help="YYYY-MM-DD")
    ap.add_argument("--vendor", default=None, help="display vendor name (default: from brand)")
    ap.add_argument("--display", default=None,
                    help='exact product name as the manufacturer writes it, e.g. "Signia MaX". '
                         "titleise() would render that as 'Signia Max', which is wrong.")
    ap.add_argument("--replaces-display", default=None, help='e.g. "Signia IX"')
    ap.add_argument("--rival-display", default=None, help='e.g. "Oticon Reveal"')
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args(argv)

    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.date):
        print("ERROR  --date must be YYYY-MM-DD", file=sys.stderr)
        return 2

    try:
        pack = SitePack.load(args.pack, strict=True)
        root = pack.repo_root
    except PackError as e:
        print(f"ERROR  {e}", file=sys.stderr)
        return 2

    problems = pack.verify()
    if problems:
        print("ERROR  the pack does not match the repo on disk:", file=sys.stderr)
        for p in problems:
            print(f"  {p}", file=sys.stderr)
        return 2

    vendor = args.vendor or titleise(args.brand)
    product = args.display or titleise(args.product)
    old = args.replaces_display or titleise(args.replaces)
    if not args.display:
        print(f"  note: using '{product}' as the display name. Manufacturers "
              f"capitalise oddly (MaX, IX, BiCROS) — pass --display to fix it.\n")
    offices = pack.data["identity"]["office_phrase"]

    hub = pack.core_route(args.brand, args.product)
    upgrade = pack.core_route(args.brand, f"{args.product}-vs-{args.replaces}")
    cost = pack.core_route(args.brand, f"{args.product}-cost")
    post = pack.blog_route(f"{args.product}-what-we-know")
    routes = [hub, upgrade, cost]

    rival_route = rival_title = None
    if args.rival:
        rb, rp = args.rival.split("/", 1)
        rival_route = pack.core_route(args.brand, f"{args.product}-vs-{rp}")
        rival_title = args.rival_display or titleise(rp)
        routes.append(rival_route)

    core_dir = root / pack.path("core_entries")
    blog_dir = root / pack.path("blog_entries")

    plan: list[tuple[Path, str]] = [
        (core_dir / pack.core_entry_file(hub),
         core_fragment(hub, "Hearing Aid Technology",
                       f"{product} Hearing Aids in {offices}",
                       f"{product} | Specs, Claims & Fitting | {pack.name}",
                       [s.format(Vendor=vendor) for s in HUB_SECTIONS],
                       offices, pack.data["identity"]["phone"])),
        (core_dir / pack.core_entry_file(upgrade),
         core_fragment(upgrade, "Hearing Aid Comparison",
                       f"{product} vs {old}: Should You Upgrade?",
                       f"{product} vs {old} — Should You Upgrade? | {pack.name}",
                       [s.format(Old=old) for s in UPGRADE_SECTIONS],
                       offices, pack.data["identity"]["phone"])),
        (core_dir / pack.core_entry_file(cost),
         core_fragment(cost, "Hearing Aid Costs",
                       f"How Much Does {product} Cost?",
                       f"{product} Cost | What Drives the Price | {pack.name}",
                       COST_SECTIONS, offices, pack.data["identity"]["phone"])),
        (blog_dir / f"{args.product}-what-we-know.txt",
         blog_fragment(post, f"{product}: What We Actually Know So Far",
                       f"{args.product}-what-we-know", args.date, POST_SECTIONS)),
    ]
    if rival_route:
        plan.append((core_dir / pack.core_entry_file(rival_route),
                     core_fragment(rival_route, "Hearing Aid Comparison",
                                   f"{product} vs {rival_title}",
                                   f"{product} vs {rival_title} | {pack.name}",
                                   RIVAL_SECTIONS, offices,
                                   pack.data["identity"]["phone"])))

    print(f"{pack.name} — scaffolding {product}\n")
    written, skipped = [], []
    for path, content in plan:
        rel = path.relative_to(root)
        if path.exists():
            skipped.append(str(rel))
            continue
        if not args.dry_run:
            path.write_text(content)
        written.append(str(rel))

    for w in written:
        print(f"  + {w}")
    for s in skipped:
        print(f"  = {s}  (exists, left alone)")

    all_routes = routes + [post]
    if args.dry_run:
        print("\n  dry run — no routes or dates written")
        for r in all_routes:
            print(f"    would route  {r}")
        return 0

    added_routes = insert_routes(root / pack.path("crawled_pages"),
                                 [(hub, f"{product} | {pack.name}", product),
                                  (upgrade, f"{product} vs {old} | {pack.name}",
                                   f"{product} vs {old}"),
                                  (cost, f"How Much Does {product} Cost? | {pack.name}",
                                   f"How Much Does {product} Cost?")]
                                 + ([(rival_route,
                                      f"{product} vs {rival_title} | {pack.name}",
                                      f"{product} vs {rival_title}")] if rival_route else [])
                                 + [(post, f"{product}: What We Actually Know So Far | {pack.name}",
                                     f"{product}: What We Actually Know So Far")])
    added_dates = insert_dates(root / pack.path("content_dates"),
                               {r: args.date for r in all_routes})

    print(f"\n  routes added to {pack.path('crawled_pages')}: {len(added_routes)}")
    print(f"  dates added to  {pack.path('content_dates')}:  {len(added_dates)}")

    print(f"""
  STILL TO DO BY HAND
    1. Write the pages. Every section body says TODO.
    2. Rebuild the brand hub  {pack.core_route(args.brand)}
       around the two-platform story.
    3. Strengthen  {pack.core_route(args.brand, args.replaces)}
       — see references/outgoing-flagship.md. Bump its contentDates entry.
    4. {pack.path('site_tsx')}
       · add {product} to the mega-menu columns
       · swap the homepage products array entry
       · check the product-image helper — FIRST MATCH WINS
    5. Two SVGs in {pack.path('blog_assets')}/{args.product}-what-we-know-{{1,2}}.svg
    6. Cross-link the rival's hub back to the comparison.
    7. Run the assemblers:
         {pack.convention('assemble_core')}
         {pack.convention('assemble_blog')}
    8. python3 scripts/preflight.py {args.pack} --product {args.product}
""")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
