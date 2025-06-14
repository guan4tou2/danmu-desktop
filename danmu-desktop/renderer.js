/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function showdanmu(
  string,
  opacity = 75,
  color = "#ffffff",
  size = 50,
  speed = 7
) {
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
    danmu.setAttribute("data-storke", string);
    danmu.style.fontSize = `${size}px`;
    danmu.style.color = color;
  }
  parentElement.appendChild(danmu);

  const Height = parseFloat(getComputedStyle(danmu).height);
  const Width = parseFloat(getComputedStyle(danmu).width);
  const Padding = parseFloat(getComputedStyle(danmu).padding);
  let top = Math.abs(
    Math.random() * document.documentElement.clientHeight - (Height + Padding)
  );
  danmu.style.top = `${top}px`;
  danmu.style.opacity = opacity * 0.01;

  // 计算动画持续时间
  // 基础时间：20000ms (20秒)
  // 速度范围：1-10，数字越大速度越快
  // 使用线性计算让速度变化更均匀
  const maxTime = 15000; // 最慢速度 (20秒)
  const minTime = 2000; // 最快速度 (2秒)
  const timeRange = maxTime - minTime;
  let duration = maxTime - (timeRange / 10) * (speed - 1);

  if (duration < minTime) {
    duration = minTime;
  }

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
    danmu.remove();
  };
}

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
  const api = window.API;
  api.delete();
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
