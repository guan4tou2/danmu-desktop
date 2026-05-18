/**
 * Admin · Empty State Cards (design v4-r2 2026-05-18 admin-states.jsx).
 *
 * 8 named empty states + a generic shell. Replaces the
 * `[PLACEHOLDER] ...` boxes in live-feed / emojis / filters / events.
 *
 *   const el = window.AdminEmpty.render("messages");
 *   container.replaceChildren(el);
 *
 * Or build a custom variant:
 *
 *   window.AdminEmpty.renderCustom({
 *     icon: "⊘",
 *     title: "黑名單是空的",
 *     desc: "尚未封禁任何...",
 *     accent: "#fb7185",      // optional, defaults to cyan
 *     actionLabel: "+ 新增規則",
 *     onAction: () => location.hash = "#/moderation/blacklist",
 *   });
 */
(function () {
  "use strict";

  const T = {
    cyan:    "#38bdf8",
    amber:   "#fbbf24",
    lime:    "#86efac",
    crimson: "#fb7185",
    textDim: "#94a3b8",
  };

  // Design v4-r2 named empty states.
  const PRESETS = {
    sessions: {
      icon: "◷", title: "尚無場次紀錄",
      desc: "開始第一場場次後，場次紀錄將自動出現在這裡。每場場次的觀眾數、訊息數、投票紀錄都會被保存。",
      actionLabel: "開始第一場場次 →",
      action: () => { location.hash = "#/overlay"; },
      accent: T.cyan,
    },
    polls: {
      icon: "⊷", title: "尚無投票",
      desc: "建立你的第一個投票，觀眾可以透過輸入選項代碼 (A/B/C/D) 即時參與。支援單選、多選、計時模式。",
      actionLabel: "+ 建立投票",
      action: () => { location.hash = "#/polls"; },
      accent: T.amber,
    },
    audience: {
      icon: "◉", title: "等待觀眾加入…",
      desc: "當觀眾開啟連結或掃描 QR Code 後，他們的指紋資訊會自動出現在這裡。目前沒有任何連線。",
      accent: T.lime,
    },
    events: {
      icon: "⊙", title: "一切正常",
      desc: "系統事件流目前為空 — 沒有錯誤、沒有警告。當 WebSocket 連線、外掛錯誤、排程觸發等事件發生時，會記錄在這裡。",
      accent: T.lime,
    },
    messages: {
      icon: "≡", title: "等待第一則訊息…",
      desc: "場次開始後，觀眾送出的訊息會即時出現在這裡。確認 Overlay 已開啟（Live → 開始顯示）。",
      accent: T.cyan,
    },
    blacklist: {
      icon: "⊘", title: "黑名單是空的",
      desc: "尚未封禁任何指紋或 IP。當你在訊息流中封禁用戶，或手動新增規則時，記錄會出現在這裡。",
      actionLabel: "+ 新增規則",
      action: () => { location.hash = "#/moderation/blacklist"; },
      accent: T.crimson,
    },
    filters: {
      icon: "⚡", title: "沒有啟用中的過濾規則",
      desc: "即時過濾是臨時規則，場次結束後自動失效。開啟 Quick Filters 或自訂 Regex 來過濾不當訊息。",
      actionLabel: "啟用 Quick Filters",
      action: () => { location.hash = "#/moderation"; },
      accent: T.amber,
    },
    scheduler: {
      icon: "⏰", title: "尚無排程",
      desc: "預先排好 demo 流程，活動時不需要切換手忙腳亂。支援 Cron、一次性、循環排程 — 自動觸發投票、推送訊息、切換主題。",
      actionLabel: "+ 新增排程",
      action: () => { location.hash = "#/system/scheduler"; },
      accent: T.cyan,
    },
  };

  function renderCustom(opts) {
    const {
      icon = "·", title = "", desc = "",
      accent = T.cyan, actionLabel, action, extra,
    } = opts || {};
    const card = document.createElement("div");
    card.className = "admin-empty";
    card.dataset.empty = "1";

    const iconEl = document.createElement("div");
    iconEl.className = "admin-empty__icon";
    iconEl.style.color = accent;
    iconEl.style.borderColor = accent + "30";
    iconEl.style.background = accent + "0c";
    iconEl.textContent = icon;
    card.appendChild(iconEl);

    if (title) {
      const t = document.createElement("div");
      t.className = "admin-empty__title";
      t.textContent = title;
      card.appendChild(t);
    }
    if (desc) {
      const d = document.createElement("div");
      d.className = "admin-empty__desc";
      d.textContent = desc;
      card.appendChild(d);
    }
    if (actionLabel) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "admin-empty__btn";
      btn.style.borderColor = accent;
      btn.style.background = accent;
      btn.textContent = actionLabel;
      if (typeof action === "function") {
        btn.addEventListener("click", action);
      }
      card.appendChild(btn);
    }
    if (extra) {
      // Allow caller to append a small chip / hint below the action.
      const wrap = document.createElement("div");
      wrap.className = "admin-empty__extra";
      if (typeof extra === "string") wrap.innerHTML = extra;
      else wrap.appendChild(extra);
      card.appendChild(wrap);
    }
    return card;
  }

  function render(kind) {
    const preset = PRESETS[kind];
    if (!preset) return renderCustom({ title: "沒有資料", desc: "" });
    return renderCustom(preset);
  }

  window.AdminEmpty = { render, renderCustom, PRESETS };
})();
