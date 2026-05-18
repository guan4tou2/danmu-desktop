/**
 * Admin Quick Action FAB (P3-1, design v4 2026-05-17).
 *
 * Floating "+" button in the top-right of every admin view that expands
 * into a 7-action menu (切到 Standby / 清螢幕 / 強制中斷 WS / Dark Mode /
 * Onboarding / 切到 Live Feed / 開啟 ⌘K).
 *
 * Distinct from admin-quick-action.js (which is the undo-bar helper for
 * reversible actions — different module despite the similar name).
 *
 * Actions that have no safe backend endpoint render as `disabled` so the
 * design layout still matches design v4 admin-p2p3.jsx AdminQuickActionPage
 * — buttons can be enabled progressively as endpoints land.
 */
(function () {
  "use strict";

  const FAB_ID = "admin-qa-fab-root";

  const ACTIONS = [
    { icon: "◐", label: "切到 Standby",   key: "S", desc: "暫停接收新訊息",      run: _toStandby },
    { icon: "⊗", label: "清螢幕",          key: "C", desc: "清除 overlay 上所有彈幕", run: _clearOverlay },
    { icon: "⚡", label: "強制中斷 WS",     key: "W", desc: "斷開所有 WebSocket 連線", run: null, disabled: "後端尚未提供安全的重啟端點" },
    { icon: "◑", label: "Dark Mode",      key: "D", desc: "切換深色 / 淺色主題",  run: null, disabled: "Admin 目前僅有深色主題" },
    { icon: "?", label: "Onboarding",     key: "O", desc: "重新開始引導教學",     run: _restartOnboarding },
    { icon: "▶", label: "切到 Live Feed", key: "L", desc: "跳到即時訊息頁",       run: _goLive },
    { icon: "⌘", label: "開啟 ⌘K",        key: "K", desc: "命令面板",            run: _openPalette },
  ];

  let _open = false;

  function _renderShell() {
    return `
      <div id="${FAB_ID}" class="admin-qa-fab" data-state="closed">
        <button type="button" class="admin-qa-fab__btn" data-qa-toggle aria-label="Quick actions" title="Quick actions">+</button>
        <div class="admin-qa-fab__backdrop" data-qa-backdrop hidden></div>
        <div class="admin-qa-fab__menu" data-qa-menu hidden>
          <div class="admin-qa-fab__menu-head">
            <span class="admin-qa-fab__kicker">QUICK ACTIONS</span>
            <span class="admin-qa-fab__spacer"></span>
            <span class="admin-qa-fab__esc">ESC to close</span>
          </div>
          ${ACTIONS.map((a, i) => `
            <button type="button" class="admin-qa-fab__row" data-qa-act="${i}" ${a.disabled ? `disabled title="${a.disabled}"` : ""}>
              <span class="admin-qa-fab__icon">${a.icon}</span>
              <span class="admin-qa-fab__txt">
                <span class="admin-qa-fab__label">${a.label}</span>
                <span class="admin-qa-fab__desc">${a.desc}</span>
              </span>
              <span class="admin-qa-fab__kbd">⌘⇧${a.key}</span>
            </button>`).join("")}
        </div>
      </div>`;
  }

  function _toggle(force) {
    const root = document.getElementById(FAB_ID);
    if (!root) return;
    const next = (typeof force === "boolean") ? force : !_open;
    _open = next;
    root.dataset.state = next ? "open" : "closed";
    root.querySelector("[data-qa-menu]").hidden = !next;
    root.querySelector("[data-qa-backdrop]").hidden = !next;
  }

  // ── action implementations ──────────────────────────────────────────

  async function _toStandby() {
    if (typeof window.csrfFetch !== "function") return;
    try {
      const r = await window.csrfFetch("/admin/broadcast/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "standby" }),
      });
      if (r.ok) window.showToast?.("已切到 OVERLAY OFF · 訊息暫停推送", true);
      else window.showToast?.("切換失敗", false);
    } catch (_) { window.showToast?.("切換失敗 · 網路錯誤", false); }
  }

  async function _clearOverlay() {
    if (typeof window.csrfFetch !== "function") return;
    if (!confirm("清空 overlay 螢幕上目前顯示的所有彈幕？")) return;
    try {
      const r = await window.csrfFetch("/admin/overlay/clear", { method: "POST" });
      if (r.ok) window.showToast?.("已清空 overlay 顯示", true);
      else window.showToast?.("清空失敗", false);
    } catch (_) { window.showToast?.("清空失敗 · 網路錯誤", false); }
  }

  function _restartOnboarding() {
    try { localStorage.removeItem("admin_onboarding_done"); } catch (_) { /* private mode */ }
    // admin-onboarding.js listens for this CustomEvent.
    document.dispatchEvent(new CustomEvent("admin:onboarding-restart"));
    window.showToast?.("引導教學已重新開始", true);
  }

  function _goLive() {
    location.hash = "#/live";
  }

  function _openPalette() {
    // admin-command-palette.js binds ⌘K / Ctrl+K — synthesise the keydown
    // so we don't reach into its private API.
    const evt = new KeyboardEvent("keydown", {
      key: "k", code: "KeyK", metaKey: true, ctrlKey: true, bubbles: true,
    });
    document.dispatchEvent(evt);
  }

  // ── wiring ──────────────────────────────────────────────────────────

  function _onClick(e) {
    const root = document.getElementById(FAB_ID);
    if (!root) return;
    if (e.target.closest("[data-qa-toggle]")) {
      _toggle();
      return;
    }
    if (e.target.closest("[data-qa-backdrop]")) {
      _toggle(false);
      return;
    }
    const row = e.target.closest("[data-qa-act]");
    if (row && !row.disabled) {
      const idx = parseInt(row.dataset.qaAct, 10);
      const a = ACTIONS[idx];
      if (a && typeof a.run === "function") {
        _toggle(false);
        Promise.resolve().then(a.run);
      }
    }
  }

  function _onKey(e) {
    if (e.key === "Escape" && _open) { _toggle(false); return; }
    // ⌘⇧<key> shortcuts when menu is closed
    if (!(e.metaKey || e.ctrlKey) || !e.shiftKey) return;
    const k = (e.key || "").toUpperCase();
    const hit = ACTIONS.find((a) => a.key === k);
    if (hit && !hit.disabled && typeof hit.run === "function") {
      e.preventDefault();
      Promise.resolve().then(hit.run);
    }
  }

  function _inject() {
    if (document.getElementById(FAB_ID)) return;
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    // Only mount inside admin shell — viewer/overlay/login don't need it.
    if (!document.body.classList.contains("admin-body")) return;
    document.body.insertAdjacentHTML("beforeend", _renderShell());
    document.addEventListener("click", _onClick);
    document.addEventListener("keydown", _onKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _inject);
  } else {
    _inject();
  }
})();
