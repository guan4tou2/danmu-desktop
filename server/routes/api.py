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


@api_bp.route("/fire", methods=["POST"])
@rate_limit("fire")
def fire():
    """發送彈幕"""
    if get_ws_client_count() <= 0:
        return make_response("No active WebSocket connections", 503)

    try:
        raw_data = request.get_json(silent=True)
        if raw_data is None:
            return make_response("Invalid JSON", 400)

        # 驗證輸入
        validated_data, errors = validate_request(FireRequestSchema, raw_data)
        if errors:
            return make_response(
                json.dumps({"error": "Validation failed", "details": errors}),
                400,
                {"Content-Type": "application/json"},
            )

        data = validated_data
        fingerprint = data.pop("fingerprint", None)
        text_content = data.get("text", "")

        if contains_keyword(text_content):
            return make_response(
                json.dumps({"error": "Content contains blocked keywords"}),
                400,
                {"Content-Type": "application/json"},
            )

        if data.get("isImage") and not is_valid_image_url(data["text"]):
            return make_response("Invalid image url", 400)

        admin_font_setting = get_options().get(
            "FontFamily", [False, "", "", "NotoSansTC"]
        )
        allow_user_font_choice = admin_font_setting[0]
        admin_default_font_name = admin_font_setting[3]

        chosen_font_name = admin_default_font_name

        if (
            allow_user_font_choice
            and "fontInfo" in data
            and data["fontInfo"].get("name")
        ):
            chosen_font_name = data["fontInfo"]["name"]

        data["fontInfo"] = build_font_payload(chosen_font_name)

        forward_success = messaging.forward_to_ws_server(data)

        client_ip = request.headers.get("X-Forwarded-For", request.remote_addr)

        if forward_success:
            # 記錄成功發送的彈幕
            if history_service.danmu_history:
                history_payload = dict(data)
                history_payload["clientIp"] = client_ip
                history_payload["fingerprint"] = fingerprint
                history_service.danmu_history.add(history_payload)
            return make_response("OK", 200)
        return make_response("Failed to enqueue message", 503)
    except Exception as exc:
        current_app.logger.error("Send Error: %s", sanitize_log_string(str(exc)))
        return make_response("An internal error has occurred.", 500)


@api_bp.route("/user_fonts/<filename>")
def serve_user_font(filename):
    token = request.args.get("token")
    if not token or not verify_font_token(token, filename):
        return make_response("Forbidden", 403)
    return send_from_directory(state.USER_FONTS_DIR, filename)


@api_bp.route("/get_settings", methods=["GET"])
def get_settings():
    return make_response(
        json.dumps(get_options()), 200, {"Content-Type": "application/json"}
    )


@api_bp.route("/fonts", methods=["GET"])
def public_fonts():
    return make_response(
        json.dumps(list_available_fonts()), 200, {"Content-Type": "application/json"}
    )


@api_bp.route("/api/fonts", methods=["GET"])
def public_fonts_alias():
    """Backward compatibility for older clients requesting /api/fonts"""
    return public_fonts()


@api_bp.route("/check_blacklist", methods=["POST"])
@rate_limit("api", "API_RATE_LIMIT", "API_RATE_WINDOW")
def check_blacklist():
    """檢查內容是否在黑名單中"""
    try:
        raw_data = request.get_json(silent=True)
        if raw_data is None:
            return make_response(
                json.dumps({"error": "Invalid JSON"}),
                400,
                {"Content-Type": "application/json"},
            )

        # 驗證輸入
        validated_data, errors = validate_request(BlacklistCheckSchema, raw_data)
        if errors:
            return make_response(
                json.dumps({"error": "Validation failed", "details": errors}),
                400,
                {"Content-Type": "application/json"},
            )

        data = validated_data
        text_content = data.get("text", "")

        if contains_keyword(text_content):
            return make_response(
                json.dumps(
                    {"blocked": True, "message": "Content contains blocked keywords"}
                ),
                200,
                {"Content-Type": "application/json"},
            )

        return make_response(
            json.dumps({"blocked": False, "message": "Content is allowed"}),
            200,
            {"Content-Type": "application/json"},
        )
    except Exception as exc:
        current_app.logger.error(
            "Error checking blacklist: %s", sanitize_log_string(str(exc))
        )
        return make_response(
            json.dumps({"error": "An internal error has occurred"}),
            500,
            {"Content-Type": "application/json"},
        )
