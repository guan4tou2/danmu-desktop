"""effects 服務與 API 端點測試"""
import json
import textwrap
from pathlib import Path

import pytest

from server.services import effects as eff_svc


# ─── 測試 .dme 解析 ───────────────────────────────────────────────────────────

def _make_dme(tmp_path: Path, content: str, filename: str = "test.dme") -> Path:
    p = tmp_path / filename
    p.write_text(textwrap.dedent(content), encoding="utf-8")
    return p


def test_parse_dme_float_params(tmp_path):
    dme = _make_dme(tmp_path, """
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
    """)
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert result["name"] == "zoom"
    assert result["label"] == "縮放"
    assert "duration" in result["params"]
    assert result["params"]["duration"]["type"] == "float"
    assert "{scale}" in result["keyframes"]
    assert "{duration}" in result["animation"]


def test_parse_dme_select_param(tmp_path):
    dme = _make_dme(tmp_path, """
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
    """)
    result = eff_svc._parse_dme(dme)
    assert result is not None
    opts = result["params"]["direction"]["options"]
    assert len(opts) == 2
    assert opts[0]["value"] == "normal"


def test_parse_dme_rejects_invalid_name(tmp_path):
    dme = _make_dme(tmp_path, """
        name: "bad name!"
        label: 壞名稱
        keyframes: ""
        animation: ""
    """)
    result = eff_svc._parse_dme(dme)
    assert result is None


def test_parse_dme_rejects_invalid_param_key(tmp_path):
    dme = _make_dme(tmp_path, """
        name: ok
        label: OK
        params:
          "bad-key!":
            type: float
            default: 1.0
        keyframes: ""
        animation: "ok 1s"
    """)
    result = eff_svc._parse_dme(dme)
    assert result is not None
    # bad-key! 應被過濾掉
    assert "bad-key!" not in result["params"]


def test_parse_dme_rejects_invalid_select_option(tmp_path):
    dme = _make_dme(tmp_path, """
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
    """)
    result = eff_svc._parse_dme(dme)
    assert result is not None
    opts = result["params"]["mode"]["options"]
    # "bad value!" 應被過濾掉，只剩 "ok"
    assert len(opts) == 1
    assert opts[0]["value"] == "ok"


def test_parse_dme_unknown_param_type_filtered(tmp_path):
    dme = _make_dme(tmp_path, """
        name: test
        label: 測試
        params:
          x:
            type: color
            default: "#ff0000"
        keyframes: ""
        animation: "test 1s"
    """)
    result = eff_svc._parse_dme(dme)
    assert result is not None
    assert "x" not in result["params"]  # unknown type 被過濾


# ─── 測試 _sanitize_param ─────────────────────────────────────────────────────

def test_sanitize_float_clamps():
    pdef = {"type": "float", "min": 0.2, "max": 3.0, "default": 1.0}
    assert eff_svc._sanitize_param("d", 10.0, pdef) == "3"       # clamped to max
    assert eff_svc._sanitize_param("d", 0.0, pdef) == "0.2"      # clamped to min
    assert eff_svc._sanitize_param("d", 1.5, pdef) == "1.5"
    assert eff_svc._sanitize_param("d", "abc", pdef) == "1"      # fallback to default


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
    eff_svc._cache[name] = {
        "name": name,
        "label": name,
        "description": "",
        "params": params or {},
        "keyframes": keyframes,
        "animation": animation,
    }


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

    result = eff_svc.render_effects([
        {"name": "a", "params": {}},
        {"name": "b", "params": {}},
    ])
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
    result = eff_svc.render_effects([
        {"name": "unknown_effect_xyz", "params": {}},
        {"name": "known", "params": {}},
    ])
    assert result is not None
    assert "dme-k" in result["animation"]


def test_render_effects_none_effect_ignored():
    eff_svc._cache.clear()
    result = eff_svc.render_effects([{"name": "none", "params": {}}])
    assert result is None


def test_render_effects_empty_returns_none():
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
    result = eff_svc.render_effects([{
        "name": "safe",
        "params": {"val": "1}; background: red; .x{opacity", "dur": 1.0}
    }])
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
