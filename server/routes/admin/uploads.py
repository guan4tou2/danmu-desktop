"""Font, sticker, and event-logo upload/delete routes."""

import os
import time

import magic
from flask import current_app, request, send_file

from ...services.fonts import (
    delete_uploaded_font,
    list_available_fonts,
    save_uploaded_font,
    toggle_font,
)
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

_LOGO_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "runtime")
_LOGO_ALLOWED_MIME = {"image/png", "image/jpeg", "image/svg+xml"}
_LOGO_MAX_SIZE = 2 * 1024 * 1024  # 2 MB
_LOGO_EXT_MAP = {"image/png": "png", "image/jpeg": "jpg", "image/svg+xml": "svg"}


def _logo_path():
    for ext in ("png", "jpg", "jpeg", "svg"):
        p = os.path.join(_LOGO_DIR, f"event_logo.{ext}")
        if os.path.isfile(p):
            return p
    return None


@admin_bp.route("/logo", methods=["GET"])
@require_login
def get_logo():
    p = _logo_path()
    if not p:
        return _json_response({"error": "No logo uploaded"}, 404)
    return send_file(p)


@admin_bp.route("/logo", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_logo():
    f = request.files.get("logo")
    if not f or f.filename == "":
        return _json_response({"error": "No file provided"}, 400)

    head = f.stream.read(2048)
    f.stream.seek(0)
    mime = magic.from_buffer(head, mime=True)
    if mime not in _LOGO_ALLOWED_MIME:
        return _json_response({"error": f"Only PNG/JPG/SVG allowed (got {mime})"}, 400)

    data = f.read()
    if len(data) > _LOGO_MAX_SIZE:
        return _json_response({"error": "File too large (max 2 MB)"}, 413)

    # Remove any pre-existing logo files
    for ext in ("png", "jpg", "jpeg", "svg"):
        old = os.path.join(_LOGO_DIR, f"event_logo.{ext}")
        try:
            os.remove(old)
        except FileNotFoundError:
            pass

    ext = _LOGO_EXT_MAP[mime]
    dest = os.path.join(_LOGO_DIR, f"event_logo.{ext}")
    os.makedirs(_LOGO_DIR, exist_ok=True)
    try:
        with open(dest, "wb") as fh:
            fh.write(data)
    except OSError as exc:
        current_app.logger.error("Logo save failed: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "Failed to save logo"}, 500)

    current_app.logger.info(
        "Event logo uploaded (%s, %d bytes)", sanitize_log_string(ext), len(data)
    )
    return _json_response({"url": f"/admin/logo?v={int(time.time())}"})


@admin_bp.route("/logo", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_logo():
    deleted = False
    for ext in ("png", "jpg", "jpeg", "svg"):
        p = os.path.join(_LOGO_DIR, f"event_logo.{ext}")
        try:
            os.remove(p)
            deleted = True
        except FileNotFoundError:
            pass
    current_app.logger.info("Event logo deleted")
    return _json_response({"deleted": deleted})


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
    return _json_response(list_available_fonts(include_disabled=True))


@admin_bp.route("/fonts/<name>/toggle", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def toggle_font_route(name):
    data = request.get_json(silent=True) or {}
    enabled = data.get("enabled")
    if not isinstance(enabled, bool):
        return _json_response({"error": "enabled must be a boolean"}, 400)
    try:
        new_allowlist = toggle_font(name, enabled)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    current_app.logger.info(
        "Font '%s' %s", sanitize_log_string(name), "enabled" if enabled else "disabled"
    )
    return _json_response({"status": "OK", "allowlist": new_allowlist})


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

    # Assign to a pack if requested (defaults to "default" pack via _scan migration).
    pack_id = (request.form.get("pack_id") or "").strip()
    if pack_id:
        if not sticker_service.assign_sticker(name, pack_id):
            current_app.logger.warning(
                "Sticker uploaded but pack assignment failed: %s -> %s",
                sanitize_log_string(name),
                sanitize_log_string(pack_id),
            )

    current_app.logger.info("Sticker uploaded: %s", sanitize_log_string(f"{name}.{ext}"))
    meta = sticker_service._sticker_meta.get(name, {})
    return _json_response(
        {
            "name": name,
            "url": f"/static/stickers/{name}.{ext}",
            "pack_id": meta.get("pack_id", "default"),
        }
    )


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
