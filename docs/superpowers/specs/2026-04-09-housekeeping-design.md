# Housekeeping: Tokens Sync + Env Var Coverage Design

**Goal:** Eliminate the design tokens drift risk and document all configurable env vars in `.env.example`.

**Architecture:** Two independent micro-fixes. No new dependencies.

**Tech Stack:** Git symlink, Bash, Markdown

---

## Fix 1: Design Tokens — Single Source of Truth

### Problem

`shared/tokens.css` is the canonical source imported by the Electron desktop (`danmu-desktop/styles.css`). `server/static/css/tokens.css` is a separate duplicate imported by the server (`server/static/css/style.css`). They are currently identical, but there is no mechanism preventing them from drifting.

### Solution: Symlink

Delete `server/static/css/tokens.css` and replace it with a symlink:

```
server/static/css/tokens.css -> ../../shared/tokens.css
```

Git tracks symlinks natively. Flask's static file server follows symlinks. No build step required. One file to edit.

The existing CI `diff` check in `test.yml` continues to work unchanged — `diff` compares file contents and returns 0 when both paths resolve to the same content. The only change needed beyond the symlink itself is the Makefile `copy-tokens` target, which currently uses `cp` (would overwrite the symlink with a regular file); it must be updated to `ln -sf` so that running `make copy-tokens` recreates the symlink rather than destroying it.

### Files Changed

| Action | Path |
|--------|------|
| Delete + replace with symlink | `server/static/css/tokens.css` |
| Modify | `Makefile` — update `copy-tokens` target to use `ln -sf` |

### Verification

```bash
python3 -c "import os; print(os.path.realpath('server/static/css/tokens.css'))"
# Expected: .../shared/tokens.css
diff shared/tokens.css server/static/css/tokens.css  # must exit 0
```

Visually confirm admin page loads correctly after change.

---

## Fix 2: `.env.example` — Complete Env Var Documentation

### Problem

`.env.example` documents 21 of ~50 config keys. The missing ones are all legitimately configurable via env var but undocumented, making it hard for operators to know what's tunable.

### Solution

Add missing keys grouped by category with inline comments. `SESSION_COOKIE_HTTPONLY` is hardcoded to `True` in `config.py` (not an env var) — skip it.

### Keys to Add

**Security — HTTPS / HSTS (for production/HTTPS deployments):**
```
HSTS_ENABLED=false
HSTS_MAX_AGE=31536000
HSTS_INCLUDE_SUBDOMAINS=false
SESSION_COOKIE_SECURE=false
CORS_SUPPORTS_CREDENTIALS=false
```

**Rate limiting (per-endpoint overrides):**
```
ADMIN_RATE_LIMIT=60
ADMIN_RATE_WINDOW=60
LOGIN_RATE_LIMIT=5
LOGIN_RATE_WINDOW=300
API_RATE_LIMIT=30
API_RATE_WINDOW=60
```

**Redis (when RATE_LIMIT_BACKEND=redis):**
```
REDIS_URL=redis://localhost:6379/0
```

**History & webhooks:**
```
DANMU_HISTORY_MAX_RECORDS=10000
DANMU_HISTORY_CLEANUP_HOURS=24
WEBHOOK_TIMEOUT=10
```

### Files Changed

| Action | Path |
|--------|------|
| Modify | `.env.example` |

### Verification

All keys in `.env.example` map to a corresponding `os.getenv(...)` call in `server/config.py`. Visual scan confirms no key is defined in `config.py` without a matching entry in `.env.example` (except internal constants: `APP_NAME`, `APP_VERSION`, `SETTABLE_OPTION_KEYS`, `SECRET_KEY_FROM_ENV`).
