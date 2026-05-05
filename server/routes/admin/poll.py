"""Poll API routes.

P0-1 (v5) — multi-question polls. The existing single-question
``POST /admin/poll/create`` shape is preserved (admin-poll.js v4 still posts
``{question, options}``); the route now also accepts the new multi-question
shape ``{questions: [...]}``. Image upload and per-question advance use new
dedicated endpoints.
"""

import re
from pathlib import Path

import magic
from flask import current_app, request, send_from_directory

from ...services.poll import poll_service
from ...services.security import rate_limit
from ...services.validation import (
    PollCreateSchema,
    PollSessionCreateSchema,
    validate_request,
)
from ...utils import sanitize_log_string
from . import _json_response, admin_bp, require_csrf, require_login

# ─── Image upload constants ────────────────────────────────────────────────

POLL_MEDIA_DIR = Path(__file__).resolve().parents[2] / "runtime" / "polls"
_POLL_IMG_MAX_SIZE = 2 * 1024 * 1024  # 2 MB
_POLL_IMG_ALLOWED_MIME = {"image/jpeg", "image/png", "image/webp"}
_POLL_IMG_EXT_BY_MIME = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
}
# uuid4 hex slice = 8 chars; q_id has prefix `q_` then 8 chars; poll_id is bare
# 8 hex chars. Allow either by restricting to the safe set we generate.
_POLL_ID_RE = re.compile(r"^[a-f0-9]{8}$")
_QUESTION_ID_RE = re.compile(r"^q_[a-f0-9]{8}$")


# ─── Routes ─────────────────────────────────────────────────────────────────


@admin_bp.route("/poll/create", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def create_poll():
    """Create a new poll.

    Two payload shapes are accepted:

    1. **Legacy** ``{question, options}`` — auto-creates a 1-question session
       and starts it (matches v4 admin UI behaviour).
    2. **Multi-question** ``{questions: [{text, options, image_url?,
       time_limit_seconds?}]}`` — builds the session in pending state. The
       admin should follow up with ``POST /admin/poll/start`` to begin
       accepting votes.
    """
    data = request.get_json(silent=True) or {}

    # Multi-question shape takes precedence when "questions" key is present.
    if "questions" in data:
        validated, errors = validate_request(PollSessionCreateSchema, data)
        if errors:
            return _json_response({"error": "Validation failed", "details": errors}, 400)
        try:
            status = poll_service.create_session(validated["questions"])
            return _json_response({"poll_id": status["poll_id"], **status})
        except ValueError as exc:
            return _json_response({"error": str(exc)}, 409)

    # Legacy single-question shape.
    validated, errors = validate_request(PollCreateSchema, data)
    if errors:
        return _json_response({"error": "Validation failed", "details": errors}, 400)
    try:
        poll_id = poll_service.create(validated["question"], validated["options"])
        return _json_response({"poll_id": poll_id, **poll_service.get_status()})
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 409)


@admin_bp.route("/poll/start", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def start_poll():
    """Flip ``active=True`` and ``current_index=0`` on a pending session."""
    try:
        return _json_response(poll_service.start())
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 409)


@admin_bp.route("/poll/advance", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def advance_poll():
    """Move to the next question. Returns updated status."""
    try:
        return _json_response(poll_service.advance())
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 409)


@admin_bp.route("/poll/end", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def end_poll():
    """End the active poll."""
    poll_service.end()
    return _json_response(poll_service.get_status())


@admin_bp.route("/poll/reset", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reset_poll():
    """Reset the poll."""
    poll_service.reset()
    return _json_response({"state": "idle"})


@admin_bp.route("/poll/status", methods=["GET"])
@require_login
def get_poll_status():
    """Get poll status."""
    return _json_response(poll_service.get_status())


# ─── Per-question image upload ─────────────────────────────────────────────


@admin_bp.route(
    "/poll/<poll_id>/upload-image/<question_id>",
    methods=["POST"],
)
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_poll_image(poll_id: str, question_id: str):
    """Attach an image to a single question.

    Body: multipart/form-data with ``file`` field. ≤2 MB, JPG/PNG/WebP only,
    magic-byte verified. Stored under ``server/runtime/polls/<poll_id>/
    <question_id>.<ext>`` and exposed at ``/polls/media/<poll_id>/...``.
    """
    if not _POLL_ID_RE.match(poll_id):
        return _json_response({"error": "Invalid poll_id"}, 400)
    if not _QUESTION_ID_RE.match(question_id):
        return _json_response({"error": "Invalid question_id"}, 400)

    file = request.files.get("file")
    if not file or not file.filename:
        return _json_response({"error": "No file provided"}, 400)

    file_bytes = file.read()
    if not file_bytes:
        return _json_response({"error": "Empty file"}, 400)
    if len(file_bytes) > _POLL_IMG_MAX_SIZE:
        return _json_response({"error": "File too large (max 2MB)"}, 413)

    actual_mime = magic.from_buffer(file_bytes[:2048], mime=True)
    if actual_mime not in _POLL_IMG_ALLOWED_MIME:
        return _json_response(
            {"error": f"Invalid file content type: {actual_mime}"},
            400,
        )
    ext = _POLL_IMG_EXT_BY_MIME[actual_mime]

    poll_dir = POLL_MEDIA_DIR / poll_id
    # Path-traversal guard: resolve and assert containment under POLL_MEDIA_DIR.
    try:
        resolved_dir = poll_dir.resolve()
        resolved_dir.relative_to(POLL_MEDIA_DIR.resolve())
    except (ValueError, RuntimeError):
        return _json_response({"error": "Invalid path"}, 400)

    # Remove any prior image for this question (different ext).
    poll_dir.mkdir(parents=True, exist_ok=True)
    for old in poll_dir.glob(f"{question_id}.*"):
        try:
            old.unlink()
        except OSError:
            pass

    dest = poll_dir / f"{question_id}.{ext}"
    try:
        dest.write_bytes(file_bytes)
    except OSError as exc:
        current_app.logger.error("Failed to save poll image: %s", sanitize_log_string(str(exc)))
        return _json_response({"error": "Failed to save image"}, 500)

    image_url = f"/polls/media/{poll_id}/{question_id}.{ext}"
    # Update service if the poll session is still in memory; otherwise just
    # return the URL — the admin client may have local-only state.
    try:
        poll_service.attach_image(poll_id, question_id, image_url)
    except ValueError:
        # Poll/question may not be alive in the service yet (e.g. uploading
        # before /admin/poll/create). The URL is still valid for client use.
        pass

    current_app.logger.info(
        "Poll image uploaded: %s/%s",
        sanitize_log_string(poll_id),
        sanitize_log_string(question_id),
    )
    return _json_response({"image_url": image_url})


# ─── Static media serving ──────────────────────────────────────────────────


@admin_bp.route("/poll/media-base", methods=["GET"])
@require_login
def poll_media_base():
    """Tiny helper so the admin client can probe storage path during tests."""
    return _json_response({"base": str(POLL_MEDIA_DIR)})


def _safe_send_poll_media(rel_path: str):
    """Path-traversal-guarded media response.

    Used by the public-facing route registered in ``main.py``. Implemented
    here so the validation logic lives next to the upload writer.
    """
    # Reject anything with embedded ``..`` segments, absolute paths, or
    # control-ish characters before touching the filesystem.
    if not rel_path or rel_path.startswith("/") or ".." in rel_path.split("/"):
        return _json_response({"error": "Not found"}, 404)
    target = (POLL_MEDIA_DIR / rel_path).resolve()
    try:
        target.relative_to(POLL_MEDIA_DIR.resolve())
    except (ValueError, RuntimeError):
        return _json_response({"error": "Not found"}, 404)
    if not target.is_file():
        return _json_response({"error": "Not found"}, 404)

    response = send_from_directory(
        POLL_MEDIA_DIR.resolve(),
        rel_path,
        max_age=3600,
    )
    response.headers["Cache-Control"] = "public, max-age=3600"
    return response
