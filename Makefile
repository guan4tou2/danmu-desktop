.PHONY: help install test test-verbose coverage run \
        docker-build docker-up docker-up-prebuilt docker-up-https docker-up-traefik \
        docker-up-redis docker-down docker-logs docker-restart docker-clean docker-pull \
        gen-certs setup-env clean lint format

help: ## 顯示此幫助訊息
	@echo "可用指令："
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

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

docker-build: ## 建置 Docker image（從 source）
	docker compose build

docker-up: ## 啟動容器（從 source build）
	docker compose up -d --build

docker-up-prebuilt: ## 啟動容器（使用預建 image，需設定 DANMU_IMAGE）
	docker compose up -d --no-build

docker-up-https: ## 啟動容器（HTTPS + WSS，自動產生自簽憑證）
	docker compose -f docker-compose.yml -f docker-compose.https.yml up -d

docker-up-traefik: ## 啟動容器（Traefik + Let's Encrypt，需在 .env 設定 DOMAIN 和 ACME_EMAIL）
	@mkdir -p traefik
	@touch traefik/acme.json && chmod 600 traefik/acme.json
	docker compose -f docker-compose.yml -f docker-compose.traefik.yml up -d

docker-up-redis: ## 啟動容器（HTTP + Redis rate limiter，跨實例共享限流）
	docker compose -f docker-compose.yml -f docker-compose.redis.yml up -d

docker-pull: ## 拉取預建 image（需先在 .env 設定 DANMU_IMAGE）
	docker compose pull server

docker-down: ## 停止容器
	docker compose down

docker-logs: ## 查看 Docker 日誌
	docker compose logs -f

docker-restart: ## 重啟容器
	docker compose restart

docker-clean: ## 清理 Docker 資源（含 volumes）
	docker compose down -v
	docker system prune -f

gen-certs: ## 手動產生自簽 SSL 憑證（docker-up-https 會自動產生，通常不需要）
	@bash scripts/gen-self-signed-cert.sh $(if $(DOMAIN),$(DOMAIN),localhost)

setup-env: ## 建立 .env 檔案
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

lint: ## 執行程式碼檢查
	cd server && uv run flake8 . --exclude=.venv,__pycache__,*.pyc

format: ## 格式化程式碼
	cd server && uv run black . --exclude="/(\.venv|__pycache__)/"
