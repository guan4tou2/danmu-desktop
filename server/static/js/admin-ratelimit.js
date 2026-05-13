/**
 * Admin · Rate Limits page (extracted from admin.js 2026-04-28
 * Group D-3 split, second pass).
 *
 * Owns sec-ratelimit · 4-scope rate-limit editor + summary tiles +
 * sparklines + violations feed. Mirrors prototype admin-ratelimits.jsx.
 *
 * Renders into #settings-grid on `admin-panel-rendered`. Shares the
 * /admin/bootstrap fan-out cache via window.AdminBootstrap.
 *
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

  const ROWS = [
    { key: "fire",  label: "FIRE · 觀眾彈幕",   envLimit: "FIRE_RATE_LIMIT",  envWindow: "FIRE_RATE_WINDOW",  defLimit: 20,  defWindow: 60,  defLockout: null },
    { key: "api",   label: "API · 一般請求",    envLimit: "API_RATE_LIMIT",   envWindow: "API_RATE_WINDOW",   defLimit: 30,  defWindow: 60,  defLockout: null },
    { key: "admin", label: "ADMIN · 後台動作",  envLimit: "ADMIN_RATE_LIMIT", envWindow: "ADMIN_RATE_WINDOW", defLimit: 300, defWindow: 60,  defLockout: null },
    { key: "login", label: "LOGIN · 登入嘗試",  envLimit: "LOGIN_RATE_LIMIT", envWindow: "LOGIN_RATE_WINDOW", defLimit: 5,   defWindow: 300, defLockout: 900 },
  ];

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ratelimit-head">
          <div class="admin-ratelimit-kicker">RATE LIMITS · 4 SCOPES · .env</div>
          <div class="admin-ratelimit-title">請求速率上限</div>
          <p class="admin-ratelimit-note">
            每個來源 IP(或 fingerprint)在時間窗內可發送的請求數上限。
            變更後請 export .env 並 restart server 生效。
          </p>
        </div>

        <div class="admin-ratelimit-summary">
          <div class="tile">
            <span class="lbl">24h 請求</span>
            <span class="val" data-rl-sum-hits>—</span>
            <span class="delta is-muted" data-rl-sum-hits-delta>計算中…</span>
          </div>
          <div class="tile">
            <span class="lbl">24h 違規</span>
            <span class="val" data-rl-sum-viol>—</span>
            <span class="delta is-good" data-rl-sum-viol-rate>命中率 —</span>
          </div>
          <div class="tile">
            <span class="lbl">現正鎖定</span>
            <span class="val" data-rl-sum-locked>—</span>
            <span class="delta is-warn">LOGIN · 滑動視窗自動解除</span>
          </div>
          <div class="tile">
            <span class="lbl">黑名單</span>
            <span class="val" data-rl-sum-black>—</span>
            <span class="delta is-danger">手動加入 · 永久</span>
          </div>
        </div>
        <div class="admin-ratelimit-rows">
          ${ROWS.map((r) => `
            <div class="admin-ratelimit-row" data-rl-key="${r.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${escapeHtml(r.label)}</span>
                <span class="admin-ratelimit-row-env">${r.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>限制 · count</span>
                  <input type="number" min="1" max="1000" value="${r.defLimit}" data-rl-limit="${r.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>窗口 · window</span>
                  <select data-rl-window="${r.key}">
                    <option value="10"${r.defWindow === 10 ? " selected" : ""}>10s</option>
                    <option value="30"${r.defWindow === 30 ? " selected" : ""}>30s</option>
                    <option value="60"${r.defWindow === 60 ? " selected" : ""}>60s</option>
                    <option value="300"${r.defWindow === 300 ? " selected" : ""}>5 min</option>
                    <option value="3600"${r.defWindow === 3600 ? " selected" : ""}>1 hr</option>
                  </select>
                </label>
                ${r.key === "login" ? `
                <label class="admin-ratelimit-field">
                  <span>鎖定 · lockout</span>
                  <input type="number" min="60" max="86400" value="${r.defLockout}" data-rl-lockout="${r.key}" title="觸發後鎖定秒數 · UI-only · 即將支援後端" />
                </label>` : ""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>目前使用</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${r.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${r.key}">—</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-poll-btn is-primary" data-rl-action="save" data-rl-save="${r.key}" title="即時套用至執行中的伺服器(重啟後恢復 env 預設)">即時套用</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${r.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${r.key}">
                  effective_rate = ${r.defLimit} / ${r.defWindow}s = ${(r.defLimit / r.defWindow).toFixed(2)} req/s · burst = ${Math.round(r.defLimit * 1.5)}${r.key === "login" ? " · lock = " + r.defLockout + "s" : ""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${r.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">▲</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">建議調整</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>—</span>
                </span>
                <button type="button" class="admin-poll-btn is-primary" data-rl-action="apply-suggest" data-rl-apply="${r.key}">套用建議</button>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="admin-ratelimit-bottom">
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">近期違規</span>
              <span class="kicker" data-rl-vcount>RECENT VIOLATIONS · 5 分鐘窗口</span>
            </div>
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>TIME</span><span>SCOPE</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">尚無違規 · 等待中</div>
              </div>
            </div>
          </div>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">IP 黑/白名單</span>
              <span class="kicker">IP POLICY · BACKEND PENDING</span>
            </div>
            <div class="admin-ratelimit-ip-input">
              <span class="admin-be-placeholder-control" role="note">[PLACEHOLDER] IP/CIDR 編輯（待 BE endpoint）</span>
            </div>
            <div class="admin-ratelimit-ip-list" id="rlIpList">
              <div class="admin-ratelimit-vfeed-empty">[PLACEHOLDER] 待後端提供可編輯清單</div>
            </div>
          </div>
        </div>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-poll-btn is-ghost" data-rl-action="reset">重設預設</button>
          <button type="button" class="admin-poll-btn is-primary" data-rl-action="export">匯出 .env 片段</button>
        </div>

        <pre id="rlEnvExport" class="admin-ratelimit-export" hidden></pre>
      </div>`;
  }

  function _wire(section) {
    const exportPre = section.querySelector("#rlEnvExport");

    // Fetch summary tiles — prefers bulk /admin/bootstrap cache primed
    // on page load. Falls back to per-endpoint fetches if cache absent.
    setTimeout(async () => {
      try {
        const Boot = window.AdminBootstrap;
        if (Boot && typeof Boot.primeBootstrap === "function") await Boot.primeBootstrap();
        const cachedHist = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("history_stats") : null;
        const cachedBl   = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("blacklist") : null;
        const cachedMet  = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("metrics") : null;
        const need = [];
        need.push(cachedHist ? null : fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }));
        need.push(cachedBl   ? null : fetch("/admin/blacklist/get",            { credentials: "same-origin" }));
        need.push(cachedMet  ? null : fetch("/admin/metrics",                  { credentials: "same-origin" }));
        const [histR, blR, metR] = await Promise.all(need);
        const h = cachedHist || (histR && histR.ok ? await histR.json() : null);
        if (h) {
          const n24 = (h.stats && h.stats.last_24h) || 0;
          const tot = (h.stats && h.stats.total) || 0;
          const hits = section.querySelector("[data-rl-sum-hits]");
          const delta = section.querySelector("[data-rl-sum-hits-delta]");
          if (hits) hits.textContent = n24.toLocaleString();
          if (delta) delta.textContent = `總計 ${tot.toLocaleString()}`;
        }
        const b = cachedBl || (blR && blR.ok ? await blR.json() : null);
        if (b) {
          const arr = Array.isArray(b) ? b : (b.entries || b.keywords || []);
          const bl = section.querySelector("[data-rl-sum-black]");
          if (bl) bl.textContent = arr.length ? arr.length + " 項" : "0";
        }
        const viol = section.querySelector("[data-rl-sum-viol]");
        const violRate = section.querySelector("[data-rl-sum-viol-rate]");
        const locked = section.querySelector("[data-rl-sum-locked]");
        const m = cachedMet || (metR && metR.ok ? await metR.json() : null);
        if (m) {
          const rl = m && m.rate_limits;
          if (rl && rl.totals) {
            const tHits = rl.totals.hits || 0;
            const tViol = rl.totals.violations || 0;
            const tLock = rl.totals.locked_sources || 0;
            if (viol) viol.textContent = tViol.toLocaleString();
            if (violRate) {
              const denom = tHits + tViol;
              violRate.textContent = denom > 0
                ? `阻擋率 ${((tViol / denom) * 100).toFixed(1)}%`
                : "—";
            }
            if (locked) locked.textContent = `${tLock.toLocaleString()} 來源`;
            ROWS.forEach(({ key }) => {
              const row = rl[key];
              const el = section.querySelector(`[data-rl-current="${key}"]`);
              if (el && row) {
                const rh = (row.hits || 0).toLocaleString();
                const rv = (row.violations || 0).toLocaleString();
                el.textContent = `${rh} 次 · ${rv} 違規`;
              }
            });
            _renderSuggestBanners(rl);
          } else {
            if (viol) viol.textContent = "—";
            if (violRate) violRate.textContent = "計數待 backend";
            if (locked) locked.textContent = "—";
          }
        } else {
          if (viol) viol.textContent = "—";
          if (violRate) violRate.textContent = "計數待 backend";
          if (locked) locked.textContent = "—";
        }
        _renderViolationsFeed(m && m.recent_violations);
      } catch (_) { /* silent */ }
    }, 4500);

    function _renderViolationsFeed(events) {
      const body = section.querySelector("[data-rl-vbody]");
      const count = section.querySelector("[data-rl-vcount]");
      if (!body) return;
      const arr = Array.isArray(events) ? events : [];
      if (count) count.textContent = `RECENT VIOLATIONS · ${arr.length} 筆 · 5 分鐘窗口`;
      if (arr.length === 0) {
        body.innerHTML = `<div class="admin-ratelimit-vfeed-empty">尚無違規 · 等待中</div>`;
        return;
      }
      const fmtTime = (ts) => {
        const d = new Date(ts * 1000);
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      };
      const scopeColor = (s) => ({
        fire: "var(--color-primary)",
        api: "#86efac",
        admin: "#fbbf24",
        login: "#f87171",
      }[s] || "var(--color-text-muted)");
      body.innerHTML = arr.slice(0, 30).map((e) => `
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted)">${fmtTime(e.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:1px;font-weight:700;color:${scopeColor(e.scope)}">${(e.scope || "").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${escapeHtml(e.ip || "")}</span>
        </div>
      `).join("");
    }

    function _renderSuggestBanners(rl) {
      if (!rl) return;
      ROWS.forEach(({ key }) => {
        const row = rl[key];
        const banner = section.querySelector(`[data-rl-suggest="${key}"]`);
        if (!banner) return;
        const sug = row && row.suggestion;
        if (!sug) {
          banner.hidden = true;
          return;
        }
        const detail = banner.querySelector("[data-rl-suggest-detail]");
        if (detail) {
          detail.textContent =
            `P95 ${Number(sug.p95_per_second || 0).toFixed(2)} req/s · ` +
            `目前 ${row.limit || "—"} / ${row.window || "—"}s → ` +
            `建議 ${sug.suggested_limit} / ${sug.suggested_window}s`;
        }
        const btn = banner.querySelector("[data-rl-apply]");
        if (btn) {
          btn.dataset.rlSuggestLimit = String(sug.suggested_limit);
          btn.dataset.rlSuggestWindow = String(sug.suggested_window);
        }
        banner.hidden = false;
      });
    }

    async function refreshRateLimitMetrics() {
      try {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        const m = await r.json();
        const rl = m && m.rate_limits;
        if (!rl) return;
        ROWS.forEach(({ key }) => {
          const row = rl[key];
          const el = section.querySelector(`[data-rl-current="${key}"]`);
          if (el && row) {
            const rh = (row.hits || 0).toLocaleString();
            const rv = (row.violations || 0).toLocaleString();
            el.textContent = `${rh} 次 · ${rv} 違規`;
          }
        });
        _renderSuggestBanners(rl);
      } catch (_) { /* silent */ }
    }

    section.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-rl-action]");
      if (!btn) return;
      const action = btn.dataset.rlAction;
      if (action === "save") {
        const scope = btn.dataset.rlSave;
        const limitEl = section.querySelector(`[data-rl-limit="${scope}"]`);
        const winEl = section.querySelector(`[data-rl-window="${scope}"]`);
        if (!limitEl || !winEl) return;
        const limit = parseInt(limitEl.value, 10);
        const window_ = parseInt(winEl.value, 10);
        if (!Number.isFinite(limit) || !Number.isFinite(window_)) {
          if (typeof showToast === "function") showToast("輸入值無效", false);
          return;
        }
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = "套用中…";
        try {
          const resp = await window.csrfFetch("/admin/ratelimit/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ scope, limit, window: window_ }),
          });
          if (resp.ok) {
            if (typeof showToast === "function") {
              showToast(`已即時套用 ${scope.toUpperCase()} = ${limit} / ${window_}s`, true);
            }
            refreshRateLimitMetrics();
          } else {
            const body = await resp.json().catch(() => ({}));
            const msg = (body && body.error) || `HTTP ${resp.status}`;
            if (typeof showToast === "function") showToast(`套用失敗:${msg}`, false);
          }
        } catch (err) {
          if (typeof showToast === "function") showToast("套用失敗:網路錯誤", false);
        } finally {
          btn.disabled = false;
          btn.textContent = orig;
        }
        return;
      }
      if (action === "apply-suggest") {
        const scope = btn.dataset.rlApply;
        const limit = parseInt(btn.dataset.rlSuggestLimit, 10);
        const window_ = parseInt(btn.dataset.rlSuggestWindow, 10);
        if (!scope || !Number.isFinite(limit) || !Number.isFinite(window_)) return;
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = "套用中…";
        try {
          const resp = await window.csrfFetch("/admin/ratelimit/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ scope, limit, window: window_ }),
          });
          if (resp.ok) {
            const limEl = section.querySelector(`[data-rl-limit="${scope}"]`);
            const winEl = section.querySelector(`[data-rl-window="${scope}"]`);
            if (limEl) limEl.value = limit;
            if (winEl) winEl.value = window_;
            if (typeof showToast === "function") {
              showToast(`已套用建議:${scope.toUpperCase()} = ${limit} / ${window_}s`, true);
            }
            refreshRateLimitMetrics();
            renderEffectiveRates();
          } else {
            const body = await resp.json().catch(() => ({}));
            const msg = (body && body.error) || `HTTP ${resp.status}`;
            if (typeof showToast === "function") showToast(`套用失敗:${msg}`, false);
          }
        } catch (err) {
          if (typeof showToast === "function") showToast("套用失敗:網路錯誤", false);
        } finally {
          btn.disabled = false;
          btn.textContent = orig;
        }
        return;
      }
      if (action === "export") {
        const lines = [];
        section.querySelectorAll("[data-rl-limit]").forEach((el) => {
          const k = el.dataset.rlLimit.toUpperCase();
          lines.push(`${k}_RATE_LIMIT=${el.value}`);
        });
        section.querySelectorAll("[data-rl-window]").forEach((el) => {
          const k = el.dataset.rlWindow.toUpperCase();
          lines.push(`${k}_RATE_WINDOW=${el.value}`);
        });
        exportPre.textContent = lines.join("\n");
        exportPre.hidden = false;
        try {
          navigator.clipboard?.writeText(lines.join("\n"));
          if (typeof showToast === "function") showToast("已複製 .env 片段到剪貼簿", true);
        } catch (_) { /* */ }
      } else if (action === "reset") {
        const defs = { fire: [20, 60], api: [30, 60], admin: [60, 60], login: [5, 300] };
        Object.entries(defs).forEach(([k, [lim, win]]) => {
          const l = section.querySelector(`[data-rl-limit="${k}"]`);
          const w = section.querySelector(`[data-rl-window="${k}"]`);
          if (l) l.value = lim;
          if (w) w.value = win;
        });
        exportPre.hidden = true;
        renderEffectiveRates();
      }
    });

    function renderEffectiveRates() {
      ROWS.forEach(({ key }) => {
        const limEl = section.querySelector(`[data-rl-limit="${key}"]`);
        const winEl = section.querySelector(`[data-rl-window="${key}"]`);
        const lockEl = section.querySelector(`[data-rl-lockout="${key}"]`);
        const eff = section.querySelector(`[data-rl-effective="${key}"]`);
        if (!limEl || !winEl || !eff) return;
        const lim = parseInt(limEl.value, 10) || 0;
        const win = parseInt(winEl.value, 10) || 1;
        const rate = (lim / win).toFixed(2);
        const burst = Math.round(lim * 1.5);
        let txt = `effective_rate = ${lim} / ${win}s = ${rate} req/s · burst = ${burst}`;
        if (key === "login" && lockEl) {
          const lock = parseInt(lockEl.value, 10) || 0;
          txt += ` · lock = ${lock}s`;
        }
        eff.textContent = txt;
      });
    }
    section.addEventListener("input", (e) => {
      const t = e.target;
      if (!t || (!t.dataset.rlLimit && !t.dataset.rlLockout)) return;
      renderEffectiveRates();
    });
    section.addEventListener("change", (e) => {
      const t = e.target;
      if (!t || !t.dataset.rlWindow) return;
      renderEffectiveRates();
    });
    renderEffectiveRates();

    function renderSparkline(svgEl, series) {
      if (!svgEl || !Array.isArray(series)) return;
      const W = 96, H = 24;
      const arr = series.length ? series : new Array(24).fill(0);
      const max = Math.max(1, ...arr);
      const step = W / Math.max(1, arr.length - 1);
      const pts = arr.map((v, i) => `${(i * step).toFixed(1)},${(H - 2 - (v / max) * (H - 4)).toFixed(1)}`).join(" ");
      const line = svgEl.querySelector("polyline");
      if (line) line.setAttribute("points", pts);
    }
    ROWS.forEach(({ key }) => {
      const svg = section.querySelector(`[data-rl-spark="${key}"]`);
      if (svg) renderSparkline(svg, new Array(24).fill(0));
    });
    setTimeout(async () => {
      try {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        const m = await r.json();
        const rl = m && m.rate_limits;
        if (!rl) return;
        ROWS.forEach(({ key }) => {
          const hist = rl[key] && (rl[key].bucket_history || rl[key].history);
          if (Array.isArray(hist) && hist.length) {
            const svg = section.querySelector(`[data-rl-spark="${key}"]`);
            if (svg) renderSparkline(svg, hist.slice(-24));
          }
        });
      } catch (_) { /* */ }
    }, 5500);

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
