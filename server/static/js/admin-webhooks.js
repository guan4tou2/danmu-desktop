/**
 * Admin Webhooks Management Section
 *
 * Loaded as <script defer> in admin.html after admin.js.
 * Globals: csrfFetch (window.csrfFetch), showToast (window.showToast), ServerI18n (window.ServerI18n)
 *
 * v2 retrofit: page-level v2 shell (kicker + title + note + card list) replaces
 * legacy <details> accordion — matches Rate Limits / Polls pattern.
 */
(function () {
  "use strict";

  var _escHtml = window.AdminUtils.escapeHtml;

  const SECTION_ID = "sec-webhooks";

  function _truncate(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max) + "\u2026" : str;
  }

  // ---- inject section ----

  function injectSection() {
    const grid =
      document.getElementById("advanced-grid") ||
      document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;

    grid.insertAdjacentHTML(
      "beforeend",
      `
      <div id="${SECTION_ID}" class="admin-webhooks-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">WEBHOOKS · 外部通知 · HMAC</div>
          <div class="admin-v2-title">Webhooks</div>
          <p class="admin-v2-note">
            當彈幕/投票/Overlay 事件發生時,POST 到外部 URL。簽名使用 HMAC-SHA256。
          </p>
        </div>

        <!-- Register form (inline "+ 新增" pattern) -->
        <form id="wh-register-form" class="admin-v2-card" autocomplete="off">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 新增 Webhook</div>
          <div class="admin-webhooks-form">
            <div class="admin-webhooks-field">
              <span class="admin-v2-monolabel">URL</span>
              <input id="wh-url" type="url" required placeholder="https://example.com/hook" class="admin-v2-input" />
            </div>
            <div class="admin-webhooks-field">
              <span class="admin-v2-monolabel">FORMAT</span>
              <select id="wh-format" class="admin-v2-select">
                <option value="json">JSON</option>
                <option value="discord">Discord</option>
                <option value="slack">Slack</option>
              </select>
            </div>
            <div class="admin-webhooks-field">
              <span class="admin-v2-monolabel">SECRET · HMAC</span>
              <input id="wh-secret" type="text" placeholder="optional" class="admin-v2-input" />
            </div>
            <button type="submit" class="admin-poll-btn is-primary">註冊</button>
          </div>
          <fieldset style="margin-top:12px;border:0;padding:0">
            <legend class="admin-v2-monolabel">EVENTS</legend>
            <div class="admin-webhooks-events">
              <label><input type="checkbox" name="wh-event" value="on_danmu" checked /> on_danmu</label>
              <label><input type="checkbox" name="wh-event" value="on_poll_create" /> on_poll_create</label>
              <label><input type="checkbox" name="wh-event" value="on_poll_end" /> on_poll_end</label>
            </div>
          </fieldset>
        </form>

        <!-- Webhook list -->
        <div class="admin-v2-card" style="padding:14px 14px 10px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">REGISTERED</span>
            <span class="admin-v2-monolabel" style="margin-left:auto" id="wh-count">—</span>
          </div>
          <div id="wh-list" class="admin-webhooks-list">
            <div class="admin-webhooks-empty">載入中…</div>
          </div>
        </div>
      </div>
    `
    );

    bindSection();
  }

  // ---- bind events after injection ----

  function bindSection() {
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
          showToast(ServerI18n.t("selectAtLeastOneEvent"), false);
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
            showToast(ServerI18n.t("webhookRegistered"));
            form.reset();
            const defaultCb = form.querySelector(
              'input[name="wh-event"][value="on_danmu"]'
            );
            if (defaultCb) defaultCb.checked = true;
            loadWebhooks();
          } else {
            showToast(data.error || ServerI18n.t("registrationFailed"), false);
          }
        } catch (err) {
          console.error("Webhook register error:", err);
          showToast(ServerI18n.t("registrationFailed"), false);
        }
      });
    }

    loadWebhooks();
  }

  // ---- load webhook list ----

  async function loadWebhooks() {
    const listEl = document.getElementById("wh-list");
    const countEl = document.getElementById("wh-count");
    if (!listEl) return;

    try {
      const res = await csrfFetch("/admin/webhooks/list");
      const data = await res.json();

      if (!res.ok || !Array.isArray(data.webhooks)) {
        listEl.innerHTML = `<div class="admin-webhooks-empty">${_escHtml(data.error || ServerI18n.t("loadWebhooksFailed"))}</div>`;
        if (countEl) countEl.textContent = "—";
        return;
      }

      const hooks = data.webhooks;
      if (countEl) countEl.textContent = hooks.length + " 項";

      if (hooks.length === 0) {
        listEl.innerHTML = `<div class="admin-webhooks-empty">${_escHtml(ServerI18n.t("noWebhooksRegistered"))}</div>`;
        return;
      }

      listEl.innerHTML = hooks.map(renderHook).join("");
      _bindHookActions();
    } catch (err) {
      console.error("Webhook list error:", err);
      listEl.innerHTML = `<div class="admin-webhooks-empty">${_escHtml(ServerI18n.t("loadWebhooksFailed"))}</div>`;
    }
  }

  // ---- render single hook ----

  const STATUS_CLASS = {
    active: "is-good",
    error: "is-bad",
    disabled: "",
  };

  function renderHook(hook) {
    const hookId = _escHtml(hook.id || hook.hook_id || "");
    const urlDisplay = _escHtml(_truncate(hook.url, 64));
    const format = (hook.format || "json").toLowerCase();
    const status = (hook.status || "active").toLowerCase();
    const events = Array.isArray(hook.events) ? hook.events : [];

    const dotClass = STATUS_CLASS[status] || "";
    const eventChips = events
      .map(
        (ev) =>
          `<span class="admin-v2-chip is-on">${_escHtml(ev)}</span>`
      )
      .join("");
    const formatChip = `<span class="admin-v2-chip">${_escHtml(format)}</span>`;

    return `
        <div class="admin-webhooks-row" data-hook-id="${hookId}">
          <span class="admin-v2-dot ${dotClass}" title="${_escHtml(status)}"></span>
          <div class="admin-webhooks-row-body">
            <div class="admin-webhooks-url" title="${_escHtml(hook.url)}">${urlDisplay}</div>
            <div class="admin-webhooks-meta">${formatChip}${eventChips}</div>
          </div>
          <div class="admin-webhooks-actions">
            <button type="button" class="wh-test-btn admin-poll-btn is-ghost" data-hook-id="${hookId}">
              ${_escHtml(ServerI18n.t("testBtn"))}
            </button>
            <button type="button" class="wh-delete-btn admin-poll-btn is-ghost" data-hook-id="${hookId}" style="color:#f87171;border-color:#f87171">
              ${_escHtml(ServerI18n.t("deleteBtn"))}
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
      btn.textContent = ServerI18n.t("testSending");
    }

    try {
      const res = await csrfFetch("/admin/webhooks/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok && data.status === "ok") {
        showToast(ServerI18n.t("testPayloadSent"));
      } else {
        showToast(data.error || ServerI18n.t("testFailed"), false);
      }
    } catch (err) {
      console.error("Webhook test error:", err);
      showToast(ServerI18n.t("testFailed"), false);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = ServerI18n.t("testBtn");
      }
    }
  }

  async function deleteWebhook(hookId) {
    if (!hookId) return;
    if (!confirm(ServerI18n.t("deleteWebhookConfirm"))) return;

    try {
      const res = await csrfFetch("/admin/webhooks/unregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok && data.status === "ok") {
        showToast(ServerI18n.t("webhookDeleted"));
        loadWebhooks();
      } else {
        showToast(data.error || ServerI18n.t("deleteFailed"), false);
      }
    } catch (err) {
      console.error("Webhook delete error:", err);
      showToast(ServerI18n.t("deleteFailed"), false);
    }
  }

  // ---- bootstrap: re-inject on every admin panel rebuild ----

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (
        (document.getElementById("advanced-grid") ||
          document.getElementById("settings-grid")) &&
        !document.getElementById(SECTION_ID)
      ) {
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
