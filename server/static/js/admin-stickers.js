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
            <label for="stickerFileInput" class="text-sm font-medium text-slate-300">Image (GIF, PNG, WebP — max 2 MB)</label>
            <input
              type="file"
              id="stickerFileInput"
              accept=".gif,.png,.webp"
              class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-500 file:cursor-pointer file:transition-colors bg-slate-800/80 border-2 border-slate-700 rounded-lg"
            />
          </div>
          <button
            id="stickerUploadBtn"
            class="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload Sticker
          </button>
        </div>`
      : "";

    return `
      <details id="sec-stickers" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${isOpen("sec-stickers") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">🖼 Stickers</h3>
            <p class="text-sm text-slate-300">Upload sticker images that viewers trigger with <code class="bg-slate-800 px-1 rounded text-violet-300">:sticker_name:</code></p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          ${uploadRow}
          <p class="text-xs text-slate-500">
            Viewers send <code class="bg-slate-800 px-1.5 py-0.5 rounded text-violet-300">:sticker_name:</code> as the full message to display a sticker. Supported formats: GIF, PNG, WebP. Max 2 MB per file.
          </p>
          <div id="stickerGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            <span class="text-xs text-slate-500 col-span-full">Loading stickers...</span>
          </div>
        </div>
      </details>
    `;
  }

  // ─── Render Sticker Card ───────────────────────────────────────────

  function stickerCard(sticker) {
    const label = ":" + sticker.name + ":";
    return (
      '<div class="group/card flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-200">' +
        '<img src="' + escapeHtml(sticker.url) + '" alt="' + escapeHtml(label) + '" ' +
          'width="48" height="48" loading="lazy" class="w-12 h-12 object-contain rounded" />' +
        '<span class="text-[10px] text-slate-400 truncate max-w-full" title="' + escapeHtml(label) + '">' + escapeHtml(label) + "</span>" +
        '<div class="flex gap-1">' +
          '<button class="sticker-copy-btn px-1.5 py-0.5 text-[10px] rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors" data-label="' + escapeHtml(label) + '" title="Copy to clipboard">Copy</button>' +
          '<button class="sticker-delete-btn px-1.5 py-0.5 text-[10px] rounded bg-red-900/60 hover:bg-red-700 text-red-300 transition-colors" data-name="' + escapeHtml(sticker.name) + '" title="Delete sticker">Delete</button>' +
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
          '<span class="text-xs text-slate-500 col-span-full">No stickers uploaded yet</span>';
        return;
      }

      grid.innerHTML = stickers.map(stickerCard).join("");
    } catch (err) {
      console.error("[admin-stickers] fetch failed:", err);
      grid.innerHTML =
        '<span class="text-xs text-red-400 col-span-full">Failed to load stickers</span>';
    }
  }

  // ─── Upload ────────────────────────────────────────────────────────

  async function handleUpload() {
    var fileInput = document.getElementById("stickerFileInput");
    var uploadBtn = document.getElementById("stickerUploadBtn");
    if (!fileInput || !uploadBtn) return;

    var file = fileInput.files && fileInput.files[0];
    if (!file) {
      window.showToast("Please select a file first", false);
      return;
    }

    var ext = file.name.split(".").pop().toLowerCase();
    if (!["png", "gif", "webp"].includes(ext)) {
      window.showToast("Only PNG, GIF, and WebP files are allowed", false);
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = "Uploading...";

    try {
      var fd = new FormData();
      fd.append("file", file);

      var resp = await window.csrfFetch("/admin/upload_sticker", {
        method: "POST",
        body: fd,
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || "Sticker uploaded");
        fileInput.value = "";
        await fetchAndRenderStickers();
      } else {
        window.showToast(data.error || "Upload failed", false);
      }
    } catch (err) {
      console.error("[admin-stickers] upload error:", err);
      window.showToast("Upload failed: network error", false);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = "Upload Sticker";
    }
  }

  // ─── Delete ────────────────────────────────────────────────────────

  async function handleDelete(name) {
    if (!confirm("Delete sticker :" + name + ":?")) return;

    try {
      var resp = await window.csrfFetch("/admin/stickers/" + encodeURIComponent(name), {
        method: "DELETE",
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || "Sticker deleted");
        await fetchAndRenderStickers();
      } else {
        window.showToast(data.error || "Delete failed", false);
      }
    } catch (err) {
      console.error("[admin-stickers] delete error:", err);
      window.showToast("Delete failed: network error", false);
    }
  }

  // ─── Copy to Clipboard ─────────────────────────────────────────────

  async function handleCopy(label) {
    try {
      await navigator.clipboard.writeText(label);
      window.showToast("Copied " + label);
    } catch (_) {
      var ta = document.createElement("textarea");
      ta.value = label;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      window.showToast("Copied " + label);
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
