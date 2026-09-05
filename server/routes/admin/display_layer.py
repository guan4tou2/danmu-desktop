"""顯示層設定路由（2026-08-19 設計稿 07 · R1）。

彈幕在大螢幕上怎麼排：行數、避免重疊、顯示範圍。與 /admin/update 那組
「觀眾端預設值」分開——那組每一列都帶「觀眾可不可以自己改」，這組觀眾
永遠碰不到。
"""

from flask import current_app, request

from ...services import audit_log, display_layer, messaging
from ...services.security import rate_limit
from ...utils import sanitize_log_string
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/display-layer", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def display_layer_get():
    return _json_response(display_layer.get_state())


@admin_bp.route("/display-layer", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def display_layer_patch():
    payload = request.get_json(silent=True) or {}
    try:
        state = display_layer.set_state(payload)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    # 推給所有連線中的顯示層，改動即時生效（不必重整 OBS source）
    try:
        messaging.forward_to_ws_server({"type": "display_layer", "settings": state})
    except Exception as exc:  # 推播失敗不該讓設定儲存也跟著失敗
        current_app.logger.error(
            "display layer broadcast failed: %s", sanitize_log_string(str(exc))
        )

    audit_log.append(
        "display",
        "layer_update",
        actor="admin",
        meta=dict(state),
    )
    return _json_response(state)
