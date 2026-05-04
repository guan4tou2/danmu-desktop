# Release Readiness — 5.1.0

**Verdict: NOT ready to publish. 1 page-level visual drift confirmed
(widgets), Electron client smoke-tested but not end-to-end-validated
against new server.** Three deltas to close before tagging.

## Audit method

1. Logged into local server (port 4000), navigated to each of the 10
   P0-0 nav routes, captured screenshots.
2. Ran a programmatic visibility / class-usage scan on each page's
   visible content area:
   - which `sec-*` are visible
   - count of v1 `details.settings-card` collapsibles (legacy pattern)
   - count of v2 `hud-page-stack` / `hud-card` / `admin-v2-*` classes
   - count of forbidden inline hexes (`#f43f5e`, `#f472b6`, `#a78bfa`,
     `#84cc16`, `#0A0E1A`)
3. Built the Electron renderer + preload bundles via `npx webpack`.

## Findings

### Page-level drift (audit table)

| Nav | Visible section(s) | v1 details | v2 HUD classes | Inline forbidden hex |
|---|---|---:|---:|---:|
| dashboard  | (KPI strip + summary)         | 0 | 306 | 4 (palette) |
| polls      | sec-polls                     | 0 | 307 | 4 (palette) |
| effects    | sec-effects, sec-effects-mgmt | 0 | 307 | 4 (palette) |
| moderation | sec-blacklist (default tab)   | 0 | 307 | 4 (palette) |
| **widgets** | **sec-widgets**              | **1** | 306 | 4 (palette) |
| appearance | sec-themes (default tab)      | 0 | 306 | 4 (palette) |
| assets     | sec-assets-overview + sub     | 0 | 310 | 4 (palette) |
| automation | sec-scheduler (default tab)   | 0 | 307 | 4 (palette) |
| history    | sec-sessions-overview         | 0 | 307 | 4 (palette) |
| system     | (accordion: 1 of 8 visible)   | 0 | 306 | 4 (palette) |

**`widgets` is the single off-spec page.** Its `sec-widgets` content
renders via `admin-widgets.js` using legacy `<details class="settings-
card">` + `<button class="btn btn-sm">` markup — no Soft Holo HUD
chrome, no cyan accents, no structured card wrap. Other 9 pages all
score 0 v1-details and 300+ v2 HUD class refs.

### Inline forbidden hex (false positive)

All 10 pages report 4 inline forbidden hex occurrences, but they all
trace to the **same shared element** — the `display-settings` color
picker swatch palette inside `appearance/viewer-config`. The swatches
ARE the available danmu colors users can pick (including magenta
`#F472B6` and violet `#A78BFA` as audience-selectable choices). This
is content-level color, not chrome accent — does not violate the
STYLE-CONTRACT which constrains UI accent palette.

### Possibly-drift modules (not visually verified yet)

Earlier static scan found `<details>/<summary>` use in:
admin-emojis.js, admin-fingerprints.js, admin-scheduler.js,
admin-security.js. Each lives on a B/C-tier page and may be using
`<details>` legitimately (collapsible advanced section), or may be
v1 carryover. **Not visually re-verified yet** — these are visible
under their tabs only when user opens them, so the static-render
audit didn't catch them.

### Electron client

`cd danmu-desktop && npx webpack` — **compiled successfully** (renderer
+ preload bundles in 1.0s + 0.7s). `shared/particle-bg.js` and
`shared/danmu-effects.js` build clean via the shared symlinks.

Not done:
- `electron-builder --dir` packaging test
- Run the packaged `.app` against the running server end-to-end
- Verify viewer / overlay / controller windows still work under v5.1.0
  server (e.g., new `dataset.activeLeaf` doesn't affect renderer paths)

## What's needed before tagging 5.1.0

### Required

- [ ] **Widgets page Soft Holo retrofit.** `admin-widgets.js` rewrite to
  match v2 chrome. Estimated ~80 LoC. Should match the visual language
  of e.g. `admin-emojis.js` or `admin-stickers.js` (assets sub-tabs)
  which already render in v2 style.

### Recommended

- [ ] **Visual re-verify of 4 modules with `<details>/<summary>`**:
  open each tab/section, screenshot, compare to peers. If drift, file.
- [ ] **Electron full smoke**: `electron-builder --dir`, launch the
  packaged app, point it at a local 5.1.0 server, verify viewer +
  overlay + controller render correctly across hash routes.
- [ ] **VPS staging dry-run**: `./scripts/deploy-vps.sh --dry-run`,
  inspect command, then deploy to staging if available, verify with
  a manual click-through before production.

### Optional

- [ ] Wire `data-i18n="navTopXxx"` attrs to the new sidebar buttons
  (i18n keys exist; DOM still hardcodes zh)
- [ ] Update test_browser_p3_pages.py with a real playwright run once
  chromium is installed locally

## Recommendation

**Cut a 5.1.0-rc1 tag** (release candidate) instead of 5.1.0 directly.
Fix widgets, run Electron full smoke, then promote to 5.1.0. The PR
description already lists outstanding deferred items; updating it to
note "release candidate" is enough for stakeholders to track.

Alternative: ship widgets fix in this PR, then tag 5.1.0 directly.
Probably the right call given the PR is already 192 commits deep —
holding for one more module is small marginal risk.
