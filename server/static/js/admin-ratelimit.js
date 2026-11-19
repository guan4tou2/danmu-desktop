/**
 * Admin · 發送上限（審核 › 發送上限）。
 *
 * 這一頁只有一個主動作：設定觀眾多快能送一則。
 *
 *   主卡      對象（每位觀眾／每個裝置／全場合計）＋最多幾則＋每多久
 *             送出後冷卻、同時在畫面上的則數
 *   摺疊區    其他請求上限（同一個表單元件，對象換成另外四個）
 *             白名單與黑名單
 *             近期被擋紀錄（含調整建議）
 *
 * 畫面上每一個數字都來自伺服器：
 *   GET  /admin/ratelimit/config   七個對象目前生效的值與可設範圍
 *   POST /admin/ratelimit/apply    儲存一個對象（存檔，重啟後保留）
 *   POST /admin/ratelimit/reset    全部回到伺服器啟動時的值
 *   GET  /admin/metrics            用量、被擋紀錄、調整建議
 * 前三個端點不受「後台動作」上限管——那個上限調太低時要靠它們調回來。
 *
 * Renders into #settings-grid on `admin-panel-rendered`.
 * Globals: csrfFetch / showToast / ServerI18n / AdminUtils / AdminBootstrap.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-ratelimit";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  const t = (key, vars) => ServerI18n.t(key, vars);
  const toast = (msg, ok) => { if (typeof showToast === "function") showToast(msg, ok); };

  // 兩張表單是同一個元件，只差「對象」有哪些、單位是則還是次。
  const FORMS = {
    viewer: { targets: ["fire", "fire_fingerprint", "fire_global"], unitKey: "rlMaxMessages" },
    other: { targets: ["api", "admin", "login", "fire_admin"], unitKey: "rlMaxRequests" },
  };
  const TARGET_LABEL_KEY = {
    fire: "rlTargetViewer",
    fire_fingerprint: "rlTargetDevice",
    fire_global: "rlTargetRoom",
    api: "ratelimitScopeApiDesc",
    admin: "ratelimitScopeAdminDesc",
    login: "ratelimitScopeLoginDesc",
    fire_admin: "rlTargetTokenLane",
  };
  const WINDOWS = [10, 30, 60, 300, 3600];

  function windowLabel(sec) {
    if (sec >= 3600 && sec % 3600 === 0) return t("rlHours", { n: sec / 3600 });
    if (sec > 60 && sec % 60 === 0) return t("rlMinutes", { n: sec / 60 });
    return t("rlSeconds", { n: sec });
  }

  function formHtml(id) {
    const form = FORMS[id];
    return `
            <div class="admin-ratelimit-form" data-rl-form="${id}">
              <div class="admin-ratelimit-row-body admin-ratelimit-row-body--form">
                <label class="admin-ratelimit-field">
                  <span>${t("rlTargetLabel")}</span>
                  <select data-rl-target>
                    ${form.targets.map((k) => `<option value="${k}">${escapeHtml(t(TARGET_LABEL_KEY[k]))}</option>`).join("")}
                  </select>
                </label>
                <label class="admin-ratelimit-field">
                  <span>${t(form.unitKey)}</span>
                  <input type="number" step="1" inputmode="numeric" data-rl-limit />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${t("rlPer")}</span>
                  <select data-rl-window>
                    ${WINDOWS.map((w) => `<option value="${w}">${escapeHtml(windowLabel(w))}</option>`).join("")}
                  </select>
                </label>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save">${t("ratelimitSaveBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-usage">
                <svg class="admin-ratelimit-sparkline" data-rl-spark viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-bar-text" data-rl-current>—</span>
                <div class="admin-ratelimit-bar" data-rl-bar-wrap hidden>
                  <div class="admin-ratelimit-bar-fill is-blocked" data-rl-bar></div>
                </div>
              </div>
            </div>`;
  }

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-rows">
          <div class="admin-ratelimit-row" data-rl-pace>
            ${formHtml("viewer")}
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${t("ratelimitCooldownLabel")}</span>
                <input type="number" min="0" max="10" step="0.5" inputmode="decimal" data-rl-cooldown />
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-cooldown">${t("ratelimitSaveBtn")}</button>
              </div>
            </div>
            <div class="admin-ratelimit-row-body admin-ratelimit-row-body--pace admin-ratelimit-row-body--next">
              <label class="admin-ratelimit-field">
                <span>${t("ratelimitOnscreenMaxLabel")}</span>
                <input type="number" min="0" max="200" step="1" inputmode="numeric" data-rl-onscreen-max />
              </label>
              <label class="admin-ratelimit-field">
                <span>${t("ratelimitOnscreenModeLabel")}</span>
                <select data-rl-onscreen-mode>
                  <option value="drop">${t("ratelimitOnscreenModeDrop")}</option>
                  <option value="queue">${t("ratelimitOnscreenModeQueue")}</option>
                </select>
              </label>
              <div class="admin-ratelimit-field admin-ratelimit-save-field">
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save-onscreen">${t("ratelimitSaveBtn")}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="hud-stats-strip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value" data-rl-sum-hits>—</span>
            <span class="hud-stat-tile-label" data-rl-sum-hits-delta>${t("ratelimitCalculatingLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-amber" data-rl-sum-viol>—</span>
            <span class="hud-stat-tile-label" data-rl-sum-viol-rate>${t("ratelimitBlockRateLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-crimson" data-rl-sum-locked>—</span>
            <span class="hud-stat-tile-label">${t("ratelimitLoginLabel")} · ${t("ratelimitLockedHint")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-value is-cyan" data-rl-sum-black>—</span>
            <span class="hud-stat-tile-label">${t("ratelimitBlacklistHint")}</span>
          </div>
        </div>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="other">
          <summary class="admin-ui-page-title">${t("rlFoldOther")}</summary>
          <div class="admin-ratelimit-row">
            ${formHtml("other")}
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="ip">
          <summary class="admin-ui-page-title">
            <span>${t("rlFoldIp")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-ip-summary></span>
          </summary>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-ip-form">
              <input type="text" data-rl-ip-input placeholder="${t("ratelimitIpInputPlaceholder")}" maxlength="43" autocomplete="off" spellcheck="false" />
              <select data-rl-ip-select aria-label="${t("ratelimitIpSelectAriaLabel")}">
                <option value="allowlist">${t("ratelimitAllowlistOption")}</option>
                <option value="denylist">${t("ratelimitDenylistOption")}</option>
              </select>
              <button type="button" class="admin-ui-action is-primary" data-rl-ip-add>${t("ratelimitIpAddBtn")}</button>
            </div>
            <div class="admin-ratelimit-ip-error" data-rl-ip-error hidden></div>
            <div class="admin-ratelimit-ip-lists">
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="allowlist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${t("ratelimitAllowlistOption")}</span>
                  <span class="cnt" data-rl-ip-allow-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="allowlist">
                  <div class="admin-ratelimit-vfeed-empty">${t("ratelimitNoEntriesYet", { list: t("ratelimitAllowlistName") })}</div>
                </div>
              </div>
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="denylist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">${t("ratelimitDenylistOption")}</span>
                  <span class="cnt" data-rl-ip-deny-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="denylist">
                  <div class="admin-ratelimit-vfeed-empty">${t("ratelimitNoEntriesYet", { list: t("ratelimitDenylistName") })}</div>
                </div>
              </div>
            </div>
          </div>
        </details>

        <details class="admin-dsp2-fold admin-ratelimit-fold" data-rl-fold="blocked">
          <summary class="admin-ui-page-title">
            <span>${t("rlFoldBlocked")}</span>
            <span class="admin-ratelimit-fold-count" data-rl-vcount></span>
          </summary>
          <div class="admin-ratelimit-suggestions" data-rl-suggestions></div>
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>${t("uiColTime")}</span><span>${t("rlTargetLabel")}</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">${t("ratelimitNoViolationsYet")}</div>
              </div>
            </div>
          </div>
        </details>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-ui-action admin-rl-footer-action" data-rl-action="reset">${t("ratelimitResetBtn")}</button>
        </div>
      </div>`;
  }

  function _wire(section) {
    let config = {}; // 對象 → { limit, window, min, max, default_limit, default_window, saved }
    let stats = {};  // 對象 → { hits, violations, suggestion, bucket_history }
    let suggestionsRevealed = false;
    // 每次儲存或重設加一。開頁時發出的設定請求如果比一次儲存還晚回來，
    // 它帶的是舊值——照著填會讓畫面顯示 20、伺服器其實在跑剛存的 7。
    let configEpoch = 0;

    const forms = Array.from(section.querySelectorAll("[data-rl-form]"));
    const formEls = (form) => ({
      target: form.querySelector("[data-rl-target]"),
      limit: form.querySelector("[data-rl-limit]"),
      window: form.querySelector("[data-rl-window]"),
      current: form.querySelector("[data-rl-current]"),
      barWrap: form.querySelector("[data-rl-bar-wrap]"),
      bar: form.querySelector("[data-rl-bar]"),
      spark: form.querySelector("[data-rl-spark]"),
    });
    const targetLabel = (scope) => t(TARGET_LABEL_KEY[scope] || scope);

    // 填 0 表示關閉這個上限（只有全場合計可以）——關閉時「每多久」沒有意義，
    // 直接停用，不另外寫說明。
    function syncWindowState(form) {
      const e = formEls(form);
      e.window.disabled = e.limit.value.trim() !== "" && Number(e.limit.value) === 0;
    }

    function fillForm(form) {
      const e = formEls(form);
      const c = config[e.target.value];
      if (!c) return;
      e.limit.min = c.min;
      e.limit.max = c.max;
      e.limit.value = c.limit;
      // 環境變數可以設成選單裡沒有的秒數；照實顯示，不要悄悄換成別的值。
      // 這個額外的選項只屬於「目前正在用它」的對象：換對象或存成別的時間窗
      // 之後要拿掉，否則會在另一個對象上選到伺服器不收的值。
      e.window.querySelectorAll("option[data-rl-custom]").forEach((o) => o.remove());
      if (!e.window.querySelector(`option[value="${c.window}"]`)) {
        const opt = document.createElement("option");
        opt.value = String(c.window);
        opt.textContent = windowLabel(c.window);
        opt.dataset.rlCustom = "1";
        e.window.appendChild(opt);
      }
      e.window.value = String(c.window);
      syncWindowState(form);
    }

    function fillUsage(form) {
      const e = formEls(form);
      const row = stats[e.target.value];
      const hits = (row && row.hits) || 0;
      const viol = (row && row.violations) || 0;
      e.current.textContent = row
        ? t("ratelimitHitsViolations", { hits: hits.toLocaleString(), viol: viol.toLocaleString() })
        : "—";
      // 條的長度＝被擋的比例。沒有流量時不畫，免得一條空槽看起來像「0% 用量」。
      e.barWrap.hidden = hits + viol === 0;
      e.bar.style.width = hits + viol === 0 ? "0" : ((viol / (hits + viol)) * 100).toFixed(1) + "%";
      renderSparkline(e.spark, row && (row.bucket_history || row.history));
    }

    function renderSparkline(svgEl, series) {
      if (!svgEl) return;
      const W = 96, H = 24;
      const arr = Array.isArray(series) && series.length ? series.slice(-24) : new Array(24).fill(0);
      const max = Math.max(1, ...arr);
      const step = W / Math.max(1, arr.length - 1);
      const pts = arr.map((v, i) => `${(i * step).toFixed(1)},${(H - 2 - (v / max) * (H - 4)).toFixed(1)}`).join(" ");
      const line = svgEl.querySelector("polyline");
      if (line) line.setAttribute("points", pts);
    }

    async function loadConfig() {
      const epoch = configEpoch;
      try {
        const r = await fetch("/admin/ratelimit/config", { credentials: "same-origin" });
        if (!r.ok) return;
        const body = await r.json();
        // 期間有人存過：這份已經過時，不能用。但也不能就此打住——儲存只更新了
        // 那一個對象，其餘對象還沒有值，換對象時表單會留著上一個對象的數字。
        // 重抓一份完整的。
        if (epoch !== configEpoch) { await loadConfig(); return; }
        config = (body && body.scopes) || {};
        forms.forEach(fillForm);
      } catch (_) { /* 輸入框留白，好過顯示一個不是伺服器給的數字 */ }
    }

    let statsInFlight = false;
    async function loadStats() {
      if (statsInFlight) return;
      statsInFlight = true;
      let m = null;
      try {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (r.ok) m = await r.json();
      } catch (_) { /* */ } finally {
        statsInFlight = false;
      }
      const rl = m && m.rate_limits;
      stats = rl || {};
      forms.forEach(fillUsage);
      if (!m) {
        // 讀不到（例如後台上限用完，這支被擋）：用量顯示「—」，被擋清單維持
        // 原狀——不要把「讀不到」畫成「沒有人被擋」。
        return;
      }
      renderSuggestions();
      renderViolationsFeed(m.recent_violations);

      const viol = section.querySelector("[data-rl-sum-viol]");
      const violRate = section.querySelector("[data-rl-sum-viol-rate]");
      const locked = section.querySelector("[data-rl-sum-locked]");
      if (rl && rl.totals) {
        const tHits = rl.totals.hits || 0;
        const tViol = rl.totals.violations || 0;
        if (viol) viol.textContent = tViol.toLocaleString();
        if (violRate) {
          violRate.textContent = tHits + tViol > 0
            ? t("ratelimitBlockRateValue", { rate: ((tViol / (tHits + tViol)) * 100).toFixed(1) })
            : "—";
        }
        if (locked) locked.textContent = t("ratelimitLockedSources", { n: (rl.totals.locked_sources || 0).toLocaleString() });
      } else {
        if (viol) viol.textContent = "—";
        if (violRate) violRate.textContent = "—";
        if (locked) locked.textContent = "—";
      }
    }

    // 前兩格（24 小時訊息數、黑名單筆數）不是限流資料，優先用頁面載入時
    // 已經抓好的 /admin/bootstrap 快取。
    async function loadTiles() {
      try {
        const Boot = window.AdminBootstrap;
        if (Boot && typeof Boot.primeBootstrap === "function") await Boot.primeBootstrap();
        const cachedHist = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("history_stats") : null;
        const cachedBl = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("blacklist") : null;
        const [histR, blR] = await Promise.all([
          cachedHist ? null : fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }),
          cachedBl ? null : fetch("/admin/blacklist/get", { credentials: "same-origin" }),
        ]);
        const h = cachedHist || (histR && histR.ok ? await histR.json() : null);
        if (h) {
          const hits = section.querySelector("[data-rl-sum-hits]");
          const delta = section.querySelector("[data-rl-sum-hits-delta]");
          if (hits) hits.textContent = ((h.stats && h.stats.last_24h) || 0).toLocaleString();
          if (delta) delta.textContent = t("ratelimitSumTotal", { n: ((h.stats && h.stats.total) || 0).toLocaleString() });
        }
        const b = cachedBl || (blR && blR.ok ? await blR.json() : null);
        if (b) {
          const arr = Array.isArray(b) ? b : (b.entries || b.keywords || []);
          const bl = section.querySelector("[data-rl-sum-black]");
          if (bl) bl.textContent = arr.length ? t("ratelimitCountUnit", { n: arr.length }) : "0";
        }
      } catch (_) { /* silent */ }
    }

    function renderViolationsFeed(events) {
      const body = section.querySelector("[data-rl-vbody]");
      const count = section.querySelector("[data-rl-vcount]");
      if (!body) return;
      const arr = Array.isArray(events) ? events : [];
      if (count) count.textContent = arr.length ? String(arr.length) : "";
      if (arr.length === 0) {
        body.innerHTML = `<div class="admin-ratelimit-vfeed-empty">${t("ratelimitNoViolationsYet")}</div>`;
        return;
      }
      const pad = (n) => String(n).padStart(2, "0");
      const fmtTime = (ts) => {
        const d = new Date(ts * 1000);
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      };
      body.innerHTML = arr.slice(0, 30).map((e) => `
        <div class="admin-ratelimit-vfeed-row">
          <span class="admin-ratelimit-vfeed-time">${fmtTime(e.ts)}</span>
          <span class="admin-ratelimit-vfeed-scope">${escapeHtml(targetLabel(e.scope || ""))}</span>
          <span class="admin-ratelimit-vfeed-ip">${escapeHtml(e.ip || "")}</span>
        </div>
      `).join("");
    }

    function renderSuggestions() {
      const box = section.querySelector("[data-rl-suggestions]");
      if (!box) return;
      box.innerHTML = Object.keys(TARGET_LABEL_KEY).map((scope) => {
        const row = stats[scope];
        const sug = row && row.suggestion;
        if (!sug) return "";
        const detail = t("ratelimitSuggestDetail", {
          p95: Number(sug.p95_per_second || 0).toFixed(2),
          limit: row.limit || "—",
          window: row.window || "—",
          suggLimit: sug.suggested_limit,
          suggWindow: sug.suggested_window,
        });
        return `
          <div class="admin-ratelimit-suggest" data-rl-suggest="${scope}">
            <span class="admin-ratelimit-suggest-icon" aria-hidden="true">▲</span>
            <span class="admin-ratelimit-suggest-body">
              <span class="admin-ratelimit-suggest-title">${escapeHtml(targetLabel(scope))}</span>
              <span class="admin-ratelimit-suggest-detail">${escapeHtml(detail)}</span>
            </span>
            <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${scope}" data-rl-suggest-limit="${Number(sug.suggested_limit)}" data-rl-suggest-window="${Number(sug.suggested_window)}">${t("ratelimitApplySuggestBtn")}</button>
          </div>`;
      }).join("");
      // 有建議時把這一區打開：收在摺疊裡沒人看得到的建議等於沒有。只在第一次
      // 出現時打開，使用者自己收起來之後不再彈開。
      if (box.children.length && !suggestionsRevealed) {
        suggestionsRevealed = true;
        const fold = box.closest("details");
        if (fold) fold.open = true;
      }
    }

    // 送出一個對象的新上限。成功回 true，並把伺服器回的值寫回 config。
    async function saveScope(btn, scope, limit, window_) {
      btn.disabled = true;
      try {
        const resp = await window.csrfFetch("/admin/ratelimit/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scope, limit, window: window_ }),
        });
        if (resp.ok) {
          const body = await resp.json();
          configEpoch += 1;
          config[scope] = Object.assign({}, config[scope], { limit: body.limit, window: body.window, saved: true });
          // persisted === false：新值已經生效，但伺服器寫不進磁碟（唯讀掛載、
          // 擁有者不對）。照實說，不要顯示一個重啟後就不成立的「已儲存」。
          if (body.persisted === false) toast(t("rlNotPersisted"), false);
          else toast(t("ratelimitPaceSavedToast"), true);
          return true;
        }
        const body = await resp.clone().json().catch(() => ({}));
        toast(t("ratelimitApplyFailedToast", { msg: (body && body.error) || `HTTP ${resp.status}` }), false);
      } catch (_) {
        toast(t("ratelimitApplyFailedToast", { msg: t("ratelimitNetworkError") }), false);
      } finally {
        btn.disabled = false;
      }
      return false;
    }

    const paceEls = {
      cooldown: section.querySelector("[data-rl-cooldown]"),
      max: section.querySelector("[data-rl-onscreen-max]"),
      mode: section.querySelector("[data-rl-onscreen-mode]"),
    };

    async function loadPace() {
      try {
        const r = await fetch("/get_settings", { credentials: "same-origin" });
        if (r.ok) {
          const row = (await r.json()).ViewerFireCooldownSec;
          if (paceEls.cooldown && Array.isArray(row)) paceEls.cooldown.value = row[1];
        }
      } catch (_) { /* */ }
      try {
        const r = await fetch("/admin/api/onscreen-limits", { credentials: "same-origin" });
        if (r.ok) {
          const o = await r.json();
          if (paceEls.max) paceEls.max.value = o.max_onscreen_danmu;
          if (paceEls.mode) paceEls.mode.value = o.overflow_mode;
          syncOverflowMode();
        }
      } catch (_) { /* */ }
    }

    // 上限 0 就是不限——沒有東西會「超過」，所以「超過時」直接停用。
    function syncOverflowMode() {
      if (!paceEls.max || !paceEls.mode) return;
      paceEls.mode.disabled = Number(paceEls.max.value) === 0;
    }
    if (paceEls.max) paceEls.max.addEventListener("input", syncOverflowMode);

    async function savePace(btn, url, body) {
      btn.disabled = true;
      try {
        const resp = await window.csrfFetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (resp.ok) {
          toast(t("ratelimitPaceSavedToast"), true);
        } else {
          const data = await resp.clone().json().catch(() => ({}));
          toast(t("ratelimitApplyFailedToast", { msg: (data && data.error) || `HTTP ${resp.status}` }), false);
        }
      } catch (_) {
        toast(t("ratelimitApplyFailedToast", { msg: t("ratelimitNetworkError") }), false);
      } finally {
        btn.disabled = false;
      }
    }

    section.addEventListener("click", async (ev) => {
      const btn = ev.target.closest("[data-rl-action]");
      if (!btn) return;
      const action = btn.dataset.rlAction;

      if (action === "save") {
        const form = btn.closest("[data-rl-form]");
        const e = formEls(form);
        const raw = e.limit.value.trim();
        const limit = Number(raw);
        const window_ = parseInt(e.window.value, 10);
        if (raw === "" || !Number.isInteger(limit) || limit < 0 || !Number.isFinite(window_)) {
          toast(t("ratelimitInvalidInputToast"), false);
          return;
        }
        // 可設範圍是伺服器給的（每個對象不同，例如後台動作不得低於 60）。
        const range = config[e.target.value];
        if (range && (limit < range.min || limit > range.max)) {
          toast(t("rlOutOfRange", { min: range.min, max: range.max }), false);
          return;
        }
        if (await saveScope(btn, e.target.value, limit, window_)) {
          fillForm(form); // 以伺服器回的值重畫（也順手收掉不再適用的額外時間窗選項）
          loadStats();
        }
        return;
      }

      if (action === "apply-suggest") {
        const scope = btn.dataset.rlApply;
        const limit = parseInt(btn.dataset.rlSuggestLimit, 10);
        const window_ = parseInt(btn.dataset.rlSuggestWindow, 10);
        if (!scope || !Number.isFinite(limit) || !Number.isFinite(window_)) return;
        const range = config[scope];
        if (range && (limit < range.min || limit > range.max)) {
          toast(t("rlOutOfRange", { min: range.min, max: range.max }), false);
          return;
        }
        if (await saveScope(btn, scope, limit, window_)) {
          forms.forEach((form) => { if (formEls(form).target.value === scope) fillForm(form); });
          loadStats();
        }
        return;
      }

      if (action === "save-cooldown") {
        const sec = parseFloat(paceEls.cooldown && paceEls.cooldown.value);
        if (!Number.isFinite(sec) || sec < 0 || sec > 10) {
          toast(t("ratelimitInvalidInputToast"), false);
          return;
        }
        await savePace(btn, "/admin/update", { type: "ViewerFireCooldownSec", value: sec, index: 1 });
        return;
      }

      if (action === "save-onscreen") {
        const raw = paceEls.max ? paceEls.max.value.trim() : "";
        const max = Number(raw);
        if (raw === "" || !Number.isInteger(max) || max < 0 || max > 200) {
          toast(t("ratelimitInvalidInputToast"), false);
          return;
        }
        await savePace(btn, "/admin/api/onscreen-limits", {
          max_onscreen_danmu: max,
          overflow_mode: paceEls.mode && paceEls.mode.value === "queue" ? "queue" : "drop",
        });
        return;
      }

      if (action === "reset") {
        // 七個對象全部回到伺服器啟動時的值（環境變數，沒設就是內建預設），
        // 並刪掉存檔。冷卻秒數與畫面上限不在這顆按鈕的範圍。
        btn.disabled = true;
        try {
          const resp = await window.csrfFetch("/admin/ratelimit/reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: "{}",
          });
          if (resp.ok) {
            const body = await resp.json();
            configEpoch += 1;
            config = (body && body.scopes) || config;
            forms.forEach(fillForm);
            loadStats();
            if (body && body.persisted === false) toast(t("rlNotPersisted"), false);
            else toast(t("ratelimitResetDoneToast"), true);
          } else {
            toast(t("ratelimitApplyFailedToast", { msg: `HTTP ${resp.status}` }), false);
          }
        } catch (_) {
          toast(t("ratelimitApplyFailedToast", { msg: t("ratelimitNetworkError") }), false);
        } finally {
          btn.disabled = false;
        }
      }
    });

    section.addEventListener("change", (ev) => {
      const form = ev.target.closest && ev.target.closest("[data-rl-form]");
      if (!form || !ev.target.matches("[data-rl-target]")) return;
      // 換對象：數值與用量都換成那個對象在伺服器上的現況。先用手上的資料
      // 畫，再重抓一次用量——開頁之後進來的彈幕不會自己出現在這裡，而這頁
      // 刻意不做定時輪詢（後台每分鐘的請求數已經很接近自己的上限）。
      fillForm(form);
      fillUsage(form);
      loadStats();
    });
    section.addEventListener("input", (ev) => {
      const form = ev.target.closest && ev.target.closest("[data-rl-form]");
      if (form && ev.target.matches("[data-rl-limit]")) syncWindowState(form);
    });

    // ── IP allow/deny editor ────────────────────────────────────────────
    // Loose client-side check — server does the authoritative validation
    // via ipaddress.ip_network(). Reject only clearly-broken input so we
    // don't round-trip on typos like "abc".
    const IP_HINT_RE = /^([0-9a-f:.]+)(\/\d{1,3})?$/i;
    let ipState = { allowlist: [], denylist: [] };

    const ipEls = {
      input: section.querySelector("[data-rl-ip-input]"),
      select: section.querySelector("[data-rl-ip-select]"),
      addBtn: section.querySelector("[data-rl-ip-add]"),
      summary: section.querySelector("[data-rl-ip-summary]"),
      error: section.querySelector("[data-rl-ip-error]"),
      allowCount: section.querySelector("[data-rl-ip-allow-count]"),
      denyCount: section.querySelector("[data-rl-ip-deny-count]"),
      allowBody: section.querySelector('[data-rl-ip-body="allowlist"]'),
      denyBody: section.querySelector('[data-rl-ip-body="denylist"]'),
    };

    function showIpError(msg) {
      if (!ipEls.error) return;
      if (!msg) { ipEls.error.hidden = true; ipEls.error.textContent = ""; return; }
      ipEls.error.hidden = false;
      ipEls.error.textContent = msg;
    }

    function renderIpList(kind) {
      const body = kind === "allowlist" ? ipEls.allowBody : ipEls.denyBody;
      const count = kind === "allowlist" ? ipEls.allowCount : ipEls.denyCount;
      if (!body || !count) return;
      const arr = Array.isArray(ipState[kind]) ? ipState[kind] : [];
      count.textContent = String(arr.length);
      if (arr.length === 0) {
        const listName = ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName");
        body.innerHTML = `<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet", { list: listName })}</div>`;
        return;
      }
      body.innerHTML = arr.map((entry) => {
        const removeTitle = ServerI18n.t("ratelimitRemoveEntryTitle", { entry: escapeHtml(entry) });
        return `
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${escapeHtml(entry)}">
          <span class="admin-ratelimit-ip-chip-cidr">${escapeHtml(entry)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${escapeHtml(entry)}" data-rl-ip-remove-kind="${kind}" title="${removeTitle}" aria-label="${removeTitle}">×</button>
        </div>
      `;
      }).join("");
    }

    function renderIpAll() {
      renderIpList("allowlist");
      renderIpList("denylist");
      if (ipEls.summary) {
        const a = (ipState.allowlist || []).length;
        const d = (ipState.denylist || []).length;
        ipEls.summary.textContent = ServerI18n.t("ratelimitIpCounts", { allow: a, deny: d });
      }
    }

    async function loadIpRules() {
      try {
        const r = await fetch("/admin/ratelimit/ip-rules", { credentials: "same-origin" });
        if (!r.ok) {
          if (ipEls.summary) ipEls.summary.textContent = ServerI18n.t("ratelimitLoadFailedStatus", { status: r.status });
          return;
        }
        const data = await r.json();
        if (data && typeof data === "object") {
          ipState = {
            allowlist: Array.isArray(data.allowlist) ? data.allowlist : [],
            denylist: Array.isArray(data.denylist) ? data.denylist : [],
          };
          renderIpAll();
        }
      } catch (_) {
        if (ipEls.summary) ipEls.summary.textContent = ServerI18n.t("ratelimitNetworkError");
      }
    }

    async function saveIpRules(patch, { toastLabel } = {}) {
      try {
        const r = await window.csrfFetch("/admin/ratelimit/ip-rules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch),
        });
        if (r.ok) {
          const data = await r.json();
          ipState = {
            allowlist: Array.isArray(data.allowlist) ? data.allowlist : [],
            denylist: Array.isArray(data.denylist) ? data.denylist : [],
          };
          renderIpAll();
          showIpError("");
          if (toastLabel && typeof showToast === "function") showToast(toastLabel, true);
          return true;
        }
        const body = await r.json().catch(() => ({}));
        const msg = (body && body.error) || `HTTP ${r.status}`;
        showIpError(msg);
        return false;
      } catch (_) {
        showIpError(ServerI18n.t("ratelimitNetworkError"));
        return false;
      }
    }

    if (ipEls.addBtn) {
      ipEls.addBtn.addEventListener("click", async () => {
        if (!ipEls.input || !ipEls.select) return;
        const raw = (ipEls.input.value || "").trim();
        if (!raw) { showIpError(ServerI18n.t("ratelimitIpRequiredError")); return; }
        if (!IP_HINT_RE.test(raw)) { showIpError(ServerI18n.t("ratelimitIpFormatError")); return; }
        const kind = ipEls.select.value === "denylist" ? "denylist" : "allowlist";
        const next = Array.from(new Set([...(ipState[kind] || []), raw]));
        const ok = await saveIpRules({ [kind]: next }, {
          toastLabel: ServerI18n.t("ratelimitToastAdded", {
            list: ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName"),
            value: raw,
          }),
        });
        if (ok) ipEls.input.value = "";
      });
    }

    if (ipEls.input) {
      ipEls.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (ipEls.addBtn) ipEls.addBtn.click();
        }
      });
      ipEls.input.addEventListener("input", () => { if (ipEls.error && !ipEls.error.hidden) showIpError(""); });
    }

    section.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-rl-ip-remove]");
      if (!btn) return;
      const entry = btn.dataset.rlIpRemove;
      const kind = btn.dataset.rlIpRemoveKind === "denylist" ? "denylist" : "allowlist";
      const next = (ipState[kind] || []).filter((x) => x !== entry);
      await saveIpRules({ [kind]: next }, {
        toastLabel: ServerI18n.t("ratelimitToastRemoved", {
          list: ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName"),
          value: entry,
        }),
      });
    });

    loadIpRules();
    loadConfig();
    loadPace();
    loadStats();
    loadTiles();
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    const section = document.getElementById(SECTION_ID);
    if (section) _wire(section);
  }

  document.addEventListener("admin-panel-rendered", init);
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    init();
  });
})();
