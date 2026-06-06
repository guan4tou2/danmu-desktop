/**
 * Admin · Theme Switcher (design v4-r7 polestar pivot 2026-05-18).
 *
 * Toggles `<html data-theme="dark|light">`. Default behaviour: follow
 * system (`prefers-color-scheme`) until the operator clicks the toggle,
 * which switches to manual mode and persists in localStorage.
 *
 * Adds a small ☼/☾ button to the admin topbar. The button reflects the
 * *current* effective theme (sun = light is active, moon = dark is
 * active). Three-state cycle: auto → light → dark → auto.
 *
 * Token plumbing lives in shared/tokens.css under [data-theme="light"]
 * and the prefers-color-scheme media query — nothing here touches
 * individual selectors.
 *
 * 2026-05-18 unification: same storage key (`theme-mode`) as the viewer
 * hamburger sheet (main.js). Toggling theme on /admin propagates to /
 * (and vice-versa) via the `storage` event — open both tabs and one
 * click flips them together. Legacy key `admin-theme-mode` is migrated
 * once on boot.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "theme-mode";          // unified — same key viewer reads
  const LEGACY_KEY = "admin-theme-mode";     // migrated once
  const BTN_ID = "admin-theme-toggle";
  const SHOW_TOPBAR_TOGGLE = false;

  // ── one-time migration from legacy key ────────────────────────────
  (function migrateLegacy() {
    try {
      if (localStorage.getItem(STORAGE_KEY) != null) return;
      const old = localStorage.getItem(LEGACY_KEY);
      if (old === "light" || old === "dark" || old === "auto") {
        localStorage.setItem(STORAGE_KEY, old);
        localStorage.removeItem(LEGACY_KEY);
      }
    } catch (_) {}
  })();

  function _readMode() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "light" || v === "dark" || v === "auto") return v;
    } catch (_) {}
    return "auto";
  }

  function _saveMode(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
  }

  function _applyMode(mode) {
    const html = document.documentElement;
    if (mode === "auto") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", mode);
    }
    _updateButton(mode);
  }

  function _effectiveTheme(mode) {
    if (mode === "light" || mode === "dark") return mode;
    // auto — read system preference
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return "light";
    return "dark";
  }

  function _updateButton(mode) {
    const btn = document.getElementById(BTN_ID);
    if (!btn) return;
    const eff = _effectiveTheme(mode);
    btn.dataset.mode = mode;
    btn.dataset.effective = eff;
    btn.textContent = eff === "light" ? "☀" : "☾";
    btn.title = mode === "auto"
      ? `跟隨系統 · 目前 ${eff === "light" ? "亮色" : "暗色"}`
      : mode === "light" ? "亮色模式" : "暗色模式";
  }

  function _cycle() {
    const cur = _readMode();
    const next = cur === "auto" ? "light" : cur === "light" ? "dark" : "auto";
    _saveMode(next);
    _applyMode(next);
  }

  function _mount() {
    if (!document.body.classList.contains("admin-body")) return;
    if (!SHOW_TOPBAR_TOGGLE) {
      document.getElementById(BTN_ID)?.remove();
      return;
    }
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    // Inject the toggle next to the existing broadcast / logout buttons
    // in the admin topbar. If the topbar isn't ready yet we fall back to
    // a fixed-position chip; once the anchor appears (admin shell renders
    // after JS init), promote the floating button into the topbar so the
    // design v4 chrome stays clean — no stray floating UI.
    const anchor = document.querySelector(".admin-dash-broadcast")
      || document.querySelector("#logoutButton")
      || null;
    const existing = document.getElementById(BTN_ID);
    if (existing) {
      if (anchor && existing.classList.contains("admin-theme-toggle--floating")
          && anchor.parentNode && !anchor.parentNode.contains(existing)) {
        existing.classList.remove("admin-theme-toggle--floating");
        anchor.parentNode.insertBefore(existing, anchor);
      }
      return;
    }
    const btn = document.createElement("button");
    btn.id = BTN_ID;
    btn.type = "button";
    btn.className = "admin-theme-toggle";
    btn.addEventListener("click", _cycle);
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(btn, anchor);
    } else {
      btn.classList.add("admin-theme-toggle--floating");
      document.body.appendChild(btn);
    }
    _updateButton(_readMode());
  }

  // Apply persisted mode as early as possible (before mount) so the
  // page doesn't flash dark before resolving to light.
  _applyMode(_readMode());

  // Listen for OS theme flip when in auto mode.
  if (window.matchMedia) {
    try {
      window.matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", () => {
          if (_readMode() === "auto") _updateButton("auto");
        });
    } catch (_) {}
  }

  // Cross-tab sync (2026-05-18 unification) — if the viewer in another
  // tab toggles theme, admin's data-theme attribute and button glyph
  // update without a reload. Same listener pattern used in main.js.
  window.addEventListener("storage", (e) => {
    if (e.key !== STORAGE_KEY) return;
    _applyMode(_readMode());
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      _mount();
      // Re-mount on admin shell re-renders (admin.js dispatches this event).
      const observer = new MutationObserver(_mount);
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    _mount();
    const observer = new MutationObserver(_mount);
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
