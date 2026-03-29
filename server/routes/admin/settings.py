"""Settings toggle and update routes."""

import json

from flask import current_app, make_response, redirect, request, url_for

from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string
from ...services import messaging
from ...services.security import rate_limit
from ...services.settings import get_options, set_toggle, update_setting
from ...services.validation import SettingUpdateSchema, ToggleSettingSchema, validate_request


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
        messaging.send_message(json.dumps(notification))
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
        messaging.send_message(json.dumps(notification))
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
