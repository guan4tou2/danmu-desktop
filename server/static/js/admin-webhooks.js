/**
 * Admin Webhooks Management Section — prototype admin-batch6.jsx:6
 * AdminWebhooksPage retrofit.
 *
 * Layout (1fr 380px grid):
 *   MAIN
 *     - 4-KPI stats strip (已啟用 / 近 24h 推送 / 失敗 / 已放棄)
 *     - Endpoints list cards with success-rate bar + counters + 設定/測試 buttons
 *     - Delivery log table (7 col + filter chips: 全部 / 失敗 / 2xx / 5xx)
 *   RIGHT (380px)
 *     - Selected endpoint detail: event subscription matrix + retry policy
 *     - Payload sample (live JSON) + 送 ping / 暫停 / 刪除 actions
 *
 * BE additions in this same retrofit (server/services/webhook.py):
 *   - WebhookConfig.success_count / fail_count / last_delivery_at
 *   - WebhookService._delivery_log ring buffer (100 entries)
 *   - GET /admin/webhooks/deliveries?limit=N → { deliveries, stats }
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch, showToast,
 * ServerI18n.
 */
(function () {
  "use strict";

  var _escHtml = window.AdminUtils.escapeHtml;
  const SECTION_ID = "sec-webhooks";
  const POLL_INTERVAL_MS = 12000;

  // Match prototype event keys (legacy ones our BE supports).
  // BE _VALID_EVENTS is currently { on_danmu, on_poll_create, on_poll_end },
  // but the prototype proposes a wider set. We render the prototype keys
  // and only persist subset that BE accepts.
  const PROTOTYPE_EVENT_KEYS = [
    "message.created",
    "message.pinned",
    "message.blocked",
    "poll.opened",
    "poll.closed",
    "session.started",
    "session.ended",
    "fire-token.rate-near",
    "fire-token.rotated",
    "system.error",
  ];

  // Map prototype keys ↔ BE keys (best-effort; unknown stays as-is).
  // The BE event vocabulary mismatch is captured in §C BE-pending — Design
  // owns when to expand `_VALID_EVENTS`.
  const BE_EVENT_KEYS = ["on_danmu", "on_poll_create", "on_poll_end"];

  function _truncate(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max) + "…" : str;
  }

  function _formatRelTime(iso) {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      const sec = Math.max(0, (Date.now() - d.getTime()) / 1000);
      if (sec < 60) return Math.floor(sec) + " 秒前";
      if (sec < 3600) return Math.floor(sec / 60) + " 分鐘前";
      if (sec < 86400) return Math.floor(sec / 3600) + " 小時前";
      return Math.floor(sec / 86400) + " 天前";
    } catch (_) {
      return "—";
    }
  }

  function _formatHostname(url) {
    if (!url) return "—";
    try { return new URL(url).hostname; }
    catch (_) { return _truncate(url, 30); }
  }

  let _state = {
    hooks: [],
    deliveries: [],
    stats: null,
    selectedHookId: null,
    deliveryFilter: "all",  // all | failed | 2xx | 5xx
    pollTimer: 0,
  };

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
            集中管理外部通知 endpoints。簽名使用 HMAC-SHA256（X-Webhook-Signature）。
            事件觸發時 fire-and-forget 並重試最多 N 次（指數退避 1s/2s/4s）。
          </p>
        </div>

        <div class="admin-wh-grid">
          <div class="admin-wh-main">
            <!-- 4-KPI stats strip -->
            <div class="admin-wh-stats" data-wh-stats></div>

            <!-- Endpoints list -->
            <div class="admin-v2-card admin-wh-endpoints-card">
              <div class="admin-wh-section-head">
                <span class="admin-v2-monolabel">ENDPOINTS · <span data-wh-count>0</span> 個</span>
                <button type="button" class="admin-wh-add-btn" data-wh-action="show-add">＋ 新增 endpoint</button>
              </div>

              <!-- Inline add form (shown when "+ 新增 endpoint" pressed) -->
              <form id="wh-register-form" class="admin-wh-add-form" hidden autocomplete="off">
                <div class="admin-wh-form-grid">
                  <label class="admin-wh-form-field">
                    <span class="admin-v2-monolabel">URL</span>
                    <input id="wh-url" type="url" required placeholder="https://example.com/hook" class="admin-v2-input" />
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-v2-monolabel">FORMAT</span>
                    <select id="wh-format" class="admin-v2-select">
                      <option value="json">JSON</option>
                      <option value="discord">Discord</option>
                      <option value="slack">Slack</option>
                    </select>
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-v2-monolabel">SECRET · HMAC</span>
                    <input id="wh-secret" type="text" placeholder="optional" class="admin-v2-input" />
                  </label>
                </div>
                <fieldset class="admin-wh-form-events">
                  <legend class="admin-v2-monolabel">EVENTS</legend>
                  <label><input type="checkbox" name="wh-event" value="on_danmu" checked /> on_danmu</label>
                  <label><input type="checkbox" name="wh-event" value="on_poll_create" /> on_poll_create</label>
                  <label><input type="checkbox" name="wh-event" value="on_poll_end" /> on_poll_end</label>
                </fieldset>
                <div class="admin-wh-form-actions">
                  <button type="submit" class="admin-poll-btn is-primary">註冊</button>
                  <button type="button" class="admin-poll-btn is-ghost" data-wh-action="hide-add">取消</button>
                </div>
              </form>

              <div id="wh-list" class="admin-wh-list">
                <div class="admin-wh-empty">載入中…</div>
              </div>
            </div>

            <!-- Delivery log table -->
            <div class="admin-v2-card admin-wh-log-card">
              <div class="admin-wh-section-head">
                <span class="admin-v2-monolabel">DELIVERY LOG · 即時</span>
                <span class="admin-wh-log-filters" data-wh-log-filters>
                  <button type="button" class="chip is-active" data-wh-log-filter="all">全部</button>
                  <button type="button" class="chip" data-wh-log-filter="failed">失敗</button>
                  <button type="button" class="chip" data-wh-log-filter="2xx">2xx</button>
                  <button type="button" class="chip" data-wh-log-filter="5xx">5xx</button>
                </span>
              </div>
              <div class="admin-wh-log-row admin-wh-log-row--head">
                <span>TIME</span><span>CODE</span><span>DUR</span>
                <span>ENDPOINT</span><span>EVENT</span><span>RETRY</span>
              </div>
              <div id="wh-log-list" class="admin-wh-log-list">
                <div class="admin-wh-empty">載入中…</div>
              </div>
            </div>
          </div>

          <aside class="admin-wh-detail" data-wh-detail hidden>
            <!-- populated by _renderDetail() -->
          </aside>
        </div>
      </div>
    `
    );

    bindSection();
  }

  // ---- bind events after injection ----

  function bindSection() {
    const page = document.getElementById(SECTION_ID);
    if (!page) return;

    // Add-form submit
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
            form.hidden = true;
            await loadAll();
          } else {
            showToast(data.error || ServerI18n.t("registrationFailed"), false);
          }
        } catch (err) {
          console.error("Webhook register error:", err);
          showToast(ServerI18n.t("registrationFailed"), false);
        }
      });
    }

    page.addEventListener("click", (e) => {
      // Show / hide add form
      const showAdd = e.target.closest("[data-wh-action='show-add']");
      if (showAdd) { if (form) form.hidden = false; return; }
      const hideAdd = e.target.closest("[data-wh-action='hide-add']");
      if (hideAdd) { if (form) form.hidden = true; return; }

      // Delivery log filter
      const logFilter = e.target.closest("[data-wh-log-filter]");
      if (logFilter) {
        _state.deliveryFilter = logFilter.dataset.whLogFilter;
        page.querySelectorAll("[data-wh-log-filter]").forEach((b) => {
          b.classList.toggle("is-active", b.dataset.whLogFilter === _state.deliveryFilter);
        });
        _renderLog();
        return;
      }

      // Endpoint card actions
      const testBtn = e.target.closest("[data-wh-action='test']");
      if (testBtn) { e.stopPropagation(); _testWebhook(testBtn.dataset.whHookId); return; }

      const settingsBtn = e.target.closest("[data-wh-action='settings']");
      if (settingsBtn) {
        e.stopPropagation();
        _selectHook(settingsBtn.dataset.whHookId);
        return;
      }

      // Detail panel actions
      const closeDetail = e.target.closest("[data-wh-action='close-detail']");
      if (closeDetail) {
        _state.selectedHookId = null;
        _renderDetail();
        _renderEndpoints();
        return;
      }
      const detailPing = e.target.closest("[data-wh-action='detail-ping']");
      if (detailPing) { _testWebhook(detailPing.dataset.whHookId); return; }
      const detailDelete = e.target.closest("[data-wh-action='detail-delete']");
      if (detailDelete) { _deleteWebhook(detailDelete.dataset.whHookId); return; }

      // Click endpoint row → open detail
      const row = e.target.closest("[data-wh-hook-row]");
      if (row && !e.target.closest("button")) {
        _selectHook(row.dataset.whHookId);
        return;
      }
    });

    loadAll();
    if (!_state.pollTimer) _state.pollTimer = setInterval(loadAll, POLL_INTERVAL_MS);
  }

  // ---- data ----

  async function loadAll() {
    await Promise.all([_loadHooks(), _loadDeliveries()]);
    _renderStats();
    _renderEndpoints();
    _renderLog();
    _renderDetail();
  }

  async function _loadHooks() {
    try {
      const res = await csrfFetch("/admin/webhooks/list");
      const data = await res.json();
      _state.hooks = Array.isArray(data.webhooks) ? data.webhooks : [];
    } catch (_) {
      _state.hooks = [];
    }
  }

  async function _loadDeliveries() {
    try {
      const res = await fetch("/admin/webhooks/deliveries?limit=50", { credentials: "same-origin" });
      if (!res.ok) return;
      const data = await res.json();
      _state.deliveries = Array.isArray(data.deliveries) ? data.deliveries : [];
      _state.stats = data.stats || null;
    } catch (_) { /* silent */ }
  }

  // ---- render: 4-KPI stats strip ----

  function _renderStats() {
    const el = document.querySelector("[data-wh-stats]");
    if (!el) return;
    const s = _state.stats || {
      endpoints_enabled: 0, endpoints_total: 0,
      deliveries_24h: 0, failed_pending_retry: 0, dropped_24h: 0,
    };
    el.innerHTML = `
      <div class="admin-wh-stat">
        <div class="k">已啟用 ENDPOINTS</div>
        <div class="v">${s.endpoints_enabled} / ${s.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">近 24H 推送</div>
        <div class="v" style="color:#86efac">${s.deliveries_24h.toLocaleString ? s.deliveries_24h.toLocaleString() : s.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">失敗（待重試）</div>
        <div class="v" style="color:${s.failed_pending_retry > 0 ? '#fbbf24' : '#94a3b8'}">${s.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">已放棄（&gt; ${getRetryCap()} 次）</div>
        <div class="v" style="color:${s.dropped_24h > 0 ? '#f87171' : '#94a3b8'}">${s.dropped_24h}</div>
      </div>`;
  }

  function getRetryCap() {
    // Derive most-common retry_count for the legend; defaults to 3.
    if (!_state.hooks.length) return 3;
    return _state.hooks[0].retry_count || 3;
  }

  // ---- render: endpoints list ----

  function _renderEndpoints() {
    const list = document.getElementById("wh-list");
    const count = document.querySelector("[data-wh-count]");
    if (!list) return;
    if (count) count.textContent = String(_state.hooks.length);

    if (_state.hooks.length === 0) {
      list.innerHTML = '<div class="admin-wh-empty">尚未註冊 webhook</div>';
      return;
    }
    list.innerHTML = _state.hooks.map(_renderHookCard).join("");
  }

  function _renderHookCard(hook) {
    const hookId = _escHtml(hook.id || "");
    const success = Number(hook.success_count) || 0;
    const fail = Number(hook.fail_count) || 0;
    const total = success + fail;
    const successRate = total > 0 ? Math.round((success / total) * 1000) / 10 : 100;
    const enabled = hook.enabled !== false;
    const lastStatus = Number(hook.last_status) || null;
    const isError = !enabled
      ? "paused"
      : (lastStatus && lastStatus >= 400) || hook.last_error
        ? "degraded"
        : "active";
    const statusColor = isError === "active" ? "#86efac" : isError === "degraded" ? "#fbbf24" : "#94a3b8";
    const statusLabel = isError === "active" ? "ACTIVE" : isError === "degraded" ? "DEGRADED" : "PAUSED";
    const selectedCls = _state.selectedHookId === hook.id ? " is-selected" : "";

    const eventsHtml = (hook.events || []).map(function (e) {
      return '<span class="admin-wh-evt-chip">' + _escHtml(e) + '</span>';
    }).join("");

    const warnHtml = hook.last_error
      ? '<div class="admin-wh-card-warn">⚠ ' + _escHtml(_truncate(hook.last_error, 90)) + '</div>'
      : '';

    return `
      <article class="admin-wh-card${selectedCls}" data-wh-hook-row data-wh-hook-id="${hookId}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${statusColor};box-shadow:${enabled ? '0 0 6px ' + statusColor : 'none'}"></span>
          <span class="name">${_escHtml(_formatHostname(hook.url))}</span>
          <span class="status" style="color:${statusColor};border-color:${statusColor}55;background:${statusColor}1c;">${statusLabel}</span>
          <span class="last">last · ${_escHtml(_formatRelTime(hook.last_delivery_at))}</span>
        </div>
        <div class="admin-wh-card-url">${_escHtml(hook.url)}</div>
        <div class="admin-wh-card-events">${eventsHtml}</div>
        ${warnHtml}
        <div class="admin-wh-card-foot">
          <div class="admin-wh-card-rate">
            <span class="lbl">SUCCESS RATE</span>
            <div class="bar"><div class="fill" style="width:${successRate}%;background:${statusColor}"></div></div>
            <span class="pct" style="color:${statusColor}">${successRate}%</span>
          </div>
          <span class="counter ok">✓ ${success.toLocaleString()}</span>
          <span class="counter ${fail > 0 ? 'fail' : 'fail-zero'}">✗ ${fail}</span>
          <button type="button" class="admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${hookId}">↻ 測試</button>
          <button type="button" class="admin-wh-card-btn is-primary" data-wh-action="settings" data-wh-hook-id="${hookId}">⚙ 設定</button>
        </div>
      </article>`;
  }

  // ---- render: delivery log ----

  function _renderLog() {
    const list = document.getElementById("wh-log-list");
    if (!list) return;
    const filtered = _state.deliveries.filter(function (d) {
      if (_state.deliveryFilter === "all") return true;
      if (_state.deliveryFilter === "failed") return !d.ok;
      if (_state.deliveryFilter === "2xx") return d.code && d.code >= 200 && d.code < 300;
      if (_state.deliveryFilter === "5xx") return d.code && d.code >= 500;
      return true;
    });

    if (filtered.length === 0) {
      list.innerHTML = '<div class="admin-wh-empty">尚無 delivery 紀錄</div>';
      return;
    }

    list.innerHTML = filtered.map(function (d) {
      const ts = d.ts ? new Date(d.ts).toLocaleTimeString("zh-TW", { hour12: false }) : "—";
      const codeLabel = d.code ? String(d.code) : "—";
      const codeColor = d.ok ? "#86efac" : "#f87171";
      const dur = d.duration_ms ? (d.duration_ms >= 1000 ? (d.duration_ms / 1000).toFixed(1) + "s" : d.duration_ms + "ms") : "—";
      const durColor = d.ok ? "var(--color-text-strong)" : "#fbbf24";
      const ep = _escHtml(_formatHostname(d.hook_url || ""));
      const retries = (d.retries || 0) === 0 ? "—" : "×" + d.retries;
      const retryColor = (d.retries || 0) > 0 ? "#fbbf24" : "var(--color-text-muted)";
      return `
        <div class="admin-wh-log-row${d.dropped ? ' is-dropped' : ''}">
          <span class="time">${_escHtml(ts)}</span>
          <span class="code" style="color:${codeColor};border-color:${codeColor}55;background:${codeColor}15;">${codeLabel}</span>
          <span class="dur" style="color:${durColor}">${_escHtml(dur)}</span>
          <span class="ep">${ep}</span>
          <span class="evt">${_escHtml(d.event || "")}</span>
          <span class="retry" style="color:${retryColor}">${retries}</span>
        </div>`;
    }).join("");
  }

  // ---- render: right detail panel ----

  function _selectHook(hookId) {
    _state.selectedHookId = hookId;
    _renderEndpoints();
    _renderDetail();
  }

  function _renderDetail() {
    const detail = document.querySelector("[data-wh-detail]");
    if (!detail) return;
    const hook = _state.hooks.find(function (h) { return h.id === _state.selectedHookId; });
    if (!hook) {
      detail.hidden = true;
      detail.innerHTML = "";
      return;
    }
    detail.hidden = false;

    const enabled = hook.enabled !== false;
    const lastStatus = Number(hook.last_status) || null;
    const dotColor = !enabled
      ? "#94a3b8"
      : (lastStatus && lastStatus >= 400) || hook.last_error
        ? "#fbbf24"
        : "#86efac";

    const hookEvents = new Set(hook.events || []);
    const eventsHtml = PROTOTYPE_EVENT_KEYS.map(function (e) {
      const supported = BE_EVENT_KEYS.indexOf(e) >= 0;
      const on = hookEvents.has(e);
      const cls = (on ? "is-on" : "") + (supported ? "" : " is-unsupported");
      return (
        '<label class="admin-wh-detail-evt ' + cls + '" title="' +
        (supported ? "" : "BE 尚未支援此 event（待 §C BE-pending）") +
        '">' +
          '<span class="check">' + (on ? "✓" : "") + '</span>' +
          '<span>' + _escHtml(e) + '</span>' +
          (supported ? '' : '<span class="tag">待 BE</span>') +
        '</label>'
      );
    }).join("");

    const samplePayload = {
      event: (hook.events && hook.events[0]) || "on_danmu",
      ts: Math.floor(Date.now() / 1000),
      hook_id: hook.id,
      data: { text: "示範彈幕", color: "#ffffff", size: 50 },
    };

    detail.innerHTML =
      '<div class="admin-wh-detail-head">' +
        '<span class="dot" style="background:' + dotColor + ';box-shadow:0 0 6px ' + dotColor + '"></span>' +
        '<span class="name">' + _escHtml(_formatHostname(hook.url)) + '</span>' +
        '<button type="button" class="close" data-wh-action="close-detail" aria-label="關閉">✕</button>' +
      '</div>' +
      '<div class="admin-v2-monolabel admin-wh-detail-label">事件訂閱</div>' +
      '<div class="admin-wh-detail-events">' + eventsHtml + '</div>' +
      '<div class="admin-v2-monolabel admin-wh-detail-label">RETRY POLICY</div>' +
      '<div class="admin-wh-detail-policy">' +
        '<div><span class="k">Max retries</span><span class="v">' + (hook.retry_count != null ? hook.retry_count : 3) + '</span></div>' +
        '<div><span class="k">Backoff</span><span class="v">exponential · 1s → 2s → 4s</span></div>' +
        '<div><span class="k">Timeout</span><span class="v">5,000 ms</span></div>' +
        '<div><span class="k">HMAC sign</span><span class="v" style="color:#86efac">' + (hook.secret ? "SHA-256 · X-Webhook-Signature" : "—（未設 secret）") + '</span></div>' +
      '</div>' +
      '<div class="admin-v2-monolabel admin-wh-detail-label">PAYLOAD SAMPLE</div>' +
      '<pre class="admin-wh-detail-payload">' + _escHtml(JSON.stringify(samplePayload, null, 2)) + '</pre>' +
      '<div class="admin-wh-detail-actions">' +
        '<button type="button" class="primary" data-wh-action="detail-ping" data-wh-hook-id="' + _escHtml(hook.id) + '">↻ 送測試 ping</button>' +
        '<div class="admin-be-placeholder-control admin-be-placeholder-inline">[PLACEHOLDER] ' + (enabled ? "⏸ 暫停" : "▶ 啟用") + '（待 BE：/admin/webhooks/toggle）</div>' +
        '<button type="button" class="danger" data-wh-action="detail-delete" data-wh-hook-id="' + _escHtml(hook.id) + '">⊘ 刪除</button>' +
      '</div>';
  }

  // ---- actions ----

  async function _testWebhook(hookId) {
    if (!hookId) return;
    try {
      const res = await csrfFetch("/admin/webhooks/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok) showToast(ServerI18n.t("testPayloadSent") || "已送出測試 payload");
      else showToast(data.error || ServerI18n.t("testFailed") || "測試失敗", false);
      // Brief delay to let the worker thread land + log the delivery.
      setTimeout(loadAll, 1500);
    } catch (err) {
      console.error("Webhook test error:", err);
      showToast(ServerI18n.t("testFailed") || "測試失敗", false);
    }
  }

  async function _deleteWebhook(hookId) {
    if (!hookId) return;
    if (!confirm(ServerI18n.t("deleteWebhookConfirm") || "確定刪除這個 webhook？")) return;
    try {
      const res = await csrfFetch("/admin/webhooks/unregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast(ServerI18n.t("webhookDeleted") || "已刪除");
        if (_state.selectedHookId === hookId) _state.selectedHookId = null;
        loadAll();
      } else {
        showToast(data.error || ServerI18n.t("deleteFailed") || "刪除失敗", false);
      }
    } catch (err) {
      console.error("Webhook delete error:", err);
      showToast(ServerI18n.t("deleteFailed") || "刪除失敗", false);
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
    injectSection();
  });
})();
