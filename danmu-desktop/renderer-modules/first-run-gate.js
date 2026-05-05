// First-run connection gate.
//
// Per prototype desktop.jsx FirstRunGate. Covers the main UI on first launch
// when no server settings are persisted in localStorage. Three-step flow:
//   1. SERVER  — host + port input
//   2. TEST    — try a WS open with timeout; mark step done on success
//   3. READY   — confirm enables overlay; saves to localStorage; closes gate
//
// Reusable: any caller can call window.FirstRunGate.open() to re-trigger
// (e.g. from a "重新設定" menu item, or after a server-changed message).

const TEST_TIMEOUT_MS = 4000;
const RECENT_CAP = 5;
const STORAGE_RECENT = "danmuRecentServers";
const STORAGE_CONFIGURED = "danmuConfigured";

function loadRecent() {
  try {
    const raw = localStorage.getItem(STORAGE_RECENT);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((r) => r && r.host && r.port) : [];
  } catch (_) {
    return [];
  }
}

function pushRecent(host, port) {
  const list = loadRecent().filter((r) => !(r.host === host && String(r.port) === String(port)));
  list.unshift({ host, port: String(port), ts: Date.now() });
  while (list.length > RECENT_CAP) list.pop();
  try {
    localStorage.setItem(STORAGE_RECENT, JSON.stringify(list));
  } catch (_) { /* quota / private mode — ignore */ }
}

function fmtAgo(ts) {
  if (!ts) return "";
  const diff = Date.now() - ts;
  if (diff < 60_000) return "剛剛";
  if (diff < 3_600_000) return Math.floor(diff / 60_000) + " 分鐘前";
  if (diff < 86_400_000) return Math.floor(diff / 3_600_000) + " 小時前";
  return Math.floor(diff / 86_400_000) + " 天前";
}

function setStep(name) {
  const stepper = document.querySelector("[data-firstrun-stepper]");
  if (!stepper) return;
  const order = ["server", "test", "ready"];
  const target = order.indexOf(name);
  stepper.querySelectorAll(".client-firstrun-step").forEach((el) => {
    const idx = order.indexOf(el.dataset.step);
    el.classList.toggle("is-active", idx === target);
    el.classList.toggle("is-done", idx < target);
  });
}

function setTestResult(state, msg) {
  const el = document.getElementById("firstRunTestResult");
  if (!el) return;
  el.hidden = !state;
  el.textContent = msg || "";
  el.classList.remove("is-good", "is-bad", "is-pending");
  if (state) el.classList.add("is-" + state);
}

function tryConnectionTest(host, port) {
  // Returns Promise<bool>. Opens a WS, resolves true on `open` event,
  // false on error or timeout.
  return new Promise((resolve) => {
    let settled = false;
    let ws;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      try { if (ws) ws.close(); } catch (_) { /* */ }
      resolve(false);
    }, TEST_TIMEOUT_MS);
    try {
      // v5.0.0+: child overlay window connects via wss://${host}:${port}/ws
      // (see main-modules/child-ws-script.js). Use the same URL shape here
      // so a "test passed" outcome means the actual runtime path will work.
      // Previously this tested ws://${host}:${port} which gave false negatives
      // on TLS-terminated deployments + false positives on plain-WS deploys
      // that the runtime can no longer reach.
      ws = new WebSocket(`wss://${host}:${port}/ws`);
      ws.onopen = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { ws.close(); } catch (_) { /* */ }
        resolve(true);
      };
      ws.onerror = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { ws.close(); } catch (_) { /* */ }
        resolve(false);
      };
    } catch (_) {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        resolve(false);
      }
    }
  });
}

function renderRecent() {
  const wrap = document.getElementById("firstRunRecent");
  const list = document.querySelector("[data-firstrun-recent]");
  if (!wrap || !list) return;
  const recent = loadRecent();
  if (recent.length === 0) {
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  list.innerHTML = recent
    .map(
      (r, i) => `
        <button type="button" class="client-firstrun-recent-row" data-firstrun-recent-idx="${i}">
          <span class="addr">${r.host}:${r.port}</span>
          <span class="when">${fmtAgo(r.ts)}</span>
        </button>`
    )
    .join("");
}

function shouldOpen() {
  // Don't open if we've already saved at least one good config.
  // Falls back to checking the legacy host-input value (filled by ws-manager
  // from saveSettings/loadSettings) so existing users skip the gate entirely.
  try {
    if (localStorage.getItem(STORAGE_CONFIGURED) === "1") return false;
  } catch (_) {
    return false; // fail safe — don't block users with no localStorage
  }
  // Migration: if host-input has a saved value from prior versions, treat it
  // as configured.
  const hostInput = document.getElementById("host-input");
  if (hostInput && hostInput.value && hostInput.value.trim().length > 0) {
    try { localStorage.setItem(STORAGE_CONFIGURED, "1"); } catch (_) { /* */ }
    return false;
  }
  return true;
}

function open() {
  const gate = document.getElementById("firstRunGate");
  if (!gate) return;
  gate.hidden = false;
  setStep("server");
  setTestResult(null);
  renderRecent();
  // Pre-fill from existing inputs if present (migration path). Do NOT
  // fill defaults when there's nothing saved — first-time users should
  // see empty fields with placeholders ("e.g., 192.0.2.1" / "4001"),
  // not pre-typed values that might be wrong.
  const hostEl = document.getElementById("host-input");
  const portEl = document.getElementById("port-input");
  const grHost = document.getElementById("firstRunHost");
  const grPort = document.getElementById("firstRunPort");
  if (hostEl && grHost && hostEl.value) grHost.value = hostEl.value;
  if (portEl && grPort && portEl.value) grPort.value = portEl.value;
  const confirmBtn = gate.querySelector('[data-firstrun-action="confirm"]');
  if (confirmBtn) confirmBtn.disabled = true;
  setTimeout(() => {
    if (grHost && !grHost.value) grHost.focus();
    else if (grPort && !grPort.value) grPort.focus();
  }, 150);
}

function close() {
  const gate = document.getElementById("firstRunGate");
  if (gate) gate.hidden = true;
}

function bindEvents() {
  const gate = document.getElementById("firstRunGate");
  if (!gate || gate.dataset.bound === "1") return;
  gate.dataset.bound = "1";

  const grHost = document.getElementById("firstRunHost");
  const grPort = document.getElementById("firstRunPort");
  const testBtn = document.getElementById("firstRunTestBtn");
  const confirmBtn = gate.querySelector('[data-firstrun-action="confirm"]');
  const skipBtn = gate.querySelector('[data-firstrun-action="skip"]');
  const docsLink = gate.querySelector('[data-firstrun-action="docs"]');
  const testLabel = gate.querySelector("[data-firstrun-test-label]");
  const recentList = gate.querySelector("[data-firstrun-recent]");

  function refreshConfirmEnabled() {
    if (!confirmBtn) return;
    confirmBtn.disabled = gate.dataset.testPassed !== "1";
  }

  async function doTest() {
    const host = (grHost.value || "").trim();
    const port = (grPort.value || "").trim();
    if (!host) { grHost.focus(); return; }
    if (!port || isNaN(Number(port))) { grPort.focus(); return; }
    setStep("test");
    setTestResult("pending", "連線中…");
    if (testLabel) testLabel.textContent = "測試中…";
    if (testBtn) testBtn.disabled = true;
    const ok = await tryConnectionTest(host, port);
    if (testBtn) testBtn.disabled = false;
    if (testLabel) testLabel.textContent = "測試連線";
    if (ok) {
      gate.dataset.testPassed = "1";
      setStep("ready");
      setTestResult("good", `✓ 連線成功 · ${host}:${port}`);
    } else {
      gate.dataset.testPassed = "";
      setStep("server");
      setTestResult(
        "bad",
        `✗ 無法連線到 ${host}:${port} · 確認伺服器在線且 WebSocket port 開放`
      );
    }
    refreshConfirmEnabled();
  }

  function doConfirm() {
    const host = (grHost.value || "").trim();
    const port = (grPort.value || "").trim();
    if (!host || !port) return;
    // Mirror to the legacy form so renderer-modules pick it up.
    const hostInput = document.getElementById("host-input");
    const portInput = document.getElementById("port-input");
    if (hostInput) hostInput.value = host;
    if (portInput) portInput.value = port;
    pushRecent(host, port);
    try {
      localStorage.setItem(STORAGE_CONFIGURED, "1");
      // Trigger ws-manager's saveSettings via host-input change event.
      hostInput && hostInput.dispatchEvent(new Event("change", { bubbles: true }));
    } catch (_) { /* */ }
    close();
    if (typeof window.showToast === "function") {
      window.showToast("已儲存伺服器設定 · 點擊『開始』連線");
    }
  }

  function doSkip() {
    try { localStorage.setItem(STORAGE_CONFIGURED, "1"); } catch (_) { /* */ }
    close();
  }

  // Field change resets test status (so user must re-test after edits).
  function resetTestState() {
    gate.dataset.testPassed = "";
    setTestResult(null);
    setStep("server");
    refreshConfirmEnabled();
  }
  grHost && grHost.addEventListener("input", resetTestState);
  grPort && grPort.addEventListener("input", resetTestState);

  // Enter on host/port jumps to test.
  [grHost, grPort].forEach((el) => {
    if (!el) return;
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); doTest(); }
    });
  });

  testBtn && testBtn.addEventListener("click", doTest);
  confirmBtn && confirmBtn.addEventListener("click", doConfirm);
  skipBtn && skipBtn.addEventListener("click", doSkip);
  docsLink && docsLink.addEventListener("click", () => {
    if (window.API && typeof window.API.openExternal === "function") {
      window.API.openExternal("https://github.com/guan4tou2/danmu-desktop");
    } else {
      window.open("https://github.com/guan4tou2/danmu-desktop", "_blank");
    }
  });

  recentList && recentList.addEventListener("click", (e) => {
    const row = e.target.closest("[data-firstrun-recent-idx]");
    if (!row) return;
    const idx = Number(row.dataset.firstrunRecentIdx);
    const r = loadRecent()[idx];
    if (!r) return;
    if (grHost) grHost.value = r.host;
    if (grPort) grPort.value = r.port;
    resetTestState();
    doTest();
  });
}

function init() {
  bindEvents();
  if (shouldOpen()) {
    open();
  }
}

if (typeof window !== "undefined") {
  window.FirstRunGate = { init, open, close };
}

module.exports = { init, open, close };
