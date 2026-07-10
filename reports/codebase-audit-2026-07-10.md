# Codebase Audit — 2026-07-10

## Executive summary

The site is in good operational shape: it builds successfully, TypeScript is strict, most pages are statically generated, and content data is centralized enough to support a large marketing site. The biggest engineering risks are maintainability of the monolithic page renderer, stale/unused dependencies, and the lack of a project-scoped Git root.

## Changes made in this pass

- Removed unused Firebase runtime packages and `lib/firebase.ts`; no app code referenced Firebase, and the packages were pulling high-severity transitive advisories into the install.
- Upgraded `next` from the package range baseline to `^16.2.10`.
- Added an `undici` override to `7.28.0` to patch the high-severity advisory introduced through crawler tooling.
- Refactored `components/PageRenderer.tsx` to centralize JSON-LD rendering in one wrapper instead of repeating the script tag in every route branch.
- Cleaned the duplicate React import in `components/Header.tsx`.
- Made contact-form email recipients configurable through environment variables.
- Updated `README.md` so setup docs match the current Resend-backed contact form and no longer instruct Firebase runtime configuration.

## Validation

- `npm run lint` passes.
- `npm run build` passes on Next.js `16.2.10`.
- `npm audit --omit=dev` is reduced to the remaining upstream `next` → bundled `postcss` moderate advisory. `npm audit fix --force` recommends downgrading to `next@9.3.3`, so it should not be used. Track the next stable Next.js release that bumps bundled PostCSS instead.

## Highest-priority recommendations

1. Split `components/PageRenderer.tsx` by page family: home, services, products, service areas, providers, blog, and shared sections. At nearly 4,000 lines, it is the main scaling risk.
2. Move long content/config blocks out of renderer components and into typed data modules. Keep components focused on layout and interaction.
3. Add a small CI gate: install, typecheck, build, and audit. This catches dependency drift and static-generation failures before deployment.
4. Create or move to a project-scoped Git repository. The current Git root resolves to `/Users/igorsavin`, which makes status/diff noisy and increases the chance of accidental unrelated file operations.
5. Revisit Firebase configs (`firebase.json`, rules files) if Firebase is no longer part of the roadmap. If retained, document them as historical/fallback infrastructure only.

## Medium-priority recommendations

- Add lightweight route smoke tests for the highest-value pages: home, contact, services, team, product index, areas served, and several dynamic content routes.
- Consider extracting analytics script config into a typed helper to make defaults and overrides easier to audit.
- Use a bundle analyzer pass after the renderer split; the current static site is probably fine, but the monolith makes accidental client-bound growth harder to notice.
- Keep the crawler scripts, but treat `cheerio` as a tooling dependency if the scripts are not needed at runtime.
