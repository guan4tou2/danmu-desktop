# Claude Design Handoff · Priority Reset · 2026-05-05

**To:** Claude Design (`claude.ai/design`)
**From:** danmu-desktop owner review + repo audit
**Prototype checked:** `/Users/guantou/Downloads/danmu (2).zip`
**Repo reference:** `docs/designs/design-v2/`
**Status:** product priority reset required before more page-by-page polish.

This handoff supersedes the 2026-05-04 "32 -> 10 nav" target for new design
work. The 10-nav plan reduced clutter, but it still gives too much prominence
to secondary admin features. The new direction is not "more admin". It is a
focused live danmu display product.

## Read First

1. `docs/designs/design-v2/STYLE-CONTRACT.md`
2. This file
3. `docs/designs/design-v2/components/tokens.jsx`
4. `docs/designs/design-v2/components/admin-pages.jsx`
5. `docs/designs/design-v2/components/viewer.jsx`
6. `docs/designs/design-v2/components/desktop.jsx`
7. `docs/designs/design-v2/components/admin-assets.jsx`
8. `docs/designs/design-v2/components/admin-display-settings.jsx`

## Product Roles

| Surface | Role | Must optimize for |
|---|---|---|
| `server/viewer` | Audience page | Send danmu quickly. It is not a chat room and not an admin surface. |
| `server/admin` | Control and setup | Prepare and operate display, effects, assets, viewer defaults, and safety. |
| `client` | Local display endpoint | Show danmu on the computer/target display. It is not the settings center. |
| `overlay` | Rendering layer | Transparent danmu display, effects, idle state, OBS/browser compatibility. |

## Priority Order

Primary product pillars:

| Priority | Pillar | Meaning |
|---|---|---|
| 1 | Send | Viewer input, nickname, optional style, cooldown, blocked feedback. |
| 2 | Display | Overlay/client connection, target display, clear/stop, tracks, speed, visual safety. |
| 3 | Effects | `.dme` library, preview, trigger, motion, performance. |
| 4 | Assets | Fonts, emojis, stickers, sounds, logo/background, reusable packs. |

Secondary features:

| Feature | Treatment |
|---|---|
| Polls | Keep, but visually secondary. It must not compete with Fire on viewer. |
| Moderation | Keep, but as safety tooling. It is not the product identity. |
| History / audit / analytics | Back-office or after-event. Hide from main live path. |
| Security / tokens / backup / integrations | System settings or Advanced. |
| Mobile admin | Do not make a standalone product surface. Use responsive admin layout. |

## Admin IA Target

New main admin areas:

| # | Main area | Contains | Weight |
|---|---|---|---|
| 1 | `live` | QR, connection, recent danmu, clear screen, stop/start, test danmu | Primary |
| 2 | `display` | Overlay/client state, tracks, speed, size, layout, widgets, OBS/browser overlay | Primary |
| 3 | `effects` | `.dme` effects, trigger words, preview, effect health | Primary |
| 4 | `assets` | Fonts, emojis, stickers, sounds, logo/background, upload status | Primary |
| 5 | `viewer` | Viewer page defaults, fields, style presets, send limits, language/theme | Primary support |
| 6 | `polls` | Poll builder, active poll, results | Secondary |
| 7 | `moderation` | Blacklist, filters, rate limits, fingerprints, review queue | Secondary |
| 8 | `system` | Access, tokens, backup, integrations, webhook, security, logs, about, advanced | Back-office |

Rules:

- Do not keep `widgets`, `appearance`, `automation`, `history`, or `security` as equal top-level nav in new designs.
- `widgets` belongs under `display`.
- `themes`, `fonts`, viewer theme, and display appearance must split by user intent: display control goes to `display`, viewer page defaults go to `viewer`, reusable files go to `assets`.
- `automation`, `webhooks`, `plugins`, `api-tokens`, `firetoken`, `backup`, `audit`, `wcag`, `mobile`, and `about` belong in `system` or `system > advanced`.
- Keeping endpoints is fine. The design must not expose every endpoint as a primary navigation decision.

## Prototype Alignment Check

Checked source: `/Users/guantou/Downloads/danmu (2).zip`, extracted for review.

Repo sync status:

| Area | Status | Notes |
|---|---|---|
| Prototype bundle vs repo | Not identical | `diff -qr` shows many component differences. Do not overwrite repo with zip. |
| Repo design extras | Ahead of zip | Repo has `STYLE-CONTRACT.md` and a longer `HANDOFF-REWORK-2026-05-04.md` not present at zip root. |
| Zip extras | Debug-only | Zip has `debug-black.png`, `debug-control.png`, `debug-control2.png`. These are not canonical design inputs. |
| Admin prototype IA | Not aligned | `admin-pages.jsx` still shows many old/high-weight routes like messages, widgets, themes, ratelimit, plugins, fonts, audit, extensions, webhooks, API tokens, backup. |
| Production admin IA | Partially aligned | Production sidebar is reduced but still has 11 rows including standalone `security`; target is 8 areas above. |
| Viewer | Mostly aligned | Viewer is send-first and poll is gated off by default, but poll UI still exists as optional tab. If enabled, current JS shows vote count and percentage. New design should not show viewer-side percentages. |
| Desktop client | Mostly aligned in current worktree | Client is display-only and current dirty files include true stop/clear/WSS fixes. Treat this as implementation-in-progress, not a reason to add more client settings. |
| Visual tokens | Partially aligned | Some prototype components still reference `hudTokens.magenta`, `tone: "violet"`, or private token aliases. Follow `STYLE-CONTRACT.md`: no violet, magenta, or private palette blocks. |
| Copy | Needs cleanup | Remove host/presenter language. Product has only Viewer and Admin; client is display endpoint. |

Files observed as materially different between zip and repo include:

- `Danmu Redesign.html`
- `components/admin-pages.jsx`
- `components/admin-polls.jsx`
- `components/admin-viewer-theme.jsx`
- `components/desktop.jsx`
- `components/hero-scenes.jsx`
- `components/ia-spec.jsx`
- `components/priority-2-pieces.jsx`
- `components/rwd-480.jsx`
- `components/rwd-768.jsx`
- `components/tab-chrome.jsx`
- `components/viewer-effects-panel.jsx`

## Required Design Changes

### 1. Rework Admin Shell

Update `AdminPageShell` and IA artboards to the 8-area target. Current prototype
still reflects older route sprawl. The new sidebar must make `Display`,
`Effects`, and `Assets` feel as important as `Live`.

Design requirement:

- Top nav/sidebar order: `Live`, `Display`, `Effects`, `Assets`, `Viewer`, `Polls`, `Moderation`, `System`.
- Polls and Moderation can stay visible, but they must read as secondary.
- System is an accordion/back-office space, not a grid of primary pages.

### 2. Redesign Live As Operations, Not Analytics

Live is for the current event:

- QR / viewer URL
- overlay/client connection state
- recent danmu
- clear screen
- stop/start display
- send test danmu
- current poll/effect quick status only

Do not make Live a data dashboard. Detailed history, audit, audience analytics,
or cross-session search belong outside the main live path.

### 3. Make Display A First-Class Page

Display needs its own page, not a hidden appearance tab. It should cover:

- OBS/browser overlay status
- Electron client status
- target display
- max tracks / collision / layout safety
- speed/size/global display guardrails
- idle state and QR overlay
- widgets if still supported

Viewer per-message style is not controlled by client. Client only controls
whether and where overlay is displayed.

### 4. Make Effects And Assets The Differentiators

Effects and Assets are primary product pillars. Design should give them better
hierarchy than generic tables:

- Effects: preview-first, trigger-first, performance-safe, with `.dme` metadata.
- Assets: unified library, upload states, type filters, usage location, safe delete.
- Assets should not be a passive index that sends users to many unrelated pages.

### 5. Simplify Viewer

Viewer must preserve the fastest path:

- message input and FIRE button are the main action
- nickname is optional and lightweight
- style controls are progressive disclosure
- poll tab is off by default
- if poll is enabled, voting must not expose live percentages to viewer
- no chat feed, no quick replies, no sticker wall

### 6. Keep Client Narrow

Client design should only cover:

- connection
- display target
- start/stop
- clear screen
- diagnostics/test
- about/update

Do not add effects editing, assets editing, poll controls, moderation, or viewer
style parameters to the client.

## Explicitly Do Not Design

- Host/presenter role or host mobile controller
- Enterprise audit/compliance story
- subscription/license cards
- country/geo audience analytics
- AI moderation, AI auto-reply, sentiment scoring
- mobile admin as a standalone route
- plugin marketplace as a primary page
- separate `security` top-level nav
- viewer-side poll percentages

## Delivery Checklist

Before sending the next handoff back to engineering:

- [ ] Admin shell shows the 8-area IA, not 10/11/32 routes.
- [ ] Primary visual weight is Send / Display / Effects / Assets.
- [ ] Polls and Moderation are secondary in hierarchy.
- [ ] Viewer is send-first and poll-off by default.
- [ ] Client remains display-only.
- [ ] No host/presenter wording.
- [ ] No violet/magenta/purple colors or tokens.
- [ ] No private token blocks in artboards.
- [ ] All admin pages use `AdminPageShell`.
- [ ] Prototype notes explain which legacy routes are hidden, not deleted.

## Paste-Ready Prompt

> Project: `danmu-desktop` (Flask server + Electron display client).
> Read `docs/designs/design-v2/STYLE-CONTRACT.md`, then read
> `docs/designs/design-v2/HANDOFF-PRIORITY-RESET-2026-05-05.md`.
> The product priority has changed: primary is sending danmu, overlay/client
> display, effects, and assets. Polls and moderation are secondary. Viewer is
> only for audience danmu sending. Client is only a local display endpoint.
> Redesign the admin IA to 8 areas: Live, Display, Effects, Assets, Viewer,
> Polls, Moderation, System. Do not expose old routes as equal top-level nav.
> Keep endpoints conceptually available under System/Advanced where needed.
> Follow the style contract: no private tokens, no violet/magenta/purple, use
> `hudTokens` and `AdminPageShell`.

