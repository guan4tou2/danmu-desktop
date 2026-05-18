// AdminQuickAction — Q3-compliant feedback for admin actions (Slice 5).
//
// Decision Q3 (design-v2-backlog § P0-0, decisions-log-may04):
//   toast = universal success notification — fires on every quick-action result
//   inline = sticky undo bar — appears ONLY when the action is reversible
//
// The two channels are semantically non-overlapping so they never compete
// for the same eye-second.
//
// Usage:
//   AdminQuickAction.fire({
//     label: "已加入黑名單",
//     toast: true,                    // default true; toast every time
//     undo: {                          // optional — presence makes it reversible
//       label: "撤回",
//       run: async () => fetch('/admin/blacklist/remove', {method:'POST', ...}),
//       confirmLabel: "已撤銷",        // toast shown after successful undo
//       window: 5000,                  // ms before bar auto-dismisses; default 5000
//       host: someEl,                  // where to mount the inline bar; defaults
//                                       // to the panel that contains the trigger
//     }
//   });
//
// `fire()` is fire-and-forget. The success toast happens synchronously when
// fire is called (the action that triggered fire is assumed to have already
// succeeded by the caller). For undo, the run() function returns a promise
// that AdminQuickAction awaits; toast on success/failure of undo.

(function (window, document) {
  "use strict";

  const INLINE_HOST_ATTR = "data-quick-action-host";
  const INLINE_BAR_CLASS = "admin-quick-action-bar";

  function _resolveHost(opts) {
    if (opts?.host instanceof HTMLElement) return opts.host;
    // Default: a top-level dashboard region in the admin shell.
    const main = document.querySelector(".admin-dash-main");
    if (!main) return document.body;
    let host = main.querySelector(`[${INLINE_HOST_ATTR}]`);
    if (!host) {
      host = document.createElement("div");
      host.setAttribute(INLINE_HOST_ATTR, "");
      // Mount near the top of main, below topbar / tab strip.
      const topbar = main.querySelector(".admin-dash-topbar");
      const tabsHost = main.querySelector("[data-admin-tabs-host]");
      const anchor = tabsHost || topbar;
      if (anchor && anchor.parentNode) {
        anchor.insertAdjacentElement("afterend", host);
      } else {
        main.prepend(host);
      }
    }
    return host;
  }

  function _showToast(message, ok) {
    if (typeof window.showToast === "function") {
      window.showToast(message, ok !== false);
    }
  }

  function _renderBar({ label, undoLabel, onUndo, windowMs }) {
    const host = _resolveHost();
    // Single bar at a time — replace any existing
    const existing = host.querySelector("." + INLINE_BAR_CLASS);
    if (existing) existing.remove();

    const bar = document.createElement("div");
    bar.className = INLINE_BAR_CLASS;
    bar.setAttribute("role", "status");
    bar.setAttribute("aria-live", "polite");

    const text = document.createElement("span");
    text.className = INLINE_BAR_CLASS + "-text";
    text.textContent = "✓ " + label;
    bar.appendChild(text);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = INLINE_BAR_CLASS + "-undo";
    btn.textContent = "↶ " + (undoLabel || "撤回");
    bar.appendChild(btn);

    const dismiss = () => {
      bar.classList.add("is-leaving");
      setTimeout(() => bar.remove(), 200);
    };
    const timer = setTimeout(dismiss, windowMs || 5000);

    btn.addEventListener("click", async () => {
      clearTimeout(timer);
      btn.disabled = true;
      btn.textContent = "撤銷中…";
      try {
        await onUndo();
        _showToast("已撤銷", true);
      } catch (e) {
        _showToast("撤銷失敗：" + (e?.message || String(e)), false);
      } finally {
        dismiss();
      }
    });

    host.appendChild(bar);
    requestAnimationFrame(() => bar.classList.add("is-entering"));
    return bar;
  }

  function fire(opts) {
    if (!opts || typeof opts !== "object") return;
    const label = opts.label || "已完成";
    if (opts.toast !== false) _showToast(label, true);

    if (opts.undo && typeof opts.undo.run === "function") {
      _renderBar({
        label,
        undoLabel: opts.undo.label,
        onUndo: opts.undo.run,
        windowMs: opts.undo.window,
      });
    }
  }

  function dismissAll() {
    document.querySelectorAll("." + INLINE_BAR_CLASS).forEach((b) => b.remove());
  }

  window.AdminQuickAction = { fire, dismissAll };
})(window, document);
