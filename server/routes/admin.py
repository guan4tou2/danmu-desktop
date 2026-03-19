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
    PollCreateSchema,
    SettingUpdateSchema,
    ToggleSettingSchema,
    validate_request,
)
from ..services.ws_state import get_ws_client_count
from ..utils import allowed_file
from ..utils import json_response as _json_response
from ..utils import sanitize_log_string

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
