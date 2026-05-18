"""Moderation Queue endpoints (P0-4, design v4-r3 2026-05-18).

Front-end backing surface for the swimlane Kanban (pending / approved /
rejected). Until the filter engine ships a ``review`` action that holds
matched messages for human decision, this returns an empty queue and the
admin-modqueue.js page shows the "All Clear" empty state.

Endpoints (stable contract — backend logic will land later):
    GET  /admin/modqueue/list             → { pending, approved, rejected, stats }
    POST /admin/modqueue/approve {id}     → { ok }
    POST /admin/modqueue/reject  {id, reason?} → { ok }
    POST /admin/modqueue/bulk    {action, severity?} → { applied: N }

Audit-logged via ``services.audit_log`` so the audit page reflects
decisions even before the full pending-queue store ships.
"""

from flask import current_app, request

from ...services import messaging
from ...services.mod_queue import mod_queue
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


def _normalize_id(payload):
    if not isinstance(payload, dict):
        return None
    raw = payload.get("id")
    if raw in (None, ""):
        return None
    return str(raw)[:64]


@admin_bp.route("/modqueue/list", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def modqueue_list():
    # Lazy-start the auto-reject reaper on first poll — keeps startup
    # cheap when no admin ever opens the queue.
    mod_queue.start_reaper()
    return _json_response(mod_queue.snapshot())


@admin_bp.route("/modqueue/approve", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def modqueue_approve():
    payload = request.get_json(silent=True) or {}
    qid = _normalize_id(payload)
    if not qid:
        return _json_response({"error": "id required"}, 400)
    resolved = mod_queue.approve(qid)
    if resolved is None:
        return _json_response({"error": "not found"}, 404)
    # Approved → forward the original message to overlay. bypass the
    # filter pipeline since admin already decided.
    try:
        forwarded = {
            "text": resolved.get("text") or resolved.get("content") or "",
            "nickname": resolved.get("nick") or "",
            "fingerprint": resolved.get("fp") or "",
            "source": "admin_approved",
        }
        messaging.forward_to_ws_server(forwarded, bypass_broadcast_gate=False)
    except Exception as exc:  # pragma: no cover — log + continue
        current_app.logger.warning("modqueue approve forward failed: %s", exc)
    return _json_response({"ok": True, "id": qid})


@admin_bp.route("/modqueue/reject", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def modqueue_reject():
    payload = request.get_json(silent=True) or {}
    qid = _normalize_id(payload)
    if not qid:
        return _json_response({"error": "id required"}, 400)
    resolved = mod_queue.reject(qid)
    if resolved is None:
        return _json_response({"error": "not found"}, 404)
    return _json_response({"ok": True, "id": qid})


@admin_bp.route("/modqueue/bulk", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def modqueue_bulk():
    payload = request.get_json(silent=True) or {}
    action = str(payload.get("action") or "").lower()
    severity = str(payload.get("severity") or "").lower()
    if action not in ("approve", "reject"):
        return _json_response({"error": "action must be approve|reject"}, 400)
    if severity not in ("low", "medium", "high", ""):
        return _json_response({"error": "severity must be low|medium|high"}, 400)
    applied = mod_queue.bulk(action, severity=severity or None)
    return _json_response({"ok": True, "applied": applied})


# Test/dev-only seed helper. Not registered when DEBUG is False.
@admin_bp.route("/modqueue/_seed", methods=["POST"])
@require_csrf
@require_login
def modqueue_seed():
    """Inject sample pending items for design / preview verification."""
    if not current_app.config.get("DEBUG"):
        return _json_response({"error": "debug-only"}, 403)
    samples = [
        (
            "快加我 Line: scam_king 🎁 免費禮物等你拿！",
            "dd4a21",
            "訪客9988",
            "REGEX · 加.*line",
            "加.*line",
            "high",
        ),
        (
            "CHECK OUT https://t.me/spam_channel 免費看片",
            "71a2e3",
            "訪客0712",
            "REGEX · t.me",
            "t.me",
            "high",
        ),
        ("選舉投票給三號比較好", "2b1100", "kevin", "REGEX · 選舉|投票給", "選舉|投票給", "medium"),
        ("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥", "33aa44", "訪客3344", "FILTER · emoji-only", "emoji-only", "low"),
    ]
    ids = []
    for text, fp, nick, rule, pat, sev in samples:
        ids.append(
            mod_queue.enqueue(
                text,
                fingerprint=fp,
                nickname=nick,
                rule_name=rule,
                pattern=pat,
                severity=sev,
            )
        )
    return _json_response({"ok": True, "ids": ids})
