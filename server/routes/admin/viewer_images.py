"""觀眾外部圖片設定路由（2026-11-14）。

開關、允許的網站、允許的副檔名，存在 services/viewer_images.py。判斷在 /fire
裡做，這裡只負責讀寫設定。
"""

from flask import request

from ...services import audit_log, viewer_images
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


def _public(state):
    return {**state, "supported_extensions": list(viewer_images.SUPPORTED_EXTENSIONS)}


@admin_bp.route("/viewer-images", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def viewer_images_get():
    return _json_response(_public(viewer_images.get_state()))


@admin_bp.route("/viewer-images", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def viewer_images_patch():
    payload = request.get_json(silent=True)
    try:
        state = viewer_images.set_state(payload)
    except viewer_images.ViewerImagesError as exc:
        body = {"error": str(exc), "code": exc.code}
        if exc.detail is not None:
            body["detail"] = exc.detail
        if exc.code == "too_many_hosts":
            body["max"] = viewer_images.MAX_HOSTS
        return _json_response(body, 400)

    audit_log.append(
        "viewer",
        "images_update",
        actor="admin",
        meta={
            "enabled": state["enabled"],
            "hosts": len(state["hosts"]),
            "extensions": ",".join(state["extensions"]),
        },
    )
    return _json_response(_public(state))
