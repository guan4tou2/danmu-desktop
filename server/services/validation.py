"""輸入驗證服務"""

import re as _re

from marshmallow import (
    EXCLUDE,
    Schema,
    ValidationError,
    fields,
    validate,
    validates,
    validates_schema,
)

from ..config import Config

_VALID_SETTING_TYPES = Config.SETTABLE_OPTION_KEYS
_NO_CTRL_CHARS_RE = r"^[^\r\n\t\x00-\x08\x0b\x0c\x0e-\x1f]+$"


class FireRequestSchema(Schema):
    """彈幕發送請求驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    isImage = fields.Bool(load_default=False)
    fontInfo = fields.Dict(load_default=None)
    font = fields.Str(load_default=None, validate=validate.Length(max=100))
    # effects：支援多個特效疊加，每個特效可攜帶參數
    effects = fields.List(fields.Dict(), load_default=[])
    color = fields.Str(
        load_default=None,
        validate=validate.Regexp(r"^#?[0-9a-fA-F]{6}$", error="Invalid hex color"),
    )
    opacity = fields.Int(load_default=None, validate=validate.Range(min=0, max=100))
    size = fields.Int(load_default=None, validate=validate.Range(min=1, max=200))
    speed = fields.Int(load_default=None, validate=validate.Range(min=1, max=10))
    fingerprint = fields.Str(load_default=None, validate=validate.Length(max=128))
    nickname = fields.Str(load_default=None, validate=validate.Length(max=20))
    layout = fields.Str(
        load_default=None,
        validate=validate.OneOf(
            ["scroll", "top_fixed", "bottom_fixed", "float", "rise"],
            error="Invalid layout mode.",
        ),
    )

    @validates("effects")
    def validate_effects(self, value, **kwargs):
        _SAFE_NAME = _re.compile(r"^[a-zA-Z0-9_-]{1,128}$")
        for item in value:
            name = item.get("name", "")
            if not isinstance(name, str) or not _SAFE_NAME.match(name):
                raise ValidationError(
                    "Effect name must be 1-128 alphanumeric/hyphen/underscore chars"
                )

    class Meta:
        unknown = EXCLUDE


class BlacklistCheckSchema(Schema):
    """黑名單檢查請求驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=1000))


class BlacklistKeywordSchema(Schema):
    """黑名單關鍵字新增/移除請求驗證"""

    keyword = fields.Str(
        required=True,
        validate=[
            validate.Length(min=1, max=200),
            validate.Regexp(
                _NO_CTRL_CHARS_RE,
                error="Keyword cannot contain control characters.",
            ),
        ],
    )


class EffectDeleteSchema(Schema):
    name = fields.Str(
        required=True,
        validate=[
            validate.Length(min=1, max=128),
            validate.Regexp(_NO_CTRL_CHARS_RE, error="Name cannot contain control characters."),
        ],
    )


class EffectSaveSchema(Schema):
    name = fields.Str(
        required=True,
        validate=[
            validate.Length(min=1, max=128),
            validate.Regexp(_NO_CTRL_CHARS_RE, error="Name cannot contain control characters."),
        ],
    )
    content = fields.Str(
        required=True,
        validate=[
            validate.Length(min=1, max=65535),
        ],
    )


class PollCreateSchema(Schema):
    """投票建立請求驗證"""

    question = fields.Str(required=True, validate=validate.Length(min=1, max=200))
    options = fields.List(
        fields.Str(validate=validate.Length(min=1, max=100)),
        required=True,
        validate=validate.Length(min=2, max=6),
    )


class SettingUpdateSchema(Schema):
    """設定更新請求驗證"""

    type = fields.Str(
        required=True,
        validate=validate.OneOf(
            _VALID_SETTING_TYPES,
            error="Unknown setting type.",
        ),
    )
    value = fields.Raw(required=True, metadata={"max_bytes": 4096})
    index = fields.Int(required=True, validate=validate.Range(min=0, max=3))

    @validates("value")
    def validate_value_size(self, value, **kwargs):
        import json as _json

        try:
            serialized = _json.dumps(value)
        except Exception:
            raise ValidationError("Value must be JSON-serializable.")
        if len(serialized) > 4096:
            raise ValidationError("Value exceeds maximum allowed size.")


class ToggleSettingSchema(Schema):
    """開關設定請求驗證"""

    key = fields.Str(
        required=True,
        validate=validate.OneOf(
            _VALID_SETTING_TYPES,
            error="Unknown setting key.",
        ),
    )
    enabled = fields.Bool(required=True)


class SchedulerMessageSchema(Schema):
    """排程訊息驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    color = fields.Str(
        load_default=None,
        validate=validate.Regexp(r"^#?[0-9a-fA-F]{6}$", error="Invalid hex color"),
    )
    size = fields.Int(load_default=None, validate=validate.Range(min=1, max=200))
    speed = fields.Int(load_default=None, validate=validate.Range(min=1, max=10))
    opacity = fields.Int(load_default=None, validate=validate.Range(min=0, max=100))

    class Meta:
        unknown = EXCLUDE


class SchedulerCreateSchema(Schema):
    """排程建立請求驗證"""

    messages = fields.List(
        fields.Nested(SchedulerMessageSchema),
        required=True,
        validate=validate.Length(min=1, max=50),
    )
    interval_sec = fields.Float(
        required=True,
        validate=validate.Range(min=1, max=3600),
    )
    repeat_count = fields.Int(load_default=-1, validate=validate.Range(min=-1, max=10000))
    start_delay = fields.Float(load_default=0, validate=validate.Range(min=0, max=3600))


def _safe_compile_regex(pattern: str) -> None:
    """Attempt to compile a regex; raise ValidationError if it's invalid or dangerous."""
    try:
        compiled = _re.compile(pattern, _re.IGNORECASE)
    except _re.error as exc:
        raise ValidationError(f"Invalid regex: {exc}")
    # Heuristic ReDoS guard: reject patterns with nested quantifiers on groups/chars
    dangerous = _re.search(r"(\([^)]*\)[+*?{].*[+*?{]|\[[^\]]*\][+*?{].*[+*?{])", pattern)
    if dangerous:
        raise ValidationError("Regex pattern may cause catastrophic backtracking.")
    # Test against a short safe input to catch simple ReDoS patterns
    try:
        compiled.match("a" * 50)
    except Exception:
        raise ValidationError("Regex pattern failed safety check.")


class FilterRuleSchema(Schema):
    """過濾規則請求驗證"""

    type = fields.Str(
        required=True,
        validate=validate.OneOf(
            ["keyword", "regex", "replace", "rate_limit"],
            error="Unknown filter type.",
        ),
    )
    pattern = fields.Str(required=True, validate=validate.Length(min=1, max=500))
    replacement = fields.Str(load_default="***", validate=validate.Length(max=200))
    action = fields.Str(
        load_default="block",
        validate=validate.OneOf(["block", "replace", "allow"]),
    )
    priority = fields.Int(load_default=100, validate=validate.Range(min=0, max=9999))
    enabled = fields.Bool(load_default=True)
    # rate_limit specific
    max_count = fields.Int(load_default=5, validate=validate.Range(min=1, max=100))
    window_sec = fields.Float(load_default=60, validate=validate.Range(min=1, max=3600))

    @validates_schema
    def validate_pattern_safe(self, data, **kwargs):
        if data.get("type") in ("regex", "replace") and data.get("pattern"):
            _safe_compile_regex(data["pattern"])


class FilterRuleUpdateSchema(FilterRuleSchema):
    """過濾規則更新驗證（所有欄位為可選，繼承自 FilterRuleSchema）"""

    class Meta:
        unknown = EXCLUDE

    # Override all fields to be optional (remove required=True and load_default)
    type = fields.Str(
        validate=validate.OneOf(
            ["keyword", "regex", "replace", "rate_limit"],
            error="Unknown filter type.",
        ),
    )
    pattern = fields.Str(validate=validate.Length(min=1, max=500))
    replacement = fields.Str(validate=validate.Length(max=200))
    action = fields.Str(validate=validate.OneOf(["block", "replace", "allow"]))
    priority = fields.Int(validate=validate.Range(min=0, max=9999))
    enabled = fields.Bool()
    max_count = fields.Int(validate=validate.Range(min=1, max=100))
    window_sec = fields.Float(validate=validate.Range(min=1, max=3600))


class WebhookSchema(Schema):
    """Webhook 註冊請求驗證"""

    url = fields.Url(required=True)
    events = fields.List(
        fields.Str(
            validate=validate.OneOf(
                ["on_danmu", "on_poll_create", "on_poll_end", "on_connect", "on_disconnect"],
            )
        ),
        required=True,
        validate=validate.Length(min=1, max=5),
    )
    format = fields.Str(
        load_default="json",
        validate=validate.OneOf(["json", "discord", "slack"]),
    )
    secret = fields.Str(load_default="", validate=validate.Length(max=256))
    enabled = fields.Bool(load_default=True)


class SoundRuleSchema(Schema):
    """音效規則請求驗證"""

    trigger_type = fields.Str(
        required=True,
        validate=validate.OneOf(["keyword", "effect", "all"]),
    )
    trigger_value = fields.Str(load_default="", validate=validate.Length(max=200))
    sound_name = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    volume = fields.Float(load_default=1.0, validate=validate.Range(min=0, max=1))
    cooldown_ms = fields.Int(load_default=1000, validate=validate.Range(min=0, max=60000))


class OnscreenLimitsSchema(Schema):
    """Admin onscreen-danmu traffic-shaper settings."""

    class Meta:
        unknown = EXCLUDE

    max_onscreen_danmu = fields.Int(required=True, validate=validate.Range(min=0, max=200))
    overflow_mode = fields.Str(
        required=True,
        validate=validate.OneOf(
            ["drop", "queue"],
            error="overflow_mode must be 'drop' or 'queue'",
        ),
    )


class WsAuthSchema(Schema):
    """Admin WebSocket auth toggle request.

    Token validation: we constrain to printable ASCII and length 12-128 so
    admins can't accidentally persist whitespace-only or overly long
    strings that some WS URL parsers choke on. `require_token=True` with an
    empty token is caught at the service boundary (set_state raises), but
    we reject it earlier here so the admin gets a clean validation error.
    """

    class Meta:
        unknown = EXCLUDE

    require_token = fields.Bool(required=True)
    # Token rules:
    #   * 0 chars OR 12-128 chars (0 only when require_token=False)
    #   * URL-safe characters only — NO '+' because URL-encoded query strings
    #     decode '+' to a literal space, which then fails the server-side
    #     secrets.compare_digest() when the admin pastes it into Electron.
    #     (Keep '-' and '_' which secrets.token_urlsafe() actually produces.)
    token = fields.Str(
        load_default="",
        validate=validate.Regexp(
            r"^(|[A-Za-z0-9._~/=\-]{12,128})$",
            error="token must be empty or 12-128 chars of URL-safe characters",
        ),
    )

    @validates_schema
    def _require_token_when_enabled(self, data, **kwargs):
        if data.get("require_token") and not (data.get("token") or "").strip():
            raise ValidationError({"token": "token is required when require_token=True"})


def validate_request(schema_class, data):
    """驗證請求資料"""
    try:
        schema = schema_class()
        return schema.load(data), None
    except ValidationError as err:
        return None, err.messages
