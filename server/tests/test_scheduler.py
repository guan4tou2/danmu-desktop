"""Scheduler service tests."""

from unittest.mock import patch

import pytest

from server.services.scheduler import SchedulerService


@pytest.fixture()
def svc():
    """Create a fresh SchedulerService for each test and shut it down after."""
    s = SchedulerService(max_jobs=20)
    yield s
    s.shutdown()


SAMPLE_MESSAGES = [{"text": "hello"}, {"text": "world"}]


# ─── 1. Create returns a job_id ──────────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_create_returns_job_id(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    assert isinstance(job_id, str)
    assert len(job_id) == 8


# ─── 2. List jobs shows created job ─────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_list_jobs_shows_created_job(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    jobs = svc.list_jobs()
    assert len(jobs) == 1
    assert jobs[0]["id"] == job_id
    assert jobs[0]["state"] == "active"
    assert jobs[0]["messages"] == SAMPLE_MESSAGES
    assert jobs[0]["interval_sec"] == 5
    assert jobs[0]["repeat_count"] == -1


# ─── 3. Cancel sets state to cancelled ──────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_cancel_sets_state_cancelled(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    result = svc.cancel(job_id)
    assert result is True
    # Cancelled jobs are excluded from list_jobs
    assert svc.list_jobs() == []
    # Internal state is cancelled
    assert svc._jobs[job_id]["state"] == "cancelled"


# ─── 4. Pause an active job ─────────────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_pause_active_job(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    result = svc.pause(job_id)
    assert result is True
    jobs = svc.list_jobs()
    assert len(jobs) == 1
    assert jobs[0]["state"] == "paused"
    # Timer should have been removed
    assert job_id not in svc._timers


# ─── 5. Resume a paused job ─────────────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_resume_paused_job(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    svc.pause(job_id)
    result = svc.resume(job_id)
    assert result is True
    jobs = svc.list_jobs()
    assert jobs[0]["state"] == "active"
    # A new timer should exist
    assert job_id in svc._timers


# ─── 6. Cannot pause a cancelled job ────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_cannot_pause_cancelled_job(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    svc.cancel(job_id)
    result = svc.pause(job_id)
    assert result is False


# ─── 7. Cannot create more than max_jobs ────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_max_jobs_limit(mock_send):
    svc = SchedulerService(max_jobs=3)
    try:
        for _ in range(3):
            svc.create([{"text": "msg"}], interval_sec=10)
        with pytest.raises(ValueError, match="Job limit reached"):
            svc.create([{"text": "one more"}], interval_sec=10)
    finally:
        svc.shutdown()


# ─── 8. Empty messages raises ValueError ────────────────────────────────────


def test_create_empty_messages_raises(svc):
    with pytest.raises(ValueError, match="non-empty"):
        svc.create([], interval_sec=5)


# ─── 9. Invalid interval raises ValueError ──────────────────────────────────


@pytest.mark.parametrize("bad_interval", [0, -1, -0.5])
def test_create_invalid_interval_raises(svc, bad_interval):
    with pytest.raises(ValueError, match="interval_sec must be positive"):
        svc.create(SAMPLE_MESSAGES, interval_sec=bad_interval)


# ─── 10. Shutdown cancels all timers ────────────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_shutdown_cancels_all(mock_send):
    svc = SchedulerService()
    id1 = svc.create([{"text": "a"}], interval_sec=10)
    id2 = svc.create([{"text": "b"}], interval_sec=10)
    svc.shutdown()
    assert svc._jobs[id1]["state"] == "cancelled"
    assert svc._jobs[id2]["state"] == "cancelled"
    assert len(svc._timers) == 0


# ─── 11. Cancel non-existent job returns False ──────────────────────────────


def test_cancel_nonexistent_returns_false(svc):
    assert svc.cancel("nonexistent") is False


# ─── Extra: resume non-paused returns False ─────────────────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_resume_active_job_returns_false(mock_send, svc):
    job_id = svc.create(SAMPLE_MESSAGES, interval_sec=5)
    assert svc.resume(job_id) is False


# ─── Extra: cancelled jobs don't count toward max_jobs ──────────────────────


@patch("server.services.scheduler.SchedulerService._send_message")
def test_cancelled_jobs_free_slots(mock_send):
    svc = SchedulerService(max_jobs=2)
    try:
        id1 = svc.create([{"text": "a"}], interval_sec=10)
        svc.create([{"text": "b"}], interval_sec=10)
        svc.cancel(id1)
        # Should succeed since one slot is freed
        svc.create([{"text": "c"}], interval_sec=10)
        assert len(svc.list_jobs()) == 2
    finally:
        svc.shutdown()


# ─── Extra: invalid repeat_count raises ValueError ─────────────────────────


@pytest.mark.parametrize("bad_repeat", [0, -2, -100])
def test_create_invalid_repeat_count_raises(svc, bad_repeat):
    with pytest.raises(ValueError, match="repeat_count"):
        svc.create(SAMPLE_MESSAGES, interval_sec=5, repeat_count=bad_repeat)


# ─── Extra: negative start_delay raises ValueError ──────────────────────────


def test_create_negative_start_delay_raises(svc):
    with pytest.raises(ValueError, match="start_delay"):
        svc.create(SAMPLE_MESSAGES, interval_sec=5, start_delay=-1)
