document.addEventListener("DOMContentLoaded", () => {
  // Viewer v2 background is a static dark navy gradient (see viewer-v2.css).
  // VANTA.NET animation was removed to match the handoff design — the viewer
  // page is a calm launcher, not a screensaver.

  // --- Element selectors ---
  const elements = {
    danmuText: document.getElementById("danmuText"),
    charCount: document.getElementById("charCount"),
    previewText: document.getElementById("previewText"),
    btnSend: document.getElementById("btnSend"),
    btnSendText: document.getElementById("btnSendText"),
    btnSendIcon: document.getElementById("btnSendIcon"),
    btnSendSpinner: document.getElementById("btnSendSpinner"),

    // Controls (consistent camelCase IDs)
    colorControl: document.getElementById("colorControl"),
    colorInput: document.getElementById("colorInput"),
    colorValue: document.getElementById("colorValue"),
    colorGradientPreview: document.getElementById("colorGradientPreview"),
    opacityControl: document.getElementById("opacityControl"),
    opacityRange: document.getElementById("opacityRange"),
    opacityValue: document.getElementById("opacityValue"),
    fontSizeControl: document.getElementById("fontSizeControl"),
    sizeInput: document.getElementById("sizeInput"),
    sizeValue: document.getElementById("sizeValue"),
    speedControl: document.getElementById("speedControl"),
    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),

    // User font selection
    userFontSelectControl: document.getElementById("userFontSelectControl"),
    userFontSelect: document.getElementById("userFontSelect"),

    // Effect UI
    effectButtons: document.getElementById("effectButtons"),
    // 2026-05-17 design v3-r10: per-effect parameter cards re-introduced.
    // effectsCount / effectsTotal stay null (no "X / 8" counter — chip
    // pressed-state already conveys selection).
    effectParamsPanel: document.getElementById("effectParamsPanel"),
    effectsCount: null,
    effectsTotal: null,

    // 2026-05-17 design v3-r10: inline sendbar status banner (replaces
    // generic toast for sent / blocked + 3s post-fire cooldown).
    sendStatusBanner: document.getElementById("sendStatusBanner"),
    sendbarHint: null, // resolved at runtime after i18n boots

    // Toast container
    toastContainer: document.getElementById("toast-container"),

    // Blacklist Warning Modal Elements
    blacklistWarningModal: document.getElementById("blacklistWarningModal"),
    blacklistWarningMessage: document.getElementById("blacklistWarningMessage"),
    blacklistWarningOkBtn: document.getElementById("blacklistWarningOkBtn"),

    // Connection status
    connectionStatus: document.getElementById("connectionStatus"),
    connectionLabel: document.getElementById("connectionLabel"),
    overlayStatus: document.getElementById("overlayStatus"),
    overlayLabel: document.getElementById("overlayLabel"),

    // Send bar pill — border turns cyan when text is present
    sendbarPill: document.getElementById("sendbarPill"),
    sendbar: document.querySelector(".viewer-sendbar"),
    sendbarStatusRow: document.getElementById("sendbarStatusRow"),

    // Viewer tabs + poll pane
    viewerTabButtons: Array.from(document.querySelectorAll("[data-viewer-tab]")),
    viewerFirePane: document.getElementById("viewerFirePane"),
    viewerPollPane: document.getElementById("viewerPollPane"),
    pollStateLabel: document.querySelector("[data-vpoll-state-label]"),
    pollQuestion: document.querySelector("[data-vpoll-question]"),
    pollMeta: document.querySelector("[data-vpoll-meta]"),
    pollOptions: document.querySelector("[data-vpoll-options]"),
  };

  function _resolveViewerPollEnabled() {
    // Prototype baseline (Danmu Redesign.html) defaults pollEnabled=false.
    // Keep viewer poll closed unless explicitly enabled.
    try {
      const cfg = window.DANMU_CONFIG?.viewer?.pollEnabled;
      if (cfg === true || cfg === "true" || cfg === 1 || cfg === "1") return true;
    } catch (_) {
      /* ignore */
    }
    try {
      const q = new URLSearchParams(window.location.search).get("poll");
      if (!q) return false;
      return q === "1" || q.toLowerCase() === "true" || q.toLowerCase() === "on";
    } catch (_) {
      return false;
    }
  }

  const VIEWER_POLL_ENABLED = _resolveViewerPollEnabled();

  function _applyViewerPollGate() {
    if (VIEWER_POLL_ENABLED) return;
    const pollTabBtn = document.querySelector('[data-viewer-tab="poll"]');
    if (pollTabBtn) pollTabBtn.remove();
    if (elements.viewerPollPane) {
      elements.viewerPollPane.remove();
      elements.viewerPollPane = null;
    }
    const tabbar = document.querySelector(".viewer-tabbar");
    elements.viewerTabButtons = Array.from(document.querySelectorAll("[data-viewer-tab]"));
    if (tabbar && elements.viewerTabButtons.length <= 1) {
      tabbar.setAttribute("hidden", "");
    }
  }

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
  // Design v3-r10 viewer-send state. Declared up-front so `setSendLoading`,
  // `_refreshSendButtonGate`, and the early input listener (which fires
  // before script parsing reaches the cooldown/banner section) can read
  // them without hitting a TDZ ReferenceError.
  let _overlayOnline = true; // optimistic — flips false after first poll says 0
  let _cooldownEnd = 0;
  let _cooldownTimer = null;
  let _bannerTimer = null;
  let _burstTimer = null;
  // selectedEffects: { [name]: {params} } — multi-select effect state
  let _effectDefs = [];         // Effect definitions loaded from /effects API
  const selectedEffects = {};   // name -> {params}
  let autoDismissTimer = null;
  let fontRefreshTimer = null;
  let blacklistModalRestoreFocusEl = null;
  const FONT_REFRESH_BUFFER_SECONDS = 60;
  let fontsCache = [];
  let emojiCache = []; // [{name, url, filename}] — populated by /emojis fetch
  let _viewerMode = "fire";
  let _viewerPollState = {
    state: "idle",
    question: "",
    options: [],
    totalVotes: 0,
    // Multi-Q metadata (design v4 brief P1 #1, 2026-05-18).
    questionImage: null,
    questionDurationS: null,
    currentIndex: -1,
    questionCount: 0,
    mode: "manual",
  };
  const FONT_CACHE_STORAGE_KEY = "danmu-fonts-cache";
  const clientFingerprint = getOrCreateFingerprint();

  function getDefaultFontName() {
    const configured = currentSettings && currentSettings.FontFamily && currentSettings.FontFamily[3];
    return configured ? String(configured) : "NotoSansTC";
  }

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

  function escapeCSSString(str) {
    return str.replace(/[\\"'();\n\r]/g, "\\$&");
  }

  function ensureFontFaceLoaded(fontName, fontUrl) {
    if (!fontUrl) return;
    const safeName = fontName.replace(/\s+/g, "-");
    const styleId = `font-style-preview-${safeName}`;
    if (!document.getElementById(styleId)) {
      const escapedFontName = escapeCSSString(fontName);
      const escapedFontUrl = escapeCSSString(fontUrl);
      const fontFaceRule = `@font-face { font-family: "${escapedFontName}"; src: url("${escapedFontUrl}"); }`;
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
        return false;
      }
    } catch (error) {
      console.error("Error checking blacklist:", error);
      return false;
    }
  }

  function showBlacklistWarningModal(message) {
    if (elements.blacklistWarningModal && elements.blacklistWarningMessage) {
      blacklistModalRestoreFocusEl =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      elements.blacklistWarningMessage.textContent = message;
      elements.blacklistWarningModal.style.display = "flex";
      elements.blacklistWarningModal.setAttribute("aria-modal", "true");

      if (autoDismissTimer) {
        clearTimeout(autoDismissTimer);
      }
      autoDismissTimer = setTimeout(hideBlacklistWarningModal, 5000);

      setTimeout(() => {
        elements.blacklistWarningModal.classList.add("visible");
        elements.blacklistWarningModal.classList.add("flashing");
        const okBtn = elements.blacklistWarningOkBtn;
        if (okBtn) okBtn.focus();
      }, 20);
    }
  }

  function getBlacklistModalFocusableElements() {
    if (!elements.blacklistWarningModal) return [];
    return Array.from(
      elements.blacklistWarningModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true"
    );
  }

  function handleBlacklistModalKeydown(event) {
    if (!elements.blacklistWarningModal) return;
    if (event.key === "Escape") {
      event.preventDefault();
      hideBlacklistWarningModal();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = getBlacklistModalFocusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function hideBlacklistWarningModal() {
    if (autoDismissTimer) {
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
    if (blacklistModalRestoreFocusEl) {
      blacklistModalRestoreFocusEl.focus();
      blacklistModalRestoreFocusEl = null;
    }
  }

  // Bind blacklist modal OK button via addEventListener (no inline onclick)
  if (elements.blacklistWarningOkBtn) {
    elements.blacklistWarningOkBtn.addEventListener("click", hideBlacklistWarningModal);
  }
  if (elements.blacklistWarningModal) {
    elements.blacklistWarningModal.addEventListener(
      "keydown",
      handleBlacklistModalKeydown
    );
  }

  // Check if URL is an image
  const parseSafeImageUrl = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url, window.location.origin);
      if (!["http:", "https:"].includes(parsed.protocol)) return null;
      if (!/\.(jpeg|jpg|gif|png|webp|svg)$/i.test(parsed.pathname)) return null;
      return parsed.href;
    } catch (error) {
      return null;
    }
  };

  const isImageUrl = (url) => parseSafeImageUrl(url) != null;

  // Update character count
  const updateCharCount = () => {
    const count = elements.danmuText.value.length;
    elements.charCount.textContent = `${count}/100`;
    elements.charCount.classList.toggle("is-near", count >= 90);
  };

  // Update preview
  const updatePreview = () => {
    const text = elements.danmuText.value;
    const safeImageSrc = parseSafeImageUrl(text);
    const isImage = safeImageSrc != null;

    if (isImage) {
      elements.previewText.textContent = "";
      const img = document.createElement("img");
      img.src = safeImageSrc;
      img.className = "max-h-24 rounded-lg shadow-md";
      img.alt = "Danmu Preview";
      elements.previewText.appendChild(img);
    } else if (text && emojiCache.length > 0 && /:[a-zA-Z0-9_]{1,32}:/.test(text)) {
      // Render :emoji_name: tokens as inline <img> using the cached emoji list.
      // textContent is unsafe for HTML, so we build DOM nodes manually.
      elements.previewText.textContent = "";
      const emojiMap = Object.create(null);
      emojiCache.forEach((e) => { emojiMap[e.name] = e; });
      const re = /:([a-zA-Z0-9_]{1,32}):/g;
      let lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        if (m.index > lastIndex) {
          elements.previewText.appendChild(
            document.createTextNode(text.slice(lastIndex, m.index))
          );
        }
        const entry = emojiMap[m[1]];
        if (entry) {
          const img = document.createElement("img");
          img.src = entry.url;
          img.alt = m[1];
          img.style.cssText = "display:inline-block;height:1em;vertical-align:middle;margin:0 2px;";
          elements.previewText.appendChild(img);
        } else {
          elements.previewText.appendChild(document.createTextNode(m[0]));
        }
        lastIndex = m.index + m[0].length;
      }
      if (lastIndex < text.length) {
        elements.previewText.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
    } else {
      elements.previewText.textContent = text || ServerI18n.t("preview");
    }

    // Apply styles
    if (elements.colorInput) {
      const color = elements.colorInput.value;
      elements.previewText.style.color = color;
      // Glow effect: viewer.jsx — `0 0 12px ${color}, 0 2px 4px rgba(0,0,0,0.6)`.
      // Design v3-r10: during the 1.8s post-fire "sent" window the glow
      // briefly widens to 24px even if `glow` effect is off (a visual
      // confirmation burst). Driven by body.dataset.viewerSendBurst.
      const isSentBurst = document.body.dataset.viewerSendBurst === "1";
      if (isSentBurst) {
        elements.previewText.style.textShadow = `0 0 24px ${color}, 0 2px 4px rgba(0,0,0,0.6)`;
      } else if (selectedEffects["glow"]) {
        elements.previewText.style.textShadow = `0 0 12px ${color}, 0 2px 4px rgba(0,0,0,0.6)`;
      } else {
        elements.previewText.style.textShadow = "";
      }
    }

    // 2026-05-17: surface non-glow effects in the preview marquee.
    // Multi-select stacks, so we build a comma-separated CSS animation
    // string. Matching keyframes are defined in viewer-v2.css with the
    // `vp-` prefix. Glow stays inline-style only (text-shadow above).
    // 2026-05-17 design v3-r10: animation durations read CSS custom
    // properties set by _applyEffectParamsToPreview() so per-effect
    // sliders retune the marquee live. Fallback to design-spec defaults.
    const _EFFECT_ANIMATIONS = {
      blink:   "vp-blink var(--vp-blink-duration, 0.333s) step-start infinite",
      shake:   "vp-shake var(--vp-shake-duration, 0.125s) ease-in-out infinite",
      bounce:  "vp-bounce var(--vp-bounce-duration, 0.5s) ease-in-out infinite",
      spin:    "vp-spin var(--vp-spin-duration, 1s) linear infinite",
      rainbow: "vp-rainbow var(--vp-rainbow-duration, 2s) linear infinite",
      wave:    "vp-wave var(--vp-wave-duration, 0.5s) ease-in-out infinite",
      zoom:    "vp-zoom var(--vp-zoom-duration, 1s) ease-in-out infinite",
    };
    const _animList = Object.keys(selectedEffects)
      .map((name) => _EFFECT_ANIMATIONS[name])
      .filter(Boolean);
    elements.previewText.style.animation = _animList.join(", ");
    if (elements.sizeInput) {
      const fontSize = parseFloat(elements.sizeInput.value) || 32;
      elements.previewText.style.fontSize = `${fontSize}px`;
      // Prototype viewer.jsx:130 — @nick scales with main fontSize:
      //   fontSize: max(11, fontSize * 0.42)
      const previewNick = document.getElementById("previewNick");
      if (previewNick) {
        previewNick.style.fontSize = `${Math.max(11, fontSize * 0.42)}px`;
      }
      // Push the size into the marquee row so the panel height tracks
      // the chosen font-size (height = fontSize * 1.4 per design v3-r8).
      const row = document.querySelector(".viewer-preview-row");
      if (row) row.style.setProperty("--viewer-preview-font-size", fontSize + "px");
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
      elements.previewText.style.fontFamily = "inherit";
    }
  };

  function _setViewerMode(mode) {
    const nextMode =
      VIEWER_POLL_ENABLED && mode === "poll" ? "poll" : "fire";
    _viewerMode = nextMode;
    if (elements.viewerFirePane) {
      const isFire = nextMode === "fire";
      elements.viewerFirePane.hidden = !isFire;
      elements.viewerFirePane.classList.toggle("is-active", isFire);
    }
    if (elements.viewerPollPane) {
      const isPoll = nextMode === "poll";
      elements.viewerPollPane.hidden = !isPoll;
      elements.viewerPollPane.classList.toggle("is-active", isPoll);
    }
    (elements.viewerTabButtons || []).forEach((btn) => {
      const isActive = btn.dataset.viewerTab === nextMode;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  function _normalizePollState(raw) {
    if (!raw || typeof raw !== "object") {
      return {
        state: "idle", question: "", options: [], totalVotes: 0,
        questionImage: null, questionDurationS: null, currentIndex: -1,
        questionCount: 0, mode: "manual",
      };
    }
    const state = String(raw.state || "idle");
    const list = Array.isArray(raw.questions) ? raw.questions : [];
    const idx = Number.isInteger(raw.current_index) ? raw.current_index : -1;
    const currentQuestion =
      list.length > 0
        ? (idx >= 0 && idx < list.length ? list[idx] : list[0])
        : null;
    const question = String(
      currentQuestion?.text || raw.question || ""
    ).trim();
    const rawOptions = Array.isArray(currentQuestion?.options)
      ? currentQuestion.options
      : Array.isArray(raw.options)
        ? raw.options
        : [];
    const normalizedOptions = rawOptions
      .map((opt) => {
        const key = String(opt?.key || "").trim().toUpperCase();
        if (!key) return null;
        const countNum = Number(opt?.count);
        const count = Number.isFinite(countNum) ? countNum : 0;
        const pctNum = Number(opt?.percentage);
        const percentage = Number.isFinite(pctNum) ? pctNum : 0;
        return {
          key,
          text: String(opt?.text || key),
          count,
          percentage,
        };
      })
      .filter(Boolean);
    let totalVotesNum = Number(currentQuestion?.total_votes);
    if (!Number.isFinite(totalVotesNum)) {
      totalVotesNum = Number(raw.total_votes);
    }
    if (!Number.isFinite(totalVotesNum)) {
      totalVotesNum = normalizedOptions.reduce((acc, item) => acc + item.count, 0);
    }
    // Design v4 brief P1 #1 (2026-05-18) — surface multi-Q metadata:
    // image_url (hero banner), time_limit_seconds (timer bar fallback),
    // current_index / question_count (progress dots), mode (auto-enforce).
    const questionImage = currentQuestion?.image_url || null;
    const questionDurationS = Number.isFinite(Number(currentQuestion?.time_limit_seconds))
      ? Number(currentQuestion.time_limit_seconds)
      : (Number.isFinite(Number(raw.default_duration_s)) ? Number(raw.default_duration_s) : null);
    const questionCount = Number.isInteger(raw.question_count) ? raw.question_count : list.length;
    return {
      state,
      question,
      options: normalizedOptions,
      totalVotes: totalVotesNum,
      questionImage,
      questionDurationS,
      currentIndex: idx,
      questionCount,
      mode: raw.mode === "auto" ? "auto" : "manual",
    };
  }

  function _renderPollPane() {
    if (!VIEWER_POLL_ENABLED) return;
    if (!elements.pollQuestion || !elements.pollMeta || !elements.pollOptions) {
      return;
    }
    const poll = _viewerPollState;
    if (elements.pollStateLabel) {
      elements.pollStateLabel.textContent =
        poll.state === "active"
          ? "即時投票 · 進行中"
          : poll.state === "ended"
            ? "即時投票 · 已結束"
            : "即時投票";
    }
    if (poll.question) {
      elements.pollQuestion.textContent = poll.question;
    } else {
      elements.pollQuestion.textContent = "目前沒有進行中的投票";
    }
    const optionKeys = poll.options.map((opt) => opt.key).filter(Boolean);
    elements.pollMeta.textContent =
      poll.state === "active"
        ? (optionKeys.length ? `選項 ${optionKeys.join(" / ")}` : "投票進行中")
        : poll.state === "ended"
          ? "投票已結束"
          : "等待管理者開啟投票";

    elements.pollOptions.innerHTML = "";
    if (poll.options.length) {
      poll.options.forEach((opt) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "viewer-poll-option";
        button.dataset.vpollKey = opt.key;
        button.setAttribute("data-vpoll-key", opt.key);

        const row = document.createElement("div");
        row.className = "viewer-poll-option-row";

        const key = document.createElement("span");
        key.className = "viewer-poll-option-key";
        key.textContent = opt.key;

        const text = document.createElement("span");
        text.className = "viewer-poll-option-text";
        text.textContent = opt.text;

        row.appendChild(key);
        row.appendChild(text);
        button.appendChild(row);

        button.addEventListener("click", () => {
          if (!elements.danmuText) return;
          elements.danmuText.value = opt.key;
          elements.danmuText.dispatchEvent(new Event("input", { bubbles: true }));
          elements.danmuText.focus();
          _setViewerMode("fire");
        });
        elements.pollOptions.appendChild(button);
      });
    }

    // Multi-Q hero image (design v4 brief P1 #1, 2026-05-18).
    const imgWrap = document.querySelector("[data-vpoll-image]");
    const imgEl = document.querySelector("[data-vpoll-image-img]");
    if (imgWrap && imgEl) {
      if (poll.questionImage && poll.state === "active") {
        imgEl.src = poll.questionImage;
        imgEl.alt = poll.question || "";
        imgWrap.hidden = false;
      } else {
        imgWrap.hidden = true;
        imgEl.removeAttribute("src");
      }
    }

    // Progress dots — only render if >1 questions in the session.
    const dotsEl = document.querySelector("[data-vpoll-dots]");
    if (dotsEl) {
      if (poll.questionCount > 1 && poll.state !== "idle") {
        dotsEl.hidden = false;
        const cur = poll.currentIndex < 0 ? 0 : poll.currentIndex;
        dotsEl.innerHTML = Array.from({ length: poll.questionCount })
          .map((_, i) => {
            const cls =
              i < cur ? "viewer-poll-dot is-past"
                : i === cur ? "viewer-poll-dot is-current"
                  : "viewer-poll-dot is-future";
            return `<span class="${cls}" aria-hidden="true"></span>`;
          })
          .join("");
      } else {
        dotsEl.hidden = true;
        dotsEl.innerHTML = "";
      }
    }

    // Auto-mode timer bar — restart per question. Pure visual; voting
    // continues to be admin-enforced via advance().
    _refreshPollTimerBar();
  }

  // ── Per-question timer bar (multi-Q auto mode) ───────────────────────────
  let _pollTimerAnimEnd = 0;
  let _pollTimerAnimRAF = 0;
  let _pollTimerKey = ""; // resets on question change

  function _refreshPollTimerBar() {
    const fill = document.querySelector("[data-vpoll-timer-fill]");
    const wrap = document.querySelector("[data-vpoll-timer]");
    if (!fill || !wrap) return;
    const poll = _viewerPollState;
    const dur = poll.questionDurationS;
    if (poll.state !== "active" || !dur || dur <= 0) {
      wrap.hidden = true;
      cancelAnimationFrame(_pollTimerAnimRAF);
      _pollTimerAnimRAF = 0;
      fill.style.width = "0%";
      return;
    }
    wrap.hidden = false;
    // Reset animation when the question changes.
    const key = `${poll.state}-${poll.currentIndex}-${dur}`;
    if (key !== _pollTimerKey) {
      _pollTimerKey = key;
      _pollTimerAnimEnd = Date.now() + dur * 1000;
      cancelAnimationFrame(_pollTimerAnimRAF);
      const tick = () => {
        const remaining = Math.max(0, _pollTimerAnimEnd - Date.now());
        const pct = (remaining / (dur * 1000)) * 100;
        fill.style.width = `${pct.toFixed(1)}%`;
        if (remaining > 0 && _pollTimerKey === key) {
          _pollTimerAnimRAF = requestAnimationFrame(tick);
        }
      };
      tick();
    }
  }

  function _applyPollState(raw) {
    if (!VIEWER_POLL_ENABLED) return;
    _viewerPollState = _normalizePollState(raw);
    if (_viewerPollState.question) {
      window._lastPollQuestion = _viewerPollState.question;
    }
    _renderPollPane();
  }

  function _bindViewerTabs() {
    if (!elements.viewerTabButtons || elements.viewerTabButtons.length === 0) {
      return;
    }
    elements.viewerTabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        _setViewerMode(btn.dataset.viewerTab || "fire");
      });
    });
    _setViewerMode("fire");
  }

  async function populateUserFontDropdown(
    forceRefresh = false,
    background = false
  ) {
    if (!elements.userFontSelect) return;

    try {
      const fonts = await refreshFontCache(forceRefresh);
      const currentVal = elements.userFontSelect.value;

      elements.userFontSelect.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = getDefaultFontName();
      elements.userFontSelect.appendChild(defaultOption);

      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font.name;
        option.textContent = font.name;
        elements.userFontSelect.appendChild(option);
      });

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
        showToast(ServerI18n.t("failedToLoadFonts"), false);
      }
    }
  }

  // --- Event Listeners ---

  const updateSendEnabled = () => {
    if (!elements.btnSend) return;
    const hasText = elements.danmuText.value.trim().length > 0;
    elements.sendbarPill?.classList.toggle("is-active", hasText);
    // _refreshSendButtonGate folds in cooldown + overlay-offline state.
    _refreshSendButtonGate();
  };
  elements.danmuText.addEventListener("input", () => {
    updateCharCount();
    updatePreview();
    updateSendEnabled();
  });
  updateSendEnabled();

  // Enter to send, Shift+Enter for newline
  // e.isComposing: true during IME composition, skip to avoid accidental send
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
        elements.colorGradientPreview.style.backgroundImage = "none";
        elements.colorGradientPreview.style.backgroundColor = color;
      }
      const swatches = document.querySelectorAll(".viewer-swatch-preset");
      let matched = false;
      swatches.forEach((sw) => {
        const c = (sw.getAttribute("data-color") || "").toLowerCase();
        if (c === color.toLowerCase()) {
          sw.classList.add("is-active");
          matched = true;
        } else {
          sw.classList.remove("is-active");
        }
      });
      if (elements.danmuText) {
        elements.danmuText.style.color = color;
      }
      updatePreview();
    });
  }

  document.querySelectorAll(".viewer-swatch-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.getAttribute("data-color");
      if (!color || !elements.colorInput) return;
      elements.colorInput.value = color;
      elements.colorInput.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });

  // Update --progress CSS var so the cyan track fill in viewer-v2.css matches
  // the slider's value (Safari ignores accent-color on the track).
  const _syncRangeProgress = (el) => {
    if (!el) return;
    const min = parseFloat(el.min) || 0;
    const max = parseFloat(el.max) || 100;
    const val = parseFloat(el.value);
    const pct = max > min ? ((val - min) / (max - min)) * 100 : 50;
    el.style.setProperty("--progress", `${pct}%`);
  };

  if (elements.sizeInput) {
    _syncRangeProgress(elements.sizeInput);
    elements.sizeInput.addEventListener("input", (e) => {
      if (elements.sizeValue) {
        // HTML wraps with literal `px` after </span> — write number only.
        elements.sizeValue.textContent = e.target.value;
      }
      _syncRangeProgress(e.target);
      updatePreview();
    });
  }

  // ── Preview marquee speed (design v3-r8) ──────────────────────────────────
  // Slider value drives `--viewer-preview-duration` on .viewer-preview-row,
  // which the CSS keyframe `dm-preview-scroll` reads. Formula matches the
  // design prototype: max(2, 8 / speed) seconds. 1x → 8s, 2x → 4s, 3x → 2.7s.
  // Faster speed = shorter cycle = visibly faster scroll.
  const _previewRow = document.querySelector(".viewer-preview-row");
  const _previewSpeedBadge = document.getElementById("previewSpeedBadge");
  function _applyPreviewSpeed(speed) {
    const v = Number(speed);
    if (!Number.isFinite(v) || v <= 0) return;
    const duration = Math.max(2, 8 / v);
    if (_previewRow) _previewRow.style.setProperty("--viewer-preview-duration", duration.toFixed(2) + "s");
    if (_previewSpeedBadge) _previewSpeedBadge.textContent = v.toFixed(1) + "x";
  }

  // Init speed display with one decimal to match prototype `1.0x` shape.
  if (elements.speedRange && elements.speedValue) {
    const sv = parseFloat(elements.speedRange.value);
    if (Number.isFinite(sv)) elements.speedValue.textContent = sv.toFixed(1);
    _applyPreviewSpeed(sv);
  }

  if (elements.opacityRange) {
    _syncRangeProgress(elements.opacityRange);
    elements.opacityRange.addEventListener("input", (e) => {
      // HTML wraps with literal `%` after </span> — write number only.
      elements.opacityValue.textContent = e.target.value;
      _syncRangeProgress(e.target);
      updatePreview();
    });
  }

  if (elements.speedRange) {
    _syncRangeProgress(elements.speedRange);
    elements.speedRange.addEventListener("input", (e) => {
      // Match prototype `${speed.toFixed(1)}x` — always show one decimal
      // (e.g. 1.0x not 1x) so the column doesn't shrink when speed lands
      // on an integer.
      const v = parseFloat(e.target.value);
      elements.speedValue.textContent = Number.isFinite(v) ? v.toFixed(1) : e.target.value;
      _syncRangeProgress(e.target);
      _applyPreviewSpeed(v);
    });
  }

  // ── Viewer theme · unified with admin (2026-05-18 polestar unification) ───
  // Two inputs feed the SAME visual outcome:
  //   1. `body[data-viewer-theme-mode]` — admin-supplied default rendered by
  //      the template ("auto" / "force-light" / "force-dark"). Read once at boot.
  //   2. `localStorage['theme-mode']` — audience preference, shared across
  //      viewer tabs. It applies only when admin mode is "auto"; force-* wins.
  //
  // Both apply two attributes so old + new selectors keep working:
  //   - `<html data-theme="dark|light">` — drives shared/tokens.css overrides
  //     (same mechanism as admin). Lets viewer + admin pull from one token set.
  //   - `body.is-dark` — legacy class still referenced by viewer-v2.css.
  const _THEME_KEY = "theme-mode";
  const _adminThemeMode = () => document.body.dataset.viewerThemeMode || "auto";
  const _isViewerThemeForced = () => {
    const mode = _adminThemeMode();
    return mode === "force-dark" || mode === "force-light";
  };

  const _readUnifiedMode = () => {
    try {
      const v = localStorage.getItem(_THEME_KEY);
      if (v === "light" || v === "dark" || v === "auto") return v;
    } catch (_) {}
    return null;
  };

  // Map admin-supplied force-* mode → unified mode for first-paint. Admin
  // force mode wins; audience localStorage is only a preference in auto mode.
  const _resolveMode = () => {
    const adminMode = _adminThemeMode();
    if (adminMode === "force-dark") return "dark";
    if (adminMode === "force-light") return "light";
    const operator = _readUnifiedMode();
    if (operator) return operator;
    return "auto";
  };

  const _applyViewerTheme = (mode) => {
    // Translate force-* (legacy admin) → unified dark/light.
    const unified = mode === "force-dark" ? "dark"
      : mode === "force-light" ? "light"
      : mode === "dark" || mode === "light" || mode === "auto" ? mode
      : "auto";

    const html = document.documentElement;
    if (unified === "auto") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", unified);
    }

    // Compute effective dark state so the legacy .is-dark class stays correct
    // (viewer-v2.css still keys off it for scoped token overrides).
    const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    const sysDark = mql ? mql.matches : false;
    const effDark = unified === "dark" || (unified === "auto" && sysDark);
    document.body.classList.toggle("is-dark", effDark);
  };

  // Initial apply — resolve once (operator override or admin default).
  _applyViewerTheme(_resolveMode());

  if (window.matchMedia) {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSysThemeChange = () => {
      // Only auto-apply when the resolved mode is "auto".
      if (_resolveMode() === "auto") _applyViewerTheme("auto");
    };
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onSysThemeChange);
    } else if (typeof mql.addListener === "function") {
      mql.addListener(onSysThemeChange); // Safari < 14 fallback
    }
  }

  // Cross-tab sync — if admin theme switcher (or another viewer tab) flips
  // the unified storage key, this tab re-applies immediately.
  window.addEventListener("storage", (e) => {
    if (e.key !== _THEME_KEY) return;
    _applyViewerTheme(_resolveMode());
    _syncThemeChipState();
  });

  // Expose for runtime override (e.g. settings refresh via SSE later).
  window.applyViewerTheme = (mode) => {
    if (mode === "force-dark" || mode === "force-light" || mode === "auto") {
      document.body.dataset.viewerThemeMode = mode || "auto";
    }
    _applyViewerTheme(_resolveMode());
    _syncThemeChipState();
    if (typeof window.syncViewerOverrideControlVisibility === "function") {
      window.syncViewerOverrideControlVisibility();
    }
  };

  // ── Desktop theme chip (design v4 brief 0518-v3 #1, 2026-05-18) ──
  // ☼ / ◐ / ☾ 3-segment toggle in viewer-hero-utility. Hidden on
  // mobile via CSS. Shares state with mobile hamburger sheet + admin
  // theme switcher (all read/write `theme-mode` storage key).
  const _syncThemeChipState = () => {
    const chip = document.getElementById("viewerThemeChip");
    if (!chip) return;
    const forced = _isViewerThemeForced();
    chip.hidden = forced;
    chip.setAttribute("aria-hidden", forced ? "true" : "false");
    if (forced) return;
    const cur = _readUnifiedMode() || "auto";
    chip.querySelectorAll("[data-theme-choice]").forEach((b) => {
      const on = b.dataset.themeChoice === cur;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
  };

  (function wireDesktopThemeChip() {
    const chip = document.getElementById("viewerThemeChip");
    if (!chip) return;
    chip.addEventListener("click", (e) => {
      if (_isViewerThemeForced()) return;
      const seg = e.target.closest("[data-theme-choice]");
      if (!seg) return;
      const mode = seg.dataset.themeChoice;
      try { localStorage.setItem(_THEME_KEY, mode); } catch (_) {}
      window.applyViewerTheme(mode);
    });
    _syncThemeChipState();
  })();

  // ── Mobile hamburger settings sheet (design v4 brief 0518-4a, 2026-05-18) ─
  // Adds theme + lang user overrides on top of system / admin auto defaults.
  // 2026-05-18 unification: theme uses the same `theme-mode` key as admin
  // (cross-tab + cross-surface sync). Legacy key `viewer.theme.override` is
  // migrated once on boot. Admin force-* mode always wins and hides the
  // corresponding mobile controls.
  (function wireMobileSettingsSheet() {
    const hamb = document.getElementById("viewerHamburger");
    const sheet = document.getElementById("viewerMobileSheet");
    if (!hamb || !sheet) return;

    const THEME_KEY = "theme-mode";              // unified — same as admin
    const THEME_LEGACY = "viewer.theme.override"; // migrated once
    const LANG_KEY = "viewer.lang.override";
    const themeRow = sheet.querySelector("[data-viewer-mobile-theme-row]");
    const langRow = sheet.querySelector("[data-viewer-mobile-lang-row]");

    const safeRead = (k) => { try { return localStorage.getItem(k); } catch (_) { return null; } };
    const safeWrite = (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} };
    const getLangMode = () => document.body.dataset.viewerLangMode || "auto";
    const isLangForced = () => /^force-(zh|en|ja|ko)$/.test(getLangMode());
    const forcedLangValue = () => getLangMode().replace(/^force-/, "");
    const syncOverrideControlVisibility = () => {
      const themeForced = _isViewerThemeForced();
      if (themeRow) {
        themeRow.hidden = themeForced;
        themeRow.setAttribute("aria-hidden", themeForced ? "true" : "false");
      }
      const langForced = isLangForced();
      if (langRow) {
        langRow.hidden = langForced;
        langRow.setAttribute("aria-hidden", langForced ? "true" : "false");
      }
    };
    window.syncViewerOverrideControlVisibility = syncOverrideControlVisibility;

    // One-time migration from legacy storage key (force-* → unified dark/light/auto).
    (function migrate() {
      if (safeRead(THEME_KEY)) return; // already on new key
      const old = safeRead(THEME_LEGACY);
      if (!old) return;
      const unified = old === "force-dark" ? "dark"
        : old === "force-light" ? "light"
        : old === "auto" ? "auto"
        : null;
      if (unified) {
        safeWrite(THEME_KEY, unified);
        try { localStorage.removeItem(THEME_LEGACY); } catch (_) {}
      }
    })();

    const open = () => {
      sheet.hidden = false;
      hamb.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => sheet.classList.add("is-open"));
    };
    const close = () => {
      sheet.classList.remove("is-open");
      hamb.setAttribute("aria-expanded", "false");
      setTimeout(() => { sheet.hidden = true; }, 180);
    };

    // Hamburger + close triggers
    hamb.addEventListener("click", (e) => {
      e.stopPropagation();
      if (sheet.hidden) open(); else close();
    });
    sheet.addEventListener("click", (e) => {
      if (e.target.closest("[data-mobile-sheet-close]")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !sheet.hidden) close();
    });

    // Theme segment buttons
    const themeBtns = sheet.querySelectorAll("[data-theme-choice]");
    const applyTheme = (mode) => {
      if (_isViewerThemeForced()) {
        window.applyViewerTheme(_adminThemeMode());
        return;
      }
      themeBtns.forEach((b) => {
        const on = b.dataset.themeChoice === mode;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
      if (typeof window.applyViewerTheme === "function") window.applyViewerTheme(mode);
    };
    themeBtns.forEach((b) => {
      b.addEventListener("click", () => {
        if (_isViewerThemeForced()) return;
        const mode = b.dataset.themeChoice;
        applyTheme(mode);
        safeWrite(THEME_KEY, mode);
      });
    });

    // Lang segment buttons
    const langBtns = sheet.querySelectorAll("[data-lang-choice]");
    const applyLang = (lang) => {
      langBtns.forEach((b) => {
        const on = b.dataset.langChoice === lang;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
      if (window.ServerI18n && typeof window.ServerI18n.setLanguage === "function") {
        window.ServerI18n.setLanguage(lang);
      }
    };
    langBtns.forEach((b) => {
      b.addEventListener("click", () => {
        if (isLangForced()) return;
        const lang = b.dataset.langChoice;
        applyLang(lang);
        safeWrite(LANG_KEY, lang);
      });
    });

    // Boot — read saved overrides + sync visual state
    syncOverrideControlVisibility();
    const savedTheme = safeRead(THEME_KEY);
    if (_isViewerThemeForced()) {
      window.applyViewerTheme(_adminThemeMode());
    } else if (savedTheme && ["dark", "light", "auto"].indexOf(savedTheme) !== -1) {
      applyTheme(savedTheme);
    } else {
      // Sync visual state to the current admin-supplied mode (default "auto").
      // Map admin force-* → unified dark/light for visual highlight.
      const adminMode = document.body.dataset.viewerThemeMode || "auto";
      const cur = adminMode === "force-dark" ? "dark"
        : adminMode === "force-light" ? "light"
        : "auto";
      themeBtns.forEach((b) => {
        const on = b.dataset.themeChoice === cur;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
    }
    const savedLang = safeRead(LANG_KEY);
    if (isLangForced()) {
      applyLang(forcedLangValue());
    } else if (savedLang) {
      applyLang(savedLang);
    } else {
      // Sync visual to current i18next lang.
      const curLang = (window.i18next && window.i18next.language) || "zh";
      const norm = curLang.split("-")[0];
      langBtns.forEach((b) => {
        const on = b.dataset.langChoice === norm;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
    }

    // Cross-tab sync — admin switcher in another tab flips this one's
    // active segment + applies the theme.
    window.addEventListener("storage", (e) => {
      if (e.key !== THEME_KEY) return;
      if (_isViewerThemeForced()) {
        window.applyViewerTheme(_adminThemeMode());
        syncOverrideControlVisibility();
        return;
      }
      const newMode = safeRead(THEME_KEY) || "auto";
      applyTheme(newMode);
    });
  })();

  _applyViewerPollGate();
  _bindViewerTabs();
  _renderPollPane();
  if (VIEWER_POLL_ENABLED) {
    window.addEventListener("viewer-poll-state", (event) => {
      _applyPollState(event.detail || {});
    });
  }

  if (elements.userFontSelect) {
    elements.userFontSelect.addEventListener("change", updatePreview);
  }

  // ── Effects System (dynamically loaded from .dme files) ───────────────────

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

  // 2026-05-17 design v3-r10: per-effect parameter cards.
  // Spec mirrors viewer.jsx in the design bundle — { key, label, value,
  // unit, min, max } per param. step is derived (1 when max > 10, 0.1
  // otherwise) to match the design.
  const EFFECT_PARAM_SPEC = {
    glow:    { name: "發光", params: [
      { key: "brightness", label: "亮度",       value: 80,  unit: "%",   min: 20,  max: 100 },
      { key: "spread",     label: "擴散",       value: 12,  unit: "px",  min: 4,   max: 32 },
    ]},
    blink:   { name: "閃爍", params: [
      { key: "rate",       label: "頻率",       value: 3,   unit: "Hz",  min: 1,   max: 10 },
      { key: "minOpacity", label: "最低透明度", value: 20,  unit: "%",   min: 0,   max: 80 },
    ]},
    bounce:  { name: "彈跳", params: [
      { key: "height",     label: "高度",       value: 16,  unit: "px",  min: 4,   max: 40 },
      { key: "rate",       label: "頻率",       value: 2,   unit: "Hz",  min: 1,   max: 6 },
    ]},
    rainbow: { name: "彩虹", params: [
      { key: "speed",      label: "速度",       value: 2,   unit: "s",   min: 0.5, max: 8 },
      { key: "saturation", label: "飽和度",     value: 90,  unit: "%",   min: 30,  max: 100 },
    ]},
    shake:   { name: "震動", params: [
      { key: "strength",   label: "強度",       value: 4,   unit: "px",  min: 1,   max: 12 },
      { key: "rate",       label: "頻率",       value: 8,   unit: "Hz",  min: 2,   max: 20 },
    ]},
    spin:    { name: "旋轉", params: [
      { key: "speed",      label: "速度",       value: 1,   unit: "s/圈", min: 0.3, max: 4 },
    ]},
    wave:    { name: "波浪", params: [
      { key: "amplitude",  label: "振幅",       value: 8,   unit: "px",  min: 2,   max: 24 },
      { key: "wavelength", label: "波長",       value: 40,  unit: "px",  min: 20,  max: 80 },
    ]},
    zoom:    { name: "縮放", params: [
      { key: "maxScale",   label: "最大倍率",   value: 1.5, unit: "x",   min: 1.1, max: 3 },
      { key: "rate",       label: "頻率",       value: 1,   unit: "Hz",  min: 0.5, max: 4 },
    ]},
  };

  // _updateEffectsCount stays a no-op — the "已選 X / 8" counter was
  // removed in r9 and not re-added in r10.
  function _updateEffectsCount() { /* no-op */ }

  function _refreshParamsPanel() {
    const panel = elements.effectParamsPanel;
    if (!panel) return;
    panel.innerHTML = "";
    const selected = Object.keys(selectedEffects);
    if (selected.length === 0) {
      panel.hidden = true;
      return;
    }
    panel.hidden = false;
    selected.forEach((eff) => {
      const spec = EFFECT_PARAM_SPEC[eff];
      if (!spec) return; // unknown effect — no card
      const card = document.createElement("div");
      card.className = "viewer-effect-params-card";
      card.dataset.effect = eff;

      const heading = document.createElement("div");
      heading.className = "viewer-effect-params-card__title";
      heading.textContent = "● " + spec.name;
      card.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "viewer-effect-params-card__grid";
      if (spec.params.length === 1) grid.classList.add("is-single");

      spec.params.forEach((p) => {
        const row = document.createElement("div");
        row.className = "viewer-effect-params-card__row";

        const head = document.createElement("div");
        head.className = "viewer-effect-params-card__row-head";
        const lbl = document.createElement("span");
        lbl.className = "viewer-effect-params-card__label";
        lbl.textContent = p.label;
        const valSpan = document.createElement("span");
        valSpan.className = "viewer-effect-params-card__value";
        const currentVal = selectedEffects[eff][p.key] ?? p.value;
        valSpan.textContent = currentVal + p.unit;
        head.appendChild(lbl);
        head.appendChild(valSpan);
        row.appendChild(head);

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = p.min;
        slider.max = p.max;
        slider.step = p.max > 10 ? 1 : 0.1;
        slider.value = currentVal;
        slider.className = "viewer-effect-params-card__slider";
        slider.setAttribute("aria-label", spec.name + " " + p.label);
        slider.addEventListener("input", () => {
          const num = Number(slider.value);
          if (!selectedEffects[eff]) return;
          selectedEffects[eff][p.key] = num;
          valSpan.textContent = num + p.unit;
          _applyEffectParamsToPreview();
        });
        row.appendChild(slider);
        grid.appendChild(row);
      });

      card.appendChild(grid);
      panel.appendChild(card);
    });
    _applyEffectParamsToPreview();
  }

  function _applyEffectParamsToPreview() {
    // Thread param values into CSS custom properties on the preview text
    // so the marquee animations (vp-* keyframes) reflect them live.
    const txt = elements.previewText;
    if (!txt) return;
    const row = document.querySelector(".viewer-preview-row");
    Object.keys(selectedEffects).forEach((eff) => {
      const p = selectedEffects[eff];
      switch (eff) {
        case "glow":
          // glow stays inline-style — updatePreview() reads it.
          break;
        case "blink":
          if (p.rate)       txt.style.setProperty("--vp-blink-duration", (1 / p.rate) + "s");
          if (p.minOpacity != null) txt.style.setProperty("--vp-blink-min", (p.minOpacity / 100));
          break;
        case "bounce":
          if (p.height)     txt.style.setProperty("--vp-bounce-height", `-${p.height}px`);
          if (p.rate)       txt.style.setProperty("--vp-bounce-duration", (1 / p.rate) + "s");
          break;
        case "rainbow":
          if (p.speed)      txt.style.setProperty("--vp-rainbow-duration", p.speed + "s");
          if (p.saturation != null) txt.style.setProperty("--vp-rainbow-sat", (p.saturation / 100));
          break;
        case "shake":
          if (p.strength)   txt.style.setProperty("--vp-shake-strength", p.strength + "px");
          if (p.rate)       txt.style.setProperty("--vp-shake-duration", (1 / p.rate) + "s");
          break;
        case "spin":
          if (p.speed)      txt.style.setProperty("--vp-spin-duration", p.speed + "s");
          break;
        case "wave":
          if (p.amplitude)  txt.style.setProperty("--vp-wave-amplitude", p.amplitude + "px");
          // wavelength affects horizontal stepping — left as token for now
          if (p.wavelength) txt.style.setProperty("--vp-wave-length", p.wavelength + "px");
          break;
        case "zoom":
          if (p.maxScale)   txt.style.setProperty("--vp-zoom-max", String(p.maxScale));
          if (p.rate)       txt.style.setProperty("--vp-zoom-duration", (1 / p.rate) + "s");
          break;
      }
    });
    // Re-run updatePreview so glow textShadow tracks color + selection.
    updatePreview();
  }

  function _buildEffectButtons(effects) {
    if (!elements.effectButtons) return;
    elements.effectButtons.innerHTML = "";
    if (elements.effectsTotal) {
      elements.effectsTotal.textContent = String(effects.length);
    }
    _updateEffectsCount();

    effects.forEach((eff) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.effectName = eff.name;
      btn.className = "effect-btn viewer-chip";
      btn.title = eff.description || "";
      var effI18nKey = "effect_" + eff.name;
      var label = ServerI18n.t(effI18nKey) !== effI18nKey ? ServerI18n.t(effI18nKey) : (eff.label || eff.name);
      var bullet = document.createElement("span");
      bullet.className = "viewer-chip-bullet";
      bullet.textContent = "\u25CB"; // ○ off
      btn.appendChild(bullet);
      btn.appendChild(document.createTextNode(" " + label));
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        if (selectedEffects[eff.name]) {
          delete selectedEffects[eff.name];
          btn.classList.remove("effect-btn--active", "is-active");
          btn.setAttribute("aria-pressed", "false");
          bullet.textContent = "\u25CB";
        } else {
          const defaults = {};
          for (const [k, v] of Object.entries(eff.params || {})) defaults[k] = v.default;
          // Overlay design v3-r10 param defaults for the 8 named effects
          // so the rendered card matches the design canvas.
          const spec = EFFECT_PARAM_SPEC[eff.name];
          if (spec) {
            spec.params.forEach((p) => { defaults[p.key] = p.value; });
          }
          selectedEffects[eff.name] = defaults;
          btn.classList.add("effect-btn--active", "is-active");
          btn.setAttribute("aria-pressed", "true");
          bullet.textContent = "\u25CF"; // ● on
        }
        _updateEffectsCount();
        _refreshParamsPanel();
        updatePreview();
      });
      elements.effectButtons.appendChild(btn);
    });

    if (effects.length === 0) {
      elements.effectButtons.innerHTML = `<span class="viewer-field-label">${ServerI18n.t("noEffectsAvailable")}</span>`;
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
        elements.effectButtons.innerHTML = `<span class="text-xs text-slate-400">${ServerI18n.t("failedToLoad")}</span>`;
      }
    }
  }

  loadEffects();

  // Theme selector removed from viewer — per design brief, theme packs are
  // admin-only. Active theme is applied server-side; viewer just fires text.

  // --- Send Button Loading State ---

  function setSendLoading(loading) {
    if (!elements.btnSend) return;
    elements.btnSend.disabled = loading || _cooldownEnd > Date.now() || !_overlayOnline;
    if (elements.btnSendText) elements.btnSendText.textContent = loading ? ServerI18n.t("sending") : ServerI18n.t("fireDanmu");
    if (elements.btnSendIcon) elements.btnSendIcon.classList.toggle("hidden", loading);
    if (elements.btnSendSpinner) elements.btnSendSpinner.classList.toggle("hidden", !loading);
  }

  // Tri-state gate: button enabled iff text non-empty AND not in cooldown
  // AND overlay is online. Re-runs on input / cooldown end / overlay flip.
  function _refreshSendButtonGate() {
    if (!elements.btnSend) return;
    const hasText = !!(elements.danmuText && elements.danmuText.value.trim());
    const onCooldown = _cooldownEnd > Date.now();
    if (!_overlayOnline) {
      elements.btnSend.disabled = true;
      elements.btnSend.dataset.state = "offline";
      // Keep the button label short ("FIRE") — the full offline copy goes
      // in the persistent status row above the pill so it never squeezes
      // the input (flex:1) down and hides its placeholder (B2 fix).
      if (elements.btnSendText) elements.btnSendText.textContent = ServerI18n.t("fireDanmu");
      if (elements.btnSendIcon) elements.btnSendIcon.classList.add("hidden");
      _setSendbarHint("", "");
      _setSendbarStatusRow(ServerI18n.t("overlayOfflineFire"));
      return;
    }
    if (elements.btnSend.dataset.state === "offline") delete elements.btnSend.dataset.state;
    elements.btnSend.disabled = !hasText || onCooldown;
    if (!onCooldown) {
      if (elements.btnSendText) elements.btnSendText.textContent = ServerI18n.t("fireDanmu");
      if (elements.btnSendIcon) elements.btnSendIcon.classList.remove("hidden");
      _setSendbarHint(ServerI18n.t("sendbarHint"), "");
      _setSendbarStatusRow("");
    }
  }

  // ── Design v3-r10: sendbar inline status + 3s post-fire cooldown ────
  // Replaces the generic toast for "sent / blocked / cooldown" while
  // keeping the toast as fallback for rare states (network error, queue).
  // State vars (_cooldownEnd / _cooldownTimer / _bannerTimer / _burstTimer)
  // are declared above near setSendLoading so the gate refresh doesn't TDZ.
  const _DEFAULT_PLACEHOLDER = (elements.danmuText && elements.danmuText.getAttribute("placeholder")) || "想對現場說點什麼？";

  function _resolveSendbarHint() {
    if (!elements.sendbarHint) {
      elements.sendbarHint = document.querySelector(".viewer-sendbar-meta > [data-i18n='sendbarHint']");
    }
    return elements.sendbarHint;
  }

  function _setSendbarHint(text, state) {
    const hint = _resolveSendbarHint();
    if (!hint) return;
    hint.textContent = text;
    hint.dataset.state = state || "";
  }

  // Persistent status row above the sendbar pill (2026-07-07 uiux polish
  // B2/B4). Unlike _showBanner (auto-clears) or the FIRE button label
  // (limited width — long copy squeezes the input), this row exists so
  // status copy never crowds out the input's placeholder and stays
  // visible until the caller explicitly clears it.
  function _setSendbarStatusRow(text) {
    if (!elements.sendbarStatusRow) return;
    if (!text) {
      elements.sendbarStatusRow.hidden = true;
      elements.sendbarStatusRow.textContent = "";
      return;
    }
    elements.sendbarStatusRow.hidden = false;
    elements.sendbarStatusRow.textContent = text;
  }

  function _clearBanner() {
    if (!elements.sendStatusBanner) return;
    elements.sendStatusBanner.hidden = true;
    elements.sendStatusBanner.classList.remove("is-sent", "is-blocked");
    elements.sendStatusBanner.textContent = "";
  }

  function _showBanner(kind, msg) {
    if (!elements.sendStatusBanner) {
      // Banner DOM not present yet (older template) — at least flash the
      // sent-burst on the preview so the user gets visual feedback.
      if (kind === "sent") _flashSendBurst();
      return;
    }
    if (_bannerTimer) { clearTimeout(_bannerTimer); _bannerTimer = null; }
    elements.sendStatusBanner.hidden = false;
    elements.sendStatusBanner.classList.remove("is-sent", "is-blocked");
    elements.sendStatusBanner.classList.add(kind === "sent" ? "is-sent" : "is-blocked");
    elements.sendStatusBanner.textContent = msg;
    _bannerTimer = setTimeout(_clearBanner, kind === "sent" ? 1800 : 2400);
    if (kind === "sent") _flashSendBurst();
  }

  // Toggle the 24px sent-burst on the preview text for the same window
  // as the green banner. updatePreview() reads body.dataset.viewerSendBurst.
  // _burstTimer declared up-front near setSendLoading.
  function _flashSendBurst() {
    document.body.dataset.viewerSendBurst = "1";
    updatePreview();
    if (_burstTimer) clearTimeout(_burstTimer);
    _burstTimer = setTimeout(() => {
      delete document.body.dataset.viewerSendBurst;
      updatePreview();
    }, 1800);
  }

  function _tickCooldown() {
    const left = (_cooldownEnd - Date.now()) / 1000;
    if (left <= 0) {
      _cooldownEnd = 0;
      if (_cooldownTimer) { clearInterval(_cooldownTimer); _cooldownTimer = null; }
      if (elements.danmuText) elements.danmuText.placeholder = _DEFAULT_PLACEHOLDER;
      if (elements.btnSendText) elements.btnSendText.textContent = ServerI18n.t("fireDanmu");
      if (elements.btnSendIcon) elements.btnSendIcon.classList.remove("hidden");
      _setSendbarHint(ServerI18n.t("sendbarHint"), "");
      _refreshSendButtonGate();
      return;
    }
    const fmt = left.toFixed(1);
    if (elements.btnSendText) elements.btnSendText.textContent = `${fmt}s`;
    if (elements.btnSendIcon) elements.btnSendIcon.classList.add("hidden");
    if (elements.danmuText) elements.danmuText.placeholder = ServerI18n.t("placeholderCooldown").replace("{n}", fmt);
    _setSendbarHint(ServerI18n.t("hintCooldown"), "cooldown");
    if (elements.btnSend) elements.btnSend.disabled = true;
  }

  function _startCooldown(ms) {
    _cooldownEnd = Date.now() + Math.max(0, ms);
    if (_cooldownTimer) clearInterval(_cooldownTimer);
    _cooldownTimer = setInterval(_tickCooldown, 100);
    _tickCooldown();
  }

  // Admin-configurable. Falls back to 3s mock if setting not provided
  // (older server / first boot before /get_settings returns).
  function _resolveCooldownMs() {
    try {
      const setting = currentSettings && currentSettings.ViewerFireCooldownSec;
      if (Array.isArray(setting) && setting[0]) {
        const sec = parseFloat(setting[1]);
        if (Number.isFinite(sec) && sec >= 0) return Math.round(sec * 1000);
      }
    } catch (_) {}
    return 3000;
  }

  // Send Danmu
  elements.btnSend.addEventListener("click", async () => {
    const text = elements.danmuText.value.trim();
    if (!text) {
      showToast(ServerI18n.t("pleaseEnterText"), false);
      return;
    }

    setSendLoading(true);

    try {
      // Check blacklist first
      const isBlocked = await checkTextAgainstBlacklist(text);
      if (isBlocked) {
        showBlacklistWarningModal(ServerI18n.t("blacklistBlocked"));
        // Design v3-r10: surface blocked status in the sendbar banner too,
        // so the user gets visible feedback even when the modal is dismissed.
        _showBanner("blocked", ServerI18n.t("bannerBlocked"));
        _setSendbarHint(ServerI18n.t("hintBlocked"), "blocked");
        setSendLoading(false);
        return;
      }

      // Nickname from localStorage
      const nicknameInput = document.getElementById("nicknameInput");
      const nickname = nicknameInput ? nicknameInput.value.trim() : null;
      if (nicknameInput && nickname) {
        try { localStorage.setItem("danmu_nickname", nickname); } catch (_) { }
      }

      // Layout mode
      const layoutSelect = document.getElementById("layoutSelect");
      const layout = layoutSelect ? layoutSelect.value : null;

      const payload = {
        text: text,
        color: elements.colorInput ? elements.colorInput.value : null,
        size: elements.sizeInput ? parseInt(elements.sizeInput.value) : null,
        speed: elements.speedRange ? parseFloat(elements.speedRange.value) : null,
        opacity: elements.opacityRange
          ? parseInt(elements.opacityRange.value)
          : null,
        font:
          elements.userFontSelect && elements.userFontSelect.value
            ? elements.userFontSelect.value
            : null,
        effects: Object.entries(selectedEffects).map(([name, params]) => ({ name, params })),
        fingerprint: clientFingerprint,
        nickname: nickname || undefined,
        layout: layout || undefined,
      };

      const response = await fetch("/fire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let responseData = {};
      try {
        responseData = await response.json();
      } catch (_) {
        responseData = {};
      }

      if (response.ok) {
        const status = (responseData && responseData.status) || "sent";
        const accepted = status === "sent" || status === "queued";

        if (accepted) {
          elements.danmuText.value = "";
          updateCharCount();
          updatePreview();
          // Design v3-r10: inline banner + admin-configurable cooldown
          // (ViewerFireCooldownSec, default 3s) after successful fire.
          _showBanner("sent", ServerI18n.t("bannerSent"));
          _setSendbarHint(ServerI18n.t("bannerSent"), "sent");
          _startCooldown(_resolveCooldownMs());
          try {
            if (window.ViewerStates && document.body.dataset.viewerState === "ratelimit") {
              window.ViewerStates.hide();
            }
          } catch (_) {}
        }

        if (status === "queued") {
          // queued can mean two distinct things:
          //   (a) onscreen-limiter saturated → wait for slot
          //   (b) broadcast.is_live() === false → main host paused
          // Server tags case (b) with reason="broadcast_standby" so we
          // can show a different message instead of the misleading
          // "screen is full" copy.
          const reason = (responseData && responseData.reason) || "";
          if (reason === "broadcast_standby") {
            showToast(ServerI18n.t("broadcastStandbyQueued"), true);
          } else {
            showToast(ServerI18n.t("onscreenFullQueued"), true);
          }
        }
        // 2026-05-17 design v3-r10: success path uses the inline banner
        // (_showBanner) instead of a corner toast — covers "sent" status.

        // Server-driven thank-you: only show when /fire explicitly confirms
        // this message was accepted as a poll vote.
        try {
          const vote = responseData && responseData.poll_vote;
          if (window.ViewerStates && vote && vote.accepted === true) {
            window.ViewerStates.showThankYou({
              question: vote.question || window._lastPollQuestion || "進行中的投票",
              choice: vote.key || "",
              fp: clientFingerprint,
            });
          }
        } catch (_) { }
      } else {
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get("Retry-After");
          const retryAfter = Number.parseInt(retryAfterHeader || "0", 10);
          // Design v3-r10: amber cooldown banner first; full-screen
          // ViewerStates only when server says retryAfter > 3s (long wait).
          if (Number.isFinite(retryAfter) && retryAfter > 0 && retryAfter <= 3) {
            _startCooldown(retryAfter * 1000);
          } else if (window.ViewerStates && typeof window.ViewerStates.showRateLimited === "function") {
            window.ViewerStates.showRateLimited({
              retryAfter: Number.isFinite(retryAfter) ? retryAfter : 0,
            });
          } else {
            showToast("發送太快，請稍後再試", false);
          }
          return;
        }
        let message = ServerI18n.t("failedToSend");
        try {
          const data = responseData || {};
          if (data.status === "dropped" && data.reason === "full") {
            message = ServerI18n.t("onscreenFullDropped");
          } else if (data.status === "rejected" && data.reason === "queue_full") {
            message = ServerI18n.t("queueFullTryLater");
          } else {
            message = (typeof data.error === "string" ? data.error : data.error?.message) || message;
          }
          // P3 ViewerBanned: 403 with banned/blocked reason → show banned
          // state instead of just a toast.
          if (response.status === 403 && window.ViewerStates) {
            const lower = String(message).toLowerCase();
            if (lower.indexOf("ban") !== -1 || lower.indexOf("block") !== -1
                || message.indexOf("禁言") !== -1 || message.indexOf("封鎖") !== -1) {
              window.ViewerStates.showBanned({
                fp: clientFingerprint,
                reason: message,
              });
              return;
            }
          }
        } catch (_) { }
        showToast(message, false);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(ServerI18n.t("networkError"), false);
    } finally {
      setSendLoading(false);
    }
  });

  // --- Connection Status UI ---
  // Dot lives inside a viewer-conn-chip; target it by the state-bearing class,
  // not by `.connection-dot` (the base class was dropped in the 2-col hero).
  function _resetDotState(dot) {
    if (!dot) return;
    dot.classList.remove(
      "connection-dot--connected",
      "connection-dot--connecting",
      "connection-dot--disconnected",
      "connection-dot--failed",
      "connection-dot--live",
    );
  }

  function updateConnectionUI(state) {
    if (!elements.connectionStatus) return;
    const dot = elements.connectionStatus.querySelector("[class*='connection-dot--']") ||
                elements.connectionStatus.querySelector(".viewer-conn-chip-dot") ||
                elements.connectionStatus.querySelector(".connection-dot");
    if (!dot || !elements.connectionLabel) return;

    _resetDotState(dot);
    switch (state) {
      case "connected":
        dot.classList.add("connection-dot--connected");
        elements.connectionLabel.textContent = ServerI18n.t("connected");
        break;
      case "connecting":
        dot.classList.add("connection-dot--connecting");
        elements.connectionLabel.textContent = ServerI18n.t("connecting");
        break;
      case "disconnected":
        dot.classList.add("connection-dot--disconnected");
        elements.connectionLabel.textContent = ServerI18n.t("disconnected");
        break;
    }
    // 2026-05-18 design v4-r5: pop the offline banner when the WS drops
    // mid-session. It auto-clears once we transition back to "connected".
    _syncOfflineBanner(state);
  }

  // ── Offline banner (design v4-r5 ErrorViewerOffline) ────────────────
  // Mounted lazily when state !== "connected" for the first time.
  // After 60 s continuously offline, escalates to the extended-offline
  // modal card (design v4-r6 ViewerExtendedOffline) — bigger card with
  // queued message preview + force-reconnect CTA.
  let _offlineBackoff = 5;
  let _offlineRetryAt = 0;
  let _offlineTimer = null;
  let _offlineBannerEl = null;
  let _offlineSince = 0;
  let _extendedOfflineEl = null;

  function _ensureOfflineBanner() {
    if (_offlineBannerEl && document.body.contains(_offlineBannerEl)) return _offlineBannerEl;
    const el = document.createElement("div");
    el.className = "admin-offline-banner";
    el.innerHTML = `
      <div class="admin-offline-banner__head">
        <span class="admin-offline-banner__dot"></span>
        <span class="admin-offline-banner__title">離線中 · 連線後將自動送出</span>
      </div>
      <div class="admin-offline-banner__meta" data-offline-meta>RECONNECTING · 5s · 已排隊 0 則訊息</div>
      <div class="admin-offline-banner__progress"><div class="admin-offline-banner__progress-fill" data-offline-fill></div></div>`;
    document.body.appendChild(el);
    _offlineBannerEl = el;
    return el;
  }

  function _removeOfflineBanner() {
    if (_offlineBannerEl && _offlineBannerEl.parentNode) {
      _offlineBannerEl.parentNode.removeChild(_offlineBannerEl);
    }
    _offlineBannerEl = null;
    _removeExtendedOffline();
    _offlineSince = 0;
    if (_offlineTimer) { clearInterval(_offlineTimer); _offlineTimer = null; }
  }

  function _removeExtendedOffline() {
    if (_extendedOfflineEl && _extendedOfflineEl.parentNode) {
      _extendedOfflineEl.parentNode.removeChild(_extendedOfflineEl);
    }
    _extendedOfflineEl = null;
  }

  function _fmtOfflineDuration(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const r = s % 60;
    if (m === 0) return `${s} SEC`;
    return `${m} MIN ${String(r).padStart(2, "0")} SEC`;
  }

  function _ensureExtendedOffline() {
    if (_extendedOfflineEl && document.body.contains(_extendedOfflineEl)) return _extendedOfflineEl;
    const el = document.createElement("div");
    el.className = "admin-eoff";
    el.innerHTML = `
      <div class="admin-eoff__card">
        <div class="admin-eoff__icon">⚡</div>
        <div class="admin-eoff__title">無法連線到伺服器</div>
        <div class="admin-eoff__sub" data-eoff-sub>OFFLINE · 1 MIN 00 SEC</div>
        <div class="admin-eoff__desc">已超過 60 秒無法連線。請確認網路狀態，或聯繫活動主辦方。</div>
        <div class="admin-eoff__queue" data-eoff-queue hidden>
          <div class="admin-eoff__queue-label">QUEUED MESSAGE · <span data-eoff-queue-n>1</span> 則</div>
          <div class="admin-eoff__queue-text" data-eoff-queue-text></div>
          <div class="admin-eoff__queue-foot">連線恢復後自動送出</div>
        </div>
        <button type="button" class="admin-eoff__retry" data-eoff-retry>強制重新連線</button>
        <a class="admin-eoff__home" href="/">返回首頁</a>
      </div>`;
    document.body.appendChild(el);
    _extendedOfflineEl = el;
    el.querySelector("[data-eoff-retry]")?.addEventListener("click", () => {
      // Re-trigger WS reconnect by jiggling backoff to 0.
      _offlineBackoff = 0;
      _offlineRetryAt = Date.now();
      try { if (typeof connectWebSocket === "function") connectWebSocket(); } catch (_) {}
    });
    return el;
  }

  function _syncOfflineBanner(state) {
    if (state === "connected") {
      _removeOfflineBanner();
      _offlineBackoff = 5;
      return;
    }
    if (state !== "disconnected") return;
    if (!_offlineSince) _offlineSince = Date.now();
    const el = _ensureOfflineBanner();
    _offlineRetryAt = Date.now() + _offlineBackoff * 1000;
    if (_offlineTimer) clearInterval(_offlineTimer);
    _offlineTimer = setInterval(() => {
      if (!_offlineBannerEl || !document.body.contains(_offlineBannerEl)) {
        clearInterval(_offlineTimer); _offlineTimer = null; return;
      }
      const meta = el.querySelector("[data-offline-meta]");
      const fill = el.querySelector("[data-offline-fill]");
      const left = Math.max(0, (_offlineRetryAt - Date.now()) / 1000);
      const total = _offlineBackoff;
      const pct = Math.min(100, ((total - left) / total) * 100);
      // Queued messages = 1 when there's text in the input we couldn't ship.
      const queuedText = (elements.danmuText && elements.danmuText.value.trim()) || "";
      const queued = queuedText ? 1 : 0;
      if (meta) meta.textContent = `RECONNECTING · ${left.toFixed(1)}s · 已排隊 ${queued} 則訊息`;
      if (fill) fill.style.width = pct + "%";
      if (left <= 0) {
        // Bump backoff for the next cycle (capped). main.js's existing
        // reconnect loop will attempt on its own schedule — we just keep
        // the visible countdown in sync.
        _offlineBackoff = Math.min(30, _offlineBackoff + 5);
        _offlineRetryAt = Date.now() + _offlineBackoff * 1000;
      }

      // 2026-05-18 design v4-r6: escalate to extended-offline modal once
      // we've been offline > 60 s. The modal sits on top of the banner —
      // banner keeps showing the retry-countdown.
      const offlineDur = Date.now() - _offlineSince;
      if (offlineDur >= 60000) {
        const card = _ensureExtendedOffline();
        const sub = card.querySelector("[data-eoff-sub]");
        const queueBox = card.querySelector("[data-eoff-queue]");
        const queueText = card.querySelector("[data-eoff-queue-text]");
        const queueN = card.querySelector("[data-eoff-queue-n]");
        if (sub) sub.textContent = `OFFLINE · ${_fmtOfflineDuration(offlineDur)}`;
        if (queueBox) {
          queueBox.hidden = !queuedText;
          if (queueText) queueText.textContent = queuedText;
          if (queueN) queueN.textContent = String(queued);
        }
      }
    }, 250);
  }

  // --- Overlay Status Polling ---
  function updateOverlayUI(count) {
    // Track online state for the FIRE button gate (design v3-r10:
    // 觀眾在 overlay 未連線時不能送出, 避免訊息石沉大海).
    const wasOnline = _overlayOnline;
    _overlayOnline = count > 0;
    if (wasOnline !== _overlayOnline) _refreshSendButtonGate();

    if (!elements.overlayStatus || !elements.overlayLabel) return;
    const dot = elements.overlayStatus.querySelector("[class*='connection-dot--']") ||
                elements.overlayStatus.querySelector(".viewer-conn-chip-dot") ||
                elements.overlayStatus.querySelector(".connection-dot");
    if (!dot) return;
    _resetDotState(dot);
    if (_overlayOnline) {
      dot.classList.add("connection-dot--connected");
      elements.overlayLabel.textContent = ServerI18n.t("overlayConnected").replace("{n}", count);
    } else {
      dot.classList.add("connection-dot--disconnected");
      elements.overlayLabel.textContent = ServerI18n.t("overlayNone");
    }
  }

  function pollOverlayStatus() {
    fetch("/overlay_status")
      .then((r) => r.json())
      .then((data) => updateOverlayUI(data.overlay_count || 0))
      .catch(() => updateOverlayUI(0));
  }

  pollOverlayStatus();
  setInterval(pollOverlayStatus, 5000);

  // --- Session ended handler ---
  // Called when admin closes the active session. Behavior is admin-configured:
  //   "continue"     — do nothing (viewer keeps working in IDLE mode)
  //   "ended_screen" — disable input, show full-screen ended overlay
  //   "reload"       — auto-reload page after 3 s
  function _handleSessionEnded(behavior) {
    console.log("[viewer] session_ended received, behavior:", behavior);
    if (behavior === "continue") return;

    if (behavior === "reload") {
      setTimeout(() => { window.location.reload(); }, 3000);
      return;
    }

    if (behavior === "ended_screen") {
      // Disable the message form
      const form = document.getElementById("fireForm") || document.querySelector("form");
      if (form) {
        form.querySelectorAll("input, button, textarea").forEach((el) => { el.disabled = true; });
      }
      // Show ended overlay (reuse viewer-state system if available, else inject)
      if (window.ViewerStates && window.ViewerStates.show) {
        window.ViewerStates.show("ended");
      } else {
        _showSessionEndedFallback();
      }
    }
  }

  function _showSessionEndedFallback() {
    const existing = document.getElementById("viewer-session-ended-overlay");
    if (existing) return;
    const el = document.createElement("div");
    el.id = "viewer-session-ended-overlay";
    el.style.cssText = [
      "position:fixed", "inset:0", "z-index:9000",
      "background:rgba(10,14,26,.92)",
      "display:flex", "flex-direction:column",
      "align-items:center", "justify-content:center",
      "color:#e6e8ee", "font-family:inherit", "text-align:center", "padding:32px",
    ].join(";");
    el.innerHTML = `
      <div style="font-size:48px;margin-bottom:16px">🎉</div>
      <div style="font-size:22px;font-weight:700;margin-bottom:8px">本場活動已結束</div>
      <div style="font-size:14px;color:#9aa4b2;line-height:1.6">感謝您的參與！</div>`;
    document.body.appendChild(el);
  }

  // --- WebSocket ---
  let _wsReconnectAttempt = 0;
  const WS_BASE_DELAY = 3000;
  const WS_MAX_RECONNECT_DELAY = 30000;

  // ── Offline state (P2-1) ──────────────────────────────────────────────────
  // After 3 failed reconnect attempts within a 30s window we swap the
  // .viewer-body content with the offline card. Resets on successful connect.
  const OFFLINE_FAIL_THRESHOLD = 3;
  const OFFLINE_WINDOW_MS = 30000;
  const OFFLINE_RETRY_SECONDS = 15;
  let _wsFailTimestamps = [];
  let _offlineCardActive = false;
  let _offlineCountdownTimer = null;
  let _offlineBodyHtml = null;

  function _recordWsFailure() {
    const now = Date.now();
    _wsFailTimestamps.push(now);
    _wsFailTimestamps = _wsFailTimestamps.filter(
      (t) => now - t <= OFFLINE_WINDOW_MS
    );
    if (
      !_offlineCardActive &&
      _wsFailTimestamps.length >= OFFLINE_FAIL_THRESHOLD
    ) {
      showOfflineCard();
    }
  }

  function _getOpsContact() {
    // Optional operator contact — read from /get_settings payload. Safe to
    // call even if the key is absent (we only render if truthy).
    if (currentSettings && typeof currentSettings.OpsContact !== "undefined") {
      const oc = currentSettings.OpsContact;
      if (Array.isArray(oc)) return oc[3] || oc[0] || null;
      if (typeof oc === "string") return oc;
    }
    return null;
  }

  function showOfflineCard() {
    _setViewerMode("fire");
    const body = document.querySelector(".viewer-body");
    if (!body || _offlineCardActive) return;
    _offlineCardActive = true;
    _offlineBodyHtml = body.innerHTML;

    const opsContact = _getOpsContact();
    const contactHtml = opsContact
      ? `<a class="viewer-offline-btn is-secondary" href="${opsContact}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("offlineContactOps")}</a>`
      : "";

    body.innerHTML = `
      <div class="viewer-offline-card" role="alert" aria-live="assertive">
        <h2 class="viewer-offline-lockup">Danmu Fire</h2>
        <span class="viewer-offline-chip">
          <span class="viewer-offline-chip-dot" aria-hidden="true"></span>
          <span>${ServerI18n.t("offlineStatus")}</span>
        </span>
        <p class="viewer-offline-message">
          ${ServerI18n.t("offlineMessage")}
          <small>${ServerI18n.t("offlineHint")}</small>
        </p>
        <div class="viewer-offline-countdown" id="offlineCountdown" aria-live="polite">
          <span id="offlineCountdownValue">${OFFLINE_RETRY_SECONDS}</span>
          <span>${ServerI18n.t("offlineRetryUnit")}</span>
        </div>
        <div class="viewer-offline-actions">
          <button type="button" class="viewer-offline-btn" id="offlineReloadBtn">
            ${ServerI18n.t("offlineReload")}
          </button>
          ${contactHtml}
        </div>
      </div>
    `;

    // Disable sendbar while offline (keep visible per design).
    if (elements.btnSend) elements.btnSend.disabled = true;
    if (elements.danmuText) elements.danmuText.disabled = true;

    const btn = document.getElementById("offlineReloadBtn");
    if (btn) btn.addEventListener("click", () => window.location.reload());
    _startOfflineCountdown();
  }

  function _startOfflineCountdown() {
    let remaining = OFFLINE_RETRY_SECONDS;
    const valueEl = document.getElementById("offlineCountdownValue");
    if (_offlineCountdownTimer) clearInterval(_offlineCountdownTimer);
    _offlineCountdownTimer = setInterval(() => {
      remaining -= 1;
      if (valueEl) valueEl.textContent = String(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(_offlineCountdownTimer);
        _offlineCountdownTimer = null;
        // One nudge — trigger an immediate reconnect attempt. ws.onclose
        // already schedules retries, but we collapse the backoff here.
        try { if (ws && ws.readyState !== WebSocket.OPEN) ws.close(); } catch (_) {}
        connectWebSocket();
        // Reset countdown for the next cycle (still offline = keep visible).
        if (_offlineCardActive) _startOfflineCountdown();
      }
    }, 1000);
  }

  function hideOfflineCard() {
    if (!_offlineCardActive) return;
    _offlineCardActive = false;
    _wsFailTimestamps = [];
    if (_offlineCountdownTimer) {
      clearInterval(_offlineCountdownTimer);
      _offlineCountdownTimer = null;
    }
    const body = document.querySelector(".viewer-body");
    if (body && _offlineBodyHtml !== null) {
      body.innerHTML = _offlineBodyHtml;
      _offlineBodyHtml = null;
      // Re-bind controls after DOM restore — easiest is a soft reload of the
      // nickname/fields, but most values are driven by settings + WS push.
      // Just re-run input wiring for the core inputs that persisted via IDs.
    }
    if (elements.btnSend) elements.btnSend.disabled = false;
    if (elements.danmuText) elements.danmuText.disabled = false;
    updateSendEnabled();
  }

  // v5.0.0+ Phase 2: viewer no longer opens a WebSocket. The three
  // legacy push types map to public polling endpoints:
  //   poll_update      → GET /poll/public-status
  //   settings_changed → GET /get_settings (diffed; only re-applies on change)
  //   session_ended    → GET /session/public-state (live → ended transition)
  // One combined 2-second tick keeps overhead minimal. Connection UI
  // ("connected" / "disconnected") is derived from poll success rather
  // than a real socket — operator sees the same visual state.
  let _pollTimer = null;
  let _settingsHash = null;
  let _lastSessionStatus = null;
  let _consecutivePollFailures = 0;
  const VIEWER_POLL_INTERVAL_MS = 2000;
  const VIEWER_FAIL_THRESHOLD = 3; // mark disconnected after 3 consecutive misses

  async function _pollViewerState() {
    const fetches = [
      fetch("/get_settings", { credentials: "same-origin" })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null),
      VIEWER_POLL_ENABLED
        ? fetch("/poll/public-status", { credentials: "same-origin" })
            .then((r) => (r.ok ? r.json() : null))
            .catch(() => null)
        : Promise.resolve(null),
      fetch("/session/public-state", { credentials: "same-origin" })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null),
    ];
    const [settings, pollState, sessionState] = await Promise.all(fetches);

    // Settings — diff & re-apply on change. Initial boot fetch
    // populates currentSettings; subsequent polls only act on a real
    // change so we don't churn UI every tick.
    if (settings) {
      const hash = JSON.stringify(settings);
      if (_settingsHash !== null && hash !== _settingsHash) {
        currentSettings = settings;
        if (currentSettings.FontFamily && currentSettings.FontFamily[0]) {
          if (elements.userFontSelectControl) {
            elements.userFontSelectControl.style.display = "block";
            populateUserFontDropdown();
          }
        } else if (elements.userFontSelectControl) {
          elements.userFontSelectControl.style.display = "none";
        }
        applyEffectsVisibility(currentSettings);
        updatePreview();
      }
      _settingsHash = hash;
    }

    // Poll state — feed straight into the existing renderer.
    if (pollState) {
      _applyPollState(pollState);
    }

    // Session — fire ended handler on live → ended transition.
    if (sessionState) {
      const status = sessionState.status || sessionState.state || null;
      if (status === "ended" && _lastSessionStatus === "live") {
        _handleSessionEnded(sessionState.viewer_end_behavior || "continue");
      }
      _lastSessionStatus = status;
    }

    // Connection UI — at least one successful response = "connected".
    // Failures cascade through `_recordWsFailure()` so the existing
    // offline-card flow (kept from the WS days) still fires after 3
    // misses in 30s — disabled-send + countdown + ops-contact UX must
    // not regress just because the transport changed to polling.
    if (settings || pollState || sessionState) {
      if (_consecutivePollFailures > 0) {
        _consecutivePollFailures = 0;
        if (_offlineCardActive) hideOfflineCard();
      }
      updateConnectionUI("connected");
    } else {
      _consecutivePollFailures++;
      _recordWsFailure();
      if (_consecutivePollFailures >= VIEWER_FAIL_THRESHOLD) {
        updateConnectionUI("disconnected");
      }
    }
  }

  function connectWebSocket() {
    // Function name preserved for minimal callsite churn. Now bootstraps
    // the polling loop instead of opening a WebSocket.
    updateConnectionUI("connecting");
    if (_pollTimer) {
      clearInterval(_pollTimer);
      _pollTimer = null;
    }
    _pollViewerState(); // immediate first tick
    _pollTimer = setInterval(_pollViewerState, VIEWER_POLL_INTERVAL_MS);
  }

  // Stop polling on unload to avoid background traffic.
  window.addEventListener("beforeunload", () => {
    if (_pollTimer) {
      clearInterval(_pollTimer);
      _pollTimer = null;
    }
  });

  // --- Mobile soft-keyboard: keep sendbar above the visual viewport ---
  // On iOS Safari (and some Android browsers) `100dvh` does not shrink when
  // the on-screen keyboard opens, so the flex-pinned sendbar ends up hidden
  // behind the keyboard. `visualViewport` reports the actually-visible area,
  // so we pin the sendbar there directly. Feature-detected — browsers without
  // `visualViewport` keep the existing flex-bottom behavior untouched.
  if (window.visualViewport && elements.sendbar) {
    const vv = window.visualViewport;
    const _repositionSendbar = () => {
      const keyboardOffset = window.innerHeight - vv.height - vv.offsetTop;
      if (keyboardOffset > 0) {
        elements.sendbar.style.position = "fixed";
        elements.sendbar.style.left = "0";
        elements.sendbar.style.right = "0";
        elements.sendbar.style.bottom = `${keyboardOffset}px`;
      } else {
        elements.sendbar.style.position = "";
        elements.sendbar.style.left = "";
        elements.sendbar.style.right = "";
        elements.sendbar.style.bottom = "";
      }
    };
    vv.addEventListener("resize", _repositionSendbar);
    vv.addEventListener("scroll", _repositionSendbar);
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
      if (elements.effectParamsPanel) {
        elements.effectParamsPanel.innerHTML = "";
        elements.effectParamsPanel.hidden = true;
      }
    }
  }

  // --- Initialization ---
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
        refreshFontCache(true).catch(() => { });
      }

      // Apply Effects visibility
      applyEffectsVisibility(settings);

      // Initialize WebSocket for real-time updates
      connectWebSocket();

      // Sync preview with initial input values
      updatePreview();

      // Restore nickname from localStorage
      const nicknameInput = document.getElementById("nicknameInput");
      if (nicknameInput) {
        try {
          const saved = localStorage.getItem("danmu_nickname");
          if (saved) nicknameInput.value = saved;
        } catch (_) { }
      }

      // Nickname → preview-nick (top-left of the preview block) live
      // sync. No `@` prefix. Save to localStorage on change.
      (function wireNickname() {
        if (!nicknameInput) return;
        const previewNick = document.getElementById("previewNick");
        const chipText = document.querySelector("[data-nickname-display]");
        const renderNick = () => {
          const v = (nicknameInput.value || "").trim();
          if (previewNick) previewNick.textContent = v;
          if (chipText) chipText.textContent = v || "Anonymous";
          try { localStorage.setItem("danmu_nickname", v); } catch (_) {}
        };
        nicknameInput.addEventListener("input", renderNick);
        renderNick();
      })();

      // Nickname chip → inline edit. Click chip to swap it for an input
      // in the same position; Enter / blur commits, Escape cancels.
      (function wireNicknameChip() {
        const chipBtn = document.getElementById("nicknameChipBtn");
        const inlineInput = document.querySelector("[data-nickname-inline-input]");
        if (!chipBtn || !inlineInput || !nicknameInput) return;

        let _prev = "";
        const enterEdit = () => {
          _prev = nicknameInput.value || "";
          inlineInput.value = _prev;
          chipBtn.hidden = true;
          inlineInput.hidden = false;
          setTimeout(() => { try { inlineInput.focus(); inlineInput.select(); } catch (_) {} }, 20);
        };
        const commit = () => {
          const v = (inlineInput.value || "").trim();
          nicknameInput.value = v;
          nicknameInput.dispatchEvent(new Event("input", { bubbles: true }));
          inlineInput.hidden = true;
          chipBtn.hidden = false;
        };
        const cancel = () => {
          inlineInput.hidden = true;
          chipBtn.hidden = false;
        };

        chipBtn.addEventListener("click", enterEdit);
        inlineInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") { e.preventDefault(); commit(); }
          if (e.key === "Escape") { e.preventDefault(); cancel(); }
        });
        inlineInput.addEventListener("blur", () => { commit(); });
      })();

      // Layout mode buttons
      const layoutBtns = document.querySelectorAll(".layout-btn");
      const layoutSelect = document.getElementById("layoutSelect");
      if (layoutBtns.length > 0 && layoutSelect) {
        layoutBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            layoutBtns.forEach((b) => {
              b.classList.remove("active", "is-active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
              b.classList.add("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
              b.setAttribute("aria-pressed", "false");
            });
            btn.classList.remove("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
            btn.classList.add("active", "is-active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
            btn.setAttribute("aria-pressed", "true");
            layoutSelect.value = btn.dataset.layout;
          });
        });
      }

      // Load emoji picker
      const emojiPicker = document.getElementById("emojiPicker");
      if (emojiPicker) {
        fetch("/emojis")
          .then((r) => r.json())
          .then((data) => {
            const emojis = data.emojis || [];
            emojiCache = emojis;
            updatePreview();
            if (emojis.length === 0) {
              emojiPicker.innerHTML = '<span class="text-xs text-slate-400">No emojis available</span>';
              return;
            }
            emojiPicker.innerHTML = "";
            emojis.forEach((em) => {
              const btn = document.createElement("button");
              btn.type = "button";
              btn.className = "emoji-picker-btn p-1 rounded hover:bg-slate-700/50 transition-colors";
              btn.title = ":" + em.name + ":";
              const img = document.createElement("img");
              img.src = em.url;
              img.alt = em.name;
              img.style.cssText = "width:32px;height:32px;";
              btn.appendChild(img);
              btn.addEventListener("click", (ev) => {
                // Prevent the implicit submit + scroll-to-top behaviour: focusing
                // a far-away textarea would yank the page back to the input, so
                // we capture and restore both window and emoji-picker scroll.
                ev.preventDefault();
                const textarea = elements.danmuText;
                const insertText = ":" + em.name + ":";
                const start = textarea.selectionStart ?? textarea.value.length;
                const end = textarea.selectionEnd ?? start;
                textarea.value =
                  textarea.value.substring(0, start) + insertText + textarea.value.substring(end);
                const newCursor = start + insertText.length;
                const winY = window.scrollY;
                const winX = window.scrollX;
                const pickerScroll = emojiPicker.scrollTop;
                try {
                  textarea.focus({ preventScroll: true });
                } catch (_) {
                  textarea.focus();
                }
                textarea.setSelectionRange(newCursor, newCursor);
                window.scrollTo(winX, winY);
                emojiPicker.scrollTop = pickerScroll;
                updateCharCount();
                updatePreview();
              });
              emojiPicker.appendChild(btn);
            });
          })
          .catch(() => {
            emojiPicker.innerHTML = '<span class="text-xs text-slate-400">Failed to load emojis</span>';
          });
      }
    })
    .catch((err) => console.error("Failed to load settings:", err));
});
