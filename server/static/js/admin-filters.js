/**
 * Admin · 封鎖規則（審核 › 封鎖字）
 *
 * 一份清單、一個新增入口。原本這個分頁疊了三套東西：字串黑名單（admin-history.js）、
 * 「臨時規則」快捷鍵、「規則庫」表單（本檔）。後端合併成同一份規則清單之後
 * （services/filter_engine.py），畫面也只剩一份：每條規則選命中方式、動作、期限。
 *
 * 最常見的情況是「打字、按 Enter」——三個下拉的預設值是關鍵字／封鎖／永久，
 * 建出來的就是一個封鎖字（type "word"，與舊黑名單同樣的判定）。
 *
 * API：/admin/filters/{list,add,update,remove,test,events,clear-session}
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, HudConfirm, AdminQuickAction, AdminTabs
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;

  function t(key, params) {
    return window.ServerI18n ? window.ServerI18n.t(key, params) : key;
  }

  // ── 規則 ↔ 畫面上的三個選項 ──────────────────────────────────

  const MATCHES = ["keyword", "regex", "rate_limit", "fingerprint"];
  const MATCH_LABEL_KEY = {
    keyword: "ulWord",
    regex: "ulRegex",
    rate_limit: "ulRate",
    fingerprint: "blkMatchFingerprint",
  };
  const ACTIONS = ["block", "replace", "allow", "review"];
  const ACTION_LABEL_KEY = {
    block: "fltActBlock",
    replace: "fltActReplace",
    allow: "fltActAllow",
    review: "fltActReview",
  };
  // 引擎實際會命中的組合。其他組合以前選得到，存得進去，但永遠不會命中
  // （例如關鍵字＋替換），這裡不再提供。
  const ACTIONS_FOR_MATCH = {
    keyword: ["block", "allow", "review"],
    regex: ["block", "replace", "allow", "review"],
    rate_limit: ["block"],
    fingerprint: ["block"],
  };
  const PLACEHOLDER_KEY = {
    keyword: "modAddWordPlaceholder",
    regex: "blkPhRegex",
    rate_limit: "blkPhRate",
    fingerprint: "blkPhFingerprint",
  };
  // 期限下拉：永久、到本場次結束、三個限時長度（與訊息抽屜的封禁時長同一組）
  const LIFETIMES = [
    { value: "permanent", key: "msgDrawerPermanent" },
    { value: "session", key: "blkLifeSession" },
    { value: "3600", key: "msgDrawerDurationHour1" },
    { value: "86400", key: "msgDrawerDurationHour24" },
    { value: "604800", key: "msgDrawerDurationDay7" },
  ];

  /** 儲存的規則 → 畫面上的命中方式與動作 */
  function viewOf(rule) {
    switch (rule.type) {
      case "word": return { match: "keyword", action: "block" };
      case "keyword": return { match: "keyword", action: rule.action };
      case "replace": return { match: "regex", action: "replace" };
      case "regex": return { match: "regex", action: rule.action };
      case "rate_limit": return { match: "rate_limit", action: "block" };
      case "fingerprint": return { match: "fingerprint", action: "block" };
      default: return { match: "keyword", action: rule.action || "block" };
    }
  }

  /**
   * 畫面上的命中方式＋動作 → 儲存的 type。
   * 「關鍵字＋封鎖」一律是封鎖字（word）；伺服器也會把 keyword＋block 存成 word
   * （services/filter_engine.py 開頭）。
   */
  function typeFor(match, action) {
    if (match === "keyword") return action === "block" ? "word" : "keyword";
    if (match === "regex") return action === "replace" ? "replace" : "regex";
    return match;
  }

  /** 期限下拉的值 → 送給後端的欄位 */
  function lifetimePayload(value) {
    if (value === "permanent" || value === "session") return { lifetime: value };
    if (value === "keep") return { lifetime: "timed" };
    return { lifetime: "timed", duration_sec: parseInt(value, 10) };
  }

  function fmtUntil(epochSec) {
    const d = new Date(epochSec * 1000);
    const pad = (n) => String(n).padStart(2, "0");
    const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    const now = new Date();
    if (d.toDateString() === now.toDateString()) return time;
    return `${d.getMonth() + 1}/${d.getDate()} ${time}`;
  }

  function lifetimeLabel(rule) {
    if (rule.lifetime === "session") return t("blkLifeSession");
    if (rule.lifetime === "timed" && rule.expires_at) return t("blkLifeUntil", { time: fmtUntil(rule.expires_at) });
    return t("msgDrawerPermanent");
  }

  function patternLabel(rule) {
    if (rule.type === "rate_limit") {
      return t("blkRateSummary", { n: rule.max_count || 5, s: rule.window_sec || 60 });
    }
    if (rule.type === "replace") return `${rule.pattern}  →  ${rule.replacement || ""}`;
    return rule.pattern;
  }

  // 四個快捷規則。以前它們送出時多帶一個 name 欄位，後端一律 400，所以從來沒開成功過；
  // 現在用「同樣的正規式＋動作」認出已開啟的那條。開啟時是本場次規則——它們原本的定位就是
  // 「直播中臨時開、結束後清掉」。全大寫用 (?-i:…)：引擎一律不分大小寫比對，
  // 不關掉的話「hello world」也算全大寫。
  const QUICK = [
    { id: "url", key: "fltPresetUrl", pattern: "https?://[^\\s]+", action: "block" },
    { id: "allcaps", key: "fltPresetAllcaps", pattern: "^(?-i:[A-Z\\W\\s]){8,}$", action: "review" },
    { id: "repeat", key: "fltPresetRepeat", pattern: "(.)\\1{6,}", action: "review" },
    {
      id: "emojionly",
      key: "blkPresetEmojiOnly",
      pattern: "^[\\U0001F000-\\U0001FAFF\\u2600-\\u27BF\\u2B00-\\u2BFF\\uFE0F\\u200D\\s]+$",
      action: "block",
    },
  ];

  function quickRuleFor(q, rules) {
    return rules.find((r) => r.type === "regex" && r.pattern === q.pattern && r.action === q.action);
  }

  // ── 狀態 ─────────────────────────────────────────────────────

  let _rules = [];
  let _scope = "all";
  let _editing = null; // 正在編輯的規則（null = 新增）

  // ── 版面 ─────────────────────────────────────────────────────

  function optionList(values, labelOf, selected) {
    return values
      .map((v) => `<option value="${escapeHtml(v)}"${v === selected ? " selected" : ""}>${escapeHtml(labelOf(v))}</option>`)
      .join("");
  }

  function buildSectionHtml() {
    return `
      <div id="sec-blacklist" class="hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${escapeHtml(t("modBlockedWordsTitle"))}</h2>
        </div>

        <div class="admin-block-add" data-block-add>
          <div class="admin-mod-addrow">
            <input type="text" id="blockRuleInput" class="admin-ui-input admin-ui-grow"
              placeholder="${escapeHtml(t("modAddWordPlaceholder"))}" aria-label="${escapeHtml(t("ulPattern"))}" />
            <button id="blockRuleSubmit" type="button" class="admin-ui-action is-primary admin-filter-action">${escapeHtml(t("modAddWordBtn"))}</button>
            <button id="blockRuleCancel" type="button" class="admin-ui-action admin-filter-action" hidden>${escapeHtml(t("cancel"))}</button>
          </div>
          <div class="admin-block-options">
            <select id="blockRuleMatch" class="admin-ui-select" aria-label="${escapeHtml(t("blkMatchLabel"))}">
              ${optionList(MATCHES, (m) => t(MATCH_LABEL_KEY[m]), "keyword")}
            </select>
            <select id="blockRuleAction" class="admin-ui-select" aria-label="${escapeHtml(t("blkActionLabel"))}">
              ${optionList(ACTIONS, (a) => t(ACTION_LABEL_KEY[a]), "block")}
            </select>
            <select id="blockRuleLifetime" class="admin-ui-select" aria-label="${escapeHtml(t("blkLifetimeLabel"))}">
              ${LIFETIMES.map((l) => `<option value="${l.value}">${escapeHtml(t(l.key))}</option>`).join("")}
            </select>
            <input type="text" id="blockRuleReplacement" class="admin-ui-input" hidden
              placeholder="${escapeHtml(t("fltColReplacement"))}" aria-label="${escapeHtml(t("fltColReplacement"))}" />
            <label class="admin-block-num" data-block-rate hidden>
              <span>${escapeHtml(t("fltColMaxCount"))}</span>
              <input type="number" id="blockRuleMaxCount" class="admin-ui-input" value="5" min="1" max="100" />
            </label>
            <label class="admin-block-num" data-block-rate hidden>
              <span>${escapeHtml(t("fltColWindowSec"))}</span>
              <input type="number" id="blockRuleWindowSec" class="admin-ui-input" value="60" min="1" max="3600" />
            </label>
          </div>
        </div>

        <div class="admin-flt-v4__quick" data-flt-quick>
          ${QUICK.map((q) => `
            <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${q.id}" aria-pressed="false">
              <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
              <span class="admin-flt-v4__qchip-label">${escapeHtml(t(q.key))}</span>
            </button>`).join("")}
        </div>

        <div class="admin-block-listhead">
          <span class="admin-ui-seg" id="blockRuleScope" role="tablist">
            ${["all"].concat(MATCHES).map((s) => `
              <button type="button" class="seg-item${s === "all" ? " is-active" : ""}" data-scope="${s}">
                ${escapeHtml(s === "all" ? t("fltChipAll") : t(MATCH_LABEL_KEY[s]))}
                <span class="admin-block-scope-count" data-scope-count="${s}">0</span>
              </button>`).join("")}
          </span>
          <button id="blockRuleClearSession" type="button" class="admin-ui-chip" hidden>${escapeHtml(t("blkClearSession"))}</button>
        </div>
        <div class="admin-ui-group" data-block-list-group>
          <div id="blockRuleList" class="admin-mod-wordlist"></div>
        </div>
        <div data-block-empty hidden></div>

        <details class="admin-dsp2-fold" id="blockRuleMore">
          <summary>${escapeHtml(t("blkMoreTitle"))}</summary>
          <div class="admin-block-more">
            <label class="admin-block-num">
              <span>${escapeHtml(t("uiColPriority"))} · ${escapeHtml(t("fltPriorityTail"))}</span>
              <input type="number" id="blockRulePriority" class="admin-ui-input" value="0" min="0" max="9999" />
            </label>
            <div class="admin-mod-addrow">
              <input id="filterTestText" type="text" class="admin-ui-input admin-ui-grow"
                placeholder="${escapeHtml(t("sampleText"))}" aria-label="${escapeHtml(t("sampleText"))}" />
              <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action">${escapeHtml(t("testBtn"))}</button>
            </div>
            <div id="filterTestResult" class="admin-block-test-result" aria-live="polite"></div>
          </div>
        </details>

        <details class="admin-dsp2-fold" id="blockRuleLog">
          <summary>${escapeHtml(t("fltLiveLog"))}</summary>
          <div class="hud-console-body" id="filterLiveLog"></div>
        </details>
      </div>`;
  }

  // ── 清單 ─────────────────────────────────────────────────────

  function renderRuleRow(rule) {
    const view = viewOf(rule);
    const id = escapeHtml(rule.id);
    return `
      <div class="hud-rule-row admin-block-row${rule.enabled ? "" : " is-off"}" data-rule-id="${id}" data-rule-type="${escapeHtml(rule.type)}"
        style="${rule.enabled ? "" : "opacity:0.45"}">
        <span class="admin-block-row__pattern">${escapeHtml(patternLabel(rule))}</span>
        <span class="admin-block-row__meta">
          <span>${escapeHtml(t(MATCH_LABEL_KEY[view.match]))}</span>
          <span class="admin-block-row__action" data-action="${escapeHtml(view.action)}">${escapeHtml(t(ACTION_LABEL_KEY[view.action] || "fltActBlock"))}</span>
          <span>${escapeHtml(lifetimeLabel(rule))}</span>
        </span>
        <label class="admin-block-row__toggle" title="${escapeHtml(rule.enabled ? t("enabled") : t("disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${id}" ${rule.enabled ? "checked" : ""} />
          <span class="admin-filter-toggle-dot ${rule.enabled ? "is-on" : "is-off"}"></span>
        </label>
        <button class="admin-ui-chip block-rule-edit" type="button" data-rule-id="${id}">${escapeHtml(t("blkEdit"))}</button>
        <button class="filter-delete-btn" type="button" data-rule-id="${id}" title="${escapeHtml(t("deleteRule"))}" aria-label="${escapeHtml(t("deleteRule"))}">${window.AdminUtils.closeIcon}</button>
      </div>`;
  }

  function renderList() {
    const list = document.getElementById("blockRuleList");
    if (!list) return;
    const counts = { all: _rules.length, keyword: 0, regex: 0, rate_limit: 0, fingerprint: 0 };
    _rules.forEach((r) => { counts[viewOf(r).match] += 1; });
    Object.keys(counts).forEach((k) => {
      const el = document.querySelector(`[data-scope-count="${k}"]`);
      if (el) el.textContent = String(counts[k]);
    });
    if (window.AdminTabs && window.AdminTabs.setTabCount) {
      window.AdminTabs.setTabCount("moderation", "blacklist", _rules.length || "");
    }
    const sessionCount = _rules.filter((r) => r.lifetime === "session").length;
    const clearBtn = document.getElementById("blockRuleClearSession");
    if (clearBtn) clearBtn.hidden = sessionCount === 0;

    const visible = _scope === "all" ? _rules : _rules.filter((r) => viewOf(r).match === _scope);
    list.innerHTML = visible.map(renderRuleRow).join("");
    renderEmpty(visible.length === 0);
    renderQuick();
  }

  // 空清單用同頁其他分頁（待審佇列、被封鎖的觀眾）一樣的 AdminEmpty 卡。卡片放在清單
  // 群組外面：清單的每個子元素都套了列的版型（.admin-mod-wordlist > *），卡片放進去會
  // 被壓成一列、內距歸零。
  function renderEmpty(isEmpty) {
    const group = document.querySelector("[data-block-list-group]");
    const host = document.querySelector("[data-block-empty]");
    if (!group || !host) return;
    group.hidden = isEmpty;
    host.hidden = !isEmpty;
    host.innerHTML = "";
    if (!isEmpty) return;
    if (window.AdminEmpty) {
      const card = window.AdminEmpty.renderCustom({
        icon: "⊘",
        title: t("blkEmpty"),
        accent: "var(--color-ink-error)",
      });
      card.dataset.emptyKind = "filters";
      host.appendChild(card);
    } else {
      host.innerHTML = `<div class="admin-block-empty" data-empty-kind="filters">${escapeHtml(t("blkEmpty"))}</div>`;
    }
  }

  function renderQuick() {
    QUICK.forEach((q) => {
      const chip = document.querySelector(`[data-flt-quick-id="${q.id}"]`);
      if (!chip) return;
      const hit = quickRuleFor(q, _rules);
      const active = !!hit && hit.enabled !== false;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  async function refresh() {
    try {
      const resp = await window.csrfFetch("/admin/filters/list");
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const data = await resp.json();
      _rules = Array.isArray(data.rules) ? data.rules : [];
    } catch (err) {
      console.error("Failed to fetch block rules:", err);
      window.showToast(t("fetchFiltersFailed"), false);
    }
    renderList();
  }

  // ── 新增／編輯 ───────────────────────────────────────────────

  function el(id) { return document.getElementById(id); }

  function syncOptions() {
    const match = el("blockRuleMatch").value;
    const actionEl = el("blockRuleAction");
    const allowed = ACTIONS_FOR_MATCH[match];
    Array.from(actionEl.options).forEach((o) => { o.disabled = allowed.indexOf(o.value) === -1; });
    if (allowed.indexOf(actionEl.value) === -1) actionEl.value = allowed[0];
    actionEl.disabled = allowed.length === 1;
    el("blockRuleInput").placeholder = t(PLACEHOLDER_KEY[match]);
    el("blockRuleReplacement").hidden = actionEl.value !== "replace";
    document.querySelectorAll("[data-block-rate]").forEach((n) => { n.hidden = match !== "rate_limit"; });
  }

  function readForm() {
    const match = el("blockRuleMatch").value;
    const action = el("blockRuleAction").value;
    const body = {
      type: typeFor(match, action),
      pattern: (el("blockRuleInput").value || "").trim(),
      action: action,
      priority: parseInt(el("blockRulePriority").value, 10) || 0,
    };
    if (body.type === "replace") body.replacement = el("blockRuleReplacement").value || "";
    if (body.type === "rate_limit") {
      body.max_count = parseInt(el("blockRuleMaxCount").value, 10) || 5;
      body.window_sec = parseFloat(el("blockRuleWindowSec").value) || 60;
    }
    return Object.assign(body, lifetimePayload(el("blockRuleLifetime").value));
  }

  function errorMessage(data, fallbackKey) {
    const code = data && data.code;
    if (code === "duplicate") return t("blkErrDuplicate");
    if (code === "invalid_regex") return t("blkErrRegex");
    if (code === "unsafe_regex") return t("blkErrUnsafe");
    return t(fallbackKey);
  }

  function resetForm() {
    _editing = null;
    el("blockRuleInput").value = "";
    el("blockRuleReplacement").value = "";
    el("blockRuleMatch").value = "keyword";
    el("blockRuleAction").value = "block";
    const life = el("blockRuleLifetime");
    const keep = life.querySelector('option[value="keep"]');
    if (keep) keep.remove();
    life.value = "permanent";
    el("blockRulePriority").value = "0";
    el("blockRuleSubmit").textContent = t("modAddWordBtn");
    el("blockRuleCancel").hidden = true;
    syncOptions();
  }

  function startEdit(rule) {
    _editing = rule;
    const view = viewOf(rule);
    el("blockRuleMatch").value = view.match;
    syncOptions();
    el("blockRuleAction").value = view.action;
    el("blockRuleInput").value = rule.pattern || "";
    el("blockRuleReplacement").value = rule.replacement || "";
    el("blockRuleMaxCount").value = String(rule.max_count || 5);
    el("blockRuleWindowSec").value = String(rule.window_sec || 60);
    el("blockRulePriority").value = String(rule.priority || 0);
    const life = el("blockRuleLifetime");
    const oldKeep = life.querySelector('option[value="keep"]');
    if (oldKeep) oldKeep.remove();
    if (rule.lifetime === "timed" && rule.expires_at) {
      const keep = document.createElement("option");
      keep.value = "keep";
      keep.textContent = lifetimeLabel(rule);
      life.insertBefore(keep, life.firstChild);
      life.value = "keep";
    } else {
      life.value = rule.lifetime === "session" ? "session" : "permanent";
    }
    syncOptions();
    el("blockRuleSubmit").textContent = t("blkSave");
    el("blockRuleCancel").hidden = false;
    el("blockRuleInput").focus();
  }

  async function submit() {
    const body = readForm();
    if (!body.pattern && body.type !== "rate_limit") {
      window.showToast(t("patternRequired"), false);
      el("blockRuleInput").focus();
      return;
    }
    const editing = _editing;
    const url = editing ? "/admin/filters/update" : "/admin/filters/add";
    const payload = editing ? { rule_id: editing.id, updates: body } : body;
    try {
      const resp = await window.csrfFetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        window.showToast(errorMessage(data, editing ? "updateRuleFailed" : "addRuleFailed"), false);
        return;
      }
      resetForm();
      await refresh();
      if (editing) {
        window.showToast(t("blkUpdated"), true);
      } else if (window.AdminQuickAction && data.rule_id) {
        window.AdminQuickAction.fire({
          label: t("blkAdded", { pattern: body.pattern || patternLabel(body) }),
          undo: {
            label: t("histUndo"),
            run: async () => {
              const r = await removeRule(data.rule_id);
              if (!r) throw new Error("remove failed");
            },
          },
        });
      } else {
        window.showToast(t("ruleAdded"), true);
      }
    } catch (err) {
      console.error("Save block rule error:", err);
      window.showToast(t(editing ? "updateRuleFailed" : "addRuleFailed"), false);
    }
  }

  async function removeRule(ruleId) {
    const resp = await window.csrfFetch("/admin/filters/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rule_id: ruleId }),
    });
    if (resp.ok) await refresh();
    return resp.ok;
  }

  async function deleteRule(ruleId) {
    const rule = _rules.find((r) => r.id === ruleId);
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: t("filtersDeleteTitle"),
      severity: "danger",
      bodyText: rule ? patternLabel(rule) : "",
      confirmLabel: t("filtersDeleteConfirm"),
    });
    if (!ok) return;
    try {
      if (await removeRule(ruleId)) {
        if (_editing && _editing.id === ruleId) resetForm();
        window.showToast(t("ruleDeleted"), true);
      } else {
        window.showToast(t("deleteRuleFailed"), false);
      }
    } catch (err) {
      console.error("Delete block rule error:", err);
      window.showToast(t("deleteRuleFailed"), false);
    }
  }

  async function toggleRule(ruleId, enabled) {
    try {
      const resp = await window.csrfFetch("/admin/filters/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule_id: ruleId, updates: { enabled: enabled } }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        window.showToast(errorMessage(data, "updateRuleFailed"), false);
        await refresh();
        return;
      }
      const rule = _rules.find((r) => r.id === ruleId);
      if (rule) rule.enabled = enabled;
      renderQuick();
    } catch (err) {
      console.error("Toggle block rule error:", err);
      window.showToast(t("updateRuleFailed"), false);
      await refresh();
    }
  }

  async function clearSessionRules() {
    const n = _rules.filter((r) => r.lifetime === "session").length;
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: t("blkClearSessionTitle"),
      // 一次刪掉多條規則：危險操作，預設焦點落在「取消」（HudConfirm 依 danger 決定）
      severity: "danger",
      bodyText: t("blkClearSessionBody", { n: n }),
      confirmLabel: t("blkClearSession"),
    });
    if (!ok) return;
    try {
      const resp = await window.csrfFetch("/admin/filters/clear-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      window.showToast(t("blkClearedSession", { n: data.removed || 0 }), true);
      await refresh();
    } catch (err) {
      console.error("Clear session rules error:", err);
      window.showToast(t("deleteRuleFailed"), false);
    }
  }

  async function toggleQuick(id) {
    const q = QUICK.find((x) => x.id === id);
    if (!q) return;
    const label = t(q.key);
    const existing = quickRuleFor(q, _rules);
    if (existing) {
      const ok = await removeRule(existing.id).catch(() => false);
      window.showToast(ok ? t("filtersToastDisabled", { label: label }) : t("filtersToastDisableFailed"), ok);
      return;
    }
    try {
      const resp = await window.csrfFetch("/admin/filters/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "regex",
          pattern: q.pattern,
          action: q.action,
          priority: 50,
          lifetime: "session",
        }),
      });
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        window.showToast(t("filtersToastEnableFailed", { msg: errorMessage(data, "addRuleFailed") }), false);
        return;
      }
      window.showToast(t("filtersToastEnabled", { label: label }), true);
      await refresh();
    } catch (err) {
      window.showToast(t("filtersToastEnableFailed", { msg: "" }), false);
    }
  }

  // ── 測試 ─────────────────────────────────────────────────────

  async function testRule() {
    const textEl = el("filterTestText");
    const resultEl = el("filterTestResult");
    const sample = (textEl.value || "").trim();
    if (!sample) {
      window.showToast(t("sampleTextRequired"), false);
      textEl.focus();
      return;
    }
    const rule = readForm();
    if (!rule.pattern && rule.type !== "rate_limit") {
      window.showToast(t("patternRequired"), false);
      el("blockRuleInput").focus();
      return;
    }
    resultEl.textContent = t("testing");
    try {
      const resp = await window.csrfFetch("/admin/filters/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule: rule, text: sample }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        resultEl.textContent = errorMessage(data, "testError");
        return;
      }
      // 伺服器回的 reason 是英文的內部說明，不顯示；結果用翻譯好的字。
      const verdict = {
        block: t("blocked"),
        replace: t("replaced"),
        allow: t("allowed"),
        review: t("fltActReview"),
      }[data.action] || t("noMatch");
      resultEl.dataset.verdict = data.action || "pass";
      resultEl.textContent = data.action === "replace" ? `${verdict} → ${data.text || ""}` : verdict;
    } catch (err) {
      console.error("Test block rule error:", err);
      resultEl.textContent = t("testError");
    }
  }

  // ── 命中紀錄 ─────────────────────────────────────────────────

  const LIVE_LOG_MAX = 6;
  const _log = [];
  let _logSeq = 0;
  let _logStop = null;

  function fmtLogTime(ts) {
    const d = new Date(ts * 1000); // epoch seconds from server
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  const LOG_ACTION_KEY = {
    BLOCK: "fltActBlock",
    REPLACE: "fltActReplace",
    MASK: "fltActReplace",
    ALLOW: "fltActAllow",
    REVIEW: "fltActReview",
  };

  function renderLiveLog() {
    const log = el("filterLiveLog");
    if (!log) return;
    if (_log.length === 0) {
      log.innerHTML = `<div class="admin-block-empty">${escapeHtml(t("fltNoEvents"))}</div>`;
      return;
    }
    // 每一個欄位都來自伺服器，其中 text_excerpt 與 source 是觀眾可以控制的——全部跳脫。
    log.innerHTML = _log.map((e) => {
      const action = String(e.action || "").toUpperCase();
      const actionLabel = LOG_ACTION_KEY[action] ? t(LOG_ACTION_KEY[action]) : action;
      const source = String(e.source || "").slice(0, 16);
      return `<div class="admin-filter-log-row" data-action="${escapeHtml(action)}">
        <span class="admin-filter-log-row__time">${escapeHtml(fmtLogTime(e.ts))}</span>
        <span class="admin-filter-log-row__action">${escapeHtml(actionLabel)}</span>
        <span class="admin-filter-log-row__text">「${escapeHtml(e.text_excerpt || "")}」<span class="admin-filter-log-row__rule"> — ${escapeHtml(t("blkLogRule", { pattern: e.pattern || "" }))}${source ? " · " + escapeHtml(source) : ""}</span></span>
      </div>`;
    }).join("");
  }

  async function pollFilterEvents() {
    try {
      const r = await fetch(`/admin/filters/events?since=${_logSeq}`, { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      if (!Array.isArray(data.events) || data.events.length === 0) return;
      // Server returns newest-first; merge into front, cap at LIVE_LOG_MAX.
      _log.unshift(...data.events);
      while (_log.length > LIVE_LOG_MAX) _log.pop();
      _logSeq = data.latest_seq || _logSeq;
      renderLiveLog();
    } catch (_) { /* silent */ }
  }

  // ── 接線 ─────────────────────────────────────────────────────

  function wire(section) {
    el("blockRuleMatch").addEventListener("change", syncOptions);
    el("blockRuleAction").addEventListener("change", syncOptions);
    el("blockRuleSubmit").addEventListener("click", submit);
    el("blockRuleCancel").addEventListener("click", resetForm);
    el("blockRuleInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.isComposing) {
        e.preventDefault();
        submit();
      }
    });
    el("filterTestBtn").addEventListener("click", testRule);
    el("filterTestText").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.isComposing) {
        e.preventDefault();
        testRule();
      }
    });
    el("blockRuleClearSession").addEventListener("click", clearSessionRules);

    section.querySelector("[data-flt-quick]").addEventListener("click", (e) => {
      const chip = e.target.closest("[data-flt-quick-id]");
      if (chip) toggleQuick(chip.dataset.fltQuickId);
    });

    const scope = el("blockRuleScope");
    scope.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-scope]");
      if (!btn) return;
      _scope = btn.dataset.scope;
      scope.querySelectorAll("[data-scope]").forEach((b) => b.classList.toggle("is-active", b === btn));
      renderList();
    });

    const rulesList = el("blockRuleList");
    // 開關的唯一真相是那顆 sr-only checkbox：色點包在 <label> 裡，點它、或用鍵盤在
    // checkbox 上按空白鍵，都會觸發這裡的 change，視覺也一併在這裡更新。
    // （2026-09-08：另外手動翻 checkbox 的 click 分支會跟 label 的預設行為打架，
    // 規則停用後再也點不回來。）
    rulesList.addEventListener("change", (e) => {
      const cb = e.target.closest(".filter-toggle-cb");
      if (!cb) return;
      toggleRule(cb.dataset.ruleId, cb.checked);
      const row = cb.closest(".admin-block-row");
      const dot = row?.querySelector(".admin-filter-toggle-dot");
      if (dot) {
        dot.classList.toggle("is-on", cb.checked);
        dot.classList.toggle("is-off", !cb.checked);
      }
      if (row) row.style.opacity = cb.checked ? "" : "0.45";
    });
    rulesList.addEventListener("click", (e) => {
      const del = e.target.closest(".filter-delete-btn");
      if (del) return deleteRule(del.dataset.ruleId);
      const edit = e.target.closest(".block-rule-edit");
      if (edit) {
        const rule = _rules.find((r) => r.id === edit.dataset.ruleId);
        if (rule) startEdit(rule);
      }
    });

    if (_logStop) _logStop();
    _logStop = window.AdminUtils.pollWhileVisible({
      el: () => el("filterLiveLog"),
      intervalMs: 4000,
      tick: pollFilterEvents,
    });
  }

  function init() {
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;
    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHtml());
    const section = document.getElementById("sec-blacklist");
    wire(section);
    syncOptions();
    renderLiveLog();
    refresh();
  }

  // 其他頁面（訊息流、訊息詳情、紀錄）也會加封鎖字；切回這個分頁時重新抓一次清單。
  // 只在「進入」分頁的那一次抓：admin-route-applied 在版面同步時也會觸發，
  // 每次都抓的話會跟自己的重繪互相餵食。
  let _onTab = false;
  document.addEventListener("admin-route-applied", (e) => {
    const here = !!(e.detail && e.detail.route === "moderation" && e.detail.leaf === "blacklist");
    if (here && !_onTab && document.getElementById("blockRuleList")) refresh();
    _onTab = here;
  });

  // admin.js rebuilds the entire DOM via innerHTML on every renderControlPanel()
  // call, so we keep observing and re-inject when our section is wiped out.
  function bootstrap() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const ready = () => document.getElementById("settings-grid") && !document.getElementById("sec-blacklist");
    const observer = new MutationObserver(() => { if (ready()) init(); });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });
    if (ready()) init();
  }

  window.AdminBlockRules = {
    viewOf: viewOf,
    typeFor: typeFor,
    lifetimePayload: lifetimePayload,
    ACTIONS_FOR_MATCH: ACTIONS_FOR_MATCH,
    QUICK: QUICK,
    refresh: refresh,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
