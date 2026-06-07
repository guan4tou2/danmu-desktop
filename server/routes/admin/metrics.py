"""Admin metrics endpoint for performance monitoring."""

import time
from pathlib import Path

from flask import current_app, request

from ...services import api_tokens, security_settings, telemetry, ws_queue, ws_state
from ...services.plugin_manager import plugin_manager
from ...services.poll import poll_service
from ...services.security import (
    get_rate_limit_bucket_history,
    get_rate_limit_stats,
    get_rate_limit_suggestion,
    recent_violations,
)
from ...services.webhook import webhook_service
from ...services.widgets import list_widgets
from . import _json_response, admin_bp, rate_limit, require_login

# Server start time — set once at module import (i.e. when the Flask app
# first loads this routes package). Reported through /admin/metrics so the
# admin System page can render an "UPTIME · 14d 02h" chip per prototype.
_SERVER_STARTED_AT = time.time()

# Default (limit, window) per scope — keeps the suggestion pre-restart sane
# even if the operator hasn't set the env var explicitly. Mirrors the
# fallback values in services/security.py:rate_limit decorator.
_RATE_DEFAULTS = {
    "fire": ("FIRE_RATE_LIMIT", "FIRE_RATE_WINDOW", 20, 60),
    "api": ("API_RATE_LIMIT", "API_RATE_WINDOW", 30, 60),
    "admin": ("ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW", 60, 60),
    "login": ("LOGIN_RATE_LIMIT", "LOGIN_RATE_WINDOW", 5, 300),
}


def _format_bytes(n: int) -> str:
    units = ("B", "KB", "MB", "GB")
    value = float(max(0, n))
    for unit in units:
        if value < 1024 or unit == units[-1]:
            if unit == "B":
                return f"{int(value)} {unit}"
            return f"{value:.1f} {unit}"
        value /= 1024
    return f"{n} B"


def _directory_bytes(paths) -> int:
    total = 0
    seen = set()
    for raw in paths:
        path = Path(raw)
        try:
            resolved = path.resolve()
        except OSError:
            continue
        if resolved in seen or not resolved.exists():
            continue
        seen.add(resolved)
        if resolved.is_file():
            try:
                total += resolved.stat().st_size
            except OSError:
                pass
            continue
        for fp in resolved.rglob("*"):
            if not fp.is_file():
                continue
            if fp.name.startswith(".") or fp.name.endswith(".tmp"):
                continue
            try:
                total += fp.stat().st_size
            except OSError:
                continue
    return total


def _system_counts() -> dict:
    server_root = Path(current_app.root_path)
    disk_bytes = _directory_bytes(
        [
            server_root / "runtime",
            server_root / "effects",
            current_app.config.get("PLUGINS_DIR", server_root / "plugins"),
            server_root / "user_plugins",
        ]
    )
    try:
        plugins_loaded = len(plugin_manager.list_plugins())
    except Exception:
        plugins_loaded = 0
    try:
        webhooks_count = len(webhook_service.list_hooks())
    except Exception:
        webhooks_count = 0
    try:
        tokens_count = len(api_tokens.list_tokens())
    except Exception:
        tokens_count = 0
    return {
        "disk_usage_bytes": disk_bytes,
        "disk_usage": _format_bytes(disk_bytes),
        "plugins_loaded": plugins_loaded,
        "webhooks_count": webhooks_count,
        "tokens_count": tokens_count,
    }


def _attach_suggestions(rate_stats: dict) -> dict:
    """Decorate each scope entry with a ``suggestion`` field.

    The suggestion is null when the current limit is sized appropriately for
    observed P95 traffic; otherwise contains ``p95_per_second``,
    ``suggested_limit`` and ``suggested_window``. See
    ``security.get_rate_limit_suggestion`` for trigger logic.
    """
    cfg = current_app.config
    for scope, (limit_key, window_key, def_limit, def_window) in _RATE_DEFAULTS.items():
        entry = rate_stats.get(scope)
        if not entry:
            continue
        cur_limit = int(cfg.get(limit_key, def_limit))
        cur_window = int(cfg.get(window_key, def_window))
        entry["limit"] = cur_limit
        entry["window"] = cur_window
        entry["suggestion"] = get_rate_limit_suggestion(scope, cur_limit, cur_window)
        # 24-element hourly history of allowed-request counts for the
        # admin Rate Limits sparkline. Always 24 entries (zero-padded if
        # the server hasn't been up 24h yet).
        entry["bucket_history"] = get_rate_limit_bucket_history(scope, 60)
    return rate_stats


@admin_bp.route("/metrics", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_metrics():
    state = ws_state.read_state()
    queue_len = len(ws_queue._queue)
    series = telemetry.get_series()
    system_counts = _system_counts()

    # 2026-05-19 (PR review): expose live rate-limit *config* alongside
    # the counter snapshot so the viewer Limits tab + the ratelimit page
    # can show actual server-resolved values instead of hardcoded
    # defaults. Reads via current_app.config so ratelimit/apply edits
    # are reflected immediately (no restart needed).
    from flask import current_app

    rl_config = {
        scope: {
            "limit": int(current_app.config.get(f"{scope.upper()}_RATE_LIMIT", 0) or 0),
            "window": int(current_app.config.get(f"{scope.upper()}_RATE_WINDOW", 0) or 0),
        }
        for scope in ("fire", "api", "admin", "login")
    }

    return _json_response(
        {
            "ws_clients": state.get("ws_clients", 0),
            "ws_updated_at": state.get("updated_at", 0),
            "queue_size": queue_len,
            "queue_capacity": ws_queue._MAX_QUEUE_SIZE,
            "active_widgets": len(list_widgets()),
            "poll_state": poll_service.state,
            "server_time": time.time(),
            "server_started_at": _SERVER_STARTED_AT,
            "rate_limits": _attach_suggestions(get_rate_limit_stats()),
            "rate_limit_config": rl_config,
            "recent_violations": recent_violations(30),
            "security": security_settings.summary(current_app.config, request),
            **system_counts,
            **series,
        }
    )
