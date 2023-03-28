const http = require('http');
const fs = require('fs');
const event = require('events');
const express = require('express')
const cors = require('cors')

const config = JSON.parse(fs.readFileSync('config.json'));
const ServerPort = config.Port; // 設置伺服器端口號
const ServerIP = config.IP; // 設置伺服器端口號

const sender = http.createServer((req, res) => {
    fs.readFile('server.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

sender.listen(ServerPort, () => {
    console.log(`Server running at http://${ServerIP}:${ServerPort}/`);
});

// //import express 和 ws 套件
const SocketServer = require('ws').Server
const PORT = 4000 //指定 port

//創建 express 物件，綁定監聽  port , 設定開啟後在 console 中提示
const server = express().listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server })
//當有 client 連線成功時

wss.on('connection', ws => {
    console.log('Client connected')
    let api = express();
    api.use(cors());
    api.get("/api", function (req, res) {
        console.log(req.query)
        ws.send(JSON.stringify(req.query))
        res.end("hello")
    })
    var serverapi = api.listen(5678);
    // 當連線關閉
    ws.on('close', () => {
        console.log('Close connected')
        serverapi.close();
    })
})


