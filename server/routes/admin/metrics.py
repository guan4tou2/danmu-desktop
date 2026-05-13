"""Admin metrics endpoint for performance monitoring."""

import time

from flask import current_app

from ...services import telemetry, ws_queue, ws_state
from ...services.poll import poll_service
from ...services.security import (
    get_rate_limit_bucket_history,
    get_rate_limit_stats,
    get_rate_limit_suggestion,
    recent_violations,
)
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
            "recent_violations": recent_violations(30),
            **series,
        }
    )
