"""Danmu Scheduling Service

Schedule recurring danmu messages that cycle through a list in round-robin order.
Each job runs on a non-blocking threading.Timer chain.
"""

import logging
import threading
import time
import uuid
from typing import Any, Dict, List

logger = logging.getLogger(__name__)


class SchedulerService:
    def __init__(self, max_jobs: int = 20):
        self._lock = threading.Lock()
        self._jobs: Dict[str, Dict[str, Any]] = {}
        self._timers: Dict[str, threading.Timer] = {}
        self._max_jobs = max_jobs

    def create(
        self,
        messages: List[Dict[str, Any]],
        interval_sec: float,
        repeat_count: int = -1,
        start_delay: float = 0,
    ) -> str:
        """Create a scheduled job. Returns job_id.

        Args:
            messages: List of message dicts, each with text and optional
                      color/size/speed/opacity keys.
            interval_sec: Seconds between each message send.
            repeat_count: Total number of messages to send. -1 for infinite.
            start_delay: Seconds to wait before sending the first message.

        Raises:
            ValueError: If parameters are invalid or job limit reached.
        """
        if not messages:
            raise ValueError("messages must be a non-empty list")
        if interval_sec <= 0:
            raise ValueError("interval_sec must be positive")
        if repeat_count < -1 or repeat_count == 0:
            raise ValueError("repeat_count must be -1 (infinite) or a positive integer")
        if start_delay < 0:
            raise ValueError("start_delay must be non-negative")

        with self._lock:
            active_count = sum(1 for j in self._jobs.values() if j["state"] != "cancelled")
            if active_count >= self._max_jobs:
                raise ValueError(
                    f"Job limit reached ({self._max_jobs}). "
                    "Cancel existing jobs before creating new ones."
                )

            job_id = uuid.uuid4().hex[:8]
            self._jobs[job_id] = {
                "id": job_id,
                "messages": messages,
                "interval_sec": interval_sec,
                "repeat_count": repeat_count,
                "current_index": 0,
                "remaining": repeat_count,
                "state": "active",
                "created_at": time.time(),
            }

            timer = threading.Timer(start_delay, self._run_job, args=(job_id,))
            timer.daemon = True
            self._timers[job_id] = timer
            timer.start()

            logger.info(
                "Scheduler job %s created: %d message(s), interval=%.1fs, repeat=%s",
                job_id,
                len(messages),
                interval_sec,
                "infinite" if repeat_count == -1 else repeat_count,
            )
            return job_id

    def cancel(self, job_id: str) -> bool:
        """Cancel a job. Returns True if the job was found and cancelled."""
        with self._lock:
            job = self._jobs.get(job_id)
            if not job or job["state"] == "cancelled":
                return False
            job["state"] = "cancelled"
            self._cancel_timer(job_id)
            logger.info("Scheduler job %s cancelled", job_id)
            return True

    def pause(self, job_id: str) -> bool:
        """Pause an active job. Returns True if successful."""
        with self._lock:
            job = self._jobs.get(job_id)
            if not job or job["state"] != "active":
                return False
            job["state"] = "paused"
            self._cancel_timer(job_id)
            logger.info("Scheduler job %s paused", job_id)
            return True

    def resume(self, job_id: str) -> bool:
        """Resume a paused job. Returns True if successful."""
        with self._lock:
            job = self._jobs.get(job_id)
            if not job or job["state"] != "paused":
                return False
            job["state"] = "active"
            timer = threading.Timer(job["interval_sec"], self._run_job, args=(job_id,))
            timer.daemon = True
            self._timers[job_id] = timer
            timer.start()
            logger.info("Scheduler job %s resumed", job_id)
            return True

    def list_jobs(self) -> List[Dict[str, Any]]:
        """Return a list of all non-cancelled jobs with their status."""
        with self._lock:
            return [
                {
                    "id": job["id"],
                    "messages": job["messages"],
                    "interval_sec": job["interval_sec"],
                    "repeat_count": job["repeat_count"],
                    "remaining": job["remaining"],
                    "current_index": job["current_index"],
                    "state": job["state"],
                    "created_at": job["created_at"],
                }
                for job in self._jobs.values()
                if job["state"] != "cancelled"
            ]

    def shutdown(self):
        """Cancel all timers. Call on server shutdown."""
        with self._lock:
            for job_id in list(self._timers):
                self._cancel_timer(job_id)
            for job in self._jobs.values():
                if job["state"] != "cancelled":
                    job["state"] = "cancelled"
            logger.info("Scheduler shutdown: all jobs cancelled")

    # -- internal ----------------------------------------------------------

    def _cancel_timer(self, job_id: str):
        """Cancel and remove the timer for a job. Must be called with lock held."""
        timer = self._timers.pop(job_id, None)
        if timer is not None:
            timer.cancel()

    def _run_job(self, job_id: str):
        """Timer callback: send one message, then schedule the next iteration."""
        with self._lock:
            job = self._jobs.get(job_id)
            if not job or job["state"] != "active":
                return

            # Pick the current message (round-robin)
            msg = job["messages"][job["current_index"] % len(job["messages"])]
            job["current_index"] = (job["current_index"] + 1) % len(job["messages"])

            # Track remaining sends
            if job["remaining"] > 0:
                job["remaining"] -= 1

            finished = job["remaining"] == 0
            interval = job["interval_sec"]

        # Send outside the lock to avoid holding it during I/O
        self._send_message(msg)

        with self._lock:
            job = self._jobs.get(job_id)
            if not job or job["state"] != "active":
                return

            if finished:
                job["state"] = "cancelled"
                logger.info("Scheduler job %s completed all repeats", job_id)
                return

            # Schedule next fire
            timer = threading.Timer(interval, self._run_job, args=(job_id,))
            timer.daemon = True
            self._timers[job_id] = timer
            timer.start()

    @staticmethod
    def _send_message(msg: Dict[str, Any]):
        """Send a single danmu message via the ws queue."""
        try:
            from . import ws_queue

            data: Dict[str, Any] = {"text": msg.get("text", "")}
            for key in ("color", "size", "speed", "opacity"):
                if key in msg:
                    data[key] = msg[key]
            ws_queue.enqueue_message(data)
        except Exception:
            logger.exception("Scheduler failed to send message")


# Module-level singleton
scheduler_service = SchedulerService()
