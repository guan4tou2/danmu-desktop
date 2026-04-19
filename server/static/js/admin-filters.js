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

  const TYPE_COLORS = {
    keyword: "bg-blue-600/80 text-blue-100",
    regex: "bg-sky-600/80 text-sky-100",
    replace: "bg-amber-600/80 text-amber-100",
    rate_limit: "bg-rose-600/80 text-rose-100",
  };

  const ACTION_COLORS = {
    block: "bg-red-600/80 text-red-100",
    replace: "bg-amber-600/80 text-amber-100",
    allow: "bg-green-600/80 text-green-100",
  };

  function badge(text, colorClass) {
    return `<span class="inline-block px-2 py-0.5 text-xs font-semibold rounded ${colorClass}">${escapeHtml(text)}</span>`;
  }

  // ── Section HTML ─────────────────────────────────────────────

  function buildSectionHtml() {
    return `
      <details id="sec-filters"
        class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24"
        ${isDetailsOpen("sec-filters") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white" data-i18n="filterRulesTitle">${t("filterRulesTitle", "Filter Rules")}</h3>
            <p class="text-sm text-slate-300">${t("filterRulesDesc", "Content filtering rules for danmu messages")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-4">

          <!-- Add Rule Form -->
          <div id="filterRuleForm" class="space-y-2 bg-slate-800/60 p-3 rounded-lg">
            <h4 class="text-sm font-semibold text-slate-200 mb-1">${t("addFilterRule", "Add Rule")}</h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <!-- Type -->
              <div>
                <label for="filterType" class="text-xs text-slate-400">${t("filterType", "Type")}</label>
                <select id="filterType"
                  class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
                  <option value="keyword">keyword</option>
                  <option value="regex">regex</option>
                  <option value="replace">replace</option>
                  <option value="rate_limit">rate_limit</option>
                </select>
              </div>

              <!-- Action -->
              <div>
                <label for="filterAction" class="text-xs text-slate-400">${t("filterAction", "Action")}</label>
                <select id="filterAction"
                  class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
                  <option value="block">block</option>
                  <option value="replace">replace</option>
                  <option value="allow">allow</option>
                </select>
              </div>
            </div>

            <!-- Pattern -->
            <div>
              <label for="filterPattern" class="text-xs text-slate-400">${t("filterPattern", "Pattern")}</label>
              <input type="text" id="filterPattern" placeholder="${t("filterPatternPlaceholder", "Enter pattern...")}"
                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
            </div>

            <!-- Replacement (visible only for replace type) -->
            <div id="filterReplacementRow" class="hidden">
              <label for="filterReplacement" class="text-xs text-slate-400">${t("filterReplacement", "Replacement")}</label>
              <input type="text" id="filterReplacement" placeholder="${t("filterReplacementPlaceholder", "Replacement text...")}"
                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
            </div>

            <!-- Rate limit fields (visible only for rate_limit type) -->
            <div id="filterRateLimitRow" class="hidden grid grid-cols-2 gap-2">
              <div>
                <label for="filterMaxCount" class="text-xs text-slate-400">${t("filterMaxCount", "Max Count")}</label>
                <input type="number" id="filterMaxCount" value="5" min="1" max="1000"
                  class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
              </div>
              <div>
                <label for="filterWindowSec" class="text-xs text-slate-400">${t("filterWindowSec", "Window (sec)")}</label>
                <input type="number" id="filterWindowSec" value="60" min="1" max="86400"
                  class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
              </div>
            </div>

            <!-- Priority -->
            <div>
              <label for="filterPriority" class="text-xs text-slate-400">${t("filterPriority", "Priority")} <span class="text-slate-500">(${t("lowerFirst", "lower = first")})</span></label>
              <input type="number" id="filterPriority" value="0" min="-9999" max="9999"
                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
            </div>

            <button id="filterAddBtn"
              class="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-sm">
              ${t("addRule", "Add Rule")}
            </button>
          </div>

          <!-- Test Rule -->
          <div class="bg-slate-800/60 p-3 rounded-lg space-y-2">
            <h4 class="text-sm font-semibold text-slate-200">${t("testRule", "Test Rule")}</h4>
            <input id="filterTestText" type="text" placeholder="${t("sampleText", "Sample text...")}"
              class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400" />
            <button id="filterTestBtn"
              class="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm font-semibold">
              ${t("testBtn", "Test")}
            </button>
            <div id="filterTestResult" class="text-sm"></div>
          </div>

          <!-- Active Rules List -->
          <div>
            <h4 class="text-sm font-semibold text-slate-200 mb-2">${t("activeRules", "Active Rules")}</h4>
            <div id="filterRulesList" class="space-y-2"></div>
          </div>

        </div>
      </details>`;
  }

  // ── Render a single rule card ────────────────────────────────

  function renderRuleCard(rule) {
    const typeColor = TYPE_COLORS[rule.type] || "bg-slate-600 text-slate-200";
    const actionColor = ACTION_COLORS[rule.action] || "bg-slate-600 text-slate-200";
    const enabledClass = rule.enabled ? "" : "opacity-50";
    const toggleLabel = rule.enabled
      ? t("enabled", "Enabled")
      : t("disabled", "Disabled");

    let extra = "";
    if (rule.type === "replace" && rule.replacement !== undefined) {
      extra += `<span class="text-xs text-slate-400 block mt-1">\u2192 ${escapeHtml(rule.replacement)}</span>`;
    }
    if (rule.type === "rate_limit") {
      const mc = rule.max_count || 5;
      const ws = rule.window_sec || 60;
      extra += `<span class="text-xs text-slate-400 block mt-1">${escapeHtml(String(mc))} / ${escapeHtml(String(ws))}s</span>`;
    }

    return `
      <div class="flex items-start gap-3 bg-slate-800/40 rounded-lg p-3 ${enabledClass}" data-rule-id="${escapeHtml(rule.id)}">
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-1.5 mb-1">
            ${badge(rule.type, typeColor)}
            ${badge(rule.action, actionColor)}
            <span class="text-xs text-slate-500">P${escapeHtml(String(rule.priority))}</span>
          </div>
          <p class="text-sm text-white font-mono break-all">${escapeHtml(rule.pattern)}</p>
          ${extra}
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <label class="relative inline-flex items-center cursor-pointer" title="${escapeHtml(toggleLabel)}">
            <input type="checkbox" class="sr-only peer filter-toggle-cb" data-rule-id="${escapeHtml(rule.id)}" ${rule.enabled ? "checked" : ""} />
            <div class="w-9 h-5 bg-slate-600 peer-focus:ring-2 peer-focus:ring-sky-400 rounded-full peer peer-checked:bg-sky-600 transition-colors
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full">
            </div>
          </label>
          <button class="filter-delete-btn text-red-400 hover:text-red-300 transition-colors p-1" data-rule-id="${escapeHtml(rule.id)}" title="${t("deleteRule", "Delete")}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </div>`;
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
    list.innerHTML = `<span class="text-xs text-slate-500">${t("loading", "Loading...")}</span>`;
    const rules = await fetchRules();
    if (rules.length === 0) {
      list.innerHTML = `<p class="text-xs text-slate-500">${t("noFilterRules", "No filter rules configured.")}</p>`;
      return;
    }
    list.innerHTML = rules.map(renderRuleCard).join("");
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
        resultHtml += `<br/><span class="text-xs text-slate-500">${escapeHtml(data.reason)}</span>`;
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
      replacementRow.classList.toggle("hidden", ruleType !== "replace");
    }
    if (rateLimitRow) {
      rateLimitRow.classList.toggle("hidden", ruleType !== "rate_limit");
    }
  }

  // ── Initialization ───────────────────────────────────────────

  function init() {
    // Find the settings grid to inject the section
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return; // Not on admin page or not logged in

    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHtml());

    // Wire up details toggle persistence
    const detailsEl = document.getElementById("sec-filters");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", () => {
        var state = loadDetailsState();
        state["sec-filters"] = detailsEl.open;
        saveDetailsState(state);
      });
    }

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
