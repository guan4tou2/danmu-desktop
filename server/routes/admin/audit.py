"""Admin audit-log endpoint.

Read-only view of the persistent audit trail (fire_token rotates, etc.).
Writes happen via ``services.audit_log.append`` from each subsystem; the
admin page just reads here.
"""

from flask import request

from ...services import audit_log
from . import _json_response, admin_bp, require_login


@admin_bp.route("/audit", methods=["GET"])
@require_login
def list_audit_events():
    try:
        limit = int(request.args.get("limit", "100"))
    except ValueError:
        limit = 100
    source = (request.args.get("source") or "").strip() or None
    events = audit_log.recent(limit=limit, source=source)
    return _json_response({
        "events": events,
        "count": len(events),
        "sources": audit_log.sources(),
    })
