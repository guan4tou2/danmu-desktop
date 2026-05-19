# Design Brief — 2026-05-19 Batch 4 (Plugin Upload Flow)

**Status:** 待 designer 出 v5 mockup
**Author:** engineering（從 v5 batch10-plugins.jsx + 缺口分析逆推功能 spec）
**Branch:** `claude/design-v2-retrofit`
**Context:** v5 canvas Batch 10 把 `#/plugins` 頁完整設計了（KPI + 6-col table + live console），但**上傳 .py/.js 整個流程沒設計**。目前頁面上有「＋ 上傳 .py/.js」CTA 但點下無反應；後端也沒對應 endpoint。本 brief 鎖定 plugin upload 4-step lifecycle，是 Plugins 頁最後一個 design gap。

---

## 為什麼

Plugins 是 admin 擴充 server 行為的入口（敏感字過濾、Fire 觸發效果、自動翻譯等）。目前所有插件都靠手動放進 `server/plugins/` 後重啟才生效。要做 hot-reload + 上傳，UX 必須處理：

1. **檔案信任** — `.py` / `.js` 拉到 server-side runtime，等於授予 RCE。UI 必須清楚顯示插件會做什麼（permissions / 訪問範圍）。
2. **失敗回滾** — 上傳後驗證失敗（syntax error / missing manifest / dependency conflict）必須 graceful 退場，不能讓 admin 以為已安裝。
3. **覆寫警告** — 同名插件覆寫應有 confirm，搭配 versioning hint（v1.0.0 → v1.1.0）。

---

## 共通約定（同 Batch 1-3）

- HUD palette `hudTokens`（cyan / amber / lime / crimson）
- Modal pattern: 重用 `HudConfirm.open(...)` helper（webhooks add form / api-tokens revoke 都用這個）
- Drag-drop: 重用 webhooks `admin-em-v4__upzone` 的虛線 dropzone pattern
- Multi-step: 重用 setup wizard step indicator pattern（圓圈 + 連線）
- 全 admin 預設 light 主題（dark/light token dual）

---

## 完整 lifecycle (4 step)

### Step 1 · 入口

點 plugins 頁右上角「＋ 上傳 .py/.js」CTA → 開 modal **或** 直接打開 bottom sheet（mobile）。

**Designer 需決定**：
- Modal（單一 wide modal 含整個流程）vs 4 個獨立 step 切換？建議 **單 modal + step indicator**（類似 setup wizard，但更緊湊）。
- 寬度建議 640px（足夠顯示 manifest preview 不擠）。

### Step 2 · 檔案選擇 (PICKER)

- 虛線 dropzone（虛線 cyan-line）含：
  - 圖示 `↑`（大字 48px）
  - 主文「拖入 .py 或 .js · 或 點選檔案」
  - 副文「最大 256 KB · 單檔上傳 · plugin 需含 manifest 註解」
- 隱藏 `<input type="file" accept=".py,.js" />`
- 拖入時：dropzone 變實線 cyan + bg `cyanSoft`
- 多檔拖入：顯示 amber warning「一次只能上傳一個」

**Error states designer 需 spec**:
- ❌ 檔案類型錯（.exe / .tar.gz 等）→ crimson border + 訊息「不支援的格式 · 只接受 .py 或 .js」
- ❌ 檔案 > 256 KB → 「檔案過大」
- ❌ 空檔 → 「檔案是空的」

### Step 3 · 驗證 + Manifest 預覽 (PREVIEW)

選好檔案後，前端 POST `/admin/plugins/upload?dry_run=true`（待 BE）做：
- Syntax check（Python `compile()` / JS `acorn` parser）
- Manifest 解析（從註解抽出 `# @plugin-meta` block）
- Dependency check（imports 是否能 resolve）
- Duplicate check（是否已有同名 plugin）

**驗證通過 → Manifest preview card**:

```
┌─ MANIFEST · PREVIEW ──────────────────────────────────────┐
│ NAME           profanity_filter           [v2.0.1]        │
│ AUTHOR         guan4tou2 / @core          LANG    PY      │
│ DESCRIPTION    敏感字過濾 · 內建字典 + 自訂規則           │
│ PRIORITY       5 · CRITICAL (crimson pill)                │
├───────────────────────────────────────────────────────────┤
│ PERMISSIONS · 此插件會存取                                │
│   ● messages.read   讀取所有彈幕                          │
│   ● messages.block  封鎖訊息                              │
│   ● filters.add     新增過濾規則                          │
│   ○ session.read    （未要求）                            │
├───────────────────────────────────────────────────────────┤
│ DEPENDENCIES (3)                                          │
│   re                 (stdlib · OK)                        │
│   yaml               (PyYAML · 已安裝 v6.0)               │
│   nltk               (待安裝 · 14 MB · uv add nltk)       │
└───────────────────────────────────────────────────────────┘
```

**Designer 需 spec**:
- Manifest preview card 配色 / 行高 / mono vs sans 區分
- Permission row 圖示：●（已要求 cyan）vs ○（未要求 mute）
- Dependency 三色：lime (stdlib/已安裝) / amber (待安裝) / crimson (找不到)
- 同名覆寫時：name 顯示「profanity_filter v2.0.1 → v2.0.2」amber chip「將覆寫」

**Validation error states**:
- 🔴 Syntax error → 紅底 monaco-style code highlight + 行號 + 錯誤訊息
- 🔴 Missing manifest → amber empty state「未發現 manifest · 此插件將以 priority=100 / 無描述 安裝。確定要繼續？」
- 🔴 Duplicate + version downgrade → crimson warning「目前已安裝 v2.0.1，上傳檔案是 v1.9.0。降版安裝可能丟失資料。」
- 🔴 Dependency 缺 → amber list「需先安裝：nltk / numpy。複製 `uv add nltk numpy` 並重啟伺服器。」

### Step 4 · 安裝確認 (CONFIRM)

Manifest preview 看 OK 後 → 「安裝」CTA → 二次 confirm modal（重用 HudConfirm）：

```
⚠ 確認安裝插件

profanity_filter v2.0.1

此插件會：
  ● 讀取所有彈幕訊息
  ● 封鎖違規訊息
  ● 新增過濾規則

安裝後將：
  1. 寫入 server/plugins/profanity_filter.py
  2. 觸發 hot-reload（無需重啟）
  3. 預設啟用 = ON（priority 5 · CRITICAL）

[取消]  [確認安裝]
```

點確認 → POST `/admin/plugins/install`（待 BE）→ 成功 toast「profanity_filter 已安裝並啟用 · 5s ago」+ 自動 refresh plugin list。

**Loading state during install**:
- 安裝按鈕變 spinner「安裝中…」
- Modal 不可關閉（disable backdrop click）
- 進度文字：「上傳…」→「驗證…」→「寫入…」→「重新載入…」→「完成」

**Failure recovery**:
- 上傳失敗 → 留在 Manifest preview，顯示 toast 錯誤
- 寫入失敗 → 退回 Manifest preview，顯示「磁碟寫入失敗 · 可能權限問題」
- Hot-reload 失敗 → 已上傳但未啟用，提供「手動 reload」CTA

---

## 後端 endpoint（待 BE）

| Method | Path | Body | Returns |
|---|---|---|---|
| POST | `/admin/plugins/upload?dry_run=true` | multipart file | `{ manifest: {...}, validation: { syntax_ok, missing_deps, duplicate_name }, file_size }` |
| POST | `/admin/plugins/install` | `{ filename }` (tmp upload ID) | `{ name, version, enabled, priority, installed_at }` |
| POST | `/admin/plugins/uninstall` | `{ name }` | `{ ok }` |

**Manifest schema** (從 plugin 註解抽，建議 JSON in `# @plugin-meta { ... }` block):
```json
{
  "name": "profanity_filter",
  "version": "2.0.1",
  "author": "guan4tou2",
  "description": "敏感字過濾",
  "priority": 5,
  "permissions": ["messages.read", "messages.block", "filters.add"],
  "dependencies": ["re", "yaml", "nltk"]
}
```

---

## States designer 需 spec

1. ✅ **Dropzone idle** — 虛線 + icon + 提示文字
2. ✅ **Dropzone dragover** — 實線 cyan + bg cyanSoft + 「放開以上傳」hint
3. ✅ **Dropzone error** — crimson border + 錯誤訊息（檔案類型 / 大小 / 多檔）
4. ✅ **Upload progress** — progress bar / spinner（建議 cyan thin bar 0-100%）
5. ✅ **Validating** — skeleton text 「分析 manifest…」(2-3s)
6. ✅ **Manifest preview** — name/version/author/permissions/deps card
7. ✅ **Validation error** — syntax error / missing manifest / duplicate downgrade
8. ✅ **Install confirm** — 二次 confirm modal（重用 HudConfirm pattern）
9. ✅ **Installing** — disabled button + spinner + 進度文字
10. ✅ **Install success** — 自動關 modal + toast + plugin list refresh + 新插件 row highlight 1s
11. ✅ **Install failure** — 退回 manifest preview + 錯誤 banner

---

## Open Qs for design

- **Modal vs Drawer vs Page** — 單 modal w/ step indicator 還是 drawer slide-in？建議 modal。
- **Permission display** — flat list ✓ ○ 還是分類（read / write / network / fs）？
- **Code preview** — manifest preview 是否含 code first-line snippet（避免 admin 完全盲安裝）？
- **Trust model** — manifest 是否要 author signature / checksum？目前無，可加 future-flag。
- **Mobile** — 觸控 drag-drop 不可行；mobile 該是 file picker only + 簡化 manifest preview。
- **Upload size cap** — 256 KB 夠不夠？許多 NLP plugin 含詞典可能更大。

---

## 驗收

- 4 step (picker / preview / confirm / installing) 都有獨立 state spec
- Dropzone 3 狀態（idle/dragover/error）視覺清楚
- Manifest preview card 含全 5 區（name+version / author+lang / description / priority / permissions+deps）
- Validation error 3 種（syntax / missing manifest / dependency 缺）視覺有層級
- Install confirm 跟 webhooks revoke / api-tokens revoke 樣式一致
- Success/Failure 處理都有設計

---

## BE pending

工程那邊待補的 endpoint：
1. `POST /admin/plugins/upload?dry_run=true` — multipart + syntax + manifest parse + dep check
2. `POST /admin/plugins/install` — atomic file write + hot-reload trigger
3. `POST /admin/plugins/uninstall` — remove file + reload
4. Manifest spec freeze（`# @plugin-meta { JSON }` 註解格式）
5. Permissions enforcement layer（讀 manifest，runtime gate API access）

設計可跟 BE 平行 — designer 出 mockup 後 BE 照 spec 補 endpoint，工程接 UI。

---

## Why this is the last design gap

Plugins 頁是 v5 batch10 最後一個沒被完整設計的功能。上傳流程做完，整個 admin 12 頁 spec 才算 100% 覆蓋。其他 🟡 list 項目（Blacklist active state / System sub-sections / Detail drawers）都是 existing-page 補完，可在 PR review 階段 inline comment 處理，不需獨立 brief。
