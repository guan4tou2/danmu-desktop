"""Sticker pack management routes.

File upload + delete already live in routes/admin/uploads.py for historical
reasons; this module owns the multi-pack metadata layer (P1-4 backend).
"""

from flask import current_app, request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


@admin_bp.route("/stickers/packs", methods=["GET"])
@require_login
def list_sticker_packs():
    from ...services.stickers import sticker_service

    sticker_service._ensure_loaded()
    return _json_response({"packs": sticker_service.list_packs()})


@admin_bp.route("/stickers/packs/create", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_sticker_pack():
    from ...services.stickers import sticker_service

    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    if not name:
        return _json_response({"error": "Pack name required"}, 400)
    try:
        pack = sticker_service.create_pack(name)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    current_app.logger.info("Sticker pack created: %s", sanitize_log_string(pack["id"]))
    return _json_response({"pack": pack})


@admin_bp.route("/stickers/packs/<pack_id>/toggle", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def toggle_sticker_pack(pack_id):
    from ...services.stickers import sticker_service

    pack = sticker_service.toggle_pack(pack_id)
    if pack is None:
        return _json_response({"error": "Pack not found"}, 404)
    return _json_response({"pack": pack})


@admin_bp.route("/stickers/packs/<pack_id>/rename", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def rename_sticker_pack(pack_id):
    from ...services.stickers import sticker_service

    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    if not name:
        return _json_response({"error": "Pack name required"}, 400)
    try:
        ok = sticker_service.rename_pack(pack_id, name)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    if not ok:
        return _json_response({"error": "Pack not found"}, 404)
    return _json_response({"status": "OK"})


@admin_bp.route("/stickers/packs/<pack_id>/reorder", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reorder_sticker_pack(pack_id):
    from ...services.stickers import sticker_service

    data = request.get_json(silent=True) or {}
    try:
        order = int(data.get("order"))
    except (TypeError, ValueError):
        return _json_response({"error": "order must be an integer"}, 400)
    ok = sticker_service.reorder_pack(pack_id, order)
    if not ok:
        return _json_response({"error": "Pack not found"}, 404)
    return _json_response({"status": "OK"})


@admin_bp.route("/stickers/packs/<pack_id>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_sticker_pack(pack_id):
    from ...services.stickers import sticker_service

    try:
        ok = sticker_service.delete_pack(pack_id)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)
    if not ok:
        return _json_response({"error": "Pack not found"}, 404)
    current_app.logger.info("Sticker pack deleted: %s", sanitize_log_string(pack_id))
    return _json_response({"status": "OK"})


@admin_bp.route("/stickers/<name>/assign", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def assign_sticker_to_pack(name):
    """Move a sticker into a pack (or update its weight)."""
    from ...services.stickers import sticker_service

    data = request.get_json(silent=True) or {}
    pack_id = (data.get("pack_id") or "").strip()
    weight = data.get("weight")
    if not pack_id:
        return _json_response({"error": "pack_id required"}, 400)
    ok = sticker_service.assign_sticker(name, pack_id, weight)
    if not ok:
        return _json_response({"error": "Sticker or pack not found"}, 404)
    return _json_response({"status": "OK"})
