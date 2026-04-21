"""Font and sticker upload/delete routes."""

import magic
from flask import current_app, request

from ...services.fonts import delete_uploaded_font, list_uploaded_fonts, save_uploaded_font
from ...services.security import rate_limit
from . import (
    _STICKER_ALLOWED_MIME,
    _STICKER_MAX_SIZE,
    _STICKER_NAME_RE,
    _json_response,
    admin_bp,
    allowed_file,
    require_csrf,
    require_login,
    sanitize_log_string,
)


@admin_bp.route("/upload_font", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_font():
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


@admin_bp.route("/fonts", methods=["GET"])
@require_login
def list_fonts():
    return _json_response({"fonts": list_uploaded_fonts()})


@admin_bp.route("/fonts/<name>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_font(name):
    try:
        removed = delete_uploaded_font(name)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    if not removed:
        return _json_response({"error": "Font not found"}, 404)
    current_app.logger.info("Font deleted: %s", sanitize_log_string(name))
    return _json_response({"status": "OK"})


@admin_bp.route("/upload_sticker", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_sticker():
    file = request.files.get("file")
    if not file or file.filename == "":
        return _json_response({"error": "No file provided"}, 400)

    name = file.filename.rsplit(".", 1)[0] if "." in file.filename else ""
    ext = file.filename.rsplit(".", 1)[1].lower() if "." in file.filename else ""

    if not _STICKER_NAME_RE.match(name):
        return _json_response(
            {"error": "Invalid sticker name (alphanumeric + underscore, max 32)"}, 400
        )

    if ext not in {"gif", "png", "webp"}:
        return _json_response({"error": "File type not allowed (gif, png, webp only)"}, 400)

    file_bytes = file.read()
    if len(file_bytes) > _STICKER_MAX_SIZE:
        return _json_response({"error": "File too large (max 2MB)"}, 413)
    if not file_bytes:
        return _json_response({"error": "Empty file"}, 400)

    actual_mime = magic.from_buffer(file_bytes[:2048], mime=True)
    if actual_mime not in _STICKER_ALLOWED_MIME:
        return _json_response({"error": f"Invalid file content type: {actual_mime}"}, 400)

    from ...services import stickers as sticker_mod
    from ...services.emoji import emoji_service
    from ...services.stickers import sticker_service

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
@require_login
def delete_sticker(name):
    if not _STICKER_NAME_RE.match(name):
        return _json_response({"error": "Invalid sticker name"}, 400)

    from ...services.stickers import sticker_service

    deleted = sticker_service.delete(name)
    if not deleted:
        return _json_response({"error": "Sticker not found"}, 404)

    current_app.logger.info("Sticker deleted: %s", sanitize_log_string(name))
    return _json_response({"status": "OK"})
