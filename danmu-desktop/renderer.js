/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function showdanmu(string, range = 75, color = '#000000', size = 50, speed = 10000) {
    var parentElement = document.getElementById("danmubody");
    var danmu = document.createElement("h1");
    parentElement.appendChild(danmu);

    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-storke", string)
    danmu.style.fontSize = `${size}px`;

    const Height = parseFloat(getComputedStyle(danmu).height)
    const Padding = parseFloat(getComputedStyle(danmu).padding)
    let top = Math.abs(Math.random() * document.documentElement.clientHeight - (Height*2 + Padding * 2));
    console.log(document.documentElement.clientHeight, top)
    danmu.style.top = `${top}px`;
    danmu.style.opacity = range * 0.01
    danmu.style.color=color
    //danmu.style.setProperty('--webColor', color);
    //danmu.style.setProperty('--Color', color);

    danmu.animate([
        { transform: 'translateX(100%)' },
        { transform: `translateX(-${document.documentElement.clientWidth}px)` }
    ], {
        duration: speed
    }).onfinish = () => {
        danmu.remove();
    }
}

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const ip = document.getElementById('basic-ip')
const port = document.getElementById('basic-port')
startButton.addEventListener('click', () => {
    var ipre=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    var portre=/^\d{1,5}$/;
    if (ipre.test(ip.value) && portre.test(port.value)){
        const IP= ip.value
        const PORT=port.value
        console.log(IP,PORT)
        const api=window.API
        api.create(IP, PORT)
        startButton.disabled=true
        stopButton.disabled = false
        ip.disabled=true
        port.disabled=true
    }
});
stopButton.addEventListener('click', () => {
    startButton.disabled = false
    stopButton.disabled = true
    ip.disabled=false
    port.disabled=false
    const api=window.API
    api.delete()
});
