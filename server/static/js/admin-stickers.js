/**
 * Admin Sticker Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils
 *
 * v2 retrofit: page-level v2 shell (kicker + title + note) + left pack sidebar
 * + main grid (upload + search + tiles). Replaces legacy <details> accordion.
 * Backend has no multi-pack concept so the sidebar renders a single "ALL" pack
 * representing the whole library (P1-4 per-sticker weight / reorder deferred
 * until a pack model ships).
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;
  var SECTION_ID = "sec-stickers";
  var ACCEPTED_EXT = ["png", "gif", "webp"];
  var ACCEPTED_TYPES = ".gif,.png,.webp";

  // Hold last-fetched list so search can filter client-side.
  var _cache = [];

  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // ─── Build Section HTML ────────────────────────────────────────────

  function buildSection() {
    var loggedIn =
      window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in;
    var uploadBlock = loggedIn
      ? `
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 新增貼圖</div>
          <div class="admin-stickers-upload">
            <label class="admin-stickers-field">
              <span class="admin-v2-monolabel">FILE · GIF/PNG/WEBP · ≤300KB</span>
              <input
                type="file"
                id="stickerFileInput"
                accept="${ACCEPTED_TYPES}"
                class="admin-v2-input"
              />
            </label>
            <button id="stickerUploadBtn" type="button" class="admin-poll-btn is-primary">上傳</button>
          </div>`
      : "";

    return `
      <div id="${SECTION_ID}" class="admin-stickers-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">STICKERS · 貼圖包 · 隨機觸發</div>
          <div class="admin-v2-title">貼圖</div>
          <p class="admin-v2-note">
            比 emoji 大的浮動圖像 — 最大 300KB,按權重隨機。
          </p>
        </div>

        <div class="admin-stickers-layout">
          <!-- Left sidebar: pack list -->
          <aside class="admin-v2-card admin-stickers-sidebar">
            <div class="admin-v2-monolabel" style="margin-bottom:10px">PACKS</div>
            <div class="admin-stickers-pack-list">
              <button type="button" class="admin-stickers-pack is-active" data-pack="all">
                <span class="admin-v2-dot is-good"></span>
                <span class="admin-stickers-pack-name">全部貼圖</span>
                <span class="admin-stickers-pack-count" id="stickerPackCount">—</span>
              </button>
              <div class="admin-stickers-pack-hint">
                多貼圖包支援待後端擴充
              </div>
            </div>
          </aside>

          <!-- Main: upload + grid -->
          <div class="admin-stickers-main">
            ${loggedIn ? `<div class="admin-v2-card">${uploadBlock}</div>` : ""}

            <div class="admin-v2-card">
              <div class="admin-stickers-toolbar">
                <span class="admin-v2-monolabel">SEARCH</span>
                <input
                  id="stickerSearchInput"
                  type="search"
                  placeholder=":name 過濾"
                  class="admin-v2-input"
                  style="flex:1;max-width:280px"
                />
                <span class="admin-v2-monolabel" style="margin-left:auto" id="stickerCount">—</span>
              </div>
            </div>

            <div class="admin-v2-card">
              <div id="stickerGrid" class="admin-stickers-grid">
                <div class="admin-stickers-empty">${escapeHtml(ServerI18n.t("loadingStickers"))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ─── Render Sticker Card ───────────────────────────────────────────

  function stickerCard(sticker) {
    var label = ":" + sticker.name + ":";
    return (
      '<div class="admin-stickers-tile">' +
      '<img src="' + escapeAttr(sticker.url) + '" alt="' + escapeAttr(label) + '" ' +
      'width="56" height="56" loading="lazy" />' +
      '<span class="label" title="' + escapeAttr(label) + '">' + escapeHtml(label) + "</span>" +
      '<div class="actions">' +
      '<button type="button" class="sticker-copy-btn admin-v2-chip" data-label="' +
      escapeAttr(label) + '" title="' + escapeAttr(ServerI18n.t("copyToClipboard")) + '">' +
      escapeHtml(ServerI18n.t("copyBtn")) + "</button>" +
      '<button type="button" class="sticker-delete-btn admin-v2-chip is-bad" data-name="' +
      escapeAttr(sticker.name) + '" title="' + escapeAttr(ServerI18n.t("deleteSticker")) + '">×</button>' +
      "</div>" +
      "</div>"
    );
  }

  function renderGrid(stickers) {
    var grid = document.getElementById("stickerGrid");
    var count = document.getElementById("stickerCount");
    var packCount = document.getElementById("stickerPackCount");
    if (!grid) return;

    if (!stickers || stickers.length === 0) {
      grid.innerHTML =
        '<div class="admin-stickers-empty">' +
        escapeHtml(ServerI18n.t("noStickersUploaded")) +
        "</div>";
      if (count) count.textContent = "0 項";
      if (packCount) packCount.textContent = String(_cache.length);
      return;
    }
    grid.innerHTML = stickers.map(stickerCard).join("");
    if (count) count.textContent = stickers.length + " 項";
    if (packCount) packCount.textContent = String(_cache.length);
  }

  function applySearchFilter() {
    var search = document.getElementById("stickerSearchInput");
    var q = (search && search.value || "").trim().toLowerCase();
    var filtered = q
      ? _cache.filter(function (s) {
          return (s.name || "").toLowerCase().includes(q);
        })
      : _cache;
    renderGrid(filtered);
  }

  // ─── Fetch ──────────────────────────────────────────────────────────

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
      _cache = data.stickers || [];
      applySearchFilter();
    } catch (err) {
      console.error("[admin-stickers] fetch failed:", err);
      grid.innerHTML =
        '<div class="admin-stickers-empty" style="color:#f87171">' +
        escapeHtml(ServerI18n.t("loadStickersFailed")) +
        "</div>";
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
    if (ACCEPTED_EXT.indexOf(ext) === -1) {
      window.showToast(ServerI18n.t("emojiInvalidFileType"), false);
      return;
    }

    uploadBtn.disabled = true;
    var origLabel = uploadBtn.textContent;
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
      uploadBtn.textContent = origLabel;
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

    var uploadBtn = document.getElementById("stickerUploadBtn");
    if (uploadBtn) uploadBtn.addEventListener("click", handleUpload);

    var search = document.getElementById("stickerSearchInput");
    if (search) search.addEventListener("input", applySearchFilter);

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
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
      init();
    }
  });
})();
