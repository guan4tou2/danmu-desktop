"""Sound API routes."""

from flask import request

from . import _json_response, admin_bp, require_csrf, require_login
from ...services.security import rate_limit
from ...services.validation import SoundRuleSchema, validate_request


@admin_bp.route("/sounds/list", methods=["GET"])
@require_login
def list_sounds():
    from ...services.sound import sound_service

    return _json_response(
        {
            "sounds": sound_service.list_sounds(),
            "rules": sound_service.list_rules(),
        }
    )


@admin_bp.route("/sounds/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_sound():
    f = request.files.get("soundfile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    name = request.form.get("name", "").strip()
    if not name:
        name = f.filename.rsplit(".", 1)[0] if "." in f.filename else f.filename

    ext = f.filename.rsplit(".", 1)[-1].lower() if "." in f.filename else ""
    file_bytes = f.stream.read(2 * 1024 * 1024)  # 2MB max read

    from ...services.sound import sound_service

    if sound_service.upload_sound(name, file_bytes, ext):
        return _json_response({"message": f"Sound '{name}' uploaded"})
    return _json_response({"error": "Upload failed (check format/size)"}, 400)


@admin_bp.route("/sounds/delete", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_sound():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.sound import sound_service

    if sound_service.delete_sound(name):
        return _json_response({"message": "Sound deleted"})
    return _json_response({"error": "Sound not found"}, 404)


@admin_bp.route("/sounds/rules/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_sound_rule():
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(SoundRuleSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ...services.sound import sound_service

    rule_id = sound_service.add_rule(validated)
    return _json_response({"rule_id": rule_id})


@admin_bp.route("/sounds/rules/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def remove_sound_rule():
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "")
    from ...services.sound import sound_service

    if sound_service.remove_rule(rule_id):
        return _json_response({"message": "Rule removed"})
    return _json_response({"error": "Rule not found"}, 404)
