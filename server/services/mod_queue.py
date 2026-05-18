"""Moderation Queue service (P0-4, design v4-r3 2026-05-18).

In-memory pending-message store that backs the admin Moderation Queue
swimlane. Messages enter the queue when a filter rule with
``action="review"`` matches; admin then approves (re-forward to overlay)
or rejects (drop). After ``AUTO_REJECT_SEC`` the message is auto-rejected.

Backed by a deque so we can cap memory at ``MAX_PENDING`` entries
(oldest dropped). Thread-safe via a single lock.

Decisions emit audit_log entries so the audit page reflects the action.
The frontend reads the queue via /admin/modqueue/list every 4 s; we keep
a small `approved` + `rejected` retention buffer so the UI shows recently
resolved items in the right-hand columns.
"""

from __future__ import annotations

import logging
import threading
import time
import uuid
from collections import deque
from typing import Any, Dict, List, Optional

from . import audit_log

logger = logging.getLogger(__name__)

# Tunables — sized for a mid-event with bursty moderation, not a
# persistent message store. Pending overflow drops oldest item.
MAX_PENDING = 200
MAX_RECENT_RESOLVED = 50
AUTO_REJECT_SEC = 30

# Severity heuristic — when filter_engine doesn't set one explicitly,
# infer from the rule's name / pattern. Conservative: anything matching
# an obvious profanity / link / scam-like pattern is HIGH.
_HIGH_PATTERNS = ("profanity", "spam", "scam", "url", "link", "t.me", "bit.ly")
_MEDIUM_PATTERNS = ("repeat", "caps", "選舉", "投票給")


def _infer_severity(rule_name: str, pattern: str) -> str:
    haystack = f"{rule_name} {pattern}".lower()
    if any(s in haystack for s in _HIGH_PATTERNS):
        return "high"
    if any(s in haystack for s in _MEDIUM_PATTERNS):
        return "medium"
    return "low"


class _ModQueue:
    def __init__(self) -> None:
        self._lock = threading.Lock()
        self._pending: deque[Dict[str, Any]] = deque(maxlen=MAX_PENDING)
        self._approved: deque[Dict[str, Any]] = deque(maxlen=MAX_RECENT_RESOLVED)
        self._rejected: deque[Dict[str, Any]] = deque(maxlen=MAX_RECENT_RESOLVED)
        # Throughput counters (60s rolling window).
        self._decisions_window: deque[float] = deque(maxlen=60)
        self._review_durations: deque[float] = deque(maxlen=60)
        self._auto_rejected_count = 0
        self._manual_decisions_count = 0
        # Background reaper for auto-reject.
        self._reaper_running = False
        self._reaper_thread: Optional[threading.Thread] = None

    # ── lifecycle ──────────────────────────────────────────────────────

    def start_reaper(self) -> None:
        """Start the auto-reject reaper thread (idempotent)."""
        with self._lock:
            if self._reaper_running:
                return
            self._reaper_running = True
        t = threading.Thread(target=self._reaper_loop, name="modqueue-reaper", daemon=True)
        self._reaper_thread = t
        t.start()

    def stop_reaper(self) -> None:
        with self._lock:
            self._reaper_running = False

    def _reaper_loop(self) -> None:
        while True:
            with self._lock:
                if not self._reaper_running:
                    return
            try:
                self._auto_reject_expired()
            except Exception as exc:  # pragma: no cover — daemon safety net
                logger.warning("modqueue reaper: %s", exc)
            time.sleep(1.0)

    def _auto_reject_expired(self) -> None:
        now = time.time()
        expired_ids: List[str] = []
        with self._lock:
            for item in list(self._pending):
                if now - item["created_at"] >= AUTO_REJECT_SEC:
                    expired_ids.append(item["id"])
        for qid in expired_ids:
            self._resolve(qid, action="reject", auto=True)

    # ── enqueue / decisions ────────────────────────────────────────────

    def enqueue(
        self,
        text: str,
        *,
        fingerprint: str = "",
        nickname: str = "",
        rule_name: str = "review",
        pattern: str = "",
        severity: Optional[str] = None,
        meta: Optional[Dict[str, Any]] = None,
    ) -> str:
        """Add a message to the pending queue. Returns the queue id."""
        qid = uuid.uuid4().hex[:12]
        now = time.time()
        ts = time.strftime("%H:%M:%S", time.localtime(now))
        item = {
            "id": qid,
            "created_at": now,
            "time": ts,
            "text": text[:500],
            "content": text[:500],  # alias for frontend convenience
            "fp": (fingerprint or "")[:32],
            "nick": (nickname or "匿名")[:64],
            "rule": rule_name or "review",
            "matched_rule": rule_name or "review",
            "severity": severity or _infer_severity(rule_name, pattern),
            "meta": meta or {},
        }
        with self._lock:
            self._pending.append(item)
        return qid

    def approve(self, qid: str) -> Optional[Dict[str, Any]]:
        return self._resolve(qid, action="approve")

    def reject(self, qid: str) -> Optional[Dict[str, Any]]:
        return self._resolve(qid, action="reject")

    def bulk(self, action: str, severity: Optional[str] = None) -> int:
        """Apply approve/reject to all pending items matching `severity`."""
        if action not in ("approve", "reject"):
            return 0
        with self._lock:
            target_ids = [
                p["id"]
                for p in list(self._pending)
                if severity in (None, "", p.get("severity"))
            ]
        applied = 0
        for qid in target_ids:
            if self._resolve(qid, action=action) is not None:
                applied += 1
        return applied

    def _resolve(self, qid: str, *, action: str, auto: bool = False) -> Optional[Dict[str, Any]]:
        if action not in ("approve", "reject"):
            return None
        now = time.time()
        with self._lock:
            for i, item in enumerate(self._pending):
                if item["id"] != qid:
                    continue
                # Remove from pending (deque doesn't support index removal
                # cheaply but n ≤ MAX_PENDING so the rotation is fine).
                resolved = dict(item)
                rest = [p for p in self._pending if p["id"] != qid]
                self._pending.clear()
                self._pending.extend(rest)

                resolved["resolved_at"] = now
                resolved["resolved_by"] = "admin" if not auto else "auto"
                resolved["auto_rejected"] = bool(auto and action == "reject")
                resolved["resolved_ago"] = "just now"

                self._review_durations.append(now - resolved["created_at"])
                self._decisions_window.append(now)
                if auto:
                    self._auto_rejected_count += 1
                else:
                    self._manual_decisions_count += 1

                if action == "approve":
                    self._approved.appendleft(resolved)
                else:
                    self._rejected.appendleft(resolved)

                # Audit trail (outside the lock would risk re-entry; safe
                # here because audit_log.append is short and append-only).
                try:
                    audit_log.append(
                        "modqueue",
                        f"{action}d" + ("_auto" if auto else ""),
                        actor="auto" if auto else "admin",
                        meta={
                            "id": qid,
                            "severity": resolved.get("severity"),
                            "rule": resolved.get("rule"),
                        },
                    )
                except Exception:
                    pass

                return resolved
        return None

    # ── reads ──────────────────────────────────────────────────────────

    def snapshot(self) -> Dict[str, Any]:
        """Frontend payload for /admin/modqueue/list."""
        now = time.time()
        with self._lock:
            pending = list(self._pending)
            approved = list(self._approved)
            rejected = list(self._rejected)
            # Drop decisions older than 60 s so throughput is "per minute".
            while self._decisions_window and self._decisions_window[0] < now - 60:
                self._decisions_window.popleft()
            throughput = float(len(self._decisions_window))
            durations = list(self._review_durations)
            auto_count = self._auto_rejected_count
            manual_count = self._manual_decisions_count
        avg_review = sum(durations) / len(durations) if durations else 0.0
        total_decisions = auto_count + manual_count
        auto_pct = (auto_count / total_decisions * 100.0) if total_decisions else 0.0
        return {
            "pending": pending,
            "approved": approved,
            "rejected": rejected,
            "stats": {
                "throughput": throughput,
                "avg_review_sec": round(avg_review, 1),
                "auto_reject_pct": round(auto_pct, 1),
            },
            "auto_reject_sec": AUTO_REJECT_SEC,
        }

    def clear(self) -> None:
        """Test helper — wipe all state."""
        with self._lock:
            self._pending.clear()
            self._approved.clear()
            self._rejected.clear()
            self._decisions_window.clear()
            self._review_durations.clear()
            self._auto_rejected_count = 0
            self._manual_decisions_count = 0


# Module-level singleton — analogous to poll_service / filter_events
mod_queue = _ModQueue()
