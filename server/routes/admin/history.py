"""Danmu history, stats, and export routes."""

import csv
import io
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


def _parse_ts(ts_str):
    if ts_str.endswith("Z"):
        ts_str = ts_str.replace("Z", "+00:00")
    return datetime.fromisoformat(ts_str)


def _history_timeline(records):
    if not records:
        return {"version": 1, "duration_ms": 0, "count": 0, "records": []}

    # Records are sorted newest-first by get_records, reverse for timeline.
    sorted_records = list(reversed(records))
    first_ts = _parse_ts(sorted_records[0]["timestamp"])
    last_ts = _parse_ts(sorted_records[-1]["timestamp"])

    timeline = []
    for r in sorted_records:
        ts = _parse_ts(r["timestamp"])
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

    return {
        "version": 1,
        "duration_ms": int((last_ts - first_ts).total_seconds() * 1000),
        "count": len(timeline),
        "records": timeline,
    }


def _download_response(body, content_type, filename):
    response = make_response(body)
    response.headers["Content-Type"] = content_type
    response.headers["Content-Disposition"] = f"attachment; filename={filename}"
    return response


def _timeline_to_csv(timeline):
    out = io.StringIO()
    fieldnames = ["offset_ms", "text", "color", "size", "speed", "opacity", "isImage"]
    writer = csv.DictWriter(out, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    writer.writerows(timeline["records"])
    return out.getvalue()


def _srt_time(offset_ms):
    total_ms = max(0, int(offset_ms))
    hours, rem = divmod(total_ms, 3600000)
    minutes, rem = divmod(rem, 60000)
    seconds, millis = divmod(rem, 1000)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d},{millis:03d}"


def _timeline_to_srt(timeline):
    lines = []
    records = timeline["records"]
    for idx, rec in enumerate(records, start=1):
        start = int(rec["offset_ms"])
        next_start = int(records[idx]["offset_ms"]) if idx < len(records) else start + 3000
        end = next_start if next_start > start else start + 3000
        text = str(rec.get("text") or "[image]").replace("\r", " ").replace("\n", " ")
        lines.extend([str(idx), f"{_srt_time(start)} --> {_srt_time(end)}", text, ""])
    return "\n".join(lines)


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
    """Export danmu history as JSON, CSV, or SRT timeline."""
    hours = request.args.get("hours", 24, type=int)
    hours = _clamp_hours(hours)
    fmt = (request.args.get("format") or "json").strip().lower()
    if fmt not in {"json", "csv", "srt"}:
        return _json_response({"error": "Unsupported export format"}, 400)

    records = (
        history_service.danmu_history.get_recent(hours=hours, limit=10000)
        if history_service.danmu_history
        else []
    )
    response_data = _history_timeline(records)

    if fmt == "csv":
        return _download_response(
            _timeline_to_csv(response_data),
            "text/csv; charset=utf-8",
            f"danmu-timeline-{hours}h.csv",
        )
    if fmt == "srt":
        return _download_response(
            _timeline_to_srt(response_data),
            "application/x-subrip; charset=utf-8",
            f"danmu-timeline-{hours}h.srt",
        )
    return _download_response(
        json.dumps(response_data, ensure_ascii=False, indent=2),
        "application/json",
        f"danmu-timeline-{hours}h.json",
    )


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
    return _json_response(
        {"sessions": sessions, "total": len(sessions), "contract": _gap_contract()}
    )


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
    session_records = [
        r for r in reversed(all_records) if sess["started_at"] <= r["timestamp"] <= sess["ended_at"]
    ]

    # Build per-minute density (up to 120 minutes)
    density = _build_density(session_records, sess["started_at"])

    return _json_response(
        {
            "session": sess,
            "records": session_records[:2000],
            "density": density,
            "contract": _gap_contract(),
        }
    )


@admin_bp.route("/search", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def search_history():
    """Full-text search across danmu history.

    Query params:
      q         – search term (required, 1-100 chars)
      hours     – look-back window in hours (1-168, default 168);
                  ignored when `since` is provided.
      since     – ISO 8601 timestamp (UTC). Overrides `hours`.
      until     – ISO 8601 timestamp (UTC). Optional upper bound.
      type      – "text" or "image" — filter by isImage flag.
      fp        – exact fingerprint match (substring elsewhere → use this
                  for "show me everything from this client").
      status    – comma-list of: shown, pinned, masked, blocked.
                  Records carry an optional `status` field (default "shown");
                  unknown statuses are dropped from the filter set.
      limit     – max results (1-500, default 200)
    """
    q = (request.args.get("q") or "").strip()
    if not q or len(q) > 100:
        return _json_response(
            {"error": "q must be 1-100 characters", "contract": _gap_contract()}, 400
        )

    # ── Custom date range (overrides hours when provided) ───────────────
    since_ts = (request.args.get("since") or "").strip()
    until_ts = (request.args.get("until") or "").strip()
    since_dt = until_dt = None
    if since_ts:
        try:
            since_dt = _parse_ts(since_ts)
        except ValueError:
            return _json_response(
                {"error": "since must be ISO 8601", "contract": _gap_contract()}, 400
            )
    if until_ts:
        try:
            until_dt = _parse_ts(until_ts)
        except ValueError:
            return _json_response(
                {"error": "until must be ISO 8601", "contract": _gap_contract()}, 400
            )
    if since_dt and until_dt and since_dt >= until_dt:
        return _json_response(
            {"error": "since must be before until", "contract": _gap_contract()}, 400
        )

    hours = _clamp_hours(request.args.get("hours", 168, type=int))
    limit = max(1, min(request.args.get("limit", 200, type=int), 500))

    # type=text|image — None means no filter.
    type_filter = (request.args.get("type") or "").strip().lower()
    if type_filter and type_filter not in ("text", "image"):
        return _json_response(
            {"error": "type must be 'text' or 'image'", "contract": _gap_contract()}, 400
        )

    fp_filter = (request.args.get("fp") or "").strip()

    # status=shown,pinned,... — empty set means no filter.
    _VALID_STATUSES = {"shown", "pinned", "masked", "blocked"}
    raw_status = (request.args.get("status") or "").strip()
    status_filter = (
        {s.strip() for s in raw_status.split(",") if s.strip() in _VALID_STATUSES}
        if raw_status
        else set()
    )

    # Shared `filters` envelope — emitted by both the empty-history
    # short-circuit and the normal response path so the FE can rely on
    # a stable schema regardless of which branch handled the request.
    filters_envelope = {
        "since": since_dt.isoformat() if since_dt else None,
        "until": until_dt.isoformat() if until_dt else None,
        "type": type_filter or None,
        "fp": fp_filter or None,
        "status": sorted(status_filter) or None,
    }

    if not history_service.danmu_history:
        return _json_response(
            {
                "results": [],
                "total": 0,
                "query": q,
                "filters": filters_envelope,
                "contract": _gap_contract(),
            }
        )

    # When since/until provided, query the underlying record store with the
    # explicit range (covers cases beyond the 168-hour ceiling). Otherwise
    # fall back to the hours-based recent window.
    if since_dt or until_dt:
        records = history_service.danmu_history.get_records(
            start_time=since_dt, end_time=until_dt, limit=5000
        )
    else:
        records = history_service.danmu_history.get_recent(hours=hours, limit=5000)

    q_lower = q.lower()
    results = []
    for r in records:
        # status: default "shown" so older records (no status field) still
        # pass when no explicit status filter is set OR when "shown" is
        # included in the requested status set.
        rec_status = r.get("status") or "shown"
        if status_filter and rec_status not in status_filter:
            continue

        # type filter — isImage truthy → "image", else "text"
        if type_filter:
            is_image = bool(r.get("isImage"))
            if type_filter == "image" and not is_image:
                continue
            if type_filter == "text" and is_image:
                continue

        # fp filter — exact match (we already substring-search via `q`)
        if fp_filter and r.get("fingerprint") != fp_filter:
            continue

        text = r.get("text", "")
        nick = r.get("nickname", "") or ""
        fp = r.get("fingerprint", "") or ""
        if q_lower in text.lower() or q_lower in nick.lower() or q_lower in fp.lower():
            results.append({**r, "_match": "text" if q_lower in text.lower() else "meta"})
        if len(results) >= limit:
            break

    return _json_response(
        {
            "results": results,
            "total": len(results),
            "query": q,
            "filters": filters_envelope,
            "contract": _gap_contract(),
        }
    )


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
