// Settings export and import using the browser File API (no IPC required)

const SETTINGS_KEYS = [
  "danmu-settings",           // host, port, displayIndex, syncMultiDisplay
  "danmu-startup-animation",  // enabled, type, customText
  "danmu-display-settings",   // opacity, speed, size, color, textStroke, etc.
];

const SCHEMA_VERSION = 1;

/**
 * Collects all settings from localStorage and triggers a JSON download.
 */
function exportSettings() {
  const payload = {
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    settings: {},
  };

  SETTINGS_KEYS.forEach((key) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        payload.settings[key] = JSON.parse(raw);
      } catch {
        payload.settings[key] = raw;
      }
    }
  });

  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  a.href = url;
  a.download = `danmu-settings-${ts}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Opens a file picker and imports settings from the chosen JSON file.
 * Returns a promise that resolves with { ok, message }.
 */
function importSettings() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";

    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file) {
        resolve({ ok: false, message: "No file selected" });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const payload = JSON.parse(e.target.result);

          if (typeof payload !== "object" || !payload.settings) {
            resolve({ ok: false, message: "Invalid settings file format" });
            return;
          }

          let imported = 0;
          SETTINGS_KEYS.forEach((key) => {
            if (key in payload.settings) {
              localStorage.setItem(key, JSON.stringify(payload.settings[key]));
              imported++;
            }
          });

          resolve({
            ok: true,
            message: `Imported ${imported} settings groups. Reload to apply.`,
          });
        } catch {
          resolve({ ok: false, message: "Failed to parse settings file" });
        }
      };
      reader.onerror = () => resolve({ ok: false, message: "Failed to read file" });
      reader.readAsText(file);
    });

    // Cancelled without choosing a file
    input.addEventListener("cancel", () => {
      resolve({ ok: false, message: "Cancelled" });
    });

    input.click();
  });
}

module.exports = { exportSettings, importSettings };
