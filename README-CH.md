# danmu-desktop
在桌面直接顯示彈幕

![img](img/danmu%20display.png)

## 概述
此專案分為兩個部分：

1. Danmu-Desktop  
   - 客戶端應用程式，在您的電腦上運行以顯示彈幕
   - 目前支援 Windows 和 MacOS
   - 提供安裝版和可攜式版本

![img](img/client.png)
![img](img/client%20start%20effect.png)

1. Server  
   - 創建網頁界面用於彈幕輸入
   - 管理彈幕傳送到已連接的客戶端
   - 包含管理員配置面板

![img](img/web%20panel.png)
![img](img/admin%20panel.png)

## 安裝與使用

### Danmu-Desktop 客戶端
1. 下載[最新版本](https://github.com/guan4tou2/danmu-desktop/releases)
2. MacOS 用戶需要執行：
   ```bash
   sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
   ```
3. 啟動應用程式
4. 輸入伺服器的 IP 和端口（預設：4001）

### 伺服器設置
```bash
# 克隆專案
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop

# 配置環境
vim .env  # 設置管理員密碼

# 設置虛擬環境並安裝依賴
uv venv
uv pip install -r requirements.txt

# 啟動伺服器
uv run app.py
```

### 訪問伺服器
- 主界面：`http://ip:4000`
- 管理面板：`http://ip:4000/admin`

## 端口配置
- `4000`：網頁界面
- `4001`：Danmu Desktop 客戶端連接

## 參考資料
SAO UI 設計參考自 [SAO-UI-PLAN-LINK-START | Akilarの糖果屋](https://akilar.top/posts/1b4fa1dd/)