/**
 * Admin · Help Drawer (Batch 12-1, 2026-05-19 v5).
 *
 * Slide-in right drawer with contextual help for the active route.
 * Triggered by F1 / ? / ⌘/ when no input is focused, or via
 * `window.AdminHelp.open()`. Closes on Esc / backdrop / ✕.
 *
 * v5 layout per batch12-help.jsx:
 *   ┌─ 360px ────────────────────────────┐
 *   │ Help · ⌘/                       ✕ │  ← header
 *   ├────────────────────────────────────┤
 *   │ ● <route-title>     目前頁面      │  ← route-specific block
 *   │   → tip 1                          │
 *   │   → tip 2                          │
 *   │                                    │
 *   │ 鍵盤快捷鍵 · SHORTCUTS             │  ← global section
 *   │   ⌘ K     全域搜尋                 │
   *   │   ⌘ ⇧ O  Desktop 開關              │
 *   │   ...                              │
 *   │                                    │
 *   │ 術語 · GLOSSARY                    │  ← global section
   *   │   Desktop  Electron/OBS 上的彈幕… │
 *   │   ...                              │
 *   │                                    │
 *   │ 資源 · RESOURCES                   │  ← global section
 *   │   API 文件   docs.danmufire.dev ↗ │
 *   │   ...                              │
 *   ├────────────────────────────────────┤
 *   │ Danmu Fire vX.X · ⌘/ 開啟 Help    │  ← footer
 *   └────────────────────────────────────┘
 *
 * The drawer reuses the cyan-left-border HUD chrome. Width tightened
 * from the legacy 460px to the design's 360px. SHORTCUTS / GLOSSARY /
 * RESOURCES are constant across routes; only the top route block
 * changes based on the active hash.
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-help-drawer-root";

  // Per-route tips. Key = first hash segment (or alias) → array of
  // strings. `_default` is the fallback when no route key matches.
  // HTML-escaped at render time so descriptions are plain text.
  const ROUTE_TIPS = {
    _default: {
      title: "Danmu Fire",
      tips: [
        "F1 / ? / ⌘/ 任一鍵可開關此面板",
        "⌘K 開全域命令搜尋；Esc 關 modal / drawer",
        "頂部 KPI 數字可點擊跳到對應頁面",
      ],
    },

    live: {
      title: "控制台",
      tips: [
        "上方 KPI 條顯示即時 session 統計",
        "右欄 Quick Actions：F1-F4 對應 Effects / Poll / Blacklist / Desktop",
        "點任何 KPI 數字可跳轉到對應頁面",
      ],
    },

    polls: {
      title: "投票",
      tips: [
        "pending → active → ended，新建為 pending",
        "active 時觀眾打 A/B/C/D 投票（大小寫皆可）",
        "多題投票：投完一題自動推下一題",
        "polestar lock：觀眾端永遠不顯示計票/百分比",
      ],
    },

    widgets: {
      title: "Desktop Widgets",
      tips: [
        "啟用的 widget 顯示在 OBS / Electron Desktop 上層",
        "計分板 / 跑馬燈 / 標籤可同時啟用，順序由 layer 決定",
        "OBS browser source URL 在頁面頂部可一鍵複製",
      ],
    },

    moderation: {
      title: "審核",
      tips: [
        "Quick Filters chip 為臨時規則，場次結束自動失效",
        "黑名單為長期規則，跨場次保留",
        "filter action：block / replace / review / allow",
        "review 命中的訊息進入審核佇列，30s 未處理自動拒絕",
      ],
    },

    webhooks: {
      title: "Webhooks",
      tips: [
        "每個 endpoint 右側 ↻ 測試 會發 ping 一次",
        "失敗的 delivery 自動重試 3 次（1s → 2s → 4s）",
        "HMAC-SHA256 簽署用 X-Webhook-Signature header",
      ],
    },

    "api-tokens": {
      title: "API Tokens",
      tips: [
        "Token 僅在產生時顯示一次 — 請立即複製保存",
        "admin:* scope 擁有完整管理員權限，建議只用於 CI/CD",
        "90 天未使用的 token 會自動標記為 inactive",
      ],
    },

    plugins: {
      title: "伺服器插件",
      tips: [
        "插件是伺服器端程式碼 (.py/.js)，有完整系統存取權",
        "Priority 值越小越先執行 — CRITICAL (≤10) 優於 HIGH (≤50)",
        "Hot-reload 不會中斷正在處理的訊息",
      ],
    },

    overlay: {
      title: "Desktop 控制",
      tips: [
        "▶ 開始顯示 / ■ 停止顯示 切換渲染",
        "◐ 暫停顯示：session 仍進行但 Desktop 凍結，恢復後 drain queue",
        "⊗ 清空螢幕：抹掉 Desktop 上現存彈幕（會發 webhook on_overlay_clear）",
      ],
    },

    broadcast: {
      // Alias for overlay — same content
      title: "Desktop 控制",
      tips: [
        "▶ 開始顯示 / ■ 停止顯示 切換渲染",
        "◐ 暫停顯示：session 仍進行但 Desktop 凍結，恢復後 drain queue",
        "⊗ 清空螢幕：抹掉 Desktop 上現存彈幕（會發 webhook on_overlay_clear）",
      ],
    },

    viewer: {
      title: "觀眾頁",
      tips: [
        "4 個 tab：Page (整頁主題) / Fields (表單欄位) / Defaults (送出預設) / Limits (限制)",
        "Defaults tab 可逐參數開放觀眾自訂",
        "限制 tab 顯示 rate / dedup / 內容長度 — 編輯在 #/ratelimit",
      ],
    },

    modqueue: {
      title: "審核佇列",
      tips: [
        "PENDING amber：等管理員 30 秒倒數",
        "APPROVED lime：通過後推 Desktop",
        "REJECTED crimson：丟棄；AUTO-REJECTED 表示倒數結束",
        "建 filter rule 設 action=review 命中的訊息自動進此頁",
      ],
    },

    sessions: {
      title: "場次",
      tips: [
        "場次 = 一段時間切片（含訊息 / 投票 / 統計），不是「直播」",
        "Desktop 開啟自動開新 session；Desktop 關掉 ≠ session 結束",
        "「結束並存檔」才把切片歸檔到 history（唯讀）",
      ],
    },

    system: {
      title: "系統",
      tips: [
        "Overview：metric tiles + 服務狀態 + recent errors",
        "Security：密碼 / WS token / IP allowlist",
        "Backup：場次歸檔匯出 JSON / CSV",
        "重啟 WS / Force GC 已停用（安全考量）",
      ],
    },
  };

  // Global shortcuts — constant across all routes per the v5 spec.
  const SHORTCUTS = [
    { keys: ["⌘", "K"],        desc: "全域搜尋" },
    { keys: ["F1"],            desc: "開啟 Help" },
    { keys: ["⌘", "/"],        desc: "開啟 Help（替代鍵）" },
    { keys: ["⌘", "⇧", "L"],  desc: "切到即時訊息流" },
    { keys: ["⌘", "⇧", "S"],  desc: "Desktop 切換 OFF" },
    { keys: ["⌘", "⇧", "C"],  desc: "清空 Desktop 螢幕" },
    { keys: ["Esc"],           desc: "關閉抽屜 / Modal" },
  ];

  // Terminology cheat-sheet — clarifies post-pivot vocabulary that
  // operators commonly confuse with adjacent web concepts.
  const GLOSSARY = [
    { term: "Desktop",          def: "Electron / OBS 上的彈幕顯示層，不是 viewer 頁面" },
    { term: "Session",          def: "一段時間切片的資料範圍，不是使用者 session" },
    { term: "Fire Token",       def: "Extension 共用的認證密鑰，和 API Token 是分開的" },
    { term: "Fingerprint (fp)", def: "基於瀏覽器特徵的匿名身份辨識，不需要登入" },
    { term: ".dme",             def: "Danmu Effect 格式 — YAML 定義的 CSS 動畫包" },
  ];

  // External resource links — opens in a new tab.
  const RESOURCES = [
    { label: "GitHub Repo",    url: "https://github.com/guan4tou2/danmu-desktop" },
    { label: "Issues",         url: "https://github.com/guan4tou2/danmu-desktop/issues" },
    { label: "CHANGELOG",      url: "https://github.com/guan4tou2/danmu-desktop/blob/main/CHANGELOG.md" },
    { label: "Plugin SDK",     url: "https://github.com/guan4tou2/danmu-desktop/tree/main/server/plugins" },
  ];

  function _esc(s) {
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  }

  function _routeKey() {
    const slug = (location.hash || "").replace("#/", "").split("/")[0] || "";
    if (ROUTE_TIPS[slug]) return slug;
    return "_default";
  }

  function _renderShell() {
    return `
      <div id="${ROOT_ID}" class="admin-help" role="dialog" aria-modal="true" aria-labelledby="admin-help-title">
        <div class="admin-help__backdrop" data-help-close></div>
        <aside class="admin-help__drawer" data-help-body></aside>
      </div>`;
  }

  function _renderBody() {
    const entry = ROUTE_TIPS[_routeKey()];
    const version = (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "";

    const tipsHtml = entry.tips.map((tip) => `
      <div class="admin-help__tip">
        <span class="admin-help__tip-arrow">→</span>
        <span>${_esc(tip)}</span>
      </div>`).join("");

    const shortcutsHtml = SHORTCUTS.map((s) => `
      <div class="admin-help__shortcut">
        <div class="admin-help__keys">
          ${s.keys.map((k) => `<kbd class="admin-help__kbd">${_esc(k)}</kbd>`).join("")}
        </div>
        <span class="admin-help__shortcut-desc">${_esc(s.desc)}</span>
      </div>`).join("");

    const glossaryHtml = GLOSSARY.map((g) => `
      <div class="admin-help__glossary-row">
        <div class="admin-help__glossary-term">${_esc(g.term)}</div>
        <div class="admin-help__glossary-def">${_esc(g.def)}</div>
      </div>`).join("");

    const resourcesHtml = RESOURCES.map((r) => `
      <a class="admin-help__resource" href="${_esc(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="admin-help__resource-label">${_esc(r.label)}</span>
        <span class="admin-help__resource-url">${_esc(r.url.replace(/^https?:\/\//, ""))}</span>
        <span class="admin-help__resource-arrow">↗</span>
      </a>`).join("");

    return `
      <header class="admin-help__head">
        <span class="admin-help__title" id="admin-help-title">Help</span>
        <kbd class="admin-help__kbd admin-help__head-kbd">⌘ /</kbd>
        <span class="admin-help__spacer"></span>
        <button type="button" class="admin-help__close" data-help-close aria-label="Close">${window.AdminUtils.closeIcon}</button>
      </header>
      <div class="admin-help__body">

        <section class="admin-help__section">
          <div class="admin-help__route-head">
            <span class="admin-help__route-dot"></span>
            <span class="admin-help__route-title">${_esc(entry.title)}</span>
            <span class="admin-help__route-tag">目前頁面</span>
          </div>
          <div class="admin-help__tips">${tipsHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">鍵盤快捷鍵 · SHORTCUTS</div>
          <div class="admin-help__shortcuts">${shortcutsHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">術語 · GLOSSARY</div>
          <div class="admin-help__glossary">${glossaryHtml}</div>
        </section>

        <section class="admin-help__section">
          <div class="admin-help__sec-label">資源 · RESOURCES</div>
          <div class="admin-help__resources">${resourcesHtml}</div>
        </section>

      </div>
      <footer class="admin-help__foot">
        Danmu Fire ${version ? "v" + _esc(version) : ""} · 按 ⌘/ 或 F1 開關
      </footer>`;
  }

  function open() {
    let root = document.getElementById(ROOT_ID);
    if (!root) {
      document.body.insertAdjacentHTML("beforeend", _renderShell());
      root = document.getElementById(ROOT_ID);
      root.addEventListener("click", (e) => {
        if (e.target.closest("[data-help-close]")) close();
      });
    }
    root.querySelector("[data-help-body]").innerHTML = _renderBody();
    document.addEventListener("keydown", _onKey);
  }

  function close() {
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    document.removeEventListener("keydown", _onKey);
  }

  function toggle() {
    document.getElementById(ROOT_ID) ? close() : open();
  }

  function _onKey(e) {
    if (e.key === "Escape") { e.preventDefault(); close(); }
  }

  function _onGlobalKey(e) {
    // Don't intercept when user is typing.
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    // F1 / ? toggle (legacy) + ⌘/ (v5 spec).
    const isSlash = e.key === "/" && (e.metaKey || e.ctrlKey);
    if (e.key === "F1" || (e.key === "?" && !e.ctrlKey && !e.metaKey) || isSlash) {
      e.preventDefault();
      toggle();
    }
  }

  function init() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    if (!document.body.classList.contains("admin-body")) return;
    document.addEventListener("keydown", _onGlobalKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.AdminHelp = { open, close, toggle };
})();
