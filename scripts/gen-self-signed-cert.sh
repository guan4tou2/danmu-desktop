#!/usr/bin/env bash
# 產生自簽 SSL 憑證，供本機 HTTPS 測試使用
# 憑證放在 nginx/certs/fullchain.pem 和 nginx/certs/privkey.pem
set -euo pipefail

CERTS_DIR="$(cd "$(dirname "$0")/.." && pwd)/nginx/certs"
DOMAIN="${1:-localhost}"
DAYS="${2:-365}"

if ! command -v openssl &>/dev/null; then
  echo "錯誤：找不到 openssl，請先安裝。" >&2
  exit 1
fi

mkdir -p "$CERTS_DIR"

echo "產生自簽憑證..."
echo "  網域：$DOMAIN"
echo "  有效期：${DAYS} 天"
echo "  輸出：$CERTS_DIR"

SAN_CNF=$(mktemp /tmp/san.XXXXXX.cnf)
trap 'rm -f "$SAN_CNF"' EXIT

printf '[req]\ndistinguished_name=req\n[SAN]\nsubjectAltName=DNS:%s,DNS:localhost,IP:127.0.0.1\n' \
  "${DOMAIN}" > "$SAN_CNF"
openssl req -x509 -nodes -newkey rsa:2048 \
  -keyout "$CERTS_DIR/privkey.pem" \
  -out "$CERTS_DIR/fullchain.pem" \
  -days "$DAYS" \
  -subj "/CN=${DOMAIN}" \
  -extensions SAN \
  -config "$SAN_CNF"

echo ""
echo "完成！憑證已產生："
echo "  憑證：$CERTS_DIR/fullchain.pem"
echo "  私鑰：$CERTS_DIR/privkey.pem"
echo ""
echo "啟動 HTTPS："
echo "  docker compose --profile https up -d"
echo ""
echo "注意：瀏覽器會顯示安全警告（自簽憑證），測試時手動信任即可。"
