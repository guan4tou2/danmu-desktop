"""輸入驗證服務"""

from marshmallow import EXCLUDE, Schema, ValidationError, fields, validate, validates

# Valid setting type keys (mirrors Config.SETTABLE_OPTION_KEYS)
_VALID_SETTING_TYPES = {
    "Color",
    "Opacity",
    "FontSize",
    "Speed",
    "FontFamily",
    "Effects",
    "Layout",
    "Nickname",
}
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
        for item in value:
            name = item.get("name", "")
            if not isinstance(name, str) or len(name) > 128:
                raise ValidationError("Effect name must be a string with max 128 chars")

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
    value = fields.Raw(required=True)
    index = fields.Int(required=True, validate=validate.Range(min=0, max=3))


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


class SchedulerCreateSchema(Schema):
    """排程建立請求驗證"""

    messages = fields.List(
        fields.Dict(),
        required=True,
        validate=validate.Length(min=1, max=50),
    )
    interval_sec = fields.Float(
        required=True,
        validate=validate.Range(min=1, max=3600),
    )
    repeat_count = fields.Int(load_default=-1, validate=validate.Range(min=-1, max=10000))
    start_delay = fields.Float(load_default=0, validate=validate.Range(min=0, max=3600))


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


class WebhookSchema(Schema):
    """Webhook 註冊請求驗證"""

    url = fields.Url(required=True)
    events = fields.List(
        fields.Str(validate=validate.OneOf(
            ["on_danmu", "on_poll_create", "on_poll_end", "on_connect", "on_disconnect"],
        )),
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


def validate_request(schema_class, data):
    """驗證請求資料"""
    try:
        schema = schema_class()
        return schema.load(data), None
    except ValidationError as err:
        return None, err.messages
