"""
Sound effects service for danmu triggers.

Rules map trigger conditions (keyword match, effect name, or all messages)
to sound files.  Each rule has an independent cooldown to prevent spam.

Sounds directory: server/static/sounds/
Rules persistence: server/static/sounds/sound_rules.json

Hot-reload: scans the sounds directory every 5 seconds (mtime-based),
following the same pattern as the effects service.
"""

import json
import logging
import os
import threading
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_SOUNDS_DIR = Path(__file__).parent.parent / "static" / "sounds"
_RULES_FILE = _SOUNDS_DIR / "sound_rules.json"
_SCAN_INTERVAL = 5.0
_MAX_UPLOAD_SIZE = 1 * 1024 * 1024  # 1 MB
_ALLOWED_EXTENSIONS = {"mp3", "ogg", "wav"}
_SOUND_URL_PREFIX = "/static/sounds/"


class SoundService:
    """Singleton sound effects service with trigger rules and cooldown tracking."""

    _instance: Optional["SoundService"] = None
    _init_lock = threading.Lock()

    def __new__(cls) -> "SoundService":
        if cls._instance is None:
            with cls._init_lock:
                if cls._instance is None:
                    inst = super().__new__(cls)
                    inst._initialized = False
                    cls._instance = inst
        return cls._instance

    def __init__(self) -> None:
        if self._initialized:
            return
        self._lock = threading.Lock()
        self._scan_lock = threading.Lock()
        self._rules: List[Dict[str, Any]] = []
        self._cooldowns: Dict[str, float] = {}  # rule_id -> last trigger monotonic time
        self._sound_files: List[str] = []
        self._dir_mtime: float = 0.0
        self._last_scan: float = 0.0
        self._load_rules()
        self._initialized = True

    # ─── Rules persistence ────────────────────────────────────────────────

    def _load_rules(self) -> None:
        """Load rules from JSON file.  Called once at init (no lock needed yet)."""
        _SOUNDS_DIR.mkdir(parents=True, exist_ok=True)
        if not _RULES_FILE.exists():
            self._rules = []
            return
        try:
            data = json.loads(_RULES_FILE.read_text(encoding="utf-8"))
            if isinstance(data, list):
                self._rules = data
            else:
                logger.warning("[Sound] Rules file is not a list, resetting")
                self._rules = []
        except Exception as e:
            logger.error("[Sound] Failed to load rules: %s", e)
            self._rules = []

    def _save_rules(self) -> None:
        """Persist current rules to JSON.  Caller must hold self._lock."""
        _SOUNDS_DIR.mkdir(parents=True, exist_ok=True)
        try:
            tmp_path = _RULES_FILE.with_suffix(".tmp")
            tmp_path.write_text(
                json.dumps(self._rules, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            tmp_path.replace(_RULES_FILE)
        except Exception as e:
            logger.error("[Sound] Failed to save rules: %s", e)

    # ─── Directory scanning ───────────────────────────────────────────────

    def _scan_sounds(self) -> None:
        """Scan sounds directory for available sound files (mtime-based cache)."""
        with self._scan_lock:
            _SOUNDS_DIR.mkdir(parents=True, exist_ok=True)
            try:
                current_mtime = os.stat(_SOUNDS_DIR).st_mtime
            except OSError:
                return

            with self._lock:
                if current_mtime == self._dir_mtime:
                    self._last_scan = time.monotonic()
                    return

            files: List[str] = []
            for p in _SOUNDS_DIR.iterdir():
                if p.is_file() and p.suffix.lstrip(".").lower() in _ALLOWED_EXTENSIONS:
                    files.append(p.name)
            files.sort()

            with self._lock:
                self._sound_files = files
                self._dir_mtime = current_mtime
                self._last_scan = time.monotonic()

            logger.info("[Sound] Scanned %d sound files", len(files))

    def _maybe_scan(self, force: bool = False) -> None:
        with self._lock:
            should_scan = force or time.monotonic() - self._last_scan >= _SCAN_INTERVAL
        if should_scan:
            self._scan_sounds()

    # ─── Sound file management ────────────────────────────────────────────

    def list_sounds(self) -> List[str]:
        """Return list of available sound filenames."""
        self._maybe_scan()
        with self._lock:
            return list(self._sound_files)

    def upload_sound(self, name: str, file_bytes: bytes, ext: str) -> bool:
        """
        Save an uploaded sound file.

        Args:
            name: base filename (without extension)
            file_bytes: raw file content
            ext: file extension (mp3/ogg/wav)

        Returns:
            True on success, False on validation failure.
        """
        ext = ext.lower().lstrip(".")
        if ext not in _ALLOWED_EXTENSIONS:
            logger.warning("[Sound] Rejected upload: invalid extension '%s'", ext)
            return False

        if len(file_bytes) > _MAX_UPLOAD_SIZE:
            logger.warning("[Sound] Rejected upload: file too large (%d bytes)", len(file_bytes))
            return False

        # Sanitise filename: only allow safe characters
        safe_name = "".join(c for c in name if c.isalnum() or c in "-_")
        if not safe_name:
            logger.warning("[Sound] Rejected upload: empty sanitised name")
            return False

        filename = f"{safe_name}.{ext}"
        dest = _SOUNDS_DIR / filename

        _SOUNDS_DIR.mkdir(parents=True, exist_ok=True)
        try:
            tmp_path = dest.with_suffix(f".{ext}.tmp")
            tmp_path.write_bytes(file_bytes)
            tmp_path.replace(dest)
        except OSError as e:
            logger.error("[Sound] Failed to save sound '%s': %s", filename, e)
            return False

        self._maybe_scan(force=True)
        return True

    def delete_sound(self, name: str) -> bool:
        """
        Delete a sound file by filename.

        Args:
            name: full filename including extension (e.g. "alert.mp3")

        Returns:
            True if deleted, False otherwise.
        """
        if not name or "/" in name or "\\" in name or ".." in name:
            return False

        target = _SOUNDS_DIR / name
        # Resolve to prevent path traversal
        try:
            resolved = target.resolve()
            if not str(resolved).startswith(str(_SOUNDS_DIR.resolve())):
                return False
        except (OSError, ValueError):
            return False

        if not target.is_file():
            return False

        try:
            target.unlink()
        except OSError:
            return False

        self._maybe_scan(force=True)
        return True

    # ─── Rule management ──────────────────────────────────────────────────

    def _validate_rule(self, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Validate and normalise rule data.  Returns cleaned rule or None."""
        trigger_type = str(data.get("trigger_type", "")).strip()
        if trigger_type not in ("keyword", "effect", "all"):
            return None

        trigger_value = str(data.get("trigger_value", "")).strip()
        if trigger_type in ("keyword", "effect") and not trigger_value:
            return None

        sound_name = str(data.get("sound_name", "")).strip()
        if not sound_name:
            return None

        try:
            volume = float(data.get("volume", 1.0))
        except (TypeError, ValueError):
            volume = 1.0
        volume = max(0.0, min(1.0, volume))

        try:
            cooldown_ms = int(data.get("cooldown_ms", 0))
        except (TypeError, ValueError):
            cooldown_ms = 0
        cooldown_ms = max(0, cooldown_ms)

        return {
            "trigger_type": trigger_type,
            "trigger_value": trigger_value if trigger_type != "all" else "",
            "sound_name": sound_name,
            "volume": volume,
            "cooldown_ms": cooldown_ms,
        }

    def add_rule(self, rule_data: Dict[str, Any]) -> Optional[str]:
        """
        Add a new trigger rule.

        Returns:
            The new rule's id, or None if validation failed.
        """
        cleaned = self._validate_rule(rule_data)
        if cleaned is None:
            return None

        rule_id = uuid.uuid4().hex[:12]
        cleaned["id"] = rule_id

        with self._lock:
            self._rules.append(cleaned)
            self._save_rules()

        return rule_id

    def remove_rule(self, rule_id: str) -> bool:
        """Remove a rule by id.  Returns True if found and removed."""
        with self._lock:
            before = len(self._rules)
            self._rules = [r for r in self._rules if r.get("id") != rule_id]
            if len(self._rules) == before:
                return False
            self._cooldowns.pop(rule_id, None)
            self._save_rules()
            return True

    def update_rule(self, rule_id: str, data: Dict[str, Any]) -> bool:
        """
        Update an existing rule.

        Returns:
            True if found and updated, False otherwise.
        """
        cleaned = self._validate_rule(data)
        if cleaned is None:
            return False

        with self._lock:
            for i, rule in enumerate(self._rules):
                if rule.get("id") == rule_id:
                    cleaned["id"] = rule_id
                    self._rules[i] = cleaned
                    self._save_rules()
                    return True
            return False

    def list_rules(self) -> List[Dict[str, Any]]:
        """Return a copy of all rules in priority order."""
        with self._lock:
            return [dict(r) for r in self._rules]

    # ─── Matching engine ──────────────────────────────────────────────────

    def match(
        self, text: str, effects: Optional[List[Dict[str, Any]]] = None
    ) -> Optional[Dict[str, Any]]:
        """
        Find the first matching rule for the given danmu text and optional effects.

        Rules are checked in list order (priority order).  A rule is skipped if
        it is still within its cooldown window.

        Args:
            text: the danmu message text
            effects: optional list of active effects [{name: str, ...}]

        Returns:
            {url: str, volume: float} if a rule matched, else None.
        """
        now = time.monotonic()
        effect_names: Optional[set] = None
        if effects:
            effect_names = {str(e.get("name", "")).strip() for e in effects} - {""}

        with self._lock:
            rules = list(self._rules)

        for rule in rules:
            rule_id = rule.get("id", "")
            trigger_type = rule.get("trigger_type")
            trigger_value = rule.get("trigger_value", "")
            cooldown_ms = rule.get("cooldown_ms", 0)

            # Check cooldown
            if cooldown_ms > 0:
                with self._lock:
                    last = self._cooldowns.get(rule_id, 0.0)
                if (now - last) * 1000 < cooldown_ms:
                    continue

            # Check trigger condition
            matched = False
            if trigger_type == "all":
                matched = True
            elif trigger_type == "keyword":
                if trigger_value and trigger_value in text:
                    matched = True
            elif trigger_type == "effect":
                if effect_names and trigger_value in effect_names:
                    matched = True

            if not matched:
                continue

            # Verify the sound file still exists
            sound_name = rule.get("sound_name", "")
            sound_path = _SOUNDS_DIR / sound_name
            if not sound_path.is_file():
                continue

            # Record trigger time
            with self._lock:
                self._cooldowns[rule_id] = now

            return {
                "url": f"{_SOUND_URL_PREFIX}{sound_name}",
                "volume": rule.get("volume", 1.0),
            }

        return None

    # ─── Reset (for testing) ──────────────────────────────────────────────

    @classmethod
    def _reset(cls) -> None:
        """Reset the singleton instance.  For testing only."""
        with cls._init_lock:
            cls._instance = None


sound_service = SoundService()
