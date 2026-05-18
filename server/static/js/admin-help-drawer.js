/**
 * Admin · Help Drawer (F1) — design v4 follow-up to ⌘K palette.
 *
 * Slide-in right drawer with contextual help for the active route.
 * Triggered by F1 / `?` keystroke (when no input is focused) or via
 * `window.AdminHelp.open()`. Closes on Esc / backdrop / ✕.
 *
 * Content is per-route — when no specific entry exists, falls back to
 * the global "Getting Started" section. Each section is a sequence of
 * shortcuts (key + label) + free-form tips.
 *
 * Lives at <body> level so it overlays any page. Style match: cyan
 * left-border on the drawer, dark HUD panel, mono section labels.
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-help-drawer-root";

  // Per-route help content. Key matches the first segment of location.hash
  // (e.g. `#/live` → `live`). `_default` is the fallback.
  const HELP = {
    _default: {
      title: "Help",
      subtitle: "DANMU FIRE · KEYBOARD & WORKFLOW",
      sections: [
        {
          label: "GLOBAL SHORTCUTS",
          rows: [
            { keys: ["F1"],        desc: "開關此說明面板" },
            { keys: ["⌘", "K"],   desc: "命令搜尋面板" },
            { keys: ["⌘", "⇧", "L"], desc: "切到即時訊息流" },
            { keys: ["⌘", "⇧", "S"], desc: "Overlay 切換到 OFF" },
            { keys: ["⌘", "⇧", "C"], desc: "清空 overlay 螢幕" },
            { keys: ["Esc"],       desc: "關閉抽屜 / Modal" },
          ],
        },
        {
          label: "WORKFLOW",
          rows: [
            { desc: "1. <b>Live</b> 開場前先在這檢查預備內容 · 看 overlay 狀態" },
            { desc: "2. 進行中以 <b>Live Feed</b> 為主畫面 · 點訊息開 detail drawer" },
            { desc: "3. 敏感字命中時 <b>審核佇列</b> 會出現 ─ 30 秒未處理自動拒絕" },
            { desc: "4. 結束前用「結束並存檔」歸檔場次到 history" },
          ],
        },
      ],
    },

    live: {
      title: "Live · 即時",
      subtitle: "OVERLAY · LIVE FEED · MODERATION QUEUE",
      sections: [
        {
          label: "OVERLAY 2-STATE TOGGLE",
          rows: [
            { desc: "<b>OFF</b>：彈幕不渲染到 overlay · 但訊息仍正常接收 / 歸檔" },
            { desc: "<b>ON</b>：彈幕即時渲染 · 點 ▶ 開始顯示 啟動 / ■ 停止顯示 關閉" },
            { desc: "<b>PAUSED</b>：暫停渲染但 session 仍進行 · 訊息排入 queue · 恢復後 drain" },
            { desc: "Session 概念是「資料切片」(time window)，跟 overlay 開關獨立" },
          ],
        },
        {
          label: "LIVE FEED",
          rows: [
            { desc: "點訊息列開啟右側 message-drawer 看詳情 + Ban / Mute / Mask" },
            { desc: "頂部 chip 篩選：全部 / 含敏感字 / 已封鎖 / 待審" },
            { desc: "COMPACT/COMFY toggle 切換行密度" },
            { desc: "手機左滑訊息列顯示 MASK / MUTE / BAN 按鈕" },
          ],
        },
        {
          label: "VOCABULARY (post 2026-05-18 pivot)",
          rows: [
            { desc: "沒有「主持人 / Host / 直播」這些字 · 只有「管理者 / Overlay / 場次」" },
            { desc: "Overlay = 顯示器開關（toggle）" },
            { desc: "Session = 資料切片（time window，含訊息 / 投票 / 統計）" },
          ],
        },
      ],
    },

    broadcast: {
      // Alias for the route slug — same content as `live` overlay section.
      title: "Overlay 控制",
      subtitle: "OVERLAY TOGGLE · SESSION CONTEXT",
      sections: [
        {
          label: "BUTTONS",
          rows: [
            { desc: "<b>▶ 開始顯示</b>：cyan-filled — primary CTA · 觸發 overlay 渲染" },
            { desc: "<b>■ 停止顯示</b>：soft outline — 點擊會跳 confirm modal" },
            { desc: "<b>▶ 繼續顯示</b>：amber-filled — paused 狀態的 resume" },
            { desc: "<b>◐ 暫停顯示</b>：secondary — 暫停渲染 (session 仍進行)" },
            { desc: "<b>⊗ 清空螢幕</b>：secondary — 清掉 overlay 上現有的所有彈幕" },
          ],
        },
        {
          label: "SESSION CONTEXT",
          rows: [
            { desc: "頁尾顯示 session id + Started 時間 + Window 時長" },
            { desc: "「管理 Sessions →」link 跳到 Sessions 頁，session 結束 / 歸檔在那裡" },
          ],
        },
      ],
    },

    overlay: {
      // Same as broadcast — kept as separate alias because design v4-r7
      // calls the page "Overlay 控制" and admin.js routes through 'broadcast'.
      title: "Overlay 控制",
      subtitle: "OVERLAY TOGGLE · SESSION CONTEXT",
      sections: [
        {
          label: "短暫整理",
          rows: [
            { desc: "看 <b>broadcast</b> route help — 兩個 alias 內容相同" },
          ],
        },
      ],
    },

    moderation: {
      title: "Moderation · 審核",
      subtitle: "FILTERS · BLACKLIST · QUEUE",
      sections: [
        {
          label: "REGEX FILTERS",
          rows: [
            { desc: "Quick Filters chip 為臨時規則 · 場次結束自動失效" },
            { desc: "黑名單為長期規則 · 跨場次保留" },
            { desc: "Filter 動作：<b>block</b> 拒絕 / <b>replace</b> 改字 / <b>review</b> 進審核佇列 / <b>allow</b> 強制通過" },
          ],
        },
        {
          label: "MODERATION QUEUE",
          rows: [
            { desc: "命中 <b>review</b> action 的訊息進入這裡 ─ 30s 未處理自動 reject" },
            { desc: "Approve 通過後訊息推到 overlay · Reject 丟棄" },
            { desc: "Bulk action：APPROVE ALL LOW / REJECT ALL HIGH" },
          ],
        },
      ],
    },

    polls: {
      title: "Polls · 投票",
      subtitle: "POLL · MASTER-DETAIL · BUILDER",
      sections: [
        {
          label: "POLL LIFECYCLE",
          rows: [
            { desc: "pending → active → ended，新建為 pending" },
            { desc: "active 時觀眾打 A / B / C / D 投票 (大小寫皆可)" },
            { desc: "多題投票：observers 投完一題自動下一題" },
            { desc: "<b>polestar lock</b>：觀眾端永遠不顯示計票/百分比" },
          ],
        },
      ],
    },

    system: {
      title: "System · 系統",
      subtitle: "OVERVIEW · SECURITY · BACKUP",
      sections: [
        {
          label: "SECTIONS",
          rows: [
            { desc: "<b>Overview</b>：6 metric tiles + 服務狀態 + recent errors" },
            { desc: "<b>Security</b>：admin password、WS token、IP allowlist" },
            { desc: "<b>Backup</b>：場次歸檔匯出 JSON / CSV" },
            { desc: "<b>API Tokens</b>：external integration tokens" },
          ],
        },
        {
          label: "MAINTENANCE",
          rows: [
            { desc: "Reload Effects：重新掃 .dme 目錄不需重啟 server" },
            { desc: "重啟 WS / Force GC 出於安全考量已 disabled" },
          ],
        },
      ],
    },

    sessions: {
      title: "Sessions · 場次",
      subtitle: "DATA SLICES · TIME WINDOWS",
      sections: [
        {
          label: "WHAT IS A SESSION",
          rows: [
            { desc: "「場次」= 一段時間切片，內含訊息 / 投票 / 統計 — 不是「直播」" },
            { desc: "Overlay 開啟 trigger 新 session · 但 overlay 關掉 ≠ session 結束" },
            { desc: "點「結束並存檔」才把切片歸檔到 history (唯讀)" },
          ],
        },
        {
          label: "FILTERS",
          rows: [
            { desc: "<b>全部</b>：所有歷史切片（含進行中）" },
            { desc: "<b>進行中</b>：still open (尚未存檔) 的 active slice" },
            { desc: "<b>已結束</b>：已歸檔的唯讀 slice" },
          ],
        },
      ],
    },

    modqueue: {
      title: "Moderation Queue · 審核佇列",
      subtitle: "SWIMLANE · 30S AUTO-REJECT",
      sections: [
        {
          label: "COLUMNS",
          rows: [
            { desc: "<b>PENDING</b> (amber)：等待 admin 決定 · 每張卡有 30 秒倒數" },
            { desc: "<b>APPROVED</b> (lime)：通過後推到 overlay" },
            { desc: "<b>REJECTED</b> (crimson)：丟棄 ─ AUTO-REJECTED 表示倒數結束" },
          ],
        },
        {
          label: "RULE",
          rows: [
            { desc: "建立 filter rule 並設 action=review，命中的訊息自動進這裡" },
            { desc: "或在 Moderation > Filters 開啟 Quick Filters chips" },
          ],
        },
      ],
    },
  };

  function _routeKey() {
    const slug = (location.hash || "").replace("#/", "").split("/")[0] || "";
    if (HELP[slug]) return slug;
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
    const entry = HELP[_routeKey()];
    const sections = entry.sections.map((sec) => `
      <section class="admin-help__section">
        <div class="admin-help__sec-label">${sec.label}</div>
        ${sec.rows.map((r) => {
          const keys = (r.keys || []).map((k) => `<kbd class="admin-help__kbd">${k}</kbd>`).join("");
          return `<div class="admin-help__row">
            ${keys ? `<div class="admin-help__keys">${keys}</div>` : ""}
            <div class="admin-help__desc">${r.desc || ""}</div>
          </div>`;
        }).join("")}
      </section>`).join("");
    return `
      <header class="admin-help__head">
        <div>
          <div class="admin-help__title" id="admin-help-title">${entry.title}</div>
          <div class="admin-help__subtitle">${entry.subtitle}</div>
        </div>
        <span class="admin-help__spacer"></span>
        <button type="button" class="admin-help__close" data-help-close aria-label="Close">✕</button>
      </header>
      <div class="admin-help__body">
        ${sections}
      </div>
      <footer class="admin-help__foot">
        <span>按 <kbd class="admin-help__kbd">F1</kbd> 或 <kbd class="admin-help__kbd">Esc</kbd> 關閉</span>
        <a class="admin-help__more" href="https://github.com/guan4tou2/danmu-desktop" target="_blank" rel="noopener noreferrer">完整文件 →</a>
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
    if (e.key === "F1" || (e.key === "?" && !e.ctrlKey && !e.metaKey)) {
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
