#!/usr/bin/env bash
# scripts/deploy-vps.sh — VPS deployment wrapper for Oracle VPS host.
#
# Why this script exists: `git pull && docker compose restart server` only
# works for bind-mounted assets (server/static, server/runtime, etc.).
# Python code changes (routes/, services/, templates/) are baked into the
# image — must rebuild + recreate the container, not just restart.
#
# Required env (export or set in your shell):
#   DANMU_VPS_HOST     — SSH user@host or SSH config alias (e.g. oracle-e2)
#   DANMU_VPS_KEY      — SSH key path (optional if using SSH config alias)
#   DANMU_VPS_PROJECT  — repo path on the VPS (default: ~/danmu-desktop)
#
# Optional flags:
#   --branch <name>    — branch to pull (default: current local branch)
#   --no-build         — skip image rebuild (assets-only update; faster)
#   --no-restart       — pull only, don't touch the container
#   --verify           — run healthcheck after deploy (auto-detects HTTP/HTTPS)
#   --dry-run          — print the SSH command instead of running it
#
# Usage examples:
#   ./scripts/deploy-vps.sh
#   ./scripts/deploy-vps.sh --branch main
#   ./scripts/deploy-vps.sh --no-build      # static/runtime changes only
#   ./scripts/deploy-vps.sh --verify        # deploy + auto healthcheck
#   ./scripts/deploy-vps.sh --dry-run
#
# Preset shortcuts (export in your shell profile):
#   # Oracle VPS (original, nginx self-signed HTTPS profile)
#   export DANMU_VPS_HOST=ubuntu@138.2.59.206 DANMU_VPS_KEY=~/.ssh/orcale
#
#   # Oracle E2 (Caddy reverse proxy, server-only HTTP)
#   export DANMU_VPS_HOST=oracle-e2

set -euo pipefail

# ── Defaults ─────────────────────────────────────────────────────────────────
HOST="${DANMU_VPS_HOST:-}"
KEY="${DANMU_VPS_KEY:-}"
PROJECT="${DANMU_VPS_PROJECT:-~/danmu-desktop}"
BRANCH=""
DO_BUILD=1
DO_RESTART=1
DO_VERIFY=0
DRY_RUN=0

# ── Argument parsing ────────────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)     BRANCH="$2"; shift 2 ;;
    --no-build)   DO_BUILD=0;  shift   ;;
    --no-restart) DO_RESTART=0; shift  ;;
    --verify)     DO_VERIFY=1; shift   ;;
    --dry-run)    DRY_RUN=1;   shift   ;;
    -h|--help)
      sed -n '2,35p' "$0" | sed 's/^# \{0,1\}//'
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
  echo "ERROR: DANMU_VPS_HOST not set (e.g. export DANMU_VPS_HOST=oracle-e2)" >&2
  exit 1
fi

# Build the remote command pipeline.
remote_cmd="cd ${PROJECT}"

# Warn if .env has local changes not tracked by git
remote_cmd="${remote_cmd} && if git diff --name-only HEAD 2>/dev/null | grep -q '^\.env$'; then echo '[WARN] .env has uncommitted changes — verify env vars are correct'; fi"

remote_cmd="${remote_cmd} && git pull origin ${BRANCH}"
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
echo "✓ Deploy finished."

# ── Verify (optional) ───────────────────────────────────────────────────────
if [[ "$DO_VERIFY" -eq 1 ]]; then
  echo "→ Running healthcheck..."
  # Auto-detect: try HTTP first (server-only / external reverse proxy),
  # fall back to HTTPS (nginx sidecar profile), optional public URL, then
  # Docker's container health for server-only deployments behind an external
  # proxy such as Caddy.
  public_health_url="${DANMU_PUBLIC_URL:-}"
  if [[ -n "$public_health_url" ]]; then
    public_health_url="${public_health_url%/}/health"
  fi
  remote_health_cmd="cd ${PROJECT} && for attempt in 1 2 3 4 5 6 7 8 9 10 11 12; do if curl -sf http://127.0.0.1:4000/health 2>/dev/null; then exit 0; fi; if curl -skf https://127.0.0.1:4000/health 2>/dev/null; then exit 0; fi"
  if [[ -n "$public_health_url" ]]; then
    remote_health_cmd="${remote_health_cmd}; if curl -skf $(printf "%q" "$public_health_url") 2>/dev/null; then exit 0; fi"
  fi
  remote_health_cmd="${remote_health_cmd}; if [ \"\$(docker inspect --format '{{.State.Health.Status}}' danmu-fire 2>/dev/null)\" = healthy ]; then echo '{\"service\":\"danmu-server\",\"status\":\"healthy\",\"source\":\"docker\"}'; exit 0; fi; sleep 5; done; echo FAIL"

  verify_cmd=(ssh)
  if [[ -n "$KEY" ]]; then
    verify_cmd+=(-i "$KEY")
  fi
  verify_cmd+=("$HOST" "$remote_health_cmd")
  HEALTH=$("${verify_cmd[@]}")
  if [[ "$HEALTH" == "FAIL" ]]; then
    echo "✗ Healthcheck failed — server may still be starting. Check with:"
    echo "  ssh${KEY:+ -i ${KEY}} ${HOST} 'docker compose -f ${PROJECT}/docker-compose.yml logs --tail 20 server'"
    exit 1
  else
    echo "✓ Healthcheck passed: ${HEALTH:0:120}"
  fi
else
  echo "  Verify manually:"
  echo "  ssh${KEY:+ -i ${KEY}} ${HOST} 'curl -sf http://127.0.0.1:4000/health || curl -skf https://127.0.0.1:4000/health'"
fi
