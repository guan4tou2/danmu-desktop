/**
 * Admin · 登入過期對話框（設計稿 15 · EX1）
 *
 * 原本 401 的處理是 `location.reload()`——server 端出登入頁，使用者回到一個
 * 空白的登入畫面，剛才在哪一頁、在做什麼全部消失。稿上的做法是**對話框而不
 * 是跳回登入頁，保留當前路由**：
 *
 *   登入已過期
 *   閒置超過 8 小時。大螢幕與觀眾不受影響，重新輸入密碼即可回到剛才的頁面。
 *   [密碼]  [重新登入]
 *
 * 「大螢幕與觀眾不受影響」是刻意寫的——主持人在台上看到「登入過期」的第一個
 * 念頭是「完了大螢幕是不是掛了」，這句話直接把它擋掉。
 *
 * 登入成功後不 reload：hash 路由還在原地，未存的輸入也還在。server 的 /login
 * 在 session.clear() 後會發一顆新的 CSRF token，所以這裡要把 meta 標籤換掉
 * （admin.js 的 csrfFetch 每次都重讀 meta）。
 */
(function () {
  "use strict";

  var ROOT_ID = "admin-session-expired-root";
  var _open = false;
  var _lastFocus = null;

  function t(key, fallback) {
    try {
      var v = window.ServerI18n && ServerI18n.t(key);
      return v && v !== key ? v : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function close() {
    var el = document.getElementById(ROOT_ID);
    if (el) el.remove();
    document.body.classList.remove("is-session-expired");
    _open = false;
    if (_lastFocus && _lastFocus.focus) {
      try { _lastFocus.focus(); } catch (e) {}
    }
    _lastFocus = null;
  }

  function _onKeydown(e) {
    // 刻意不接 Esc：這個對話框沒有「稍後再說」的出口，關掉它並不會讓
    // 後台恢復可用，只會讓使用者對著一個壞掉的頁面戳。Tab 則鎖在框內。
    if (e.key !== "Tab") return;
    var root = document.getElementById(ROOT_ID);
    if (!root) return;
    var focusable = root.querySelectorAll("input, button");
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open() {
    if (_open || document.getElementById(ROOT_ID)) return;
    _open = true;
    _lastFocus = document.activeElement;
    document.body.classList.add("is-session-expired");

    var root = document.createElement("div");
    root.id = ROOT_ID;
    root.className = "admin-sx";
    root.setAttribute("role", "alertdialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "admin-sx-title");
    root.setAttribute("aria-describedby", "admin-sx-body");
    root.innerHTML =
      '<div class="admin-sx__backdrop"></div>' +
      '<div class="admin-sx__panel">' +
      '<h2 class="admin-sx__title" id="admin-sx-title" data-i18n="sxTitle">' +
      t("sxTitle", "登入已過期") +
      "</h2>" +
      '<p class="admin-sx__body" id="admin-sx-body" data-i18n="sxBody">' +
      t("sxBody", "閒置超過 8 小時。大螢幕與觀眾不受影響，重新輸入密碼即可回到剛才的頁面。") +
      "</p>" +
      '<form class="admin-sx__form" data-sx-form>' +
      '<label class="admin-sx__label" for="admin-sx-password" data-i18n="sxPasswordLabel">' +
      t("sxPasswordLabel", "管理密碼") +
      "</label>" +
      '<input class="admin-sx__input" type="password" id="admin-sx-password" ' +
      'name="password" autocomplete="current-password" required />' +
      '<p class="admin-sx__error" data-sx-error role="alert" hidden></p>' +
      '<button type="submit" class="admin-sx__submit" data-i18n="sxSubmit">' +
      t("sxSubmit", "重新登入") +
      "</button>" +
      "</form>" +
      "</div>";
    document.body.appendChild(root);
    document.addEventListener("keydown", _onKeydown, true);

    var input = root.querySelector("#admin-sx-password");
    setTimeout(function () {
      try { input.focus(); } catch (e) {}
    }, 30);

    root.querySelector("[data-sx-form]").addEventListener("submit", function (e) {
      e.preventDefault();
      _submit(root, input);
    });
  }

  function _submit(root, input) {
    var err = root.querySelector("[data-sx-error]");
    var btn = root.querySelector(".admin-sx__submit");
    err.hidden = true;
    btn.disabled = true;

    var body = new URLSearchParams();
    body.set("password", input.value);

    // 用原始 fetch，不要走 window.fetch——admin-reconnect-banner 把它包過，
    // 這裡的 401 是「密碼錯」而不是「session 過期」，讓它去觸發對話框會遞迴。
    var raw = window.__adminRawFetch || window.fetch;
    raw
      .call(window, "/login", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "fetch",
          Accept: "application/json",
        },
        body: body.toString(),
      })
      .then(function (r) {
        return r.json().then(
          function (data) { return { status: r.status, data: data }; },
          function () { return { status: r.status, data: {} }; }
        );
      })
      .then(function (res) {
        btn.disabled = false;
        if (res.status === 200 && res.data && res.data.ok) {
          var meta = document.querySelector('meta[name="csrf-token"]');
          if (meta && res.data.csrf_token) meta.content = res.data.csrf_token;
          document.removeEventListener("keydown", _onKeydown, true);
          close();
          document.dispatchEvent(new CustomEvent("admin:session-restored"));
          if (window.showToast) window.showToast(t("sxToastBack", "已重新登入"), true);
          return;
        }
        if (res.status === 429) {
          err.textContent = t("sxLockedOut", "嘗試太多次，請稍等一下再試。");
        } else {
          err.textContent = t("sxWrongPassword", "密碼不正確，再試一次。");
        }
        err.hidden = false;
        input.select();
      })
      .catch(function () {
        btn.disabled = false;
        err.textContent = t("sxNetworkError", "連不上伺服器，請確認網路後再試。");
        err.hidden = false;
      });
  }

  window.AdminSessionExpired = {
    open: open,
    close: close,
    isOpen: function () { return _open; },
  };
})();
