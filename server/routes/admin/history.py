"""Danmu history, stats, and export routes."""

import json
from datetime import datetime

from flask import current_app, make_response, request

from ...services import history as history_service
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login, sanitize_log_string


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
