// admin-login.js — Login + lockout screen extracted from admin.js (P6-2).
// Loads BEFORE admin.js. Exposes window.AdminLogin = { render, renderLockout }.
// Depends on window.__adminCtx (set by admin.js) for `appContainer` and
// a `getSettings()` accessor (currentSettings is mutated in admin.js IIFE).
//
// Render Login Screen — mirrors prototype AdminLogin (hero-scenes.jsx):
// brand lockup, mono labels, cyan sign-in, status chip row.
//
// v5 retrofit: intercepts the submit via fetch so we can surface
//   - 401 → remaining-attempt hint (5-attempt window, LOGIN_RATE_LIMIT)
//   - 429 → full lockout screen with countdown (Retry-After if present,
//           else hardcoded 300s matching LOGIN_RATE_WINDOW default)
// See docs/design-v2-backlog.md P2-4.
(function () {
  "use strict";

  const LOGIN_MAX_ATTEMPTS = 5;           // matches LOGIN_RATE_LIMIT default
  const LOGIN_LOCKOUT_DEFAULT = 300;       // matches LOGIN_RATE_WINDOW default
  let _loginAttemptsUsed = 0;

  function _ctx() { return window.__adminCtx || {}; }
  function _settings() {
    const ctx = _ctx();
    if (typeof ctx.getSettings === "function") return ctx.getSettings() || {};
    return {};
  }

  function _getLoginOpsContact() {
    // Optional admin contact surfaced on the lockout screen. Reads from
    // currentSettings.OpsContact (populated by fetchLatestSettings() before
    // renderLogin runs).
    const currentSettings = _settings();
    if (currentSettings && typeof currentSettings.OpsContact !== "undefined") {
      const oc = currentSettings.OpsContact;
      if (Array.isArray(oc)) return oc[3] || oc[0] || null;
      if (typeof oc === "string") return oc;
    }
    return null;
  }

  function renderLogin() {
    const appContainer = _ctx().appContainer || document.getElementById("app-container");
    if (!appContainer) return;
    const version = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "";
    appContainer.innerHTML = `
      <div class="admin-login-shell">
        <div class="admin-login-card" id="adminLoginCard">
          <div class="admin-login-hero">
            <h1 class="hud-hero-title is-large">Danmu Fire</h1>
            <p class="admin-login-subtitle" data-i18n="adminLoginSubtitle">${ServerI18n.t("adminLoginSubtitle")}</p>
          </div>
          <form id="loginForm" class="admin-login-form" action="/login" method="post" autocomplete="off">
            <div class="admin-login-field">
              <label class="admin-login-label" for="password" data-i18n="adminLoginPasswordLabel">${ServerI18n.t("adminLoginPasswordLabel")}</label>
              <input class="admin-login-input" type="password" id="password" name="password" autocomplete="current-password" required />
            </div>
            <button class="admin-login-submit" type="submit" data-i18n="adminLoginSignIn">${ServerI18n.t("adminLoginSignIn")}</button>
            <div class="admin-login-attempts" id="loginAttemptsHint" hidden></div>
          </form>
          <div class="admin-login-chiprow">
            <span class="admin-login-chip is-accent">
              <span class="hud-dot is-success" aria-hidden="true"></span>
              <span data-i18n="adminLoginServerOnline">${ServerI18n.t("adminLoginServerOnline")}</span>
            </span>
            ${version ? `<span class="admin-login-chip">v${version}</span>` : ""}
          </div>
        </div>
      </div>
    `;

    const form = document.getElementById("loginForm");
    const pwInput = document.getElementById("password");
    const hint = document.getElementById("loginAttemptsHint");
    if (!form) return;

    // Load previously-used attempts from session storage so a full reload
    // between failed attempts (server flashes + 302) keeps the counter.
    try {
      const stored = parseInt(sessionStorage.getItem("admin_login_attempts") || "0", 10);
      if (Number.isFinite(stored) && stored > 0) {
        _loginAttemptsUsed = stored;
        const remaining = Math.max(0, LOGIN_MAX_ATTEMPTS - _loginAttemptsUsed);
        if (hint && _loginAttemptsUsed > 0 && remaining > 0) {
          hint.hidden = false;
          hint.classList.toggle("is-warn", remaining > 1);
          hint.textContent = ServerI18n.t("loginAttemptsRemaining", { n: remaining });
        }
      }
    } catch (_) {}

    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (!pwInput) return;
      const body = new URLSearchParams();
      body.set("password", pwInput.value);
      try {
        // Probe /login first so we can trap 429 before the browser navigates.
        // On success/failure the server 302s — fetch with redirect:"manual"
        // returns an opaqueredirect (status 0) which we treat as "completed,
        // let the native form follow through".
        const res = await fetch("/login", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
          redirect: "manual",
        });

        if (res.status === 429) {
          const retryAfterRaw = res.headers.get("Retry-After");
          const retryAfter = parseInt(retryAfterRaw, 10);
          const seconds = Number.isFinite(retryAfter) && retryAfter > 0
            ? retryAfter
            : LOGIN_LOCKOUT_DEFAULT;
          renderLockout(seconds);
          return;
        }

        // Redirect response — attempt succeeded OR credentials were wrong
        // (server flashes "wrong password!" and 302s back here). We can't
        // distinguish without checking session state, so bump the local
        // attempts counter and reload to let render() route.
        _loginAttemptsUsed += 1;
        try { sessionStorage.setItem("admin_login_attempts", String(_loginAttemptsUsed)); } catch (_) {}
        window.location.reload();
      } catch (err) {
        console.error("Login submit failed:", err);
        if (hint) {
          hint.hidden = false;
          hint.textContent = ServerI18n.t("networkError");
        }
      }
    });
  }

  function renderLockout(seconds) {
    const card = document.getElementById("adminLoginCard");
    if (!card) return;
    const opsContact = _getLoginOpsContact();
    const contactHtml = opsContact
      ? `<a class="admin-lockout-contact" href="${opsContact}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("lockoutContactAdmin")}</a>`
      : "";

    card.classList.add("admin-lockout-card");
    card.innerHTML = `
      <div class="admin-login-hero">
        <h1 class="hud-hero-title is-large">Danmu Fire</h1>
        <p class="admin-lockout-title">${ServerI18n.t("lockoutTitle")}</p>
      </div>
      <div class="admin-lockout-body" role="alert" aria-live="assertive">
        <div class="admin-lockout-countdown" aria-live="polite">
          <span class="admin-lockout-countdown-value" id="lockoutCountdown">--:--</span>
          <span class="admin-lockout-countdown-unit">${ServerI18n.t("lockoutRemaining")}</span>
        </div>
        <div class="admin-lockout-meta">${ServerI18n.t("lockoutReason")}</div>
        ${contactHtml}
      </div>
    `;

    const valueEl = document.getElementById("lockoutCountdown");
    let remaining = seconds;
    const fmt = (s) => {
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    };
    if (valueEl) valueEl.textContent = fmt(remaining);
    const timer = setInterval(() => {
      remaining -= 1;
      if (valueEl) valueEl.textContent = fmt(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(timer);
        // Reset attempt counter and re-render the login form.
        _loginAttemptsUsed = 0;
        renderLogin();
        ServerI18n.updateUI();
      }
    }, 1000);
  }

  window.AdminLogin = { render: renderLogin, renderLockout: renderLockout };
})();
