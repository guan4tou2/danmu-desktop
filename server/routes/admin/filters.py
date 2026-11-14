"""封鎖規則 API（後台「封鎖字」頁的清單）。

驗證只有一處：FilterEngine._validate（裡面用 validation.FilterRuleSchema）。新增、
更新、測試都走它，這一層只負責 HTTP 形狀與錯誤格式。
"""

from flask import request

from ...services.filter_engine import RuleSaveError, RuleValidationError
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


def _engine():
    from ...services.filter_engine import filter_engine

    return filter_engine


def _invalid(err: RuleValidationError, legacy_shape: bool = False):
    # 舊的更新端點回的是 {"error": {...逐欄位...}}，新增端點是
    # {"error": "Validation failed", "details": {...}}；兩種形狀都保留，另外帶 code
    # 讓後台挑翻譯文案（伺服器的英文訊息不直接顯示給主持人）。
    if legacy_shape:
        return _json_response({"error": err.details, "code": err.code}, 400)
    return _json_response(
        {
            "error": "Validation failed",
            "message": str(err),
            "code": err.code,
            "details": err.details,
        },
        400,
    )


def _not_saved(err: RuleSaveError):
    # 規則檔寫不進去：這次的改動沒有生效，要讓後台知道，不能回 200。
    return _json_response({"error": str(err), "code": err.code}, 500)


@admin_bp.route("/filters/add", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def add_filter_rule():
    data = request.get_json(silent=True) or {}
    if not isinstance(data, dict):
        return _json_response({"error": "Validation failed"}, 400)
    try:
        rule_id = _engine().add_rule(data)
        return _json_response({"rule_id": rule_id})
    except RuleValidationError as e:
        return _invalid(e)
    except RuleSaveError as e:
        return _not_saved(e)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/remove", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def remove_filter_rule():
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "") if isinstance(data, dict) else ""
    try:
        removed = _engine().remove_rule(rule_id)
    except RuleSaveError as e:
        return _not_saved(e)
    if removed:
        return _json_response({"message": "Rule removed"})
    return _json_response({"error": "Rule not found"}, 404)


@admin_bp.route("/filters/update", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def update_filter_rule():
    data = request.get_json(silent=True) or {}
    rule_id = data.get("rule_id", "") if isinstance(data, dict) else ""
    updates = data.get("updates", {}) if isinstance(data, dict) else None
    if not rule_id or not isinstance(updates, dict):
        return _json_response({"error": "Missing rule_id or updates"}, 400)

    try:
        if _engine().update_rule(rule_id, updates):
            return _json_response({"message": "Rule updated"})
        return _json_response({"error": "Rule not found"}, 404)
    except RuleValidationError as e:
        return _invalid(e, legacy_shape=True)
    except RuleSaveError as e:
        return _not_saved(e)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/list", methods=["GET"])
@require_login
def list_filter_rules():
    from ...services import session_service

    # session_live：沒有進行中的場次時，後台不提供「到本場次結束」這個期限。
    return _json_response(
        {"rules": _engine().list_rules(), "session_live": session_service.is_live()}
    )


@admin_bp.route("/filters/clear-session", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def clear_session_filter_rules():
    """移除所有「到本場次結束」的規則（場次結束時也會自動做一次）。"""
    try:
        return _json_response({"removed": _engine().clear_session_rules()})
    except RuleSaveError as e:
        return _not_saved(e)


@admin_bp.route("/filters/test", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def test_filter_rule():
    """Test if a filter rule matches sample text."""
    data = request.get_json(silent=True) or {}
    rule_data = data.get("rule", {}) if isinstance(data, dict) else {}
    sample_text = data.get("text", "") if isinstance(data, dict) else ""
    if not isinstance(rule_data, dict) or not isinstance(sample_text, str):
        return _json_response({"error": "Validation failed"}, 400)

    try:
        result = _engine().test_rule(rule_data, sample_text)
        return _json_response(
            {
                "action": result.action,
                "text": result.text,
                "reason": result.reason,
            }
        )
    except RuleValidationError as e:
        return _json_response({"error": str(e), "code": e.code}, 400)
    except ValueError as e:
        return _json_response({"error": str(e)}, 400)


@admin_bp.route("/filters/events", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def get_filter_events():
    """Recent filter match events (block / mask / replace / allow).

    Powers the 命中紀錄 fold on the block-rule list. Caller passes ``?since=<seq>``
    to get only newer events; first call should pass 0 (or omit) to fetch
    the latest 50. Response also includes ``counts_24h`` (notifications use it).
    """
    from ...services import filter_events

    try:
        since = int(request.args.get("since", "0") or 0)
    except (TypeError, ValueError):
        since = 0
    try:
        limit = max(1, min(200, int(request.args.get("limit", "50") or 50)))
    except (TypeError, ValueError):
        limit = 50
    events = filter_events.recent(since=since, limit=limit)
    latest_seq = events[0]["seq"] if events else since
    return _json_response(
        {
            "events": events,
            "latest_seq": latest_seq,
            "counts_24h": filter_events.counts_24h(),
        }
    )
