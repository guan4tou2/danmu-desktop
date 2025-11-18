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

// Connection status management
let currentConnectionStatus = null;
let statusUpdateTimeout = null;
let statusHideTimeout = null;
let overlayActive = false;
let connectionFailureNotified = false;
let connectionSuccessNotified = false;

function getLocalizedText(key, fallbackEn = "", fallbackZh = "") {
  const localized = t(key);
  if (localized && localized !== key) {
    return localized;
  }
  if (typeof i18n !== "undefined" && i18n.currentLang) {
    if (i18n.currentLang.startsWith("zh") && fallbackZh) {
      return fallbackZh;
    }
  }
  return fallbackEn || fallbackZh || key;
}

// Update connection status display with debouncing
function updateConnectionStatus(status, text, shouldShow = true) {
  // 如果状态相同，不更新（避免重复更新）
  if (currentConnectionStatus === status && shouldShow) {
    return;
  }
  
  // 清除之前的隐藏定时器
  if (statusHideTimeout) {
    clearTimeout(statusHideTimeout);
    statusHideTimeout = null;
  }
  
  // 防抖：延迟更新状态，避免频繁变化
  if (statusUpdateTimeout) {
    clearTimeout(statusUpdateTimeout);
  }
  
  statusUpdateTimeout = setTimeout(() => {
    const statusContainer = document.getElementById("connection-status");
    const statusIndicator = document.getElementById("status-indicator");
    const statusText = document.getElementById("status-text");

    if (!statusContainer || !statusIndicator || !statusText) return;

    // 更新当前状态
    currentConnectionStatus = status;

    if (shouldShow) {
      statusContainer.classList.remove("hidden");
      statusText.textContent = text;

      const statusColors = {
        idle: { bg: "#475569", shadow: "none" },
        connecting: { bg: "#06b6d4", shadow: "0 0 10px rgba(6, 182, 212, 0.6)" },
        connected: { bg: "#10b981", shadow: "0 0 10px rgba(16, 185, 129, 0.6)" },
        disconnected: { bg: "#ef4444", shadow: "0 0 10px rgba(239, 68, 68, 0.6)" },
        "connection-failed": { bg: "#dc2626", shadow: "0 0 12px rgba(220, 38, 38, 0.7)" },
      };

      const color = statusColors[status] || statusColors.idle;
      statusIndicator.style.backgroundColor = color.bg;
      statusIndicator.style.boxShadow = color.shadow;
    } else {
      statusContainer.classList.add("hidden");
      currentConnectionStatus = null;
    }
    
    statusUpdateTimeout = null;
  }, 100); // 100ms 防抖延迟
}

// Hide connection status with delay
function hideConnectionStatus(delay = 2000) {
  if (statusHideTimeout) {
    clearTimeout(statusHideTimeout);
  }
  
  statusHideTimeout = setTimeout(() => {
    updateConnectionStatus(null, "", false);
    statusHideTimeout = null;
  }, delay);
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

// Save and load startup animation settings
function saveStartupAnimationSettings(enabled, type, customText) {
  localStorage.setItem(
    "danmu-startup-animation",
    JSON.stringify({ enabled, type, customText })
  );
}

function loadStartupAnimationSettings() {
  try {
    const saved = localStorage.getItem("danmu-startup-animation");
    return saved ? JSON.parse(saved) : { enabled: true, type: "link-start", customText: "" };
  } catch (e) {
    console.error("[loadStartupAnimationSettings] Error:", sanitizeLog(e.message));
    return { enabled: true, type: "link-start", customText: "" };
  }
}

/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// Track management for collision detection
window.danmuTracks = [];
window.danmuTrackSettings = {
  maxTracks: 10,
  collisionDetection: true,
};

// Update track settings
window.updateDanmuTrackSettings = function(maxTracks, collisionDetection) {
  window.danmuTrackSettings.maxTracks = maxTracks;
  window.danmuTrackSettings.collisionDetection = collisionDetection;
  console.log('[Track Settings] Updated:', window.danmuTrackSettings);
};

// Find available track with collision detection
window.findAvailableTrack = function(displayArea, danmuHeight, danmuWidth, speed) {
  const screenHeight = document.documentElement.clientHeight;
  const areaTopPixels = (displayArea.top / 100) * screenHeight;
  const areaHeightPixels = (displayArea.height / 100) * screenHeight;

  const { maxTracks, collisionDetection } = window.danmuTrackSettings;

  // Calculate track height
  const effectiveMaxTracks = maxTracks > 0 ? maxTracks : Math.floor(areaHeightPixels / danmuHeight);
  const trackHeight = areaHeightPixels / effectiveMaxTracks;

  if (!collisionDetection) {
    // Random track selection when collision detection is disabled
    const randomTrackIndex = Math.floor(Math.random() * effectiveMaxTracks);
    const top = areaTopPixels + randomTrackIndex * trackHeight + Math.random() * (trackHeight - danmuHeight);
    return { top, trackIndex: randomTrackIndex };
  }

  // Collision detection enabled - find available track
  const now = Date.now();
  const screenWidth = document.documentElement.clientWidth;

  // Calculate animation duration based on speed
  const maxTime = 20000;
  const minTime = 2000;
  const duration = maxTime - ((speed - 1) * (maxTime - minTime)) / 9;

  // Clean up expired tracks
  window.danmuTracks = window.danmuTracks.filter(track => track.endTime > now);

  // Try to find an available track
  for (let i = 0; i < effectiveMaxTracks; i++) {
    const trackTop = areaTopPixels + i * trackHeight;

    // Check if this track has any active danmu that would collide
    const hasCollision = window.danmuTracks.some(track => {
      if (track.trackIndex !== i) return false;

      // Calculate if there's enough space for the new danmu
      const timeToReachRight = (screenWidth / (screenWidth + track.width)) * track.duration;
      const remainingTime = track.endTime - now;

      // If the previous danmu hasn't moved far enough, there would be collision
      return remainingTime > (duration - timeToReachRight);
    });

    if (!hasCollision) {
      const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);

      // Record this track as occupied
      window.danmuTracks.push({
        trackIndex: i,
        startTime: now,
        endTime: now + duration,
        duration,
        width: danmuWidth,
      });

      return { top, trackIndex: i };
    }
  }

  // All tracks are occupied, use the oldest track
  const oldestTrack = window.danmuTracks.reduce((oldest, track) =>
    !oldest || track.endTime < oldest.endTime ? track : oldest
  , null);

  const trackIndex = oldestTrack ? oldestTrack.trackIndex : 0;
  const trackTop = areaTopPixels + trackIndex * trackHeight;
  const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);

  window.danmuTracks.push({
    trackIndex,
    startTime: now,
    endTime: now + duration,
    duration,
    width: danmuWidth,
  });

  return { top, trackIndex };
};

window.showdanmu = function (
  string,
  opacity = 75,
  color = "#ffffff",
  size = 50,
  speed = 7,
  fontInfo = { name: "NotoSansTC", url: null, type: "default" }, // Updated parameter
  textStyles = {
    textStroke: true,
    strokeWidth: 2,
    strokeColor: "#000000",
    textShadow: false,
    shadowBlur: 4,
  },
  displayArea = {
    top: 0, // Top position as percentage (0-80%)
    height: 100, // Height as percentage (20-100%)
  }
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

    // Apply text stroke
    if (textStyles.textStroke) {
      danmu.style.webkitTextStrokeWidth = `${textStyles.strokeWidth}px`;
      danmu.style.webkitTextStrokeColor = textStyles.strokeColor;
      danmu.style.textStrokeWidth = `${textStyles.strokeWidth}px`;
      danmu.style.textStrokeColor = textStyles.strokeColor;
      danmu.style.paintOrder = "stroke fill";
    }

    // Apply text shadow
    if (textStyles.textShadow) {
      const blur = textStyles.shadowBlur;
      danmu.style.textShadow = `0 0 ${blur}px rgba(0, 0, 0, 0.8), 0 0 ${blur * 2}px rgba(0, 0, 0, 0.6)`;
    }
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

    // Use track-based positioning with collision detection
    const trackPosition = window.findAvailableTrack(displayArea, Height + Padding, Width, speed);
    const top = trackPosition.top;

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

  // Get startup animation settings
  const startupAnimToggle = document.getElementById("startup-animation-toggle");
  const animTypeSelect = document.getElementById("animation-type-select");
  const customAnimText = document.getElementById("custom-animation-text");

  const startupAnimationSettings = {
    enabled: startupAnimToggle ? startupAnimToggle.checked : true,
    type: animTypeSelect ? animTypeSelect.value : "link-start",
    customText: customAnimText ? customAnimText.value : ""
  };

  // Save settings
  saveSettings(IP, PORT, displayIndex, enableSyncMultiDisplay);
  saveStartupAnimationSettings(
    startupAnimationSettings.enabled,
    startupAnimationSettings.type,
    startupAnimationSettings.customText
  );

  console.log(
    `[Renderer] Starting overlay with: IP=${sanitizeLog(
      IP
    )}, PORT=${sanitizeLog(
      PORT
    )}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}, StartupAnimation=${JSON.stringify(startupAnimationSettings)}`
  );

    const api = window.API;
  api.create(IP, PORT, displayIndex, enableSyncMultiDisplay, startupAnimationSettings);

  overlayActive = true;
  connectionFailureNotified = false;
  connectionSuccessNotified = false;

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

  overlayActive = false;
  connectionFailureNotified = false;
  connectionSuccessNotified = false;

  // Update button styles
  startButton.classList.remove("btn-connecting", "btn-connected");
  startButton.classList.add("btn-primary");
  stopButton.classList.remove("btn-active");
  stopButton.classList.add("btn-stopped");

  // Update connection status
  updateConnectionStatus("idle", t("statusIdle"));
  showToast(t("toastStopped"), "info");

  // Hide status after 2 seconds
  hideConnectionStatus(2000);

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

// Load startup animation settings
const startupAnimToggle = document.getElementById("startup-animation-toggle");
const animTypeSelect = document.getElementById("animation-type-select");
const customAnimText = document.getElementById("custom-animation-text");
const customAnimTextContainer = document.getElementById("custom-animation-text-container");
const startupAnimControls = document.getElementById("startup-animation-controls");

const savedAnimSettings = loadStartupAnimationSettings();
if (startupAnimToggle) {
  startupAnimToggle.checked = savedAnimSettings.enabled;
  if (startupAnimControls) {
    startupAnimControls.style.display = savedAnimSettings.enabled ? "block" : "none";
  }
}
if (animTypeSelect) {
  animTypeSelect.value = savedAnimSettings.type;
  if (customAnimTextContainer) {
    customAnimTextContainer.classList.toggle("hidden", savedAnimSettings.type !== "custom");
  }
}
if (customAnimText) {
  customAnimText.value = savedAnimSettings.customText || "";
}

// Startup animation toggle handler
if (startupAnimToggle) {
  startupAnimToggle.addEventListener("change", () => {
    const enabled = startupAnimToggle.checked;
    if (startupAnimControls) {
      startupAnimControls.style.display = enabled ? "block" : "none";
    }
    saveStartupAnimationSettings(
      enabled,
      animTypeSelect ? animTypeSelect.value : "link-start",
      customAnimText ? customAnimText.value : ""
    );
  });
}

// Animation type select handler
if (animTypeSelect) {
  animTypeSelect.addEventListener("change", () => {
    const type = animTypeSelect.value;
    if (customAnimTextContainer) {
      customAnimTextContainer.classList.toggle("hidden", type !== "custom");
    }
    saveStartupAnimationSettings(
      startupAnimToggle ? startupAnimToggle.checked : true,
      type,
      customAnimText ? customAnimText.value : ""
    );
  });
}

// Custom animation text handler
if (customAnimText) {
  customAnimText.addEventListener("input", () => {
    saveStartupAnimationSettings(
      startupAnimToggle ? startupAnimToggle.checked : true,
      animTypeSelect ? animTypeSelect.value : "link-start",
      customAnimText.value
    );
  });
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
const textStrokeToggle = document.getElementById("text-stroke-toggle");
const strokeControls = document.getElementById("stroke-controls");
const strokeWidth = document.getElementById("stroke-width");
const strokeWidthValue = document.getElementById("stroke-width-value");
const strokeColor = document.getElementById("stroke-color");
const textShadowToggle = document.getElementById("text-shadow-toggle");
const shadowControls = document.getElementById("shadow-controls");
const shadowBlur = document.getElementById("shadow-blur");
const shadowBlurValue = document.getElementById("shadow-blur-value");
const displayAreaTop = document.getElementById("display-area-top");
const displayAreaTopValue = document.getElementById("display-area-top-value");
const displayAreaHeight = document.getElementById("display-area-height");
const displayAreaHeightValue = document.getElementById("display-area-height-value");
const displayAreaIndicator = document.getElementById("display-area-indicator");
const maxTracks = document.getElementById("max-tracks");
const maxTracksValue = document.getElementById("max-tracks-value");
const collisionDetectionToggle = document.getElementById("collision-detection-toggle");
const batchTestButton = document.getElementById("batch-test-button");
const batchTestCount = document.getElementById("batch-test-count");

// Default danmu settings
let danmuSettings = {
  opacity: 100,
  speed: 5,
  size: 50,
  color: "#ffffff",
  textStroke: true,
  strokeWidth: 2,
  strokeColor: "#000000",
  textShadow: false,
  shadowBlur: 4,
  displayAreaTop: 0, // Top position as percentage (0-80%)
  displayAreaHeight: 100, // Height as percentage (20-100%)
  maxTracks: 10, // Maximum number of danmu tracks (0 = unlimited)
  collisionDetection: true, // Enable collision detection
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
      if (textStrokeToggle) textStrokeToggle.checked = danmuSettings.textStroke;
      if (strokeWidth) strokeWidth.value = danmuSettings.strokeWidth;
      if (strokeWidthValue) strokeWidthValue.textContent = `${danmuSettings.strokeWidth}px`;
      if (strokeColor) strokeColor.value = danmuSettings.strokeColor;
      if (textShadowToggle) textShadowToggle.checked = danmuSettings.textShadow;
      if (shadowBlur) shadowBlur.value = danmuSettings.shadowBlur;
      if (shadowBlurValue) shadowBlurValue.textContent = `${danmuSettings.shadowBlur}px`;
      if (displayAreaTop) displayAreaTop.value = danmuSettings.displayAreaTop;
      if (displayAreaTopValue) displayAreaTopValue.textContent = `${danmuSettings.displayAreaTop}%`;
      if (displayAreaHeight) displayAreaHeight.value = danmuSettings.displayAreaHeight;
      if (displayAreaHeightValue) displayAreaHeightValue.textContent = `${danmuSettings.displayAreaHeight}%`;
      if (maxTracks) maxTracks.value = danmuSettings.maxTracks;
      if (maxTracksValue) maxTracksValue.textContent = danmuSettings.maxTracks === 0 ? '無限制' : danmuSettings.maxTracks;
      if (collisionDetectionToggle) collisionDetectionToggle.checked = danmuSettings.collisionDetection;

      // Update visibility of controls
      if (strokeControls) strokeControls.classList.toggle("hidden", !danmuSettings.textStroke);
      if (shadowControls) shadowControls.classList.toggle("hidden", !danmuSettings.textShadow);

      // Update display area indicator
      updateDisplayAreaIndicator();

      // Update track settings in window
      if (window.updateDanmuTrackSettings) {
        window.updateDanmuTrackSettings(danmuSettings.maxTracks, danmuSettings.collisionDetection);
      }
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
    saveDanmuSettings();
  });
}

if (danmuSpeed) {
  danmuSpeed.addEventListener("input", (e) => {
    danmuSettings.speed = parseInt(e.target.value);
    if (speedValue) speedValue.textContent = danmuSettings.speed;
    saveDanmuSettings();
  });
}

if (danmuSize) {
  danmuSize.addEventListener("input", (e) => {
    danmuSettings.size = parseInt(e.target.value);
    if (sizeValue) sizeValue.textContent = `${danmuSettings.size}px`;
    saveDanmuSettings();
  });
}

if (danmuColor) {
  danmuColor.addEventListener("input", (e) => {
    danmuSettings.color = e.target.value;
    saveDanmuSettings();
  });
}

// Text stroke controls
if (textStrokeToggle) {
  textStrokeToggle.addEventListener("change", (e) => {
    danmuSettings.textStroke = e.target.checked;
    if (strokeControls) {
      strokeControls.classList.toggle("hidden", !e.target.checked);
    }
    saveDanmuSettings();
  });
}

if (strokeWidth) {
  strokeWidth.addEventListener("input", (e) => {
    danmuSettings.strokeWidth = parseInt(e.target.value);
    if (strokeWidthValue) strokeWidthValue.textContent = `${danmuSettings.strokeWidth}px`;
    saveDanmuSettings();
  });
}

if (strokeColor) {
  strokeColor.addEventListener("input", (e) => {
    danmuSettings.strokeColor = e.target.value;
    saveDanmuSettings();
  });
}

// Text shadow controls
if (textShadowToggle) {
  textShadowToggle.addEventListener("change", (e) => {
    danmuSettings.textShadow = e.target.checked;
    if (shadowControls) {
      shadowControls.classList.toggle("hidden", !e.target.checked);
    }
    saveDanmuSettings();
  });
}

if (shadowBlur) {
  shadowBlur.addEventListener("input", (e) => {
    danmuSettings.shadowBlur = parseInt(e.target.value);
    if (shadowBlurValue) shadowBlurValue.textContent = `${danmuSettings.shadowBlur}px`;
    saveDanmuSettings();
  });
}

// Display area controls
if (displayAreaTop) {
  displayAreaTop.addEventListener("input", (e) => {
    danmuSettings.displayAreaTop = parseInt(e.target.value);
    if (displayAreaTopValue) displayAreaTopValue.textContent = `${danmuSettings.displayAreaTop}%`;
    updateDisplayAreaIndicator();
    saveDanmuSettings();
  });
}

if (displayAreaHeight) {
  displayAreaHeight.addEventListener("input", (e) => {
    danmuSettings.displayAreaHeight = parseInt(e.target.value);
    if (displayAreaHeightValue) displayAreaHeightValue.textContent = `${danmuSettings.displayAreaHeight}%`;
    updateDisplayAreaIndicator();
    saveDanmuSettings();
  });
}

// Max tracks control
if (maxTracks) {
  maxTracks.addEventListener("input", (e) => {
    danmuSettings.maxTracks = parseInt(e.target.value);
    if (maxTracksValue) {
      maxTracksValue.textContent = danmuSettings.maxTracks === 0 ? (i18n.currentLang === 'zh' ? '無限制' : 'Unlimited') : danmuSettings.maxTracks;
    }
    if (window.updateDanmuTrackSettings) {
      window.updateDanmuTrackSettings(danmuSettings.maxTracks, danmuSettings.collisionDetection);
    }
    saveDanmuSettings();
  });
}

// Collision detection toggle
if (collisionDetectionToggle) {
  collisionDetectionToggle.addEventListener("change", (e) => {
    danmuSettings.collisionDetection = e.target.checked;
    if (window.updateDanmuTrackSettings) {
      window.updateDanmuTrackSettings(danmuSettings.maxTracks, danmuSettings.collisionDetection);
    }
    saveDanmuSettings();
  });
}

// Update display area visual indicator
function updateDisplayAreaIndicator() {
  if (displayAreaIndicator) {
    displayAreaIndicator.style.top = `${danmuSettings.displayAreaTop}%`;
    displayAreaIndicator.style.height = `${danmuSettings.displayAreaHeight}%`;
  }
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
      danmuSettings.speed,
      {
        textStroke: danmuSettings.textStroke,
        strokeWidth: danmuSettings.strokeWidth,
        strokeColor: danmuSettings.strokeColor,
        textShadow: danmuSettings.textShadow,
        shadowBlur: danmuSettings.shadowBlur,
      },
      {
        top: danmuSettings.displayAreaTop,
        height: danmuSettings.displayAreaHeight,
      }
    );

    showToast(t("previewSent") || "Preview danmu sent!", "success");
  });
}

// Batch test button
if (batchTestButton) {
  batchTestButton.addEventListener("click", () => {
    const api = window.API;
    if (!api || !api.sendTestDanmu) {
      showToast(
        t("errorOverlayNotActive") || "Please start the overlay first",
        "warning"
      );
      return;
    }

    const count = batchTestCount ? parseInt(batchTestCount.value) : 5;
    const testTexts = [
      "測試彈幕 Test 1",
      "這是第二條測試 Test 2",
      "彈幕軌道測試 Track Test 3",
      "碰撞檢測範例 Collision 4",
      "批量測試模式 Batch 5",
      "多軌道顯示測試 Multi-track 6",
      "彈幕間距測試 Spacing 7",
      "效能測試彈幕 Performance 8",
      "自動分配軌道 Auto-assign 9",
      "最終測試項目 Final Test 10",
    ];

    let sentCount = 0;
    const interval = setInterval(() => {
      if (sentCount >= count) {
        clearInterval(interval);
        showToast(
          t("batchTestComplete") || `Sent ${count} test danmu!`,
          "success"
        );
        return;
      }

      const text = testTexts[sentCount % testTexts.length];
      api.sendTestDanmu(
        text,
        danmuSettings.opacity,
        danmuSettings.color,
        danmuSettings.size,
        danmuSettings.speed,
        {
          textStroke: danmuSettings.textStroke,
          strokeWidth: danmuSettings.strokeWidth,
          strokeColor: danmuSettings.strokeColor,
          textShadow: danmuSettings.textShadow,
          shadowBlur: danmuSettings.shadowBlur,
        },
        {
          top: danmuSettings.displayAreaTop,
          height: danmuSettings.displayAreaHeight,
        }
      );

      sentCount++;
    }, 500); // Send one danmu every 500ms

    showToast(
      t("batchTestStarted") || `Sending ${count} test danmu...`,
      "info"
    );
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
      // 只在状态真正改变时才更新，避免重复更新
      if (currentConnectionStatus !== "connected") {
        overlayActive = true;
        connectionFailureNotified = false;
        // 确保启动按钮保持禁用状态
        startButton.disabled = true;
        startButton.setAttribute("aria-disabled", "true");
        startButton.setAttribute("aria-busy", "false");
        startButton.classList.remove("btn-connecting");
        startButton.classList.add("btn-connected");
        updateConnectionStatus("connected", t("statusConnected"));
      }
      if (!connectionSuccessNotified) {
        showToast(t("toastConnected"), "success");
        connectionSuccessNotified = true;
      }
    } else if (data.status === "disconnected") {
      // Connection lost (reconnection in progress)
      // 只在状态真正改变时才更新按钮和状态显示，避免频繁闪烁
      const wasConnected = currentConnectionStatus === "connected";
      if (!overlayActive) {
        return;
      }
      if (currentConnectionStatus !== "disconnected") {
        // 确保启动按钮保持禁用状态（重连中）
        startButton.disabled = true;
        startButton.setAttribute("aria-disabled", "true");
        startButton.classList.remove("btn-connected");
        startButton.classList.add("btn-connecting");
        updateConnectionStatus("disconnected", t("statusDisconnected"));
        // 只在从已连接状态变为断开时显示提示，避免频繁提示
        if (wasConnected) {
          showToast(t("toastReconnecting"), "warning");
        }
      }
      connectionSuccessNotified = false;
    } else if (data.status === "connection-failed") {
      if (connectionFailureNotified) {
        return;
      }
      connectionFailureNotified = true;
      overlayActive = false;
      connectionSuccessNotified = false;
      // Connection failed - restore button state
      startButton.disabled = false;
      startButton.setAttribute("aria-busy", "false");
      startButton.setAttribute("aria-disabled", "false");
      startButton.classList.remove("btn-connecting", "btn-connected");
      startButton.classList.add("btn-primary");
      
      stopButton.disabled = true;
      stopButton.setAttribute("aria-disabled", "true");
      stopButton.classList.remove("btn-active");
      stopButton.classList.add("btn-stopped");
      
      // Re-enable input fields
      ip.disabled = false;
      port.disabled = false;
      screenSelect.disabled = false;
      syncMultiDisplayCheckbox.disabled = false;
      
      // Update connection status
      const failureStatusText = getLocalizedText(
        "statusConnectionFailed",
        "Connection failed",
        "連線失敗"
      );
      const failureToastText = getLocalizedText(
        "toastConnectionFailed",
        "Unable to reach the server. Please verify settings.",
        "無法連線至伺服器，請檢查設定"
      );
      updateConnectionStatus("connection-failed", failureStatusText);
      showToast(failureToastText, "error");
      
      // Hide status after 3 seconds
      hideConnectionStatus(3000);
    } else if (data.status === "stopped") {
      // Overlay stopped - re-enable start button
      overlayActive = false;
      connectionFailureNotified = false;
      startButton.disabled = false;
      startButton.setAttribute("aria-busy", "false");
      startButton.setAttribute("aria-disabled", "false");
      startButton.classList.remove("btn-connecting", "btn-connected");
      startButton.classList.add("btn-primary");
      
      stopButton.disabled = true;
      stopButton.setAttribute("aria-disabled", "true");
      stopButton.classList.remove("btn-active");
      stopButton.classList.add("btn-stopped");
      
      // Re-enable input fields
      ip.disabled = false;
      port.disabled = false;
      screenSelect.disabled = false;
      syncMultiDisplayCheckbox.disabled = false;
      
      updateConnectionStatus("idle", t("statusStopped"));
    }
  });
}
