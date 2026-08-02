/**
 * F-102（design audit 2026-08-02）：session 過期後 /admin/* 回 401，
 * SPA 原本靜默漏過——使用者看到「頁面資料壞掉」而不是登入頁。
 * admin-reconnect-banner 的 fetch 包裝現在把 401 視為 session 死亡：
 * one-shot location.reload() 讓 server 端出登入頁。
 *
 * 這裡直接載入 server/static/js/admin-reconnect-banner.js（與
 * admin-layout-compact.test.js 同一套 readFileSync + eval 慣例），
 * 餵假 401 Response 穿過包裝後的 window.fetch 驗證分支行為。
 * 「401 真的會流經這個包裝」由 server 行為保證（未帶 session 的
 * GET /admin/bootstrap 實測回 401）。
 */
const fs = require("fs");
const path = require("path");

const SRC = fs.readFileSync(
  path.join(__dirname, "..", "..", "server", "static", "js", "admin-reconnect-banner.js"),
  "utf8"
);

describe("admin-reconnect-banner — F-102 session 過期導回登入", () => {
  let reloadSpy;

  beforeEach(() => {
    jest.resetModules();
    document.body.className = "admin-body";
    window.DANMU_CONFIG = { session: { logged_in: true } };
    // jsdom 把 location / location.reload 全鎖 non-configurable，
    // spy 不進去——改在 eval 前把 reload 呼叫改接測試樁（boot 內）。
    reloadSpy = jest.fn();
    window.__f102reload = reloadSpy;
  });

  function boot(fetchImpl) {
    const mock = jest.fn(fetchImpl);
    window.fetch = mock;
    window.csrfFetch = jest.fn(fetchImpl);
    // 401 分支必須存在且替換必須命中——替換落空就在這裡現形，
    // 不會流到後面的 NOT-called 假綠。
    expect(SRC).toContain("_authExpired = true;");
    const src = SRC.replace("location.reload();", "window.__f102reload();");
    expect(src).not.toBe(SRC);
    // IIFE 掛載：jest 的 jsdom 可能停在 readyState="loading"，
    // 補發 DOMContentLoaded 讓 _attach 執行、包裝 window.fetch。
    eval(src);
    if (document.readyState === "loading") {
      document.dispatchEvent(new Event("DOMContentLoaded"));
    }
    // 掛載失敗（fetch 沒被換成包裝版）要立刻現形，不讓 NOT-called 假綠
    expect(window.fetch).not.toBe(mock);
  }

  test("第一個 401 觸發 location.reload，且只觸發一次", async () => {
    boot(() => Promise.resolve({ ok: false, status: 401 }));
    await window.fetch("/admin/bootstrap");
    await window.fetch("/admin/metrics"); // 第二個 401 不得重複 reload
    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });

  test("2xx 正常通過，不觸發 reload", async () => {
    boot(() => Promise.resolve({ ok: true, status: 200 }));
    await window.fetch("/admin/bootstrap");
    expect(reloadSpy).not.toHaveBeenCalled();
  });

  test("5xx 走既有 reconnect 計數，不觸發 reload", async () => {
    boot(() => Promise.resolve({ ok: false, status: 502 }));
    await window.fetch("/admin/bootstrap");
    expect(reloadSpy).not.toHaveBeenCalled();
  });

  test("非 /admin/* 路徑不被包裝追蹤（401 也不 reload）", async () => {
    boot(() => Promise.resolve({ ok: false, status: 401 }));
    await window.fetch("/overlay/state");
    expect(reloadSpy).not.toHaveBeenCalled();
  });
});
