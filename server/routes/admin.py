import json

import magic
from flask import (
    Blueprint,
    current_app,
    flash,
    make_response,
    redirect,
    render_template,
    request,
    session,
    url_for,
)

from ..services import history as history_service
from ..services import messaging
from ..services.blacklist import add_keyword, list_keywords, remove_keyword
from ..services.fonts import list_available_fonts, save_uploaded_font
from ..services.poll import poll_service
from ..services.replay import replay_service
from ..services.security import rate_limit, require_csrf
from ..services.settings import (
    get_options,
    get_setting_ranges,
    set_toggle,
    update_setting,
)
from ..services.validation import (
    BlacklistKeywordSchema,
    EffectDeleteSchema,
    EffectSaveSchema,
    FilterRuleSchema,
    PollCreateSchema,
    SchedulerCreateSchema,
    SettingUpdateSchema,
    SoundRuleSchema,
    ToggleSettingSchema,
    WebhookSchema,
    validate_request,
)
from ..services.ws_state import get_ws_client_count
from ..utils import allowed_file
from ..utils import json_response as _json_response
from ..utils import sanitize_log_string

import re as _re

_STICKER_ALLOWED_MIME = {"image/gif", "image/png", "image/webp"}
_STICKER_MAX_SIZE = 2 * 1024 * 1024  # 2 MB
_STICKER_NAME_RE = _re.compile(r"^[a-zA-Z0-9_]{1,32}$")

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


@admin_bp.route("/upload_sticker", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_sticker():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    file = request.files.get("file")
    if not file or file.filename == "":
        return _json_response({"error": "No file provided"}, 400)

    name = file.filename.rsplit(".", 1)[0] if "." in file.filename else ""
    ext = file.filename.rsplit(".", 1)[1].lower() if "." in file.filename else ""

    if not _STICKER_NAME_RE.match(name):
        return _json_response({"error": "Invalid sticker name (alphanumeric + underscore, max 32)"}, 400)

    if ext not in {"gif", "png", "webp"}:
        return _json_response({"error": "File type not allowed (gif, png, webp only)"}, 400)

    file_bytes = file.read()
    if len(file_bytes) > _STICKER_MAX_SIZE:
        return _json_response({"error": "File too large (max 2MB)"}, 413)
    if not file_bytes:
        return _json_response({"error": "Empty file"}, 400)

    actual_mime = magic.from_buffer(file_bytes[:2048], mime=True)
    if actual_mime not in _STICKER_ALLOWED_MIME:
        return _json_response(
            {"error": f"Invalid file content type: {actual_mime}"}, 400
        )

    # Local imports — matching the existing admin.py pattern for emoji_service
    from ..services import stickers as sticker_mod
    from ..services.stickers import sticker_service
    from ..services.emoji import emoji_service

    # Name collision checks
    if sticker_service.resolve(f":{name}:") is not None:
        return _json_response({"error": f"Sticker '{name}' already exists"}, 409)
    if emoji_service.get_url(name) is not None:
        return _json_response({"error": f"Name '{name}' already used by an emoji"}, 409)

    # Count limit
    try:
        sticker_service.check_count_limit()
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)

    dest = sticker_mod._STICKERS_DIR / f"{name}.{ext}"
    sticker_mod._STICKERS_DIR.mkdir(parents=True, exist_ok=True)
    try:
        dest.write_bytes(file_bytes)
    except OSError as e:
        current_app.logger.error("Failed to save sticker: %s", sanitize_log_string(str(e)))
        return _json_response({"error": "Failed to save sticker"}, 500)

    sticker_service._scan()
    current_app.logger.info("Sticker uploaded: %s", sanitize_log_string(f"{name}.{ext}"))
    return _json_response({"name": name, "url": f"/static/stickers/{name}.{ext}"})


@admin_bp.route("/stickers/<name>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def delete_sticker(name):
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    if not _STICKER_NAME_RE.match(name):
        return _json_response({"error": "Invalid sticker name"}, 400)

    from ..services.stickers import sticker_service  # local import, matching admin.py style
    deleted = sticker_service.delete(name)
    if not deleted:
        return _json_response({"error": "Sticker not found"}, 404)

    current_app.logger.info("Sticker deleted: %s", sanitize_log_string(name))
    return _json_response({"status": "OK"})


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
        current_app.logger.warning(
            "Invalid setting update payload: %s", sanitize_log_string(str(exc))
        )
        return _json_response({"error": "Invalid settings payload"}, 400)
    except Exception as exc:
        current_app.logger.error("Error updating settings: %s", sanitize_log_string(str(exc)))
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


@admin_bp.route("/stats/hourly", methods=["GET"])
def get_hourly_stats():
    """每小時彈幕分布"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    hours = request.args.get("hours", 24, type=int)
    hours = max(1, min(hours, 168))
    if not history_service.danmu_history:
        return _json_response({"distribution": []})
    dist = history_service.danmu_history.get_hourly_distribution(hours)
    return _json_response({"distribution": dist})


@admin_bp.route("/stats/top-text", methods=["GET"])
def get_top_text_stats():
    """熱門彈幕文字排行"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    hours = request.args.get("hours", 24, type=int)
    limit = request.args.get("limit", 10, type=int)
    if not history_service.danmu_history:
        return _json_response({"topTexts": []})
    texts = history_service.danmu_history.get_top_texts(hours, min(limit, 50))
    return _json_response({"topTexts": texts})


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
        stats = history_service.danmu_history.get_stats() if history_service.danmu_history else {}

        return _json_response(
            {
                "records": records,
                "stats": stats,
                "query": {"hours": hours, "limit": limit},
            }
        )
    except Exception as exc:
        current_app.logger.error("Error fetching danmu history: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "An internal error has occurred"}, 500)


@admin_bp.route("/effects", methods=["GET"])
def list_effects_admin():
    """列出所有 .dme 特效（含檔案資訊，供 admin 管理）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.effects import list_with_file_info

    return _json_response({"effects": list_with_file_info()})


@admin_bp.route("/effects/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_effect():
    """上傳新的 .dme 特效檔案（熱插拔）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    f = request.files.get("effectfile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    if not f.filename.lower().endswith(".dme"):
        return _json_response({"error": "Only .dme files are allowed"}, 400)

    content = f.stream.read(64 * 1024)  # max 64 KB
    if not content:
        return _json_response({"error": "Empty file"}, 400)

    from ..services.effects import save_uploaded_effect

    filename, error = save_uploaded_effect(content)
    if error:
        return _json_response({"error": error}, 400)

    current_app.logger.info("Effect uploaded: %s", sanitize_log_string(filename))
    return _json_response(
        {
            "message": f"Effect '{sanitize_log_string(filename)}' uploaded",
            "filename": sanitize_log_string(filename),
        }
    )


@admin_bp.route("/effects/delete", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def delete_effect():
    """刪除指定特效檔案（熱插拔）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    data = request.get_json(silent=True)
    validated_data, errors = validate_request(EffectDeleteSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    effect_name = validated_data["name"]

    from ..services.effects import delete_by_name

    if delete_by_name(effect_name):
        current_app.logger.info("Effect deleted: %s", sanitize_log_string(effect_name))
        return _json_response({"message": f"Effect '{sanitize_log_string(effect_name)}' deleted"})
    return _json_response({"error": "Effect not found"}, 404)


@admin_bp.route("/effects/<name>/content", methods=["GET"])
def get_effect_content_route(name):
    """取得特效原始 .dme 文字內容（供 admin 編輯用）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.effects import get_effect_content

    content = get_effect_content(name)
    if content is None:
        return _json_response({"error": "Effect not found"}, 404)
    return _json_response({"content": content})


@admin_bp.route("/effects/save", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def save_effect_route():
    """儲存已編輯的特效 .dme 內容（覆寫原檔）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(EffectSaveSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ..services.effects import save_effect_content

    filename, error = save_effect_content(
        validated_data["name"],
        validated_data["content"].encode("utf-8"),
    )
    if error:
        return _json_response({"error": error}, 400)
    current_app.logger.info("Effect saved: %s", sanitize_log_string(filename))
    return _json_response(
        {
            "message": f"Effect '{sanitize_log_string(filename)}' saved",
            "filename": sanitize_log_string(filename),
        }
    )


@admin_bp.route("/effects/preview", methods=["POST"])
@require_csrf
def preview_effect():
    """預覽特效 CSS（不存檔）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    data = request.get_json(silent=True) or {}
    content = data.get("content", "")
    params = data.get("params", {})

    if not content:
        return _json_response({"error": "No content"}, 400)

    import yaml

    try:
        parsed = yaml.safe_load(content)
    except Exception:
        return _json_response({"error": "Invalid YAML"}, 400)

    if not isinstance(parsed, dict) or not parsed.get("name"):
        return _json_response({"error": "Missing name field"}, 400)

    from ..services import effects as eff_svc
    from ..services.effects import render_effects

    # Build a temporary effect input using the parsed content
    name = str(parsed["name"])
    effect_input = [{"name": name, "params": params}]

    # Temporarily inject parsed effect into cache for rendering
    original = eff_svc._cache.get(name)
    eff_svc._cache[name] = parsed

    try:
        result = render_effects(effect_input)
    finally:
        # Restore original cache
        if original is not None:
            eff_svc._cache[name] = original
        else:
            eff_svc._cache.pop(name, None)

    if result is None:
        return _json_response({"error": "No animation generated"}, 400)

    return _json_response(result)


@admin_bp.route("/effects/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def reload_effects_admin():
    """強制重新掃描並載入所有特效（熱插拔手動觸發）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    from ..services.effects import load_all

    effects = load_all(force=True)
    return _json_response({"message": "Effects reloaded", "count": len(effects)})


# ─── Theme Management ─────────────────────────────────────────────────────


@admin_bp.route("/themes", methods=["GET"])
def get_themes():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services import themes as theme_svc

    themes_list = theme_svc.load_all()
    active = theme_svc.get_active_name()
    return _json_response({"themes": themes_list, "active": active})


@admin_bp.route("/themes/active", methods=["POST"])
@require_csrf
def set_active_theme():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    if not name:
        return _json_response({"error": "Missing theme name"}, 400)
    from ..services import themes as theme_svc

    if theme_svc.set_active(name):
        return _json_response({"active": name})
    return _json_response({"error": "Theme not found"}, 404)


@admin_bp.route("/themes/reload", methods=["POST"])
@require_csrf
def reload_themes():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services import themes as theme_svc

    themes_list = theme_svc.load_all(force=True)
    return _json_response({"themes": themes_list})


@admin_bp.route("/history/export", methods=["GET"])
def export_history():
    """Export danmu history as JSON timeline."""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    hours = request.args.get("hours", 24, type=int)
    hours = max(1, min(hours, 168))

    if not history_service.danmu_history:
        return _json_response({"version": 1, "duration_ms": 0, "records": []})

    records = history_service.danmu_history.get_recent(hours=hours, limit=10000)

    if not records:
        return _json_response({"version": 1, "duration_ms": 0, "records": []})

    # Calculate relative offsets from first record
    from datetime import datetime

    def parse_ts(ts_str):
        if ts_str.endswith("Z"):
            ts_str = ts_str.replace("Z", "+00:00")
        return datetime.fromisoformat(ts_str)

    # Records are sorted newest-first by get_records, reverse for timeline
    sorted_records = list(reversed(records))
    first_ts = parse_ts(sorted_records[0]["timestamp"])
    last_ts = parse_ts(sorted_records[-1]["timestamp"])

    timeline = []
    for r in sorted_records:
        ts = parse_ts(r["timestamp"])
        offset_ms = int((ts - first_ts).total_seconds() * 1000)
        timeline.append(
            {
                "offset_ms": offset_ms,
                "text": r.get("text", ""),
                "color": r.get("color", "#FFFFFF"),
                "size": r.get("size", "50"),
                "speed": r.get("speed", "5"),
                "opacity": r.get("opacity", "100"),
                "isImage": r.get("isImage", False),
            }
        )

    duration_ms = int((last_ts - first_ts).total_seconds() * 1000)

    response_data = {
        "version": 1,
        "duration_ms": duration_ms,
        "count": len(timeline),
        "records": timeline,
    }

    # Return as downloadable JSON file
    response = make_response(json.dumps(response_data, ensure_ascii=False, indent=2))
    response.headers["Content-Type"] = "application/json"
    response.headers["Content-Disposition"] = f"attachment; filename=danmu-timeline-{hours}h.json"
    return response


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
        current_app.logger.error("Error clearing danmu history: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "An internal error has occurred"}, 500)


# ─── 回放 API ─────────────────────────────────────────────────────────────────


@admin_bp.route("/replay", methods=["POST"])
@require_csrf
def start_replay():
    """啟動歷史彈幕回放"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)

    if get_ws_client_count() <= 0:
        return _json_response({"error": "No overlay connected"}, 503)

    data = request.get_json(silent=True) or {}
    records = data.get("records", [])
    speed = data.get("speedMultiplier", 1.0)

    if not records:
        return _json_response({"error": "No records provided"}, 400)
    if len(records) > 500:
        return _json_response({"error": "Too many records (max 500)"}, 400)
    if not isinstance(speed, (int, float)) or speed <= 0:
        return _json_response({"error": "Invalid speed multiplier"}, 400)

    replay_id = replay_service.start(records, speed_multiplier=float(speed))
    return _json_response(
        {
            "replayId": replay_id,
            "count": len(records),
        }
    )


@admin_bp.route("/replay/pause", methods=["POST"])
@require_csrf
def pause_replay():
    """暫停回放"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    replay_service.pause()
    return _json_response(replay_service.get_status())


@admin_bp.route("/replay/resume", methods=["POST"])
@require_csrf
def resume_replay():
    """繼續回放"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    replay_service.resume()
    return _json_response(replay_service.get_status())


@admin_bp.route("/replay/stop", methods=["POST"])
@require_csrf
def stop_replay():
    """停止回放"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    replay_service.stop()
    return _json_response({"status": "stopped"})


@admin_bp.route("/replay/status", methods=["GET"])
def get_replay_status():
    """取得回放狀態"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    return _json_response(replay_service.get_status())


# ─── 投票 API ─────────────────────────────────────────────────────────────────


@admin_bp.route("/poll/create", methods=["POST"])
@require_csrf
def create_poll():
    """建立新投票"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    schema = PollCreateSchema()
    errors = schema.validate(data)
    if errors:
        return _json_response({"error": errors}, 400)
    try:
        poll_id = poll_service.create(data["question"], data["options"])
        return _json_response({"poll_id": poll_id, **poll_service.get_status()})
    except ValueError as e:
        return _json_response({"error": str(e)}, 409)


@admin_bp.route("/poll/end", methods=["POST"])
@require_csrf
def end_poll():
    """結束投票"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    poll_service.end()
    return _json_response(poll_service.get_status())


@admin_bp.route("/poll/reset", methods=["POST"])
@require_csrf
def reset_poll():
    """重置投票"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    poll_service.reset()
    return _json_response({"state": "idle"})


@admin_bp.route("/poll/status", methods=["GET"])
def get_poll_status():
    """取得投票狀態"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    return _json_response(poll_service.get_status())


# ─── Scheduler API ────────────────────────────────────────────────────────────


@admin_bp.route("/scheduler/create", methods=["POST"])
@require_csrf
def create_scheduled_job():
    """建立排程任務"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(SchedulerCreateSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ..services.scheduler import scheduler_service

    try:
        job_id = scheduler_service.create(
            messages=validated["messages"],
            interval_sec=validated["interval_sec"],
            repeat_count=validated.get("repeat_count", -1),
            start_delay=validated.get("start_delay", 0),
        )
        return _json_response({"job_id": job_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/scheduler/cancel", methods=["POST"])
@require_csrf
def cancel_scheduled_job():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ..services.scheduler import scheduler_service

    if scheduler_service.cancel(job_id):
        return _json_response({"message": "Job cancelled"})
    return _json_response({"error": "Job not found"}, 404)


@admin_bp.route("/scheduler/pause", methods=["POST"])
@require_csrf
def pause_scheduled_job():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ..services.scheduler import scheduler_service

    if scheduler_service.pause(job_id):
        return _json_response({"message": "Job paused"})
    return _json_response({"error": "Job not found or not active"}, 400)


@admin_bp.route("/scheduler/resume", methods=["POST"])
@require_csrf
def resume_scheduled_job():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ..services.scheduler import scheduler_service

    if scheduler_service.resume(job_id):
        return _json_response({"message": "Job resumed"})
    return _json_response({"error": "Job not found or not paused"}, 400)


@admin_bp.route("/scheduler/list", methods=["GET"])
def list_scheduled_jobs():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.scheduler import scheduler_service

    return _json_response({"jobs": scheduler_service.list_jobs()})


# ─── Filter Engine API ────────────────────────────────────────────────────────


@admin_bp.route("/filters/add", methods=["POST"])
@require_csrf
def add_filter_rule():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(FilterRuleSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ..services.filter_engine import filter_engine

    try:
        rule_id = filter_engine.add_rule(validated)
        return _json_response({"rule_id": rule_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/remove", methods=["POST"])
@require_csrf
def remove_filter_rule():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    from ..services.filter_engine import filter_engine

    if filter_engine.remove_rule(rule_id):
        return _json_response({"message": "Rule removed"})
    return _json_response({"error": "Rule not found"}, 404)


@admin_bp.route("/filters/update", methods=["POST"])
@require_csrf
def update_filter_rule():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    updates = data.get("updates", {})
    if not rule_id or not isinstance(updates, dict):
        return _json_response({"error": "Missing rule_id or updates"}, 400)
    from ..services.filter_engine import filter_engine

    try:
        if filter_engine.update_rule(rule_id, updates):
            return _json_response({"message": "Rule updated"})
        return _json_response({"error": "Rule not found"}, 404)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/list", methods=["GET"])
def list_filter_rules():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.filter_engine import filter_engine

    return _json_response({"rules": filter_engine.list_rules()})


@admin_bp.route("/filters/test", methods=["POST"])
@require_csrf
def test_filter_rule():
    """測試過濾規則是否匹配"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    rule_data = data.get("rule", {})
    sample_text = data.get("text", "")
    from ..services.filter_engine import filter_engine

    try:
        result = filter_engine.test_rule(rule_data, sample_text)
        return _json_response(
            {
                "action": result.action,
                "text": result.text,
                "reason": result.reason,
            }
        )
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


# ─── Webhook API ──────────────────────────────────────────────────────────────


@admin_bp.route("/webhooks/register", methods=["POST"])
@require_csrf
def register_webhook():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(WebhookSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ..services.webhook import webhook_service

    try:
        hook_id = webhook_service.register(validated)
        return _json_response({"hook_id": hook_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/webhooks/unregister", methods=["POST"])
@require_csrf
def unregister_webhook():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    hook_id = data.get("hook_id", "")
    from ..services.webhook import webhook_service

    if webhook_service.unregister(hook_id):
        return _json_response({"message": "Webhook removed"})
    return _json_response({"error": "Webhook not found"}, 404)


@admin_bp.route("/webhooks/list", methods=["GET"])
def list_webhooks():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.webhook import webhook_service

    return _json_response({"webhooks": webhook_service.list_hooks()})


@admin_bp.route("/webhooks/test", methods=["POST"])
@require_csrf
def test_webhook():
    """測試 webhook（發送測試 payload）"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    hook_id = data.get("hook_id", "")
    from ..services.webhook import webhook_service

    webhook_service.emit("test", {"text": "Test from danmu admin", "hook_id": hook_id})
    return _json_response({"message": "Test webhook sent"})


@admin_bp.route("/webhook/incoming/<hook_id>", methods=["POST"])
def incoming_webhook(hook_id):
    """接收外部 webhook 轉為彈幕"""
    from ..services.webhook import webhook_service

    payload = request.get_data()
    signature = request.headers.get("X-Webhook-Signature", "")

    hooks = webhook_service.list_hooks()
    hook = next((h for h in hooks if h.get("id") == hook_id), None)
    if not hook:
        return _json_response({"error": "Unknown webhook"}, 404)

    if hook.get("secret"):
        if not webhook_service.verify_incoming(payload, signature, hook["secret"]):
            return _json_response({"error": "Invalid signature"}, 403)

    try:
        body = json.loads(payload)
    except Exception:
        return _json_response({"error": "Invalid JSON"}, 400)

    text = body.get("text", "")
    if not text:
        return _json_response({"error": "Missing text"}, 400)

    msg = {
        "text": text[:100],
        "color": body.get("color", "FFFFFF"),
        "size": body.get("size", 50),
        "speed": body.get("speed", 4),
        "opacity": body.get("opacity", 100),
    }
    messaging.forward_to_ws_server(msg)
    return _json_response({"status": "OK"})


# ─── Sound API ────────────────────────────────────────────────────────────────


@admin_bp.route("/sounds/list", methods=["GET"])
def list_sounds():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.sound import sound_service

    return _json_response(
        {
            "sounds": sound_service.list_sounds(),
            "rules": sound_service.list_rules(),
        }
    )


@admin_bp.route("/sounds/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_sound():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    f = request.files.get("soundfile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    name = request.form.get("name", "").strip()
    if not name:
        name = f.filename.rsplit(".", 1)[0] if "." in f.filename else f.filename

    ext = f.filename.rsplit(".", 1)[-1].lower() if "." in f.filename else ""
    file_bytes = f.stream.read(2 * 1024 * 1024)  # 2MB max read

    from ..services.sound import sound_service

    if sound_service.upload_sound(name, file_bytes, ext):
        return _json_response({"message": f"Sound '{name}' uploaded"})
    return _json_response({"error": "Upload failed (check format/size)"}, 400)


@admin_bp.route("/sounds/delete", methods=["POST"])
@require_csrf
def delete_sound():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ..services.sound import sound_service

    if sound_service.delete_sound(name):
        return _json_response({"message": "Sound deleted"})
    return _json_response({"error": "Sound not found"}, 404)


@admin_bp.route("/sounds/rules/add", methods=["POST"])
@require_csrf
def add_sound_rule():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(SoundRuleSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ..services.sound import sound_service

    rule_id = sound_service.add_rule(validated)
    return _json_response({"rule_id": rule_id})


@admin_bp.route("/sounds/rules/remove", methods=["POST"])
@require_csrf
def remove_sound_rule():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    from ..services.sound import sound_service

    if sound_service.remove_rule(rule_id):
        return _json_response({"message": "Rule removed"})
    return _json_response({"error": "Rule not found"}, 404)


# ─── Emoji API ────────────────────────────────────────────────────────────────


@admin_bp.route("/emojis/list", methods=["GET"])
def list_emojis_admin():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.emoji import emoji_service

    return _json_response({"emojis": emoji_service.list_emojis()})


@admin_bp.route("/emojis/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def upload_emoji():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    f = request.files.get("emojifile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    name = request.form.get("name", "").strip()
    if not name:
        return _json_response({"error": "Name required"}, 400)

    ext = f.filename.rsplit(".", 1)[-1].lower() if "." in f.filename else ""
    file_bytes = f.stream.read(1024 * 1024)  # 1MB max read

    from ..services.emoji import emoji_service

    if emoji_service.upload(name, file_bytes, ext):
        return _json_response({"message": f"Emoji ':{name}:' uploaded"})
    return _json_response({"error": "Upload failed (check format/size/name)"}, 400)


@admin_bp.route("/emojis/delete", methods=["POST"])
@require_csrf
def delete_emoji():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ..services.emoji import emoji_service

    if emoji_service.delete(name):
        return _json_response({"message": "Emoji deleted"})
    return _json_response({"error": "Emoji not found"}, 404)


# ─── Plugin API ───────────────────────────────────────────────────────────────


@admin_bp.route("/plugins/list", methods=["GET"])
def list_plugins():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.plugin_manager import plugin_manager

    return _json_response({"plugins": plugin_manager.list_plugins()})


@admin_bp.route("/plugins/enable", methods=["POST"])
@require_csrf
def enable_plugin():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ..services.plugin_manager import plugin_manager

    if plugin_manager.enable(name):
        return _json_response({"message": f"Plugin '{name}' enabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/disable", methods=["POST"])
@require_csrf
def disable_plugin():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ..services.plugin_manager import plugin_manager

    if plugin_manager.disable(name):
        return _json_response({"message": f"Plugin '{name}' disabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/reload", methods=["POST"])
@require_csrf
def reload_plugins():
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    from ..services.plugin_manager import plugin_manager

    plugin_manager.reload()
    return _json_response({"plugins": plugin_manager.list_plugins()})


# ─── Live Feed API ────────────────────────────────────────────────────────────


@admin_bp.route("/live/block", methods=["POST"])
@require_csrf
def live_block():
    """即時封鎖 — 加入黑名單或過濾規則"""
    if not _ensure_logged_in():
        return _json_response({"error": "Unauthorized"}, 401)
    data = request.get_json(silent=True) or {}
    block_type = data.get("type", "keyword")  # "keyword" or "fingerprint"
    value = data.get("value", "").strip()
    if not value:
        return _json_response({"error": "Value required"}, 400)

    if block_type == "keyword":
        add_keyword(value)
        _broadcast_blacklist_update()
        return _json_response({"message": f"Keyword '{value}' blocked"})
    elif block_type == "fingerprint":
        from ..services.filter_engine import filter_engine

        filter_engine.add_rule(
            {
                "type": "keyword",
                "pattern": value,
                "action": "block",
                "priority": 0,
                "enabled": True,
            }
        )
        return _json_response({"message": "Fingerprint rule added"})
    return _json_response({"error": "Unknown block type"}, 400)
