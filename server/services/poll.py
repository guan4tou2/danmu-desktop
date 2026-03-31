"""Interactive Voting/Poll System

Admin creates polls, viewers vote by sending danmu matching option keys (A/B/C),
results shown live on overlay via WebSocket broadcast.
"""

import logging
import threading
import uuid
from typing import Any, Dict, List

from . import ws_queue

logger = logging.getLogger(__name__)


class PollService:
    def __init__(self):
        self._lock = threading.Lock()
        self._poll = None  # Current poll dict or None

    @property
    def state(self) -> str:
        with self._lock:
            return self._poll["state"] if self._poll else "idle"

    def create(self, question: str, options: List[str]) -> str:
        """Create a new poll. Returns poll_id."""
        with self._lock:
            if self._poll and self._poll["state"] == "active":
                raise ValueError("A poll is already active")
            poll_id = uuid.uuid4().hex[:8]
            self._poll = {
                "poll_id": poll_id,
                "question": question,
                "options": [
                    {"key": chr(65 + i), "text": opt, "count": 0}  # A, B, C...
                    for i, opt in enumerate(options)
                ],
                "state": "active",
                "voters": set(),
            }
            self._broadcast()
            return poll_id

    def vote(self, option_key: str, voter_id: str) -> bool:
        """Record a vote. Returns True if new vote, False if duplicate."""
        with self._lock:
            if not self._poll or self._poll["state"] != "active":
                return False
            if voter_id in self._poll["voters"]:
                return False
            key_upper = option_key.upper()
            for opt in self._poll["options"]:
                if opt["key"] == key_upper:
                    opt["count"] += 1
                    self._poll["voters"].add(voter_id)
                    self._broadcast()
                    return True
            return False

    def get_option_keys(self) -> List[str]:
        """Get list of valid option keys for matching."""
        with self._lock:
            if not self._poll or self._poll["state"] != "active":
                return []
            return [opt["key"] for opt in self._poll["options"]]

    def get_status(self) -> Dict[str, Any]:
        with self._lock:
            return self._get_status_locked()

    def end(self):
        with self._lock:
            if self._poll and self._poll["state"] == "active":
                self._poll["state"] = "ended"
                self._broadcast()

    def reset(self):
        with self._lock:
            self._poll = None
            self._broadcast_clear()

    def _broadcast(self):
        """Broadcast poll status. Must be called while self._lock is held."""
        status = self._get_status_locked()
        ws_queue.enqueue_message({"type": "poll_update", **status})

    def _get_status_locked(self) -> Dict[str, Any]:
        """Get poll status without acquiring the lock (caller holds it)."""
        if not self._poll:
            return {"state": "idle"}
        total = sum(o["count"] for o in self._poll["options"])
        return {
            "poll_id": self._poll["poll_id"],
            "question": self._poll["question"],
            "options": [
                {
                    "key": o["key"],
                    "text": o["text"],
                    "count": o["count"],
                    "percentage": round(o["count"] / total * 100, 1) if total > 0 else 0,
                }
                for o in self._poll["options"]
            ],
            "state": self._poll["state"],
            "total_votes": total,
        }

    def _broadcast_clear(self):
        ws_queue.enqueue_message({"type": "poll_update", "state": "idle"})


# Module-level singleton
poll_service = PollService()
