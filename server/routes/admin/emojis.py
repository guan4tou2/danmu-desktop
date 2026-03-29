"""Emoji API routes."""

from flask import request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/emojis/list", methods=["GET"])
@require_login
def list_emojis_admin():
    from ...services.emoji import emoji_service

    return _json_response({"emojis": emoji_service.list_emojis()})


@admin_bp.route("/emojis/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_emoji():
    f = request.files.get("emojifile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    name = request.form.get("name", "").strip()
    if not name:
        return _json_response({"error": "Name required"}, 400)

    ext = f.filename.rsplit(".", 1)[-1].lower() if "." in f.filename else ""
    file_bytes = f.stream.read(1024 * 1024)  # 1MB max read

    from ...services.emoji import emoji_service

    if emoji_service.upload(name, file_bytes, ext):
        return _json_response({"message": f"Emoji ':{name}:' uploaded"})
    return _json_response({"error": "Upload failed (check format/size/name)"}, 400)


@admin_bp.route("/emojis/delete", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_emoji():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.emoji import emoji_service

    if emoji_service.delete(name):
        return _json_response({"message": "Emoji deleted"})
    return _json_response({"error": "Emoji not found"}, 404)
