"""Integration tests: Scheduler admin API workflows."""

from unittest.mock import patch

import pytest

from server.services.scheduler import SchedulerService
from server.services.ws_state import update_ws_client_count


def _login(client):
    """Log in and return the CSRF token."""
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess.get("csrf_token", "")


@pytest.fixture(autouse=True)
def _reset_scheduler():
    """Patch _send_message so scheduler doesn't actually fire danmu."""
    with patch.object(SchedulerService, "_send_message"):
        yield


@pytest.fixture(autouse=True)
def _ws_ready():
    update_ws_client_count(1)


# ── Full lifecycle: create → list → pause → resume → cancel ────────────────


def test_scheduler_full_lifecycle(client):
    """Create → list → pause → resume → cancel → verify gone."""
    token = _login(client)
    headers = {"X-CSRF-Token": token}

    # Create
    resp = client.post(
        "/admin/scheduler/create",
        json={
            "messages": [{"text": "scheduled msg"}],
            "interval_sec": 60,
        },
        headers=headers,
    )
    assert resp.status_code == 200
    job_id = resp.get_json()["job_id"]
    assert job_id

    # List shows active job
    resp = client.get("/admin/scheduler/list")
    assert resp.status_code == 200
    jobs = resp.get_json()["jobs"]
    assert len(jobs) == 1
    assert jobs[0]["id"] == job_id
    assert jobs[0]["state"] == "active"

    # Pause
    resp = client.post(
        "/admin/scheduler/pause",
        json={"job_id": job_id},
        headers=headers,
    )
    assert resp.status_code == 200
    jobs = client.get("/admin/scheduler/list").get_json()["jobs"]
    assert jobs[0]["state"] == "paused"

    # Resume
    resp = client.post(
        "/admin/scheduler/resume",
        json={"job_id": job_id},
        headers=headers,
    )
    assert resp.status_code == 200
    jobs = client.get("/admin/scheduler/list").get_json()["jobs"]
    assert jobs[0]["state"] == "active"

    # Cancel
    resp = client.post(
        "/admin/scheduler/cancel",
        json={"job_id": job_id},
        headers=headers,
    )
    assert resp.status_code == 200

    # Cancelled jobs excluded from list
    jobs = client.get("/admin/scheduler/list").get_json()["jobs"]
    assert len(jobs) == 0


def test_create_invalid_messages_returns_400(client):
    """Empty messages should fail validation."""
    token = _login(client)
    resp = client.post(
        "/admin/scheduler/create",
        json={"messages": [], "interval_sec": 60},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_cancel_nonexistent_returns_404(client):
    token = _login(client)
    resp = client.post(
        "/admin/scheduler/cancel",
        json={"job_id": "nonexistent"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 404


def test_pause_cancelled_job_returns_400(client):
    """Cannot pause a cancelled job."""
    token = _login(client)
    headers = {"X-CSRF-Token": token}

    resp = client.post(
        "/admin/scheduler/create",
        json={"messages": [{"text": "temp"}], "interval_sec": 60},
        headers=headers,
    )
    job_id = resp.get_json()["job_id"]

    client.post("/admin/scheduler/cancel", json={"job_id": job_id}, headers=headers)

    resp = client.post(
        "/admin/scheduler/pause",
        json={"job_id": job_id},
        headers=headers,
    )
    assert resp.status_code == 400


def test_scheduler_requires_login(client):
    """Scheduler endpoints require authentication."""
    resp = client.get("/admin/scheduler/list")
    assert resp.status_code == 401


def test_create_with_repeat_count(client):
    """Create job with finite repeat count."""
    token = _login(client)
    resp = client.post(
        "/admin/scheduler/create",
        json={
            "messages": [{"text": "finite"}],
            "interval_sec": 30,
            "repeat_count": 5,
        },
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    assert resp.get_json()["job_id"]
