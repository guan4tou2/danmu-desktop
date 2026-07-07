// Wires the conn page's three always-visible cards:
//   1. Server  — TestChip, host display, canonical preview, ⚐ 測試, in-place edit
//   2. WebSocket Token — collapsible AUTH panel, status text reflects unset/set
//   3. LAST USED SERVER — single most-recent entry from localStorage
//
// The Server field is bidirectionally synced with the hidden host-input +
// port-input compat fields so ws-manager continues to read the same IDs
// unchanged.

const { parseServerInput, buildCanonicalUrl, formatDisplayHost } = require("./conn-parser");
const { createConnTest } = require("./conn-test");
const { loadSettings, saveSettings } = require("./settings");
const i18n = require("../i18n");

// Translate at call time so values follow the current language even after a
// live language switch (avoids caching stale strings).
function _t(key) {
  return i18n && typeof i18n.t === "function" ? i18n.t(key) : key;
}

const _IDS = {
  serverInput: "conn-server-input",
  hostInput: "host-input",
  portInput: "port-input",
  tokenInput: "ws-token-input",
};

// Empty-state guidance shown in the host slot before any server is configured,
// replacing the bare "—" placeholder (A4). Read from i18n at call time so it
// follows the current language.
function _hostEmptyHint() {
  return _t("connHostEmptyHint");
}

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
    if (!serverInput) return;
    const parsed = _safeParse(serverInput.value);
    if (!parsed) {
      if (hostDisplay) hostDisplay.textContent = serverInput.value || _hostEmptyHint();
      if (previewDisplay) previewDisplay.textContent = "wss://—/ws";
      return;
    }
    if (hostDisplay) hostDisplay.textContent = formatDisplayHost(parsed);
    if (previewDisplay) previewDisplay.textContent = buildCanonicalUrl(parsed);
  }

  // Toggle the shared .input-valid / .input-invalid affordance on the visible
  // Server field. Empty input is neutral (no class). Called on blur so the
  // user isn't nagged mid-typing.
  function _applyServerValidity() {
    if (!serverInput) return;
    serverInput.classList.remove("input-valid", "input-invalid");
    const raw = serverInput.value ? serverInput.value.trim() : "";
    if (!raw) return;
    if (_safeParse(raw)) {
      serverInput.classList.add("input-valid");
    } else {
      serverInput.classList.add("input-invalid");
    }
  }

  if (serverInput) {
    serverInput.addEventListener("input", () => {
      if (_suppressEcho) return;
      const parsed = _safeParse(serverInput.value);
      if (parsed) _setHidden(parsed);
      _renderPreview();
    });
    serverInput.addEventListener("blur", _applyServerValidity);
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

  // The button's resting label is the connTestBtn i18n string — restore it by
  // re-reading i18n at settle time (NOT a value cached at init) so a live
  // language switch doesn't leave the button showing the old language.
  const testBtnLabel = testBtn ? testBtn.querySelector("[data-i18n='connTestBtn']") : null;

  function _renderChip() {
    const state = connTest.getState();
    if (testChip) {
      testChip.textContent = connTest.getChipLabel();
      testChip.setAttribute("data-state", state);
    }
    // Disable the ⚐ 測試 button while a handshake is in flight and swap the
    // label for the existing ⟳ spinner glyph; restore on settle.
    if (testBtn) {
      const testing = state === "testing";
      testBtn.disabled = testing;
      testBtn.setAttribute("aria-busy", testing ? "true" : "false");
      if (testBtnLabel) {
        testBtnLabel.textContent = testing ? "⟳ " + _t("connTesting") : _t("connTestBtn");
      }
    }
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
  // ESC while editing the server reverts to the persisted value and closes
  // edit mode — same path as the ✕ 取消 button. Scoped to the edit block so
  // no global keydown listener is added (A7).
  if (editBlock) {
    editBlock.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        _setServerFromHidden();
        _closeEdit();
      }
    });
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
      const persisted = _persistServerSelection(parsed);
      _renderPreview();
      if (persisted) _renderLastUsedServer(persisted);
      _closeEdit();
      // Auto-test after saving so the user gets instant feedback.
      if (parsed) {
        const token = tokenInput && tokenInput.value ? tokenInput.value : "";
        connTest.start({ host: parsed.host, port: parsed.port, token });
      }
    });
  }
  if (editCancelBtn) {
    editCancelBtn.addEventListener("click", () => {
      // Revert input to the current hidden-field value, then close.
      _setServerFromHidden();
      _closeEdit();
    });
  }

  function _persistServerSelection(parsed) {
    if (!parsed) return null;

    const saved = loadSettings() || {};
    const screenSelect = document.getElementById("screen-select");
    const syncMultiDisplayCheckbox = document.getElementById(
      "sync-multi-display-checkbox"
    );
    const displayIndexFromDom = screenSelect
      ? Number.parseInt(screenSelect.value, 10)
      : NaN;
    const displayIndex = Number.isInteger(displayIndexFromDom)
      ? displayIndexFromDom
      : Number.isInteger(saved.displayIndex)
        ? saved.displayIndex
        : 0;
    const syncMultiDisplay = syncMultiDisplayCheckbox
      ? !!syncMultiDisplayCheckbox.checked
      : !!saved.syncMultiDisplay;
    const wsToken = tokenInput && tokenInput.value
      ? tokenInput.value.trim()
      : typeof saved.wsToken === "string"
        ? saved.wsToken
        : "";

    saveSettings(
      parsed.host,
      String(parsed.port),
      displayIndex,
      syncMultiDisplay,
      wsToken
    );

    return {
      host: parsed.host,
      port: String(parsed.port),
      displayIndex,
      syncMultiDisplay,
      wsToken,
    };
  }

  // ── LAST USED SERVER population ────────────────────────────────────────
  function _renderLastUsedServer(savedOverride) {
    if (!lastAddrEl) return;
    const saved = savedOverride || loadSettings();
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
      // ✓ Set badge — stays visible even when the panel is open so the
      // "token is configured" signal is always present (A5).
      authStatusEl.textContent = "✓ " + _t("connAuthStatusSet");
      authStatusEl.classList.add("is-set");
      authStatusEl.removeAttribute("data-i18n");
    } else {
      // Restore default (re-pickable by i18n updateUI on next pass)
      authStatusEl.textContent = "未設定 · 點此設定";
      authStatusEl.classList.remove("is-set");
      authStatusEl.setAttribute("data-i18n", "connAuthStatusUnset");
    }
  }
  if (tokenInput) tokenInput.addEventListener("input", _renderAuthStatus);
  _renderAuthStatus();

  return {
    connTest,
    renderPreview: _renderPreview,
    openEdit: _openEdit,
    closeEdit: _closeEdit,
    applyServerValidity: _applyServerValidity,
  };
}

module.exports = { initConnSection };
