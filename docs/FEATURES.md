# Danmu Fire — Feature Specification

**Status:** Canonical feature inventory (2026-04-25, v5.0.0)
**Audience:** designers, PMs, Claude Design agents
**Pairs with:** [DESIGN.md](../DESIGN.md) (design tokens), [CLAUDE.md](../CLAUDE.md) (project rules)

---

## What's new in 5.0.0

Quick reference for what shipped in this release. Full notes live in [CHANGELOG.md](../CHANGELOG.md).

- **Soft Holo HUD design retrofit** across viewer / admin / overlay (10 admin pages: Webhooks, Emojis, Sounds, Scheduler, Stickers, Live Feed, Fonts, Replay, Security, Backup).
- **Admin bootstrap endpoint** — `GET /admin/bootstrap` replaces the 25-fetch boot wave with a single payload.
- **Per-rate-limit telemetry** — `/admin/metrics` now reports hits / violations per limiter.
- **Effects live preview** — inline preview on Effects cards for all 8 built-in `.dme` animations.
- **Rate Limits live-apply** — `POST /admin/ratelimit/apply` applies new caps without restart.
- **⌘K command palette** — keyboard navigation between admin routes.
- **Edge-state pages** — viewer offline, overlay connecting, admin lockout (4 P2 states retrofitted).
- **Three new admin routes** — dedicated nav slugs for Replay, Security, Backup.
- **`admin.js` modularised** — split into login + dashboard modules.

---

## Why this file exists

Designers keep inventing features that already exist under different names, or proposing new features the codebase does not support. This doc is the complete, frozen feature map. **Before adding any new card, modal, button, or section to a mockup, confirm the feature is listed here.** If it is not, it does not exist — raise it as a separate scope discussion, do not silently expand the design.

Product boundaries:
- **Danmu Fire = overlay controller for livestreams.** A streamer sends text, the text flies across an OBS Browser Source overlay. That is the job.
- **Not** a chat app, **not** a full CMS, **not** a streaming platform, **not** a payment tool. Do not design toward those.

---

## Glossary

| Term | Meaning |
|---|---|
| **danmu / 彈幕** | A single scrolling message. Japanese "danmaku" / 子彈幕 lineage, ニコニコ動画 style. |
| **Overlay** | Transparent browser page loaded as an OBS Browser Source (or Electron child window) that renders danmu on top of the game/camera. |
| **Viewer** | Any visitor at `/` who types and fires a danmu. No login. |
| **Admin** | Password-gated operator at `/admin/`. Manages filters, themes, effects, history, automation. |
| **Desktop client** | Electron app (`danmu-desktop/`). Acts as streamer-side remote control + local overlay host. |
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
| **Desktop streamer** | Runs the Electron app | Remote-control the server + host a local overlay on a chosen display |

Viewers never log in. Admins never appear in the viewer UI. Desktop clients do not expose admin routes — the Electron app is a viewer-side tool that happens to be able to spawn an overlay window.

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
| Polls | `/admin/poll/{create,status,end,reset}` | 2–6 options (A/B/C/D…) question, live vote counts broadcast to overlays. **Viewer sees no percentages — admin-only metric.** |
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
| Rate-limit toggles (UI) | `#/ratelimit` route, `POST /admin/ratelimit/apply` | Three tiers: fire / admin / api; in-memory or Redis; live-apply without restart |
| WebSocket auth | `/admin/ws-auth[/rotate]` | Bearer token stored in `runtime/ws_auth.json` |
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

The v2 (design-v2-retrofit) admin is split into these routes. The left sidebar lists them in this order. **Do not add new routes.** Existing sections should map to these buckets:

| Route hash | Title (ZH) | Owns sections |
|---|---|---|
| `#/dashboard` | 控制台 | KPI tiles, route launcher, Nickname / active Theme summary |
| `#/messages` | 訊息紀錄 | Live feed, search |
| `#/history` | 時間軸匯出 | History table, hourly chart, top-text chart, export, clear |
| `#/replay` | 歷史重播 | Replay start / pause / resume / stop with speed multiplier |
| `#/polls` | 投票 | Poll create / status / end |
| `#/widgets` | Overlay Widgets | Widget CRUD + scoreboard updates |
| `#/themes` | 風格主題包 | Theme selector + bundle flags + reload |
| `#/display` | 顯示設定 | Viewer-facing defaults: Color, Opacity, FontSize, Speed, FontFamily, Layout |
| `#/viewer-theme` | 觀眾頁主題 | `/fire` viewer page appearance |
| `#/assets` | 素材庫 | Emojis, stickers, sounds upload + rules |
| `#/moderation` | 敏感字 & 黑名單 | Legacy blacklist + filter engine rules + test |
| `#/ratelimit` | 速率限制 | Fire / admin / api rate caps + backend toggle + live-apply |
| `#/effects` | 效果庫 .dme | Effect grid + YAML editor + upload + live preview |
| `#/plugins` | 伺服器插件 | Plugin list + enable/disable/reload |
| `#/fonts` | 字型管理 | Upload + list + delete + live preview |
| `#/system` | 系統 & 指紋 | System overview + scheduler + webhooks + fingerprints |
| `#/security` | 安全 | Password change + WS auth token + audit |
| `#/backup` | 備份 & 匯出 | Settings export / import + danger zone |

Section IDs (`sec-…`) are stable identifiers. See `ADMIN_ROUTES` in [admin.js](../server/static/js/admin.js).

---

## Desktop client features

The Electron app at [danmu-desktop/](../danmu-desktop/) has two windows. Treat them as separate products with one shared store.

### 1. Main window (`index.html`) — controller role

Streamer-side remote control. Three groups of controls:

**Connection**
- Server host + port input
- WebSocket auth token (optional, paste-only)
- Display target dropdown (populated from `API.getDisplays()`)
- Sync multi-display checkbox
- Start / Stop button → spawns the overlay child window
- Connection status badge (idle / connecting / connected / disconnected / failed)

**Display tuning** (persisted as `danmu-display-settings` in localStorage)
- Opacity slider 10–100%
- Speed slider 1–10
- Font size slider 20–100 px
- Color picker (hex)
- Text stroke toggle + width 1–5 px + color
- Text shadow toggle + blur 1–10 px
- Display-area top 0–80% + height 20–100% (masks where danmu can appear)
- Max tracks 0–20 (0 = unlimited)
- Collision detection toggle

**Other**
- Test danmu input + "Send" button
- Batch test (send N danmu with one click, 1–20)
- Startup animation: enable / type (LINK START / 領域展開 / custom text)
- Language selector (en / zh / ja / ko)
- Export / import settings (JSON file)
- Toast notifications (ephemeral)
- Particle canvas background (decorative)

### 2. Overlay window (`child.html`) — display role

Render-only. No user input. Spawned by the main window.

- Frameless, transparent, click-through
- Positioned to match selected display bounds (fullscreen or masked area)
- Receives danmu over WS (port 4001 by default)
- Track manager assigns each danmu to a collision-aware lane
- Applies display-area mask (top + height %)
- HUD label bottom-right shows active danmu count
- Heartbeat every 15s; reconnects with exponential backoff 3–30s, max 10 attempts
- Plays startup animation (LINK START / 領域展開 / custom) once per spawn
- Konami code (↑↑↓↓←→←→BA) on main window triggers an effect on all children

### 3. Main process + tray

- Tray icon + context menu (Open / About / Quit)
- Auto-updater via `electron-updater` — checks GitHub Releases on startup (10s delay) and every 4h
- About window (`about.html`) — version + GitHub link
- IPC surface (preload bridge) — see channels in [ipc-handlers.js](../danmu-desktop/main-modules/ipc-handlers.js); do not add new channels without extending preload

### 4. Packaging

Electron-builder produces: Windows NSIS + portable, macOS .dmg, Linux AppImage + .deb. Auto-update publishes to GitHub Releases for this repo.

---

## End-to-end scenarios

These are the canonical flows. Designs should cover all of them, and **only** these.

### Scenario A — Streamer preparing to go live
1. Launch desktop app → enter server host + port → pick display → Start
2. Open overlay in OBS Browser Source (or use the Electron overlay)
3. Open `/admin/` → pick theme → adjust default Color / Speed / FontSize → activate effects
4. Test with "Send test danmu"

### Scenario B — Viewer fires a danmu
1. Visit `/`
2. Type text → optional tweaks (color / effects / nickname) within admin-set ranges
3. Press Fire → danmu appears on overlay within ~100ms

### Scenario C — Admin handles spam
1. Spot bad danmu in `#/messages` live feed
2. Click block → adds fingerprint to filter engine OR adds keyword to blacklist
3. Optional: open `#/system` → Fingerprints → see rate / block count / state chip

### Scenario D — Mid-stream poll
1. `#/polls` → create question + 2–6 options (A/B/C/D…)
2. Overlays broadcast poll UI (widget)
3. Viewers vote via danmu text matching option label; **viewer never sees %** (only counts or unlabelled bars)
4. Admin ends poll → results pushed to overlay

### Scenario E — Scheduled promo
1. `#/system` → Scheduler → create job ("訂閱頻道!" every 300s)
2. Server fires the message on interval while stream is live
3. Pause / resume / cancel as needed

### Scenario F — Webhook-driven danmu
1. Admin registers inbound webhook → copies signed URL
2. External service (bot / CI / Twitch EventSub) POSTs to `/admin/webhook/incoming/<id>`
3. Server verifies signature → fires danmu

### Scenario G — Power-off
1. Admin `#/system` → END SESSION → clears history
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
3. **When adding a section to a mockup**: it must map to one of the 18 admin routes listed above. Do not invent a new one.
4. **When showing flows**: use the 7 scenarios above as the storyboard backbone.
5. **When in doubt about what persists**: check the persistence map. Volatile state should not have a "Reset" button unless the data visibly accumulates (fingerprints, history, widgets).

Last sync: 2026-04-25 against branch `claude/design-v2-retrofit`, server `APP_VERSION = 5.0.0`.
