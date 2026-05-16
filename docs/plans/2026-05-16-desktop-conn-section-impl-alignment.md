# Desktop Conn Section Implementation Alignment Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Bring the Electron app's `Connection` section in [`danmu-desktop/index.html`](../../danmu-desktop/index.html) up to the configure-only design model captured in [`docs/designs/design-v2/components/desktop.jsx`](../designs/design-v2/components/desktop.jsx) ConnSection. Four design-driven features need impl wiring: silent `⚐ 測試` button, 4-state TestChip, single host field with auto-strip parser + canonical preview, and collapsible WebSocket Token panel.

**Architecture:** Renderer keeps the existing module pattern (`renderer-modules/` CommonJS + webpack bundle). Parser is a standalone unit-testable module reused by both the conn-card display and the edit form. Main process exposes one new IPC handler `conn:test` that does a one-shot WSS handshake using a temporary hidden BrowserWindow — this inherits the `app.on("certificate-error")` trust check via `trustedWssHosts`, avoiding a parallel TLS trust path. Storage schema unchanged (`{host, port, wsToken, displayIndex}` single localStorage key); the unified UI maps `host:port` strings to/from the split storage shape via the parser.

**Tech Stack:** Electron IPC, Node `ws` (already a transitive dep via existing child WSS), Jest for parser + IPC contract tests, existing Playwright e2e for regression coverage.

**Out of scope:** multi-server history (decided in [`docs/designs/design-v2/components/desktop.jsx`](../designs/design-v2/components/desktop.jsx) LAST SERVER section to defer; impl stays single-entry).

---

### Task 1: Lock the conn-input parser contract

**Files:**
- Add: `danmu-desktop/renderer-modules/conn-parser.js`
- Add: `danmu-desktop/tests/conn-parser.test.js`
- Reference: [`docs/designs/design-v2/components/desktop.jsx`](../designs/design-v2/components/desktop.jsx) lines 270-292 (the design's `parseHost` + `canonicalUrl` builder)

**Step 1: Write the failing test**

Cover the canonical cases the design's auto-strip parser handles, plus impl-specific edge cases (storage migration, port default):

- `parseServerInput('danmu.acme.co')` → `{ host: 'danmu.acme.co', port: 443 }`
- `parseServerInput('danmu.acme.co:4001')` → `{ host: 'danmu.acme.co', port: 4001 }`
- `parseServerInput('wss://danmu.acme.co/ws')` → `{ host: 'danmu.acme.co', port: 443 }`
- `parseServerInput('https://danmu.acme.co:8443/ws')` → `{ host: 'danmu.acme.co', port: 8443 }`
- `parseServerInput('  ws://192.168.1.50:4001  ')` → `{ host: '192.168.1.50', port: 4001 }`
- `parseServerInput('danmu.acme.co/')` → `{ host: 'danmu.acme.co', port: 443 }`
- `parseServerInput('')` → throws `Error('host required')`
- `parseServerInput('danmu.acme.co:abc')` → throws `Error('invalid port')`
- `parseServerInput('danmu.acme.co:99999')` → throws `Error('invalid port')`
- `buildCanonicalUrl({ host, port: 443 })` → `'wss://host/ws'` (port hidden)
- `buildCanonicalUrl({ host, port: 8443 })` → `'wss://host:8443/ws'` (port shown)
- `formatDisplayHost({ host: 'h', port: 443 })` → `'h'` (round-trip via parser)
- `formatDisplayHost({ host: 'h', port: 8443 })` → `'h:8443'`

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- conn-parser.test.js`

Expected: FAIL (module does not exist yet).

---

### Task 2: Implement the parser

**Files:**
- Modify: `danmu-desktop/renderer-modules/conn-parser.js`

**Step 1: Write the minimal implementation**

Export three functions:
- `parseServerInput(raw)` — trim, strip `wss?://` / `https?://` prefixes, strip trailing `/ws` / `/`, split on `:`, validate port range 1-65535, default to 443 when no port. Throw on empty or invalid port.
- `buildCanonicalUrl({ host, port })` — return `wss://${host}${port === 443 ? '' : `:${port}`}/ws`.
- `formatDisplayHost({ host, port })` — return `host` when port is 443, else `host:port`.

Keep regex inline; no external deps beyond Node stdlib.

**Step 2: Run test to verify it passes**

Run: `cd danmu-desktop && npm test -- conn-parser.test.js`

Expected: PASS.

---

### Task 3: Lock IPC handler contract for `conn:test`

**Files:**
- Add: `danmu-desktop/tests/ipc-conn-test.test.js`
- Reference: [`danmu-desktop/main-modules/ipc-handlers.js`](../../danmu-desktop/main-modules/ipc-handlers.js) (existing IPC registration pattern)
- Reference: [`danmu-desktop/main-modules/trusted-wss-hosts.js`](../../danmu-desktop/main-modules/trusted-wss-hosts.js)
- Reference: [`danmu-desktop/main.js:33-50`](../../danmu-desktop/main.js) (`app.on("certificate-error")` trust check)

**Step 1: Write the failing test**

Assert (via mocked `ipcMain` registration):
- A handler is registered for channel `"conn:test"`.
- Handler signature accepts `{ host: string, port: number, token?: string }`.
- Return shape is `{ ok: boolean, latencyMs?: number, error?: string, errorCode?: string }`.
- On `ok: false`, `error` is one of: `'timeout'`, `'unauthorized'` (1008 close), `'connection-refused'`, `'dns-failure'`, `'tls-error'`, `'unknown'`.

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- ipc-conn-test.test.js`

Expected: FAIL (handler not registered).

---

### Task 4: Implement `conn:test` IPC handler

**Files:**
- Modify: `danmu-desktop/main-modules/ipc-handlers.js`
- Modify: `danmu-desktop/preload.js` (expose `window.API.testConnection`)

**Step 1: Write the minimal implementation**

In `ipc-handlers.js`:
- `ipcMain.handle("conn:test", async (_event, { host, port, token }) => { ... })`.
- Approach: spawn a hidden `BrowserWindow({ show: false, webPreferences: { contextIsolation: true } })`.
  - Add `{host, port}` to `trustedWssHosts` for the duration of the test (revert if not already trusted).
  - Load a data URL containing minimal HTML+JS that opens `new WebSocket(\`wss://\${host}:\${port}/ws${token ? '?token=' + encodeURIComponent(token) : ''}\`)`, measures `Date.now()` delta from creation to `open` event, then closes and reports the result via `ipcRenderer.send`.
  - Main listens for `conn:test:result` once, resolves the Promise, destroys the hidden window.
- Timeout: 5000ms wall clock; on timeout, destroy window and return `{ ok: false, error: 'timeout' }`.
- Error mapping:
  - `close.code === 1008` → `{ ok: false, error: 'unauthorized' }`.
  - WS `error` event with `code: 'ECONNREFUSED'` or similar → `{ ok: false, error: 'connection-refused' }`.
  - `ENOTFOUND` → `'dns-failure'`. Cert errors not in trust set → `'tls-error'`. Else → `'unknown'`.

In `preload.js`:
- `testConnection: (opts) => ipcRenderer.invoke("conn:test", opts)`.

**Step 2: Run test to verify it passes**

Run: `cd danmu-desktop && npm test -- ipc-conn-test.test.js`

Expected: PASS.

---

### Task 5: Renderer ConnTest module (state machine)

**Files:**
- Add: `danmu-desktop/renderer-modules/conn-test.js`
- Add: `danmu-desktop/tests/conn-test.test.js`

**Step 1: Write the failing test**

Test a state machine with three states and explicit transitions:
- Initial state: `idle`.
- `start()` → state becomes `testing`; calls injected `window.API.testConnection(opts)`.
- On Promise resolve `{ ok: true, latencyMs: 23 }` → state becomes `ok`, chip text is `✓ HH:MM:SS · 23ms`.
- On Promise resolve `{ ok: false, error: 'unauthorized' }` → state becomes `fail`, chip text contains `1008 Unauthorized` (mapped from error code).
- Calling `start()` while state is `testing` is a no-op (debounce).
- Subscribe pattern: `onChange(callback)` fires on state transitions.

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- conn-test.test.js`

Expected: FAIL.

---

### Task 6: Implement ConnTest module

**Files:**
- Modify: `danmu-desktop/renderer-modules/conn-test.js`

**Step 1: Write the minimal implementation**

- Export `createConnTest({ api, parseServerInput })` factory returning `{ state, start, onChange }`.
- Error code → display label map mirroring design's TestChip text:
  - `unauthorized` → `1008 Unauthorized`
  - `connection-refused` → `Connection refused`
  - `dns-failure` → `DNS failure`
  - `timeout` → `Timeout`
  - `tls-error` → `TLS error`
  - `unknown` → `Connection failed`

**Step 2: Run test to verify it passes**

Run: `cd danmu-desktop && npm test -- conn-test.test.js`

Expected: PASS.

---

### Task 7: Restructure conn UI in index.html + wire ConnTest

**Files:**
- Modify: `danmu-desktop/index.html` (`<section data-section="conn">` cards + edit form)
- Modify: `danmu-desktop/styles.css` (TestChip + canonical preview + collapsible AUTH panel)
- Modify: `danmu-desktop/renderer-modules/ws-manager.js` (adjust form bindings: now single Server field, parser bridges to split storage)
- Modify: `danmu-desktop/renderer-modules/settings.js` (read/write unchanged; only the UI surface shifts)
- Modify: `danmu-desktop/renderer.js` (wire `createConnTest`)
- Modify: `danmu-desktop/tests/client-ia.test.js` (expand assertions to the new conn shape)

**Step 1: Write the failing test**

Extend `client-ia.test.js` to assert (in addition to existing checks):
- Conn section contains: `data-conn-canonical-preview`, `data-conn-test-btn`, `data-conn-test-chip` (with all 4 state classes documented in `data-state` attribute).
- Edit form contains: single `#conn-server-input` (replaces `#host-input` + `#port-input`); `#ws-token-input` lives in a collapsible `data-conn-auth-panel` (closed by default).
- Live meta `重連 X 次 / 上線 Y` is removed (or moved into overlay tab's data block).
- `#host-input` + `#port-input` retained ONLY as hidden compat fields synced from the parser (so existing ws-manager start/stop code path needs no changes).

**Step 2: Write the minimal implementation**

Markup pattern (sketch):
```html
<section data-section="conn">
  <div class="client-conn-card">
    <div class="client-conn-kicker">SERVER</div>
    <div class="client-conn-host" data-client-server-host>danmu.local</div>
    <div class="client-conn-preview" data-conn-canonical-preview>wss://danmu.local/ws</div>
    <div class="client-conn-test-row">
      <div class="client-conn-test-chip" data-conn-test-chip data-state="idle">LAST TEST · —</div>
      <button class="client-conn-test-btn" data-conn-test-btn>⚐ 測試</button>
    </div>
    <div class="client-conn-actions">
      <button data-client-action="edit-conn">⚙ 更改</button>
    </div>
  </div>
  <div class="client-conn-edit" data-client-conn-edit hidden>
    <label>
      <span>Server</span>
      <input id="conn-server-input" placeholder="danmu.acme.co 或 192.168.1.50:8443" />
    </label>
    <details data-conn-auth-panel>
      <summary>WebSocket Token <span>OPTIONAL · WSS HANDSHAKE</span></summary>
      <input type="password" id="ws-token-input" />
      <p>僅當 server 啟用 WS_REQUIRE_TOKEN 時需要 · 從 Admin → System → Security 取得</p>
    </details>
    <input type="hidden" id="host-input" />
    <input type="hidden" id="port-input" />
    <button data-conn-edit-save>套用</button>
    <button data-conn-edit-cancel>取消</button>
  </div>
</section>
```

`renderer.js` wiring:
- On `conn-server-input` blur / form save: `const { host, port } = parseServerInput(input.value);` → write back to hidden `host-input` + `port-input` → existing `saveSettings` reads from those.
- On 測試 button click: `connTest.start({ host, port, token: wsToken })`.
- Canonical preview updates on input via `buildCanonicalUrl`.
- Subscribe `connTest.onChange` to update chip class + label.

**Step 3: Run tests to verify it passes**

Run: `cd danmu-desktop && npm test -- client-ia.test.js layout-compact.test.js`

Expected: PASS.

---

### Task 8: i18n cleanup

**Files:**
- Modify: `danmu-desktop/locales/{en,zh,ja,ko}/translation.json`
- Add: `danmu-desktop/tests/i18n-conn-test.test.js`

**Step 1: Write the failing test**

Assert every locale has these new keys with non-empty values:
- `connTestBtn` (測試 / Test)
- `connTestChipIdle` (LAST TEST · —)
- `connTestChipTesting` (測試中… / Testing…)
- `connTestErrorUnauthorized` etc. for each error code
- `connAuthSummary` (WebSocket Token)
- `connAuthHint` (僅當 server 啟用 WS_REQUIRE_TOKEN 時需要 …)

And asserts retired keys are gone:
- `connStatReconnect`, `connStatReconnectUnit`, `connStatUptime` (replaced by removed live meta)

**Step 2: Run test to verify it fails**

Run: `cd danmu-desktop && npm test -- i18n-conn-test.test.js`

Expected: FAIL.

**Step 3: Update all 4 locale files; re-run.**

Expected: PASS.

---

### Task 9: Run focused regression coverage

**Files:**
- Test: `danmu-desktop/tests/**/*.test.js`
- Test: `danmu-desktop/e2e/connection-controls.spec.js` (may need touch-up for new selectors)

**Step 1: Run full jest suite**

Run: `cd danmu-desktop && npm test`

Expected: PASS.

**Step 2: Run Playwright e2e**

Run: `cd danmu-desktop && npx playwright test e2e/connection-controls.spec.js`

Expected: PASS or document failures + the migration needed for spec.

**Step 3: Manual smoke (developer pass)**

- Open Electron app, conn section default visible.
- Default ConnTest chip shows `LAST TEST · —`.
- Click 測試 with no server set → expect TLS error or DNS failure chip.
- Set valid server, click 測試 → chip flips to `✓ HH:MM:SS · Nms`.
- Set wrong token, click 測試 → chip shows `✗ 1008 Unauthorized`.
- Open Overlay tab → existing `▶ 開啟 Overlay` button still works, no regression.

---

### Risks + open questions

1. **TLS trust for the test**: hidden BrowserWindow inherits `trustedWssHosts` only if `{host, port}` is added to the trust set before the WebSocket opens. Need to either (a) auto-add on test invocation and remove afterward, or (b) require user to have already trusted the host. Option (a) is simpler but extends trust without explicit user confirmation. Resolve in Task 4 — recommend (a) with revert-on-failure.
2. **Hidden window overhead**: ~200ms cold-start per test invocation. If this is too slow, fall back to Node `ws` with `rejectUnauthorized: false` (less secure but no window spin-up).
3. **Storage migration**: existing users have `{host, port, wsToken}` already split. Parser handles both directions, so no schema migration needed.
4. **Overlay tab live meta**: the design moved live `重連 X 次 / 上線 Y` out of conn section. Impl should display this in overlay tab while overlay is running, OR drop entirely. Decide in Task 7.
