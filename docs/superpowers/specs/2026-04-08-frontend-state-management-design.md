# Frontend State Management Design

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modularize admin.js (95K monolith) into focused modules, introduce a shared event bus and state store for both the server admin dashboard and the Electron renderer.

**Architecture:** Two independent environments (server admin = plain script tags, Electron = webpack CommonJS). Each gets a lightweight event bus + store; server admin.js is split into 7 focused files. No frameworks — vanilla JS throughout.

**Tech Stack:** Vanilla JS (IIFE + window namespace for server admin, CommonJS modules for Electron)

---

## Environment A: Server Admin Dashboard

### New Infrastructure Files

**`server/static/js/admin-events.js`** — Event bus, loaded first

```js
window.DanmuEvents = (function () {
  const _listeners = {};
  return {
    on(event, fn) { (_listeners[event] ||= []).push(fn); },
    off(event, fn) { _listeners[event] = (_listeners[event] || []).filter(f => f !== fn); },
    emit(event, data) { (_listeners[event] || []).forEach(fn => fn(data)); },
  };
})();
```

**`server/static/js/admin-store.js`** — State store, loaded second

```js
window.DanmuStore = (function () {
  const _state = {
    csrfToken: null,
    settings: {},
    wsConnected: false,
    fontCache: [],
    autoRefreshTimer: null,
  };
  const _subscribers = [];
  return {
    get(key) { return _state[key]; },
    set(key, value) {
      _state[key] = value;
      _subscribers.forEach(fn => fn(key, value));
    },
    subscribe(fn) { _subscribers.push(fn); },
    getAll() { return { ..._state }; },
  };
})();
```

### admin.js Split (95K → 7 files)

| New File | Responsibility | Approx Size |
|----------|----------------|-------------|
| `admin-core.js` | App init, CSRF token, navigation, section switching, auto-refresh timer | ~15K |
| `admin-ws.js` | Admin WebSocket connection, reconnect logic, real-time event dispatch via DanmuEvents | ~10K |
| `admin-settings.js` | `currentSettings` state, save/load settings API calls, settings form binding | ~15K |
| `admin-danmu.js` | Danmu display controls (color pickers, size/opacity/speed sliders, preview) | ~20K |
| `admin-poll.js` | Poll create/end/reset UI, live vote display | ~10K |
| `admin-history.js` | Danmu history list, blacklist management | ~15K |
| `admin-layout.js` | Display area layout controls, multi-display settings | ~10K |

`admin.js` is deleted. `admin-utils.js` is unchanged.

### Script Load Order in admin.html

```html
<!-- Infrastructure (before all admin-* modules) -->
<script defer src=".../js/admin-events.js"></script>
<script defer src=".../js/admin-store.js"></script>
<!-- Core (depends on events + store) -->
<script defer src=".../js/admin-core.js"></script>
<!-- Feature modules (depend on core, events, store) -->
<script defer src=".../js/admin-ws.js"></script>
<script defer src=".../js/admin-settings.js"></script>
<script defer src=".../js/admin-danmu.js"></script>
<script defer src=".../js/admin-poll.js"></script>
<script defer src=".../js/admin-history.js"></script>
<script defer src=".../js/admin-layout.js"></script>
<!-- Existing section modules (unchanged) -->
<script defer src=".../js/admin-live-feed.js"></script>
... (existing admin-*.js files remain)
```

### Cross-Module Communication Pattern

Modules write state via `DanmuStore.set()` and communicate side-effects via `DanmuEvents.emit()`:

```js
// admin-ws.js: WebSocket connects
DanmuStore.set('wsConnected', true);
DanmuEvents.emit('ws:connected', { timestamp: Date.now() });

// admin-core.js: reacts to WS state
DanmuEvents.on('ws:connected', () => updateStatusBadge(true));
```

---

## Environment B: Electron Renderer

### New Modules

**`danmu-desktop/renderer-modules/store.js`**

```js
const _state = {
  tracks: [],
  trackSettings: { maxTracks: 5, collisionDetection: true },
  connectionStatus: 'idle',
  danmuSettings: {},
};
const _subscribers = [];

module.exports = {
  get(key) { return _state[key]; },
  set(key, value) {
    _state[key] = value;
    _subscribers.forEach(fn => fn(key, value));
  },
  subscribe(fn) { _subscribers.push(fn); },
};
```

**`danmu-desktop/renderer-modules/events.js`**

```js
const { EventEmitter } = require('events');
module.exports = new EventEmitter();
```

### Refactored Modules

**`track-manager.js`**: Replace `window.danmuTracks` and `window.danmuTrackSettings` globals with store reads/writes:
- `window.danmuTracks` → `store.get('tracks')`
- `window.danmuTrackSettings` → `store.get('trackSettings')`
- Expose `store` via `module.exports` addition for other modules that need track state

**`danmu-settings.js`**: Replace `window.danmuTrackSettings` reads with `store.get('trackSettings')`. On settings change, call `store.set('trackSettings', newValue)` instead of writing to window directly.

**`connection-status.js`**: Instead of directly calling into ws-manager on status change, emit via events bus:
```js
events.emit('connection:change', { status, shouldShow });
```
`ws-manager.js` subscribes to `connection:change` for tray updates and UI state.

### webpack entry (renderer.js)

Add `require('./renderer-modules/store')` and `require('./renderer-modules/events')` at the top so they initialize before other modules.

---

## Files Changed / Created

### Server Admin
| Action | Path |
|--------|------|
| Create | `server/static/js/admin-events.js` |
| Create | `server/static/js/admin-store.js` |
| Create | `server/static/js/admin-core.js` |
| Create | `server/static/js/admin-ws.js` |
| Create | `server/static/js/admin-settings.js` |
| Create | `server/static/js/admin-danmu.js` |
| Create | `server/static/js/admin-poll.js` |
| Create | `server/static/js/admin-history.js` |
| Create | `server/static/js/admin-layout.js` |
| Delete | `server/static/js/admin.js` |
| Modify | `server/templates/admin.html` (update script tags) |

### Electron Renderer
| Action | Path |
|--------|------|
| Create | `danmu-desktop/renderer-modules/store.js` |
| Create | `danmu-desktop/renderer-modules/events.js` |
| Modify | `danmu-desktop/renderer-modules/track-manager.js` |
| Modify | `danmu-desktop/renderer-modules/danmu-settings.js` |
| Modify | `danmu-desktop/renderer-modules/connection-status.js` |
| Modify | `danmu-desktop/renderer.js` |

---

## Testing

- Server admin: manual browser test — load `/admin`, verify all sections work (settings save, WebSocket updates, danmu send, poll create/end)
- Electron: run `npx webpack`, launch app, verify tracks render, settings persist, connection status updates tray
- No automated JS tests for frontend (existing pattern)
