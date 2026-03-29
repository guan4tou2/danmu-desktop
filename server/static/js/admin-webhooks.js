/**
 * Admin Webhooks Management Section
 *
 * Loaded as <script defer> in admin.html after admin.js.
 * Globals: csrfFetch (window.csrfFetch), showToast (window.showToast), ServerI18n (window.ServerI18n)
 */
(function () {
  "use strict";

  var _loadDetailsState = window.AdminUtils.loadDetailsState;
  var _saveDetailsState = window.AdminUtils.saveDetailsState;
  var _escHtml = window.AdminUtils.escapeHtml;

  const SECTION_ID = "sec-webhooks";

  // ---- helpers ----

  function _detailsOpen(id) {
    var state = _loadDetailsState();
    return !!state[id];
  }

  function _saveDetailsOpen(id, open) {
    var state = _loadDetailsState();
    state[id] = open;
    _saveDetailsState(state);
  }

  function _truncate(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max) + "\u2026" : str;
  }

  // ---- inject section ----

  function injectSection() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;

    grid.insertAdjacentHTML(
      "beforeend",
      `
      <details id="${SECTION_ID}" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${_detailsOpen(SECTION_ID) ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">Webhooks</h3>
            <p class="text-sm text-slate-300">Send event notifications to external services</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
        </summary>

        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          <!-- Register form -->
          <form id="wh-register-form" autocomplete="off" class="space-y-3">
            <div>
              <label for="wh-url" class="text-sm font-medium text-slate-300">Payload URL</label>
              <input id="wh-url" type="url" required placeholder="https://example.com/webhook"
                class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300" />
            </div>

            <fieldset>
              <legend class="text-sm font-medium text-slate-300 mb-1">Events</legend>
              <div class="flex flex-wrap gap-3">
                <label class="inline-flex items-center gap-1.5 text-sm text-slate-200 cursor-pointer">
                  <input type="checkbox" name="wh-event" value="on_danmu" class="accent-violet-500 rounded" checked />
                  on_danmu
                </label>
                <label class="inline-flex items-center gap-1.5 text-sm text-slate-200 cursor-pointer">
                  <input type="checkbox" name="wh-event" value="on_poll_create" class="accent-violet-500 rounded" />
                  on_poll_create
                </label>
                <label class="inline-flex items-center gap-1.5 text-sm text-slate-200 cursor-pointer">
                  <input type="checkbox" name="wh-event" value="on_poll_end" class="accent-violet-500 rounded" />
                  on_poll_end
                </label>
              </div>
            </fieldset>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="wh-format" class="text-sm font-medium text-slate-300">Format</label>
                <select id="wh-format"
                  class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300">
                  <option value="json">JSON</option>
                  <option value="discord">Discord</option>
                  <option value="slack">Slack</option>
                </select>
              </div>
              <div>
                <label for="wh-secret" class="text-sm font-medium text-slate-300">Secret <span class="text-slate-500">(optional)</span></label>
                <input id="wh-secret" type="text" placeholder="HMAC secret"
                  class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300" />
              </div>
            </div>

            <button type="submit"
              class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors text-sm font-semibold">
              Register Webhook
            </button>
          </form>

          <!-- Webhook list -->
          <div>
            <h4 class="text-sm font-semibold text-slate-300 mb-2">Registered Webhooks</h4>
            <div id="wh-list" class="space-y-2 text-sm text-slate-400">Loading\u2026</div>
          </div>
        </div>
      </details>
    `
    );

    bindSection();
  }

  // ---- bind events after injection ----

  function bindSection() {
    const detailsEl = document.getElementById(SECTION_ID);
    if (detailsEl) {
      detailsEl.addEventListener("toggle", () => {
        _saveDetailsOpen(SECTION_ID, detailsEl.open);
        if (detailsEl.open) loadWebhooks();
      });
    }

    const form = document.getElementById("wh-register-form");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const url = document.getElementById("wh-url").value.trim();
        if (!url) return;

        const events = Array.from(
          form.querySelectorAll('input[name="wh-event"]:checked')
        ).map((cb) => cb.value);

        if (events.length === 0) {
          showToast("Select at least one event", false);
          return;
        }

        const format = document.getElementById("wh-format").value;
        const secret = document.getElementById("wh-secret").value.trim();

        const payload = { url, events, format };
        if (secret) payload.secret = secret;

        try {
          const res = await csrfFetch("/admin/webhooks/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = await res.json();
          if (res.ok && data.status === "ok") {
            showToast("Webhook registered");
            form.reset();
            const defaultCb = form.querySelector(
              'input[name="wh-event"][value="on_danmu"]'
            );
            if (defaultCb) defaultCb.checked = true;
            loadWebhooks();
          } else {
            showToast(data.error || "Registration failed", false);
          }
        } catch (err) {
          console.error("Webhook register error:", err);
          showToast("Registration failed", false);
        }
      });
    }

    if (detailsEl && detailsEl.open) {
      loadWebhooks();
    }
  }

  // ---- load webhook list ----

  async function loadWebhooks() {
    const listEl = document.getElementById("wh-list");
    if (!listEl) return;

    try {
      const res = await csrfFetch("/admin/webhooks/list");
      const data = await res.json();

      if (!res.ok || !Array.isArray(data.webhooks)) {
        listEl.textContent = data.error || "Failed to load webhooks";
        return;
      }

      const hooks = data.webhooks;
      if (hooks.length === 0) {
        listEl.innerHTML =
          '<p class="text-slate-500 italic">No webhooks registered.</p>';
        return;
      }

      listEl.innerHTML = hooks.map(renderHook).join("");
      _bindHookActions();
    } catch (err) {
      console.error("Webhook list error:", err);
      listEl.textContent = "Failed to load webhooks";
    }
  }

  // ---- render single hook ----

  const FORMAT_COLORS = {
    json: "bg-blue-600/20 text-blue-300",
    discord: "bg-indigo-600/20 text-indigo-300",
    slack: "bg-green-600/20 text-green-300",
  };

  const STATUS_DOT = {
    active: "bg-green-400",
    error: "bg-red-400",
    disabled: "bg-slate-500",
  };

  function renderHook(hook) {
    const hookId = _escHtml(hook.id || hook.hook_id || "");
    const urlDisplay = _escHtml(_truncate(hook.url, 50));
    const format = (hook.format || "json").toLowerCase();
    const status = (hook.status || "active").toLowerCase();
    const events = Array.isArray(hook.events) ? hook.events : [];

    const eventBadges = events
      .map(
        (ev) =>
          `<span class="px-1.5 py-0.5 rounded bg-violet-600/20 text-violet-300 text-xs">${_escHtml(ev)}</span>`
      )
      .join("");

    const formatBadge = `<span class="px-1.5 py-0.5 rounded text-xs ${FORMAT_COLORS[format] || FORMAT_COLORS.json}">${_escHtml(format)}</span>`;

    const dotClass = STATUS_DOT[status] || STATUS_DOT.active;
    const statusIndicator = `<span class="inline-block w-2 h-2 rounded-full ${dotClass}" title="${_escHtml(status)}"></span>`;

    return `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-800/60 rounded-lg border border-slate-700/50" data-hook-id="${hookId}">
          <div class="flex flex-col gap-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              ${statusIndicator}
              <span class="text-slate-200 font-mono text-xs truncate" title="${_escHtml(hook.url)}">${urlDisplay}</span>
              ${formatBadge}
            </div>
            <div class="flex gap-1 flex-wrap">${eventBadges}</div>
          </div>
          <div class="flex gap-2 shrink-0">
            <button type="button" class="wh-test-btn px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-xs font-medium" data-hook-id="${hookId}">
              Test
            </button>
            <button type="button" class="wh-delete-btn px-3 py-1.5 bg-red-600/80 hover:bg-red-500 text-white rounded-lg transition-colors text-xs font-medium" data-hook-id="${hookId}">
              Delete
            </button>
          </div>
        </div>`;
  }

  // ---- actions ----

  function _bindHookActions() {
    document.querySelectorAll(".wh-test-btn").forEach((btn) => {
      btn.addEventListener("click", () => testWebhook(btn.dataset.hookId));
    });
    document.querySelectorAll(".wh-delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => deleteWebhook(btn.dataset.hookId));
    });
  }

  async function testWebhook(hookId) {
    if (!hookId) return;

    const btn = document.querySelector(
      `.wh-test-btn[data-hook-id="${CSS.escape(hookId)}"]`
    );
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending\u2026";
    }

    try {
      const res = await csrfFetch("/admin/webhooks/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok && data.status === "ok") {
        showToast("Test payload sent");
      } else {
        showToast(data.error || "Test failed", false);
      }
    } catch (err) {
      console.error("Webhook test error:", err);
      showToast("Test failed", false);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Test";
      }
    }
  }

  async function deleteWebhook(hookId) {
    if (!hookId) return;
    if (!confirm("Delete this webhook?")) return;

    try {
      const res = await csrfFetch("/admin/webhooks/unregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok && data.status === "ok") {
        showToast("Webhook deleted");
        loadWebhooks();
      } else {
        showToast(data.error || "Delete failed", false);
      }
    } catch (err) {
      console.error("Webhook delete error:", err);
      showToast("Delete failed", false);
    }
  }

  // ---- bootstrap: re-inject on every admin panel rebuild ----

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        injectSection();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    // Also check immediately
    injectSection();
  });
})();
