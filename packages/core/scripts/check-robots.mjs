#!/usr/bin/env node
// Checks that a robots.txt names Meta-WebIndexer correctly.
//
// Use it on a file or on a live URL:
//   node packages/core/scripts/check-robots.mjs apps/chc/.next/server/app/robots.txt.body
//   node packages/core/scripts/check-robots.mjs https://calhearing.com/robots.txt
//
// It exits 1 if any check fails.
//
// Why these checks:
//  - Meta says allowing meta-webindexer helps Meta AI cite and link to a site.
//  - A crawler that matches a named group ignores the "*" group. So the
//    meta-webindexer group must repeat every private path from the "*" group.
//  - A bare "Disallow: /" in that group would remove the site from Meta AI.

import { readFile } from "node:fs/promises";

const target = process.argv[2];
if (!target) {
  console.error("Usage: check-robots.mjs <robots.txt file or URL>");
  process.exit(2);
}

async function load(source) {
  if (/^https?:\/\//i.test(source)) {
    const res = await fetch(source, { headers: { "user-agent": "robots-check/1.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${source}`);
    return res.text();
  }
  return readFile(source, "utf8");
}

// Parse into groups: { agents: string[], rules: { type, value }[] }.
function parse(text) {
  const groups = [];
  let current = null;
  let lastWasAgent = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, "").trim();
    if (!line) continue;
    const i = line.indexOf(":");
    if (i < 0) continue;
    const key = line.slice(0, i).trim().toLowerCase();
    const value = line.slice(i + 1).trim();
    if (key === "user-agent") {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else if (key === "allow" || key === "disallow") {
      if (current) current.rules.push({ type: key, value });
      lastWasAgent = false;
    } else {
      lastWasAgent = false;
    }
  }
  return groups;
}

const text = await load(target);
const groups = parse(text);
const failures = [];

const meta = groups.find((g) => g.agents.includes("meta-webindexer"));
const star = groups.find((g) => g.agents.includes("*"));

if (!meta) {
  failures.push("No group for meta-webindexer. Add one so the intent is clear.");
} else {
  if (!meta.rules.some((r) => r.type === "allow" && r.value === "/")) {
    failures.push("The meta-webindexer group has no 'Allow: /'.");
  }
  if (meta.rules.some((r) => r.type === "disallow" && r.value === "/")) {
    failures.push("The meta-webindexer group has 'Disallow: /'. That blocks Meta AI search.");
  }
  if (star) {
    const missing = star.rules
      .filter((r) => r.type === "disallow" && r.value)
      .filter((r) => !meta.rules.some((m) => m.type === "disallow" && m.value === r.value))
      .map((r) => r.value);
    if (missing.length) {
      failures.push(
        `The meta-webindexer group does not repeat these private paths from the '*' group: ${missing.join(", ")}`
      );
    }
  }
}

if (failures.length) {
  console.error(`FAIL ${target}`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

const trained = groups.some((g) => g.agents.includes("meta-externalagent"));
console.log(`OK   ${target}`);
console.log("  meta-webindexer: allowed, private paths kept");
console.log(`  meta-externalagent (AI training): ${trained ? "named in robots.txt" : "not named (allowed by default)"}`);
