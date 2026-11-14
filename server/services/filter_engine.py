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
已經轉過的檔案不會再動，備份也不會被覆寫。原本的字串黑名單只存在記憶體裡（每次重啟
就清空），沒有檔案可以搬。
"""

import json
import os
import re
import shutil
import threading
import time
import uuid
from dataclasses import asdict, dataclass
from typing import Any, Optional

from . import rule_regex

# 舊版規則檔第一次被新版讀到時留下的備份（不會被備份功能的 *.json 打包帶走）
LEGACY_BACKUP_SUFFIX = ".pre-unified.bak"

_REGEX_TYPES = ("regex", "replace")


class RuleValidationError(ValueError):
    """規則沒通過驗證。``code`` 給後台對應翻譯文案，``details`` 是逐欄位的訊息。"""

    def __init__(self, message: str, code: str = "invalid", details: Any = None) -> None:
        super().__init__(message)
        self.code = code
        self.details = details if details is not None else {"_schema": [message]}


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
    if "backtracking" in joined or "safety check" in joined:
        return "unsafe_regex"
    return "invalid"


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
        """新增一條規則，回傳 id。沒通過驗證時丟 RuleValidationError（ValueError）。"""
        with self._lock:
            rule = self._validate(rule_data)
            self._reject_duplicate_word(rule)
            self._compile_if_regex(rule)
            self._rules.append(rule)
            self._save()
            return rule.id

    def update_rule(self, rule_id: str, data: dict[str, Any]) -> bool:
        """修改一條規則。找到並更新回 True，找不到回 False。

        把現有規則與 *data* 合併成完整的一筆，再走跟新增同一個 ``_validate``。
        """
        with self._lock:
            for i, rule in enumerate(self._rules):
                if rule.id != rule_id:
                    continue
                merged = rule.to_dict()
                merged.update({k: v for k, v in data.items() if k != "id"})
                updated = self._validate(merged, rule_id=rule.id)
                self._reject_duplicate_word(updated, ignore_id=rule.id)
                self._compile_if_regex(updated)
                if rule.pattern != updated.pattern:
                    self._regex_cache.pop(rule.pattern, None)
                self._rules[i] = updated
                self._save()
                return True
        return False

    def remove_rule(self, rule_id: str) -> bool:
        """Remove a rule by id. Returns True if found and removed."""
        with self._lock:
            for i, rule in enumerate(self._rules):
                if rule.id == rule_id:
                    removed = self._rules.pop(i)
                    self._regex_cache.pop(removed.pattern, None)
                    self._save()
                    return True
        return False

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

    def clear_session_rules(self) -> int:
        """移除所有「到本場次結束」的規則，回傳移除幾條。場次結束時自動呼叫。"""
        with self._lock:
            before = len(self._rules)
            self._rules = [r for r in self._rules if r.lifetime != "session"]
            removed = before - len(self._rules)
            if removed:
                self._save()
            return removed

    def test_rule(self, rule_data: dict[str, Any], sample_text: str) -> FilterResult:
        """Evaluate a rule definition against sample text without persisting.

        Raises ValueError (RuleValidationError) if the rule is invalid.
        """
        rule = self._validate(rule_data)
        self._compile_if_regex(rule, cache=False)
        result = self._evaluate(rule, sample_text, fingerprint=None)
        if result is not None:
            return result
        return FilterResult(action="pass", text=sample_text)

    # ── 封鎖字（/admin/blacklist/* 與 /admin/live/block 的薄轉接） ──

    def add_word(self, word: str) -> bool:
        """加一個永久封鎖字。已經有同一個字（大小寫完全相同）時回 False。"""
        with self._lock:
            if any(r.type == "word" and r.pattern == word for r in self._rules):
                return False
            self.add_rule({"type": "word", "pattern": word, "action": "block"})
            return True

    def remove_word(self, word: str) -> bool:
        with self._lock:
            before = len(self._rules)
            self._rules = [r for r in self._rules if not (r.type == "word" and r.pattern == word)]
            if len(self._rules) == before:
                return False
            self._save()
            return True

    def list_words(self) -> list[str]:
        with self._lock:
            self._prune_expired()
            return [r.pattern for r in self._rules if r.type == "word"]

    @property
    def path(self) -> str:
        return self._path

    def reload(self) -> None:
        """重新從檔案讀規則（備份還原寫回規則檔之後呼叫）。"""
        with self._lock:
            self._regex_cache.clear()
            self._load()

    # ── Internal helpers ────────────────────────────────────────

    def _sorted_rules(self) -> list[FilterRule]:
        """第 1 段的規則（不含封鎖字），依 priority 排序；sorted 是穩定排序。"""
        return sorted((r for r in self._rules if r.type != "word"), key=lambda r: r.priority)

    def _validate(self, data: dict[str, Any], rule_id: Optional[str] = None) -> FilterRule:
        """新增、更新、測試共用的唯一驗證：回傳一條可以直接存的 FilterRule。"""
        from .validation import (
            FILTER_RULE_ACTIONS,
            FILTER_RULE_TYPES,
            FilterRuleSchema,
            ValidationError,
        )

        rule_type = data.get("type", "keyword")
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

        lifetime = clean["lifetime"]
        expires_at = None
        if lifetime == "timed":
            if clean.get("duration_sec") is not None:
                expires_at = time.time() + clean["duration_sec"]
            else:
                expires_at = clean["expires_at"]

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

    def _reject_duplicate_word(self, rule: FilterRule, ignore_id: Optional[str] = None) -> None:
        if rule.type != "word":
            return
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
            if hits:
                if rule.action == "block":
                    return FilterResult(
                        action="block",
                        text=text,
                        reason=f"Regex match: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
                if rule.action == "allow":
                    return FilterResult(
                        action="allow",
                        text=text,
                        reason=f"Regex allow: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
                if rule.action == "review":
                    return FilterResult(
                        action="review",
                        text=text,
                        reason=f"Regex review: '{rule.pattern}'",
                        rule_id=rule.id,
                    )
            return None

        if rule.type == "replace":
            compiled = self._get_compiled(rule.pattern)
            count, new_text = rule_regex.run_pattern(
                compiled, text, mode="replace", replacement=rule.replacement
            )
            if count > 0:
                return FilterResult(
                    action="replace",
                    text=new_text,
                    reason=f"Replaced {count} match(es) via '{rule.pattern}'",
                    rule_id=rule.id,
                )
            return None

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
                self._rules = []
                return
            self._keep_legacy_copy(raw)
            rules: list[FilterRule] = []
            converted = False
            for entry in raw:
                if not isinstance(entry, dict):
                    continue
                lifetime = entry.get("lifetime", "permanent")
                if lifetime not in ("permanent", "session", "timed"):
                    lifetime = "permanent"
                expires_at = entry.get("expires_at")
                if lifetime == "timed" and not isinstance(expires_at, (int, float)):
                    lifetime, expires_at = "permanent", None
                rule_type = entry.get("type", "keyword")
                action = entry.get("action", "block")
                if _is_legacy_keyword_block(rule_type, action):
                    rule_type, converted = "word", True
                rule = FilterRule(
                    id=entry.get("id", uuid.uuid4().hex[:8]),
                    type=rule_type,
                    pattern=entry.get("pattern", ""),
                    action=action,
                    priority=int(entry.get("priority", 0)),
                    enabled=bool(entry.get("enabled", True)),
                    replacement=entry.get("replacement", ""),
                    max_count=int(entry.get("max_count", 0)),
                    window_sec=float(entry.get("window_sec", 0.0)),
                    lifetime=lifetime,
                    expires_at=float(expires_at) if lifetime == "timed" else None,
                )
                # Pre-compile regex patterns; skip rules with bad patterns
                if rule.type in _REGEX_TYPES:
                    try:
                        self._compile_if_regex(rule)
                    except ValueError:
                        rule.enabled = False
                rules.append(rule)
            self._rules = rules
            if converted:
                self._save()
        except (json.JSONDecodeError, OSError):
            self._rules = []

    def _keep_legacy_copy(self, raw: list) -> None:
        """需要轉換的規則檔（5.8 以前的格式）第一次被讀到時，在旁邊留一份原檔。

        轉換會把 keyword＋block 改成 word、並多寫 lifetime 等欄位；留著原檔，降版、
        還原或對照都還找得到。已經有備份就不再動它，所以重複啟動是冪等的。
        """
        if not any(
            isinstance(e, dict)
            and (
                "lifetime" not in e
                or _is_legacy_keyword_block(e.get("type", "keyword"), e.get("action", "block"))
            )
            for e in raw
        ):
            return
        backup = self._path + LEGACY_BACKUP_SUFFIX
        if os.path.exists(backup):
            return
        try:
            shutil.copy2(self._path, backup)
        except OSError:
            pass

    def _save(self) -> None:
        """Persist current rules to the JSON file."""
        data = [r.to_dict() for r in self._rules]
        tmp_path = self._path + ".tmp"
        try:
            with open(tmp_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            os.replace(tmp_path, self._path)
        except OSError:
            # Best-effort; don't crash if disk write fails
            try:
                os.unlink(tmp_path)
            except OSError:
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
