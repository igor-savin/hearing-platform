# Hearing platform

One repository for two sites.

| Folder | Site |
| --- | --- |
| `apps/chc` | California Hearing Center (calhearing.com) |
| `apps/aaw` | Audiology Associates of Westchester (audiologyassociates.org) |
| `packages/core` | Code both sites use |

## Commands

Run these from the repository root.

- `npm install` installs everything once.
- `npm run dev:chc` or `npm run dev:aaw` starts one site.
- `npm run build:chc` or `npm run build:aaw` builds one site.
- `npm run typecheck` checks types in both sites.

## The core package

`packages/core` holds code that both sites run. Today it holds:

- `tags.tsx`: the one loader for analytics and call-tracking tags.
- `contact.ts`: the contact form pipeline. Each site passes its own settings.
- `conversions-core.ts`: the conversion event tracker.
- `conversion-clicks.ts`: one click listener that sends call, map, booking and social clicks to the tracker. Each site passes its own rules.
- `scripts/indexnow.mjs`: the IndexNow submit script.

Rules for core code:

1. Core code never imports from a site.
2. Settings that belong to one practice go in as arguments.
3. A change in core changes both sites. Build both before you merge.

## Vercel

Each site is its own Vercel project. Set these for each project:

- Root Directory: `apps/chc` or `apps/aaw`.
- Turn on "Include source files outside of the Root Directory in the Build Step".
- Add Ignored Build Step so a change to one site does not build the other
  (optional).
