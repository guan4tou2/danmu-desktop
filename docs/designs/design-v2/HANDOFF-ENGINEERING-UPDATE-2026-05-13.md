# Claude Design Handoff · Engineering Update · 2026-05-13

**To:** Claude Design (`claude.ai/design`)
**From:** danmu-desktop engineering follow-up after implementation pass
**Repo reference:** `docs/designs/design-v2/`
**Status:** engineering has aligned part of the new IA in production; the next design bundle must build on that state instead of reverting to the older zip structure.

## Read First

1. `docs/designs/design-v2/STYLE-CONTRACT.md`
2. `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`
3. This file

## Why This Update Exists

The 2026-05-05 priority reset changed the product direction from "many admin
pages" to a focused danmu display product. Engineering has now landed a first
implementation slice of that IA reset in production code. Design should treat
those ownership changes as the current baseline.

This means the next handoff should not start from the older "Danmu Redesign
v2.html" route grouping if it conflicts with the repo docs above.

## Already Implemented In Code

These ownership changes are already reflected in the shipped admin shell:

1. `Security` is no longer a standalone top-level sidebar item.
2. `Security` now belongs under `System > Security`.
3. `Display` owns display settings and display-control concerns.
4. `Viewer` owns viewer page defaults, fields, and viewer theme concerns only.
5. Legacy URLs such as `#/security` and `#/viewer-config` are compatibility
   aliases, not canonical IA.

Implementation references:

- `server/static/js/admin.js`
- `server/static/js/admin-system-accordion.js`
- `server/static/js/admin-security.js`
- `server/static/js/admin-display.js`
- `server/static/js/admin-viewer-theme.js`

## Do Not Regress In The Next Design Bundle

- Do not reintroduce standalone top-level `Security`.
- Do not put display control back under `Viewer`, `Appearance`, or a mixed tab.
- Do not restore 10 / 11 / 32 equal-weight admin routes as the main shell.
- Do not mix viewer per-message defaults with client / overlay placement.
- Do not treat the zip handoff as canonical when it conflicts with repo docs.

## Design Deliverables Still Needed

### 1. Canonical Bundle Refresh

Design needs to produce one current bundle that is internally consistent with
repo state. It should supersede the older 2026-05-04 / zip handoff where they
conflict.

Minimum expectation:

- updated main HTML / JSX handoff files
- explicit source-of-truth note
- no contradictory IA between pages

### 2. Final Admin Shell For The 8-Area IA

Design needs to redraw the admin shell so the primary nav is clearly:

`Live / Display / Effects / Assets / Viewer / Polls / Moderation / System`

Requirements:

- `Display`, `Effects`, and `Assets` must read as primary product surfaces
- `Polls` and `Moderation` can stay visible but should feel secondary
- `System` must read as back-office / accordion space, not a peer grid of
  feature pages
- `Security` must appear as a `System` leaf, not a top-level nav row

### 3. Separate Final Specs For `Display` And `Viewer`

This split is now important enough that Design should make it explicit.

`Display` should cover:

- overlay / OBS / browser status
- Electron client status
- target display
- tracks / speed / size / layout safety
- idle state / QR overlay
- widgets if still supported

`Viewer` should cover:

- viewer page theme
- visible fields
- nickname / style defaults
- send limits
- language / copy rules

### 4. Admin Desktop RWD At `768` And `480`

This is still a real gap. Engineering currently uses responsive fallback in too
many places.

Please provide breakpoint behavior for the high-frequency admin surfaces,
especially:

- `Live`
- `Display`
- `Effects`
- `Assets`
- `Viewer`
- `Polls`
- `System`

### 5. Close The Known Open Decisions

Design still needs to explicitly accept or redesign these areas:

| Area | Decision still needed |
|---|---|
| Polls | Keep master-detail layout, or return to a 12-column composition |
| Effects | Fixed 8-card presentation, or formalize dynamic N-card behavior |
| History | Final tabbed page design |
| Viewer Config | Final tabbed page design |
| Notifications | Keep / restore 3-column detail pane |
| Audit Log | Keep simplified implementation, or restore fuller semantic diff view |

## Suggested Response Format From Design

When returning the next bundle to engineering, include:

1. one current canonical bundle
2. one IA map with route visibility / ownership
3. one note listing accepted deviations vs pages that must be redrawn
4. one short migration note for any legacy route names still mentioned in the artboards

## Paste-Ready Prompt

> Project: `danmu-desktop`.
> Read `docs/designs/design-v2/STYLE-CONTRACT.md`, then
> `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`, then
> `docs/designs/design-v2/HANDOFF-ENGINEERING-UPDATE-2026-05-13.md`.
> Engineering has already aligned part of the shipped admin IA: `Security` is
> under `System`, and `Display` now owns display settings while `Viewer` owns
> viewer page defaults / fields / viewer theme only.
> Do not revert to the older zip route grouping when it conflicts with repo
> docs. Produce the next canonical design bundle around the 8-area admin IA:
> `Live`, `Display`, `Effects`, `Assets`, `Viewer`, `Polls`, `Moderation`,
> `System`.
> Prioritize clear final designs for the admin shell, the `Display` vs `Viewer`
> split, admin desktop `768` / `480` breakpoints, and the remaining open
> decisions for Polls / Effects / History / Viewer Config / Notifications /
> Audit Log.
