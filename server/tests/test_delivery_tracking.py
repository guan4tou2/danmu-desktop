"""Socket-bound render receipts, terminal unknowns, and bounded lifecycle."""

import json
from types import SimpleNamespace

import pytest
from gevent.queue import Queue

from server.services import delivery_tracking as delivery
from server.services import history, messaging
from server.ws import flask_ws


@pytest.fixture(autouse=True)
def receipts(monkeypatch):
    delivery.reset()
    store = history.DanmuHistory(persist=False)
    monkeypatch.setattr(history, "danmu_history", store)
    clock = [100.0]
    monkeypatch.setattr(delivery, "time", SimpleNamespace(monotonic=lambda: clock[0]))
    yield store, clock
    delivery.reset()


def prepare(store, message_id="one"):
    payload = {"text": "test", "message_id": message_id}
    delivery.begin(payload)
    store.add(payload)
    return payload


def test_only_socket_sent_this_message_can_confirm(receipts):
    store, _ = receipts
    prepare(store)
    correct, stranger = object(), object()
    delivery.sent_to("one", correct)
    assert not delivery.acknowledge("one", stranger)
    assert not delivery.acknowledge("unknown", correct)
    assert not delivery.acknowledge([], correct)
    assert store.get_records()[0]["status"] == "forwarded"
    assert delivery.acknowledge("one", correct)
    assert store.get_records()[0]["status"] == "rendered"
    assert not delivery.acknowledge("one", correct)


def test_one_of_multiple_displays_suffices_and_success_cannot_regress(receipts):
    store, clock = receipts
    prepare(store)
    a, b = object(), object()
    delivery.sent_to("one", a)
    delivery.sent_to("one", b)
    delivery.disconnected(a)
    assert delivery.acknowledge("one", b)
    clock[0] += 31
    delivery.sweep()
    store.update_status("one", "forwarded")
    assert store.get_records()[0]["status"] == "rendered"


@pytest.mark.parametrize("sent,reason", [(False, "no_display"), (True, "timeout")])
def test_old_or_absent_display_is_unknown_not_failed(receipts, sent, reason):
    store, clock = receipts
    prepare(store)
    ws = object()
    if sent:
        delivery.sent_to("one", ws)
    clock[0] += 30
    delivery.sweep()
    record = store.get_records()[0]
    assert (record["status"], record["delivery_reason"]) == ("unconfirmed", reason)
    assert not delivery.acknowledge("one", ws)
    clock[0] += 60
    delivery.sweep()
    assert not delivery._entries


def test_disconnect_and_reconnect_does_not_authorize_retroactive_ack(receipts):
    store, clock = receipts
    prepare(store)
    old, new = object(), object()
    delivery.sent_to("one", old)
    delivery.disconnected(old)
    assert not delivery.acknowledge("one", old)
    assert not delivery.acknowledge("one", new)
    clock[0] += 31
    delivery.sweep()
    assert store.get_records()[0]["status"] == "unconfirmed"


def test_ack_before_initial_history_record_is_reconciled(receipts, monkeypatch):
    store, _ = receipts
    ws = object()

    def immediate_transport(payload):
        delivery.sent_to(payload["message_id"], ws)
        assert delivery.acknowledge(payload["message_id"], ws)

    monkeypatch.setattr(messaging.ws_queue, "enqueue_message", immediate_transport)
    payload = {"text": "fast", "message_id": "fast"}
    assert messaging._raw_forward(payload)
    store.add({**payload, "status": "forwarded"})
    assert store.get_records()[0]["status"] == "rendered"
    assert delivery._entries["fast"]["payload"] is None


def test_sender_grants_before_yielding_send_and_revokes_failure(receipts):
    store, _ = receipts
    prepare(store)

    class Socket:
        def send(self, payload):
            assert delivery.acknowledge(json.loads(payload)["message_id"], self)

        def close(self):
            pass

    outbox = Queue()
    outbox.put(json.dumps({"text": "test", "message_id": "one"}))
    outbox.put(flask_ws._STOP)
    flask_ws._sender_loop(Socket(), outbox)
    assert store.get_records()[0]["status"] == "rendered"

    prepare(store, "fail")

    class FailedSocket(Socket):
        def send(self, payload):
            raise OSError("closed")

    failed = FailedSocket()
    outbox.put(json.dumps({"text": "test", "message_id": "fail"}))
    flask_ws._sender_loop(failed, outbox)
    assert not delivery.is_eligible("fail", failed)


def test_1500_valid_receipts_do_not_consume_heartbeat_budget(receipts):
    store, _ = receipts
    ws = object()
    flask_ws._ack_counts.clear()
    flask_ws._msg_counts.clear()
    for index in range(1500):
        message_id = str(index)
        delivery.begin({"text": "burst", "message_id": message_id})
        delivery.sent_to(message_id, ws)
        assert delivery.is_eligible(message_id, ws)
        assert flask_ws._check_msg_rate(ws, receipt=True)
        assert delivery.acknowledge(message_id, ws)
    assert flask_ws._check_msg_rate(ws)
    # Forged / stale IDs are not eligible for the larger receipt budget.
    assert not delivery.is_eligible("forged", ws)
    for _ in range(29):
        assert flask_ws._check_msg_rate(ws)
    assert not flask_ws._check_msg_rate(ws)


def test_1500_dual_display_and_late_or_forged_acks_preserve_heartbeats(receipts):
    store, clock = receipts
    first, slower = object(), object()
    for index in range(1500):
        message_id = f"dual-{index}"
        delivery.begin({"text": "burst", "message_id": message_id})
        delivery.sent_to(message_id, first)
        delivery.sent_to(message_id, slower)
        assert delivery.acknowledge(message_id, first)
        # Terminal render results still retain provenance for rate classification.
        assert delivery.is_eligible(message_id, slower)
        assert flask_ws._check_msg_rate(slower, receipt=True, assigned=True)
        assert not delivery.acknowledge(message_id, slower)
    assert flask_ws._check_msg_rate(slower)
    clock[0] += 61
    delivery.sweep()
    for _ in range(100):
        # Once provenance expires, late/forged receipts get their own low cap.
        assert not delivery.is_eligible("dual-1", slower)
        flask_ws._check_msg_rate(slower, receipt=True, assigned=False)
    assert not flask_ws._check_msg_rate(slower, receipt=True, assigned=False)
    assert flask_ws._check_msg_rate(slower)


def test_tracking_bound_evicts_to_unknown(receipts, monkeypatch):
    store, _ = receipts
    monkeypatch.setattr(delivery, "MAX_TRACKED", 2)
    prepare(store, "one")
    prepare(store, "two")
    prepare(store, "three")
    assert len(delivery._entries) == 2
    record = next(r for r in store.get_records() if r["message_id"] == "one")
    assert (record["status"], record["delivery_reason"]) == ("unconfirmed", "capacity")


def test_restart_marks_interrupted_forwarding_unknown(receipts, monkeypatch):
    store, _ = receipts
    store.add({"text": "old", "message_id": "old", "status": "forwarded"})
    monkeypatch.setattr(history, "DanmuHistory", lambda **kwargs: store)
    history.init_history()
    record = store.get_records()[0]
    assert (record["status"], record["delivery_reason"]) == ("unconfirmed", "restart")


def test_render_results_and_reasons_survive_disk_reload(receipts, monkeypatch):
    _, clock = receipts
    store = history.DanmuHistory(persist=True)
    monkeypatch.setattr(history, "danmu_history", store)
    ws = object()
    prepare(store, "confirmed")
    delivery.sent_to("confirmed", ws)
    assert delivery.acknowledge("confirmed", ws)
    prepare(store, "unknown")
    clock[0] += 31
    delivery.sweep()
    # Reconciliation without a new reason must preserve the final explanation.
    store.update_status("unknown", "unconfirmed")
    reloaded = {r["message_id"]: r for r in history.DanmuHistory(persist=True).get_records()}
    assert reloaded["confirmed"]["status"] == "rendered"
    assert reloaded["unknown"]["status"] == "unconfirmed"
    assert reloaded["unknown"]["delivery_reason"] == "no_display"


def test_admin_search_can_filter_render_results_and_returns_reason(client, receipts, monkeypatch):
    store, _ = receipts
    monkeypatch.setattr(history, "danmu_history", store)
    store.add({"text": "search rendered", "message_id": "rendered", "status": "rendered"})
    store.add({"text": "search unknown", "message_id": "unknown", "status": "forwarded"})
    store.update_status("unknown", "unconfirmed", reason="timeout")
    client.post("/login", data={"password": "test"})
    rendered = client.get("/admin/search?q=search&status=rendered").get_json()
    assert rendered["total"] == 1
    assert rendered["results"][0]["status"] == "rendered"
    unknown = client.get("/admin/search?q=search&status=unconfirmed").get_json()
    assert unknown["total"] == 1
    assert unknown["results"][0]["delivery_reason"] == "timeout"
    session_id = client.get("/admin/sessions").get_json()["sessions"][0]["id"]
    exported = client.get(f"/admin/sessions/{session_id}/export?format=json").get_json()
    unknown_row = next(r for r in exported["records"] if r["message_id"] == "unknown")
    assert (unknown_row["status"], unknown_row["delivery_reason"]) == ("unconfirmed", "timeout")
