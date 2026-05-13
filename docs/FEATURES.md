# Danmu Fire — Feature Specification

**Status:** Canonical feature inventory (2026-05-05, v5.0.0 actual admin IA)
**Audience:** designers, PMs, Claude Design agents
**Pairs with:** [DESIGN.md](../DESIGN.md) (design tokens), [CLAUDE.md](../CLAUDE.md) (project rules)

---

## What's new in 5.0.0 + 2nd-wave (synced 2026-05-05)

Quick reference. Full notes in [CHANGELOG.md](../CHANGELOG.md).

### First wave (commit `acca401` and earlier)
- **Soft Holo HUD design retrofit** across viewer / admin / overlay (10 admin pages: Webhooks, Emojis, Sounds, Scheduler, Stickers, Live Feed, Fonts, Replay, Security, Backup).
- **Admin bootstrap endpoint** — `GET /admin/bootstrap` replaces the 25-fetch boot wave with a single payload.
- **Per-rate-limit telemetry** — `/admin/metrics` now reports hits / violations per limiter.
- **Effects live preview** — inline preview on Effects cards for all 8 built-in `.dme` animations.
- **Rate Limits live-apply** — `POST /admin/ratelimit/apply` applies new caps without restart.
- **⌘K command palette** — keyboard navigation between admin routes.
- **Edge-state pages** — viewer offline, overlay connecting, admin lockout (4 P2 states retrofitted).
- **P0-0 admin IA consolidation** — sidebar is 10 work buckets plus a standalone
  Security row. Legacy route hashes alias into tabs, the System accordion, or
  deeplink-only pages. Dedicated mobile-admin was removed; `/admin/` uses its
  normal responsive layout on phones.
- **`admin.js` modularised** — split into login + dashboard modules.

### Second wave (2026-04-25 PM, post-`acca401`)

Triggered by Claude Design fetching a refreshed handoff bundle (5 new admin components: `admin-display-settings`, `admin-polls`, `admin-ratelimits`, `admin-viewer-theme`, `priority-2-pieces`).

- **Polls multi-question session + per-question image upload (P0-1)** — schema bumped to `poll.questions[]`; `POST /admin/poll/<id>/upload-image/<qid>` (≤2 MB, JPG/PNG/WebP, magic-byte check, path-traversal guarded). Public `GET /polls/media/<path>`. Backward-compat preserved for legacy single-question callers.
- **Polls Live HUD + Results page** — active-state replaces Builder with CountdownRing + leader-gradient bars + queue mini + auto-advance toggle; ended-state shows winner callout + ranked bars + Participation/Timeline tiles + CSV/JSON/copy export rail (per-question Tab pagination).
- **Display Settings v2 redesign (P0-3)** — full rewrite from `<details>` accordion to `1fr / 340px` two-column grid: 6 flat table-rows (`OPACITY · FONT SIZE · SPEED · COLOR · FONT FAMILY · LAYOUT`) + right-rail PreviewCard (live 2-pill stage) / DeployCard / SummaryCard. FontSize uses 5 monospaced chips, Layout uses 5-tile glyph grid, Color uses prototype 8-color palette.
- **Stickers multi-pack model (P1-4 backend)** — `StickerPack {id, name, enabled, weight, order}` + `Sticker.pack_id` FK persisted to `runtime/stickers/{packs,stickers}.json`. Idempotent migration assigns existing stickers to a synthetic `default` pack. New endpoints `POST /admin/stickers/packs/{create,<id>/toggle,<id>/rename,<id>/reorder,<id>}` + `POST /admin/stickers/<name>/assign`.
- **Sounds per-tile inline volume (P1-2)** — per-sound volume 0..1 persisted to `runtime/sounds/sound_volumes.json`; trigger-rule volume cascades over per-sound default. Inline 100-px slider per Sound tile.
- **Effects user `.dme` live preview (P3-2 follow-up)** — user-uploaded `.dme` cards now animate too (was: builtin-8-only). Lazy-fetches `/admin/effects/<name>/content` + `/admin/effects/preview`, injects keyframes, observes IntersectionObserver for off-screen pause.
- **Broadcast dedicated admin page (`/admin/#/broadcast`)** — state strip with circular cyan dot + `LIVE · 廣播中` + uptime/connections/messages meta + `⏸ 切到 STANDBY` magenta button; END BROADCAST card with `STANDBY` confirmation-code input + crimson `■ 結束廣播` (disabled until match) + LIVE-vs-STANDBY 5-bullet comparison.
- **Rate Limits enhancements** — LOGIN scope adds LOCKOUT seconds knob; per-scope 24-bar sparkline; `effective_rate = N/W · burst = round(N×1.5)` mono footer; bottom row gains ViolationsFeed (TIME / SCOPE / KEY / UA / HITS / [BLOCK]) + IpPolicyCard (DENY/ALLOW list).
- **Viewer Theme out-of-scope legend** — card under preview frame links to the right route per scope (彈幕色 → Theme Packs / 字級 → Display Settings / 效果 → Effects / 速率限制 → Moderation).
- **Viewer prototype parity sweep** — hero 2-col restored (left lockup + right ConnChip stack); single-language form labels; preview gradient + scanline; ConnChip `·` interpunct + `cyanSoft` online state; full-width `？` placeholder; Layout sub `右→左`; Hero font-size `clamp(3.2rem, 8vw, 6rem)` matching `HERO_SIZE.hero`.
- **Admin Login i18n alignment** — strings now match prototype literally (`管理後台登入` / `管理密碼` / `伺服器上線`); previous placeholder copy invented in commit `249d4bc` was replaced.

---

## Why this file exists

Designers keep inventing features that already exist under different names, or proposing new features the codebase does not support. This doc is the complete, frozen feature map. **Before adding any new card, modal, button, or section to a mockup, confirm the feature is listed here.** If it is not, it does not exist — raise it as a separate scope discussion, do not silently expand the design.

Product boundaries:
- **Danmu Fire = overlay controller for livestreams.** A streamer sends text, the text flies across an OBS Browser Source overlay. That is the job.
- **Not** a chat app, **not** a full CMS, **not** a streaming platform, **not** a payment tool. Do not design toward those.

### Product axes (v5.0.0 polestar — 2026-05-04)

| Axis | What it means | Primary surface |
|---|---|---|
| **發送 / Send** | Viewer types + fires a danmu in the shortest possible path | `server/templates/index.html` viewer page |
| **顯示 / Display** | Overlay renders danmu on stream / projector with stable WS connection | OBS Browser Source `/overlay` + Electron overlay child window |
| **效果 / Effects** | `.dme` keyframe bundles, themes, animations applied per-danmu | `server/effects/*.dme` + admin Effects page |
| **素材 / Assets** | Fonts, stickers, sounds, logos, theme packs | admin Assets page (集中管理) + `server/static/{stickers,emojis,sounds}` + `server/user_fonts/` |

Secondary (don't dilute the four axes above):

| Secondary | When it matters |
|---|---|
| **Polls** | Mid-stream interactive layer; viewer votes via A/B/C danmu, **never sees counts or percentages** |
| **Moderation** | Blacklist + filter rules + rate limits + fingerprint observability |
| **History / Audit / Notifications** | Post-event review; not on the live operating path |

Roles re-stated for v5.0.0:

- `server/viewer` = 觀眾發彈幕入口（only that）
- `server/admin` = 主播控制台（effects / assets / display 為主，polls / moderation 為輔）
- `client (Electron)` = 顯示端 (Overlay player) — connection + screen pick + show/hide/clear + status, **不是發彈幕入口、不是設定中心**

---

## Glossary

| Term | Meaning |
|---|---|
| **danmu / 彈幕** | A single scrolling message. Japanese "danmaku" / 子彈幕 lineage, ニコニコ動画 style. |
| **Overlay** | Transparent browser page loaded as an OBS Browser Source (or Electron child window) that renders danmu on top of the game/camera. |
| **Viewer** | Any visitor at `/` who types and fires a danmu. No login. |
| **Admin** | Password-gated operator at `/admin/`. Manages filters, themes, effects, history, automation. |
| **Desktop client** | Electron app (`danmu-desktop/`). Local display endpoint that connects to the server and hosts overlay windows on selected displays. |
| **Effect** (`.dme`) | YAML-defined CSS keyframe bundle. Hot-reloadable. |
| **Theme** | YAML bundle of `palette + font + layout + bg + effects_preset` flags. Hot-reloadable. |
| **Fingerprint** | SHA-256 of IP+UA used for rate limiting and moderation without persistent accounts. |

---

## User roles

Only four. Designs must respect them — no hybrid "power viewer" role etc.

| Role | How they arrive | What they can do |
|---|---|---|
| **Viewer** | Loads `/`, no auth | Type + fire danmu; pick color/opacity/size/speed/effects/font/layout from what admin allows |
| **OBS streamer** | Loads `/overlay` as OBS Browser Source | Render-only — no input UI |
| **Admin** | `/login` with password | Everything in `/admin/` — settings, moderation, content, automation, security |
| **API / plugin / webhook** | Machine callers | POST `/fire`, receive outbound webhooks, register plugins |
| **Desktop operator** | Runs the Electron app | Connect to the server, choose target display(s), show/hide/clear local overlay windows |

Viewers never log in. Admins never appear in the viewer UI. Desktop clients do not expose admin routes — the Electron app is a local overlay display endpoint, not a viewer surface or admin controller.

---

## Server features

Entry points live under `server/` (Flask app at port 4000 + dedicated WS server at port 4001).

### 1. Danmu lifecycle

The primary flow. Everything else exists to shape or gate this.

| Capability | Route / module | Scenario |
|---|---|---|
| Fire a danmu | `POST /fire` ([server/routes/api.py](../server/routes/api.py)) | Viewer / API caller / plugin submits text + optional style; server validates → filter → history → broadcast |
| List rendering options | `GET /get_settings`, `/fonts`, `/themes`, `/effects`, `/layouts`, `/emojis`, `/stickers` | Viewer page populates dropdowns |
| Overlay connection count | `GET /overlay_status` | Shows streamer if at least one overlay is listening |
| Generate avatar | `GET /avatar/<letter>/<color>` | Inline SVG placeholder for usernames |
| Serve uploaded fonts | `GET /user_fonts/<filename>?token=…` | Signed token, 900s default TTL |
| WS broadcast | `ws://host:4001/` | Separate server — pushes `danmu`, `widget_sync`, `poll_update`, `blacklist_update`, `metrics` messages to overlays |

**Rate limits:** `/fire` is 20/60s per IP by default. `/fire` returns 503 immediately if zero overlays are connected. Designs that show a "Fire" button must handle both states (throttled, no overlay).

### 2. Admin settings (the dashboard's core)

Admin sets *defaults + ranges* for viewer-side sliders. The set is fixed — **do not invent new settings**.

| Key | Type | Purpose |
|---|---|---|
| `Color` | hex string | Default text color |
| `Opacity` | int 0–100 | Default text opacity % |
| `FontSize` | int 20–100 | Default font size (px) |
| `Speed` | int 1–10 | Default scroll speed multiplier |
| `FontFamily` | string | Default font (NotoSansTC + uploads + system) |
| `Effects` | string[] | Default stacked effects |
| `Layout` | enum (scroll / top / bottom / float / rise) | Display mode (5 layouts) |
| `Nickname` | string | Default display name |

Stored in `server/runtime/settings.json`. See `SETTABLE_OPTION_KEYS` in [server/config.py](../server/config.py).

### 3. Moderation

| Capability | Route / module | Scenario |
|---|---|---|
| Live feed | [admin-live-feed.js](../server/static/js/admin-live-feed.js) | Real-time scroll of incoming danmu; admin blocks by fingerprint / keyword |
| History | `GET /admin/history`, `/history/clear`, `/history/export` | Paginated log (10K cap, 24h cleanup); CSV export |
| Hourly + top-text stats | `GET /admin/stats/hourly`, `/stats/top-text` | Retrospective charts |
| Legacy blacklist | `/admin/blacklist/{add,get,remove}` | Plain keyword list |
| Filter engine | `/admin/filters/{list,add,update,remove,test}` | Rule types: keyword / regex / replace / rate-limit / fingerprint; prioritized |
| Fingerprint observatory | `/admin/fingerprints`, `/fingerprints/reset` | LRU 1000 records, per-fingerprint msgs / rate / block count / state (active, flagged, blocked) |
| Replay | `/admin/replay/{start,status,pause,resume,stop}` | Replay past history with speed multiplier (QA tool) |

### 4. Content bundles

Admin uploads and toggles content that viewers / overlays can use. Hot-reloadable where noted.

| Bundle | Files | Admin routes | Hot-reload |
|---|---|---|---|
| Themes | `server/themes/*.yaml` (default, neon, retro, cinema) | `/admin/themes[/active,/reload]` | Yes |
| Effects | `server/effects/*.dme` (blink, bounce, glow, rainbow, shake, spin, wave, zoom + custom) | `/admin/effects[/<name>/content,/save,/upload,/delete,/preview]` | Yes (mtime) |
| Fonts | `server/runtime/fonts/` (.ttf/.otf/.woff2) | `/admin/fonts`, `/admin/upload_font`, `DELETE /admin/fonts/<name>` | Yes |
| Sounds | `server/static/sounds/` + `sound_rules.json` | `/admin/sounds/{list,upload,delete,rules/{add,remove}}` | Yes |
| Stickers | `server/static/stickers/` | `/admin/upload_sticker`, `DELETE /admin/stickers/<name>` | Yes |
| Emojis | `server/static/emojis/` | `/admin/emojis/{list,upload,delete}` | Yes |

Theme bundle flags (`palette / font / layout / bg / effects`) drive the admin badge UI. Example: `neon` bundles all five; `default` bundles none.

### 5. Automation

| Capability | Routes | Scenario |
|---|---|---|
| Scheduler | `/admin/scheduler/{list,create,pause,resume,cancel}` | Timed repeating danmu (e.g. "訂閱頻道!" every 5 min); max 20 jobs |
| Polls | `/admin/poll/{create,start,advance,status,end,reset}` + `POST /admin/poll/<id>/upload-image/<qid>` + public `GET /polls/media/<path>` | Multi-question session: each question has 2–6 options (A/B/C/D…) + optional image (≤2MB, JPG/PNG/WebP). Live vote counts broadcast to overlays and admin. **Viewer poll tab shows only the question and option keys/text; counts and percentages are admin-only.** Legacy single-question shape still supported. |
| Widgets | `/admin/widgets/{list,create,update,delete,score,clear}` | Overlay widgets: scoreboard / ticker / label with position presets |

### 6. Extensions

| Capability | Routes / directory | Scenario |
|---|---|---|
| Webhooks (outbound) | `/admin/webhooks/{list,register,unregister,test}` | Forward fired danmu to Discord / Slack / custom JSON; signature-verified |
| Webhook (inbound) | `POST /admin/webhook/incoming/<hook_id>` | External service can fire danmu via signed webhook |
| Plugins | `server/plugins/` + `/admin/plugins/{list,enable,disable,reload}` | Python hooks on `on_fire`; streamer can install community plugins |

### 7. Security surface

Designers should show these controls on the admin UI but **never invent new ones**.

| Feature | Route / module | Config |
|---|---|---|
| Login | `POST /login`, rate-limited 5/5min | `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASHED` or `.admin_password.hash` |
| Change password | `POST /admin/change_password` | Writes bcrypt to `.admin_password.hash` |
| CSRF | Token in session, `<meta name="csrf-token">`, `X-CSRF-Token` header | `SESSION_COOKIE_SAMESITE=Strict` |
| Rate-limit toggles (UI) | `#/moderation/ratelimit`, `POST /admin/ratelimit/apply` | Three tiers: fire / admin / api; in-memory or Redis; live-apply without restart |
| WebSocket auth | `#/security`, `/admin/ws-auth[/rotate]` | Bearer token stored in `runtime/ws_auth.json` |
| Trusted Hosts + ProxyFix | `TRUSTED_HOSTS`, `TRUST_X_FORWARDED_FOR` | Server-level config, not admin UI |
| CSP + HSTS | `app.py` | Nonce per request; HSTS opt-in for prod |

### 8. Observability

| Capability | Route |
|---|---|
| Health probes | `GET /health`, `/health/ready`, `/health/live` (Kubernetes-style) |
| Metrics | `GET /admin/metrics` (uptime, msg count, client count, per-limiter hits / violations) |
| Admin bootstrap | `GET /admin/bootstrap` (single-payload boot data — replaces 25-fetch fan-out) |
| Live feed (see §3) | WS push + admin UI |

---

## Server admin route map → UI pages

The admin IA is the locked P0-0 shape: 10 primary work buckets plus one
standalone Security row. Security intentionally stays outside the System
accordion because password / WS-token / audit work is a high-frequency operator
entry. **Do not add new top-level rows.** Existing sections should map to these
buckets:

| Route hash | Title (ZH) | Owns sections |
|---|---|---|
| `#/dashboard` | 控制台 | Live console, KPI strip, quick actions, active poll summary |
| `#/polls` | 投票 | Poll builder, active session, results, deeplink to poll deep-dive |
| `#/effects` | 效果 | Effect library + `.dme` management / preview |
| `#/moderation` | 審核 | Tabs: blacklist, filters, rate limits, fingerprints |
| `#/widgets` | 小工具 | Overlay widgets: scoreboard, ticker, label |
| `#/appearance` | 外觀 | Tabs: themes, viewer config, fonts |
| `#/assets` | 素材 | Unified upload entry + emojis, stickers, sounds |
| `#/automation` | 自動化 | Tabs: scheduler, webhooks, plugins |
| `#/history` | 歷史 | Tabs: sessions, search, audit, replay, audience |
| `#/system` | 系統 | Accordion: overview, Fire Token, API tokens, backup, integrations, WCAG, about |
| `#/security` | 安全 | Standalone row: password change, WS auth token, current session, audit preview |

Legacy hashes still resolve where useful: `#/ratelimit` → `#/moderation/ratelimit`,
`#/themes` / `#/viewer-config` / `#/fonts` → `#/appearance/...`,
`#/scheduler` / `#/webhooks` / `#/plugins` → `#/automation/...`,
`#/sessions` / `#/search` / `#/audit` / `#/audience` → `#/history/...`, and
`#/firetoken` / `#/api-tokens` / `#/backup` / `#/integrations` / `#/wcag` /
`#/about` → `#/system/...`. `#/mobile` is deprecated and resolves to
`#/system/system`; the dedicated mobile-admin page was removed in favor of the
regular responsive admin shell.

Deeplink-only routes remain available for workflow overlays or focused pages:
`#/setup`, `#/poll-deepdive`, `#/broadcast`, `#/notifications`,
`#/session-detail`, and `#/onboarding-tour`. Section IDs
(`sec-...`) are stable identifiers. See `ADMIN_ROUTES` in
[admin.js](../server/static/js/admin.js).

---

## Desktop client features

The Electron app at [danmu-desktop/](../danmu-desktop/) has two windows. Treat them as separate products with one shared store.

### 1. Main window (`index.html`) — display controller (v5.0.0+)

> **Re-positioned in v5.0.0:** the desktop client is the **顯示端 / Overlay
> player**, not a remote control panel. Display tuning (opacity / speed /
> font / color / stroke / shadow / track count) lives in **`/admin/`**,
> not here. The client currently has three sidebar tabs total: Connection,
> Overlay, and About.

**Connection** (sidebar `連線 / CONNECTION`, default tab on first run)
- Server host (IP or hostname) + port input
- WebSocket auth token (optional, paste-only — admin generates via
  `/admin/` → WebSocket token auth section)
- Test connection button — opens `wss://${host}:${port}/ws` and reports
  pass/fail (matches the actual runtime URL since v5.0.0)
- Recent servers list (persists last successful host)
- Connection status badge (idle / connecting / connected / disconnected
  / failed) + reconnect count / uptime metrics

**Overlay** (sidebar `Overlay / DISPLAY`)
- Display target chips backed by `API.getDisplays()`
- Sync multi-display checkbox (spawn one overlay per display)
- One primary runtime control:
  - `開啟 / 關閉 Overlay` button — spawns/closes the overlay child window + WS
- One secondary action:
  - `⌫ 清空畫面` — sends `overlay-clear` IPC to every overlay window so
    they drop currently-rendering danmu **without disconnecting WS**
- Note panel reminding the user that danmu styling (font / color / size /
  opacity / speed / layout / effects) lives in the viewer + admin, not
  here

**About** (sidebar `關於 / ABOUT`)
- Version, platform, GitHub link, license
- Update check / download progress / restart-to-install actions

**Persisted state** (localStorage `danmu-settings`)
- `host`, `port`, `displayIndex`, `syncMultiDisplay`, `wsToken`
- (No `useWss` field since v5.0.0 — wss is the only path.)
- (No display-tuning fields — those are server-side admin settings.)

**Removed in v5.0.0** (was in the old controller; now lives in admin or
was deprecated):
- ✗ Opacity / speed / font-size / color / stroke / shadow sliders
- ✗ Display-area top / height masks, max tracks, collision detection
- ✗ Test danmu input, batch test
- ✗ Startup animation (LINK START / 領域展開 / custom) UI controls
- ✗ Export / import settings buttons (will likely return as Advanced)
- ✗ "Use WSS" checkbox (always wss now)

### 2. Overlay window (`child.html`) — display role

Render-only. No user input. Spawned by the main window.

- Frameless, transparent, click-through
- Positioned to match selected display bounds (fullscreen)
- Receives danmu over **`wss://${host}:${port}/ws`** (v5.0.0 unified — `--profile https` terminates TLS at nginx, port 4001 exposed)
- Self-signed cert auto-trusted via `trusted-wss-hosts` registry (scoped to current `host:port` only — never global)
- Track manager assigns each danmu to a collision-aware lane
- Applies admin-side display-area mask (top + height %) when configured server-side
- HUD label bottom-right shows active danmu count
- Heartbeat every 15s; reconnects with exponential backoff 3–30s, max 10 attempts
- Listens for `overlay-clear` IPC from main → drops `.danmu / .danmu-wrapper / h1.danmu` nodes without touching WS
- Plays startup animation (LINK START / 領域展開 / custom) once per spawn — settings come from `loadStartupAnimationSettings()` localStorage default; UI controls were removed from main window in v5.0.0
- Konami code (↑↑↓↓←→←→BA) on main window triggers an effect on all children

### 3. Main process + tray

- Tray icon + context menu (status snapshot / show control window / About / Quit)
- Auto-updater via `electron-updater` — checks GitHub Releases on startup (10s delay) and every 4h
- About window (`about.html`) — version + GitHub link
- IPC surface (preload bridge) — see channels in [ipc-handlers.js](../danmu-desktop/main-modules/ipc-handlers.js); do not add new channels without extending preload

### 4. Packaging

Electron-builder produces: Windows NSIS + portable, macOS .dmg, Linux AppImage + .deb. Auto-update publishes to GitHub Releases for this repo.

---

## End-to-end scenarios

These are the canonical flows. Designs should cover all of them, and **only** these.

### Scenario A — Streamer preparing to go live (v5.0.0)
1. Launch desktop app → first-run gate prompts host/port → "Test connection" runs `wss://${host}:${port}/ws` against the configured server
2. Pick display in the Overlay tab → click `開啟 Overlay` → overlay child window spawns on chosen display
3. Open `/admin/` (browser, not in client) → pick theme → adjust default Color / Speed / FontSize → activate effects
4. Send a real danmu from `/` (or another viewer) to confirm rendering. **Test danmu UI no longer in client — that moved to admin.**

### Scenario B — Viewer fires a danmu
1. Visit `/`
2. Type text → optional tweaks (color / effects / nickname) within admin-set ranges
3. Press Fire → danmu appears on overlay within ~100ms

### Scenario C — Admin handles spam
1. Spot bad danmu in `#/messages` live feed
2. Click block → adds fingerprint to filter engine OR adds keyword to blacklist
3. Optional: open `#/moderation/fingerprints` → see rate / block count / state chip

### Scenario D — Mid-stream poll
1. `#/polls` → create question + 2–6 options (A/B/C/D…)
2. Overlays broadcast poll UI (widget)
3. Viewers vote via danmu text matching option label; **viewer never sees counts or percentages**
4. Admin ends poll → results pushed to overlay

### Scenario E — Scheduled promo
1. `#/automation/scheduler` → create job ("訂閱頻道!" every 300s)
2. Server fires the message on interval while stream is live
3. Pause / resume / cancel as needed

### Scenario F — Webhook-driven danmu
1. Admin registers inbound webhook → copies signed URL
2. External service (bot / CI / Twitch EventSub) POSTs to `/admin/webhook/incoming/<id>`
3. Server verifies signature → fires danmu

### Scenario G — Power-off
1. Admin `#/system/backup` → END SESSION → clears history
2. Streamer closes desktop app → tray quit → child windows auto-close

---

## Persistence map

Where state lives. Useful when designing sections that imply "save" / "restore" / "reset" affordances.

| Store | Path | Lifetime |
|---|---|---|
| Settings | `server/runtime/settings.json` | Persistent |
| Filter rules | `server/runtime/filter_rules.json` | Persistent |
| Webhooks | `server/runtime/webhooks.json` | Persistent |
| WS auth | `server/runtime/ws_auth.json` (chmod 0o600) | Persistent |
| Uploaded fonts | `server/runtime/fonts/*.ttf\|otf\|woff2` | Persistent |
| Sound rules | `server/static/sounds/sound_rules.json` | Persistent |
| Plugin state | `server/plugins_state.json` | Persistent |
| Admin password hash | `server/.admin_password.hash` (chmod 0o600) | Persistent |
| Themes | `server/themes/*.yaml` | Read-only + hot-reload |
| Effects | `server/effects/*.dme` | Read-write + hot-reload |
| History | in-memory, 10K cap, 24h cleanup | Volatile |
| Fingerprints | in-memory LRU 1000 | Volatile |
| Widgets / polls / scheduler jobs | in-memory | Volatile |
| Desktop settings | `localStorage[danmu-settings]`, `[danmu-display-settings]`, `[danmu-startup-animation]` | Per-user-profile |

---

## Non-features (DO NOT design these)

These do not exist and are out of scope. If a mockup implies one of these, flag it back before building.

- ❌ User accounts / sign-up / profiles (viewers are anonymous)
- ❌ Payments, tips, subscriptions, Stripe / 金流
- ❌ Multi-tenant / per-stream isolation (one server = one streamer)
- ❌ Video recording, VOD, clip export
- ❌ Chat (two-way conversations) — danmu is one-shot, fire-and-forget
- ❌ DM / private messages between viewers
- ❌ Emoji reactions on danmu (no upvote / heart / reply)
- ❌ AI moderation / LLM summarization (filter engine is deterministic)
- ❌ Analytics beyond hourly + top-text charts (no funnels, no segments, no retention)
- ❌ Mobile app (desktop client is Electron only; web viewer works on mobile browser but not packaged)
- ❌ Multi-language danmu translation
- ❌ Push notifications to external devices
- ❌ Role-based permissions — there is exactly one admin password
- ❌ Version history / undo for settings or filter rules
- ❌ Cloud sync between desktop installs

If a designer wants one of these, it is a **new product scope** and needs explicit approval, not a stealth addition to a mockup.

---

## How to use this doc

1. **Before designing a new screen**: find the matching capability above. If not found, stop and discuss scope.
2. **When proposing a rename**: use the canonical term in the left column of the tables. Do not rename `Effects` to "Animations" etc.
3. **When adding a section to a mockup**: it must map to one of the 10 admin buckets, the standalone Security row, or one of the deeplink-only routes listed above. Do not invent a new one.
4. **When showing flows**: use the 7 scenarios above as the storyboard backbone.
5. **When in doubt about what persists**: check the persistence map. Volatile state should not have a "Reset" button unless the data visibly accumulates (fingerprints, history, widgets).

Last sync: 2026-05-05 against current `danmu-desktop` workspace, server `APP_VERSION = 5.0.0`.
