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
  let _themes = [];
  let _overrides = {};

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
      _themes = data.themes || [];
      _overrides = data.overrides || {};
      renderThemesList(_themes, _adminActiveTheme);
      renderDetail();
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
          ${theme.custom
            ? `<button class="admin-ui-action theme-delete-btn" data-theme="${escapeHtml(theme.name)}">${ServerI18n.t("themesDeleteBtn")}</button>`
            : ""}
          ${isActive
            ? '<span class="admin-ui-chip admin-theme-pack-status is-active">' + ServerI18n.t("themesActiveChip") + '</span>'
            : `<button class="admin-ui-action is-primary admin-theme-pack-action theme-activate-btn" data-theme="${escapeHtml(theme.name)}">${ServerI18n.t("themesActivateBtn")}</button>`
          }
        </div>
      `;
      container.appendChild(card);
    });

    // 刪除只出現在主持人自己建的主題上——內建的四個是 repo 檔案，
    // 後端也會拒絕，這裡不畫按鈕是為了不讓人按到一個一定會失敗的東西。
    container.querySelectorAll(".theme-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const name = btn.dataset.theme;
        // 破壞性動作走 HUD 確認框，不用原生 confirm（有 jest 在守）
        const ok = await window.HudConfirm.open({
          title: ServerI18n.t("themesDeleteBtn"),
          severity: "danger",
          body: ServerI18n.t("themesDeleteConfirm"),
          confirmLabel: ServerI18n.t("themesDeleteBtn"),
          cancelLabel: ServerI18n.t("cancel"),
        });
        if (!ok) return;
        try {
          const res = await csrfFetch("/admin/themes/" + encodeURIComponent(name), {
            method: "DELETE",
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          showToast(ServerI18n.t("themeDeleted"), true);
          fetchThemes();
        } catch (e) {
          showToast(ServerI18n.t("themesDeleteFailed"), false);
        }
      });
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
            renderDetail();
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

  // ── 「<主題> · 細部設定」（設計稿 08 · T1）────────────────────────
  //
  // 調的是**使用中的那個主題**的覆寫。主題檔本身是 repo 裡的 YAML，改它
  // 等於改程式碼；這一層存在 runtime/theme_overrides.json，由後端的
  // themes.get_active() 疊上去，所以每一則彈幕都吃得到。

  function _activeTheme() {
    return _themes.find((t) => t.name === _adminActiveTheme) || null;
  }

  // 反推「現在是哪一段」：有覆寫就用覆寫，沒有就從主題本身的 styles 看。
  // load_all 回的 styles 已經是套用覆寫後的結果，所以只能這樣讀。
  function _segOf(kind, theme) {
    const ov = _overrides[_adminActiveTheme] || {};
    if (ov[kind]) return ov[kind];
    const st = (theme && theme.styles) || {};
    if (kind === "stroke") {
      if (!st.textStroke) return "none";
      return Number(st.strokeWidth) >= 3 ? "thick" : "thin";
    }
    if (!st.textShadow) return "none";
    return Number(st.shadowBlur) >= 10 ? "strong" : "soft";
  }

  function renderDetail() {
    const group = document.getElementById("themeDetail");
    const label = document.getElementById("themeDetailLabel");
    if (!group || !label) return;
    const theme = _activeTheme();
    if (!theme) return;

    const themeLabel =
      ServerI18n.t("theme_" + theme.name) !== "theme_" + theme.name
        ? ServerI18n.t("theme_" + theme.name)
        : theme.label || theme.name;
    label.textContent = ServerI18n.t("themeDetailGroup", { name: themeLabel });

    ["stroke", "shadow"].forEach((kind) => {
      const cur = _segOf(kind, theme);
      group.querySelectorAll(`[data-theme-seg="${kind}"] [data-theme-opt]`).forEach((b) => {
        const on = b.getAttribute("data-theme-opt") === cur;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    });

    const colorInput = group.querySelector('[data-theme-ov="color"]');
    if (colorInput) {
      const c = _safeColor((theme.styles || {}).color, "#ffffff");
      colorInput.value = /^#[0-9a-fA-F]{6}$/.test(c) ? c : "#ffffff";
    }

    _fillFontSelect(theme);
    _renderDetailPreview(theme);
  }

  // 字型下拉的選項來自 /fonts（觀眾實際能用的那份清單）。第一個選項是
  // 「用主題原本的」——值留空，後端收到空字串就把覆寫移除。
  var _fontOptions = null;
  async function _fillFontSelect(theme) {
    const sel = document.getElementById("themeOvFont");
    if (!sel) return;
    if (!_fontOptions) {
      try {
        const r = await fetch("/fonts", { credentials: "same-origin" });
        _fontOptions = r.ok ? ((await r.json()).fonts || []) : [];
      } catch (_) { _fontOptions = []; }
    }
    const ov = _overrides[_adminActiveTheme] || {};
    const current = ov.font_family || "";
    sel.innerHTML =
      `<option value="">${escapeHtml(ServerI18n.t("themeDetailFontInherit"))}</option>` +
      _fontOptions
        .map((f) => {
          const name = String(f.name || f);
          return `<option value="${escapeHtml(name)}"${name === current ? " selected" : ""}>${escapeHtml(name)}</option>`;
        })
        .join("");
  }

  function _renderDetailPreview(theme) {
    const line = document.querySelector("[data-theme-preview-line]");
    if (line) line.setAttribute("style", _sampleStyle(theme));
  }

  async function patchOverride(patch) {
    try {
      const res = await csrfFetch(
        "/admin/themes/" + encodeURIComponent(_adminActiveTheme) + "/overrides",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch),
        }
      );
      if (!res.ok) throw new Error("HTTP " + res.status);
      showToast(ServerI18n.t("themeDetailSaved"), true);
      // 重新抓：styles 是後端合併出來的，前端自己算會兩邊漂
      await fetchThemes();
    } catch (e) {
      showToast(ServerI18n.t("themeDetailSaveFailed"), false);
    }
  }

  function bindDetail() {
    const group = document.getElementById("themeDetail");
    if (!group) return;
    group.addEventListener("click", (e) => {
      const opt = e.target.closest("[data-theme-opt]");
      if (!opt) return;
      const wrap = opt.closest("[data-theme-seg]");
      if (!wrap) return;
      patchOverride({ [wrap.getAttribute("data-theme-seg")]: opt.getAttribute("data-theme-opt") });
    });
    group.addEventListener("change", (e) => {
      const el = e.target.closest("[data-theme-ov]");
      if (!el) return;
      patchOverride({ [el.getAttribute("data-theme-ov")]: el.value });
    });
  }

  // 「新主題」＝把現在這個主題（含細部設定）另存一份（設計稿 08 · T1）。
  // 這顆鈕在 .admin-ui-page-actions 裡，頁首併進 topbar 時會被搬走——
  // 委派在 section 上收不到它的 click，所以直接綁（style-contract §5.4d）。
  function bindNewTheme() {
    const btn = document.getElementById("themeNewBtn");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const label = window.prompt(ServerI18n.t("themesNewPrompt"), "");
      if (!label || !label.trim()) return;
      try {
        const res = await csrfFetch("/admin/themes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ label: label.trim(), base: _adminActiveTheme }),
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        showToast(ServerI18n.t("themeCreated"), true);
        fetchThemes();
      } catch (e) {
        showToast(ServerI18n.t("themesNewFailed"), false);
      }
    });
  }

  function init() {
    fetchThemes();
    bindDetail();
    bindNewTheme();

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
