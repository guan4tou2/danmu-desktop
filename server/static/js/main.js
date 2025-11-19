document.addEventListener("DOMContentLoaded", () => {
  // --- VANTA.js background initialization ---
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
      color: 0x3b82f6,
      backgroundColor: 0x000000,
      points: 12.0,
      maxDistance: 25.0,
      spacing: 18.0,
    });
  } catch (e) {
    console.warn("Vanta.js failed to initialize", e);
  }

  // --- Element selectors ---
  const elements = {
    danmuText: document.getElementById("danmuText"),
    charCount: document.getElementById("charCount"),
    previewText: document.getElementById("previewText"),
    btnSend: document.getElementById("btnSend"),

    // Controls
    colorControl: document.getElementById("colorControl"),
    colorInput: document.getElementById("ColorInput"),
    colorValue: document.getElementById("colorValue"),
    colorGradientPreview: document.getElementById("colorGradientPreview"),
    opacityControl: document.getElementById("opacityControl"),
    opacityRange: document.getElementById("OpacityRange"),
    opacityValue: document.getElementById("opacityValue"),
    fontSizeControl: document.getElementById("fontSizeControl"),
    sizeInput: document.getElementById("SizeInput"),
    sizeValue: document.getElementById("sizeValue"),
    speedControl: document.getElementById("speedControl"),
    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),

    // User font selection
    userFontSelectControl: document.getElementById("userFontSelectControl"),
    userFontSelect: document.getElementById("userFontSelect"),

    // Toast container
    toastContainer: document.getElementById("toast-container"),

    // Blacklist Warning Modal Elements
    blacklistWarningModal: document.getElementById("blacklistWarningModal"),
    blacklistWarningMessage: document.getElementById("blacklistWarningMessage"),
  };

  // --- Helper utilities ---
  const scheduleIdleTask = (cb, timeout = 500) => {
    if ("requestIdleCallback" in window) {
      return window.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(cb, timeout);
  };

  // --- State management ---
  let currentSettings = {};
  let ws = null;
  let autoDismissTimer = null;
  let fontRefreshTimer = null;
  const FONT_REFRESH_BUFFER_SECONDS = 60;
  let fontsCache = [];
  const FONT_CACHE_STORAGE_KEY = "danmu-fonts-cache";
  const clientFingerprint = getOrCreateFingerprint();

  function getOrCreateFingerprint() {
    try {
      const storage = window.localStorage;
      if (!storage) {
        return generateFallbackFingerprint();
      }
      let fp = storage.getItem("danmuFingerprint");
      if (!fp) {
        fp = generateFallbackFingerprint();
        storage.setItem("danmuFingerprint", fp);
      }
      return fp;
    } catch (error) {
      console.warn("Unable to access localStorage for fingerprint:", error);
      return generateFallbackFingerprint();
    }
  }

  function generateFallbackFingerprint() {
    if (window.crypto && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return (
      "fp-" +
      Math.random().toString(36).substring(2, 10) +
      Date.now().toString(36)
    );
  }

  function loadFontsFromCache() {
    try {
      if (!window.localStorage) return null;
      const raw = window.localStorage.getItem(FONT_CACHE_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed.expiresAt || parsed.expiresAt < Date.now()) {
        return null;
      }
      return parsed;
    } catch (error) {
      console.warn("Unable to parse font cache:", error);
      return null;
    }
  }

  function persistFontCache(fonts, tokenTTL) {
    try {
      if (!window.localStorage) return;
      const ttlSeconds = Math.max(tokenTTL || 0, FONT_REFRESH_BUFFER_SECONDS);
      window.localStorage.setItem(
        FONT_CACHE_STORAGE_KEY,
        JSON.stringify({
          fonts,
          tokenTTL,
          expiresAt: Date.now() + ttlSeconds * 1000,
        })
      );
    } catch (error) {
      console.warn("Unable to persist font cache:", error);
    }
  }

  // --- Functions ---

  function scheduleFontRefresh(ttlSeconds) {
    if (fontRefreshTimer) {
      clearTimeout(fontRefreshTimer);
    }
    if (!ttlSeconds || Number.isNaN(ttlSeconds)) {
      return;
    }
    const delay = Math.max(
      (ttlSeconds - FONT_REFRESH_BUFFER_SECONDS) * 1000,
      60 * 1000
    );
    fontRefreshTimer = setTimeout(() => {
      scheduleIdleTask(() => {
        const allowChoice =
          currentSettings &&
          currentSettings.FontFamily &&
          currentSettings.FontFamily[0];
        if (allowChoice) {
          populateUserFontDropdown(false, true);
        } else {
          refreshFontCache(true)
            .then(() => updatePreview())
            .catch((error) => {
              console.error("Error refreshing font cache:", error);
            });
        }
      });
    }, delay);
  }

  async function refreshFontCache(forceNetwork = false) {
    if (!forceNetwork) {
      const cached = loadFontsFromCache();
      if (cached) {
        fontsCache = cached.fonts || [];
        scheduleFontRefresh(cached.tokenTTL || 0);
        return fontsCache;
      }
    }
    const response = await fetch("/fonts", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch font list");
    }
    const payload = await response.json();
    fontsCache = payload.fonts || [];
    persistFontCache(fontsCache, payload.tokenTTL || 0);
    scheduleFontRefresh(payload.tokenTTL || 0);
    return fontsCache;
  }

  function ensureFontFaceLoaded(fontName, fontUrl) {
    if (!fontUrl) return;
    const safeName = fontName.replace(/\s+/g, "-");
    const styleId = `font-style-preview-${safeName}`;
    if (!document.getElementById(styleId)) {
      const fontFaceRule = `@font-face { font-family: "${fontName}"; src: url("${fontUrl}"); }`;
      const styleSheet = document.createElement("style");
      styleSheet.id = styleId;
      styleSheet.type = "text/css";
      styleSheet.innerText = fontFaceRule;
      document.head.appendChild(styleSheet);
    }
  }

  async function checkTextAgainstBlacklist(text) {
    try {
      const response = await fetch("/check_blacklist", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      if (response.ok) {
        const result = await response.json();
        return result.blocked;
      } else {
        console.error("Failed to check blacklist:", response.statusText);
        return false; // If check fails, allow sending
      }
    } catch (error) {
      console.error("Error checking blacklist:", error);
      return false; // If check fails, allow sending
    }
  }

  function showBlacklistWarningModal(message) {
    if (elements.blacklistWarningModal && elements.blacklistWarningMessage) {
      elements.blacklistWarningMessage.textContent = message;
      elements.blacklistWarningModal.style.display = "flex";

      // Clear any existing timer before setting a new one
      if (autoDismissTimer) {
        clearTimeout(autoDismissTimer);
      }
      autoDismissTimer = setTimeout(hideBlacklistWarningModal, 5000); // Auto-dismiss after 5 seconds

      setTimeout(() => {
        elements.blacklistWarningModal.classList.add("visible");
        elements.blacklistWarningModal.classList.add("flashing");
      }, 20);
    }
  }

  function hideBlacklistWarningModal() {
    if (autoDismissTimer) {
      // Clear the auto-dismiss timer if it's active
      clearTimeout(autoDismissTimer);
      autoDismissTimer = null;
    }
    if (elements.blacklistWarningModal) {
      elements.blacklistWarningModal.classList.remove("visible");
      elements.blacklistWarningModal.classList.remove("flashing");
      setTimeout(() => {
        elements.blacklistWarningModal.style.display = "none";
      }, 300);
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
    elements.toastContainer.appendChild(toastElement);

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

  // Check if URL is an image
  const isImageUrl = (url) =>
    url && url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i) != null;

  // Update character count
  const updateCharCount = () => {
    const count = elements.danmuText.value.length;
    elements.charCount.textContent = `${count}/100`;
    elements.charCount.classList.toggle("text-red-400", count >= 90);
  };

  // Update preview
  const updatePreview = () => {
    const text = elements.danmuText.value;
    const isImage = isImageUrl(text);

    if (isImage) {
      elements.previewText.innerHTML = `<img src="${text}" class="max-h-24 rounded-lg shadow-md" alt="Danmu Preview">`;
    } else {
      elements.previewText.textContent = text || "Preview";
    }

    // Apply styles
    if (elements.colorInput) {
      elements.previewText.style.color = elements.colorInput.value;
    }
    if (elements.sizeInput) {
      elements.previewText.style.fontSize = `${elements.sizeInput.value}px`;
    }
    if (elements.opacityRange) {
      elements.previewText.style.opacity = elements.opacityRange.value / 100;
    }

    // Apply font if selected
    if (
      currentSettings.FontFamily &&
      currentSettings.FontFamily[0] &&
      elements.userFontSelect &&
      elements.userFontSelect.value
    ) {
      const selectedFontName = elements.userFontSelect.value;
      const fontData = fontsCache.find((f) => f.name === selectedFontName);
      if (fontData) {
        if (fontData.url) {
          ensureFontFaceLoaded(fontData.name, fontData.url);
        }
        elements.previewText.style.fontFamily = `"${fontData.name}"`;
      } else {
        elements.previewText.style.fontFamily = "inherit";
      }
    } else {
      // Reset to default if no user choice allowed or selected
      elements.previewText.style.fontFamily = "inherit";
    }
  };

  async function populateUserFontDropdown(
    forceRefresh = false,
    background = false
  ) {
    if (!elements.userFontSelect) return;

    try {
      const fonts = await refreshFontCache(forceRefresh);
      const currentVal = elements.userFontSelect.value;

      // Clear existing options
      elements.userFontSelect.innerHTML = "";

      // Add default option
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Default Font";
      elements.userFontSelect.appendChild(defaultOption);

      // Populate fonts
      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font.name;
        option.textContent = font.name;
        elements.userFontSelect.appendChild(option);
      });

      // Restore selection if possible
      if (currentVal) {
        const exists = fonts.some((f) => f.name === currentVal);
        if (exists) {
          elements.userFontSelect.value = currentVal;
        }
      }

      if (!background) {
        console.log("User font dropdown populated with", fonts.length, "fonts");
      }
    } catch (error) {
      console.error("Failed to populate user font dropdown:", error);
      if (!background) {
        showToast("Failed to load fonts", false);
      }
    }
  }

  // --- Event Listeners ---

  elements.danmuText.addEventListener("input", () => {
    updateCharCount();
    updatePreview();
  });

  if (elements.colorInput) {
    elements.colorInput.addEventListener("input", (e) => {
      const color = e.target.value;
      if (elements.colorValue) {
        elements.colorValue.textContent = color.toUpperCase();
      }
      if (elements.colorGradientPreview) {
        elements.colorGradientPreview.style.backgroundImage = `linear-gradient(to right, ${color}, transparent)`;
        elements.colorGradientPreview.classList.remove("from-white"); // Remove Tailwind class if it interferes
      }
      updatePreview();
    });
  }

  if (elements.sizeInput) {
    elements.sizeInput.addEventListener("input", (e) => {
      if (elements.sizeValue) {
        elements.sizeValue.textContent = `${e.target.value}px`;
      }
      updatePreview();
    });
  }

  if (elements.opacityRange) {
    elements.opacityRange.addEventListener("input", (e) => {
      elements.opacityValue.textContent = `${e.target.value}%`;
      updatePreview();
    });
  }

  if (elements.speedRange) {
    elements.speedRange.addEventListener("input", (e) => {
      elements.speedValue.textContent = e.target.value;
    });
  }

  if (elements.userFontSelect) {
    elements.userFontSelect.addEventListener("change", updatePreview);
  }

  // Send Danmu
  elements.btnSend.addEventListener("click", async () => {
    const text = elements.danmuText.value.trim();
    if (!text) {
      showToast("Please enter some text", false);
      return;
    }

    // Check blacklist first
    const isBlocked = await checkTextAgainstBlacklist(text);
    if (isBlocked) {
      showBlacklistWarningModal("This content is blocked by the blacklist.");
      return;
    }

    const payload = {
      text: text,
      color: elements.colorInput ? elements.colorInput.value : null,
      size: elements.sizeInput ? parseInt(elements.sizeInput.value) : null,
      speed: elements.speedRange ? parseInt(elements.speedRange.value) : null,
      opacity: elements.opacityRange
        ? parseInt(elements.opacityRange.value)
        : null,
      font:
        elements.userFontSelect && elements.userFontSelect.value
          ? elements.userFontSelect.value
          : null,
      fingerprint: clientFingerprint,
    };

    try {
      const response = await fetch("/fire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showToast("Danmu Fired!", true);
        elements.danmuText.value = "";
        updateCharCount();
        updatePreview();
      } else {
        const data = await response.json();
        showToast(data.error || "Failed to send", false);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Network error", false);
    }
  });

  // --- WebSocket ---
  function connectWebSocket() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/`;

    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "settings_changed") {
          console.log("Settings updated:", data.settings);
          currentSettings = data.settings;

          // Update Font Selection UI
          if (currentSettings.FontFamily && currentSettings.FontFamily[0]) {
            if (elements.userFontSelectControl) {
              elements.userFontSelectControl.style.display = "block";
              populateUserFontDropdown();
            }
          } else {
            if (elements.userFontSelectControl) {
              elements.userFontSelectControl.style.display = "none";
            }
          }

          // Update other UI elements if needed (e.g., ranges)
          updatePreview();
        }
      } catch (e) {
        console.error("Error processing WebSocket message:", e);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected, retrying in 3s...");
      setTimeout(connectWebSocket, 3000);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };
  }

  // --- Initialization ---
  // Fetch initial settings to know if we should show font selector
  fetch("/get_settings")
    .then((res) => res.json())
    .then((settings) => {
      currentSettings = settings;

      // Handle Font Selection UI
      if (settings.FontFamily && settings.FontFamily[0]) {
        if (elements.userFontSelectControl) {
          elements.userFontSelectControl.style.display = "block";
          populateUserFontDropdown();
        }
      } else {
        if (elements.userFontSelectControl) {
          elements.userFontSelectControl.style.display = "none";
        }
        // Still refresh cache in background for preview purposes if needed, or just to have it
        refreshFontCache(true).catch(() => { });
      }

      // Initialize WebSocket for real-time updates
      connectWebSocket();

      // Sync preview with initial input values
      updatePreview();
    })
    .catch((err) => console.error("Failed to load settings:", err));
});
