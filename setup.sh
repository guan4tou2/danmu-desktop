#!/usr/bin/env bash
# setup.sh — Danmu Fire deployment wizard and .env validator
set -euo pipefail

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

_error()   { echo -e "${RED}[ERROR]${NC} $*" >&2; }
_warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
_info()    { echo -e "${CYAN}[INFO]${NC}  $*"; }
_ok()      { echo -e "${GREEN}[ OK ]${NC}  $*"; }

_WEAK_PASSWORDS="changeme password admin 123456"

_check_weak_password() {
  local val="$1"
  for weak in $_WEAK_PASSWORDS; do
    if [ "$val" = "$weak" ]; then return 0; fi
  done
  return 1
}

# ── Validation (used by both init and check) ─────────────────────────────────

_validate_env() {
  local env_file="${1:-.env}"
  local errors=0
  local warnings=0

  [ -f "$env_file" ] || { _error ".env file not found at $env_file"; exit 1; }

  # shellcheck disable=SC1090
  source "$env_file" 2>/dev/null || true

  # ADMIN_PASSWORD check
  if [ -z "${ADMIN_PASSWORD:-}" ] && [ -z "${ADMIN_PASSWORD_HASHED:-}" ]; then
    _error "ADMIN_PASSWORD or ADMIN_PASSWORD_HASHED must be set"
    errors=$((errors+1))
  elif [ -n "${ADMIN_PASSWORD:-}" ] && _check_weak_password "${ADMIN_PASSWORD}"; then
    _error "ADMIN_PASSWORD is a weak default ('${ADMIN_PASSWORD}'). Set a strong password."
    errors=$((errors+1))
  fi

  # SECRET_KEY in production
  local env_val="${ENV:-production}"
  if [ "$env_val" = "production" ] && [ -z "${SECRET_KEY:-}" ]; then
    _error "SECRET_KEY must be set when ENV=production"
    _info "  fix: ./setup.sh gen-secret  (generates and writes SECRET_KEY into .env)"
    _info "  or:  ./setup.sh init        (full interactive wizard)"
    errors=$((errors+1))
  fi

  # SESSION_COOKIE_SECURE in production
  if [ "$env_val" = "production" ] && [ "${SESSION_COOKIE_SECURE:-true}" = "false" ]; then
    _error "SESSION_COOKIE_SECURE must not be false in production"
    errors=$((errors+1))
  fi

  # CORS wildcard + credentials
  if [ "${CORS_SUPPORTS_CREDENTIALS:-false}" = "true" ] && [ "${CORS_ORIGINS:-*}" = "*" ]; then
    _error "Cannot combine CORS_SUPPORTS_CREDENTIALS=true with CORS_ORIGINS=*"
    errors=$((errors+1))
  fi

  # WS_REQUIRE_TOKEN disabled but token set (likely misconfiguration)
  if [ "${WS_REQUIRE_TOKEN:-false}" = "false" ] && [ -n "${WS_AUTH_TOKEN:-}" ]; then
    _warn "WS_AUTH_TOKEN is set but WS_REQUIRE_TOKEN=false — token will not be enforced"
    warnings=$((warnings+1))
  fi

  # Traefik profile: check DOMAIN
  if [ "${_PROFILE:-}" = "traefik" ] && [ -z "${DOMAIN:-}" ]; then
    _error "DOMAIN must be set when using the traefik profile"
    errors=$((errors+1))
  fi

  if [ $errors -gt 0 ]; then
    echo ""
    _error "$errors error(s) found. Fix them before starting."
    exit 1
  elif [ $warnings -gt 0 ]; then
    echo ""
    _warn "$warnings warning(s). Review before deploying to production."
  else
    _ok "Configuration looks good."
  fi
}

# ── Interactive init ──────────────────────────────────────────────────────────

_init() {
  local advanced=false
  if [ "${1:-}" = "--advanced" ]; then
    advanced=true
  fi

  echo ""
  echo -e "${CYAN}=== Danmu Fire Setup ===${NC}"
  if [ "$advanced" = "true" ]; then
    _info "Advanced mode: will also prompt for rate limits, logging and resource caps."
  fi
  echo ""

  # Mode selection
  echo "Select deployment mode:"
  echo "  1) Local HTTP (dev/testing, no HTTPS)"
  echo "  2) HTTPS with self-signed certificate (LAN / VPS, no domain required)"
  echo "  3) Traefik + Let's Encrypt (requires public domain)"
  echo ""
  read -rp "Mode [1/2/3]: " mode
  case "$mode" in
    1) _PROFILE="http" ;;
    2) _PROFILE="https" ;;
    3) _PROFILE="traefik" ;;
    *) _error "Invalid choice"; exit 1 ;;
  esac

  # Redis
  read -rp "Add Redis rate limiting? [y/N]: " use_redis
  local redis_profile=""
  if [ "${use_redis,,}" = "y" ]; then
    redis_profile=" --profile redis"
    _REDIS=true
  fi

  # Desktop client (exposes WS port 4001; token auth is optional).
  # Default Y because running this server without the overlay WS port is
  # rare — almost everyone wants the Electron overlay to connect.
  local _desktop=false _ws_token_required=false ws_token=""
  read -rp "Expose WebSocket port 4001 for Danmu Desktop client? [Y/n]: " use_desktop
  if [ "${use_desktop,,}" != "n" ]; then
    _desktop=true
    echo ""
    _info "Token auth protects port 4001 from anyone on the network connecting."
    _info "Default N assumes LAN-only / firewall-protected. Enable if the VPS"
    _info "exposes 4001 to the public internet without a firewall rule."
    read -rp "Require a shared token for the WS port? [y/N]: " use_token
    if [ "${use_token,,}" = "y" ]; then
      _ws_token_required=true
      ws_token=$(python3 -c 'import secrets; print(secrets.token_hex(32))' 2>/dev/null || openssl rand -hex 32)
    fi
  fi

  # Admin password
  echo ""
  while true; do
    read -rsp "Set ADMIN_PASSWORD: " admin_pass
    echo ""
    if [ -z "$admin_pass" ]; then
      _error "Password cannot be empty"; continue
    fi
    if _check_weak_password "$admin_pass"; then
      _error "Password is too weak. Choose something stronger."; continue
    fi
    break
  done

  # Traefik extras
  local domain="" acme_email=""
  if [ "$_PROFILE" = "traefik" ]; then
    read -rp "Domain (e.g. danmu.example.com): " domain
    [ -z "$domain" ] && { _error "Domain is required for traefik mode"; exit 1; }
    read -rp "ACME email (for Let's Encrypt): " acme_email
    [ -z "$acme_email" ] && { _error "ACME_EMAIL is required for traefik mode"; exit 1; }
  fi

  # HTTPS extras
  local server_ip="" server_domain=""
  if [ "$_PROFILE" = "https" ]; then
    read -rp "Public IP (optional, for SAN — leave blank for localhost only): " server_ip
    read -rp "Domain (optional, for SAN — leave blank for localhost only): " server_domain
  fi

  # Port selection for https/traefik (auto-detect conflicts on 80/443)
  local http_port="80" https_port="443"

  # Probe whether a port is already listening. Tries `ss` (Linux) then
  # `lsof` (macOS default) then `netstat`. Returns 0 if in use, 1 if free,
  # 2 if no probe tool is available (caller should treat as "unknown").
  _port_in_use() {
    local n="$1"
    if command -v ss >/dev/null 2>&1; then
      ss -ltn 2>/dev/null | awk '{print $4}' | grep -Eq ":$n$" && return 0 || return 1
    fi
    if command -v lsof >/dev/null 2>&1; then
      lsof -iTCP:"$n" -sTCP:LISTEN -P -n 2>/dev/null | grep -q LISTEN && return 0 || return 1
    fi
    if command -v netstat >/dev/null 2>&1; then
      netstat -an 2>/dev/null | grep -Eq "[.:]$n[[:space:]]+.*LISTEN" && return 0 || return 1
    fi
    return 2
  }

  # One-time warning when no port probe tool is available. Caller loops
  # multiple times; we only want to warn once.
  local _probe_warned=""
  _warn_if_no_probe() {
    if [ -n "$_probe_warned" ]; then return 0; fi
    if ! command -v ss >/dev/null 2>&1 && \
       ! command -v lsof >/dev/null 2>&1 && \
       ! command -v netstat >/dev/null 2>&1; then
      _warn "No ss/lsof/netstat found — port-in-use detection disabled."
      _warn "Ports will only be checked for format/range; conflicts at docker compose up may still occur."
      _probe_warned=1
    fi
  }

  # Validate a single port value: numeric, 1-65535, and optionally ensure
  # it's not already in use. Returns 0 if OK, 1 if format/range invalid,
  # 2 if the port is occupied (caller can decide whether to override).
  # Forces decimal interpretation via $((10#$p)) so inputs like "080" are
  # 80, not an octal-parse crash under `set -e`.
  _valid_port() {
    local p="$1" label="$2" check_in_use="${3:-true}"
    case "$p" in
      ''|*[!0-9]*) _error "$label is not a number: '$p'"; return 1 ;;
    esac
    local n
    n=$((10#$p))
    if [ "$n" -lt 1 ] || [ "$n" -gt 65535 ]; then
      _error "$label out of range 1-65535: '$p'"; return 1
    fi
    if [ "$check_in_use" = "true" ]; then
      _warn_if_no_probe
      # `_port_in_use` returns 1 for a FREE port. Under `set -e` that would
      # kill the script before the `case $?` below could run, even though
      # free-is-good is the happy path. Capture via `|| rc=$?` so the call
      # never trips set -e — that's the idiom for getting a return code
      # from a failing command without aborting.
      local _piu=0
      _port_in_use "$n" || _piu=$?
      case "$_piu" in
        0) _warn "$label $n is already in use on this host."; return 2 ;;
        1|2) : ;;  # free or unknown — accept
      esac
    fi
    return 0
  }

  if [ "$_PROFILE" = "https" ] || [ "$_PROFILE" = "traefik" ]; then
    local conflict=""
    if ss -ltn 2>/dev/null | awk '{print $4}' | grep -Eq ':80$';  then conflict="${conflict}80 "; fi
    if ss -ltn 2>/dev/null | awk '{print $4}' | grep -Eq ':443$'; then conflict="${conflict}443 "; fi
    if [ -n "$conflict" ]; then
      _warn "Port(s) already in use: ${conflict}— defaulting to 4080/4000."
      http_port="4080"
      https_port="4000"
    fi
    if [ "$_PROFILE" = "https" ]; then
      # Loop until user gives valid, non-colliding ports. Keeps last-known-
      # good defaults intact on retry; validates into temp vars so a bad typo
      # doesn't poison the "press Enter to accept" default next round. If
      # HTTPS fails, HTTP isn't re-asked.
      #
      # Port-in-use is a SOFT failure: offer an override for cases where the
      # operator knows they're replacing an existing listener (e.g. old
      # danmu container still running on that port).
      _accept_occupied_port() {
        local label="$1" n="$2" ans
        read -rp "  Use $label $n anyway (you'll replace whatever's listening)? [y/N]: " ans
        [ "${ans,,}" = "y" ]
      }
      while true; do
        local _hp_in _sp_in _hp_val _sp_val _rc
        read -rp "HTTP port [${http_port}]: " _hp_in
        _hp_val="${_hp_in:-$http_port}"
        # `set -e` fires on any non-zero return from a plain call, so capture
        # the return code via `|| _rc=$?` — that idiom is one of the few ways
        # to get rc from a failing command without tripping set -e.
        _rc=0
        _valid_port "$_hp_val" "HTTP port" true || _rc=$?
        case "$_rc" in
          0) : ;;                                          # free — good
          1) continue ;;                                   # format/range bad
          2) _accept_occupied_port "HTTP port" "$_hp_val" || continue ;;
        esac

        read -rp "HTTPS port [${https_port}]: " _sp_in
        _sp_val="${_sp_in:-$https_port}"
        _rc=0
        _valid_port "$_sp_val" "HTTPS port" true || _rc=$?
        case "$_rc" in
          0) : ;;
          1) continue ;;
          2) _accept_occupied_port "HTTPS port" "$_sp_val" || continue ;;
        esac

        if [ "$_hp_val" = "$_sp_val" ]; then
          _error "HTTP and HTTPS ports cannot be the same ($_hp_val). Pick different ports."
          continue
        fi
        http_port="$_hp_val"
        https_port="$_sp_val"
        break
      done
    fi
  fi

  # ── Advanced prompts (only with --advanced) ────────────────────────────────
  # Empty answer = leave .env.example default untouched.
  local adv_fire_limit="" adv_fire_window=""
  local adv_admin_limit="" adv_admin_window=""
  local adv_api_limit=""   adv_api_window=""
  local adv_login_limit="" adv_login_window=""
  local adv_log_level=""   adv_log_format=""
  local adv_mem_limit=""   adv_cpu_limit=""
  local adv_ws_max_conn="" adv_ws_max_per_ip=""
  local adv_redis_password=""
  if [ "$advanced" = "true" ]; then
    echo ""
    echo -e "${CYAN}── Advanced settings (press Enter to keep .env.example default) ──${NC}"

    echo ""
    _info "Rate limits"
    read -rp "  FIRE_RATE_LIMIT [20]: "  adv_fire_limit
    read -rp "  FIRE_RATE_WINDOW seconds [60]: " adv_fire_window
    read -rp "  ADMIN_RATE_LIMIT [60]: " adv_admin_limit
    read -rp "  ADMIN_RATE_WINDOW seconds [60]: " adv_admin_window
    read -rp "  API_RATE_LIMIT [30]: "   adv_api_limit
    read -rp "  API_RATE_WINDOW seconds [60]: "  adv_api_window
    read -rp "  LOGIN_RATE_LIMIT (failed attempts) [5]: " adv_login_limit
    read -rp "  LOGIN_RATE_WINDOW seconds [300]: "        adv_login_window

    echo ""
    _info "WebSocket connection caps"
    read -rp "  WS_MAX_CONNECTIONS [200]: "         adv_ws_max_conn
    read -rp "  WS_MAX_CONNECTIONS_PER_IP [10]: "   adv_ws_max_per_ip

    echo ""
    _info "Logging"
    read -rp "  LOG_LEVEL (DEBUG/INFO/WARNING/ERROR) [INFO]: " adv_log_level
    read -rp "  LOG_FORMAT (text/json) [text]: "                adv_log_format

    echo ""
    _info "Container resource limits"
    read -rp "  SERVER_MEMORY_LIMIT (e.g. 512m, 1g) [512m]: " adv_mem_limit
    read -rp "  SERVER_CPU_LIMIT (e.g. 0.5, 1.0, 2) [1.0]: "  adv_cpu_limit

    if [ "${_REDIS:-}" = "true" ]; then
      echo ""
      _info "Redis"
      read -rp "  REDIS_PASSWORD [auto-generate]: " adv_redis_password
      if [ -z "$adv_redis_password" ]; then
        adv_redis_password=$(python3 -c 'import secrets; print(secrets.token_urlsafe(24))' 2>/dev/null || openssl rand -base64 24 | tr -d "=+/")
      fi
    fi
  fi

  # Write .env
  local env_file=".env"
  if [ -f "$env_file" ]; then
    read -rp ".env already exists. Overwrite? [y/N]: " overwrite
    [ "${overwrite,,}" != "y" ] && { _info "Cancelled. Existing .env unchanged."; exit 0; }
  fi

  [ -f ".env.example" ] || { _error ".env.example not found — run from project root."; exit 1; }

  local _secret_key
  _secret_key=$(python3 -c 'import secrets; print(secrets.token_hex(32))' 2>/dev/null || openssl rand -hex 32)

  # Start from .env.example as the source-of-truth template, then patch values.
  # _set_env KEY VALUE → uncomment "# KEY=..." or replace "KEY=..." in place;
  #                      appends under "# === Overrides ===" if key is absent.
  _set_env() {
    local key="$1" value="$2" file="$env_file"
    # Escape sed replacement special chars in value
    local esc
    esc=$(printf '%s' "$value" | sed -e 's/[\/&|]/\\&/g')
    if grep -Eq "^[[:space:]]*#?[[:space:]]*${key}=" "$file"; then
      # Replace all matching lines (keys are unique in a valid .env).
      # Portable across BSD/GNU sed: -i.bak + explicit delete of backup.
      sed -i.bak -E "s|^[[:space:]]*#?[[:space:]]*${key}=.*|${key}=${esc}|" "$file" && rm -f "${file}.bak"
    else
      printf '%s=%s\n' "$key" "$value" >> "$file"
    fi
  }

  cp .env.example "$env_file"
  {
    echo ""
    echo "# === Generated by setup.sh — $(date) ==="
  } >> "$env_file"

  # Required
  _set_env ADMIN_PASSWORD "$admin_pass"
  _set_env SECRET_KEY     "$_secret_key"

  # Networking
  _set_env ENV      "production"
  _set_env PORT     "4000"
  _set_env WS_PORT  "4001"
  if [ "$_PROFILE" = "https" ] || [ "$_PROFILE" = "traefik" ]; then
    _set_env HTTP_PORT  "$http_port"
    _set_env HTTPS_PORT "$https_port"
  fi
  [ -n "$domain" ]        && _set_env DOMAIN        "$domain"
  [ -n "$acme_email" ]    && _set_env ACME_EMAIL    "$acme_email"
  [ -n "$server_ip" ]     && _set_env SERVER_IP     "$server_ip"
  [ -n "$server_domain" ] && _set_env SERVER_DOMAIN "$server_domain"

  # Security
  _set_env SESSION_COOKIE_SECURE "true"
  local _trusted="localhost,127.0.0.1${domain:+,$domain}${server_ip:+,$server_ip}${server_domain:+,$server_domain}"
  _set_env TRUSTED_HOSTS "$_trusted"
  if [ "$_PROFILE" = "http" ]; then
    _set_env TRUST_X_FORWARDED_FOR "false"
  else
    _set_env TRUST_X_FORWARDED_FOR "true"
  fi

  # Rate limiting backend
  if [ "${_REDIS:-}" = "true" ]; then
    local _redis_pw="${adv_redis_password:-changeme}"
    _set_env RATE_LIMIT_BACKEND "redis"
    _set_env REDIS_PASSWORD     "$_redis_pw"
    _set_env REDIS_URL          "redis://:${_redis_pw}@redis:6379/0"
  else
    _set_env RATE_LIMIT_BACKEND "memory"
  fi

  # Desktop client: optionally enable WS token auth
  if [ "$_desktop" = "true" ] && [ "$_ws_token_required" = "true" ]; then
    _set_env WS_REQUIRE_TOKEN "true"
    _set_env WS_AUTH_TOKEN    "$ws_token"
  fi

  # Advanced overrides — only written if non-empty
  [ -n "$adv_fire_limit"     ] && _set_env FIRE_RATE_LIMIT          "$adv_fire_limit"
  [ -n "$adv_fire_window"    ] && _set_env FIRE_RATE_WINDOW         "$adv_fire_window"
  [ -n "$adv_admin_limit"    ] && _set_env ADMIN_RATE_LIMIT         "$adv_admin_limit"
  [ -n "$adv_admin_window"   ] && _set_env ADMIN_RATE_WINDOW        "$adv_admin_window"
  [ -n "$adv_api_limit"      ] && _set_env API_RATE_LIMIT           "$adv_api_limit"
  [ -n "$adv_api_window"     ] && _set_env API_RATE_WINDOW          "$adv_api_window"
  [ -n "$adv_login_limit"    ] && _set_env LOGIN_RATE_LIMIT         "$adv_login_limit"
  [ -n "$adv_login_window"   ] && _set_env LOGIN_RATE_WINDOW        "$adv_login_window"
  [ -n "$adv_ws_max_conn"    ] && _set_env WS_MAX_CONNECTIONS       "$adv_ws_max_conn"
  [ -n "$adv_ws_max_per_ip"  ] && _set_env WS_MAX_CONNECTIONS_PER_IP "$adv_ws_max_per_ip"
  [ -n "$adv_log_level"      ] && _set_env LOG_LEVEL                "$adv_log_level"
  [ -n "$adv_log_format"     ] && _set_env LOG_FORMAT               "$adv_log_format"
  [ -n "$adv_mem_limit"      ] && _set_env SERVER_MEMORY_LIMIT      "$adv_mem_limit"
  [ -n "$adv_cpu_limit"      ] && _set_env SERVER_CPU_LIMIT         "$adv_cpu_limit"

  echo ""
  _ok ".env written."

  # Traefik acme.json
  if [ "$_PROFILE" = "traefik" ]; then
    mkdir -p traefik
    touch traefik/acme.json && chmod 600 traefik/acme.json
    _ok "traefik/acme.json created."
  fi

  echo ""
  _info "To start Danmu Fire, run:"
  echo ""
  local _compose_files=""
  if [ "$_desktop" = "true" ]; then
    _compose_files=" -f docker-compose.yml -f docker-compose.desktop.yml"
  fi
  echo "    docker compose${_compose_files} --profile ${_PROFILE}${redis_profile} up -d"
  echo ""

  # Access URL hint
  local _url_host="${server_ip:-${domain:-localhost}}"
  case "$_PROFILE" in
    http)
      _info "Then open: http://${_url_host}:${PORT:-4000}"
      ;;
    https)
      if [ "$https_port" = "443" ]; then
        _info "Then open: https://${_url_host}"
      else
        _info "Then open: https://${_url_host}:${https_port}"
      fi
      _warn "Self-signed cert — browser will show a warning on first visit."
      ;;
    traefik)
      _info "Then open: https://${domain}"
      ;;
  esac

  if [ "$_desktop" = "true" ]; then
    echo ""
    _info "Desktop client (ws + https dual transport):"
    echo "    Host:  ${_url_host}"
    echo "    Port:  4001"
    if [ "$_ws_token_required" = "true" ]; then
      echo "    Token: ${ws_token}"
    else
      _warn "Token auth disabled — anyone who can reach port 4001 can connect."
    fi
    echo ""
    _info "Open firewall for the WS port:  sudo ufw allow 4001/tcp"
  fi

  echo ""
  _warn "Change REDIS_PASSWORD in .env before production use."
}

# ── Entry point ───────────────────────────────────────────────────────────────

_gen_secret() {
  local env_file="${1:-.env}"
  if [ ! -f "$env_file" ]; then
    _error "$env_file not found. Run './setup.sh init' first or 'cp .env.example $env_file'."
    exit 1
  fi

  local key
  key=$(python3 -c 'import secrets; print(secrets.token_hex(32))' 2>/dev/null || openssl rand -hex 32)
  if [ -z "$key" ]; then
    _error "Neither python3 nor openssl available — cannot generate SECRET_KEY."
    exit 1
  fi

  if grep -Eq "^[[:space:]]*#?[[:space:]]*SECRET_KEY=" "$env_file"; then
    local esc
    esc=$(printf '%s' "$key" | sed -e 's/[\/&|]/\\&/g')
    sed -i.bak -E "s|^[[:space:]]*#?[[:space:]]*SECRET_KEY=.*|SECRET_KEY=${esc}|" "$env_file" && rm -f "${env_file}.bak"
  else
    printf 'SECRET_KEY=%s\n' "$key" >> "$env_file"
  fi

  _ok "Wrote SECRET_KEY into $env_file (${#key}-char hex, $((${#key} * 4)) bits)."
  _info "Sessions and signed tokens now have a stable key across restarts."
}

case "${1:-}" in
  init)       _init "${2:-}" ;;
  check)      _PROFILE="${2:-}" _validate_env "${3:-.env}" ;;
  gen-secret) _gen_secret "${2:-.env}" ;;
  *)
    echo "Usage:"
    echo "  ./setup.sh init              Interactive wizard → writes .env"
    echo "  ./setup.sh init --advanced   Wizard + rate limit / log / resource prompts"
    echo "  ./setup.sh check [profile]   Validate existing .env"
    echo "  ./setup.sh gen-secret [file] Generate & write SECRET_KEY into .env"
    exit 1
    ;;
esac
