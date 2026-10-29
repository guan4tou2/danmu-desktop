const loadScript = require("./helpers/load-script");

// 2026-10-29：AdminModeration 是審核操作的**唯一**實作層。
// 這條測試釘住它的契約——特別是「同一個操作只有一份確認文案與一支 API」，
// 這正是 Dashboard 假審核（把 fp: 餵給文字關鍵字黑名單）那顆地雷的教訓。
describe("AdminModeration shared actions", () => {
  let calls;
  let toasts;
  let confirmResult;

  beforeEach(() => {
    calls = [];
    toasts = [];
    confirmResult = true;

    window.ServerI18n = {
      t: (key, params) => {
        // blockConfirm 的插值由呼叫端 replace —— stub 要回傳帶佔位符的模板，
        // 才驗得到「display 有截斷、不含完整指紋」。
        if (key === "blockConfirm") return "{label}|{display}";
        return key + (params ? ":" + JSON.stringify(params) : "");
      },
    };
    window.showToast = (msg, ok) => toasts.push({ msg, ok });
    window.csrfFetch = jest.fn(async (url, opts) => {
      calls.push({ url, body: opts && opts.body ? JSON.parse(opts.body) : null });
      return { ok: true, json: async () => ({ message: "server says" }) };
    });
    window.HudConfirm = { open: jest.fn(async () => confirmResult) };

    loadScript("admin-moderation-actions.js");
  });

  afterEach(() => {
    delete window.AdminModeration;
    delete window.HudConfirm;
  });

  const lastCall = () => calls[calls.length - 1];

  test("blockKeyword confirms, posts to /admin/live/block, toasts the localized fallback", async () => {
    const ok = await window.AdminModeration.blockKeyword("髒話");

    expect(ok).toBe(true);
    expect(window.HudConfirm.open).toHaveBeenCalledTimes(1);
    expect(lastCall().url).toBe("/admin/live/block");
    expect(lastCall().body).toEqual({ type: "keyword", value: "髒話" });
    // 後端回傳的 message 是硬編英文，不採用——成功提示必須是本地化文案。
    expect(toasts[0].ok).toBe(true);
    expect(toasts[0].msg).toContain("blockFallback");
    expect(toasts[0].msg).not.toContain("server says");
  });

  test("blockFingerprint targets the fingerprint type and truncates the display value", async () => {
    const fp = "abcdefghijklmnop";
    const ok = await window.AdminModeration.blockFingerprint(fp);

    expect(ok).toBe(true);
    expect(lastCall().body).toEqual({ type: "fingerprint", value: fp });
    expect(window.HudConfirm.open.mock.calls[0][0].bodyText).toContain("abcdefgh");
    expect(window.HudConfirm.open.mock.calls[0][0].bodyText).not.toContain(fp);
  });

  test("declining the confirm skips the API call entirely", async () => {
    confirmResult = false;
    const ok = await window.AdminModeration.blockKeyword("不用了");

    expect(ok).toBe(false);
    expect(calls).toHaveLength(0);
    expect(toasts).toHaveLength(0);
  });

  test("a failed request returns false and toasts failure", async () => {
    window.csrfFetch = jest.fn(async () => ({ ok: false, status: 500 }));
    const ok = await window.AdminModeration.blockKeyword("x");

    expect(ok).toBe(false);
    expect(toasts[0].ok).toBe(false);
    expect(toasts[0].msg).toBe("blockFailed");
  });

  test("banFingerprint routes timed bans to /admin/modbans with duration", async () => {
    const result = await window.AdminModeration.banFingerprint("fp123", 3600, "洗頻");

    expect(result.ok).toBe(true);
    expect(lastCall().url).toBe("/admin/modbans");
    expect(lastCall().body).toEqual({
      target_kind: "fingerprint",
      target: "fp123",
      duration_s: 3600,
      reason: "洗頻",
      kind: "ban",
    });
  });

  test("recall posts the message id and is a no-op without one", async () => {
    const result = await window.AdminModeration.recall("abc123");
    expect(result.ok).toBe(true);
    expect(lastCall().url).toBe("/admin/overlay/recall");
    expect(lastCall().body).toEqual({ message_id: "abc123" });

    const bad = await window.AdminModeration.recall("");
    expect(bad.ok).toBe(false);
    expect(calls).toHaveLength(1);
  });

  test("low-level callBlock passes reason through and never confirms", async () => {
    const result = await window.AdminModeration.callBlock("fingerprint", "fp999", "reason text");

    expect(result.ok).toBe(true);
    expect(window.HudConfirm.open).not.toHaveBeenCalled();
    expect(lastCall().body).toEqual({ type: "fingerprint", value: "fp999", reason: "reason text" });
  });
});
