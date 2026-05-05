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
    limit = max(1, min(500, limit))
    source = (request.args.get("source") or "").strip() or None
    action = (request.args.get("action") or "").strip().lower() or None
    actor = (request.args.get("actor") or "").strip() or None

    # Pull a wider window first, then apply action/actor facets locally.
    # This preserves stable filtering semantics without changing audit_log API.
    events = [_with_gap_contract(e) for e in audit_log.recent(limit=500, source=source)]
    if action:
        events = [e for e in events if str(e.get("action") or "").lower() == action]
    if actor:
        events = [e for e in events if str(e.get("actor") or "") == actor]
    events = events[:limit]

    supports_before_after = any(
        (e.get("before") is not None) or (e.get("after") is not None) for e in events
    )
    supports_platform = any(e.get("platform") for e in events)
    return _json_response(
        {
            "events": events,
            "count": len(events),
            "sources": audit_log.sources(),
            # Prototype gap contract: ACTION / ACTOR facets + before/after diff.
            "contract": {
                "actions": sorted(
                    {str(e.get("action", "")).upper() for e in events if e.get("action")}
                ),
                "actors": sorted({str(e.get("actor", "")) for e in events if e.get("actor")}),
                "supports_before_after": supports_before_after,
                "supports_platform": supports_platform,
            },
        }
    )
