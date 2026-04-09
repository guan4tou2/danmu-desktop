# Brand Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unify naming, create Danmu Fire visual assets, and improve the Electron app shell with an About window and upgraded tray menu.

**Architecture:** Three independent phases executed in order: (1) naming fix in package.json, (2) icon-fire.svg + build script, (3) About window + tray upgrade + fade-in. All changes are in the Electron client (`danmu-desktop/`) except the server favicon. No new npm dependencies.

**Tech Stack:** Electron 41, CSS custom properties, SVG, shell script (rsvg-convert + iconutil for icon generation)

---

## File Map

| File | Action |
|---|---|
| `danmu-desktop/package.json` | Modify — update description |
| `danmu-desktop/assets/icon-fire.svg` | **Create** — Danmu Fire source SVG |
| `server/static/icon-fire.svg` | **Create** — copy of icon-fire.svg |
| `scripts/build-icons.sh` | **Create** — utility to regenerate icons from source SVGs |
| `danmu-desktop/about.html` | **Create** — About window HTML |
| `danmu-desktop/about.css` | **Create** — About window styles |
| `danmu-desktop/about-renderer.js` | **Create** — About window renderer logic |
| `danmu-desktop/main-modules/window-manager.js` | Modify — add `createAboutWindow` |
| `danmu-desktop/main-modules/ipc-handlers.js` | Modify — add `get-app-version` handle |
| `danmu-desktop/preload.js` | Modify — expose `getAppVersion` + `updateTrayStatus` |
| `danmu-desktop/main.js` | Modify — upgrade tray menu, add status IPC, import `createAboutWindow` |
| `danmu-desktop/renderer-modules/connection-status.js` | Modify — call `window.API.updateTrayStatus` on status change |
| `danmu-desktop/styles.css` | Modify — add `.main-content` fade-in |
| `danmu-desktop/index.html` | Modify — add `main-content` class to wrapper |
| `danmu-desktop/renderer.js` | Modify — add `.loaded` class after i18n init |

---

### Task 1: Fix package.json description

**Files:**
- Modify: `danmu-desktop/package.json`

- [ ] **Step 1: Update the description field**

Open `danmu-desktop/package.json`. Find line:
```json
"description": "A danmu desktop",
```
Replace with:
```json
"description": "Danmu overlay controller for live streaming",
```

- [ ] **Step 2: Verify JSON is valid**

```bash
node -e "JSON.parse(require('fs').readFileSync('danmu-desktop/package.json','utf8')); console.log('OK')"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add danmu-desktop/package.json
git commit -m "chore: update Danmu Desktop description in package.json"
```

---

### Task 2: Create icon-fire.svg (Danmu Fire brand asset)

**Files:**
- Create: `danmu-desktop/assets/icon-fire.svg`
- Create: `server/static/icon-fire.svg`

**Design:** Same structure as `icon.svg` (monitor + danmu streams + SAO accent lines) but with warm fire palette — orange/red screen gradient, fire-tone danmu colours, orange accent lines.

- [ ] **Step 1: Create `danmu-desktop/assets/icon-fire.svg`**

```svg
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c2d12;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="danmuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:0.9" />
      <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0.9" />
    </linearGradient>

    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" stroke="#475569" stroke-width="4"/>

  <!-- Desktop/Monitor -->
  <g transform="translate(256, 200)">
    <rect x="-90" y="-60" width="180" height="110" rx="8" fill="url(#screenGradient)" stroke="#64748b" stroke-width="3"/>
    <rect x="-85" y="-55" width="170" height="100" rx="4" fill="#0f172a" stroke="#374151" stroke-width="1"/>
    <rect x="-15" y="50" width="30" height="25" rx="3" fill="#64748b"/>
    <rect x="-35" y="70" width="70" height="8" rx="4" fill="#64748b"/>
  </g>

  <!-- Danmu streams -->
  <g filter="url(#glow)">
    <g transform="translate(200, 150)">
      <rect x="0" y="0" width="120" height="20" rx="10" fill="url(#danmuGradient)" opacity="0.8"/>
      <rect x="10" y="6" width="8" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="25" y="6" width="12" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="45" y="6" width="10" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="62" y="6" width="15" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="85" y="6" width="8" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
    </g>

    <g transform="translate(150, 190)">
      <rect x="0" y="0" width="100" height="18" rx="9" fill="#ef4444" opacity="0.7"/>
      <rect x="10" y="5" width="6" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="22" y="5" width="10" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="38" y="5" width="8" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="52" y="5" width="12" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
    </g>

    <g transform="translate(120, 230)">
      <rect x="0" y="0" width="140" height="22" rx="11" fill="#f97316" opacity="0.6"/>
      <rect x="10" y="7" width="12" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="28" y="7" width="8" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="42" y="7" width="15" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="63" y="7" width="10" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
      <rect x="80" y="7" width="6" height="8" rx="1" fill="#ffffff" opacity="0.9"/>
    </g>

    <g transform="translate(180, 320)">
      <rect x="0" y="0" width="90" height="16" rx="8" fill="#fbbf24" opacity="0.5"/>
      <rect x="10" y="4" width="10" height="8" rx="1" fill="#ffffff" opacity="0.8"/>
      <rect x="25" y="4" width="8" height="8" rx="1" fill="#ffffff" opacity="0.8"/>
      <rect x="38" y="4" width="12" height="8" rx="1" fill="#ffffff" opacity="0.8"/>
    </g>
  </g>

  <!-- Tech accent lines (orange) -->
  <g stroke="#fb923c" stroke-width="2" fill="none" opacity="0.8">
    <line x1="100" y1="380" x2="180" y2="380"/>
    <line x1="330" y1="380" x2="410" y2="380"/>
    <circle cx="200" cy="380" r="3" fill="#fb923c"/>
    <circle cx="310" cy="380" r="3" fill="#fb923c"/>
  </g>
</svg>
```

- [ ] **Step 2: Copy to server static**

```bash
cp danmu-desktop/assets/icon-fire.svg server/static/icon-fire.svg
```

- [ ] **Step 3: Commit**

```bash
git add danmu-desktop/assets/icon-fire.svg server/static/icon-fire.svg
git commit -m "feat(brand): add Danmu Fire icon SVG with warm palette"
```

---

### Task 3: Create icon build script

**Files:**
- Create: `scripts/build-icons.sh`

This script is a utility for developers — outputs are committed, so it is NOT run in CI.

**Prerequisites (install once):**
```bash
brew install librsvg imagemagick
```

- [ ] **Step 1: Create `scripts/build-icons.sh`**

```bash
#!/usr/bin/env bash
# Build icon assets from source SVGs.
# Prerequisites: brew install librsvg imagemagick
# Usage: bash scripts/build-icons.sh

set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Danmu Desktop icons (from danmu-desktop/assets/icon.svg)"
for size in 16 32 64 128 256 512 1024; do
  rsvg-convert -w $size -h $size danmu-desktop/assets/icon.svg \
    -o danmu-desktop/assets/icon-${size}.png
  echo "  icon-${size}.png"
done
cp danmu-desktop/assets/icon-1024.png danmu-desktop/assets/icon.png

echo "==> macOS .icns (Danmu Desktop)"
ICONSET=danmu-desktop/assets/icon.iconset
mkdir -p "$ICONSET"
for s in 16 32 128 256 512; do
  rsvg-convert -w $s -h $s danmu-desktop/assets/icon.svg -o "$ICONSET/icon_${s}x${s}.png"
  rsvg-convert -w $((s*2)) -h $((s*2)) danmu-desktop/assets/icon.svg -o "$ICONSET/icon_${s}x${s}@2x.png"
done
iconutil -c icns "$ICONSET" -o danmu-desktop/assets/icon.icns
echo "  icon.icns"

echo "==> Danmu Fire icons (from danmu-desktop/assets/icon-fire.svg)"
for size in 256 512; do
  rsvg-convert -w $size -h $size danmu-desktop/assets/icon-fire.svg \
    -o server/static/icon-fire-${size}.png
  echo "  icon-fire-${size}.png"
done
cp server/static/icon-fire-256.png server/static/icon.png

echo "==> server/static/favicon.ico (from icon-fire.svg)"
rsvg-convert -w 32 -h 32 danmu-desktop/assets/icon-fire.svg -o /tmp/favicon-32.png
rsvg-convert -w 16 -h 16 danmu-desktop/assets/icon-fire.svg -o /tmp/favicon-16.png
convert /tmp/favicon-32.png /tmp/favicon-16.png server/static/favicon.ico
echo "  favicon.ico"

echo "Done."
```

- [ ] **Step 2: Make executable and commit**

```bash
chmod +x scripts/build-icons.sh
git add scripts/build-icons.sh
git commit -m "feat(brand): add build-icons.sh to regenerate icons from source SVGs"
```

- [ ] **Step 3: Run script if rsvg-convert is available (optional)**

```bash
which rsvg-convert && bash scripts/build-icons.sh || echo "rsvg-convert not found — skip icon regeneration, SVG source is committed"
```

If successful, commit the generated files:
```bash
git add danmu-desktop/assets/ server/static/icon.png server/static/favicon.ico
git diff --staged --stat
git commit -m "feat(brand): regenerate icons from Danmu Fire + Danmu Desktop source SVGs"
```

If `rsvg-convert` is not available, skip this step — the SVG source is committed and the existing PNG/ICO files remain in place.

---

### Task 4: About window

**Files:**
- Create: `danmu-desktop/about.html`
- Create: `danmu-desktop/about.css`
- Create: `danmu-desktop/about-renderer.js`
- Modify: `danmu-desktop/main-modules/ipc-handlers.js` — add `get-app-version`
- Modify: `danmu-desktop/main-modules/window-manager.js` — add `createAboutWindow`
- Modify: `danmu-desktop/preload.js` — expose `getAppVersion`

- [ ] **Step 1: Create `danmu-desktop/about.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Danmu Desktop</title>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self';"
    />
    <link rel="stylesheet" href="about.css" />
  </head>
  <body>
    <div class="about-container">
      <img src="assets/icon.png" width="80" height="80" alt="Danmu Desktop" class="app-icon" />
      <h1 class="app-name">Danmu Desktop</h1>
      <p class="app-version" id="app-version">Loading…</p>
      <p class="app-desc">Danmu overlay controller for live streaming</p>
      <p class="app-link">
        <a href="#" id="github-link">github.com/guan4tou2/danmu-desktop</a>
      </p>
      <button class="close-btn" id="close-btn">Close</button>
    </div>
    <script src="about-renderer.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create `danmu-desktop/about.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0f172a;
  color: #f1f5f9;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-app-region: drag;
}

.about-container {
  text-align: center;
  padding: 2rem;
  -webkit-app-region: no-drag;
}

.app-icon {
  border-radius: 20px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
}

.app-name {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #38bdf8, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
}

.app-version {
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 0.75rem;
}

.app-desc {
  font-size: 0.875rem;
  color: #cbd5e1;
  margin-bottom: 0.5rem;
}

.app-link a {
  font-size: 0.75rem;
  color: #38bdf8;
  text-decoration: none;
}

.app-link a:hover {
  text-decoration: underline;
}

.close-btn {
  margin-top: 1.5rem;
  padding: 0.5rem 2rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: #f1f5f9;
  font-family: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(51, 65, 85, 0.9);
}
```

- [ ] **Step 3: Create `danmu-desktop/about-renderer.js`**

```js
// About window renderer — fetches app version via IPC and wires up buttons.
window.addEventListener("DOMContentLoaded", async () => {
  // Display version
  try {
    const version = await window.API.getAppVersion();
    document.getElementById("app-version").textContent = "Version " + version;
  } catch (_) {
    document.getElementById("app-version").textContent = "";
  }

  // Close button
  document.getElementById("close-btn").addEventListener("click", () => {
    window.close();
  });

  // GitHub link — open in system browser via IPC
  document.getElementById("github-link").addEventListener("click", (e) => {
    e.preventDefault();
    window.API.openExternal("https://github.com/guan4tou2/danmu-desktop");
  });
});
```

- [ ] **Step 4: Add `get-app-version` IPC handle to `ipc-handlers.js`**

In `danmu-desktop/main-modules/ipc-handlers.js`, inside `setupIpcHandlers`, add after the existing `ipcMain.handle("getSystemLocale", ...)`:

```js
  ipcMain.handle("get-app-version", () => app.getVersion());
```

Find the existing `getSystemLocale` handler to locate the right position:
```js
  ipcMain.handle("getSystemLocale", () => {
    return app.getLocale();
  });
  // ADD AFTER THIS LINE:
  ipcMain.handle("get-app-version", () => app.getVersion());
```

- [ ] **Step 5: Add `createAboutWindow` to `window-manager.js`**

At the end of `danmu-desktop/main-modules/window-manager.js`, before the `module.exports` line:

```js
/**
 * Creates the About window.
 * @param {BrowserWindow} mainWindow - The parent window (for modal behaviour)
 */
function createAboutWindow(mainWindow) {
  const aboutWindow = new BrowserWindow({
    width: 420,
    height: 320,
    resizable: false,
    autoHideMenuBar: true,
    title: "About Danmu Desktop",
    parent: mainWindow && !mainWindow.isDestroyed() ? mainWindow : null,
    modal: true,
    webPreferences: {
      preload: path.join(__dirname, "../dist/preload.bundle.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
  });
  aboutWindow.loadFile(path.join(__dirname, "../about.html"));
  return aboutWindow;
}
```

Update the existing `module.exports` line from:
```js
module.exports = { createWindow, setupChildWindow };
```
to:
```js
module.exports = { createWindow, setupChildWindow, createAboutWindow };
```

- [ ] **Step 6: Expose `getAppVersion` and `openExternal` in `preload.js`**

In `danmu-desktop/preload.js`, inside the `contextBridge.exposeInMainWorld("API", { ... })` block, add after `getSystemLocale`:

```js
    getAppVersion: () => ipcRenderer.invoke("get-app-version"),
    openExternal: (url) => ipcRenderer.invoke("open-external", url),
```

Also add the IPC handle for `open-external` in `ipc-handlers.js`:

```js
  const { shell } = require("electron");
  ipcMain.handle("open-external", (_, url) => {
    // Only allow https:// URLs to prevent protocol-handler abuse
    if (typeof url === "string" && url.startsWith("https://")) {
      shell.openExternal(url);
    }
  });
```

Add this after the `get-app-version` handle added in Step 4.

- [ ] **Step 7: Wire About into tray (done in Task 5 Step 2) — skip here, Task 5 handles the full tray rebuild**

- [ ] **Step 8: Verify about window loads**

```bash
cd danmu-desktop && npm run build:webpack 2>&1 | tail -5
```

Expected: webpack build completes without errors. (This bundles the updated preload.js)

- [ ] **Step 9: Commit**

```bash
git add \
  danmu-desktop/about.html \
  danmu-desktop/about.css \
  danmu-desktop/about-renderer.js \
  danmu-desktop/main-modules/ipc-handlers.js \
  danmu-desktop/main-modules/window-manager.js \
  danmu-desktop/preload.js \
  danmu-desktop/dist/preload.bundle.js
git commit -m "feat(shell): add About window with version, description, and GitHub link"
```

---

### Task 5: Upgrade tray menu + status IPC

**Files:**
- Modify: `danmu-desktop/main.js`
- Modify: `danmu-desktop/preload.js` — expose `updateTrayStatus`
- Modify: `danmu-desktop/renderer-modules/connection-status.js` — call tray update on status change

The tray is defined in `main.js`. To update it dynamically, we keep a `trayStatusText` variable and call `rebuildTrayMenu()` whenever it changes.

- [ ] **Step 1: Refactor tray menu in `main.js`**

In `danmu-desktop/main.js`, update the `require` at the top to import `ipcMain` and `createAboutWindow`:

```js
const { app, Tray, Menu, nativeImage, ipcMain } = require("electron");
const path = require("path");
const { sanitizeLog } = require("./shared/utils");
const { createWindow, createAboutWindow } = require("./main-modules/window-manager");
const { setupIpcHandlers } = require("./main-modules/ipc-handlers");
const { setupAutoUpdater } = require("./main-modules/auto-updater");
```

- [ ] **Step 2: Replace the tray setup block in `main.js`**

Find the current tray block (from `let trayIcon;` to `tray.on("double-click", showMainWindow);`) and replace it entirely with:

```js
  let trayStatusText = "⊘ Disconnected";

  function rebuildTrayMenu() {
    const menu = Menu.buildFromTemplate([
      { label: trayStatusText, enabled: false },
      { type: "separator" },
      { label: "Open Danmu Desktop", click: showMainWindow },
      { label: "About Danmu Desktop", click: () => createAboutWindow(mainWindow) },
      { type: "separator" },
      {
        label: "Quit",
        click: () => {
          [...childWindows].forEach((win) => {
            if (win && !win.isDestroyed()) win.destroy();
          });
          childWindows.length = 0;
          console.log("[Main] All child windows destroyed on tray quit.");
          app.quit();
        },
      },
    ]);
    tray.setContextMenu(menu);
  }

  let trayIcon;
  if (process.platform === "darwin") {
    const templatePath = path.join(__dirname, "../assets/tray-template.png");
    trayIcon = nativeImage.createFromPath(templatePath);
    trayIcon.setTemplateImage(true);
  } else {
    const iconPath = path.join(__dirname, "../assets/tray-icon.png");
    trayIcon = nativeImage.createFromPath(iconPath);
  }
  tray = new Tray(trayIcon);
  rebuildTrayMenu();
  tray.setToolTip("Danmu Desktop");

  // Update tray status label from renderer
  ipcMain.on("update-tray-status", (_, text) => {
    trayStatusText = String(text).slice(0, 50); // cap length for safety
    rebuildTrayMenu();
  });

  if (process.platform === "darwin") {
    tray.on("click", showMainWindow);
  } else {
    tray.on("double-click", showMainWindow);
  }
```

- [ ] **Step 3: Expose `updateTrayStatus` in `preload.js`**

In `danmu-desktop/preload.js`, inside `contextBridge.exposeInMainWorld("API", { ... })`, add:

```js
    updateTrayStatus: (text) => ipcRenderer.send("update-tray-status", text),
```

- [ ] **Step 4: Call `updateTrayStatus` from `connection-status.js`**

In `danmu-desktop/renderer-modules/connection-status.js`, inside the `statusUpdateTimeout = setTimeout(() => { ... })` callback, after `currentConnectionStatus = status;`, add:

```js
      // Update tray status label
      if (typeof window !== "undefined" && window.API && window.API.updateTrayStatus) {
        const trayLabels = {
          idle: "⊘ Disconnected",
          connecting: "◐ Connecting\u2026",
          connected: "● Connected",
          disconnected: "⊘ Disconnected",
          "connection-failed": "⊘ Connection Failed",
        };
        window.API.updateTrayStatus(
          shouldShow ? (trayLabels[status] || "⊘ Disconnected") : "⊘ Disconnected"
        );
      }
```

- [ ] **Step 5: Rebuild webpack and verify**

```bash
cd danmu-desktop && npm run build:webpack 2>&1 | tail -5
```

Expected: build succeeds.

- [ ] **Step 6: Run Jest tests**

```bash
cd danmu-desktop && npm test 2>&1 | tail -5
```

Expected: `300 passed` (or higher — connection-status tests should still pass since the new `window.API` call is guarded with `typeof window !== "undefined"`).

- [ ] **Step 7: Commit**

```bash
git add \
  danmu-desktop/main.js \
  danmu-desktop/preload.js \
  danmu-desktop/renderer-modules/connection-status.js \
  danmu-desktop/dist/preload.bundle.js \
  danmu-desktop/dist/renderer.bundle.js
git commit -m "feat(shell): upgrade tray menu with status indicator and About item"
```

---

### Task 6: Main window fade-in fix

**Files:**
- Modify: `danmu-desktop/styles.css` — add `.main-content` fade-in
- Modify: `danmu-desktop/index.html` — add `main-content` class to wrapper div
- Modify: `danmu-desktop/renderer.js` — add `.loaded` class after i18n init

- [ ] **Step 1: Add fade-in CSS to `danmu-desktop/styles.css`**

At the end of the file, add:

```css
/* Main content fade-in on load */
.main-content {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.main-content.loaded {
  opacity: 1;
}
```

- [ ] **Step 2: Add `main-content` class to wrapper in `danmu-desktop/index.html`**

Find line 41 (the main card wrapper):
```html
        class="glass-effect w-full max-w-6xl p-5 md:p-7 rounded-2xl shadow-2xl space-y-5 my-auto"
```

Replace with:
```html
        class="glass-effect w-full max-w-6xl p-5 md:p-7 rounded-2xl shadow-2xl space-y-5 my-auto main-content"
```

- [ ] **Step 3: Add `.loaded` class after i18n init in `danmu-desktop/renderer.js`**

Find the existing DOMContentLoaded block:
```js
document.addEventListener("DOMContentLoaded", async () => {
  if (typeof i18n !== "undefined") {
    await i18n.loadLanguage();
    i18n.updateUI();

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = i18n.currentLang;
      languageSelect.addEventListener("change", (e) => {
        i18n.setLanguage(e.target.value);
      });
    }
  }
```

Add the fade-in trigger after `i18n.updateUI()` (and also outside the `if` block as a fallback):

```js
document.addEventListener("DOMContentLoaded", async () => {
  if (typeof i18n !== "undefined") {
    await i18n.loadLanguage();
    i18n.updateUI();

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = i18n.currentLang;
      languageSelect.addEventListener("change", (e) => {
        i18n.setLanguage(e.target.value);
      });
    }
  }

  // Reveal main content after i18n is ready (prevents flash of un-translated text)
  const mainContent = document.querySelector(".main-content");
  if (mainContent) mainContent.classList.add("loaded");
```

- [ ] **Step 4: Run Jest tests**

```bash
cd danmu-desktop && npm test 2>&1 | tail -5
```

Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add \
  danmu-desktop/styles.css \
  danmu-desktop/index.html \
  danmu-desktop/renderer.js
git commit -m "feat(shell): add main-content fade-in to prevent i18n flash on load"
```

---

### Task 7: Final verification + push

- [ ] **Step 1: Run full test suite**

```bash
cd server && PYTHONPATH=.. uv run python -m pytest -q --ignore=tests/test_browser_admin.py --ignore=tests/test_browser_isolated.py 2>&1 | tail -3
```

Expected: all non-browser tests pass.

```bash
cd danmu-desktop && npm test 2>&1 | tail -3
```

Expected: all Jest tests pass.

- [ ] **Step 2: Push and wait for CI**

```bash
git push
sleep 15
gh run list --limit 3
```

Expected: Tests workflow starts.

- [ ] **Step 3: Confirm CI passes**

```bash
gh run watch $(gh run list --limit 1 --json databaseId -q '.[0].databaseId') 2>&1 | tail -5
```

Expected: all jobs `success`.

---

## Self-Review

### Spec coverage

| Requirement | Task |
|---|---|
| Fix package.json description | Task 1 |
| Create Danmu Fire SVG (warm palette) | Task 2 |
| Copy fire SVG to server/static | Task 2 Step 2 |
| Build script to regenerate icons | Task 3 |
| About window (version, desc, link) | Task 4 |
| `get-app-version` IPC handle | Task 4 Step 4 |
| `createAboutWindow` in window-manager | Task 4 Step 5 |
| Tray menu status label (dynamic) | Task 5 |
| Tray "About" menu item | Task 5 Step 2 |
| `updateTrayStatus` IPC + preload | Task 5 Steps 3–4 |
| Fade-in fix (i18n flash prevention) | Task 6 |

### No placeholders found.

### Type consistency
- `createAboutWindow(mainWindow)` — defined in Task 4 Step 5, called in Task 5 Step 2 ✅
- `window.API.getAppVersion()` — exposed in Task 4 Step 6, used in Task 4 Step 3 ✅
- `window.API.updateTrayStatus(text)` — exposed in Task 5 Step 3, called in Task 5 Step 4 ✅
- `window.API.openExternal(url)` — exposed in Task 4 Step 6, `open-external` handle added in same step ✅
- `rebuildTrayMenu()` — defined and used within `main.js` block in Task 5 Step 2 ✅
