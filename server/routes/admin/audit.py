"""Admin audit-log endpoint.

Read-only view of the persistent audit trail (fire_token rotates, etc.).
Writes happen via ``services.audit_log.append`` from each subsystem; the
admin page just reads here.
"""

from flask import request

from ...services import audit_log
from . import _json_response, admin_bp, require_login


def _with_gap_contract(event):
    """Attach stable placeholder fields used by prototype-level UI."""
    enriched = dict(event or {})
    enriched.setdefault("action", enriched.get("kind") or "unknown")
    enriched.setdefault("platform", None)  # web / desktop (future)
    enriched.setdefault("before", None)
    enriched.setdefault("after", None)
    return enriched


@admin_bp.route("/audit", methods=["GET"])
@require_login
def list_audit_events():
    try:
        limit = int(request.args.get("limit", "100"))
    except ValueError:
        limit = 100
    source = (request.args.get("source") or "").strip() or None
    events = [_with_gap_contract(e) for e in audit_log.recent(limit=limit, source=source)]
    return _json_response({
        "events": events,
        "count": len(events),
        "sources": audit_log.sources(),
        # Prototype gap contract: ACTION / ACTOR facets + before/after diff.
        "contract": {
            "actions": sorted({str(e.get("action", "")).upper() for e in events if e.get("action")}),
            "actors": sorted({str(e.get("actor", "")) for e in events if e.get("actor")}),
            "supports_before_after": False,
            "supports_platform": False,
        },
    })
