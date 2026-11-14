"""封鎖規則：後台「封鎖字」頁上那一份清單的唯一儲存與比對引擎。

每條規則有三個選項——命中方式（``type``）、動作（``action``）、期限（``lifetime``）：

    type        word / keyword / regex / replace / rate_limit / fingerprint
    action      block / replace / allow / review
    lifetime    permanent（永久）/ session（到本場次結束）/ timed（到 expires_at）

比對分兩段，順序沿用合併之前的行為（routes/api.py 的 /fire 依序呼叫）：

1. ``check()``：word 以外的規則，依 priority 由小到大、同值依加入順序，第一條命中的
   決定結果。命中會記進 filter_events（命中紀錄）。
2. ``match_word()``：word 規則（封鎖字），依加入順序，第一個出現在文字裡的字。
   這一段就是原本的字串黑名單：不分大小寫的「包含」、被擋時觀眾看到
   「Content contains blocked keywords」、紀錄的 ``blocked_by`` 是那個字本身、
   不寫進命中紀錄；而且它在第 1 段之後才跑——第 1 段的「放行」擋不住它，
   「替換」之後比對的是替換過的文字。

「關鍵字＋封鎖」只有一種：word。5.8 以前過濾規則裡的 keyword＋block 走的是第 1 段，
觀眾看到的訊息、紀錄的 blocked_by、與放行規則的先後都和黑名單不同；畫面上兩者長得
一樣，所以讀檔時一律轉成 word（2026-11-14 擁有者拍板統一）。keyword 只剩搭配放行與
送審。轉換後的差異列在 tests/test_block_rules.py 的「keyword＋block 轉成封鎖字」那一段；
其餘規則的判定與 5.8 相同（tests/test_block_rules_equivalence.py）。

儲存格式維持一個 JSON 陣列（server/runtime/filter_rules.json，備份會帶走）。舊檔沒有
lifetime 欄位，讀進來一律視為永久。第一次讀到需要轉換的檔案（缺 lifetime，或還有
keyword＋block）時，先在旁邊留一份 ``filter_rules.json.pre-unified.bak``、再轉換並寫回；
備份寫不成功就不寫回（只在記憶體轉換，記一筆警告）。已經轉過的檔案不會再動，備份也不會
被覆寫。原本的字串黑名單只存在記憶體裡（每次重啟就清空），沒有檔案可以搬。

主持人發動的改動（新增、修改、刪除、清除本場次）先寫檔、寫成功才生效；寫不進去丟
RuleSaveError，API 回 500 ``save_failed``。
"""

import dataclasses
import hashlib
import json
import logging
import math
import os
import re
import shutil
import tempfile
import threading
import time
import uuid
from dataclasses import asdict, dataclass
from typing import Any, Optional

from . import rule_regex

logger = logging.getLogger(__name__)

# 舊版規則檔第一次被新版讀到時留下的備份（不會被備份功能的 *.json 打包帶走）
LEGACY_BACKUP_SUFFIX = ".pre-unified.bak"
# 規則檔裡有解析不了的條目時留下的原檔副本；{digest} 是原檔內容的雜湊（同內容只留一份）
UNREADABLE_BACKUP_SUFFIX = ".unreadable-{digest}.bak"

_REGEX_TYPES = ("regex", "replace")

# 只改這幾個欄位的更新不重跑 pattern 的安全檢查與重複檢查——停用、刪除、改期限
# 永遠要做得到，即使那條規則的正規式是 5.8 存下來、現在會被判成危險的寫法。
META_FIELDS = ("enabled", "priority", "lifetime", "duration_sec")

# 客戶端不能直接指定到期時間：限時規則只收 duration_sec，由伺服器換算。
_CLIENT_IGNORED_FIELDS = ("id", "expires_at")


class RuleValidationError(ValueError):
    """規則沒通過驗證。``code`` 給後台對應翻譯文案，``details`` 是逐欄位的訊息。"""

    def __init__(self, message: str, code: str = "invalid", details: Any = None) -> None:
        super().__init__(message)
        self.code = code
        self.details = details if details is not None else {"_schema": [message]}


class RuleSaveError(Exception):
    """規則檔寫不進去。這次的改動沒有生效（記憶體裡的清單維持原樣）。"""

    code = "save_failed"


def _session_live() -> bool:
    from . import session_service

    return session_service.is_live()


@dataclass
class FilterRule:
    id: str
    type: str  # word / keyword / regex / replace / rate_limit / fingerprint
    pattern: str
    action: str  # block / replace / allow / review
    priority: int = 0
    enabled: bool = True
    replacement: str = ""
    # rate_limit fields
    max_count: int = 0
    window_sec: float = 0.0
    lifetime: str = "permanent"  # permanent / session / timed
    expires_at: Optional[float] = None  # epoch seconds, timed only

    def to_dict(self) -> dict:
        d = asdict(self)
        # Only include rate_limit fields when relevant
        if self.type != "rate_limit":
            d.pop("max_count", None)
            d.pop("window_sec", None)
        if self.type != "replace":
            d.pop("replacement", None)
        if self.lifetime != "timed":
            d.pop("expires_at", None)
        return d

    def is_expired(self, now: float) -> bool:
        return self.lifetime == "timed" and self.expires_at is not None and self.expires_at <= now


@dataclass
class FilterResult:
    action: str  # "block", "replace", "allow", "review", "pass"
    text: str
    reason: str = ""
    rule_id: str = ""


def _is_legacy_keyword_block(rule_type: str, action: str) -> bool:
    """5.8 以前的「關鍵字＋封鎖」過濾規則：讀檔時轉成封鎖字（word）。"""
    return rule_type == "keyword" and action == "block"


def _flatten_messages(messages: Any) -> list[str]:
    if isinstance(messages, dict):
        out: list[str] = []
        for key, value in messages.items():
            for msg in _flatten_messages(value):
                out.append(msg if key == "_schema" else f"{key}: {msg}")
        return out
    if isinstance(messages, (list, tuple)):
        out = []
        for value in messages:
            out.extend(_flatten_messages(value))
        return out
    return [str(messages)]


def _error_code(texts: list[str]) -> str:
    joined = " ".join(texts)
    if "Invalid regex" in joined:
        return "invalid_regex"
    if "timed out" in joined:
        return "regex_timeout"
    if "checks are running" in joined:
        return "regex_busy"
    if "backtracking" in joined or "safety check" in joined:
        return "unsafe_regex"
    return "invalid"


_MISSING = object()


def _number(entry: dict, key: str, default: Any, kind: type) -> Any:
    value = entry.get(key, default)
    try:
        return kind(value)
    except (TypeError, ValueError, OverflowError) as exc:
        raise ValueError(f"{key} is not a number ({value!r})") from exc


def _expiry(value: Any) -> Optional[float]:
    """規則檔裡的 expires_at → 秒數；不能當到期時間用的回 None（那條規則當永久）。

    不是數字、布林、NaN／無限大都算不能用。超出 float 範圍的整數（例如 10**400）
    轉換時丟 OverflowError——那等於「永遠不到期」，一樣當永久，不讓它變成沒人接的
    例外。
    """
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    try:
        seconds = float(value)
    except OverflowError:
        return None
    return seconds if math.isfinite(seconds) else None


def _storable(text: str) -> bool:
    """*text* 寫得進規則檔（UTF-8）嗎？JSON 的 ``\\ud800`` 這類跳脫會解成落單的代理
    字元，Python 字串收得下、存檔時卻編碼不了。"""
    try:
        text.encode("utf-8")
    except UnicodeEncodeError:
        return False
    return True


def _parse_entry(entry: Any) -> tuple[FilterRule, bool]:
    """規則檔裡的一條 → (FilterRule, 是否做了 keyword＋block 轉換)。

    讀檔與備份還原共用。解析不了（不是物件、文字欄位不是字串、數字欄位轉不成數字）時
    丟 ValueError。與 5.8 一樣寬鬆的地方照舊：缺欄位用預設值、"5" 這種數字字串照收、
    無效的 lifetime 當永久、限時卻沒有到期時間當永久、未知的 type 照存（比對時不命中）。
    """
    if not isinstance(entry, dict):
        raise ValueError("not an object")
    rule_type = entry.get("type", "keyword")
    action = entry.get("action", "block")
    pattern = entry.get("pattern", "")
    replacement = entry.get("replacement", "")
    rule_id = entry.get("id") or uuid.uuid4().hex[:8]
    for key, value in (
        ("type", rule_type),
        ("action", action),
        ("pattern", pattern),
        ("replacement", replacement),
        ("id", rule_id),
    ):
        if not isinstance(value, str):
            raise ValueError(f"{key} is not a string ({value!r})")
        if not _storable(value):
            raise ValueError(f"{key} has characters that cannot be saved ({value!r})")
    lifetime = entry.get("lifetime", "permanent")
    if lifetime not in ("permanent", "session", "timed"):
        lifetime = "permanent"
    expires_at = _expiry(entry.get("expires_at")) if lifetime == "timed" else None
    if lifetime == "timed" and expires_at is None:
        lifetime = "permanent"
    converted = _is_legacy_keyword_block(rule_type, action)
    rule = FilterRule(
        id=rule_id,
        type="word" if converted else rule_type,
        pattern=pattern,
        action=action,
        priority=_number(entry, "priority", 0, int),
        enabled=bool(entry.get("enabled", True)),
        replacement=replacement,
        max_count=_number(entry, "max_count", 0, int),
        window_sec=_number(entry, "window_sec", 0.0, float),
        lifetime=lifetime,
        expires_at=expires_at,
    )
    return rule, converted


def _client_fields(data: dict[str, Any]) -> dict[str, Any]:
    """拿掉客戶端不能指定的欄位（id、expires_at）。"""
    return {k: v for k, v in data.items() if k not in _CLIENT_IGNORED_FIELDS}


def _resolve_lifetime(
    lifetime: str, duration_sec: Optional[int], existing: Optional[FilterRule]
) -> tuple[str, Optional[float]]:
    """把驗證過的期限換成要存的 (lifetime, expires_at)。

    * timed：給了 duration_sec 就從現在起算；沒給時沿用原本那條限時規則的到期時間，
      原本不是限時就是錯。
    * session：沒有進行中的場次時不收——「到本場次結束」那時沒有場次可以結束，
      規則會悄悄留到下一場結束（後台在沒有場次時不提供這個選項）。原本就是
      session 的規則（場次中）照常可以改其他欄位。
    """
    if lifetime == "timed":
        if duration_sec is not None:
            return lifetime, time.time() + duration_sec
        if existing is not None and existing.lifetime == "timed" and existing.expires_at:
            return lifetime, existing.expires_at
        msg = "A timed rule needs a duration."
        raise RuleValidationError(msg, "invalid", {"duration_sec": [msg]})
    if lifetime == "session":
        already = existing is not None and existing.lifetime == "session"
        if not already and not _session_live():
            msg = "No session is live, so a rule cannot last until the session ends."
            raise RuleValidationError(msg, "no_session", {"lifetime": [msg]})
    return lifetime, None


_REGEX_VERBS = {"block": "match", "allow": "allow", "review": "review"}


def _regex_result(rule: FilterRule, text: str, count: int, new_text: str) -> Optional[FilterResult]:
    """regex／replace 規則的比對次數換成結果（/fire 與規則測試共用）。"""
    if rule.type == "replace":
        if count > 0:
            return FilterResult(
                action="replace",
                text=new_text,
                reason=f"Replaced {count} match(es) via '{rule.pattern}'",
                rule_id=rule.id,
            )
        return None
    if count and rule.action in _REGEX_VERBS:
        return FilterResult(
            action=rule.action,
            text=text,
            reason=f"Regex {_REGEX_VERBS[rule.action]}: '{rule.pattern}'",
            rule_id=rule.id,
        )
    return None


class FilterEngine:
    """Singleton content filtering engine with thread-safe rule management."""

    _instance: Optional["FilterEngine"] = None
    _init_lock = threading.Lock()

    def __new__(cls, path: Optional[str] = None) -> "FilterEngine":
        if cls._instance is None:
            with cls._init_lock:
                if cls._instance is None:
                    inst = super().__new__(cls)
                    inst._initialized = False
                    cls._instance = inst
        return cls._instance

    def __init__(self, path: Optional[str] = None) -> None:
        if self._initialized:
            return
        self._lock = threading.RLock()
        self._rules: list[FilterRule] = []
        self._regex_cache: dict[str, re.Pattern] = {}
        self._stale_session_rules = 0  # 上一次 _load 因為沒有場次而沒載入的規則數
        self._rate_tracker: dict[str, list[float]] = {}
        self._check_count = 0
        if path is None:
            # Defer the Config import to runtime so tests can monkey-patch env
            from server.config import Config

            path = Config.FILTER_RULES_FILE
        self._path = path
        self._load()
        self._initialized = True

    # ── 比對 ────────────────────────────────────────────────────

    def check(self, text: str, fingerprint: Optional[str] = None) -> FilterResult:
        """第 1 段：word 以外的規則依 priority 比對，第一條命中的決定結果。

        沒有命中時回傳 action="pass" 與原文。
        """
        with self._lock:
            self._prune_expired()
            # Periodic cleanup: prune stale rate_tracker entries every 500 checks
            self._check_count += 1
            if self._check_count >= 500:
                self._check_count = 0
                self.cleanup_rate_tracker()

            for rule in self._sorted_rules():
                if not rule.enabled:
                    continue
                result = self._evaluate(rule, text, fingerprint)
                if result is not None:
                    # Record the match for the moderation live log. Only
                    # actual matches (block/allow/replace) are recorded;
                    # plain "pass" is a firehose and not what the log shows.
                    try:
                        from . import filter_events  # local import to avoid cycle

                        filter_events.record(
                            action=result.action,
                            rule_id=result.rule_id,
                            pattern=rule.pattern,
                            text=text,
                            source=fingerprint,
                        )
                    except Exception:
                        pass  # logging must never break filtering
                    return result
        return FilterResult(action="pass", text=text)

    def match_word(self, text: str) -> str:
        """第 2 段：第一個出現在 *text* 裡的封鎖字（不分大小寫），沒有就回 ""。

        設計稿 10 · G2 的訊息表要在被擋的那一列標出「封鎖字「加line」」——所以
        要知道**是哪個字**擋的，不只是「有沒有被擋」。
        """
        with self._lock:
            self._prune_expired()
            words = [r.pattern for r in self._rules if r.type == "word" and r.enabled]
        text_lower = text.lower()
        for word in words:
            if word.lower() in text_lower:
                return word
        return ""

    # ── 清單操作 ────────────────────────────────────────────────

    def add_rule(self, rule_data: dict[str, Any]) -> str:
        """新增一條規則，回傳 id。

        沒通過驗證時丟 RuleValidationError（ValueError）；寫檔失敗丟 RuleSaveError。
        驗證在鎖外面做：正規式的安全檢查要等子行程（最多 PROBE_TIMEOUT_SEC），
        不能讓 /fire 的比對排在後面等。
        """
        rule = self._validate(_client_fields(rule_data))
        with self._lock:
            self._prune_expired()
            self._confirm_session(rule)
            self._reject_duplicate_word(rule)
            self._compile_if_regex(rule)
            self._commit(self._rules + [rule])
            return rule.id

    def update_rule(self, rule_id: str, data: dict[str, Any]) -> bool:
        """修改一條規則。找到並更新回 True，找不到回 False。

        只改 META_FIELDS（啟用、優先序、期限）時只驗那幾個欄位；其他改動把現有規則
        與 *data* 合併成完整的一筆，再走跟新增同一個 ``_validate``。
        """
        data = _client_fields(data)
        with self._lock:
            self._prune_expired()
            rule = self._find(rule_id)
            if rule is None:
                return False
            if self._changed_fields(rule, data) <= set(META_FIELDS):
                updated = self._apply_meta(rule, data)
                self._commit([updated if r.id == rule_id else r for r in self._rules])
                return True
            snapshot = rule.to_dict()
            merged = {**snapshot, **data}
        updated = self._validate(merged, rule_id=rule_id, existing=rule)
        with self._lock:
            self._prune_expired()
            current = self._find(rule_id)
            if current is None:
                return False
            if current.to_dict() != snapshot:
                raise RuleValidationError(
                    "The rule changed while this edit was being checked; try again.", "conflict"
                )
            self._confirm_session(updated, existing=current)
            self._reject_duplicate_word(updated, ignore_id=rule_id)
            self._compile_if_regex(updated)
            self._commit([updated if r.id == rule_id else r for r in self._rules])
            if rule.pattern != updated.pattern:
                self._regex_cache.pop(rule.pattern, None)
            return True

    def remove_rule(self, rule_id: str) -> bool:
        """Remove a rule by id. Returns True if found and removed."""
        with self._lock:
            removed = self._find(rule_id)
            if removed is None:
                return False
            self._commit([r for r in self._rules if r.id != rule_id])
            self._regex_cache.pop(removed.pattern, None)
            return True

    def get_rule(self, rule_id: str) -> Optional[dict[str, Any]]:
        with self._lock:
            for rule in self._rules:
                if rule.id == rule_id:
                    return rule.to_dict()
        return None

    def list_rules(self) -> list[dict[str, Any]]:
        """全部規則，排列順序就是比對順序：先第 1 段（依 priority），再封鎖字。"""
        with self._lock:
            self._prune_expired()
            words = [r for r in self._rules if r.type == "word"]
            return [r.to_dict() for r in self._sorted_rules() + words]

    def clear_session_rules(self, must_save: bool = True) -> int:
        """移除所有「到本場次結束」的規則，回傳移除幾條。

        must_save=True（後台按「清除」）：寫不進去就丟 RuleSaveError，清單不變，主持人
        看得到失敗。must_save=False（場次結束時自動呼叫）：先從記憶體拿掉再寫檔，
        寫不進去只記警告——場次已經結束，這些規則不能因為磁碟的問題繼續擋下一場的
        訊息。檔案裡殘留的那幾條，下一次寫檔時清掉；在那之前重啟的話，_load 看到沒有
        進行中的場次也不會載入它們。
        """
        with self._lock:
            kept = [r for r in self._rules if r.lifetime != "session"]
            removed = len(self._rules) - len(kept)
            if removed:
                if must_save:
                    self._commit(kept)
                else:
                    self._rules = kept
                    self._save()
            return removed

    def test_rule(self, rule_data: dict[str, Any], sample_text: str) -> FilterResult:
        """Evaluate a rule definition against sample text without persisting.

        Raises ValueError (RuleValidationError) if the rule is invalid. 正規式規則的
        樣本比對也在子行程裡跑（rule_regex.vet_pattern）：跑不完就回 code
        ``regex_timeout``，不會在伺服器行程裡卡住。期限與測試無關，不驗。
        """
        data = {
            k: v
            for k, v in _client_fields(rule_data).items()
            if k not in ("lifetime", "duration_sec")
        }
        rule = self._validate(data)
        if rule.type not in _REGEX_TYPES:
            result = self._evaluate(rule, sample_text, fingerprint=None)
            return result or FilterResult(action="pass", text=sample_text)
        try:
            count, new_text = rule_regex.vet_pattern(
                rule.pattern,
                sample=sample_text,
                mode="replace" if rule.type == "replace" else "search",
                replacement=rule.replacement,
                probes=False,
            )
        except rule_regex.PatternTimeout as exc:
            raise RuleValidationError(
                "This rule timed out on the sample text.", "regex_timeout"
            ) from exc
        except rule_regex.PatternError as exc:
            raise RuleValidationError(f"Invalid regex: {exc}", "invalid_regex") from exc
        except rule_regex.PatternCheckUnavailable as exc:
            raise RuleValidationError(
                "Regex pattern failed safety check: could not run the check.", "unsafe_regex"
            ) from exc
        except rule_regex.PatternCheckBusy as exc:
            raise RuleValidationError(
                "Too many regex checks are running; try again shortly.", "regex_busy"
            ) from exc
        result = _regex_result(rule, sample_text, count, new_text)
        return result or FilterResult(action="pass", text=sample_text)

    # ── 封鎖字（/admin/blacklist/* 與 /admin/live/block 的薄轉接） ──

    def add_word(
        self, word: str, lifetime: str = "permanent", duration_sec: Optional[int] = None
    ) -> str:
        """封鎖一個字，回傳實際發生的事：

        added    新加了一條封鎖字
        enabled  已經有同一個字（大小寫完全相同）但被停用，這次重新啟用，期限改成這次
                 要求的 *lifetime*
        exists   已經有、而且正在生效，沒有改動
        """
        meta: dict[str, Any] = {"enabled": True, "lifetime": lifetime}
        if duration_sec is not None:
            meta["duration_sec"] = duration_sec
        with self._lock:
            # 到期但還沒被清掉的同名字不算「已經有」：不清的話這裡回 exists，下一次
            # 比對時它被清掉，結果快捷封鎖回報成功、字卻沒在擋。
            self._prune_expired()
            existing = next(
                (r for r in self._rules if r.type == "word" and r.pattern == word), None
            )
            if existing is not None:
                if existing.enabled:
                    return "exists"
                updated = self._apply_meta(existing, meta)
                self._commit([updated if r.id == existing.id else r for r in self._rules])
                return "enabled"
            # 封鎖字不跑正規式，驗證不會起子行程，可以留在鎖裡做。
            rule = self._validate({"type": "word", "pattern": word, "action": "block", **meta})
            self._commit(self._rules + [rule])
            return "added"

    def remove_word(self, word: str) -> bool:
        with self._lock:
            kept = [r for r in self._rules if not (r.type == "word" and r.pattern == word)]
            if len(kept) == len(self._rules):
                return False
            self._commit(kept)
            return True

    def list_words(self) -> list[str]:
        with self._lock:
            self._prune_expired()
            return [r.pattern for r in self._rules if r.type == "word"]

    @property
    def path(self) -> str:
        return self._path

    def reload(self) -> None:
        """重新從檔案讀規則。"""
        with self._lock:
            self._regex_cache.clear()
            self._load()

    def restore_file(self, data: bytes) -> int:
        """備份還原：在變更鎖裡換掉規則檔並重新讀進來，回傳讀進來的規則數。

        「換檔」與「重新載入」之間不能有別的寫入：以前備份模組自己寫檔、之後才叫
        reload()，中間若有主持人的編輯提交，會用還原前的記憶體清單把剛還原的檔案
        蓋回去。舊格式（5.8）的內容照常轉換；原檔副本（.pre-unified.bak）只在還沒有
        副本時才留——已經有的話不覆寫，還原的內容本身就在那份備份裡。

        全有或全無：先把每一條都解析過（與讀檔同一個 _parse_entry），任何一條解析
        不了、或內容不是 JSON 陣列，就丟 ValueError，檔案與記憶體裡的清單都不動。
        換檔之後重新載入若丟例外、或載入的條數與預檢不同，就把舊檔與舊清單放回去
        再丟 ValueError（_undo_restore）。寫不進去丟 RuleSaveError（同樣不動）；唯一
        會留下不一致的情況是「載入失敗、舊檔又寫不回去」，這時丟 RuleSaveError 並
        記一筆 error。
        """
        try:
            parsed = json.loads(data.decode("utf-8"))
        except (UnicodeDecodeError, ValueError) as exc:
            raise ValueError(f"filter_rules.json is not valid JSON: {exc}") from exc
        if not isinstance(parsed, list):
            raise ValueError("filter_rules.json must be a JSON array")
        with self._lock:
            for index, entry in enumerate(parsed):
                try:
                    _parse_entry(entry)
                except ValueError as exc:
                    raise ValueError(f"filter_rules.json entry {index + 1}: {exc}") from exc
            # 預檢只保證每一條都解析得了；_load 之後還會做別的事（編譯正規式、舊格式
            # 轉換後寫回）。那些步驟出任何狀況都退回原樣：先記下現在的檔案與清單，
            # 載入丟例外、或載入的條數與預檢不同，就把舊檔寫回去。
            try:
                with open(self._path, "rb") as f:
                    previous: Optional[bytes] = f.read()
            except FileNotFoundError:
                previous = None
            except OSError as exc:
                logger.warning(
                    "Block rules: could not read %s before a restore: %s", self._path, exc
                )
                raise RuleSaveError(
                    "The current block rules file could not be read; nothing was restored."
                ) from exc
            legacy_copy = self._path + LEGACY_BACKUP_SUFFIX
            had_legacy_copy = os.path.exists(legacy_copy)
            old_rules, old_cache = self._rules, dict(self._regex_cache)
            self._write_bytes(data)
            self._regex_cache.clear()
            try:
                self._load()
                loaded = len(self._rules) + self._stale_session_rules
                if loaded != len(parsed):
                    raise ValueError(f"only {loaded} of {len(parsed)} rules loaded")
            except Exception as exc:
                self._rules, self._regex_cache = old_rules, old_cache
                self._undo_restore(previous, legacy_copy, had_legacy_copy)
                logger.warning("Block rules: restore of %s was undone: %s", self._path, exc)
                raise ValueError(
                    f"filter_rules.json could not be loaded ({exc}); nothing was restored"
                ) from exc
            return len(self._rules)

    def _undo_restore(
        self, previous: Optional[bytes], legacy_copy: str, had_legacy_copy: bool
    ) -> None:
        """restore_file 載入失敗時把規則檔放回還原前的樣子（呼叫端持有 _lock）。

        還原前沒有檔案就把新寫的刪掉；這次才出現的 .pre-unified.bak 也一併拿掉——它是
        那份載入失敗的內容的副本，留著會被當成「升級前的規則」。舊檔寫不回去時丟
        RuleSaveError：這時磁碟上是載入失敗的內容，記憶體裡仍是還原前的清單。
        """
        try:
            if previous is None:
                os.unlink(self._path)
            else:
                self._write_bytes(previous)
        except FileNotFoundError:
            pass
        except (OSError, RuleSaveError) as exc:
            logger.error(
                "Block rules: could not put %s back after a failed restore: %s. The file "
                "holds the content that failed to load; the rules in memory are the ones "
                "from before the restore.",
                self._path,
                exc,
            )
            raise RuleSaveError(
                "The restore failed and the previous block rules file could not be put back."
            ) from exc
        if not had_legacy_copy:
            try:
                os.unlink(legacy_copy)
            except OSError:
                pass

    # ── Internal helpers ────────────────────────────────────────

    def _sorted_rules(self) -> list[FilterRule]:
        """第 1 段的規則（不含封鎖字），依 priority 排序；sorted 是穩定排序。"""
        return sorted((r for r in self._rules if r.type != "word"), key=lambda r: r.priority)

    def _find(self, rule_id: str) -> Optional[FilterRule]:
        return next((r for r in self._rules if r.id == rule_id), None)

    @staticmethod
    def _changed_fields(rule: FilterRule, data: dict[str, Any]) -> set[str]:
        """*data* 裡和 *rule* 現值不同的欄位。

        後台的編輯表單會把整條規則送回來，所以不能只看送了哪些 key。跟這個型別無關
        的欄位（非 replace 的 replacement、非 rate_limit 的次數與時間窗）不算改動；
        keyword＋block 先換成 word 再比。
        """
        current = rule.to_dict()
        new_type = data.get("type", rule.type)
        if _is_legacy_keyword_block(new_type, data.get("action", rule.action)):
            new_type = "word"
        changed: set[str] = set()
        for key, value in data.items():
            if key == "type":
                value = new_type
            elif key == "replacement" and "replace" not in (rule.type, new_type):
                continue
            elif key in ("max_count", "window_sec") and "rate_limit" not in (rule.type, new_type):
                continue
            elif key == "duration_sec":
                changed.add(key)
                continue
            if current.get(key, _MISSING) != value:
                changed.add(key)
        return changed

    def _apply_meta(self, rule: FilterRule, data: dict[str, Any]) -> FilterRule:
        """只改 META_FIELDS 的更新：只驗那幾個欄位，不碰 pattern。"""
        from .validation import FilterRuleSchema, ValidationError

        payload = {"enabled": rule.enabled, "priority": rule.priority, "lifetime": rule.lifetime}
        payload.update({k: data[k] for k in META_FIELDS if k in data})
        try:
            clean = FilterRuleSchema(only=META_FIELDS).load(payload)
        except ValidationError as err:
            texts = _flatten_messages(err.messages)
            raise RuleValidationError("; ".join(texts), _error_code(texts), err.messages) from err
        lifetime, expires_at = _resolve_lifetime(
            clean["lifetime"], clean.get("duration_sec"), existing=rule
        )
        return dataclasses.replace(
            rule,
            enabled=clean["enabled"],
            priority=clean["priority"],
            lifetime=lifetime,
            expires_at=expires_at,
        )

    def _validate(
        self,
        data: dict[str, Any],
        rule_id: Optional[str] = None,
        existing: Optional[FilterRule] = None,
    ) -> FilterRule:
        """新增、更新、測試共用的唯一驗證：回傳一條可以直接存的 FilterRule。

        *existing* 是更新前的那條規則（限時規則沒給新的 duration_sec 時沿用原本的
        到期時間）。正規式的安全檢查會起子行程，呼叫端不要拿著 _lock 呼叫。
        """
        from .validation import (
            FILTER_RULE_ACTIONS,
            FILTER_RULE_TYPES,
            FilterRuleSchema,
            ValidationError,
        )

        if "type" not in data:
            # 5.8 的 /admin/filters/add 沒給 type 回 400；不要默默當成 keyword。
            msg = "Missing data for required field."
            raise RuleValidationError(f"type: {msg}", "invalid", {"type": [msg]})
        rule_type = data["type"]
        if rule_type not in FILTER_RULE_TYPES:
            raise RuleValidationError(f"Unknown rule type: {rule_type}")
        action = data.get("action", "block")
        # `review` 是 2026-05-18 v4-r3 加的第四種動作（進審核佇列）。
        if action not in FILTER_RULE_ACTIONS:
            raise RuleValidationError(f"Unknown action: {action}")
        # 關鍵字＋封鎖只有一種：封鎖字。新增、編輯、從 API 直接送 keyword＋block 都一樣。
        if _is_legacy_keyword_block(rule_type, action):
            rule_type = "word"

        fields = FilterRuleSchema().fields
        payload = {k: data[k] for k in fields if k in data}
        payload["type"] = rule_type
        payload["action"] = action
        try:
            clean = FilterRuleSchema().load(payload)
        except ValidationError as err:
            texts = _flatten_messages(err.messages)
            raise RuleValidationError("; ".join(texts), _error_code(texts), err.messages) from err

        for key in ("pattern", "replacement"):
            if not _storable(clean[key]):
                msg = "Contains characters that cannot be saved."
                raise RuleValidationError(f"{key}: {msg}", "invalid", {key: [msg]})

        lifetime, expires_at = _resolve_lifetime(
            clean["lifetime"], clean.get("duration_sec"), existing=existing
        )

        return FilterRule(
            id=rule_id or uuid.uuid4().hex[:8],
            type=rule_type,
            pattern=clean["pattern"],
            action=action,
            priority=clean["priority"],
            enabled=clean["enabled"],
            replacement=clean["replacement"],
            max_count=clean["max_count"],
            window_sec=clean["window_sec"],
            lifetime=lifetime,
            expires_at=expires_at,
        )

    def _confirm_session(self, rule: FilterRule, existing: Optional[FilterRule] = None) -> None:
        """提交前（持有 _lock）再確認一次場次還在。

        驗證在鎖外做，場次可能在這段空檔結束；close_session 是放掉場次鎖之後才清本場次
        規則，這時才提交的規則會留到下一場結束。
        """
        if rule.lifetime != "session" or (existing is not None and existing.lifetime == "session"):
            return
        if not _session_live():
            msg = "No session is live, so a rule cannot last until the session ends."
            raise RuleValidationError(msg, "no_session", {"lifetime": [msg]})

    def _reject_duplicate_word(self, rule: FilterRule, ignore_id: Optional[str] = None) -> None:
        if rule.type != "word":
            return
        self._prune_expired()  # 到期還沒清掉的同名字不算重複
        for other in self._rules:
            if other.id != ignore_id and other.type == "word" and other.pattern == rule.pattern:
                raise RuleValidationError("This word is already blocked.", "duplicate")

    def _prune_expired(self) -> None:
        """移除已到期的限時規則（呼叫端持有 _lock）。"""
        now = time.time()
        if not any(r.is_expired(now) for r in self._rules):
            return
        self._rules = [r for r in self._rules if not r.is_expired(now)]
        self._save()

    def _compile_if_regex(self, rule: FilterRule, cache: bool = True) -> re.Pattern:
        """Compile and optionally cache a regex pattern.

        Raises ValueError with a descriptive message if the pattern is invalid.
        """
        if rule.type not in _REGEX_TYPES:
            return None  # type: ignore[return-value]
        try:
            compiled = rule_regex.compile_pattern(rule.pattern)
        except re.error as exc:
            raise ValueError(f"Invalid regex pattern '{rule.pattern}': {exc}") from exc
        if cache:
            self._regex_cache[rule.pattern] = compiled
        return compiled

    def _get_compiled(self, pattern: str) -> re.Pattern:
        """Retrieve a compiled regex from cache, compiling if necessary."""
        if pattern not in self._regex_cache:
            try:
                self._regex_cache[pattern] = rule_regex.compile_pattern(pattern)
            except re.error as exc:
                raise ValueError(f"Invalid regex pattern '{pattern}': {exc}") from exc
        return self._regex_cache[pattern]

    def _evaluate(
        self, rule: FilterRule, text: str, fingerprint: Optional[str]
    ) -> Optional[FilterResult]:
        """Evaluate a single rule against text. Returns FilterResult on match, None otherwise."""

        if rule.type == "word":
            # 只有「測試」會走到這裡；實際比對是 match_word()（第 2 段）。
            if rule.pattern.lower() in text.lower():
                return FilterResult(
                    action="block",
                    text=text,
                    reason=f"Blocked word: '{rule.pattern}'",
                    rule_id=rule.id,
                )
            return None

        if rule.type == "fingerprint":
            if fingerprint is None:
                return None
            if fingerprint == rule.pattern:
                return FilterResult(
                    action="block",
                    text=text,
                    reason=f"Fingerprint blocked: '{rule.pattern}'",
                    rule_id=rule.id,
                )
            return None

        if rule.type == "keyword":
            if rule.pattern.lower() in text.lower():
                if rule.action == "block":
                    return FilterResult(
                        action="block",
                        text=text,
                        reason=f"Keyword match: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
                if rule.action == "allow":
                    return FilterResult(
                        action="allow",
                        text=text,
                        reason=f"Keyword allow: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
                if rule.action == "review":
                    return FilterResult(
                        action="review",
                        text=text,
                        reason=f"Keyword review: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
            return None

        if rule.type == "regex":
            compiled = self._get_compiled(rule.pattern)
            hits, _ = rule_regex.run_pattern(compiled, text)
            return _regex_result(rule, text, hits, text)

        if rule.type == "replace":
            compiled = self._get_compiled(rule.pattern)
            count, new_text = rule_regex.run_pattern(
                compiled, text, mode="replace", replacement=rule.replacement
            )
            return _regex_result(rule, text, count, new_text)

        if rule.type == "rate_limit":
            if fingerprint is None:
                return None
            now = time.monotonic()
            window = rule.window_sec if rule.window_sec > 0 else 60.0
            max_count = rule.max_count if rule.max_count > 0 else 5

            timestamps = self._rate_tracker.get(fingerprint, [])
            cutoff = now - window
            # Prune old timestamps
            timestamps = [t for t in timestamps if t > cutoff]
            if len(timestamps) >= max_count:
                self._rate_tracker[fingerprint] = timestamps
                return FilterResult(
                    action="block",
                    text=text,
                    reason=f"Rate limit exceeded: {max_count}/{window}s",
                    rule_id=rule.id,
                )
            timestamps.append(now)
            self._rate_tracker[fingerprint] = timestamps
            return None

        return None

    # ── Persistence ─────────────────────────────────────────────

    def _load(self) -> None:
        """Load rules from the JSON file. Silently starts empty if file is missing or corrupt.

        One-time migration: v4.7.0 moved the default to server/runtime/filter_rules.json.
        Only migrates when self._path is the default (not a custom test path), so
        test isolation isn't broken by leaking the legacy host file.
        """
        if not os.path.isfile(self._path):
            try:
                from server.config import Config as _Cfg

                default_path = _Cfg.FILTER_RULES_FILE
            except Exception:
                default_path = None
            if default_path and os.path.abspath(self._path) == os.path.abspath(default_path):
                legacy = os.path.join(
                    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    "filter_rules.json",
                )
                if os.path.isfile(legacy) and os.path.abspath(legacy) != os.path.abspath(
                    self._path
                ):
                    try:
                        os.makedirs(os.path.dirname(self._path), exist_ok=True)
                        shutil.copy2(legacy, self._path)
                    except Exception:
                        self._rules = []
                        return
                else:
                    self._rules = []
                    return
            else:
                self._rules = []
                return
        try:
            with open(self._path, "r", encoding="utf-8") as f:
                raw = json.load(f)
            if not isinstance(raw, list):
                raise ValueError("not a JSON array")
            backed_up = self._keep_legacy_copy(raw)
            rules: list[FilterRule] = []
            converted = False
            skipped: list[str] = []
            for index, entry in enumerate(raw):
                try:
                    rule, was_converted = _parse_entry(entry)
                except ValueError as exc:
                    # 解析不了的條目（例如 priority 是 null 或 "high"）略過，其餘照常載入；
                    # 以前會讓整個引擎建不起來，伺服器就起不來。
                    skipped.append(f"entry {index + 1}: {exc}")
                    continue
                converted = converted or was_converted
                # Pre-compile regex patterns; skip rules with bad patterns
                if rule.type in _REGEX_TYPES:
                    try:
                        self._compile_if_regex(rule)
                    except ValueError:
                        rule.enabled = False
                rules.append(rule)
            # 沒有進行中的場次時，檔案裡「到本場次結束」的規則是上一場留下來的（場次
            # 結束時寫檔失敗），或是從別處還原進來的：沒有場次可以結束它們，不載入。
            # 檔案這時不動，下一次寫檔自然就沒有它們。
            self._stale_session_rules = 0
            if any(r.lifetime == "session" for r in rules) and not self._session_live_at_load():
                live = [r for r in rules if r.lifetime != "session"]
                self._stale_session_rules = len(rules) - len(live)
                logger.warning(
                    "Block rules: %d session rule(s) in %s were not loaded: no session is live",
                    self._stale_session_rules,
                    self._path,
                )
                rules = live
            self._rules = rules
            kept_skipped = True
            if skipped:
                kept_skipped = self._keep_unreadable_copy()
                logger.warning(
                    "Block rules: skipped %d unreadable entr%s in %s (%s); %s",
                    len(skipped),
                    "y" if len(skipped) == 1 else "ies",
                    self._path,
                    "; ".join(skipped[:5]),
                    (
                        "the original file is kept beside it"
                        if kept_skipped
                        else "could not keep a copy of the original file; the next change "
                        "to the rules will drop the skipped entries from it"
                    ),
                )
            if converted:
                if backed_up and kept_skipped:
                    self._save()
                else:
                    # 原檔沒備份成功就不覆寫它：這次只在記憶體裡轉換。之後主持人真的
                    # 改了清單才會寫檔（那時寫的是改過的清單，不寫就等於丟掉那次改動）。
                    logger.warning(
                        "Block rules: could not back up %s; converted in memory only, "
                        "the file was left as it is",
                        self._path,
                    )
        except (ValueError, OSError) as exc:  # 壞 JSON、不是 UTF-8、不是陣列、讀不到
            # 整個檔讀不懂：從空清單開始，但留一份原檔並講清楚——不留的話，下一次
            # 改規則就會把這個檔蓋掉。
            self._rules = []
            kept = self._keep_unreadable_copy()
            logger.warning(
                "Block rules: %s could not be read (%s); starting with no rules. %s",
                self._path,
                exc,
                (
                    "The original file is kept beside it."
                    if kept
                    else "No copy of the original could be kept; the next change to the "
                    "rules will overwrite it."
                ),
            )

    @staticmethod
    def _session_live_at_load() -> bool:
        """讀檔時問場次服務有沒有進行中的場次；問不到就當作有（寧可多載入）。"""
        try:
            return _session_live()
        except Exception as exc:  # 場次狀態檔讀不到之類
            logger.warning("Block rules: could not tell whether a session is live: %s", exc)
            return True

    def _keep_unreadable_copy(self) -> bool:
        """規則檔裡有條目解析不了時，在旁邊留一份原檔。

        被略過的條目在下一次寫檔時就會從檔案消失，留著原檔才找得回來。檔名帶內容的
        雜湊（``filter_rules.json.unreadable-<12 碼>.bak``）：同樣的內容不會重複留，
        不同的壞檔各留一份。不是 ``*.json``，備份打包不會帶走。先寫暫存檔再
        os.replace。回傳原檔現在是否有副本。
        """
        try:
            with open(self._path, "rb") as f:
                original = f.read()
        except OSError as exc:
            logger.warning("Block rules: could not read %s for a copy: %s", self._path, exc)
            return False
        digest = hashlib.sha256(original).hexdigest()[:12]
        copy_path = self._path + UNREADABLE_BACKUP_SUFFIX.format(digest=digest)
        if os.path.exists(copy_path):
            return True
        tmp_path = copy_path + ".tmp"
        try:
            with open(tmp_path, "wb") as f:
                f.write(original)
            os.replace(tmp_path, copy_path)
            return True
        except OSError as exc:
            logger.warning("Block rules: could not keep a copy of %s: %s", self._path, exc)
            try:
                os.unlink(tmp_path)
            except OSError:
                pass
            return False

    def _keep_legacy_copy(self, raw: list) -> bool:
        """需要轉換的規則檔（5.8 以前的格式）第一次被讀到時，在旁邊留一份原檔。

        轉換會把 keyword＋block 改成 word、並多寫 lifetime 等欄位；留著原檔，降版、
        還原或對照都還找得到。已經有備份就不再動它，所以重複啟動是冪等的。
        先複製成暫存檔再 os.replace，備份檔不會只寫了一半。

        回傳原檔現在是否有備份（不需要備份時也回 True）。
        """
        if not any(
            isinstance(e, dict)
            and (
                "lifetime" not in e
                or _is_legacy_keyword_block(e.get("type", "keyword"), e.get("action", "block"))
            )
            for e in raw
        ):
            return True
        backup = self._path + LEGACY_BACKUP_SUFFIX
        if os.path.exists(backup):
            return True
        tmp_path = backup + ".tmp"
        try:
            shutil.copy2(self._path, tmp_path)
            os.replace(tmp_path, backup)
            return True
        except OSError as exc:
            logger.warning("Block rules: could not back up %s: %s", self._path, exc)
            try:
                os.unlink(tmp_path)
            except OSError:
                pass
            return False

    def _write(self, rules: list[FilterRule]) -> None:
        """把 *rules* 原子地寫進規則檔；寫不進去時記警告並丟 RuleSaveError。"""
        data = [r.to_dict() for r in rules]
        try:
            payload = json.dumps(data, indent=2, ensure_ascii=False).encode("utf-8")
        except UnicodeEncodeError as exc:
            logger.warning("Block rules: could not encode the rules for %s: %s", self._path, exc)
            raise RuleSaveError(
                "The block rules contain text that cannot be saved; the change was not saved."
            ) from exc
        self._write_bytes(payload)

    def _write_bytes(self, payload: bytes) -> None:
        """暫存檔＋os.replace。暫存檔名每次都不同（點開頭，備份打包會略過），不會和
        別的寫入路徑撞名。"""
        directory = os.path.dirname(os.path.abspath(self._path))
        tmp_path = None
        try:
            os.makedirs(directory, exist_ok=True)
            fd, tmp_path = tempfile.mkstemp(
                dir=directory, prefix="." + os.path.basename(self._path) + ".", suffix=".tmp"
            )
            with os.fdopen(fd, "wb") as f:
                f.write(payload)
            # mkstemp 建的是 0600；沿用原檔的權限（沒有原檔就 0644），與以前的寫法一致。
            try:
                mode = os.stat(self._path).st_mode & 0o777
            except OSError:
                mode = 0o644
            os.chmod(tmp_path, mode)
            os.replace(tmp_path, self._path)
        except OSError as exc:
            logger.warning("Block rules: could not write %s: %s", self._path, exc)
            if tmp_path:
                try:
                    os.unlink(tmp_path)
                except OSError:
                    pass
            raise RuleSaveError(
                "The block rules file could not be written; the change was not saved."
            ) from exc

    def _commit(self, rules: list[FilterRule]) -> None:
        """先寫檔、寫成功才換掉記憶體裡的清單：寫失敗時這次改動整個不生效。"""
        self._write(rules)
        self._rules = rules

    def _save(self) -> None:
        """不是主持人發動的寫檔（到期清除、讀檔轉換）：寫不進去只記警告。"""
        try:
            self._write(self._rules)
        except RuleSaveError:
            pass

    def cleanup_rate_tracker(self, max_age: float = 600.0) -> int:
        """Remove stale fingerprint entries older than max_age seconds.

        Returns the number of fingerprints cleaned up.
        """
        with self._lock:
            now = time.monotonic()
            cutoff = now - max_age
            stale = [
                fp
                for fp, timestamps in self._rate_tracker.items()
                if not timestamps or max(timestamps) < cutoff
            ]
            for fp in stale:
                del self._rate_tracker[fp]
            return len(stale)


# Module-level singleton
filter_engine = FilterEngine()


def restore_rules_file(data: bytes) -> int:
    """備份還原 ``runtime/filter_rules.json`` 的入口（services/backup.py 呼叫）。

    *data* 是備份裡那個檔的原始內容。回傳還原後的規則數；內容不是 JSON 陣列丟
    ValueError（不動現有規則），寫不進去丟 RuleSaveError。換檔與重新載入都在引擎的
    變更鎖裡完成，見 FilterEngine.restore_file。
    """
    return filter_engine.restore_file(data)
