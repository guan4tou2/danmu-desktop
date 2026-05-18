/**
 * Admin · Fire Token full management page (v5.2 Sprint 2 / artboard ⑭-B).
 *
 * Per prototype components/admin-firetoken.jsx. Shows operational depth
 * for the shared Fire Token: live state + 24h usage chart + 60min line
 * chart + recent IPs panel + audit timeline + curl example. Builds on
 * the same backend introduced in Sprint 1; only adds aggregation
 * endpoints and a richer UI.
 *
 * Mounted under route "firetoken" (admin-routes.js). The Extensions
 * page (sec-extensions-overview) gets a "查看詳細統計" link button on
 * the Slido card that navigates here via #/firetoken.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-firetoken-overview";
  const escapeHtml = window.AdminUtils.escapeHtml;
  const REFRESH_MS = 15000;

  let _state = {
    token: null,         // {enabled, prefix, has_token, rotated_at, created_at}
    plainToken: null,    // raw, only after regen
    usage24h: [],        // 24 hour entries
    ips: [],             // recent IPs
    audit: [],           // audit events
    pollTimer: 0,
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-ft-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">FIRE TOKEN · 共享密鑰 · 用量 / 來源 / 旋轉</div>
          <div class="admin-v2-title">Fire Token 詳情</div>
          <p class="admin-v2-note">
            Extension 走 /fire 通道用的共享機密。本頁顯示用量趨勢、近期來源 IP、token 生命週期事件。
            單一 token、operator-managed；per-integration ACL 走 <a href="#/integrations">API Tokens</a>。
          </p>
        </div>

        <div class="admin-ft-grid">
          <!-- Main column -->
          <div class="admin-ft-main">
            <!-- Token card -->
            <section class="admin-ft-token-card" id="adminFtTokenCard">
              <div class="admin-ft-token-head">
                <span class="admin-ft-token-icon">⚿</span>
                <div class="admin-ft-token-title">
                  <div class="name">Fire Token · 共享密鑰</div>
                  <div class="meta">extension 走 /fire 通道用 · admin lane ceiling 200/min</div>
                </div>
                <span class="admin-ft-status" data-ft-status>● 載入中</span>
              </div>

              <div class="admin-ft-token-display">
                <code class="admin-ft-token-code" data-ft-token-display>未設定</code>
                <button type="button" class="admin-ft-action-btn" data-ft-action="copy" disabled>📋 複製</button>
                <button type="button" class="admin-ft-action-btn admin-ft-action-btn--warn" data-ft-action="regen">↻ 重新產生</button>
                <button type="button" class="admin-ft-action-btn admin-ft-action-btn--danger" data-ft-action="revoke" disabled>撤銷</button>
              </div>

              <div class="admin-ft-token-stats">
                <div class="kv"><span class="k">建立時間</span><span class="v" data-ft-stat="created">—</span></div>
                <div class="kv"><span class="k">上次旋轉</span><span class="v" data-ft-stat="rotated">—</span></div>
                <div class="kv"><span class="k">近 24h 請求</span><span class="v is-good" data-ft-stat="hits">—</span></div>
                <div class="kv"><span class="k">峰值 / hr</span><span class="v is-cyan" data-ft-stat="peak">—</span></div>
              </div>
            </section>

            <!-- 24h hourly chart -->
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-v3-card-kicker">近 24 小時 · 每小時請求數</span>
                <span class="admin-ft-meta" data-ft-peak-meta>峰值 — / hr</span>
              </div>
              <div class="admin-ft-chart" id="adminFtChart24h">
                <div class="admin-ft-chart-empty">載入中…</div>
              </div>
            </section>

            <!-- Audit log -->
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-v3-card-kicker">Token 事件 · 旋轉 / 撤銷 / 啟用</span>
                <span class="admin-ft-meta">in-memory · 重啟清空</span>
              </div>
              <div class="admin-ft-audit" id="adminFtAudit">
                <div class="admin-ft-audit-empty">尚無事件</div>
              </div>
            </section>

            <!-- curl example -->
            <section class="admin-ft-card admin-ft-curl-card">
              <div class="admin-ft-card-head">
                <span class="admin-v3-card-kicker">CURL · 從 extension 發送</span>
                <span class="admin-ft-meta">X-Fire-Source 用於 catalog 狀態燈</span>
              </div>
              <pre class="admin-ft-curl" id="adminFtCurl"></pre>
            </section>
          </div>

          <!-- Right rail -->
          <aside class="admin-ft-rail">
            <section class="admin-ft-card">
              <div class="admin-ft-card-head">
                <span class="admin-v3-card-kicker">近 1h 來源 IP</span>
                <span class="admin-ft-meta" data-ft-ip-count>—</span>
              </div>
              <div class="admin-ft-ip-list" id="adminFtIps">
                <div class="admin-ft-audit-empty">尚無流量</div>
              </div>
            </section>

            <section class="admin-ft-card admin-ft-rotation-card">
              <div class="admin-ft-card-head">
                <span class="admin-v3-card-kicker">輪換建議</span>
              </div>
              <div class="admin-ft-rotation-body">
                <ul>
                  <li>建議 90 天內輪換一次。</li>
                  <li>輪換前先在 extension popup 中更新新 token，再點「重新產生」。</li>
                  <li>撤銷會即時停用所有 extension。</li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
      </div>
    `;
  }

  // ── data ───────────────────────────────────────────────────────────

  async function _fetchAll() {
    await Promise.all([_fetchToken(), _fetchUsage(), _fetchAudit()]);
  }

  async function _fetchToken() {
    try {
      const r = await fetch("/admin/integrations/fire-token", { credentials: "same-origin" });
      if (!r.ok) return;
      _state.token = await r.json();
      _renderToken();
    } catch (_) { /* */ }
  }

  async function _fetchUsage() {
    try {
      const r = await fetch("/admin/integrations/fire-token/usage", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.usage24h = Array.isArray(data.usage_24h) ? data.usage_24h : [];
      _state.ips = Array.isArray(data.ips) ? data.ips : [];
      _renderChart();
      _renderIps();
      _renderUsageStats();
    } catch (_) { /* */ }
  }

  async function _fetchAudit() {
    try {
      const r = await fetch("/admin/integrations/fire-token/audit?limit=20", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.audit = Array.isArray(data.events) ? data.events : [];
      _renderAudit();
    } catch (_) { /* */ }
  }

  // ── actions ────────────────────────────────────────────────────────

  async function _regenerate() {
    if (!confirm("產生新的 Fire Token 會讓現有 extension 立即失效，要繼續嗎？")) return;
    try {
      const r = await window.csrfFetch("/admin/integrations/fire-token/regenerate", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      _state.token = {
        enabled: data.enabled,
        prefix: data.prefix,
        has_token: true,
        rotated_at: data.rotated_at,
        created_at: data.created_at || data.rotated_at,
      };
      _state.plainToken = data.token;
      _renderToken();
      _copyToClipboard(data.token);
      window.showToast && window.showToast("Token 已產生 · 已複製到剪貼簿", true);
      _fetchAudit();
    } catch (e) {
      window.showToast && window.showToast("Token 產生失敗", false);
    }
  }

  async function _revoke() {
    if (!confirm("撤銷會立即停用所有 extension，要繼續嗎？")) return;
    try {
      const r = await window.csrfFetch("/admin/integrations/fire-token/revoke", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      _state.token = await r.json();
      _state.plainToken = null;
      _renderToken();
      window.showToast && window.showToast("Token 已撤銷", true);
      _fetchAudit();
    } catch (e) {
      window.showToast && window.showToast("撤銷失敗", false);
    }
  }

  function _copyToClipboard(text) {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
    }
  }

  // ── render ─────────────────────────────────────────────────────────

  function _fmtAgo(ts) {
    if (!ts) return "—";
    const diff = Date.now() / 1000 - ts;
    if (diff < 60) return "剛剛";
    if (diff < 3600) return Math.floor(diff / 60) + " 分鐘前";
    if (diff < 86400) return Math.floor(diff / 3600) + " 小時前";
    return Math.floor(diff / 86400) + " 天前";
  }

  function _fmtTime(ts) {
    if (!ts) return "—";
    try {
      return new Date(ts * 1000).toISOString().replace("T", " ").slice(0, 16);
    } catch (_) { return "—"; }
  }

  function _renderToken() {
    const t = _state.token;
    const display = document.querySelector("[data-ft-token-display]");
    const status = document.querySelector("[data-ft-status]");
    const copyBtn = document.querySelector('[data-ft-action="copy"]');
    const regenBtn = document.querySelector('[data-ft-action="regen"]');
    const revokeBtn = document.querySelector('[data-ft-action="revoke"]');
    const created = document.querySelector('[data-ft-stat="created"]');
    const rotated = document.querySelector('[data-ft-stat="rotated"]');
    const curlEl = document.getElementById("adminFtCurl");

    if (!display) return;

    if (_state.plainToken) {
      display.textContent = _state.plainToken;
      display.classList.add("is-plain");
    } else if (t && t.has_token) {
      display.textContent = (t.prefix || "") + " ••••••••••••••••••••";
      display.classList.remove("is-plain");
    } else {
      display.textContent = "未設定 — 點「重新產生」建立";
      display.classList.remove("is-plain");
    }
    if (status) {
      if (t && t.enabled && t.has_token) {
        status.textContent = "● 啟用 · 健康";
        status.className = "admin-ft-status is-good";
      } else if (t && t.has_token) {
        status.textContent = "○ 已停用";
        status.className = "admin-ft-status is-warn";
      } else {
        status.textContent = "○ 未設定";
        status.className = "admin-ft-status is-muted";
      }
    }
    if (copyBtn) copyBtn.disabled = !_state.plainToken;
    if (revokeBtn) revokeBtn.disabled = !(t && t.has_token);
    if (regenBtn) regenBtn.textContent = (t && t.has_token) ? "↻ 重新產生" : "產生";

    if (created) created.textContent = t ? _fmtTime(t.created_at) : "—";
    if (rotated) rotated.textContent = t ? _fmtAgo(t.rotated_at) : "—";

    if (curlEl) {
      const tokenSample = _state.plainToken
        ? _state.plainToken
        : ((t && t.prefix) ? t.prefix.replace("…", "…<full token>") : "<your-token>");
      curlEl.textContent =
`curl -X POST https://${location.host}/fire \\
  -H 'Content-Type: application/json' \\
  -H 'X-Fire-Source: slido' \\
  -H 'X-Fire-Token: ${tokenSample}' \\
  -d '{"text":"哈囉 from extension","color":"#7dd3fc","size":48}'`;
    }
  }

  function _renderUsageStats() {
    const arr = _state.usage24h.map((v) => Number(v) || 0);
    const total = arr.reduce((a, b) => a + b, 0);
    const peak = arr.length ? Math.max(...arr) : 0;
    const hits = document.querySelector('[data-ft-stat="hits"]');
    const peakEl = document.querySelector('[data-ft-stat="peak"]');
    const peakMeta = document.querySelector("[data-ft-peak-meta]");
    if (hits) hits.textContent = total.toLocaleString();
    if (peakEl) peakEl.textContent = peak.toLocaleString();
    if (peakMeta) peakMeta.textContent = `峰值 ${peak.toLocaleString()} / hr · 共 24 小時`;
  }

  function _renderChart() {
    const wrap = document.getElementById("adminFtChart24h");
    if (!wrap) return;
    const arr = _state.usage24h.map((v) => Number(v) || 0);
    if (!arr.length) {
      wrap.innerHTML = `<div class="admin-ft-chart-empty">尚無數據（伺服器啟動 24h 內）</div>`;
      return;
    }
    const peak = Math.max(...arr);
    const ceiling = 12000; // 200/min × 60min
    const ceilingPct = peak > 0 ? Math.min(100, (ceiling / Math.max(peak, ceiling)) * 100) : 100;
    wrap.innerHTML = `
      <div class="admin-ft-chart-bars">
        ${arr.map((v, i) => {
          const h = peak > 0 ? Math.max(2, (v / peak) * 100) : 2;
          const isPeak = peak > 0 && v === peak;
          return `<div class="bar ${isPeak ? "is-peak" : ""}" style="height:${h}%" title="${i.toString().padStart(2, "0")}:00 — ${v}"></div>`;
        }).join("")}
      </div>
      <div class="admin-ft-chart-axis">
        ${[0, 4, 8, 12, 16, 20].map(h => `<span>${String(h).padStart(2, "0")}:00</span>`).join("")}
      </div>`;
  }

  function _renderIps() {
    const wrap = document.getElementById("adminFtIps");
    const meta = document.querySelector("[data-ft-ip-count]");
    if (!wrap) return;
    const ips = _state.ips || [];
    if (meta) meta.textContent = ips.length ? `${ips.length} IP` : "—";
    if (!ips.length) {
      wrap.innerHTML = `<div class="admin-ft-audit-empty">尚無流量</div>`;
      return;
    }
    const top = ips[0]?.ip;
    wrap.innerHTML = ips.map((r, i) => {
      const isTop = i === 0;
      const isUnknown = r.source === "web" && (r.ua || "").length < 8;
      return `
        <div class="admin-ft-ip-row ${isTop ? "is-top" : ""}">
          <span class="ip">${escapeHtml(r.ip || "?")}</span>
          ${isTop ? '<span class="tag is-top">★ TOP</span>' : ""}
          ${isUnknown ? '<span class="tag is-warn">⚠ UA</span>' : ""}
          <span class="src">${escapeHtml(r.source || "—")}</span>
          <span class="cnt">${(r.count || 0)} hits</span>
          <span class="when">${_fmtAgo(r.last_seen)}</span>
        </div>`;
    }).join("");
  }

  function _renderAudit() {
    const wrap = document.getElementById("adminFtAudit");
    if (!wrap) return;
    const events = _state.audit || [];
    if (!events.length) {
      wrap.innerHTML = `<div class="admin-ft-audit-empty">尚無事件</div>`;
      return;
    }
    const KIND_LABEL = {
      rotated: "已旋轉",
      revoked: "已撤銷",
      toggled: "切換啟用",
    };
    const KIND_CLASS = {
      rotated: "is-rotated",
      revoked: "is-revoked",
      toggled: "is-toggled",
    };
    wrap.innerHTML = events.map((e) => {
      const klass = KIND_CLASS[e.kind] || "is-info";
      const label = KIND_LABEL[e.kind] || e.kind;
      const meta = e.meta || {};
      const detail = meta.prefix
        ? ` · prefix=${escapeHtml(meta.prefix)}`
        : (meta.enabled != null ? ` · enabled=${meta.enabled}` : "");
      return `
        <div class="admin-ft-audit-row ${klass}">
          <span class="ts">${_fmtTime(e.ts)}</span>
          <span class="kind">${escapeHtml(label)}</span>
          <span class="detail">${detail}</span>
        </div>`;
    }).join("");
  }

  // ── init ───────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());

    const page = document.getElementById(PAGE_ID);
    if (page) {
      page.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-ft-action]");
        if (!btn) return;
        const action = btn.dataset.ftAction;
        if (action === "regen") _regenerate();
        else if (action === "revoke") _revoke();
        else if (action === "copy") {
          if (_state.plainToken) {
            _copyToClipboard(_state.plainToken);
            window.showToast && window.showToast("已複製到剪貼簿", true);
          }
        }
      });
    }

    _fetchAll();
    _state.pollTimer = setInterval(() => {
      _fetchUsage();
      _fetchAudit();
    }, REFRESH_MS);
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
      init();
    }
  });
})();
