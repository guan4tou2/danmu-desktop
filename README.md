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
2. For MacOS users, run:
   ```bash
   sudo xattr -r -d com.apple.quarantine 'Danmu Desktop.app'
   ```
3. Launch the application
4. Enter the server's IP and port (default: 4001)

### Server Setup

#### Option 1: GitHub Container Registry Image (Recommended)

1. Pull and run the image directly (replace the password):
   ```bash
   docker run -d --name danmu-server \
     -p 4000:4000 \
     -p 4001:4001 \
     -e ADMIN_PASSWORD=your_secure_password \
     -v danmu_fonts:/app/server/user_fonts \
     -v danmu_static:/app/server/static \
     -v danmu_logs:/app/server/logs \
     ghcr.io/guan4tou2/danmu-server:latest
   ```
   - You can also use a bcrypt hash instead of plaintext:
     - Generate hash: `python server/scripts/hash_password.py`
     - Set `-e ADMIN_PASSWORD_HASHED='<bcrypt-hash>'`
   - Server startup now requires at least one of `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASHED`.
   - Multi-arch images published for `linux/amd64` and `linux/arm64/v8`
   - Available tags:
     - `latest`: stable build from `main`
     - `main`: rolling alias of the newest `main` build
     - `<git-sha>`: immutable build for a specific commit (see workflow logs)
2. Optional: add `--restart unless-stopped` for long-running deployments.
3. To update, just pull the latest tag and restart:
   ```bash
   docker pull ghcr.io/guan4tou2/danmu-server:latest
   docker stop danmu-server && docker rm danmu-server
   # rerun the docker run command above
   ```

#### Option 2: Docker Compose

1. Download the config files (no full clone needed):

   ```bash
   curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/docker-compose.yml
   curl -O https://raw.githubusercontent.com/guan4tou2/danmu-desktop/main/.env.example
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env
   # Edit .env and set ADMIN_PASSWORD / ADMIN_PASSWORD_HASHED and other settings
   ```

3. Start services (HTTP):

   ```bash
   docker compose up -d
   ```
   - Nginx reverse proxy exposes ports `4000` (HTTP) and `4001` (WebSocket).
   - The Python server runs internal-only behind Nginx.

4. Optional overrides (composable via `-f` flags):

   | Override | Command |
   |----------|---------|
   | HTTPS (self-signed) | `docker compose -f docker-compose.yml -f docker-compose.https.yml up -d` |
   | Traefik + Let's Encrypt | `docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d` |
   | Redis rate limiting | `docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d` |

   Overrides can be combined, e.g. HTTPS + Redis:
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.https.yml -f docker-compose.redis.yml up -d
   ```

#### Option 3: Manual Setup

1. Clone the repository (server-only, skips Electron client):

   ```bash
   git clone --filter=blob:none --sparse https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   git sparse-checkout set server .env.example
   ```

   Or full clone:
   ```bash
   git clone https://github.com/guan4tou2/danmu-desktop
   cd danmu-desktop
   ```

2. Configure environment:

   ```bash
   cp .env.example .env
   vim .env  # Set your admin password and other settings
   ```

3. Setup virtual environment and install dependencies:

   ```bash
   cd server
   uv venv
   uv sync
   ```

4. Start the server (HTTP + WebSocket):

   ```bash
   # Terminal 1: HTTP server
   PYTHONPATH=.. uv run python -m server.app

   # Terminal 2: WebSocket server
   PYTHONPATH=.. uv run python -m server.ws_app
   ```

### Accessing the Server

- Main interface: `http://ip:4000`
- Admin panel: `http://ip:4000/admin`
- OBS overlay: `http://ip:4000/overlay`

### Environment Variables

Key configuration options (set via `.env` file or environment variables):

- `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASHED` (at least one required): Admin authentication secret
- `PORT`: HTTP server port (default: 4000)
- `WS_PORT`: WebSocket server port (default: 4001)
- `WS_HOST`: dedicated WebSocket bind host (default: `0.0.0.0`)
- `SECRET_KEY`: Flask secret key (required in production; dev may auto-generate one)
- `TRUSTED_HOSTS`: comma-separated allowed hostnames for Host header validation (required in production)
- `TRUST_X_FORWARDED_FOR`: trust `X-Forwarded-For` for client IP detection (default: `false`; enable only behind a trusted reverse proxy)
- `HSTS_ENABLED`: opt-in `Strict-Transport-Security` response header for HTTPS requests (default: `false`)
- `WS_REQUIRE_TOKEN`: require `?token=` for dedicated WebSocket clients (default: `false`)
- `WS_AUTH_TOKEN`: shared secret token for dedicated WebSocket clients
- `WS_MAX_SIZE`: maximum incoming WebSocket message size in bytes (default: `1048576`)
- `WS_MAX_QUEUE`: maximum number of incoming WebSocket messages buffered (default: `16`)
- `WS_WRITE_LIMIT`: write buffer limit in bytes for WebSocket connections (default: `32768`)
- `WEB_WS_ALLOWED_ORIGINS`: optional allowlist for browser WebSocket Origin on `/` route
- `RATE_LIMIT_BACKEND`: Rate limiter backend - `memory` or `redis` (default: memory)
- `REDIS_URL`: Redis connection URL (required if using Redis backend)
- `LOG_LEVEL`: Logging level - `DEBUG`, `INFO`, `WARNING`, `ERROR` (default: INFO)
- `SETTINGS_FILE`: path to persisted runtime settings file (optional; defaults to a temp file)

See `.env.example` for all available options.

## Security Notes

- GitHub Advanced Security and Dependabot are enabled for this repository.
- OSV scanning runs on `push`, `pull_request`, and scheduled jobs via `.github/workflows/osv-scanner.yml`.
- Frontend lockfile enforces `serialize-javascript@7.0.3` through npm overrides to address advisory `GHSA-5c6j-r48x-rmvq`.
- Dedicated WS auth is disabled by default (`WS_REQUIRE_TOKEN=false`). If port `4001` is reachable beyond localhost or a trusted LAN, any reachable client can connect unless you enable token auth or restrict the network path.
- Production startup now refuses an ephemeral `SECRET_KEY`, `SESSION_COOKIE_SECURE=false`, or missing `TRUSTED_HOSTS`. Set those explicitly before deploying.
- The app now emits a nonce-based `Content-Security-Policy` header. If you add new inline scripts, use the template nonce instead of falling back to `unsafe-inline`.
- `Strict-Transport-Security` stays opt-in via `HSTS_ENABLED=true` and is only sent on HTTPS responses.

## Project Docs / 文件

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
- `4001`: Danmu Desktop Client connection (WebSocket via reverse proxy)

## References

SAO UI design inspired by [SAO-UI-PLAN-LINK-START | Akilar の糖果屋](https://akilar.top/posts/1b4fa1dd/)
