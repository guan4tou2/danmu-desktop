// Admin Sound Effects Management
(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;

  // Currently previewing audio instance (so we can stop it)
  let previewAudio = null;

  // Cached lists
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
    // Rules are fetched together with sounds in fetchSounds()
    // This function kept for compatibility with code that calls it separately
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
        '<p class="text-slate-400 text-sm">' + ServerI18n.t("noSoundsUploaded") + '</p>';
      return;
    }

    container.innerHTML = "";
    availableSounds.forEach((sound) => {
      const row = document.createElement("div");
      row.className =
        "flex items-center justify-between bg-slate-700/50 p-2 rounded-lg";

      const nameSpan = document.createElement("span");
      nameSpan.className = "text-slate-200 truncate mr-2";
      nameSpan.textContent = sound.name;

      const btnGroup = document.createElement("div");
      btnGroup.className = "flex items-center gap-2 shrink-0";

      const playBtn = document.createElement("button");
      playBtn.className =
        "px-2 py-1 text-xs bg-cyan-600 hover:bg-cyan-500 text-white rounded transition-colors";
      playBtn.textContent = ServerI18n.t("previewBtn");
      playBtn.addEventListener("click", () => {
        if (previewAudio) {
          previewAudio.pause();
          previewAudio = null;
        }
        previewAudio = new Audio(sound.url);
        previewAudio.volume = 0.5;
        previewAudio.play().catch((e) =>
          console.warn("Audio preview failed:", e)
        );
      });

      const delBtn = document.createElement("button");
      delBtn.className =
        "px-2 py-1 text-xs bg-red-600/80 hover:bg-red-600 text-white rounded transition-colors";
      delBtn.textContent = ServerI18n.t("deleteBtn");
      delBtn.addEventListener("click", async () => {
        if (!confirm(ServerI18n.t("deleteSoundConfirm").replace("{name}", sound.name))) return;
        try {
          await deleteSound(sound.name);
          window.showToast(ServerI18n.t("soundDeleted").replace("{name}", sound.name), true);
          await fetchSounds();
          renderSoundsList();
          renderSoundNameOptions();
        } catch (err) {
          window.showToast(err.message, false);
        }
      });

      btnGroup.appendChild(playBtn);
      btnGroup.appendChild(delBtn);
      row.appendChild(nameSpan);
      row.appendChild(btnGroup);
      container.appendChild(row);
    });
  }

  function renderSoundNameOptions() {
    const select = document.getElementById("ruleSoundName");
    if (!select) return;

    // Preserve current selection if possible
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

    // Restore previous selection
    if (prev && [...select.options].some((o) => o.value === prev)) {
      select.value = prev;
    }
  }

  function renderRulesList() {
    const container = document.getElementById("rulesList");
    if (!container) return;

    if (soundRules.length === 0) {
      container.innerHTML =
        '<p class="text-slate-400 text-sm">' + ServerI18n.t("noSoundRules") + '</p>';
      return;
    }

    container.innerHTML = "";
    soundRules.forEach((rule) => {
      const row = document.createElement("div");
      row.className =
        "flex items-center justify-between bg-slate-700/50 p-2 rounded-lg gap-2";

      const info = document.createElement("div");
      info.className = "flex flex-col text-sm min-w-0";

      const triggerLine = document.createElement("span");
      triggerLine.className = "text-slate-200 truncate";
      const triggerLabel =
        rule.trigger_type === "all"
          ? ServerI18n.t("triggerAllMessages")
          : rule.trigger_type === "keyword"
            ? ServerI18n.t("triggerKeywordPrefix").replace("{value}", rule.trigger_value)
            : ServerI18n.t("triggerEffectPrefix").replace("{value}", rule.trigger_value);
      triggerLine.textContent = triggerLabel;

      const detailLine = document.createElement("span");
      detailLine.className = "text-slate-400 text-xs truncate";
      const volPercent = Math.round((rule.volume ?? 1) * 100);
      detailLine.textContent =
        ServerI18n.t("soundDetailLine").replace("{sound}", rule.sound_name).replace("{vol}", volPercent).replace("{cd}", rule.cooldown ?? 0);

      info.appendChild(triggerLine);
      info.appendChild(detailLine);

      const delBtn = document.createElement("button");
      delBtn.className =
        "px-2 py-1 text-xs bg-red-600/80 hover:bg-red-600 text-white rounded transition-colors shrink-0";
      delBtn.textContent = ServerI18n.t("deleteBtn");
      delBtn.addEventListener("click", async () => {
        try {
          await deleteRule(rule.id);
          window.showToast(ServerI18n.t("soundRuleDeleted"), true);
          await fetchRules();
          renderRulesList();
        } catch (err) {
          window.showToast(err.message, false);
        }
      });

      row.appendChild(info);
      row.appendChild(delBtn);
      container.appendChild(row);
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
        uploadBtn.textContent = ServerI18n.t("uploadBtn");
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

      // Validate
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
    const detailsState = loadDetailsState();
    const isOpen = detailsState["sec-sounds"] || false;

    return `
      <details id="sec-sounds" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">${ServerI18n.t("soundEffectsTitle")}</h3>
            <p class="text-sm text-slate-300">${ServerI18n.t("soundEffectsDesc")}</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-6">

          <!-- Upload Sound -->
          <div>
            <h4 class="text-md font-semibold text-white mb-3">${ServerI18n.t("uploadSoundTitle")}</h4>
            <div class="space-y-2">
              <div>
                <label for="soundFileInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("audioFileLabel")}</label>
                <input type="file" id="soundFileInput" accept=".mp3,.ogg,.wav,audio/mpeg,audio/ogg,audio/wav"
                  class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0
                         file:text-sm file:font-medium file:bg-violet-600 file:text-white file:cursor-pointer
                         hover:file:bg-violet-500 file:transition-colors" />
              </div>
              <div>
                <label for="soundNameInput" class="text-sm font-medium text-slate-300">${ServerI18n.t("soundNameLabel")}</label>
                <input type="text" id="soundNameInput" placeholder="${ServerI18n.t("soundNamePlaceholder")}" maxlength="100"
                  class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                         focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                         text-white placeholder-slate-500" />
              </div>
              <button id="soundUploadBtn"
                class="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500
                       text-white font-bold py-3 px-6 rounded-xl transition-colors">
                ${ServerI18n.t("uploadBtn")}
              </button>
            </div>
          </div>

          <!-- Available Sounds -->
          <div>
            <h4 class="text-md font-semibold text-white mb-2">${ServerI18n.t("availableSoundsTitle")}</h4>
            <div id="soundsList" class="space-y-2 max-h-48 overflow-y-auto">
              <p class="text-slate-400 text-sm">${ServerI18n.t("loadingSounds")}</p>
            </div>
          </div>

          <!-- Sound Rules -->
          <div>
            <h4 class="text-md font-semibold text-white mb-3">${ServerI18n.t("soundTriggerRulesTitle")}</h4>
            <div class="space-y-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label for="ruleTriggerType" class="text-sm font-medium text-slate-300">${ServerI18n.t("triggerTypeLabel")}</label>
                  <select id="ruleTriggerType"
                    class="mt-1 w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg
                           text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                    <option value="keyword">${ServerI18n.t("triggerTypeKeyword")}</option>
                    <option value="effect">${ServerI18n.t("triggerTypeEffect")}</option>
                    <option value="all">${ServerI18n.t("triggerTypeAll")}</option>
                  </select>
                </div>
                <div>
                  <label for="ruleTriggerValue" class="text-sm font-medium text-slate-300">${ServerI18n.t("triggerValueLabel")}</label>
                  <input type="text" id="ruleTriggerValue" placeholder="${ServerI18n.t("triggerValueKeywordPlaceholder")}"
                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                           text-white placeholder-slate-500 text-sm" />
                </div>
              </div>
              <div>
                <label for="ruleSoundName" class="text-sm font-medium text-slate-300">${ServerI18n.t("soundLabel")}</label>
                <select id="ruleSoundName"
                  class="mt-1 w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg
                         text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                  <option value="" disabled>${ServerI18n.t("soundLoading")}</option>
                </select>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label for="ruleVolume" class="text-sm font-medium text-slate-300">
                    ${ServerI18n.t("volumeLabel")} <span id="ruleVolumeLabel" class="text-violet-300">80%</span>
                  </label>
                  <input type="range" id="ruleVolume" min="0" max="100" value="80"
                    class="mt-1 w-full accent-violet-500" />
                </div>
                <div>
                  <label for="ruleCooldown" class="text-sm font-medium text-slate-300">${ServerI18n.t("cooldownLabel")}</label>
                  <input type="number" id="ruleCooldown" min="0" step="100" value="1000" placeholder="1000"
                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                           text-white placeholder-slate-500 text-sm" />
                </div>
              </div>
              <button id="addRuleBtn"
                class="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500
                       text-white font-bold py-3 px-6 rounded-xl transition-colors">
                ${ServerI18n.t("addRuleBtn")}
              </button>
            </div>
          </div>

          <!-- Active Rules -->
          <div>
            <h4 class="text-md font-semibold text-white mb-2">${ServerI18n.t("activeRulesTitle")}</h4>
            <div id="rulesList" class="space-y-2 max-h-64 overflow-y-auto">
              <p class="text-slate-400 text-sm">${ServerI18n.t("loadingSounds")}</p>
            </div>
          </div>

        </div>
      </details>
    `;
  }

  // ---- Initialization ----

  async function initSoundsSection() {
    // Find the settings grid to append to
    const settingsGrid = document.getElementById("settings-grid");
    if (!settingsGrid) return;

    // Insert section HTML
    settingsGrid.insertAdjacentHTML("beforeend", buildSectionHTML());

    // Persist details open/close state
    const detailsEl = document.getElementById("sec-sounds");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", () => {
        const current = loadDetailsState();
        current["sec-sounds"] = detailsEl.open;
        saveDetailsState(current);
      });
    }

    // Load data
    await Promise.all([fetchSounds(), fetchRules()]);

    // Render lists
    renderSoundsList();
    renderSoundNameOptions();
    renderRulesList();

    // Bind events
    bindUploadForm();
    bindAddRuleForm();
    bindTriggerTypeChange();
    bindVolumeLabel();
  }

  // Wait for DOM + admin.js to render the control panel before injecting.
  // admin.js rebuilds the entire DOM via innerHTML on every renderControlPanel()
  // call, so we must keep observing and re-inject when our section is wiped out.
  document.addEventListener("DOMContentLoaded", () => {
    let injecting = false;

    const observer = new MutationObserver(() => {
      const grid = document.getElementById("settings-grid");
      if (grid && !document.getElementById("sec-sounds") && !injecting) {
        injecting = true;
        initSoundsSection().finally(() => {
          injecting = false;
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also check immediately in case grid is already rendered
    const grid = document.getElementById("settings-grid");
    if (grid && !document.getElementById("sec-sounds")) {
      injecting = true;
      initSoundsSection().finally(() => {
        injecting = false;
      });
    }
  });
})();
