# Project Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate deployment paths, centralize design tokens, and unify product naming across the danmu-desktop project.

**Architecture:** Three independent improvements executed sequentially, each producing one commit. Deployment consolidation splits a profile-based `docker-compose.yml` into layered override files. Design token consolidation creates a shared `tokens.css` imported by both desktop and server CSS. Naming unification applies a dual-brand system (Danmu Fire for web, Danmu Desktop for client).

**Tech Stack:** Docker Compose, CSS custom properties, nginx, Python/Flask config

---

## Task 1: Deployment — Rewrite docker-compose.yml (base only)

**Files:**
- Rewrite: `docker-compose.yml`

- [ ] **Step 1: Rewrite `docker-compose.yml` to contain only `server` + `reverse-proxy` (HTTP)**

Remove all `profiles` blocks, the `reverse-proxy-https`, `traefik`, and `redis` services, and the `redis-data` volume. The `reverse-proxy` service no longer needs a `profiles` key — it starts by default. Remove Traefik labels from the `server` service.

```yaml
services:
  server:
    image: ${DANMU_IMAGE:-danmu-server:local}
    build:
      context: ./server
      dockerfile: Dockerfile
    container_name: danmu-fire
    expose:
      - "4000"
      - "4001"
    environment:
      - ADMIN_PASSWORD=${ADMIN_PASSWORD:-}
      - ADMIN_PASSWORD_HASHED=${ADMIN_PASSWORD_HASHED:-}
      - SECRET_KEY=${SECRET_KEY:-}
      - PORT=${PORT:-4000}
      - WS_PORT=${WS_PORT:-4001}
      - ENV=${ENV:-production}
      - FIRE_RATE_LIMIT=${FIRE_RATE_LIMIT:-20}
      - FIRE_RATE_WINDOW=${FIRE_RATE_WINDOW:-60}
      - RATE_LIMIT_BACKEND=${RATE_LIMIT_BACKEND:-memory}
      - REDIS_URL=${REDIS_URL:-}
      - LOG_LEVEL=${LOG_LEVEL:-INFO}
      - FONT_TOKEN_EXPIRATION=${FONT_TOKEN_EXPIRATION:-900}
      - SESSION_COOKIE_SECURE=${SESSION_COOKIE_SECURE:-}
      - TRUSTED_HOSTS=${TRUSTED_HOSTS:-localhost,127.0.0.1}
      - WS_REQUIRE_TOKEN=${WS_REQUIRE_TOKEN:-false}
      - WS_AUTH_TOKEN=${WS_AUTH_TOKEN:-}
      - WS_ALLOWED_ORIGINS=${WS_ALLOWED_ORIGINS:-}
      - WEB_WS_ALLOWED_ORIGINS=${WEB_WS_ALLOWED_ORIGINS:-}
      - WS_MAX_CONNECTIONS=${WS_MAX_CONNECTIONS:-200}
      - WS_MAX_CONNECTIONS_PER_IP=${WS_MAX_CONNECTIONS_PER_IP:-10}
    volumes:
      - ./server/user_fonts:/app/server/user_fonts
      - ./server/static:/app/server/static
      - ./server/logs:/app/server/logs
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: ${SERVER_MEMORY_LIMIT:-512m}
          cpus: "${SERVER_CPU_LIMIT:-1.0}"
    healthcheck:
      test: ["CMD", "python", "-c", "import urllib.request; urllib.request.urlopen('http://localhost:4000/health').read()"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s

  reverse-proxy:
    image: nginx:1.27-alpine
    container_name: danmu-reverse-proxy
    depends_on:
      - server
    ports:
      - "${PORT:-4000}:4000"
      - "${WS_PORT:-4001}:4001"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 128m
          cpus: "0.5"
```

Key changes from original:
- `container_name: danmu-fire` (was `danmu-server`)
- `WS_REQUIRE_TOKEN` default is now `false` (was `true`)
- `SESSION_COOKIE_SECURE` default is empty (let Python code decide based on ENV)
- `REDIS_URL` default is empty (only set when using redis override)
- No Traefik labels on server
- No profiles on reverse-proxy
- No redis-data volume
- Added `ADMIN_PASSWORD_HASHED` env passthrough

- [ ] **Step 2: Verify YAML is valid**

Run: `docker compose config --quiet`
Expected: no output, exit code 0

- [ ] **Step 3: Commit**

```bash
git add docker-compose.yml
git commit -m "refactor(deploy): simplify docker-compose.yml to base HTTP config

Remove profiles, Traefik labels, HTTPS/Redis services. Base file now
works with plain 'docker compose up -d'. Override files coming next."
```

---

## Task 2: Deployment — Create override files

**Files:**
- Create: `docker-compose.https.yml`
- Create: `docker-compose.traefik.yml`
- Create: `docker-compose.redis.yml`

- [ ] **Step 1: Create `docker-compose.https.yml`**

```yaml
# HTTPS override — self-signed certificate (auto-generated if missing)
# Usage: docker compose -f docker-compose.yml -f docker-compose.https.yml up -d
services:
  reverse-proxy:
    # Disable the HTTP-only proxy defined in the base file
    profiles:
      - disabled

  reverse-proxy-https:
    image: nginx:1.27-alpine
    container_name: danmu-reverse-proxy-https
    depends_on:
      - server
    ports:
      - "${HTTP_PORT:-80}:80"
      - "${HTTPS_PORT:-443}:443"
    volumes:
      - ./nginx/nginx-https.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/certs:/etc/nginx/certs
    entrypoint:
      - sh
      - -c
      - |
        if [ ! -f /etc/nginx/certs/fullchain.pem ] || [ ! -f /etc/nginx/certs/privkey.pem ]; then
          echo "[danmu] Auto-generating self-signed certificate..."
          printf '[req]\ndistinguished_name=req\n[SAN]\nsubjectAltName=DNS:localhost,IP:127.0.0.1\n' \
            > /tmp/san.cnf
          openssl req -x509 -nodes -newkey rsa:2048 \
            -keyout /etc/nginx/certs/privkey.pem \
            -out /etc/nginx/certs/fullchain.pem \
            -days 365 \
            -subj "/CN=localhost" \
            -extensions SAN \
            -config /tmp/san.cnf 2>/dev/null
          echo "[danmu] Certificate generated (valid 365 days)."
          echo "[danmu] To use a real certificate, place fullchain.pem / privkey.pem in nginx/certs/ and restart."
        fi
        exec nginx -g "daemon off;"
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 128m
          cpus: "0.5"
```

- [ ] **Step 2: Create `docker-compose.traefik.yml`**

```yaml
# Traefik + Let's Encrypt override
# Usage: docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d
# Requires: public domain, port 80 accessible from internet
# Set DOMAIN and ACME_EMAIL in .env
services:
  reverse-proxy:
    # Disable the HTTP-only proxy defined in the base file
    profiles:
      - disabled

  server:
    labels:
      - traefik.enable=true
      # HTTP → HTTPS redirect
      - traefik.http.middlewares.danmu-https-redirect.redirectscheme.scheme=https
      - traefik.http.middlewares.danmu-https-redirect.redirectscheme.permanent=true
      - traefik.http.routers.danmu-http.rule=Host(`${DOMAIN:-localhost}`)
      - traefik.http.routers.danmu-http.entrypoints=web
      - traefik.http.routers.danmu-http.middlewares=danmu-https-redirect
      # HTTPS - HTTP (port 4000)
      - traefik.http.routers.danmu.rule=Host(`${DOMAIN:-localhost}`) && !PathPrefix(`/ws`)
      - traefik.http.routers.danmu.entrypoints=websecure
      - traefik.http.routers.danmu.tls.certresolver=le
      - traefik.http.services.danmu.loadbalancer.server.port=4000
      # WSS (port 4001, path /ws, strip prefix)
      - traefik.http.middlewares.danmu-ws-strip.stripprefix.prefixes=/ws
      - traefik.http.routers.danmu-ws.rule=Host(`${DOMAIN:-localhost}`) && PathPrefix(`/ws`)
      - traefik.http.routers.danmu-ws.entrypoints=websecure
      - traefik.http.routers.danmu-ws.tls.certresolver=le
      - traefik.http.routers.danmu-ws.middlewares=danmu-ws-strip
      - traefik.http.services.danmu-ws.loadbalancer.server.port=4001

  traefik:
    image: traefik:v3.3
    container_name: danmu-traefik
    ports:
      - "${HTTP_PORT:-80}:80"
      - "${HTTPS_PORT:-443}:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./traefik/acme.json:/acme.json
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --certificatesresolvers.le.acme.email=${ACME_EMAIL:-admin@example.com}
      - --certificatesresolvers.le.acme.storage=/acme.json
      - --certificatesresolvers.le.acme.httpchallenge.entrypoint=web
    restart: unless-stopped
```

- [ ] **Step 3: Create `docker-compose.redis.yml`**

```yaml
# Redis rate limiting override (combinable with any other override)
# Usage: docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d
# Set RATE_LIMIT_BACKEND=redis in .env
services:
  server:
    environment:
      - RATE_LIMIT_BACKEND=redis
      - REDIS_URL=redis://:${REDIS_PASSWORD:-changeme}@redis:6379/0

  redis:
    image: redis:7-alpine
    container_name: danmu-redis
    expose:
      - "6379"
    volumes:
      - redis-data:/data
    restart: unless-stopped
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD:-changeme}

volumes:
  redis-data:
```

- [ ] **Step 4: Validate all override combinations**

Run each combination and check YAML validity:
```bash
docker compose -f docker-compose.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.https.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.traefik.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.redis.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.https.yml -f docker-compose.redis.yml config --quiet
```
Expected: all exit code 0, no output

- [ ] **Step 5: Commit**

```bash
git add docker-compose.https.yml docker-compose.traefik.yml docker-compose.redis.yml
git commit -m "refactor(deploy): add layered override files for HTTPS, Traefik, Redis

Each override is independent and composable via docker compose -f flags.
HTTPS override disables base HTTP proxy and adds nginx HTTPS with auto
self-signed cert. Traefik override adds Let's Encrypt. Redis override
adds distributed rate limiting."
```

---

## Task 3: Deployment — Config safety and cleanup

**Files:**
- Modify: `server/config.py:80` (WS_REQUIRE_TOKEN default)
- Delete: `server/.env.example`
- Rewrite: `env.example`

- [ ] **Step 1: Change WS_REQUIRE_TOKEN default to false in `server/config.py`**

Change line 80 from:
```python
WS_REQUIRE_TOKEN = os.getenv("WS_REQUIRE_TOKEN", "true").lower() == "true"
```
to:
```python
WS_REQUIRE_TOKEN = os.getenv("WS_REQUIRE_TOKEN", "false").lower() == "true"
```

- [ ] **Step 2: Delete `server/.env.example`**

```bash
rm server/.env.example
```

- [ ] **Step 3: Rewrite `env.example` with sections and annotations**

```bash
# === Required ===
# At least one of ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED must be set.

# Plain text (dev only — not recommended for production)
ADMIN_PASSWORD=your_secure_password_here

# Bcrypt hash (recommended for production)
# Generate: python server/scripts/hash_password.py
# ADMIN_PASSWORD_HASHED=$2b$12$...

# === Networking ===

PORT=4000                   # HTTP server port
WS_PORT=4001                # WebSocket server port
ENV=production              # "production" enables secure defaults

# HTTPS / Traefik only:
# HTTP_PORT=80
# HTTPS_PORT=443
# DOMAIN=danmu.example.com  # Traefik: public domain for Let's Encrypt
# ACME_EMAIL=admin@example.com

# === Security ===

SECRET_KEY=                 # Leave empty to auto-generate; set a random string for persistence across restarts

# Session cookies
# SESSION_COOKIE_SECURE is auto-true when ENV=production; override here if needed
# SESSION_COOKIE_SECURE=true
SESSION_COOKIE_SAMESITE=Lax # Options: Strict, Lax, None

# Host validation (production: set to your domain)
TRUSTED_HOSTS=localhost,127.0.0.1
TRUST_X_FORWARDED_FOR=false # Only enable behind a trusted reverse proxy

# CORS
CORS_ORIGINS=*              # Comma-separated origins; "*" = allow all
# CORS_SUPPORTS_CREDENTIALS=false  # Cannot combine with wildcard CORS_ORIGINS

# WebSocket authentication (dedicated WS server on port 4001)
WS_REQUIRE_TOKEN=false      # Set true in production + provide WS_AUTH_TOKEN
WS_AUTH_TOKEN=              # Shared secret; if WS_REQUIRE_TOKEN=true and this is empty, ALL clients rejected
WS_ALLOWED_ORIGINS=         # Comma-separated; empty = no restriction
WEB_WS_ALLOWED_ORIGINS=     # For browser WS on Flask route; empty = same-origin only

# WebSocket limits
WS_MAX_CONNECTIONS=200
WS_MAX_CONNECTIONS_PER_IP=10
# WS_MAX_SIZE=1048576       # Max message bytes (default 1 MB)
# WS_MAX_QUEUE=16
# WS_WRITE_LIMIT=32768

# === Rate Limiting ===

FIRE_RATE_LIMIT=20          # Messages per window
FIRE_RATE_WINDOW=60         # Window in seconds
# ADMIN_RATE_LIMIT=60
# ADMIN_RATE_WINDOW=60
# API_RATE_LIMIT=30
# API_RATE_WINDOW=60
RATE_LIMIT_BACKEND=memory   # Options: memory, redis

# Redis (only when RATE_LIMIT_BACKEND=redis)
# Docker: redis://:PASSWORD@redis:6379/0  (use service name "redis")
# Local:  redis://:PASSWORD@localhost:6379/0
REDIS_PASSWORD=changeme
# REDIS_URL=redis://:changeme@redis:6379/0

# === Optional ===

LOG_LEVEL=INFO              # DEBUG, INFO, WARNING, ERROR
# LOG_FORMAT=text           # Options: text, json
FONT_TOKEN_EXPIRATION=900   # Font download token TTL (seconds)

# Settings persistence
# SETTINGS_FILE=/path/to/danmu_runtime_settings.json

# Danmu history
# DANMU_HISTORY_MAX_RECORDS=10000
# DANMU_HISTORY_CLEANUP_HOURS=24

# Docker resource limits
# SERVER_MEMORY_LIMIT=512m
# SERVER_CPU_LIMIT=1.0

# Server image (uncomment to use prebuilt image instead of local build)
# DANMU_IMAGE=albetyty/danmu-server:latest
```

- [ ] **Step 4: Run existing tests to verify config change doesn't break anything**

Run: `cd /Users/guantou/Desktop/danmu-desktop && uv run --project server python -m pytest server/tests/ -q --rootdir=.`
Expected: all tests pass

- [ ] **Step 5: Commit**

```bash
git add server/config.py env.example
git rm server/.env.example
git commit -m "refactor(deploy): unify env.example, change WS_REQUIRE_TOKEN default to false

Single env.example with clear sections (Required/Networking/Security/
Rate Limiting/Optional). Delete redundant server/.env.example.
WS_REQUIRE_TOKEN defaults false for dev safety — production users
explicitly opt in."
```

---

## Task 4: Deployment — Update Makefile and documentation

**Files:**
- Modify: `Makefile`
- Modify: `README.md`
- Modify: `README-CH.md`
- Modify: `DEPLOYMENT.md`

- [ ] **Step 1: Update Makefile targets**

Replace the docker-up targets to use the new override pattern:

```makefile
docker-up: ## 啟動容器（HTTP，從 source build）
	docker compose up -d --build

docker-up-prebuilt: ## 啟動容器（HTTP，使用預建 image，需設定 DANMU_IMAGE）
	docker compose up -d --no-build

docker-up-https: ## 啟動容器（HTTPS，自動產生自簽憑證）
	docker compose -f docker-compose.yml -f docker-compose.https.yml up -d

docker-up-traefik: ## 啟動容器（Traefik + Let's Encrypt，需在 .env 設定 DOMAIN 和 ACME_EMAIL）
	@mkdir -p traefik
	@touch traefik/acme.json && chmod 600 traefik/acme.json
	docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d

docker-up-redis: ## 啟動容器（HTTP + Redis rate limiter）
	docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d
```

- [ ] **Step 2: Update README.md Docker section**

Replace the Docker Compose section (Option 2) with simplified instructions using the override pattern. Replace the `--profile` references. Update the HTTPS section to use `-f` flag. Add override table.

- [ ] **Step 3: Update README-CH.md Docker section**

Same changes as README.md but in Chinese.

- [ ] **Step 4: Update DEPLOYMENT.md commands**

Replace all `--profile http/https/traefik/redis` references with the new `-f` override pattern.

- [ ] **Step 5: Commit**

```bash
git add Makefile README.md README-CH.md DEPLOYMENT.md
git commit -m "docs(deploy): update Makefile and docs for layered compose

Replace --profile commands with -f override pattern. Simplify README
Docker section. Update DEPLOYMENT.md with new file structure."
```

---

## Task 5: Design Tokens — Create shared/tokens.css

**Files:**
- Create: `shared/tokens.css`
- Create: `server/static/css/tokens.css` (copy)
- Modify: `Makefile`

- [ ] **Step 1: Create `shared/tokens.css`**

```css
:root {
  /* Brand */
  --color-primary: #38bdf8;
  --color-primary-hover: #0ea5e9;
  --color-secondary: #3b82f6;
  --color-accent: #06b6d4;

  /* Semantic */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
  --color-error-hover: #dc2626;

  /* Surface */
  --color-bg-deep: #000000;
  --color-bg-card: rgba(15, 23, 42, 0.75);
  --color-bg-input: rgba(30, 41, 59, 0.8);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-focus: #38bdf8;

  /* Text */
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #475569;

  /* Typography */
  --font-family: "Poppins", sans-serif;

  /* Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-pill: 999px;
}
```

- [ ] **Step 2: Copy to server static dir**

```bash
cp shared/tokens.css server/static/css/tokens.css
```

- [ ] **Step 3: Add `copy-tokens` target to Makefile**

Add after the `format` target:

```makefile
copy-tokens: ## 將共用 design tokens 複製到 server static 目錄
	cp shared/tokens.css server/static/css/tokens.css
```

- [ ] **Step 4: Commit**

```bash
git add shared/tokens.css server/static/css/tokens.css Makefile
git commit -m "feat(design): add shared design tokens (tokens.css)

Single source of truth for colors, typography, and spacing. Desktop
imports via webpack @import. Server gets a copy via 'make copy-tokens'."
```

---

## Task 6: Design Tokens — Replace hardcoded values in desktop styles.css

**Files:**
- Modify: `danmu-desktop/styles.css`

- [ ] **Step 1: Add import and replace all hardcoded values**

Add `@import "../shared/tokens.css";` at top of `danmu-desktop/styles.css`, then replace every hardcoded color/radius with the corresponding `var(--token)`:

| Hardcoded | Token |
|-----------|-------|
| `"Poppins", sans-serif` | `var(--font-family)` |
| `rgba(15, 23, 42, 0.75)` | `var(--color-bg-card)` |
| `rgba(255, 255, 255, 0.125)` | `var(--color-border)` |
| `rgba(30, 41, 59, 0.8)` | `var(--color-bg-input)` |
| `#334155` | `var(--color-text-muted)` (border context) |
| `#f1f5f9` | `var(--color-text-primary)` |
| `#38bdf8` | `var(--color-primary)` |
| `rgba(56, 189, 248, 0.5)` → keep as-is (derived opacity, can't be a simple token) |
| `#3b82f6` | `var(--color-secondary)` |
| `#06b6d4` | `var(--color-accent)` |
| `#94a3b8` | `var(--color-text-secondary)` |
| `#10b981` | `var(--color-success)` (unify to #22c55e) |
| `#ef4444` | `var(--color-error)` |
| `999px` | `var(--radius-pill)` |
| `#475569` | `var(--color-text-muted)` |

Note: `rgba()` variants with custom opacity (e.g., `rgba(56, 189, 248, 0.4)` for box-shadow glow) stay hardcoded — they're derived values that don't map cleanly to a single token.

The full rewritten file should have `@import` at the top and `var()` references throughout. Verify visually after the next webpack build.

- [ ] **Step 2: Build webpack to verify CSS compiles**

Run: `cd /Users/guantou/Desktop/danmu-desktop/danmu-desktop && npx webpack`
Expected: compiled successfully

- [ ] **Step 3: Commit**

```bash
git add danmu-desktop/styles.css
git commit -m "refactor(design): replace hardcoded colors with design tokens in desktop CSS

All brand/semantic/surface colors now use var(--color-*) from tokens.css.
Unifies success color to #22c55e and glass border opacity to 0.1."
```

---

## Task 7: Design Tokens — Replace hardcoded values in server style.css

**Files:**
- Modify: `server/static/css/style.css`

- [ ] **Step 1: Add import and replace all hardcoded values**

Add `@import url("tokens.css");` at top of `server/static/css/style.css`, then replace hardcoded values with tokens:

| Hardcoded | Token |
|-----------|-------|
| `"Poppins", sans-serif` | `var(--font-family)` |
| `#000000` (body bg) | `var(--color-bg-deep)` |
| `rgba(15, 23, 42, 0.75)` | `var(--color-bg-card)` |
| `rgba(255, 255, 255, 0.08)` | `var(--color-border)` (unifies to 0.1) |
| `#38bdf8` | `var(--color-primary)` |
| `#0f172a` | stays (used as thumb border, very specific) |
| `#1e293b` (modal bg) | stays (one-off modal background, darker than card) |
| `#ef4444` | `var(--color-error)` |
| `#dc2626` | `var(--color-error-hover)` |
| `#f87171` | stays (animation-only flash, derived) |
| `#f1f5f9` | `var(--color-text-primary)` |
| `#0369a1` | stays (effect button active, specific sky-700 variant) |
| `#0ea5e9` | `var(--color-primary-hover)` |
| `#22c55e` | `var(--color-success)` |
| `#eab308` | `var(--color-warning)` |
| `#94a3b8` | `var(--color-text-secondary)` |
| `#e2e8f0` | stays (hover text, one-off lighter variant) |
| `0.75rem` (modal radius) | `var(--radius-lg)` |
| `0.5rem` (button radius) | `var(--radius-md)` |
| `0.25rem` (password toggle radius) | `var(--radius-sm)` |
| `999px` | `var(--radius-pill)` |

- [ ] **Step 2: Verify server loads correctly**

Run: `curl -s http://localhost:4000 | grep 'tokens.css'`
Expected: CSS import visible or page loads without error. (Server must be running.)

If server not running, just verify the file has no syntax errors by checking it manually.

- [ ] **Step 3: Commit**

```bash
git add server/static/css/style.css
git commit -m "refactor(design): replace hardcoded colors with design tokens in server CSS

Same token set as desktop. Unifies glass border opacity from 0.08 to
0.1 via var(--color-border). All semantic colors now centralized."
```

---

## Task 8: Naming — Apply dual brand system

**Files:**
- Modify: `danmu-desktop/index.html` (title)
- Modify: `danmu-desktop/package.json` (productName, appId)
- Modify: `danmu-desktop/main.js` (tray label)
- Modify: `server/templates/admin.html` (title)
- Modify: `server/templates/overlay.html` (title)
- Modify: `README.md` (quarantine command)
- Modify: `README-CH.md` (quarantine command)

- [ ] **Step 1: Update desktop client naming**

In `danmu-desktop/index.html`, change `<title>Danmu Overlay Control</title>` to `<title>Danmu Desktop</title>`.

In `danmu-desktop/main.js`, change `"Open Danmu Manager"` to `"Open Danmu Desktop"`.

In `danmu-desktop/package.json`:
- Change `"productName": "danmu manager"` to `"productName": "Danmu Desktop"`
- Change `"appId": "com.example.app"` to `"appId": "com.danmufire.desktop"`

- [ ] **Step 2: Update server naming**

In `server/templates/admin.html`, change `<title>Danmu Admin</title>` to `<title>Danmu Fire Admin</title>`.

In `server/templates/overlay.html`, change `<title>Danmu Overlay</title>` to `<title>Danmu Fire Overlay</title>`.

- [ ] **Step 3: Update README quarantine commands**

In `README.md`, change `'danmu manager.app'` to `'Danmu Desktop.app'`.

In `README-CH.md`, change `'danmu manager.app'` to `'Danmu Desktop.app'`.

- [ ] **Step 4: Rebuild webpack and run tests**

```bash
cd /Users/guantou/Desktop/danmu-desktop/danmu-desktop && npx webpack
cd /Users/guantou/Desktop/danmu-desktop/danmu-desktop && npx jest --no-coverage
cd /Users/guantou/Desktop/danmu-desktop && uv run --project server python -m pytest server/tests/ -q --rootdir=.
```
Expected: webpack succeeds, 299 JS tests pass, 617 Python tests pass

- [ ] **Step 5: Commit**

```bash
git add danmu-desktop/index.html danmu-desktop/package.json danmu-desktop/main.js \
       server/templates/admin.html server/templates/overlay.html \
       README.md README-CH.md
git commit -m "chore(naming): unify product naming to dual brand system

Danmu Fire = web service (title, heading, admin, overlay pages)
Danmu Desktop = desktop client (window title, tray, productName, appId)
Update README quarantine commands to match new app name."
```

---

## Task 9: Final — Run all tests, verify, prepare PR

**Files:** None (verification only)

- [ ] **Step 1: Run full test suite**

```bash
cd /Users/guantou/Desktop/danmu-desktop && uv run --project server python -m pytest server/tests/ -q --rootdir=.
cd /Users/guantou/Desktop/danmu-desktop/danmu-desktop && npx jest --no-coverage
cd /Users/guantou/Desktop/danmu-desktop/danmu-desktop && npx webpack
```
Expected: all pass

- [ ] **Step 2: Validate all Docker Compose configurations**

```bash
cd /Users/guantou/Desktop/danmu-desktop
docker compose config --quiet
docker compose -f docker-compose.yml -f docker-compose.https.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.traefik.yml config --quiet
docker compose -f docker-compose.yml -f docker-compose.redis.yml config --quiet
```
Expected: all exit 0

- [ ] **Step 3: Verify tokens.css is importable**

```bash
# Desktop: webpack should bundle it
grep "color-primary" danmu-desktop/styles.css && echo "Desktop tokens OK"
# Server: file exists
test -f server/static/css/tokens.css && echo "Server tokens OK"
```

- [ ] **Step 4: Push and create PR**

```bash
git push -u origin enhance/project-polish
```

Then create PR with title: "enhance: deployment consolidation, design tokens, product naming"
