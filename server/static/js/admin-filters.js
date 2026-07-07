/**
 * Admin Filter Rules Section
 *
 * Manages content filtering rules (keyword, regex, replace, rate_limit)
 * from the admin dashboard. Loaded as a separate <script defer> in admin.html.
 *
 * Globals used: csrfFetch, showToast, ServerI18n
 */
(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;

  const RULE_TYPES = ["keyword", "regex", "replace", "rate_limit"];
  const ACTIONS = ["block", "replace", "allow"];

  // ── Helpers ──────────────────────────────────────────────────

  function isDetailsOpen(id) {
    var state = loadDetailsState();
    return state[id] !== undefined ? state[id] : false;
  }

  function t(key, fallback) {
    if (typeof ServerI18n !== "undefined" && ServerI18n.t) {
      const val = ServerI18n.t(key);
      if (val && val !== key) return val;
    }
    return fallback || key;
  }

  // ── Type / Action badge rendering ────────────────────────────

  const TYPE_PILL = {
    keyword: "is-cyan",
    regex: "is-cyan",
    replace: "is-amber",
    rate_limit: "is-danger",
  };

  const ACTION_COLOR = {
    block: "var(--hud-crimson)",
    replace: "var(--hud-amber)",
    allow: "var(--hud-lime)",
  };

  // ── Section HTML ─────────────────────────────────────────────

  function buildSectionHtml() {
    return `
      <div id="sec-filters" class="hud-page-stack lg:col-span-2">
        <!-- v4 P2-1 chrome (added 2026-05-19) — was missing kicker/title.
             Page used to render straight into hud-stats-strip without a
             section header. -->
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">MODERATION · LIVE FILTERS · 規則 / 命中 / 即時</div>
          <div class="admin-ui-page-title">敏感字 &amp; 過濾規則</div>
          <p class="admin-ui-page-note">
            關鍵字 / regex / 替換 / 速率規則。命中後動作支援 block / replace / allow，
            每條規則可即時開關，命中次數即時累計。
          </p>
        </div>

        <!-- Overview stats strip — prototype admin-pages.jsx:648 -->
        <div class="hud-stats-strip" id="moderationStatsStrip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">RULES</span>
            <span class="hud-stat-tile-value" data-mod-stat="rules">—</span>
            <span class="hud-stat-tile-label">規則數</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">MASKED · 24H</span>
            <span class="hud-stat-tile-value is-amber" data-mod-stat="masked">—</span>
            <span class="hud-stat-tile-label">今日遮罩</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">BLOCKED · 24H</span>
            <span class="hud-stat-tile-value is-crimson" data-mod-stat="blocked">—</span>
            <span class="hud-stat-tile-label">今日封鎖</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">BLACKLIST</span>
            <span class="hud-stat-tile-value is-cyan" data-mod-stat="blacklist">—</span>
            <span class="hud-stat-tile-label">黑名單</span>
          </div>
        </div>
        <!-- 2026-05-18 design v4 P2-1: Quick Filters bar \u2014 one-shot
             preset toggles built on top of /admin/filters backend.
             Each toggle creates / removes a regex rule. The existing
             custom rules library below is the same regex store. -->
        <div class="admin-flt-v4__explain">
          <span class="admin-flt-v4__amber-kicker">\u26a1 \u81e8\u6642\u898f\u5247</span>
          \u5373\u6642\u751f\u6548 \u00b7 \u4e0d\u5beb\u9032\u9ed1\u540d\u55ae \u00b7 \u76f4\u64ad\u7d50\u675f\u5f8c\u53ef\u4e00\u9375\u6e05\u9664\u3002
          <span class="admin-flt-v4__spacer"></span>
          <span class="admin-flt-v4__dim-kicker">vs. \u9ed1\u540d\u55ae = \u9577\u671f\u6c38\u4e45\u898f\u5247</span>
        </div>
        <div class="admin-flt-v4__card">
          <div class="admin-flt-v4__head">
            <span class="admin-flt-v4__kicker">QUICK FILTERS \u00b7 \u4e00\u9375\u958b\u95dc \u00b7 \u5373\u6642\u751f\u6548</span>
          </div>
          <div class="admin-flt-v4__quick" data-flt-quick>
            ${[
              { id: "url",       label: "\u542b URL",       pattern: "https?://[^\\s]+", action: "block" },
              { id: "allcaps",   label: "\u5168\u5927\u5beb",       pattern: "^[A-Z\\W\\s]{8,}$", action: "mask" },
              { id: "repeat",    label: "\u91cd\u8907\u8a0a\u606f",     pattern: "(.)\\1{6,}", action: "mask" },
              { id: "emojionly", label: "Emoji-only",  pattern: "^[\\p{Emoji}\\s]+$", action: "block" },
            ].map((q) => `
              <button type="button" class="admin-flt-v4__qchip" data-flt-quick-id="${q.id}" data-flt-pattern="${q.pattern}" data-flt-action="${q.action}" data-flt-label="${q.label}">
                <span class="admin-flt-v4__qchip-toggle"><span class="admin-flt-v4__qchip-knob"></span></span>
                <span class="admin-flt-v4__qchip-label">${q.label}</span>
                <span class="admin-flt-v4__qchip-hits" data-flt-quick-hits="${q.id}">\u2014</span>
              </button>`).join("")}
          </div>
        </div>

        <div class="hud-page-grid-2" style="grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr)">
          <!-- LEFT: Rules library -->
          <div class="hud-inspector" style="min-height:auto">
            <div class="hud-inspector-head">
              <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">\u898f\u5247\u5eab</span>
              <span class="admin-v3-card-kicker" style="margin:0">RULESET \u00b7 ORDER MATTERS</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-primary);letter-spacing:0.1em">+ \u65b0\u589e \u00b7 \u23d3 \u532f\u5165 \u00b7 \u23d2 \u532f\u51fa</span>
            </div>
            <div class="hud-filter-row" id="filterTypeChips" style="padding:10px 14px;border-bottom:1px solid var(--hud-line-strong)">
              <span class="hud-filter-chip is-active" data-filter-scope="all">\u5168\u90e8 <span data-filter-count="all">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="keyword">WORD <span data-filter-count="keyword">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="regex">REGEX <span data-filter-count="regex">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="replace">REPLACE <span data-filter-count="replace">0</span></span>
              <span class="hud-filter-chip" data-filter-scope="rate_limit">RATE <span data-filter-count="rate_limit">0</span></span>
            </div>
            <div class="hud-table-head" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;border-bottom:1px solid var(--hud-line-strong);padding:8px 14px">
              <span>PATTERN</span>
              <span>TYPE</span>
              <span>ACTION</span>
              <span>P</span>
              <span>STATUS</span>
              <span style="text-align:right"></span>
            </div>
            <div id="filterRulesList" class="hud-rules-body"></div>

            <!-- Live moderation log -->
            <div style="border-top:1px solid var(--hud-line-strong)">
              <div class="hud-inspector-head" style="border-bottom:1px solid var(--hud-line-strong)">
                <span class="hud-status-dot is-live"></span>
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">\u5373\u6642\u5be9\u6838\u65e5\u8a8c</span>
                <span class="admin-v3-card-kicker" style="margin:0">LAST 6 EVENTS</span>
                <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.1em">AUTO-SCROLL \u25b6</span>
              </div>
              <div class="hud-console-body" id="filterLiveLog" style="max-height:200px;padding:10px 14px;font-family:var(--font-mono);font-size:11px;line-height:1.7">
                <div style="color:var(--color-text-muted);text-align:center;padding:10px">\u5c1a\u7121\u4e8b\u4ef6 \u00b7 \u7b49\u5f85\u898f\u5247\u547d\u4e2d...</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Add + Test -->
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="hud-status-dot is-live"></span>
                <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">${t("addFilterRule", "Add Rule")}</span>
                <span class="admin-v3-card-kicker" style="margin:0">NEW \u00b7 PATTERN</span>
              </div>
              <div id="filterRuleForm" style="padding:14px;display:flex;flex-direction:column;gap:10px">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                  <div>
                    <label for="filterType" class="admin-v3-card-kicker" style="margin:0">TYPE</label>
                    <select id="filterType" class="admin-ui-select">
                      <option value="keyword">keyword</option>
                      <option value="regex">regex</option>
                      <option value="replace">replace</option>
                      <option value="rate_limit">rate_limit</option>
                    </select>
                  </div>
                  <div>
                    <label for="filterAction" class="admin-v3-card-kicker" style="margin:0">ACTION</label>
                    <select id="filterAction" class="admin-ui-select">
                      <option value="block">block</option>
                      <option value="replace">replace</option>
                      <option value="allow">allow</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="filterPattern" class="admin-v3-card-kicker" style="margin:0">PATTERN</label>
                  <input type="text" id="filterPattern" placeholder="${t("filterPatternPlaceholder", "Enter pattern...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">REPLACEMENT</label>
                  <input type="text" id="filterReplacement" placeholder="${t("filterReplacementPlaceholder", "Replacement text...")}"
                    class="admin-ui-input" />
                </div>
                <div id="filterRateLimitRow" class="hidden" style="display:none;grid-template-columns:1fr 1fr;gap:8px">
                  <div>
                    <label for="filterMaxCount" class="admin-v3-card-kicker" style="margin:0">MAX COUNT</label>
                    <input type="number" id="filterMaxCount" value="5" min="1" max="1000"
                      class="admin-ui-input" />
                  </div>
                  <div>
                    <label for="filterWindowSec" class="admin-v3-card-kicker" style="margin:0">WINDOW (SEC)</label>
                    <input type="number" id="filterWindowSec" value="60" min="1" max="86400"
                      class="admin-ui-input" />
                  </div>
                </div>
                <div>
                  <label for="filterPriority" class="admin-v3-card-kicker" style="margin:0">PRIORITY \u00b7 \u5c0f\u7684\u5148\u884c</label>
                  <input type="number" id="filterPriority" value="0" min="-9999" max="9999"
                    class="admin-ui-input" />
                </div>
                <button id="filterAddBtn" type="button" class="admin-ui-action is-primary admin-filter-action" style="margin-top:4px">
                  + ${t("addRule", "Add Rule")}
                </button>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">${t("testRule", "Test Rule")} \u00b7 SANDBOX</span>
              </div>
              <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
                <input id="filterTestText" type="text" placeholder="${t("sampleText", "Sample text...")}"
                  class="admin-ui-input" />
                <button id="filterTestBtn" type="button" class="admin-ui-action admin-filter-action" style="align-self:flex-start">${t("testBtn", "Test")}</button>
                <div id="filterTestResult" style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);letter-spacing:0.02em"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ── Render a single rule row ─────────────────────────────────

  let _currentFilter = "all";

  function renderRuleRow(rule) {
    const typePill = TYPE_PILL[rule.type] || "is-default";
    const actionCol = ACTION_COLOR[rule.action] || "var(--color-text-muted)";
    const typeLabel = rule.type === "keyword" ? "WORD" : rule.type.toUpperCase();

    let patternText = rule.pattern;
    if (rule.type === "replace" && rule.replacement !== undefined) {
      patternText = `${rule.pattern}  \u2192  ${rule.replacement}`;
    }
    if (rule.type === "rate_limit") {
      const mc = rule.max_count || 5;
      const ws = rule.window_sec || 60;
      patternText = `${rule.pattern}  \u00b7  ${mc}/${ws}s`;
    }

    const dim = rule.enabled ? "" : "opacity:0.45;";

    return `
      <div class="hud-table-row hud-rule-row" style="grid-template-columns: 1.6fr 80px 80px 60px 60px 40px;${dim}" data-rule-id="${escapeHtml(rule.id)}" data-rule-type="${escapeHtml(rule.type)}">
        <span style="font-family:var(--font-mono);font-size:12px;color:var(--color-text-strong);word-break:break-all">${escapeHtml(patternText)}</span>
        <span class="hud-pill ${typePill}">${typeLabel}</span>
        <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.1em;padding:2px 6px;border-radius:3px;background:${actionCol};color:#000;font-weight:700;width:fit-content;text-transform:uppercase">${escapeHtml(rule.action)}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">P${escapeHtml(String(rule.priority))}</span>
        <label class="relative inline-block" style="width:32px;align-self:center" title="${escapeHtml(rule.enabled ? t("enabled", "Enabled") : t("disabled", "Disabled"))}">
          <input type="checkbox" class="sr-only filter-toggle-cb" data-rule-id="${escapeHtml(rule.id)}" ${rule.enabled ? "checked" : ""} />
          <span class="hud-status-dot ${rule.enabled ? "is-live" : "is-paused"}" style="display:inline-block;cursor:pointer"></span>
        </label>
        <button class="filter-delete-btn" type="button" data-rule-id="${escapeHtml(rule.id)}" title="${t("deleteRule", "Delete")}" style="background:transparent;border:none;color:var(--color-text-muted);cursor:pointer;font-size:16px;text-align:right;padding:0">\u22ef</button>
      </div>`;
  }

  function applyFilterChips(rules) {
    const counts = { all: rules.length, keyword: 0, regex: 0, replace: 0, rate_limit: 0 };
    rules.forEach((r) => { if (counts[r.type] != null) counts[r.type]++; });
    Object.keys(counts).forEach((k) => {
      const el = document.querySelector(`[data-filter-count="${k}"]`);
      if (el) el.textContent = counts[k];
    });
    const rulesStatEl = document.querySelector('[data-mod-stat="rules"]');
    if (rulesStatEl) rulesStatEl.textContent = counts.all;
  }

  // Fetch blacklist size for the moderation overview strip. Mask/block 24h
  // counts aren't tracked server-side yet, so those tiles stay as "—".
  async function refreshBlacklistStat() {
    const el = document.querySelector('[data-mod-stat="blacklist"]');
    if (!el) return;
    try {
      const r = await fetch("/admin/blacklist/get", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      const arr = Array.isArray(data) ? data : (data.keywords || []);
      el.textContent = String(arr.length);
    } catch (_) { /* silent */ }
  }

  // ── API interactions ─────────────────────────────────────────

  async function fetchRules() {
    try {
      const resp = await csrfFetch("/admin/filters/list");
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const data = await resp.json();
      return data.rules || [];
    } catch (err) {
      console.error("Failed to fetch filter rules:", err);
      showToast(t("fetchFiltersFailed", "Failed to load filter rules"), false);
      return [];
    }
  }

  async function refreshRulesList() {
    const list = document.getElementById("filterRulesList");
    if (!list) return;
    list.innerHTML = `<div style="padding:12px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${t("loading", "Loading...")}</div>`;
    const rules = await fetchRules();
    applyFilterChips(rules);
    refreshBlacklistStat();
    if (rules.length === 0) {
      // 2026-07-07 (C7): named empty state (icon + copy + primary action)
      // instead of a bare text line. Falls back to the original text when
      // AdminEmpty hasn't loaded.
      if (window.AdminEmpty) {
        const el = window.AdminEmpty.render("filters");
        el.setAttribute("data-empty-kind", "filters");
        list.innerHTML = "";
        list.appendChild(el);
      } else {
        list.innerHTML = `<div data-empty-kind="filters" style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${t("noFilterRules", "No filter rules configured.")}</div>`;
      }
      return;
    }
    const visible = _currentFilter === "all" ? rules : rules.filter((r) => r.type === _currentFilter);
    list.innerHTML = visible.map(renderRuleRow).join("");
  }

  async function addRule() {
    const typeEl = document.getElementById("filterType");
    const actionEl = document.getElementById("filterAction");
    const patternEl = document.getElementById("filterPattern");
    const replacementEl = document.getElementById("filterReplacement");
    const priorityEl = document.getElementById("filterPriority");
    const maxCountEl = document.getElementById("filterMaxCount");
    const windowSecEl = document.getElementById("filterWindowSec");

    const ruleType = typeEl.value;
    const pattern = (patternEl.value || "").trim();

    if (!pattern) {
      showToast(t("patternRequired", "Pattern is required"), false);
      patternEl.focus();
      return;
    }

    const body = {
      type: ruleType,
      pattern: pattern,
      action: actionEl.value,
      priority: parseInt(priorityEl.value, 10) || 0,
    };

    if (ruleType === "replace") {
      body.replacement = replacementEl.value || "";
    }
    if (ruleType === "rate_limit") {
      body.max_count = parseInt(maxCountEl.value, 10) || 5;
      body.window_sec = parseFloat(windowSecEl.value) || 60;
    }

    try {
      const resp = await csrfFetch("/admin/filters/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await resp.json();
      if (!resp.ok) {
        showToast(data.error || t("addRuleFailed", "Failed to add rule"), false);
        return;
      }
      showToast(t("ruleAdded", "Rule added"), true);
      patternEl.value = "";
      replacementEl.value = "";
      await refreshRulesList();
    } catch (err) {
      console.error("Add filter rule error:", err);
      showToast(t("addRuleFailed", "Failed to add rule"), false);
    }
  }

  async function deleteRule(ruleId) {
    if (!confirm(t("confirmDeleteRule", "Delete this filter rule?"))) return;
    try {
      const resp = await csrfFetch("/admin/filters/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule_id: ruleId }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        showToast(data.error || t("deleteRuleFailed", "Failed to delete rule"), false);
        return;
      }
      showToast(t("ruleDeleted", "Rule deleted"), true);
      await refreshRulesList();
    } catch (err) {
      console.error("Delete filter rule error:", err);
      showToast(t("deleteRuleFailed", "Failed to delete rule"), false);
    }
  }

  async function toggleRule(ruleId, enabled) {
    try {
      const resp = await csrfFetch("/admin/filters/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule_id: ruleId, updates: { enabled: enabled } }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        showToast(data.error || t("updateRuleFailed", "Failed to update rule"), false);
        await refreshRulesList();
        return;
      }
    } catch (err) {
      console.error("Toggle filter rule error:", err);
      showToast(t("updateRuleFailed", "Failed to update rule"), false);
      await refreshRulesList();
    }
  }

  async function testRule() {
    const textEl = document.getElementById("filterTestText");
    const resultEl = document.getElementById("filterTestResult");
    const typeEl = document.getElementById("filterType");
    const actionEl = document.getElementById("filterAction");
    const patternEl = document.getElementById("filterPattern");
    const replacementEl = document.getElementById("filterReplacement");
    const maxCountEl = document.getElementById("filterMaxCount");
    const windowSecEl = document.getElementById("filterWindowSec");

    const sampleText = (textEl.value || "").trim();
    if (!sampleText) {
      showToast(t("sampleTextRequired", "Enter sample text to test"), false);
      textEl.focus();
      return;
    }

    const pattern = (patternEl.value || "").trim();
    if (!pattern) {
      showToast(t("patternRequired", "Pattern is required"), false);
      patternEl.focus();
      return;
    }

    const ruleType = typeEl.value;
    const rule = {
      type: ruleType,
      pattern: pattern,
      action: actionEl.value,
    };
    if (ruleType === "replace") {
      rule.replacement = replacementEl.value || "";
    }
    if (ruleType === "rate_limit") {
      rule.max_count = parseInt(maxCountEl.value, 10) || 5;
      rule.window_sec = parseFloat(windowSecEl.value) || 60;
    }

    resultEl.innerHTML = `<span style="color:var(--color-text-muted)">${t("testing", "Testing...")}</span>`;

    try {
      const resp = await csrfFetch("/admin/filters/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule: rule, text: sampleText }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        resultEl.innerHTML = `<span style="color:var(--hud-crimson)">${escapeHtml(data.error || "Test failed")}</span>`;
        return;
      }

      let resultHtml = "";
      if (data.action === "block") {
        resultHtml = `<span style="color:var(--hud-crimson);font-weight:600">${t("blocked", "BLOCKED")}</span>`;
      } else if (data.action === "replace") {
        resultHtml = `<span style="color:var(--hud-amber);font-weight:600">${t("replaced", "REPLACED")}</span>` +
          ` <span style="color:var(--color-text-secondary)">\u2192 ${escapeHtml(data.text)}</span>`;
      } else if (data.action === "allow") {
        resultHtml = `<span style="color:var(--hud-lime);font-weight:600">${t("allowed", "ALLOWED")}</span>`;
      } else {
        resultHtml = `<span style="color:var(--color-text-muted)">${t("noMatch", "No match (pass)")}</span>`;
      }

      if (data.reason) {
        resultHtml += `<br/><span style="font-size:11px;color:var(--color-text-muted)">${escapeHtml(data.reason)}</span>`;
      }

      resultEl.innerHTML = resultHtml;
    } catch (err) {
      console.error("Test filter rule error:", err);
      resultEl.innerHTML = `<span style="color:var(--hud-crimson)">${t("testError", "Test error")}</span>`;
    }
  }

  // ── Dynamic form field visibility ────────────────────────────

  function updateFormVisibility() {
    const typeEl = document.getElementById("filterType");
    const replacementRow = document.getElementById("filterReplacementRow");
    const rateLimitRow = document.getElementById("filterRateLimitRow");
    if (!typeEl) return;

    const ruleType = typeEl.value;
    if (replacementRow) {
      replacementRow.style.display = ruleType === "replace" ? "" : "none";
    }
    if (rateLimitRow) {
      rateLimitRow.style.display = ruleType === "rate_limit" ? "grid" : "none";
    }
  }

  function wireFilterChips() {
    const chipRow = document.getElementById("filterTypeChips");
    if (!chipRow) return;
    chipRow.addEventListener("click", (e) => {
      const chip = e.target.closest(".hud-filter-chip");
      if (!chip) return;
      _currentFilter = chip.dataset.filterScope || "all";
      chipRow.querySelectorAll(".hud-filter-chip").forEach((c) => {
        c.classList.toggle("is-active", c.dataset.filterScope === _currentFilter);
      });
      refreshRulesList();
    });
  }

  // ── Live moderation log ──────────────────────────────────────
  // Server has no dedicated filter-match WS event today, so we surface
  // the last 6 danmu_live entries with the shared AdminIdentity stack so
  // operators can spot/block in context. (P3-1 audience-identity adoption.)

  const LIVE_LOG_MAX = 6;
  /** @type {{seq:number, ts:number, action:string, rule_id:string|null, pattern:string, text_excerpt:string, source:string|null}[]} */
  const _liveLogBuffer = [];
  let _liveLogBound = false;
  let _liveLogTimer = 0;
  let _liveLogLastSeq = 0;

  function fmtLogTime(ts) {
    const d = new Date(ts * 1000);  // ts is epoch seconds from server
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function actionColor(action) {
    const a = (action || "").toUpperCase();
    if (a === "BLOCK") return "var(--hud-crimson)";
    if (a === "MASK" || a === "REPLACE") return "var(--hud-amber)";
    if (a === "REVIEW") return "var(--color-primary)";
    if (a === "ALLOW") return "var(--hud-lime)";
    return "var(--color-text-muted)";
  }

  function renderLiveLog() {
    const log = document.getElementById("filterLiveLog");
    if (!log) return;
    if (_liveLogBuffer.length === 0) {
      log.innerHTML = `<div style="color:var(--color-text-muted);text-align:center;padding:10px">\u5c1a\u7121\u4e8b\u4ef6 \u00b7 \u7b49\u5f85\u898f\u5247\u547d\u4e2d...</div>`;
      return;
    }
    log.innerHTML = _liveLogBuffer.map((e) => {
      const ts = fmtLogTime(e.ts);
      const action = (e.action || "").toUpperCase();
      const ac = actionColor(action);
      const text = (e.text_excerpt || "").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
      const pattern = (e.pattern || "").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
      const source = (e.source || "").slice(0, 16);
      const sourceLabel = source ? `\u00b7 ${source}` : "";
      return `<div class="admin-filter-log-row" style="display:grid;grid-template-columns:64px 70px 1fr;gap:10px;align-items:baseline;padding:6px 0;border-bottom:1px dashed var(--hud-line)">
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted)">${ts}</span>
        <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;font-weight:700;color:${ac}">${action}</span>
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\u300c${text}\u300d<span style="color:var(--color-text-muted)"> \u2014 \u898f\u5247 ${pattern} ${sourceLabel}</span></span>
      </div>`;
    }).join("");
  }

  async function pollFilterEvents() {
    try {
      const r = await fetch(`/admin/filters/events?since=${_liveLogLastSeq}`, { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      // Always update 24h stat tiles even if no new events (counts may have
      // dropped off as old events age out of the 24h window).
      if (data.counts_24h) {
        const setStat = (key, val) => {
          const el = document.querySelector(`[data-mod-stat="${key}"]`);
          if (el) el.textContent = val != null ? String(val) : "—";
        };
        setStat("masked", data.counts_24h.MASK || 0);
        setStat("blocked", data.counts_24h.BLOCK || 0);
      }
      if (!Array.isArray(data.events) || data.events.length === 0) return;
      // Server returns newest-first; merge into front (newest first), cap at LIVE_LOG_MAX.
      _liveLogBuffer.unshift(...data.events);
      while (_liveLogBuffer.length > LIVE_LOG_MAX) _liveLogBuffer.pop();
      _liveLogLastSeq = data.latest_seq || _liveLogLastSeq;
      if (document.getElementById("filterLiveLog")) renderLiveLog();
    } catch (_) { /* silent */ }
  }

  function wireLiveLog() {
    if (_liveLogBound) return;
    _liveLogBound = true;
    pollFilterEvents();
    _liveLogTimer = setInterval(pollFilterEvents, 4000);
  }

  // ── 2026-05-18 design v4 P2-1: Quick Filters chips ───────────────
  // Each chip toggles a regex rule via /admin/filters/{add,remove}.
  // Active rule ids are cached in `_quickRuleIds` and named with a
  // sentinel prefix so we can recognise them on rule list refresh.
  const _quickRuleIds = Object.create(null);  // id → rule_id
  const QUICK_NAME_PREFIX = "[QUICK]";

  function _findQuickRuleByLabel(rules, label) {
    return rules.find((r) => (r.name || "").startsWith(QUICK_NAME_PREFIX + " " + label));
  }

  async function _refreshQuickFromRules() {
    const rules = await fetchRules().catch(() => []);
    document.querySelectorAll(".admin-flt-v4__qchip").forEach((chip) => {
      const label = chip.dataset.fltLabel;
      const hit = _findQuickRuleByLabel(rules, label);
      const active = !!hit && hit.enabled !== false;
      chip.classList.toggle("is-active", active);
      if (hit) _quickRuleIds[chip.dataset.fltQuickId] = hit.id || hit.rule_id;
      else delete _quickRuleIds[chip.dataset.fltQuickId];
    });
  }

  async function _toggleQuickFilter(chip) {
    const id = chip.dataset.fltQuickId;
    const pattern = chip.dataset.fltPattern;
    const action = chip.dataset.fltAction;
    const label = chip.dataset.fltLabel;
    const existing = _quickRuleIds[id];
    if (existing) {
      // turn off
      const r = await csrfFetch("/admin/filters/remove", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule_id: existing }),
      });
      if (r.ok) {
        delete _quickRuleIds[id];
        chip.classList.remove("is-active");
        showToast(`已關閉「${label}」`, true);
      } else {
        showToast("關閉失敗", false);
      }
    } else {
      // turn on
      const r = await csrfFetch("/admin/filters/add", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "regex",
          name: `${QUICK_NAME_PREFIX} ${label}`,
          pattern,
          action,
          enabled: true,
          priority: 50,
        }),
      });
      if (r.ok) {
        const data = await r.json().catch(() => ({}));
        if (data.rule_id) _quickRuleIds[id] = data.rule_id;
        chip.classList.add("is-active");
        showToast(`已啟用「${label}」`, true);
      } else {
        const body = await r.json().catch(() => ({}));
        showToast("啟用失敗 · " + (body.error || ""), false);
      }
    }
    // Refresh the rule list too so the regex table reflects the toggle.
    if (typeof renderRules === "function") renderRules();
  }

  function wireQuickFilters() {
    const wrap = document.querySelector("[data-flt-quick]");
    if (!wrap) return;
    wrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".admin-flt-v4__qchip");
      if (!chip) return;
      _toggleQuickFilter(chip);
    });
    _refreshQuickFromRules();
  }

  // ── Initialization ───────────────────────────────────────────

  function init() {
    // Find the settings grid to inject the section
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return; // Not on admin page or not logged in

    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHtml());

    wireFilterChips();
    wireQuickFilters();

    // Type selector changes form visibility
    const typeEl = document.getElementById("filterType");
    if (typeEl) {
      typeEl.addEventListener("change", updateFormVisibility);
    }

    // Add Rule button
    const addBtn = document.getElementById("filterAddBtn");
    if (addBtn) {
      addBtn.addEventListener("click", addRule);
    }

    // Test button
    const testBtn = document.getElementById("filterTestBtn");
    if (testBtn) {
      testBtn.addEventListener("click", testRule);
    }

    // Enter key on test text input
    const testTextEl = document.getElementById("filterTestText");
    if (testTextEl) {
      testTextEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          testRule();
        }
      });
    }

    // Enter key on pattern input triggers add
    const patternEl = document.getElementById("filterPattern");
    if (patternEl) {
      patternEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addRule();
        }
      });
    }

    // Event delegation for toggle and delete in rules list
    const rulesList = document.getElementById("filterRulesList");
    if (rulesList) {
      rulesList.addEventListener("change", (e) => {
        const cb = e.target.closest(".filter-toggle-cb");
        if (cb) {
          toggleRule(cb.dataset.ruleId, cb.checked);
        }
      });

      rulesList.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-delete-btn");
        if (btn) {
          deleteRule(btn.dataset.ruleId);
          return;
        }
        const dot = e.target.closest(".hud-status-dot");
        if (dot) {
          const row = dot.closest(".hud-rule-row");
          const cb = row?.querySelector(".filter-toggle-cb");
          if (cb) {
            cb.checked = !cb.checked;
            toggleRule(cb.dataset.ruleId, cb.checked);
            dot.classList.toggle("is-live", cb.checked);
            dot.classList.toggle("is-paused", !cb.checked);
            row.style.opacity = cb.checked ? "" : "0.45";
          }
        }
      });
    }

    // Initial load
    refreshRulesList();
    wireLiveLog();
    renderLiveLog();
  }

  // admin.js rebuilds the entire DOM via innerHTML on every renderControlPanel()
  // call, so we keep observing and re-inject when our section is wiped out.
  function bootstrap() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById("sec-filters")) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    // Also check immediately
    if (document.getElementById("settings-grid") && !document.getElementById("sec-filters")) {
      init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
