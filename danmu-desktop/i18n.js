// Internationalization (i18n) support for danmu-desktop
const i18n = {
  currentLang: "en",

  translations: {
    en: {
      // Header
      title: "Danmu Overlay Setup",
      subtitle: "Configure and launch the danmu overlay",

      // Form labels
      hostLabel: "Server Address (IP or Domain)",
      hostPlaceholder: "e.g., 127.0.0.1 or mydomain.com",
      portLabel: "WebSocket Port",
      portPlaceholder: "e.g., 4001",
      displayLabel: "Target Display",
      syncMultiDisplay: "Enable synchronous multi-display",

      // Buttons
      startButton: "Start Danmu",
      stopButton: "Stop Danmu",

      // Status
      statusConnecting: "Connecting to server...",
      statusConnected: "Connected to server",
      statusDisconnected: "Connection lost, reconnecting...",
      statusIdle: "Disconnected",
      statusStopped: "Stopped",
      statusConnectionFailed: "Connection failed",

      // Toast messages
      toastStarting: "Starting danmu overlay connection...",
      toastConnected: "Successfully connected to server",
      toastReconnecting: "Connection lost, attempting to reconnect...",
      toastStopped: "Danmu overlay stopped",
      toastSettingsLoaded: "Previous settings loaded",
      toastConnectionFailed: "Unable to reach the server. Please verify settings.",

      // Validation errors
      errorEmptyHost: "Please enter a server address",
      errorInvalidHost: "Invalid server address. Please enter a valid IP or domain",
      errorEmptyPort: "Please enter a port number",
      errorInvalidPort: "Invalid port. Please enter a number between 1 and 65535",

      // Preview & Settings
      previewSettings: "Preview & Settings",
      testDanmu: "Test Danmu",
      previewPlaceholder: "Enter test danmu text...",
      sendPreview: "Send",
      overlaySettings: "Overlay Settings",
      opacity: "Opacity",
      speed: "Speed",
      fontSize: "Font Size",
      color: "Color",
      errorEmptyPreview: "Please enter preview text",
      errorOverlayNotActive: "Please start the overlay first",
      previewSent: "Preview danmu sent!",

      // Text effects
      textEffects: "Text Effects",
      textStroke: "Text Stroke",
      strokeWidth: "Stroke Width",
      strokeColor: "Stroke Color",
      textShadow: "Text Shadow",
      shadowBlur: "Shadow Blur",

      // Display area control
      displayAreaControl: "Display Area Control",
      displayAreaTop: "Top Position",
      displayAreaHeight: "Display Height",
      displayAreaPreview: "Preview",

      // Track management
      trackManagement: "Track Management",
      maxTracks: "Maximum Tracks",
      maxTracksHint: "0 = Unlimited tracks",
      collisionDetection: "Collision Detection",

      // Batch test
      batchTest: "Batch Test",
      startBatchTest: "Start Batch Test",
      batchTestHint: "Test collision detection and track distribution",
      batchTestStarted: "Sending test danmu...",
      batchTestComplete: "Batch test completed!",

      // Startup animation
      startupAnimation: "Startup Animation",
      enableStartupAnimation: "Enable Startup Animation",
      animationType: "Animation Type",
      animationLinkStart: "LINK START",
      animationDomainExpansion: "Domain Expansion",
      animationCustom: "Custom",
      customAnimationText: "Custom Animation Text",
      customAnimationPlaceholder: "Enter custom animation text...",
    },

    zh: {
      // Header
      title: "彈幕設定",
      subtitle: "配置並啟動彈幕",

      // Form labels
      hostLabel: "伺服器位址（IP 或網域）",
      hostPlaceholder: "例如：127.0.0.1 或 mydomain.com",
      portLabel: "WebSocket 連接埠",
      portPlaceholder: "例如：4001",
      displayLabel: "目標顯示器",
      syncMultiDisplay: "啟用同步多顯示器",

      // Buttons
      startButton: "啟動彈幕",
      stopButton: "關閉彈幕",

      // Status
      statusConnecting: "正在連線至伺服器...",
      statusConnected: "已連線至伺服器",
      statusDisconnected: "連線中斷，重新連線中...",
      statusIdle: "已中斷連線",
      statusStopped: "已停止",
      statusConnectionFailed: "連線失敗",

      // Toast messages
      toastStarting: "正在啟動彈幕連線...",
      toastConnected: "成功連線至伺服器",
      toastReconnecting: "連線中斷，正在嘗試重新連線...",
      toastStopped: "彈幕已停止",
      toastSettingsLoaded: "已載入先前的設定",
      toastConnectionFailed: "無法連線至伺服器，請檢查設定",

      // Validation errors
      errorEmptyHost: "請輸入伺服器位址",
      errorInvalidHost: "無效的伺服器位址。請輸入有效的 IP 或網域",
      errorEmptyPort: "請輸入連接埠號碼",
      errorInvalidPort: "無效的連接埠。請輸入 1 到 65535 之間的數字",

      // Preview & Settings
      previewSettings: "預覽與設定",
      testDanmu: "測試彈幕",
      previewPlaceholder: "輸入測試彈幕文字...",
      sendPreview: "發送",
      overlaySettings: "彈幕設定",
      opacity: "不透明度",
      speed: "速度",
      fontSize: "字體大小",
      color: "顏色",
      errorEmptyPreview: "請輸入預覽文字",
      errorOverlayNotActive: "請先啟動彈幕",
      previewSent: "預覽彈幕已發送！",

      // Text effects
      textEffects: "文字特效",
      textStroke: "文字描邊",
      strokeWidth: "描邊寬度",
      strokeColor: "描邊顏色",
      textShadow: "文字陰影",
      shadowBlur: "陰影模糊",

      // Display area control
      displayAreaControl: "彈幕顯示區域",
      displayAreaTop: "上方位置",
      displayAreaHeight: "顯示高度",
      displayAreaPreview: "預覽",

      // Track management
      trackManagement: "軌道管理",
      maxTracks: "最大軌道數",
      maxTracksHint: "0 = 無限制軌道",
      collisionDetection: "碰撞檢測",

      // Batch test
      batchTest: "批量測試",
      startBatchTest: "開始批量測試",
      batchTestHint: "測試碰撞檢測和軌道分配",
      batchTestStarted: "正在發送測試彈幕...",
      batchTestComplete: "批量測試完成！",

      // Startup animation
      startupAnimation: "啟動動畫",
      enableStartupAnimation: "啟用啟動動畫",
      animationType: "動畫類型",
      animationLinkStart: "LINK START",
      animationDomainExpansion: "領域展開",
      animationCustom: "自訂",
      customAnimationText: "自訂動畫文字",
      customAnimationPlaceholder: "輸入自訂動畫文字...",
    },
  },

  // Get translation for a key
  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  },

  // Set language
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.updateUI();
      localStorage.setItem("danmu-lang", lang);
    }
  },

  // Load saved language
  async loadLanguage() {
    const saved = localStorage.getItem("danmu-lang");
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
      return;
    }

    // Auto-detect language from system locale (Electron) or browser
    try {
      // Try to get system locale from Electron API
      if (window.API && typeof window.API.getSystemLocale === 'function') {
        const systemLocale = await window.API.getSystemLocale();
        console.log('[i18n] System locale detected:', systemLocale);

        if (systemLocale.startsWith("zh")) {
          this.currentLang = "zh";
          return;
        }
      }
    } catch (error) {
      console.warn('[i18n] Failed to get system locale, falling back to browser detection:', error);
    }

    // Fallback to browser language detection
    const browserLang = navigator.language || navigator.userLanguage;
    console.log('[i18n] Browser language detected:', browserLang);
    if (browserLang.startsWith("zh")) {
      this.currentLang = "zh";
    }
  },

  // Update UI with current language
  updateUI() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.placeholder = this.t(key);
    });
  },
};

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = i18n;
}
