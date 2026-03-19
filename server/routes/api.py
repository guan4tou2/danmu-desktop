from ipaddress import ip_address

from flask import (
    Blueprint,
    current_app,
    make_response,
    request,
    send_from_directory,
    session,
)

from .. import state
from ..services import history as history_service
from ..services import messaging
from ..services.blacklist import contains_keyword
from ..services.effects import load_all as load_all_effects
from ..services.effects import render_effects
from ..services.fonts import build_font_payload, list_available_fonts
from ..services.poll import poll_service
from ..services.security import rate_limit, require_csrf, verify_font_token
from ..services.settings import get_options
from ..services.validation import (
    BlacklistCheckSchema,
    FireRequestSchema,
    validate_request,
)
from ..services.ws_state import get_ws_client_count
from ..utils import is_valid_image_url
from ..utils import json_response as _json_response
from ..utils import sanitize_log_string

api_bp = Blueprint("api", __name__)


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


def _resolve_danmu_style(data):
    """將使用者傳入的樣式欄位與管理員設定合併，回傳完整樣式的 data dict。

    管理員設定格式：[enabled, min, max, default_value]
    - enabled=True  → 允許使用者自訂，優先使用使用者傳入值
    - enabled=False → 強制使用管理員預設值
    """
    options = get_options()

    def _pick(user_val, setting):
        """選出最終值：使用者值（若允許且有提供）或管理員預設。"""
        allow_custom, default = setting[0], setting[3]
        return user_val if (user_val is not None and allow_custom) else default

    # font 欄位（web UI 送字串）→ 轉成 fontInfo dict 再走原有解析邏輯
    if data.get("font"):
        if not (data.get("fontInfo") and data["fontInfo"].get("name")):
            data["fontInfo"] = {"name": data["font"]}
    data.pop("font", None)

    font_setting = options.get("FontFamily", [False, "", "", "NotoSansTC"])
    chosen_font_name = font_setting[3]
    if font_setting[0] and data.get("fontInfo", {}).get("name"):
        chosen_font_name = data["fontInfo"]["name"]
    data["fontInfo"] = build_font_payload(chosen_font_name)

    # color：管理員設定存 "#FFFFFF"，overlay 期望不含 # 的 hex
    raw_color = _pick(data.pop("color", None), options.get("Color", [True, 0, 0, "#FFFFFF"]))
    data["color"] = str(raw_color).lstrip("#")

    data["opacity"] = _pick(data.pop("opacity", None), options.get("Opacity", [True, 0, 100, 70]))
    data["size"] = _pick(data.pop("size", None), options.get("FontSize", [True, 20, 100, 50]))
    data["speed"] = _pick(data.pop("speed", None), options.get("Speed", [True, 1, 10, 4]))

    # Apply active theme defaults for textStyles
    from ..services import themes as theme_svc

    active_theme = theme_svc.get_active()
    theme_styles = active_theme.get("styles", {})

    # If user/admin didn't set color explicitly, use theme color
    if not data.get("color") and theme_styles.get("color"):
        data["color"] = str(theme_styles["color"]).lstrip("#")

    # Apply theme textStyles as defaults
    text_styles = data.get("textStyles") or {}
    if theme_styles.get("textStroke") is not None:
        text_styles.setdefault("textStroke", theme_styles["textStroke"])
    if theme_styles.get("strokeWidth") is not None:
        text_styles.setdefault("strokeWidth", theme_styles["strokeWidth"])
    if theme_styles.get("strokeColor"):
        text_styles.setdefault("strokeColor", theme_styles["strokeColor"])
    if theme_styles.get("textShadow") is not None:
        text_styles.setdefault("textShadow", theme_styles["textShadow"])
    if theme_styles.get("shadowBlur") is not None:
        text_styles.setdefault("shadowBlur", theme_styles["shadowBlur"])
    if text_styles:
        data["textStyles"] = text_styles

    # effects：解析 .dme 特效，產生可注入 overlay 的 CSS（若 Effects 設定關閉則略過）
    effects_setting = options.get("Effects", [True, "", "", ""])
    effects_enabled = effects_setting[0] is not False
    effects_input = data.pop("effects", []) or []

    # Apply theme effects preset if user didn't select any effects
    theme_effects = active_theme.get("effects_preset", [])
    if theme_effects and not effects_input:
        effects_input = theme_effects

    if effects_input and effects_enabled:
        resolved = render_effects(effects_input)
        data["effectCss"] = (
            resolved  # {keyframes, animation, styleId, animationComposition} 或 None
        )
    else:
        data["effectCss"] = None

    return data


def _record_history_if_enabled(data, fingerprint, client_ip):
    if not history_service.danmu_history:
        return

    history_payload = dict(data)
    history_payload["clientIp"] = client_ip
    history_payload["fingerprint"] = fingerprint
    history_service.danmu_history.add(history_payload)


def _extract_client_ip() -> str:
    trust_xff = bool(current_app.config.get("TRUST_X_FORWARDED_FOR", False))
    if trust_xff:
        xff = request.headers.get("X-Forwarded-For", "")
        candidate = xff.split(",", 1)[0].strip() if xff else ""
        if candidate:
            try:
                ip_address(candidate)
                return candidate
            except ValueError:
                pass

    remote_addr = request.remote_addr or ""
    try:
        ip_address(remote_addr)
        return remote_addr
    except ValueError:
        return "unknown"


@api_bp.route("/fire", methods=["POST"])
@rate_limit("fire")
def fire():
    """發送彈幕"""
    if get_ws_client_count() <= 0:
        return _json_response(
            {"error": "No overlay connected. Please start the Electron overlay first."},
            503,
        )

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
            return _json_response({"error": "Invalid image url"}, 400)

        # Check if text is a poll vote
        if poll_service.state == "active":
            text_upper = text_content.strip().upper()
            option_keys = poll_service.get_option_keys()
            if text_upper in option_keys:
                voter_id = data.get("fingerprint") or request.remote_addr or "unknown"
                poll_service.vote(text_upper, voter_id)
                # Vote still passes through as normal danmu

        data = _resolve_danmu_style(data)

        forward_success = messaging.forward_to_ws_server(data)

        client_ip = _extract_client_ip()

        if forward_success:
            _record_history_if_enabled(data, fingerprint, client_ip)
            return _json_response({"status": "OK"}, 200)
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


@api_bp.route("/themes", methods=["GET"])
def list_themes():
    """列出所有可用的主題"""
    from ..services import themes as theme_svc

    themes_list = theme_svc.load_all()
    active = theme_svc.get_active_name()
    return _json_response({"themes": themes_list, "active": active})


@api_bp.route("/effects", methods=["GET"])
def list_effects():
    """列出所有可用的 .dme 特效（含參數定義）"""
    effects = load_all_effects()
    return _json_response({"effects": effects})


@api_bp.route("/effects/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
def reload_effects():
    """強制重新掃描 effects/ 目錄（熱插拔手動觸發）"""
    if not session.get("logged_in"):
        return _json_response({"error": "Unauthorized"}, 401)
    effects = load_all_effects(force=True)
    return _json_response({"message": "Reloaded", "count": len(effects)})


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
