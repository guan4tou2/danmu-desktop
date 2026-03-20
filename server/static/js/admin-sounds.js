// Admin Sound Effects Management
(function () {
  "use strict";

  const DETAILS_STATE_KEY = "admin-details-open-state";

  function loadDetailsState() {
    try {
      const raw = window.localStorage.getItem(DETAILS_STATE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveDetailsState(state) {
    try {
      window.localStorage.setItem(DETAILS_STATE_KEY, JSON.stringify(state));
    } catch (_) {
      // Ignore localStorage write failures
    }
  }

  // Currently previewing audio instance (so we can stop it)
  let previewAudio = null;

  // Cached lists
  let availableSounds = [];
  let soundRules = [];

  // ---- API helpers ----

  async function fetchSounds() {
    try {
      const res = await window.csrfFetch("/admin/sounds", { method: "GET" });
      if (!res.ok) throw new Error(await res.text());
      availableSounds = await res.json();
    } catch (err) {
      console.error("Failed to fetch sounds:", err);
      window.showToast("Failed to load sounds", false);
      availableSounds = [];
    }
  }

  async function fetchRules() {
    try {
      const res = await window.csrfFetch("/admin/sounds/rules", { method: "GET" });
      if (!res.ok) throw new Error(await res.text());
      soundRules = await res.json();
    } catch (err) {
      console.error("Failed to fetch sound rules:", err);
      window.showToast("Failed to load sound rules", false);
      soundRules = [];
    }
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
    const res = await window.csrfFetch("/admin/sounds/rules/delete", {
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
        '<p class="text-slate-400 text-sm">No sounds uploaded yet.</p>';
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
      playBtn.textContent = "\u25B6 Preview";
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
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", async () => {
        if (!confirm(`Delete sound "${sound.name}"?`)) return;
        try {
          await deleteSound(sound.name);
          window.showToast(`Sound "${sound.name}" deleted.`, true);
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
      opt.textContent = "— no sounds available —";
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
        '<p class="text-slate-400 text-sm">No sound rules configured.</p>';
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
          ? "All messages"
          : rule.trigger_type === "keyword"
            ? `Keyword: "${rule.trigger_value}"`
            : `Effect: ${rule.trigger_value}`;
      triggerLine.textContent = triggerLabel;

      const detailLine = document.createElement("span");
      detailLine.className = "text-slate-400 text-xs truncate";
      const volPercent = Math.round((rule.volume ?? 1) * 100);
      detailLine.textContent =
        `Sound: ${rule.sound_name} | Vol: ${volPercent}% | CD: ${rule.cooldown ?? 0}ms`;

      info.appendChild(triggerLine);
      info.appendChild(detailLine);

      const delBtn = document.createElement("button");
      delBtn.className =
        "px-2 py-1 text-xs bg-red-600/80 hover:bg-red-600 text-white rounded transition-colors shrink-0";
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", async () => {
        try {
          await deleteRule(rule.id);
          window.showToast("Rule deleted.", true);
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
        window.showToast("Please select an audio file.", false);
        return;
      }

      const name = nameInput.value.trim();
      if (!name) {
        window.showToast("Please enter a sound name.", false);
        return;
      }

      uploadBtn.disabled = true;
      uploadBtn.textContent = "Uploading\u2026";
      try {
        await uploadSound(file, name);
        window.showToast(`Sound "${name}" uploaded.`, true);
        fileInput.value = "";
        nameInput.value = "";
        await fetchSounds();
        renderSoundsList();
        renderSoundNameOptions();
      } catch (err) {
        window.showToast(err.message, false);
      } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = "Upload";
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
        window.showToast("Please enter a trigger value.", false);
        return;
      }
      if (!soundName) {
        window.showToast("Please select a sound.", false);
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
        window.showToast("Sound rule added.", true);
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
        triggerValue.placeholder = "(applies to all messages)";
        triggerValue.value = "";
      } else if (triggerType.value === "keyword") {
        triggerValue.disabled = false;
        triggerValue.placeholder = "Enter keyword\u2026";
      } else if (triggerType.value === "effect") {
        triggerValue.disabled = false;
        triggerValue.placeholder = "Enter effect name\u2026";
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
            <h3 class="text-lg font-bold text-white">Sound Effects</h3>
            <p class="text-sm text-slate-300">Upload sounds and configure trigger rules</p>
          </div>
          <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-6">

          <!-- Upload Sound -->
          <div>
            <h4 class="text-md font-semibold text-white mb-3">Upload Sound</h4>
            <div class="space-y-2">
              <div>
                <label for="soundFileInput" class="text-sm font-medium text-slate-300">Audio File</label>
                <input type="file" id="soundFileInput" accept=".mp3,.ogg,.wav,audio/mpeg,audio/ogg,audio/wav"
                  class="mt-1 w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0
                         file:text-sm file:font-medium file:bg-violet-600 file:text-white file:cursor-pointer
                         hover:file:bg-violet-500 file:transition-colors" />
              </div>
              <div>
                <label for="soundNameInput" class="text-sm font-medium text-slate-300">Sound Name</label>
                <input type="text" id="soundNameInput" placeholder="e.g. alert-ding" maxlength="100"
                  class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                         focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                         text-white placeholder-slate-500" />
              </div>
              <button id="soundUploadBtn"
                class="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500
                       text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Upload
              </button>
            </div>
          </div>

          <!-- Available Sounds -->
          <div>
            <h4 class="text-md font-semibold text-white mb-2">Available Sounds</h4>
            <div id="soundsList" class="space-y-2 max-h-48 overflow-y-auto">
              <p class="text-slate-400 text-sm">Loading\u2026</p>
            </div>
          </div>

          <!-- Sound Rules -->
          <div>
            <h4 class="text-md font-semibold text-white mb-3">Sound Trigger Rules</h4>
            <div class="space-y-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label for="ruleTriggerType" class="text-sm font-medium text-slate-300">Trigger Type</label>
                  <select id="ruleTriggerType"
                    class="mt-1 w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg
                           text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                    <option value="keyword">Keyword</option>
                    <option value="effect">Effect</option>
                    <option value="all">All Messages</option>
                  </select>
                </div>
                <div>
                  <label for="ruleTriggerValue" class="text-sm font-medium text-slate-300">Trigger Value</label>
                  <input type="text" id="ruleTriggerValue" placeholder="Enter keyword\u2026"
                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                           text-white placeholder-slate-500 text-sm" />
                </div>
              </div>
              <div>
                <label for="ruleSoundName" class="text-sm font-medium text-slate-300">Sound</label>
                <select id="ruleSoundName"
                  class="mt-1 w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg
                         text-white text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400">
                  <option value="" disabled>\u2014 loading \u2014</option>
                </select>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label for="ruleVolume" class="text-sm font-medium text-slate-300">
                    Volume: <span id="ruleVolumeLabel" class="text-violet-300">80%</span>
                  </label>
                  <input type="range" id="ruleVolume" min="0" max="100" value="80"
                    class="mt-1 w-full accent-violet-500" />
                </div>
                <div>
                  <label for="ruleCooldown" class="text-sm font-medium text-slate-300">Cooldown (ms)</label>
                  <input type="number" id="ruleCooldown" min="0" step="100" value="1000" placeholder="1000"
                    class="mt-1 w-full p-2 bg-slate-800/80 border-2 border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all duration-300
                           text-white placeholder-slate-500 text-sm" />
                </div>
              </div>
              <button id="addRuleBtn"
                class="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500
                       text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Add Rule
              </button>
            </div>
          </div>

          <!-- Active Rules -->
          <div>
            <h4 class="text-md font-semibold text-white mb-2">Active Rules</h4>
            <div id="rulesList" class="space-y-2 max-h-64 overflow-y-auto">
              <p class="text-slate-400 text-sm">Loading\u2026</p>
            </div>
          </div>

        </div>
      </details>
    `;
  }

  // ---- Initialization ----

  async function initSoundsSection() {
    // Find the settings grid to append to
    const settingsGrid = document.querySelector(".grid.grid-cols-1");
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

  // Wait for DOM + admin.js to render the control panel before injecting
  document.addEventListener("DOMContentLoaded", () => {
    // The admin panel renders asynchronously after login.
    // Use a MutationObserver to detect when the settings grid appears.
    const observer = new MutationObserver((_mutations, obs) => {
      const grid = document.querySelector(".grid.grid-cols-1");
      // Ensure grid exists and the sounds section hasn't been added yet
      if (grid && !document.getElementById("sec-sounds")) {
        obs.disconnect();
        initSoundsSection();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also check immediately in case grid is already rendered
    const grid = document.querySelector(".grid.grid-cols-1");
    if (grid && !document.getElementById("sec-sounds")) {
      observer.disconnect();
      initSoundsSection();
    }
  });
})();
