from flask import (Blueprint, current_app, flash, redirect, render_template,
                   request, session, url_for)

from ..services.security import issue_csrf_token, require_csrf, verify_password
from ..services.settings import get_options

main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def index():
    ws_port = current_app.config["WS_PORT"]
    ws_url = f"ws://{request.host.split(':')[0]}:{ws_port}"
    return render_template("index.html", options=get_options(), ws_url=ws_url)


@main_bp.route("/login", methods=["POST"])
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
        # 向後相容：使用明文比較
        password_valid = password == admin_password

    if password_valid:
        session["logged_in"] = True
        session["csrf_token"] = issue_csrf_token()
        return redirect(url_for("admin_bp.admin"))
    flash("wrong password!")
    return redirect(url_for("admin_bp.admin"))


@main_bp.route("/logout", methods=["POST"])
@require_csrf
def logout():
    session.pop("logged_in", None)
    session.pop("csrf_token", None)
    return redirect(url_for("admin_bp.admin"))
