"""Admin routes for the dedicated WS token toggle (v4.8.0+).

Two endpoints:

- GET  /admin/ws-auth        → return current { require_token, token }
- POST /admin/ws-auth        → update state (validated, CSRF-protected)
- POST /admin/ws-auth/rotate → generate a fresh token, preserve toggle

The token is shown in plaintext to logged-in admins because they need to
paste it into the Electron client config. This mirrors how the existing
overlay route exposes it.
"""

from flask import current_app, request

from ...services import ws_auth
from ...services.security import rate_limit
from ...services.validation import WsAuthSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/ws-auth", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def ws_auth_get():
    state = ws_auth.get_state()
    return _json_response(
        {
            "require_token": state["require_token"],
            "token": state["token"],
        }
    )


@admin_bp.route("/ws-auth", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def ws_auth_set():
    payload = request.get_json(silent=True)
    validated, errors = validate_request(WsAuthSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)

    try:
        new_state = ws_auth.set_state(
            require_token=validated["require_token"],
            token=validated.get("token", ""),
        )
    except ValueError as exc:
        # Shouldn't hit this — the schema already enforces the same invariant —
        # but defence in depth in case the service's rule evolves separately.
        return _json_response({"error": str(exc)}, 400)
    except Exception as exc:
        current_app.logger.error(
            "Failed to persist ws_auth state: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "Failed to persist"}, 500)

    current_app.logger.info(
        "WS auth updated: require_token=%s (token len=%s)",
        new_state["require_token"],
        len(new_state["token"]),
    )
    return _json_response(
        {
            "message": "OK",
            "require_token": new_state["require_token"],
            "token": new_state["token"],
        }
    )


@admin_bp.route("/ws-auth/rotate", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def ws_auth_rotate():
    """Generate a fresh token, preserving the require_token toggle."""
    try:
        new_state = ws_auth.rotate_token()
    except Exception as exc:
        current_app.logger.error(
            "Failed to rotate ws_auth token: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "Failed to rotate"}, 500)

    current_app.logger.info(
        "WS auth token rotated (require_token=%s, new len=%s)",
        new_state["require_token"],
        len(new_state["token"]),
    )
    return _json_response(
        {
            "message": "OK",
            "require_token": new_state["require_token"],
            "token": new_state["token"],
        }
    )
