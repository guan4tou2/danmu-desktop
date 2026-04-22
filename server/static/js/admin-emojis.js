/**
 * Admin Emoji Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n
 */
(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHtml = window.AdminUtils.escapeHtml;

  const NAME_RE = /^[a-zA-Z0-9_]{1,32}$/;
  const ACCEPTED_TYPES = ".png,.gif,.webp";

  function isOpen(id) {
    const s = loadDetailsState();
    return s[id] !== undefined ? s[id] : false;
  }

  // ─── Build Section HTML ────────────────────────────────────────────

  function buildSection() {
    return `
      <details id="sec-emojis" class="group admin-v3-card lg:col-span-2" ${isOpen("sec-emojis") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("emojiStickersTitle")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("emojiStickersDesc")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          <!-- Upload Form -->
          <div class="flex flex-col sm:flex-row gap-3 items-end">
            <div class="flex-1 min-w-0">
              <label for="emojiNameInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("emojiNameLabel")}</label>
              <input
                type="text"
                id="emojiNameInput"
                placeholder="my_emoji"
                maxlength="32"
                pattern="[a-zA-Z0-9_]+"
                autocomplete="off"
                class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300 text-sm"
              />
            </div>
            <div class="flex-1 min-w-0">
              <label for="emojiFileInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("emojiImageLabel")}</label>
              <input
                type="file"
                id="emojiFileInput"
                accept="${ACCEPTED_TYPES}"
                class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-white hover:file:bg-sky-500 file:cursor-pointer file:transition-colors bg-slate-800/80 border-2 border-slate-700 rounded-lg"
              />
            </div>
            <button
              id="emojiUploadBtn"
              class="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              ${ServerI18n.t("uploadBtn")}
            </button>
          </div>

          <!-- Usage hint -->
          <p class="text-xs text-slate-400 select-all">
            ${ServerI18n.t("emojiUsageHint")}
          </p>

          <!-- Emoji Grid -->
          <div id="emojiGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            <span class="text-xs text-slate-400 col-span-full">${ServerI18n.t("loadingEmojis")}</span>
          </div>
        </div>
      </details>
    `;
  }

  // ─── Render Emoji Card ─────────────────────────────────────────────

  function emojiCard(emoji) {
    // emoji: {name, url, filename}
    const label = ":" + emoji.name + ":";
    return (
      '<div class="group/card flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-200">' +
        '<img src="' + escapeAttr(emoji.url) + '" alt="' + escapeAttr(label) + '" ' +
          'width="48" height="48" loading="lazy" class="w-12 h-12 object-contain rounded" />' +
        '<span class="text-[10px] text-slate-400 truncate max-w-full" title="' + escapeAttr(label) + '">' + escapeHtml(label) + "</span>" +
        '<div class="flex gap-1">' +
          '<button class="emoji-copy-btn px-1.5 py-0.5 text-[10px] rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors" data-label="' + escapeAttr(label) + '" title="' + escapeAttr(ServerI18n.t("copyToClipboard")) + '">' + escapeHtml(ServerI18n.t("copyBtn")) + '</button>' +
          '<button class="emoji-delete-btn px-1.5 py-0.5 text-[10px] rounded bg-red-900/60 hover:bg-red-700 text-red-300 transition-colors" data-name="' + escapeAttr(emoji.name) + '" title="' + escapeAttr(ServerI18n.t("deleteEmoji")) + '">' + escapeHtml(ServerI18n.t("deleteBtn")) + '</button>' +
        "</div>" +
      "</div>"
    );
  }

  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // ─── Fetch & Render ────────────────────────────────────────────────

  async function fetchAndRenderEmojis() {
    var grid = document.getElementById("emojiGrid");
    if (!grid) return;

    try {
      var resp = await fetch("/admin/emojis/list", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var data = await resp.json();
      var emojis = data.emojis || [];

      if (emojis.length === 0) {
        grid.innerHTML =
          '<span class="text-xs text-slate-400 col-span-full">' + ServerI18n.t("noEmojisUploaded") + '</span>';
        return;
      }

      grid.innerHTML = emojis.map(emojiCard).join("");
    } catch (err) {
      console.error("[admin-emojis] fetch failed:", err);
      grid.innerHTML =
        '<span class="text-xs text-red-400 col-span-full">' + ServerI18n.t("loadEmojiFailed") + '</span>';
    }
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
      uploadBtn.textContent = ServerI18n.t("uploadBtn");
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
      // Fallback for insecure contexts
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
    if (!settingsGrid) return; // Not logged in / panel not rendered yet

    // Insert the emojis section
    settingsGrid.insertAdjacentHTML("beforeend", buildSection());

    // Persist details open/close state
    var detailsEl = document.getElementById("sec-emojis");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", function () {
        var current = loadDetailsState();
        current["sec-emojis"] = detailsEl.open;
        saveDetailsState(current);
      });
    }

    // Upload button
    var uploadBtn = document.getElementById("emojiUploadBtn");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", handleUpload);
    }

    // Allow Enter key on name input to trigger upload
    var nameInput = document.getElementById("emojiNameInput");
    if (nameInput) {
      nameInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          handleUpload();
        }
      });
    }

    // Delegated click handler for copy/delete buttons in the grid
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

    // Initial fetch
    fetchAndRenderEmojis();
  }

  // Wait for admin.js to render the control panel. admin.js rebuilds the
  // entire DOM via innerHTML on every renderControlPanel() call, so we keep
  // observing and re-inject when our section is wiped out.

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    var observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById("sec-emojis")) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true,
      subtree: true,
    });

    // Also check immediately
    if (document.getElementById("settings-grid") && !document.getElementById("sec-emojis")) {
      init();
    }
  });
})();
