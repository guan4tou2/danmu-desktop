// Admin Sound Effects Management — v2 retrofit.
// Tile grid for uploaded sounds + rules list + inline create form.
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;
  const SECTION_ID = "sec-sounds";

  // Currently previewing audio instance (so we can stop it).
  let previewAudio = null;

  // Cached lists.
  let availableSounds = [];
  let soundRules = [];

  // ---- API helpers ----

  async function fetchSounds() {
    try {
      const res = await window.csrfFetch("/admin/sounds/list", { method: "GET" });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      availableSounds = data.sounds || [];
      soundRules = data.rules || [];
    } catch (err) {
      console.error("Failed to fetch sounds:", err);
      window.showToast(ServerI18n.t("loadSoundsFailed"), false);
      availableSounds = [];
      soundRules = [];
    }
  }

  async function fetchRules() {
    return fetchSounds();
  }

  async function uploadSound(file, name) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    const res = await window.csrfFetch("/admin/sounds/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data;
  }

  async function deleteSound(name) {
    const res = await window.csrfFetch("/admin/sounds/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Delete failed");
    return data;
  }

  async function addRule(rule) {
    const res = await window.csrfFetch("/admin/sounds/rules/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rule),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to add rule");
    return data;
  }

  async function deleteRule(ruleId) {
    const res = await window.csrfFetch("/admin/sounds/rules/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: ruleId }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to delete rule");
    return data;
  }

  // ---- Rendering ----

  function renderSoundsList() {
    const container = document.getElementById("soundsList");
    if (!container) return;

    if (availableSounds.length === 0) {
      container.innerHTML =
        '<div class="admin-emojis-empty" style="grid-column:1/-1">' +
        escapeHtml(ServerI18n.t("noSoundsUploaded")) +
        "</div>";
      return;
    }

    container.innerHTML = availableSounds
      .map(function (sound) {
        var safeName = escapeHtml(sound.name);
        var volPct = Math.round((sound.volume != null ? sound.volume : 1) * 100);
        return (
          '<div class="admin-sounds-tile" data-sound-name="' + escapeHtml(sound.name) + '">' +
          '<div class="name" title="' + safeName + '">' + safeName + "</div>" +
          '<div class="admin-sounds-tile-volume" style="display:flex;align-items:center;gap:6px;margin-top:6px">' +
            '<span class="admin-v2-monolabel" style="font-size:9px">VOL</span>' +
            '<input type="range" class="sound-volume-slider" data-name="' + escapeHtml(sound.name) + '" ' +
              'min="0" max="100" step="1" value="' + volPct + '" ' +
              'style="flex:1;min-width:80px;max-width:120px;accent-color:#38bdf8" />' +
            '<span class="admin-v2-monolabel sound-volume-label" data-name="' + escapeHtml(sound.name) + '" style="min-width:32px;text-align:right">' + volPct + "%</span>" +
          "</div>" +
          '<div class="actions" style="margin-top:6px">' +
          '<button type="button" class="sound-play-btn admin-v2-chip is-on" data-name="' + escapeHtml(sound.name) + '">▶ ' + escapeHtml(ServerI18n.t("previewBtn")) + "</button>" +
          '<button type="button" class="sound-delete-btn admin-v2-chip is-bad" data-name="' + escapeHtml(sound.name) + '">×</button>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    // Wire preview/delete.
    container.querySelectorAll(".sound-play-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var name = btn.dataset.name;
        var entry = availableSounds.find(function (s) { return s.name === name; });
        if (!entry) return;
        if (previewAudio) {
          previewAudio.pause();
          previewAudio = null;
        }
        previewAudio = new Audio(entry.url);
        previewAudio.volume = 0.5;
        previewAudio.play().catch(function (e) { console.warn("Audio preview failed:", e); });
      });
    });
    container.querySelectorAll(".sound-delete-btn").forEach(function (btn) {
      btn.addEventListener("click", async function () {
        var name = btn.dataset.name;
        if (!confirm(ServerI18n.t("deleteSoundConfirm").replace("{name}", name))) return;
        try {
          await deleteSound(name);
          window.showToast(ServerI18n.t("soundDeleted").replace("{name}", name), true);
          await fetchSounds();
          renderSoundsList();
          renderSoundNameOptions();
        } catch (err) {
          window.showToast(err.message, false);
        }
      });
    });

    // ── Per-tile volume slider (P1-2) ─────────────────────────────────
    // input → live label update; change/debounced → POST + toast.
    var _volumeDebounceTimers = {};
    container.querySelectorAll(".sound-volume-slider").forEach(function (slider) {
      var name = slider.dataset.name;
      var label = container.querySelector('.sound-volume-label[data-name="' + CSS.escape(name) + '"]');
      slider.addEventListener("input", function () {
        if (label) label.textContent = slider.value + "%";
        clearTimeout(_volumeDebounceTimers[name]);
        _volumeDebounceTimers[name] = setTimeout(function () {
          saveSoundVolume(name, Number(slider.value) / 100);
        }, 300);
      });
      slider.addEventListener("change", function () {
        clearTimeout(_volumeDebounceTimers[name]);
        saveSoundVolume(name, Number(slider.value) / 100);
      });
    });
  }

  async function saveSoundVolume(name, volume) {
    try {
      var res = await window.csrfFetch(
        "/admin/sounds/" + encodeURIComponent(name) + "/volume",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ volume: volume }),
        }
      );
      var data = await res.json();
      if (!res.ok) {
        window.showToast(data.error || "Volume update failed", false);
        return;
      }
      var entry = availableSounds.find(function (s) { return s.name === name; });
      if (entry) entry.volume = volume;
      window.showToast("音量已儲存 · " + Math.round(volume * 100) + "%", true);
    } catch (err) {
      console.warn("[admin-sounds] volume save failed:", err);
      window.showToast("Network error", false);
    }
  }

  function renderSoundNameOptions() {
    const select = document.getElementById("ruleSoundName");
    if (!select) return;

    const prev = select.value;
    select.innerHTML = "";

    if (availableSounds.length === 0) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = ServerI18n.t("noSoundsAvailable");
      opt.disabled = true;
      select.appendChild(opt);
      return;
    }

    availableSounds.forEach((sound) => {
      const opt = document.createElement("option");
      opt.value = sound.name;
      opt.textContent = sound.name;
      select.appendChild(opt);
    });

    if (prev && [...select.options].some((o) => o.value === prev)) {
      select.value = prev;
    }
  }

  function renderRulesList() {
    const container = document.getElementById("rulesList");
    if (!container) return;

    if (soundRules.length === 0) {
      container.innerHTML =
        '<div class="admin-emojis-empty">' +
        escapeHtml(ServerI18n.t("noSoundRules")) +
        "</div>";
      return;
    }

    container.innerHTML = soundRules
      .map(function (rule) {
        var triggerLabel =
          rule.trigger_type === "all"
            ? ServerI18n.t("triggerAllMessages")
            : rule.trigger_type === "keyword"
              ? ServerI18n.t("triggerKeywordPrefix").replace("{value}", rule.trigger_value)
              : ServerI18n.t("triggerEffectPrefix").replace("{value}", rule.trigger_value);
        var volPercent = Math.round((rule.volume != null ? rule.volume : 1) * 100);
        var detail = ServerI18n.t("soundDetailLine")
          .replace("{sound}", rule.sound_name)
          .replace("{vol}", volPercent)
          .replace("{cd}", rule.cooldown != null ? rule.cooldown : 0);
        return (
          '<div class="admin-sounds-rule" data-rule-id="' + escapeHtml(String(rule.id)) + '">' +
          '<div class="admin-sounds-rule-body">' +
          '<div class="admin-sounds-rule-trigger">' + escapeHtml(triggerLabel) + "</div>" +
          '<div class="admin-sounds-rule-detail">' + escapeHtml(detail) + "</div>" +
          "</div>" +
          '<button type="button" class="sound-rule-del-btn admin-v2-chip is-bad" data-rule-id="' + escapeHtml(String(rule.id)) + '">×</button>' +
          "</div>"
        );
      })
      .join("");

    container.querySelectorAll(".sound-rule-del-btn").forEach(function (btn) {
      btn.addEventListener("click", async function () {
        try {
          await deleteRule(btn.dataset.ruleId);
          window.showToast(ServerI18n.t("soundRuleDeleted"), true);
          await fetchRules();
          renderRulesList();
        } catch (err) {
          window.showToast(err.message, false);
        }
      });
    });
  }

  // ---- Event handlers ----

  function bindUploadForm() {
    const uploadBtn = document.getElementById("soundUploadBtn");
    if (!uploadBtn) return;

    uploadBtn.addEventListener("click", async () => {
      const fileInput = document.getElementById("soundFileInput");
      const nameInput = document.getElementById("soundNameInput");

      const file = fileInput.files[0];
      if (!file) {
        window.showToast(ServerI18n.t("selectAudioFile"), false);
        return;
      }

      const name = nameInput.value.trim();
      if (!name) {
        window.showToast(ServerI18n.t("enterSoundName"), false);
        return;
      }

      uploadBtn.disabled = true;
      uploadBtn.textContent = ServerI18n.t("uploadingStatus");
      try {
        await uploadSound(file, name);
        window.showToast(ServerI18n.t("soundUploaded").replace("{name}", name), true);
        fileInput.value = "";
        nameInput.value = "";
        await fetchSounds();
        renderSoundsList();
        renderSoundNameOptions();
      } catch (err) {
        window.showToast(err.message, false);
      } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = "上傳";
      }
    });
  }

  function bindAddRuleForm() {
    const addBtn = document.getElementById("addRuleBtn");
    if (!addBtn) return;

    addBtn.addEventListener("click", async () => {
      const triggerType = document.getElementById("ruleTriggerType").value;
      const triggerValue = document.getElementById("ruleTriggerValue").value.trim();
      const soundName = document.getElementById("ruleSoundName").value;
      const volumeSlider = document.getElementById("ruleVolume");
      const cooldownInput = document.getElementById("ruleCooldown");

      if (triggerType !== "all" && !triggerValue) {
        window.showToast(ServerI18n.t("enterTriggerValue"), false);
        return;
      }
      if (!soundName) {
        window.showToast(ServerI18n.t("selectSound"), false);
        return;
      }

      const volume = parseInt(volumeSlider.value, 10) / 100;
      const cooldown = parseInt(cooldownInput.value, 10) || 0;

      const rule = {
        trigger_type: triggerType,
        trigger_value: triggerType === "all" ? "" : triggerValue,
        sound_name: soundName,
        volume: Math.max(0, Math.min(1, volume)),
        cooldown: Math.max(0, cooldown),
      };

      addBtn.disabled = true;
      try {
        await addRule(rule);
        window.showToast(ServerI18n.t("soundRuleAdded"), true);
        document.getElementById("ruleTriggerValue").value = "";
        await fetchRules();
        renderRulesList();
      } catch (err) {
        window.showToast(err.message, false);
      } finally {
        addBtn.disabled = false;
      }
    });
  }

  function bindTriggerTypeChange() {
    const triggerType = document.getElementById("ruleTriggerType");
    const triggerValue = document.getElementById("ruleTriggerValue");
    if (!triggerType || !triggerValue) return;

    function updatePlaceholder() {
      if (triggerType.value === "all") {
        triggerValue.disabled = true;
        triggerValue.placeholder = ServerI18n.t("triggerValueAllPlaceholder");
        triggerValue.value = "";
      } else if (triggerType.value === "keyword") {
        triggerValue.disabled = false;
        triggerValue.placeholder = ServerI18n.t("triggerValueKeywordPlaceholder");
      } else if (triggerType.value === "effect") {
        triggerValue.disabled = false;
        triggerValue.placeholder = ServerI18n.t("triggerValueEffectPlaceholder");
      }
    }

    triggerType.addEventListener("change", updatePlaceholder);
    updatePlaceholder();
  }

  function bindVolumeLabel() {
    const slider = document.getElementById("ruleVolume");
    const label = document.getElementById("ruleVolumeLabel");
    if (!slider || !label) return;
    slider.addEventListener("input", () => {
      label.textContent = slider.value + "%";
    });
  }

  // ---- Section HTML ----

  function buildSectionHTML() {
    return `
      <div id="${SECTION_ID}" class="admin-sounds-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SOUNDS · 觸發音效 · .MP3/.WAV</div>
          <div class="admin-v2-title">音效庫</div>
          <p class="admin-v2-note">
            關鍵字命中或事件觸發時在 overlay 播放 — 最長 10 秒,最大 500KB。
          </p>
        </div>

        <!-- Upload Sound -->
        <div class="admin-v2-card">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 上傳音效</div>
          <div class="admin-sounds-form">
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">FILE · MP3/OGG/WAV</span>
              <input type="file" id="soundFileInput" accept=".mp3,.ogg,.wav,audio/mpeg,audio/ogg,audio/wav" class="admin-v2-input" />
            </label>
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">NAME</span>
              <input type="text" id="soundNameInput" placeholder="${escapeHtml(ServerI18n.t("soundNamePlaceholder"))}" maxlength="100" class="admin-v2-input" />
            </label>
            <div class="admin-sounds-form-full" style="display:flex;justify-content:flex-end">
              <button id="soundUploadBtn" type="button" class="admin-poll-btn is-primary">上傳</button>
            </div>
          </div>
        </div>

        <!-- Available Sounds -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">SOUNDS · 庫存</span>
          </div>
          <div id="soundsList" class="admin-sounds-grid"></div>
        </div>

        <!-- Sound Rules -->
        <div class="admin-v2-card">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">+ 新增觸發規則</div>
          <div class="admin-sounds-form">
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">TRIGGER TYPE</span>
              <select id="ruleTriggerType" class="admin-v2-select">
                <option value="keyword">${escapeHtml(ServerI18n.t("triggerTypeKeyword"))}</option>
                <option value="effect">${escapeHtml(ServerI18n.t("triggerTypeEffect"))}</option>
                <option value="all">${escapeHtml(ServerI18n.t("triggerTypeAll"))}</option>
              </select>
            </label>
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">TRIGGER VALUE</span>
              <input type="text" id="ruleTriggerValue" placeholder="${escapeHtml(ServerI18n.t("triggerValueKeywordPlaceholder"))}" class="admin-v2-input" />
            </label>
            <label class="admin-webhooks-field admin-sounds-form-full">
              <span class="admin-v2-monolabel">SOUND</span>
              <select id="ruleSoundName" class="admin-v2-select">
                <option value="" disabled>${escapeHtml(ServerI18n.t("soundLoading"))}</option>
              </select>
            </label>
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">VOLUME · <span id="ruleVolumeLabel">80%</span></span>
              <input type="range" id="ruleVolume" min="0" max="100" value="80" class="admin-v2-input" />
            </label>
            <label class="admin-webhooks-field">
              <span class="admin-v2-monolabel">COOLDOWN · MS</span>
              <input type="number" id="ruleCooldown" min="0" step="100" value="1000" class="admin-v2-input" />
            </label>
            <div class="admin-sounds-form-full" style="display:flex;justify-content:flex-end">
              <button id="addRuleBtn" type="button" class="admin-poll-btn is-primary">新增規則</button>
            </div>
          </div>
        </div>

        <!-- Active Rules -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">RULES · 已啟用</span>
          </div>
          <div id="rulesList" class="admin-sounds-rules"></div>
        </div>
      </div>
    `;
  }

  // ---- Initialization ----

  async function initSoundsSection() {
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHTML());

    await Promise.all([fetchSounds(), fetchRules()]);

    renderSoundsList();
    renderSoundNameOptions();
    renderRulesList();

    bindUploadForm();
    bindAddRuleForm();
    bindTriggerTypeChange();
    bindVolumeLabel();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    let injecting = false;

    const observer = new MutationObserver(() => {
      const grid = document.getElementById("settings-grid");
      if (grid && !document.getElementById(SECTION_ID) && !injecting) {
        injecting = true;
        initSoundsSection().finally(() => {
          injecting = false;
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const grid = document.getElementById("settings-grid");
    if (grid && !document.getElementById(SECTION_ID)) {
      injecting = true;
      initSoundsSection().finally(() => {
        injecting = false;
      });
    }
  });
})();
