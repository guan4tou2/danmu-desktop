# 專案簡化檢查清單

## 🔴 過度設計項目（建議移除）

### 1. 多個 Dockerfile

- [ ] `Dockerfile.multistage` - 移除（小專案不需要多階段構建）
- [ ] `Dockerfile.supervisor` - 移除（未使用）
- [ ] `supervisord.conf` - 移除（未使用）
- [ ] 簡化 `Dockerfile`，移除 supervisor 相關配置

### 2. Swagger API 文檔

- [ ] 移除 `flasgger` 依賴（`pyproject.toml`）
- [ ] 移除 `server/app.py` 中的 Swagger 配置（第 68-90 行）
- [ ] 移除 `server/routes/api.py` 中的 Swagger 註解
- [ ] 在 README 中添加簡單的 API 說明（可選）

### 3. 審計日誌服務

- [ ] 移除 `server/services/audit.py`
- [ ] 移除 `server/routes/admin.py` 中的 `log_admin_action` 調用
- [ ] 改用簡單的 `current_app.logger.info()` 記錄重要操作

### 4. 重複的 CI/CD Workflow

- [ ] 移除 `.github/workflows/server-tests.yml`（與 `test.yml` 重複）
- [ ] 保留 `.github/workflows/test.yml`

### 5. 過多的文檔檔案

- [ ] 合併 `IMPROVEMENTS.md`, `IMPROVEMENTS_SUMMARY.md`, `IMPROVEMENTS_IMPLEMENTED.md`, `ADDITIONAL_IMPROVEMENTS.md`
- [ ] 或移到 `docs/` 目錄

### 6. 環境變數過多

- [ ] 簡化 `env.example`，移除不必要的配置
- [ ] 使用合理預設值，減少必須配置的項目

### 7. 目錄結構混亂

- [ ] `utils.py` 和 `utils/` 目錄同時存在，考慮合併
- [ ] 檢查是否有其他重複的結構

## ✅ 建議保留（核心功能）

- ✅ 速率限制（但可簡化配置）
- ✅ CSRF 保護
- ✅ 密碼雜湊
- ✅ 輸入驗證（marshmallow）
- ✅ 健康檢查端點
- ✅ 請求追蹤（Request ID）
- ✅ 統一錯誤處理
- ✅ Pre-commit hooks
- ✅ 測試框架
- ✅ Docker Compose

## 📊 簡化優先級

### 高優先級（立即執行）

1. 移除多個 Dockerfile
2. 移除 Swagger
3. 合併重複的 CI/CD workflow

### 中優先級（短期執行）

4. 簡化審計日誌
5. 簡化環境變數配置

### 低優先級（可選）

6. 合併文檔
7. 整理目錄結構

## 💡 簡化後的目標

- **依賴數量：** 減少 1-2 個
- **檔案數量：** 減少 5-7 個
- **配置複雜度：** 降低 30%
- **部署難度：** 降低 40%
- **維護成本：** 降低 25%
