# Codebase Review & Test Coverage — Design Spec

**Date:** 2026-03-18
**Scope:** Full codebase review + test coverage for danmu-desktop (Python server + Electron app)

## Overview

Code review identified **6 Critical, 12 Medium, 5 Low** issues across the Python server and Electron frontend, plus **16 test coverage gaps**. This spec defines a three-layer fix-and-test strategy, with each layer fully tested before proceeding to the next.

---

## Layer 1: Critical Issues (6 fixes + tests)

### P1: Timing-Unsafe Plaintext Password Comparison

- **File:** `server/routes/main.py:50`, `:78`
- **Bug:** `password == admin_password` is vulnerable to timing side-channel attacks.
- **Fix:** Replace with `hmac.compare_digest(password, admin_password)` in both locations (login and `_verify_current_password`).
- **Test:** Assert the plaintext comparison path uses `hmac.compare_digest` (mock or inspect).

### P2: DanmuHistory Deadlock (Nested Non-Reentrant Lock)

- **File:** `server/services/history.py:54`
- **Bug:** `add()` holds `self._lock` (threading.Lock) then calls `_maybe_cleanup()`, which also acquires `self._lock`. `threading.Lock` is not reentrant → deadlock.
- **Fix:** Change `self._lock = threading.Lock()` to `self._lock = threading.RLock()`.
- **Test:** Call `add()` with conditions that trigger `_maybe_cleanup` (old timestamps + time threshold). Verify no deadlock and old records are pruned.

### P3: Effect YAML Name Mismatch Allows Cache Corruption

- **File:** `server/services/effects.py:274`
- **Bug:** `save_effect_content(name, content)` does not verify that the YAML `name` field inside `content` matches the `name` URL parameter. An admin can corrupt the `_path_to_name` cache.
- **Fix:** After parsing YAML, assert `str(data.get("name")) == name`. Return 400 error on mismatch.
- **Test:** POST content with mismatched name → expect 400; POST with matching name → expect success.

### E1: IPC Handler Duplication on macOS `activate`

- **File:** `danmu-desktop/main.js:91-97`
- **Bug:** `setupIpcHandlers()` called again on `activate` without removing previous registrations. `ipcMain.handle()` throws on duplicate; `ipcMain.on()` doubles up callbacks.
- **Fix:** Add a guard flag (`let ipcHandlersRegistered = false`) to prevent re-registration.
- **Test:** Verify `setupIpcHandlers` is idempotent — calling it twice does not throw or double-register.

### E2: Unvalidated Data in `executeJavaScript` (send-test-danmu)

- **File:** `danmu-desktop/main-modules/ipc-handlers.js:154-179`
- **Bug:** `data.text` has no length limit; `data.textStyles` and `data.displayArea` are serialized into `executeJavaScript` without type validation.
- **Fix:**
  - Add `typeof data.text !== 'string' || data.text.length > 500` → reject
  - Validate all `textStyles` fields: `textStroke` (boolean), `strokeWidth` (number 0-10), `strokeColor` (string, color regex), `textShadow` (boolean), `shadowBlur` (number 0-50)
  - Validate `displayArea` fields: `top`/`bottom` must be numbers 0-100
- **Test:** Oversized text → rejected; invalid textStyles type → rejected; each textStyles field type-checked; valid params → accepted.

### E3: `getDisplays` Returns Unsanitized `displays`

- **File:** `danmu-desktop/main-modules/ipc-handlers.js:114`
- **Bug:** `return displays` instead of `return sanitizedDisplays`. The sanitization computation is discarded.
- **Fix:** Change `return displays` to `return sanitizedDisplays`.
- **Test:** Verify the returned value has sanitized `id` fields.

---

## Layer 2: Medium Issues (12 fixes + tests)

### Python Server (7)

#### PM1: `_json_response` Duplicated in 3 Route Files

- **Files:** `routes/admin.py:51`, `routes/api.py:26`, `routes/main.py:69`
- **Fix:** Move to `utils.py`, import in all three route files.
- **Test:** Existing tests cover the behavior; just verify no import errors.

#### PM2: `SettingsStore.update_value` Accepts Arbitrary Types

- **File:** `server/managers/settings.py` (update_value method)
- **Fix:** For non-range keys, validate `value` is `str | int | bool | None`. Reject dict/list.
- **Test:** POST a dict value for `Color` → expect 400.

#### PM3: `_maybe_cleanup` Uses `current_app.logger`

- **File:** `server/services/history.py:174`
- **Fix:** Replace `current_app.logger` with module-level `logger = logging.getLogger(__name__)`.
- **Test:** Verify `_maybe_cleanup` works outside request context (no RuntimeError).

#### PM4: `ws_queue` Uses `list.pop(0)` — O(n)

- **File:** `server/services/ws_queue.py:16`
- **Fix:** Replace `_queue = []` with `_queue = collections.deque(maxlen=_MAX_QUEUE_SIZE)`. Remove the manual `pop(0)` overflow logic.
- **Test:** Enqueue more than `_MAX_QUEUE_SIZE` items → verify oldest dropped and dequeue order correct.

#### PM5: Path Traversal Check Uses `startswith`

- **File:** `server/services/fonts.py:15`
- **Fix:** Use `Path(normalized).is_relative_to(Path(USER_FONTS_DIR))`.
- **Test:** Attempt path traversal with `../../etc/passwd` → verify rejection. Test with suffix trick (`fonts_evil/..`).

#### PM6: `get_stats()` Lock Inconsistency

- **File:** `server/services/history.py:125-139`
- **Fix:** Hold lock for entire `get_stats` computation by inlining the `get_recent` logic.
- **Test:** Concurrent `add()` + `get_stats()` → verify total >= last_24h always.

#### PM7: WS Config Captured at Thread Start (Document Only)

- **File:** `server/ws_app.py`
- **Action:** Add a code comment documenting the limitation. No functional change needed — the race window only exists in tests.

### Electron JS (5)

#### EM1: `validateIP` Rejects `localhost`

- **File:** `danmu-desktop/shared/utils.js:22-28`
- **Fix:** Add `|| value === 'localhost'` check.
- **Test:** `validateIP('localhost')` → true; `validateIP('127.0.0.1')` → true; `validateIP('evil')` → false.

#### EM2: CSS Injection via `fontInfo.url`

- **File:** `danmu-desktop/renderer-modules/track-manager.js:217-221`
- **Fix:** Validate `fontInfo.url` matches a safe pattern: `blob:` URLs, relative paths starting with `/` (server-origin font URLs like `/api/fonts/...`), or `https://` URLs from trusted CDN origins. Escape `fontInfo.name` by stripping `"` and `\` characters before CSS insertion.
- **Test:** Malicious URL containing `"); }` → rejected. Safe `blob:` URL → accepted. Relative `/api/fonts/...` URL → accepted.

#### EM3: `child.html` CSP Too Broad

- **File:** `danmu-desktop/child.html:8-16`
- **Fix:** Change `connect-src ws: wss:` to `connect-src ws://127.0.0.1:* wss://127.0.0.1:* ws://localhost:* wss://localhost:*`.
- **Test:** Manual verification (CSP is declarative).

#### EM4: `preload.js` IPC Listener Leak

- **File:** `danmu-desktop/preload.js:55-107`
- **Fix:** Add cleanup functions that call `ipcRenderer.removeAllListeners(channel)` before registering.
- **Test:** Call registration twice → verify only one listener per channel.

#### EM5: Missing `window.API` Null Checks

- **File:** `danmu-desktop/renderer-modules/ws-manager.js:104-105, 157-158`
- **Fix:** Add `if (!api) return;` guard before `api.create()` and `api.close()`.
- **Test:** With `window.API = undefined`, click start/stop → no TypeError thrown.

---

## Layer 3: Test Coverage Gaps (16 new test areas)

### Python Server (7 test areas)

| Area | Test File | What to Test |
|------|-----------|-------------|
| `_maybe_cleanup` cleanup path | `test_history.py` | Create records with old timestamps, trigger cleanup, verify pruning |
| Settings value type fuzzing | `test_settings_store.py` | Dict/list values rejected for Color/Effects |
| Timing-safe compare | `test_security.py` | Assert `hmac.compare_digest` is used (covered by P1 test) |
| Path traversal on effects content | `test_effects.py` | `/admin/effects/../etc/passwd/content` → 404 |
| WS forwarding error recovery | `test_system_ws.py` | Inject transient exception → verify recovery |
| Font service layer bypass | `test_fonts.py` | Call `save_uploaded_font` with non-TTF → verify behavior |
| Hash file persistence | `test_security.py` | `save_runtime_hash` → `load_runtime_hash` roundtrip; verify 0o600 permissions |

### Electron JS (9 modules)

| Module | Test File | What to Test |
|--------|-----------|-------------|
| `shared/utils.js` | `validation.test.js` | validateIP (IPv4, IPv6, domains, localhost, invalid), validatePort |
| `settings.js` | `settings.test.js` | save/load roundtrip, corrupted localStorage |
| `settings-io.js` | `settings-io.test.js` | export format, import parse, error handling |
| `danmu-effects.js` | `danmu-effects.test.js` | register/apply/list effects |
| `connection-status.js` | `connection-status.test.js` | status transitions, debounce, dedup |
| `toast.js` | `toast.test.js` | show/auto-hide behavior |
| `ipc-handlers.js` helpers | `ipc-helpers.test.js` | validateDanmuParams, isValidIpAddress, isFromMainWindow |
| `ws-manager.js` | `ws-manager.test.js` | start/stop state machine, connection status handler |
| `i18n.js` | `i18n.test.js` | fallback behavior, zh detection, key lookup |

---

## Implementation Order

```
Layer 1 (Critical)
├── P1: timing-safe password    + test
├── P2: history deadlock        + test
├── P3: effect name validation  + test
├── E1: IPC handler guard       + test
├── E2: executeJS validation    + test
└── E3: getDisplays return fix  + test
    └── Run all tests → all green

Layer 2 (Medium)
├── PM1-PM7: Python fixes       + tests
├── EM1-EM5: Electron fixes     + tests
    └── Run all tests → all green

Layer 3 (Coverage)
├── 7 Python test areas
├── 9 JS test modules
    └── Run all tests → all green
```

## Success Criteria

- All Critical and Medium issues fixed
- All existing tests continue to pass (Python + JS baseline verified before changes)
- New tests added for every fix
- 9 previously untested JS modules have at least basic coverage
- 7 Python coverage gaps filled
