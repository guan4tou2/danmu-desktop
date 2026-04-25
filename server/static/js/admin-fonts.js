/**
 * Admin Font Management Section (AdminFontsPage layout)
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;

  function detectFormat(url) {
    if (!url) return "—";
    const u = String(url).toLowerCase();
    if (u.endsWith(".woff2")) return "WOFF2";
    if (u.endsWith(".woff")) return "WOFF";
    if (u.endsWith(".otf")) return "OTF";
    if (u.endsWith(".ttf")) return "TTF";
    return "—";
  }

  function formatStatusPill(status) {
    if (status === "default") {
      return `<span class="hud-pill is-default">\u9810\u8a2d</span>`;
    }
    if (status === "system") {
      return `<span class="hud-pill">SYS</span>`;
    }
    if (status === "uploaded") {
      return `<span class="hud-pill is-lime">ON</span>`;
    }
    return `<span class="hud-pill">—</span>`;
  }

  function foundryOf(font) {
    if (font.type === "default") return "Google / Noto";
    if (font.type === "system") return "System";
    return ServerI18n.t("fontTypeUploaded") || "Uploaded";
  }

  function buildSection() {
    const loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;
    const uploadHiddenInput = loggedIn
      ? `<input type="file" id="adminFontFileInput" accept=".ttf,.otf,.woff2" class="hidden" />`
      : "";

    const uploadSection = loggedIn
      ? `
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">FONTS · UPLOAD · 自動 CDN</div>
          <div class="admin-v2-title">字型庫</div>
          <p class="admin-v2-note">
            自訂字型讓彈幕更有風格 — .TTF/.OTF/.WOFF2,最大 5 MB。
          </p>
        </div>
        <div class="admin-v2-card admin-fonts-upload-card">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 上傳字型</div>
          <div
            id="adminFontDrop"
            class="admin-fonts-drop"
            role="button"
            tabindex="0"
            aria-label="${escapeHtml(ServerI18n.t("uploadFont"))}"
          >
            <div class="admin-fonts-drop-icon">⬆</div>
            <div class="admin-fonts-drop-title">拖曳或點選檔案</div>
            <div class="admin-fonts-drop-hint">
              .TTF / .OTF / .WOFF2 · 最大 5 MB · 前端會驗證 magic bytes
            </div>
            <div id="adminFontDropStatus" class="admin-fonts-drop-status" hidden></div>
            ${uploadHiddenInput}
          </div>
        </div>`
      : "";

    return `
      <div id="sec-fonts" class="hud-page-stack lg:col-span-2">
        ${uploadSection}
        <div class="hud-page-grid-2-wide">
          <div class="hud-table" id="fontsTable">
            <div class="hud-table-head" style="grid-template-columns: 2fr 1.2fr 1fr 90px 90px 80px;">
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
            <div class="hud-table-foot" style="padding:14px 16px;display:flex;align-items:center;gap:10px;border-top:1px solid var(--hud-line-strong)">
              ${loggedIn ? `<label for="adminFontFileInput" class="hud-toolbar-action" style="cursor:pointer">+ ${ServerI18n.t("uploadFont")} \u00b7 WOFF2 / OTF / TTF</label>` : ""}
              <span id="fontsTotalSize" style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.12em">\u7e3d\u8a08 \u2014</span>
            </div>
          </div>

          <div class="hud-page-stack" style="gap:16px">
            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">PREVIEW \u00b7 <span id="fontsPreviewFamily">Noto Sans TC</span></span>
              </div>
              <div style="padding:16px;display:flex;flex-direction:column;gap:8px">
                <div id="fontsPreviewHeadline" style="font-size:32px;font-weight:700;line-height:1.2;color:var(--color-text-strong)">\u5f48\u5e55\u5373\u6642\u4e92\u52d5</div>
                <div id="fontsPreviewLatin" style="font-size:18px;color:var(--color-text-muted)">The quick brown \u72d0 jumps over \u72f8</div>
                <div style="padding:10px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px;font-size:13px;color:var(--color-text-strong)">
                  <div id="fontsPreviewCJK">\u6c38 \u548c \u5b89 \u5eb7 \u7e41 \u9ad4 \u4e2d \u6587 \u6e2c \u8a66</div>
                  <div style="margin-top:6px;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">
                    U+6C38 U+548C U+5B89 U+5EB7
                  </div>
                </div>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">SUBSETTING \u00b7 \u5b50\u96c6\u5316</span>
              </div>
              <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
                <div style="font-size:13px;color:var(--color-text-strong)">\u81ea\u52d5\u7522\u751f\u5b50\u96c6\uff0c\u53ea\u8f09\u5165\u5be6\u969b\u7528\u5230\u7684\u5b57</div>
                <div style="height:8px;border-radius:4px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);overflow:hidden">
                  <div id="fontsSubsetBar" style="width:0%;height:100%;background:var(--color-primary);transition:width 0.4s ease"></div>
                </div>
                <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.05em">
                  <span id="fontsOrigSize">ORIG \u00b7 \u2014</span>
                  <span id="fontsSubsetSize" style="color:var(--color-primary)">SUBSET \u00b7 \u2014</span>
                </div>
              </div>
            </div>

            <div class="hud-inspector" style="min-height:auto">
              <div class="hud-inspector-head">
                <span class="admin-v3-card-kicker" style="margin:0">CDN DELIVERY \u00b7 \u4ea4\u4ed8\u72c0\u614b</span>
              </div>
              <div style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
                <div class="hud-kv"><span class="hud-kv-k">HIT RATE</span><span class="hud-kv-v" style="color:#86efac" id="fontsCdnHit">\u2014</span></div>
                <div class="hud-kv"><span class="hud-kv-k">P95 TTFB</span><span class="hud-kv-v" style="color:var(--color-primary)" id="fontsCdnTtfb">\u2014</span></div>
                <div class="hud-kv"><span class="hud-kv-k">REQ/24H</span><span class="hud-kv-v" id="fontsCdnReq">\u2014</span></div>
                <div class="hud-kv"><span class="hud-kv-k">EDGE</span><span class="hud-kv-v" id="fontsCdnEdge">LOCAL</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Currently-active default font name (read from /get_settings on load)
  var currentDefaultFont = null;

  function fontRow(font) {
    const fmt = detectFormat(font.url);
    const weight = font.weight || "\u2014";
    const size = font.sizeLabel || "\u2014";
    const foundry = foundryOf(font);
    const sampleStyle = font.type === "system"
      ? `font-family: "${escapeHtml(font.name)}", sans-serif;`
      : (font.url ? `font-family: "${escapeHtml(font.name)}", sans-serif;` : "");
    const isDefault = currentDefaultFont && font.name === currentDefaultFont;
    const actionBtns = [];
    if (!isDefault) {
      actionBtns.push(
        '<button class="admin-font-default-btn hud-effect-chip" data-name="' + escapeHtml(font.name) + '" style="margin-top:4px">' +
        (ServerI18n.t("setAsDefault") !== "setAsDefault" ? escapeHtml(ServerI18n.t("setAsDefault")) : "\u8a2d\u70ba\u9810\u8a2d") +
        '</button>'
      );
    }
    if (font.type === "uploaded") {
      actionBtns.push(
        '<button class="admin-font-delete-btn hud-effect-chip" data-name="' + escapeHtml(font.name) + '" style="margin-top:4px">' +
        escapeHtml(ServerI18n.t("deleteBtn")) +
        '</button>'
      );
    }
    // Override the type-derived pill with a real-time "\u9810\u8a2d" badge for the
    // currently active default font.
    const statusPill = isDefault
      ? `<span class="hud-pill is-default">\u9810\u8a2d</span>`
      : formatStatusPill(font.type);

    return (
      '<div class="hud-table-row" style="grid-template-columns: 2fr 1.2fr 1fr 90px 90px 80px;" data-font="' + escapeHtml(font.name) + '">' +
        '<div class="min-w-0">' +
          '<div style="font-size:15px;color:var(--color-text-strong);' + sampleStyle + '" class="truncate">' + escapeHtml(font.name) + '</div>' +
          '<div style="font-size:11px;color:var(--color-text-muted);margin-top:2px;font-family:var(--font-mono)">\u554a \u6c38 \u306e A a 123</div>' +
          (actionBtns.length ? '<div style="display:flex;gap:6px;flex-wrap:wrap">' + actionBtns.join("") + '</div>' : "") +
        '</div>' +
        '<span style="font-size:12px;color:var(--color-text-strong)">' + escapeHtml(foundry) + '</span>' +
        '<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">' + escapeHtml(weight) + '</span>' +
        '<span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">' + escapeHtml(size) + '</span>' +
        '<span class="hud-pill" style="text-transform:uppercase;justify-self:start">' + escapeHtml(fmt) + '</span>' +
        '<div style="text-align:right">' + statusPill + '</div>' +
      '</div>'
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
          : "\u5df2\u8a2d\u70ba\u9810\u8a2d\u5b57\u578b") + " \u00b7 " + name,
        true
      );
      fetchAndRenderFonts();
    } catch (err) {
      console.error("[admin-fonts] set default failed:", err);
      window.showToast("\u8a2d\u5b9a\u9810\u8a2d\u5931\u6557", false);
    }
  }

  async function fetchAndRenderFonts() {
    var listEl = document.getElementById("adminFontList");
    if (!listEl) return;

    try {
      // Fetch public list for full library view (default + system + uploaded)
      var resp = await fetch("/fonts", { credentials: "same-origin" });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var fonts = data.fonts || [];

      if (fonts.length === 0) {
        listEl.innerHTML =
          '<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-slate-400">' +
          ServerI18n.t("noFontsUploaded") +
          '</span></div>';
        updateTotals(fonts);
        return;
      }

      listEl.innerHTML = fonts.map(fontRow).join("");
      updateTotals(fonts);
      setupRowPreview();
    } catch (err) {
      console.error("[admin-fonts] fetch failed:", err);
      listEl.innerHTML =
        '<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-red-400">' +
        ServerI18n.t("loadFontsFailed") +
        '</span></div>';
    }
  }

  function updateTotals(fonts) {
    const totalEl = document.getElementById("fontsTotalSize");
    if (totalEl) {
      totalEl.textContent = `\u7e3d\u8a08 ${fonts.length} \u500b\u5b57\u578b`;
    }
    // Subsetting bar — show a small illustrative ratio (not real data)
    const bar = document.getElementById("fontsSubsetBar");
    if (bar) bar.style.width = "38%";
    const orig = document.getElementById("fontsOrigSize");
    const sub = document.getElementById("fontsSubsetSize");
    if (orig) orig.textContent = `ORIG \u00b7 ${fonts.length} \u5b57\u578b`;
    if (sub) sub.textContent = `SUBSET \u00b7 ~38%`;
  }

  function setupRowPreview() {
    document.querySelectorAll("#adminFontList .hud-table-row[data-font]").forEach((row) => {
      row.addEventListener("click", (e) => {
        if (e.target.closest(".admin-font-delete-btn")) return;
        if (e.target.closest(".admin-font-default-btn")) return;
        const name = row.dataset.font;
        const previewFamily = document.getElementById("fontsPreviewFamily");
        const headline = document.getElementById("fontsPreviewHeadline");
        const latin = document.getElementById("fontsPreviewLatin");
        const cjk = document.getElementById("fontsPreviewCJK");
        if (previewFamily) previewFamily.textContent = name;
        const fam = `"${name}", sans-serif`;
        if (headline) headline.style.fontFamily = fam;
        if (latin) latin.style.fontFamily = fam;
        if (cjk) cjk.style.fontFamily = fam;
      });
    });
  }

  // Magic-byte check for .ttf / .otf / .woff2 (first 4 bytes).
  async function detectFontMagic(file) {
    try {
      const buf = await file.slice(0, 4).arrayBuffer();
      const b = new Uint8Array(buf);
      // TTF: 00 01 00 00  |  OTF: "OTTO" (4F 54 54 4F)  |  WOFF2: "wOF2" (77 4F 46 32)
      // Some macOS TTFs use "true" (0x74 0x72 0x75 0x65); Windows TTCs use "ttcf".
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

  async function uploadFile(file) {
    if (!file) return;

    const name = file.name.toLowerCase();
    const extOk = /\.(ttf|otf|woff2)$/.test(name);
    if (!extOk) {
      window.showToast(ServerI18n.t("invalidFileType"), false);
      setDropStatus("副檔名不支援 — 僅限 .TTF / .OTF / .WOFF2", "bad");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      window.showToast("檔案超過 5 MB", false);
      setDropStatus("檔案超過 5 MB", "bad");
      return;
    }

    const magic = await detectFontMagic(file);
    if (!magic) {
      window.showToast("檔案不是合法字型", false);
      setDropStatus("magic bytes 無效 — 檔案不是合法字型", "bad");
      return;
    }

    setDropStatus(`驗證通過 · ${magic} · ${(file.size / 1024).toFixed(1)} KB · 上傳中…`, "good");

    try {
      var fd = new FormData();
      fd.append("fontfile", file);

      var resp = await window.csrfFetch("/admin/upload_font", {
        method: "POST",
        body: fd,
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("fontUploadFallback"));
        setDropStatus(`已上傳 · ${file.name}`, "good");
        await fetchAndRenderFonts();
      } else {
        window.showToast(data.error || ServerI18n.t("uploadFailed"), false);
        setDropStatus(data.error || "上傳失敗", "bad");
      }
    } catch (err) {
      console.error("[admin-fonts] upload error:", err);
      window.showToast(ServerI18n.t("uploadNetworkError"), false);
      setDropStatus("網路錯誤", "bad");
    }
  }

  async function handleUpload() {
    var fileInput = document.getElementById("adminFontFileInput");
    if (!fileInput) return;
    var file = fileInput.files && fileInput.files[0];
    if (!file) {
      window.showToast(ServerI18n.t("selectTTFFile"), false);
      return;
    }
    await uploadFile(file);
    fileInput.value = "";
  }

  function bindDropZone() {
    const drop = document.getElementById("adminFontDrop");
    const fileInput = document.getElementById("adminFontFileInput");
    if (!drop || !fileInput) return;

    drop.addEventListener("click", (e) => {
      if (e.target !== fileInput) fileInput.click();
    });
    drop.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fileInput.click();
      }
    });
    ["dragenter", "dragover"].forEach((ev) => {
      drop.addEventListener(ev, (e) => {
        e.preventDefault();
        e.stopPropagation();
        drop.classList.add("is-drag");
      });
    });
    ["dragleave", "drop"].forEach((ev) => {
      drop.addEventListener(ev, (e) => {
        e.preventDefault();
        e.stopPropagation();
        drop.classList.remove("is-drag");
      });
    });
    drop.addEventListener("drop", async (e) => {
      const files = e.dataTransfer && e.dataTransfer.files;
      if (files && files[0]) {
        await uploadFile(files[0]);
      }
    });
  }

  async function handleDelete(name) {
    if (!confirm(ServerI18n.t("deleteFontConfirm").replace("{name}", name))) return;

    try {
      var resp = await window.csrfFetch("/admin/fonts/" + encodeURIComponent(name), {
        method: "DELETE",
      });
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
    if (fileInput) {
      fileInput.addEventListener("change", handleUpload);
    }

    bindDropZone();

    var listEl = document.getElementById("adminFontList");
    if (listEl) {
      listEl.addEventListener("click", function (e) {
        var deleteBtn = e.target.closest(".admin-font-delete-btn");
        if (deleteBtn) {
          e.stopPropagation();
          handleDelete(deleteBtn.dataset.name);
          return;
        }
        var defaultBtn = e.target.closest(".admin-font-default-btn");
        if (defaultBtn) {
          e.stopPropagation();
          setAsDefault(defaultBtn.dataset.name);
        }
      });
    }

    // Read current default from /get_settings then render so the "預設" badge
    // and the per-row "設為預設" button reflect live state.
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
