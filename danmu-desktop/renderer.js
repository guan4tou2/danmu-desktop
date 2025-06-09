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
  const duration = maxTime - (timeRange / 10) * (speed - 1);

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

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const ip = document.getElementById("basic-ip");
const port = document.getElementById("basic-port");
const screenSelect = document.getElementById("screen-select");

startButton.addEventListener("click", () => {
  var ipre = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  var portre = /^\d{1,5}$/;
  if (ipre.test(ip.value) && portre.test(port.value)) {
    const IP = ip.value;
    const PORT = port.value;
    const displayIndex = parseInt(screenSelect.value);
    console.log(IP, PORT, displayIndex);
    const api = window.API;
    api.create(IP, PORT, displayIndex);
    startButton.disabled = true;
    stopButton.disabled = false;
    ip.disabled = true;
    port.disabled = true;
  }
});
stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  ip.disabled = false;
  port.disabled = false;
  screenSelect.disabled = false;
  const api = window.API;
  api.delete();
});
