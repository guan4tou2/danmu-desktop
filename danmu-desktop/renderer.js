/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function showdanmu(string, range = 75, color = '#ffffff', size = 50, speed = 10000) {
    var parentElement = document.getElementById("danmubody");
    var imgs=/^https?:\/\/\S*.(gif|png|jpeg|jpg)$/;
    if(imgs.test(string)){
    var danmu = document.createElement("img");
    danmu.setAttribute("src", string)
    danmu.width=size*2;
    }else{
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-storke", string)
    danmu.style.fontSize = `${size}px`;
    danmu.style.color=color
    }
    
    const Height = parseFloat(getComputedStyle(danmu).height)
    const Width = parseFloat(getComputedStyle(danmu).width)
    const Padding = parseFloat(getComputedStyle(danmu).padding)
    let top = Math.abs(Math.random() * document.documentElement.clientHeight - (Height + Padding));
    danmu.style.top = `${top}px`;
    danmu.style.opacity = range * 0.01
    
    parentElement.appendChild(danmu);
    danmu.animate([
        { transform: 'translateX(100vw)' },
        { transform: `translateX(-${Width}px)` }
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
