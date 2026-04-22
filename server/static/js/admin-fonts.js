/**
 * Admin Font Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;

  function isOpen(id) {
    var s = loadDetailsState();
    return s[id] !== undefined ? s[id] : false;
  }

  function buildSection() {
    const loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;
    const uploadRow = loggedIn
      ? `<div class="flex flex-col sm:flex-row gap-3 items-end">
          <div class="flex-1 min-w-0">
            <label for="adminFontFileInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("uploadNewFont")}</label>
            <input
              type="file"
              id="adminFontFileInput"
              accept=".ttf"
              class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500 file:cursor-pointer file:transition-colors bg-slate-800/80 border-2 border-slate-700 rounded-lg"
            />
          </div>
          <button
            id="adminFontUploadBtn"
            class="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            ${ServerI18n.t("uploadFont")}
          </button>
        </div>`
      : "";

    return `
      <details id="sec-fonts" class="group admin-v3-card lg:col-span-2" ${isOpen("sec-fonts") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("fontsTitle")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("fontsDesc")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          ${uploadRow}
          <p class="text-xs text-slate-400">${ServerI18n.t("fontUploadHint")}</p>
          <div id="adminFontList" class="flex flex-col gap-2">
            <span class="text-xs text-slate-400">${ServerI18n.t("loadingFonts")}</span>
          </div>
        </div>
      </details>
    `;
  }

  function fontRow(font) {
    return (
      '<div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-200">' +
        '<div class="min-w-0">' +
          '<div class="text-sm font-semibold text-white truncate" style="font-family:\'' + escapeHtml(font.name) + '\', sans-serif;">' + escapeHtml(font.name) + '</div>' +
          '<div class="text-[10px] text-slate-400 font-mono">' + escapeHtml(ServerI18n.t("fontTypeUploaded")) + '</div>' +
        '</div>' +
        '<button class="admin-font-delete-btn px-2 py-1 text-xs rounded bg-red-900/60 hover:bg-red-700 text-red-300 transition-colors" data-name="' + escapeHtml(font.name) + '">' +
          escapeHtml(ServerI18n.t("deleteBtn")) +
        '</button>' +
      '</div>'
    );
  }

  async function fetchAndRenderFonts() {
    var listEl = document.getElementById("adminFontList");
    if (!listEl) return;

    try {
      var resp = await fetch("/admin/fonts", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var fonts = data.fonts || [];

      if (fonts.length === 0) {
        listEl.innerHTML =
          '<span class="text-xs text-slate-400">' + ServerI18n.t("noFontsUploaded") + '</span>';
        return;
      }

      listEl.innerHTML = fonts.map(fontRow).join("");
    } catch (err) {
      console.error("[admin-fonts] fetch failed:", err);
      listEl.innerHTML =
        '<span class="text-xs text-red-400">' + ServerI18n.t("loadFontsFailed") + '</span>';
    }
  }

  async function handleUpload() {
    var fileInput = document.getElementById("adminFontFileInput");
    var uploadBtn = document.getElementById("adminFontUploadBtn");
    if (!fileInput || !uploadBtn) return;

    var file = fileInput.files && fileInput.files[0];
    if (!file) {
      window.showToast(ServerI18n.t("selectTTFFile"), false);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".ttf")) {
      window.showToast(ServerI18n.t("invalidFileType"), false);
      fileInput.value = "";
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = ServerI18n.t("uploadingStatus");

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
        fileInput.value = "";
        await fetchAndRenderFonts();
      } else {
        window.showToast(data.error || ServerI18n.t("uploadFailed"), false);
      }
    } catch (err) {
      console.error("[admin-fonts] upload error:", err);
      window.showToast(ServerI18n.t("uploadNetworkError"), false);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = ServerI18n.t("uploadFont");
    }
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

    var detailsEl = document.getElementById("sec-fonts");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", function () {
        var current = loadDetailsState();
        current["sec-fonts"] = detailsEl.open;
        saveDetailsState(current);
      });
    }

    var uploadBtn = document.getElementById("adminFontUploadBtn");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", handleUpload);
    }

    var listEl = document.getElementById("adminFontList");
    if (listEl) {
      listEl.addEventListener("click", function (e) {
        var deleteBtn = e.target.closest(".admin-font-delete-btn");
        if (deleteBtn) {
          handleDelete(deleteBtn.dataset.name);
        }
      });
    }

    fetchAndRenderFonts();
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
