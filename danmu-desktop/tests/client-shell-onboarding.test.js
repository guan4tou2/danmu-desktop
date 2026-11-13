/**
 * 首次啟動精靈的鍵盤可及性：aria-modal 對話框顯示時，底下的主畫面要 inert；
 * 關掉（稍後設定）後要還原，並把焦點交回主卡的 overlay 按鈕。
 *
 * 回歸：精靈顯示那一刻曾用單元素的 `$()` 呼叫 `.forEach`，丟出 TypeError，
 * 讓 client-shell.js 的其餘初始化（含「稍後設定」的事件接線）整段沒跑，
 * 精靈永遠蓋在畫面上。
 */
const { test, expect, beforeEach } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

const SHELL_SRC = fs.readFileSync(path.join(__dirname, "..", "client-shell.js"), "utf8");

function mountShell() {
  document.body.innerHTML = `
    <div class="client-titlebar"></div>
    <div class="client-shell">
      <div data-client-main-card>
        <button type="button" data-client-overlay-button>start</button>
      </div>
    </div>
    <div id="client-onboarding" role="dialog" aria-modal="true" hidden>
      <input id="client-onboarding-input" />
      <button type="button" data-onboarding-continue>go</button>
      <button type="button" data-onboarding-skip>skip</button>
    </div>`;
  // eslint-disable-next-line no-eval
  window.eval(SHELL_SRC);
}

beforeEach(() => {
  localStorage.clear();
});

test("onboarding opens with the underlying shell inert and does not throw", () => {
  expect(() => mountShell()).not.toThrow();
  expect(document.getElementById("client-onboarding").hidden).toBe(false);
  document
    .querySelectorAll(".client-shell, .client-titlebar")
    .forEach((el) => expect(el.inert).toBe(true));
});

test("skipping onboarding restores the shell and focuses the overlay button", () => {
  mountShell();
  document.querySelector("[data-onboarding-skip]").click();
  expect(document.getElementById("client-onboarding").hidden).toBe(true);
  document
    .querySelectorAll(".client-shell, .client-titlebar")
    .forEach((el) => expect(el.inert).toBe(false));
  expect(document.activeElement).toBe(document.querySelector("[data-client-overlay-button]"));
  expect(localStorage.getItem("danmu_onboarded")).toBe("1");
});

test("a saved server skips onboarding and leaves the shell interactive", () => {
  localStorage.setItem("host", "danmu.example.com");
  mountShell();
  expect(document.getElementById("client-onboarding").hidden).toBe(true);
  document
    .querySelectorAll(".client-shell, .client-titlebar")
    .forEach((el) => expect(el.inert).not.toBe(true));
});
