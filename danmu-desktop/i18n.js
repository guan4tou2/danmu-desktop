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
      maxTracksUnlimited: "Unlimited",
      collisionDetection: "Collision Detection",

      // Batch test
      batchTest: "Batch Test",
      startBatchTest: "Start Batch Test",
      batchTestHint: "Test collision detection and track distribution",
      batchTestStarted: "Sending test danmu...",
      batchTestComplete: "Batch test completed!",

      // Settings I/O
      exportSettings: "Export Settings",
      importSettings: "Import Settings",

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
      maxTracksUnlimited: "無限制",
      collisionDetection: "碰撞檢測",

      // Batch test
      batchTest: "批量測試",
      startBatchTest: "開始批量測試",
      batchTestHint: "測試碰撞檢測和軌道分配",
      batchTestStarted: "正在發送測試彈幕...",
      batchTestComplete: "批量測試完成！",

      // Settings I/O
      exportSettings: "匯出設定",
      importSettings: "匯入設定",

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

    ja: {
      // Header
      title: "弾幕オーバーレイ設定",
      subtitle: "オーバーレイの設定と起動",

      // Form labels
      hostLabel: "サーバーアドレス（IPまたはドメイン）",
      hostPlaceholder: "例：127.0.0.1 または mydomain.com",
      portLabel: "WebSocketポート",
      portPlaceholder: "例：4001",
      displayLabel: "対象ディスプレイ",
      syncMultiDisplay: "同期マルチディスプレイを有効化",

      // Buttons
      startButton: "オーバーレイ開始",
      stopButton: "オーバーレイ停止",

      // Status
      statusConnecting: "サーバーに接続中...",
      statusConnected: "サーバーに接続しました",
      statusDisconnected: "接続が切断されました。再接続中...",
      statusIdle: "切断済み",
      statusStopped: "停止済み",
      statusConnectionFailed: "接続に失敗しました",

      // Toast messages
      toastStarting: "弾幕オーバーレイ接続を開始しています...",
      toastConnected: "サーバーに接続しました",
      toastReconnecting: "接続が切断されました。再接続を試みています...",
      toastStopped: "弾幕オーバーレイを停止しました",
      toastSettingsLoaded: "以前の設定を読み込みました",
      toastConnectionFailed: "サーバーに接続できません。設定を確認してください。",

      // Validation errors
      errorEmptyHost: "サーバーアドレスを入力してください",
      errorInvalidHost: "無効なサーバーアドレスです。有効なIPまたはドメインを入力してください",
      errorEmptyPort: "ポート番号を入力してください",
      errorInvalidPort: "無効なポートです。1から65535の数字を入力してください",

      // Preview & Settings
      previewSettings: "プレビューと設定",
      testDanmu: "弾幕テスト",
      previewPlaceholder: "テスト弾幕テキストを入力...",
      sendPreview: "送信",
      overlaySettings: "オーバーレイ設定",
      opacity: "不透明度",
      speed: "速度",
      fontSize: "フォントサイズ",
      color: "色",
      errorEmptyPreview: "プレビューテキストを入力してください",
      errorOverlayNotActive: "先にオーバーレイを起動してください",
      previewSent: "プレビュー弾幕を送信しました！",

      // Text effects
      textEffects: "テキストエフェクト",
      textStroke: "テキスト縁取り",
      strokeWidth: "縁取り幅",
      strokeColor: "縁取り色",
      textShadow: "テキストシャドウ",
      shadowBlur: "シャドウぼかし",

      // Display area control
      displayAreaControl: "表示エリア設定",
      displayAreaTop: "上部位置",
      displayAreaHeight: "表示高さ",
      displayAreaPreview: "プレビュー",

      // Track management
      trackManagement: "トラック管理",
      maxTracks: "最大トラック数",
      maxTracksHint: "0 = 無制限",
      maxTracksUnlimited: "無制限",
      collisionDetection: "衝突検出",

      // Batch test
      batchTest: "一括テスト",
      startBatchTest: "一括テスト開始",
      batchTestHint: "衝突検出とトラック配分のテスト",
      batchTestStarted: "テスト弾幕を送信中...",
      batchTestComplete: "一括テスト完了！",

      // Settings I/O
      exportSettings: "設定をエクスポート",
      importSettings: "設定をインポート",

      // Startup animation
      startupAnimation: "起動アニメーション",
      enableStartupAnimation: "起動アニメーションを有効化",
      animationType: "アニメーションタイプ",
      animationLinkStart: "LINK START",
      animationDomainExpansion: "領域展開",
      animationCustom: "カスタム",
      customAnimationText: "カスタムアニメーションテキスト",
      customAnimationPlaceholder: "カスタムアニメーションテキストを入力...",
    },

    ko: {
      // Header
      title: "탄막 오버레이 설정",
      subtitle: "오버레이 구성 및 실행",

      // Form labels
      hostLabel: "서버 주소 (IP 또는 도메인)",
      hostPlaceholder: "예: 127.0.0.1 또는 mydomain.com",
      portLabel: "WebSocket 포트",
      portPlaceholder: "예: 4001",
      displayLabel: "대상 디스플레이",
      syncMultiDisplay: "동기 멀티 디스플레이 활성화",

      // Buttons
      startButton: "오버레이 시작",
      stopButton: "오버레이 중지",

      // Status
      statusConnecting: "서버에 연결 중...",
      statusConnected: "서버에 연결됨",
      statusDisconnected: "연결이 끊어졌습니다. 재연결 중...",
      statusIdle: "연결 해제됨",
      statusStopped: "중지됨",
      statusConnectionFailed: "연결 실패",

      // Toast messages
      toastStarting: "탄막 오버레이 연결을 시작하는 중...",
      toastConnected: "서버에 성공적으로 연결되었습니다",
      toastReconnecting: "연결이 끊어졌습니다. 재연결을 시도하는 중...",
      toastStopped: "탄막 오버레이가 중지되었습니다",
      toastSettingsLoaded: "이전 설정을 불러왔습니다",
      toastConnectionFailed: "서버에 연결할 수 없습니다. 설정을 확인해 주세요.",

      // Validation errors
      errorEmptyHost: "서버 주소를 입력해 주세요",
      errorInvalidHost: "잘못된 서버 주소입니다. 유효한 IP 또는 도메인을 입력해 주세요",
      errorEmptyPort: "포트 번호를 입력해 주세요",
      errorInvalidPort: "잘못된 포트입니다. 1에서 65535 사이의 숫자를 입력해 주세요",

      // Preview & Settings
      previewSettings: "미리보기 및 설정",
      testDanmu: "탄막 테스트",
      previewPlaceholder: "테스트 탄막 텍스트 입력...",
      sendPreview: "전송",
      overlaySettings: "오버레이 설정",
      opacity: "불투명도",
      speed: "속도",
      fontSize: "글꼴 크기",
      color: "색상",
      errorEmptyPreview: "미리보기 텍스트를 입력해 주세요",
      errorOverlayNotActive: "먼저 오버레이를 시작해 주세요",
      previewSent: "미리보기 탄막을 전송했습니다!",

      // Text effects
      textEffects: "텍스트 효과",
      textStroke: "텍스트 윤곽선",
      strokeWidth: "윤곽선 두께",
      strokeColor: "윤곽선 색상",
      textShadow: "텍스트 그림자",
      shadowBlur: "그림자 블러",

      // Display area control
      displayAreaControl: "표시 영역 설정",
      displayAreaTop: "상단 위치",
      displayAreaHeight: "표시 높이",
      displayAreaPreview: "미리보기",

      // Track management
      trackManagement: "트랙 관리",
      maxTracks: "최대 트랙 수",
      maxTracksHint: "0 = 무제한",
      maxTracksUnlimited: "무제한",
      collisionDetection: "충돌 감지",

      // Batch test
      batchTest: "일괄 테스트",
      startBatchTest: "일괄 테스트 시작",
      batchTestHint: "충돌 감지 및 트랙 배분 테스트",
      batchTestStarted: "테스트 탄막 전송 중...",
      batchTestComplete: "일괄 테스트 완료!",

      // Settings I/O
      exportSettings: "설정 내보내기",
      importSettings: "설정 가져오기",

      // Startup animation
      startupAnimation: "시작 애니메이션",
      enableStartupAnimation: "시작 애니메이션 활성화",
      animationType: "애니메이션 유형",
      animationLinkStart: "LINK START",
      animationDomainExpansion: "영역 전개",
      animationCustom: "사용자 지정",
      customAnimationText: "사용자 지정 애니메이션 텍스트",
      customAnimationPlaceholder: "사용자 지정 애니메이션 텍스트 입력...",
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

        const detectedLang = this._detectLangFromLocale(systemLocale);
        if (detectedLang) {
          this.currentLang = detectedLang;
          return;
        }
      }
    } catch (error) {
      console.warn('[i18n] Failed to get system locale, falling back to browser detection:', error);
    }

    // Fallback to browser language detection
    const browserLang = navigator.language || navigator.userLanguage;
    console.log('[i18n] Browser language detected:', browserLang);
    const detectedLang = this._detectLangFromLocale(browserLang);
    if (detectedLang) {
      this.currentLang = detectedLang;
    }
  },

  // Detect language from a locale string (e.g. "ja", "ja-JP", "zh-TW", "ko-KR")
  _detectLangFromLocale(locale) {
    if (!locale) return null;
    if (locale.startsWith("zh")) return "zh";
    if (locale.startsWith("ja")) return "ja";
    if (locale.startsWith("ko")) return "ko";
    return null;
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
