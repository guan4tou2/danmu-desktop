#!/usr/bin/env bash
# scripts/deploy-vps.sh — VPS deployment wrapper for Oracle VPS host.
#
# Why this script exists: `git pull && docker compose restart server` only
# works for bind-mounted assets (server/static, server/runtime, etc.).
# Python code changes (routes/, services/, templates/) are baked into the
# image — must rebuild + recreate the container, not just restart.
#
# Required env (export or set in your shell):
#   DANMU_VPS_HOST     — SSH user@host (e.g. ubuntu@<your-vps-ip>)
#   DANMU_VPS_KEY      — SSH key path  (e.g. ~/.ssh/orcale)
#   DANMU_VPS_PROJECT  — repo path on the VPS (default: ~/danmu-desktop)
#
# Optional flags:
#   --branch <name>    — branch to pull (default: current local branch)
#   --no-build         — skip image rebuild (assets-only update; faster)
#   --no-restart       — pull only, don't touch the container
#   --dry-run          — print the SSH command instead of running it
#
# Usage examples:
#   ./scripts/deploy-vps.sh
#   ./scripts/deploy-vps.sh --branch main
#   ./scripts/deploy-vps.sh --no-build      # static/runtime changes only
#   ./scripts/deploy-vps.sh --dry-run

set -euo pipefail

# ── Defaults ─────────────────────────────────────────────────────────────────
HOST="${DANMU_VPS_HOST:-}"
KEY="${DANMU_VPS_KEY:-}"
PROJECT="${DANMU_VPS_PROJECT:-~/danmu-desktop}"
BRANCH=""
DO_BUILD=1
DO_RESTART=1
DRY_RUN=0

# ── Argument parsing ────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)     BRANCH="$2"; shift 2 ;;
    --no-build)   DO_BUILD=0;  shift   ;;
    --no-restart) DO_RESTART=0; shift  ;;
    --dry-run)    DRY_RUN=1;   shift   ;;
    -h|--help)
      sed -n '2,28p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "Unknown flag: $1" >&2
      echo "Run with --help for usage." >&2
      exit 2
      ;;
  esac
done

# ── Resolve branch (defaults to current local branch) ────────────────────────
if [[ -z "$BRANCH" ]]; then
  BRANCH="$(git branch --show-current 2>/dev/null || echo main)"
fi

# ── Validate env ─────────────────────────────────────────────────────────────
if [[ -z "$HOST" ]]; then
  echo "ERROR: DANMU_VPS_HOST not set (e.g. export DANMU_VPS_HOST=ubuntu@<your-vps-ip>)" >&2
  exit 1
fi

# Build the remote command pipeline.
remote_cmd="cd ${PROJECT} && git pull origin ${BRANCH}"
if [[ "$DO_BUILD" -eq 1 ]]; then
  remote_cmd="${remote_cmd} && docker compose build server"
fi
if [[ "$DO_RESTART" -eq 1 ]]; then
  if [[ "$DO_BUILD" -eq 1 ]]; then
    # `up -d` recreates from new image (NOT `restart`, which reuses existing container).
    remote_cmd="${remote_cmd} && docker compose up -d server"
  else
    remote_cmd="${remote_cmd} && docker compose restart server"
  fi
fi
remote_cmd="${remote_cmd} && docker compose ps server"

# Build the SSH invocation.
ssh_args=()
if [[ -n "$KEY" ]]; then
  ssh_args+=(-i "$KEY")
fi
ssh_args+=("$HOST" "$remote_cmd")

# ── Print or execute ─────────────────────────────────────────────────────────
echo "→ Deploying ${BRANCH} to ${HOST}:${PROJECT}"
echo "  build=${DO_BUILD} restart=${DO_RESTART}"
if [[ "$DRY_RUN" -eq 1 ]]; then
  printf "  ssh"
  printf " %q" "${ssh_args[@]}"
  printf "\n"
  exit 0
fi

ssh "${ssh_args[@]}"

echo
echo "✓ Deploy finished. Verify with:"
echo "  ssh${KEY:+ -i ${KEY}} ${HOST} 'curl -sk https://127.0.0.1:4000/health | head -c 200'"
