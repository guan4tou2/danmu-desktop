const loadScript = require("./helpers/load-script");

// 審核 › 發送上限（admin-ratelimit.js）。
// 釘住：畫面上的數字來自伺服器；一張表單管多個對象，換對象時數值跟著換；
// 開頁時的設定回應晚到不會蓋掉剛存的值；環境變數帶來的額外時間窗選項只屬於
// 正在用它的那個對象。
describe("send limits page", () => {
  let scopes;      // 伺服器上目前生效的設定（mock）
  let posts;       // csrfFetch 收到的寫入請求
  let configGate;  // 測試可以把 GET /admin/ratelimit/config 的回應卡住
  let applyReply;  // 測試可以替換 /apply 的回應欄位

  const flush = async () => {
    for (let i = 0; i < 10; i++) await new Promise((r) => setTimeout(r, 0));
  };
  const scope = (limit, window, extra) =>
    Object.assign(
      { limit, window, default_limit: limit, default_window: window, saved: false, min: 1, max: 1000 },
      extra || {},
    );
  const json = (data) => ({ ok: true, status: 200, json: async () => data, clone() { return this; } });

  function mount() {
    document.body.innerHTML = '<div id="app-container"><div id="settings-grid"></div></div>';
    document.dispatchEvent(new Event("admin-panel-rendered"));
    return document.getElementById("sec-ratelimit");
  }
  const form = (section, id) => section.querySelector(`[data-rl-form="${id}"]`);
  const els = (f) => ({
    target: f.querySelector("[data-rl-target]"),
    limit: f.querySelector("[data-rl-limit]"),
    window: f.querySelector("[data-rl-window]"),
    save: f.querySelector('[data-rl-action="save"]'),
  });
  function pick(select, value) {
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }
  function type(input, value) {
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  beforeAll(() => {
    window.ServerI18n = { t: (key) => key };
    window.showToast = jest.fn();
    window.fetch = jest.fn(async (url) => {
      if (url === "/admin/ratelimit/config") {
        // 伺服器在收到請求的當下就決定了內容；回應可以晚到。
        const snapshot = JSON.parse(JSON.stringify(scopes));
        await configGate;
        return json({ scopes: snapshot });
      }
      if (url === "/admin/metrics") return json({ rate_limits: {}, recent_violations: [] });
      if (url === "/get_settings") return json({ ViewerFireCooldownSec: [true, 3] });
      if (url === "/admin/api/onscreen-limits") return json({ max_onscreen_danmu: 20, overflow_mode: "drop" });
      if (url === "/admin/ratelimit/ip-rules") return json({ allowlist: [], denylist: [] });
      return json({});
    });
    window.csrfFetch = jest.fn(async (url, opts) => {
      const body = opts && opts.body ? JSON.parse(opts.body) : null;
      posts.push({ url, body });
      if (url === "/admin/ratelimit/apply") {
        scopes[body.scope] = Object.assign({}, scopes[body.scope], {
          limit: body.limit,
          window: body.window,
          saved: true,
        });
        return json(Object.assign({ scope: body.scope, limit: body.limit, window: body.window, persisted: true }, applyReply));
      }
      return json({ scopes, persisted: true });
    });
    document.body.innerHTML = '<div id="app-container"><div id="settings-grid"></div></div>';
    loadScript("admin-ratelimit.js");
  });

  beforeEach(() => {
    posts = [];
    applyReply = {};
    configGate = Promise.resolve();
    window.showToast.mockClear();
    scopes = {
      fire: scope(20, 60),
      fire_fingerprint: scope(30, 60),
      fire_global: scope(0, 60, { min: 0, max: 100000 }),
      fire_admin: scope(200, 60, { max: 10000 }),
      api: scope(120, 60, { max: 10000 }),
      admin: scope(300, 60, { min: 60, max: 10000 }),
      login: scope(5, 300),
    };
  });

  test("shows what the server has in effect, for both forms", async () => {
    scopes.fire = scope(7, 30);
    const section = mount();
    await flush();

    const viewer = els(form(section, "viewer"));
    const other = els(form(section, "other"));
    expect([viewer.target.value, viewer.limit.value, viewer.window.value]).toEqual(["fire", "7", "30"]);
    expect([other.target.value, other.limit.value, other.window.value]).toEqual(["api", "120", "60"]);
    // 沒有對應後端的欄位與已經不需要的按鈕不在畫面上。
    expect(section.querySelector("[data-rl-lockout]")).toBeNull();
    expect(section.querySelector('[data-rl-action="export"]')).toBeNull();
  });

  test("changing the target loads that target's values and saves under it", async () => {
    const section = mount();
    await flush();
    const viewer = els(form(section, "viewer"));

    pick(viewer.target, "fire_fingerprint");
    expect([viewer.limit.value, viewer.window.value]).toEqual(["30", "60"]);

    type(viewer.limit, "12");
    viewer.save.click();
    await flush();

    expect(posts).toEqual([
      { url: "/admin/ratelimit/apply", body: { scope: "fire_fingerprint", limit: 12, window: 60 } },
    ]);
    expect(window.showToast).toHaveBeenLastCalledWith("ratelimitPaceSavedToast", true);
  });

  test("a value outside the server's range is refused before it is sent", async () => {
    const section = mount();
    await flush();
    const other = els(form(section, "other"));

    pick(other.target, "admin");
    type(other.limit, "1");
    other.save.click();
    await flush();

    expect(posts).toEqual([]);
    expect(window.showToast).toHaveBeenLastCalledWith("rlOutOfRange", false);
  });

  test("0 switches the room-wide cap off, so its window is disabled", async () => {
    const section = mount();
    await flush();
    const viewer = els(form(section, "viewer"));

    pick(viewer.target, "fire_global");
    expect(viewer.limit.value).toBe("0");
    expect(viewer.window.disabled).toBe(true);

    type(viewer.limit, "500");
    expect(viewer.window.disabled).toBe(false);
  });

  test("a config response that arrives after a save neither undoes it nor leaves other targets empty", async () => {
    let release;
    configGate = new Promise((resolve) => { release = resolve; });
    const section = mount();
    await flush();
    const viewer = els(form(section, "viewer"));

    // 設定還沒回來，使用者已經存了一個值。
    type(viewer.limit, "9");
    viewer.save.click();
    await flush();
    expect(scopes.fire.limit).toBe(9);

    release(); // 開頁時那份回應現在才到，裡面的 fire 還是 20
    await flush();

    expect(viewer.limit.value).toBe("9");
    // 其餘對象的值也要有——過時的回應被丟掉之後得重抓一份。
    pick(viewer.target, "fire_fingerprint");
    expect([viewer.limit.value, viewer.window.value]).toEqual(["30", "60"]);
    pick(viewer.target, "fire");
    expect(viewer.limit.value).toBe("9");
  });

  test("a window from the environment is offered only to the target that runs with it", async () => {
    scopes.fire = scope(20, 45); // FIRE_RATE_WINDOW=45：不在選單上的秒數
    const section = mount();
    await flush();
    const viewer = els(form(section, "viewer"));
    const offered = () => Array.from(viewer.window.options).map((o) => o.value);

    expect(viewer.window.value).toBe("45");
    expect(offered()).toContain("45");

    pick(viewer.target, "fire_fingerprint");
    expect(offered()).not.toContain("45"); // 這個對象選 45 會被伺服器拒絕

    pick(viewer.target, "fire");
    expect(viewer.window.value).toBe("45");

    // 存成選單上的時間窗之後，45 也不再是這個對象可以選的值。
    pick(viewer.window, "60");
    viewer.save.click();
    await flush();
    expect(offered()).not.toContain("45");
  });

  test("a save that did not reach the disk is not reported as saved", async () => {
    applyReply = { persisted: false };
    const section = mount();
    await flush();
    const viewer = els(form(section, "viewer"));

    type(viewer.limit, "8");
    viewer.save.click();
    await flush();

    expect(window.showToast).toHaveBeenLastCalledWith("rlNotPersisted", false);
  });
});
