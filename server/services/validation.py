"""輸入驗證服務"""

import re as _re

from marshmallow import (
    EXCLUDE,
    Schema,
    ValidationError,
    fields,
    pre_load,
    validate,
    validates,
    validates_schema,
)

from ..config import Config
from .effects import MAX_EFFECTS_PER_DANMU
from .webhook import EVENT_CATALOG as _WEBHOOK_EVENT_CATALOG

_WEBHOOK_EVENT_SLUGS = [e["slug"] for e in _WEBHOOK_EVENT_CATALOG]
_VALID_SETTING_TYPES = Config.SETTABLE_OPTION_KEYS
_NO_CTRL_CHARS_RE = r"^[^\r\n\t\x00-\x08\x0b\x0c\x0e-\x1f]+$"

# /fire 容器欄位的上限。觀眾頁一則彈幕的 effects 是「勾了哪幾個特效」，
# 一個名字一筆（內建 8 個）；每個特效的 params 是 .dme 預設值加上觀眾頁
# 的參數面板（內建特效最多 4 個）；fontInfo 是 build_font_payload 的形狀（name/url/type）。
# 上限給到正常用量的數倍，只是讓單一請求的處理量有界。
MAX_EFFECT_ITEM_KEYS = 4  # {name, params}，留一點空間給舊客戶端
MAX_EFFECT_PARAMS = 16
MAX_EFFECT_PARAM_STR_LEN = 256
MAX_FONT_INFO_KEYS = 8
_EFFECT_PARAM_SCALARS = (str, int, float, bool, type(None))


class FireRequestSchema(Schema):
    """彈幕發送請求驗證"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    isImage = fields.Bool(load_default=False)
    fontInfo = fields.Dict(load_default=None)
    font = fields.Str(load_default=None, validate=validate.Length(max=100))
    # effects：支援多個特效疊加，每個特效可攜帶參數
    effects = fields.List(
        fields.Dict(),
        load_default=[],
        validate=validate.Length(max=MAX_EFFECTS_PER_DANMU),
    )
    color = fields.Str(
        load_default=None,
        validate=validate.Regexp(r"^#?[0-9a-fA-F]{6}$", error="Invalid hex color"),
    )
    opacity = fields.Int(load_default=None, validate=validate.Range(min=20, max=100))
    size = fields.Int(load_default=None, validate=validate.Range(min=1, max=200))
    speed = fields.Float(load_default=None, validate=validate.Range(min=0.5, max=3.0))
    fingerprint = fields.Str(load_default=None, validate=validate.Length(max=128))
    # Captcha providers (Turnstile / hCaptcha) issue tokens well under 4k chars.
    # Accept anything up to 8k to be safe; verification itself is the real gate.
    captcha_token = fields.Str(load_default=None, validate=validate.Length(max=8192))
    nickname = fields.Str(load_default=None, validate=validate.Length(max=20))
    layout = fields.Str(
        load_default=None,
        validate=validate.OneOf(
            ["scroll", "top_fixed", "bottom_fixed", "float", "rise"],
            error="Invalid layout mode.",
        ),
    )

    @pre_load
    def _cap_container_sizes(self, data, **kwargs):
        # 在逐筆反序列化之前先擋長度：List 的 validate 要等每一筆都轉換完才會跑。
        if not isinstance(data, dict):
            return data
        effects = data.get("effects")
        if isinstance(effects, list) and len(effects) > MAX_EFFECTS_PER_DANMU:
            raise ValidationError(
                f"At most {MAX_EFFECTS_PER_DANMU} effects per message.", field_name="effects"
            )
        font_info = data.get("fontInfo")
        if isinstance(font_info, dict) and len(font_info) > MAX_FONT_INFO_KEYS:
            raise ValidationError("fontInfo has too many keys.", field_name="fontInfo")
        return data

    @validates("effects")
    def validate_effects(self, value, **kwargs):
        _SAFE_NAME = _re.compile(r"^[a-zA-Z0-9_-]{1,128}$")
        for item in value:
            name = item.get("name", "")
            if not isinstance(name, str) or not _SAFE_NAME.match(name):
                raise ValidationError(
                    "Effect name must be 1-128 alphanumeric/hyphen/underscore chars"
                )
            if len(item) > MAX_EFFECT_ITEM_KEYS:
                raise ValidationError("Effect entry has too many keys.")
            params = item.get("params")
            if params is None:
                continue
            if not isinstance(params, dict):
                raise ValidationError("Effect params must be an object.")
            if len(params) > MAX_EFFECT_PARAMS:
                raise ValidationError(f"At most {MAX_EFFECT_PARAMS} params per effect.")
            for pkey, pval in params.items():
                if not isinstance(pval, _EFFECT_PARAM_SCALARS):
                    raise ValidationError("Effect param values must be scalars.")
                if isinstance(pval, str) and len(pval) > MAX_EFFECT_PARAM_STR_LEN:
                    raise ValidationError("Effect param value too long.")
                if len(str(pkey)) > 64:
                    raise ValidationError("Effect param name too long.")

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
    """投票建立請求驗證 (legacy single-question shape).

    Kept for backward compat with the v4 admin UI / external callers. Maps
    to ``PollService.create()`` which builds a 1-question session.
    """

    question = fields.Str(required=True, validate=validate.Length(min=1, max=200))
    options = fields.List(
        fields.Str(validate=validate.Length(min=1, max=100)),
        required=True,
        validate=validate.Length(min=2, max=6),
    )


class PollQuestionSchema(Schema):
    """單一題目（用於 multi-question session）"""

    text = fields.Str(required=True, validate=validate.Length(min=1, max=200))
    options = fields.List(
        fields.Str(validate=validate.Length(min=1, max=100)),
        required=True,
        validate=validate.Length(min=2, max=6),
    )
    image_url = fields.Str(load_default=None, validate=validate.Length(max=512))
    time_limit_seconds = fields.Int(
        load_default=None,
        validate=validate.Range(min=0, max=86400),
        allow_none=True,
    )

    class Meta:
        unknown = EXCLUDE


class PollSessionCreateSchema(Schema):
    """Multi-question poll session creation."""

    questions = fields.List(
        fields.Nested(PollQuestionSchema),
        required=True,
        validate=validate.Length(min=1, max=20),
    )

    class Meta:
        unknown = EXCLUDE


_ALLOWLIST_KEYS = {"Color", "FontFamily", "Layout"}


class SettingUpdateSchema(Schema):
    """設定更新請求驗證

    v5.0.0+: when ``index == 1`` and ``type`` is a pick-set key
    (Color / FontFamily / Layout), ``value`` may be a list of preset string
    values (the allowlist). Numeric scalars are still accepted everywhere
    else for back-compat with the v4 viewer/admin shape.
    """

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

    @validates_schema
    def _validate_allowlist_shape(self, data, **kwargs):
        """If value is a list, the only legal slot is allowlist for pick-set keys."""
        value = data.get("value")
        if not isinstance(value, list):
            return
        key = data.get("type")
        index = data.get("index")
        if index != 1 or key not in _ALLOWLIST_KEYS:
            raise ValidationError({"value": "List value only allowed at index=1 for pick-set keys"})
        if len(value) > 64:
            raise ValidationError({"value": "Allowlist entries exceed maximum count (64)"})
        for item in value:
            if not isinstance(item, (str, int, float)):
                raise ValidationError({"value": "Allowlist entries must be strings"})
            if isinstance(item, str) and len(item) > 100:
                raise ValidationError({"value": "Allowlist entry too long (>100 chars)"})


class AllowlistUpdateSchema(Schema):
    """Dedicated allowlist endpoint payload — POST /admin/options/<key>/allowlist."""

    class Meta:
        unknown = EXCLUDE

    allowlist = fields.List(
        fields.Str(validate=validate.Length(min=1, max=100)),
        required=True,
        validate=validate.Length(max=64),
    )


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
    speed = fields.Float(load_default=None, validate=validate.Range(min=0.5, max=3.0))
    opacity = fields.Int(load_default=None, validate=validate.Range(min=20, max=100))

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
    """Attempt to compile a regex; raise ValidationError if it's invalid or dangerous.

    編譯只在本行程做（不會卡住）；實際執行一律交給 rule_regex.vet_pattern，在有硬性
    逾時的子行程裡跑——逾時就判定為危險。
    """
    from . import rule_regex

    try:
        rule_regex.compile_pattern(pattern)
    except _re.error as exc:
        raise ValidationError(f"Invalid regex: {exc}")
    # Heuristic ReDoS guard: reject patterns with nested quantifiers on groups/chars
    dangerous = _re.search(r"(\([^)]*\)[+*?{].*[+*?{]|\[[^\]]*\][+*?{].*[+*?{])", pattern)
    if dangerous:
        raise ValidationError("Regex pattern may cause catastrophic backtracking.")
    # 上面的啟發式抓不到的寫法（例如 (a+)+b），靠子行程實際跑探測輸入抓。
    try:
        rule_regex.vet_pattern(pattern)
    except rule_regex.PatternTimeout:
        raise ValidationError("Regex pattern timed out during the safety check.")
    except rule_regex.PatternError as exc:
        raise ValidationError(f"Invalid regex: {exc}")
    except rule_regex.PatternCheckUnavailable:
        raise ValidationError("Regex pattern failed safety check: could not run the check.")
    except rule_regex.PatternCheckBusy:
        raise ValidationError("Too many regex checks are running; try again shortly.")


# 封鎖規則（services/filter_engine.py）的型別、動作與期限。
#   word        封鎖字：關鍵字包含＋封鎖，在其他規則之後比對（原本的字串黑名單）
#   keyword     關鍵字包含＋放行／送審（keyword＋block 一律存成 word）
#   regex       正規式；replace 是「正規式＋替換」
#   rate_limit  同一個指紋在時間窗內的則數
#   fingerprint 指紋完全相同
FILTER_RULE_TYPES = ("word", "keyword", "regex", "replace", "rate_limit", "fingerprint")
FILTER_RULE_ACTIONS = ("block", "replace", "allow", "review")
FILTER_RULE_LIFETIMES = ("permanent", "session", "timed")
FILTER_RULE_MAX_DURATION_SEC = 30 * 24 * 3600


class FilterRuleSchema(Schema):
    """封鎖規則的唯一驗證。

    新增與更新都走這一份：更新是把現有規則與改動合併成完整的一筆，再整筆驗一次
    （FilterEngine._validate）。以前更新有自己一份「全部欄位選填」的 schema，只改
    pattern 時 type 不在資料裡，正規式的安全檢查就整段被跳過。
    """

    type = fields.Str(
        required=True,
        validate=validate.OneOf(FILTER_RULE_TYPES, error="Unknown filter type."),
    )
    # rate_limit 不看 pattern（它數的是同一個指紋的則數），只有它可以留空。
    pattern = fields.Str(load_default="", validate=validate.Length(max=500))
    replacement = fields.Str(load_default="***", validate=validate.Length(max=200))
    action = fields.Str(
        load_default="block",
        # 2026-05-18 design v4-r3: `review` action holds matched messages
        # in the moderation queue for human approve/reject. See
        # services/mod_queue.py + admin-modqueue.js.
        validate=validate.OneOf(FILTER_RULE_ACTIONS),
    )
    priority = fields.Int(load_default=100, validate=validate.Range(min=0, max=9999))
    enabled = fields.Bool(load_default=True)
    # rate_limit specific
    max_count = fields.Int(load_default=5, validate=validate.Range(min=1, max=100))
    window_sec = fields.Float(load_default=60, validate=validate.Range(min=1, max=3600))
    # 期限：permanent 永久、session 到本場次結束、timed 限時（duration_sec 從現在起算；
    # 已存在的限時規則更新時沒給 duration_sec 就沿用原本的到期時間）。到期時間只由伺服器
    # 算，客戶端送的 expires_at 不收。「限時要有期限」「沒有場次時不收 session」在
    # filter_engine._resolve_lifetime——它要看更新前的那條規則與目前的場次。
    lifetime = fields.Str(load_default="permanent", validate=validate.OneOf(FILTER_RULE_LIFETIMES))
    duration_sec = fields.Int(
        load_default=None,
        allow_none=True,
        validate=validate.Range(min=60, max=FILTER_RULE_MAX_DURATION_SEC),
    )

    @validates_schema
    def validate_rule(self, data, **kwargs):
        if "type" not in self.fields:
            # FilterRuleSchema(only=META_FIELDS)：只改啟用／優先序／期限的更新，不碰
            # pattern，所以 pattern 的檢查一條都不跑（見 FilterEngine._apply_meta）。
            return
        rule_type = data.get("type")
        pattern = data.get("pattern") or ""
        if not pattern and rule_type != "rate_limit":
            raise ValidationError("Length must be between 1 and 500.", "pattern")
        if rule_type in ("regex", "replace") and pattern:
            _safe_compile_regex(pattern)
        if (
            rule_type in ("word", "keyword")
            and pattern
            and not _re.match(_NO_CTRL_CHARS_RE, pattern)
        ):
            raise ValidationError("Pattern cannot contain control characters.", "pattern")
        if rule_type == "word" and data.get("action") != "block":
            raise ValidationError("A blocked word can only block.", "action")


class WebhookSchema(Schema):
    """Webhook 註冊請求驗證"""

    # 2026-09-08：marshmallow 的 `fields.Url` 預設放行 ftp/ftps。webhook 只會
    # 用 urllib 發 POST，ftp 沒有意義，收成兩個 scheme。
    url = fields.Url(required=True, schemes={"http", "https"})
    # Whitelist derives from services.webhook.EVENT_CATALOG — the same list
    # /admin/webhooks/events serves the picker and WebhookConfig filters
    # against. Hard-coding it here let the two drift: the FE offered 10
    # slugs while this schema took 5 (plus two, on_connect/on_disconnect,
    # that the service silently dropped).
    events = fields.List(
        fields.Str(validate=validate.OneOf(_WEBHOOK_EVENT_SLUGS)),
        required=True,
        validate=validate.Length(min=1, max=len(_WEBHOOK_EVENT_SLUGS)),
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
