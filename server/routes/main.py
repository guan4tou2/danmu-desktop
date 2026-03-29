import hmac

from flask import (
    Blueprint,
    current_app,
    flash,
    redirect,
    render_template,
    request,
    session,
    url_for,
)

from ..config import save_runtime_hash
from ..services.security import (
    hash_password,
    issue_csrf_token,
    rate_limit,
    require_csrf,
    verify_password,
)
from ..services.settings import get_options
from ..utils import json_response as _json_response
from ..utils import sanitize_log_string

main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def index():
    ws_port = current_app.config["WS_PORT"]
    ws_url = f"ws://{request.host.split(':')[0]}:{ws_port}"
    return render_template("index.html", options=get_options(), ws_url=ws_url)


@main_bp.route("/overlay")
def overlay():
    """OBS Browser Source overlay page."""
    ws_token = current_app.config.get("WS_AUTH_TOKEN") or ""
    if ws_token and not session.get("logged_in"):
        return redirect(url_for("admin_bp.admin"))
    return render_template(
        "overlay.html",
        ws_port=current_app.config["WS_PORT"],
        ws_token=ws_token,
    )


@main_bp.route("/login", methods=["POST"])
@rate_limit("login", "LOGIN_RATE_LIMIT", "LOGIN_RATE_WINDOW")
def login():
    password = request.form.get("password", "")
    admin_password = current_app.config["ADMIN_PASSWORD"]
    admin_password_hashed = current_app.config.get("ADMIN_PASSWORD_HASHED", "")

    # 支援明文密碼（向後相容）和雜湊密碼
    password_valid = False
    if admin_password_hashed:
        # 使用雜湊驗證
        password_valid = verify_password(password, admin_password_hashed)
    else:
        # 向後相容：使用明文比較（常數時間，防止 timing attack）
        password_valid = hmac.compare_digest(password, admin_password)

    if password_valid:
        session.clear()
        session["logged_in"] = True
        session["csrf_token"] = issue_csrf_token()
        return redirect(url_for("admin_bp.admin"))
    flash("wrong password!")
    return redirect(url_for("admin_bp.admin"))


@main_bp.route("/logout", methods=["POST"])
@require_csrf
def logout():
    session.clear()
    return redirect(url_for("admin_bp.admin"))


def _verify_current_password(candidate: str) -> bool:
    """Check candidate against whichever password store is active."""
    hashed = current_app.config.get("ADMIN_PASSWORD_HASHED", "")
    if hashed:
        return verify_password(candidate, hashed)
    return hmac.compare_digest(candidate, current_app.config.get("ADMIN_PASSWORD", ""))


@main_bp.route("/admin/change_password", methods=["POST"])
@rate_limit("login", "LOGIN_RATE_LIMIT", "LOGIN_RATE_WINDOW")
@require_csrf
def change_password():
    if not session.get("logged_in"):
        return _json_response({"error": "Unauthorized"}, 401)

    data = request.get_json(silent=True) or {}
    current = data.get("current_password", "")
    new_pw = data.get("new_password", "")
    confirm = data.get("confirm_password", "")

    if not current or not new_pw or not confirm:
        return _json_response({"error": "All fields are required"}, 400)

    if len(new_pw) < 8:
        return _json_response({"error": "New password must be at least 8 characters"}, 400)

    if new_pw != confirm:
        return _json_response({"error": "New passwords do not match"}, 400)

    if not _verify_current_password(current):
        return _json_response({"error": "Current password is incorrect"}, 403)

    new_hash = hash_password(new_pw)
    try:
        save_runtime_hash(new_hash)
        # Update the live config so subsequent logins use the new hash immediately
        current_app.config["ADMIN_PASSWORD_HASHED"] = new_hash
        current_app.logger.info("Admin password changed successfully")
        return _json_response({"message": "Password changed successfully"})
    except Exception as exc:
        current_app.logger.error("Failed to save password hash: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "Failed to save new password"}, 500)
