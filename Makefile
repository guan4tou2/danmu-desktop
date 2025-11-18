.PHONY: help install test run docker-build docker-up docker-down docker-logs clean

help: ## 顯示此幫助訊息
	@echo "可用指令："
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## 安裝依賴
	cd server && uv sync

test: ## 執行測試
	cd server && PYTHONPATH=.. uv run python -m pytest

test-verbose: ## 執行測試（詳細輸出）
	cd server && PYTHONPATH=.. uv run python -m pytest -v

coverage: ## 執行測試並產生覆蓋率報告
	cd server && PYTHONPATH=.. uv run coverage run -m pytest
	cd server && uv run coverage report -m
	cd server && uv run coverage html
	@echo "HTML 覆蓋率報告：server/htmlcov/index.html"

run: ## 啟動伺服器（開發模式）
	@echo "啟動 HTTP 伺服器..."
	@cd server && PYTHONPATH=.. uv run python -m server.app &
	@echo "啟動 WebSocket 伺服器..."
	@cd server && PYTHONPATH=.. uv run python -m server.ws_app

docker-build: ## 構建 Docker 映像
	docker-compose build

docker-up: ## 啟動 Docker 容器
	docker-compose up -d

docker-down: ## 停止 Docker 容器
	docker-compose down

docker-logs: ## 查看 Docker 日誌
	docker-compose logs -f

docker-restart: ## 重啟 Docker 容器
	docker-compose restart

docker-clean: ## 清理 Docker 資源
	docker-compose down -v
	docker system prune -f

setup-env: ## 設定環境變數檔案
	@if [ ! -f .env ]; then \
		cp env.example .env; \
		echo "已建立 .env 檔案，請編輯並設定 ADMIN_PASSWORD"; \
	else \
		echo ".env 檔案已存在"; \
	fi

clean: ## 清理暫存檔案
	find . -type d -name __pycache__ -exec rm -r {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type d -name "*.egg-info" -exec rm -r {} + 2>/dev/null || true
	find . -type d -name ".pytest_cache" -exec rm -r {} + 2>/dev/null || true

lint: ## 執行程式碼檢查（需要安裝 flake8）
	cd server && uv run flake8 . --exclude=.venv,__pycache__,*.pyc

format: ## 格式化程式碼（需要安裝 black）
	cd server && uv run black . --exclude="/(\.venv|__pycache__)/"

