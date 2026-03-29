"""Effects (.dme) management routes."""

import re as _re

import yaml
from flask import current_app, request

from ...services.security import rate_limit
from ...services.validation import EffectDeleteSchema, EffectSaveSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string

_SAFE_EFFECT_NAME = _re.compile(r"^[a-zA-Z0-9_-]{1,128}$")


@admin_bp.route("/effects", methods=["GET"])
@require_login
def list_effects_admin():
    """List all .dme effects with file info (for admin management)."""
    from ...services.effects import list_with_file_info

    return _json_response({"effects": list_with_file_info()})


@admin_bp.route("/effects/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_effect():
    """Upload a new .dme effect file (hot-pluggable)."""
    f = request.files.get("effectfile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    if not f.filename.lower().endswith(".dme"):
        return _json_response({"error": "Only .dme files are allowed"}, 400)

    content = f.stream.read(64 * 1024)  # max 64 KB
    if not content:
        return _json_response({"error": "Empty file"}, 400)

    from ...services.effects import save_uploaded_effect

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
@require_login
def delete_effect():
    """Delete a specified effect file (hot-pluggable)."""
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(EffectDeleteSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    effect_name = validated_data["name"]

    from ...services.effects import delete_by_name

    if delete_by_name(effect_name):
        current_app.logger.info("Effect deleted: %s", sanitize_log_string(effect_name))
        return _json_response({"message": f"Effect '{sanitize_log_string(effect_name)}' deleted"})
    return _json_response({"error": "Effect not found"}, 404)


@admin_bp.route("/effects/<name>/content", methods=["GET"])
@require_login
def get_effect_content_route(name):
    """Get raw .dme text content (for admin editing)."""
    from ...services.effects import get_effect_content

    content = get_effect_content(name)
    if content is None:
        return _json_response({"error": "Effect not found"}, 404)
    return _json_response({"content": content})


@admin_bp.route("/effects/save", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def save_effect_route():
    """Save edited .dme content (overwrite original file)."""
    data = request.get_json(silent=True)
    validated_data, errors = validate_request(EffectSaveSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ...services.effects import save_effect_content

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
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def preview_effect():
    """Preview effect CSS (without saving)."""
    data = request.get_json(silent=True) or {}
    content = data.get("content", "")
    params = data.get("params", {})

    if not content:
        return _json_response({"error": "No content"}, 400)

    try:
        parsed = yaml.safe_load(content)
    except Exception:
        return _json_response({"error": "Invalid YAML"}, 400)

    if not isinstance(parsed, dict) or not parsed.get("name"):
        return _json_response({"error": "Missing name field"}, 400)

    from ...services import effects as eff_svc
    from ...services.effects import render_effects

    # Build a temporary effect input using the parsed content
    name = str(parsed["name"])
    if not _SAFE_EFFECT_NAME.match(name):
        return _json_response({"error": "Invalid effect name format"}, 400)
    effect_input = [{"name": name, "params": params}]

    # Temporarily inject parsed effect into cache for rendering.
    # Lock during both the initial mutation and the restore to prevent races,
    # but release before calling render_effects (which re-acquires _lock via get_effect).
    with eff_svc._lock:
        original = eff_svc._cache.get(name)
        eff_svc._cache[name] = parsed
    try:
        result = render_effects(effect_input)
    finally:
        with eff_svc._lock:
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
@require_login
def reload_effects_admin():
    """Force rescan and reload all effects (hot-pluggable manual trigger)."""
    from ...services.effects import load_all

    effects = load_all(force=True)
    return _json_response({"message": "Effects reloaded", "count": len(effects)})
