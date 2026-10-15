"""Pending messages expire from first queue time, including across restart/pause."""

import json
import os
from types import SimpleNamespace

import pytest

from server.services import broadcast, history, messaging, ws_queue, ws_state


@pytest.fixture
def clock(monkeypatch):
    value = [2_000_000_000.0]
    monkeypatch.setattr(broadcast, "time", SimpleNamespace(time=lambda: value[0]))
    return value


def test_exact_24_hour_boundary_prunes_memory_disk_and_drain(clock):
    broadcast.enqueue_pending({"text": "old"})
    clock[0] += broadcast.QUEUE_TTL_SECONDS - 1
    assert broadcast.get_state()["queue_size"] == 1
    clock[0] += 1
    assert broadcast.get_state()["queue_size"] == 0
    assert json.loads(broadcast._QUEUE_FILE.read_text()) == []
    assert broadcast.drain_pending() == []


def test_restart_does_not_renew_deadline_and_keeps_fresh_order(clock):
    broadcast.enqueue_pending({"text": "old"})
    clock[0] += 60
    broadcast.enqueue_pending({"text": "first fresh"})
    broadcast.enqueue_pending({"text": "second fresh"})
    broadcast.reset_for_tests()
    clock[0] += broadcast.QUEUE_TTL_SECONDS - 60
    assert [item["text"] for item in broadcast.drain_pending()] == ["first fresh", "second fresh"]


def test_pause_again_does_not_renew_or_forward_expired_message(clock):
    broadcast.set_mode("standby")
    broadcast.enqueue_pending({"text": "waiting"})
    message = broadcast.drain_pending()[0]
    original_time = message["_broadcast_queued_at"]
    clock[0] += broadcast.QUEUE_TTL_SECONDS - 1
    assert messaging.forward_to_ws_server(message)["status"] == "queued"
    assert broadcast.drain_pending()[0]["_broadcast_queued_at"] == original_time
    clock[0] += 1
    broadcast.set_mode("live")
    assert messaging.forward_to_ws_server(message) == {"status": "dropped", "reason": "expired"}
    assert not ws_queue.dequeue_all()


def test_limiter_callback_rechecks_expiry_before_actual_forward(clock):
    broadcast.enqueue_pending({"text": "waiting"})
    message = broadcast.drain_pending()[0]
    clock[0] += broadcast.QUEUE_TTL_SECONDS
    assert messaging._raw_forward(message) is False
    assert not ws_queue.dequeue_all()


def test_legacy_queue_uses_file_time_once(clock):
    path = broadcast._QUEUE_FILE
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps([{"text": "legacy"}]))
    original_time = clock[0] - 60
    os.utime(path, (original_time, original_time))
    broadcast.reset_for_tests()
    assert broadcast.queue_size() == 1
    assert json.loads(path.read_text())[0]["_broadcast_queued_at"] == original_time
    broadcast.reset_for_tests()
    clock[0] = original_time + broadcast.QUEUE_TTL_SECONDS
    assert broadcast.queue_size() == 0


@pytest.mark.parametrize("timestamp", [None, True, "tomorrow", float("nan"), float("inf")])
def test_invalid_persisted_time_cannot_bypass_legacy_expiry(clock, timestamp):
    path = broadcast._QUEUE_FILE
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps([{"text": "old", "_broadcast_queued_at": timestamp}]))
    old = clock[0] - broadcast.QUEUE_TTL_SECONDS
    os.utime(path, (old, old))
    broadcast.reset_for_tests()
    assert broadcast.queue_size() == 0


def test_expired_history_remains_truthful_and_searchable(client, clock, monkeypatch):
    store = history.DanmuHistory(auto_cleanup_hours=999)
    monkeypatch.setattr(history, "danmu_history", store)
    store.add({"text": "expired waiting", "message_id": "expired-id", "status": "queued"})
    store.add({"text": "fresh waiting", "message_id": "fresh-id", "status": "queued"})
    broadcast.enqueue_pending({"text": "expired waiting", "message_id": "expired-id"})
    clock[0] += broadcast.QUEUE_TTL_SECONDS
    assert broadcast.queue_size() == 0
    assert store.get_records()[1]["status"] == "expired"
    assert history.DanmuHistory(auto_cleanup_hours=999).get_records()[1]["status"] == "expired"
    client.post("/login", data={"password": "test"})
    result = client.get("/admin/search?q=waiting&status=expired").get_json()
    assert result["total"] == 1
    assert result["results"][0]["message_id"] == "expired-id"


def test_public_input_cannot_supply_queue_clock_and_ws_does_not_expose_it(client, clock):
    ws_state.update_ws_client_count(1)
    broadcast.set_mode("standby")
    response = client.post("/fire", json={"text": "new", "_broadcast_queued_at": 1})
    assert response.get_json()["status"] == "queued"
    item = broadcast.drain_pending()[0]
    assert item["_broadcast_queued_at"] == clock[0]
    broadcast.set_mode("live")
    assert messaging.forward_to_ws_server(item)["status"] == "sent"
    assert "_broadcast_queued_at" not in ws_queue.dequeue_all()[0]
