#!/bin/sh
set -e

PYTHONPATH=${PYTHONPATH:-/app}
export PYTHONPATH

python -m server.app &
python -m server.ws_app
