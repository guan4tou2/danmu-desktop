# Engineering Plan · P0-0 IA Migration

**Status:** ready to start. Design batch (P0-0 + P0-0a + system accordion + RWD)
signed off after 3 rounds with Claude Design + style contract enforcement.

## Baseline (what's already done)

`server/static/js/admin.js` lines 478–700 already implement a partially
grouped sidebar:

- **PRIMARY (8 items):** dashboard, messages, polls, widgets, moderation,
  audience, sessions, broadcast
- **BACKSTAGE PANEL (collapsible):**
  - 歷史 & 分析: history, search, audit
  - 視覺 & 內容: themes, viewer-config, effects, fonts, assets
  - System group: integrations, firetoken, ratelimit, system, plugins,
    notifications, security, backup, wcag, mobile, about, setup, etc.

So the current state isn't 32 raw nav rows — it's already a 2-tier
hierarchy. The migration is collapsing this further into the P0-0 10-nav.

## Target — P0-0 10 nav

```
1. dashboard       — live console (KPI + LIVE FEED + quick actions)
2. polls
3. effects
4. moderation      — tabs: blacklist · filters · ratelimit · fingerprints
5. widgets
6. appearance      — tabs: themes · viewer-theme · display · fonts
7. assets          — already merged: emojis · stickers · sounds
8. automation      — tabs: scheduler · webhooks · plugins
9. history         — tabs: sessions · search · audit · replay · audience
10. system         — accordion: setup · security · firetoken · backup ·
                                integrations · wcag · mobile · about
```

## Route mapping (current → P0-0)

| Current route | New route | Notes |
|---|---|---|
| `dashboard` | `dashboard` | rewrite to live console |
| `messages` | inline on `dashboard` | live feed becomes dashboard body |
| `polls` | `polls` | unchanged |
| `widgets` | `widgets` | unchanged |
| `moderation` | `moderation/blacklist` (default) + tabs | |
| `ratelimit` | `moderation/ratelimit` | |
| `audience` | `history/audience` | |
| `sessions` | `history/sessions` (default) | |
| `session-detail` | `history/sessions/<id>` | |
| `search` | `history/search` | |
| `audit` | `history/audit` | |
| `history` | `history/replay` | the replay tab |
| `themes` | `appearance/themes` (default) | |
| `viewer-config` | `appearance/viewer-theme` + `appearance/display` | already 2 tabs |
| `fonts` | `appearance/fonts` | |
| `effects` | `effects` | unchanged |
| `assets` | `assets` | unchanged (already merged) |
| `integrations` | `system/integrations` | |
| `firetoken` | `system/firetoken` | |
| `security` | `system/security` | |
| `backup` | `system/backup` | |
| `wcag` | `system/wcag` | |
| `mobile` | `system/mobile` (or RWD breakpoint) | |
| `about` | `system/about` | |
| `notifications` | bell tray (no nav slot) | |
| `broadcast` | dashboard quick-action button | |
| `plugins` | `automation/plugins` (advanced tab) | |
| `setup` | overlay modal (no nav) | |
| `onboarding-tour` | contextual spotlight (no nav) | |
| `api-tokens` | `system/api-tokens` | |
| `poll-deepdive` | `polls/<id>/deepdive` | |

Scheduler + webhooks currently live INSIDE `system` route — extract them
into the new `automation` nav.

## Slices

### Slice 1 — Sidebar visual reorganization (lowest risk)
- Update `admin.js` line ~485 sidebar HTML
- Group existing 30 nav rows under 10 P0-0 headers
- Routes still work with current hashes (no functional change)
- **Effort:** ~80 LoC. **Risk:** very low. **Visible signal:** sidebar matches P0-0 IA.

### Slice 2 — Hash route compat layer
- Add hash watcher: old `#/<route>` redirects to `#/<nav>/<tab>`
- Resolver supports both formats during transition
- **Effort:** ~50 LoC. **Risk:** low. **Signal:** bookmarks still work.

### Slice 3 — Tab container component
- New `server/static/js/admin-tabs.js`
- Hook into moderation / appearance / automation / history nav
- Default tab + sessionStorage persistence per nav (P0-0a)
- Deep-link via `#/<nav>/<tab>`
- Visual matches `tab-chrome.jsx`
- **Effort:** ~200 LoC + CSS. **Risk:** low. **Signal:** 4 nav routes instead of 11.

### Slice 4 — ADMIN_ROUTES collapse to 10
- Rewrite ADMIN_ROUTES table
- Update section visibility for tabbed pages
- Old routes alias to new for backward compat
- **Effort:** ~150 LoC. **Risk:** medium. **Signal:** real 10-nav IA.

### Slice 5 — Dashboard live-console rewrite
- Rewrite `admin-dashboard.js` per AdminV3SoftHolo grid + LIVE FEED + KPI strip
- Wire to expanded `/admin/bootstrap` (session + audit already added)
- Q3 toast + inline rule for quick actions
- Topbar bell tray with audit feed
- **Effort:** ~300 LoC. **Risk:** medium-high. **Signal:** dashboard matches design.

### Slice 6 — System accordion
- New `server/static/js/admin-system-accordion.js`
- 8 sections from `system-accordion.jsx`
- Default-collapsed, single-open at a time, deep-link via hash
- **Effort:** ~150 LoC. **Risk:** low. **Signal:** C-tier pages collapse cleanly.

### Slice 7 — Backend Gap 2 + Gap 3
- `POST /admin/effects/<name>/fire` — broadcast .dme to overlay
- `POST /admin/broadcast/send` — admin push danmu bypassing rate-limit
- Tests
- **Effort:** ~80 LoC. **Risk:** low. **Signal:** dashboard quick actions wire up.

### Slice 8 — Cleanup + tests
- Remove obsolete routes / dead code
- i18n keys consolidate
- `test_browser_p3_pages.py` updates for new IA
- Smoke test full nav
- **Effort:** ~150 LoC. **Risk:** low.

**Total: ~1160 LoC across 8 slices.** Estimate 3–5 focused sessions.

## Recommended order

**Safety-first:** 1 → 2 → 3 → 4 → 6 → 7 → 5 → 8

This builds infrastructure (sidebar / hash / tabs) before touching content,
saves the dashboard rewrite (highest visual but most risk) for after the
chrome is solid, and ends with cleanup once everything works.

**Signal-first (alternate):** 1 → 5 → 3 → 4 → 6 → 7 → 8

Dashboard rewrite earlier so the visual transformation is visible faster,
at cost of doing it before the tab/route infrastructure is solid (more
rework risk).

## What I need from owner

Pick the first slice to start. Default recommendation: **Slice 1**
(sidebar visual reorg) — smallest, lowest risk, biggest visible signal,
and naturally validates the route map before any structural change.

Also: pick safety-first vs signal-first ordering for slices 3–7.

## What's NOT in this plan

- Not migrating `decisions-log.jsx` / `ia-spec.jsx` legacy private blocks
  (out of scope, doc artboards only)
- Not changing tokens.jsx or any shared component
- Not touching Electron renderer (`danmu-desktop/`) — pure server admin
- Not adding new features beyond what P0-0 / P0-0a / quick-actions need
