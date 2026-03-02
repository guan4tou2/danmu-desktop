document.addEventListener("DOMContentLoaded", () => {
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]').content || "";

  // --- VANTA.js Background Initialization ---
  try {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x86198f, // Purple
      backgroundColor: 0x000000, // Black background
      points: 12.0,
      maxDistance: 25.0,
      spacing: 18.0,
    });
  } catch (e) {
    console.warn("Vanta.js failed to initialize", e);
  }

  // Access configuration injected from HTML
  const config = window.DANMU_CONFIG || {};
  let session = config.session || { logged_in: false };
  const settingRanges = config.settingRanges || {};

  console.log("Session logged in:", session.logged_in);

  function csrfFetch(url, options = {}) {
    const opts = { credentials: "same-origin", ...options };
    const headers = new Headers(options.headers || {});
    headers.set("X-CSRF-Token", csrfToken);
    opts.headers = headers;
    return fetch(url, opts);
  }

  const FONT_REFRESH_BUFFER_SECONDS = 60;
  let adminFontRefreshTimer = null;
  let adminFontCache = [];
  let currentSettings = {};

  // Module-level handles for beforeunload cleanup
  let _autoRefreshTimer = null;
  let _adminWs = null;
  let _adminWsReconnectTimer = null;


  function scheduleAdminFontRefresh(ttlSeconds) {
    if (adminFontRefreshTimer) {
      clearTimeout(adminFontRefreshTimer);
    }
    if (!ttlSeconds || Number.isNaN(ttlSeconds)) {
      return;
    }
    const delay = Math.max(
      (ttlSeconds - FONT_REFRESH_BUFFER_SECONDS) * 1000,
      60 * 1000
    );
    adminFontRefreshTimer = setTimeout(() => {
      populateFontFamilyDropdowns();
    }, delay);
  }

  // Get latest settings from backend
  async function fetchLatestSettings() {
    try {
      const response = await fetch("/get_settings", {
        method: "GET",
        credentials: "same-origin",
      });
      const data = await response.json();
      // Update current settings
      currentSettings = data;
      console.log("Settings updated:", currentSettings);
      // Re-render control panel
      renderControlPanel();
    } catch (error) {
      console.error("Get settings failed:", error);
      showToast("Get settings failed", false);
    }
  }

  // Validate color value format
  function isValidColor(color) {
    return /^#[0-9A-Fa-f]{6}$/.test(color);
  }

  // Format color value
  function formatColor(color) {
    // If already correct format, return directly
    if (isValidColor(color)) {
      return color;
    }

    // If 6-digit hex without #
    if (/^[0-9A-Fa-f]{6}$/.test(color)) {
      return "#" + color;
    }

    // If no #, add it
    if (!color.startsWith("#")) {
      color = "#" + color;
    }

    // If length incorrect, return default color
    if (!isValidColor(color)) {
      return "#8b5cf6"; // Default purple
    }

    return color;
  }

  // Validate number range
  function validateNumberRange(key, value) {
    if (settingRanges[key]) {
      const numValue = parseInt(value);
      if (
        isNaN(numValue) ||
        numValue < settingRanges[key].min ||
        numValue > settingRanges[key].max
      ) {
        showToast(
          `${key} must be between ${settingRanges[key].min} and ${settingRanges[key].max}`,
          false
        );
        return false;
      }
    }
    return true;
  }

  // Update setting to backend
  async function updateSetting(key, value, index) {
    try {
      // If it's a color value, validate and format
      if (key === "Color") {
        if (!isValidColor(value)) {
          showToast(`Color format error, please use #RRGGBB format`, false);
          // Re-render to restore correct value
          renderControlPanel();
          return;
        }
        // Remove # before sending to server
        value = value.replace("#", "");
      } else if (key === "Speed" || key === "Opacity" || key === "FontSize") {
        // Validate number range
        if (!validateNumberRange(key, value)) {
          renderControlPanel();
          return;
        }
      }

      // Build data object
      const dataToSend = {
        type: key,
        value: value,
        index: index,
      };
      console.log(dataToSend);

      // Send to backend
      const response = await csrfFetch("/admin/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Update local settings
        if (!Array.isArray(currentSettings[key])) {
          currentSettings[key] = [false, "", "", ""];
        }
        currentSettings[key][index] = value;
        console.log(`Updated ${key}:`, currentSettings[key]);

        showToast(`${key} Settings Updated`, true);
        // Re-render control panel to update UI
        renderControlPanel();
      } else {
        showToast(`Update Failed`, false);
        // If update failed, re-fetch settings
        await fetchLatestSettings();
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(`Update Error: ${error.message}`, false);
      // Re-fetch settings on error
      await fetchLatestSettings();
    }
  }

  // Toggle setting switch
  async function toggleSetting(key, isChecked) {
    try {
      const response = await csrfFetch("/admin/Set", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key, enabled: isChecked }),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        if (!Array.isArray(currentSettings[key])) {
          currentSettings[key] = [false, "", "", ""];
        }
        currentSettings[key][0] = isChecked;
        showToast(`${key} Settings Updated`);
        renderControlPanel();
      } else {
        const toggleElement = document.getElementById(`toggle-${key}`);
        if (toggleElement) {
          toggleElement.checked = !isChecked;
        }
        showToast(result.error || "Update Failed", false);
      }
    } catch (error) {
      console.error("Error:", error);
      const toggleElement = document.getElementById(`toggle-${key}`);
      if (toggleElement) {
        toggleElement.checked = !isChecked;
      }
      showToast(`Update Error: ${error.message}`, false);
    }
  }

  // --- Element Selectors ---
  const appContainer = document.getElementById("app-container");
  const toastContainer = document.getElementById("toast-container");
  const scheduleIdleTask = (cb, timeout = 500) => {
    if ("requestIdleCallback" in window) {
      return window.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(cb, timeout);
  };

  // --- Functions ---

  async function fetchBlacklist() {
    try {
      const response = await fetch("/admin/blacklist/get", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(
          `Error fetching blacklist: ${errorData.error || response.statusText}`,
          false
        );
        return;
      }
      const blacklist = await response.json();
      const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
      blacklistKeywordsDiv.innerHTML = ""; // Clear current list
      if (blacklist.length === 0) {
        blacklistKeywordsDiv.innerHTML =
          '<p class="text-slate-400 text-sm">No keywords blacklisted yet.</p>';
      } else {
        blacklist.forEach((keyword) => {
          const keywordEl = document.createElement("div");
          keywordEl.className =
            "flex items-center justify-between bg-slate-700/50 p-2 rounded-lg";

          // Create a span for the keyword text
          const keywordSpan = document.createElement("span");
          keywordSpan.className = "text-slate-200";
          keywordSpan.textContent = keyword; // Use textContent to sanitize

          // Create the remove button
          const removeButton = document.createElement("button");
          removeButton.className =
            "removeKeywordBtn text-red-400 hover:text-red-600 font-semibold";
          removeButton.textContent = "Remove"; // Set button text
          // Set data-keyword attribute safely
          removeButton.setAttribute("data-keyword", keyword); // Add this line

          keywordEl.appendChild(keywordSpan);
          keywordEl.appendChild(removeButton);
          blacklistKeywordsDiv.appendChild(keywordEl);
        });
      }
      // Event listeners for remove buttons are now handled by delegation in addEventListeners
    } catch (error) {
      console.error("Fetch blacklist error:", error);
      showToast("Failed to fetch blacklist.", false);
    }
  }

  async function addKeyword() {
    const keywordInput = document.getElementById("newKeywordInput");
    const keyword = keywordInput.value.trim();
    if (!keyword) {
      showToast("Keyword cannot be empty.", false);
      return;
    }
    try {
      const response = await csrfFetch("/admin/blacklist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        showToast(data.message || "Keyword added.", true);
        keywordInput.value = ""; // Clear input
        fetchBlacklist(); // Refresh list
      } else {
        showToast(data.error || "Failed to add keyword.", false);
      }
    } catch (error) {
      console.error("Add keyword error:", error);
      showToast("Error adding keyword.", false);
    }
  }

  async function removeKeyword(keyword) {
    try {
      const response = await csrfFetch("/admin/blacklist/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        showToast(data.message || "Keyword removed.", true);
        fetchBlacklist(); // Refresh list
      } else {
        showToast(data.error || "Failed to remove keyword.", false);
      }
    } catch (error) {
      console.error("Remove keyword error:", error);
      showToast("Error removing keyword.", false);
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatTimestamp(timestamp) {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;

      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return timestamp;
    }
  }

  // Cache all fetched records for client-side search
  let _allHistoryRecords = [];

  function renderHistoryRecords(records) {
    const historyListDiv = document.getElementById("danmuHistoryList");
    if (!historyListDiv) return;

    historyListDiv.innerHTML = "";
    if (records.length === 0) {
      historyListDiv.innerHTML =
        '<p class="text-slate-400 text-sm text-center py-4">No danmu found.</p>';
      return;
    }

    records.forEach((record) => {
      const recordEl = document.createElement("div");
      recordEl.className = "bg-slate-700/50 p-3 rounded-lg space-y-1";

      const headerEl = document.createElement("div");
      headerEl.className = "flex items-start justify-between gap-2";

      const timeEl = document.createElement("div");
      timeEl.className = "text-xs text-slate-400 shrink-0";
      timeEl.textContent = formatTimestamp(record.timestamp);

      // "Block" quick-action button (text only, non-image danmu)
      if (record.text && !record.isImage) {
        const blockBtn = document.createElement("button");
        blockBtn.className =
          "text-xs px-2 py-0.5 rounded bg-red-700/60 hover:bg-red-700 text-slate-200 transition-colors shrink-0";
        blockBtn.textContent = "+ Block";
        blockBtn.title = "Add this text to the blacklist";
        blockBtn.addEventListener("click", async () => {
          try {
            await csrfFetch("/admin/blacklist/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ keyword: record.text }),
            });
            showToast(`"${record.text.slice(0, 30)}" added to blacklist`, true);
            fetchBlacklist();
          } catch (e) {
            showToast("Failed to add to blacklist", false);
          }
        });
        headerEl.appendChild(blockBtn);
      }

      headerEl.prepend(timeEl);

      const textEl = document.createElement("div");
      textEl.className = "text-white text-sm break-words";
      textEl.textContent = record.text || "(empty)";

      const metaEl = document.createElement("div");
      metaEl.className = "text-xs text-slate-400 flex flex-wrap gap-x-3 gap-y-1";
      const metaParts = [];
      if (record.color) metaParts.push(`Color: #${record.color}`);
      if (record.size) metaParts.push(`Size: ${record.size}`);
      if (record.speed) metaParts.push(`Speed: ${record.speed}`);
      if (record.opacity) metaParts.push(`Opacity: ${record.opacity}`);
      if (record.isImage) metaParts.push("Type: Image");
      if (record.fontInfo?.name) metaParts.push(`Font: ${record.fontInfo.name}`);
      if (record.clientIp) metaParts.push(`IP: ${record.clientIp}`);
      if (record.fingerprint) metaParts.push(`FP: ${record.fingerprint.slice(0, 8)}…`);
      metaEl.textContent = metaParts.join(" • ") || "No metadata";

      recordEl.appendChild(headerEl);
      recordEl.appendChild(textEl);
      recordEl.appendChild(metaEl);
      historyListDiv.appendChild(recordEl);
    });
  }

  async function fetchDanmuHistory() {
    try {
      const hours = parseInt(document.getElementById("historyHours")?.value || "24");
      const response = await fetch(`/admin/history?hours=${hours}&limit=1000`, {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(`Error fetching history: ${errorData.error || response.statusText}`, false);
        return;
      }
      const data = await response.json();
      const { records, stats } = data;
      _allHistoryRecords = records;

      const statsDiv = document.getElementById("historyStats");
      if (statsDiv) {
        statsDiv.innerHTML = `
          <div class="flex gap-4 text-xs">
            <span>Total: <span class="text-white font-semibold">${stats.total}</span></span>
            <span>Last 24h: <span class="text-white font-semibold">${stats.last_24h}</span></span>
            <span>Showing: <span class="text-white font-semibold">${records.length}</span></span>
          </div>`;
      }

      // Apply current search filter
      const searchTerm = document.getElementById("historySearch")?.value?.toLowerCase() || "";
      const filtered = searchTerm
        ? records.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
        : records;

      renderHistoryRecords(filtered);
    } catch (error) {
      console.error("Fetch danmu history error:", error);
      showToast("Error fetching danmu history.", false);
    }
  }

  async function clearDanmuHistory() {
    if (
      !confirm(
        "Are you sure you want to clear all danmu history? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const response = await csrfFetch("/admin/history/clear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        showToast("History cleared successfully.", true);
        fetchDanmuHistory();
      } else {
        const errorData = await response.json();
        showToast(
          `Error clearing history: ${errorData.error || response.statusText}`,
          false
        );
      }
    } catch (error) {
      console.error("Clear history error:", error);
      showToast("Error clearing history.", false);
    }
  }

  // Show toast message (stackable version)
  function showToast(message, isSuccess = true) {
    // 1. Create toast element
    const toastElement = document.createElement("div");
    toastElement.className =
      "flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all duration-300 ease-in-out opacity-0 translate-x-full";
    toastElement.setAttribute("role", "alert");

    // 2. Create toast content
    const iconSvg = isSuccess
      ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
      : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    const iconColorClass = isSuccess ? "text-green-500" : "text-red-500";

    toastElement.innerHTML = `
                    <div class="${iconColorClass}">${iconSvg}</div>
                    <div class="pl-4 text-sm font-normal"></div>
                `;
    const messageContainer = toastElement.querySelector(
      ".pl-4.text-sm.font-normal"
    );
    messageContainer.textContent = message;

    // 3. Add to container
    toastContainer.appendChild(toastElement);

    // 4. Trigger enter animation
    requestAnimationFrame(() => {
      toastElement.classList.remove("opacity-0", "translate-x-full");
    });

    // 5. Set timer to remove toast
    setTimeout(() => {
      toastElement.classList.add("opacity-0", "translate-x-full");

      toastElement.addEventListener("transitionend", () => {
        toastElement.remove();
      });
    }, 3000);
  }

  // Render Login Screen
  function renderLogin() {
    appContainer.innerHTML = `
                    <div class="glass-effect rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 max-w-md mx-auto">
                        <h1 class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent pb-2">
                            Admin Login
                        </h1>
                        <form id="loginForm" class="space-y-6" action="/login" method="post">
                            <div>
                                <label for="password" class="text-sm font-medium text-slate-300">Password</label>
                                <input type="password" id="password" name="password" class="mt-1 w-full p-3 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300" required>
                            </div>
                            <button type="submit" class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 active:scale-95 transition-all duration-300">
                                Login
                            </button>
                        </form>
                    </div>
                `;
  }

  // Render Control Panel Screen
  function renderControlPanel() {
    const settingCard = (
      id,
      title,
      description,
      isEnabled,
      enabledContent,
      disabledContent
    ) => `
                    <div class="glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent">
                        <div class="flex items-center justify-between">
                            <div class="flex-grow pr-4">
                                <h3 class="text-lg font-bold text-white">${title}</h3>
                                <p class="text-sm text-slate-400">${description}</p>
                            </div>
                            <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                                <input type="checkbox" name="${id}" id="toggle-${id}" class="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer" ${
      isEnabled ? "checked" : ""
    } />
                                <label for="toggle-${id}" class="toggle-label block overflow-hidden h-7 rounded-full bg-slate-700 cursor-pointer"></label>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            ${isEnabled ? enabledContent : disabledContent}
                        </div>
                    </div>
                `;

    appContainer.innerHTML = `
                    <div class="glass-effect rounded-3xl shadow-2xl p-6 md:p-8 space-y-8">
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                             <h1 class="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent pb-2">
                                Danmu Control Panel
                            </h1>
                            <button id="logoutButton" class="w-full md:w-auto flex items-center justify-center gap-2 bg-red-600/80 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-lg transform active:scale-95 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                                <span>Logout</span>
                            </button>
                        </div>

                        <div id="settings-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Settings cards will be inserted here -->
                        </div>
                    </div>
                `;

    const settingsGrid = document.getElementById("settings-grid");

    // Color Settings
    settingsGrid.innerHTML += settingCard(
      "Color",
      "Color Setting",
      "Allow users to customize colors",
      currentSettings.Color[0],
      `
                        <label class="text-sm font-medium text-slate-300">Specific Color</label>
                        <input type="color" class="setting-input mt-1 w-full h-10 p-1 bg-slate-800 border-slate-700 rounded-lg cursor-pointer" data-key="Color" data-index="3" value="${formatColor(
                          "#" + currentSettings.Color[3]
                        )}" disabled>
                    `,
      `
                        <label class="text-sm font-medium text-slate-300">Specific Color</label>
                        <input type="color" class="setting-input mt-1 w-full h-10 p-1 bg-slate-800 border-slate-700 rounded-lg cursor-pointer" data-key="Color" data-index="3" value="${formatColor(
                          "#" + currentSettings.Color[3]
                        )}">
                    `
    );

    // Opacity Settings
    settingsGrid.innerHTML += settingCard(
      "Opacity",
      "Opacity Setting",
      "Allow users to customize opacity",
      currentSettings.Opacity[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm font-medium text-slate-300">Min (%)</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="1" value="${currentSettings.Opacity[1]}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                            </div>
                            <div>
                                <label class="text-sm font-medium text-slate-300">Max (%)</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="2" value="${currentSettings.Opacity[2]}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                            </div>
                        </div>
                    `,
      `
                        <label class="text-sm font-medium text-slate-300">Specific Opacity (%)</label>
                        <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Opacity" data-index="3" value="${currentSettings.Opacity[3]}" min="${settingRanges.Opacity.min}" max="${settingRanges.Opacity.max}" step="1">
                    `
    );

    // Font Size Settings
    settingsGrid.innerHTML += settingCard(
      "FontSize",
      "Font Size Setting",
      "Allow users to customize font size",
      currentSettings.FontSize[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm font-medium text-slate-300">Min (px)</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="1" value="${currentSettings.FontSize[1]}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                            </div>
                            <div>
                                <label class="text-sm font-medium text-slate-300">Max (px)</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="2" value="${currentSettings.FontSize[2]}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                            </div>
                        </div>
                    `,
      `
                        <label class="text-sm font-medium text-slate-300">Specific Size (px)</label>
                        <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="FontSize" data-index="3" value="${currentSettings.FontSize[3]}" min="${settingRanges.FontSize.min}" max="${settingRanges.FontSize.max}" step="1">
                    `
    );

    // Speed Settings
    settingsGrid.innerHTML += settingCard(
      "Speed",
      "Speed Setting",
      "Allow users to customize speed",
      currentSettings.Speed[0],
      `
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm font-medium text-slate-300">Slowest</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="1" value="${currentSettings.Speed[1]}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                            </div>
                            <div>
                                <label class="text-sm font-medium text-slate-300">Fastest</label>
                                <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="2" value="${currentSettings.Speed[2]}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                            </div>
                        </div>
                        <small class="text-slate-500 text-xs block mt-2">Higher value = Faster speed</small>
                    `,
      `
                        <label class="text-sm font-medium text-slate-300">Specific Speed</label>
                        <input type="number" class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg text-center" data-key="Speed" data-index="3" value="${currentSettings.Speed[3]}" min="${settingRanges.Speed.min}" max="${settingRanges.Speed.max}" step="1">
                        <small class="text-slate-500 text-xs block mt-2">Higher value = Faster speed</small>
                    `
    );

    // Font Family Setting (moved below speed)
    const fontFamilyEnabled =
      currentSettings.FontFamily && currentSettings.FontFamily[0] === true;
    const fontFamilyDescription = fontFamilyEnabled
      ? "Users can choose their font. Select the default font here if they don't choose, or the font to be used if user choice is disabled."
      : "Users cannot choose their font. Danmus will use the font selected below.";

    const fontFamilyCardContent = `
            <div>
                <label class="text-sm font-medium text-slate-300">Font for Danmus / Default User Choice</label>
                <select class="setting-input mt-1 w-full p-2 bg-slate-800 border-2 border-slate-700 rounded-lg" data-key="FontFamily" data-index="3" id="fontFamilySelect">
                    <!-- Options will be populated by JS -->
                </select>
            </div>
            <div class="mt-4">
                <label class="text-sm font-medium text-slate-300">Upload New TTF Font</label>
                <input type="file" id="fontUploadInput" accept=".ttf" class="mt-1 w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"/>
                <button id="uploadFontBtn" class="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">Upload Font</button>
            </div>
            <small class="text-slate-500 text-xs block mt-2">Uploaded fonts become available in the selection above and for users (if enabled).</small>
            `;

    settingsGrid.innerHTML += settingCard(
      "FontFamily",
      "Font Family Configuration",
      fontFamilyDescription, // Dynamic description
      fontFamilyEnabled, // isEnabled (this now means "allow user choice")
      fontFamilyCardContent, // Content is the same regardless of toggle for admin
      fontFamilyCardContent // Content is the same
    );
    // Use setTimeout to ensure DOM is ready before populating dropdowns
    setTimeout(() => {
      populateFontFamilyDropdowns();
    }, 0);

    // Effects Enable/Disable Card
    const effectsEnabled = currentSettings.Effects ? currentSettings.Effects[0] !== false : true;
    settingsGrid.innerHTML += settingCard(
      "Effects",
      "Effects Setting",
      "Allow users to apply visual effects (animations) to danmu",
      effectsEnabled,
      `<p class="text-sm text-slate-400">Effects are enabled. Users can apply animations to their danmu messages.</p>`,
      `<p class="text-sm text-slate-400">Effects are disabled. All danmu will display without animations.</p>`
    );

    // Effects Management Card（全寬）
    settingsGrid.innerHTML += `
      <div class="glass-effect rounded-2xl p-6 border border-transparent hover:border-slate-500 transition-all duration-300 lg:col-span-2">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-white">Effects Management</h3>
            <p class="text-sm text-slate-400">管理 .dme 特效插件（熱插拔，可直接編輯）</p>
          </div>
          <div class="flex items-center gap-2">
            <button id="effectReloadBtn"
              class="px-3 py-1.5 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              Reload
            </button>
            <label for="effectUploadInput"
              class="px-3 py-1.5 text-xs font-medium bg-sky-700 hover:bg-sky-600 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
              Upload .dme
            </label>
            <input type="file" id="effectUploadInput" accept=".dme" class="hidden">
          </div>
        </div>
        <div class="border-t border-slate-700/50 pt-4">
          <div id="effectsList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-h-12">
            <span class="text-xs text-slate-500 col-span-2">Loading effects...</span>
          </div>
        </div>
      </div>
    `;

    // Blacklist Management Card
    settingsGrid.innerHTML += `
                    <div class="glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg font-bold text-white">Blacklist Management</h3>
                                <p class="text-sm text-slate-400">Add or remove keywords from the blacklist.</p>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <div>
                                <label for="newKeywordInput" class="text-sm font-medium text-slate-300">New Keyword</label>
                                <input type="text" id="newKeywordInput" placeholder="Enter keyword" class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300">
                                <button id="addKeywordBtn" class="mt-3 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 active:scale-95 transition-all duration-300">Add Keyword</button>
                            </div>
                            <div class="mt-6">
                                <h4 class="text-md font-semibold text-white mb-2">Current Blacklist:</h4>
                                <div id="blacklistKeywords" class="space-y-2 max-h-48 overflow-y-auto">
                                    <!-- Keywords will be listed here -->
                                </div>
                            </div>
                        </div>
                    </div>
                `;

    // Danmu History Card
    settingsGrid.innerHTML += `
                    <div class="glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-lg font-bold text-white">Danmu History</h3>
                                <p class="text-sm text-slate-400">View and search sent danmu messages.</p>
                            </div>
                            <label class="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                                <input type="checkbox" id="historyAutoRefresh" class="accent-purple-500">
                                Auto-refresh (30s)
                            </label>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50">
                            <div class="space-y-3">
                                <div class="flex gap-2 items-center flex-wrap">
                                    <label class="text-sm font-medium text-slate-300">Time Range:</label>
                                    <select id="historyHours" class="px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400">
                                        <option value="1">Last 1 hour</option>
                                        <option value="6">Last 6 hours</option>
                                        <option value="24" selected>Last 24 hours</option>
                                        <option value="72">Last 3 days</option>
                                        <option value="168">Last 7 days</option>
                                    </select>
                                    <button id="refreshHistoryBtn" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm">Refresh</button>
                                    <button id="exportHistoryBtn" class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors text-sm">Export CSV</button>
                                    <button id="clearHistoryBtn" class="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors text-sm">Clear All</button>
                                </div>
                                <input id="historySearch" type="search" placeholder="Search history..."
                                    class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm
                                           placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400">
                                <div id="historyStats" class="text-sm text-slate-400"></div>
                                <div id="danmuHistoryList" class="space-y-2 max-h-96 overflow-y-auto">
                                    <!-- History will be listed here -->
                                </div>
                            </div>
                        </div>
                    </div>
                `;

    // Password Change Card
    settingsGrid.innerHTML += `
                    <div class="glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent">
                        <div>
                            <h3 class="text-lg font-bold text-white">Change Password</h3>
                            <p class="text-sm text-slate-400">Update the admin login password.</p>
                        </div>
                        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-3">
                            <input id="pwCurrent" type="password" placeholder="Current password"
                                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <input id="pwNew" type="password" placeholder="New password (min 8 chars)"
                                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <input id="pwConfirm" type="password" placeholder="Confirm new password"
                                class="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <button id="changePasswordBtn"
                                class="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-semibold">
                                Change Password
                            </button>
                        </div>
                    </div>
                `;

    // Fetch blacklist/history after render without blocking first paint
    if (document.getElementById("blacklistKeywords")) {
      scheduleIdleTask(fetchBlacklist);
    }

    if (document.getElementById("danmuHistoryList")) {
      scheduleIdleTask(fetchDanmuHistory);
    }

    addEventListeners();
    scheduleIdleTask(initEffectsManagement);
  }

  // Attach Event Listeners
  function addEventListeners() {
    // Logout Button
    const logoutBtn = document.getElementById("logoutButton");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        try {
          const response = await csrfFetch("/logout", {
            method: "POST",
          });

          if (response.redirected) {
            window.location.href = response.url;
          }
          showToast("Logout Success");
        } catch (error) {
          console.error("Logout Failed:", error);
          showToast("Logout Failed", false);
        }
      });
    }

    // Toggle Checkbox
    document.querySelectorAll(".toggle-checkbox").forEach((toggle) => {
      toggle.addEventListener("change", async function () {
        const key = this.name;
        const isChecked = this.checked;
        await toggleSetting(key, isChecked);
      });
    });

    // Setting Input Change
    document.querySelectorAll(".setting-input").forEach((input) => {
      input.addEventListener("change", async function () {
        const key = this.dataset.key;
        const index = parseInt(this.dataset.index);
        let value = this.value;
        console.log(key, index, value);
        if (this.type === "number") {
          value = parseInt(value);
        }

        await updateSetting(key, value, index);
      });
    });

    // Add Keyword button event listener
    const addKeywordBtn = document.getElementById("addKeywordBtn");
    if (addKeywordBtn) {
      addKeywordBtn.addEventListener("click", addKeyword);
    }

    const newKeywordInput = document.getElementById("newKeywordInput");
    if (newKeywordInput) {
      newKeywordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
          event.preventDefault();
          addKeyword();
        }
      });
    }

    // Event delegation for remove keyword buttons
    const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
    if (blacklistKeywordsDiv) {
      blacklistKeywordsDiv.addEventListener("click", function (event) {
        const removeButton = event.target.closest(".removeKeywordBtn");
        if (removeButton) {
          const keyword = removeButton.dataset.keyword;
          if (keyword) {
            removeKeyword(keyword);
          }
        }
      });
    }

    // Danmu history event listeners
    const refreshHistoryBtn = document.getElementById("refreshHistoryBtn");
    if (refreshHistoryBtn) {
      refreshHistoryBtn.addEventListener("click", fetchDanmuHistory);
    }

    const exportHistoryBtn = document.getElementById("exportHistoryBtn");
    if (exportHistoryBtn) {
      exportHistoryBtn.addEventListener("click", () => {
        if (_allHistoryRecords.length === 0) {
          showToast("No records to export.", false);
          return;
        }

        const headers = ["timestamp", "text", "color", "size", "speed", "opacity", "isImage", "fontName", "clientIp", "fingerprint"];
        const escape = (v) => {
          const s = v == null ? "" : String(v);
          return s.includes(",") || s.includes('"') || s.includes("\n")
            ? `"${s.replace(/"/g, '""')}"`
            : s;
        };

        const rows = _allHistoryRecords.map((r) => [
          escape(r.timestamp || ""),
          escape(r.text || ""),
          escape(r.color ? `#${r.color}` : ""),
          escape(r.size ?? ""),
          escape(r.speed ?? ""),
          escape(r.opacity ?? ""),
          escape(r.isImage ? "true" : "false"),
          escape(r.fontInfo?.name || ""),
          escape(r.clientIp || ""),
          escape(r.fingerprint || ""),
        ].join(","));

        const csv = [headers.join(","), ...rows].join("\r\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        a.href = url;
        a.download = `danmu-history-${ts}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast(`Exported ${_allHistoryRecords.length} records.`, true);
      });
    }

    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener("click", clearDanmuHistory);
    }

    const historyHoursSelect = document.getElementById("historyHours");
    if (historyHoursSelect) {
      historyHoursSelect.addEventListener("change", fetchDanmuHistory);
    }

    // Client-side history search
    const historySearch = document.getElementById("historySearch");
    if (historySearch) {
      historySearch.addEventListener("input", () => {
        const term = historySearch.value.toLowerCase();
        const filtered = term
          ? _allHistoryRecords.filter((r) => (r.text || "").toLowerCase().includes(term))
          : _allHistoryRecords;
        renderHistoryRecords(filtered);
      });
    }

    // Auto-refresh toggle — timer stored at module scope for beforeunload cleanup
    const autoRefreshCheckbox = document.getElementById("historyAutoRefresh");
    if (autoRefreshCheckbox) {
      autoRefreshCheckbox.addEventListener("change", () => {
        if (_autoRefreshTimer) {
          clearInterval(_autoRefreshTimer);
          _autoRefreshTimer = null;
        }
        if (autoRefreshCheckbox.checked) {
          _autoRefreshTimer = setInterval(fetchDanmuHistory, 30000);
        }
      });
    }

    // Password change button
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    if (changePasswordBtn) {
      changePasswordBtn.addEventListener("click", async () => {
        const current = document.getElementById("pwCurrent")?.value || "";
        const newPw = document.getElementById("pwNew")?.value || "";
        const confirm = document.getElementById("pwConfirm")?.value || "";

        if (!current || !newPw || !confirm) {
          showToast("All password fields are required.", false);
          return;
        }

        try {
          const res = await csrfFetch("/admin/change_password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              current_password: current,
              new_password: newPw,
              confirm_password: confirm,
            }),
          });
          const data = await res.json();
          if (res.ok) {
            showToast(data.message || "Password changed!", true);
            // Clear the fields
            ["pwCurrent", "pwNew", "pwConfirm"].forEach((id) => {
              const el = document.getElementById(id);
              if (el) el.value = "";
            });
          } else {
            showToast(data.error || "Failed to change password.", false);
          }
        } catch (e) {
          showToast("Error changing password.", false);
        }
      });
    }

    // Font upload button event listeners
    const uploadFontBtn = document.getElementById("uploadFontBtn");
    if (uploadFontBtn) {
      uploadFontBtn.addEventListener("click", () =>
        handleFontUpload("fontUploadInput", "uploadFontBtn")
      );
    }
  }

  // Main Render Function
  function render() {
    if (session.logged_in) {
      renderControlPanel();
    } else {
      renderLogin();
    }
  }

  // --- Initialization ---
  async function init() {
    await fetchLatestSettings(); // This will call renderControlPanel which now calls populateFontFamilyDropdowns
    render();
  }

  async function populateFontFamilyDropdowns() {
    try {
      const response = await csrfFetch("/admin/get_fonts");
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        showToast(err.error || "Failed to fetch font list.", false);
        return;
      }
      const payload = await response.json();
      const fonts = payload.fonts || [];
      adminFontCache = fonts;
      scheduleAdminFontRefresh(payload.tokenTTL || 0);

      const selectElement = document.getElementById("fontFamilySelect");
      const currentFontName = currentSettings.FontFamily[3];

      if (!selectElement) return;
      selectElement.innerHTML = "";

      let foundCurrentFont = false;
      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font.name;
        option.textContent = `${font.name} (${
          font.type === "default"
            ? "Default"
            : font.type === "system"
            ? "System"
            : "Uploaded"
        })`;
        option.dataset.fontUrl = font.url || "";
        option.dataset.expiresAt = font.expiresAt || "";
        if (font.name === currentFontName) {
          option.selected = true;
          foundCurrentFont = true;
        }
        selectElement.appendChild(option);
      });

      if (!foundCurrentFont) {
        const notoOption = Array.from(selectElement.options).find(
          (opt) => opt.value === "NotoSansTC"
        );
        if (notoOption) {
          notoOption.selected = true;
        } else if (selectElement.options.length > 0) {
          selectElement.options[0].selected = true;
        }
      }
    } catch (error) {
      console.error("Error populating font dropdowns:", error);
      showToast("Error loading font list.", false);
    }
  }

  async function handleFontUpload(inputId, buttonId) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput ? fileInput.files[0] : null;

    if (!file) {
      showToast("Please select a TTF file to upload.", false);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".ttf")) {
      showToast("Invalid file type. Only TTF files are allowed.", false);
      fileInput.value = ""; // Clear the input
      return;
    }

    const formData = new FormData();
    formData.append("fontfile", file);
    formData.append("csrf_token", csrfToken);

    try {
      const response = await csrfFetch("/admin/upload_font", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        showToast(result.message || "Font uploaded successfully!", true);
        fileInput.value = ""; // Clear the input
        await populateFontFamilyDropdowns(); // Refresh font list
        // Optionally, select the newly uploaded font
        const newFontName = file.name.substring(0, file.name.lastIndexOf(".")); // Get name without .ttf
        const selectElement = document.getElementById("fontFamilySelect");
        if (selectElement) {
          // Check if this font is already an option, if not, populate might add it
          // For now, just set value and update setting. populateFontFamilyDropdowns will fix selection if needed.
          selectElement.value = newFontName;
        }
        await updateSetting("FontFamily", newFontName, 3); // Update setting and this will trigger re-render and repopulate
      } else {
        showToast(result.error || "Font upload failed.", false);
      }
    } catch (error) {
      console.error("Font upload error:", error);
      showToast("An error occurred during font upload.", false);
    }
  }
  // ─── Effects Management ──────────────────────────────────────────────────────

  async function initEffectsManagement() {
    // ── 注入 Effect Edit Modal（固定覆蓋層）──────────────────────────────
    if (!document.getElementById("effectEditModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="effectEditModal" style="display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;background:rgba(0,0,0,0.72);">
          <div style="background:#0f172a;border:1px solid #1e293b;border-radius:1rem;width:100%;max-width:700px;margin:0 1rem;box-shadow:0 32px 80px rgba(0,0,0,0.8);display:flex;flex-direction:column;max-height:88vh;overflow:hidden;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;border-bottom:1px solid #1e293b;flex-shrink:0;">
              <div>
                <p id="effectEditModalTitle" style="font-weight:700;color:#f1f5f9;font-size:0.95rem;margin:0;"></p>
                <p id="effectEditModalFile" style="font-size:0.7rem;color:#64748b;font-family:monospace;margin:0.15rem 0 0;"></p>
              </div>
              <button id="effectEditModalClose" title="Close" style="color:#64748b;background:none;border:none;cursor:pointer;padding:0.25rem;border-radius:0.4rem;display:flex;align-items:center;line-height:1;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div style="flex:1;overflow:hidden;padding:1rem 1.25rem;min-height:0;">
              <textarea id="effectEditModalTextarea"
                style="width:100%;height:100%;min-height:300px;background:#020617;color:#cbd5e1;font-size:0.75rem;font-family:'Courier New',Courier,monospace;border:1px solid #334155;border-radius:0.5rem;padding:0.75rem;resize:none;outline:none;box-sizing:border-box;display:block;"
                spellcheck="false"></textarea>
            </div>
            <div style="display:flex;justify-content:flex-end;gap:0.5rem;padding:0.75rem 1.25rem;border-top:1px solid #1e293b;flex-shrink:0;">
              <button id="effectEditModalCancel" style="padding:0.4rem 1.1rem;font-size:0.8rem;color:#94a3b8;border:1px solid #334155;border-radius:0.5rem;background:none;cursor:pointer;">Cancel</button>
              <button id="effectEditModalSave" style="padding:0.4rem 1.1rem;font-size:0.8rem;font-weight:600;background:#0369a1;color:#fff;border:none;border-radius:0.5rem;cursor:pointer;">Save Changes</button>
            </div>
          </div>
        </div>
      `);

      // ── Modal close handlers ───────────────────────────────────────────
      const hideModal = () => {
        document.getElementById("effectEditModal").style.display = "none";
      };
      document.getElementById("effectEditModalClose").addEventListener("click", hideModal);
      document.getElementById("effectEditModalCancel").addEventListener("click", hideModal);
      document.getElementById("effectEditModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) hideModal();
      });

      // ── Modal save handler ─────────────────────────────────────────────
      document.getElementById("effectEditModalSave").addEventListener("click", async () => {
        const modal = document.getElementById("effectEditModal");
        const textarea = document.getElementById("effectEditModalTextarea");
        const saveBtn = document.getElementById("effectEditModalSave");
        const name = modal?.dataset.effectName;
        if (!name || !textarea) return;
        saveBtn.disabled = true;
        try {
          const res = await csrfFetch("/admin/effects/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, content: textarea.value }),
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok) {
            showToast(data.message || "Effect saved", true);
            modal.style.display = "none";
            await fetchEffectsAdmin();
          } else {
            showToast(data.error || "Save failed", false);
          }
        } catch (_) {
          showToast("Network error", false);
        } finally {
          saveBtn.disabled = false;
        }
      });
    }

    await fetchEffectsAdmin();

    document.getElementById("effectReloadBtn")?.addEventListener("click", async () => {
      const btn = document.getElementById("effectReloadBtn");
      if (btn) btn.disabled = true;
      try {
        const res = await csrfFetch("/admin/effects/reload", { method: "POST" });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          showToast(data.message || "Effects reloaded");
          await fetchEffectsAdmin();
        } else {
          showToast(data.error || "Reload failed", false);
        }
      } catch (_) {
        showToast("Network error", false);
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    document.getElementById("effectUploadInput")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("effectfile", file);
      try {
        const res = await csrfFetch("/admin/effects/upload", { method: "POST", body: formData });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          showToast(data.message || "Effect uploaded");
          await fetchEffectsAdmin();
        } else {
          showToast(data.error || "Upload failed", false);
        }
      } catch (_) {
        showToast("Network error", false);
      } finally {
        e.target.value = "";
      }
    });
  }

  async function fetchEffectsAdmin() {
    const container = document.getElementById("effectsList");
    if (!container) return;
    try {
      const res = await csrfFetch("/admin/effects");
      if (!res.ok) {
        container.innerHTML = '<span class="text-xs text-red-400">Failed to load effects</span>';
        return;
      }
      const data = await res.json();
      renderEffectsList(data.effects || []);
    } catch (_) {
      container.innerHTML = '<span class="text-xs text-red-400">Network error</span>';
    }
  }

  function renderEffectsList(effects) {
    const container = document.getElementById("effectsList");
    if (!container) return;
    if (!effects.length) {
      container.innerHTML =
        '<span class="text-xs text-slate-500 col-span-3">No effects loaded. Upload a .dme file to add effects.</span>';
      return;
    }
    container.innerHTML = "";
    effects.forEach((eff) => {
      // ── Compact horizontal card ───────────────────────────────────────────
      const card = document.createElement("div");
      const tooltip = [eff.description, `file: ${eff.filename}`].filter(Boolean).join("\n");
      card.title = tooltip;
      card.style.cssText =
        "background:rgba(30,41,59,0.6);border:1px solid rgba(71,85,105,0.4);border-radius:0.5rem;padding:0.35rem 0.5rem;display:flex;align-items:center;gap:0.5rem;transition:border-color 0.15s;min-width:0;";
      card.addEventListener("mouseenter", () => { card.style.borderColor = "rgba(100,116,139,0.65)"; });
      card.addEventListener("mouseleave", () => { card.style.borderColor = "rgba(71,85,105,0.4)"; });

      // ── Indicator dot ─────────────────────────────────────────────────────
      const dot = document.createElement("span");
      dot.style.cssText = "width:6px;height:6px;border-radius:50%;background:#38bdf8;flex-shrink:0;";
      card.appendChild(dot);

      // ── Text: label + name ────────────────────────────────────────────────
      const textWrap = document.createElement("div");
      textWrap.style.cssText = "flex:1;min-width:0;";
      const labelEl = document.createElement("div");
      labelEl.style.cssText = "font-weight:600;color:#e2e8f0;font-size:0.775rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.2;";
      labelEl.textContent = eff.label || eff.name;
      const nameEl = document.createElement("div");
      nameEl.style.cssText = "font-size:0.62rem;color:#64748b;font-family:monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.2;";
      nameEl.textContent = eff.name;
      textWrap.appendChild(labelEl);
      textWrap.appendChild(nameEl);
      card.appendChild(textWrap);

      // ── Buttons ───────────────────────────────────────────────────────────
      const editBtn = document.createElement("button");
      editBtn.style.cssText =
        "padding:0.2rem 0.5rem;font-size:0.65rem;font-weight:500;color:#94a3b8;border:1px solid #334155;border-radius:0.35rem;background:none;cursor:pointer;flex-shrink:0;transition:color 0.15s,border-color 0.15s;";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("mouseenter", () => { editBtn.style.color = "#7dd3fc"; editBtn.style.borderColor = "#38bdf8"; });
      editBtn.addEventListener("mouseleave", () => { editBtn.style.color = "#94a3b8"; editBtn.style.borderColor = "#334155"; });

      const delBtn = document.createElement("button");
      delBtn.style.cssText = "padding:0.2rem;color:#475569;background:none;border:none;cursor:pointer;border-radius:0.3rem;display:flex;align-items:center;flex-shrink:0;transition:color 0.15s;";
      delBtn.title = `Delete ${eff.label || eff.name}`;
      delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';
      delBtn.addEventListener("mouseenter", () => { delBtn.style.color = "#f87171"; });
      delBtn.addEventListener("mouseleave", () => { delBtn.style.color = "#475569"; });

      card.appendChild(editBtn);
      card.appendChild(delBtn);
      container.appendChild(card);

      // ── Edit → open modal ─────────────────────────────────────────────────
      editBtn.addEventListener("click", async () => {
        const modal = document.getElementById("effectEditModal");
        const titleEl = document.getElementById("effectEditModalTitle");
        const fileEl = document.getElementById("effectEditModalFile");
        const textarea = document.getElementById("effectEditModalTextarea");
        const saveBtn = document.getElementById("effectEditModalSave");
        if (!modal) return;
        titleEl.textContent = eff.label || eff.name;
        fileEl.textContent = eff.filename;
        textarea.value = "Loading…";
        textarea.disabled = true;
        saveBtn.disabled = true;
        modal.dataset.effectName = eff.name;
        modal.style.display = "flex";
        try {
          const res = await csrfFetch(`/admin/effects/${encodeURIComponent(eff.name)}/content`);
          const data = await res.json().catch(() => ({}));
          if (res.ok) {
            textarea.value = data.content || "";
            textarea.disabled = false;
            saveBtn.disabled = false;
          } else {
            textarea.value = data.error || "Failed to load";
            showToast(data.error || "Failed to load content", false);
          }
        } catch (_) {
          textarea.value = "Network error";
          showToast("Network error", false);
        }
      });

      // ── Delete handler ────────────────────────────────────────────────────
      delBtn.addEventListener("click", async () => {
        if (!confirm(`Delete effect "${eff.label || eff.name}"?`)) return;
        try {
          const res = await csrfFetch("/admin/effects/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: eff.name }),
          });
          const d = await res.json().catch(() => ({}));
          if (res.ok) {
            showToast(d.message || "Effect deleted", true);
            await fetchEffectsAdmin();
          } else {
            showToast(d.error || "Delete failed", false);
          }
        } catch (_) {
          showToast("Network error", false);
        }
      });
    });
  }

  // --- Real-time WebSocket Listener ---
  // Receives push notifications from the server (e.g. blacklist_update).
  function initAdminWebSocket() {
    const wsUrl = (window.DANMU_CONFIG || {}).wsUrl;
    if (!wsUrl) return;

    function connect() {
      try {
        _adminWs = new WebSocket(wsUrl);

        _adminWs.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.type === "blacklist_update") {
              fetchBlacklist();
            } else if (data.type === "settings_changed") {
              fetchLatestSettings();
            }
          } catch (_) {
            // ignore non-JSON messages (heartbeat strings)
          }
        };

        _adminWs.onclose = () => {
          if (!_adminWsReconnectTimer) {
            _adminWsReconnectTimer = setTimeout(() => {
              _adminWsReconnectTimer = null;
              connect();
            }, 5000);
          }
        };

        _adminWs.onerror = () => {
          _adminWs.close();
        };
      } catch (e) {
        console.warn("[AdminWS] Failed to connect:", e);
      }
    }

    connect();
  }

  // Cleanup all background resources on page unload (prevents memory leaks)
  window.addEventListener("beforeunload", () => {
    if (_autoRefreshTimer) {
      clearInterval(_autoRefreshTimer);
      _autoRefreshTimer = null;
    }
    if (_adminWsReconnectTimer) {
      clearTimeout(_adminWsReconnectTimer);
      _adminWsReconnectTimer = null;
    }
    if (_adminWs) {
      _adminWs.onclose = null; // prevent reconnect attempt after explicit close
      _adminWs.close();
      _adminWs = null;
    }
  });

  initAdminWebSocket();
  init();
});
