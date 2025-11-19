"""輸入驗證服務"""

from marshmallow import EXCLUDE, Schema, ValidationError, fields, validate


class FireRequestSchema(Schema):
    """彈幕發送請求驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    isImage = fields.Bool(load_default=False)
    fontInfo = fields.Dict(load_default=None)
    fingerprint = fields.Str(load_default=None, validate=validate.Length(max=128))

    class Meta:
        unknown = EXCLUDE


class BlacklistCheckSchema(Schema):
    """黑名單檢查請求驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=1000))


class SettingUpdateSchema(Schema):
    """設定更新請求驗證"""

    type = fields.Str(required=True)
    value = fields.Raw(required=True)
    index = fields.Int(required=True, validate=validate.Range(min=0, max=3))


class ToggleSettingSchema(Schema):
    """開關設定請求驗證"""

    key = fields.Str(required=True)
    enabled = fields.Bool(required=True)


def validate_request(schema_class, data):
    """驗證請求資料"""
    try:
        schema = schema_class()
        return schema.load(data), None
    except ValidationError as err:
        return None, err.messages
