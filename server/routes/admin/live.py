"""Live feed API routes."""

from flask import request

from ...services import live_feed_buffer
from ...services.blacklist import block_keyword
from ...services.filter_engine import RuleSaveError
from ...services.security import rate_limit
from ...services.validation import BlacklistKeywordSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/live-feed/recent", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def live_feed_recent():
    """Cursor-paginated polling endpoint replacing the legacy WS push.

    Query params:
      since (int, optional, default 0) — return entries with seq > since
      limit (int, optional, default 100, max 200) — cap on entries

    Response:
      {"entries": [{"seq": int, "data": {text/color/size/...}}, ...],
       "next_since": int}

    Admin polls every ~1.5 s with the previous response's next_since.
    Buffer is RAM-only (last 200 entries), so a client asleep longer
    than the buffer can hold just resumes from current head — same
    operator experience as a late WS reconnect.
    """
    try:
        since = int(request.args.get("since", "0"))
    except (TypeError, ValueError):
        since = 0
    try:
        limit = int(request.args.get("limit", "100"))
    except (TypeError, ValueError):
        limit = 100
    return _json_response(live_feed_buffer.recent(since=since, limit=limit))


@admin_bp.route("/live/block", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def live_block():
    """Live block -- add to blacklist or filter rule."""
    data = request.get_json(silent=True) or {}
    block_type = data.get("type", "keyword")  # "keyword" or "fingerprint"
    validated, errors = validate_request(BlacklistKeywordSchema, {"keyword": data.get("value", "")})
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    value = validated["keyword"]

    if block_type == "keyword":
        try:
            status = block_keyword(value)
        except RuleSaveError as e:
            return _json_response({"error": str(e), "code": e.code}, 500)
        # 回的訊息要反映實際結果：同一個字已經在清單上但被停用時，這裡會重新啟用它
        # （5.8 以前回 200「blocked」，那個字其實還是停用的）。
        messages = {
            "added": f"Keyword '{value}' blocked",
            "enabled": f"Keyword '{value}' was disabled and is blocked again",
            "exists": f"Keyword '{value}' is already blocked",
        }
        return _json_response({"message": messages[status], "status": status})
    elif block_type == "fingerprint":
        from ...services.filter_engine import filter_engine

        try:
            filter_engine.add_rule(
                {
                    "type": "fingerprint",
                    "pattern": value,
                    "action": "block",
                    "priority": 0,
                    "enabled": True,
                }
            )
        except RuleSaveError as e:
            return _json_response({"error": str(e), "code": e.code}, 500)
        return _json_response({"message": "Fingerprint rule added"})
    return _json_response({"error": "Unknown block type"}, 400)
