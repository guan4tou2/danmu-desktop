/**
 * Admin Themes Management Section
 *
 * Extracted from admin.js to reduce file size.
 * Globals: csrfFetch (window.csrfFetch), showToast (window.showToast),
 *          AdminUtils (window.AdminUtils)
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;
  function csrfFetch(url, opts) { return window.csrfFetch(url, opts); }
  function showToast(msg, ok) { return window.showToast(msg, ok); }

  let _adminActiveTheme = "default";

  // 2026-07-07 (C6): show a skeleton list while the fetch is in flight so the
  // themes page matches Effects' loading affordance instead of a blank pane.
  function _renderLoadingSkeleton() {
    const container = document.getElementById("themesList");
    if (!container) return;
    if (window.AdminSkeletons) {
      container.innerHTML = "";
      container.appendChild(window.AdminSkeletons.listRows({ rows: 4 }));
    }
  }

  async function fetchThemes() {
    _renderLoadingSkeleton();
    try {
      const res = await csrfFetch("/admin/themes");
      if (!res.ok) return;
      const data = await res.json();
      _adminActiveTheme = data.active || "default";
      renderThemesList(data.themes || [], _adminActiveTheme);
    } catch (e) {
      console.warn("[Themes] Failed to fetch themes:", e);
    }
  }

  // ── 卡片（設計稿 08 · T1）────────────────────────────────────────────
  //
  // 稿上的卡片只有三樣東西：主題名、**彈幕範例**、以及「使用中」或「套用」。
  // 之前這張卡有色票列、全大寫英文代號、「○ 未使用」狀態字、字型／排版／FX
  // 三行 meta、還有 BUILT-IN / CUSTOM 標籤——那些是在描述主題的規格，但使用者
  // 要決定的是「這個主題長什麼樣」，而那件事只有直接畫一行彈幕能回答。

  var SAMPLE_NICK = "小明";
  var SAMPLE_TEXT = "講得好！+1";

  // 顏色來自 repo 內的 theme YAML，但它終究是要塞進 style 屬性的字串——
  // 只放行 hex 與 rgb()/rgba()，其餘一律退回預設，免得哪天主題檔變成
  // 使用者可上傳的東西時這裡變成注入點。
  function _safeColor(value, fallback) {
    var v = String(value || "").trim();
    return /^(#[0-9a-fA-F]{3,8}|rgba?\([\d\s.,%]+\))$/.test(v) ? v : fallback;
  }

  function _sampleStyle(theme) {
    var st = theme.styles || {};
    var parts = ["color:" + _safeColor(st.color, "#ffffff")];
    if (st.textStroke) {
      var w = Math.max(0, Math.min(6, Number(st.strokeWidth) || 0));
      parts.push("-webkit-text-stroke:" + w + "px " + _safeColor(st.strokeColor, "#000000"));
      parts.push("paint-order:stroke fill");
    }
    if (st.textShadow) {
      var blur = Math.max(0, Math.min(40, Number(st.shadowBlur) || 0));
      parts.push("text-shadow:0 0 " + blur + "px " + _safeColor(st.color, "#ffffff"));
    }
    var fam = theme.font && theme.font.family;
    if (fam && /^[\w\s-]{1,40}$/.test(fam)) parts.push("font-family:'" + fam + "', var(--font-sans)");
    if (theme.font && Number(theme.font.weight)) {
      parts.push("font-weight:" + Math.max(100, Math.min(900, Number(theme.font.weight))));
    }
    return parts.join(";");
  }

  function _stageStyle(theme) {
    var grad = theme.bg && theme.bg.gradient;
    // gradient 同樣只放行「認得出來的」寫法
    if (grad && /^linear-gradient\([^;"'<>]{1,200}\)$/.test(String(grad).trim())) {
      return "background:" + String(grad).trim();
    }
    return "";
  }

  function renderThemesList(themes, activeName) {
    const container = document.getElementById("themesList");
    if (!container) return;
    container.innerHTML = "";

    if (themes.length === 0) {
      container.innerHTML = '<span class="theme-pack-muted" style="padding:14px">' + ServerI18n.t("noThemesFound") + '</span>';
      return;
    }

    themes.forEach((theme) => {
      const isActive = theme.name === activeName;
      const label = escapeHtml(
        ServerI18n.t("theme_" + theme.name) !== "theme_" + theme.name
          ? ServerI18n.t("theme_" + theme.name)
          : (theme.label || theme.name)
      );

      const card = document.createElement("div");
      card.className = `theme-pack-card${isActive ? " is-active" : ""}`;
      card.innerHTML = `
        <div class="theme-pack-name">${label}</div>
        <div class="theme-pack-sample" style="${escapeHtml(_stageStyle(theme))}">
          <span class="theme-pack-sample-label">${ServerI18n.t("themesSampleLabel")}</span>
          <span class="theme-pack-sample-line" style="${escapeHtml(_sampleStyle(theme))}">
            <span class="theme-pack-sample-nick">${escapeHtml(SAMPLE_NICK)}</span>
            ${escapeHtml(SAMPLE_TEXT)}
          </span>
        </div>
        <div class="theme-pack-actions">
          ${isActive
            ? '<span class="admin-ui-chip admin-theme-pack-status is-active">' + ServerI18n.t("themesActiveChip") + '</span>'
            : `<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${escapeHtml(theme.name)}">${ServerI18n.t("themesActivateBtn")}</button>`
          }
        </div>
      `;
      container.appendChild(card);
    });

    // Bind activate buttons
    container.querySelectorAll(".theme-activate-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const themeName = btn.dataset.theme;
        try {
          const res = await csrfFetch("/admin/themes/active", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: themeName }),
          });
          if (res.ok) {
            // 設計稿 14：toast 是動詞完成式且 ≤ 8 字。原本是「主題「retro」已
            // 啟用」——把內部 slug 唸給使用者聽，而且他剛剛才點的那張卡就在
            // 眼前，不需要複述是哪一個。
            showToast(ServerI18n.t("themeActivated"), true);
            _adminActiveTheme = themeName;
            renderThemesList(themes, themeName);
          } else {
            const err = await res.json().catch(() => ({}));
            showToast(err.error || ServerI18n.t("setThemeFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("setThemeFailed"), false);
        }
      });
    });
  }

  function init() {
    fetchThemes();

    const reloadBtn = document.getElementById("themeReloadBtn");
    if (reloadBtn) {
      reloadBtn.addEventListener("click", async () => {
        try {
          const res = await csrfFetch("/admin/themes/reload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            showToast(ServerI18n.t("themesReloaded"));
            fetchThemes();
          } else {
            showToast(ServerI18n.t("themesReloadFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("themesReloadFailed"), false);
        }
      });
    }
  }

  window.AdminThemes = { init: init };
})();
