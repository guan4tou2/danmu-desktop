import json
import time

import pytest

from server.services import broadcast, history, messaging, ws_queue, ws_state


@pytest.fixture
def records(monkeypatch):
    store = history.DanmuHistory(auto_cleanup_hours=999)
    monkeypatch.setattr(history, "danmu_history", store)
    return store


def login(client):
    client.post("/login", data={"password": "test"})
    with client.session_transaction() as session:
        return {"X-CSRF-Token": session["csrf_token"]}


def wait_until(predicate):
    deadline = time.monotonic() + 3
    while time.monotonic() < deadline:
        if predicate():
            return
        time.sleep(0.02)
    assert predicate()


@pytest.mark.parametrize("action", ["session", "display"])
def test_queued_message_released_and_history_updated(client, records, action):
    headers = login(client)
    ws_state.update_ws_client_count(1)
    broadcast.set_mode("standby")
    response = client.post("/fire", json={"text": "waiting message"})
    assert response.get_json()["reason"] == "broadcast_standby"
    queued = records.get_records()[0]
    assert queued["status"] == "queued"
    assert broadcast.queue_size() == 1
    assert not ws_queue.dequeue_all()

    path, payload = (
        ("/admin/session/open", {"name": "New event"})
        if action == "session"
        else ("/admin/broadcast/toggle", {"mode": "live"})
    )
    assert client.post(path, json=payload, headers=headers).status_code == 200
    wait_until(lambda: records.get_records()[0]["status"] == "forwarded")
    messages = ws_queue.dequeue_all()
    assert [m["text"] for m in messages] == ["waiting message"]
    assert all("fingerprint" not in m and "_delivery_status" not in m for m in messages)
    assert broadcast.queue_size() == 0
    restored = history.DanmuHistory(auto_cleanup_hours=999).get_records()
    assert len(restored) == 1
    assert restored[0]["message_id"] == queued["message_id"]
    assert restored[0]["status"] == "forwarded"
    assert restored[0]["timestamp"] == queued["timestamp"]


def test_live_without_session_can_still_forward(client, records):
    ws_state.update_ws_client_count(1)
    assert client.get("/overlay_status").get_json()["session_status"] == "idle"
    assert client.post("/fire", json={"text": "no session needed"}).status_code == 200
    assert records.get_records()[0]["status"] == "forwarded"


def test_public_state_distinguishes_connected_and_paused(client):
    ws_state.update_ws_client_count(1)
    broadcast.set_mode("standby")
    broadcast.enqueue_pending({"text": "private text", "fingerprint": "private fingerprint"})
    state = client.get("/overlay_status").get_json()
    assert state == {
        "mode": "standby",
        "queue_size": 1,
        "overlay_count": 1,
        "session_status": "idle",
        "session_name": None,
    }
    assert client.get("/session/public-state").get_json()["display"] == state
    assert "private" not in str(state)


def test_pause_during_release_requeues_remaining_messages(monkeypatch):
    broadcast.set_mode("standby")
    broadcast.enqueue_pending({"text": "first"})
    broadcast.enqueue_pending({"text": "second"})
    sent = []

    def forward(data):
        sent.append(data["text"])
        broadcast.set_mode("standby")
        return True

    monkeypatch.setattr(messaging, "_raw_forward", forward)
    messaging.set_broadcast_mode("live")
    wait_until(lambda: broadcast.queue_size() == 1)
    assert sent == ["first"]
    assert broadcast.drain_pending()[0]["text"] == "second"


def test_search_supports_queue_status(client, records):
    records.add({"text": "waiting", "status": "queued"})
    records.add({"text": "waiting sent", "status": "forwarded"})
    login(client)
    result = client.get("/admin/search?q=waiting&status=queued").get_json()
    assert result["total"] == 1
    assert result["results"][0]["status"] == "queued"


def test_history_reconciles_forwarding_during_initial_record(client, records, monkeypatch):
    from server.routes import api

    data = {"text": "racing release", "message_id": "race"}
    original_add = records.add

    def add_after_forward(payload):
        assert messaging._raw_forward(data)
        original_add(payload)

    monkeypatch.setattr(records, "add", add_after_forward)
    api._record_history_if_enabled(data, "fingerprint", "127.0.0.1", status="queued")
    assert records.get_records()[0]["status"] == "forwarded"
    assert history.DanmuHistory(auto_cleanup_hours=999).get_records()[0]["status"] == "forwarded"


def test_history_update_failure_does_not_report_delivery_failure(records, monkeypatch):
    def fail(*args):
        raise OSError("history unavailable")

    monkeypatch.setattr(records, "update_status", fail)
    assert messaging.forward_to_ws_server({"text": "still sent", "message_id": "sent"}) == {
        "status": "sent"
    }
    assert ws_queue.dequeue_all()[0]["text"] == "still sent"


def test_failed_enqueue_does_not_mark_forwarded(monkeypatch):
    def fail(*args):
        raise OSError("queue unavailable")

    monkeypatch.setattr(ws_queue, "enqueue_message", fail)
    data = {"text": "not sent", "message_id": "failed"}
    assert messaging.forward_to_ws_server(data)["status"] == "dropped"
    assert "_delivery_status" not in data


def test_history_load_handles_null_delivery_update_timestamp(records):
    payload = {"text": "old", "timestamp": "2026-10-14T00:00:00+00:00", "message_id": "old"}
    history.HISTORY_FILE.write_text(
        json.dumps({**payload, "status": "queued", "delivery_updated_at": None})
        + "\n"
        + json.dumps(
            {**payload, "status": "forwarded", "delivery_updated_at": "2026-10-14T00:00:01+00:00"}
        )
        + "\n"
    )
    restored = history.DanmuHistory(auto_cleanup_hours=999).get_records()
    assert len(restored) == 1
    assert restored[0]["status"] == "forwarded"
