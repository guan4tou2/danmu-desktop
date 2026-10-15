<p align="center"><img src="docs/banner.png" width="100%" alt="Danmu Fire — 讓你的演講也能有彈幕 · Live danmu for any talk, on any screen"></p>

# danmu-desktop

Display bullet screen directly on the desktop
在桌面直接顯示彈幕

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

For a complete capability inventory (server routes, admin pages, persistence map, scope guardrails), see [docs/FEATURES.md](docs/FEATURES.md). For the full documentation map, see [docs/README.md](docs/README.md).

![img](img/danmu%20display.png)

## Overview

This project is divided into two parts:

1. Danmu-Desktop
   - Client-side application that runs on your computer to display danmu
   - Supports Windows, MacOS, and Linux
   - Published as a portable desktop package: Windows portable x64 `.exe`,
     macOS arm64 `.zip`, plus Linux AppImage / `.deb`
   - Windows updater metadata is not published while the Windows channel stays
     portable-only; macOS update metadata targets the ZIP package

![img](img/client.png)
![img](img/client%20start%20effect.png)

2. Server
   - Creates a web interface for danmu input
   - Manages danmu delivery to connected clients
   - Includes admin panel for configuration, source fingerprint logging, and history review
   - OBS Browser Source overlay (`/overlay` route)
   - Plugin SDK for server-side extensions
   - 4-language UI (EN, ZH, JA, KO)

![img](img/web%20panel.png)
![img](img/admin%20panel.png)

## Features

### Layout Modes

Five danmu display layouts: scroll (right-to-left), top fixed, bottom fixed, float (random position), and rise (bottom-to-top).

![Layout modes](img/danmu-layouts.png)

### Effects & Styling

Built-in animation effects (spin, bounce, rainbow, glow, shake, wave, blink, zoom) with per-effect parameters. Supports nicknames, custom colors, text stroke/shadow, and multiple effects stacking.

![Effects demo](img/danmu-effects-demo.gif)
![Effects showcase](img/danmu-effects-showcase.png)

### Hot-pluggable Effects (.dme)

Drop `.dme` files (YAML format) into `server/effects/` to add custom effects — auto-detected within 5 seconds. Edit and manage effects from the admin panel.

### Style Themes

Predefined visual themes (default, neon, retro, cinema) that set color, stroke, shadow, and effects in one click. Switch themes from the admin panel or the user-facing page.

### Interactive Polls

Admin creates polls with 2-6 options across **multiple sequential questions** (5.1.0+). Each question can carry an optional hero image and a per-question time limit. Viewers vote by sending option keys (A/B/C) as danmu. Audience never sees vote counts/percentages — those are admin-only. Live results display on the overlay with real-time counts.

### Time-bound Bans & Replay Annotations (5.1.0+)

Time-bound bans: moderate by fingerprint / IP / nickname with duration presets (1h / 6h / 24h / 7d / 永久) or custom hours. Stored in append-only audit log, no reaper thread. Replay annotations: admin pins highlight/vote/note/warning markers to a session timeline for post-session review.

### Font Subsetting (5.1.0+)

Shrink uploaded fonts to a chosen unicode range (Latin / CJK BMP / CJK full / Kana / Hangul / custom). Typical reduction: 5+ MB → 100 KB (90%+). Requires `fonttools` dep (`uv add fonttools`).

### Overlay Widgets

Add persistent scoreboards, tickers, and labels to the OBS overlay. Manage position, style, and content from the admin panel. Widgets broadcast to all connected overlay clients via WebSocket.

### OBS Browser Source

Use `https://your-server/overlay` as an OBS Browser Source to display danmu without the Electron app. Transparent background, auto-connects via WebSocket.

### Plugin SDK

Build server-side plugins that react to danmu events, modify messages, filter content, and auto-reply. Hot-reloaded every 5 seconds. See [Plugin Guide](server/PLUGIN_GUIDE.md) for details.

### Timeline Export

Record live danmu sessions as JSON timelines for offline replay or analysis. Available from the admin panel.

## Installation & Usage

### Danmu-Desktop Client

1. Download the [latest release](https://github.com/guan4tou2/danmu-desktop/releases)
2. For macOS users, lift the quarantine:
   ```bash
   sudo xattr -r -d com.apple.quarantine 'Danmu Desktop.app'
   ```
3. Launch the app
4. Enter the server host + HTTPS/web port printed by the setup wizard

Mac updates: download the new arm64 ZIP, quit the app, and replace the previous
app with the extracted copy. Settings stay in your user profile. These ad-hoc
signed packages provide a download action rather than automatic installation.

Pending messages expire 24 hours after they first enter the standby queue.
The server sweeps only the pending queue at startup and every 60 seconds,
so with normal disk I/O, expired entries are removed by the next sweep even
while idle. Expired messages are never forwarded while waiting for cleanup;
history and archived backups are retained separately.
Restarting the server or pausing again does not renew their deadline.

Delivery history distinguishes queued, forwarded, and rendered messages.
Rendered means at least one desktop or browser overlay reported a visible
animated frame; it does not prove that a person saw it or OBS captured it.
Without a valid receipt within 30 seconds, the result is unconfirmed, with a
reason shown in history. Older clients can still display messages without
reporting receipts. Unconfirmed messages are not automatically replayed.

### Server Setup

The canonical path is `./setup.sh init` — an interactive wizard that
picks sensible defaults for your environment, generates secrets, and
writes `.env` for you. It presents user-facing scenarios: IP/localhost +
HTTP dev, IP + HTTPS self-signed, Domain + HTTPS self-signed, and Domain +
HTTPS Let's Encrypt. The two self-signed HTTPS choices share the same
compose profile; only the certificate SAN prompts differ.

```bash
git clone https://github.com/guan4tou2/danmu-desktop.git
cd danmu-desktop
./setup.sh init                      # interactive: mode, password, ports, desktop client
./setup.sh init --advanced           # + rate limits, logging, resource caps
./setup.sh check                     # validate an existing .env before startup
./setup.sh gen-secret                # generate + inject SECRET_KEY only

# Then start the stack. The wizard prints the exact command; common paths:
docker compose --profile https up -d         # IP/Domain + HTTPS self-signed — recommended
docker compose --profile traefik up -d       # Domain + HTTPS Let's Encrypt
docker compose --profile http up -d          # IP/localhost + HTTP dev only
```

> v5.0.0+: the Electron desktop client connects via `wss://` only. The
> formal external endpoint is HTTPS/WSS on port `443`, with WebSocket at
> `/ws` on the same web origin.
> `--profile http` runs server + web admin/viewer fine but cannot
> serve the desktop overlay.

Full deploy guide (HTTPS modes, desktop-client connection, Redis, backup/
restore, upgrades): **[DEPLOYMENT.md](DEPLOYMENT.md)**.

#### Shortcut: prebuilt image, no clone

If you only want the server binary and don't need source access:

Use the prebuilt `ghcr.io/guan4tou2/danmu-server:latest` image behind an
HTTPS reverse proxy. Do not publish the app container directly; expose only
the TLS endpoint on port `443`.

`SECRET_KEY` is required in production — production startup refuses to
boot with an ephemeral key. `openssl rand -hex 32` inlines a fresh one;
save it if you want consistent sessions across container recreates.

Multi-arch (`linux/amd64` + `linux/arm64/v8`). Tags: `latest`, `main`,
`<git-sha>`. This shortcut exposes the app's internal HTTP upstream. For
desktop use, front it with HTTPS on port `443` and forward `/ws` to the same
private upstream.

#### Manual (no Docker)

```bash
cp .env.example .env
./setup.sh gen-secret                # writes SECRET_KEY
# Edit .env: set ADMIN_PASSWORD

cd server && uv venv && uv sync
PYTHONPATH=.. uv run python -m server.app    # HTTP + /ws both run from here
```

### Accessing the server

After start-up, open the HTTPS endpoint printed by the wizard:

- Main interface: `https://<host>`
- Admin panel: `https://<host>/admin`
- OBS overlay: `https://<host>/overlay`

Desktop and viewer traffic should use that HTTPS origin only.

### Environment variables

`.env.example` has the full annotated list. Key ones the wizard sets
for you:

| Variable | Purpose |
|---|---|
| `ADMIN_PASSWORD` / `ADMIN_PASSWORD_HASHED` | Admin login (at least one required) |
| `SECRET_KEY` | Flask session key (wizard / `gen-secret` generates this) |
| `ENV` | `production` enables strict session/HSTS defaults |
| `HTTPS_PORT` | Self-signed HTTPS profile override; default is `443`, desktop still uses the same port with `/ws` |
| `TRUSTED_HOSTS` | Comma-separated allowlist for Host header |
| `SESSION_COOKIE_SECURE` | `true` in production over HTTPS |
| `WS_REQUIRE_TOKEN` / `WS_AUTH_TOKEN` | First-boot seed for `/ws` shared-token auth; later managed in Admin → Security |
| `RATE_LIMIT_BACKEND` | `memory` or `redis` (set up via `--profile redis`) |

Every other setting ships a safe default; `.env.example` shows them all.

## Security Notes

- GitHub Advanced Security and Dependabot are enabled for this repository.
- OSV scanning runs on `push`, `pull_request`, and scheduled jobs via `.github/workflows/osv-scanner.yml`.
- Frontend lockfile enforces `serialize-javascript@7.0.3` through npm overrides to address advisory `GHSA-5c6j-r48x-rmvq`.
- Fresh installs with neither WS auth environment variable set start with token auth enabled and a generated token. An explicit `WS_REQUIRE_TOKEN=false` is respected. After `server/runtime/ws_auth.json` exists, its saved state is authoritative; upgrades, restarts, and changing the environment variables do not automatically change an existing deployment's setting.
- If WS auth is off and the web port is reachable beyond localhost or a trusted LAN, anyone who can reach `/ws` can connect a display and receive danmu; this does not grant admin access. To enable it safely, open **Admin → Security → Connection password**, generate a token if needed while auth remains off, copy it into every desktop app's **WS Token** setting and save there, then enable authentication and save in Admin. Reconnect each desktop at a suitable time and verify a test danmu. Saved changes apply only to new/reconnecting clients; existing connections stay up. Keep tokens out of public URLs and screenshots. See the **Desktop Client** section in [deployment instructions](./DEPLOYMENT.md) for details.
- Production startup now refuses an ephemeral `SECRET_KEY`, `SESSION_COOKIE_SECURE=false`, or missing `TRUSTED_HOSTS`. Set those explicitly before deploying.
- The app now emits a nonce-based `Content-Security-Policy` header. If you add new inline scripts, use the template nonce instead of falling back to `unsafe-inline`.
- `Strict-Transport-Security` stays opt-in via `HSTS_ENABLED=true` and is only sent on HTTPS responses.

## Project Docs / 文件

- [`DESIGN.md`](./DESIGN.md) – 設計系統（brand, color, typography, motion, a11y, voice）. Single source of truth for all visual decisions.
- `docs/perf/baseline-v4.6.1.md` – performance baseline（HTTP payload, latency, font loading strategy）。
- `docs/designs/` – design exploration artifacts（typography comparison pages etc）.
- `docs/audits/` – design-review audit reports by round.
- `docs/README.md` – index of technical notes and archives / 技術文件索引。
- `DEPLOYMENT.md` – production-grade setup instructions / 部署說明。
- `server/PLUGIN_GUIDE.md` – Plugin SDK documentation / 插件開發文件。
- `README-CH.md` – 中文總覽。
- `docs/archive/` – historical improvement notes kept for reference / 歷史紀錄。

## CI/CD & Docker Hub

Frontend development uses Node.js 24 (minimum 22.12) and the committed lockfiles.
Run `npm ci` in `server/` and `danmu-desktop/`; run `npm run test:js -- --runInBand`
in `server/` for focused DOM tests and `npm test -- --runInBand` in `danmu-desktop/`.

- Workflow `.github/workflows/docker-build.yml` builds and tests the server image on each PR/push.
- Workflow `.github/workflows/test.yml` runs Python tests with coverage reporting, `pip-audit` for CVE scanning, and a CSS token-discipline lint (`scripts/check-css-tokens.mjs`) that fails on new hardcoded hex colors.
- Workflow `.github/workflows/build.yml` builds Electron app for Windows,
  macOS, and Linux on version bump, then publishes GitHub Releases with
  portable desktop artifacts. macOS ZIP updater metadata is published; Windows
  updater metadata stays unpublished while Windows remains portable-only.
- Set GitHub secrets `DOCKERHUB_USERNAME` + `DOCKERHUB_TOKEN` (Docker Hub access token) to auto-publish `DOCKERHUB_USERNAME/danmu-server:latest` and a commit-SHA tag whenever `main` is updated.

## Testing & Coverage

- Run tests: `make test` or `make test-verbose`
- Generate coverage report: `make coverage`
  - Console summary via `coverage report`
  - HTML report at `server/htmlcov/index.html`

## Port Configuration

- External formal endpoint: `https://<host>` and `wss://<host>/ws` on port `443`
- Desktop, viewer, admin, OBS overlay, and WebSocket all share that single HTTPS/WSS entrypoint
- If the self-signed HTTPS profile must use a custom port, set one `HTTPS_PORT`; do not add a second WS port

## References

SAO UI design inspired by [SAO-UI-PLAN-LINK-START | Akilar の糖果屋](https://akilar.top/posts/1b4fa1dd/)
