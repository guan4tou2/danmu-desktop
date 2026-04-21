"""Admin routes for the in-memory fingerprint tracker."""

from flask import request

from ...services import fingerprint_tracker
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/fingerprints", methods=["GET"])
@require_login
def list_fingerprints():
    try:
        limit = int(request.args.get("limit", "100"))
    except ValueError:
        limit = 100
    records = fingerprint_tracker.list_all(limit=limit)
    return _json_response({"records": records, "count": len(records)})


@admin_bp.route("/fingerprints/reset", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reset_fingerprints():
    fingerprint_tracker.reset()
    return _json_response({"status": "OK"})
