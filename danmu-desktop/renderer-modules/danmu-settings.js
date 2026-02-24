// Danmu configuration UI and event listeners
const { sanitizeLog } = require("../shared/utils");

const DEFAULT_DANMU_SETTINGS = {
  opacity: 100,
  speed: 5,
  size: 50,
  color: "#ffffff",
  textStroke: true,
  strokeWidth: 2,
  strokeColor: "#000000",
  textShadow: false,
  shadowBlur: 4,
  displayAreaTop: 0,
  displayAreaHeight: 100,
  maxTracks: 10,
  collisionDetection: true,
};

/** Returns a frozen snapshot of all danmu-settings DOM elements. */
function getDanmuElements() {
  return {
    overlayOpacity: document.getElementById("overlay-opacity"),
    opacityValue: document.getElementById("opacity-value"),
    danmuSpeed: document.getElementById("danmu-speed"),
    speedValue: document.getElementById("speed-value"),
    danmuSize: document.getElementById("danmu-size"),
    sizeValue: document.getElementById("size-value"),
    danmuColor: document.getElementById("danmu-color"),
    textStrokeToggle: document.getElementById("text-stroke-toggle"),
    strokeControls: document.getElementById("stroke-controls"),
    strokeWidth: document.getElementById("stroke-width"),
    strokeWidthValue: document.getElementById("stroke-width-value"),
    strokeColor: document.getElementById("stroke-color"),
    textShadowToggle: document.getElementById("text-shadow-toggle"),
    shadowControls: document.getElementById("shadow-controls"),
    shadowBlur: document.getElementById("shadow-blur"),
    shadowBlurValue: document.getElementById("shadow-blur-value"),
    displayAreaTop: document.getElementById("display-area-top"),
    displayAreaTopValue: document.getElementById("display-area-top-value"),
    displayAreaHeight: document.getElementById("display-area-height"),
    displayAreaHeightValue: document.getElementById("display-area-height-value"),
    maxTracksEl: document.getElementById("max-tracks"),
    maxTracksValue: document.getElementById("max-tracks-value"),
    collisionDetectionToggle: document.getElementById("collision-detection-toggle"),
    displayAreaIndicator: document.getElementById("display-area-indicator"),
    previewButton: document.getElementById("preview-button"),
    previewText: document.getElementById("preview-text"),
    batchTestButton: document.getElementById("batch-test-button"),
    batchTestCount: document.getElementById("batch-test-count"),
  };
}

function updateDisplayAreaIndicator(danmuSettings) {
  const el = document.getElementById("display-area-indicator");
  if (el) {
    el.style.top = `${danmuSettings.displayAreaTop}%`;
    el.style.height = `${danmuSettings.displayAreaHeight}%`;
  }
}

function saveDanmuSettings(danmuSettings) {
  localStorage.setItem("danmu-display-settings", JSON.stringify(danmuSettings));
}

function loadDanmuSettings(danmuSettings) {
  try {
    const saved = localStorage.getItem("danmu-display-settings");
    if (!saved) return;

    Object.assign(danmuSettings, JSON.parse(saved));

    const els = getDanmuElements();

    if (els.overlayOpacity) els.overlayOpacity.value = danmuSettings.opacity;
    if (els.opacityValue) els.opacityValue.textContent = `${danmuSettings.opacity}%`;
    if (els.danmuSpeed) els.danmuSpeed.value = danmuSettings.speed;
    if (els.speedValue) els.speedValue.textContent = danmuSettings.speed;
    if (els.danmuSize) els.danmuSize.value = danmuSettings.size;
    if (els.sizeValue) els.sizeValue.textContent = `${danmuSettings.size}px`;
    if (els.danmuColor) els.danmuColor.value = danmuSettings.color;
    if (els.textStrokeToggle) els.textStrokeToggle.checked = danmuSettings.textStroke;
    if (els.strokeWidth) els.strokeWidth.value = danmuSettings.strokeWidth;
    if (els.strokeWidthValue) els.strokeWidthValue.textContent = `${danmuSettings.strokeWidth}px`;
    if (els.strokeColor) els.strokeColor.value = danmuSettings.strokeColor;
    if (els.textShadowToggle) els.textShadowToggle.checked = danmuSettings.textShadow;
    if (els.shadowBlur) els.shadowBlur.value = danmuSettings.shadowBlur;
    if (els.shadowBlurValue) els.shadowBlurValue.textContent = `${danmuSettings.shadowBlur}px`;
    if (els.displayAreaTop) els.displayAreaTop.value = danmuSettings.displayAreaTop;
    if (els.displayAreaTopValue) els.displayAreaTopValue.textContent = `${danmuSettings.displayAreaTop}%`;
    if (els.displayAreaHeight) els.displayAreaHeight.value = danmuSettings.displayAreaHeight;
    if (els.displayAreaHeightValue) els.displayAreaHeightValue.textContent = `${danmuSettings.displayAreaHeight}%`;
    if (els.maxTracksEl) els.maxTracksEl.value = danmuSettings.maxTracks;
    if (els.maxTracksValue)
      els.maxTracksValue.textContent =
        danmuSettings.maxTracks === 0
          ? (typeof i18n !== "undefined" ? i18n.t("maxTracksUnlimited") : "Unlimited")
          : danmuSettings.maxTracks;
    if (els.collisionDetectionToggle)
      els.collisionDetectionToggle.checked = danmuSettings.collisionDetection;

    if (els.strokeControls)
      els.strokeControls.classList.toggle("hidden", !danmuSettings.textStroke);
    if (els.shadowControls)
      els.shadowControls.classList.toggle("hidden", !danmuSettings.textShadow);

    updateDisplayAreaIndicator(danmuSettings);

    if (window.updateDanmuTrackSettings) {
      window.updateDanmuTrackSettings(
        danmuSettings.maxTracks,
        danmuSettings.collisionDetection
      );
    }
  } catch (e) {
    console.error("[loadDanmuSettings] Error:", sanitizeLog(e.message));
  }
}

function initDanmuSettings(danmuSettings, showToast, t) {
  const els = getDanmuElements();

  if (els.overlayOpacity) {
    els.overlayOpacity.addEventListener("input", (e) => {
      danmuSettings.opacity = parseInt(e.target.value);
      if (els.opacityValue) els.opacityValue.textContent = `${danmuSettings.opacity}%`;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.danmuSpeed) {
    els.danmuSpeed.addEventListener("input", (e) => {
      danmuSettings.speed = parseInt(e.target.value);
      if (els.speedValue) els.speedValue.textContent = danmuSettings.speed;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.danmuSize) {
    els.danmuSize.addEventListener("input", (e) => {
      danmuSettings.size = parseInt(e.target.value);
      if (els.sizeValue) els.sizeValue.textContent = `${danmuSettings.size}px`;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.danmuColor) {
    els.danmuColor.addEventListener("input", (e) => {
      danmuSettings.color = e.target.value;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.textStrokeToggle) {
    els.textStrokeToggle.addEventListener("change", (e) => {
      danmuSettings.textStroke = e.target.checked;
      if (els.strokeControls) {
        els.strokeControls.classList.toggle("hidden", !e.target.checked);
      }
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.strokeWidth) {
    els.strokeWidth.addEventListener("input", (e) => {
      danmuSettings.strokeWidth = parseInt(e.target.value);
      if (els.strokeWidthValue) els.strokeWidthValue.textContent = `${danmuSettings.strokeWidth}px`;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.strokeColor) {
    els.strokeColor.addEventListener("input", (e) => {
      danmuSettings.strokeColor = e.target.value;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.textShadowToggle) {
    els.textShadowToggle.addEventListener("change", (e) => {
      danmuSettings.textShadow = e.target.checked;
      if (els.shadowControls) {
        els.shadowControls.classList.toggle("hidden", !e.target.checked);
      }
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.shadowBlur) {
    els.shadowBlur.addEventListener("input", (e) => {
      danmuSettings.shadowBlur = parseInt(e.target.value);
      if (els.shadowBlurValue) els.shadowBlurValue.textContent = `${danmuSettings.shadowBlur}px`;
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.displayAreaTop) {
    els.displayAreaTop.addEventListener("input", (e) => {
      danmuSettings.displayAreaTop = parseInt(e.target.value);
      if (els.displayAreaTopValue) els.displayAreaTopValue.textContent = `${danmuSettings.displayAreaTop}%`;
      updateDisplayAreaIndicator(danmuSettings);
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.displayAreaHeight) {
    els.displayAreaHeight.addEventListener("input", (e) => {
      danmuSettings.displayAreaHeight = parseInt(e.target.value);
      if (els.displayAreaHeightValue) els.displayAreaHeightValue.textContent = `${danmuSettings.displayAreaHeight}%`;
      updateDisplayAreaIndicator(danmuSettings);
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.maxTracksEl) {
    els.maxTracksEl.addEventListener("input", (e) => {
      danmuSettings.maxTracks = parseInt(e.target.value);
      if (els.maxTracksValue) {
        els.maxTracksValue.textContent =
          danmuSettings.maxTracks === 0
            ? (typeof i18n !== "undefined" ? i18n.t("maxTracksUnlimited") : "Unlimited")
            : danmuSettings.maxTracks;
      }
      if (window.updateDanmuTrackSettings) {
        window.updateDanmuTrackSettings(
          danmuSettings.maxTracks,
          danmuSettings.collisionDetection
        );
      }
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.collisionDetectionToggle) {
    els.collisionDetectionToggle.addEventListener("change", (e) => {
      danmuSettings.collisionDetection = e.target.checked;
      if (window.updateDanmuTrackSettings) {
        window.updateDanmuTrackSettings(
          danmuSettings.maxTracks,
          danmuSettings.collisionDetection
        );
      }
      saveDanmuSettings(danmuSettings);
    });
  }

  if (els.previewButton && els.previewText) {
    els.previewButton.addEventListener("click", () => {
      const text = els.previewText.value.trim();
      if (!text) {
        showToast(t("errorEmptyPreview") || "Please enter preview text", "error");
        return;
      }

      const api = window.API;
      if (!api || !api.sendTestDanmu) {
        showToast(
          t("errorOverlayNotActive") || "Please start the overlay first",
          "warning"
        );
        return;
      }

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

  if (els.batchTestButton) {
    els.batchTestButton.addEventListener("click", () => {
      const api = window.API;
      if (!api || !api.sendTestDanmu) {
        showToast(
          t("errorOverlayNotActive") || "Please start the overlay first",
          "warning"
        );
        return;
      }

      const rawCount = els.batchTestCount ? parseInt(els.batchTestCount.value) : 5;
      const count = Math.max(1, Math.min(rawCount, 20)); // clamp to [1, 20]
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
      let batchInterval = null;

      batchInterval = setInterval(() => {
        try {
          if (sentCount >= count) {
            clearInterval(batchInterval);
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
        } catch (err) {
          clearInterval(batchInterval);
          console.error("[batchTest] Error during batch send:", sanitizeLog(err.message));
        }
      }, 500);

      showToast(
        t("batchTestStarted") || `Sending ${count} test danmu...`,
        "info"
      );
    });
  }
}

module.exports = {
  DEFAULT_DANMU_SETTINGS,
  initDanmuSettings,
  loadDanmuSettings,
  saveDanmuSettings,
  updateDisplayAreaIndicator,
};
