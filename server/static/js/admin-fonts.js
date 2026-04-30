/**
 * Admin Font Management Section (prototype-aligned layout)
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;

  function formatPill(status) {
    if (status === "default") {
      return `<span class="hud-pill is-default">預設</span>`;
    }
    if (status === "enabled") {
      return `<span class="hud-pill is-lime">ON</span>`;
    }
    if (status === "system") {
      return `<span class="hud-pill">SYS</span>`;
    }
    // disabled
    return `<span class="hud-pill">關閉</span>`;
  }

  function buildSection() {
    const loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;
    const uploadHiddenInput = loggedIn
      ? `<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />`
      : "";

    return `
      <div id="sec-fonts" class="hud-page-stack lg:col-span-2">
        <div class="hud-page-grid-2-wide">
          <!-- Left: font table -->
          <div class="hud-page-stack" style="gap:0">
            <div class="hud-table" id="fontsTable">
              <div class="hud-table-head" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;">
                <span>FAMILY</span>
                <span>FOUNDRY</span>
                <span>WEIGHT</span>
                <span>SIZE</span>
                <span>FMT</span>
                <span style="text-align:right">STATUS</span>
              </div>
              <div id="adminFontList">
                <div class="hud-table-row" style="grid-template-columns: 1fr;">
                  <span class="text-xs text-slate-400">${ServerI18n.t("loadingFonts")}</span>
                </div>
              </div>
              <div class="hud-table-foot" style="padding:14px 16px;display:flex;align-items:center;gap:10px;">
                ${loggedIn ? `<label for="adminFontFileInput" class="hud-toolbar-action" style="cursor:pointer" title="${escapeHtml(ServerI18n.t("uploadFont"))}">+ ${ServerI18n.t("uploadFont")} · WOFF2 / OTF / TTF</label>${uploadHiddenInput}` : ""}
                <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.12em">總計 —</span>
              </div>
            </div>
            <div id="adminFontEmptyStateHost"></div>
            ${loggedIn ? `
            <div class="admin-v2-card admin-fonts-upload-card" id="adminFontDropWrap" style="margin-top:12px">
              <div class="admin-v2-monolabel" style="margin-bottom:8px">+ 上傳自訂字型</div>
              <div
                id="adminFontDrop"
                class="admin-fonts-drop"
                role="button"
                tabindex="0"
                aria-label="${escapeHtml(ServerI18n.t("uploadFont"))}"
              >
                <div class="admin-fonts-drop-icon">⬆</div>
                <div class="admin-fonts-drop-title">拖曳或點選檔案</div>
                <div class="admin-fonts-drop-hint">.TTF / .OTF / .WOFF2 · 最大 5 MB · 前端會驗證 magic bytes</div>
                <div id="adminFontDropStatus" class="admin-fonts-drop-status" hidden></div>
              </div>
              <div id="adminFontUploadError" class="admin-font-upload-error" hidden></div>
            </div>` : ""}
          </div>

          <!-- Right: preview + metadata panels -->
          <div class="hud-page-stack" style="gap:16px">
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">PREVIEW · <span id="fontsPreviewFamily">Noto Sans TC</span></span>
              </div>
              <div style="padding:16px;display:flex;flex-direction:column;gap:8px">
                <div id="fontsPreviewHeadline" style="font-size:32px;font-weight:700;line-height:1.2;color:var(--color-text-strong)">彈幕即時互動</div>
                <div id="fontsPreviewLatin" style="font-size:18px;color:var(--color-text-muted)">The quick brown 狐 jumps over 狸</div>
                <div style="padding:10px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px;font-size:13px;color:var(--color-text-strong)">
                  <div id="fontsPreviewCJK">永 和 安 康 繁 體 中 文 測 試</div>
                  <div style="margin-top:6px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">
                    U+6C38 U+548C U+5B89 U+5EB7 · 字純文字測試
                  </div>
                </div>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">SUBSETTING · 子集化</span>
              </div>
              <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
                <div style="font-size:13px;color:var(--color-text-strong)">自動產生子集，只載入實際用到的字</div>
                <div style="height:8px;border-radius:4px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);overflow:hidden">
                  <div id="fontsSubsetBar" style="width:0%;height:100%;background:var(--color-primary);transition:width 0.4s ease"></div>
                </div>
                <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.05em">
                  <span id="fontsOrigSize">ORIG · —</span>
                  <span id="fontsSubsetSize" style="color:var(--color-primary)">SUBSET · —</span>
                </div>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">CDN DELIVERY · 交付狀態</span>
              </div>
              <div style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
                <div class="hud-kv"><span class="hud-kv-k">HIT RATE</span><span class="hud-kv-v" style="color:#86efac" id="fontsCdnHit">—</span></div>
                <div class="hud-kv"><span class="hud-kv-k">P95 TTFB</span><span class="hud-kv-v" style="color:var(--color-primary)" id="fontsCdnTtfb">—</span></div>
                <div class="hud-kv"><span class="hud-kv-k">REQ/24H</span><span class="hud-kv-v" id="fontsCdnReq">—</span></div>
                <div class="hud-kv"><span class="hud-kv-k">EDGE</span><span class="hud-kv-v" id="fontsCdnEdge">LOCAL</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  var currentDefaultFont = null;
  var _allFonts = [];

  function renderFontsEmptyState(fonts, loggedIn) {
    var host = document.getElementById("adminFontEmptyStateHost");
    if (!host) return;
    const hasUploaded = (fonts || []).some((f) => f.type === "uploaded");
    if (hasUploaded) {
      host.innerHTML = "";
      return;
    }
    host.innerHTML = `
      <div class="admin-proto-empty admin-proto-empty--fonts" data-empty-kind="fonts">
        <div class="admin-proto-empty-title">尚未上傳自訂字型</div>
        <div class="admin-proto-empty-desc">
          預設使用 Noto Sans TC + IBM Plex Mono。<br/>
          上傳 .woff2 / .ttf 可給觀眾選用,或設為 Overlay 預設字型。
        </div>
        <div class="admin-proto-empty-actions">
          ${loggedIn ? '<button type="button" class="admin-proto-empty-primary" data-empty-cta="fonts-upload-first">⇪ 上傳字型</button>' : ''}
          <span class="admin-be-placeholder-control admin-be-placeholder-inline">[PLACEHOLDER] 從 Google Fonts（待 BE）</span>
        </div>
        <div class="admin-proto-empty-hint">支援格式 · WOFF2 · WOFF · TTF · OTF</div>
      </div>
    `;
    if (loggedIn) {
      var btn = host.querySelector('[data-empty-cta="fonts-upload-first"]');
      if (btn) {
        btn.addEventListener("click", function () {
          var fi = document.getElementById("adminFontFileInput");
          if (fi) fi.click();
        });
      }
    }
  }

  function fontRow(font, loggedIn) {
    const weight = font.weight || "—";
    const size = font.sizeLabel || "—";
    const foundry = font.foundry || (font.type === "system" ? "System" : font.type === "default" ? "Google / Noto" : "Uploaded");
    const fmt = font.format || "—";
    const status = font.status || font.type;

    const sampleStyle = `font-family: "${escapeHtml(font.name)}", sans-serif;`;
    const statusPill = formatPill(status);

    const actionBtns = [];
    if (loggedIn) {
      if (status !== "default") {
        actionBtns.push(
          `<button class="admin-font-default-btn hud-effect-chip" data-name="${escapeHtml(font.name)}">設為預設</button>`
        );
      }
      // Toggle ON/OFF for non-default catalog/system fonts
      if (status !== "default") {
        const isOn = status === "enabled" || status === "system";
        const toggleLabel = isOn ? "關閉" : "開啟";
        actionBtns.push(
          `<button class="admin-font-toggle-btn hud-effect-chip" data-name="${escapeHtml(font.name)}" data-enabled="${isOn ? "true" : "false"}">${toggleLabel}</button>`
        );
      }
      if (font.type === "uploaded") {
        actionBtns.push(
          `<button class="admin-font-delete-btn hud-effect-chip" data-name="${escapeHtml(font.name)}">${escapeHtml(ServerI18n.t("deleteBtn"))}</button>`
        );
      }
    }

    return (
      `<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 80px 96px;" data-font="${escapeHtml(font.name)}">` +
        `<div class="min-w-0">` +
          `<div style="font-size:15px;color:var(--color-text-strong);${sampleStyle}" class="truncate">${escapeHtml(font.name)}</div>` +
          `<div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">啊 永 の A a 123</div>` +
          (actionBtns.length ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${actionBtns.join("")}</div>` : "") +
        `</div>` +
        `<span style="font-size:12px;color:var(--color-text-strong)">${escapeHtml(foundry)}</span>` +
        `<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${escapeHtml(weight)}</span>` +
        `<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${escapeHtml(size)}</span>` +
        `<span class="hud-pill" style="text-transform:uppercase;justify-self:start">${escapeHtml(fmt)}</span>` +
        `<div style="text-align:right">${statusPill}</div>` +
      `</div>`
    );
  }

  async function setAsDefault(name) {
    try {
      const resp = await window.csrfFetch("/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "FontFamily", index: 3, value: name }),
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      currentDefaultFont = name;
      window.showToast(
        (ServerI18n.t("setAsDefaultOk") !== "setAsDefaultOk"
          ? ServerI18n.t("setAsDefaultOk")
          : "已設為預設字型") + " · " + name,
        true
      );
      fetchAndRenderFonts();
    } catch (err) {
      console.error("[admin-fonts] set default failed:", err);
      window.showToast("設定預設失敗", false);
    }
  }

  async function doToggle(name, currentlyEnabled) {
    try {
      const resp = await window.csrfFetch(
        "/admin/fonts/" + encodeURIComponent(name) + "/toggle",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ enabled: !currentlyEnabled }),
        }
      );
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      window.showToast(
        (currentlyEnabled ? "已關閉" : "已開啟") + " · " + name,
        true
      );
      fetchAndRenderFonts();
    } catch (err) {
      console.error("[admin-fonts] toggle failed:", err);
      window.showToast("操作失敗", false);
    }
  }

  async function fetchAndRenderFonts() {
    var listEl = document.getElementById("adminFontList");
    if (!listEl) return;

    const loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;

    try {
      // Admin endpoint returns full catalog incl. disabled fonts
      var resp = await window.csrfFetch("/admin/fonts", { method: "GET" });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var fonts = data.fonts || [];
      _allFonts = fonts;
      renderFontsEmptyState(fonts, loggedIn);

      if (fonts.length === 0) {
        listEl.innerHTML =
          `<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-slate-400">${ServerI18n.t("noFontsUploaded")}</span></div>`;
        updateTotals(fonts);
        return;
      }

      listEl.innerHTML = fonts.map((f) => fontRow(f, loggedIn)).join("");
      updateTotals(fonts);
      setupRowPreview();
    } catch (err) {
      console.error("[admin-fonts] fetch failed:", err);
      listEl.innerHTML =
        `<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-red-400">${ServerI18n.t("loadFontsFailed")}</span></div>`;
      renderFontsEmptyState([], loggedIn);
    }
  }

  function updateTotals(fonts) {
    const totalEl = document.getElementById("fontsTotalSize");
    if (totalEl) {
      const enabled = fonts.filter((f) => f.status !== "disabled").length;
      totalEl.textContent = `總計 ${fonts.length} 個字型 · ${enabled} 啟用`;
    }

    const bar = document.getElementById("fontsSubsetBar");
    const orig = document.getElementById("fontsOrigSize");
    const sub = document.getElementById("fontsSubsetSize");
    const enabledFonts = fonts.filter((f) => f.status !== "disabled");
    const count = enabledFonts.length;
    if (bar) bar.style.width = count > 0 ? "38%" : "0%";
    if (orig) orig.textContent = `ORIG · ${count} 字型`;
    if (sub) sub.textContent = count > 0 ? `SUBSET · ~38%` : "SUBSET · —";
  }

  function setupRowPreview() {
    document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach((row) => {
      row.style.cursor = "pointer";
      row.addEventListener("click", (e) => {
        if (e.target.closest(".admin-font-delete-btn")) return;
        if (e.target.closest(".admin-font-default-btn")) return;
        if (e.target.closest(".admin-font-toggle-btn")) return;
        const name = row.dataset.font;
        const previewFamily = document.getElementById("fontsPreviewFamily");
        const headline = document.getElementById("fontsPreviewHeadline");
        const latin = document.getElementById("fontsPreviewLatin");
        const cjk = document.getElementById("fontsPreviewCJK");
        if (previewFamily) previewFamily.textContent = name;
        const fam = `"${name}", "Noto Sans TC", sans-serif`;
        if (headline) headline.style.fontFamily = fam;
        if (latin) latin.style.fontFamily = fam;
        if (cjk) cjk.style.fontFamily = fam;

        // Highlight selected row
        document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach((r) =>
          r.classList.remove("is-selected")
        );
        row.classList.add("is-selected");
      });
    });
  }

  // Magic-byte check for .ttf / .otf / .woff2
  async function detectFontMagic(file) {
    try {
      const buf = await file.slice(0, 4).arrayBuffer();
      const b = new Uint8Array(buf);
      if (b[0] === 0x00 && b[1] === 0x01 && b[2] === 0x00 && b[3] === 0x00) return "TTF";
      if (b[0] === 0x4f && b[1] === 0x54 && b[2] === 0x54 && b[3] === 0x4f) return "OTF";
      if (b[0] === 0x77 && b[1] === 0x4f && b[2] === 0x46 && b[3] === 0x32) return "WOFF2";
      if (b[0] === 0x74 && b[1] === 0x72 && b[2] === 0x75 && b[3] === 0x65) return "TTF";
      if (b[0] === 0x74 && b[1] === 0x74 && b[2] === 0x63 && b[3] === 0x66) return "TTC";
      return null;
    } catch (_) {
      return null;
    }
  }

  function setDropStatus(msg, kind) {
    const el = document.getElementById("adminFontDropStatus");
    if (!el) return;
    if (!msg) {
      el.textContent = "";
      el.hidden = true;
      el.classList.remove("is-good", "is-bad");
      return;
    }
    el.hidden = false;
    el.textContent = msg;
    el.classList.toggle("is-good", kind === "good");
    el.classList.toggle("is-bad", kind === "bad");
  }

  function setUploadError(message) {
    const panel = document.getElementById("adminFontUploadError");
    if (!panel) return;
    if (!message) {
      panel.hidden = true;
      panel.innerHTML = "";
      return;
    }
    panel.hidden = false;
    panel.innerHTML = `
      <div class="admin-error-panel" data-error-kind="font-upload">
        <div class="admin-error-panel-title">字型上傳失敗</div>
        <div class="admin-error-panel-desc">${escapeHtml(message)}</div>
        <button type="button" class="admin-error-panel-cta" data-font-error-retry>重新選擇檔案</button>
      </div>
    `;
    const retryBtn = panel.querySelector("[data-font-error-retry]");
    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        const fi = document.getElementById("adminFontFileInput");
        if (fi) fi.click();
      });
    }
  }

  async function uploadFile(file) {
    if (!file) return;
    setUploadError("");
    const name = file.name.toLowerCase();
    if (!/\.(ttf|otf|woff2)$/.test(name)) {
      window.showToast(ServerI18n.t("invalidFileType"), false);
      setDropStatus("副檔名不支援 — 僅限 .TTF / .OTF / .WOFF2", "bad");
      setUploadError("副檔名不支援，僅限 .TTF / .OTF / .WOFF2。");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      window.showToast("檔案超過 5 MB", false);
      setDropStatus("檔案超過 5 MB", "bad");
      setUploadError("檔案大小超過 5 MB，請壓縮或改用較小字型檔。");
      return;
    }
    const magic = await detectFontMagic(file);
    if (!magic) {
      window.showToast("檔案不是合法字型", false);
      setDropStatus("magic bytes 無效 — 檔案不是合法字型", "bad");
      setUploadError("magic bytes 驗證失敗，檔案內容不是有效字型。");
      return;
    }
    setDropStatus(`驗證通過 · ${magic} · ${(file.size / 1024).toFixed(1)} KB · 上傳中…`, "good");
    try {
      var fd = new FormData();
      fd.append("fontfile", file);
      var resp = await window.csrfFetch("/admin/upload_font", { method: "POST", body: fd });
      var data = await resp.json();
      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("fontUploadFallback"));
        setDropStatus(`已上傳 · ${file.name}`, "good");
        setUploadError("");
        await fetchAndRenderFonts();
      } else {
        window.showToast(data.error || ServerI18n.t("uploadFailed"), false);
        setDropStatus(data.error || "上傳失敗", "bad");
        setUploadError(data.error || "上傳失敗，請稍後再試。");
      }
    } catch (err) {
      console.error("[admin-fonts] upload error:", err);
      window.showToast(ServerI18n.t("uploadNetworkError"), false);
      setDropStatus("網路錯誤", "bad");
      setUploadError("網路連線中斷，請檢查後重試。");
    }
  }

  async function handleUpload() {
    var fileInput = document.getElementById("adminFontFileInput");
    if (!fileInput) return;
    var file = fileInput.files && fileInput.files[0];
    if (!file) { window.showToast(ServerI18n.t("selectTTFFile"), false); return; }
    await uploadFile(file);
    fileInput.value = "";
  }

  function bindDropZone() {
    const drop = document.getElementById("adminFontDrop");
    const fileInput = document.getElementById("adminFontFileInput");
    if (!drop || !fileInput) return;
    drop.addEventListener("click", (e) => { if (e.target !== fileInput) fileInput.click(); });
    drop.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInput.click(); }
    });
    ["dragenter", "dragover"].forEach((ev) => {
      drop.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); drop.classList.add("is-drag"); });
    });
    ["dragleave", "drop"].forEach((ev) => {
      drop.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); drop.classList.remove("is-drag"); });
    });
    drop.addEventListener("drop", async (e) => {
      const files = e.dataTransfer && e.dataTransfer.files;
      if (files && files[0]) await uploadFile(files[0]);
    });
  }

  async function handleDelete(name) {
    if (!confirm(ServerI18n.t("deleteFontConfirm").replace("{name}", name))) return;
    try {
      var resp = await window.csrfFetch("/admin/fonts/" + encodeURIComponent(name), { method: "DELETE" });
      var data = await resp.json();
      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("fontDeleteFallback"));
        await fetchAndRenderFonts();
      } else {
        window.showToast(data.error || ServerI18n.t("deleteFailed"), false);
      }
    } catch (err) {
      console.error("[admin-fonts] delete error:", err);
      window.showToast(ServerI18n.t("deleteNetworkError"), false);
    }
  }

  function init() {
    var settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML("beforeend", buildSection());

    var fileInput = document.getElementById("adminFontFileInput");
    if (fileInput) fileInput.addEventListener("change", handleUpload);

    bindDropZone();

    var listEl = document.getElementById("adminFontList");
    if (listEl) {
      listEl.addEventListener("click", function (e) {
        var deleteBtn = e.target.closest(".admin-font-delete-btn");
        if (deleteBtn) { e.stopPropagation(); handleDelete(deleteBtn.dataset.name); return; }
        var defaultBtn = e.target.closest(".admin-font-default-btn");
        if (defaultBtn) { e.stopPropagation(); setAsDefault(defaultBtn.dataset.name); return; }
        var toggleBtn = e.target.closest(".admin-font-toggle-btn");
        if (toggleBtn) {
          e.stopPropagation();
          const isEnabled = toggleBtn.dataset.enabled === "true";
          doToggle(toggleBtn.dataset.name, isEnabled);
        }
      });
    }

    // Read current default font from settings, then render
    fetch("/get_settings", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((s) => {
        if (s && Array.isArray(s.FontFamily)) currentDefaultFont = s.FontFamily[3] || null;
      })
      .catch(() => {})
      .finally(fetchAndRenderFonts);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    var observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById("sec-fonts")) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById("sec-fonts")) {
      init();
    }
  });
})();
