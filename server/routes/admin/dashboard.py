"""Admin dashboard and font listing routes."""

from flask import render_template, session

from ...services.fonts import list_available_fonts
from ...services.settings import get_options, get_setting_ranges
from . import _ensure_logged_in, _json_response, admin_bp


@admin_bp.route("/")
def admin():
    if not _ensure_logged_in():
        return render_template("admin.html", ranges=get_setting_ranges())
    return render_template("admin.html", Options=get_options(), ranges=get_setting_ranges())


@admin_bp.route("/get_fonts", methods=["GET"])
def get_fonts():
    if not session.get("logged_in"):
        return _json_response({"error": "Unauthorized"}, 401)
    return _json_response(list_available_fonts())
