# Admin IA Reorg Draft — 11 → 8+1

**Status:** draft for owner ack before implementation.
**Source of truth:** `HANDOFF-PRIORITY-RESET-2026-05-05.md` (target IA) + `priority_reset_2026-05-05` memory (locked decisions).
**Out of scope:** UI redesign / new visuals. This is pure information architecture — same admin, fewer top-level slots, clearer mental model.

---

## Today (11 sidebar rows)

`控制台 / 投票 / 效果 / 審核 / 小工具 / 外觀 / 素材 / 自動化 / 歷史 / 系統 / 安全`

Pain points:
- `控制台` (dashboard) is mostly KPI charts — looks like analytics, not operating cockpit.
- `外觀` (appearance) is a kitchen sink: themes + viewer-config + fonts + display-tuning all stuffed in one tab.
- `小工具` (widgets) is an OBS overlay concern but lives parallel to `外觀`.
- `自動化` (scheduler + webhooks + plugins) duplicates the System back-office posture.
- `歷史` (sessions / search / audit / replay / audience) is post-event review, not equal-weight to live ops.

## Target (8 primary + 1 standalone)

| # | Slug | Label | Weight | Content owned |
|---|------|------|--------|----------------|
| 1 | `live` | **直播** | Primary — cockpit | QR, conn state, recent danmu, clear screen, start/stop display, test danmu, mini poll/effect status |
| 2 | `display` | **顯示** | Primary | Overlay status (OBS+Electron), target display, max tracks, layout safety, speed/size guardrails, idle scene, **widgets** |
| 3 | `effects` | **效果** | Primary | `.dme` library, hot-reload, trigger words, preview, performance |
| 4 | `assets` | **素材** | Primary | Fonts / emojis / stickers / sounds / logos / themes — unified library + upload states |
| 5 | `viewer` | **觀眾頁** | Primary support | Viewer page defaults (color/size/opacity/speed/layout/font), send limits, language/theme |
| 6 | `polls` | **投票** | Secondary | Poll builder, active poll, deep-dive analytics |
| 7 | `moderation` | **審核** | Secondary | Blacklist / filters / rate limits / fingerprints |
| 8 | `system` | **系統** | Back-office | Settings / API tokens / Fire token / backup / integrations / webhooks / scheduler / plugins / WCAG / about / audit |
| — | `security` | **安全** | Standalone (per polestar lock) | Password, WS token, audit-log preview |

Net: **-2 visible primary rows** (11 → 9 with security counted; 8 if you only count "main"). And every removed row's content lands in a clear new home.

---

## Route mapping (every current `ADMIN_ROUTES` key → new home)

| Current route | Action | New home |
|---|---|---|
| `dashboard` | **rename** to `live`; rescope from analytics → ops cockpit | `live` |
| `messages` | merge into `live` | `live` (sec-live-feed stays) |
| `polls` | keep | `polls` |
| `poll-deepdive` | keep, deeplink only | `polls` (entry from polls page) |
| `effects` | keep | `effects` |
| `moderation` | keep (4 tabs preserved) | `moderation` |
| `widgets` | merge into `display` | `display` |
| `appearance` | **split** | viewer-theme/fields → `viewer`; theme packs → `assets`; fonts → `assets` |
| `viewer-config` | merge into `viewer` (drop the separate route, keep alias) | `viewer` |
| `themes` | merge into `assets` | `assets` |
| `assets` | keep | `assets` |
| `automation` | merge into `system` (3 tabs) | `system > automation` |
| `history` | merge into `system` (5 tabs preserved) | `system > history` |
| `sessions` | reachable from `live` quick link + system > history | `system > history` (canonical) |
| `session-detail` | deeplink only | `system > history > replay` |
| `search` | deeplink only | `system > history > search` |
| `audit` | deeplink only | `system > history > audit` |
| `audience` | deeplink only | `system > history > audience` |
| `system` | keep but reorganize accordion | `system` |
| `firetoken` | already deeplink-only | `system > tokens` |
| `api-tokens` | already deeplink-only | `system > tokens` |
| `backup` | keep | `system > backup` |
| `integrations` | keep | `system > integrations` |
| `wcag` | keep | `system > a11y` |
| `notifications` | keep, add `live` quick-link | `system > alerts` |
| `about` | keep | `system > about` |
| `setup` | overlay (no change) | overlay |
| `onboarding-tour` | overlay (no change) | overlay |
| `broadcast` | hash-action (no nav row) | toolbar button |
| `security` | keep standalone (locked) | `security` |
| `fonts` | merge into `assets` | `assets` |
| `plugins` | merge into `system > automation` | `system > automation` |
| `ratelimit` | already merged into `moderation` (Slice 4) | `moderation` |

Backward-compat: every removed top-level route gets a hash-redirect alias (`#/widgets` → `#/display#widgets`, `#/appearance` → `#/viewer`, etc.) so existing bookmarks + `<a>` links don't break.

---

## Section ID migration (sec-* visibility)

The bulk of admin sub-pages are `sec-foo-overview` divs whose visibility is driven by `ADMIN_ROUTES[currentRoute].sections`. Migration is mostly editing those `sections` arrays — not moving HTML. Concrete map:

| Section | Current route(s) | New route |
|---|---|---|
| `sec-live-feed` | `messages` | `live` |
| `sec-widgets` | `widgets` | `display` |
| `sec-themes` | `themes`, `appearance` | `assets` |
| `sec-viewer-theme`, `sec-color`, `sec-opacity`, `sec-fontsize`, `sec-speed`, `sec-fontfamily`, `sec-layout` | `viewer-config`, `appearance` | `viewer` |
| `sec-fonts` | `fonts`, `appearance` | `assets` |
| `sec-scheduler`, `sec-webhooks`, `sec-plugins` | `automation` | `system > automation` |
| `sec-sessions-overview`, `sec-search-overview`, `sec-audit-overview`, `sec-history-tabs`, `history-v2-section`, `sec-history`, `sec-audience-overview` | `history` | `system > history` |
| `sec-blacklist`, `sec-filters`, `sec-ratelimit`, `sec-fingerprints` | `moderation` | `moderation` (no change) |
| `sec-effects`, `sec-effects-mgmt` | `effects` | `effects` (no change) |
| `sec-assets-overview`, `sec-emojis`, `sec-stickers`, `sec-sounds` | `assets` | `assets` (no change) |
| `sec-system-overview`, `sec-firetoken-overview`, `sec-api-tokens-overview`, `sec-backup`, `sec-extensions-overview`, `sec-wcag-overview`, `sec-about-overview`, `sec-notifications-overview` | `system` | `system` (no change) |

---

## Implementation phases

### Phase A — sidebar swap (low-risk, no behavior change)

1. Edit `server/static/js/admin.js:599-651` (sidebar HTML in `_renderShell`):
   - Rename `控制台 → 直播` button (`data-route="live"`).
   - Add new `data-route="display"` button.
   - Add new `data-route="viewer"` button.
   - Remove `data-route="widgets"` button.
   - Remove `data-route="appearance"` button.
   - Remove `data-route="automation"` button.
   - Remove `data-route="history"` button.
2. Add `live`, `display`, `viewer` entries to `ADMIN_ROUTES` (with the section lists per the table above).
3. **Bare retired top-level slugs** redirect ONLY when the new home truly owns the original sections. Three are safe in Phase A:
   - `dashboard → live` (both render KPI strip via `data-route-view="dashboard"` alias)
   - `messages → live` (both own `sec-live-feed`)
   - `widgets → display` (both own `sec-widgets`)

   The other three legacy navs do NOT redirect in Phase A:
   - `history` keeps its sections (sessions/search/audit/replay/audience) until Phase B.
   - `automation` keeps its sections (scheduler/webhooks/plugins) until Phase B.
   - `appearance` keeps its sections (themes/viewer-config/fonts) until Phase D.

   Why: redirecting `history → system` would orphan `#/audit`, `#/sessions`, `#/search`, `#/audience` because the System accordion has no slug for them — the section content silently disappears. Same trap with `automation → system` (no scheduler slug) and `appearance → viewer` (no themes/fonts ownership). These bare URLs still resolve to their original `ADMIN_ROUTES` entry; the only thing missing is a sidebar button, which is the intended Phase A end state.

4. **Deep-link aliases preserve correctness.** The bare-retired redirect is consulted on the RAW URL slug BEFORE `_routeAliases` runs, so `#/audit` (alias-resolved to `nav: "history", tab: "audit"`) is NOT touched a second time. Aliases preserved: `audit / sessions / search / audience / scheduler / webhooks / plugins / themes / fonts / viewer-config`.

5. Smoke-test: every old hash + every deep-link alias still lands on its correct nav+tab; nothing 404s.

Risk: low. No HTML moved, no API changes. Just routing layer.

### Phase B — System accordion (medium)

1. Refactor `admin-system-accordion.js` to host 4 panels: settings / tokens / automation / history.
2. Move `sec-scheduler`, `sec-webhooks`, `sec-plugins` into the automation panel.
3. Move `sec-sessions-overview`, `sec-search-overview`, `sec-audit-overview`, `sec-history-tabs`, `history-v2-section`, `sec-history`, `sec-audience-overview` into the history panel.
4. Update browser tests (`test_browser_isolated.py` / `test_browser_p3_pages.py`) to know about the new tab paths.

Risk: medium. Section visibility is driven by data-active-route; moving sections changes which CSS rules apply. Need browser tests passing before merge.

### Phase C — Live cockpit reframe (medium-high — needs UX)

1. Rebuild `live` route view: drop heavy KPI charts; surface QR + conn state + recent danmu + start/stop/clear actions + mini poll/effect status as the cockpit.
2. Move detailed KPI / sparklines into `system > history > overview` or delete (most are duplicates of `/admin/metrics`).
3. Update `admin.html` template + the dashboard view templates.

Risk: this is the only phase that needs visual decisions (what stays, what goes, what shrinks). Could be a Phase C separate PR after Phase A+B ship cleanly.

### Phase D — Display / Viewer split from `appearance` (medium)

1. Split appearance route's tab strip:
   - Display tab → `display` route.
   - Viewer-config tab → `viewer` route.
   - Themes tab → `assets > themes` panel.
   - Fonts tab → `assets > fonts` panel.
2. Update `sec-viewer-config-tabs` rendering in `admin.html` if the tab labels change.

Risk: medium. CSS classes on tab strips assume the parent route; need to verify visual continuity.

### Phase E — bookkeeping

1. Update FEATURES.md to read "8 buckets + standalone Security".
2. Update browser tests (`test_browser_p3_pages.py`) for new route slugs.
3. Update CLAUDE.md / README admin section if it mentions specific route names.

---

## Risks / unknowns

1. **Cross-section CSS leaks** — some `.admin-dash-*` styles assume specific section IDs are present. Phase A might leave dead CSS rules; sweep needed.
2. **Browser tests** — many P3 page tests open `#/<route>` and expect specific section IDs visible. Each phase needs the corresponding test refresh in the same PR.
3. **Bookmarks / external links** — anything pointing to `#/widgets` from FEATURES.md, screenshots, or old comms needs the redirect to land cleanly. Phase A must ship redirects in the same commit.
4. **`automation` accordion vs collapsed nav** — moving scheduler/webhooks/plugins under `system > automation` changes the URL depth from `#/automation` (1 level) to `#/system/automation` (2 levels). Operators with muscle-memory may notice.
5. **Live route reframe (Phase C)** is the only phase that needs design judgment. Phases A / B / D / E are pure plumbing.

---

## Recommended landing order

1. **Phase A** alone in one PR — sidebar + routing redirects only. Ships in a day, low blast radius. Operators see the new sidebar; everything still works.
2. **Phase B + Phase D + Phase E** in a follow-up PR — section moves + bookkeeping. Browser tests refresh in the same PR.
3. **Phase C** separately — needs the Live page UX call. Could be deferred until after Phases A/B/D land and we observe real usage.

Total estimated diff: ~600-800 LoC in admin.js + admin.html + tests; net -200 because consolidation drops some duplicates.

---

## Owner ack checklist

Before I start Phase A, please confirm:

- [ ] 8 main slugs `live / display / effects / assets / viewer / polls / moderation / system` in this order are correct.
- [ ] `security` stays standalone, NOT inside `system` accordion. (Already locked per polestar; flagging for re-confirmation.)
- [ ] `控制台` → `直播` rename is OK, or keep `控制台` label even though route is `live`.
- [ ] `viewer` page defaults (per-field controls: color/size/opacity/etc) belong in `viewer` route, not under `display`. (HANDOFF doc says yes — but worth one re-read.)
- [ ] `widgets` consolidated under `display` rather than `assets`. (HANDOFF says display; some intuition might say assets since they're configurable items.)
- [ ] OK with hash-redirect aliases (no 404s on old links) instead of hard removal.
- [ ] OK landing Phase A first (sidebar swap only) before any section moves.
