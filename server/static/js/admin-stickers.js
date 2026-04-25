/**
 * Admin Sticker Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n, AdminUtils
 *
 * v2 retrofit (2026-04-25): full multi-pack support — create / rename /
 * toggle / reorder / delete packs from the sidebar; sticker grid filters
 * by selected pack; upload form auto-tags new stickers with the active
 * pack id. Backend pack model lives in server/services/stickers.py.
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;
  var SECTION_ID = "sec-stickers";
  var ACCEPTED_EXT = ["png", "gif", "webp"];
  var ACCEPTED_TYPES = ".gif,.png,.webp";
  var ALL_PACK_KEY = "__all__";

  // Hold last-fetched lists so search can filter client-side.
  var _stickers = [];
  var _packs = [];
  var _activePackId = ALL_PACK_KEY;

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
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
              <span class="admin-v2-monolabel">PACKS</span>
              <button
                id="stickerPackAddBtn"
                type="button"
                class="admin-v2-chip is-on"
                style="margin-left:auto"
                title="新增貼圖包"
              >+ 新增</button>
            </div>
            <div id="stickerPackList" class="admin-stickers-pack-list"></div>
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

  // ─── Render Pack Sidebar ───────────────────────────────────────────

  function _packCount(packId) {
    if (packId === ALL_PACK_KEY) return _stickers.length;
    return _stickers.filter(function (s) { return s.pack_id === packId; }).length;
  }

  function renderPackList() {
    var container = document.getElementById("stickerPackList");
    if (!container) return;
    var html = '<button type="button" class="admin-stickers-pack' +
      (_activePackId === ALL_PACK_KEY ? " is-active" : "") + '" data-pack="' + ALL_PACK_KEY + '">' +
      '<span class="admin-v2-dot is-good"></span>' +
      '<span class="admin-stickers-pack-name">全部貼圖</span>' +
      '<span class="admin-stickers-pack-count">' + _packCount(ALL_PACK_KEY) + '</span>' +
      '</button>';

    _packs.forEach(function (pack) {
      var dotCls = pack.enabled ? "is-good" : "is-mute";
      var rowCls = "admin-stickers-pack" + (pack.id === _activePackId ? " is-active" : "");
      var isDefault = pack.id === "default";
      var actions = isDefault
        ? ""
        : '<div class="admin-stickers-pack-actions" style="display:flex;gap:4px;flex-wrap:wrap;padding-left:14px">' +
            '<button type="button" class="admin-v2-chip" data-pack-action="rename" data-pack-id="' + escapeAttr(pack.id) + '" title="重新命名">✎</button>' +
            '<button type="button" class="admin-v2-chip" data-pack-action="up" data-pack-id="' + escapeAttr(pack.id) + '" title="上移">↑</button>' +
            '<button type="button" class="admin-v2-chip" data-pack-action="down" data-pack-id="' + escapeAttr(pack.id) + '" title="下移">↓</button>' +
            '<button type="button" class="admin-v2-chip" data-pack-action="toggle" data-pack-id="' + escapeAttr(pack.id) + '" title="' + (pack.enabled ? "停用" : "啟用") + '">' + (pack.enabled ? "ON" : "OFF") + '</button>' +
            '<button type="button" class="admin-v2-chip is-bad" data-pack-action="delete" data-pack-id="' + escapeAttr(pack.id) + '" title="刪除貼圖包">×</button>' +
          '</div>';
      html +=
        '<div class="' + rowCls + '" data-pack="' + escapeAttr(pack.id) + '" style="display:flex;flex-direction:column;gap:4px">' +
          '<button type="button" class="admin-stickers-pack-row" data-pack-action="select" data-pack-id="' + escapeAttr(pack.id) + '" style="display:flex;align-items:center;gap:8px;background:transparent;border:none;color:inherit;text-align:left;padding:0;cursor:pointer;width:100%">' +
            '<span class="admin-v2-dot ' + dotCls + '"></span>' +
            '<span class="admin-stickers-pack-name" style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + escapeHtml(pack.name) + '</span>' +
            '<span class="admin-stickers-pack-count">' + _packCount(pack.id) + '</span>' +
          '</button>' +
          actions +
        '</div>';
    });
    container.innerHTML = html;
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

  function renderGrid() {
    var grid = document.getElementById("stickerGrid");
    var count = document.getElementById("stickerCount");
    if (!grid) return;

    var search = document.getElementById("stickerSearchInput");
    var q = (search && search.value || "").trim().toLowerCase();
    var filtered = _stickers.filter(function (s) {
      if (_activePackId !== ALL_PACK_KEY && s.pack_id !== _activePackId) return false;
      if (q && !(s.name || "").toLowerCase().includes(q)) return false;
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML =
        '<div class="admin-stickers-empty">' +
        escapeHtml(ServerI18n.t("noStickersUploaded")) +
        "</div>";
      if (count) count.textContent = "0 項";
      return;
    }
    grid.innerHTML = filtered.map(stickerCard).join("");
    if (count) count.textContent = filtered.length + " 項";
  }

  // ─── Fetch ──────────────────────────────────────────────────────────

  async function fetchAndRender() {
    var grid = document.getElementById("stickerGrid");
    if (!grid) return;
    try {
      var [stickerResp, packResp] = await Promise.all([
        fetch("/stickers", { method: "GET", credentials: "same-origin" }),
        window.csrfFetch("/admin/stickers/packs", { method: "GET" }),
      ]);
      if (!stickerResp.ok) throw new Error("HTTP " + stickerResp.status);
      _stickers = (await stickerResp.json()).stickers || [];
      _packs = packResp.ok ? ((await packResp.json()).packs || []) : [];
      // If active pack disappeared, fall back to ALL.
      if (_activePackId !== ALL_PACK_KEY && !_packs.some(function (p) { return p.id === _activePackId; })) {
        _activePackId = ALL_PACK_KEY;
      }
      renderPackList();
      renderGrid();
    } catch (err) {
      console.error("[admin-stickers] fetch failed:", err);
      grid.innerHTML =
        '<div class="admin-stickers-empty" style="color:#f87171">' +
        escapeHtml(ServerI18n.t("loadStickersFailed")) +
        "</div>";
    }
  }

  // ─── Pack Actions ──────────────────────────────────────────────────

  async function handlePackAction(action, packId) {
    if (action === "select") {
      _activePackId = packId;
      renderPackList();
      renderGrid();
      return;
    }
    if (action === "rename") {
      var current = _packs.find(function (p) { return p.id === packId; });
      var name = prompt("貼圖包名稱", current ? current.name : "");
      if (!name) return;
      try {
        var resp = await window.csrfFetch("/admin/stickers/packs/" + encodeURIComponent(packId) + "/rename", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name }),
        });
        var data = await resp.json();
        if (resp.ok) {
          window.showToast("已重新命名");
          await fetchAndRender();
        } else {
          window.showToast(data.error || "重新命名失敗", false);
        }
      } catch (_) {
        window.showToast("Network error", false);
      }
      return;
    }
    if (action === "toggle") {
      try {
        var r = await window.csrfFetch("/admin/stickers/packs/" + encodeURIComponent(packId) + "/toggle", {
          method: "POST",
        });
        if (r.ok) await fetchAndRender();
      } catch (_) { /* noop */ }
      return;
    }
    if (action === "delete") {
      if (!confirm("確定刪除此貼圖包?所有貼圖都會一起刪除。")) return;
      try {
        var dr = await window.csrfFetch("/admin/stickers/packs/" + encodeURIComponent(packId), {
          method: "DELETE",
        });
        var dd = await dr.json();
        if (dr.ok) {
          window.showToast("貼圖包已刪除");
          if (_activePackId === packId) _activePackId = ALL_PACK_KEY;
          await fetchAndRender();
        } else {
          window.showToast(dd.error || "刪除失敗", false);
        }
      } catch (_) {
        window.showToast("Network error", false);
      }
      return;
    }
    if (action === "up" || action === "down") {
      // Reorder relative to current position via swap.
      var ordered = _packs.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
      var idx = ordered.findIndex(function (p) { return p.id === packId; });
      if (idx < 0) return;
      var swap = action === "up" ? idx - 1 : idx + 1;
      if (swap < 0 || swap >= ordered.length) return;
      var a = ordered[idx];
      var b = ordered[swap];
      try {
        await Promise.all([
          window.csrfFetch("/admin/stickers/packs/" + encodeURIComponent(a.id) + "/reorder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: b.order || 0 }),
          }),
          window.csrfFetch("/admin/stickers/packs/" + encodeURIComponent(b.id) + "/reorder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order: a.order || 0 }),
          }),
        ]);
        await fetchAndRender();
      } catch (_) { /* noop */ }
    }
  }

  async function handleAddPack() {
    var name = prompt("新貼圖包名稱");
    if (!name) return;
    try {
      var r = await window.csrfFetch("/admin/stickers/packs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
      var d = await r.json();
      if (r.ok) {
        window.showToast("貼圖包已建立");
        _activePackId = d.pack && d.pack.id ? d.pack.id : _activePackId;
        await fetchAndRender();
      } else {
        window.showToast(d.error || "建立失敗", false);
      }
    } catch (_) {
      window.showToast("Network error", false);
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
      // Tag with active pack (skip when "all" is selected — backend defaults to default).
      if (_activePackId && _activePackId !== ALL_PACK_KEY) {
        fd.append("pack_id", _activePackId);
      }

      var resp = await window.csrfFetch("/admin/upload_sticker", {
        method: "POST",
        body: fd,
      });
      var data = await resp.json();

      if (resp.ok) {
        window.showToast(data.message || ServerI18n.t("stickerUploadFallback"));
        fileInput.value = "";
        await fetchAndRender();
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
        await fetchAndRender();
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

    var addBtn = document.getElementById("stickerPackAddBtn");
    if (addBtn) addBtn.addEventListener("click", handleAddPack);

    var search = document.getElementById("stickerSearchInput");
    if (search) search.addEventListener("input", renderGrid);

    var packList = document.getElementById("stickerPackList");
    if (packList) {
      packList.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-pack-action]");
        if (!btn) {
          var row = e.target.closest("[data-pack]");
          if (row) {
            handlePackAction("select", row.dataset.pack);
          }
          return;
        }
        var action = btn.dataset.packAction;
        var packId = btn.dataset.packId;
        if (action === "select" && !packId) {
          packId = btn.closest("[data-pack]") && btn.closest("[data-pack]").dataset.pack;
        }
        handlePackAction(action, packId);
      });
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

    fetchAndRender();
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
