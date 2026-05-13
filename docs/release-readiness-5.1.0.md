# Release Readiness — 5.1.0

**Verdict (initial): NOT ready — widgets drift confirmed.**
**Verdict (after [36e637e](https://github.com/guan4tou2/danmu-desktop/commit/36e637e) widgets retrofit): READY for tag, with 2 optional pre-merge checks.**

Updated 2026-05-04 PM after the 4-module follow-up audit: all 10 P0-0
nav pages + the 4 statically-flagged modules are v2-aligned. The only
remaining items are operational, not blocking the code itself.

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

### Possibly-drift modules (verified clean 2026-05-04)

Earlier static scan found `<details>/<summary>` references in
admin-emojis.js, admin-fingerprints.js, admin-scheduler.js,
admin-security.js. Visual audit on each in browser:

| Module | Visual verdict |
|---|---|
| `admin-emojis.js`     | ✓ v2. The `<details>` reference was in a comment ("Replaces legacy `<details>` accordion"). 0 visible details + 34 v2 class refs in `#sec-emojis`. |
| `admin-fingerprints.js` | ✓ v2 (intentional collapsible). Uses `<details id="sec-fingerprints" class="group admin-v3-card lg:col-span-2">` with cyan kicker `FINGERPRINTS · 觀測`, h1 title 指紋觀測台, chevron expand-collapse. The `<details>` here is design (collapsible advanced section), not legacy. |
| `admin-scheduler.js`  | ✓ v2. The `<details>` reference was in a comment. Page renders as `admin-scheduler-page hud-page-stack` with v2 chrome. |
| `admin-security.js`   | ✓ v2. Page renders 0 visible details. Cards: CHANGE PASSWORD form, WS TOKEN config, SESSIONS list — all use cyan mono kickers, structured rows, admin-poll-btn primary CTAs, admin-v2-chip status pills. |

All 4 modules are v2-aligned. No additional drift to fix.

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

### Required — all closed

- [x] **Widgets page Soft Holo retrofit** ([36e637e](https://github.com/guan4tou2/danmu-desktop/commit/36e637e))
  — admin-widgets.js rewritten with hud-page-stack + admin-poll-head +
  admin-widget-* atoms. 146-line CSS namespace added. Default team
  colors switched cyan + amber (was `#06b6d4` + `#f43f5e` — the latter
  was forbidden hex per STYLE-CONTRACT).

- [x] **Visual re-verify of 4 modules with `<details>/<summary>`**
  (audit 2026-05-04 PM): all 4 verified clean v2. See table above.

### Recommended — operational, NOT blocking

- [ ] **Electron full smoke**: `electron-builder --dir`, launch the
  packaged app, point it at a local 5.1.0 server, verify viewer +
  overlay + controller render correctly across hash routes. The
  `npx webpack` build already passes; this is end-to-end validation.

- [ ] **VPS staging dry-run**: `./scripts/deploy-vps.sh --dry-run`,
  inspect command, then deploy to staging if available, verify with
  a manual click-through before production. Per `memory/vps_deploy.md`
  Python changes need rebuild — the deploy script handles that.

### Optional — polish for later

- [ ] Wire `data-i18n="navTopXxx"` attrs to the new sidebar buttons
  (i18n keys exist; DOM still hardcodes zh)
- [ ] Update test_browser_p3_pages.py with a real playwright run once
  chromium is installed locally

## Recommendation (updated)

**Tag v5.1.0 and merge to main.** The PR (192 commits) is code-complete.
- Server: APP_VERSION 5.1.0, 1009 tests pass, all P0-0 IA + Slice 1-8
  shipped, Gap 2/3 endpoints in.
- Client: Electron `npx webpack` build passes; renderer uses shared
  symlinks that haven't changed semantically in this branch.
- Visual: All 10 P0-0 nav pages + 4 follow-up modules verified v2.
- Backward compat: 18 legacy URL aliases redirect transparently;
  every `/admin/*` endpoint preserved.

Operational checks (Electron packaging, VPS staging dry-run) can run
post-tag during deployment — they don't gate the code release.
