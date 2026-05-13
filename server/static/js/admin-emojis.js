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

  function buildSection() {
    return `
      <div id="${SECTION_ID}" class="admin-emojis-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">EMOJIS · :NAME: 插入 · 觀眾可用</div>
          <div class="admin-v2-title">表情符號</div>
          <p class="admin-v2-note">
            觀眾透過 <code>:name:</code> 插入圖片表情 — 最大 80KB 每張。
          </p>
        </div>

        <!-- Upload form + search -->
        <div class="admin-v2-card">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 新增表情</div>
          <div class="admin-emojis-toolbar">
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">NAME · :name:</span>
              <input
                type="text"
                id="emojiNameInput"
                placeholder="my_emoji"
                maxlength="32"
                pattern="[a-zA-Z0-9_]+"
                autocomplete="off"
                class="admin-v2-input"
              />
            </label>
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">FILE · PNG/GIF/WEBP</span>
              <input
                type="file"
                id="emojiFileInput"
                accept="${ACCEPTED_TYPES}"
                class="admin-v2-input"
              />
            </label>
            <button id="emojiUploadBtn" type="button" class="admin-poll-btn is-primary">上傳</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:12px">
            <span class="admin-v2-monolabel">SEARCH</span>
            <input
              id="emojiSearchInput"
              type="search"
              placeholder=":name 過濾"
              class="admin-v2-input"
              style="flex:1;max-width:280px"
            />
            <span class="admin-v2-monolabel" style="margin-left:auto" id="emojiCount">—</span>
          </div>
        </div>

        <!-- Emoji Grid -->
        <div class="admin-v2-card">
          <div id="emojiGrid" class="admin-emojis-grid">
            <div class="admin-emojis-empty">${escapeHtml(ServerI18n.t("loadingEmojis"))}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ─── Render Emoji Card ─────────────────────────────────────────────

  function emojiCard(emoji) {
    const label = ":" + emoji.name + ":";
    return (
      '<div class="admin-emojis-tile">' +
      '<img src="' + escapeAttr(emoji.url) + '" alt="' + escapeAttr(label) + '" width="48" height="48" loading="lazy" />' +
      '<span class="label" title="' + escapeAttr(label) + '">' + escapeHtml(label) + "</span>" +
      '<div class="actions">' +
      '<button type="button" class="emoji-copy-btn admin-v2-chip" data-label="' + escapeAttr(label) + '" title="' + escapeAttr(ServerI18n.t("copyToClipboard")) + '">' +
      escapeHtml(ServerI18n.t("copyBtn")) + "</button>" +
      '<button type="button" class="emoji-delete-btn admin-v2-chip is-bad" data-name="' + escapeAttr(emoji.name) + '" title="' + escapeAttr(ServerI18n.t("deleteEmoji")) + '">' +
      "×</button>" +
      "</div>" +
      "</div>"
    );
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
      grid.innerHTML =
        '<div class="admin-emojis-empty">' +
        escapeHtml(ServerI18n.t("noEmojisUploaded")) +
        "</div>";
      if (count) count.textContent = "0 項";
      return;
    }
    grid.innerHTML = emojis.map(emojiCard).join("");
    if (count) count.textContent = emojis.length + " 項";
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
          '<div class="admin-emojis-empty" style="color:#f87171">' +
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
