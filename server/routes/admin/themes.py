"""Theme management routes."""

from flask import request

from ...services import audit_log
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/themes", methods=["GET"])
@require_login
def get_themes():
    from ...services import theme_overrides
    from ...services import themes as theme_svc

    themes_list = theme_svc.load_all()
    active = theme_svc.get_active_name()
    # overrides 一併回傳：細部設定那組控制項要顯示「現在是哪一段」，而
    # load_all 回的 styles 已經是套用後的結果，反推不出主持人選的是哪一段。
    return _json_response(
        {
            "themes": themes_list,
            "active": active,
            "overrides": theme_overrides.get_all(),
        }
    )


@admin_bp.route("/themes/<name>/overrides", methods=["PATCH"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def patch_theme_overrides(name):
    """主題的細部設定（設計稿 08 · T1）。

    值傳空字串代表「回到主題原本的設定」——把覆寫移除，而不是存一個
    跟原本一樣的值；主題檔之後改版時沒被覆寫的部分才會跟著更新。
    """
    from ...services import theme_overrides
    from ...services import themes as theme_svc

    if not theme_svc.get_theme(name):
        return _json_response({"error": "Theme not found"}, 404)
    payload = request.get_json(silent=True) or {}
    try:
        overrides = theme_overrides.set_for(name, payload)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    audit_log.append(
        "themes",
        "override_update",
        actor="admin",
        meta={"theme": name, **overrides},
    )
    return _json_response({"name": name, "overrides": overrides})


@admin_bp.route("/themes/active", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def set_active_theme():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    if not name:
        return _json_response({"error": "Missing theme name"}, 400)
    from ...services import themes as theme_svc

    if theme_svc.set_active(name):
        return _json_response({"active": name})
    return _json_response({"error": "Theme not found"}, 404)


@admin_bp.route("/themes/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reload_themes():
    from ...services import themes as theme_svc

    themes_list = theme_svc.load_all(force=True)
    return _json_response({"themes": themes_list})


@admin_bp.route("/themes", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_theme():
    """「新主題」＝把現在這個主題（含細部設定）另存一份（設計稿 08 · T1）。

    從零挑一組樣式沒有意義——主持人手上已經有一個看得到的樣子，
    他要的是「照這個再調」。
    """
    from ...services import themes as theme_svc

    data = request.get_json(silent=True) or {}
    label = data.get("label", "")
    base = data.get("base") or theme_svc.get_active_name()
    try:
        meta = theme_svc.create_user_theme(label, base)
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    audit_log.append("themes", "create", actor="admin", meta=dict(meta))
    return _json_response(meta, 201)


@admin_bp.route("/themes/<name>", methods=["DELETE"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_theme(name):
    """只刪得掉主持人自己建的；內建的四個是 repo 檔案，拒絕。"""
    from ...services import themes as theme_svc

    if not theme_svc.delete_user_theme(name):
        return _json_response({"error": "Theme not found or not deletable"}, 404)
    audit_log.append("themes", "delete", actor="admin", meta={"theme": name})
    return _json_response({"deleted": name})
