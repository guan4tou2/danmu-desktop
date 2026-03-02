"""輸入驗證服務"""

from marshmallow import EXCLUDE, Schema, ValidationError, fields, validate

# Valid setting type keys (mirrors Config.SETTABLE_OPTION_KEYS)
_VALID_SETTING_TYPES = {
    "Color",
    "Opacity",
    "FontSize",
    "Speed",
    "FontFamily",
    "Effects",
}


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
                r"^[^\r\n\t\x00-\x08\x0b\x0c\x0e-\x1f]+$",
                error="Keyword cannot contain control characters.",
            ),
        ],
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


def validate_request(schema_class, data):
    """驗證請求資料"""
    try:
        schema = schema_class()
        return schema.load(data), None
    except ValidationError as err:
        return None, err.messages
