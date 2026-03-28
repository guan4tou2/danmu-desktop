/**
 * Admin Emoji Management Section
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, ServerI18n
 */
(function () {
  "use strict";

  const DETAILS_STATE_KEY = "admin-details-open-state";
  const NAME_RE = /^[a-zA-Z0-9_]{1,32}$/;
  const ACCEPTED_TYPES = ".png,.gif,.webp";

  function loadDetailsState() {
    try {
      const raw = window.localStorage.getItem(DETAILS_STATE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveDetailsState(state) {
    try {
      window.localStorage.setItem(DETAILS_STATE_KEY, JSON.stringify(state));
    } catch (_) {
      /* ignore */
    }
  }

  function isOpen(id) {
    const s = loadDetailsState();
    return s[id] !== undefined ? s[id] : false;
  }

  // ─── Build Section HTML ────────────────────────────────────────────

  function buildSection() {
    return `
      <details id="sec-emojis" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${isOpen("sec-emojis") ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">Emoji &amp; Stickers</h3>
            <p class="text-sm text-slate-300">Upload and manage custom emojis for danmu</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-5">
          <!-- Upload Form -->
          <div class="flex flex-col sm:flex-row gap-3 items-end">
            <div class="flex-1 min-w-0">
              <label for="emojiNameInput" class="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                id="emojiNameInput"
                placeholder="my_emoji"
                maxlength="32"
                pattern="[a-zA-Z0-9_]+"
                autocomplete="off"
                class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300 text-sm"
              />
            </div>
            <div class="flex-1 min-w-0">
              <label for="emojiFileInput" class="text-sm font-medium text-slate-300">Image</label>
              <input
                type="file"
                id="emojiFileInput"
                accept="${ACCEPTED_TYPES}"
                class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-500 file:cursor-pointer file:transition-colors bg-slate-800/80 border-2 border-slate-700 rounded-lg"
              />
            </div>
            <button
              id="emojiUploadBtn"
              class="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              Upload
            </button>
          </div>

          <!-- Usage hint -->
          <p class="text-xs text-slate-500 select-all">
            Type <code class="bg-slate-800 px-1.5 py-0.5 rounded text-violet-300">:emoji_name:</code> in your danmu to use emojis
          </p>

          <!-- Emoji Grid -->
          <div id="emojiGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            <span class="text-xs text-slate-500 col-span-full">Loading emojis...</span>
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
      '<div class="group/card flex flex-col items-center gap-1.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-200">' +
        '<img src="' + escapeAttr(emoji.url) + '" alt="' + escapeAttr(label) + '" ' +
          'width="48" height="48" loading="lazy" class="w-12 h-12 object-contain rounded" />' +
        '<span class="text-[10px] text-slate-400 truncate max-w-full" title="' + escapeAttr(label) + '">' + escapeHtml(label) + "</span>" +
        '<div class="flex gap-1">' +
          '<button class="emoji-copy-btn px-1.5 py-0.5 text-[10px] rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors" data-label="' + escapeAttr(label) + '" title="Copy to clipboard">Copy</button>' +
          '<button class="emoji-delete-btn px-1.5 py-0.5 text-[10px] rounded bg-red-900/60 hover:bg-red-700 text-red-300 transition-colors" data-name="' + escapeAttr(emoji.name) + '" title="Delete emoji">Delete</button>' +
        "</div>" +
      "</div>"
    );
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
          '<span class="text-xs text-slate-500 col-span-full">No emojis uploaded yet</span>';
        return;
      }

      grid.innerHTML = emojis.map(emojiCard).join("");
    } catch (err) {
      console.error("[admin-emojis] fetch failed:", err);
      grid.innerHTML =
        '<span class="text-xs text-red-400 col-span-full">Failed to load emojis</span>';
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
      showToast("Please enter an emoji name", false);
      nameInput.focus();
      return;
    }
    if (!NAME_RE.test(name)) {
      showToast("Name must be alphanumeric/underscore, max 32 chars", false);
      nameInput.focus();
      return;
    }
    if (!file) {
      showToast("Please select an image file", false);
      return;
    }

    var ext = file.name.split(".").pop().toLowerCase();
    if (!["png", "gif", "webp"].includes(ext)) {
      showToast("Only PNG, GIF, and WebP files are allowed", false);
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = "Uploading...";

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
        showToast(data.message || "Emoji uploaded");
        nameInput.value = "";
        fileInput.value = "";
        await fetchAndRenderEmojis();
      } else {
        showToast(data.error || "Upload failed", false);
      }
    } catch (err) {
      console.error("[admin-emojis] upload error:", err);
      showToast("Upload failed: network error", false);
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = "Upload";
    }
  }

  // ─── Delete ────────────────────────────────────────────────────────

  async function handleDelete(name) {
    if (!confirm("Delete emoji :" + name + ":?")) return;

    try {
      var resp = await csrfFetch("/admin/emojis/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
      var data = await resp.json();

      if (resp.ok) {
        showToast(data.message || "Emoji deleted");
        await fetchAndRenderEmojis();
      } else {
        showToast(data.error || "Delete failed", false);
      }
    } catch (err) {
      console.error("[admin-emojis] delete error:", err);
      showToast("Delete failed: network error", false);
    }
  }

  // ─── Copy to Clipboard ────────────────────────────────────────────

  async function handleCopy(label) {
    try {
      await navigator.clipboard.writeText(label);
      showToast("Copied " + label);
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
      showToast("Copied " + label);
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
