"""Idle queue expiry, lifecycle and file recovery without touching runtime/."""

import builtins
import json
from types import SimpleNamespace

import gevent
import pytest
from gevent.event import Event

from server.services import broadcast, history, pending_cleanup


@pytest.fixture(autouse=True)
def cleanup_worker(_isolate_broadcast):
    pending_cleanup.stop()
    yield
    pending_cleanup.stop()


@pytest.fixture
def clock(monkeypatch):
    value = [2_000_000_000.0]
    monkeypatch.setattr(broadcast, "time", SimpleNamespace(time=lambda: value[0]))
    return value


def wait_until(predicate):
    with gevent.Timeout(2):
        while not predicate():
            gevent.sleep(0.005)


def disk_queue():
    return json.loads(broadcast._QUEUE_FILE.read_text())


def test_idle_sweep_cleans_disk_at_ttl_boundary_and_preserves_expired_history(clock, monkeypatch):
    store = history.DanmuHistory(auto_cleanup_hours=999)
    monkeypatch.setattr(history, "danmu_history", store)
    store.add({"message_id": "idle-old", "text": "waiting", "status": "queued"})
    broadcast.enqueue_pending({"message_id": "idle-old", "text": "waiting"})
    clock[0] += broadcast.QUEUE_TTL_SECONDS - 1
    pending_cleanup.start(interval=0.01)
    gevent.sleep(0.025)
    assert len(disk_queue()) == 1

    # No broadcast reads, enqueues or drains occur after the deadline.
    clock[0] += 1
    wait_until(lambda: disk_queue() == [])
    assert store.get_records()[0]["status"] == "expired"
    assert history.DanmuHistory(auto_cleanup_hours=999).get_records()[0]["status"] == "expired"


def test_startup_sweep_after_restart_keeps_original_deadlines_and_fresh_order(clock):
    broadcast.enqueue_pending({"text": "old"})
    clock[0] += 10
    broadcast.enqueue_pending({"text": "first fresh"})
    broadcast.enqueue_pending({"text": "second fresh"})
    expected = disk_queue()[1:]
    broadcast.reset_for_tests()
    clock[0] += broadcast.QUEUE_TTL_SECONDS - 10

    pending_cleanup.start(interval=60)
    wait_until(lambda: len(disk_queue()) == 2)
    assert disk_queue() == expected


def test_start_stop_are_idempotent_and_restartable(monkeypatch):
    calls = []
    monkeypatch.setattr(broadcast, "cleanup_expired_pending", lambda: calls.append(1))
    pending_cleanup.start(interval=60)
    worker = pending_cleanup._worker
    pending_cleanup.start(interval=60)
    assert pending_cleanup._worker is worker
    gevent.sleep(0)
    assert calls == [1]
    pending_cleanup.stop()
    pending_cleanup.stop()
    assert worker.dead
    gevent.sleep(0.02)
    assert calls == [1]
    pending_cleanup.start(interval=60)
    gevent.sleep(0)
    assert calls == [1, 1]


@pytest.mark.parametrize("interval", [0, -1, True, float("inf"), float("nan")])
def test_invalid_interval_does_not_start_worker(interval):
    with pytest.raises(ValueError):
        pending_cleanup.start(interval=interval)
    assert pending_cleanup._worker is None


def test_unexpected_failure_waits_before_retry_and_worker_recovers(monkeypatch):
    calls = []

    def sweep():
        calls.append(1)
        if len(calls) == 1:
            raise OSError("temporary disk failure")

    monkeypatch.setattr(broadcast, "cleanup_expired_pending", sweep)
    pending_cleanup.start(interval=0.05)
    gevent.sleep(0)
    assert len(calls) == 1
    gevent.sleep(0.01)
    assert len(calls) == 1
    wait_until(lambda: len(calls) >= 2)
    assert not pending_cleanup._worker.dead


def test_failed_prune_write_retries_disk_without_repeating_history(clock, monkeypatch):
    broadcast.enqueue_pending({"text": "old", "message_id": "old-id"})
    clock[0] += broadcast.QUEUE_TTL_SECONDS
    real_write = broadcast._atomic_write_json
    writes = []
    marked = []

    def temporarily_unwritable(path, payload):
        writes.append(1)
        if len(writes) == 1:
            raise PermissionError("read-only mount")
        real_write(path, payload)

    monkeypatch.setattr(broadcast, "_atomic_write_json", temporarily_unwritable)
    monkeypatch.setattr(broadcast, "mark_pending_expired", lambda item: marked.append(item))
    pending_cleanup.start(interval=0.05)
    gevent.sleep(0)
    assert len(disk_queue()) == 1
    assert broadcast._queue == []
    assert len(writes) == 1
    wait_until(lambda: disk_queue() == [])
    assert len(writes) == 2
    assert len(marked) == 1


def test_unreadable_queue_is_retried_without_replacing_saved_messages(clock, monkeypatch):
    broadcast.enqueue_pending({"text": "old"})
    broadcast.reset_for_tests()
    clock[0] += broadcast.QUEUE_TTL_SECONDS
    real_open = builtins.open
    blocked = [True]

    def temporarily_unreadable(file, *args, **kwargs):
        if file == broadcast._QUEUE_FILE and blocked[0]:
            raise PermissionError("temporarily unreadable")
        return real_open(file, *args, **kwargs)

    monkeypatch.setattr(builtins, "open", temporarily_unreadable)
    pending_cleanup.start(interval=0.05)
    gevent.sleep(0)
    assert broadcast._queue is None
    assert len(disk_queue()) == 1
    blocked[0] = False
    wait_until(lambda: disk_queue() == [])


@pytest.mark.parametrize("operation", ["enqueue", "drain"])
def test_sweep_serializes_with_enqueue_and_drain(clock, monkeypatch, operation):
    broadcast.enqueue_pending({"text": "old"})
    clock[0] += broadcast.QUEUE_TTL_SECONDS
    pruning = Event()
    resume = Event()
    real_write = broadcast._atomic_write_json

    def pause_prune(path, payload):
        if path == broadcast._QUEUE_FILE and not payload and not pruning.is_set():
            pruning.set()
            resume.wait()
        real_write(path, payload)

    monkeypatch.setattr(broadcast, "_atomic_write_json", pause_prune)
    pending_cleanup.start(interval=60)
    assert pruning.wait(timeout=1)
    if operation == "enqueue":
        request = gevent.spawn(broadcast.enqueue_pending, {"text": "new"})
    else:
        request = gevent.spawn(broadcast.drain_pending)
    gevent.sleep(0)
    assert not request.ready()  # Both request paths must wait for the same lock.
    resume.set()
    request.get(timeout=1)
    expected = ["new"] if operation == "enqueue" else []
    assert [item["text"] for item in disk_queue()] == expected
    if operation == "drain":
        assert request.value == []


def test_stop_waits_for_inflight_sweep_before_restart(monkeypatch):
    entered = Event()
    resume = Event()

    def sweep():
        entered.set()
        resume.wait()

    monkeypatch.setattr(broadcast, "cleanup_expired_pending", sweep)
    pending_cleanup.start(interval=60)
    assert entered.wait(timeout=1)
    worker = pending_cleanup._worker
    stopping = gevent.spawn(pending_cleanup.stop)
    gevent.sleep(0)
    assert not stopping.ready()
    pending_cleanup.start(interval=60)
    assert pending_cleanup._worker is worker
    resume.set()
    stopping.get(timeout=1)
    assert worker.dead


def test_create_app_does_not_start_cleanup():
    from server.app import create_app
    from server.tests.conftest import TestConfig

    create_app(TestConfig)
    assert pending_cleanup._worker is None


def test_main_starts_and_stops_cleanup_when_server_exits(monkeypatch):
    import server.app as app_module

    calls = []

    class FakeServer:
        def __init__(self, *args):
            pass

        def serve_forever(self):
            calls.append("serve")
            raise RuntimeError("server exit")

        def stop(self):
            calls.append("server stop")

    monkeypatch.setattr(app_module, "WSGIServer", FakeServer)
    monkeypatch.setattr("server.services.telemetry.start_sampler", lambda: None)
    monkeypatch.setattr(app_module, "start_ws_broadcast", lambda: None)
    monkeypatch.setattr(pending_cleanup, "start", lambda: calls.append("cleanup start"))
    monkeypatch.setattr(pending_cleanup, "stop", lambda: calls.append("cleanup stop"))
    with pytest.raises(RuntimeError, match="server exit"):
        app_module.main()
    assert calls == ["cleanup start", "serve", "cleanup stop", "server stop"]


def test_main_sigterm_handler_stops_server_and_cleanup(monkeypatch):
    import signal

    import server.app as app_module

    calls = []
    registered = []

    class FakeServer:
        def __init__(self, *args):
            pass

        def serve_forever(self):
            calls.append("serve")
            registered[0][1]()  # Simulate delivery of the registered SIGTERM.

        def stop(self):
            calls.append("server stop")

    def register_signal(signum, callback):
        registered.append((signum, callback))
        return SimpleNamespace(cancel=lambda: calls.append("signal cancel"))

    monkeypatch.setattr(app_module, "WSGIServer", FakeServer)
    monkeypatch.setattr(gevent, "signal_handler", register_signal)
    monkeypatch.setattr("server.services.telemetry.start_sampler", lambda: None)
    monkeypatch.setattr(app_module, "start_ws_broadcast", lambda: None)
    monkeypatch.setattr(pending_cleanup, "start", lambda: calls.append("cleanup start"))
    monkeypatch.setattr(pending_cleanup, "stop", lambda: calls.append("cleanup stop"))
    app_module.main()
    assert registered[0][0] == signal.SIGTERM
    assert calls == [
        "cleanup start",
        "serve",
        "server stop",
        "signal cancel",
        "cleanup stop",
        "server stop",
    ]
