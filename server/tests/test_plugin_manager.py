"""Tests for the plugin manager."""

import textwrap

import pytest

from server.services.plugin_manager import PluginManager, StopPropagation


@pytest.fixture()
def pm(tmp_path):
    """Return a fresh PluginManager and its plugins directory."""
    mgr = PluginManager()
    plugins_dir = tmp_path / "plugins"
    plugins_dir.mkdir()
    return mgr, plugins_dir


def _write_plugin(plugins_dir, filename, source):
    """Write a plugin .py file into the plugins directory."""
    (plugins_dir / filename).write_text(textwrap.dedent(source), encoding="utf-8")


# ---- helpers to create common test plugins --------------------------------

_SIMPLE_PLUGIN = """\
    from server.services.plugin_manager import DanmuPlugin

    class HelloPlugin(DanmuPlugin):
        name = "hello"
        version = "1.0.0"
        description = "A test plugin"
        priority = 100

        def on_fire(self, context):
            context["greeting"] = "hello"
            return context
"""

_HIGH_PRIORITY_PLUGIN = """\
    from server.services.plugin_manager import DanmuPlugin

    class FirstPlugin(DanmuPlugin):
        name = "first"
        version = "0.1.0"
        description = "Runs first"
        priority = 10

        def on_fire(self, context):
            context.setdefault("order", []).append("first")
            return context
"""

_LOW_PRIORITY_PLUGIN = """\
    from server.services.plugin_manager import DanmuPlugin

    class SecondPlugin(DanmuPlugin):
        name = "second"
        version = "0.2.0"
        description = "Runs second"
        priority = 200

        def on_fire(self, context):
            context.setdefault("order", []).append("second")
            return context
"""

_STOP_PLUGIN = """\
    from server.services.plugin_manager import DanmuPlugin, StopPropagation

    class StopPlugin(DanmuPlugin):
        name = "stopper"
        version = "1.0.0"
        description = "Stops propagation"
        priority = 50

        def on_fire(self, context):
            raise StopPropagation()
"""

_ERROR_PLUGIN = """\
    from server.services.plugin_manager import DanmuPlugin

    class BrokenPlugin(DanmuPlugin):
        name = "broken"
        version = "1.0.0"
        description = "Always raises"
        priority = 100

        def on_fire(self, context):
            raise RuntimeError("kaboom")
"""


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------


class TestLoadPlugins:
    """Test 1: Load plugins from a test directory with a simple plugin."""

    def test_load_simple_plugin(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        plugins = mgr.list_plugins()
        assert len(plugins) == 1
        assert plugins[0]["name"] == "hello"


class TestListPlugins:
    """Test 2: list_plugins shows loaded plugin metadata."""

    def test_list_plugins_metadata(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        plugins = mgr.list_plugins()
        info = plugins[0]
        assert info["name"] == "hello"
        assert info["version"] == "1.0.0"
        assert info["description"] == "A test plugin"
        assert info["enabled"] is True
        assert info["priority"] == 100


class TestDisableEnable:
    """Test 3: disable/enable plugin."""

    def test_disable_returns_true(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        assert mgr.disable("hello") is True
        plugins = mgr.list_plugins()
        assert plugins[0]["enabled"] is False

    def test_enable_returns_true(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        mgr.disable("hello")
        assert mgr.enable("hello") is True
        plugins = mgr.list_plugins()
        assert plugins[0]["enabled"] is True

    def test_disable_nonexistent_returns_false(self, pm):
        mgr, plugins_dir = pm
        mgr.load_all(str(plugins_dir))
        assert mgr.disable("nope") is False

    def test_enable_nonexistent_returns_false(self, pm):
        mgr, plugins_dir = pm
        mgr.load_all(str(plugins_dir))
        assert mgr.enable("nope") is False


class TestEmitOnFire:
    """Test 4: emit on_fire calls plugin hook and returns modified context."""

    def test_emit_modifies_context(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        ctx = {"message": "hi"}
        result = mgr.emit("on_fire", ctx)
        assert result is not None
        assert result["greeting"] == "hello"
        assert result["message"] == "hi"


class TestEmitDisabledPlugin:
    """Test 5: emit with disabled plugin skips it."""

    def test_disabled_plugin_not_called(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))
        mgr.disable("hello")

        ctx = {"message": "hi"}
        result = mgr.emit("on_fire", ctx)
        assert result is not None
        assert "greeting" not in result


class TestStopPropagation:
    """Test 6: StopPropagation returns None from emit."""

    def test_stop_propagation_returns_none(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "stopper.py", _STOP_PLUGIN)
        mgr.load_all(str(plugins_dir))

        result = mgr.emit("on_fire", {"msg": "test"})
        assert result is None


class TestExceptionIsolation:
    """Test 7: Exception in plugin is isolated (doesn't crash emit)."""

    def test_error_does_not_crash(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "broken.py", _ERROR_PLUGIN)
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))

        ctx = {"message": "hi"}
        result = mgr.emit("on_fire", ctx)
        assert result is not None
        # The hello plugin (priority 100) still ran despite broken (also 100)
        # depending on sort order. At minimum, emit did not raise.
        assert result["message"] == "hi"


class TestPriorityOrdering:
    """Test 8: Priority ordering (lower priority value executes first)."""

    def test_lower_priority_runs_first(self, pm):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "first.py", _HIGH_PRIORITY_PLUGIN)
        _write_plugin(plugins_dir, "second.py", _LOW_PRIORITY_PLUGIN)
        mgr.load_all(str(plugins_dir))

        result = mgr.emit("on_fire", {})
        assert result is not None
        assert result["order"] == ["first", "second"]


class TestReload:
    """Test 9: reload clears and re-loads."""

    def test_reload_picks_up_new_plugin(self, pm, monkeypatch):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))
        assert len(mgr.list_plugins()) == 1

        # Add a second plugin and reload. reload() calls load_all() which
        # uses the default _PLUGINS_DIR, so monkeypatch it.
        import server.services.plugin_manager as pm_mod

        monkeypatch.setattr(pm_mod, "_PLUGINS_DIR", plugins_dir)
        monkeypatch.setattr(pm_mod, "_STATE_FILE", plugins_dir / "plugins_state.json")

        _write_plugin(plugins_dir, "first.py", _HIGH_PRIORITY_PLUGIN)
        mgr.reload()

        names = {p["name"] for p in mgr.list_plugins()}
        assert "hello" in names
        assert "first" in names

    def test_reload_removes_deleted_plugin(self, pm, monkeypatch):
        mgr, plugins_dir = pm
        _write_plugin(plugins_dir, "hello.py", _SIMPLE_PLUGIN)
        mgr.load_all(str(plugins_dir))
        assert len(mgr.list_plugins()) == 1

        import server.services.plugin_manager as pm_mod

        monkeypatch.setattr(pm_mod, "_PLUGINS_DIR", plugins_dir)
        monkeypatch.setattr(pm_mod, "_STATE_FILE", plugins_dir / "plugins_state.json")

        (plugins_dir / "hello.py").unlink()
        mgr.reload()

        assert len(mgr.list_plugins()) == 0


class TestEmitNoPlugins:
    """Test 10: emit with no plugins returns context unchanged."""

    def test_emit_returns_context_unchanged(self, pm):
        mgr, plugins_dir = pm
        mgr.load_all(str(plugins_dir))

        ctx = {"data": 42}
        result = mgr.emit("on_fire", ctx)
        assert result is ctx

    def test_emit_none_context_returns_none(self, pm):
        mgr, plugins_dir = pm
        mgr.load_all(str(plugins_dir))

        result = mgr.emit("on_fire", None)
        assert result is None

    def test_emit_unknown_hook_returns_context(self, pm):
        mgr, plugins_dir = pm
        mgr.load_all(str(plugins_dir))

        ctx = {"x": 1}
        result = mgr.emit("on_nonexistent", ctx)
        assert result is ctx
