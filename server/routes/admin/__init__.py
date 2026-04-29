"""Admin Blueprint package.

Splits the monolithic admin.py into domain-specific sub-modules.
Each sub-module registers its routes on the shared ``admin_bp`` Blueprint.
"""

import json
import re as _re

from flask import Blueprint, current_app, flash, render_template, request, session  # noqa: F401

from ...services import messaging
from ...services.blacklist import add_keyword, list_keywords  # noqa: F401
from ...services.security import rate_limit, require_csrf, require_login  # noqa: F401
from ...services.settings import get_options, get_setting_ranges  # noqa: F401
from ...services.validation import validate_request  # noqa: F401
from ...utils import allowed_file  # noqa: F401
from ...utils import json_response as _json_response  # noqa: F401
from ...utils import sanitize_log_string

# Shared constants
_STICKER_ALLOWED_MIME = {"image/gif", "image/png", "image/webp"}
_STICKER_MAX_SIZE = 2 * 1024 * 1024  # 2 MB
_STICKER_NAME_RE = _re.compile(r"^[a-zA-Z0-9_]{1,32}$")

# Blueprint
admin_bp = Blueprint("admin_bp", __name__, url_prefix="/admin")


def _broadcast_blacklist_update():
    """Push the current blacklist to all connected web clients."""
    try:
        notification = json.dumps({"type": "blacklist_update", "keywords": list_keywords()})
        messaging.send_message(notification)
    except Exception as exc:
        current_app.logger.warning(
            "Failed to broadcast blacklist update: %s", sanitize_log_string(str(exc))
        )


def _ensure_logged_in():
    """Check session login status (for dashboard view only)."""
    if not session.get("logged_in"):
        flash("Please log in first.")
        return False
    return True


# Import sub-modules to register their routes on admin_bp
from . import (  # noqa: E402, F401
    api_tokens,
    audit,
    blacklist,
    bootstrap,
    broadcast,
    dashboard,
    effects,
    emojis,
    filters,
    fingerprints,
    history,
    integrations,
    konami,
    live,
    metrics,
    plugins,
    poll,
    ratelimit,
    replay,
    scheduler,
    settings,
    sounds,
    stickers,
    themes,
    uploads,
    webhooks,
    widgets,
    ws_auth,
)
