import os
from pathlib import Path

import pytest

from server.app import create_app
from server.config import Config
from server import state
from server.services.security import rate_limiter
from server.managers import connection_manager, settings_store


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


@pytest.fixture()
def client(app):
    return app.test_client()

