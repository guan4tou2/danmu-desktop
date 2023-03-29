/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
let screenwidth = screen.width;
let screenheight = screen.height;

function showdanmu(string, range = 75, color = '#000000', speed = 8000, size = 50) {
    var parentElement = document.getElementById("danmubody");
    var danmu = document.createElement("h1");
    parentElement.appendChild(danmu);

    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-storke", string)
    danmu.style.fontSize = `${size}px`;

    const Height = parseFloat(getComputedStyle(danmu).height)
    const Padding = parseFloat(getComputedStyle(danmu).padding)
    let top = Math.random() * document.documentElement.clientHeight - (Height*2 + Padding * 2);
    console.log(document.documentElement.clientHeight, top)
    danmu.style.top = `${top}px`;
    danmu.style.opacity = range * 0.01
    danmu.style.setProperty('--webColor', color);
    danmu.style.setProperty('--Color', color);

    danmu.animate([
        { transform: 'translateX(100%)' },
        { transform: `translateX(-${screenwidth}px)` }
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
    if (ip.value === "" || port.value===""){
        console.log("stop")
    }else{
        const IP= ip.value
        const PORT=port.value
        console.log(IP,PORT)
        const api=window.API
        api.create(IP, PORT)
        startButton.disabled=true
        stopButton.disabled = false
    }
});
stopButton.addEventListener('click', () => {
    startButton.disabled = false
    stopButton.disabled = true
    const api=window.API
    api.delete()
});


// document.addEventListener("DOMContentLoaded", event => {
//     // 建立 WebSocket (本例 server 端於本地運行)
//     let url = `ws://${IP}:${PORT}`
//     var ws = new WebSocket(url)
//     // 監聽連線狀態
//     ws.onopen = () => {
//         console.log('open connection')
//     }
//     ws.onclose = () => {
//         console.log('close connection');
//     }
//     //接收 Server 發送的訊息
//     ws.onmessage = event => {
//         let txt = event.data
//         text(txt)
//     }
// });
