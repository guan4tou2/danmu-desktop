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

    // Effect UI
    effectButtons: document.getElementById("effectButtons"),
    effectParamsPanel: document.getElementById("effectParamsPanel"),

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
  // selectedEffects: { [name]: {params} } — 多選特效狀態
  let _effectDefs = [];         // 從 /effects API 載入的特效定義
  const selectedEffects = {};   // name -> {params}
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
      // Safely create an <img> element instead of injecting HTML
      elements.previewText.textContent = "";
      const img = document.createElement("img");
      img.src = text;
      img.className = "max-h-24 rounded-lg shadow-md";
      img.alt = "Danmu Preview";
      elements.previewText.appendChild(img);
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

  // Enter 送出，Shift+Enter 換行
  // e.isComposing: IME 選字過程中為 true，此時不觸發送出（避免中文選字誤送）
  elements.danmuText.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      elements.btnSend.click();
    }
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

  // ── 特效系統（.dme 動態載入）──────────────────────────────────────────────

  function _renderParamControl(effectName, paramKey, paramDef, currentVal) {
    const wrap = document.createElement("div");
    wrap.className = "flex items-center gap-2 text-xs text-slate-400";

    const lbl = document.createElement("span");
    lbl.className = "w-20 shrink-0";
    lbl.textContent = paramDef.label || paramKey;
    wrap.appendChild(lbl);

    if (paramDef.type === "select") {
      const sel = document.createElement("select");
      sel.className = "bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded px-2 py-1";
      sel.dataset.effectName = effectName;
      sel.dataset.paramKey = paramKey;
      (paramDef.options || []).forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.label;
        if (opt.value === (currentVal ?? paramDef.default)) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener("change", () => {
        if (selectedEffects[effectName]) selectedEffects[effectName][paramKey] = sel.value;
      });
      wrap.appendChild(sel);
    } else {
      const slider = document.createElement("input");
      slider.type = "range";
      slider.className = "flex-1";
      slider.min = paramDef.min ?? 0;
      slider.max = paramDef.max ?? 10;
      slider.step = paramDef.step ?? 0.1;
      slider.value = currentVal ?? paramDef.default;
      slider.dataset.effectName = effectName;
      slider.dataset.paramKey = paramKey;

      const val = document.createElement("span");
      val.className = "w-10 text-right text-slate-300";
      val.textContent = slider.value;

      slider.addEventListener("input", () => {
        val.textContent = slider.value;
        if (selectedEffects[effectName]) selectedEffects[effectName][paramKey] = Number(slider.value);
      });
      wrap.appendChild(slider);
      wrap.appendChild(val);
    }
    return wrap;
  }

  function _refreshParamsPanel() {
    if (!elements.effectParamsPanel) return;
    elements.effectParamsPanel.innerHTML = "";
    for (const [name, params] of Object.entries(selectedEffects)) {
      const def = _effectDefs.find((e) => e.name === name);
      if (!def || !def.params || Object.keys(def.params).length === 0) continue;

      const section = document.createElement("div");
      section.className = "bg-slate-800/60 rounded-lg p-2 space-y-1";

      const title = document.createElement("p");
      title.className = "text-xs font-medium text-sky-400 mb-1";
      title.textContent = def.label;
      section.appendChild(title);

      for (const [pkey, pdef] of Object.entries(def.params)) {
        section.appendChild(_renderParamControl(name, pkey, pdef, params[pkey]));
      }
      elements.effectParamsPanel.appendChild(section);
    }
  }

  function _buildEffectButtons(effects) {
    if (!elements.effectButtons) return;
    elements.effectButtons.innerHTML = "";

    effects.forEach((eff) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.effectName = eff.name;
      btn.className = "effect-btn px-3 py-1 rounded-full text-xs font-medium border border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors";
      btn.title = eff.description || "";
      btn.textContent = eff.label || eff.name;
      btn.addEventListener("click", () => {
        if (selectedEffects[eff.name]) {
          delete selectedEffects[eff.name];
          btn.style.backgroundColor = "";
          btn.style.color = "";
          btn.style.borderColor = "";
        } else {
          // 建立預設參數
          const defaults = {};
          for (const [k, v] of Object.entries(eff.params || {})) defaults[k] = v.default;
          selectedEffects[eff.name] = defaults;
          btn.style.backgroundColor = "#0369a1";
          btn.style.color = "#ffffff";
          btn.style.borderColor = "#0ea5e9";
        }
        _refreshParamsPanel();
      });
      elements.effectButtons.appendChild(btn);
    });

    if (effects.length === 0) {
      elements.effectButtons.innerHTML = '<span class="text-xs text-slate-500">無可用特效</span>';
    }
  }

  async function loadEffects() {
    try {
      const res = await fetch("/effects");
      if (!res.ok) return;
      const data = await res.json();
      _effectDefs = data.effects || [];
      _buildEffectButtons(_effectDefs);
    } catch (e) {
      console.warn("[Effects] Failed to load effects:", e.message);
      if (elements.effectButtons) {
        elements.effectButtons.innerHTML = '<span class="text-xs text-slate-500">載入失敗</span>';
      }
    }
  }

  loadEffects();

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
      effects: Object.entries(selectedEffects).map(([name, params]) => ({ name, params })),
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

      elements.danmuText.value = "";
      updateCharCount();
      updatePreview();

      if (response.ok) {
        showToast("Danmu Fired!", true);
      } else {
        let message = "Failed to send";
        try {
          const data = await response.json();
          message = data.error || message;
        } catch (_) {}
        showToast(message, false);
      }
    } catch (error) {
      console.error("Error:", error);
      elements.danmuText.value = "";
      updateCharCount();
      updatePreview();
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

          // Update Effects UI visibility
          applyEffectsVisibility(currentSettings);

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

  // --- Helper: Apply Effects section visibility based on settings ---
  function applyEffectsVisibility(settings) {
    const effectsEnabled = settings.Effects ? settings.Effects[0] !== false : true;
    const effectControl = document.getElementById("effectControl");
    if (effectControl) {
      effectControl.style.display = effectsEnabled ? "" : "none";
    }
    if (!effectsEnabled) {
      Object.keys(selectedEffects).forEach((k) => delete selectedEffects[k]);
      if (elements.effectParamsPanel) elements.effectParamsPanel.innerHTML = "";
    }
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

      // Apply Effects visibility
      applyEffectsVisibility(settings);

      // Initialize WebSocket for real-time updates
      connectWebSocket();

      // Sync preview with initial input values
      updatePreview();
    })
    .catch((err) => console.error("Failed to load settings:", err));
});
