/**
 * admin-utils.js — Shared utilities for admin page modules.
 * Loaded before all other admin-*.js scripts via <script defer>.
 */
(function () {
  "use strict";

  var DETAILS_STATE_KEY = "admin-details-open-state";

  function loadDetailsState() {
    try {
      return JSON.parse(localStorage.getItem(DETAILS_STATE_KEY)) || {};
    } catch (_) {
      return {};
    }
  }

  function saveDetailsState(state) {
    try {
      localStorage.setItem(DETAILS_STATE_KEY, JSON.stringify(state));
    } catch (_) {
      // Ignore localStorage write failures (private browsing, quota)
    }
  }

  // 2026-09-08：原本是 `div.appendChild(textNode); return div.innerHTML`。
  // 那個做法**不跳脫引號**——HTML 序列化規範只要求在文字節點裡跳 `&`、`<`、`>`
  // 與 nbsp，引號只在序列化屬性值時才跳。於是 `value="${escapeHtml(x)}"`
  // 這種寫法（admin 有 36 個檔都指向這支）可以被
  // `x = 'a" onfocus="…" autofocus x="'` 撐開，長出額外的屬性。
  // 當下沒有被利用，因為 CSP 的 `script-src-attr 'none'` 擋掉行內事件處理器的
  // 執行（實測過：屬性在、不執行）；但 CSP 擋不住注入 `style` / `formaction`，
  // 而且「哪天某個欄位開始流動」就會變成真的洞。這裡一次補齊。
  //
  // 順帶修掉 `if (!str) return ""`：那會讓數字 0 與 false 變成空字串。
  // 改用 replace 而不是每次建一個 DOM 節點（訊息流一次渲染兩百列時有感）。
  var _ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str).replace(/[&<>"']/g, function (c) { return _ESCAPE_MAP[c]; });
  }

  // ── CSP nonce ─────────────────────────────────────────────────────────────
  //
  // app.py's CSP sets `style-src-elem 'self'` with no 'unsafe-inline' on
  // purpose (see the comment above _build_content_security_policy): a
  // successful HTML injection must not be able to bring its own styles.
  // The flip side is that any <style> element JS injects has to carry the
  // per-request nonce, or the browser drops it — silently, apart from a
  // console warning. `style-src-attr` stays permissive, so `el.style.foo = …`
  // is unaffected; this is only about <style> elements.
  //
  // Read the `.nonce` property rather than the attribute: browsers blank out
  // the nonce content attribute after parsing, so getAttribute("nonce")
  // returns "" while the property still holds the real value.
  function cspNonce() {
    var carrier = document.querySelector("script[nonce]");
    return (carrier && carrier.nonce) || "";
  }

  // Build a <style> tag string that survives the CSP. Prefer this over hand-
  // writing `<style>` into an HTML string — forgetting the nonce fails quietly
  // at runtime, and `test_no_nonce_less_style_injection` pins that.
  //
  // `css` is inserted verbatim: it is stylesheet text, so HTML-escaping it
  // would corrupt selectors. Callers own their CSS source.
  function styleTag(id, css) {
    var nonce = cspNonce();
    return (
      "<style" +
      (id ? ' id="' + escapeHtml(id) + '"' : "") +
      (nonce ? ' nonce="' + escapeHtml(nonce) + '"' : "") +
      ">" +
      (css || "") +
      "</style>"
    );
  }

  // Shared close/dismiss/remove glyph. Replaces the ad-hoc ✕ / × text nodes
  // (mixed U+2715 and U+00D7) scattered across admin modules with one crisp,
  // theme-aware SVG: strokes currentColor so it inherits each button's color
  // in both light/dark, sizes to 1em so it scales with the button's font-size,
  // and is aria-hidden (every call site carries its own aria-label / title).
  var CLOSE_ICON =
    '<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" ' +
    'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" ' +
    'style="vertical-align:middle" aria-hidden="true" focusable="false">' +
    '<path d="M6 6l12 12M18 6 6 18"/></svg>';


  // ── 只在「自己那一區看得見」時輪詢（2026-09-08）────────────────────────
  //
  // admin 的 69 支模組是無條件全載的，每支自己 setInterval。實測停在單一頁面
  // 時仍有 66 requests/min，熱點包含 webhooks / integrations / fire-token /
  // scheduler / modqueue —— 全都是**當下沒開的頁**。
  //
  // 做法沿用 `admin-modqueue.js` 原本手寫的那一套（它是第一個踩到並解決這件事
  // 的模組），連同它註解裡記下的坑一起帶過來：
  //
  //   **只在「看不見 → 看得見」的那一次啟動 timer。** 這裡的可見性檢查由
  //   MutationObserver 驅動，而 tick 通常會重繪 DOM —— 每次都無條件 fetch 會
  //   自己餵自己：fetch → render → mutation → observer → fetch。當時實測在
  //   `#/moderation` 上 1.2 秒打了 286 次 `/admin/modqueue/list`，伺服器回 429。
  //
  // 順帶：分頁切到背景（`document.hidden`）時全部暫停。
  var _pollers = [];
  var _pollObserver = null;

  function _isVisible(el) {
    if (!el) return false;
    // 逐層往上找 display:none —— 這些區段是 `el.style.display = "none"` 藏的，
    // 不是移除，所以 offsetParent 之外還要看祖先。
    for (var n = el; n && n !== document.documentElement; n = n.parentElement) {
      if (n.style && n.style.display === "none") return false;
    }
    return !!(el.offsetParent || el.getClientRects().length);
  }

  function _syncPollers() {
    var hidden = document.hidden;
    _pollers.forEach(function (p) {
      var el = typeof p.el === "function" ? p.el() : p.el;
      var want = !hidden && _isVisible(el);
      if (want && !p.timer) {
        if (p.immediate !== false) { try { p.tick(); } catch (_) {} }
        p.timer = setInterval(p.tick, p.intervalMs);
      } else if (!want && p.timer) {
        clearInterval(p.timer);
        p.timer = 0;
      }
    });
  }

  /**
   * 註冊一個「只在 el 看得見時才跑」的輪詢。
   *
   * opts: { el, intervalMs, tick, immediate }
   *   el         HTMLElement 或 () => HTMLElement（晚生成的區段用函式）
   *   immediate  預設 true —— 在看不見→看得見的那一次先跑一發
   * 回傳 stop()。
   */
  function pollWhileVisible(opts) {
    var p = {
      el: opts.el,
      intervalMs: opts.intervalMs,
      tick: opts.tick,
      immediate: opts.immediate,
      timer: 0,
    };
    _pollers.push(p);

    if (!_pollObserver) {
      _pollObserver = new MutationObserver(function () { _syncPollers(); });
      _pollObserver.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class", "hidden"],
      });
      window.addEventListener("hashchange", _syncPollers);
      document.addEventListener("visibilitychange", _syncPollers);
      document.addEventListener("admin-panel-rendered", _syncPollers);
    }
    _syncPollers();

    return function stop() {
      if (p.timer) clearInterval(p.timer);
      var i = _pollers.indexOf(p);
      if (i !== -1) _pollers.splice(i, 1);
    };
  }

  window.AdminUtils = {
    DETAILS_STATE_KEY: DETAILS_STATE_KEY,
    loadDetailsState: loadDetailsState,
    saveDetailsState: saveDetailsState,
    escapeHtml: escapeHtml,
    cspNonce: cspNonce,
    styleTag: styleTag,
    closeIcon: CLOSE_ICON,
    pollWhileVisible: pollWhileVisible,
  };
})();
