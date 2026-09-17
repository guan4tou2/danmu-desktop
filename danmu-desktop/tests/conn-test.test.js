// Tests for the renderer-side ConnTest state machine. The module wraps
// window.API.testConnection in a finite state machine
// (idle → testing → ok | fail) with debounce, subscribe pattern, and
// human-readable chip labels keyed by IPC error codes.

const { test, expect, describe } = require("@jest/globals");
const { createConnTest } = require("../renderer-modules/conn-test");

function makeApiMock(result) {
  let resolveFn;
  const promise = new Promise((r) => {
    resolveFn = r;
  });
  return {
    api: { testConnection: jest.fn(() => promise) },
    resolve: () => resolveFn(result),
  };
}

// 2026-09-08：chip 文字不再帶 ✓ / ✗。成功失敗本來就靠 `data-state` 上色
// （styles.css 的 [data-state="ok"] / [data-state="fail"]），圖示是同一件事
// 講兩次；設計稿 14 也明訂狀態不加圖示符號。
describe("ConnTest state machine", () => {
  test("initial state is idle", () => {
    const ct = createConnTest({ api: { testConnection: jest.fn() } });
    expect(ct.getState()).toBe("idle");
    expect(ct.getChipLabel()).toBe("");
  });

  test("start() transitions idle → testing → ok with latency in chip", async () => {
    const { api, resolve } = makeApiMock({ ok: true, latencyMs: 23 });
    const ct = createConnTest({ api });
    const states = [];
    ct.onChange(() => states.push(ct.getState()));

    const promise = ct.start({ host: "danmu.local", port: 443 });
    expect(ct.getState()).toBe("testing");
    expect(ct.getChipLabel()).toBe("Testing…"); // 沒注入 t → 英文後備

    resolve();
    await promise;
    expect(ct.getState()).toBe("ok");
    expect(ct.getChipLabel()).toBe("23ms");
    expect(states).toEqual(["testing", "ok"]);
  });

  test("start() transitions idle → testing → fail with mapped error label", async () => {
    const { api, resolve } = makeApiMock({ ok: false, error: "unauthorized" });
    const ct = createConnTest({ api });

    const promise = ct.start({ host: "danmu.local", port: 443, token: "wrong" });
    expect(ct.getState()).toBe("testing");

    resolve();
    await promise;
    expect(ct.getState()).toBe("fail");
    expect(ct.getChipLabel()).toBe("Wrong connection password");
  });

  // 2026-09-17：標籤改走 i18n。沒注入 t 時的後備是英文（句首大寫其餘小寫，
  // 設計稿 14），不再出現 `1008` 這種 WebSocket close code。
  test("error code map covers documented vocabulary (fallback, no t)", async () => {
    const cases = [
      { code: "unauthorized", label: "Wrong connection password" },
      { code: "connection-refused", label: "Server refused the connection" },
      { code: "dns-failure", label: "Address not found" },
      { code: "timeout", label: "Timed out" },
      { code: "tls-error", label: "Secure connection failed" },
      { code: "unknown", label: "Connection failed" },
      { code: "invalid-input", label: "Invalid address" },
      { code: "something-new", label: "Connection failed" }, // 未知碼 → unknown
    ];
    for (const { code, label } of cases) {
      const { api, resolve } = makeApiMock({ ok: false, error: code });
      const ct = createConnTest({ api });
      const p = ct.start({ host: "danmu.local", port: 443 });
      resolve();
      await p;
      expect(ct.getChipLabel()).toBe(label);
    }
  });

  test("labels come from the injected t() — every code maps to a real zh key", async () => {
    const zh = require("../locales/zh/translation.json");
    const t = (k) => (k in zh ? zh[k] : k);
    const codes = ["unauthorized", "connection-refused", "dns-failure", "timeout",
      "tls-error", "unknown", "invalid-input"];
    for (const code of codes) {
      const { api, resolve } = makeApiMock({ ok: false, error: code });
      const ct = createConnTest({ api, t });
      const p = ct.start({ host: "danmu.local", port: 443 });
      expect(ct.getChipLabel()).toBe("測試中…");
      resolve();
      await p;
      const label = ct.getChipLabel();
      // 中文介面上不該再出現任何拉丁字母（原本整排都是英文）
      expect(label).not.toMatch(/[A-Za-z]/);
      expect(label.length).toBeGreaterThan(0);
    }
  });

  test("label is translated on read, so a live language switch takes effect", async () => {
    const zh = require("../locales/zh/translation.json");
    const ja = require("../locales/ja/translation.json");
    let dict = zh;
    const t = (k) => (k in dict ? dict[k] : k);
    const { api, resolve } = makeApiMock({ ok: false, error: "timeout" });
    const ct = createConnTest({ api, t });
    const p = ct.start({ host: "danmu.local", port: 443 });
    resolve();
    await p;
    expect(ct.getChipLabel()).toBe(zh.connErrTimeout);
    dict = ja;
    expect(ct.getChipLabel()).toBe(ja.connErrTimeout);
  });

  test("calling start() while testing is a no-op (debounce)", async () => {
    const { api, resolve } = makeApiMock({ ok: true, latencyMs: 10 });
    const ct = createConnTest({ api });

    const p1 = ct.start({ host: "danmu.local", port: 443 });
    expect(ct.getState()).toBe("testing");
    const p2 = ct.start({ host: "other.host", port: 443 });
    expect(api.testConnection).toHaveBeenCalledTimes(1);
    expect(p2).toBe(p1); // debounced call returns the in-flight promise

    resolve();
    await p1;
    expect(ct.getState()).toBe("ok");
  });

  test("onChange unsubscribe removes the listener", () => {
    const ct = createConnTest({ api: { testConnection: jest.fn() } });
    const calls = [];
    const unsubscribe = ct.onChange(() => calls.push("a"));
    ct.onChange(() => calls.push("b"));

    ct._fireChange(); // direct fire for unit test
    expect(calls).toEqual(["a", "b"]);

    unsubscribe();
    ct._fireChange();
    expect(calls).toEqual(["a", "b", "b"]);
  });

  test("start() with no api still settles state without throwing", async () => {
    // Defensive: window.API may not be ready at boot. Treat as 'unknown'.
    const ct = createConnTest({ api: null });
    const result = await ct.start({ host: "danmu.local", port: 443 });
    expect(ct.getState()).toBe("fail");
    expect(result.ok).toBe(false);
  });
});
