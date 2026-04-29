"""Broadcast LIVE / STANDBY backend tests.

Covers:
  * Service-level: state shape, set_mode, queue enqueue/drain, persistence.
  * Endpoint: /admin/broadcast/status, /admin/broadcast/toggle.
  * /fire integration: standby mode parks danmu in queue, drains on switch.
"""

import json
import time

import pytest

from server.services import broadcast as broadcast_svc
from server.services import messaging


def _login_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


# ─── Service-level ─────────────────────────────────────────────────────────


def test_get_state_returns_shape():
    s = broadcast_svc.get_state()
    assert s["mode"] == "live"  # autouse fixture seeds LIVE
    assert s["total_messages"] == 0
    assert s["queue_size"] == 0
    assert s["started_at"] is not None


def test_set_mode_to_standby_preserves_started_at():
    before = broadcast_svc.get_state()
    new = broadcast_svc.set_mode("standby")
    assert new["mode"] == "standby"
    assert new["started_at"] == before["started_at"]


def test_set_mode_back_to_live_resets_counters():
    broadcast_svc.set_mode("standby")
    broadcast_svc.increment_messages(5)
    new = broadcast_svc.set_mode("live")
    assert new["mode"] == "live"
    # New live session resets total_messages.
    assert new["total_messages"] == 0


def test_set_mode_invalid_raises():
    with pytest.raises(ValueError):
        broadcast_svc.set_mode("ended")


def test_enqueue_pending_persists_and_returns_size():
    n = broadcast_svc.enqueue_pending({"text": "hi"})
    assert n == 1
    n = broadcast_svc.enqueue_pending({"text": "there"})
    assert n == 2
    assert broadcast_svc.queue_size() == 2


def test_drain_pending_clears_queue():
    broadcast_svc.enqueue_pending({"text": "a"})
    broadcast_svc.enqueue_pending({"text": "b"})
    items = broadcast_svc.drain_pending()
    assert len(items) == 2
    assert items[0]["text"] == "a"
    assert broadcast_svc.queue_size() == 0


def test_state_persists_across_reload(tmp_path, monkeypatch):
    monkeypatch.setattr(broadcast_svc, "_STATE_FILE", tmp_path / "bc.json")
    monkeypatch.setattr(broadcast_svc, "_QUEUE_FILE", tmp_path / "bcq.json")
    broadcast_svc.reset_for_tests()
    broadcast_svc.set_mode("standby")
    broadcast_svc.enqueue_pending({"text": "queued"})
    # Drop in-memory cache → next read should rehydrate from disk.
    broadcast_svc.reset_for_tests()
    s = broadcast_svc.get_state()
    assert s["mode"] == "standby"
    assert s["queue_size"] == 1


def test_enqueue_pending_rejects_non_dict():
    with pytest.raises(ValueError):
        broadcast_svc.enqueue_pending("not a dict")


def test_increment_messages_zero_or_negative_is_noop():
    before = broadcast_svc.get_state()["total_messages"]
    broadcast_svc.increment_messages(0)
    broadcast_svc.increment_messages(-1)
    assert broadcast_svc.get_state()["total_messages"] == before


# ─── /admin/broadcast/status ───────────────────────────────────────────────


def test_status_endpoint_requires_login(client):
    res = client.get("/admin/broadcast/status")
    assert res.status_code == 401


def test_status_endpoint_returns_state(client):
    _login_csrf(client)
    res = client.get("/admin/broadcast/status")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["mode"] == "live"
    assert "started_at" in body
    assert "total_messages" in body
    assert "queue_size" in body


# ─── /admin/broadcast/toggle ───────────────────────────────────────────────


def test_toggle_requires_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    res = client.post("/admin/broadcast/toggle", json={"mode": "standby"})
    assert res.status_code == 403


def test_toggle_to_standby(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/broadcast/toggle",
        json={"mode": "standby"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["mode"] == "standby"


def test_toggle_invalid_mode(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/broadcast/toggle",
        json={"mode": "ended"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_toggle_missing_body(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/broadcast/toggle",
        data="",
        headers={"X-CSRF-Token": token, "Content-Type": "application/json"},
    )
    assert res.status_code == 400


# ─── messaging.forward_to_ws_server gate ───────────────────────────────────


def test_forward_in_standby_parks_in_queue(app):
    """Standby mode must NOT push to ws_queue, only to broadcast queue."""
    from server.services import ws_queue

    broadcast_svc.set_mode("standby")
    ws_queue._queue.clear()
    ok = messaging.forward_to_ws_server({"text": "hello", "color": "FFFFFF"})
    assert ok is True
    assert len(ws_queue._queue) == 0
    assert broadcast_svc.queue_size() == 1


def test_forward_in_live_pushes_to_overlay(app):
    """LIVE mode forwards as v4.x: ws_queue gets the payload."""
    from server.services import ws_queue

    broadcast_svc.set_mode("live")
    ws_queue._queue.clear()
    ok = messaging.forward_to_ws_server({"text": "hello", "color": "FFFFFF"})
    assert ok is True
    assert len(ws_queue._queue) == 1
    assert broadcast_svc.queue_size() == 0


def test_forward_non_danmu_not_gated(app):
    """settings_changed dicts (no "text") must propagate even in standby."""
    from server.services import ws_queue

    broadcast_svc.set_mode("standby")
    ws_queue._queue.clear()
    ok = messaging.forward_to_ws_server({"type": "settings_changed", "settings": {}})
    assert ok is True
    assert len(ws_queue._queue) == 1
    # No danmu queued.
    assert broadcast_svc.queue_size() == 0


def test_forward_bypass_flag_skips_gate(app):
    """The drain worker must bypass the gate to avoid re-parking drained items."""
    from server.services import ws_queue

    broadcast_svc.set_mode("standby")
    ws_queue._queue.clear()
    ok = messaging.forward_to_ws_server(
        {"text": "drained"}, bypass_broadcast_gate=True
    )
    assert ok is True
    assert len(ws_queue._queue) == 1
    assert broadcast_svc.queue_size() == 0


# ─── End-to-end: /fire while in standby, then toggle back ───────────────────


def test_fire_while_standby_queues_then_drains(app, client):
    """Full flow: switch to standby, /fire, queue grows; switch back, drains."""
    from server.services import ws_queue
    from server.services import ws_state

    # Pretend an overlay is connected so /fire doesn't 503 early.
    ws_state.update_ws_client_count(1)
    ws_queue._queue.clear()

    token = _login_csrf(client)

    # Open a session — broadcast toggle to "live" now requires an active session.
    res = client.post(
        "/admin/session/open",
        json={"name": "Test drain session"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200, res.data

    # Toggle to standby.
    res = client.post(
        "/admin/broadcast/toggle",
        json={"mode": "standby"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200

    # /fire is rate-limited at 2/window in TestConfig — keep test under it.
    res = client.post("/fire", json={"text": "queued one"})
    assert res.status_code == 200, res.data
    assert broadcast_svc.queue_size() == 1
    # ws_queue did NOT get the danmu (still empty).
    assert len(ws_queue._queue) == 0

    # Toggle back to LIVE — drain runs in background; wait briefly.
    res = client.post(
        "/admin/broadcast/toggle",
        json={"mode": "live"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    # Drain is paced over 2s; wait up to 3s.
    deadline = time.monotonic() + 3.0
    while time.monotonic() < deadline:
        if len(ws_queue._queue) >= 1:
            break
        time.sleep(0.05)
    assert len(ws_queue._queue) == 1
    assert ws_queue._queue[0]["text"] == "queued one"
    assert broadcast_svc.queue_size() == 0
