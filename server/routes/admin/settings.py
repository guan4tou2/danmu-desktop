"""Settings toggle and update routes."""

from flask import current_app, make_response, request

from ...services import messaging
from ...services.security import rate_limit
from ...services.settings import (
    PICK_SET_KEYS,
    get_options,
    set_allowlist,
    set_toggle,
    update_setting,
)
from ...services.validation import (
    AllowlistUpdateSchema,
    SettingUpdateSchema,
    ToggleSettingSchema,
    validate_request,
)
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/Set", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def set_option():
    payload = request.get_json(silent=True)
    validated_data, errors = validate_request(ToggleSettingSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)

    key = validated_data["key"]
    value = validated_data["enabled"]
    set_toggle(key, value)
    try:
        notification = {"type": "settings_changed", "settings": get_options()}
        messaging.forward_to_ws_server(notification)
        current_app.logger.info(f"Setting toggled: {key} = {value}")
    except Exception as exc:
        current_app.logger.error("Change Error: %s", sanitize_log_string(str(exc)))

    return _json_response({"message": "OK"})


@admin_bp.route("/update", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update():
    try:
        raw_data = request.get_json()
        if not raw_data:
            return _json_response({"error": "Invalid JSON"}, 400)

        validated_data, errors = validate_request(SettingUpdateSchema, raw_data)
        if errors:
            return _json_response({"error": "Validation failed", "details": errors}, 400)

        data = validated_data
        key = data.get("type")
        value = data.get("value")
        index = data.get("index")

        update_setting(key, index, value)
        notification = {"type": "settings_changed", "settings": get_options()}
        messaging.forward_to_ws_server(notification)
        current_app.logger.info(f"Setting updated: {key}[{index}] = {value}")
        return make_response("OK", 200)
    except ValueError as exc:
        current_app.logger.warning(
            "Invalid setting update payload: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "Invalid settings payload"}, 400)
    except Exception as exc:
        current_app.logger.error("Error updating settings: %s", sanitize_log_string(str(exc)))
        return make_response("An error occurred while updating settings.", 400)


@admin_bp.route("/options/<key>/allowlist", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_allowlist(key):
    """Replace the allowlist for a pick-set option key.

    Body: ``{"allowlist": [str, ...]}``. Empty list = all presets allowed.
    """
    if key not in PICK_SET_KEYS:
        return _json_response({"error": f"{key} does not support allowlist"}, 400)

    payload = request.get_json(silent=True)
    validated, errors = validate_request(AllowlistUpdateSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)

    try:
        new_row = set_allowlist(key, validated["allowlist"])
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    try:
        notification = {"type": "settings_changed", "settings": get_options()}
        messaging.forward_to_ws_server(notification)
        current_app.logger.info(
            "Allowlist updated: %s = %d entries",
            sanitize_log_string(key),
            len(validated["allowlist"]),
        )
    except Exception as exc:
        current_app.logger.error("allowlist broadcast failed: %s", sanitize_log_string(str(exc)))

    return _json_response({"key": key, "option": new_row})
