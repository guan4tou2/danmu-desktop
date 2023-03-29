# danmu-desktop

## Danmu-Desktop
進入danmu-desktop資料夾後  
1.  `npm install` 安裝所需模組  
2.  `npm run pack-dist` 打包成安裝檔以及portable  
3.  `npm start` 執行

開啟程式後輸入server的IP以及websocket的port(預設4000)

## Server
需安裝Docker  
進入server資料夾，執行start.sh中的指令建立docker image並執行  
也可直接執行start.sh  

### port說明
- 3000：網頁
- 4000：websocket
- 5000：server api  

可將`docker run -p {3000}:3000 -p {4000}:4000 -p 5000:5000 --name danmu -d danmu-server`中的大括號修改為需要的port  
