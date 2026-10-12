#!/usr/bin/env node
// The CMS admin allowlist has to exist in two places that cannot import each
// other: firestore.rules (the real security boundary, enforced by Google) and
// lib/cms/auth.ts (which guards the back-office API routes). If they drift,
// revoking someone in one file leaves them admin via the other -- a silent
// failure with security consequences. This check makes that impossible to ship.
//
// Runs as part of `npm run build`, so a mismatch fails the deploy.

import { readFileSync } from "node:fs";

const RULES = "firestore.rules";
const AUTH = "lib/cms/auth.ts";

function fail(message) {
  console.error(`\n[admin-allowlist] ${message}\n`);
  process.exit(1);
}

function emailsIn(block, where) {
  const found = [...block.matchAll(/['"]([^'"@\s]+@[^'"\s]+)['"]/g)].map((m) => m[1].toLowerCase());
  if (!found.length) fail(`No email addresses found in ${where}. Has the format changed?`);
  return [...new Set(found)].sort();
}

let rulesSrc;
let authSrc;
try {
  rulesSrc = readFileSync(RULES, "utf8");
  authSrc = readFileSync(AUTH, "utf8");
} catch (error) {
  fail(`Could not read ${RULES} or ${AUTH}: ${error.message}`);
}

const rulesBlock = rulesSrc.match(/request\.auth\.token\.email in \[([\s\S]*?)\]/);
if (!rulesBlock) fail(`Could not find the isCmsAdmin() email list in ${RULES}.`);

const authBlock = authSrc.match(/const DEFAULT_ADMIN_EMAILS\s*=\s*\[([\s\S]*?)\]/);
if (!authBlock) fail(`Could not find DEFAULT_ADMIN_EMAILS in ${AUTH}.`);

const fromRules = emailsIn(rulesBlock[1], RULES);
const fromAuth = emailsIn(authBlock[1], AUTH);

const onlyRules = fromRules.filter((email) => !fromAuth.includes(email));
const onlyAuth = fromAuth.filter((email) => !fromRules.includes(email));

if (onlyRules.length || onlyAuth.length) {
  const lines = [`The CMS admin allowlists have drifted.`, ``];
  if (onlyRules.length) lines.push(`  Only in ${RULES}: ${onlyRules.join(", ")}`);
  if (onlyAuth.length) lines.push(`  Only in ${AUTH}: ${onlyAuth.join(", ")}`);
  lines.push(``, `  Both files must list the same people. Update whichever is stale.`);
  fail(lines.join("\n"));
}

console.log(`[admin-allowlist] ok - ${fromRules.length} admin(s) match across ${RULES} and ${AUTH}`);
