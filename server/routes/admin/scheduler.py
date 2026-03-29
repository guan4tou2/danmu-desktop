"""Scheduler API routes."""

from flask import request

from ...services.security import rate_limit
from ...services.validation import SchedulerCreateSchema, validate_request
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/scheduler/create", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_scheduled_job():
    """Create a scheduled job."""
    data = request.get_json(silent=True) or {}
    validated, errors = validate_request(SchedulerCreateSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    from ...services.scheduler import scheduler_service

    try:
        job_id = scheduler_service.create(
            messages=validated["messages"],
            interval_sec=validated["interval_sec"],
            repeat_count=validated.get("repeat_count", -1),
            start_delay=validated.get("start_delay", 0),
        )
        return _json_response({"job_id": job_id})
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/scheduler/cancel", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def cancel_scheduled_job():
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ...services.scheduler import scheduler_service

    if scheduler_service.cancel(job_id):
        return _json_response({"message": "Job cancelled"})
    return _json_response({"error": "Job not found"}, 404)


@admin_bp.route("/scheduler/pause", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def pause_scheduled_job():
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ...services.scheduler import scheduler_service

    if scheduler_service.pause(job_id):
        return _json_response({"message": "Job paused"})
    return _json_response({"error": "Job not found or not active"}, 400)


@admin_bp.route("/scheduler/resume", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def resume_scheduled_job():
    data = request.get_json(silent=True) or {}
    job_id = data.get("job_id", "")
    from ...services.scheduler import scheduler_service

    if scheduler_service.resume(job_id):
        return _json_response({"message": "Job resumed"})
    return _json_response({"error": "Job not found or not paused"}, 400)


@admin_bp.route("/scheduler/list", methods=["GET"])
@require_login
def list_scheduled_jobs():
    from ...services.scheduler import scheduler_service

    return _json_response({"jobs": scheduler_service.list_jobs()})
