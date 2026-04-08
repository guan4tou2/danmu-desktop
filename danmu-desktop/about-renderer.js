// About window renderer — fetches app version via IPC and wires up buttons.
window.addEventListener("DOMContentLoaded", async () => {
  // Display version
  try {
    const version = await window.API.getAppVersion();
    document.getElementById("app-version").textContent = "Version " + version;
  } catch (_) {
    document.getElementById("app-version").textContent = "";
  }

  // Close button
  document.getElementById("close-btn").addEventListener("click", () => {
    window.close();
  });

  // GitHub link — open in system browser via IPC
  document.getElementById("github-link").addEventListener("click", (e) => {
    e.preventDefault();
    window.API.openExternal("https://github.com/guan4tou2/danmu-desktop");
  });
});
