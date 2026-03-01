import json

from flask import (Blueprint, current_app, make_response, request,
                   send_from_directory)

from .. import state
from ..services import history as history_service
from ..services import messaging
from ..services.blacklist import contains_keyword
from ..services.fonts import build_font_payload, list_available_fonts
from ..services.security import rate_limit, verify_font_token
from ..services.settings import get_options
from ..services.validation import (BlacklistCheckSchema, FireRequestSchema,
                                   validate_request)
from ..services.ws_state import get_ws_client_count
from ..utils import is_valid_image_url, sanitize_log_string

api_bp = Blueprint("api", __name__)


def _json_response(payload, status=200):
    return make_response(json.dumps(payload), status, {"Content-Type": "application/json"})


def _internal_plain_error_response():
    return make_response("An internal error has occurred.", 500)


def _internal_json_error_response():
    return _json_response({"error": "An internal error has occurred"}, 500)


def _log_and_internal_error(log_prefix, exc, as_json=False):
    current_app.logger.error("%s: %s", log_prefix, sanitize_log_string(str(exc)))
    if as_json:
        return _internal_json_error_response()
    return _internal_plain_error_response()


def _parse_and_validate(schema, invalid_json_as_plain=False):
    raw_data = request.get_json(silent=True)
    if raw_data is None:
        if invalid_json_as_plain:
            return None, make_response("Invalid JSON", 400)
        return None, _json_response({"error": "Invalid JSON"}, 400)

    validated_data, errors = validate_request(schema, raw_data)
    if errors:
        return None, _json_response(
            {"error": "Validation failed", "details": errors},
            400,
        )

    return validated_data, None


def _resolve_font_payload(data):
    admin_font_setting = get_options().get("FontFamily", [False, "", "", "NotoSansTC"])
    allow_user_font_choice = admin_font_setting[0]
    admin_default_font_name = admin_font_setting[3]

    chosen_font_name = admin_default_font_name
    if allow_user_font_choice and data.get("fontInfo", {}).get("name"):
        chosen_font_name = data["fontInfo"]["name"]

    return build_font_payload(chosen_font_name)


def _record_history_if_enabled(data, fingerprint, client_ip):
    if not history_service.danmu_history:
        return

    history_payload = dict(data)
    history_payload["clientIp"] = client_ip
    history_payload["fingerprint"] = fingerprint
    history_service.danmu_history.add(history_payload)


@api_bp.route("/fire", methods=["POST"])
@rate_limit("fire")
def fire():
    """發送彈幕"""
    if get_ws_client_count() <= 0:
        return _json_response({"error": "No overlay connected. Please start the Electron overlay first."}, 503)

    try:
        data, error_response = _parse_and_validate(
            FireRequestSchema,
            invalid_json_as_plain=True,
        )
        if error_response:
            return error_response
        if not isinstance(data, dict):
            return _internal_plain_error_response()

        fingerprint = data.pop("fingerprint", None)
        text_content = data.get("text", "")

        if contains_keyword(text_content):
            return _json_response({"error": "Content contains blocked keywords"}, 400)

        if data.get("isImage") and not is_valid_image_url(data["text"]):
            return make_response("Invalid image url", 400)

        data["fontInfo"] = _resolve_font_payload(data)

        forward_success = messaging.forward_to_ws_server(data)

        client_ip = request.headers.get("X-Forwarded-For", request.remote_addr)

        if forward_success:
            _record_history_if_enabled(data, fingerprint, client_ip)
            return make_response("OK", 200)
        return _json_response({"error": "Failed to enqueue message"}, 503)
    except Exception as exc:
        return _log_and_internal_error("Send Error", exc)


@api_bp.route("/user_fonts/<filename>")
def serve_user_font(filename):
    token = request.args.get("token")
    if not token or not verify_font_token(token, filename):
        return make_response("Forbidden", 403)
    return send_from_directory(state.USER_FONTS_DIR, filename)


@api_bp.route("/get_settings", methods=["GET"])
def get_settings():
    return _json_response(get_options(), 200)


@api_bp.route("/fonts", methods=["GET"])
def public_fonts():
    return _json_response(list_available_fonts(), 200)


@api_bp.route("/api/fonts", methods=["GET"])
def public_fonts_alias():
    """Backward compatibility for older clients requesting /api/fonts"""
    return public_fonts()


@api_bp.route("/check_blacklist", methods=["POST"])
@rate_limit("api", "API_RATE_LIMIT", "API_RATE_WINDOW")
def check_blacklist():
    """檢查內容是否在黑名單中"""
    try:
        data, error_response = _parse_and_validate(BlacklistCheckSchema)
        if error_response:
            return error_response
        if not isinstance(data, dict):
            return _internal_json_error_response()

        text_content = data.get("text", "")

        if contains_keyword(text_content):
            return _json_response(
                {"blocked": True, "message": "Content contains blocked keywords"},
                200,
            )

        return _json_response(
            {"blocked": False, "message": "Content is allowed"},
            200,
        )
    except Exception as exc:
        return _log_and_internal_error("Error checking blacklist", exc, as_json=True)
