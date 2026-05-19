/**
 * Admin Mobile Shell · Bottom Nav + Overflow (P0-mobile-shell,
 * design v4-r4 2026-05-18 admin-mobile-shell.jsx).
 *
 * Mounts at <body> level. Activated by CSS @media (max-width: 768px),
 * which:
 *   - hides .admin-dash-sidebar (desktop only)
 *   - shows .admin-mobile-nav (this module's bottom bar)
 *   - converts HudConfirm modal + message drawer + scheduler sheet to
 *     bottom sheets via CSS rules in style.css
 *
 * The nav itself is always in the DOM; CSS gates visibility so the
 * tap-targets never disappear mid-resize.
 *
 * 5 primary tabs (Live / Moderation / Polls / Assets / More) with the
 * 3 overflow items (Display / Effects / System) opening a slide-up
 * drawer when "More" is tapped.
 */
(function () {
  "use strict";

  const NAV_ID = "admin-mobile-nav-root";

  const TABS = [
    { id: "live",       route: "live",       icon: "▶", label: "Live" },
    { id: "moderation", route: "moderation", icon: "⊘", label: "審核", badgeKey: "pending" },
    { id: "polls",      route: "polls",      icon: "⊷", label: "投票" },
    { id: "assets",     route: "assets",     icon: "⊞", label: "素材" },
    { id: "more",       route: null,         icon: "⋯", label: "更多" },
  ];

  const OVERFLOW = [
    { route: "display", icon: "⊡", label: "Display", desc: "Overlay · OBS · 佈局" },
    { route: "effects", icon: "✦", label: "Effects", desc: ".dme 效果庫" },
    { route: "system",  icon: "⊙", label: "System",  desc: "系統 · 排程 · 備份" },
    { route: "viewer",  icon: "◐", label: "Viewer",  desc: "觀眾頁主題 / 欄位設定" },
  ];

  let _overflowOpen = false;
  let _pendingCount = 0;

  function _template() {
    return `
      <div id="${NAV_ID}" class="admin-mobile-nav" data-overflow="closed" aria-label="Mobile navigation">
        <div class="admin-mobile-nav__backdrop" data-mn-backdrop hidden></div>
        <div class="admin-mobile-nav__overflow" data-mn-overflow hidden>
          ${OVERFLOW.map((it) => `
            <button type="button" class="admin-mobile-nav__o-row" data-mn-route="${it.route}">
              <span class="admin-mobile-nav__o-icon">${it.icon}</span>
              <span class="admin-mobile-nav__o-txt">
                <span class="admin-mobile-nav__o-label">${it.label}</span>
                <span class="admin-mobile-nav__o-desc">${it.desc}</span>
              </span>
              <span class="admin-mobile-nav__o-chev">›</span>
            </button>`).join("")}
        </div>
        <div class="admin-mobile-nav__bar">
          ${TABS.map((t) => `
            <button type="button" class="admin-mobile-nav__tab" data-mn-tab="${t.id}" data-mn-route="${t.route || ""}">
              <span class="admin-mobile-nav__icon">${t.icon}</span>
              <span class="admin-mobile-nav__label">${t.label}</span>
              ${t.badgeKey ? `<span class="admin-mobile-nav__badge" data-mn-badge="${t.badgeKey}" hidden>0</span>` : ""}
              <span class="admin-mobile-nav__active-line"></span>
            </button>`).join("")}
        </div>
      </div>`;
  }

  function _activeFromHash() {
    const slug = (location.hash || "").replace("#/", "").split("/")[0] || "";
    // Map admin route → mobile tab id. Anything outside the 5 primary
    // tabs falls under "more".
    if (TABS.some((t) => t.id === slug)) return slug;
    if (OVERFLOW.some((o) => o.route === slug)) return "more";
    return "live";
  }

  function _syncActive() {
    const root = document.getElementById(NAV_ID);
    if (!root) return;
    const active = _activeFromHash();
    root.querySelectorAll("[data-mn-tab]").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.mnTab === active);
    });
  }

  function _setOverflow(open) {
    const root = document.getElementById(NAV_ID);
    if (!root) return;
    _overflowOpen = open;
    root.dataset.overflow = open ? "open" : "closed";
    root.querySelector("[data-mn-overflow]").hidden = !open;
    root.querySelector("[data-mn-backdrop]").hidden = !open;
    root.querySelector("[data-mn-tab='more']")?.classList.toggle("is-active", open);
  }

  function _onClick(e) {
    if (e.target.closest("[data-mn-backdrop]")) { _setOverflow(false); return; }
    const tab = e.target.closest("[data-mn-tab]");
    if (tab) {
      const id = tab.dataset.mnTab;
      if (id === "more") {
        _setOverflow(!_overflowOpen);
        return;
      }
      _setOverflow(false);
      if (tab.dataset.mnRoute) {
        location.hash = "#/" + tab.dataset.mnRoute;
      }
      return;
    }
    const overflowRow = e.target.closest("[data-mn-route]");
    if (overflowRow && overflowRow.classList.contains("admin-mobile-nav__o-row")) {
      _setOverflow(false);
      location.hash = "#/" + overflowRow.dataset.mnRoute;
    }
  }

  // Badge polling — moderation tab shows the modqueue pending count.
  async function _pollBadge() {
    try {
      const r = await fetch("/admin/modqueue/list", { credentials: "same-origin" });
      if (!r.ok) return;
      const j = await r.json();
      const n = Array.isArray(j.pending) ? j.pending.length : 0;
      _pendingCount = n;
      const el = document.querySelector("[data-mn-badge='pending']");
      if (!el) return;
      el.textContent = String(n);
      el.hidden = !(n > 0);
    } catch (_) { /* silent */ }
  }

  // 2026-05-18: keyboard interplay — hide bottom nav when an input/textarea
  // is focused on mobile. CSS handles modern browsers via :has(); this is
  // the fallback for older WebKit (iOS <= 16). Toggles a body class that
  // the CSS rule also matches.
  function _bindKeyboardHide() {
    if (window.matchMedia?.("(min-width: 769px)").matches) return;
    let raf = 0;
    function check() {
      const a = document.activeElement;
      const isInput = a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable);
      document.body.classList.toggle("admin-mobile-nav--hidden", !!isInput);
    }
    document.addEventListener("focusin", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    });
    document.addEventListener("focusout", () => {
      // Small delay so tab-to-next-field doesn't flash the nav.
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setTimeout(check, 50));
    });
  }

  function _mount() {
    if (document.getElementById(NAV_ID)) return;
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    if (!document.body.classList.contains("admin-body")) return;
    document.body.insertAdjacentHTML("beforeend", _template());
    document.addEventListener("click", _onClick);
    window.addEventListener("hashchange", () => { _setOverflow(false); _syncActive(); });
    _syncActive();
    _pollBadge();
    setInterval(_pollBadge, 8000);
    _bindKeyboardHide();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _mount);
  } else {
    _mount();
  }
})();
