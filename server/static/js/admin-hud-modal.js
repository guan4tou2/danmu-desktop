/**
 * Admin · HUD Confirm Modal (design v4-r2 2026-05-18 admin-states.jsx).
 *
 * Reusable confirmation-modal helper that BanConfirm / EndBroadcast /
 * Delete / Settings-changed all extend. Replaces the ad-hoc `confirm()`
 * calls scattered through the admin modules.
 *
 *   await window.HudConfirm.open({
 *     icon: "⊘",
 *     title: "刪除確認",
 *     subtitle: "DELETE · THIS ACTION CANNOT BE UNDONE",
 *     severity: "danger",          // warn | danger | info | success
 *     body: "確定要刪除 <b>glow-neon.dme</b> 嗎？",  // string OR DOM node
 *     confirmLabel: "確認刪除",
 *     cancelLabel: "取消",
 *     width: 480,
 *   });   // → Promise<boolean>
 *
 * Resolves true if user clicks confirm, false on cancel / backdrop / Esc.
 * Body can be HTML string or a pre-built DOM node (for richer content
 * like the ban-confirm duration chips).
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-hud-modal-root";
  let _activeResolve = null;
  // Element that had focus before the modal opened — focus is returned here
  // on close so keyboard users land back where they were.
  let _prevFocus = null;

  const FOCUSABLE_SEL =
    'a[href], button:not([disabled]), textarea:not([disabled]), ' +
    'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function _focusable() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return [];
    return Array.prototype.slice
      .call(root.querySelectorAll(FOCUSABLE_SEL))
      .filter((el) => el.offsetParent !== null || el === document.activeElement);
  }

  function _close(result) {
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (_activeResolve) {
      _activeResolve(result);
      _activeResolve = null;
    }
    document.removeEventListener("keydown", _onKey);
    // Return focus to the element that opened the modal.
    if (_prevFocus && typeof _prevFocus.focus === "function") {
      try { _prevFocus.focus(); } catch (_) {}
    }
    _prevFocus = null;
  }

  function _onKey(e) {
    if (e.key === "Escape") { e.preventDefault(); _close(false); return; }
    if (e.key === "Enter")  { e.preventDefault(); _close(true);  return; }
    if (e.key === "Tab") {
      // Trap focus inside the modal so keyboard nav can't escape behind it.
      const items = _focusable();
      if (!items.length) { e.preventDefault(); return; }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === first || !items.includes(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last || !items.includes(active)) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function open(opts) {
    return new Promise((resolve) => {
      // Stack guard — close any existing modal first so resolves don't leak.
      if (_activeResolve) _close(false);
      _activeResolve = resolve;
      // Remember what had focus so we can restore it when the modal closes.
      _prevFocus = document.activeElement;

      const {
        icon = "⚠",
        title = "確認",
        subtitle = "",
        severity = "warn",
        body = "",
        confirmLabel = "確認",
        cancelLabel = "取消",
        width = 480,
      } = opts || {};

      const root = document.createElement("div");
      root.id = ROOT_ID;
      root.className = `admin-hud-modal admin-hud-modal--${severity}`;
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");
      root.setAttribute("aria-labelledby", "admin-hud-modal-title");

      const headSubtitle = subtitle
        ? `<div class="admin-hud-modal__subtitle">${subtitle}</div>`
        : "";

      const bodyHtml = (typeof body === "string") ? body : "";
      const wantsBodyNode = (typeof body !== "string" && body && body.nodeType);

      root.innerHTML = `
        <div class="admin-hud-modal__backdrop" data-modal-action="cancel"></div>
        <div class="admin-hud-modal__panel" style="width:${width}px;max-width:calc(100% - 32px)">
          <div class="admin-hud-modal__head">
            <span class="admin-hud-modal__icon">${icon}</span>
            <div>
              <div class="admin-hud-modal__title" id="admin-hud-modal-title">${title}</div>
              ${headSubtitle}
            </div>
          </div>
          <div class="admin-hud-modal__body" data-modal-body>${bodyHtml}</div>
          <div class="admin-hud-modal__foot">
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--cancel" data-modal-action="cancel">${cancelLabel}</button>
            <button type="button" class="admin-hud-modal__btn admin-hud-modal__btn--confirm" data-modal-action="confirm">${confirmLabel}</button>
          </div>
        </div>`;

      if (wantsBodyNode) {
        const bodyEl = root.querySelector("[data-modal-body]");
        bodyEl.innerHTML = "";
        bodyEl.appendChild(body);
      }

      root.addEventListener("click", function (e) {
        const a = e.target.closest("[data-modal-action]");
        if (!a) return;
        e.stopPropagation();
        _close(a.dataset.modalAction === "confirm");
      });

      document.body.appendChild(root);
      document.addEventListener("keydown", _onKey);
      // Focus the confirm button so Enter / Esc work without a click.
      requestAnimationFrame(() => {
        root.querySelector(".admin-hud-modal__btn--confirm")?.focus();
      });
    });
  }

  window.HudConfirm = { open };
})();
