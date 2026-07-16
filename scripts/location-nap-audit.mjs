const baseUrl = (process.env.LOCATION_AUDIT_BASE_URL || "http://localhost:3010").replace(/\/$/, "");

const forbiddenPatterns = [
  /259 Heathcote Road/i,
  /785 Mamaroneck Ave/i,
  /White Plains, NY Location/i,
  /Scarsdale, NY Location/i,
  /(?:our|the) White Plains office/i,
  /(?:our|the) Scarsdale office/i,
  /(?:4|four) convenient locations/i,
  /offices in Harrison, Somers, White Plains(?:, and)? Scarsdale/i
];

const requiredFooterText = [
  "550 Mamaroneck Ave, Suite 407 (4th floor), Harrison, NY 10528",
  "325 NY 100, Somers, NY 10589",
  "Get Directions"
];

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`);
  if (!response.ok) throw new Error(`${path} returned ${response.status}`);
  return response.text();
}

const sitemap = await fetchText("/sitemap.xml");
const paths = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "/")
  .filter((path, index, allPaths) => allPaths.indexOf(path) === index);

const failures = [];
for (let index = 0; index < paths.length; index += 12) {
  const batch = paths.slice(index, index + 12);
  const pages = await Promise.all(batch.map(async (path) => ({ path, html: await fetchText(path) })));
  for (const { path, html } of pages) {
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(html)) failures.push(`${path}: matched forbidden pattern ${pattern}`);
    }
    if (!path.startsWith("/llms.")) {
      for (const requiredText of requiredFooterText) {
        if (!html.toLowerCase().includes(requiredText.toLowerCase())) {
          failures.push(`${path}: missing shared office information “${requiredText}”`);
        }
      }
    }
  }
}

const detailChecks = [
  ["/harrison-ny", ["550 Mamaroneck Ave, Suite 407 (4th floor)", "(914) 949-0034", "MedicalBusiness", '"postalCode":"10528"']],
  ["/Somers-NY", ["325 NY 100, Somers, NY 10589", "(914) 556-6720", "MedicalBusiness", '"postalCode":"10589"']],
  ["/Scarsdale-NY", ["Scarsdale is a service area", "Nearest Office: Harrison, NY"]],
  ["/White-Plains-NY", ["White Plains is a service area", "Nearest Office: Harrison, NY"]],
  ["/areas-we-serve/westchester-county-ny/scarsdale", ["Harrison, NY Location", "550 Mamaroneck Ave, Suite 407"]],
  ["/areas-we-serve/westchester-county-ny/white-plains", ["Harrison, NY Location", "550 Mamaroneck Ave, Suite 407"]]
];

for (const [path, requiredText] of detailChecks) {
  const html = await fetchText(path);
  for (const text of requiredText) {
    if (!html.toLowerCase().includes(text.toLowerCase())) failures.push(`${path}: missing “${text}”`);
  }
  if ((path === "/Scarsdale-NY" || path === "/White-Plains-NY") && /"@type":"MedicalBusiness"/.test(html)) {
    failures.push(`${path}: service-area page must not emit MedicalBusiness schema`);
  }
}

if (failures.length) {
  console.error(`Location NAP audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Location NAP audit passed: ${paths.length} sitemap pages, two offices, zero conflicting addresses.`);
