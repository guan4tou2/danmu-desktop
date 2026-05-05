"""Admin routes for the onscreen-danmu traffic shaper (v4.9.0+).

- GET  /admin/api/onscreen-limits  → return current state
- POST /admin/api/onscreen-limits  → update max cap + overflow mode
"""

from flask import current_app, request

from ...services import onscreen_config
from ...services.security import rate_limit
from ...services.validation import OnscreenLimitsSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/api/onscreen-limits", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def onscreen_limits_get():
    return _json_response(onscreen_config.get_state())


@admin_bp.route("/api/onscreen-limits", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def onscreen_limits_set():
    payload = request.get_json(silent=True)
    validated, errors = validate_request(OnscreenLimitsSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)

    try:
        new_state = onscreen_config.set_state(
            max_onscreen_danmu=validated["max_onscreen_danmu"],
            overflow_mode=validated["overflow_mode"],
        )
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    except Exception as exc:
        current_app.logger.error(
            "Failed to persist onscreen_limits state: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "Failed to persist"}, 500)

    current_app.logger.info("onscreen limits updated: %s", new_state)
    return _json_response(new_state)
