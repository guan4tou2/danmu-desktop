const loadScript = require("./helpers/load-script");

// 審核 › 封鎖字：封鎖字、臨時規則、規則庫合成一份清單（admin-filters.js）。
// 釘住：一個新增入口與它的預設值、三個選項怎麼對到後端欄位、清單與命中紀錄把
// 伺服器回來的字串當文字（不是 HTML）顯示。
describe("block rule list", () => {
  let calls;
  let rules;
  let events;
  let respond; // 測試可以替某個端點換一個回應（回 undefined 就用預設）
  let sessionLive;

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
      const body = opts && opts.body ? JSON.parse(opts.body) : null;
      calls.push({ url, body });
      const custom = respond && respond(url, body);
      if (custom) return custom;
      if (url === "/admin/filters/list") {
        return { ok: true, json: async () => ({ rules, session_live: sessionLive }) };
      }
      return { ok: true, status: 200, json: async () => ({ rule_id: "new1" }) };
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
    respond = null;
    sessionLive = undefined;
    window.showToast.mockClear();
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

  // ── 審查退回的三個前端問題（2026-11-14） ──────────────────────

  const rerender = async () => {
    // admin.js 的 renderControlPanel() 會重建整個 settings-grid；MutationObserver 重新 init()。
    document.getElementById("settings-grid").innerHTML = "";
    await flush();
    expect(document.querySelectorAll("#sec-blacklist")).toHaveLength(1);
    await window.AdminBlockRules.refresh();
  };
  const pressEnter = (value) => {
    const input = document.getElementById("blockRuleInput");
    if (value !== undefined) input.value = value;
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
  };

  test("a full re-render mid-edit drops edit mode, so the next Enter adds instead of overwriting", async () => {
    document.querySelector('[data-scope="regex"]').click();
    document.querySelector('.block-rule-edit[data-rule-id="rx1"]').click();
    expect(document.getElementById("blockRuleCancel").hidden).toBe(false);

    await rerender();
    expect(document.getElementById("blockRuleSubmit").textContent).toBe("modAddWordBtn");
    // 分頁 chip 回到「全部」，清單也是全部
    expect(document.querySelectorAll("#blockRuleList .admin-block-row")).toHaveLength(4);

    calls = [];
    pressEnter("brand-new-word");
    await flush();
    expect(calls.filter((c) => c.url === "/admin/filters/update")).toHaveLength(0);
    expect(lastPost("/admin/filters/add").body).toMatchObject({ type: "word", pattern: "brand-new-word" });
  });

  test("an edit whose rule was deleted elsewhere leaves edit mode and refetches", async () => {
    respond = (url) =>
      url === "/admin/filters/update"
        ? { ok: false, status: 404, json: async () => ({ error: "Rule not found" }) }
        : undefined;
    document.querySelector('.block-rule-edit[data-rule-id="kw1"]').click();
    calls = [];
    pressEnter("changed");
    await flush();

    expect(window.showToast).toHaveBeenLastCalledWith("blkErrGone", false);
    expect(calls.filter((c) => c.url === "/admin/filters/list")).toHaveLength(1);
    expect(document.getElementById("blockRuleCancel").hidden).toBe(true);
    expect(document.getElementById("blockRuleInput").value).toBe("");

    respond = null;
    pressEnter("again");
    await flush();
    expect(lastPost("/admin/filters/add").body).toMatchObject({ pattern: "again" });
  });

  test("pressing Enter twice while the first save is in flight sends one request", async () => {
    let release;
    respond = (url) =>
      url === "/admin/filters/add"
        ? new Promise((resolve) => {
            release = () => resolve({ ok: true, status: 200, json: async () => ({ rule_id: "n1" }) });
          })
        : undefined;
    pressEnter("once");
    await flush();
    pressEnter();
    pressEnter();
    await flush();
    expect(calls.filter((c) => c.url === "/admin/filters/add")).toHaveLength(1);
    expect(document.getElementById("blockRuleSubmit").disabled).toBe(true);

    release();
    await flush();
    expect(document.getElementById("blockRuleSubmit").disabled).toBe(false);
    respond = null;
    pressEnter("twice");
    await flush();
    expect(calls.filter((c) => c.url === "/admin/filters/add")).toHaveLength(2);
  });

  test("with no live session, until-session-end is not offered and quick rules are permanent", async () => {
    sessionLive = false;
    await window.AdminBlockRules.refresh();
    const option = document.querySelector('#blockRuleLifetime option[value="session"]');
    expect(option.hidden).toBe(true);
    expect(option.disabled).toBe(true);

    document.querySelector('[data-flt-quick-id="repeat"]').click();
    await flush();
    expect(lastPost("/admin/filters/add").body).toMatchObject({ type: "regex", lifetime: "permanent" });

    sessionLive = true;
    await window.AdminBlockRules.refresh();
    expect(option.hidden).toBe(false);
    expect(option.disabled).toBe(false);
  });

  test("server error codes get their own messages", async () => {
    const codes = {
      regex_timeout: "blkErrTimeout",
      no_session: "blkErrNoSession",
      save_failed: "blkErrNotSaved",
      conflict: "blkErrConflict",
      regex_busy: "blkErrBusy",
    };
    for (const [code, key] of Object.entries(codes)) {
      respond = (url) =>
        url === "/admin/filters/add"
          ? { ok: false, status: code === "save_failed" ? 500 : 400, json: async () => ({ code }) }
          : undefined;
      pressEnter("x-" + code);
      await flush();
      expect(window.showToast).toHaveBeenLastCalledWith(key, false);
    }
  });

  // ── 外部審查（第三輪） ────────────────────────────────────────

  const pending = (url, status = 200) => {
    const gates = [];
    respond = (u, body) => {
      if (u !== url) return undefined;
      return new Promise((resolve) => {
        gates.push({
          body,
          release: () =>
            resolve({ ok: status < 400, status, json: async () => (status < 400 ? { rule_id: "n1" } : {}) }),
        });
      });
    };
    return gates;
  };

  test("regex patterns keep their spaces, keywords are still trimmed", async () => {
    const match = document.getElementById("blockRuleMatch");
    match.value = "regex";
    match.dispatchEvent(new Event("change"));
    pressEnter("foo ");
    await flush();
    expect(lastPost("/admin/filters/add").body).toMatchObject({ type: "regex", pattern: "foo " });

    match.value = "keyword";
    match.dispatchEvent(new Event("change"));
    pressEnter("  詞  ");
    await flush();
    expect(lastPost("/admin/filters/add").body).toMatchObject({ type: "word", pattern: "詞" });
  });

  test("a save that comes back after another edit started leaves the new edit alone", async () => {
    const gates = pending("/admin/filters/add");
    pressEnter("first");
    await flush();
    document.querySelector('.block-rule-edit[data-rule-id="kw1"]').click();
    expect(document.getElementById("blockRuleInput").value).toBe("legacy");

    gates[0].release();
    await flush();
    expect(document.getElementById("blockRuleInput").value).toBe("legacy");
    expect(document.getElementById("blockRuleCancel").hidden).toBe(false);
  });

  test("a quick rule switched off on its row is switched back on, not deleted", async () => {
    rules = rules.map((r) => (r.id === "rx1" ? { ...r, enabled: false } : r));
    await window.AdminBlockRules.refresh();
    const chip = document.querySelector('[data-flt-quick-id="url"]');
    expect(chip.classList.contains("is-active")).toBe(false);
    calls = [];
    chip.click();
    await flush();
    expect(calls.filter((c) => c.url === "/admin/filters/remove")).toHaveLength(0);
    expect(lastPost("/admin/filters/update").body).toEqual({ rule_id: "rx1", updates: { enabled: true } });
  });

  test("toggling one rule quickly sends one update at a time and the last click wins", async () => {
    const gates = pending("/admin/filters/update");
    const flip = (checked) => {
      const cb = document.querySelector('.filter-toggle-cb[data-rule-id="kw1"]');
      cb.checked = checked;
      cb.dispatchEvent(new Event("change", { bubbles: true }));
    };
    flip(false);
    flip(true);
    flip(false);
    await flush();
    expect(gates).toHaveLength(1);
    expect(gates[0].body.updates).toEqual({ enabled: false });

    gates[0].release();
    await flush();
    // 送完的跟最後想要的一樣（false），不再送
    expect(gates).toHaveLength(1);

    flip(true);
    await flush();
    flip(false);
    await flush();
    expect(gates).toHaveLength(2);
    gates[1].release();
    await flush();
    expect(gates).toHaveLength(3);
    expect(gates[2].body.updates).toEqual({ enabled: false });
    gates[2].release();
    await flush();
  });

  test("editing a fingerprint rule keeps the action it was stored with", async () => {
    rules = rules.concat([
      { id: "fp1", type: "fingerprint", pattern: "fp_x", action: "review", priority: 0, enabled: true, lifetime: "permanent" },
    ]);
    await window.AdminBlockRules.refresh();
    document.querySelector('.block-rule-edit[data-rule-id="fp1"]').click();
    expect(document.getElementById("blockRuleAction").value).toBe("block");
    document.getElementById("blockRuleSubmit").click();
    await flush();
    expect(lastPost("/admin/filters/update").body.updates).toMatchObject({ type: "fingerprint", action: "review" });
  });

  // ── 第四輪複核（N1–N4） ──────────────────────────────────────

  const editBtn = (id) => document.querySelector(`.block-rule-edit[data-rule-id="${id}"]`);
  const rowOf = (id) => document.querySelector(`#blockRuleList .admin-block-row[data-rule-id="${id}"]`);

  test("a rule whose save is still in flight cannot be reopened with stale values", async () => {
    const gates = pending("/admin/filters/update");
    editBtn("kw1").click();
    pressEnter("changed");
    await flush();
    document.getElementById("blockRuleCancel").click();
    editBtn("kw1").click();
    // 沒有載入送出前的舊值
    expect(document.getElementById("blockRuleInput").value).toBe("");
    expect(document.getElementById("blockRuleCancel").hidden).toBe(true);

    gates[0].release();
    await flush();
    respond = null;
    editBtn("kw1").click();
    expect(document.getElementById("blockRuleInput").value).toBe("legacy");
  });

  test("a 404 for an old save does not reset an edit of another rule", async () => {
    const gates = pending("/admin/filters/update", 404);
    editBtn("kw1").click();
    pressEnter("changed");
    await flush();
    document.getElementById("blockRuleCancel").click();
    editBtn("w1").click();
    gates[0].release();
    await flush();
    expect(document.getElementById("blockRuleInput").value).toBe("<img src=x onerror=alert(1)>");
    expect(document.getElementById("blockRuleCancel").hidden).toBe(false);
  });

  test("re-enabling a quick rule goes through the toggle queue and refetches on failure", async () => {
    rules = rules.map((r) => (r.id === "rx1" ? { ...r, enabled: false } : r));
    await window.AdminBlockRules.refresh();
    respond = (url) =>
      url === "/admin/filters/update"
        ? { ok: false, status: 404, json: async () => ({ error: "Rule not found" }) }
        : undefined;
    calls = [];
    document.querySelector('[data-flt-quick-id="url"]').click();
    await flush();
    expect(calls.filter((c) => c.url === "/admin/filters/update")).toHaveLength(1);
    expect(calls.filter((c) => c.url === "/admin/filters/list")).toHaveLength(1);
    expect(calls.filter((c) => c.url === "/admin/filters/remove")).toHaveLength(0);
  });

  test("a refresh during a toggle does not leave the row showing the old state", async () => {
    const gates = pending("/admin/filters/update");
    const cb = rowOf("kw1").querySelector(".filter-toggle-cb");
    cb.checked = false;
    cb.dispatchEvent(new Event("change", { bubbles: true }));
    await flush();
    // 別的操作在送的期間重新整理：伺服器還是舊狀態（啟用）
    await window.AdminBlockRules.refresh();
    expect(rowOf("kw1").querySelector(".filter-toggle-cb").checked).toBe(true);

    gates[0].release();
    await flush();
    const row = rowOf("kw1");
    expect(row.querySelector(".filter-toggle-cb").checked).toBe(false);
    expect(row.querySelector(".admin-filter-toggle-dot").classList.contains("is-off")).toBe(true);
  });
});
