const loadScript = require("./helpers/load-script");

// 審核 › 封鎖字：封鎖字、臨時規則、規則庫合成一份清單（admin-filters.js）。
// 釘住：一個新增入口與它的預設值、三個選項怎麼對到後端欄位、清單與命中紀錄把
// 伺服器回來的字串當文字（不是 HTML）顯示。
describe("block rule list", () => {
  let calls;
  let rules;
  let events;

  const flush = async () => {
    for (let i = 0; i < 6; i++) await new Promise((r) => setTimeout(r, 0));
  };
  const lastPost = (url) => calls.filter((c) => c.url === url).pop();

  beforeAll(() => {
    window.ServerI18n = { t: (key, params) => key + (params ? ":" + JSON.stringify(params) : "") };
    window.showToast = jest.fn();
    window.HudConfirm = { open: jest.fn(async () => true) };
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.csrfFetch = jest.fn(async (url, opts) => {
      calls.push({ url, body: opts && opts.body ? JSON.parse(opts.body) : null });
      if (url === "/admin/filters/list") return { ok: true, json: async () => ({ rules }) };
      return { ok: true, json: async () => ({ rule_id: "new1" }) };
    });
    window.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => ({ events, latest_seq: events.length ? events[0].seq : 0 }),
    }));
    // jsdom 沒有版面：當成每個元素都畫得出來，讓「看得見才輪詢」的命中紀錄跑得起來。
    Element.prototype.getClientRects = () => [{}];

    document.body.innerHTML = '<div id="app-container"><div id="settings-grid"></div></div>';
    loadScript("admin-utils.js");
  });

  beforeEach(async () => {
    calls = [];
    events = [];
    rules = [
      { id: "kw1", type: "keyword", pattern: "legacy", action: "block", priority: 0, enabled: true, lifetime: "permanent" },
      { id: "rx1", type: "regex", pattern: "https?://[^\\s]+", action: "block", priority: 50, enabled: true, lifetime: "session" },
      { id: "w1", type: "word", pattern: "<img src=x onerror=alert(1)>", action: "block", priority: 100, enabled: true, lifetime: "permanent" },
      { id: "w2", type: "word", pattern: "加line", action: "block", priority: 100, enabled: false, lifetime: "timed", expires_at: 4102444800 },
    ];
    document.getElementById("settings-grid").innerHTML = "";
    if (!window.AdminBlockRules) loadScript("admin-filters.js");
    await flush();
    await window.AdminBlockRules.refresh();
  });

  test("one section, one add input, defaults are keyword / block / permanent", async () => {
    expect(document.querySelectorAll("#sec-blacklist")).toHaveLength(1);
    expect(document.querySelectorAll("#blockRuleInput")).toHaveLength(1);
    expect(document.getElementById("blockRuleMatch").value).toBe("keyword");
    expect(document.getElementById("blockRuleAction").value).toBe("block");
    expect(document.getElementById("blockRuleLifetime").value).toBe("permanent");

    const input = document.getElementById("blockRuleInput");
    input.value = "  廣告  ";
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    await flush();
    expect(lastPost("/admin/filters/add").body).toEqual({
      type: "word", pattern: "廣告", action: "block", priority: 0, lifetime: "permanent",
    });
  });

  test("the three options map onto the stored rule", () => {
    const { typeFor, viewOf, lifetimePayload } = window.AdminBlockRules;
    expect(typeFor("keyword", "block")).toBe("word");
    expect(typeFor("keyword", "review")).toBe("keyword");
    expect(typeFor("keyword", "allow")).toBe("keyword");
    expect(typeFor("regex", "replace")).toBe("replace");
    expect(typeFor("regex", "allow")).toBe("regex");
    expect(typeFor("rate_limit", "block")).toBe("rate_limit");
    expect(viewOf({ type: "word" })).toEqual({ match: "keyword", action: "block" });
    expect(viewOf({ type: "replace" })).toEqual({ match: "regex", action: "replace" });
    expect(lifetimePayload("session")).toEqual({ lifetime: "session" });
    expect(lifetimePayload("3600")).toEqual({ lifetime: "timed", duration_sec: 3600 });
    expect(lifetimePayload("keep")).toEqual({ lifetime: "timed" });
  });

  test("actions that can never match are not offered", () => {
    const match = document.getElementById("blockRuleMatch");
    const action = document.getElementById("blockRuleAction");
    match.value = "keyword";
    match.dispatchEvent(new Event("change"));
    expect(action.querySelector('option[value="replace"]').disabled).toBe(true);
    match.value = "rate_limit";
    match.dispatchEvent(new Event("change"));
    expect(action.disabled).toBe(true);
    expect(action.value).toBe("block");
    match.value = "keyword";
    match.dispatchEvent(new Event("change"));
  });

  test("every rule is one row and server strings render as text", () => {
    const rows = document.querySelectorAll("#blockRuleList .admin-block-row");
    expect(Array.from(rows).map((r) => r.dataset.ruleId)).toEqual(["kw1", "rx1", "w1", "w2"]);
    expect(document.querySelector("#blockRuleList img")).toBeNull();
    expect(rows[2].querySelector(".admin-block-row__pattern").textContent).toBe("<img src=x onerror=alert(1)>");
    // 有本場次規則時才出現「清除本場次規則」
    expect(document.getElementById("blockRuleClearSession").hidden).toBe(false);
  });

  test("editing sends an update that goes through the same endpoint shape", async () => {
    document.querySelector('.block-rule-edit[data-rule-id="kw1"]').click();
    expect(document.getElementById("blockRuleInput").value).toBe("legacy");
    document.getElementById("blockRuleLifetime").value = "session";
    document.getElementById("blockRuleSubmit").click();
    await flush();
    const sent = lastPost("/admin/filters/update").body;
    expect(sent.rule_id).toBe("kw1");
    // 關鍵字＋封鎖一律存成封鎖字，編輯舊的 keyword 規則也一樣
    expect(sent.updates).toMatchObject({ type: "word", pattern: "legacy", action: "block", lifetime: "session" });
  });

  test("a quick rule is on when its regex exists and turns on as a session rule", async () => {
    const url = document.querySelector('[data-flt-quick-id="url"]');
    expect(url.classList.contains("is-active")).toBe(true);
    document.querySelector('[data-flt-quick-id="repeat"]').click();
    await flush();
    expect(lastPost("/admin/filters/add").body).toMatchObject({
      type: "regex", action: "review", lifetime: "session",
    });
    expect(lastPost("/admin/filters/add").body.name).toBeUndefined();
  });

  test("match log shows viewer-controlled fields as text and keeps later rows", async () => {
    events = [
      { seq: 2, ts: 1700000000, action: "BLOCK", rule_id: "x", pattern: "<b>p</b>", text_excerpt: "<script>x</script>", source: "<img src=x>" },
      { seq: 1, ts: 1700000001, action: "REVIEW", rule_id: "y", pattern: "second", text_excerpt: "後面那一列", source: "fp_ok" },
    ];
    const fold = document.getElementById("blockRuleLog");
    fold.open = true;
    fold.setAttribute("open", "");
    await flush();

    const log = document.getElementById("filterLiveLog");
    const rows = log.querySelectorAll(".admin-filter-log-row");
    expect(rows).toHaveLength(2);
    expect(log.querySelector("img, script, b")).toBeNull();
    expect(rows[0].textContent).toContain("<img src=x>");
    expect(rows[0].textContent).toContain("<script>x</script>");
    expect(rows[1].textContent).toContain("後面那一列");
  });

  test("clearing session rules is a danger confirm, like deleting one rule", async () => {
    window.HudConfirm.open.mockClear();
    document.getElementById("blockRuleClearSession").click();
    await flush();
    expect(window.HudConfirm.open).toHaveBeenLastCalledWith(expect.objectContaining({ severity: "danger" }));

    document.querySelector('.filter-delete-btn[data-rule-id="kw1"]').click();
    await flush();
    expect(window.HudConfirm.open).toHaveBeenLastCalledWith(expect.objectContaining({ severity: "danger" }));
  });

  test("the empty list uses the shared AdminEmpty card outside the row list", async () => {
    loadScript("admin-empty-states.js");
    rules = [];
    await window.AdminBlockRules.refresh();
    const host = document.querySelector("[data-block-empty]");
    expect(host.hidden).toBe(false);
    expect(host.querySelector(".admin-empty .admin-empty__title").textContent).toBe("blkEmpty");
    expect(document.querySelector("[data-block-list-group]").hidden).toBe(true);
    expect(document.querySelector("#blockRuleList .admin-empty")).toBeNull();
    delete window.AdminEmpty;
  });
});
