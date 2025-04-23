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
下載[執行檔](https://github.com/guan4tou2/danmu-desktop/releases)後，開啟程式後輸入 Server 的 IP 以及 port(預設 4001)，即可開啟彈幕  

mac 需要輸入 `sudo xattr -r -d com.apple.quarantine 'danmu manager.app'`

### Server
使用 uv 會比較快速，也可以使用任何你喜歡的管理工具
```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
vim .env # 修改你的密碼
uv venv
uv pip install -r requirements.txt
uv run app.py
```

http://ip:4000 即可使用
http://ip:4000/admin 可以進入管理頁面

如果想修改 port，可在 .env 修改

## port說明  
- 4000：網頁
- 4001：Danmu Desktop 客戶端
