import json

from flask import Blueprint, current_app, make_response, request, send_from_directory

from .. import state
from ..services import messaging
from ..services.blacklist import contains_keyword
from ..services.fonts import build_font_payload, list_available_fonts
from ..services.settings import get_options
from ..services.security import rate_limit, verify_font_token
from ..services.validation import FireRequestSchema, BlacklistCheckSchema, validate_request
from ..managers import connection_manager
from ..utils import is_valid_image_url, sanitize_log_string

api_bp = Blueprint("api", __name__)


@api_bp.route("/fire", methods=["POST"])
@rate_limit("fire")
def fire():
    """發送彈幕"""
    if not connection_manager.has_ws_clients():
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
        text_content = data.get("text", "")

        if contains_keyword(text_content):
            return make_response(
                json.dumps({"error": "Content contains blocked keywords"}),
                400,
                {"Content-Type": "application/json"},
            )

        if data.get("isImage") and not is_valid_image_url(data["text"]):
            return make_response("Invalid image url", 400)

        admin_font_setting = get_options().get("FontFamily", [False, "", "", "NotoSansTC"])
        allow_user_font_choice = admin_font_setting[0]
        admin_default_font_name = admin_font_setting[3]

        chosen_font_name = admin_default_font_name

        if allow_user_font_choice and "fontInfo" in data and data["fontInfo"].get("name"):
            chosen_font_name = data["fontInfo"]["name"]

        data["fontInfo"] = build_font_payload(chosen_font_name)

        forward_success = messaging.forward_to_ws_server(data)

        web_success = False
        active_ws = connection_manager.get_active_ws()
        if active_ws and active_ws in connection_manager.get_web_connections():
            try:
                active_ws.send(json.dumps(data))
                web_success = True
            except Exception as exc:
                current_app.logger.warning(
                    "Failed to send with active_ws: %s", sanitize_log_string(str(exc))
                )
                connection_manager.unregister_web_connection(active_ws)

        if not web_success:
            connections_copy = connection_manager.get_web_connections()
            for ws in connections_copy:
                try:
                    ws.send(json.dumps(data))
                    connection_manager.register_web_connection(ws)
                    web_success = True
                    break
                except Exception as exc:
                    current_app.logger.warning(
                        "Failed to send to connection: %s", sanitize_log_string(str(exc))
                    )
                    connection_manager.unregister_web_connection(ws)

        if forward_success or web_success:
            return make_response("OK", 200)
        return make_response("Failed to send to any connection", 503)
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
    return make_response(json.dumps(get_options()), 200, {"Content-Type": "application/json"})


@api_bp.route("/fonts", methods=["GET"])
def public_fonts():
    return make_response(json.dumps(list_available_fonts()), 200, {"Content-Type": "application/json"})


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
        current_app.logger.error("Error checking blacklist: %s", sanitize_log_string(str(exc)))
        return make_response(
            json.dumps({"error": "An internal error has occurred"}),
            500,
            {"Content-Type": "application/json"},
        )

