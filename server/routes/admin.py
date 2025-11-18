import json

from flask import Blueprint, current_app, flash, make_response, redirect, render_template, request, session, url_for
import magic

from ..services import messaging
from ..services.blacklist import add_keyword, contains_keyword, list_keywords, remove_keyword
from ..services.fonts import build_font_payload, list_available_fonts, save_uploaded_font
from ..services.settings import (
    get_options,
    get_setting_ranges,
    update_setting,
    set_toggle,
)
from ..state import USER_FONTS_DIR
from ..utils import allowed_file, sanitize_log_string
from ..services.security import require_csrf, rate_limit
from ..services.validation import SettingUpdateSchema, ToggleSettingSchema, validate_request

admin_bp = Blueprint("admin_bp", __name__, url_prefix="/admin")

SETTABLE_OPTION_KEYS = {"Color", "Opacity", "FontSize", "Speed", "FontFamily"}


def _ensure_logged_in():
    if not session.get("logged_in"):
        flash("Please log in first.")
        return False
    return True


@admin_bp.route("/")
def admin():
    if not _ensure_logged_in():
        return render_template("admin.html", ranges=get_setting_ranges())
    return render_template("admin.html", Options=get_options(), ranges=get_setting_ranges())


@admin_bp.route("/upload_font", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_font():
    if not _ensure_logged_in():
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})

    file = request.files.get("fontfile")
    if not file or file.filename == "":
        return make_response(json.dumps({"error": "No selected file"}), 400, {"Content-Type": "application/json"})

    if not allowed_file(file.filename):
        return make_response(json.dumps({"error": "File type not allowed"}), 400, {"Content-Type": "application/json"})

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
        return make_response(
            json.dumps({"error": f"Invalid file content type. Detected: {actual_mime_type}"}),
            400,
            {"Content-Type": "application/json"},
        )

    filename = save_uploaded_font(file)
    if filename:
        current_app.logger.info(f"Font uploaded: {sanitize_log_string(filename)}")
        return make_response(
            json.dumps({"message": f"Font '{sanitize_log_string(filename)}' uploaded successfully"}),
            200,
            {"Content-Type": "application/json"},
        )
    current_app.logger.warning(f"Failed to upload font: {file.filename}")
    return make_response(json.dumps({"error": "Failed to upload font"}), 400, {"Content-Type": "application/json"})


@admin_bp.route("/get_fonts", methods=["GET"])
@require_csrf
def get_fonts():
    if not session.get("logged_in"):
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})
    return make_response(json.dumps(list_available_fonts()), 200, {"Content-Type": "application/json"})


@admin_bp.route("/Set", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def set_option():
    if not session.get("logged_in"):
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})

    payload = request.get_json(silent=True)
    # 驗證輸入
    validated_data, errors = validate_request(ToggleSettingSchema, payload)
    if errors:
        return make_response(
            json.dumps({"error": "Validation failed", "details": errors}),
            400,
            {"Content-Type": "application/json"},
        )
    
    key = validated_data["key"]
    value = validated_data["enabled"]
    if key not in SETTABLE_OPTION_KEYS:
        return make_response(json.dumps({"error": "Unknown setting key"}), 400, {"Content-Type": "application/json"})
    set_toggle(key, value)
    try:
        notification = {"type": "settings_changed", "settings": get_options()}
        messaging.forward_to_ws_server(notification)
        messaging.send_message(json.dumps(notification))
        current_app.logger.info(f"Setting toggled: {key} = {value}")
    except Exception as exc:
        current_app.logger.error("Change Error: %s", sanitize_log_string(str(exc)))

    return make_response(json.dumps({"message": "OK"}), 200, {"Content-Type": "application/json"})


@admin_bp.route("/update", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def update():
    if not _ensure_logged_in():
        return redirect(url_for("admin_bp.admin"))

    try:
        raw_data = request.get_json()
        if not raw_data:
            return make_response(json.dumps({"error": "Invalid JSON"}), 400, {"Content-Type": "application/json"})
        
        # 驗證輸入
        validated_data, errors = validate_request(SettingUpdateSchema, raw_data)
        if errors:
            return make_response(
                json.dumps({"error": "Validation failed", "details": errors}),
                400,
                {"Content-Type": "application/json"},
            )
        
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
        current_app.logger.error("Error updating settings: %s", sanitize_log_string(str(exc)))
        return make_response("An error occurred while updating settings.", 400)


@admin_bp.route("/blacklist/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def add_to_blacklist_route():
    if not _ensure_logged_in():
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})
    data = request.get_json()
    keyword = data.get("keyword")
    if add_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword added: {keyword}")
        return make_response(json.dumps({"message": "Keyword added"}), 200, {"Content-Type": "application/json"})
    current_app.logger.info(f"Blacklist keyword already exists: {keyword}")
    return make_response(json.dumps({"message": "Keyword already exists"}), 200, {"Content-Type": "application/json"})


@admin_bp.route("/blacklist/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def remove_from_blacklist_route():
    if not _ensure_logged_in():
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})
    data = request.get_json()
    keyword = data.get("keyword")
    if remove_keyword(keyword):
        current_app.logger.info(f"Blacklist keyword removed: {keyword}")
        return make_response(json.dumps({"message": "Keyword removed"}), 200, {"Content-Type": "application/json"})
    current_app.logger.warning(f"Blacklist keyword not found: {keyword}")
    return make_response(json.dumps({"error": "Keyword not found"}), 404, {"Content-Type": "application/json"})


@admin_bp.route("/blacklist/get", methods=["GET"])
def get_blacklist():
    if not _ensure_logged_in():
        return make_response(json.dumps({"error": "Unauthorized"}), 401, {"Content-Type": "application/json"})
    return make_response(json.dumps(list_keywords()), 200, {"Content-Type": "application/json"})

