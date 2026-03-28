# GitHub Wiki Design — danmu-desktop

**Date:** 2026-03-28
**Status:** Approved

---

## Goal

Create a comprehensive, bilingual (English + 繁體中文) GitHub Wiki for the danmu-desktop project, covering both end-user and developer audiences.

---

## Audience

| Track | Who | Entry Point |
|---|---|---|
| User | Operators and event organizers who want to deploy and use the danmu system | Getting-Started |
| Developer | Integrators and contributors who want to write plugins, call APIs, or extend the system | API-Reference |

---

## Structure

11 pages organized in role-based layout. GitHub Wiki sidebar will separate user and developer sections.

```
Home
│
├── [User] Getting-Started
├── [User] Installation
├── [User] Configuration
├── [User] User-Guide
├── [User] Admin-Guide
│
├── [Dev] API-Reference
├── [Dev] Webhooks-and-Integration
├── [Dev] Plugin-Development
├── [Dev] Effects-System
├── [Dev] Themes-and-Layouts
│
└── Contributing
```

---

## Format Conventions

- Each page is bilingual: English section first, `---` divider, then 繁體中文 section.
- Code blocks, table headers, and CLI commands remain in English.
- Page filenames use kebab-case (e.g., `Getting-Started.md`).
- GitHub Wiki sidebar is configured via `_Sidebar.md`.
- Pages live in the wiki repo (`<repo>.wiki.git`), not in the main repo.

---

## Page Specifications

### Home
- One-line project description + screenshot reference
- Two role-entry cards: "I'm a user →" / "I'm a developer →"
- Feature highlights: danmu overlay, effects, plugins, webhooks, polls
- Badges: version, license, Docker Hub

### Getting-Started
- Prerequisites (Docker OR Python 3.11+ + Node.js)
- 3-step quick start: launch server → open Electron → send first danmu at `http://ip:4000`
- Troubleshooting: overlay not appearing, connection refused

### Installation
- **Docker Hub** (single `docker run` command, bcrypt password option, update instructions)
- **Docker Compose** (HTTPS profile, Redis profile)
- **Manual** (`uv sync`, two-terminal startup)
- **Electron client** (download link, macOS quarantine fix)

### Configuration
- Complete environment variable reference table: name / default / description
- Admin panel settable options: Color, Opacity, FontSize, Speed, FontFamily, Effects, Layout, Nickname — each with format `[enabled, min, max, default]`
- Security callouts: `TRUSTED_HOSTS`, `TRUST_X_FORWARDED_FOR`

### User-Guide
- Web UI screenshot walkthrough
- Sending danmu: text, color picker, nickname, emoji syntax (`:name:`), sticker keywords
- Poll feature: create → vote → end → view results
- Theme switching

### Admin-Guide
- Login at `/admin`
- Blacklist management (add/remove keywords)
- Filter rules (block / replace / allow, regex support)
- Plugin enable/disable
- History review and export
- Effects inline editor (edit `.dme` content in browser)

### API-Reference
- Authentication: `/fire` is public (rate-limited); admin endpoints require session cookie
- Endpoint table for each route:
  - `POST /fire` — send danmu
  - `GET /effects` — list effects
  - `POST /effects/reload` — hot-reload effects (admin)
  - `GET /themes` — list themes
  - `GET /fonts` — list fonts
  - `GET /stickers` — list stickers
  - `GET /emojis` — list emojis
  - `POST /check_blacklist` — check if text is blocked
  - `GET /get_settings` — get current admin settings
- Each endpoint: Method, Path, Auth required, Request body schema, Response schema, curl example

### Webhooks-and-Integration
- Outbound webhook setup: URL, events (`on_danmu`, `on_poll_create`, `on_poll_end`), format, secret, retry count
- Payload format examples: `json` / `discord` / `slack`
- HMAC-SHA256 signature header (`X-Webhook-Signature`)
- Third-party integration example: **Slido bridge** — Python script polling Slido API and forwarding to `POST /fire`
- Note on Slido API access (enterprise plan required; Playwright scraping alternative mentioned)

### Plugin-Development
- `DanmuPlugin` base class API (subclass, `name`, `version`, `description`, `priority`)
- Hook reference table:

| Hook | Arguments | Return | Purpose |
|---|---|---|---|
| `on_fire` | `context: dict` | modified dict or None | Intercept/modify danmu before display |
| `on_connect` | `client_info: dict` | — | WebSocket client connected |
| `on_disconnect` | `client_info: dict` | — | WebSocket client disconnected |
| `on_poll_vote` | `vote_info: dict` | — | Vote received |
| `on_startup` | — | — | Server started |
| `on_shutdown` | — | — | Server shutting down |

- `StopPropagation`: raise inside `on_fire` to block the danmu entirely
- Hot-reload: drop `.py` file into `server/plugins/`, reloads within 5 seconds
- Example: auto-reply plugin (reference `example_auto_reply.py`)
- Timeout: plugin hooks timeout after 3 seconds

### Effects-System
- `.dme` file format (YAML):
  - `name` (string)
  - `params` (list of param definitions with type, label, default, min, max)
  - `keyframes` (CSS @keyframes body)
  - `animation` (CSS animation shorthand, supports `{{param}}` substitution)
- `animationComposition: "add, add, ..."` — enables stacking multiple transform animations
- Hot-reload: `server/effects/` directory scanned every 5 seconds
- Creating a new effect: full `.dme` example walkthrough
- Admin panel inline editor: edit effect content directly in browser

### Themes-and-Layouts
- `.yaml` theme format:
  - `name`
  - `styles`: `color`, `textStroke`, `strokeWidth`, `strokeColor`, `textShadow`, `shadowBlur`
  - `effects_preset`: list of `{name, params}` applied when no effect selected
- Layout modes: `scroll` (default), others defined in `services/layout.py`
- Creating a new theme: annotated `.yaml` example
- Theme selection via Admin panel or API

### Contributing
- Dev environment setup (Python `uv`, Node.js webpack, pre-commit hooks)
- Test commands: `make test`, `make test-verbose`, `make coverage`
- Directory structure overview (main-modules/, renderer-modules/, server/services/, server/routes/)
- PR conventions and CI pipeline description

---

## Deployment

Wiki pages are stored in the GitHub Wiki git repo, separate from the main repo.

```bash
git clone https://github.com/guan4tou2/danmu-desktop.wiki.git
cd danmu-desktop.wiki
# create/edit .md files
git add .
git commit -m "docs: add wiki pages"
git push
```

A `_Sidebar.md` file controls the navigation sidebar.

---

## Out of Scope

- Localization beyond EN + 繁中 (e.g., Simplified Chinese, Japanese)
- Auto-generation from code (OpenAPI spec)
- Video tutorials
