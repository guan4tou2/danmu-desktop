import json

import magic
from flask import (Blueprint, current_app, flash, make_response, redirect,
                   render_template, request, session, url_for)

from ..config import Config
from ..services import history as history_service
from ..services import messaging
from ..services.blacklist import (add_keyword, contains_keyword, list_keywords,
                                  remove_keyword)

from ..services.fonts import (build_font_payload, list_available_fonts,
                              save_uploaded_font)
from ..services.security import rate_limit, require_csrf
from ..services.settings import (get_options, get_setting_ranges, set_toggle,
                                 update_setting)
from ..services.validation import (BlacklistKeywordSchema, SettingUpdateSchema,
                                   ToggleSettingSchema, validate_request)
from ..state import USER_FONTS_DIR
from ..utils import allowed_file, sanitize_log_string

admin_bp = Blueprint("admin_bp", __name__, url_prefix="/admin")


def _broadcast_blacklist_update():
    """Push the current blacklist to all connected web clients (admin pages)."""
    try:
        notification = json.dumps({"type": "blacklist_update", "keywords": list_keywords()})
        messaging.send_message(notification)
    except Exception as exc:
        current_app.logger.warning(
            "Failed to broadcast blacklist update: %s", sanitize_log_string(str(exc))
        )


def _json_response(data, status=200):
    return make_response(json.dumps(data), status, {"Content-Type": "application/json"})


def _ensure_logged_in():
    if not session.get("logged_in"):
        flash("Please log in first.")
        return False
    return True


@admin_bp.route("/")
def admin():
    if not _ensure_logged_in():
        return render_template("admin.html", ranges=get_setting_ranges())
    return render_template(
        "admin.html", Options=get_options(), ranges=get_setting_ranges()
    )


@admin_bp.route("/upload_font", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_font():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    file = request.files.get("fontfile")
    if not file or file.filename == "":
        return _json_response({"error": "No selected file"}, 400)

    if not allowed_file(file.filename):
        return _json_response({"error": "File type not allowed"}, 400)

    file_head = file.stream.read(2048)
    file.stream.seek(0)
    actual_mime_type = magic.from_buffer(file_head, mime=True)
    allowed_mime_types = [
        "font/ttf",
        "application/font-sfnt",
        "application/x-font-ttf",
        "font/sfnt",
    ]
    if actual_mime_type not in allowed_mime_types:
        return _json_response(
            {"error": f"Invalid file content type. Detected: {actual_mime_type}"}, 400
        )

    filename = save_uploaded_font(file)
    if filename:
        current_app.logger.info(f"Font uploaded: {sanitize_log_string(filename)}")
        return _json_response(
            {"message": f"Font '{sanitize_log_string(filename)}' uploaded successfully"}
        )
    current_app.logger.warning(f"Failed to upload font: {file.filename}")
    return _json_response({"error": "Failed to upload font"}, 400)


@admin_bp.route("/get_fonts", methods=["GET"])
def get_fonts():
    if not session.get("logged_in"):
        return _json_response({"error": "Unauthorized"}, 401)
    return _json_response(list_available_fonts())


@admin_bp.route("/Set", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def set_option():
    if not session.get("logged_in"):
        return _json_response({"error": "Unauthorized"}, 401)

    payload = request.get_json(silent=True)
    validated_data, errors = validate_request(ToggleSettingSchema, payload)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)

    key = validated_data["key"]
    value = validated_data["enabled"]
    if key not in Config.SETTABLE_OPTION_KEYS:
        return _json_response({"error": "Unknown setting key"}, 400)
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
def update():
    if not _ensure_logged_in():
        return redirect(url_for("admin_bp.admin"))

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
        return make_response(str(exc), 400)
    except Exception as exc:
        current_app.logger.error(
            "Error updating settings: %s", sanitize_log_string(str(exc))
        )
        return make_response("An error occurred while updating settings.", 400)


@admin_bp.route("/blacklist/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def add_to_blacklist_route():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(BlacklistKeywordSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    keyword = validated_data["keyword"]
    if add_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword added: {sanitize_log_string(keyword)}")
        _broadcast_blacklist_update()
        return _json_response({"message": "Keyword added"})
    current_app.logger.info(f"Blacklist keyword already exists: {sanitize_log_string(keyword)}")
    return _json_response({"message": "Keyword already exists"})


@admin_bp.route("/blacklist/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def remove_from_blacklist_route():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(BlacklistKeywordSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    keyword = validated_data["keyword"]
    if remove_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword removed: {sanitize_log_string(keyword)}")
        _broadcast_blacklist_update()
        return _json_response({"message": "Keyword removed"})
    current_app.logger.warning(f"Blacklist keyword not found: {sanitize_log_string(keyword)}")
    return _json_response({"error": "Keyword not found"}, 404)


@admin_bp.route("/blacklist/get", methods=["GET"])
def get_blacklist():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    return _json_response(list_keywords())




@admin_bp.route("/history", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
def get_danmu_history():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    try:
        hours = request.args.get("hours", default=24, type=int)
        limit = request.args.get("limit", default=1000, type=int)

        hours = max(1, min(hours, 168))  # 1 to 168 hours (7 days)
        limit = max(1, min(limit, 5000))

        records = (
            history_service.danmu_history.get_recent(hours=hours, limit=limit)
            if history_service.danmu_history
            else []
        )
        stats = (
            history_service.danmu_history.get_stats()
            if history_service.danmu_history
            else {}
        )

        return _json_response(
            {"records": records, "stats": stats, "query": {"hours": hours, "limit": limit}}
        )
    except Exception as exc:
        current_app.logger.error(
            "Error fetching danmu history: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "An internal error has occurred"}, 500)


@admin_bp.route("/history/clear", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def clear_danmu_history():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    try:
        if history_service.danmu_history:
            history_service.danmu_history.clear()
        current_app.logger.info("Danmu history cleared by admin")
        return _json_response({"message": "History cleared"})
    except Exception as exc:
        current_app.logger.error(
            "Error clearing danmu history: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "An internal error has occurred"}, 500)
