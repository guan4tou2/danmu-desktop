function formatAppVersion(version) {
  const raw = typeof version === "string" ? version.trim() : "";
  if (!raw) return "";
  return raw.startsWith("v") ? raw : `v${raw}`;
}

function formatElectronVersion(version) {
  const raw = typeof version === "string" ? version.trim() : "";
  if (!raw) return "";
  return `Electron ${raw}`;
}

async function initAppShellMeta({ api, doc } = {}) {
  const root = doc || (typeof document !== "undefined" ? document : null);
  if (!root) return null;

  const versionNodes = root.querySelectorAll(
    "[data-client-version], [data-client-about-version]"
  );
  const electronNodes = root.querySelectorAll(
    "[data-client-about-electron-version]"
  );
  if (!versionNodes.length && !electronNodes.length) return null;

  const runtimeApi = api || (typeof window !== "undefined" ? window.API : null);
  if (!runtimeApi) return null;

  const hydrated = {};

  if (versionNodes.length && typeof runtimeApi.getAppVersion === "function") {
    try {
      const version = formatAppVersion(await runtimeApi.getAppVersion());
      if (version) {
        versionNodes.forEach((node) => {
          node.textContent = version;
        });
        hydrated.appVersion = version;
      }
    } catch (_) {}
  }

  if (
    electronNodes.length &&
    typeof runtimeApi.getRuntimeVersions === "function"
  ) {
    try {
      const versions = await runtimeApi.getRuntimeVersions();
      const electronVersion = formatElectronVersion(
        versions && versions.electron
      );
      if (electronVersion) {
        electronNodes.forEach((node) => {
          node.textContent = electronVersion;
        });
        hydrated.electronVersion = electronVersion;
      }
    } catch (_) {}
  }

  return Object.keys(hydrated).length ? hydrated : null;
}

module.exports = {
  formatAppVersion,
  formatElectronVersion,
  initAppShellMeta,
};
