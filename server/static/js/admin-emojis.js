/**
 * Admin Emoji Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n
 *
 * v2 retrofit: page-level v2 shell (kicker + title + note) + emoji tile grid +
 * inline search/upload. Replaces legacy <details> accordion.
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;

  const NAME_RE = /^[a-zA-Z0-9_]{1,32}$/;
  const ACCEPTED_TYPES = ".png,.gif,.webp";
  const SECTION_ID = "sec-emojis";

  // Hold last-fetched list so search can filter client-side.
  let _cache = [];

  // ─── Build Section HTML ────────────────────────────────────────────

  // 2026-05-17 design v4: dashed-border upload zone at top, quota chip,
  // 8-col grid, audience preview row at bottom. The classic name+file
  // upload form is retained inside the dashed zone so the keyboard flow
  // still works — drag-drop is a progressive enhancement (next iteration).
  function buildSection() {
    return `
      <div id="${SECTION_ID}" class="admin-emojis-page admin-em-v4 hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">ASSETS · EMOJIS · CUSTOM :NAME: SYNTAX</div>
          <div class="admin-ui-page-title">Emoji 庫</div>
        </div>

        <!-- Upload zone (dashed dropzone) -->
        <div class="admin-em-v4__upzone" data-em-dropzone>
          <div class="admin-em-v4__upicon">↑</div>
          <div class="admin-em-v4__upcopy">
            <div class="admin-em-v4__uptitle">拖入 PNG / GIF / WEBP 上傳新 Emoji · 或填表單</div>
            <div class="admin-em-v4__upsub">64×64 推薦 · 最大 128KB · 支援動圖 GIF</div>
            <div class="admin-em-v4__upform">
              <input id="emojiNameInput" type="text" placeholder=":name:" maxlength="32" pattern="[a-zA-Z0-9_]+" autocomplete="off" />
              <input id="emojiFileInput" type="file" accept="${ACCEPTED_TYPES}" />
              <button id="emojiUploadBtn" type="button">+ 上傳</button>
            </div>
          </div>
        </div>

        <!-- Quota + search toolbar -->
        <div class="admin-em-v4__toolbar">
          <span class="admin-em-v4__quota-label" data-em-quota-label>已用 0 / 100</span>
          <div class="admin-em-v4__quota-bar"><div class="admin-em-v4__quota-fill" data-em-quota-fill style="width:0%"></div></div>
          <span class="admin-em-v4__quota-size" data-em-quota-size>總計 0 KB</span>
          <span class="admin-em-v4__spacer"></span>
          <input id="emojiSearchInput" type="search" placeholder=":name 過濾" class="admin-em-v4__search" />
          <span class="admin-em-v4__count" id="emojiCount">0</span>
        </div>

        <!-- 8-col emoji grid (initial state: skeleton, swapped by renderGrid) -->
        <div id="emojiGrid" class="admin-em-v4__grid"></div>

        <!-- Audience preview row -->
        <div class="admin-em-v4__preview" data-em-preview>
          <div class="admin-em-v4__preview-label">觀眾預覽 · AUDIENCE PREVIEW</div>
          <div class="admin-em-v4__preview-body" data-em-preview-body>
            <span class="admin-em-v4__preview-empty">上傳第一個 emoji 後此處會出現預覽。</span>
          </div>
        </div>
      </div>
    `;
  }

  // ─── Render Emoji Card ─────────────────────────────────────────────

  // Design v4 tile: image + :name: + dimensions/size + green dot (always on
  // for now — backend has no per-emoji enable toggle yet). Copy/delete on
  // hover via overlay actions.
  function emojiCard(emoji) {
    const label = ":" + emoji.name + ":";
    const sizeKB = emoji.size_bytes
      ? Math.round(emoji.size_bytes / 1024) + "KB"
      : "—";
    const dims = (emoji.width && emoji.height)
      ? emoji.width + "×" + emoji.height
      : "";
    const meta = [dims, sizeKB].filter(Boolean).join(" · ");
    return (
      '<div class="admin-em-v4__tile" data-em-name="' + escapeAttr(emoji.name) + '">' +
      '<div class="admin-em-v4__tile-thumb">' +
      '<img src="' + escapeAttr(emoji.url) + '" alt="' + escapeAttr(label) + '" loading="lazy" />' +
      '</div>' +
      '<div class="admin-em-v4__tile-name">' + escapeHtml(label) + '</div>' +
      '<div class="admin-em-v4__tile-meta">' + escapeHtml(meta) + '</div>' +
      '<span class="admin-em-v4__tile-dot" aria-label="enabled"></span>' +
      '<div class="admin-em-v4__tile-actions">' +
      '<button type="button" class="emoji-copy-btn" data-label="' + escapeAttr(label) + '" title="' + escapeAttr(ServerI18n.t("copyToClipboard")) + '">複製</button>' +
      '<button type="button" class="emoji-delete-btn" data-name="' + escapeAttr(emoji.name) + '" title="' + escapeAttr(ServerI18n.t("deleteEmoji")) + '">' + window.AdminUtils.closeIcon + '</button>' +
      '</div>' +
      '</div>'
    );
  }

  function _updateQuota(emojis) {
    const label = document.querySelector("[data-em-quota-label]");
    const fill  = document.querySelector("[data-em-quota-fill]");
    const sizeEl = document.querySelector("[data-em-quota-size]");
    if (!label || !fill || !sizeEl) return;
    const n = emojis.length;
    const max = 100;
    label.textContent = `已用 ${n} / ${max}`;
    fill.style.width = Math.min(100, (n / max) * 100) + "%";
    const totalKB = emojis.reduce((s, e) => s + (e.size_bytes || 0), 0) / 1024;
    sizeEl.textContent = `總計 ${totalKB < 1024 ? totalKB.toFixed(0) + " KB" : (totalKB / 1024).toFixed(1) + " MB"}`;
  }

  function _renderPreview(emojis) {
    const body = document.querySelector("[data-em-preview-body]");
    if (!body) return;
    if (!emojis || emojis.length === 0) {
      body.innerHTML = '<span class="admin-em-v4__preview-empty">上傳第一個 emoji 後此處會出現預覽。</span>';
      return;
    }
    const sample = emojis.slice(0, 3);
    const parts = sample.map((e) =>
      `<span class="admin-em-v4__preview-pair"><code>:${escapeHtml(e.name)}:</code> → ` +
      `<img src="${escapeAttr(e.url)}" alt=":${escapeAttr(e.name)}:" /></span>`
    );
    body.innerHTML = `觀眾鍵入 ${parts.join(" · ")}`;
  }

  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // ─── Fetch & Render ────────────────────────────────────────────────

  function renderGrid(emojis) {
    var grid = document.getElementById("emojiGrid");
    var count = document.getElementById("emojiCount");
    if (!grid) return;

    if (!emojis || emojis.length === 0) {
      // 2026-05-18 design v4-r2: show shared empty-state card instead of
      // a single-line `noEmojisUploaded` string. AdminEmpty falls back
      // gracefully if the helper hasn't loaded yet.
      if (window.AdminEmpty) {
        grid.innerHTML = "";
        grid.appendChild(window.AdminEmpty.renderCustom({
          icon: "⊞",
          title: "尚無自訂 Emoji",
          desc: "上傳 PNG / GIF（64×64 推薦），觀眾以 :name: 觸發。",
          actionLabel: "+ 上傳第一個 Emoji",
          action: function () {
            var fileInput = document.getElementById("emojiFileInput");
            if (fileInput) fileInput.click();
          },
        }));
      } else {
        grid.innerHTML = '<div class="admin-emojis-empty">' +
          escapeHtml(ServerI18n.t("noEmojisUploaded")) + "</div>";
      }
      if (count) count.textContent = "0";
    } else {
      grid.innerHTML = emojis.map(emojiCard).join("");
      if (count) count.textContent = String(emojis.length);
    }
    // Quota + preview track the *unfiltered* cache, not the search-filtered list.
    _updateQuota(_cache);
    _renderPreview(_cache);
  }

  // 2026-05-18 design v4-r2: show skeleton during initial fetch.
  function _renderLoadingSkeleton() {
    var grid = document.getElementById("emojiGrid");
    if (!grid) return;
    if (window.AdminSkeletons) {
      grid.innerHTML = "";
      // Render 8 placeholder tiles styled like real ones — wraps in a flex
      // row that matches the 8-col grid layout.
      for (var i = 0; i < 8; i++) {
        var tile = document.createElement("div");
        tile.className = "admin-em-v4__tile admin-em-v4__tile--skel";
        var thumb = document.createElement("div");
        thumb.className = "admin-em-v4__tile-thumb";
        var img = document.createElement("div");
        img.className = "admin-skel";
        img.style.width = "100%"; img.style.height = "100%";
        thumb.appendChild(img);
        tile.appendChild(thumb);
        var name = document.createElement("div");
        name.className = "admin-skel admin-skel-bar";
        name.style.width = "60%"; name.style.height = "8px";
        name.style.margin = "6px auto";
        tile.appendChild(name);
        grid.appendChild(tile);
      }
    } else {
      grid.innerHTML = '<div class="admin-emojis-empty">' +
        escapeHtml(ServerI18n.t("loadingEmojis")) + "</div>";
    }
  }

  async function fetchAndRenderEmojis() {
    try {
      var resp = await fetch("/admin/emojis/list", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      _cache = data.emojis || [];
      applySearchFilter();
    } catch (err) {
      console.error("[admin-emojis] fetch failed:", err);
      var grid = document.getElementById("emojiGrid");
      if (grid) {
        grid.innerHTML =
          '<div class="admin-emojis-empty" style="color:var(--hud-crimson)">' +
          escapeHtml(ServerI18n.t("loadEmojiFailed")) +
          "</div>";
      }
    }
  }

  function applySearchFilter() {
    var search = document.getElementById("emojiSearchInput");
    var q = (search && search.value || "").trim().toLowerCase();
    var filtered = q
      ? _cache.filter(function (e) {
          return (e.name || "").toLowerCase().includes(q);
        })
      : _cache;
    renderGrid(filtered);
  }

  // ─── Upload ────────────────────────────────────────────────────────

  async function handleUpload() {
    var nameInput = document.getElementById("emojiNameInput");
    var fileInput = document.getElementById("emojiFileInput");
    var uploadBtn = document.getElementById("emojiUploadBtn");
    if (!nameInput || !fileInput || !uploadBtn) return;

    var name = nameInput.value.trim();
    var file = fileInput.files && fileInput.files[0];

    if (!name) {
      showToast(ServerI18n.t("emojiNameRequired"), false);
      nameInput.focus();
      return;
    }
    if (!NAME_RE.test(name)) {
      showToast(ServerI18n.t("emojiNameInvalid"), false);
      nameInput.focus();
      return;
    }
    if (!file) {
      showToast(ServerI18n.t("emojiFileRequired"), false);
      return;
    }

    var ext = file.name.split(".").pop().toLowerCase();
    if (!["png", "gif", "webp"].includes(ext)) {
      showToast(ServerI18n.t("emojiInvalidFileType"), false);
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = ServerI18n.t("uploadingStatus");

    try {
      var fd = new FormData();
      fd.append("name", name);
      fd.append("emojifile", file);

      var resp = await csrfFetch("/admin/emojis/upload", {
        method: "POST",
        body: fd,
      });
      var data = await resp.json();

      if (resp.ok) {
        showToast(data.message || ServerI18n.t("emojiUploadFallback"));
        nameInput.value = "";
        fileInput.value = "";
        await fetchAndRenderEmojis();
      } else {
        showToast(data.error || ServerI18n.t("uploadFailed"), false);
      }
    } catch (err) {
      console.error("[admin-emojis] upload error:", err);
      showToast(ServerI18n.t("uploadNetworkError"), false);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = "上傳";
    }
  }

  // ─── Delete ────────────────────────────────────────────────────────

  async function handleDelete(name) {
    if (!confirm(ServerI18n.t("deleteEmojiConfirm").replace("{name}", name))) return;

    try {
      var resp = await csrfFetch("/admin/emojis/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
      var data = await resp.json();

      if (resp.ok) {
        showToast(data.message || ServerI18n.t("emojiDeleteFallback"));
        await fetchAndRenderEmojis();
      } else {
        showToast(data.error || ServerI18n.t("deleteFailed"), false);
      }
    } catch (err) {
      console.error("[admin-emojis] delete error:", err);
      showToast(ServerI18n.t("deleteNetworkError"), false);
    }
  }

  // ─── Copy to Clipboard ────────────────────────────────────────────

  async function handleCopy(label) {
    try {
      await navigator.clipboard.writeText(label);
      showToast(ServerI18n.t("copiedLabel").replace("{label}", label));
    } catch (_) {
      var ta = document.createElement("textarea");
      ta.value = label;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(ServerI18n.t("copiedLabel").replace("{label}", label));
    }
  }

  // ─── Init ──────────────────────────────────────────────────────────

  function init() {
    var settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML("beforeend", buildSection());

    var uploadBtn = document.getElementById("emojiUploadBtn");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", handleUpload);
    }

    var nameInput = document.getElementById("emojiNameInput");
    if (nameInput) {
      nameInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          handleUpload();
        }
      });
    }

    var search = document.getElementById("emojiSearchInput");
    if (search) {
      search.addEventListener("input", applySearchFilter);
    }

    var grid = document.getElementById("emojiGrid");
    if (grid) {
      grid.addEventListener("click", function (e) {
        var copyBtn = e.target.closest(".emoji-copy-btn");
        if (copyBtn) {
          handleCopy(copyBtn.dataset.label);
          return;
        }
        var deleteBtn = e.target.closest(".emoji-delete-btn");
        if (deleteBtn) {
          handleDelete(deleteBtn.dataset.name);
        }
      });
    }

    // 2026-05-17 design v4: dashed dropzone accepts drag-drop. We don't
    // auto-name from filename — user still picks `:name:` to avoid
    // accidentally exposing source path / weird unicode.
    var dropzone = document.querySelector("[data-em-dropzone]");
    var fileInput = document.getElementById("emojiFileInput");
    if (dropzone && fileInput) {
      ["dragenter", "dragover"].forEach(function (ev) {
        dropzone.addEventListener(ev, function (e) {
          e.preventDefault();
          dropzone.classList.add("is-dragover");
        });
      });
      ["dragleave", "drop"].forEach(function (ev) {
        dropzone.addEventListener(ev, function (e) {
          e.preventDefault();
          dropzone.classList.remove("is-dragover");
        });
      });
      dropzone.addEventListener("drop", function (e) {
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) {
          var dt = new DataTransfer();
          dt.items.add(f);
          fileInput.files = dt.files;
          var nameInput = document.getElementById("emojiNameInput");
          if (nameInput && !nameInput.value) {
            var base = f.name.replace(/\.[a-z0-9]+$/i, "").replace(/[^a-zA-Z0-9_]/g, "_");
            nameInput.value = base.slice(0, 32);
            nameInput.focus();
          }
          // 2026-05-18 design v4-r6: 3rd dropzone state — "processing".
          // Add class for the ~400ms window before upload kicks in so
          // CSS shows spinner + solid border + pulse.
          dropzone.classList.add("is-dropping");
          setTimeout(function () {
            dropzone.classList.remove("is-dropping");
          }, 1200);
        }
      });
    }

    _renderLoadingSkeleton();
    fetchAndRenderEmojis();
  }

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
