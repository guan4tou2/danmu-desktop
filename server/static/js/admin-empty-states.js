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
 *     accent: "var(--color-ink-error)",   // optional — 圖示色票，預設 cyan
 *     actionLabel: "+ 新增規則",
 *     onAction: () => location.hash = "#/moderation/blacklist",
 *   });
 *
 * `accent` 只影響圖示色票；CTA 一律用主要動作色（單一主色）。要讓某顆 CTA
 * 換色請明確傳 `ctaAccent`，目前沒有 preset 這樣做。兩者都必須是**語意
 * token**（`var(--hud-crimson)` 之類），不要傳裸 hex —— 裸 hex 不會隨主題
 * 翻轉，淺色模式會留在深色臂。
 */
(function () {
  "use strict";

  const T = {
    cyan:    "var(--color-ink-accent)",
    amber:   "var(--color-ink-warning)",
    lime:    "var(--color-ink-success)",
    crimson: "var(--color-ink-error)",
    textDim: "var(--color-text-muted)",
  };

  // Design v4-r2 named empty states.
  const PRESETS = {
    sessions: {
      icon: "◷", titleKey: "emptySessionsTitle",
      descKey: "emptySessionsDesc",
      actionLabelKey: "emptySessionsAction",
      action: () => { location.hash = "#/overlay"; },
      accent: T.cyan,
    },
    polls: {
      icon: "⊷", titleKey: "emptyPollsTitle",
      descKey: "emptyPollsDesc",
      actionLabelKey: "emptyPollsAction",
      action: () => { location.hash = "#/polls"; },
      accent: T.amber,
    },
    audience: {
      icon: "◉", titleKey: "emptyAudienceTitle",
      descKey: "emptyAudienceDesc",
      accent: T.lime,
    },
    events: {
      icon: "⊙", titleKey: "emptyEventsTitle",
      descKey: "emptyEventsDesc",
      accent: T.lime,
    },
    messages: {
      icon: "≡", titleKey: "emptyMessagesTitle",
      descKey: "emptyMessagesDesc",
      accent: T.cyan,
    },
    blacklist: {
      icon: "⊘", titleKey: "emptyBlacklistTitle",
      descKey: "emptyBlacklistDesc",
      actionLabelKey: "emptyBlacklistAction",
      action: () => { location.hash = "#/moderation/blacklist"; },
      accent: T.crimson,
    },
    filters: {
      icon: "⚡", titleKey: "emptyFiltersTitle",
      descKey: "emptyFiltersDesc",
      actionLabelKey: "emptyFiltersAction",
      action: () => { location.hash = "#/moderation"; },
      accent: T.amber,
    },
    scheduler: {
      icon: "⏰", titleKey: "emptySchedulerTitle",
      descKey: "emptySchedulerDesc",
      actionLabelKey: "emptySchedulerAction",
      action: () => { location.hash = "#/system/scheduler"; },
      accent: T.cyan,
    },
  };

  function renderCustom(opts) {
    const {
      icon = "·", title = "", desc = "",
      accent = T.cyan, ctaAccent, actionLabel, action, extra,
    } = opts || {};
    const card = document.createElement("div");
    card.className = "admin-empty";
    card.dataset.empty = "1";
    // D-6 階段 4 (2026-07-29): 只交出「這張卡的 accent 是什麼」，色票底
    // 與邊框的濃度由 CSS 的 color-mix 決定。以前這裡是
    // `accent + "30"` / `accent + "0c"` 的字串拼接 —— 對 hex accent 剛好
    // 能動，但 8 個 preset 的 accent 全是 var(--token)，拼出來是無效值，
    // 色票底其實從來沒畫出來過（見 style.css .admin-empty__icon 註解）。
    card.style.setProperty("--admin-empty-accent", accent);
    // CTA 底色預設由 class 給（單一主要動作色）。accent 不再自動套到按鈕上
    // ——那會讓同一種動作每頁一個顏色；真的需要換色的呼叫端才明確傳
    // ctaAccent。
    if (ctaAccent) card.style.setProperty("--admin-empty-cta", ctaAccent);

    const iconEl = document.createElement("div");
    iconEl.className = "admin-empty__icon";
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
    // D-4：presets 是模組頂層常數（parse 時 ServerI18n 未 init），
    // 文案存 key、這裡 render 時才解析。renderCustom 是公開 API
    // （他模組帶已翻譯字串呼叫），簽名不動。
    if (!preset) return renderCustom({ title: ServerI18n.t("emptyNoData"), desc: "" });
    const resolved = Object.assign({}, preset, {
      title: preset.titleKey ? ServerI18n.t(preset.titleKey) : preset.title,
      desc: preset.descKey ? ServerI18n.t(preset.descKey) : preset.desc,
      actionLabel: preset.actionLabelKey
        ? ServerI18n.t(preset.actionLabelKey)
        : preset.actionLabel,
    });
    return renderCustom(resolved);
  }

  window.AdminEmpty = { render, renderCustom, PRESETS };
})();
