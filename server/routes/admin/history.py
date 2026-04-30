"""Danmu history, stats, and export routes."""

import json
from datetime import datetime

from flask import current_app, make_response, request

from ...services import history as history_service
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


def _gap_contract():
    return {
        "poll_deepdive": {
            "time_histogram": None,
            "delta_vs_previous": None,
            "geo_breakdown": None,
        },
        "audience": {
            "geo_supported": False,
            "risk_score_supported": False,
            "kick_endpoint_supported": False,
        },
    }


def _clamp_hours(hours):
    """Clamp hours parameter to [1, 168] range."""
    return max(1, min(hours, 168))


@admin_bp.route("/stats/hourly", methods=["GET"])
@require_login
def get_hourly_stats():
    """Every-hour danmu distribution."""
    hours = _clamp_hours(request.args.get("hours", 24, type=int))
    if not history_service.danmu_history:
        return _json_response({"distribution": []})
    dist = history_service.danmu_history.get_hourly_distribution(hours)
    return _json_response({"distribution": dist})


@admin_bp.route("/stats/top-text", methods=["GET"])
@require_login
def get_top_text_stats():
    """Top danmu text ranking."""
    hours = request.args.get("hours", 24, type=int)
    limit = request.args.get("limit", 10, type=int)
    if not history_service.danmu_history:
        return _json_response({"topTexts": []})
    texts = history_service.danmu_history.get_top_texts(hours, min(limit, 50))
    return _json_response({"topTexts": texts})


@admin_bp.route("/history", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_danmu_history():
    try:
        hours = request.args.get("hours", default=24, type=int)
        limit = request.args.get("limit", default=1000, type=int)

        hours = _clamp_hours(hours)
        limit = max(1, min(limit, 5000))

        records = (
            history_service.danmu_history.get_recent(hours=hours, limit=limit)
            if history_service.danmu_history
            else []
        )
        stats = history_service.danmu_history.get_stats() if history_service.danmu_history else {}

        return _json_response(
            {
                "records": records,
                "stats": stats,
                "query": {"hours": hours, "limit": limit},
                "contract": _gap_contract(),
            }
        )
    except Exception as exc:
        current_app.logger.error("Error fetching danmu history: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "An internal error has occurred"}, 500)


@admin_bp.route("/history/export", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def export_history():
    """Export danmu history as JSON timeline."""
    hours = request.args.get("hours", 24, type=int)
    hours = _clamp_hours(hours)

    if not history_service.danmu_history:
        return _json_response({"version": 1, "duration_ms": 0, "records": []})

    records = history_service.danmu_history.get_recent(hours=hours, limit=10000)

    if not records:
        return _json_response({"version": 1, "duration_ms": 0, "records": []})

    # Calculate relative offsets from first record
    def parse_ts(ts_str):
        if ts_str.endswith("Z"):
            ts_str = ts_str.replace("Z", "+00:00")
        return datetime.fromisoformat(ts_str)

    # Records are sorted newest-first by get_records, reverse for timeline
    sorted_records = list(reversed(records))
    first_ts = parse_ts(sorted_records[0]["timestamp"])
    last_ts = parse_ts(sorted_records[-1]["timestamp"])

    timeline = []
    for r in sorted_records:
        ts = parse_ts(r["timestamp"])
        offset_ms = int((ts - first_ts).total_seconds() * 1000)
        timeline.append(
            {
                "offset_ms": offset_ms,
                "text": r.get("text", ""),
                "color": r.get("color", "#FFFFFF"),
                "size": r.get("size", "50"),
                "speed": r.get("speed", "5"),
                "opacity": r.get("opacity", "100"),
                "isImage": r.get("isImage", False),
            }
        )

    duration_ms = int((last_ts - first_ts).total_seconds() * 1000)

    response_data = {
        "version": 1,
        "duration_ms": duration_ms,
        "count": len(timeline),
        "records": timeline,
    }

    # Return as downloadable JSON file
    response = make_response(json.dumps(response_data, ensure_ascii=False, indent=2))
    response.headers["Content-Type"] = "application/json"
    response.headers["Content-Disposition"] = f"attachment; filename=danmu-timeline-{hours}h.json"
    return response


@admin_bp.route("/sessions", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def list_sessions():
    """Return danmu sessions derived from history.

    A "session" is a contiguous block of activity with no gap > 30 min.
    Sessions are sorted newest-first. Includes per-session stats.
    """
    hours = _clamp_hours(request.args.get("hours", 168, type=int))

    if not history_service.danmu_history:
        return _json_response({"sessions": [], "total": 0, "contract": _gap_contract()})

    records = history_service.danmu_history.get_recent(hours=hours, limit=10000)
    sessions = _derive_sessions(records, gap_minutes=30)
    return _json_response({"sessions": sessions, "total": len(sessions), "contract": _gap_contract()})


@admin_bp.route("/sessions/<session_id>", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_session(session_id):
    """Return detailed data for one session (records + density histogram)."""
    hours = _clamp_hours(request.args.get("hours", 168, type=int))

    if not history_service.danmu_history:
        return _json_response({"error": "No history", "contract": _gap_contract()}, 404)

    all_records = history_service.danmu_history.get_recent(hours=hours, limit=10000)
    sessions = _derive_sessions(all_records, gap_minutes=30)

    sess = next((s for s in sessions if s["id"] == session_id), None)
    if not sess:
        return _json_response({"error": "Session not found", "contract": _gap_contract()}, 404)

    # Collect this session's records (reversed so oldest-first for timeline)
    session_records = [r for r in reversed(all_records)
                       if sess["started_at"] <= r["timestamp"] <= sess["ended_at"]]

    # Build per-minute density (up to 120 minutes)
    density = _build_density(session_records, sess["started_at"])

    return _json_response({
        "session": sess,
        "records": session_records[:2000],
        "density": density,
        "contract": _gap_contract(),
    })


@admin_bp.route("/search", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def search_history():
    """Full-text search across danmu history.

    Query params:
      q         – search term (required, 1-100 chars)
      hours     – look-back window in hours (1-168, default 168)
      limit     – max results (1-500, default 200)
      status    – comma-list of: shown, pinned, masked, blocked
    """
    q = (request.args.get("q") or "").strip()
    if not q or len(q) > 100:
        return _json_response({"error": "q must be 1-100 characters", "contract": _gap_contract()}, 400)

    hours = _clamp_hours(request.args.get("hours", 168, type=int))
    limit = max(1, min(request.args.get("limit", 200, type=int), 500))

    if not history_service.danmu_history:
        return _json_response({"results": [], "total": 0, "query": q, "contract": _gap_contract()})

    records = history_service.danmu_history.get_recent(hours=hours, limit=5000)

    q_lower = q.lower()
    results = []
    for r in records:
        text = r.get("text", "")
        nick = r.get("nickname", "") or ""
        fp = r.get("fingerprint", "") or ""
        if q_lower in text.lower() or q_lower in nick.lower() or q_lower in fp.lower():
            results.append({**r, "_match": "text" if q_lower in text.lower() else "meta"})
        if len(results) >= limit:
            break

    return _json_response({"results": results, "total": len(results), "query": q, "contract": _gap_contract()})


# ---------------------------------------------------------------------------
# Private helpers
# ---------------------------------------------------------------------------

def _parse_ts(ts_str: str):
    if ts_str.endswith("Z"):
        ts_str = ts_str.replace("Z", "+00:00")
    return datetime.fromisoformat(ts_str)


def _derive_sessions(records, gap_minutes=30):
    """Group records into sessions by time gap. Returns newest-first list."""
    if not records:
        return []

    import hashlib

    gap_secs = gap_minutes * 60
    # records are newest-first; reverse to oldest-first for grouping
    chronological = list(reversed(records))

    sessions = []
    current = [chronological[0]]

    for r in chronological[1:]:
        prev_ts = _parse_ts(current[-1]["timestamp"])
        this_ts = _parse_ts(r["timestamp"])
        if (this_ts - prev_ts).total_seconds() > gap_secs:
            sessions.append(_session_from_records(current, hashlib))
            current = [r]
        else:
            current.append(r)
    if current:
        sessions.append(_session_from_records(current, hashlib))

    sessions.sort(key=lambda s: s["started_at"], reverse=True)
    return sessions


def _session_from_records(records, hashlib):
    """Compute session metadata from a group of records."""
    started_at = records[0]["timestamp"]
    ended_at = records[-1]["timestamp"]
    duration_s = int((_parse_ts(ended_at) - _parse_ts(started_at)).total_seconds())

    # Deterministic ID from start time
    sid = "sess_" + hashlib.md5(started_at.encode()).hexdigest()[:8]

    # Per-minute activity sparkline (max 60 points)
    start_dt = _parse_ts(started_at)
    buckets: dict = {}
    for r in records:
        minute = int((_parse_ts(r["timestamp"]) - start_dt).total_seconds() // 60)
        buckets[minute] = buckets.get(minute, 0) + 1
    total_minutes = max(buckets.keys()) + 1 if buckets else 1
    step = max(1, total_minutes // 60)
    sparkline = []
    for i in range(0, total_minutes, step):
        sparkline.append(sum(buckets.get(i + j, 0) for j in range(step)))

    # Unique fingerprints = viewer count estimate
    viewers = len({r.get("fingerprint") for r in records if r.get("fingerprint")})

    return {
        "id": sid,
        "started_at": started_at,
        "ended_at": ended_at,
        "duration_s": duration_s,
        "msg_count": len(records),
        "viewer_count": viewers,
        "sparkline": sparkline[:60],
        "is_live": False,
    }


def _build_density(records, started_at: str):
    """Build per-minute density array for session detail view."""
    if not records:
        return []
    start_dt = _parse_ts(started_at)
    buckets: dict = {}
    for r in records:
        minute = int((_parse_ts(r["timestamp"]) - start_dt).total_seconds() // 60)
        buckets[minute] = buckets.get(minute, 0) + 1
    if not buckets:
        return []
    max_min = max(buckets.keys())
    return [buckets.get(i, 0) for i in range(max_min + 1)]


@admin_bp.route("/history/clear", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def clear_danmu_history():
    try:
        if history_service.danmu_history:
            history_service.danmu_history.clear()
        current_app.logger.info("Danmu history cleared by admin")
        return _json_response({"message": "History cleared"})
    except Exception as exc:
        current_app.logger.error("Error clearing danmu history: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "An internal error has occurred"}, 500)
