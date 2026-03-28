# Project Polish Design Spec

**Branch:** `enhance/project-polish`
**Scope:** High-priority improvements only (3 items). Medium/low-priority tracked as GitHub issues.
**PR strategy:** Single branch, one commit per item, one PR at the end.

---

## 1. Deployment Path Consolidation (Layered Compose)

### Problem

Five deployment paths exist via Docker Compose profiles (`http`, `https`, `traefik`, `redis`) plus local dev. Issues:

- Two `.env.example` files (`server/.env.example` with 3 vars vs root `env.example` with 86 lines) — users copy the wrong one.
- `WS_REQUIRE_TOKEN=true` + empty `WS_AUTH_TOKEN` silently rejects all WS connections.
- `SESSION_COOKIE_SECURE` auto-enables in production but this behavior is undocumented.
- Redis URL in `env.example` uses `localhost` but Docker requires `redis` service name.

### Design

**Split `docker-compose.yml` into layered override files:**

```
docker-compose.yml              # Minimal: server + nginx HTTP reverse proxy
docker-compose.https.yml        # Override: self-signed HTTPS
docker-compose.traefik.yml      # Override: Traefik + Let's Encrypt
docker-compose.redis.yml        # Override: Redis rate limiting
docker-compose.dev.yml          # Override: dev mode (existing, unchanged)
```

**Base `docker-compose.yml` changes:**
- Remove all `profiles` blocks — base file works with plain `docker compose up -d`
- Contains only `server` and `reverse-proxy` (nginx HTTP) services
- No `--profile` needed for default deployment

**Override file usage:**
```bash
# HTTPS:
docker compose -f docker-compose.yml -f docker-compose.https.yml up -d

# Traefik:
docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d

# Redis (combinable with any above):
docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d
```

**Config safety improvements:**
- Delete `server/.env.example` — single source: root `env.example`
- Restructure `env.example` into sections: `# === Required ===`, `# === Networking ===`, `# === Security ===`, `# === Optional ===`
- Each variable gets a one-line comment + explicit default
- `REDIS_URL` annotated: Docker uses `redis` service name, local uses `localhost`
- `SESSION_COOKIE_SECURE` annotated: auto-true when `ENV=production`
- `WS_REQUIRE_TOKEN` default changed to `false` (safe for dev; production users explicitly opt in)

**Documentation updates:**
- README Docker section: simplify to base command + override table
- `DEPLOYMENT.md`: update commands to match new file structure

### Files Changed

| Action | File |
|--------|------|
| Rewrite | `docker-compose.yml` (remove profiles, minimal config) |
| Create | `docker-compose.https.yml` (extracted from https profile) |
| Create | `docker-compose.traefik.yml` (extracted from traefik profile) |
| Create | `docker-compose.redis.yml` (extracted from redis profile) |
| Delete | `server/.env.example` |
| Rewrite | `env.example` (sectioned, annotated) |
| Update | `README.md`, `README-CH.md` (Docker section) |
| Update | `DEPLOYMENT.md` (commands) |
| Update | `server/config.py` (`WS_REQUIRE_TOKEN` default → `false`) |

---

## 2. Design Token Consolidation (Shared tokens.css)

### Problem

Desktop and server CSS have zero CSS custom properties. Colors are hardcoded 15+ times each across two files. Values are 85% identical but have subtle inconsistencies:

- Glass border opacity: `0.125` (desktop) vs `0.08` (server)
- Success color: `#10b981` (desktop, if used) vs `#22c55e` (server)

Changing the brand color requires editing two files in ~30 places.

### Design

**Create `shared/tokens.css` as single source of truth:**

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

**Import strategy:**

- Desktop `styles.css`: `@import "../shared/tokens.css";` (webpack resolves the path)
- Server: copy `shared/tokens.css` → `server/static/css/tokens.css` via Makefile target (server can't reference files outside its static dir)
- Server `style.css`: `@import url("tokens.css");`

**Replacement scope:**

- Replace all hardcoded hex/rgba values in `danmu-desktop/styles.css` and `server/static/css/style.css` with `var(--color-*)` references
- Unify glass border opacity to `var(--color-border)` (resolves 0.125 vs 0.08 inconsistency)
- Unify success color to `#22c55e`

**Out of scope:**

- Tailwind utility classes in HTML templates — not changed (e.g., `text-sky-400` stays)
- `child.css` and `overlay.css` — minimal files with almost no shared token usage
- No Tailwind config customization in this iteration

### Files Changed

| Action | File |
|--------|------|
| Create | `shared/tokens.css` |
| Update | `danmu-desktop/styles.css` (add import, replace hardcoded values) |
| Update | `server/static/css/style.css` (add import, replace hardcoded values) |
| Create | `server/static/css/tokens.css` (copy from shared) |
| Update | `Makefile` (add `copy-tokens` target) |

---

## 3. Product Naming Unification (Dual Brand)

### Problem

6+ product names scattered across the codebase: `Danmu Fire`, `Danmu Desktop`, `Danmu Overlay Control`, `Danmu Admin`, `danmu manager`, `com.example.app`. No consistent naming system.

### Design

**Brand system:**

| Brand | Role | Usage |
|-------|------|-------|
| **Danmu Fire** | Web service brand | Web UI title, heading, footer, admin description, Docker labels |
| **Danmu Desktop** | Desktop client brand | Window title, tray, productName, installer name |

**Sub-page naming:** `{Brand} {Page}` format:
- `Danmu Fire Admin` (admin panel)
- `Danmu Fire Overlay` (OBS overlay)
- `Danmu Desktop` (main window — no suffix needed)

### Specific Changes

| File | Field | Current | New |
|------|-------|---------|-----|
| `danmu-desktop/index.html` | `<title>` | `Danmu Overlay Control` | `Danmu Desktop` |
| `danmu-desktop/package.json` | `productName` | `danmu manager` | `Danmu Desktop` |
| `danmu-desktop/package.json` | `appId` | `com.example.app` | `com.danmufire.desktop` |
| `danmu-desktop/main.js` | tray menu label | `Open Danmu Manager` | `Open Danmu Desktop` |
| `server/templates/admin.html` | `<title>` | `Danmu Admin` | `Danmu Fire Admin` |
| `server/templates/overlay.html` | `<title>` | `Danmu Overlay` | `Danmu Fire Overlay` |
| `docker-compose.yml` | `container_name` | `danmu-server` | `danmu-fire` |
| `README.md` | quarantine command | `'danmu manager.app'` | `'Danmu Desktop.app'` |
| `README-CH.md` | quarantine command | `'danmu manager.app'` | `'Danmu Desktop.app'` |

### Not Changed

- `Danmu Fire` in web `index.html` title/heading/footer — already correct
- GitHub repo name `danmu-desktop` — too disruptive to rename
- Docker Hub image `albetyty/danmu-server` — already published
- npm package name `danmu-desktop` — internal only

### Files Changed

| Action | File |
|--------|------|
| Update | `danmu-desktop/index.html` (title) |
| Update | `danmu-desktop/package.json` (productName, appId) |
| Update | `danmu-desktop/main.js` (tray label) |
| Update | `server/templates/admin.html` (title) |
| Update | `server/templates/overlay.html` (title) |
| Update | `docker-compose.yml` (container_name) |
| Update | `README.md` (quarantine command) |
| Update | `README-CH.md` (quarantine command) |

---

## Out of Scope (Future Issues)

The following items are tracked separately, not in this PR:

| # | Item | Priority |
|---|------|----------|
| 4 | Deployment matrix & security config integration tests | Medium |
| 5 | Settings surface & documentation consistency audit | Medium |
| 6 | Visual asset pipeline (single source → all icon formats) | Low |
| 7 | Frontend state management modularization (admin.js, renderer) | Low |
