// Wires the conn page's three always-visible cards:
//   1. Server  — TestChip, host display, canonical preview, ⚐ 測試, in-place edit
//   2. WebSocket Token — collapsible AUTH panel, status text reflects unset/set
//   3. LAST USED SERVER — single most-recent entry from localStorage
//
// The Server field is bidirectionally synced with the hidden host-input +
// port-input compat fields so existing modules (ws-manager, first-run-gate)
// continue to read the same IDs unchanged.

const { parseServerInput, buildCanonicalUrl, formatDisplayHost } = require("./conn-parser");
const { createConnTest } = require("./conn-test");
const { loadSettings } = require("./settings");

const _IDS = {
  serverInput: "conn-server-input",
  hostInput: "host-input",
  portInput: "port-input",
  tokenInput: "ws-token-input",
};

function _safeParse(raw) {
  try {
    return parseServerInput(raw);
  } catch (_) {
    return null;
  }
}

function initConnSection({ api } = {}) {
  const serverInput = document.getElementById(_IDS.serverInput);
  const hostInput = document.getElementById(_IDS.hostInput);
  const portInput = document.getElementById(_IDS.portInput);
  const tokenInput = document.getElementById(_IDS.tokenInput);
  const hostDisplay = document.querySelector("[data-client-server-host]");
  const previewDisplay = document.querySelector("[data-conn-canonical-preview]");
  const testBtn = document.querySelector("[data-conn-test-btn]");
  const testChip = document.querySelector("[data-conn-test-chip]");
  // In-place edit mode toggle
  const displayBlock = document.querySelector("[data-conn-display]");
  const editBlock = document.querySelector("[data-conn-edit]");
  const editPencil = document.querySelector('[data-client-action="edit-conn"]');
  const editSaveBtn = document.querySelector("[data-conn-edit-save]");
  const editCancelBtn = document.querySelector("[data-conn-edit-cancel]");
  // LAST USED SERVER card
  const lastAddrEl = document.querySelector("[data-conn-last-addr]");
  const lastWhenEl = document.querySelector("[data-conn-last-when]");
  // AUTH status text (visible when collapsed)
  const authStatusEl = document.querySelector("[data-conn-auth-status]");

  // If the conn-section markup isn't on this page (e.g. about.html), bail.
  if (!serverInput && !hostInput) return null;

  // ── Bidirectional sync: serverInput ↔ host/port hidden inputs ────────────
  //
  // `_suppressEcho` blocks the synthetic input events we fire from one side
  // bouncing back into the other — only user typing should propagate.
  let _suppressEcho = false;

  function _setHidden({ host, port }) {
    if (!hostInput || !portInput) return;
    _suppressEcho = true;
    try {
      hostInput.value = host;
      portInput.value = String(port);
      hostInput.dispatchEvent(new Event("input"));
      portInput.dispatchEvent(new Event("input"));
    } finally {
      _suppressEcho = false;
    }
  }

  function _setServerFromHidden() {
    if (!serverInput) return;
    const host = hostInput && hostInput.value ? hostInput.value : "";
    const portRaw = portInput && portInput.value ? portInput.value : "";
    const port = Number(portRaw) || 443;
    if (!host) {
      serverInput.value = "";
      _renderPreview();
      return;
    }
    _suppressEcho = true;
    try {
      serverInput.value = formatDisplayHost({ host, port });
    } finally {
      _suppressEcho = false;
    }
    _renderPreview();
  }

  function _renderPreview() {
    if (!serverInput) {
      // Fallback when only hidden inputs exist (e.g. first-run-only page).
      return;
    }
    const parsed = _safeParse(serverInput.value);
    if (!parsed) {
      if (hostDisplay) hostDisplay.textContent = serverInput.value || "—";
      if (previewDisplay) previewDisplay.textContent = "wss://—/ws";
      return;
    }
    if (hostDisplay) hostDisplay.textContent = formatDisplayHost(parsed);
    if (previewDisplay) previewDisplay.textContent = buildCanonicalUrl(parsed);
  }

  if (serverInput) {
    serverInput.addEventListener("input", () => {
      if (_suppressEcho) return;
      const parsed = _safeParse(serverInput.value);
      if (parsed) _setHidden(parsed);
      _renderPreview();
    });
  }

  if (hostInput) {
    hostInput.addEventListener("input", () => {
      if (_suppressEcho) return;
      _setServerFromHidden();
    });
  }
  if (portInput) {
    portInput.addEventListener("input", () => {
      if (_suppressEcho) return;
      _setServerFromHidden();
    });
  }

  // Initial paint — host/port may already be hydrated by ws-manager's
  // loadSettings before this wire-up runs.
  _setServerFromHidden();

  // ── ⚐ 測試 button + 4-state TestChip ────────────────────────────────────
  const connTest = createConnTest({ api: api || (typeof window !== "undefined" ? window.API : null) });

  function _renderChip() {
    if (!testChip) return;
    testChip.textContent = connTest.getChipLabel();
    testChip.setAttribute("data-state", connTest.getState());
  }

  connTest.onChange(_renderChip);
  _renderChip();

  if (testBtn) {
    testBtn.addEventListener("click", () => {
      const parsed = _safeParse(serverInput && serverInput.value);
      if (!parsed) {
        // Treat empty/invalid input as a failure without dispatching IPC.
        // ConnTest renders "Invalid input" via the same chip path.
        connTest.start({ host: "", port: 0 });
        return;
      }
      const token = tokenInput && tokenInput.value ? tokenInput.value : "";
      connTest.start({ host: parsed.host, port: parsed.port, token });
    });
  }

  // ── In-place edit toggle (Server card) ─────────────────────────────────
  function _openEdit() {
    if (displayBlock) displayBlock.setAttribute("hidden", "");
    if (editBlock) editBlock.removeAttribute("hidden");
    if (serverInput) {
      try { serverInput.focus(); serverInput.select(); } catch (_) {}
    }
  }
  function _closeEdit() {
    if (editBlock) editBlock.setAttribute("hidden", "");
    if (displayBlock) displayBlock.removeAttribute("hidden");
  }
  if (editPencil) {
    editPencil.addEventListener("click", _openEdit);
    // editPencil is the whole host-row with role="button" tabindex="0";
    // honor keyboard activation for parity with the click affordance.
    editPencil.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        _openEdit();
      }
    });
  }
  if (editSaveBtn) {
    editSaveBtn.addEventListener("click", () => {
      const parsed = _safeParse(serverInput && serverInput.value);
      if (parsed) _setHidden(parsed);
      _renderPreview();
      _closeEdit();
    });
  }
  if (editCancelBtn) {
    editCancelBtn.addEventListener("click", () => {
      // Revert input to the current hidden-field value, then close.
      _setServerFromHidden();
      _closeEdit();
    });
  }

  // ── LAST USED SERVER population ────────────────────────────────────────
  function _renderLastUsedServer() {
    if (!lastAddrEl) return;
    const saved = loadSettings();
    if (saved && saved.host) {
      const port = Number(saved.port) || 443;
      lastAddrEl.textContent = formatDisplayHost({ host: saved.host, port });
      if (lastWhenEl) {
        // No timestamp in storage schema; show the static "上次使用" hint
        // (already in HTML via i18n) by clearing any override.
        lastWhenEl.removeAttribute("data-empty");
      }
    } else {
      lastAddrEl.textContent = "—";
      if (lastWhenEl) lastWhenEl.setAttribute("data-empty", "");
    }
  }
  _renderLastUsedServer();

  // ── AUTH status text ───────────────────────────────────────────────────
  function _renderAuthStatus() {
    if (!authStatusEl || !tokenInput) return;
    if (tokenInput.value && tokenInput.value.trim()) {
      authStatusEl.textContent = "已設定";
      authStatusEl.removeAttribute("data-i18n");
    } else {
      // Restore default (re-pickable by i18n updateUI on next pass)
      authStatusEl.textContent = "未設定 · 點此設定";
      authStatusEl.setAttribute("data-i18n", "connAuthStatusUnset");
    }
  }
  if (tokenInput) tokenInput.addEventListener("input", _renderAuthStatus);
  _renderAuthStatus();

  return { connTest, renderPreview: _renderPreview, openEdit: _openEdit, closeEdit: _closeEdit };
}

module.exports = { initConnSection };
