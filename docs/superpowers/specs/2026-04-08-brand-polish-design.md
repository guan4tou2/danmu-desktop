# Brand Polish Design Spec

**Date:** 2026-04-08
**Scope:** Naming unification, visual assets, Tray/App shell improvements

---

## Goal

Take the project from "works" to "polished product" by unifying the brand identity across server and client, generating all visual assets from a single source SVG, and improving the Electron app shell with an About window and better tray experience.

---

## Brand Identity

Two products, one shared visual language:

| Product | Name | Accent colour | Icon base |
|---|---|---|---|
| Flask web server | **Danmu Fire** | Orange/red (`#f97316 → #ef4444`) | Monitor + danmu streams (warm) |
| Electron client | **Danmu Desktop** | Sky/blue (`#38bdf8 → #3b82f6`) | Monitor + danmu streams (cool) ← existing |

Both use the same icon shape: a monitor with horizontal danmu text streams flying across it, SAO-style tech accent lines at the bottom.

---

## Phase 1: Naming Unification

### What changes

**Server — Flask web UI:**
- `server/templates/index.html`: `<title>` → "Danmu Fire"
- `server/templates/admin.html`: `<title>` → "Danmu Fire — Admin"
- `server/templates/overlay.html`: `<title>` → no visible user-facing name needed
- `server/static/locales/*/translation.json`: `"title"` key → each locale's translation of "Danmu Fire"
- `server/config.py`: add `APP_NAME = "Danmu Fire"` constant; inject into templates via existing `context_processor`
- After editing locales, regenerate `server/static/js/i18n.js` via `npm run build:i18n`

**Client — Electron:**
- `danmu-desktop/package.json`: `"description"` → `"Danmu overlay controller for live streaming"` (no code change needed)
- `danmu-desktop/index.html`: `<title>` already "Danmu Desktop" ✅
- `danmu-desktop/locales/*/translation.json`: `"title"` key already translates to locale-appropriate "Danmu" name ✅

### What does NOT change
- `package.json` `"name": "danmu-desktop"` — this is the npm/repo identifier, not a display name
- `"productName": "Danmu Desktop"` ✅ already correct
- `"appId": "com.danmufire.desktop"` ✅ already correct
- Any internal variable names, routes, or config keys

---

## Phase 2: Visual Assets

### Source SVGs

Two source SVGs, both in `danmu-desktop/assets/`:

| File | Product | Status |
|---|---|---|
| `assets/icon.svg` | Danmu Desktop | Exists ✅ — blue monitor, cool palette |
| `assets/icon-fire.svg` | Danmu Fire | **New** — same structure, warm palette |

`icon-fire.svg` changes from `icon.svg`:
- `screenGradient`: `#1e40af → #3b82f6` → `#9a3412 → #f97316` (dark orange → orange)
- `danmuGradient`: `#00d9ff / #ff6b6b / #4ecdc4` → `#ff6b35 / #ff4500 / #ffd700` (fire tones)
- Tech accent lines stroke: `#00d9ff` → `#fb923c`
- Background gradient: keep slate (`#0f172a → #334155`) — same for both

### Build script: `scripts/build-icons.sh`

Generates all raster outputs from source SVGs using `rsvg-convert` (librsvg, available via homebrew: `brew install librsvg`).

**Outputs from `icon.svg` (Danmu Desktop):**
```
danmu-desktop/assets/icon-1024.png
danmu-desktop/assets/icon-512.png
danmu-desktop/assets/icon-256.png
danmu-desktop/assets/icon-128.png
danmu-desktop/assets/icon-64.png
danmu-desktop/assets/icon-16.png
danmu-desktop/assets/icon.png          ← 1024px, used by electron-builder
danmu-desktop/assets/icon.iconset/     ← macOS .icns source (16/32/64/128/256/512 @1x + @2x)
danmu-desktop/assets/icon.icns         ← generated from iconset via iconutil
```

**Outputs from `icon-fire.svg` (Danmu Fire):**
```
server/static/icon-fire.svg            ← copy (used as SVG favicon fallback)
server/static/favicon.ico              ← 32px + 16px multi-size ICO via ImageMagick convert
server/static/icon-fire-256.png        ← for web app manifest / social preview
```

**Script location:** `scripts/build-icons.sh` (root of repo)

**Dependencies:** `rsvg-convert` (librsvg), `iconutil` (macOS built-in), `convert` (ImageMagick)

**Script is NOT run in CI** — outputs are committed assets. Run manually when source SVGs change.

### Tray icon (Danmu Desktop)

Current: `tray-template.png` / `tray-template@2x.png` — macOS template images (monochrome)
**No change needed.** Template images work correctly with macOS dark/light mode.

---

## Phase 3: Tray / App Shell

### 3a. About window

**New files:**
- `danmu-desktop/about.html` — About window HTML
- `danmu-desktop/about.css` — About window styles

**Window spec:**
- Size: 420 × 300 px, not resizable
- No menu bar (`autoHideMenuBar: true`)
- Modal: `modal: true` (blocks parent)
- Title: "About Danmu Desktop"
- Parent: main window

**Content:**
```
[icon 80×80]

Danmu Desktop
Version 4.5.0

Danmu overlay controller for live streaming

[GitHub button]    [Close button]
```

Version is injected via IPC: `ipcRenderer.invoke("get-app-version")` → returns `app.getVersion()` from main process.

**New IPC handler** in `main-modules/ipc-handlers.js`:
```js
ipcMain.handle("get-app-version", () => app.getVersion());
ipcMain.handle("open-about", () => { /* create about window */ });
```

**Preload** (`preload.js`): expose `getAppVersion` via `contextBridge`.

### 3b. Tray menu upgrade

Current tray menu (in `main-modules/window-manager.js`):
```
Open Danmu Desktop
─────────────────
Quit
```

New tray menu:
```
● Disconnected          ← status label (non-clickable, updated via IPC)
─────────────────────
Open Danmu Desktop
About Danmu Desktop
─────────────────────
Quit
```

**Status update mechanism:**
- Renderer sends `ipcRenderer.send("tray-status-update", statusText)` when connection status changes
- Main process listener updates the tray menu label item
- `statusText` values: `"● Disconnected"`, `"◐ Connecting…"`, `"● Connected to {host}:{port}"`

Status item uses `enabled: false` so it's non-clickable display only.

### 3c. Initial load experience

**Problem:** During first paint, `data-i18n` elements flash with static HTML text before `i18n.updateUI()` runs.

**Fix:** Add `opacity: 0` to the main content wrapper in HTML, then set `opacity: 1` via CSS after `DOMContentLoaded` fires and i18n is initialised.

```css
/* styles.css */
.main-content {
  opacity: 0;
  transition: opacity 0.2s ease;
}
.main-content.loaded {
  opacity: 1;
}
```

```js
// renderer.js — after i18n.updateUI()
document.querySelector(".main-content").classList.add("loaded");
```

The wrapper `<div class="glass-effect w-full max-w-6xl …">` in `index.html` gets `class="… main-content"`.

---

## File Map

| File | Action |
|---|---|
| `server/templates/index.html` | Modify — update `<title>` |
| `server/templates/admin.html` | Modify — update `<title>` |
| `server/config.py` | Modify — add `APP_NAME = "Danmu Fire"` |
| `server/static/locales/*/translation.json` | Modify — update `"title"` key |
| `server/static/js/i18n.js` | Regenerate via `npm run build:i18n` |
| `danmu-desktop/package.json` | Modify — update `"description"` |
| `danmu-desktop/assets/icon-fire.svg` | **Create** — Danmu Fire source SVG |
| `scripts/build-icons.sh` | **Create** — icon generation script |
| `server/static/favicon.ico` | Regenerate from `icon-fire.svg` |
| `server/static/icon-fire.svg` | **Create** — copy of source SVG |
| `danmu-desktop/about.html` | **Create** — About window |
| `danmu-desktop/about.css` | **Create** — About window styles |
| `danmu-desktop/main-modules/ipc-handlers.js` | Modify — add `get-app-version`, `open-about` |
| `danmu-desktop/main-modules/window-manager.js` | Modify — upgrade tray menu, add status label |
| `danmu-desktop/preload.js` | Modify — expose `getAppVersion` |
| `danmu-desktop/renderer.js` | Modify — send tray status updates, fade-in fix |
| `danmu-desktop/renderer-modules/connection-status.js` | Modify — call tray status IPC on status change |
| `danmu-desktop/styles.css` | Modify — add `.main-content` fade-in |
| `danmu-desktop/index.html` | Modify — add `main-content` class to wrapper |

---

## Out of Scope

- Changing the `danmu-desktop` repo/directory name
- Changing any API routes or WebSocket protocol
- Windows `.exe` icon (requires `.ico`, same pipeline but separate tooling)
- Social preview / OG image (deferred)
- Server web app manifest / PWA (deferred)

---

## Testing

- Python tests: run full suite after Phase 1 (`make test`) — no new tests needed for naming changes
- Jest tests: run after Phase 1 — no new tests needed
- Manual: launch Electron app, open tray → verify menu, click About → verify window shows correct version
- Manual: change connection state → verify tray status label updates
- CI: `pre-commit` will catch any missing trailing newlines in JSON locale files
