/**
 * Admin · System Overview page (extracted from admin.js 2026-04-28
 * Group D-3 split, fourth pass).
 *
 * Owns sec-system-overview — 設計稿 08 · S1 的「入口頁」：頁首右側一顆狀態
 * chip、四格數字（運行時間／已連線／記憶體／版本）、一組設定列（公開網址・
 * 語言・深淺色）與四條導向列（備份／安全／擴充／關於）。
 *
 * Renders into #settings-grid on `admin-panel-rendered`. Reads
 * /admin/metrics（uptime / mem / ws_clients / queue / 外掛與 webhook 計數）
 * 與 /admin/audience/stats（在場觀眾數）。
 *
 * Globals: csrfFetch / showToast / DANMU_CONFIG.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-system-overview";

  // ── 版面（設計稿 08 · S1）─────────────────────────────────────────
  //
  // 稿上這一頁是「入口頁」：頁首右側一顆狀態 chip、四格數字、然後一組設定
  // 與導向列。之前它是一塊密度很高的 HUD——六格帶 sparkline 的 tile（每格
  // 中英雙標籤）、services 表、recent errors、QUICK ACTIONS（其中一顆是
  // 永遠 disabled 的「待 BE」）、CONFIG SUMMARY（全大寫英文欄名）。那些在
  // 回答「這台機器現在怎麼樣」，但主持人來這一頁多半是要去別的地方。
  // 診斷細節本來就有自己的家：系統事件（#/events）。

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("sohPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("sohPageNote")}</p>
          <div class="admin-ui-page-actions">
            <span class="admin-soh-chip" data-soh-chip>
              <span class="admin-soh-chip__dot" data-soh-banner-dot></span>
              <span data-soh-banner-title>${ServerI18n.t("sohChecking")}</span>
            </span>
          </div>
        </div>

        <div class="admin-soh-kpis">
          ${[
            { id: "uptime", label: ServerI18n.t("sohMetricUptime") },
            { id: "conn",   label: ServerI18n.t("sohMetricConnected") },
            { id: "ram",    label: ServerI18n.t("sohMetricMemory") },
            { id: "ver",    label: ServerI18n.t("sohMetricVersion") },
          ].map((m) => `
            <div class="admin-soh-kpi" data-m="${m.id}">
              <div class="admin-soh-kpi__label">${m.label}</div>
              <div class="admin-soh-kpi__value" data-m-v>—</div>
              <div class="admin-soh-kpi__sub" data-m-sub></div>
            </div>`).join("")}
        </div>

        <div class="admin-ui-group">
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohPublicUrlLabel")}</span>
            <span class="val admin-soh-urlrow">
              <code id="sysoPublicUrl">${location.origin}</code>
              <button type="button" class="admin-ui-action" data-soh-action="copy-url">${ServerI18n.t("copyBtn")}</button>
              <button type="button" class="admin-ui-action" data-soh-action="show-qr">QR</button>
            </span>
          </div>
          <div class="admin-soh-qr" data-soh-qr hidden></div>

          <!-- 2026-08-19 設計稿 03：語言選單由頂欄移到這裡。ID 沿用
               server-lang-select，i18n.js 的 bindLanguageSelector 靠它綁定。 -->
          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohLanguageLabel")}</span>
            <span class="val">
              <select id="server-lang-select" class="admin-ui-select" aria-label="${ServerI18n.t("sohLanguageLabel")}">
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
              </select>
            </span>
          </div>

          <div class="admin-ui-group-row">
            <span class="lbl">${ServerI18n.t("sohAppearanceLabel")}</span>
            <span class="val admin-soh-seg" role="group" data-soh-theme>
              <button type="button" data-soh-mode="auto">${ServerI18n.t("sohAppearanceAuto")}</button>
              <button type="button" data-soh-mode="light">${ServerI18n.t("sohAppearanceLight")}</button>
              <button type="button" data-soh-mode="dark">${ServerI18n.t("sohAppearanceDark")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group">
          ${[
            { hash: "#/backup",       label: ServerI18n.t("adminNavBackup"),   sub: ServerI18n.t("sohLinkBackupSub"), attr: "" },
            { hash: "#/security",     label: ServerI18n.t("adminNavSecurity"), sub: ServerI18n.t("sohLinkSecuritySub"), attr: "data-soh-sub=\"security\"" },
            { hash: "#/integrations", label: ServerI18n.t("adminNavIntegrations"), sub: "—", attr: "data-soh-sub=\"integrations\"" },
            { hash: "#/about",        label: ServerI18n.t("sohLinkAbout"),     sub: ServerI18n.t("sohLinkAboutSub"), attr: "" },
          ].map((r) => `
            <a class="admin-ui-group-row admin-soh-link" href="${r.hash}">
              <span class="lbl">${r.label}</span>
              <span class="val admin-soh-link__sub" ${r.attr}>${r.sub}</span>
              <span class="admin-soh-link__chev" aria-hidden="true">›</span>
            </a>`).join("")}
        </div>
      </div>`;
  }

  function _fmtUptime(sec) {
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (d > 0) return `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`;
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
    return `${m}m ${String(sec % 60).padStart(2, "0")}s`;
  }

  function _setKpi(id, value, sub) {
    const tile = document.querySelector(`[data-m="${id}"]`);
    if (!tile) return;
    const v = tile.querySelector("[data-m-v]");
    if (v) v.textContent = value;
    const s = tile.querySelector("[data-m-sub]");
    if (s) s.textContent = sub || "";
  }

  // 狀態改成頁首右側一顆 chip（設計稿 08 · S1）。判斷邏輯照舊：佇列滿了就
  // 不是「運作正常」。
  function _updateChip(data) {
    const dot = document.querySelector("[data-soh-banner-dot]");
    const title = document.querySelector("[data-soh-banner-title]");
    const chip = document.querySelector("[data-soh-chip]");
    const queueFull = data.queue_size != null && data.queue_capacity != null &&
                       data.queue_size >= data.queue_capacity;
    const ok = !queueFull;
    if (chip) chip.classList.toggle("is-warn", !ok);
    if (dot) dot.classList.toggle("is-warn", !ok);
    if (title) title.textContent = ok ? ServerI18n.t("sohAllHealthy") : ServerI18n.t("sohOneUnhealthy");
  }

  function _wire() {
    (async () => {
      try {
        const res = await window.csrfFetch("/admin/metrics");
        if (!res.ok) return;
        const data = await res.json();
        const last = (a) => (Array.isArray(a) && a.length ? a[a.length - 1] : null);

        const upSec = data.server_started_at
          ? Math.max(0, Math.floor(Date.now() / 1000 - data.server_started_at))
          : 0;
        _setKpi("uptime", upSec > 0 ? _fmtUptime(upSec) : "—", "");

        // 稿上的副標是「1 顯示層 · 37 觀眾 · 1 後台」，但這個產品的連線模型
        // 不長那樣：只有顯示層掛 WebSocket，觀眾是輪詢的，後台沒有連線。
        // 所以這裡只報 server 真的知道的兩個數，不編第三個。
        let viewers = null;
        try {
          const a = await fetch("/admin/audience/stats", { credentials: "same-origin" });
          if (a.ok) viewers = (await a.json()).total_live;
        } catch (_) {}
        const overlays = data.ws_clients ?? 0;
        _setKpi(
          "conn",
          String(overlays + (viewers || 0)),
          viewers == null
            ? ServerI18n.t("sohConnOverlaysOnly", { n: overlays })
            : ServerI18n.t("sohConnBreakdown", { overlays: overlays, viewers: viewers })
        );

        // 稿上這格是百分比。telemetry 的 mem_mb_series 是**整台機器已用的**
        // MB（psutil.virtual_memory().used），不是這個 process 的 RSS——
        // 直接印會變成「記憶體 5769 MB」這種對主持人毫無意義的數字。
        // 用 mem_series（同一份來源的百分比），副標寫清楚是整台機器。
        const memPct = last(data.mem_series || []);
        const totalGb = data.mem_total_mb ? (data.mem_total_mb / 1024).toFixed(0) : null;
        _setKpi(
          "ram",
          memPct != null ? `${Number(memPct).toFixed(0)}%` : "—",
          totalGb ? ServerI18n.t("sohMemorySub", { total: totalGb }) : ""
        );

        const ver = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "?";
        _setKpi("ver", `v${ver}`, ServerI18n.t("sohVersionSub"));

        _updateChip(data);

        const extSub = document.querySelector('[data-soh-sub="integrations"]');
        if (extSub) {
          extSub.textContent = ServerI18n.t("sohLinkExtSub", {
            webhooks: data.webhooks_count ?? 0,
            plugins: data.plugins_loaded ?? 0,
          });
        }
        // 連線密碼的開關狀態不在 /admin/metrics 的 security 摘要裡
        // （那份只有 ip_allowlist / cors / tls），要問 ws-auth。
        try {
          const wa = await window.csrfFetch("/admin/ws-auth");
          if (wa.ok) {
            const state = await wa.json();
            const secSub = document.querySelector('[data-soh-sub="security"]');
            if (secSub) {
              secSub.textContent = state.require_token
                ? ServerI18n.t("sohLinkSecurityOn")
                : ServerI18n.t("sohLinkSecurityOff");
            }
          }
        } catch (_) {}
      } catch (_) { /* ignore */ }
    })();

    const root = document.getElementById(SECTION_ID);
    if (!root) return;

    // 後台深淺色：跟頂欄那顆 ☼/☾ 共用同一份狀態，不然兩邊會各說各話。
    const syncTheme = () => {
      const mode = (window.AdminThemeSwitcher && window.AdminThemeSwitcher.getMode()) || "auto";
      root.querySelectorAll("[data-soh-mode]").forEach((b) => {
        const on = b.dataset.sohMode === mode;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    };
    syncTheme();
    document.addEventListener("admin:theme-mode", syncTheme);

    root.addEventListener("click", function (e) {
      const modeBtn = e.target.closest("[data-soh-mode]");
      if (modeBtn) {
        window.AdminThemeSwitcher && window.AdminThemeSwitcher.setMode(modeBtn.dataset.sohMode);
        syncTheme();
        return;
      }
      const a = e.target.closest("[data-soh-action]");
      if (!a || a.disabled) return;
      if (a.dataset.sohAction === "copy-url") {
        const url = document.getElementById("sysoPublicUrl")?.textContent || "";
        navigator.clipboard?.writeText(url).then(
          () => window.showToast && window.showToast(ServerI18n.t("sohCopied"), true),
          () => window.showToast && window.showToast(ServerI18n.t("sohCopyFailed"), false)
        );
        return;
      }
      if (a.dataset.sohAction === "show-qr") {
        const box = root.querySelector("[data-soh-qr]");
        if (!box) return;
        if (!box.hidden) { box.hidden = true; return; }
        fetch("/admin/qr/public", { credentials: "same-origin" })
          .then((r) => (r.ok ? r.json() : Promise.reject(r)))
          .then((j) => { box.innerHTML = j.svg; box.hidden = false; })
          .catch(() => window.showToast && window.showToast(ServerI18n.t("sohQrFailed"), false));
      }
    });
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    if (document.getElementById(SECTION_ID)) _wire();
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
