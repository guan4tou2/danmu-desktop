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
from server.services import stickers as sticker_svc  # ty: ignore[unresolved-import]
from server.services import themes as theme_svc  # ty: ignore[unresolved-import]
from server.services import ws_queue  # ty: ignore[unresolved-import]
from server.services.security import rate_limiter  # ty: ignore[unresolved-import]
from server.services.ws_state import update_ws_client_count  # ty: ignore[unresolved-import]
from server.ws.server import run_ws_server  # ty: ignore[unresolved-import]


@pytest.fixture(scope="session", autouse=True)
def _isolate_settings_store(tmp_path_factory):
    settings_file = tmp_path_factory.mktemp("danmu_settings") / "danmu_runtime_settings.json"
    os.environ["SETTINGS_FILE"] = str(settings_file)
    settings_store._settings_file = Path(str(settings_file))
    settings_store.reset()
    yield


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
def ws_server_port():
    """啟動不需 token 的真實 WS 伺服器（整個 session 共用一個）"""
    original_require = Config.WS_REQUIRE_TOKEN
    original_token = Config.WS_AUTH_TOKEN
    original_origins = Config.WS_ALLOWED_ORIGINS

    Config.WS_REQUIRE_TOKEN = False
    Config.WS_AUTH_TOKEN = ""
    Config.WS_ALLOWED_ORIGINS = []

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


# ─────────────────────────────────────────────────────────────────────────────


class TestConfig(Config):
    TESTING = True
    SECRET_KEY = "test-secret"
    ADMIN_PASSWORD = "test"
    FIRE_RATE_LIMIT = 2
    FIRE_RATE_WINDOW = 60


@pytest.fixture()
def app(tmp_path):
    fonts_dir = tmp_path / "fonts"
    fonts_dir.mkdir()

    original_dir = state.USER_FONTS_DIR
    state.USER_FONTS_DIR = str(fonts_dir)

    app = create_app(TestConfig)

    with app.app_context():
        yield app

    # reset globals
    state.USER_FONTS_DIR = original_dir
    state.blacklist.clear()
    connection_manager.reset()
    settings_store.reset()
    rate_limiter.reset()
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
    sticker_svc.sticker_service._cache.clear()


@pytest.fixture()
def client(app):
    return app.test_client()
