/**
 * Shared Toast Notification Utility
 * Used by both main.js and admin.js
 *
 * 2026-10-29 重寫。原本每一則都是一個獨立節點，沒有去重、沒有上限、
 * 也沒有暫停：連續調參或批次封鎖時，右上角會疊出一整柱 3 秒後同時消失的
 * 訊息，蓋住頂欄的狀態區，而且螢幕閱讀器會把同一句唸很多次。
 *
 * 現在的行為：
 *   · 同一句話在 2.5 秒內重複出現 → 就地累加「×N」，不再長新的一則
 *   · 同時最多 4 則，超過就先收掉最舊的
 *   · 滑鼠移上去（或鍵盤 focus 到）暫停倒數，離開後補完剩下的時間
 *   · 顏色走主題 token，淺色／深色都跟著翻，不再寫死 Tailwind gray
 */
(function () {
  "use strict";

  var MAX_VISIBLE = 4;
  var DEDUPE_MS = 2500;
  var LIFETIME_MS = 3000;

  // key -> { el, timer, remaining, startedAt, count, countEl }
  var live = Object.create(null);

  function _now() {
    return Date.now();
  }

  function _keyFor(message, isSuccess) {
    return (isSuccess ? "ok:" : "err:") + message;
  }

  // 用 `var(--token, fallback)` 字串而不是 getComputedStyle 讀值：
  // token 是 light-dark() 形式，讀出來是未解析的 token 串，塞回 style
  // 不一定成立；交給瀏覽器在繪製時解析最穩，也才會跟著主題翻。
  function _token(name, fallback) {
    return "var(" + name + ", " + fallback + ")";
  }

  function _icon(isSuccess) {
    return isSuccess
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8v4m0 4h.01"/><circle cx="12" cy="12" r="9"/></svg>';
  }

  function _trim(container) {
    var nodes = Array.prototype.slice.call(container.children);
    while (nodes.length > MAX_VISIBLE) {
      var oldest = nodes.shift();
      if (oldest && oldest.parentNode) oldest.parentNode.removeChild(oldest);
    }
  }

  function _schedule(state, ms) {
    state.remaining = ms;
    state.startedAt = _now();
    state.timer = setTimeout(function () { _dismiss(state); }, ms);
  }

  function _pause(state) {
    if (!state.timer) return;
    clearTimeout(state.timer);
    state.timer = null;
    state.remaining = Math.max(600, state.remaining - (_now() - state.startedAt));
  }

  function _resume(state) {
    if (state.timer || !state.el.parentNode) return;
    _schedule(state, state.remaining);
  }

  function _dismiss(state) {
    clearTimeout(state.timer);
    state.timer = null;
    if (state.key && live[state.key] === state) delete live[state.key];
    var el = state.el;
    if (!el || !el.parentNode) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(8px)";
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 180);
  }

  function showToast(message, isSuccess) {
    var container = document.getElementById("toast-container");
    if (!container) return;
    isSuccess = isSuccess !== false;

    var key = _keyFor(String(message), isSuccess);
    var existing = live[key];
    if (existing && existing.el.parentNode && _now() - existing.startedAt < DEDUPE_MS) {
      existing.count += 1;
      if (existing.countEl) {
        existing.countEl.textContent = "\u00d7" + existing.count;
        existing.countEl.hidden = false;
      }
      _pause(existing);
      _resume(existing);
      return;
    }

    var accent = isSuccess
      ? _token("--color-ink-success", "#639922")
      : _token("--color-ink-error", "#e24b4a");
    var surface = _token("--color-surface", "#ffffff");
    var ink = _token("--color-text-primary", "#1a1a1a");
    var line = _token("--color-border-soft", "rgba(0,0,0,.12)");

    var el = document.createElement("div");
    // role 交給外面的 aria-live 容器（#toast-container 已是 role=status +
    // aria-live=polite）。子節點再掛 role="alert" 會被唸兩次。
    el.style.cssText = [
      "display:flex", "align-items:center", "gap:10px",
      "min-width:220px", "max-width:340px",
      "padding:10px 12px",
      "background:" + surface,
      "color:" + ink,
      "border:1px solid " + line,
      "border-left:3px solid " + accent,
      "border-radius:10px",
      "box-shadow:0 8px 24px rgba(0,0,0,.18)",
      "font-size:13px", "line-height:1.45",
      "opacity:0", "transform:translateX(8px)",
      "transition:opacity 180ms ease-out, transform 180ms ease-out",
      "pointer-events:auto"
    ].join(";");

    var icon = document.createElement("span");
    icon.style.cssText = "display:inline-flex;color:" + accent + ";flex:0 0 auto";
    icon.innerHTML = _icon(isSuccess);

    var text = document.createElement("span");
    text.style.cssText = "flex:1 1 auto;min-width:0;overflow-wrap:anywhere";
    text.textContent = message;

    var countEl = document.createElement("span");
    countEl.hidden = true;
    countEl.style.cssText = "flex:0 0 auto;font-variant-numeric:tabular-nums;font-size:12px;opacity:.65";

    el.appendChild(icon);
    el.appendChild(text);
    el.appendChild(countEl);

    container.appendChild(el);
    _trim(container);

    requestAnimationFrame(function () {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    });

    var state = {
      key: key, el: el, countEl: countEl, count: 1,
      timer: null, remaining: LIFETIME_MS, startedAt: _now()
    };
    live[key] = state;
    _schedule(state, LIFETIME_MS);

    el.addEventListener("mouseenter", function () { _pause(state); });
    el.addEventListener("mouseleave", function () { _resume(state); });
    el.addEventListener("focusin", function () { _pause(state); });
    el.addEventListener("focusout", function () { _resume(state); });
  }

  // Expose globally
  window.showToast = showToast;
})();
