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
  ├─ Yes → Traefik mode  (--profile traefik)
  └─ No → Fixed IP or LAN access?
              ├─ Yes → HTTPS self-signed  (--profile https)
              └─ No → Local HTTP (dev/testing only)

High traffic or multi-instance?
  └─ Yes → Add Redis  (--profile redis)
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
RATE_LIMIT_BACKEND=redis
REDIS_PASSWORD=your-redis-password    # change from default!
REDIS_URL=redis://:your-redis-password@redis:6379/0
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
