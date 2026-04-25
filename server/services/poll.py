"""Interactive Voting/Poll System

Admin creates polls, viewers vote by sending danmu matching option keys (A/B/C),
results shown live on overlay via WebSocket broadcast.

v5 (P0-1) — multi-question session.
A poll is now a session containing one or more ordered questions. Each
question carries its own options, optional image and time_limit. Audience
votes only target the current question. The legacy single-question shape
(``state.question`` / ``state.options``) is preserved on every status payload
so existing clients (overlay, WS pushes, /admin/poll/status callers) keep
working — those fields are derived from ``questions[current_index]``.
"""

import logging
import threading
import time
import uuid
from typing import Any, Dict, List, Optional

from . import ws_queue

logger = logging.getLogger(__name__)


def _new_id(prefix: str = "") -> str:
    return prefix + uuid.uuid4().hex[:8]


def _make_question(
    text: str,
    options: List[str],
    *,
    image_url: Optional[str] = None,
    time_limit_seconds: Optional[int] = None,
    order: int = 0,
) -> Dict[str, Any]:
    """Build a question dict with letter-keyed options."""
    return {
        "id": _new_id("q_"),
        "text": text,
        "options": [
            {"key": chr(65 + i), "text": opt, "count": 0}
            for i, opt in enumerate(options)
        ],
        "image_url": image_url,
        "time_limit_seconds": time_limit_seconds,
        "order": order,
    }


class PollService:
    """Multi-question poll session manager.

    Internal state shape::

        {
            "poll_id": str,
            "questions": [question, ...],   # always non-empty when set
            "current_index": int,           # 0-based; -1 before start
            "active": bool,                 # True when a question accepts votes
            "started_at": float | None,
            "voters_per_question": {q_id: set(voter_id)},
        }
    """

    def __init__(self):
        self._lock = threading.Lock()
        self._poll: Optional[Dict[str, Any]] = None

    # ─── Convenience accessors ──────────────────────────────────────────────

    @property
    def state(self) -> str:
        with self._lock:
            return self._derive_state_locked()

    def _derive_state_locked(self) -> str:
        if not self._poll:
            return "idle"
        if self._poll["active"]:
            return "active"
        # Either not yet started (current_index == -1) or all questions ended.
        return "ended"

    def _current_question_locked(self) -> Optional[Dict[str, Any]]:
        if not self._poll:
            return None
        idx = self._poll["current_index"]
        if idx < 0 or idx >= len(self._poll["questions"]):
            return None
        return self._poll["questions"][idx]

    # ─── Creation paths ─────────────────────────────────────────────────────

    def create(self, question: str, options: List[str]) -> str:
        """Legacy single-question entry point.

        Builds a 1-question poll session and starts it immediately. Kept so
        existing callers (admin UI legacy path, /admin/poll/create with the
        old payload shape) don't need to change.
        """
        with self._lock:
            if self._poll and self._poll["active"]:
                raise ValueError("A poll is already active")
            self._poll = self._build_session_locked(
                [{"text": question, "options": list(options)}]
            )
            self._poll["current_index"] = 0
            self._poll["active"] = True
            self._poll["started_at"] = time.time()
            self._broadcast_locked()
            return self._poll["poll_id"]

    def create_session(self, questions: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Create a multi-question poll session in 'pending' state.

        ``questions`` is a list of dicts ``{text, options, image_url?,
        time_limit_seconds?}``. The session is created but not started — call
        :meth:`start` to flip ``active=True`` and ``current_index=0``.

        Returns the full status payload.
        """
        if not questions:
            raise ValueError("At least one question is required")
        with self._lock:
            if self._poll and self._poll["active"]:
                raise ValueError("A poll is already active")
            self._poll = self._build_session_locked(questions)
            self._broadcast_locked()
            return self._get_status_locked()

    def _build_session_locked(self, questions: List[Dict[str, Any]]) -> Dict[str, Any]:
        poll_id = _new_id()
        built_questions: List[Dict[str, Any]] = []
        voters_per_question: Dict[str, set] = {}
        for idx, q in enumerate(questions):
            text = (q.get("text") or "").strip()
            options = q.get("options") or []
            if not text:
                raise ValueError(f"Question {idx + 1} is missing text")
            if not (2 <= len(options) <= 6):
                raise ValueError(
                    f"Question {idx + 1} must have between 2 and 6 options"
                )
            built = _make_question(
                text,
                [str(o).strip() for o in options],
                image_url=q.get("image_url"),
                time_limit_seconds=q.get("time_limit_seconds"),
                order=idx,
            )
            built_questions.append(built)
            voters_per_question[built["id"]] = set()
        return {
            "poll_id": poll_id,
            "questions": built_questions,
            "current_index": -1,
            "active": False,
            "started_at": None,
            "voters_per_question": voters_per_question,
        }

    # ─── Lifecycle ──────────────────────────────────────────────────────────

    def start(self) -> Dict[str, Any]:
        """Move from pending → active on the first question.

        If already active, this is a no-op (returns current status). Used by
        the multi-question flow: create_session → start.
        """
        with self._lock:
            if not self._poll:
                raise ValueError("No poll session to start")
            if not self._poll["active"]:
                self._poll["current_index"] = 0
                self._poll["active"] = True
                self._poll["started_at"] = time.time()
                self._broadcast_locked()
            return self._get_status_locked()

    def advance(self) -> Dict[str, Any]:
        """Advance to the next question, resetting its votes.

        Raises ``ValueError`` if there is no next question (presenter should
        call :meth:`end` instead). The freshly-uncovered question always has
        zero votes — design v2 spec: votes don't carry across questions.
        """
        with self._lock:
            if not self._poll:
                raise ValueError("No poll session")
            if not self._poll["active"]:
                raise ValueError("Poll is not active; call start() first")
            next_idx = self._poll["current_index"] + 1
            if next_idx >= len(self._poll["questions"]):
                raise ValueError("Already on the last question")
            # Reset votes on the upcoming question (defensive: the question is
            # freshly built so this is normally already a no-op, but it
            # matches the contract: advancing always exposes a clean slate).
            next_q = self._poll["questions"][next_idx]
            for opt in next_q["options"]:
                opt["count"] = 0
            self._poll["voters_per_question"][next_q["id"]] = set()
            self._poll["current_index"] = next_idx
            self._broadcast_locked()
            return self._get_status_locked()

    def end(self):
        with self._lock:
            if self._poll and self._poll["active"]:
                self._poll["active"] = False
                self._broadcast_locked()

    def reset(self):
        with self._lock:
            self._poll = None
            self._broadcast_clear_locked()

    # ─── Voting ─────────────────────────────────────────────────────────────

    def vote(self, option_key: str, voter_id: str) -> bool:
        """Record a vote on the current question. Returns True if accepted."""
        with self._lock:
            current = self._current_question_locked()
            if not self._poll or not self._poll["active"] or current is None:
                return False
            voters = self._poll["voters_per_question"].setdefault(
                current["id"], set()
            )
            if voter_id in voters:
                return False
            key_upper = option_key.upper()
            for opt in current["options"]:
                if opt["key"] == key_upper:
                    opt["count"] += 1
                    voters.add(voter_id)
                    self._broadcast_locked()
                    return True
            return False

    def get_option_keys(self) -> List[str]:
        """Valid letter keys for the current question (used by /fire intercept)."""
        with self._lock:
            current = self._current_question_locked()
            if not self._poll or not self._poll["active"] or current is None:
                return []
            return [opt["key"] for opt in current["options"]]

    # ─── Status / serialisation ────────────────────────────────────────────

    def get_status(self) -> Dict[str, Any]:
        with self._lock:
            return self._get_status_locked()

    def _get_status_locked(self) -> Dict[str, Any]:
        if not self._poll:
            return {"state": "idle"}
        questions_view = [
            self._serialize_question(q) for q in self._poll["questions"]
        ]
        current = self._current_question_locked()
        # Legacy compatibility surface: the previous single-question payload
        # had top-level `question`, `options`, `total_votes`, `poll_id`. We
        # derive those from the current question so old viewers/overlays keep
        # working unchanged.
        if current is not None:
            current_view = self._serialize_question(current)
            legacy = {
                "question": current_view["text"],
                "options": current_view["options"],
                "total_votes": current_view["total_votes"],
            }
        else:
            # Pending (current_index == -1) or fully ended past the last q.
            first = questions_view[0] if questions_view else None
            legacy = {
                "question": first["text"] if first else "",
                "options": first["options"] if first else [],
                "total_votes": 0,
            }
        return {
            "poll_id": self._poll["poll_id"],
            "state": self._derive_state_locked(),
            "active": self._poll["active"],
            "current_index": self._poll["current_index"],
            "started_at": self._poll["started_at"],
            "questions": questions_view,
            "question_count": len(questions_view),
            **legacy,
        }

    @staticmethod
    def _serialize_question(q: Dict[str, Any]) -> Dict[str, Any]:
        total = sum(o["count"] for o in q["options"])
        return {
            "id": q["id"],
            "text": q["text"],
            "image_url": q.get("image_url"),
            "time_limit_seconds": q.get("time_limit_seconds"),
            "order": q.get("order", 0),
            "total_votes": total,
            "options": [
                {
                    "key": o["key"],
                    "text": o["text"],
                    "count": o["count"],
                    "percentage": (
                        round(o["count"] / total * 100, 1) if total > 0 else 0
                    ),
                }
                for o in q["options"]
            ],
        }

    # ─── Image management (paths only — file I/O lives in the route) ───────

    def attach_image(self, poll_id: str, question_id: str, image_url: str) -> None:
        """Set ``image_url`` on a question. Raises if poll/question missing."""
        with self._lock:
            if not self._poll or self._poll["poll_id"] != poll_id:
                raise ValueError("Poll not found")
            for q in self._poll["questions"]:
                if q["id"] == question_id:
                    q["image_url"] = image_url
                    self._broadcast_locked()
                    return
            raise ValueError("Question not found")

    # ─── Broadcast plumbing ────────────────────────────────────────────────

    def _broadcast_locked(self):
        ws_queue.enqueue_message({"type": "poll_update", **self._get_status_locked()})

    def _broadcast_clear_locked(self):
        ws_queue.enqueue_message({"type": "poll_update", "state": "idle"})


# Module-level singleton
poll_service = PollService()
