/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
window.showdanmu = function(
  string,
  opacity = 75,
  color = "#ffffff",
  size = 50,
  speed = 7
) {
  console.log('[showdanmu] Received:', { string, opacity, color, size, speed });
  var parentElement = document.getElementById("danmubody");
  var imgs = /^https?:\/\/\S*.(gif|png|jpeg|jpg)$/;
  if (imgs.test(string)) {
    var danmu = document.createElement("img");
    danmu.setAttribute("src", string);
    danmu.width = size * 2;
  } else {
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-stroke", string);
    danmu.style.fontSize = `${size}px`;
    danmu.style.color = color;
  }
  parentElement.appendChild(danmu);
  console.log('[showdanmu] Danmu element appended:', danmu);

  const Height = parseFloat(getComputedStyle(danmu).height);
  const Width = parseFloat(getComputedStyle(danmu).width);
  const Padding = parseFloat(getComputedStyle(danmu).padding);
  let top = Math.abs(
    Math.random() * document.documentElement.clientHeight - (Height + Padding)
  );
  danmu.style.top = `${top}px`;
  danmu.style.opacity = opacity * 0.01;

  // Calculate animation duration
  // Speed range: 1 (slowest) to 10 (fastest)
  let currentSpeed = Number(speed);
  if (isNaN(currentSpeed)) {
    console.warn('[showdanmu] Invalid speed received, defaulting to 5:', speed);
    currentSpeed = 5;
  }

  // Clamp speed to the 1-10 range
  currentSpeed = Math.max(1, Math.min(10, currentSpeed));

  const maxTime = 20000; // Max duration (slowest) in ms (for speed 1)
  const minTime = 2000;  // Min duration (fastest) in ms (for speed 10)

  // Linear interpolation: duration = maxTime - (speed - 1) * (maxTime - minTime) / (10 - 1)
  // (10 - 1) is the range of speed values (9 steps)
  let duration = maxTime - (currentSpeed - 1) * (maxTime - minTime) / 9;

  // Ensure duration is within minTime and maxTime bounds, even with floating point issues.
  duration = Math.max(minTime, Math.min(maxTime, duration));

  console.log('[showdanmu] Sanitized speed:', currentSpeed, 'Calculated duration:', duration);

  console.log('[showdanmu] Animation parameters:', { Width, duration, top });
  try {
    danmu.animate(
      [
        { transform: "translateX(100vw)" },
        { transform: `translateX(-${Width}px)` },
      ],
      {
        duration: duration,
        easing: "linear",
      }
    ).onfinish = () => {
      console.log('[showdanmu] Animation finished, danmu removed:', danmu);
      danmu.remove();
    };
  } catch (e) {
    console.error('[showdanmu] Animation error:', e);
  }
};

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const ip = document.getElementById("host-input");
const port = document.getElementById("port-input");
const screenSelect = document.getElementById("screen-select");
const syncMultiDisplayCheckbox = document.getElementById("sync-multi-display-checkbox");

startButton.addEventListener("click", () => {
  //var ipre = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  var ipre =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var domainre =
    /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  var portre = /^\d{1,5}$/;
  if (
    ipre.test(ip.value) ||
    (domainre.test(ip.value) && portre.test(port.value))
  ) {
    const IP = ip.value;
    const PORT = port.value;
    const displayIndex = parseInt(screenSelect.value);
    const enableSyncMultiDisplay = syncMultiDisplayCheckbox.checked;

    console.log(`[Renderer] Starting overlay with: IP=${IP}, PORT=${PORT}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}`);
    console.log('[renderer.js] window.API before create:', window.API);
    const api = window.API;
    api.create(IP, PORT, displayIndex, enableSyncMultiDisplay); // Pass the new argument

    startButton.disabled = true;
    stopButton.disabled = false;
    ip.disabled = true;
    port.disabled = true;
    screenSelect.disabled = true;
    syncMultiDisplayCheckbox.disabled = true;
    console.log(`[Renderer] UI Disabled: screenSelect=${screenSelect.disabled}, syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`);
  }
});

stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  ip.disabled = false;
  port.disabled = false;
  syncMultiDisplayCheckbox.disabled = false;
  syncMultiDisplayCheckbox.dispatchEvent(new Event('change')); // This will trigger the change handler below
  console.log(`[Renderer] Overlay stopped. UI Enabled: syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`);
  console.log('[renderer.js] window.API before close:', window.API);
  const api = window.API;
  api.close(); // Changed from api.delete()
});

syncMultiDisplayCheckbox.addEventListener('change', () => {
  if (syncMultiDisplayCheckbox.checked) {
    screenSelect.disabled = true;
    console.log(`[Renderer] Sync checkbox CHECKED: screenSelect.disabled=${screenSelect.disabled}`);
  } else {
    // Only enable screenSelect if the overlay is not active (i.e., startButton is enabled)
    if (startButton.disabled === false) {
      screenSelect.disabled = false;
    }
    console.log(`[Renderer] Sync checkbox UNCHECKED: screenSelect.disabled=${screenSelect.disabled} (startButton.disabled=${startButton.disabled})`);
  }
});

// Initial state setup
if (syncMultiDisplayCheckbox.checked) {
  screenSelect.disabled = true;
}
console.log(`[Renderer] Initial UI state: screenSelect.disabled=${screenSelect.disabled}, syncMultiDisplayCheckbox.checked=${syncMultiDisplayCheckbox.checked}`);
