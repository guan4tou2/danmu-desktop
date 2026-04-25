# danmu-desktop

Display bullet screen directly on the desktop
在桌面直接顯示彈幕

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

![img](img/danmu%20display.png)

## Overview

This project is divided into two parts:

1. Danmu-Desktop
   - Client-side application that runs on your computer to display danmu
   - Supports Windows, MacOS, and Linux
   - Available as both installer and portable version
   - Auto-update from GitHub Releases

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

Admin creates polls with 2-6 options. Viewers vote by sending option keys (A/B/C) as danmu. Live results display on the overlay with real-time vote counts.

### Overlay Widgets

Add persistent scoreboards, tickers, and labels to the OBS overlay. Manage position, style, and content from the admin panel. Widgets broadcast to all connected overlay clients via WebSocket.

### OBS Browser Source

Use `http://your-server:4000/overlay` as an OBS Browser Source to display danmu without the Electron app. Transparent background, auto-connects via WebSocket.

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
4. Enter the server's IP + WebSocket port (default: `4001`)

### Server Setup

The canonical path is `./setup.sh init` — an interactive wizard that
picks sensible defaults for your environment, generates secrets, and
writes `.env` for you. This covers HTTP dev, HTTPS self-signed (LAN /
VPS), and Traefik + Let's Encrypt (public domain) in one flow.

```bash
git clone https://github.com/guan4tou2/danmu-desktop.git
cd danmu-desktop
./setup.sh init                      # interactive: mode, password, ports, desktop client
./setup.sh init --advanced           # + rate limits, logging, resource caps
./setup.sh check                     # validate an existing .env before startup
./setup.sh gen-secret                # generate + inject SECRET_KEY only

# Then start the stack. The wizard prints the exact command; common paths:
docker compose --profile http up -d          # local HTTP
docker compose --profile https up -d         # HTTPS self-signed (LAN / VPS)
docker compose --profile traefik up -d       # HTTPS + Let's Encrypt (public domain)
```

Full deploy guide (HTTPS modes, desktop-client WS port, Redis, backup/
restore, upgrades): **[DEPLOYMENT.md](DEPLOYMENT.md)**.

#### Shortcut: prebuilt image, no clone

If you only want the server binary and don't need source access:

```bash
docker run -d --name danmu-server \
  -p 4000:4000 -p 4001:4001 \
  -e ADMIN_PASSWORD=your_secure_password \
  -e SECRET_KEY=$(openssl rand -hex 32) \
  -e ENV=production \
  -v "$(pwd)/danmu-runtime:/app/server/runtime" \
  -v "$(pwd)/danmu-user-plugins:/app/server/user_plugins" \
  -v "$(pwd)/danmu-user-fonts:/app/server/user_fonts" \
  --restart unless-stopped \
  ghcr.io/guan4tou2/danmu-server:latest
```

`SECRET_KEY` is required in production — production startup refuses to
boot with an ephemeral key. `openssl rand -hex 32` inlines a fresh one;
save it if you want consistent sessions across container recreates.

Multi-arch (`linux/amd64` + `linux/arm64/v8`). Tags: `latest`, `main`,
`<git-sha>`. For HTTPS on this path you need to front the container with
your own reverse proxy.

#### Manual (no Docker)

```bash
cp .env.example .env
./setup.sh gen-secret                # writes SECRET_KEY
# Edit .env: set ADMIN_PASSWORD

cd server && uv venv && uv sync
PYTHONPATH=.. uv run python -m server.app    # HTTP + WS both run from here
```

### Accessing the server

After start-up, open:

- Main interface: `http://<host>:<port>`
- Admin panel: `http://<host>:<port>/admin`
- OBS overlay: `http://<host>:<port>/overlay`

(Replace `<host>` and `<port>` with whatever the wizard printed.)

### Environment variables

`.env.example` has the full annotated list. Key ones the wizard sets
for you:

| Variable | Purpose |
|---|---|
| `ADMIN_PASSWORD` / `ADMIN_PASSWORD_HASHED` | Admin login (at least one required) |
| `SECRET_KEY` | Flask session key (wizard / `gen-secret` generates this) |
| `ENV` | `production` enables strict session/HSTS defaults |
| `PORT` / `WS_PORT` | HTTP and WebSocket ports (defaults 4000 / 4001) |
| `HTTPS_PORT` | External HTTPS port for `--profile https` / `traefik` |
| `TRUSTED_HOSTS` | Comma-separated allowlist for Host header |
| `SESSION_COOKIE_SECURE` | `true` in production over HTTPS |
| `WS_REQUIRE_TOKEN` / `WS_AUTH_TOKEN` | Optional shared-token auth for port 4001 |
| `RATE_LIMIT_BACKEND` | `memory` or `redis` (set up via `--profile redis`) |

Every other setting ships a safe default; `.env.example` shows them all.

## Security Notes

- GitHub Advanced Security and Dependabot are enabled for this repository.
- OSV scanning runs on `push`, `pull_request`, and scheduled jobs via `.github/workflows/osv-scanner.yml`.
- Frontend lockfile enforces `serialize-javascript@7.0.3` through npm overrides to address advisory `GHSA-5c6j-r48x-rmvq`.
- Dedicated WS auth is disabled by default (`WS_REQUIRE_TOKEN=false`). If port `4001` is reachable beyond localhost or a trusted LAN, any reachable client can connect unless you enable token auth or restrict the network path.
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

- Workflow `.github/workflows/docker-build.yml` builds and tests the server image on each PR/push.
- Workflow `.github/workflows/test.yml` runs Python tests with coverage reporting and `pip-audit` for CVE scanning.
- Workflow `.github/workflows/build.yml` builds Electron app for Windows, macOS, and Linux on version bump, creating GitHub Releases with auto-update metadata.
- Set GitHub secrets `DOCKERHUB_USERNAME` + `DOCKERHUB_TOKEN` (Docker Hub access token) to auto-publish `DOCKERHUB_USERNAME/danmu-server:latest` and a commit-SHA tag whenever `main` is updated.

## Testing & Coverage

- Run tests: `make test` or `make test-verbose`
- Generate coverage report: `make coverage`
  - Console summary via `coverage report`
  - HTML report at `server/htmlcov/index.html`

## Port Configuration

- `4000`: Web interface (HTTP via reverse proxy)
- `4001`: Danmu Fire client connection (WebSocket via reverse proxy)

## References

SAO UI design inspired by [SAO-UI-PLAN-LINK-START | Akilar の糖果屋](https://akilar.top/posts/1b4fa1dd/)
