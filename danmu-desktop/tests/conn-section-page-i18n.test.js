/**
 * 連線設定區要用「頁面上那份」i18n，不是 webpack 打包進來的副本。
 *
 * 2026-09-17。index.html 以 `<script src="i18n.js">` 載入全域 i18n，
 * renderer.js 對它呼叫 `loadLanguage()`；`conn-section-wire.js` 卻
 * `require("../i18n")`——在 webpack bundle 裡那是**第二份獨立副本**，語言永遠
 * 停在預設 `en`。於是中文介面上「測試連線」按鈕、測試中、錯誤標籤、未設定提示
 * 全是英文。既有的 conn-section-wire 測試抓不到：jest 裡只有一份模組，而且
 * 測試會手動設 `currentLang`。
 *
 * 這支重現 bundle 的情境：require 的那份停在 en、另有一份全域 i18n 是中文，
 * 斷言畫面上出現的是全域那份的字。conn-test 不 mock，走真的標籤路徑。
 */
const { test, expect, beforeEach, afterEach } = require("@jest/globals");

jest.mock("../renderer-modules/settings", () => ({
  loadSettings: () => ({ host: "", port: "" }),
  saveSettings: () => {},
}));

function buildDOM() {
  document.body.innerHTML = `
    <input id="conn-server-input" value="" />
    <input id="host-input" value="" hidden />
    <input id="port-input" value="" hidden />
    <input id="ws-token-input" value="" />
    <div data-client-server-host></div>
    <div data-conn-canonical-preview></div>
    <button data-conn-test-btn type="button"><span data-i18n="connTestBtn">x</span></button>
    <div data-conn-test-chip></div>
    <div data-conn-display></div>
    <div data-conn-edit hidden></div>
    <div data-conn-last-addr></div>
    <div data-conn-last-when data-empty></div>
    <div data-conn-auth-status></div>
  `;
}

beforeEach(() => {
  jest.resetModules();
  buildDOM();
});

afterEach(() => {
  delete global.i18n;
});

test("uses the page-global i18n (already loaded as zh), not the bundled copy stuck on en", async () => {
  const bundled = require("../i18n");
  bundled.currentLang = "en"; // bundle 裡那份從沒被 loadLanguage 過

  const pageI18n = require("../i18n"); // 同一個模組快取，做一份獨立物件模擬頁面那份
  global.i18n = { ...pageI18n, currentLang: "zh" };
  global.i18n.t = pageI18n.t.bind(global.i18n);

  const { initConnSection } = require("../renderer-modules/conn-section-wire");
  const api = { testConnection: jest.fn(() => Promise.resolve({ ok: false, error: "timeout" })) };
  initConnSection({ api });

  const zh = require("../locales/zh/translation.json");
  const btnLabel = document.querySelector("[data-i18n='connTestBtn']");
  expect(btnLabel.textContent).toBe(zh.connTestBtn);

  document.getElementById("conn-server-input").value = "danmu.example.com:443";
  document.querySelector("[data-conn-test-btn]").click();
  const chip = document.querySelector("[data-conn-test-chip]");
  expect(chip.textContent).toBe(zh.connTesting);

  await new Promise((r) => setTimeout(r, 0));
  expect(chip.dataset.state).toBe("fail");
  expect(chip.textContent).toBe(zh.connErrTimeout);
  expect(chip.textContent).not.toMatch(/[A-Za-z]/);
});

test("falls back to the required module when there is no page global (plain jest)", () => {
  const bundled = require("../i18n");
  bundled.currentLang = "zh";
  const { initConnSection } = require("../renderer-modules/conn-section-wire");
  initConnSection({ api: { testConnection: jest.fn(() => new Promise(() => {})) } });
  const zh = require("../locales/zh/translation.json");
  expect(document.querySelector("[data-i18n='connTestBtn']").textContent).toBe(zh.connTestBtn);
});
