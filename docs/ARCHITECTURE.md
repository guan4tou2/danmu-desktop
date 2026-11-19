# Architecture / 專案架構

> Status: 5.12.0 · last reviewed 2026-11-19.
> Scope: where things live and how a message travels. For the feature
> inventory see [FEATURES.md](FEATURES.md); for deployment see
> [../DEPLOYMENT.md](../DEPLOYMENT.md).

## The three parts

| Part | Directory | What it is |
|---|---|---|
| Server | [`server/`](../server/) | Flask app. Serves the viewer page, the admin panel, the `/overlay` browser source, the `POST /fire` API and the `/ws` WebSocket, all from one origin. |
| Desktop client | [`danmu-desktop/`](../danmu-desktop/) | Electron app. A control window plus a transparent, click-through overlay window that connects to `/ws` and draws danmu over whatever is on screen. |
| Slido bridge | [`slido-extension/`](../slido-extension/) | Chrome MV3 extension. Forwards new questions from a Slido event page the host has open to `POST /fire`. |

`shared/` holds what the server and the desktop client both load:
`tokens.css` (design tokens), `danmu-effects.js` (the renderer both
display surfaces use) and `particle-bg.js`.

## Repository layout

```
.
├── server/                  Flask backend + web front ends
│   ├── app.py               create_app(): config, security headers, blueprints, /ws
│   ├── config.py            every env var and its default; APP_VERSION
│   ├── routes/
│   │   ├── main.py          pages: viewer (/), /overlay, static helpers
│   │   ├── api.py           public API: /fire, /get_settings, polls, fonts
│   │   ├── health.py        health checks
│   │   └── admin/           admin API — a package, one module per domain
│   ├── services/            business logic, one module per concern (filtering,
│   │                        polls, history, bans, rate limits, backup, …)
│   ├── managers/            in-process singletons: viewer settings, WS connections
│   ├── ws/flask_ws.py       the /ws endpoint and its broadcast loop
│   ├── templates/           Jinja pages (viewer, admin, overlay)
│   ├── static/
│   │   ├── js/              viewer (main.js …) and admin (admin-*.js) scripts
│   │   ├── css/             style.css (admin), viewer-v2.css, tailwind.css
│   │   └── locales/         en / zh / ja / ko source strings
│   ├── effects/             built-in .dme effects (hot-reloaded)
│   ├── themes/              built-in danmu themes (YAML)
│   ├── plugins/             example server plugins
│   ├── user_plugins/        plugins uploaded from the admin panel
│   ├── user_fonts/          fonts uploaded from the admin panel
│   ├── runtime/             everything the admin panel saves (git-ignored)
│   ├── scripts/             front-end build scripts (i18n, admin bundle, viewer CSS)
│   ├── tests/               pytest
│   └── tests-js/            jest (admin and viewer scripts)
├── danmu-desktop/           Electron client
│   ├── main.js, main-modules/      main process
│   ├── renderer.js, renderer-modules/   control window
│   ├── child.html, overlay-entry.js     overlay window
│   ├── locales/             en / zh / ja / ko source strings
│   ├── tests/, e2e/         jest; Playwright (Electron)
│   └── webpack.config.js    builds dist/*.bundle.js
├── slido-extension/         Chrome extension (Slido → /fire)
├── shared/                  tokens.css, danmu-effects.js, particle-bg.js
├── scripts/                 repo tooling: CSS token lint, version bump, backup, deploy
├── nginx/, traefik/         reverse-proxy configs for the compose profiles
├── docs/                    this folder — see README.md for the index
├── img/                     README screenshots
├── docker-compose.yml       profiles: http, https, traefik, redis
├── setup.sh                 interactive setup: init, check, gen-secret
└── Makefile                 `make help` lists every target
```

## How a message travels

```
viewer page ──POST /fire──▶ server ──/ws──▶ desktop overlay / OBS browser source
Slido bridge ─POST /fire──▶   │
webhook ──────────────────▶   └──▶ admin live feed, history
```

`POST /fire` ([`server/routes/api.py`](../server/routes/api.py)) runs these
checks in order; the first one that fails ends the request:

1. No display connected → `503`. Nothing else runs.
2. IP deny list and request size limit.
3. Fire Token, if the request carries one. A wrong token is refused (`401`);
   a valid one marks the sender as an integration and skips steps 4 and 5's
   public limits in favour of a separate, higher ceiling.
4. Captcha, when configured.
5. Rate limits — per IP, per device fingerprint, and an optional global cap
   ([`services/security.py`](../server/services/security.py)).
6. Bans by fingerprint or IP ([`services/moderation_bans.py`](../server/services/moderation_bans.py)).
7. Block rules — keyword, regex (with a per-message time limit), frequency and
   device rules; a hit is rejected, rewritten, or held for review. While a poll
   is open, a message that is exactly an option key skips this step.
8. External image policy for messages that carry an image URL.
9. Plugins (`on_fire`) may change or drop the message.
10. Poll votes: that option-key message is counted as a vote.
11. The on-screen limiter decides send, queue or drop
    ([`services/onscreen_limiter.py`](../server/services/onscreen_limiter.py)).

An accepted message goes through
[`services/messaging.py`](../server/services/messaging.py) — which holds it in
the pending queue while the display is paused — into the WebSocket queue, and
[`ws/flask_ws.py`](../server/ws/flask_ws.py) broadcasts it to every connected
display. Displays report back when a message was actually drawn;
history shows queued, forwarded and rendered separately.

Both display surfaces — the Electron overlay window and `/overlay` in a
browser or OBS — render with `shared/danmu-effects.js`.

## Where state lives

- **Environment variables** ([`server/config.py`](../server/config.py),
  [`.env.example`](../.env.example)) set the defaults at startup.
- **`server/runtime/`** holds everything saved from the admin panel: viewer
  settings (`settings.json`), block rules, bans, display settings, on-screen
  limit, request rate limits, sessions, history, audit log, webhooks, API
  tokens, WS auth. New
  admin-editable JSON state goes through
  [`services/json_state.py`](../server/services/json_state.py).
- **In memory only**: scheduled jobs, rate-limit counters and the
  blocked-request history (counters move to Redis with
  `RATE_LIMIT_BACKEND=redis`).

Request rate limits follow one rule
([`services/rate_limits.py`](../server/services/rate_limits.py)): the value
saved in the admin panel (`runtime/rate_limits.json`) wins, then the
environment variable, then the built-in default. "Reset all" in the admin
panel deletes the saved values.

## Admin panel

One page ([`server/templates/admin.html`](../server/templates/admin.html))
with hash routes. The sidebar has ten rows in three groups; the source of
truth is `ADMIN_ROUTES` in [`admin.js`](../server/static/js/admin.js), the
tab definitions in [`admin-tabs.js`](../server/static/js/admin-tabs.js), and
the contract test
[`test_admin_sidebar_ia.py`](../server/tests/test_admin_sidebar_ia.py).

| Group | Rows |
|---|---|
| In session | Dashboard · Display · Polls · Moderation |
| Look & assets | Danmu style · Effects · Assets · Widgets |
| System | System · Records & export |

Each admin feature is one `admin-<name>.js` script (global IIFEs, no module
system). The page loads a single built file, `admin.bundle.js`; the list and
order of scripts is
[`admin-bundle.manifest.json`](../server/static/js/admin-bundle.manifest.json).

## Generated files (commit them with the source change)

| You edited | Run | Regenerates |
|---|---|---|
| `server/static/js/admin-*.js` | `cd server && npm run build:admin-js` | `server/static/js/admin.bundle.js` |
| `server/static/locales/*/translation.json` | `cd server && npm run build:i18n` | `server/static/js/i18n*.js` |
| `danmu-desktop/locales/*/translation.json` | `cd danmu-desktop && npm run build:i18n` | `danmu-desktop/i18n.js` |
| Tailwind classes in server templates/scripts | `cd server && npm run build:css` | `server/static/css/tailwind.css` |
| Electron sources | `cd danmu-desktop && npx webpack` | `danmu-desktop/dist/` (not committed) |

The two i18n generators are independent; CI checks both.

## Things that bite

- Version lives in two places and they must match:
  `danmu-desktop/package.json` and `APP_VERSION` in `server/config.py`.
- Inside webpack bundles `__dirname` is `dist/` at run time.
- `renderer.bundle.js` is loaded by both `index.html` (control window) and
  `child.html` (overlay); a renderer change affects both.
- `server/routes/admin/` is a package, not a single `admin.py`.
- The desktop client connects over `wss://` only; the `http` compose profile
  serves the web pages but not the desktop overlay.

## Tests

| What | Command |
|---|---|
| Server | `make test` (or `cd server && PYTHONPATH=.. uv run python -m pytest`) |
| Server, full suite | `cd server && PYTHONPATH=.. uv run python -m pytest tests/ --ignore=tests/test_browser_isolated.py -q` |
| Admin / viewer scripts | `cd server && npm run test:js -- --runInBand` |
| Desktop client | `cd danmu-desktop && npm test -- --runInBand` |
| CSS token lint | `make lint-css` |
