"""Admin route to live-apply rate-limit changes (v5.0.0+).

POST /admin/ratelimit/apply accepts a JSON body of:

    { "scope": "fire" | "api" | "admin" | "login",
      "limit": int (1..1000),
      "window": int (one of 10, 30, 60, 300, 3600) }

and writes the new values directly into ``current_app.config`` under the
keys ``{SCOPE}_RATE_LIMIT`` / ``{SCOPE}_RATE_WINDOW``. The ``rate_limit``
decorator reads those keys per-request via ``current_app.config.get(...)``,
so the change takes effect for the very next request — no restart needed.

Persistence note: changes are in-memory only. On the next server restart
the values revert to whatever the env vars (FIRE_RATE_LIMIT etc.) provide.
The matching ``匯出 .env 片段`` button in the Rate Limits admin page is
still the way to make a change survive a restart.
"""

from flask import current_app, request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string

_VALID_SCOPES = ("fire", "api", "admin", "login")
_VALID_WINDOWS = (10, 30, 60, 300, 3600)
_LIMIT_MIN = 1
_LIMIT_MAX = 1000


def _validate(payload):
    """Return (validated_dict, error_message) — error_message is None on success."""
    if not isinstance(payload, dict):
        return None, "Body must be a JSON object"

    scope = payload.get("scope")
    if scope not in _VALID_SCOPES:
        return None, f"scope must be one of {list(_VALID_SCOPES)}"

    raw_limit = payload.get("limit")
    if isinstance(raw_limit, bool) or not isinstance(raw_limit, int):
        return None, "limit must be an integer"
    if raw_limit < _LIMIT_MIN or raw_limit > _LIMIT_MAX:
        return None, f"limit must be between {_LIMIT_MIN} and {_LIMIT_MAX}"

    raw_window = payload.get("window")
    if isinstance(raw_window, bool) or not isinstance(raw_window, int):
        return None, "window must be an integer"
    if raw_window not in _VALID_WINDOWS:
        return None, f"window must be one of {list(_VALID_WINDOWS)}"

    return {"scope": scope, "limit": raw_limit, "window": raw_window}, None


@admin_bp.route("/ratelimit/apply", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def ratelimit_apply():
    """Apply a new (limit, window) pair to one of the four rate-limit scopes.

    Writes to ``current_app.config`` only — the values are NOT persisted to
    disk and revert to env-var defaults on next server restart.
    """
    payload = request.get_json(silent=True)
    validated, error = _validate(payload)
    if error:
        return _json_response({"error": error}, 400)

    scope = validated["scope"]
    limit = validated["limit"]
    window = validated["window"]
    upper = scope.upper()

    current_app.config[f"{upper}_RATE_LIMIT"] = limit
    current_app.config[f"{upper}_RATE_WINDOW"] = window

    current_app.logger.info(
        "Rate-limit applied (in-memory): %s limit=%d window=%d",
        sanitize_log_string(scope),
        limit,
        window,
    )
    return _json_response({"scope": scope, "limit": limit, "window": window})
