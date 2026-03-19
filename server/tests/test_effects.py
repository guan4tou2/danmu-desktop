"""effects 服務與 API 端點測試"""

import json
import textwrap
from pathlib import Path

from server.services import effects as eff_svc

# ─── 測試 .dme 解析 ───────────────────────────────────────────────────────────


def csrf_token(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _make_dme(tmp_path: Path, content: str, filename: str = "test.dme") -> Path:
    p = tmp_path / filename
    p.write_text(textwrap.dedent(content), encoding="utf-8")
    return p


def test_parse_dme_float_params(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: zoom
        label: 縮放
        params:
          duration:
            type: float
            default: 0.8
            min: 0.2
            max: 3.0
            step: 0.1
          scale:
            type: float
            default: 1.3
            min: 1.05
            max: 2.0
            step: 0.05
        keyframes: |
          @keyframes dme-zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale({scale}); }
          }
        animation: "dme-zoom {duration}s ease-in-out infinite"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert result["name"] == "zoom"
    assert result["label"] == "縮放"
    assert "duration" in result["params"]
    assert result["params"]["duration"]["type"] == "float"
    assert "{scale}" in result["keyframes"]
    assert "{duration}" in result["animation"]


def test_parse_dme_select_param(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: spin
        label: 旋轉
        params:
          direction:
            type: select
            default: normal
            options:
              - value: normal
                label: 順時針
              - value: reverse
                label: 逆時針
        keyframes: |
          @keyframes dme-spin { to { transform: rotate(360deg); } }
        animation: "dme-spin 1s linear infinite {direction}"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    opts = result["params"]["direction"]["options"]
    assert len(opts) == 2
    assert opts[0]["value"] == "normal"


def test_parse_dme_rejects_invalid_name(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: "bad name!"
        label: 壞名稱
        keyframes: ""
        animation: ""
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is None


def test_parse_dme_rejects_invalid_param_key(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: ok
        label: OK
        params:
          "bad-key!":
            type: float
            default: 1.0
        keyframes: ""
        animation: "ok 1s"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    # bad-key! 應被過濾掉
    assert "bad-key!" not in result["params"]


def test_parse_dme_rejects_invalid_select_option(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: test
        label: 測試
        params:
          mode:
            type: select
            default: ok
            options:
              - value: ok
                label: 好
              - value: "bad value!"
                label: 壞
        keyframes: ""
        animation: "test 1s {mode}"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    opts = result["params"]["mode"]["options"]
    # "bad value!" 應被過濾掉，只剩 "ok"
    assert len(opts) == 1
    assert opts[0]["value"] == "ok"


def test_parse_dme_unknown_param_type_filtered(tmp_path):
    dme = _make_dme(
        tmp_path,
        """
        name: test
        label: 測試
        params:
          x:
            type: color
            default: "#ff0000"
        keyframes: ""
        animation: "test 1s"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert "x" not in result["params"]  # unknown type 被過濾


# ─── 測試 _sanitize_param ─────────────────────────────────────────────────────


def test_sanitize_float_clamps():
    pdef = {"type": "float", "min": 0.2, "max": 3.0, "default": 1.0}
    assert eff_svc._sanitize_param("d", 10.0, pdef) == "3"  # clamped to max
    assert eff_svc._sanitize_param("d", 0.0, pdef) == "0.2"  # clamped to min
    assert eff_svc._sanitize_param("d", 1.5, pdef) == "1.5"
    assert eff_svc._sanitize_param("d", "abc", pdef) == "1"  # fallback to default


def test_sanitize_int_clamps():
    pdef = {"type": "int", "min": 1, "max": 30, "default": 5}
    assert eff_svc._sanitize_param("a", 100, pdef) == "30"
    assert eff_svc._sanitize_param("a", 0, pdef) == "1"
    assert eff_svc._sanitize_param("a", 10, pdef) == "10"


def test_sanitize_select_whitelist():
    pdef = {
        "type": "select",
        "options": [{"value": "normal"}, {"value": "reverse"}],
        "default": "normal",
    }
    assert eff_svc._sanitize_param("d", "normal", pdef) == "normal"
    assert eff_svc._sanitize_param("d", "reverse", pdef) == "reverse"
    assert eff_svc._sanitize_param("d", "evil;css", pdef) == "normal"  # 不在白名單 → default


# ─── 測試 _interpolate ────────────────────────────────────────────────────────


def test_interpolate_basic():
    result = eff_svc._interpolate("dme-zoom {duration}s ease infinite", {"duration": "0.8"})
    assert result == "dme-zoom 0.8s ease infinite"


def test_interpolate_removes_unknown_placeholders():
    result = eff_svc._interpolate("dme-zoom {duration}s {unknown}", {"duration": "1"})
    assert "{unknown}" not in result
    assert "1s" in result


def test_interpolate_strips_outer_quotes():
    result = eff_svc._interpolate('"dme-spin 1s linear"', {})
    assert result == "dme-spin 1s linear"


# ─── 測試 render_effects ─────────────────────────────────────────────────────


def _inject_effect(name, keyframes, animation, params=None):
    """直接插入一個假效果到 _cache 中（不需要 .dme 檔案）。"""
    import time

    eff_svc._cache[name] = {
        "name": name,
        "label": name,
        "description": "",
        "params": params or {},
        "keyframes": keyframes,
        "animation": animation,
    }
    # 防止 get_effect() 的懶載入掃描覆蓋注入的測試資料
    eff_svc._last_scan = time.monotonic()


def test_render_effects_single():
    eff_svc._cache.clear()
    _inject_effect(
        "zoom",
        "@keyframes dme-zoom { 0%,100%{transform:scale(1)} 50%{transform:scale({scale})} }",
        "dme-zoom {duration}s ease-in-out infinite",
        {
            "duration": {"type": "float", "default": 0.8, "min": 0.2, "max": 3.0},
            "scale": {"type": "float", "default": 1.3, "min": 1.05, "max": 2.0},
        },
    )
    result = eff_svc.render_effects([{"name": "zoom", "params": {"duration": 1.0, "scale": 1.5}}])
    assert result is not None
    assert "dme-zoom" in result["keyframes"]
    assert "scale(1.5)" in result["keyframes"]
    assert "1s" in result["animation"]
    assert "styleId" in result


def test_render_effects_multiple_stacked():
    eff_svc._cache.clear()
    _inject_effect("a", "@keyframes dme-a { to { opacity:0; } }", "dme-a 1s infinite")
    _inject_effect("b", "@keyframes dme-b { to { color:red; } }", "dme-b 2s infinite")

    result = eff_svc.render_effects(
        [
            {"name": "a", "params": {}},
            {"name": "b", "params": {}},
        ]
    )
    assert result is not None
    # 兩段 keyframes 都在
    assert "dme-a" in result["keyframes"]
    assert "dme-b" in result["keyframes"]
    # 動畫用逗號分隔
    parts = result["animation"].split(",")
    assert len(parts) == 2
    # animationComposition 應與動畫數量一致（每個動畫一個 "add"）
    assert "animationComposition" in result
    comp_parts = result["animationComposition"].split(",")
    assert len(comp_parts) == 2
    assert all(p.strip() == "add" for p in comp_parts)


def test_render_effects_unknown_effect_skipped():
    eff_svc._cache.clear()
    _inject_effect("known", "@keyframes dme-k{}", "dme-k 1s infinite")
    result = eff_svc.render_effects(
        [
            {"name": "unknown_effect_xyz", "params": {}},
            {"name": "known", "params": {}},
        ]
    )
    assert result is not None
    assert "dme-k" in result["animation"]


def test_render_effects_none_effect_ignored():
    eff_svc._cache.clear()
    result = eff_svc.render_effects([{"name": "none", "params": {}}])
    assert result is None


def test_render_effects_empty_returns_none():
    eff_svc._cache.clear()
    result = eff_svc.render_effects([])
    assert result is None


def test_render_effects_css_injection_blocked():
    """確保惡意 CSS 不能透過參數注入。"""
    eff_svc._cache.clear()
    _inject_effect(
        "safe",
        "@keyframes dme-safe { 50%{opacity:{val}} }",
        "dme-safe {dur}s infinite",
        {
            "val": {"type": "float", "default": 0.5, "min": 0.0, "max": 1.0},
            "dur": {"type": "float", "default": 1.0, "min": 0.1, "max": 10.0},
        },
    )
    result = eff_svc.render_effects(
        [
            {
                "name": "safe",
                "params": {"val": "1}; background: red; .x{opacity", "dur": 1.0},
            }
        ]
    )
    assert result is not None
    # 惡意字串無法通過 float 驗證，應 fallback 到 default (0.5)
    assert "background" not in result["keyframes"]


# ─── 測試 API 端點 ────────────────────────────────────────────────────────────


def test_list_effects_endpoint(client):
    eff_svc._cache.clear()
    _inject_effect("zoom", "@keyframes dme-zoom{}", "dme-zoom 1s infinite")
    resp = client.get("/effects")
    assert resp.status_code == 200
    data = json.loads(resp.data)
    assert "effects" in data
    names = [e["name"] for e in data["effects"]]
    assert "zoom" in names
    # keyframes/animation 不應暴露在 list endpoint
    for e in data["effects"]:
        assert "keyframes" not in e
        assert "animation" not in e


def test_reload_effects_endpoint(client):
    resp = client.post("/effects/reload")
    assert resp.status_code == 403


def test_reload_effects_endpoint_with_auth_and_csrf(client):
    token = csrf_token(client)
    resp = client.post("/effects/reload", headers={"X-CSRF-Token": token})
    assert resp.status_code == 200
    data = json.loads(resp.data)
    assert "count" in data


def test_fire_with_effects(client, monkeypatch):
    from server.services import messaging as msg
    from server.services.ws_state import update_ws_client_count

    monkeypatch.setattr(msg, "forward_to_ws_server", lambda d: True)
    update_ws_client_count(1)

    eff_svc._cache.clear()
    _inject_effect(
        "zoom",
        "@keyframes dme-zoom{}",
        "dme-zoom 1s infinite",
        {"duration": {"type": "float", "default": 1.0, "min": 0.1, "max": 5.0}},
    )

    payload = {
        "text": "Hello Effects",
        "effects": [{"name": "zoom", "params": {"duration": 1.5}}],
    }
    resp = client.post("/fire", json=payload)
    assert resp.status_code == 200


def test_fire_with_no_effects(client, monkeypatch):
    from server.services import messaging as msg
    from server.services.ws_state import update_ws_client_count

    monkeypatch.setattr(msg, "forward_to_ws_server", lambda d: True)
    update_ws_client_count(1)

    payload = {"text": "No effects", "effects": []}
    resp = client.post("/fire", json=payload)
    assert resp.status_code == 200


# ─── _parse_dme 補充 ──────────────────────────────────────────────────────────


def test_parse_dme_invalid_yaml(tmp_path):
    """YAML 格式錯誤應回傳 None"""
    dme = _make_dme(tmp_path, ": broken: [yaml not closed")
    result = eff_svc._parse_dme(dme)
    assert result is None


def test_parse_dme_missing_name_key(tmp_path):
    """缺少 name 欄位應回傳 None"""
    dme = _make_dme(tmp_path, "label: 無名\nkeyframes: ''\nanimation: ''\n")
    result = eff_svc._parse_dme(dme)
    assert result is None


def test_parse_dme_int_param(tmp_path):
    """int 類型參數應正確解析"""
    dme = _make_dme(
        tmp_path,
        """
        name: blink
        label: 閃爍
        params:
          count:
            type: int
            default: 3
            min: 1
            max: 20
        keyframes: "@keyframes dme-blink { to { opacity: 0; } }"
        animation: "dme-blink 0.5s step-end {count}"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert result["params"]["count"]["type"] == "int"
    assert result["params"]["count"]["default"] == 3


def test_parse_dme_non_dict_param_skipped(tmp_path):
    """param 值非 dict 應被略過，正常 param 保留"""
    dme = _make_dme(
        tmp_path,
        """
        name: test
        label: 測試
        params:
          bad_param: "just a string"
          good_param:
            type: float
            default: 1.0
            min: 0.1
            max: 5.0
        keyframes: ""
        animation: "test 1s"
    """,
    )
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert "bad_param" not in result["params"]
    assert "good_param" in result["params"]


def test_parse_dme_label_defaults_to_name(tmp_path):
    """未提供 label 時應以 name 作為 label"""
    dme = _make_dme(tmp_path, "name: myfx\nkeyframes: ''\nanimation: 'dme-myfx 1s'\n")
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert result["label"] == "myfx"


# ─── _sanitize_param 補充 ─────────────────────────────────────────────────────


def test_sanitize_unknown_type_returns_empty():
    """不支援的 param type 應回傳空字串"""
    pdef = {"type": "color", "default": "#fff"}
    assert eff_svc._sanitize_param("c", "#ff0000", pdef) == ""


def test_sanitize_int_non_numeric_uses_default():
    """int 類型接到非數字時應 fallback 到 default"""
    pdef = {"type": "int", "min": 1, "max": 10, "default": 5}
    assert eff_svc._sanitize_param("n", "abc", pdef) == "5"


def test_sanitize_select_empty_options_uses_default():
    """select 無選項時應回傳 default"""
    pdef = {"type": "select", "options": [], "default": "normal"}
    assert eff_svc._sanitize_param("d", "anything", pdef) == "normal"


def test_sanitize_none_value_uses_default():
    """None 值應 fallback 到 default"""
    pdef = {"type": "float", "min": 0.0, "max": 1.0, "default": 0.5}
    assert eff_svc._sanitize_param("v", None, pdef) == "0.5"


# ─── _interpolate 補充 ────────────────────────────────────────────────────────


def test_interpolate_no_placeholders():
    """無佔位符的模板應原樣返回"""
    result = eff_svc._interpolate("dme-spin 1s linear infinite", {})
    assert result == "dme-spin 1s linear infinite"


def test_interpolate_strips_single_quotes():
    """外框單引號應被去除"""
    result = eff_svc._interpolate("'dme-spin 1s linear'", {})
    assert result == "dme-spin 1s linear"


# ─── render_effects 補充 ──────────────────────────────────────────────────────


def test_render_effects_uses_param_defaults():
    """使用者不提供 params 時應使用 param 的 default 值"""
    eff_svc._cache.clear()
    _inject_effect(
        "blink",
        "@keyframes dme-blink { to { opacity: 0; } }",
        "dme-blink {speed}s infinite",
        {"speed": {"type": "float", "default": 0.5, "min": 0.1, "max": 3.0}},
    )
    result = eff_svc.render_effects([{"name": "blink", "params": {}}])
    assert result is not None
    assert "0.5s" in result["animation"]


def test_render_effects_styleid_is_deterministic():
    """相同輸入應產生相同 styleId（可作為 CSS cache key）"""
    eff_svc._cache.clear()
    _inject_effect(
        "spin",
        "@keyframes dme-spin { to { transform: rotate(360deg); } }",
        "dme-spin 1s linear infinite",
    )
    r1 = eff_svc.render_effects([{"name": "spin", "params": {}}])
    r2 = eff_svc.render_effects([{"name": "spin", "params": {}}])
    assert r1 is not None and r2 is not None
    assert r1["styleId"] == r2["styleId"]


def test_render_effects_empty_animation_skipped():
    """animation 為空字串的特效不計入 animation_parts，最終回傳 None"""
    eff_svc._cache.clear()
    _inject_effect("noani", "@keyframes dme-noani {}", "")
    result = eff_svc.render_effects([{"name": "noani", "params": {}}])
    assert result is None


def test_render_effects_select_injection_blocked():
    """select 型參數：合法值通過，非白名單值 fallback 到 default"""
    eff_svc._cache.clear()
    _inject_effect(
        "spin",
        "@keyframes dme-spin { to { transform: rotate(360deg); } }",
        "dme-spin 1s linear infinite {direction}",
        {
            "direction": {
                "type": "select",
                "default": "normal",
                "options": [{"value": "normal"}, {"value": "reverse"}],
            }
        },
    )
    r1 = eff_svc.render_effects([{"name": "spin", "params": {"direction": "reverse"}}])
    assert r1 is not None
    assert "reverse" in r1["animation"]

    r2 = eff_svc.render_effects([{"name": "spin", "params": {"direction": "evil;injection"}}])
    assert r2 is not None
    assert "evil" not in r2["animation"]
    assert "normal" in r2["animation"]  # fallback 到 default


# ─── load_all / get_effect 測試 ───────────────────────────────────────────────


def test_load_all_excludes_keyframes_animation():
    """load_all 回傳的 meta 不應含 keyframes / animation"""
    eff_svc._cache.clear()
    _inject_effect("spin", "@keyframes dme-spin{}", "dme-spin 1s infinite")
    effects = eff_svc.load_all()
    spin = next((e for e in effects if e["name"] == "spin"), None)
    assert spin is not None
    assert "keyframes" not in spin
    assert "animation" not in spin


def test_get_effect_returns_full_dict():
    """get_effect 應回傳含 keyframes / animation 的完整定義"""
    eff_svc._cache.clear()
    _inject_effect("glow", "@keyframes dme-glow{}", "dme-glow 2s ease infinite")
    effect = eff_svc.get_effect("glow")
    assert effect is not None
    assert effect["keyframes"] == "@keyframes dme-glow{}"
    assert effect["animation"] == "dme-glow 2s ease infinite"


def test_get_effect_unknown_returns_none():
    """get_effect 查無特效時回傳 None"""
    eff_svc._cache.clear()
    assert eff_svc.get_effect("definitely_not_a_real_effect") is None


# ─── API 端點補充 ─────────────────────────────────────────────────────────────


def test_reload_effects_requires_login(client):
    """通過 CSRF 但未登入應回傳 401"""
    with client.session_transaction() as sess:
        sess["csrf_token"] = "testtoken"
    resp = client.post("/effects/reload", headers={"X-CSRF-Token": "testtoken"})
    assert resp.status_code == 401


def test_list_effects_endpoint_includes_params(client):
    """list endpoint 應包含 params 定義，供前端建立參數 UI"""
    eff_svc._cache.clear()
    _inject_effect(
        "zoom",
        "@keyframes dme-zoom{}",
        "dme-zoom 1s infinite",
        {"duration": {"type": "float", "default": 0.8, "min": 0.2, "max": 3.0}},
    )
    resp = client.get("/effects")
    assert resp.status_code == 200
    data = json.loads(resp.data)
    zoom = next((e for e in data["effects"] if e["name"] == "zoom"), None)
    assert zoom is not None
    assert "params" in zoom
    assert "duration" in zoom["params"]


def test_fire_effects_disabled_in_settings(client, monkeypatch):
    """Effects 設定關閉時，fire 不應渲染特效（effectCss 為 None）"""
    from server.services import messaging as msg
    from server.services.settings import set_toggle
    from server.services.ws_state import update_ws_client_count

    forwarded = []
    monkeypatch.setattr(msg, "forward_to_ws_server", lambda d: forwarded.append(d) or True)
    update_ws_client_count(1)

    set_toggle("Effects", False)
    eff_svc._cache.clear()
    _inject_effect("zoom", "@keyframes dme-zoom{}", "dme-zoom 1s infinite")

    resp = client.post("/fire", json={"text": "Test", "effects": [{"name": "zoom", "params": {}}]})
    assert resp.status_code == 200
    assert forwarded
    assert forwarded[0].get("effectCss") is None


# ─── save_effect_content name mismatch 測試 ──────────────────────────────────


def test_save_effect_content_name_mismatch_rejected(app, tmp_path):
    """YAML content with name != URL name must be rejected."""
    from unittest.mock import patch

    from server.services import effects

    dme_yaml = (
        "name: spin\nanimation: spin 1s linear infinite\n"
        "keyframes:\n  spin:\n"
        "    from: { transform: 'rotate(0deg)' }\n"
        "    to: { transform: 'rotate(360deg)' }\n"
    )
    dme = tmp_path / "spin.dme"
    dme.write_text(dme_yaml)

    with patch.object(effects, "_path_to_name", {str(dme): "spin"}), patch.object(effects, "_scan"):
        bad_content = (
            b"name: evil\nanimation: spin 1s linear infinite\n"
            b"keyframes:\n  spin:\n"
            b"    from: { transform: 'rotate(0deg)' }\n"
            b"    to: { transform: 'rotate(360deg)' }\n"
        )
        filename, error = effects.save_effect_content("spin", bad_content)
        assert error is not None
        assert "name" in error.lower() or "mismatch" in error.lower()
        assert filename is None


def test_effects_content_path_traversal_returns_error(client):
    """GET /admin/effects with path traversal name must return error."""
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    resp = client.get("/admin/effects/..%2F..%2Fetc%2Fpasswd/content")
    assert resp.status_code in (400, 404)


def test_save_effect_content_matching_name_accepted(app, tmp_path):
    """YAML content with matching name should succeed."""
    from unittest.mock import patch

    from server.services import effects

    dme_yaml = (
        "name: spin\nanimation: spin 1s linear infinite\n"
        "keyframes:\n  spin:\n"
        "    from: { transform: 'rotate(0deg)' }\n"
        "    to: { transform: 'rotate(360deg)' }\n"
    )
    dme = tmp_path / "spin.dme"
    dme.write_text(dme_yaml)

    with patch.object(effects, "_path_to_name", {str(dme): "spin"}), patch.object(effects, "_scan"):
        good_content = (
            b"name: spin\nanimation: spin 1s linear infinite\n"
            b"keyframes:\n  spin:\n"
            b"    from: { transform: 'rotate(0deg)' }\n"
            b"    to: { transform: 'rotate(360deg)' }\n"
        )
        filename, error = effects.save_effect_content("spin", good_content)
        assert error is None
        assert filename == "spin.dme"


# ─── OSError branch coverage ────────────────────────────────────────────────


def test_list_with_file_info_handles_stat_oserror(app):
    """list_with_file_info should handle OSError when stat fails."""
    from server.services import effects

    # Inject a fake entry that points to a non-existent path
    fake_path = "/nonexistent/dir/fake.dme"
    effects._cache["testfx"] = {
        "name": "testfx",
        "label": "Test",
        "description": "desc",
        "params": {},
        "keyframes": "",
        "animation": "testfx 1s",
    }
    effects._path_to_name[fake_path] = "testfx"
    import time

    effects._last_scan = time.monotonic()

    try:
        result = effects.list_with_file_info()
        entry = next((r for r in result if r["name"] == "testfx"), None)
        assert entry is not None
        # mtime should be None when stat fails with OSError
        assert entry["mtime"] is None
        assert entry["filename"] == "fake.dme"
    finally:
        effects._cache.pop("testfx", None)
        effects._path_to_name.pop(fake_path, None)


def test_delete_by_name_handles_unlink_oserror(app):
    """delete_by_name should return False when unlink fails."""
    from unittest.mock import MagicMock, patch

    from server.services import effects

    fake_path = "/nonexistent/dir/spin.dme"
    effects._cache["spin"] = {
        "name": "spin",
        "label": "Spin",
        "description": "",
        "params": {},
        "keyframes": "",
        "animation": "spin 1s",
    }
    effects._path_to_name[fake_path] = "spin"
    effects._mtime_map[fake_path] = 123.0

    try:
        with patch("server.services.effects.Path") as MockPath:
            mock_instance = MagicMock()
            mock_instance.unlink.side_effect = OSError("Permission denied")
            MockPath.return_value = mock_instance

            result = effects.delete_by_name("spin")
            assert result is False
            # Cache should NOT be cleaned up on failure
            assert "spin" in effects._cache
    finally:
        effects._cache.pop("spin", None)
        effects._path_to_name.pop(fake_path, None)
        effects._mtime_map.pop(fake_path, None)


def test_save_uploaded_effect_handles_write_oserror(app):
    """save_uploaded_effect should return error when write_bytes fails."""
    from pathlib import Path
    from unittest.mock import patch

    from server.services import effects

    valid_content = b"name: testwrite\nanimation: testwrite 1s\nkeyframes: ''\n"

    original_write_bytes = Path.write_bytes

    def _failing_write_bytes(self, data):
        if self.name == "testwrite.dme":
            raise OSError("Disk full")
        return original_write_bytes(self, data)

    with patch.object(Path, "write_bytes", _failing_write_bytes):
        filename, error = effects.save_uploaded_effect(valid_content)
        assert error == "Failed to save file"
        assert filename == ""


def test_get_effect_content_handles_read_oserror(app):
    """get_effect_content should return None when file read fails."""
    import time

    from server.services import effects

    fake_path = "/nonexistent/dir/glow.dme"
    effects._cache["glow"] = {
        "name": "glow",
        "label": "Glow",
        "description": "",
        "params": {},
        "keyframes": "",
        "animation": "glow 1s",
    }
    effects._path_to_name[fake_path] = "glow"
    effects._last_scan = time.monotonic()

    try:
        # The path doesn't exist, so read_text will raise OSError
        result = effects.get_effect_content("glow")
        assert result is None
    finally:
        effects._cache.pop("glow", None)
        effects._path_to_name.pop(fake_path, None)


# ─── preview endpoint 測試 ────────────────────────────────────────────────


def test_preview_endpoint_returns_css(client):
    """POST /admin/effects/preview with valid spin content returns keyframes/animation/styleId."""
    token = csrf_token(client)
    content = textwrap.dedent(
        """\
        name: spin
        label: 旋轉
        params:
          duration:
            type: float
            default: 1.0
            min: 0.2
            max: 5.0
        keyframes: |
          @keyframes dme-spin {
            to { transform: rotate(360deg); }
          }
        animation: "dme-spin {duration}s linear infinite"
    """
    )
    resp = client.post(
        "/admin/effects/preview",
        json={"content": content, "params": {"duration": 2.0}},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    data = json.loads(resp.data)
    assert "keyframes" in data
    assert "animation" in data
    assert "styleId" in data
    assert "dme-spin" in data["keyframes"]
    assert "2s" in data["animation"]


def test_preview_invalid_yaml_returns_error(client):
    """POST /admin/effects/preview with invalid YAML returns 400."""
    token = csrf_token(client)
    resp = client.post(
        "/admin/effects/preview",
        json={"content": ": broken: [yaml not closed"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    data = json.loads(resp.data)
    assert "error" in data
