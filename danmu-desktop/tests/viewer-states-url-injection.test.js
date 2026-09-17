/**
 * 觀眾頁的示範狀態卡不能被網址參數注入 HTML。
 *
 * 2026-09-17（CodeQL #82）。`viewer-states.js` 檔尾會讀 `?state=banned&fp=…`
 * 自動顯示示範卡，而 `_renderBanned` 把 `fp` 組成識別碼後**沒有跳脫**就塞進
 * innerHTML（同一張卡的 reason / duration 有跳，唯獨它漏了）。於是任何人
 * 都能做一條 `https://<正式站>/?state=banned&fp=fp:<…>` 的連結。
 *
 * 在正式站實測：注入的元素與 inline style 都生效；`onerror` 被 CSP 的
 * `script-src-attr 'none'` 擋下所以跑不了 JS——但在正牌網域上蓋一層假畫面
 * 已經足夠拿來釣魚。**CSP 擋的是執行，不是注入。**
 *
 * 用真的原始碼、真的走 URL 參數那條路徑，而不是直接呼叫內部函式——
 * 漏洞就是從網址進來的。
 */
const { test, expect, beforeEach } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const SRC = fs.readFileSync(
  path.join(__dirname, "..", "..", "server", "static", "js", "viewer-states.js"),
  "utf8"
);

const PAYLOAD = 'fp:<b id="injected">x</b><img id="injected-img" src="x">';

function bootWithQuery(query) {
  window.history.replaceState({}, "", "/" + query);
  // eslint-disable-next-line no-new-func
  new Function(SRC)();
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

beforeEach(() => {
  document.body.innerHTML = "";
  delete document.body.dataset.viewerState;
});

test("?state=banned&fp=… 不會長出注入的元素", () => {
  bootWithQuery("?state=banned&fp=" + encodeURIComponent(PAYLOAD));
  expect(document.body.dataset.viewerState).toBe("banned"); // 卡片確實有顯示
  expect(document.getElementById("injected")).toBeNull();
  expect(document.getElementById("injected-img")).toBeNull();
  // 字面上還看得到（被跳脫成文字），不是被吃掉
  expect(document.body.textContent).toContain('<b id="injected">');
});

test("?state=thankyou&fp=… 的記錄編號列也不會被注入", () => {
  // thankyou 只取 fp 前 8 字，塞不下完整標籤，但不該靠長度當防線。
  bootWithQuery("?state=thankyou&fp=" + encodeURIComponent("<b>x</b>"));
  expect(document.body.dataset.viewerState).toBe("thankyou");
  expect(document.querySelector(".viewer-state-trace b")).toBeNull();
});

test("reason / duration 本來就有跳脫，維持住", () => {
  bootWithQuery(
    "?state=banned&reason=" + encodeURIComponent('<i id="r">r</i>') +
      "&duration=" + encodeURIComponent('<i id="d">d</i>')
  );
  expect(document.getElementById("r")).toBeNull();
  expect(document.getElementById("d")).toBeNull();
});
