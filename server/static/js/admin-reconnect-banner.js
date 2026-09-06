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
  let _authExpired = false;       // one-shot：401 只觸發一次 reload
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

  // 設計稿 15 · RC1：橫幅要講三件事——**發生什麼、正在做什麼、對觀眾有沒有
  // 影響**。原本是一串全大寫技術詞（RECONNECTING · 4.2s · attempt 3 / 30），
  // 主持人在台上讀到只會更慌：它沒回答「大螢幕還在跑嗎」這個唯一重要的問題。
  function _reconnectingHtml() {
    const left = Math.max(0, (_nextAttemptAt - Date.now()) / 1000);
    const total = _backoffMs / 1000;
    const pct = Math.min(100, ((total - left) / total) * 100);
    return `
      <span class="admin-rcb__dot"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbReconnectingTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbReconnectingBody", { n: _attemptCount })}</span>
      <div class="admin-rcb__progress"><div class="admin-rcb__progress-fill" style="width:${pct}%"></div></div>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`;
  }

  function _exhaustedHtml() {
    return `
      <span class="admin-rcb__dot admin-rcb__dot--static"></span>
      <span class="admin-rcb__label">${ServerI18n.t("rcbLostTitle")}</span>
      <span class="admin-rcb__hint">${ServerI18n.t("rcbLostBody")}</span>
      <span class="admin-rcb__spacer"></span>
      <button type="button" class="admin-rcb__btn admin-rcb__btn--retry" data-rcb-action="retry">${ServerI18n.t("rcbRetryNow")}</button>
      <button type="button" class="admin-rcb__close" data-rcb-action="dismiss" aria-label="${ServerI18n.t("close")}">${window.AdminUtils.closeIcon}</button>`;
  }

  function _tick() {
    if (_state !== "reconnecting") return;
    const el = document.getElementById(BANNER_ID);
    if (!el) return;
    const left = Math.max(0, (_nextAttemptAt - Date.now()) / 1000);
    const total = _backoffMs / 1000;
    const pct = Math.min(100, ((total - left) / total) * 100);
    // 秒數不再逐 0.1 秒跳（那是在演算法自證，不是在告知）；只推進度條。
    const fill = el.querySelector(".admin-rcb__progress-fill");
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
    // 登入過期對話框自己要打 /login，不能走下面包過的 window.fetch——
    // 密碼打錯時的 401 會被誤判成「session 又過期了」而遞迴開框。
    window.__adminRawFetch = origFetch;
    document.addEventListener("admin:session-restored", () => {
      _authExpired = false;
      _onSuccess();
    });

    async function _track(promise) {
      try {
        const r = await promise;
        if (r && r.ok) {
          if (_state !== "ok" && _state !== "dismissed") _onSuccess();
        } else if (r && r.status === 401 && !_authExpired) {
          // Session 過期（idle timeout / server 重啟）：已登入 shell 下
          // /admin/* 回 401 只有一種意思。原本這裡靜默漏過，使用者看到
          // 的是「頁面資料壞掉」而不是登入頁（F-102 design audit
          // 2026-08-02 實測：401 後 SPA 繼續掛著舊畫面）。
          //
          // 之後改成 location.reload()，但那會把主持人踢回一片空白的登入
          // 頁——剛才在哪一頁、輸入到一半的東西全沒了。設計稿 15 · EX1
          // 要的是**對話框而不是跳回登入頁，保留當前路由**。
          _authExpired = true;
          if (window.AdminSessionExpired) {
            window.AdminSessionExpired.open();
          } else {
            location.reload();
          }
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
