# Deployment Guide

## Quick Start

The fastest and safest path is the interactive wizard. It picks defaults
that match your environment, generates a SECRET_KEY, and writes `.env`:

```bash
git clone https://github.com/guan4tou2/danmu-desktop.git
cd danmu-desktop
./setup.sh init               # wizard: mode, password, ports, desktop client
./setup.sh init --advanced    # + rate limits, logging, resource caps

# Wizard prints the exact start command. Typically:
docker compose --profile https up -d        # HTTPS self-signed (LAN / VPS)
docker compose --profile http up -d         # local HTTP (dev only)
docker compose --profile traefik up -d      # HTTPS + Let's Encrypt
```

Additional wizard commands:

- `./setup.sh check` — validate an existing `.env` (flags missing
  `SECRET_KEY`, weak passwords, CORS + credentials conflicts, etc.)
- `./setup.sh gen-secret` — generate a SECRET_KEY and inject it into `.env`

### Skip the wizard (not recommended)

```bash
cp .env.example .env
./setup.sh gen-secret         # at minimum, generate SECRET_KEY
# Manually edit: ADMIN_PASSWORD, and any mode-specific vars below
docker compose --profile <http|https|traefik> up -d
```

The rest of this doc covers mode-specific details, data persistence,
backup/restore, and troubleshooting. For most deployments the wizard
output + `./setup.sh check` is enough.

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

### Desktop Client (ws + https dual transport)

The Danmu Fire (Electron) client connects with plain `ws://IP:PORT`. This
is a supported deployment mode: run the HTTPS admin panel on `HTTPS_PORT`
alongside a plain WebSocket endpoint on port `4001` for desktop overlays.
Access control on the WS port is provided by a shared token instead of TLS.

For the `https` and `traefik` profiles the dedicated WS server is
internal-only by default. To expose it, layer the `desktop` override file on
top of the main compose file:

1. Start with the override:

   ```bash
   docker compose -f docker-compose.yml -f docker-compose.desktop.yml \
     --profile https up -d
   ```

2. Open the firewall:

   ```bash
   sudo ufw allow 4001/tcp
   ```

3. Configure WS token auth (v4.8.0+):

   - **Preferred: Admin UI.** Log in at `https://<host>:<HTTPS_PORT>/admin`
     → **WebSocket token auth** section → flip the toggle on, click
     **Regenerate**, click **Copy**. State persists to
     `server/runtime/ws_auth.json` (bind-mounted, survives image upgrade).
     Changes apply to the next WS connection — no container restart, and
     existing overlay connections stay up.
   - **Fresh installs** boot with `require_token=true` + a random token
     already generated, so port 4001 is not publicly open-access by
     default. Go to the admin UI to copy it into the Electron client.
   - **Opting out** (token required only via env): set `WS_REQUIRE_TOKEN=false`
     in `.env` before first boot. Explicit env values are respected and
     never silently flipped on by the secure-by-default seeding.

4. In the Danmu Fire app, enter the server IP, port `4001`, and paste
   the admin-issued token into the **WS Token** field. The admin panel is
   reached separately at `https://<host>:<HTTPS_PORT>`.

---

## Data persistence

Runtime state files that MUST survive container recreate. All are bind-mounted
to the host by the default `docker-compose.yml`:

| Host path | In-container path | Content |
|---|---|---|
| `./server/runtime/filter_rules.json` | `/app/server/runtime/filter_rules.json` | Blacklist + filter rules |
| `./server/runtime/settings.json` | `/app/server/runtime/settings.json` | Admin UI setting state (color / speed / etc.) |
| `./server/runtime/webhooks.json` | `/app/server/runtime/webhooks.json` | Registered webhooks |
| `./server/runtime/plugins_state.json` | `/app/server/runtime/plugins_state.json` | Enabled/disabled plugins |
| `./server/runtime/ws_auth.json` | `/app/server/runtime/ws_auth.json` | WS token auth state (chmod 0o600, v4.8.0+) |
| `./server/user_plugins/` | `/app/server/user_plugins/` | Custom user plugins (drop `.py` files here) |
| `./server/user_fonts/` | `/app/server/user_fonts/` | Uploaded user fonts |
| `./server/static/` | `/app/server/static/` | Uploaded stickers / emojis (plus bundled assets) |
| `./server/logs/` | `/app/server/logs/` | Server logs (optional for backup) |

**Bundled example plugins** (`server/plugins/example_*.py`) are NOT mounted —
they live inside the image so upstream fixes arrive with each image upgrade.
Put custom plugins in `server/user_plugins/` instead.

**Legacy migration:** Upgrading from v4.6.2 or earlier? On first run, the plugin
manager detects `server/plugins/plugins_state.json` and copies it to the new
`server/runtime/plugins_state.json` automatically — no manual action needed.

The paths for filter / settings / webhooks are redirected into `./server/runtime/`
via `FILTER_RULES_FILE`, `SETTINGS_FILE`, `WEBHOOKS_PATH` env vars in compose.
This keeps all new state in one dir for easy backup.

## Backup & restore

The user-generated bind-mounted paths in the table above are the source of
truth. `server/logs/` is bind-mounted for operational access but can be
omitted from backups unless you need audit / debug history.

### Backup (scripts/backup.sh)

```bash
./scripts/backup.sh                        # writes danmu-backup-YYYY-MM-DD.tar.gz
./scripts/backup.sh /path/to/output.tgz    # custom filename
BACKUP_SKIP_STATIC=1 ./scripts/backup.sh   # skip bundled static assets
```

Snapshots: `server/runtime/`, `server/user_plugins/`, `server/user_fonts/`,
`server/static/`, and `.env`.


### Restore

Reuse the same `--profile` (and any `-f` override files) you used to start
this deployment, or the restore will bring up the wrong stack:

```bash
# Match the profile used at deploy time (http/https/traefik, optionally redis).
COMPOSE_ARGS="--profile https"

docker compose $COMPOSE_ARGS down
tar -xzf danmu-backup-2026-04-20.tar.gz
docker compose $COMPOSE_ARGS up -d
```

### Upgrade (pull new image, keep data)

```bash
COMPOSE_ARGS="--profile https"   # same as deploy time

docker compose $COMPOSE_ARGS pull             # fetch new image
docker compose $COMPOSE_ARGS down
docker compose $COMPOSE_ARGS up -d            # recreate, runtime data survives
```

Because runtime state is bind-mounted on the host, `docker compose up --force-recreate`
will NOT delete your filter rules / webhooks / settings.

### Moving between machines

Copy `.env` + the bind-mounted directories listed above to the new host,
then `docker compose $COMPOSE_ARGS up -d` with the same profile + override
files used by that deployment. No database migration needed.

---

## Security Checklist

Before exposing to the internet:

- [ ] `ADMIN_PASSWORD` — set a strong unique password (not `changeme`)
- [ ] `SECRET_KEY` — set a random 32+ char secret (never leave blank in production)
- [ ] `ENV=production` — enables stricter session/HSTS defaults
- [ ] `SESSION_COOKIE_SECURE=true` — required when serving over HTTPS
- [ ] `TRUSTED_HOSTS` — set to your domain/IP, not just `localhost`
- [ ] `REDIS_PASSWORD` — change from default if using Redis
- [ ] **WS token auth on port 4001** — admin UI → **WebSocket token auth**
  → toggle on + copy the generated token into the Electron client.
  Fresh installs are secure-by-default since v4.8.0; only worry about this
  if you're upgrading from ≤v4.7 with `WS_REQUIRE_TOKEN=false`.

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
| `WS_REQUIRE_TOKEN` | see note | **First-boot seed only since v4.8.0.** After first boot, authoritative state lives in `server/runtime/ws_auth.json` and is controlled from the admin UI. If this env var is unset on a fresh install, the server seeds secure-on with a generated token. Explicit `false` is respected and never flipped back on. |
| `WS_AUTH_TOKEN` | — | Same as above — first-boot seed only. The admin UI is authoritative after the runtime file exists. |

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

**`Permission denied` writing `runtime/ws_auth.json` (or other runtime files)**

The container runs as UID `1000` (`appuser`). If the host's `server/runtime/`
or `server/user_plugins/` is owned by a different UID, the bind-mounted dir
overrides the image ownership and the container can't write. Common on
Oracle Cloud images where the default human user is UID `1001`, not `1000`.

Symptom: log lines like
```text
ERROR | ... | Failed to write /app/server/runtime/ws_auth.json: [Errno 13] Permission denied
```
or (v4.8.2+)
```text
WARNING | ... | Cannot persist ... State will live in memory for this process only
```

Fix (run on host, from the repo root):
```bash
sudo chown -R 1000:1000 server/runtime server/user_plugins
docker compose -f docker-compose.yml -f docker-compose.desktop.yml \
  --profile https up -d --force-recreate server
```

v4.8.2+ `setup.sh init` detects this at install time and prints the chown
command when `id -u` ≠ 1000.

**Cloud firewall blocking 4000 / 4001 (Oracle Cloud / AWS / GCP)**

Host-level `iptables` usually allows only 22/80/443 by default on cloud
images; docker publishing a port opens the host socket but NOT the cloud
ingress. Both must allow inbound.

- **Host iptables** (Ubuntu/Oracle images):
  ```bash
  sudo iptables -I INPUT 10 -p tcp --dport 4000 -j ACCEPT
  sudo iptables -I INPUT 10 -p tcp --dport 4001 -j ACCEPT
  sudo netfilter-persistent save
  ```
- **Cloud security list / NSG**: add TCP ingress 4000 + 4001 from `0.0.0.0/0`
  via your cloud provider's console, CLI, or terraform.
  - OCI example (one-shot, run in Cloud Shell):
    see wiki → Installation → "Oracle Cloud: open ports via CLI"

Symptom: external `curl https://YOUR_IP:4000/health` times out (not refused).
If iptables is the cause, `curl` from the same host via `127.0.0.1:4000`
works. If cloud ingress is the cause, even a `dev laptop → VPS` test fails.
