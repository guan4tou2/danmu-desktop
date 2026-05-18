# WS Auth Token · 情境與保留決策 · 2026-05-16

**狀態**：保留現有設計（v4.8+ 線上可 toggle 的 runtime token）。
**重新評估觸發點**：部署形態變更（離開公網 VPS）或 nginx 層新增 mTLS / IP allowlist。
**相關程式碼**：
- 伺服器：[`server/services/ws_auth.py`](../../server/services/ws_auth.py) · [`server/ws/server.py`](../../server/ws/server.py)
- Electron 主程序：[`danmu-desktop/main-modules/child-ws-script.js`](../../danmu-desktop/main-modules/child-ws-script.js)
- Electron renderer UI：[`danmu-desktop/index.html`](../../danmu-desktop/index.html) (`#ws-token-input`)

---

## 1 · 為什麼有這份 doc

2026-05-16 review 時提出疑問：「WS Auth Token 以目前的設計還需要嗎？」這份 doc 把
**保留**決策對應的 threat model 與情境寫下來，讓未來討論時不必重跑同一個 thread。

`WS Auth Token` 跟 `Fire Token` 是兩個不同系統，常被搞混 — 結尾「相鄰但無關的概念」一節
有明確區分。

---

## 2 · WS Auth Token 在保護什麼

`wss://HOST:4001/ws` 是 overlay child window 接收 server → client 廣播的 channel。Token 保護
兩個 surface：

1. **未授權收聽** — 沒 token 的話，任何能連到 4001 port 的 client 都會即時收到所有 broadcast
   payload（含 nickname / message / fingerprint / 內部 event tag）。
2. **連線耗盡 DoS** — server 設了 `WS_MAX_CONNECTIONS` 全域上限和 `WS_MAX_CONNECTIONS_PER_IP`
   per-IP 上限；沒 token 的話誰都能 hold 連線把 slot 占滿，正常 overlay 連不進來。

握手時 token 從 query string `?token=...` 帶入，server 端用 `secrets.compare_digest` 比對，失敗
就 `close(1008, "Unauthorized")` — 見 [`ws/server.py:122-139`](../../server/ws/server.py)。

---

## 3 · 情境拆解

### 3.1 情境 A · 公開議程，活動現場 LAN

**配置**：演講者用 LAN 連到本地端 server，觀眾用同個 Wi-Fi 上 viewer 送彈幕。

- **未授權收聽**風險：低 — 彈幕本來就會打在大螢幕上，沒有「機密」
- **連線耗盡 DoS** 風險：中 — 同 Wi-Fi 下的 prankster 可能耗 slot
- **建議**：admin UI 可以 toggle 到 `require_token=false` 換 UX；但因為 default 是 true，
  operator 通常會保留

### 3.2 情境 B · 公網 VPS 部署 (目前主要 deployment)

**配置**：Oracle VPS 上 nginx 終結 TLS，4001 port 對公網開放，演講者 / 觀眾全部走公網連到 server。

- **未授權收聽**風險：高 — port scanner 一律掃得到 4001，任何人都能 spawn fake overlay 收實況
- **連線耗盡 DoS** 風險：高 — 攻擊者可以多 IP rotation 把 slot 占滿，正常 overlay 進不來
- **建議**：**必留 token**。這是目前的主場景，所以整個保留決策以這個為基準。

### 3.3 情境 C · 半公開／付費／企業內訓場次

**配置**：用公網 VPS，但內容受 NDA 或門票管制，不希望未付費觀眾能看到 stream。

- **未授權收聽**風險：高 — 即使彈幕本身公開，能即時收聽 = 可以同步出去當盜版頻道
- **連線耗盡 DoS** 風險：高 — 同 B
- **建議**：**必留 token**，且建議 admin UI 加上「強制每場輪替」流程（未做，列為待辦）

### 3.4 情境 D · 內網跳板機之後 (未來假設)

**配置**：service 搬到內網，4001 port 不對公網開，外部存取靠 VPN / 跳板機。

- **未授權收聽**風險：低 — 網路層已經擋掉
- **連線耗盡 DoS** 風險：低
- **建議**：可討論拔掉 token。但前置要求是 deployment 文件先確認**所有**對外路徑都有
  網路層認證（不能只有「主要對外是 VPN，但 admin 從 home network 直接連」這種混合）

### 3.5 情境 E · nginx 層加 mTLS 或 IP allowlist (未來假設)

**配置**：reverse proxy 上要求 client 帶證書 / 從特定 IP 段來，才允許進到 4001。

- 認證上移到網路邊界後，application-layer token 就 redundant
- **建議**：兩種方案先二擇一鋪滿，再考慮 application-layer token 退場。中間態（同時保留）也
  OK，只是 operator 要兩邊都維護

---

## 4 · 其他防線為什麼補不上 token 的位

| 機制 | 在哪 | 為什麼不能取代 token |
|---|---|---|
| `allowed_origins` Origin filter | [`ws/server.py:123-129`](../../server/ws/server.py) | 只擋瀏覽器（瀏覽器才強制送 Origin）。Electron / curl / python-websockets client 可以任意 spoof |
| WSS (TLS) | nginx https profile | 只保證傳輸層加密 + server 身分；對 client 不認證 |
| `/fire` 反刷屏（rate limit / fingerprint / X-Fire-Token） | HTTP 端 | 完全不同 surface — 那是擋「送出彈幕」（HTTP POST），token 是擋「接收彈幕」（WSS 訂閱） |
| nginx IP allowlist | `nginx.conf` | 可行，但 operator 要事先知道每個 overlay client IP，活動現場通常不知道 |
| `WS_MAX_CONNECTIONS_PER_IP` | [`ws/server.py:158-164`](../../server/ws/server.py) | 限同 IP；攻擊者用 IP rotation 即可破 |

結論：上述每一條都解決部分問題，但沒有一條能同時擋「未授權收聽 + DoS」。Token 是
**defense in depth** 的一層，不是唯一一層。

---

## 5 · Default-on posture

[`ws_auth.py:99-126`](../../server/services/ws_auth.py) — fresh install 走以下路徑：

1. `WS_REQUIRE_TOKEN` 環境變數沒設 → 視為 fresh install
2. 自動產生 32 bytes URL-safe 隨機 token
3. seed `runtime/ws_auth.json` 為 `{require_token: true, token: <generated>}`
4. admin UI 可以查看 token + 一鍵 regenerate；現有連線 grandfather 不踢線

這個 v4.8 決策反映 polestar：**安全是 default，不是 opt-in**。任何要走 `require_token=false`
的場景 = operator 明確翻開關。

---

## 6 · UX 評估

**現狀**：

- Desktop client UI ([index.html:271-279](../../danmu-desktop/index.html)) 有 `ws-token-input`
  密碼欄位，placeholder 寫 `Set if server enables WS_REQUIRE_TOKEN`，並標示 `(optional)`
- 失敗回饋：handshake 通過後 server 立刻 `close(1008)`，[`child-ws-script.js:438-445`](../../danmu-desktop/main-modules/child-ws-script.js)
  收到立即停止重連、send `connection-failed` 給 connection-status UI

**問題**：

1. `(optional)` 標示會誤導 — default 其實是 require_token=true，operator 看到 optional 容易跳過
   →第一次連線失敗才回來填，多一段挫折
2. Token 是長字串，沒有 copy-from-admin 一鍵流程，目前要 operator 手動切到 admin UI 抄出來貼

**改善方向（未做 · 列為待辦）**：

- 拿掉「optional」標示，改成「Server-required when token auth is on」
- Admin UI 提供「Generate desktop config bundle」按鈕，輸出含 host/port/token 的 QR code 或
  `danmu://` deep link，Electron 掃 / 點就完成
- Admin UI 增加「Token 上次輪替時間 + 一鍵 regenerate」提示

---

## 7 · 重新評估的觸發條件

下列任一條件成立時，應重開這份 doc 評估是否拔掉 / 重設計：

1. 部署形態從「公網 VPS」改為「內網／VPN-only」
2. nginx 層導入 mTLS 或穩定的 IP allowlist
3. 出現實際 token 操作成本 > 安全收益的 case study（不是 UX 不便，是商業上的真實損失）
4. 上游 `websockets` library 提供更好的 client 認證機制（例如標準 token negotiation handshake）

直到任一條件成立前，保留現有設計。

---

## 8 · 相鄰但無關的概念

容易跟 WS Auth Token 搞混的東西：

| 名稱 | Surface | 目的 | 載體 |
|---|---|---|---|
| **WS Auth Token** | WSS `/ws` 訂閱 | 限制誰能**接收** broadcast | URL query `?token=...` |
| **Fire Token** | HTTP `POST /fire` | admin lane bypass `/fire` 反刷屏（per-fingerprint cap、global ceiling、captcha gate） | HTTP header `X-Fire-Token` |
| **Admin Session** | HTTP admin 路由 | admin UI 登入 | Cookie (`session`) |
| **API Token** | HTTP `/api/*` (read-only) | 開發者 / 第三方 read-only 存取 | HTTP header `Authorization` |

四個 token 走不同 surface、解不同問題，互不取代。
