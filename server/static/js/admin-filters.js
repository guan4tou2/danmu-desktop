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
    block: "#f87171",
    replace: "#fbbf24",
    allow: "#a3e635",
  };

  // ── Section HTML ─────────────────────────────────────────────

  function buildSectionHtml() {
    return `
      <div id="sec-filters" class="hud-page-stack lg:col-span-2">
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
                    <select id="filterType" class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400">
                      <option value="keyword">keyword</option>
                      <option value="regex">regex</option>
                      <option value="replace">replace</option>
                      <option value="rate_limit">rate_limit</option>
                    </select>
                  </div>
                  <div>
                    <label for="filterAction" class="admin-v3-card-kicker" style="margin:0">ACTION</label>
                    <select id="filterAction" class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400">
                      <option value="block">block</option>
                      <option value="replace">replace</option>
                      <option value="allow">allow</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="filterPattern" class="admin-v3-card-kicker" style="margin:0">PATTERN</label>
                  <input type="text" id="filterPattern" placeholder="${t("filterPatternPlaceholder", "Enter pattern...")}"
                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400" />
                </div>
                <div id="filterReplacementRow" class="hidden">
                  <label for="filterReplacement" class="admin-v3-card-kicker" style="margin:0">REPLACEMENT</label>
                  <input type="text" id="filterReplacement" placeholder="${t("filterReplacementPlaceholder", "Replacement text...")}"
                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400" />
                </div>
                <div id="filterRateLimitRow" class="hidden" style="display:none;grid-template-columns:1fr 1fr;gap:8px">
                  <div>
                    <label for="filterMaxCount" class="admin-v3-card-kicker" style="margin:0">MAX COUNT</label>
                    <input type="number" id="filterMaxCount" value="5" min="1" max="1000"
                      class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400" />
                  </div>
                  <div>
                    <label for="filterWindowSec" class="admin-v3-card-kicker" style="margin:0">WINDOW (SEC)</label>
                    <input type="number" id="filterWindowSec" value="60" min="1" max="86400"
                      class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400" />
                  </div>
                </div>
                <div>
                  <label for="filterPriority" class="admin-v3-card-kicker" style="margin:0">PRIORITY \u00b7 \u5c0f\u7684\u5148\u884c</label>
                  <input type="number" id="filterPriority" value="0" min="-9999" max="9999"
                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400" />
                </div>
                <button id="filterAddBtn" type="button" class="hud-toolbar-action is-primary" style="margin-top:4px">
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
                  class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400" />
                <button id="filterTestBtn" type="button" class="hud-toolbar-action" style="align-self:flex-start">${t("testBtn", "Test")}</button>
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
    const actionCol = ACTION_COLOR[rule.action] || "#94a3b8";
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
    if (rules.length === 0) {
      list.innerHTML = `<div style="padding:18px 14px;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${t("noFilterRules", "No filter rules configured.")}</div>`;
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

    resultEl.innerHTML = `<span class="text-slate-400">${t("testing", "Testing...")}</span>`;

    try {
      const resp = await csrfFetch("/admin/filters/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rule: rule, text: sampleText }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        resultEl.innerHTML = `<span class="text-red-400">${escapeHtml(data.error || "Test failed")}</span>`;
        return;
      }

      let resultHtml = "";
      if (data.action === "block") {
        resultHtml = `<span class="text-red-400 font-semibold">${t("blocked", "BLOCKED")}</span>`;
      } else if (data.action === "replace") {
        resultHtml = `<span class="text-amber-400 font-semibold">${t("replaced", "REPLACED")}</span>` +
          ` <span class="text-slate-300">\u2192 ${escapeHtml(data.text)}</span>`;
      } else if (data.action === "allow") {
        resultHtml = `<span class="text-green-400 font-semibold">${t("allowed", "ALLOWED")}</span>`;
      } else {
        resultHtml = `<span class="text-slate-400">${t("noMatch", "No match (pass)")}</span>`;
      }

      if (data.reason) {
        resultHtml += `<br/><span class="text-xs text-slate-400">${escapeHtml(data.reason)}</span>`;
      }

      resultEl.innerHTML = resultHtml;
    } catch (err) {
      console.error("Test filter rule error:", err);
      resultEl.innerHTML = `<span class="text-red-400">${t("testError", "Test error")}</span>`;
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

  // ── Initialization ───────────────────────────────────────────

  function init() {
    // Find the settings grid to inject the section
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return; // Not on admin page or not logged in

    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHtml());

    wireFilterChips();

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
