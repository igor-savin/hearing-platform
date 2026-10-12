#!/usr/bin/env python3
"""Check a launch cluster before handing it to Igor.

Catches the things tsc cannot: a fragment that does not parse, a page whose
route was never registered (which 404s silently), a link to a page that does
not exist, and an assembler that was never re-run.

    python3 scripts/preflight.py packs/calhearing.json --product signia-max
    python3 scripts/preflight.py packs/calhearing.json --all
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from sitepack import SitePack, PackError  # noqa: E402

TODO_RE = re.compile(r"\bTODO\b")
# linkify does NOT run on these — a markdown link here renders literally.
PLAIN_TEXT_FIELDS = ("takeaways", "bullets", "image2Caption", "imageLabel", "image2Label")


class Report:
    def __init__(self):
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.notes: list[str] = []

    def error(self, msg): self.errors.append(msg)
    def warn(self, msg): self.warnings.append(msg)
    def note(self, msg): self.notes.append(msg)

    @property
    def ok(self) -> bool:
        return not self.errors

    def render(self) -> str:
        out = []
        for n in self.notes:
            out.append(f"  ok    {n}")
        for w in self.warnings:
            out.append(f"  WARN  {w}")
        for e in self.errors:
            out.append(f"  FAIL  {e}")
        return "\n".join(out)


def parse_fragment(path: Path, report: Report) -> str | None:
    """Eval the fragment in node. Returns the object key, or None on failure."""
    node = shutil.which("node")
    if not node:
        report.warn(f"node not found — could not parse {path.name}")
        return None
    helper = Path(__file__).parent / "parse_fragment.mjs"
    try:
        res = subprocess.run([node, str(helper), str(path)],
                             capture_output=True, text=True, timeout=30)
    except subprocess.TimeoutExpired:
        report.error(f"{path.name}: parse timed out")
        return None
    out = (res.stdout or "").strip()
    if out.startswith("KEY:"):
        return out[4:]
    if out.startswith("ERR:"):
        report.error(f"{path.name}: does not parse — {out[4:]}")
    else:
        report.error(f"{path.name}: parse produced no result ({res.stderr.strip()[:120]})")
    return None


def route_table(crawled: Path) -> set[str]:
    return set(re.findall(r'"path":\s*"([^"]+)"', crawled.read_text()))


def internal_links(text: str) -> set[str]:
    links = set(re.findall(r"\]\((/[^)\"\s]*)\)", text))          # markdown
    links |= set(re.findall(r',\s*"(/[a-z0-9/\-]*/)"\]', text))    # bulletLinks
    # Assets are files, not routes.
    return {l for l in links if not l.startswith("/assets/")}


def field_block(text: str, field: str) -> str | None:
    """Return the raw source of one top-level field, brace/bracket balanced.

    A naive non-greedy regex stops at the first ']', which is exactly the ']'
    that closes a markdown link label — so it silently misses the bug this
    check exists to find.
    """
    m = re.search(rf"(?<![\w])({field})\s*:\s*", text)
    if not m:
        return None
    i = m.end()
    if i >= len(text):
        return None
    if text[i] == "[":
        depth, j = 0, i
        while j < len(text):
            if text[j] == "[":
                depth += 1
            elif text[j] == "]":
                depth -= 1
                if depth == 0:
                    return text[i:j + 1]
            j += 1
        return text[i:]
    if text[i] == '"':
        j = i + 1
        while j < len(text):
            if text[j] == "\\":
                j += 2
                continue
            if text[j] == '"':
                return text[i:j + 1]
            j += 1
    return None


def check_plain_text_markdown(path: Path, report: Report) -> None:
    """A markdown link in a non-linkified field renders literally on the page."""
    text = path.read_text()
    for field in PLAIN_TEXT_FIELDS:
        block = field_block(text, field)
        if block and re.search(r"\]\(/", block):
            report.error(
                f"{path.name}: markdown link inside '{field}' — linkify does not "
                f"run there, so it will render literally as [text](/url). Move it "
                f"to a section body."
            )


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Preflight a launch cluster.")
    ap.add_argument("pack")
    ap.add_argument("--product", help="product slug, e.g. signia-max")
    ap.add_argument("--all", action="store_true", help="check every fragment in the repo")
    ap.add_argument("--allow-todo", action="store_true",
                    help="do not fail on remaining TODO placeholders")
    args = ap.parse_args(argv)

    if not args.product and not args.all:
        ap.error("give --product or --all")

    try:
        pack = SitePack.load(args.pack, strict=True)
        root = pack.repo_root
    except PackError as e:
        print(f"ERROR  {e}", file=sys.stderr)
        return 2

    problems = pack.verify()
    if problems:
        print("ERROR  pack does not match the repo:", file=sys.stderr)
        for p in problems:
            print(f"  {p}", file=sys.stderr)
        return 2

    report = Report()
    core_dir = root / pack.path("core_entries")
    blog_dir = root / pack.path("blog_entries")
    crawled = root / pack.path("crawled_pages")
    dates = root / pack.path("content_dates")

    if args.all:
        frags = sorted(core_dir.glob("*.txt")) + sorted(blog_dir.glob("*.txt"))
    else:
        frags = [p for p in sorted(core_dir.glob("*.txt")) if args.product in p.name]
        frags += [p for p in sorted(blog_dir.glob("*.txt")) if args.product in p.name]

    if not frags:
        print(f"No fragments found matching '{args.product}'.", file=sys.stderr)
        return 2

    print(f"{pack.name} — preflight on {len(frags)} fragment(s)\n")

    routes = route_table(crawled)
    dates_text = dates.read_text()
    core_pages_text = (root / pack.path("core_pages")).read_text()
    blog_posts_text = (root / pack.path("blog_posts")).read_text()

    keys: list[str] = []
    for frag in frags:
        key = parse_fragment(frag, report)
        if not key:
            continue
        keys.append(key)
        report.note(f"{frag.name} parses -> {key}")

        # The fragment filename must agree with the key it declares.
        if frag.parent == core_dir:
            expected = pack.core_entry_file(key)
            if frag.name != expected:
                report.error(
                    f"{frag.name}: declares route {key}, which flattens to "
                    f"'{expected}'. The assembler sorts by filename; a mismatch "
                    f"produces a confusing diff."
                )

        # THE ROUTING TRAP — this is the whole reason preflight exists.
        if key not in routes:
            report.error(
                f"{key} is NOT in {pack.path('crawled_pages')}. The page will "
                f"404 and never reach the sitemap, however good the content is."
            )
        if f'"{key}"' not in dates_text:
            report.warn(f"{key} has no entry in {pack.path('content_dates')}")

        # Was the assembler actually re-run?
        generated = blog_posts_text if frag.parent == blog_dir else core_pages_text
        target = pack.path("blog_posts") if frag.parent == blog_dir else pack.path("core_pages")
        if f'"{key}"' not in generated:
            report.error(
                f"{key} is missing from {target} — run the assembler "
                f"({pack.convention('assemble_blog') if frag.parent == blog_dir else pack.convention('assemble_core')})"
            )

        text = frag.read_text()
        for link in sorted(internal_links(text)):
            if link not in routes:
                report.error(f"{frag.name}: link to {link}, which is not a route")

        check_plain_text_markdown(frag, report)

        if not args.allow_todo and TODO_RE.search(text):
            n = len(TODO_RE.findall(text))
            report.error(f"{frag.name}: {n} TODO placeholder(s) still unwritten")

    # The route table itself. scaffold.py appends entries to the end of the
    # array; if the element before the insertion point had no trailing comma
    # the result is "} {", a TS1005 syntax error that parses fine as a regex
    # route table and so passes every other check here. It cost a debugging
    # round at the Phonak EON launch, 24 Aug 2026.
    crawled_text = crawled.read_text()
    for m in re.finditer(r"\}\s*\n\s*\{", crawled_text):
        line = crawled_text.count("\n", 0, m.start()) + 1
        report.error(
            f"{pack.path('crawled_pages')}:{line} — object followed by object "
            f"with no comma between them. This is a TS1005 syntax error; "
            f"npx tsc --noEmit will confirm it."
        )
    for key in keys:
        entry = re.search(
            r'\{[^{}]*"path":\s*"' + re.escape(key) + r'"[^{}]*\}',
            crawled_text, re.S)
        if entry and TODO_RE.search(entry.group(0)):
            report.error(
                f"{key}: its {pack.path('crawled_pages')} entry still contains "
                f"a TODO title or description. That text is what search results "
                f"show."
            )

    print(report.render())
    print()
    if report.ok:
        print(f"  PASS — {len(keys)} page(s) clean.")
        print(f"  Next: {pack.convention('typecheck')}, then the ship script.")
        if pack.data["conventions"].get("build_works_in_mount") is False:
            print(f"  Note: {pack.data['conventions'].get('build_note')}")
        return 0
    print(f"  {len(report.errors)} error(s), {len(report.warnings)} warning(s).")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
