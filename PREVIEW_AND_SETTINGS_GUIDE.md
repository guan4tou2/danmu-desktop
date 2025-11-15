# Danmu Desktop - 彈幕預覽與設定功能指南

## 📋 新增功能概述

本次更新為 danmu-desktop 添加了兩個重要功能：
1. **彈幕預覽功能** - 在啟動覆蓋層後測試彈幕效果
2. **覆蓋畫面調整功能** - 實時調整彈幕顯示參數（透明度、速度、大小、顏色）

---

## 🎬 彈幕預覽功能

### 功能說明
允許使用者在覆蓋層啟動後，直接從主控制面板發送測試彈幕，無需通過網頁端。

### 使用步驟

1. **啟動覆蓋層**
   - 輸入伺服器 IP 和 Port
   - 點擊「Start Overlay」按鈕
   - 等待連接成功（綠色指示燈）

2. **展開預覽與設定面板**
   - 找到「Preview & Settings」（預覽與設定）區塊
   - 點擊展開折疊面板

3. **發送測試彈幕**
   - 在「Test Danmu」（測試彈幕）輸入框中輸入文字
   - 預設文字：`測試彈幕 Test Danmu 🎉`
   - 點擊「Send」（發送）按鈕
   - 測試彈幕會立即在覆蓋層上顯示

### 特點
- ✅ 支援即時預覽
- ✅ 使用當前設定的參數（透明度、速度、大小、顏色）
- ✅ 無需離開控制面板
- ✅ 覆蓋層未啟動時會顯示警告提示

---

## ⚙️ 覆蓋畫面調整功能

### 可調整參數

#### 1. **不透明度 (Opacity)**
- **範圍：** 10% - 100%
- **預設值：** 100%
- **說明：** 調整整個覆蓋層視窗的透明度
- **用途：** 降低透明度可讓彈幕不會完全遮擋遊戲或影片內容

#### 2. **速度 (Speed)**
- **範圍：** 1 (最慢) - 10 (最快)
- **預設值：** 5
- **說明：** 控制彈幕從右到左移動的速度
- **效果：**
  - 速度 1：20 秒移動完成（慢速適合長文字）
  - 速度 10：2 秒移動完成（快速適合短訊息）

#### 3. **字體大小 (Font Size)**
- **範圍：** 20px - 100px
- **預設值：** 50px
- **說明：** 彈幕文字的字體大小
- **建議：**
  - 小螢幕（1080p）：30-50px
  - 大螢幕（4K）：60-80px

#### 4. **顏色 (Color)**
- **類型：** 顏色選擇器
- **預設值：** 白色 (#ffffff)
- **說明：** 彈幕文字的顏色
- **支援：** 完整的 RGB 色彩空間

### 使用步驟

1. **調整參數**
   - 使用滑桿調整不透明度、速度、字體大小
   - 使用顏色選擇器選擇彈幕顏色
   - 即時查看當前數值（顯示在滑桿右側）

2. **測試效果**
   - 在調整參數後，使用「Test Danmu」功能發送測試彈幕
   - 查看實際效果

3. **套用設定**
   - 確認參數設定無誤後，點擊「Apply Settings to Overlay」（套用設定至覆蓋層）
   - 設定會立即生效並儲存到 localStorage
   - 下次啟動應用時會自動載入

### 特點
- ✅ 即時反饋（滑桿數值即時更新）
- ✅ 持久化儲存（設定會保存在本地）
- ✅ 批量套用（一次性更新所有參數）
- ✅ 適用於所有顯示器（多顯示器同步模式下同時更新）

---

## 🎨 UI/UX 設計特色

### 視覺設計
- **折疊面板設計：** 不佔用主介面空間，需要時展開
- **玻璃態效果：** 與主介面風格一致
- **自訂滑桿：** 藍色漸層圓點，懸停時放大
- **即時數值顯示：** 每個參數旁邊顯示當前數值

### 互動設計
- **滑桿操作：** 拖曳滑桿即時更新數值
- **顏色選擇器：** 點擊色塊彈出系統顏色選擇器
- **按鈕反饋：** 懸停時陰影加深，點擊時縮放
- **Toast 通知：** 操作成功/失敗時顯示友善提示

### 無障礙性
- **鍵盤導航：** 所有控制項支援 Tab 導航
- **視覺反饋：** 滑桿拇指懸停時放大
- **清晰標籤：** 每個控制項都有明確的標籤

---

## 🌍 多語言支援

所有新增的 UI 文字都支援繁體中文和英文：

| 英文 | 繁體中文 |
|------|---------|
| Preview & Settings | 預覽與設定 |
| Test Danmu | 測試彈幕 |
| Send | 發送 |
| Overlay Settings | 覆蓋層設定 |
| Opacity | 不透明度 |
| Speed | 速度 |
| Font Size | 字體大小 |
| Color | 顏色 |
| Apply Settings to Overlay | 套用設定至覆蓋層 |

---

## 🔧 技術實作細節

### 前端 (index.html + renderer.js)

**UI 元件：**
```html
<details class="glass-effect rounded-xl p-4">
  <summary>Preview & Settings</summary>
  <!-- 預覽和設定控制項 -->
</details>
```

**JavaScript 邏輯：**
```javascript
// 載入已儲存的設定
loadDanmuSettings();

// 即時更新滑桿數值
overlayOpacity.addEventListener("input", (e) => {
  danmuSettings.opacity = parseInt(e.target.value);
  opacityValue.textContent = `${danmuSettings.opacity}%`;
});

// 發送測試彈幕
api.sendTestDanmu(text, opacity, color, size, speed);

// 套用設定
api.updateOverlaySettings(danmuSettings);
```

### 後端 (main.js + preload.js)

**IPC 通訊：**

1. **send-test-danmu**
   ```javascript
   // Renderer → Main
   ipcRenderer.send("send-test-danmu", { text, opacity, color, size, speed });

   // Main → Child Windows
   win.webContents.executeJavaScript(`window.showdanmu(...)`);
   ```

2. **update-overlay-settings**
   ```javascript
   // Renderer → Main
   ipcRenderer.send("update-overlay-settings", settings);

   // Main: Update window opacity
   win.setOpacity(settings.opacity / 100);

   // Main: Store settings in window
   win.webContents.executeJavaScript(`
     window.defaultDanmuSettings = ${JSON.stringify(settings)};
   `);
   ```

### 資料持久化

**localStorage 儲存：**
```javascript
// 儲存格式
{
  "opacity": 100,
  "speed": 5,
  "size": 50,
  "color": "#ffffff"
}

// 儲存位置
localStorage.setItem("danmu-display-settings", JSON.stringify(settings));

// 載入位置
const saved = localStorage.getItem("danmu-display-settings");
```

---

## 📊 使用情境範例

### 情境 1：遊戲直播（高速動作遊戲）
**建議設定：**
- 不透明度：60%（避免遮擋遊戲畫面）
- 速度：7-8（快速移動，不影響觀看）
- 字體大小：40px（適中大小）
- 顏色：亮色系（與遊戲背景對比）

### 情境 2：聊天互動（慢節奏內容）
**建議設定：**
- 不透明度：80%
- 速度：3-4（讓觀眾有時間閱讀）
- 字體大小：50-60px
- 顏色：白色或黃色

### 情境 3：活動宣傳（重要訊息）
**建議設定：**
- 不透明度：100%（完全不透明）
- 速度：2（非常慢，確保被看到）
- 字體大小：70-80px（大字體）
- 顏色：紅色或金色（醒目）

---

## ⚠️ 注意事項

1. **覆蓋層必須啟動**
   - 預覽和設定功能只有在覆蓋層啟動後才能使用
   - 未啟動時會顯示警告提示

2. **設定即時生效**
   - 點擊「Apply Settings」後，設定會立即套用到所有覆蓋層視窗
   - 無需重新啟動覆蓋層

3. **多顯示器同步**
   - 啟用「同步多顯示器」模式時，設定會同時套用到所有顯示器

4. **性能考量**
   - 不透明度設定會影響視窗合成性能
   - 建議在低性能設備上保持不透明度在 80% 以上

---

## 🐛 故障排除

### 問題：點擊「Send」沒有反應
**解決方法：**
1. 檢查覆蓋層是否已啟動（查看連接狀態指示燈）
2. 確認已輸入測試文字
3. 查看 Console 是否有錯誤訊息

### 問題：套用設定後沒有變化
**解決方法：**
1. 確認覆蓋層已啟動
2. 嘗試重新啟動覆蓋層
3. 檢查瀏覽器 Console 查看錯誤

### 問題：設定沒有被保存
**解決方法：**
1. 檢查瀏覽器是否禁用 localStorage
2. 清除瀏覽器快取後重試
3. 確認點擊了「Apply Settings」按鈕

---

## 🔮 未來改進計劃

- [ ] 添加預設主題（遊戲、聊天、活動等）
- [ ] 支援彈幕顯示區域限制（上/中/下區域）
- [ ] 彈幕軌道數量控制
- [ ] 彈幕碰撞檢測選項
- [ ] 彈幕描邊/陰影效果
- [ ] 批量測試模式（連續發送多條測試彈幕）

---

## 📝 更新日誌

### v2.9.0 (2024)
- ✨ 新增彈幕預覽功能
- ✨ 新增覆蓋畫面調整功能（透明度、速度、大小、顏色）
- ✨ 新增設定持久化儲存
- ✨ 新增多語言支援（預覽與設定相關文字）
- 🎨 改進 UI 設計（折疊面板、自訂滑桿）
- ♿ 提升無障礙性

---

**最後更新：** 2024
**維護者：** guan4tou2
**專案：** danmu-desktop
