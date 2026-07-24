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

describe("ConnTest state machine", () => {
  test("initial state is idle", () => {
    const ct = createConnTest({ api: { testConnection: jest.fn() } });
    expect(ct.getState()).toBe("idle");
    expect(ct.getChipLabel()).toBe("LAST TEST · —");
  });

  test("start() transitions idle → testing → ok with latency in chip", async () => {
    const { api, resolve } = makeApiMock({ ok: true, latencyMs: 23 });
    const ct = createConnTest({ api });
    const states = [];
    ct.onChange(() => states.push(ct.getState()));

    const promise = ct.start({ host: "danmu.local", port: 443 });
    expect(ct.getState()).toBe("testing");
    expect(ct.getChipLabel()).toBe("⟳ 測試中…");

    resolve();
    await promise;
    expect(ct.getState()).toBe("ok");
    expect(ct.getChipLabel()).toMatch(/^✓ \d{2}:\d{2}:\d{2} · 23ms$/);
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
    expect(ct.getChipLabel()).toMatch(/^✗ \d{2}:\d{2}:\d{2} · 1008 Unauthorized$/);
  });

  test("error code map covers documented vocabulary", async () => {
    const cases = [
      { code: "unauthorized", label: "1008 Unauthorized" },
      { code: "connection-refused", label: "Connection refused" },
      { code: "dns-failure", label: "DNS failure" },
      { code: "timeout", label: "Timeout" },
      { code: "tls-error", label: "TLS error" },
      { code: "unknown", label: "Connection failed" },
      { code: "invalid-input", label: "Invalid input" },
    ];
    for (const { code, label } of cases) {
      const { api, resolve } = makeApiMock({ ok: false, error: code });
      const ct = createConnTest({ api });
      const p = ct.start({ host: "danmu.local", port: 443 });
      resolve();
      await p;
      expect(ct.getChipLabel()).toMatch(new RegExp(`^✗ \\d{2}:\\d{2}:\\d{2} · ${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    }
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
