# Deployment Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate 5 Docker Compose override files into a single profiles-based `docker-compose.yml`, add a `setup.sh` validation/wizard script, and write a clear `DEPLOYMENT.md`.

**Architecture:** Docker Compose profiles replace the file-stacking pattern. A `setup.sh` script handles interactive init and pre-launch validation. `DEPLOYMENT.md` provides a decision tree and mode-by-mode reference.

**Tech Stack:** Docker Compose v2 (profiles), Bash (setup.sh), Markdown (docs)

---

## Section 1: Compose Profiles Architecture

Single `docker-compose.yml` with the following profiles:

| Profile | Purpose | What it adds |
|---------|---------|--------------|
| *(none)* | Local HTTP, fast start | server + nginx (HTTP only) |
| `dev` | Development, hot-reload | server volume-mounted source, LOG_LEVEL=DEBUG |
| `https` | Self-signed HTTPS (LAN/VPS) | nginx-https service, auto gen-certs |
| `traefik` | Let's Encrypt (requires domain) | traefik container, ACME |
| `redis` | Distributed rate limiting | redis:7-alpine, composable with any mode |

Profiles are composable: `--profile https --profile redis` is valid.

### Makefile targets

```makefile
up:                docker compose up -d
up-dev:            docker compose --profile dev up -d
up-https:          docker compose --profile https up -d
up-https-redis:    docker compose --profile https --profile redis up -d
up-traefik:        docker compose --profile traefik up -d
up-traefik-redis:  docker compose --profile traefik --profile redis up -d
```

Old targets (`docker-up-https`, `docker-up-traefik`, `docker-up-redis`) are removed.

### nginx configs

`nginx/nginx.conf` — HTTP reverse proxy (unchanged, used by base + dev)
`nginx/nginx-https.conf` — HTTPS wrapper (unchanged, used by https + traefik profiles)

---

## Section 2: setup.sh

Two subcommands:

```
./setup.sh init     # Interactive wizard → writes .env → prints launch command
./setup.sh check    # Validates existing .env against chosen profile
```

### `init` flow

Questions in order:
1. Deploy mode? `[1] Local HTTP  [2] HTTPS self-signed  [3] Traefik + Let's Encrypt`
2. Need Redis rate limiting? `[y/N]`
3. Set ADMIN_PASSWORD (enforced: non-empty, not a weak default)
4. If traefik: enter DOMAIN + ACME_EMAIL
5. If https: enter SERVER_IP or SERVER_DOMAIN (optional, blank = localhost)
6. Writes `.env`, prints the correct `docker compose --profile ... up -d` command

### Dangerous combination detection (runs in both `init` and `check`)

| Condition | Severity |
|-----------|----------|
| `ADMIN_PASSWORD` is `changeme`, `password`, `admin`, `123456` | error |
| `SECRET_KEY` empty + `ENV=production` | error |
| `WS_REQUIRE_TOKEN=false` + `WS_AUTH_TOKEN` non-empty | warning (token set but not enforced) |
| `CORS_SUPPORTS_CREDENTIALS=true` + `CORS_ORIGINS=*` | error |
| `SESSION_COOKIE_SECURE=false` + `ENV=production` | error |
| traefik profile selected + `DOMAIN` empty | error |
| https profile selected + neither `SERVER_IP` nor `SERVER_DOMAIN` set | info (localhost only) |

Exit code 1 on any error, 0 on warning-only or clean.

---

## Section 3: DEPLOYMENT.md

Location: `/DEPLOYMENT.md` (root of repo)

Structure:
```
# Deployment Guide
## Quick Start (Local HTTP)
## Decision Tree
## Modes
  ### Local HTTP (default)
  ### HTTPS with Self-Signed Certificate
  ### HTTPS with Let's Encrypt (Traefik)
## Add-ons
  ### Redis Rate Limiting
  ### Development Mode
## Security Checklist
## Environment Variable Reference
## Troubleshooting
```

Decision tree (text):
```
Need a real certificate with a public domain?
  ├─ Yes → Traefik mode  (--profile traefik)
  └─ No → Fixed IP or LAN access?
              ├─ Yes → HTTPS self-signed  (--profile https)
              └─ No → Local HTTP (dev/testing only)

High traffic or multi-instance?
  └─ Yes → Add Redis  (--profile redis)
```

`README.md` deployment section: one paragraph + link to `DEPLOYMENT.md`.

---

## Files Changed / Created

| Action | Path |
|--------|------|
| Rewrite | `docker-compose.yml` |
| Delete | `docker-compose.dev.yml` |
| Delete | `docker-compose.https.yml` |
| Delete | `docker-compose.traefik.yml` |
| Delete | `docker-compose.redis.yml` |
| Create | `setup.sh` |
| Create | `DEPLOYMENT.md` |
| Modify | `Makefile` (replace docker-up-* targets) |
| Modify | `README.md` (shorten deployment section, add link) |
