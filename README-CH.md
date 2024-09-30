# danmu-desktop
直接在桌面顯示彈幕  

此專案分為兩個部分  
1. Danmu-Desktop  
DanmuDesktop 為 client 端，執行於想要顯示彈幕的電腦上  
目前支援作業系統:Windows,MacOS，具有安裝檔與可移植檔  

2. Server  
Server 會建立網站，提供輸入彈幕的介面，將彈幕傳送給 Danmu-Desktop  

## 使用方式
### Danmu-Desktop 
下載[執行檔](https://github.com/guan4tou2/danmu-desktop/releases)後，開啟程式後輸入 Server 的 IP 以及 port(預設 4000)，即可開啟彈幕  

### Server
`pip install -r requestments.txt`
`python3 app.py`

https://127.0.0.1:4000

## port說明  
- 4000：網頁  
