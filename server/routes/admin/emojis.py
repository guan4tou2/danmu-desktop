"""Emoji API routes."""

import re
from collections import Counter

from flask import request

from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login

_SHORTCODE_RE = re.compile(r":([a-zA-Z0-9_]{1,32}):")

# 掃多久的歷史來算「用過幾次」。一週涵蓋得住一場活動的前後，再往前拉對
# 「這個表情有沒有人用」這個問題不會改變答案，卻要多掃很多列。
_USAGE_WINDOW_HOURS = 168


def _usage_counts():
    """Count ``:shortcode:`` occurrences in recent danmu.

    設計稿 08 · T2：表情卡上寫的是「用過 128 次」或「尚未使用」，不是
    「64×64 · 12KB」。尺寸與檔案大小是在描述檔案；主持人要決定的是「這個
    表情要不要留著」，而那只有使用次數能回答。

    次數是掃歷史算出來的，沒有另一份計數器要維護、也不會跟歷史對不起來。
    """
    from ...services import history as history_service

    counts = Counter()
    store = history_service.danmu_history
    if not store:
        return counts
    try:
        records = store.get_recent(hours=_USAGE_WINDOW_HOURS, limit=10000)
    except Exception:  # noqa: BLE001 - 統計壞掉不該讓整頁掛掉
        return counts
    for record in records:
        for name in _SHORTCODE_RE.findall(str(record.get("text") or "")):
            counts[name] += 1
    return counts


@admin_bp.route("/emojis/list", methods=["GET"])
@require_login
def list_emojis_admin():
    from ...services.emoji import emoji_service

    counts = _usage_counts()
    emojis = [dict(e, used=counts.get(e["name"], 0)) for e in emoji_service.list_emojis()]
    return _json_response({"emojis": emojis})


@admin_bp.route("/emojis/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_emoji():
    f = request.files.get("emojifile")
    if not f or f.filename == "":
        return _json_response({"error": "No file selected"}, 400)

    name = request.form.get("name", "").strip()
    if not name:
        return _json_response({"error": "Name required"}, 400)

    ext = f.filename.rsplit(".", 1)[-1].lower() if "." in f.filename else ""
    file_bytes = f.stream.read(1024 * 1024)  # 1MB max read

    from ...services.emoji import emoji_service

    if emoji_service.upload(name, file_bytes, ext):
        return _json_response({"message": f"Emoji ':{name}:' uploaded"})
    return _json_response({"error": "Upload failed (check format/size/name)"}, 400)


@admin_bp.route("/emojis/delete", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def delete_emoji():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.emoji import emoji_service

    if emoji_service.delete(name):
        return _json_response({"message": "Emoji deleted"})
    return _json_response({"error": "Emoji not found"}, 404)
