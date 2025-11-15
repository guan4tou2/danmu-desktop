function sanitizeLog(input) {
  let strInput = String(input);
  strInput = strInput.replace(/\r\n|\r|\n/g, " ");
  strInput = strInput.replace(/\t/g, " ");
  return strInput;
}

// Toast notification system
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className =
    "toast flex items-center gap-3 p-4 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out opacity-0 translate-x-full";

  // Icon and color based on type
  const icons = {
    success: `<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>`,
    error: `<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>`,
    warning: `<svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
    </svg>`,
    info: `<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
  };

  const bgColors = {
    success: "rgba(16, 185, 129, 0.15)",
    error: "rgba(239, 68, 68, 0.15)",
    warning: "rgba(234, 179, 8, 0.15)",
    info: "rgba(59, 130, 246, 0.15)",
  };

  toast.style.backgroundColor = bgColors[type] || bgColors.info;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <div class="flex-1">
      <p class="text-sm font-medium text-slate-100">${message}</p>
    </div>
    <button class="text-slate-400 hover:text-slate-200 transition-colors" onclick="this.parentElement.remove()">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("opacity-0", "translate-x-full");
  });

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-x-full");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Get translation helper
function t(key) {
  return typeof i18n !== "undefined" ? i18n.t(key) : key;
}

// Update connection status display
function updateConnectionStatus(status, text) {
  const statusContainer = document.getElementById("connection-status");
  const statusIndicator = document.getElementById("status-indicator");
  const statusText = document.getElementById("status-text");

  if (!statusContainer || !statusIndicator || !statusText) return;

  statusContainer.classList.remove("hidden");
  statusText.textContent = text;

  const statusColors = {
    idle: { bg: "#475569", shadow: "none" },
    connecting: { bg: "#06b6d4", shadow: "0 0 10px rgba(6, 182, 212, 0.6)" },
    connected: { bg: "#10b981", shadow: "0 0 10px rgba(16, 185, 129, 0.6)" },
    disconnected: { bg: "#ef4444", shadow: "0 0 10px rgba(239, 68, 68, 0.6)" },
  };

  const color = statusColors[status] || statusColors.idle;
  statusIndicator.style.backgroundColor = color.bg;
  statusIndicator.style.boxShadow = color.shadow;
}

// Input validation
function validateIP(value) {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const domainRegex =
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
  return ipRegex.test(value) || domainRegex.test(value);
}

function validatePort(value) {
  const portRegex = /^\d{1,5}$/;
  if (!portRegex.test(value)) return false;
  const port = parseInt(value);
  return port >= 1 && port <= 65535;
}

// Save and load settings from localStorage
function saveSettings(host, port, displayIndex, syncMultiDisplay) {
  localStorage.setItem(
    "danmu-settings",
    JSON.stringify({ host, port, displayIndex, syncMultiDisplay })
  );
}

function loadSettings() {
  try {
    const saved = localStorage.getItem("danmu-settings");
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.error("[loadSettings] Error:", sanitizeLog(e.message));
    return null;
  }
}

/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
window.showdanmu = function (
  string,
  opacity = 75,
  color = "#ffffff",
  size = 50,
  speed = 7,
  fontInfo = { name: "NotoSansTC", url: null, type: "default" } // Updated parameter
) {
  console.log("[showdanmu] Received:", {
    string: sanitizeLog(string),
    opacity,
    color: sanitizeLog(color),
    size,
    speed,
    fontInfo,
  });
  var parentElement = document.getElementById("danmubody");
  var imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i;
  // Add a check for http/https protocols
  var protocolCheck = /^(http:|https:)/i;
  if (imgs.test(string) && protocolCheck.test(string)) {
    // Added protocolCheck
    var danmu = document.createElement("img");
    danmu.setAttribute("src", string);
    danmu.width = size * 2;
  } else if (imgs.test(string) && !protocolCheck.test(string)) {
    // Handle invalid protocol for an image URL by treating it as text
    console.warn(
      "[showdanmu] Invalid protocol for image URL:",
      sanitizeLog(string),
      "Displaying as text."
    );
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = "Invalid image URL: " + string; // Display the problematic string as text
    danmu.setAttribute("data-stroke", "Invalid image URL: " + string);
    danmu.style.fontSize = `${size}px`;
    // Font family will be applied after potential dynamic loading
    danmu.style.color = "red"; // Indicate an error
    // Ensure parentElement is defined before appending
    if (parentElement) {
      parentElement.appendChild(danmu);
    } else {
      console.error(
        "[showdanmu] parentElement is null, cannot append error message for invalid image URL."
      );
    }
  } else {
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-stroke", string);
    danmu.style.fontSize = `${size}px`;
    // Font family will be applied after potential dynamic loading
    danmu.style.color = color;
  }

  // Function to apply font and then append and animate
  const applyFontAndAnimate = async () => {
    let effectiveFontName = fontInfo.name || "NotoSansTC"; // Fallback to default if name is missing

    if (fontInfo.url && fontInfo.type === "uploaded") {
      const styleId = `font-style-${effectiveFontName.replace(/\s+/g, "-")}`;
      if (!document.getElementById(styleId)) {
        try {
          console.log(
            `[showdanmu] Loading font: ${effectiveFontName} from ${fontInfo.url}`
          );
          const fontFace = `@font-face { font-family: "${effectiveFontName}"; src: url("${fontInfo.url}"); }`;
          const styleSheet = document.createElement("style");
          styleSheet.id = styleId;
          styleSheet.type = "text/css";
          styleSheet.innerText = fontFace;
          document.head.appendChild(styleSheet);
          await document.fonts.load(`1em "${effectiveFontName}"`);
          console.log(`[showdanmu] Font loaded: ${effectiveFontName}`);
        } catch (e) {
          console.error(
            `[showdanmu] Error loading font ${effectiveFontName}:`,
            sanitizeLog(e.message)
          );
          effectiveFontName = "NotoSansTC"; // Fallback to default on error
        }
      }
    }
    danmu.style.fontFamily = effectiveFontName;

    parentElement.appendChild(danmu);
    console.log(
      "[showdanmu] Danmu element appended with font:",
      effectiveFontName,
      danmu
    );

    // Animation logic (moved inside this function)
    const Height = parseFloat(getComputedStyle(danmu).height);
    const Width = parseFloat(getComputedStyle(danmu).width);
    const Padding = parseFloat(getComputedStyle(danmu).padding);
    let top = Math.abs(
      Math.random() * document.documentElement.clientHeight - (Height + Padding)
    );
    danmu.style.top = `${top}px`;
    danmu.style.opacity = opacity * 0.01;

    // Calculate animation duration
    // Speed range: 1 (slowest) to 10 (fastest)
    let currentSpeed = Number(speed);
    if (isNaN(currentSpeed)) {
      console.warn(
        "[showdanmu] Invalid speed received, defaulting to 5:",
        sanitizeLog(speed)
      );
      currentSpeed = 5;
    }

    // Clamp speed to the 1-10 range
    currentSpeed = Math.max(1, Math.min(10, currentSpeed));

    const maxTime = 20000; // Max duration (slowest) in ms (for speed 1)
    const minTime = 2000; // Min duration (fastest) in ms (for speed 10)

    // Linear interpolation: duration = maxTime - (speed - 1) * (maxTime - minTime) / (10 - 1)
    // (10 - 1) is the range of speed values (9 steps)
    let duration = maxTime - ((currentSpeed - 1) * (maxTime - minTime)) / 9;

    // Ensure duration is within minTime and maxTime bounds, even with floating point issues.
    duration = Math.max(minTime, Math.min(maxTime, duration));

    console.log(
      "[showdanmu] Sanitized speed:",
      currentSpeed,
      "Calculated duration:",
      duration
    ); // No sensitive strings

    console.log("[showdanmu] Animation parameters:", { Width, duration, top }); // These are numbers
    try {
      danmu.animate(
        [
          { transform: "translateX(100vw)" },
          { transform: `translateX(-${Width}px)` },
        ],
        {
          duration: duration,
          easing: "linear",
        }
      ).onfinish = () => {
        // danmu object itself might be complex, but its direct properties logged here are not user strings.
        console.log("[showdanmu] Animation finished, danmu removed:", danmu);
        danmu.remove();
      };
    } catch (e) {
      console.error("[showdanmu] Animation error:", sanitizeLog(e.message));
      // Ensure danmu is removed even if animation fails to start
      if (danmu.parentElement) {
        danmu.remove();
      }
    }
  };

  // Call the function to apply font and start animation
  applyFontAndAnimate().catch((e) => {
    console.error(
      "[showdanmu] Error in applyFontAndAnimate:",
      sanitizeLog(e.message)
    );
    // Fallback: try to append and animate with default font if something went wrong
    if (danmu && !danmu.parentElement && parentElement) {
      danmu.style.fontFamily = "NotoSansTC"; // Default font
      parentElement.appendChild(danmu);
      // Simplified animation call or let it be handled by the next general error
    }
  });
};

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const ip = document.getElementById("host-input");
const port = document.getElementById("port-input");
const screenSelect = document.getElementById("screen-select");
const syncMultiDisplayCheckbox = document.getElementById(
  "sync-multi-display-checkbox"
);

startButton.addEventListener("click", () => {
  const hostValue = ip.value.trim();
  const portValue = port.value.trim();

  // Validate inputs
  if (!hostValue) {
    showToast(t("errorEmptyHost"), "error");
    ip.classList.add("input-invalid");
    return;
  }

  if (!validateIP(hostValue)) {
    showToast(t("errorInvalidHost"), "error");
    ip.classList.add("input-invalid");
    return;
  }

  if (!portValue) {
    showToast(t("errorEmptyPort"), "error");
    port.classList.add("input-invalid");
    return;
  }

  if (!validatePort(portValue)) {
    showToast(t("errorInvalidPort"), "error");
    port.classList.add("input-invalid");
    return;
  }

  // All validation passed
  const IP = hostValue;
  const PORT = portValue;
  const displayIndex = parseInt(screenSelect.value);
  const enableSyncMultiDisplay = syncMultiDisplayCheckbox.checked;

  // Save settings
  saveSettings(IP, PORT, displayIndex, enableSyncMultiDisplay);

  console.log(
    `[Renderer] Starting overlay with: IP=${sanitizeLog(
      IP
    )}, PORT=${sanitizeLog(
      PORT
    )}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}`
  );

  const api = window.API;
  api.create(IP, PORT, displayIndex, enableSyncMultiDisplay);

  // Update UI
  startButton.disabled = true;
  startButton.setAttribute("aria-busy", "true");
  startButton.setAttribute("aria-disabled", "true");

  stopButton.disabled = false;
  stopButton.setAttribute("aria-disabled", "false");

  ip.disabled = true;
  port.disabled = true;
  screenSelect.disabled = true;
  syncMultiDisplayCheckbox.disabled = true;

  // Update button styles
  startButton.classList.remove("btn-primary", "btn-connected");
  startButton.classList.add("btn-connecting");
  stopButton.classList.remove("btn-stopped");
  stopButton.classList.add("btn-active");

  // Update connection status
  updateConnectionStatus("connecting", t("statusConnecting"));
  showToast(t("toastStarting"), "info");

  console.log(
    `[Renderer] UI Disabled: screenSelect=${screenSelect.disabled}, syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`
  );
});

stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  startButton.setAttribute("aria-busy", "false");
  startButton.setAttribute("aria-disabled", "false");

  stopButton.disabled = true;
  stopButton.setAttribute("aria-disabled", "true");

  ip.disabled = false;
  port.disabled = false;
  syncMultiDisplayCheckbox.disabled = false;
  syncMultiDisplayCheckbox.dispatchEvent(new Event("change"));

  // Update button styles
  startButton.classList.remove("btn-connecting", "btn-connected");
  startButton.classList.add("btn-primary");
  stopButton.classList.remove("btn-active");
  stopButton.classList.add("btn-stopped");

  // Update connection status
  updateConnectionStatus("idle", t("statusIdle"));
  showToast(t("toastStopped"), "info");

  // Hide status after 2 seconds
  setTimeout(() => {
    const statusContainer = document.getElementById("connection-status");
    if (statusContainer) statusContainer.classList.add("hidden");
  }, 2000);

  console.log(
    `[Renderer] Overlay stopped. UI Enabled: syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`
  );
  const api = window.API;
  api.close();
});

syncMultiDisplayCheckbox.addEventListener("change", () => {
  if (syncMultiDisplayCheckbox.checked) {
    screenSelect.disabled = true;
    // Logging boolean value, no sanitization needed.
    console.log(
      `[Renderer] Sync checkbox CHECKED: screenSelect.disabled=${screenSelect.disabled}`
    );
  } else {
    // Only enable screenSelect if the overlay is not active (i.e., startButton is enabled)
    if (startButton.disabled === false) {
      screenSelect.disabled = false;
    }
    // Logging boolean values, no sanitization needed.
    console.log(
      `[Renderer] Sync checkbox UNCHECKED: screenSelect.disabled=${screenSelect.disabled} (startButton.disabled=${startButton.disabled})`
    );
  }
});

// Real-time input validation
ip.addEventListener("input", () => {
  ip.classList.remove("input-valid", "input-invalid");
  if (ip.value.trim() && validateIP(ip.value.trim())) {
    ip.classList.add("input-valid");
  } else if (ip.value.trim()) {
    ip.classList.add("input-invalid");
  }
});

port.addEventListener("input", () => {
  port.classList.remove("input-valid", "input-invalid");
  if (port.value.trim() && validatePort(port.value.trim())) {
    port.classList.add("input-valid");
  } else if (port.value.trim()) {
    port.classList.add("input-invalid");
  }
});

// Load saved settings on startup
const savedSettings = loadSettings();
if (savedSettings) {
  ip.value = savedSettings.host || "";
  port.value = savedSettings.port || "";
  if (savedSettings.displayIndex !== undefined) {
    screenSelect.value = savedSettings.displayIndex;
  }
  if (savedSettings.syncMultiDisplay !== undefined) {
    syncMultiDisplayCheckbox.checked = savedSettings.syncMultiDisplay;
  }
  // Trigger validation
  ip.dispatchEvent(new Event("input"));
  port.dispatchEvent(new Event("input"));
  showToast(t("toastSettingsLoaded"), "info");
}

// Initial state setup
if (syncMultiDisplayCheckbox.checked) {
  screenSelect.disabled = true;
}
console.log(
  `[Renderer] Initial UI state: screenSelect.disabled=${screenSelect.disabled}, syncMultiDisplayCheckbox.checked=${syncMultiDisplayCheckbox.checked}`
);

// Danmu Preview & Settings Management
const previewButton = document.getElementById("preview-button");
const previewText = document.getElementById("preview-text");
const overlayOpacity = document.getElementById("overlay-opacity");
const opacityValue = document.getElementById("opacity-value");
const danmuSpeed = document.getElementById("danmu-speed");
const speedValue = document.getElementById("speed-value");
const danmuSize = document.getElementById("danmu-size");
const sizeValue = document.getElementById("size-value");
const danmuColor = document.getElementById("danmu-color");
const applySettingsButton = document.getElementById("apply-settings-button");

// Default danmu settings
let danmuSettings = {
  opacity: 100,
  speed: 5,
  size: 50,
  color: "#ffffff",
};

// Load saved danmu settings
function loadDanmuSettings() {
  try {
    const saved = localStorage.getItem("danmu-display-settings");
    if (saved) {
      danmuSettings = { ...danmuSettings, ...JSON.parse(saved) };
      // Update UI
      if (overlayOpacity) overlayOpacity.value = danmuSettings.opacity;
      if (opacityValue) opacityValue.textContent = `${danmuSettings.opacity}%`;
      if (danmuSpeed) danmuSpeed.value = danmuSettings.speed;
      if (speedValue) speedValue.textContent = danmuSettings.speed;
      if (danmuSize) danmuSize.value = danmuSettings.size;
      if (sizeValue) sizeValue.textContent = `${danmuSettings.size}px`;
      if (danmuColor) danmuColor.value = danmuSettings.color;
    }
  } catch (e) {
    console.error("[loadDanmuSettings] Error:", sanitizeLog(e.message));
  }
}

// Save danmu settings
function saveDanmuSettings() {
  localStorage.setItem("danmu-display-settings", JSON.stringify(danmuSettings));
}

// Update slider values in real-time
if (overlayOpacity) {
  overlayOpacity.addEventListener("input", (e) => {
    danmuSettings.opacity = parseInt(e.target.value);
    if (opacityValue) opacityValue.textContent = `${danmuSettings.opacity}%`;
  });
}

if (danmuSpeed) {
  danmuSpeed.addEventListener("input", (e) => {
    danmuSettings.speed = parseInt(e.target.value);
    if (speedValue) speedValue.textContent = danmuSettings.speed;
  });
}

if (danmuSize) {
  danmuSize.addEventListener("input", (e) => {
    danmuSettings.size = parseInt(e.target.value);
    if (sizeValue) sizeValue.textContent = `${danmuSettings.size}px`;
  });
}

if (danmuColor) {
  danmuColor.addEventListener("input", (e) => {
    danmuSettings.color = e.target.value;
  });
}

// Preview danmu button
if (previewButton && previewText) {
  previewButton.addEventListener("click", () => {
    const text = previewText.value.trim();
    if (!text) {
      showToast(t("errorEmptyPreview") || "Please enter preview text", "error");
      return;
    }

    // Check if overlay is active
    const api = window.API;
    if (!api || !api.sendTestDanmu) {
      showToast(
        t("errorOverlayNotActive") || "Please start the overlay first",
        "warning"
      );
      return;
    }

    // Send test danmu with current settings
    api.sendTestDanmu(
      text,
      danmuSettings.opacity,
      danmuSettings.color,
      danmuSettings.size,
      danmuSettings.speed
    );

    showToast(t("previewSent") || "Preview danmu sent!", "success");
  });
}

// Apply settings to overlay
if (applySettingsButton) {
  applySettingsButton.addEventListener("click", () => {
    const api = window.API;
    if (!api || !api.updateOverlaySettings) {
      showToast(
        t("errorOverlayNotActive") || "Please start the overlay first",
        "warning"
      );
      return;
    }

    // Save settings
    saveDanmuSettings();

    // Apply to overlay window
    api.updateOverlaySettings(danmuSettings);

    showToast(t("settingsApplied") || "Settings applied to overlay", "success");
  });
}

// Load settings on startup
loadDanmuSettings();

// Listen for connection status updates
if (window.API && typeof window.API.onConnectionStatus === "function") {
  window.API.onConnectionStatus((data) => {
    console.log("[Renderer] Connection status update:", data);
    if (data.status === "connected") {
      // Connection successful
      startButton.classList.remove("btn-connecting");
      startButton.classList.add("btn-connected");
      startButton.setAttribute("aria-busy", "false");
      updateConnectionStatus("connected", t("statusConnected"));
      showToast(t("toastConnected"), "success");
    } else if (data.status === "disconnected") {
      // Connection lost
      startButton.classList.remove("btn-connected");
      startButton.classList.add("btn-connecting");
      updateConnectionStatus("disconnected", t("statusDisconnected"));
      showToast(t("toastReconnecting"), "warning");
    } else if (data.status === "stopped") {
      // Overlay stopped
      startButton.classList.remove("btn-connecting", "btn-connected");
      startButton.classList.add("btn-primary");
      stopButton.classList.remove("btn-active");
      stopButton.classList.add("btn-stopped");
      updateConnectionStatus("idle", t("statusStopped"));
    }
  });
}
