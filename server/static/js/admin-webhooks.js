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

  // D-4：這份 fallback 只在 /admin/webhooks/events 抓不到時頂替，內容
  // 對應 server/services/webhook.py::EVENT_CATALOG。頂層常數 parse 時
  // ServerI18n 尚未 init，故存 labelKey、真正翻譯留給 _eventLabel() 渲染時解析。
  const EVENT_CATALOG_FALLBACK = [
    { slug: "on_danmu", labelKey: "webhooksEvtOnDanmu" },
    { slug: "on_danmu_blocked", labelKey: "webhooksEvtOnDanmuBlocked" },
    { slug: "on_poll_create", labelKey: "webhooksEvtOnPollCreate" },
    { slug: "on_poll_vote", labelKey: "webhooksEvtOnPollVote" },
    { slug: "on_poll_end", labelKey: "webhooksEvtOnPollEnd" },
    { slug: "on_session_start", labelKey: "webhooksEvtOnSessionStart" },
    { slug: "on_session_end", labelKey: "webhooksEvtOnSessionEnd" },
    { slug: "on_overlay_clear", labelKey: "webhooksEvtOnOverlayClear" },
    { slug: "on_audit_alert", labelKey: "webhooksEvtOnAuditAlert" },
    { slug: "on_plugin_change", labelKey: "webhooksEvtOnPluginChange" },
  ];

  function _truncate(str, max) {
    if (!str) return "";
    return str.length > max ? str.slice(0, max) + "…" : str;
  }

  function _formatRelTime(iso) {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      const sec = Math.max(0, (Date.now() - d.getTime()) / 1000);
      if (sec < 60) return ServerI18n.t("webhooksTimeAgoSeconds", { n: Math.floor(sec) });
      if (sec < 3600) return ServerI18n.t("webhooksTimeAgoMinutes", { n: Math.floor(sec / 60) });
      if (sec < 86400) return ServerI18n.t("webhooksTimeAgoHours", { n: Math.floor(sec / 3600) });
      return ServerI18n.t("webhooksTimeAgoDays", { n: Math.floor(sec / 86400) });
    } catch (_) {
      return "—";
    }
  }

  function _formatHostname(url) {
    if (!url) return "—";
    try { return new URL(url).hostname; }
    catch (_) { return _truncate(url, 30); }
  }

  function _statusClassFor(state) {
    if (state === "active") return "is-success";
    if (state === "degraded") return "is-warn";
    return "is-muted";
  }

  let _state = {
    hooks: [],
    deliveries: [],
    stats: null,
    selectedHookId: null,
    deliveryFilter: "all",  // all | failed | 2xx | 5xx
    pollTimer: 0,
    eventCatalog: EVENT_CATALOG_FALLBACK,
    eventCatalogLoaded: false,
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
      <div id="${SECTION_ID}" class="admin-webhooks-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">WEBHOOKS · ${ServerI18n.t("webhooksPageKicker")} · HMAC</div>
          <div class="admin-ui-page-title">Webhooks</div>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("webhooksPageNote")}
          </p>
        </div>

        <div class="admin-wh-grid">
          <div class="admin-wh-main">
            <!-- 4-KPI stats strip -->
            <div class="admin-wh-stats" data-wh-stats></div>

            <!-- Endpoints list -->
            <div class="admin-ui-card admin-wh-endpoints-card">
              <div class="admin-ui-section-head admin-wh-section-head">
                <span class="admin-ui-monolabel">${ServerI18n.t("webhooksEndpointCountLabel", { n: '<span data-wh-count>0</span>' })}</span>
                <span class="admin-ui-spacer" aria-hidden="true"></span>
                <button type="button" class="admin-ui-action is-primary admin-wh-add-btn" data-wh-action="show-add">${ServerI18n.t("webhooksAddEndpointBtn")}</button>
              </div>

              <!-- Inline add form (shown when "+ 新增 endpoint" pressed) -->
              <form id="wh-register-form" class="admin-wh-add-form" hidden autocomplete="off">
                <div class="admin-wh-form-grid">
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">URL</span>
                    <input id="wh-url" type="url" required placeholder="https://example.com/hook" class="admin-ui-input" />
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">FORMAT</span>
                    <select id="wh-format" class="admin-ui-select">
                      <option value="json">JSON</option>
                      <option value="discord">Discord</option>
                      <option value="slack">Slack</option>
                    </select>
                  </label>
                  <label class="admin-wh-form-field">
                    <span class="admin-ui-monolabel">SECRET · HMAC</span>
                    <input id="wh-secret" type="text" placeholder="optional" class="admin-ui-input" />
                  </label>
                </div>
                <fieldset class="admin-wh-form-events">
                  <legend class="admin-ui-monolabel">EVENTS</legend>
                  <div data-wh-register-events></div>
                </fieldset>
                <div class="admin-wh-form-actions">
                  <button type="submit" class="admin-ui-action is-primary admin-wh-form-action">${ServerI18n.t("webhooksRegisterBtn")}</button>
                  <button type="button" class="admin-ui-action admin-wh-form-action" data-wh-action="hide-add">${ServerI18n.t("cancel")}</button>
                </div>
              </form>

              <div id="wh-list" class="admin-ui-list-stack admin-wh-list">
                ${window.AdminSkeletons ? window.AdminSkeletons.html("listRows", { rows: 3 }) : ServerI18n.t("webhooksLoadingFallback")}
              </div>
            </div>

            <!-- Delivery log table -->
            <div class="admin-ui-card admin-wh-log-card">
              <div class="admin-ui-section-head admin-wh-section-head">
                <span class="admin-ui-monolabel">DELIVERY LOG · ${ServerI18n.t("webhooksLogLiveLabel")}</span>
                <span class="admin-ui-spacer" aria-hidden="true"></span>
                <span class="admin-ui-chip-group admin-wh-log-filters" data-wh-log-filters>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter is-active" data-wh-log-filter="all">${ServerI18n.t("webhooksFilterAll")}</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="failed">${ServerI18n.t("webhooksFilterFailed")}</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="2xx">2xx</button>
                  <button type="button" class="admin-ui-chip admin-wh-log-filter" data-wh-log-filter="5xx">5xx</button>
                </span>
              </div>
              <div class="admin-wh-log-row admin-wh-log-row--head">
                <span>TIME</span><span>CODE</span><span>DUR</span>
                <span>ENDPOINT</span><span>EVENT</span><span>RETRY</span>
              </div>
              <div id="wh-log-list" class="admin-ui-list-stack is-tight admin-wh-log-list">
                ${window.AdminSkeletons ? window.AdminSkeletons.html("listRows", { rows: 3 }) : ServerI18n.t("webhooksLoadingFallback")}
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
          // /webhooks/register answers {hook_id}. The old `data.status === "ok"`
          // check never matched, so a successful registration showed the
          // failure toast and the card only appeared on the next 12s poll.
          if (res.ok && data.hook_id) {
            showToast(ServerI18n.t("webhookRegistered"));
            form.reset();
            _renderEventChoices();
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
      const detailToggle = e.target.closest("[data-wh-action='detail-toggle']");
      if (detailToggle) {
        _toggleWebhook(
          detailToggle.dataset.whHookId,
          detailToggle.dataset.whNextEnabled === "1"
        );
        return;
      }
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
    await _ensureEventCatalog();
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

  async function _ensureEventCatalog() {
    if (_state.eventCatalogLoaded) return;
    try {
      const res = await fetch("/admin/webhooks/events", { credentials: "same-origin" });
      if (res.ok) {
        const data = await res.json();
        const events = Array.isArray(data.events) ? data.events : [];
        if (events.length) _state.eventCatalog = events;
      }
    } catch (_) {
      /* keep fallback catalog */
    } finally {
      _state.eventCatalogLoaded = true;
      _renderEventChoices();
    }
  }

  function _eventLabel(evt) {
    const slug = evt && evt.slug ? String(evt.slug) : "";
    // D-4：evt.labelKey 表示這是本檔 EVENT_CATALOG_FALLBACK 的條目，走
    // ServerI18n；否則是 /admin/webhooks/events 抓回的即時後端資料
    // (server/services/webhook.py::EVENT_CATALOG，只有 zh/en 兩語，非本次
    // 遷移範圍)，維持原本 zh/en 組字邏輯。
    if (evt && evt.labelKey) {
      const name = ServerI18n.t(evt.labelKey);
      return {
        slug,
        label: name ? name + " · " + slug : slug,
        title: name,
      };
    }
    const zh = evt && evt.zh ? String(evt.zh) : "";
    const en = evt && evt.en ? String(evt.en) : "";
    // D-4 尾修：這裡原本無視 locale 永遠畫 zh——en/ja/ko 下事件名成了
    // 頁面僅存的中文殘留。後端目錄只有 zh/en 兩語（ja/ko 補齊記在
    // TODOS），非 zh 一律走 en（與 i18next fallbackLng 一致）。
    const isZh = !!(window.ServerI18n && ServerI18n.currentLang === "zh");
    const name = isZh ? (zh || en) : (en || zh);
    return {
      slug,
      label: name ? name + " · " + slug : slug,
      title: zh && en ? zh + " · " + en : (zh || en),
    };
  }

  function _renderEventChoices() {
    const holder = document.querySelector("[data-wh-register-events]");
    if (!holder) return;
    holder.innerHTML = _state.eventCatalog.map(function (evt) {
      const item = _eventLabel(evt);
      if (!item.slug) return "";
      const checked = item.slug === "on_danmu" ? " checked" : "";
      return (
        '<label title="' + _escHtml(item.title) + '">' +
          '<input type="checkbox" name="wh-event" value="' + _escHtml(item.slug) + '"' + checked + ' /> ' +
          _escHtml(item.label) +
        '</label>'
      );
    }).join("");
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
        <div class="k">${ServerI18n.t("webhooksStatEnabledLabel")}</div>
        <div class="v">${s.endpoints_enabled} / ${s.endpoints_total}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDeliveries24hLabel")}</div>
        <div class="v" style="color: var(--color-ink-success)">${s.deliveries_24h.toLocaleString ? s.deliveries_24h.toLocaleString() : s.deliveries_24h}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatFailedLabel")}</div>
        <div class="v" style="color:${s.failed_pending_retry > 0 ? 'var(--hud-amber)' : 'var(--color-text-secondary)'}">${s.failed_pending_retry}</div>
      </div>
      <div class="admin-wh-stat">
        <div class="k">${ServerI18n.t("webhooksStatDroppedLabel", { n: getRetryCap() })}</div>
        <div class="v" style="color:${s.dropped_24h > 0 ? 'var(--hud-crimson)' : 'var(--color-text-secondary)'}">${s.dropped_24h}</div>
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
      // D-6 批次二 (2026-07-29): 一行灰字換共用 AdminEmpty，補上首次使用 CTA。
      list.innerHTML = "";
      const card = window.AdminEmpty.renderCustom({
        icon: "⇌",
        title: ServerI18n.t("webhooksEmptyTitle"),
        desc: ServerI18n.t("webhooksEmptyDesc"),
        actionLabel: ServerI18n.t("webhooksEmptyActionLabel"),
        action: () => {
          const form = document.getElementById("wh-register-form");
          if (form) form.hidden = false;
          document.getElementById("wh-url")?.focus();
        },
      });
      card.dataset.emptyKind = "webhooks";
      list.appendChild(card);
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
    const statusColor = isError === "active" ? "var(--hud-lime)" : isError === "degraded" ? "var(--hud-amber)" : "var(--color-text-secondary)";
    const statusLabel = isError === "active" ? "ACTIVE" : isError === "degraded" ? "DEGRADED" : "PAUSED";
    const selectedCls = _state.selectedHookId === hook.id ? " is-selected" : "";
    const statusClass = _statusClassFor(isError);

    const eventsHtml = (hook.events || []).map(function (e) {
      return '<span class="admin-ui-pill admin-wh-evt-chip">' + _escHtml(e) + '</span>';
    }).join("");

    const warnHtml = hook.last_error
      ? '<div class="admin-wh-card-warn">⚠ ' + _escHtml(_truncate(hook.last_error, 90)) + '</div>'
      : '';

    return `
      <article class="admin-wh-card${selectedCls}" data-wh-hook-row data-wh-hook-id="${hookId}">
        <div class="admin-wh-card-head">
          <span class="dot" style="background:${statusColor};box-shadow:${enabled ? '0 0 6px ' + statusColor : 'none'}"></span>
          <span class="name">${_escHtml(_formatHostname(hook.url))}</span>
          <span class="admin-ui-pill admin-wh-status-pill ${statusClass}">${statusLabel}</span>
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
          <button type="button" class="admin-ui-action admin-wh-card-btn" data-wh-action="test" data-wh-hook-id="${hookId}">${ServerI18n.t("webhooksCardTestBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-wh-card-btn" data-wh-action="settings" data-wh-hook-id="${hookId}">${ServerI18n.t("webhooksCardSettingsBtn")}</button>
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
      list.innerHTML = `<div class="admin-wh-empty">${ServerI18n.t("webhooksLogEmpty")}</div>`;
      return;
    }

    list.innerHTML = filtered.map(function (d) {
      const ts = d.ts ? new Date(d.ts).toLocaleTimeString("zh-TW", { hour12: false }) : "—";
      const codeLabel = d.code ? String(d.code) : "—";
      const codeColor = d.ok ? "var(--hud-lime)" : "var(--hud-crimson)";
      const dur = d.duration_ms ? (d.duration_ms >= 1000 ? (d.duration_ms / 1000).toFixed(1) + "s" : d.duration_ms + "ms") : "—";
      const durColor = d.ok ? "var(--color-text-strong)" : "var(--hud-amber)";
      const ep = _escHtml(_formatHostname(d.hook_url || ""));
      const retries = (d.retries || 0) === 0 ? "—" : "×" + d.retries;
      const retryColor = (d.retries || 0) > 0 ? "var(--hud-amber)" : "var(--color-text-muted)";
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
      ? "var(--color-text-secondary)"
      : (lastStatus && lastStatus >= 400) || hook.last_error
        ? "var(--hud-amber)"
        : "var(--hud-lime)";

    const hookEvents = new Set(hook.events || []);
    const eventsHtml = _state.eventCatalog.map(function (evt) {
      const item = _eventLabel(evt);
      const on = hookEvents.has(item.slug);
      const cls = on ? "is-active is-on" : "";
      return (
        '<label class="admin-ui-chip admin-wh-detail-evt ' + cls + '" title="' +
        _escHtml(item.title) +
        '">' +
          '<span aria-hidden="true">' + (on ? "✓" : "○") + '</span>' +
          '<span>' + _escHtml(item.label) + '</span>' +
        '</label>'
      );
    }).join("");

    const samplePayload = {
      event: (hook.events && hook.events[0]) || "on_danmu",
      ts: Math.floor(Date.now() / 1000),
      hook_id: hook.id,
      data: { text: ServerI18n.t("webhooksSamplePayloadText"), color: "#ffffff", size: 50 },
    };

    detail.innerHTML =
      '<div class="admin-wh-detail-head">' +
        '<span class="dot" style="background:' + dotColor + ';box-shadow:0 0 6px ' + dotColor + '"></span>' +
        '<span class="name">' + _escHtml(_formatHostname(hook.url)) + '</span>' +
        '<span class="admin-ui-spacer" aria-hidden="true"></span>' +
        '<button type="button" class="admin-ui-action admin-wh-detail-close" data-wh-action="close-detail" aria-label="' + ServerI18n.t("webhooksCloseAriaLabel") + '">' + window.AdminUtils.closeIcon + '</button>' +
      '</div>' +
      '<div class="admin-ui-monolabel admin-wh-detail-label">' + ServerI18n.t("webhooksEventSubscriptionsLabel") + '</div>' +
      '<div class="admin-wh-detail-events">' + eventsHtml + '</div>' +
      '<div class="admin-ui-monolabel admin-wh-detail-label">RETRY POLICY</div>' +
      '<div class="admin-wh-detail-policy">' +
        '<div><span class="k">Max retries</span><span class="v">' + (hook.retry_count != null ? hook.retry_count : 3) + '</span></div>' +
        '<div><span class="k">Backoff</span><span class="v">exponential · 1s → 2s → 4s</span></div>' +
        '<div><span class="k">Timeout</span><span class="v">5,000 ms</span></div>' +
        '<div><span class="k">HMAC sign</span><span class="v" style="color: var(--color-ink-success)">' + (hook.secret ? "SHA-256 · X-Webhook-Signature" : ServerI18n.t("webhooksSecretNotSet")) + '</span></div>' +
      '</div>' +
      '<div class="admin-ui-monolabel admin-wh-detail-label">PAYLOAD SAMPLE</div>' +
      '<pre class="admin-wh-detail-payload">' + _escHtml(JSON.stringify(samplePayload, null, 2)) + '</pre>' +
      '<div class="admin-wh-detail-actions">' +
        '<button type="button" class="admin-ui-action is-primary admin-wh-detail-action" data-wh-action="detail-ping" data-wh-hook-id="' + _escHtml(hook.id) + '">' + ServerI18n.t("webhooksDetailPingBtn") + '</button>' +
        '<button type="button" class="admin-ui-action is-warn admin-wh-detail-action" data-wh-action="detail-toggle" data-wh-hook-id="' + _escHtml(hook.id) + '" data-wh-next-enabled="' + (enabled ? "0" : "1") + '">' + (enabled ? ServerI18n.t("webhooksDetailPauseBtn") : ServerI18n.t("webhooksDetailEnableBtn")) + '</button>' +
        '<button type="button" class="admin-ui-action is-danger admin-wh-detail-action" data-wh-action="detail-delete" data-wh-hook-id="' + _escHtml(hook.id) + '">' + ServerI18n.t("webhooksDetailDeleteBtn") + '</button>' +
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
      if (res.ok) showToast(ServerI18n.t("testPayloadSent"));
      else showToast(data.error || ServerI18n.t("testFailed"), false);
      // Brief delay to let the worker thread land + log the delivery.
      setTimeout(loadAll, 1500);
    } catch (err) {
      console.error("Webhook test error:", err);
      showToast(ServerI18n.t("testFailed"), false);
    }
  }

  async function _toggleWebhook(hookId, nextEnabled) {
    if (!hookId) return;
    try {
      const res = await csrfFetch("/admin/webhooks/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId, enabled: nextEnabled }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || ServerI18n.t("webhooksToggleFailed"), false);
        return;
      }
      const hook = _state.hooks.find(function (h) { return h.id === hookId; });
      if (hook) hook.enabled = data.enabled;
      showToast(data.enabled ? ServerI18n.t("webhooksEnabledToast") : ServerI18n.t("webhooksPausedToast"));
      _renderStats();
      _renderEndpoints();
      _renderDetail();
    } catch (err) {
      console.error("Webhook toggle error:", err);
      showToast(ServerI18n.t("webhooksToggleFailed"), false);
    }
  }

  async function _deleteWebhook(hookId) {
    if (!hookId) return;
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("webhooksDeleteModalTitle"),
      subtitle: "DELETE WEBHOOK",
      severity: "danger",
      body: ServerI18n.t("deleteWebhookConfirm"),
      confirmLabel: ServerI18n.t("webhooksConfirmDeleteLabel"),
    });
    if (!ok) return;
    try {
      const res = await csrfFetch("/admin/webhooks/unregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hook_id: hookId }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast(ServerI18n.t("webhookDeleted"));
        if (_state.selectedHookId === hookId) _state.selectedHookId = null;
        loadAll();
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
    injectSection();
  });
})();
