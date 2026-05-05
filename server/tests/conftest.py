# pyright: reportMissingImports=false

import logging
import os
import socket
import threading
import time
from pathlib import Path

import pytest

from server import state  # ty: ignore[unresolved-import]
from server.app import create_app  # ty: ignore[unresolved-import]
from server.config import Config  # ty: ignore[unresolved-import]
from server.managers import connection_manager, settings_store  # ty: ignore[unresolved-import]
from server.services import effects as eff_svc  # ty: ignore[unresolved-import]
from server.services import ws_queue  # ty: ignore[unresolved-import]
from server.services import onscreen_config, onscreen_limiter  # ty: ignore[unresolved-import]
from server.services import stickers as sticker_svc  # ty: ignore[unresolved-import]
from server.services import themes as theme_svc  # ty: ignore[unresolved-import]
from server.services import webhook as webhook_mod  # ty: ignore[unresolved-import]
from server.services.filter_engine import (  # ty: ignore[unresolved-import]
    FilterEngine,
    filter_engine,
)
from server.services.scheduler import scheduler_service  # ty: ignore[unresolved-import]
from server.services.security import (  # ty: ignore[unresolved-import]
    rate_limiter,
    reset_rate_limit_counters,
)
from server.services.ws_state import update_ws_client_count  # ty: ignore[unresolved-import]
from server.ws.server import run_ws_server  # ty: ignore[unresolved-import]


@pytest.fixture(scope="session", autouse=True)
def _isolate_settings_store(tmp_path_factory):
    settings_file = tmp_path_factory.mktemp("danmu_settings") / "danmu_runtime_settings.json"
    os.environ["SETTINGS_FILE"] = str(settings_file)
    settings_store._settings_file = Path(str(settings_file))
    settings_store.reset()
    yield


@pytest.fixture(autouse=True)
def _isolate_webhook_store(tmp_path):
    webhook_mod.WebhookService._instance = None
    original_file = webhook_mod._WEBHOOKS_FILE
    webhook_mod._WEBHOOKS_FILE = tmp_path / "webhooks.json"
    try:
        yield
    finally:
        webhook_mod.WebhookService._instance = None
        webhook_mod._WEBHOOKS_FILE = original_file


@pytest.fixture(autouse=True)
def _isolate_session(tmp_path):
    """Per-test session state isolation; default IDLE."""
    from server.services import session_service as sess_mod

    original_state = sess_mod._STATE_FILE
    original_archive = sess_mod._ARCHIVE_FILE
    sess_mod._STATE_FILE = tmp_path / "active_session.json"
    sess_mod._ARCHIVE_FILE = tmp_path / "sessions_archive.jsonl"
    sess_mod.reset_for_tests()
    try:
        yield
    finally:
        sess_mod._STATE_FILE = original_state
        sess_mod._ARCHIVE_FILE = original_archive
        sess_mod.reset_for_tests()


@pytest.fixture(autouse=True)
def _isolate_broadcast(tmp_path):
    """Per-test broadcast state file isolation; default LIVE.

    v5.0.0+: ``messaging.forward_to_ws_server`` consults
    ``broadcast.is_live()`` and parks danmu in standby. Tests that don't
    care about broadcast state need a clean LIVE seed each time so /fire
    behaves as v4.x did.
    """
    from server.services import broadcast as broadcast_mod

    original_state = broadcast_mod._STATE_FILE
    original_queue = broadcast_mod._QUEUE_FILE
    broadcast_mod._STATE_FILE = tmp_path / "broadcast.json"
    broadcast_mod._QUEUE_FILE = tmp_path / "broadcast_queue.json"
    broadcast_mod.reset_for_tests()
    # Force seed as LIVE so /fire isn't gated by default.
    broadcast_mod.set_mode("live")
    try:
        yield
    finally:
        broadcast_mod._STATE_FILE = original_state
        broadcast_mod._QUEUE_FILE = original_queue
        broadcast_mod.reset_for_tests()


@pytest.fixture(autouse=True)
def _isolate_onscreen_limits(tmp_path):
    """Isolate onscreen-limiter state per test.

    Default posture: cap=0 (unlimited), drop mode. Pre-v4.9 tests that blast
    many /fire calls (e.g. 50-way concurrent) rely on no traffic shaping.
    Tests that exercise the limiter directly (test_onscreen_limiter.py,
    test_messaging.py) override _STATE_FILE themselves and call set_state()
    for the scenario.
    """
    original_file = onscreen_config._STATE_FILE
    cfg_dir = tmp_path / "_conftest_onscreen"
    cfg_dir.mkdir(exist_ok=True)
    onscreen_config._STATE_FILE = cfg_dir / "onscreen_limits.json"
    onscreen_config._reset_for_tests()
    onscreen_config.set_state(max_onscreen_danmu=0, overflow_mode="drop")
    onscreen_limiter.reset()
    # Let any in-flight timer callback from a prior test drain and settle,
    # then flush ws_queue so cross-test pollution can't bleed into this test.
    time.sleep(0.02)
    ws_queue.dequeue_all()
    # Cancel any scheduler timers from prior tests — test_integration_scheduler
    # creates jobs with 30s intervals that leak messages into ws_queue during
    # later tests. Shutdown before yield flushes them before the test body runs.
    scheduler_service.shutdown()
    try:
        yield
    finally:
        onscreen_limiter.reset()
        onscreen_config._STATE_FILE = original_file
        onscreen_config._reset_for_tests()
        scheduler_service.shutdown()


@pytest.fixture(autouse=True)
def _isolate_ws_auth(tmp_path, request):
    """Isolate ws_auth runtime file per test to avoid cross-test pollution.

    Default posture: auth DISABLED (require_token=False, empty token), so
    the legacy system/browser tests that pre-date v4.8 don't all need to
    be touched. Tests that want to exercise the seeding-from-env or the
    secure-by-default behaviour can opt-out via the `ws_auth_raw_seed`
    marker, which leaves _state=None and the file untouched (letting the
    service seed normally on first get_state()).
    """
    from server.services import ws_auth as ws_auth_mod

    original_file = ws_auth_mod._STATE_FILE
    ws_auth_mod._STATE_FILE = tmp_path / "ws_auth.json"
    ws_auth_mod._reset_for_tests()

    if "ws_auth_raw_seed" not in request.keywords:
        # Pre-populate as disabled so the next get_state() returns that
        # (skipping the secure-by-default seeding path).
        ws_auth_mod.set_state(require_token=False, token="")

    try:
        yield
    finally:
        ws_auth_mod._STATE_FILE = original_file
        ws_auth_mod._reset_for_tests()


_ws_logger = logging.getLogger("conftest.ws")
_ws_logger.propagate = False
if not _ws_logger.handlers:
    _ws_logger.addHandler(logging.NullHandler())
_ws_logger.setLevel(logging.INFO)


# ─── WS 伺服器輔助函式（供系統測試模組使用）────────────────────────────────


def find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def wait_for_port(port: int, timeout: float = 5.0) -> bool:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=0.1):
                return True
        except OSError:
            time.sleep(0.05)
    return False


def wait_for_ws_count(minimum: int = 1, timeout: float = 2.0) -> bool:
    """等待 ws_client_count 達到 minimum（WS 伺服器非同步更新）"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if update_ws_client_count.__module__:  # 確保 import 完整
            from server.services.ws_state import (  # ty: ignore[unresolved-import]
                get_ws_client_count,
            )

            if get_ws_client_count() >= minimum:
                return True
        time.sleep(0.05)
    return False


# ─── 共用 WS 伺服器 Session Fixture ──────────────────────────────────────────


@pytest.fixture(scope="session")
def ws_server_port(tmp_path_factory):
    """啟動不需 token 的真實 WS 伺服器（整個 session 共用一個）.

    v4.8+: `run_ws_server()` primes `ws_auth.get_state()` at startup. This
    fixture runs before any per-test `_isolate_ws_auth`, so we need to
    redirect `_STATE_FILE` to a session-scoped tmp path here too — else the
    first call to `ws_auth.get_state()` (at WS server start) would seed/
    touch the real `server/runtime/ws_auth.json`.
    """
    from server.services import ws_auth as ws_auth_mod

    original_require = Config.WS_REQUIRE_TOKEN
    original_token = Config.WS_AUTH_TOKEN
    original_origins = Config.WS_ALLOWED_ORIGINS
    original_ws_auth_file = ws_auth_mod._STATE_FILE

    Config.WS_REQUIRE_TOKEN = False
    Config.WS_AUTH_TOKEN = ""
    Config.WS_ALLOWED_ORIGINS = []
    # Point to a session-tmp path + seed as disabled before run_ws_server()
    # primes the cache. Per-test `_isolate_ws_auth` will redirect again to
    # a per-test tmp and re-seed as disabled, which is fine — the cache is
    # reset with `_reset_for_tests()` before each test.
    ws_auth_mod._STATE_FILE = tmp_path_factory.mktemp("ws_auth_session") / "ws_auth.json"
    ws_auth_mod._reset_for_tests()
    ws_auth_mod.set_state(require_token=False, token="")

    port = find_free_port()
    thread = threading.Thread(
        target=run_ws_server,
        args=(port, _ws_logger),
        daemon=True,
    )
    thread.start()

    if not wait_for_port(port, timeout=5.0):
        pytest.skip("WS server did not start in time; skipping system tests")

    yield port

    Config.WS_REQUIRE_TOKEN = original_require
    Config.WS_AUTH_TOKEN = original_token
    Config.WS_ALLOWED_ORIGINS = original_origins
    ws_auth_mod._STATE_FILE = original_ws_auth_file
    ws_auth_mod._reset_for_tests()


# ─────────────────────────────────────────────────────────────────────────────


class TestConfig(Config):
    TESTING = True
    SECRET_KEY = "test-secret"
    ADMIN_PASSWORD = "test"
    FIRE_RATE_LIMIT = 2
    FIRE_RATE_WINDOW = 60
    WS_AUTH_TOKEN = ""


@pytest.fixture()
def app(tmp_path):
    fonts_dir = tmp_path / "fonts"
    fonts_dir.mkdir()

    original_dir = state.USER_FONTS_DIR
    state.USER_FONTS_DIR = str(fonts_dir)

    # Clear production filter rules before each test so they don't interfere
    filter_engine._rules = []
    FilterEngine._instance = None

    app = create_app(TestConfig)

    with app.app_context():
        yield app

    # reset globals
    state.USER_FONTS_DIR = original_dir
    state.blacklist.clear()
    FilterEngine._instance = None  # reset filter engine singleton between tests
    filter_engine._rules = []  # clear loaded production rules so tests start clean
    connection_manager.reset()
    settings_store.reset()
    rate_limiter.reset()
    reset_rate_limit_counters()
    update_ws_client_count(0)
    eff_svc._cache.clear()
    eff_svc._mtime_map.clear()
    eff_svc._path_to_name.clear()
    eff_svc._last_scan = 0.0
    theme_svc._cache.clear()
    theme_svc._mtime_map.clear()
    theme_svc._path_to_name.clear()
    theme_svc._active_theme = "default"
    ws_queue.dequeue_all()
    sticker_svc.sticker_service._reset_for_tests()


@pytest.fixture()
def client(app):
    return app.test_client()
