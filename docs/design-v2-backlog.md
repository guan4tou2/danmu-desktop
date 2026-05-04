# Danmu Fire · Design v2 Backlog

**Handoff target:** Claude Design (claude.ai/design) — visual + IA decisions.
**Engineering target:** this repo, branch `claude/design-v2-retrofit`.
**Status:** viewer / overlay / admin / theme packs / Electron client already
aligned to the v2 handoff bundle. This doc tracks the **remaining design work**
Claude Design needs to produce before engineering can finish.

Each item below is self-contained and can be pasted directly into a new
Claude Design chat. Items are ordered by blocker severity, not chronology.

---

## How to read this doc

Every item follows the same shape:

- **Context** — what the feature is and who uses it
- **Current state** — what ships today
- **Goal** — the end state we're designing toward
- **UX requirements** — concrete rules the design must obey
- **Technical constraints** — what the backend / Electron / browser imposes
- **Open questions** — what Claude Design needs to decide

When a section says "already implemented", it means this repo already has
the code for it; Claude Design doesn't need to redesign, just reference.

Colors referenced: cyan `#38bdf8`, amber `#fbbf24`, lime `#86efac`, crimson
`#f87171`, slate-950 `#020617`, slate-900 `#0f172a`, slate-100 `#f1f5f9`.
Fonts: Bebas Neue (display), IBM Plex Mono / JetBrains Mono (mono),
Noto Sans TC (UI).

---

## P0 · Architectural blockers

These decisions change how multiple pages behave. Resolve first so downstream
designs don't have to be redone.

### P0-0 · Positioning pivot + IA restructure (32 → 10 nav)

> **Added 2026-05-04. This item supersedes parts of P0-2/P0-3, P1-* page-by-page
> retrofits, P3-* dashboard polish, and parts of P5-1.** Read this first.

**Context.** v5.0.0 shipped a 32-route admin with 50 JS modules / 23,177 lines.
The information architecture grew by accretion (one nav slot per feature) rather
than by use case. Symptom: ⌘K command palette is now necessary just to navigate
the admin — i.e. IA has failed and search is patching it. Backlog still queues
multi-question polls, Plugin SDK, multi-pack stickers, and Logo upload — every
addition makes the navigation worse.

The remaining design work in this doc was scoped before the positioning was
sharp. Most items are still valid as **content briefs**, but their **placement**
in the nav is now wrong.

**Polestar (decided 2026-05-04 with project owner).**

> **danmu-desktop is a desktop tool for a single presenter at a 1–4 hour
> small/mid-sized event, used to drive audience interaction and warm up the
> atmosphere.** It is not a moderation platform, not an enterprise integration
> hub, not a data warehouse. Polls / Effects / Emojis / Stickers / Sounds /
> Themes are the product. Audit / API tokens / Plugin SDK / Webhooks are tail.

**Operating cadence.** Hybrid: there is a default kit, but every event tweaks
themes, blacklist, presenter name, poll deck. Setup happens 30 min before; the
real interaction window is 1–4 hours of live operation.

**Frequency tiers.** Use this to decide nav prominence and visual weight:

| Tier | Cadence | Features |
|---|---|---|
| **S** — visible at all times during the event | every minute live | dashboard / live-feed, polls, effects, fast moderation |
| **A** — touched each event during prep or mid-event tweaks | each event | themes + viewer-theme + display + fonts, emojis + stickers + sounds, widgets, broadcast |
| **B** — touched every few events / monthly | monthly | scheduler, ratelimit, history + sessions + search + replay, notifications, audience |
| **C** — deploy / new device / special incident | 1–3× per year | setup, system, security, firetoken, backup, audit, about, wcag, mobile, integrations, plugins |

**Goal.** Restructure the admin nav from **32 → 10**, and reframe the
Dashboard from "summary cards" into **a live control console** that surfaces
S-tier operations directly without sub-nav.

**Final nav structure (10 items, ordered).**

| # | Nav slug | Type | Contains (was) |
|---|---|---|---|
| 1 | `dashboard` | Live console | Live feed (was `messages`), 4 quick actions (open poll · trigger effect · add to blacklist · push broadcast), KPI strip, notification tray bell (was `notifications`), recent moderation w/ undo |
| 2 | `polls` | Single page | Poll builder + history + scheduling (already in v5) |
| 3 | `effects` | Single page | Effects library + .dme management (kept independent — core differentiator) |
| 4 | `moderation` | Tabbed | blacklist + filters + ratelimit + fingerprints |
| 5 | `widgets` | Single page | Overlay widgets (kept A-tier per owner — used every event) |
| 6 | `appearance` | Tabbed | themes + viewer-theme + display + fonts |
| 7 | `assets` | Already merged | emojis + stickers + sounds (preserve current `assets` page) |
| 8 | `automation` | Tabbed | scheduler + webhooks + plugins (plugins on "Advanced" tab) |
| 9 | `history` | Tabbed | sessions + search + audit + replay + audience |
| 10 | `system` | Accordion | setup + security + firetoken + backup + about + integrations + wcag + mobile |

**Removed from main nav (NOT removed from product — endpoints preserved).**

| Slug | Disposition |
|---|---|
| `messages` | Live feed lifts to `dashboard` body |
| `notifications` | Becomes a topbar bell with tray dropdown |
| `broadcast` | Becomes the "推播訊息" quick-action button on `dashboard` |
| `setup` | First-run modal triggered automatically; reachable from `system` |
| `onboarding-tour` | Becomes a contextual spotlight first time the user enters each section; no nav slot |
| `wcag` | Becomes an inline contrast check inside `appearance` color editors |
| `mobile` | Treated as RWD breakpoints, not a separate page |
| `themes` `viewer-theme` `display` `fonts` | Tabs inside `appearance` |
| `sessions` `search` `audit` `replay` `audience` | Tabs inside `history` |
| `security` `firetoken` `backup` `about` `integrations` `plugins` | Sections in `system` accordion |

**Frozen until requested by real users.**

- P0-1 multi-question polls + per-question image — schema bump too large for current usage signal
- P1-4 multi-pack stickers — same
- P6-3 Plugin SDK Stage 2 expansion — already deferred 2026-04-24, stays deferred
- Onboarding Tour expansion beyond contextual spotlight

**UX requirements (for Claude Design).**

1. **`dashboard` is the centerpiece.** Design it as a single-screen live console
   (no inner scroll on 13" laptop at 1440×900). The screen exists for the 1–4
   hours where the presenter glances at it between sentences:
   - 60% area: live message feed, newest at top, auto-scroll w/ pause-on-hover
   - 4 large quick-action targets visible at all times: poll launcher, effect
     trigger row (8 .dme cards as a strip), blacklist textbox, broadcast textbox
   - KPI rail (online viewers · msg/s · queue depth · session timer)
   - Topbar: notification bell · session selector · settings cog (jumps to nav)
   - No "summary card" decoration; everything visible is interactive
2. **Tabbed pages (`moderation`, `appearance`, `automation`, `history`)** must
   share a common tabbed container component. Tab order = frequency-of-use,
   not alphabetical. Default tab = the one most likely needed mid-event.
3. **`system` accordion**: each row is a leaf settings page. Default-collapsed.
   No mid-event reason to open this; design it to feel "back of the manual".
4. **Notification tray bell**: dropdown with last 10 events, severity color,
   click → jump to relevant page. Replaces the standalone `notifications` nav.
5. **Quick-action implementation note**: backend endpoints already exist
   (`/admin/polls/start`, `/admin/effects/preview`, `/admin/blacklist`,
   `/admin/broadcast`). Dashboard wires to existing routes — no new API needed
   for v1 of the live console.
6. **Mobile**: design dashboard at 360px first; tabs collapse to a select;
   accordion already mobile-friendly. The `mobile` page disappears.

**Technical constraints.**

- All current endpoints under `/admin/*` MUST remain reachable (v5.0.0 is live
  on Oracle VPS; some users may have URL bookmarks, Electron config may persist
  hash routes). Removing from nav ≠ removing endpoint.
- `/admin/bootstrap` already returns 16 sections covering S+A tier data; no
  schema change needed for the dashboard pivot. Audit / sessions / replay are
  fetched on-demand when entering the History tab.
- i18n: every nav label needs zh-TW + en strings; existing key prefix is
  `adminNav.*`. New tab containers need new keys.
- Tests: `test_browser_p3_pages.py` asserts current nav structure — needs
  update once new IA lands.

**Resolved 2026-05-04 (with Claude Design).** Layout locked at 1440×900 / 13"
no inner scroll. Decisions:

1. **Topbar = compact (zh label + icon, no EN kicker).** Right cluster has 4
   slots (session selector · ⌘K · bell · cog). EN kicker would push the
   session selector off the line at 1440. EN kicker dropped from topbar; it
   was decoration, not function.
2. **Effect trigger strip = 8 cards horizontal scroll.** Hiding 4 behind a
   "more" toggle reduces trigger frequency, which is anti-polestar (Effects
   are core to atmosphere). Horizontal scroll keeps all 8 reachable in one
   gesture on desktop. Mobile RWD breakpoint may switch to 4×2 grid; that's
   a separate decision.
3. **Quick-action feedback = toast + inline (rule-bound).** Toast is the
   universal success notification — fires on every quick-action result
   ("blacklisted ✓", "poll started ✓", "broadcast sent ✓"). Inline green
   bar appears **only when the action is undoable** — blacklist / mute /
   block-message. Non-undoable actions (poll start, broadcast push) get
   toast only. This makes the two channels semantically non-overlapping
   so they never compete for the same eye-second.
4. **Recent actions = right-rail sidebar, not bell-only.** Live console is
   used for 1–4 continuous hours; presenter needs zero-click access to
   their own recent moderation history with undo buttons. The bell stays
   for system/server notifications (e.g. webhook failure, rate-limit
   threshold crossed). Sidebar shows last ~10 own actions with one-tap
   undo where applicable.

**Items in this doc that this section now scopes down.**

- P0-2 (Viewer Theme separate from Theme Packs): still valid as a *concept*
  but now lives as a tab inside `appearance`, not a standalone nav.
- P0-3 (Display Settings per-setting toggle): still valid; lives as a tab
  inside `appearance`.
- P1-1 (Webhooks dedicated page): scoped down to a tab inside `automation`.
- P1-2 (Sounds dedicated page): already merged into `assets` in v5; this
  doc's P1-2 is obsolete.
- P1-3 (Emojis dedicated page): same — merged into `assets`.
- P1-4 (Stickers dedicated page): same — merged into `assets`. Multi-pack
  remains frozen.
- P1-5 (Scheduler dedicated page): scoped down to a tab inside `automation`.
- P1-6 (Live Feed dedicated page): replaced — live feed is now the dashboard
  body, not a separate page.
- P1-7 (Replay dedicated page): scoped down to a tab inside `history`.
- P1-8 (Fonts upload): kept as a tab inside `appearance`.
- P1-9 (Security dedicated page): scoped down to a section inside `system`
  accordion.
- P1-10 (Backup & Export): scoped down to a section inside `system` accordion.
- P3-7 (Dashboard topbar consistency): superseded — dashboard is being fully
  redesigned, topbar is part of that.
- P5-1 (User-facing naming "Danmu Fire"): still applies, but only inside the
  10 final pages.

---

### P0-0a · Tab container shared chrome (moderation / appearance / automation / history)

> **Added 2026-05-04. Sub-item of P0-0.** Specifies the shared chrome that
> backs 4 of the 10 final nav pages. Solving this first (before `system`
> accordion) gives 4× leverage and sets the visual language for the whole
> settings layer.

**Context.** P0-0 collapses 17 legacy nav slots into 4 tabbed pages. All 4 use
the same chrome — same tab strip, same kicker placement, same loading rules,
same mobile collapse. Without a shared component, four teams would re-solve
the same UX questions four times and drift visually. Solving the chrome once
also unlocks the `system` accordion, which can reuse the same kicker / section
header conventions.

**Scope.** 4 tabbed pages:

| Nav | Tabs (left → right, frequency order) | Default tab |
|---|---|---|
| `moderation` | **blacklist** · filters · ratelimit · fingerprints | blacklist |
| `appearance` | **themes** · viewer-theme · display · fonts | themes |
| `automation` | **scheduler** · webhooks · plugins (Advanced) | scheduler |
| `history` | **sessions** · search · audit · replay · audience | sessions |

**Default tab rule.** "Most likely needed mid-event" → first tab. Defaults
above are picked by what the presenter reaches for during a 1–4 hour live
event (`blacklist` for trolls; `themes` for opening setup; `scheduler` for
fire-at-time presets; `sessions` for "what just happened"). Tab order also
follows frequency, not alphabetical or technical grouping.

**UX requirements.**

1. **Single shared component.** One React-style tabbed container reused by
   all 4 pages. Page-specific content slots into the body; chrome (tab strip,
   header, kicker) is identical.
2. **Persisted last-active tab per nav.** When user leaves `moderation` on
   the `filters` tab and comes back, restore `filters`, not the default. Use
   `sessionStorage` (clears on logout). Cross-session persistence not needed.
3. **Deep-linkable tabs.** URL hash format: `#/<nav>/<tab>` (e.g.
   `#/moderation/blacklist`). Plain `#/<nav>` falls through to the default
   tab. Bookmarkable, shareable, back-button works.
4. **Badges on tab labels.** Each tab can publish a badge count (e.g.
   `blacklist (23)`, `webhooks (3 failing)`). Badge tone: neutral for
   neutral counts, amber for "needs attention" (failing webhooks, expired
   schedules), crimson for "broken" (rate-limit hits in last 60s). Badges
   refresh on the same cadence as the dashboard KPI rail.
5. **Mobile collapse.** Below 640px, tab strip becomes a `<select>` element.
   Native styling, no custom dropdown. Active tab body stays full-width.
6. **Loading per tab.** Switching tabs MUST NOT block — show a 200ms
   skeleton if the tab's data isn't in the bootstrap snapshot, otherwise
   render instantly. Don't lock the tab strip during fetch.
7. **Empty states.** Each tab's empty state lives inside the tab body, not
   the chrome. Chrome stays consistent regardless of tab content.
8. **Heterogeneous content shapes.** Chrome must accommodate four different
   content patterns without forcing a layout assumption: rule list +
   detail (moderation), color picker + live preview (appearance), calendar
   or list (automation), timeline + filter rail (history). The chrome
   provides only header + kicker + tab strip; below that, each tab owns
   its own layout.

**Technical constraints.**

- All current sub-page endpoints already exist (e.g. `/admin/blacklist`,
  `/admin/filters`, `/admin/ratelimit`). The chrome doesn't fetch — each
  tab body fetches what it needs (or reads from the bootstrap snapshot).
- `/admin/bootstrap` already returns `blacklist`, `filters`, `themes`,
  `scheduler`, `webhooks` — covers the S/A-tier defaults. Audit / sessions
  / audience etc. lazy-load on tab activation since they're B-tier.
- `i18n` keys: `adminTabs.<nav>.<tab>.label` + `adminTabs.<nav>.<tab>.kicker`.
  Both zh-TW and en strings required at the same time as the tab lands.
- Tests: `test_browser_p3_pages.py` will need a tabbed-navigation helper.
  Each tab change should be assertable independently.

**Open questions for Claude Design.**

1. Tab strip visual treatment — underlined active tab, pill, segmented
   control, or something else? Must match the live-console dashboard's
   visual register (cyan accent on slate-950).
2. Badge placement — inline after the label (`Webhooks (3)`) or as a small
   dot? Affects label width; inline costs more horizontal space but reads
   faster.
3. Tab strip overflow at 1440 — `appearance` has 4 tabs, `history` has 5.
   Does the strip ever need horizontal scroll, or do we cap at 5 and force
   any further additions to use a sub-page model?
4. Sticky tab strip when the body is long-scrollable? Most relevant for
   `history` (long lists) and `appearance` (long settings forms).

---

### P0-1 · Polls — multi-question with ordering + per-question image

**Context.** Polls are the second-largest interaction surface after danmu.
Currently one poll has one question with 2–6 options (A/B/C/D/E/F).
Presenters have asked to chain questions and attach visuals.

**Current state.**
- Schema: `poll_state = {active, question, options[{label, votes}], remaining_seconds}`
- UX: single-question builder on `/admin` → Polls page with text input + option rows + 時限 select + `START ▶`
- Viewer: no Poll tab (removed per v2 chat); audience votes by sending `A` / `B` / `C` etc as danmu

**Goal.** Support a poll **session** with ≥1 ordered questions, each with
optional image. Presenter advances manually or on timeout.

**UX requirements.**
- Presenter view (admin) must let user:
  - Add / remove / reorder questions (drag handle, up/down arrows, or numbered list)
  - Per question: text input + 2–6 option rows + optional image upload
  - Preview how the question looks on the overlay before starting
  - See total question count + "current position" during live session
- Audience view (overlay + viewer): shows only current question; advance is
  server-pushed. Previous answer confirmations shouldn't bleed into next.
- Image must be a **single upload per question** (not a gallery). Max 2 MB,
  JPG/PNG. Displayed as hero above the option letters.

**Technical constraints.**
- Backend schema bump required: `poll.questions: [{id, text, options[], image_url, order}]`
- Image hosting: local `server/runtime/polls/<poll_id>/<q_id>.jpg` served from `/polls/media/`
- Mobile clients may have no image; must degrade cleanly if `image_url` null
- Carrying over votes across questions is **not** in scope — each question resets

**Open questions.**
- Can questions have different time limits, or one global per session?
- Do questions always chain automatically, or is presenter-advance the default?
- Image ratio (16:9 for slides, 1:1 square for social-style, or free-form)?

---

### P0-2 · Viewer Theme — separate concept from Theme Packs

**Context.** Today `風格主題包` bundles two unrelated concerns:
1. Danmu style presets (color / stroke / shadow / effects) — per-message
2. Viewer page chrome (bg / primary accent / dark-light / logo) — page-wide

Mixing them creates live-switch glitches ("演講中切主題背景跳色").

**Current state.** Single nav item shows both; changing a theme pack
changes nothing about the viewer page appearance.

**Goal.** Two distinct admin pages:
- **`風格主題包 / Theme Packs`** — danmu-only presets, 4 bundled + unlimited
  user-created. Active pack = default danmu params a viewer starts with.
- **`前端主題 / Viewer Theme`** — page chrome for `danmu.im/xx` viewer:
  - Background color (solid or gradient)
  - Primary accent (currently locked to cyan — open it up)
  - Dark / Light toggle (currently locked to light — open it up)
  - Hero color + optional logo upload
  - Font family for UI (currently Noto Sans TC; allow Zen Kaku / Chakra / custom)
  - Single active theme at a time (stored server-side, applied to all viewers)

**UX requirements.**
- Viewer Theme page design: live-preview of viewer on the right (iframe or
  inline render), control panel on the left
- Must enforce WCAG AA contrast: preview flags if bg + primary combo fails
- Logo upload: PNG with transparent bg, max 200×80, shown to the left of hero
- "Restore default" button
- Theme applied is event-wide; switching theme mid-event is allowed but
  warns the presenter

**Technical constraints.**
- Settings stored in `server/settings_store.py` alongside existing options
- Viewer page reads theme config on load; no hot-reload needed
- Logo served from `server/runtime/viewer-theme/logo.png`

**Open questions.**
- Gradient bg support, or solid color only?
- Can presenter save custom Viewer Themes like Theme Packs?
- Mobile Safari limitation for custom fonts?

---

### P0-3 · Display Settings — per-setting enable toggle

**Context.** Admin must decide **which danmu knobs the audience can twiddle**.
Some events want everyone to use default styling (unified look); some let
each audience pick their own color/speed.

**Current state.** Backend already models this as a tuple per option:
```
options.Color = [enabled: bool, min_or_default, max]
options.Opacity = [enabled: bool, min_percent, max_percent]
options.Speed = [enabled: bool, min_speed, max_speed]
```
But the admin UI doesn't expose this cleanly — it's buried in a JSON-ish
form per setting. Audience-side, if `options.Color[0] === false`, the color
row in the viewer disappears.

**Goal.** One admin page `Display Settings` where each setting row has:
- A big toggle: `允許觀眾自訂 [ON / OFF]`
- When ON: a range/min/max compound control (for Opacity / FontSize / Speed)
  or a "pick set" (for Color / FontFamily / Layout)
- When OFF: a single-value picker (what all audience uses by default)
- A live preview of how the setting appears on the viewer page

**UX requirements.**
- 6 rows: Color · Opacity · FontSize · Speed · FontFamily · Layout
- Each row collapsible — collapsed shows toggle + summary (`✓ 允許 · 20–64px`)
- "Apply to all viewers" button confirms and broadcasts via WS
- Show live count of how many viewers currently connected

**Technical constraints.**
- `SETTABLE_OPTION_KEYS` in `config.py` defines what's allowed
- Changes push to connected viewers via existing `/ws/settings` broadcast

**Open questions.**
- When admin flips `Color` OFF mid-event, viewers already using non-default
  colors: keep their choice, or force-snap to default?
- Do Emojis / Stickers / Sounds get the same treatment?

---

## P1 · Pages that exist in code but have no design

These are fully shipping admin features. They render today as legacy
tailwind cards. Each needs a Claude Design pass to match the v2 aesthetic
(hudTokens.light / cyan accents / mono kickers / structured cards).

### P1-1 · Admin · Webhooks

**Context.** Admin can register outgoing webhooks that POST to external
URLs when danmu events fire (new message / poll ended / overlay toggled).
Used for Discord notifications, custom automations.

**Current state.**
- Code: `server/routes/admin/webhooks.py` + `server/static/js/admin-webhooks.js`
- Data model: `[{id, name, url, events[], signing_secret, enabled, created_at}]`
- Renders as a basic table inside `sec-webhooks` details accordion

**Goal.** Dedicated nav page `Webhooks` with card list + create-edit form.

**UX requirements.**
- Top: `+ 新增 Webhook` button
- List: rows with name, URL (truncated), enabled toggle, events badge, status
  dot (green: last fire succeeded / amber: retrying / crimson: failed N times)
- Row click → inspector drawer right side: full URL, event selector,
  signing secret with copy/regen, test-fire button, delivery log (last 10)
- Filter: by enabled / event type / status

**Technical constraints.**
- Events enum: `danmu.created`, `poll.started`, `poll.ended`, `overlay.up`,
  `overlay.down` (check route code for canonical list)
- Signing is HMAC-SHA256 of body with `signing_secret`
- Max 20 webhooks; UX should reflect a bounded list

**Open questions.**
- Test-fire should send a real fake event or a distinct `test.ping` event?
- Show full request/response of each delivery, or just status code?

---

### P1-2 · Admin · Sounds

**Context.** Trigger sound effects on keyword match or event (applause
on "👏", air-horn on poll win, typing sound on new danmu).

**Current state.**
- Code: `server/routes/admin/sounds.py` + `server/static/js/admin-sounds.js`
- Model: `[{id, name, file_url, trigger: {type, pattern}, volume, enabled}]`
- Renders inside `sec-sounds` details

**Goal.** Dedicated `Sounds` page: sound library grid + trigger rule list.

**UX requirements.**
- Grid of sound tiles: name · waveform thumbnail · 播放 button · duration
- Per tile: Edit button opens trigger rule modal
- Trigger rules: keyword match · regex · poll event · manual (tray/hotkey)
- Volume slider (0–100)
- Upload: drag-drop .mp3 / .wav, max 500KB, max 10s
- Prevent too many sounds: show usage quota

**Technical constraints.**
- Files stored in `server/runtime/sounds/*.mp3`
- Playback: WebAudio API on overlay page, not the admin page
- Overlay must preload sounds on connection

**Open questions.**
- Per-sound throttle (don't retrigger within 2s) needed?
- Preview playback in admin page — client-side only, or broadcast to overlay?

---

### P1-3 · Admin · Emojis

**Context.** Image emojis that viewers can insert via `:name:` syntax.
Different from Unicode emojis (those are native to the viewer).

**Current state.**
- Code: `server/routes/admin/emojis.py` + `server/static/js/admin-emojis.js`
- Model: `[{id, name, url, category}]`
- Renders inside a collapsed card; CRUD works but styling is plain

**Goal.** `Emojis` page with category grid + bulk upload.

**UX requirements.**
- Category tabs: 預設 / 活動 / 品牌 / 自訂 (customizable)
- Grid of emoji tiles: image · `:name:` label · category badge · delete X
- Bulk upload: drop zone accepts N files; auto-extracts filename as `:name:`
- Per-emoji: click opens edit modal (rename, recategorize, replace image)
- Search bar at top

**Technical constraints.**
- Files: `server/runtime/emojis/<category>/<name>.png`, max 80KB each
- Served via `/emojis/<name>`
- Viewer's `:name:` parser lives in `server/services/emojis.py`

**Open questions.**
- Show actual emoji size preview (e.g. next to danmu text at 32px)?
- Allow animated GIF or PNG only?

---

### P1-4 · Admin · Stickers

**Context.** Sticker packs are like emojis but with physical presence —
sent as a floating image across the overlay, not inline in text.

**Current state.**
- Code: `server/routes/admin/stickers.py` + `server/static/js/admin-stickers.js`
- Model: `[{id, pack_id, name, url, weight}]` + `packs = [{id, name, enabled}]`
- Renders as nested accordion

**Goal.** `Stickers` page with pack list + sticker grid per pack.

**UX requirements.**
- Left sidebar: pack list (click to load that pack's stickers)
- Main: sticker grid · each tile has image + name + weight (rarity)
- Bulk upload within selected pack
- Per-pack: enable/disable toggle, reorder packs

**Technical constraints.**
- Files: `server/runtime/stickers/<pack_id>/<name>.png`
- Larger than emojis (128×128 typical), max 300KB
- Weight drives RNG for random-sticker triggers

**Open questions.**
- Do stickers float like danmu, or stay pinned for N seconds?
- Sound effect binding per sticker?

---

### P1-5 · Admin · Scheduler

**Context.** Scheduled danmu broadcasts — fire a preset message at a specific
time (welcome banner 09:00, lunch reminder 12:00, break starts 14:30).

**Current state.**
- Code: `server/routes/admin/scheduler.py` + `server/static/js/admin-scheduler.js`
- Model: `[{id, name, schedule: {type, cron_or_ts}, danmu, enabled}]`
- Basic form in accordion

**Goal.** `Scheduler` page with calendar / list dual view.

**UX requirements.**
- List view: sortable by next-fire, with type badge (一次性 / 每日 / 每週 / cron)
- Calendar view (bonus): month grid with dots on days that have scheduled events
- Create: picker for type + time/cron + danmu text + style preset
- Per-item: next-fire countdown, last-fire status, enable toggle
- Prevent overlap: warn if two schedules fire within 10s

**Technical constraints.**
- Uses apscheduler under the hood
- Time zone: server's timezone; show user's local offset
- Max 50 schedules

**Open questions.**
- Visual for cron-style vs calendar-style — one ruleset or two?
- Allow scheduler to trigger sound/sticker too, or danmu only?

---

### P1-6 · Admin · Live Feed (dedicated page)

**Context.** Admin currently has a live feed strip on the dashboard. Presenters
in large events want a full-page stream for moderation.

**Current state.**
- Code: `server/static/js/admin-live-feed.js` (renders via WS into a card)
- Shows last N messages with time / text / user
- Moderation buttons on hover: block / flag

**Goal.** Dedicated `Live Feed` page — full-height stream, rich moderation.

**UX requirements.**
- Full-viewport stream, newest at top
- Each row: time · tag(MSG/Q&A/POLL/FLAG) · text · @nickname · fp:short · IP · ⋯
- Filter tabs at top: 全部 / Q&A / Poll 投票 / 已遮罩 / 已回覆 (item B7 below)
- Bulk select mode: toolbar for batch block / delete
- Auto-scroll toggle (pauses on manual scroll)
- Keyword filter box

**Technical constraints.**
- Subscribes to same WS as overlay; filter server-side for admin-relevant fields
- Server doesn't have `message.type` field yet — see B7

**Open questions.**
- Hide blocked messages, or show them with strikethrough?
- Per-row detail drawer (full metadata) on click, or inline expand?

---

### P1-7 · Admin · Replay

**Context.** Re-send historical messages. Useful for testing effects, demos.

**Current state.**
- Code: `server/routes/admin/history.py` (has `/history/export`) +
  `server/static/js/replay-recorder.js`
- Export endpoint produces JSON timeline
- No UI for replay — only via export + manual re-import

**Goal.** `Replay` page — scrub timeline of past session, re-fire single
message or batch range.

**UX requirements.**
- Top: session picker (dropdown of past sessions by date)
- Timeline: horizontal scrubber showing message density over time
- Left: message list of selected range
- Right: playback controls (single / batch / speed multiplier 0.5×–4×)
- Per message: "Re-fire now" button
- Export still available: JSON / CSV

**Technical constraints.**
- `danmu_history` service stores messages with timestamp
- Re-firing pushes via the same WS pipeline as fresh messages
- Rate-limit: admin re-fire bypasses audience rate limit but has its own cap

**Open questions.**
- Can replay target a specific overlay connection, or always all?
- Granularity of re-fire — exact timing, or as-fast-as-possible?

---

### P1-8 · Admin · Fonts (upload + subsetting)

**Context.** Upload custom TTF/OTF fonts for the overlay. Subset fonts
to reduce size (only keep characters used in recent danmu).

**Current state.**
- Code: `server/static/js/admin-fonts.js`
- Fonts page exists in v2 design (shows list table)
- Upload UX: not designed

**Goal.** Extend the existing Fonts page with:
- Upload form (drag-drop .ttf / .otf / .woff2, max 5MB)
- Per-font inspector: family name, weights detected, glyph count, subset status
- Subset button → shows estimated size reduction, one-click run
- CDN delivery panel (already designed): shows hit rate, edge location

**UX requirements.**
- Upload validates file client-side (extension + magic bytes)
- Subsetting is server-side (`pyfttools` or similar); show progress
- Uploaded fonts appear immediately in Display Settings FontFamily picker

**Technical constraints.**
- Files: `server/runtime/fonts/<family>.ttf`
- Subsetted output: `server/runtime/fonts/<family>.subset.woff2`
- CDN URL configurable; falls back to local if CDN disabled

**Open questions.**
- Multiple weights per family — one font file per weight, or variable font?
- Unicode range for subsetting — let user pick, or auto-detect from danmu history?

---

### P1-9 · Admin · Security (password + WS token)

**Context.** Single-admin model; authentication is a single password.
Web Socket token auth is opt-in for when exposing overlay publicly.

**Current state.**
- Password change: backend route exists, UI is a hidden form
- WS token: settings row on System page
- No dedicated page

**Goal.** `Security` page covering all auth concerns.

**UX requirements.**
- Change password section: current password · new · confirm · submit
  - Show password strength meter
  - Invalidate all sessions on change
- WS Token section: enable toggle · token value (masked, copy, regenerate)
  - Show last rotation date
  - Show active WS connections using current token
- Session table: list of active admin sessions (IP / UA / last-active / revoke)
- Audit log: last 20 admin actions (login, password change, token rotate, delete)

**Technical constraints.**
- Password stored bcrypt in `server/.admin_password.hash`
- WS token in `server/runtime/ws_auth.json`
- Session data in Flask server-side session

**Open questions.**
- 2FA / TOTP — scope for v2 or later?
- Login attempt rate-limit per IP is already `LOGIN_RATE_LIMIT=5/300s`;
  lockout screen needed?

---

### P1-10 · Admin · Backup & Export

**Context.** Admin can export history, backup settings, or blow away all
data. Currently lives as misc links in System page.

**Current state.**
- `/history/export` endpoint returns JSON
- Settings export: not implemented
- Clear-all: `END SESSION` button on System page

**Goal.** `Backup / Export` page with three clear zones.

**UX requirements.**
- Zone 1 · **Export**:
  - History: time range picker · format (JSON / CSV / SRT subtitles) · download
  - Settings: one-click JSON snapshot · auto-versioned filename
  - Effects / Emojis / Stickers packs: individual tarball download
- Zone 2 · **Restore**:
  - Upload settings JSON → dry-run diff → apply
  - Upload effect/emoji/sticker pack → validate → install
- Zone 3 · **Danger**:
  - Clear history (with time range)
  - End session (clears ws state + disconnects all)
  - Factory reset (everything — requires typing "reset" to confirm)

**Technical constraints.**
- Exports are synchronous for small datasets; use streaming for large
- Danger zone: two-step confirm with typed string
- Settings backup must exclude secrets (password hash, tokens)

**Open questions.**
- Scheduled auto-backup — feature or later?
- Cloud backup target (S3-compatible) — feature or later?

---

## P2 · State pages missing from v2 design

### P2-1 · Viewer · Offline state

When the server is down and the audience loads `danmu.im/xx`. Today shows
a hanging spinner. Design a clear offline screen.

**Content.** Danmu Fire logo · `● DISCONNECTED` crimson chip · "活動尚未開始
/ 主辦方失聯 / 請稍候重試" message · auto-retry countdown · "重新整理"
button · operator contact link (if configured).

---

### P2-2 · Overlay · Connecting state

Between page load and first WS open. Brief but should look intentional.

**Content.** Dim grid bg · `CONNECTING…` cyan mono label · subtle progress
indicator. Transitions to Idle state once connected, then to live once first
danmu arrives.

---

### P2-3 · Electron · Update available

Auto-updater UX. Current flow is silent → restart.

**Content.** Title bar shows update badge · menu shows "New version v5.1.0
available" · inline card on about page: version note · download progress ·
"Restart to install" button · skip/remind-later.

---

### P2-4 · Admin · Login failed / rate-limited

`LOGIN_RATE_LIMIT=5/300s` triggers lockout. Today just shows "wrong password".

**Content.** Card shows remaining attempts · on lockout: "鎖定 5 分鐘" with
countdown · IP shown · "聯繫管理員" link. No credential reset flow at this
scope (single admin).

---

## P3 · Cross-cutting UX decisions

### P3-1 · Audience identification · nickname + fingerprint

**Context.** Audience is anonymous (no login). Server assigns a fingerprint
from request headers + canvas/audio probes. Users optionally set a nickname.
Today the admin UI mostly shows just IP or "guest".

**Goal.** Standard identification format used across all admin pages that
list individual danmu events.

**UX rules.**
- **Fingerprint is primary ID.** All moderation actions (block, mute, delete)
  target `fp:xxx`, not nickname.
- **Nickname is display-only**, user-provided, may be spoofed.
- **Display format** across all message/event rows:
  ```
  @暱稱          ← primary, ui-sans 13px, normal weight
  fp:abc123de    ← secondary, mono 10px, textDim
  192.168.1.42   ← tertiary, mono 9px, textMute, optional
  ```
- Click `@暱稱` → filter the current list by this nickname (fuzzy)
- Click `fp:xxx` → open Fingerprint Observatory focused on this fp
- Click IP → not clickable (IPs don't tell a useful story)
- When nickname is empty: show `@guest` in textMute
- When fp is just assigned (no history): show `fp:new` with lime dot

**Pages that adopt this format.**
- Admin · Live Feed
- Admin · Messages / History
- Admin · Moderation / Filters (with "add to block list" menu)
- Admin · Rate Limits (violator list)
- Admin · Fingerprint Observatory:
  - **Primary row:** fp:xxx · first-seen · last-seen · event count · rate
  - **Sub-list:** all nicknames this fp has ever used, chronological
- Admin · Polls results (in 實名模式 only; 匿名模式 shows `#ABCD` ticket)

**Questions.**
- Short fp form: first 8 chars, or 6 + last 2? (tradeoff: uniqueness vs width)
- Color fp hash? (colorize first 2 chars to make adjacent fps easier to scan)
- Nickname max length: 20 chars currently; keep?

---

### P3-2 · Effects · live inline preview

**Context.** Admin Effects page lists 8 bundled + N `.dme` user effects
as cards. Currently each card shows the static text "ABC" without animation.
Users asked for live preview on-page.

**Goal.** Each effect card renders its actual animation on the demo text,
always-on.

**Design requirements.**
- Demo text: 3-character string (e.g. "ABC") + user-configurable per card
- Animation runs continuously on mount
- Hover state: show params panel (speed / color / etc) as popover
- For effects with user params, use `.dme` defaults
- Card height fixed at 120px so animations don't cause reflow

**Engineering notes (for Claude Design's reassurance).**
- Performance: 8–20 CSS animations on a page is <1% CPU (GPU-compositor path)
- `render_effects()` already returns per-effect `{keyframes, animation, styleId}`
- Namespace handled — no keyframe collision
- Only slight cost: `rainbow` (continuous hue-rotate) + `glow` (blur filter)
- Mitigation: use `IntersectionObserver` to pause animations on off-screen cards

**Questions.**
- Demo text: let user type their own ("ABC" default) or use random danmu sample?
- On-click behavior: toggle animation (if CPU-conscious user wants pause)?

---

### P3-3 · Rate Limits — editable form

**Context.** Four rate limits: FIRE (audience danmu submit), API (general),
ADMIN (admin actions), LOGIN (auth). Today shown read-only on System page.

**Goal.** Moved to `Rate Limits` page, editable.

**UX.** 4 rows, each with:
- Route label (FIRE / API / ADMIN / LOGIN)
- Limit counter input (e.g. `28`)
- Window dropdown (`10s / 60s / 5min / 1h`)
- Current usage bar (fill = recent usage vs limit)
- Save per-row

Admin can tweak live; changes broadcast to middleware immediately.

---

### P3-4 · Command palette ⌘K scope lock

**Context.** Command palette should be a powerful admin tool. But Electron
client is display-only per product direction; no ⌘K in Electron.

**Design rule.** Only render ⌘K on admin pages. No palette UI in viewer
or Electron.

**Admin palette needs design.** Overlay that slides from top. Scope chips:
`所有 / 訊息 / 用戶 / 設定 / 跳轉`. Keyboard-first: `↑↓` nav, `Enter`
select, `Esc` close. Results shown with mono-font prefix (route / type).

---

### P3-5 · Mobile Safari viewer parity

Current viewer has divergent Mobile-specific IA (different layout). Per v3
direction, Mobile Safari should render the same 2-col (hero left, utility
right) layout as Desktop Chrome — just narrower.

**Rules.**
- Hero: stays centered on mobile (no 2-col below ~600px, stacks to single col)
- Subtitle: always shown, not hidden at mobile
- Utility strip: below hero on mobile, above hero on desktop
- Sendbar: always pinned to viewport bottom

---

### P3-6 · Drop dual-lang labels

Labels like `暱稱 · NICKNAME`, `顏色 · COLOR` served as at-a-glance bilingual.
Per direction, i18n picks one label based on user language — no dual form.

**Rule.** Form labels are single-string, driven by i18n key. Mono kickers
(like `DISPLAY · 偵測到 2 個螢幕`) keep their dual form since the English
is decorative, not translatable.

---

### P3-7 · Dashboard topbar consistency

Claimed inconsistency between Dashboard topbar and inner-page topbars.
Need concrete screenshot or pointer to resolve. Topbar should always be:
`[kicker · breadcrumb] [title] ... [search] [broadcast toggle] [logout]`.

---

## P4 · Deleted from scope

These existed in earlier v2 prototypes but are removed:
- Overlay 配對 · Pairing States — doesn't match actual functionality
- 主持人 (Host) role — there is no host, only admin + viewer
- 會議 (Meeting) concept — no `#MTG-042` session ids anywhere
- Host Mobile Remote — host doesn't exist
- Connect Dialog 3-step wizard — replaced by inline `⚙ 更改` on Conn section

---

## P5 · Product decisions (no design work needed)

### P5-1 · Unify naming to `Danmu Fire`

Today coexisting: `Danmu Fire` (server), `Danmu Desktop` (Electron app name
+ .app), `Danmu Client` (Electron titlebar, recent), `danmu-desktop` (repo
slug). Consolidate all user-facing to `Danmu Fire`. Keep repo slug.

### P5-2 · Remove Electron legacy `進階 · 舊版設定`

Per v2 direction, Electron doesn't control danmu appearance — that's viewer
concern. Currently hidden behind collapsed details. Decide: delete or keep.

### P5-3 · Ship FEATURES.md to `/docs/`

Already drafted. One editorial pass + README link.

### P5-4 · v5.0.0 migration notes in CHANGELOG

Document breaking changes: token rename dark → light semantics, i18n key
changes (heroConnected, fireDanmu, mainSubtitle), Tailwind slate utility
overrides scoped to `.admin-body`.

---

## P6 · Tech debt (code-only, no design)

### P6-1 · Dedupe viewer logic Electron ↔ server — DONE 2026-04-25
`renderer-modules/particle-bg.js` + `danmu-effects.js` extracted into
`shared/particle-bg.js` + `shared/danmu-effects.js` (UMD-style: CommonJS for
webpack, `window.*` for plain `<script>`). Both consumer paths are now
symlinks pointing at `shared/` — same pattern as `shared/tokens.css` and
`shared/hud.css`. Server template doesn't include them yet (viewer v2 dropped
particle bg, server uses `.dme` engine for effects), but the single source
exists for future server-side use. Electron renderer continues to bundle
them via webpack; all 268 Jest tests still pass.

### P6-2 · Split admin.js router
1900+ lines. Extract `ADMIN_ROUTES` + `renderLogin` / `renderControlPanel`
/ `refreshDashboardKpi` into separate modules.

### P6-3 · Plugin-first architecture for Poll / Widgets / Scheduler / Webhooks

**Question raised 2026-04-24.** Should Poll (and similar vertical features:
Widgets, Scheduler, Webhooks, Sounds, Emojis, Stickers) live as plugins
instead of first-class core modules?

**Current state.**
- Core owns Poll entirely (`services/poll.py` + `routes/admin/poll.py`
  + admin UI + viewer A/B/C/D intercept + overlay render)
- Plugin SDK exists but is "event-listener" scale only:
  `on_danmu` / `on_connect` / `modify` / `filter` / `auto-reply`
- Plugins cannot register admin pages, WS message types, HTTP routes,
  scoped storage, or overlay render components

**Verdict: don't migrate now.** Making Poll a plugin today requires expanding
the SDK by five extension points (admin-page / ws-channel / http-route /
storage / overlay-render) — 2–4 weeks of infra before touching Poll,
zero user-visible benefit.

**Roadmap (when we revisit):**

- **Stage 1 · File-only reorg** (low-risk, recommended next sprint). Move
  vertical features into `server/plugins/builtin/<name>/` folders with a
  plugin-shaped manifest, even though they still load in-process:
  ```
  server/plugins/builtin/
  ├── poll/
  │   ├── manifest.yaml     # name/version/hooks/admin-page-spec
  │   ├── server.py         # would become plugin entry
  │   ├── storage.py        # poll state
  │   ├── admin.js          # UI injection
  │   └── overlay.js        # overlay render
  ├── widgets/
  ├── scheduler/
  ├── webhooks/
  ├── sounds/
  ├── emojis/
  └── stickers/
  ```
  Makes the codebase *look* plugin-first without a real plugin loader.
  Easier to lift out later.

- **Stage 2 · SDK 2.0 expansion** (major infra). Add extension points:
  1. `plugin.register_admin_page({ nav, kicker, render })`
  2. `plugin.register_ws_channel({ type, schema })`
  3. `plugin.register_http_route({ path, method, handler })`
  4. `plugin.register_storage({ namespace })`
  5. `plugin.register_overlay_render({ component })`

  Validate with two toy plugins that don't overlap with core:
  - `plugin-raffle` — single-answer lottery
  - `plugin-reaction` — emoji rating aggregator

- **Stage 3 · Optional core-to-plugin migration.** Once SDK 2.0 is proven
  by at least one external plugin, decide per-feature whether to lift
  Poll / Widgets out of core. May decide to keep them in-core anyway —
  by then it's pure refactor, not architectural experiment.

**Why not migrate directly to Stage 3?**
- Poll is the marquee interaction feature; making it optional/disable-able
  feels like a default install missing teeth
- Migrating a working feature into unproven plugin system = high risk, no
  user-visible benefit
- Poll is about to grow (multi-question + image + ordering per design v2) —
  stabilize expanded version in core first

**Decision log.** Deferred at user's request 2026-04-24. When plugin SDK
work restarts, start with Stage 1 (file reorg), not Stage 2.

---

## Applied already (no design needed)

| Tag | What | Commit |
|---|---|---|
| A1 | Admin Login drops username, password-only | `a1ab8d7` |
| A3 | Viewer subtitle reverts to `把你的訊息送上螢幕！` | `a1ab8d7` |
| A11 | Dashboard drops `哈囉 admin`, hero chip `#MTG-042` → `LIVE` | `a1ab8d7` |

---

## Decision log

| Date | Decision | Source |
|---|---|---|
| 2026-04-23 | Connect dialog drops 3-step wizard, integrate into main | User |
| 2026-04-23 | Electron takes over window controls (frameless) | User |
| 2026-04-23 | Split `風格主題包` into Theme Packs + Display Settings | User |
| 2026-04-23 | Restore v4-style 2-col viewer layout | User |
| 2026-04-24 | Pairing States removed from v3 design | User |
| 2026-04-24 | Admin Login drops username (password-only) | User + applied |
| 2026-04-24 | Viewer subtitle short: 把你的訊息送上螢幕！ | User + applied |
| 2026-04-24 | Remove 哈囉 admin greeting + #MTG-042 session id | v3 chat + applied |
| 2026-04-24 | Viewer Theme separate from Theme Packs | User |
| 2026-04-24 | Polls expand to multi-question + image upload | User |
| 2026-04-24 | Electron display-only; ⌘K + settings all server-side | User |
| 2026-04-24 | Fingerprint primary ID, nickname display-only, global format | User |
| 2026-04-24 | Effects live inline preview, all-on (<1% CPU) | User |
| 2026-04-24 | Poll-as-plugin deferred; revisit via Stage 1 file reorg first | User |
| 2026-05-04 | **Polestar locked: single presenter, mid-size event, interaction + atmosphere** | User (office-hours session) |
| 2026-05-04 | **Admin nav restructured 32 → 10**, Dashboard pivots to live control console | User (office-hours session) |
| 2026-05-04 | Widgets stays A-tier independent; Effects stays independent (core differentiator) | User |
| 2026-05-04 | C-tier 11 pages collapse into single `system` nav with accordion | User |
| 2026-05-04 | P0-1 multi-question polls, P1-4 multi-pack stickers frozen until real-user demand | User |
| 2026-05-04 | All `/admin/*` endpoints preserved; nav reduction is purely IA, not deletion | User |
| 2026-05-04 | Layout locked 1440×900 / 13" no inner scroll | Claude Design + User |
| 2026-05-04 | Topbar = compact (zh + icon, no EN kicker) — Q1 resolved | Claude Design + User |
| 2026-05-04 | Effect strip = 8 cards horizontal scroll, no "more" toggle — Q2 resolved | Claude Design + User |
| 2026-05-04 | Feedback = toast (universal) + inline green bar (undoable actions only) — Q3 resolved | Claude Design + User |
| 2026-05-04 | Recent actions = right-rail sidebar; bell reserved for system events — Q4 resolved | Claude Design + User |
| 2026-05-04 | Tab chrome shared across moderation/appearance/automation/history; default tab = mid-event likely; badges + deep-links + sessionStorage persistence (P0-0a) | User |

---

*Last updated: 2026-05-04*
*Copy-paste this doc into a Claude Design chat; each P-tier item is self-contained.*
