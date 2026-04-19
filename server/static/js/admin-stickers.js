/**
 * Admin Sticker Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast
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

  // ─── Build Section HTML ────────────────────────────────────────────

  function buildSection() {
    const loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;
    const uploadRow = loggedIn
      ? `<div class="flex flex-col sm:flex-row gap-3 items-end">
          <div class="flex-1 min-w-0">
            <label for="stickerFileInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("stickerImageLabel")}</label>
            <input
              type="file"
              id="stickerFileInput"
              accept=".gif,.png,.webp"
              class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500 file:cursor-pointer file:transition-colors bg-slate-800/80 border-2 border-slate-700 rounded-lg"
            />
          </div>
          <button
            id="stickerUploadBtn"
            class="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            ${ServerI18n.t("uploadStickerBtn")}
          </button>
        </div>`
      : "";

    return `
      <details id="sec-stickers" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${isOpen("sec-stickers") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("stickersTitle")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("stickersDesc")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          ${uploadRow}
          <p class="text-xs text-slate-500">
            ${ServerI18n.t("stickerUsageHint")}
          </p>
          <div id="stickerGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            <span class="text-xs text-slate-500 col-span-full">${ServerI18n.t("loadingStickers")}</span>
          </div>
        </div>
      </details>
    `;
  }

  // ─── Render Sticker Card ───────────────────────────────────────────

  function stickerCard(sticker) {
    const label = ":" + sticker.name + ":";
    return (
      '<div class="group/card flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-200">' +
        '<img src="' + escapeHtml(sticker.url) + '" alt="' + escapeHtml(label) + '" ' +
          'width="48" height="48" loading="lazy" class="w-12 h-12 object-contain rounded" />' +
        '<span class="text-[10px] text-slate-400 truncate max-w-full" title="' + escapeHtml(label) + '">' + escapeHtml(label) + "</span>" +
        '<div class="flex gap-1">' +
          '<button class="sticker-copy-btn px-1.5 py-0.5 text-[10px] rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors" data-label="' + escapeHtml(label) + '" title="' + escapeHtml(ServerI18n.t("copyToClipboard")) + '">' + escapeHtml(ServerI18n.t("copyBtn")) + '</button>' +
          '<button class="sticker-delete-btn px-1.5 py-0.5 text-[10px] rounded bg-red-900/60 hover:bg-red-700 text-red-300 transition-colors" data-name="' + escapeHtml(sticker.name) + '" title="' + escapeHtml(ServerI18n.t("deleteSticker")) + '">' + escapeHtml(ServerI18n.t("deleteBtn")) + '</button>' +
        "</div>" +
      "</div>"
    );
  }

  // ─── Fetch & Render ────────────────────────────────────────────────

  async function fetchAndRenderStickers() {
    var grid = document.getElementById("stickerGrid");
    if (!grid) return;

    try {
      var resp = await fetch("/stickers", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var stickers = data.stickers || [];

      if (stickers.length === 0) {
        grid.innerHTML =
          '<span class="text-xs text-slate-500 col-span-full">' + ServerI18n.t("noStickersUploaded") + '</span>';
        return;
      }

      grid.innerHTML = stickers.map(stickerCard).join("");
    } catch (err) {
      console.error("[admin-stickers] fetch failed:", err);
      grid.innerHTML =
        '<span class="text-xs text-red-400 col-span-full">' + ServerI18n.t("loadStickersFailed") + '</span>';
    }
  }

  // ─── Upload ────────────────────────────────────────────────────────

  async function handleUpload() {
    var fileInput = document.getElementById("stickerFileInput");
    var uploadBtn = document.getElementById("stickerUploadBtn");
    if (!fileInput || !uploadBtn) return;

    var file = fileInput.files && fileInput.files[0];
    if (!file) {
      window.showToast(ServerI18n.t("stickerFileRequired"), false);
      return;
    }

    var ext = file.name.split(".").pop().toLowerCase();
    if (!["png", "gif", "webp"].includes(ext)) {
      window.showToast(ServerI18n.t("emojiInvalidFileType"), false);
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = ServerI18n.t("uploadingStatus");

    try {
      var fd = new FormData();
      fd.append("file", file);

      var resp = await window.csrfFetch("/admin/upload_sticker", {
        method: "POST",
        body: fd,
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("stickerUploadFallback"));
        fileInput.value = "";
        await fetchAndRenderStickers();
      } else {
        window.showToast(data.error || ServerI18n.t("uploadFailed"), false);
      }
    } catch (err) {
      console.error("[admin-stickers] upload error:", err);
      window.showToast(ServerI18n.t("uploadNetworkError"), false);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = ServerI18n.t("uploadStickerBtn");
    }
  }

  // ─── Delete ────────────────────────────────────────────────────────

  async function handleDelete(name) {
    if (!confirm(ServerI18n.t("deleteStickerConfirm").replace("{name}", name))) return;

    try {
      var resp = await window.csrfFetch("/admin/stickers/" + encodeURIComponent(name), {
        method: "DELETE",
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("stickerDeleteFallback"));
        await fetchAndRenderStickers();
      } else {
        window.showToast(data.error || ServerI18n.t("deleteFailed"), false);
      }
    } catch (err) {
      console.error("[admin-stickers] delete error:", err);
      window.showToast(ServerI18n.t("deleteNetworkError"), false);
    }
  }

  // ─── Copy to Clipboard ─────────────────────────────────────────────

  async function handleCopy(label) {
    try {
      await navigator.clipboard.writeText(label);
      window.showToast(ServerI18n.t("copiedLabel").replace("{label}", label));
    } catch (_) {
      var ta = document.createElement("textarea");
      ta.value = label;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      window.showToast(ServerI18n.t("copiedLabel").replace("{label}", label));
    }
  }

  // ─── Init ──────────────────────────────────────────────────────────

  function init() {
    var settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML("beforeend", buildSection());

    var detailsEl = document.getElementById("sec-stickers");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", function () {
        var current = loadDetailsState();
        current["sec-stickers"] = detailsEl.open;
        saveDetailsState(current);
      });
    }

    var uploadBtn = document.getElementById("stickerUploadBtn");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", handleUpload);
    }

    var grid = document.getElementById("stickerGrid");
    if (grid) {
      grid.addEventListener("click", function (e) {
        var copyBtn = e.target.closest(".sticker-copy-btn");
        if (copyBtn) {
          handleCopy(copyBtn.dataset.label);
          return;
        }
        var deleteBtn = e.target.closest(".sticker-delete-btn");
        if (deleteBtn) {
          handleDelete(deleteBtn.dataset.name);
        }
      });
    }

    fetchAndRenderStickers();
  }

  // admin.js rebuilds the entire DOM via innerHTML on every renderControlPanel()
  // call, so we keep observing and re-inject when our section is wiped out.
  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    var observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById("sec-stickers")) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    // Also check immediately
    if (document.getElementById("settings-grid") && !document.getElementById("sec-stickers")) {
      init();
    }
  });
})();
