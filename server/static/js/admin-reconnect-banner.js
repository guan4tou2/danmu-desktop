/**
 * Admin · WS Reconnection Banner (design v4-r6 2026-05-18 admin-polish.jsx).
 *
 * Sticky 36px strip rendered between the admin topbar and the page
 * content when the live-feed / bootstrap polling fetches fail. Two states:
 *
 *   reconnecting — amber, mini progress bar, attempt counter, dismiss CTA
 *   exhausted    — crimson, "立即重試" CTA, no auto-retry
 *
 * Detection: we piggyback on the existing /admin/bootstrap + /admin/metrics
 * fetch loop (admin.js polls these). A small wrapper around
 * `window.csrfFetch` tracks consecutive failures. After 3 fails → enter
 * `reconnecting`. After 10 fails → escalate to `exhausted`. Any 2xx
 * response resets the counter and tears down the banner.
 *
 * Mounted at <body> level (above .admin-app-shell) so the strip never
 * pushes content layout — it overlays with `position: sticky; top: 0`.
 */
(function () {
  "use strict";

  const BANNER_ID = "admin-reconnect-banner";
  const MAX_ATTEMPTS = 10;
  const ENTER_THRESHOLD = 3;     // failures before showing the banner
  const TICK_MS = 250;            // progress bar refresh
  let _failures = 0;
  let _attemptCount = 0;
  let _state = "ok";              // ok | reconnecting | exhausted | dismissed
  let _nextAttemptAt = 0;
  let _backoffMs = 5000;
  let _tickTimer = 0;

  function _setState(next) {
    if (_state === next) return;
    _state = next;
    if (next === "ok" || next === "dismissed") {
      _removeBanner();
      if (next === "ok") {
        _failures = 0;
        _attemptCount = 0;
        _backoffMs = 5000;
      }
      return;
    }
    _renderBanner();
  }

  function _renderBanner() {
    let el = document.getElementById(BANNER_ID);
    if (!el) {
      el = document.createElement("div");
      el.id = BANNER_ID;
      el.className = "admin-rcb";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.insertBefore(el, document.body.firstChild);
    }
    el.dataset.state = _state;
    const isExhausted = _state === "exhausted";
    const cls = isExhausted ? "admin-rcb--crimson" : "admin-rcb--amber";
    el.className = `admin-rcb ${cls}`;
    el.innerHTML = isExhausted ? _exhaustedHtml() : _reconnectingHtml();
    el.querySelector("[data-rcb-action='retry']")?.addEventListener("click", _forceRetry);
    el.querySelector("[data-rcb-action='dismiss']")?.addEventListener("click", () => _setState("dismissed"));

    // Page body acquires a soft dim so the banner feels "modal-lite".
    document.body.classList.toggle("admin-rcb-active", true);
    document.body.classList.toggle("admin-rcb-exhausted", isExhausted);

    if (!_tickTimer) _tickTimer = setInterval(_tick, TICK_MS);
  }

  function _removeBanner() {
    const el = document.getElementById(BANNER_ID);
    if (el) el.remove();
    document.body.classList.remove("admin-rcb-active", "admin-rcb-exhausted");
    if (_tickTimer) { clearInterval(_tickTimer); _tickTimer = 0; }
  }

  function _reconnectingHtml() {
    const left = Math.max(0, (_nextAttemptAt - Date.now()) / 1000);
    const total = _backoffMs / 1000;
    const pct = Math.min(100, ((total - left) / total) * 100);
    return `
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">RECONNECTING</span>
      <span class="admin-rcb__sep">·</span>
      <span class="admin-rcb__countdown">${left.toFixed(1)}s</span>
      <span class="admin-rcb__sep">·</span>
      <span class="admin-rcb__attempt">attempt ${_attemptCount} / ${MAX_ATTEMPTS}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${pct}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--ghost" data-rcb-action="dismiss">離線繼續工作</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="Dismiss">${window.AdminUtils.closeIcon}</button>`;
  }

  function _exhaustedHtml() {
    return `
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">CONNECTION LOST</span>
      <span class="admin-rcb__sep">·</span>
      <span class="admin-rcb__attempt">${MAX_ATTEMPTS}/${MAX_ATTEMPTS} attempts exhausted</span>
      <span class="admin-rcb__sep">·</span>
      <span class="admin-rcb__hint">check network or restart server</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">立即重試</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="Dismiss">${window.AdminUtils.closeIcon}</button>`;
  }

  function _tick() {
    if (_state !== "reconnecting") return;
    const el = document.getElementById(BANNER_ID);
    if (!el) return;
    const left = Math.max(0, (_nextAttemptAt - Date.now()) / 1000);
    const total = _backoffMs / 1000;
    const pct = Math.min(100, ((total - left) / total) * 100);
    const cd = el.querySelector(".admin-rcb__countdown");
    const fill = el.querySelector(".admin-rcb__progress-fill");
    if (cd) cd.textContent = left.toFixed(1) + "s";
    if (fill) fill.style.width = pct + "%";
  }

  function _forceRetry() {
    _attemptCount = 0;
    _failures = 0;
    _backoffMs = 5000;
    _setState("reconnecting");
    _ping();
  }

  async function _ping() {
    // A cheap, public-ish endpoint to test the server. /admin/bootstrap is
    // login-required but we already have a cookie if we got here.
    try {
      const r = await fetch("/admin/bootstrap", { credentials: "same-origin" });
      if (r.ok) {
        _onSuccess();
      } else if (r.status === 401 || r.status === 403) {
        // Auth dropped — let the existing auth flow handle it (don't keep banner up)
        _setState("ok");
      } else {
        _onFailure();
      }
    } catch (_) {
      _onFailure();
    }
  }

  function _onSuccess() {
    _setState("ok");
  }

  function _onFailure() {
    _failures += 1;
    _attemptCount += 1;
    if (_attemptCount >= MAX_ATTEMPTS) {
      _setState("exhausted");
      return;
    }
    if (_failures >= ENTER_THRESHOLD) {
      _backoffMs = Math.min(30000, 5000 * Math.pow(1.5, Math.max(0, _attemptCount - 1)));
      _nextAttemptAt = Date.now() + _backoffMs;
      _setState("reconnecting");
      setTimeout(_ping, _backoffMs);
    }
  }

  // ── csrfFetch wrapper ──────────────────────────────────────────────
  // Tap into existing csrfFetch + plain fetch so we observe every admin
  // request. Any 5xx / network error increments _failures; any 2xx (or
  // 3xx redirect) resets to OK.
  function _attach() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    if (!document.body.classList.contains("admin-body")) return;
    const origCsrf = window.csrfFetch;
    const origFetch = window.fetch;

    async function _track(promise) {
      try {
        const r = await promise;
        if (r && r.ok) {
          if (_state !== "ok" && _state !== "dismissed") _onSuccess();
        } else if (r && r.status >= 500) {
          _onFailure();
        }
        return r;
      } catch (e) {
        _onFailure();
        throw e;
      }
    }

    if (typeof origCsrf === "function") {
      window.csrfFetch = function () {
        return _track(origCsrf.apply(this, arguments));
      };
    }
    // Wrap plain fetch only for /admin/* paths so we don't muddy
    // viewer/overlay metrics with admin reconnection logic.
    window.fetch = function (input, init) {
      const url = typeof input === "string" ? input : (input && input.url) || "";
      const promise = origFetch.call(this, input, init);
      if (url.startsWith("/admin/") || url.indexOf("//") === -1 && url.startsWith("admin/")) {
        return _track(promise);
      }
      return promise;
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _attach);
  } else {
    _attach();
  }
})();
