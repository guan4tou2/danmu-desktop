"""Advanced content filtering engine with keyword, regex, replace, and rate-limit rules."""

import json
import os
import re
import threading
import time
import uuid
from dataclasses import asdict, dataclass
from typing import Any, Optional


@dataclass
class FilterRule:
    id: str
    type: str  # "keyword", "regex", "replace", "rate_limit", "fingerprint"
    pattern: str
    action: str  # "block", "replace", "allow"
    priority: int = 0
    enabled: bool = True
    replacement: str = ""
    # rate_limit fields
    max_count: int = 0
    window_sec: float = 0.0

    def to_dict(self) -> dict:
        d = asdict(self)
        # Only include rate_limit fields when relevant
        if self.type != "rate_limit":
            d.pop("max_count", None)
            d.pop("window_sec", None)
        if self.type != "replace":
            d.pop("replacement", None)
        return d


@dataclass
class FilterResult:
    action: str  # "block", "replace", "allow", "pass"
    text: str
    reason: str = ""
    rule_id: str = ""


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
            path = os.environ.get("FILTER_RULES_FILE") or os.path.join(
                os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                "filter_rules.json",
            )
        self._path = path
        self._load()
        self._initialized = True

    # ── Public API ──────────────────────────────────────────────

    def check(self, text: str, fingerprint: Optional[str] = None) -> FilterResult:
        """Evaluate text against all enabled rules in priority order.

        Returns on the first matching rule. If no rule matches, returns a
        FilterResult with action="pass" and the original text.
        """
        with self._lock:
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
                    return result
        return FilterResult(action="pass", text=text)

    def add_rule(self, rule_data: dict[str, Any]) -> str:
        """Add a new filtering rule. Returns the generated rule id.

        Raises ValueError if a regex pattern is invalid.
        """
        with self._lock:
            rule = self._build_rule(rule_data)
            self._compile_if_regex(rule)
            self._rules.append(rule)
            self._save()
            return rule.id

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

    def update_rule(self, rule_id: str, data: dict[str, Any]) -> bool:
        """Update fields of an existing rule. Returns True if found and updated.

        Raises ValueError if an updated regex pattern is invalid.
        """
        with self._lock:
            for rule in self._rules:
                if rule.id == rule_id:
                    old_pattern = rule.pattern
                    for key, value in data.items():
                        if key == "id":
                            continue  # id is immutable
                        if hasattr(rule, key):
                            setattr(rule, key, value)
                    # Re-validate regex if pattern or type changed
                    if rule.type in ("regex", "replace"):
                        if rule.pattern != old_pattern or "type" in data:
                            self._regex_cache.pop(old_pattern, None)
                            self._compile_if_regex(rule)
                    elif old_pattern in self._regex_cache:
                        self._regex_cache.pop(old_pattern, None)
                    self._save()
                    return True
        return False

    def list_rules(self) -> list[dict[str, Any]]:
        """Return all rules as a list of dicts, sorted by priority."""
        with self._lock:
            return [r.to_dict() for r in self._sorted_rules()]

    def test_rule(self, rule_data: dict[str, Any], sample_text: str) -> FilterResult:
        """Evaluate a rule definition against sample text without persisting.

        Raises ValueError if a regex pattern is invalid.
        """
        rule = self._build_rule(rule_data)
        self._compile_if_regex(rule, cache=False)
        result = self._evaluate(rule, sample_text, fingerprint=None)
        if result is not None:
            return result
        return FilterResult(action="pass", text=sample_text)

    # ── Internal helpers ────────────────────────────────────────

    def _sorted_rules(self) -> list[FilterRule]:
        return sorted(self._rules, key=lambda r: r.priority)

    def _build_rule(self, data: dict[str, Any]) -> FilterRule:
        rule_type = data.get("type", "keyword")
        if rule_type not in ("keyword", "regex", "replace", "rate_limit", "fingerprint"):
            raise ValueError(f"Unknown rule type: {rule_type}")

        action = data.get("action", "block")
        if action not in ("block", "replace", "allow"):
            raise ValueError(f"Unknown action: {action}")

        return FilterRule(
            id=uuid.uuid4().hex[:8],
            type=rule_type,
            pattern=data.get("pattern", ""),
            action=action,
            priority=int(data.get("priority", 0)),
            enabled=bool(data.get("enabled", True)),
            replacement=data.get("replacement", ""),
            max_count=int(data.get("max_count", 0)),
            window_sec=float(data.get("window_sec", 0.0)),
        )

    def _compile_if_regex(self, rule: FilterRule, cache: bool = True) -> re.Pattern:
        """Compile and optionally cache a regex pattern.

        Raises ValueError with a descriptive message if the pattern is invalid.
        """
        if rule.type not in ("regex", "replace"):
            return None  # type: ignore[return-value]
        try:
            compiled = re.compile(rule.pattern, re.IGNORECASE)
        except re.error as exc:
            raise ValueError(f"Invalid regex pattern '{rule.pattern}': {exc}") from exc
        if cache:
            self._regex_cache[rule.pattern] = compiled
        return compiled

    def _get_compiled(self, pattern: str) -> re.Pattern:
        """Retrieve a compiled regex from cache, compiling if necessary."""
        if pattern not in self._regex_cache:
            try:
                self._regex_cache[pattern] = re.compile(pattern, re.IGNORECASE)
            except re.error as exc:
                raise ValueError(f"Invalid regex pattern '{pattern}': {exc}") from exc
        return self._regex_cache[pattern]

    def _evaluate(
        self, rule: FilterRule, text: str, fingerprint: Optional[str]
    ) -> Optional[FilterResult]:
        """Evaluate a single rule against text. Returns FilterResult on match, None otherwise."""

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
            return None

        if rule.type == "regex":
            compiled = self._get_compiled(rule.pattern)
            if compiled.search(text):
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
            return None

        if rule.type == "replace":
            compiled = self._get_compiled(rule.pattern)
            new_text, count = compiled.subn(rule.replacement, text)
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
        """Load rules from the JSON file. Silently starts empty if file is missing or corrupt."""
        if not os.path.isfile(self._path):
            self._rules = []
            return
        try:
            with open(self._path, "r", encoding="utf-8") as f:
                raw = json.load(f)
            if not isinstance(raw, list):
                self._rules = []
                return
            rules: list[FilterRule] = []
            for entry in raw:
                if not isinstance(entry, dict):
                    continue
                rule = FilterRule(
                    id=entry.get("id", uuid.uuid4().hex[:8]),
                    type=entry.get("type", "keyword"),
                    pattern=entry.get("pattern", ""),
                    action=entry.get("action", "block"),
                    priority=int(entry.get("priority", 0)),
                    enabled=bool(entry.get("enabled", True)),
                    replacement=entry.get("replacement", ""),
                    max_count=int(entry.get("max_count", 0)),
                    window_sec=float(entry.get("window_sec", 0.0)),
                )
                # Pre-compile regex patterns; skip rules with bad patterns
                if rule.type in ("regex", "replace"):
                    try:
                        self._compile_if_regex(rule)
                    except ValueError:
                        rule.enabled = False
                rules.append(rule)
            self._rules = rules
        except (json.JSONDecodeError, OSError):
            self._rules = []

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
