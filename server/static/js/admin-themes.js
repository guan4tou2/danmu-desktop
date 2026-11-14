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
  let _styleDefaults = null; // GET /admin/themes 的 style_defaults（danmu_style.effective_defaults）
  let _loaded = false;

  const SECTION_ID = "sec-themes";

  // 2026-11-14 彈幕樣式合一：主題從獨立的一頁變成「彈幕樣式」頁（#/viewer）
  // 最上面的一塊。套用主題會改掉樣式表裡「描邊」「陰影」兩列的值，所以那兩
  // 列的分段控制搬進 admin-display.js 的樣式表，這裡只留卡片（看一眼就知道
  // 長什麼樣、點一下套用）與預設收合的「細部設定」（字型、預設顏色）。
  // 樣式表透過 window.AdminThemes 讀寫，並聽 admin-themes-changed 事件重畫。
  function _sectionHtml() {
    const t = (k) => escapeHtml(ServerI18n.t(k));
    return `
      <div id="${SECTION_ID}" class="admin-style-themes lg:col-span-2">
        <div class="admin-style-themes-head">
          <span class="admin-ui-group-label" data-i18n="styleThemePacks">${t("styleThemePacks")}</span>
          <span class="admin-style-themes-actions">
            <button type="button" class="admin-ui-action" id="themeNewBtn">${t("themesNewBtn")}</button>
            <button type="button" id="themeReloadBtn" class="admin-ui-action admin-theme-reload-action">${t("themesReloadBtn")}</button>
          </span>
        </div>
        <div id="themesList">
          <span class="theme-pack-muted" style="padding:14px">${t("themesLoading")}</span>
        </div>
        <!-- 「<主題> · 細部設定」（設計稿 08 · T1）。主題檔本身是 repo 裡的
             YAML，改它等於改程式碼；這裡調的值存成一層覆寫，疊在 YAML 之上。
             描邊與陰影是樣式表的兩列，這裡剩下少用的字型與預設顏色。 -->
        <details class="admin-dsp2-fold admin-style-themes-detail" data-theme-detail-fold>
          <summary id="themeDetailLabel">—</summary>
          <div class="admin-ui-group" id="themeDetail" data-theme-detail>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvFont">${t("themeDetailFont")}</label>
              <span class="val">
                <select class="admin-ui-input" data-theme-ov="font_family" id="themeOvFont"></select>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <label class="lbl" for="themeOvColor">${t("themeDetailColor")}
                <span class="sub">${t("themeDetailColorHint")}</span>
              </label>
              <span class="val">
                <input type="color" class="admin-ui-input" data-theme-ov="color" id="themeOvColor" />
                <button type="button" class="admin-ui-action" data-theme-ov-clear="color" hidden>${t("themeDetailFontInherit")}</button>
              </span>
            </div>
          </div>
          <div class="theme-pack-sample" id="themeDetailPreview">
            <span class="theme-pack-sample-label">${t("themesSampleLabel")}</span>
            <span class="theme-pack-sample-line" data-theme-preview-line>
              <span class="theme-pack-sample-nick">${escapeHtml(SAMPLE_NICK)}</span>${escapeHtml(SAMPLE_TEXT)}
            </span>
          </div>
        </details>
      </div>`;
  }

  // 注入版面。回傳 true 代表這次是新建的（要綁事件）；renderControlPanel
  // 整段重畫後舊節點不在了，會再建一次。
  function _inject() {
    if (document.getElementById(SECTION_ID)) return false;
    const grid = document.getElementById("settings-grid");
    if (!grid) return false;
    grid.insertAdjacentHTML("beforeend", _sectionHtml());
    return true;
  }

  // 主題狀態變了（載入、套用、細部設定存檔）的唯一事件。樣式表的描邊／陰影／
  // 顏色／字型列與預覽都聽它重畫。
  function _emit() {
    document.dispatchEvent(new CustomEvent("admin-themes-changed", {
      detail: { active: _adminActiveTheme },
    }));
  }

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

  // quiet：已經有清單時不閃骨架（套用、存檔、樣式表要求重抓時）。
  async function fetchThemes(quiet) {
    if (!(quiet && _loaded)) _renderLoadingSkeleton();
    try {
      const res = await csrfFetch("/admin/themes");
      if (!res.ok) return false;
      const data = await res.json();
      _adminActiveTheme = data.active || "default";
      _themes = data.themes || [];
      _overrides = data.overrides || {};
      _styleDefaults = data.style_defaults || null;
      _loaded = true;
      renderThemesList(_themes, _adminActiveTheme);
      renderDetail();
      _emit();
      return true;
    } catch (e) {
      console.warn("[Themes] Failed to fetch themes:", e);
      return false;
    }
  }

  // 套用主題的唯一出口（主題卡片、⌘K 指令面板都走這裡）。成功後重抓一次：
  // 換主題會換掉預設顏色／字型的來源，那要後端算（style_defaults）。
  // 回傳 { ok, error }；提示由呼叫端決定。
  async function activate(themeName) {
    let res;
    try {
      res = await csrfFetch("/admin/themes/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: themeName }),
      });
    } catch (e) {
      return { ok: false, error: "" };
    }
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { ok: false, error: err.error || "" };
    }
    _adminActiveTheme = themeName;
    if (!(await fetchThemes(true))) {
      // 重抓失敗也要讓頁面知道換了主題（來源資訊先清掉，不顯示過時的）
      _styleDefaults = null;
      renderThemesList(_themes, themeName);
      renderDetail();
      _emit();
    }
    return { ok: true, error: "" };
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

  function _hex6(value) {
    var v = String(value || "").trim();
    var m = v.match(/^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/);
    if (m) v = "#" + m[1] + m[1] + m[2] + m[2] + m[3] + m[3];
    if (/^[0-9a-fA-F]{6}$/.test(v)) v = "#" + v;
    return /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : null;
  }

  // 彈幕實際用的預設顏色／字型：主題的覆寫有值就是它，否則是全域預設
  // （services/danmu_style.py）。主題 YAML 自己的 styles.color / font.family
  // 不會上大螢幕，範例也就不畫它，免得卡片長得跟送出去的不一樣。
  function _sampleColor(theme) {
    var ov = _overrides[theme.name] || {};
    var global = _styleDefaults && _styleDefaults.Color && _styleDefaults.Color.global;
    return _hex6(ov.color) || _hex6(global) || "#ffffff";
  }

  function _sampleStyle(theme) {
    var st = theme.styles || {};
    var color = _sampleColor(theme);
    var parts = ["color:" + color];
    if (st.textStroke) {
      var w = Math.max(0, Math.min(6, Number(st.strokeWidth) || 0));
      parts.push("-webkit-text-stroke:" + w + "px " + _safeColor(st.strokeColor, "#000000"));
      parts.push("paint-order:stroke fill");
    }
    if (st.textShadow) {
      var blur = Math.max(0, Math.min(40, Number(st.shadowBlur) || 0));
      parts.push("text-shadow:0 0 " + blur + "px " + color);
    }
    var fam = (_overrides[theme.name] || {}).font_family ||
      (_styleDefaults && _styleDefaults.FontFamily && _styleDefaults.FontFamily.global);
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
        const result = await activate(btn.dataset.theme);
        // 設計稿 14：toast 是動詞完成式且 ≤ 8 字。原本是「主題「retro」已
        // 啟用」——把內部 slug 唸給使用者聽，而且他剛剛才點的那張卡就在
        // 眼前，不需要複述是哪一個。
        if (result.ok) showToast(ServerI18n.t("themeActivated"), true);
        else showToast(result.error || ServerI18n.t("setThemeFailed"), false);
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

    // 沒有覆寫時顯示全域預設（那才是現在實際用的），「用全域預設」鈕藏起來。
    const ov = _overrides[_adminActiveTheme] || {};
    const colorInput = group.querySelector('[data-theme-ov="color"]');
    if (colorInput) colorInput.value = _hex6(ov.color) || _sampleColor(theme);
    const clearBtn = group.querySelector('[data-theme-ov-clear="color"]');
    if (clearBtn) clearBtn.hidden = !ov.color;

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
      // 重新抓：styles 與 style_defaults 是後端算的，前端自己算會兩邊漂
      await fetchThemes(true);
    } catch (e) {
      showToast(ServerI18n.t("themeDetailSaveFailed"), false);
    }
  }

  function bindDetail() {
    const group = document.getElementById("themeDetail");
    if (!group) return;
    group.addEventListener("change", (e) => {
      const el = e.target.closest("[data-theme-ov]");
      if (!el) return;
      patchOverride({ [el.getAttribute("data-theme-ov")]: el.value });
    });
    group.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme-ov-clear]");
      if (btn) patchOverride({ [btn.getAttribute("data-theme-ov-clear")]: "" });
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
    const fresh = _inject();
    fetchThemes();
    if (!fresh) return; // 同一份 DOM 已經綁過
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

  // 樣式表（admin-display.js）的「描邊」「陰影」兩列讀寫的是使用中主題的覆寫。
  // 主題還沒載入時 segOf 回 null，列上就不標任何一段。
  window.AdminThemes = {
    init: init,
    segOf(kind) {
      const theme = _activeTheme();
      return _loaded && theme ? _segOf(kind, theme) : null;
    },
    activeStyles() {
      const theme = _activeTheme();
      return (theme && theme.styles) || {};
    },
    // 觀眾沒選時的顏色／字型與來源：{ Color: {value, source, global,
    // theme_value, rejected}, FontFamily: {...} }。還沒載入時是 null。
    styleDefaults() {
      return _styleDefaults;
    },
    activate: activate,
    refresh() {
      return fetchThemes(true);
    },
    setSeg(kind, value) {
      if (kind !== "stroke" && kind !== "shadow") return Promise.resolve();
      return patchOverride({ [kind]: value });
    },
  };
})();
