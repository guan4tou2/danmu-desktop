#!/bin/sh
set -e

cd /app/server
export PYTHONPATH=${PYTHONPATH:-/app}

python -m server.app &
python -m server.ws_app
