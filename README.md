# danmu-desktop 直接在桌面顯示彈幕  

此專案分為兩個部分  
1. Danmu-Desktop  
Danmu=Desktop為client端，執行於想要顯示彈幕的電腦上  

2. Server  
Server會建立起網站，提供輸入彈幕的介面，將彈幕傳送給Danmu-Desktop  

## 使用方式
### Danmu-Desktop 
下載執行檔後，開啟程式後輸入Server的IP以及websocket的port(預設4000)，即可開啟彈幕  

### Server
分為兩種執行方式
1. Docker  
進入server資料夾，執行start.sh後即可開啟伺服器  

2. Node.js  
進入server資料夾，執行`npm i`安裝模組，`npm start`開啟伺服器

## port說明  
- 3000：網頁  
- 4000：websocket  
- 5000：server api  

可將`docker run -p {3000}:3000 -p {4000}:4000 -p 5000:5000 --name danmu -d danmu-server`中的大括號修改為需要的port  
