# Deployment Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate 5 Docker Compose files into one profiles-based file, add a `setup.sh` wizard/validator, and write a clear `DEPLOYMENT.md`.

**Architecture:** Single `docker-compose.yml` using Docker Compose profiles (`http`, `https`, `traefik`, `redis`). A `setup.sh` Bash script provides interactive init and pre-launch validation. `docker-compose.dev.yml` is kept (slim) for dev source-mount overrides. Three old override files are deleted.

**Tech Stack:** Docker Compose v2 (profiles), Bash, Markdown

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Rewrite | `docker-compose.yml` | All services with profiles; replaces 4 override files |
| Keep (modify) | `docker-compose.dev.yml` | Dev source-mount override; remove `version:` key |
| Delete | `docker-compose.https.yml` | Merged into profiles |
| Delete | `docker-compose.traefik.yml` | Merged into profiles |
| Delete | `docker-compose.redis.yml` | Merged into profiles |
| Create | `setup.sh` | Interactive init + .env validation |
| Create | `DEPLOYMENT.md` | Decision tree + mode-by-mode reference |
| Modify | `Makefile` | Replace `docker-up-*` targets with profiles-based equivalents |
| Modify | `README.md` | Shorten deployment section, link to DEPLOYMENT.md |

---

### Task 1: Rewrite docker-compose.yml with profiles

**Files:**
- Modify: `docker-compose.yml`

- [ ] **Step 1: Replace docker-compose.yml with profiles-based version**

```yaml
# docker-compose.yml
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
      - WS_HOST=0.0.0.0
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
      - TRUST_X_FORWARDED_FOR=true
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

  # ── HTTP mode (--profile http) ────────────────────────────────────────────
  reverse-proxy:
    profiles: [http]
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

  # ── HTTPS self-signed mode (--profile https) ─────────────────────────────
  reverse-proxy-https:
    profiles: [https]
    image: nginx:1.27-alpine
    container_name: danmu-reverse-proxy-https
    depends_on:
      server:
        condition: service_healthy
    ports:
      - "${HTTP_PORT:-80}:80"
      - "${HTTPS_PORT:-443}:443"
    volumes:
      - ./nginx/nginx-https.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/certs:/etc/nginx/certs
    environment:
      - SERVER_IP=${SERVER_IP:-}
      - SERVER_DOMAIN=${SERVER_DOMAIN:-}
    entrypoint:
      - sh
      - -c
      - |
        if [ ! -f /etc/nginx/certs/fullchain.pem ] || [ ! -f /etc/nginx/certs/privkey.pem ]; then
          echo "[danmu] Auto-generating self-signed certificate..."
          apk add --no-cache openssl >/dev/null 2>&1
          _SAN="DNS:localhost,IP:127.0.0.1"
          _CN="localhost"
          if [ -n "$$SERVER_IP" ]; then
            _SAN="$$_SAN,IP:$$SERVER_IP"
            _CN="$$SERVER_IP"
          fi
          if [ -n "$$SERVER_DOMAIN" ]; then
            _SAN="$$_SAN,DNS:$$SERVER_DOMAIN"
            _CN="$$SERVER_DOMAIN"
          fi
          printf '[req]\ndistinguished_name=req\n[SAN]\nsubjectAltName=%s\n' "$$_SAN" > /tmp/san.cnf
          openssl req -x509 -nodes -newkey rsa:2048 \
            -keyout /etc/nginx/certs/privkey.pem \
            -out /etc/nginx/certs/fullchain.pem \
            -days 365 \
            -subj "/CN=$$_CN" \
            -extensions SAN \
            -config /tmp/san.cnf
          echo "[danmu] Certificate generated (valid 365 days)."
        fi
        exec nginx -g "daemon off;"
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 128m
          cpus: "0.5"

  # ── Traefik + Let's Encrypt mode (--profile traefik) ─────────────────────
  traefik:
    profiles: [traefik]
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

  # ── Redis rate limiting add-on (--profile redis) ─────────────────────────
  redis:
    profiles: [redis]
    image: redis:7-alpine
    container_name: danmu-redis
    expose:
      - "6379"
    volumes:
      - redis-data:/data
    restart: unless-stopped
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD:-changeme}
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "${REDIS_PASSWORD:-changeme}", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3
      start_period: 5s

volumes:
  redis-data:
```

**Note on Traefik labels:** The server service still needs Traefik labels when using `--profile traefik`. Since profiles don't support conditional labels, add the Traefik labels to the `server` service unconditionally — they are ignored when Traefik is not running.

Add these labels to the `server` service definition:

```yaml
    labels:
      - traefik.enable=true
      - traefik.http.middlewares.danmu-https-redirect.redirectscheme.scheme=https
      - traefik.http.middlewares.danmu-https-redirect.redirectscheme.permanent=true
      - traefik.http.routers.danmu-http.rule=Host(`${DOMAIN:-localhost}`)
      - traefik.http.routers.danmu-http.entrypoints=web
      - traefik.http.routers.danmu-http.middlewares=danmu-https-redirect
      - traefik.http.routers.danmu.rule=Host(`${DOMAIN:-localhost}`) && !PathPrefix(`/ws`)
      - traefik.http.routers.danmu.entrypoints=websecure
      - traefik.http.routers.danmu.tls.certresolver=le
      - traefik.http.services.danmu.loadbalancer.server.port=4000
      - traefik.http.middlewares.danmu-ws-strip.stripprefix.prefixes=/ws
      - traefik.http.routers.danmu-ws.rule=Host(`${DOMAIN:-localhost}`) && PathPrefix(`/ws`)
      - traefik.http.routers.danmu-ws.entrypoints=websecure
      - traefik.http.routers.danmu-ws.tls.certresolver=le
      - traefik.http.routers.danmu-ws.middlewares=danmu-ws-strip
      - traefik.http.services.danmu-ws.loadbalancer.server.port=4001
```

**Also add to `server` service** when redis profile is active, the server needs `RATE_LIMIT_BACKEND=redis`. Since profiles don't support conditional env, the `.env` file handles this — `setup.sh` will set it when user selects redis. The redis service health check already ensures dependency ordering.

Add `depends_on` to server for redis (conditional via profiles):

```yaml
    depends_on:
      redis:
        condition: service_healthy
        required: false
```

- [ ] **Step 2: Verify the file is valid YAML**

```bash
docker compose config --quiet
```

Expected: no output (no errors)

- [ ] **Step 3: Commit**

```bash
git add docker-compose.yml
git commit -m "feat(deploy): rewrite docker-compose.yml with profiles"
```

---

### Task 2: Update docker-compose.dev.yml

**Files:**
- Modify: `docker-compose.dev.yml`

- [ ] **Step 1: Remove deprecated `version:` key and update**

```yaml
# docker-compose.dev.yml
# Development override — hot-reload source mount
# Usage: docker compose --profile http -f docker-compose.yml -f docker-compose.dev.yml up -d

services:
  server:
    volumes:
      - ./server:/app/server
      - /app/server/.venv
      - ./server/user_fonts:/app/server/user_fonts
      - ./server/static:/app/server/static
      - ./server/logs:/app/server/logs
    environment:
      - LOG_LEVEL=DEBUG
      - LOG_FORMAT=text
```

- [ ] **Step 2: Verify**

```bash
docker compose --profile http -f docker-compose.yml -f docker-compose.dev.yml config --quiet
```

Expected: no errors

- [ ] **Step 3: Delete old override files**

```bash
git rm docker-compose.https.yml docker-compose.traefik.yml docker-compose.redis.yml
```

- [ ] **Step 4: Commit**

```bash
git add docker-compose.dev.yml
git commit -m "chore(deploy): remove override files, keep dev overlay"
```

---

### Task 3: Update Makefile

**Files:**
- Modify: `Makefile`

- [ ] **Step 1: Replace docker-up-* targets**

Find the block from `docker-build:` to `docker-up-redis:` in `Makefile` and replace with:

```makefile
docker-build: ## 建置 Docker image（從 source）
	docker compose build

docker-up: ## 啟動容器（HTTP 模式，從 source build）
	docker compose --profile http up -d --build

docker-up-prebuilt: ## 啟動容器（HTTP 模式，使用預建 image）
	docker compose --profile http up -d --no-build

docker-up-dev: ## 啟動容器（開發模式，熱重載）
	docker compose --profile http -f docker-compose.yml -f docker-compose.dev.yml up -d

docker-up-https: ## 啟動容器（HTTPS 自簽憑證）
	docker compose --profile https up -d

docker-up-https-redis: ## 啟動容器（HTTPS + Redis rate limiter）
	docker compose --profile https --profile redis up -d

docker-up-traefik: ## 啟動容器（Traefik + Let's Encrypt，需設定 DOMAIN 和 ACME_EMAIL）
	@mkdir -p traefik
	@touch traefik/acme.json && chmod 600 traefik/acme.json
	docker compose --profile traefik up -d

docker-up-traefik-redis: ## 啟動容器（Traefik + Redis）
	@mkdir -p traefik
	@touch traefik/acme.json && chmod 600 traefik/acme.json
	docker compose --profile traefik --profile redis up -d
```

Also update `.PHONY` line at top to include new target names:

```makefile
.PHONY: help install test test-verbose coverage run \
        docker-build docker-up docker-up-prebuilt docker-up-dev \
        docker-up-https docker-up-https-redis \
        docker-up-traefik docker-up-traefik-redis \
        docker-down docker-logs docker-restart docker-clean docker-pull \
        gen-certs setup-env clean lint format copy-tokens
```

- [ ] **Step 2: Verify help output**

```bash
make help
```

Expected: shows all new `docker-up-*` targets with their descriptions

- [ ] **Step 3: Commit**

```bash
git add Makefile
git commit -m "chore(deploy): update Makefile for profiles-based compose"
```

---

### Task 4: Create setup.sh

**Files:**
- Create: `setup.sh`

- [ ] **Step 1: Write setup.sh**

```bash
#!/usr/bin/env bash
# setup.sh — Danmu Fire deployment wizard and .env validator
set -euo pipefail

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

_error()   { echo -e "${RED}[ERROR]${NC} $*" >&2; }
_warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
_info()    { echo -e "${CYAN}[INFO]${NC}  $*"; }
_ok()      { echo -e "${GREEN}[ OK ]${NC}  $*"; }

_WEAK_PASSWORDS="changeme password admin 123456"

_check_weak_password() {
  local val="$1"
  for weak in $_WEAK_PASSWORDS; do
    if [ "$val" = "$weak" ]; then return 0; fi
  done
  return 1
}

# ── Validation (used by both init and check) ─────────────────────────────────

_validate_env() {
  local env_file="${1:-.env}"
  local errors=0
  local warnings=0

  [ -f "$env_file" ] || { _error ".env file not found at $env_file"; exit 1; }

  # shellcheck disable=SC1090
  source "$env_file" 2>/dev/null || true

  # ADMIN_PASSWORD check
  if [ -z "${ADMIN_PASSWORD:-}" ] && [ -z "${ADMIN_PASSWORD_HASHED:-}" ]; then
    _error "ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED must be set"
    errors=$((errors+1))
  elif [ -n "${ADMIN_PASSWORD:-}" ] && _check_weak_password "${ADMIN_PASSWORD}"; then
    _error "ADMIN_PASSWORD is a weak default ('${ADMIN_PASSWORD}'). Set a strong password."
    errors=$((errors+1))
  fi

  # SECRET_KEY in production
  local env_val="${ENV:-production}"
  if [ "$env_val" = "production" ] && [ -z "${SECRET_KEY:-}" ]; then
    _error "SECRET_KEY must be set when ENV=production"
    errors=$((errors+1))
  fi

  # SESSION_COOKIE_SECURE in production
  if [ "$env_val" = "production" ] && [ "${SESSION_COOKIE_SECURE:-true}" = "false" ]; then
    _error "SESSION_COOKIE_SECURE must not be false in production"
    errors=$((errors+1))
  fi

  # CORS wildcard + credentials
  if [ "${CORS_SUPPORTS_CREDENTIALS:-false}" = "true" ] && [ "${CORS_ORIGINS:-*}" = "*" ]; then
    _error "Cannot combine CORS_SUPPORTS_CREDENTIALS=true with CORS_ORIGINS=*"
    errors=$((errors+1))
  fi

  # WS_REQUIRE_TOKEN disabled but token set (likely misconfiguration)
  if [ "${WS_REQUIRE_TOKEN:-false}" = "false" ] && [ -n "${WS_AUTH_TOKEN:-}" ]; then
    _warn "WS_AUTH_TOKEN is set but WS_REQUIRE_TOKEN=false — token will not be enforced"
    warnings=$((warnings+1))
  fi

  # Traefik profile: check DOMAIN
  if [ "${_PROFILE:-}" = "traefik" ] && [ -z "${DOMAIN:-}" ]; then
    _error "DOMAIN must be set when using the traefik profile"
    errors=$((errors+1))
  fi

  if [ $errors -gt 0 ]; then
    echo ""
    _error "$errors error(s) found. Fix them before starting."
    exit 1
  elif [ $warnings -gt 0 ]; then
    echo ""
    _warn "$warnings warning(s). Review before deploying to production."
  else
    _ok "Configuration looks good."
  fi
}

# ── Interactive init ──────────────────────────────────────────────────────────

_init() {
  echo ""
  echo -e "${CYAN}=== Danmu Fire Setup ===${NC}"
  echo ""

  # Mode selection
  echo "Select deployment mode:"
  echo "  1) Local HTTP (dev/testing, no HTTPS)"
  echo "  2) HTTPS with self-signed certificate (LAN / VPS, no domain required)"
  echo "  3) Traefik + Let's Encrypt (requires public domain)"
  echo ""
  read -rp "Mode [1/2/3]: " mode
  case "$mode" in
    1) _PROFILE="http" ;;
    2) _PROFILE="https" ;;
    3) _PROFILE="traefik" ;;
    *) _error "Invalid choice"; exit 1 ;;
  esac

  # Redis
  read -rp "Add Redis rate limiting? [y/N]: " use_redis
  local redis_profile=""
  if [ "${use_redis,,}" = "y" ]; then
    redis_profile=" --profile redis"
    _REDIS=true
  fi

  # Admin password
  echo ""
  while true; do
    read -rsp "Set ADMIN_PASSWORD: " admin_pass
    echo ""
    if [ -z "$admin_pass" ]; then
      _error "Password cannot be empty"; continue
    fi
    if _check_weak_password "$admin_pass"; then
      _error "Password is too weak. Choose something stronger."; continue
    fi
    break
  done

  # Traefik extras
  local domain="" acme_email=""
  if [ "$_PROFILE" = "traefik" ]; then
    read -rp "Domain (e.g. danmu.example.com): " domain
    [ -z "$domain" ] && { _error "Domain is required for traefik mode"; exit 1; }
    read -rp "ACME email (for Let's Encrypt): " acme_email
    [ -z "$acme_email" ] && { _error "ACME_EMAIL is required for traefik mode"; exit 1; }
  fi

  # HTTPS extras
  local server_ip="" server_domain=""
  if [ "$_PROFILE" = "https" ]; then
    read -rp "Public IP (optional, for SAN — leave blank for localhost only): " server_ip
    read -rp "Domain (optional, for SAN — leave blank for localhost only): " server_domain
  fi

  # Write .env
  local env_file=".env"
  if [ -f "$env_file" ]; then
    read -rp ".env already exists. Overwrite? [y/N]: " overwrite
    [ "${overwrite,,}" != "y" ] && { _info "Cancelled. Existing .env unchanged."; exit 0; }
  fi

  cat > "$env_file" <<EOF
# Generated by setup.sh — $(date)
ADMIN_PASSWORD=${admin_pass}
SECRET_KEY=$(python3 -c 'import secrets; print(secrets.token_hex(32))' 2>/dev/null || openssl rand -hex 32)
ENV=production
PORT=4000
WS_PORT=4001
SESSION_COOKIE_SECURE=true
SESSION_COOKIE_SAMESITE=Strict
TRUSTED_HOSTS=localhost,127.0.0.1${domain:+,$domain}
WS_REQUIRE_TOKEN=false
WS_AUTH_TOKEN=
RATE_LIMIT_BACKEND=${_REDIS:+redis}${_REDIS:-memory}
REDIS_PASSWORD=changeme
EOF

  [ -n "$domain" ]      && echo "DOMAIN=${domain}" >> "$env_file"
  [ -n "$acme_email" ]  && echo "ACME_EMAIL=${acme_email}" >> "$env_file"
  [ -n "$server_ip" ]   && echo "SERVER_IP=${server_ip}" >> "$env_file"
  [ -n "$server_domain" ] && echo "SERVER_DOMAIN=${server_domain}" >> "$env_file"
  [ "${_REDIS:-}" = "true" ] && echo "REDIS_URL=redis://:changeme@redis:6379/0" >> "$env_file"

  echo ""
  _ok ".env written."

  # Traefik acme.json
  if [ "$_PROFILE" = "traefik" ]; then
    mkdir -p traefik
    touch traefik/acme.json && chmod 600 traefik/acme.json
    _ok "traefik/acme.json created."
  fi

  echo ""
  _info "To start Danmu Fire, run:"
  echo ""
  echo "    docker compose --profile ${_PROFILE}${redis_profile} up -d"
  echo ""
  _warn "Change REDIS_PASSWORD in .env before production use."
}

# ── Entry point ───────────────────────────────────────────────────────────────

case "${1:-}" in
  init)  _init ;;
  check) _PROFILE="${2:-}" _validate_env "${3:-.env}" ;;
  *)
    echo "Usage:"
    echo "  ./setup.sh init              Interactive wizard → writes .env"
    echo "  ./setup.sh check [profile]   Validate existing .env"
    exit 1
    ;;
esac
```

- [ ] **Step 2: Make executable**

```bash
chmod +x setup.sh
```

- [ ] **Step 3: Smoke test init (dry run)**

```bash
echo "1
n
strongpassword123
" | bash setup.sh init
```

Expected: `.env` file written, no errors, prints `docker compose --profile http up -d`

- [ ] **Step 4: Smoke test check**

```bash
bash setup.sh check
```

Expected: `[OK] Configuration looks good.` (or errors if .env has weak password)

- [ ] **Step 5: Commit**

```bash
git add setup.sh
git commit -m "feat(deploy): add setup.sh wizard and .env validator"
```

---

### Task 5: Write DEPLOYMENT.md

**Files:**
- Create: `DEPLOYMENT.md`

- [ ] **Step 1: Write DEPLOYMENT.md**

```markdown
# Deployment Guide

## Quick Start (Local HTTP)

```bash
cp .env.example .env          # create config
# Edit .env: set ADMIN_PASSWORD (required)
docker compose --profile http up -d
```

Open http://localhost:4000

Or use the setup wizard for a guided setup:

```bash
./setup.sh init
```

---

## Decision Tree

```
Need a real TLS certificate with a public domain?
  ├─ Yes → Traefik mode
  └─ No → Have a fixed IP or LAN hostname?
              ├─ Yes → HTTPS self-signed mode
              └─ No → Local HTTP mode (dev/testing)

High traffic or multi-instance deployment?
  └─ Yes → Add --profile redis
```

---

## Modes

### Local HTTP (default)

Exposes ports 4000 (HTTP) and 4001 (WebSocket) via nginx.

```bash
docker compose --profile http up -d
```

Or with make:

```bash
make docker-up
```

### HTTPS with Self-Signed Certificate

Suitable for LAN access or a VPS without a domain. A self-signed certificate is
auto-generated on first start (valid 365 days).

Set in `.env`:

```
SERVER_IP=1.2.3.4        # Optional: your public IP (included in cert SAN)
SERVER_DOMAIN=my.lan     # Optional: hostname (included in cert SAN)
```

```bash
docker compose --profile https up -d
```

Or: `make docker-up-https`

Clients will see a browser warning about the self-signed cert. Add the cert to your
browser's trust store to suppress it. The cert is at `nginx/certs/fullchain.pem`.

### HTTPS with Let's Encrypt (Traefik)

Requires a public domain with port 80 accessible from the internet.

Set in `.env`:

```
DOMAIN=danmu.example.com
ACME_EMAIL=admin@example.com
```

```bash
mkdir -p traefik && touch traefik/acme.json && chmod 600 traefik/acme.json
docker compose --profile traefik up -d
```

Or: `make docker-up-traefik`

Traefik handles HTTP→HTTPS redirect automatically. WebSocket is available at
`wss://danmu.example.com/ws`.

---

## Add-ons

### Redis Rate Limiting

Enables distributed rate limiting across multiple server instances. Add
`--profile redis` to any mode:

```bash
docker compose --profile https --profile redis up -d
docker compose --profile traefik --profile redis up -d
```

Set in `.env`:

```
REDIS_PASSWORD=your-redis-password    # change from default!
```

Redis data is persisted in a Docker volume (`redis-data`).

### Development Mode

Mounts source code for hot-reload. Requires the `http` profile:

```bash
docker compose --profile http -f docker-compose.yml -f docker-compose.dev.yml up -d
```

Or: `make docker-up-dev`

---

## Security Checklist

Before exposing to the internet:

- [ ] `ADMIN_PASSWORD` — set a strong unique password (not `changeme`)
- [ ] `SECRET_KEY` — set a random 32+ char secret (never leave blank in production)
- [ ] `ENV=production` — enables stricter session/HSTS defaults
- [ ] `SESSION_COOKIE_SECURE=true` — required when serving over HTTPS
- [ ] `TRUSTED_HOSTS` — set to your domain/IP, not just `localhost`
- [ ] `REDIS_PASSWORD` — change from default if using Redis
- [ ] `WS_REQUIRE_TOKEN=true` + `WS_AUTH_TOKEN=...` — if WS port is publicly exposed

Run `./setup.sh check` to validate your `.env` against these rules.

---

## Environment Variable Reference

See `.env.example` for the full annotated list of available variables.

Key variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `ADMIN_PASSWORD` | — | Required. Plain-text admin password |
| `ADMIN_PASSWORD_HASHED` | — | Bcrypt hash (preferred for production) |
| `SECRET_KEY` | auto | Flask secret key. Must be set explicitly in production |
| `ENV` | `production` | `production` enables stricter security checks |
| `PORT` | `4000` | HTTP server port |
| `WS_PORT` | `4001` | WebSocket server port |
| `DOMAIN` | — | Required for Traefik mode |
| `ACME_EMAIL` | — | Required for Traefik mode |
| `SERVER_IP` | — | VPS public IP for self-signed cert SAN |
| `SERVER_DOMAIN` | — | Hostname for self-signed cert SAN |
| `REDIS_PASSWORD` | `changeme` | Redis auth password |
| `WS_REQUIRE_TOKEN` | `false` | Require token for WS connections |
| `WS_AUTH_TOKEN` | — | Token value when `WS_REQUIRE_TOKEN=true` |

---

## Troubleshooting

**Port already in use**
```bash
docker compose down
```

**Certificate not trusted**
Add `nginx/certs/fullchain.pem` to your browser or OS trust store.

**Traefik not issuing certificate**
- Ensure port 80 is publicly accessible
- Check `DOMAIN` and `ACME_EMAIL` are set correctly
- Check `traefik/acme.json` has permissions `600`
- Check Traefik logs: `docker logs danmu-traefik`

**Redis connection refused**
- Ensure `--profile redis` is included in your compose command
- Check `REDIS_URL` matches `REDIS_PASSWORD` in `.env`

**Server not starting**
```bash
docker compose logs server
```
```

- [ ] **Step 2: Commit**

```bash
git add DEPLOYMENT.md
git commit -m "docs: add DEPLOYMENT.md with decision tree and mode reference"
```

---

### Task 6: Update README.md deployment section

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Find the deployment section in README.md**

```bash
grep -n "## Quick Start\|## Deployment\|docker-compose\|docker compose" README.md | head -20
```

- [ ] **Step 2: Replace the detailed deployment section with a short summary**

Find the section in `README.md` that contains the multi-mode deployment instructions (lines with `docker-compose.https.yml`, `docker-compose.traefik.yml`, `docker-compose.redis.yml`). Replace that entire block with:

```markdown
## Quick Start

```bash
cp .env.example .env     # set ADMIN_PASSWORD
docker compose --profile http up -d
```

Open http://localhost:4000

For HTTPS, Traefik, Redis, and production hardening, see **[DEPLOYMENT.md](DEPLOYMENT.md)**.
```

- [ ] **Step 3: Verify README still renders correctly**

```bash
grep -c "docker-compose.https.yml\|docker-compose.traefik.yml\|docker-compose.redis.yml" README.md
```

Expected: `0` (old override file references removed)

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: simplify README deployment section, link to DEPLOYMENT.md"
```

---

### Task 7: Final smoke test

**Files:** None (verification only)

- [ ] **Step 1: Verify all profiles parse correctly**

```bash
docker compose --profile http config --quiet && echo "http: OK"
docker compose --profile https config --quiet && echo "https: OK"
docker compose --profile traefik config --quiet && echo "traefik: OK"
docker compose --profile redis config --quiet && echo "redis: OK"
docker compose --profile https --profile redis config --quiet && echo "https+redis: OK"
docker compose --profile traefik --profile redis config --quiet && echo "traefik+redis: OK"
```

Expected: all print `OK`

- [ ] **Step 2: Verify old files are gone**

```bash
ls docker-compose.*.yml
```

Expected: only `docker-compose.dev.yml` listed

- [ ] **Step 3: Verify make help**

```bash
make help | grep docker
```

Expected: lists `docker-up`, `docker-up-dev`, `docker-up-https`, `docker-up-https-redis`, `docker-up-traefik`, `docker-up-traefik-redis`

- [ ] **Step 4: Final commit**

```bash
git push
```
