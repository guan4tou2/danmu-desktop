#!/bin/sh
set -e

cd /app/server
export PYTHONPATH=${PYTHONPATH:-/app}

# HTTP server 和 WS server 在同一個 process 啟動以共享 in-memory ws_queue
python -m server.app
