// Renders the JSON-LD for a sample of pages without booting Next, so the
// schema changes can be checked in an environment where `next build` cannot
// run (the workspace is linux/arm64; node_modules carries a darwin SWC binary).
//
// Transpiles the lib/*.ts modules with the local TypeScript package, rewrites
// the "@/" path alias to relative requires, and calls schemaForPage directly.

import { mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { tmpdir } from "node:os";

const require = createRequire(import.meta.url);
const ts = require("typescript");

// Built outside the repo: the workspace mount does not permit deletes, so a
// temp dir inside the project would be impossible to clean up.
const OUT = join(tmpdir(), "aaw-verify-schema");
rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "lib"), { recursive: true });
mkdirSync(join(OUT, "data"), { recursive: true });
writeFileSync(join(OUT, "data/crawl.json"), readFileSync("data/crawl.json"));

for (const name of readdirSync("lib")) {
  if (!name.endsWith(".ts")) continue;
  const source = readFileSync(join("lib", name), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: name
  });
  writeFileSync(
    join(OUT, "lib", name.replace(/\.ts$/, ".js")),
    outputText.replace(/require\("@\/lib\/([^"]+)"\)/g, 'require("./$1")').replace(/require\("@\/data\/([^"]+)"\)/g, 'require("../data/$1")')
  );
}

const { schemaForPage } = require(join(OUT, "lib/schema.js"));
const { pages } = require(join(OUT, "lib/site.js"));

const samples = [
  "/",
  "/hearing-testing",
  "/harrison-ny",
  "/meet-the-team/kira-savin",
  "/hearing-aids-brands/oticon/oticon-reveal",
  "/audiologist-vs-ent-for-hearing-loss",
  "/hearing-loss/sudden-hearing-loss",
  "/areas-we-serve/westchester-county-ny/armonk",
  "/how-we-can-help/tinnitus-management",
  "/celebrating-pride-month-embracing-inclusivity-and-compassion",
  "/reviews",
  "/careers"
];

console.log("=== sampled pages ===\n");
for (const path of samples) {
  const page = pages.find((entry) => entry.path === path);
  if (!page) {
    console.log(`${path}\n  MISSING FROM CATALOG\n`);
    continue;
  }
  const graph = schemaForPage(page);
  const web = graph.find((node) => String(node["@type"]).includes("WebPage") || String(node["@type"]).includes("BlogPosting"));
  const type = Array.isArray(web["@type"]) ? web["@type"].join("+") : web["@type"];
  console.log(
    [
      path,
      `  @type        ${type}`,
      `  datePublished ${web.datePublished ?? "(none)"}`,
      `  dateModified  ${web.dateModified ?? "(none)"}`,
      `  specialty     ${web.specialty ?? "(none)"}`,
      `  aspect        ${web.aspect ?? "(none)"}`,
      `  reviewedBy    ${web.reviewedBy ? JSON.stringify(web.reviewedBy) : "(none)"}`,
      `  author        ${web.author ? JSON.stringify(web.author) : "(n/a)"}`
    ].join("\n") + "\n"
  );
}

// Coverage assertions across the whole catalog.
let missingModified = [];
let medical = 0;
let published = 0;
const modifiedDates = new Set();

for (const page of pages) {
  const graph = schemaForPage(page);
  const web = graph.find((node) => String(node["@type"]).includes("WebPage") || String(node["@type"]).includes("BlogPosting"));
  if (!web?.dateModified) missingModified.push(page.path);
  else modifiedDates.add(web.dateModified);
  if (web?.datePublished) published += 1;
  if (String(web?.["@type"]).includes("MedicalWebPage")) medical += 1;
}

console.log("=== coverage ===");
console.log(`pages                      ${pages.length}`);
console.log(`with dateModified          ${pages.length - missingModified.length}`);
console.log(`with datePublished         ${published}`);
console.log(`typed MedicalWebPage       ${medical}`);
console.log(`distinct dateModified      ${modifiedDates.size}`);
if (missingModified.length) {
  console.log(`\nmissing dateModified (${missingModified.length}):`);
  for (const path of missingModified.slice(0, 40)) console.log(`  ${path}`);
}

// The reviewer mechanism ships dormant: no article names a clinician yet, so
// nothing above exercises it. Prove it resolves by running one synthetic page
// through pageSchema with a provider slug attached.
const { pageSchema } = require(join(OUT, "lib/schema.js"));
const template = pages.find((entry) => entry.path === "/audiologist-vs-ent-for-hearing-loss");
const attributed = pageSchema({
  ...template,
  blogMeta: { ...(template.blogMeta ?? {}), authorSlug: "caitlin-dold", reviewedBySlug: "jennifer-ratner" }
});
const unknownSlug = pageSchema({ ...template, blogMeta: { ...(template.blogMeta ?? {}), reviewedBySlug: "not-a-person" } });

console.log("\n=== reviewer mechanism (synthetic) ===");
console.log(`author       ${JSON.stringify(attributed.author)}`);
console.log(`reviewedBy   ${JSON.stringify(attributed.reviewedBy)}`);
console.log(`lastReviewed ${attributed.lastReviewed ?? "(none)"}`);
console.log(`unknown slug falls back to org: ${unknownSlug.reviewedBy === undefined ? "yes" : "NO — " + JSON.stringify(unknownSlug.reviewedBy)}`);
