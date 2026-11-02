"""Tests for overlay widget service."""

import pytest

from server.services import widgets


@pytest.fixture(autouse=True)
def _reset_widgets(tmp_path):
    """Isolate the persisted widget store per test (2026-11-03 持久化 P0).

    State now lives in runtime/widgets.json via JsonState — point each test
    at its own file so nothing leaks between tests or into the real store.
    """
    widgets.reset_for_tests(path=tmp_path / "widgets.json")
    yield
    widgets.reset_for_tests(path=tmp_path / "widgets.json")


class TestCreateWidget:
    def test_create_scoreboard(self):
        w = widgets.create_widget(
            "scoreboard",
            {
                "title": "Match",
                "teams": [
                    {"name": "Red", "score": 0, "color": "#ff0000"},
                    {"name": "Blue", "score": 0, "color": "#0000ff"},
                ],
                "position": "top-left",
            },
        )
        assert w["type"] == "scoreboard"
        assert w["visible"] is True
        assert w["position"] == "top-left"
        assert len(w["config"]["teams"]) == 2
        assert w["config"]["teams"][0]["name"] == "Red"

    def test_create_ticker(self):
        w = widgets.create_widget(
            "ticker",
            {
                "messages": ["Hello", "World"],
                "speed": 80,
                "position": "bottom-center",
            },
        )
        assert w["type"] == "ticker"
        assert w["config"]["messages"] == ["Hello", "World"]
        assert w["config"]["speed"] == 80

    def test_create_label(self):
        w = widgets.create_widget(
            "label",
            {"text": "Test Label", "fontSize": 32, "position": "center"},
        )
        assert w["type"] == "label"
        assert w["config"]["text"] == "Test Label"
        assert w["config"]["fontSize"] == 32

    def test_invalid_type(self):
        with pytest.raises(ValueError, match="Unknown widget type"):
            widgets.create_widget("invalid", {})

    def test_invalid_position_defaults(self):
        w = widgets.create_widget("label", {"text": "X", "position": "nope"})
        assert w["position"] == "top-left"

    def test_unique_ids(self):
        w1 = widgets.create_widget("label", {"text": "A"})
        w2 = widgets.create_widget("label", {"text": "B"})
        assert w1["id"] != w2["id"]


class TestUpdateWidget:
    def test_update_config(self):
        w = widgets.create_widget("label", {"text": "Old"})
        updated = widgets.update_widget(w["id"], {"text": "New"})
        assert updated["config"]["text"] == "New"

    def test_update_position(self):
        w = widgets.create_widget("label", {"text": "X", "position": "top-left"})
        updated = widgets.update_widget(w["id"], {"position": "bottom-right"})
        assert updated["position"] == "bottom-right"

    def test_update_visibility(self):
        w = widgets.create_widget("label", {"text": "X"})
        updated = widgets.update_widget(w["id"], {"visible": False})
        assert updated["visible"] is False

    def test_update_nonexistent(self):
        assert widgets.update_widget("nope", {}) is None


class TestDeleteWidget:
    def test_delete(self):
        w = widgets.create_widget("label", {"text": "X"})
        assert widgets.delete_widget(w["id"]) is True
        assert len(widgets.list_widgets()) == 0

    def test_delete_nonexistent(self):
        assert widgets.delete_widget("nope") is False


class TestListWidgets:
    def test_list_empty(self):
        assert widgets.list_widgets() == []

    def test_list_multiple(self):
        widgets.create_widget("label", {"text": "A"})
        widgets.create_widget("label", {"text": "B"})
        assert len(widgets.list_widgets()) == 2


class TestScoreboardScore:
    def test_increment_score(self):
        w = widgets.create_widget(
            "scoreboard",
            {
                "teams": [
                    {"name": "A", "score": 0},
                    {"name": "B", "score": 0},
                ],
            },
        )
        widgets.update_scoreboard_score(w["id"], 0, 1)
        result = widgets.get_widget(w["id"])
        assert result["config"]["teams"][0]["score"] == 1
        assert result["config"]["teams"][1]["score"] == 0

    def test_decrement_score_floor_zero(self):
        w = widgets.create_widget(
            "scoreboard",
            {"teams": [{"name": "A", "score": 0}]},
        )
        widgets.update_scoreboard_score(w["id"], 0, -1)
        result = widgets.get_widget(w["id"])
        assert result["config"]["teams"][0]["score"] == 0

    def test_score_wrong_widget_type(self):
        w = widgets.create_widget("label", {"text": "X"})
        assert widgets.update_scoreboard_score(w["id"], 0) is None

    def test_score_out_of_range_index(self):
        w = widgets.create_widget(
            "scoreboard",
            {"teams": [{"name": "A", "score": 5}]},
        )
        widgets.update_scoreboard_score(w["id"], 99, 1)
        # Score unchanged
        assert widgets.get_widget(w["id"])["config"]["teams"][0]["score"] == 5


class TestClearAll:
    def test_clear(self):
        widgets.create_widget("label", {"text": "A"})
        widgets.create_widget("label", {"text": "B"})
        widgets.clear_all()
        assert len(widgets.list_widgets()) == 0


class TestValidation:
    def test_scoreboard_title_length(self):
        w = widgets.create_widget(
            "scoreboard",
            {"title": "X" * 200, "teams": []},
        )
        assert len(w["config"]["title"]) == 100

    def test_ticker_speed_clamped(self):
        w = widgets.create_widget("ticker", {"speed": 9999, "messages": []})
        assert w["config"]["speed"] == 300

    def test_ticker_messages_limit(self):
        w = widgets.create_widget(
            "ticker",
            {"messages": [f"msg{i}" for i in range(100)]},
        )
        assert len(w["config"]["messages"]) == 50

    def test_label_text_length(self):
        w = widgets.create_widget("label", {"text": "A" * 1000})
        assert len(w["config"]["text"]) == 500

    def test_font_size_bounds(self):
        w = widgets.create_widget("label", {"text": "X", "fontSize": 999})
        assert w["config"]["fontSize"] == 96

        w2 = widgets.create_widget("label", {"text": "X", "fontSize": 1})
        assert w2["config"]["fontSize"] == 10

    def test_color_injection_rejected(self):
        """CSS injection via bgColor/textColor should be rejected"""
        w = widgets.create_widget(
            "label",
            {
                "text": "X",
                "bgColor": "red; position:fixed; z-index:9999",
                "textColor": "expression(alert(1))",
            },
        )
        # Should fall back to defaults
        assert w["config"]["bgColor"] == "rgba(15,23,42,0.85)"
        assert w["config"]["textColor"] == "#ffffff"

    def test_valid_colors_accepted(self):
        """Valid CSS colors should be accepted"""
        w = widgets.create_widget(
            "label",
            {
                "text": "X",
                "bgColor": "rgba(255,0,0,0.5)",
                "textColor": "#ff0000",
            },
        )
        assert w["config"]["bgColor"] == "rgba(255,0,0,0.5)"
        assert w["config"]["textColor"] == "#ff0000"

    def test_padding_injection_rejected(self):
        """CSS injection via padding should be rejected"""
        w = widgets.create_widget(
            "label",
            {"text": "X", "padding": "8px; background: red"},
        )
        assert w["config"]["padding"] == "8px 16px"  # default

    def test_valid_padding_accepted(self):
        """Valid CSS padding values should be accepted"""
        w = widgets.create_widget(
            "label",
            {"text": "X", "padding": "10px 20px"},
        )
        assert w["config"]["padding"] == "10px 20px"

    def test_scoreboard_team_color_injection(self):
        """CSS injection via team color should be rejected"""
        w = widgets.create_widget(
            "scoreboard",
            {
                "teams": [
                    {"name": "Team1", "score": 0, "color": "url(evil)"},
                ]
            },
        )
        assert w["config"]["teams"][0]["color"] == "#06b6d4"  # default

    def test_transparent_color_accepted(self):
        """transparent keyword should be accepted"""
        w = widgets.create_widget(
            "label",
            {"text": "X", "bgColor": "transparent"},
        )
        assert w["config"]["bgColor"] == "transparent"


# ---------------------------------------------------------------------------
# Route integration tests (require Flask test client)
# ---------------------------------------------------------------------------


def _login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf(client):
    _login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _post(client, url, payload):
    token = _csrf(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


class TestWidgetRoutes:
    def test_list_empty(self, client):
        _login(client)
        res = client.get("/admin/widgets/list")
        assert res.status_code == 200
        assert res.get_json()["widgets"] == []

    def test_create_and_list(self, client):
        res = _post(
            client,
            "/admin/widgets/create",
            {
                "type": "label",
                "config": {"text": "Hello"},
            },
        )
        assert res.status_code == 200
        data = res.get_json()
        assert data["widget"]["type"] == "label"

        _login(client)
        res2 = client.get("/admin/widgets/list")
        assert len(res2.get_json()["widgets"]) == 1

    def test_create_invalid_type(self, client):
        res = _post(
            client,
            "/admin/widgets/create",
            {
                "type": "invalid",
                "config": {},
            },
        )
        assert res.status_code == 400

    def test_update_widget(self, client):
        res = _post(
            client,
            "/admin/widgets/create",
            {
                "type": "label",
                "config": {"text": "Old"},
            },
        )
        wid = res.get_json()["widget"]["id"]

        res2 = _post(
            client,
            "/admin/widgets/update",
            {
                "id": wid,
                "config": {"text": "New"},
            },
        )
        assert res2.status_code == 200
        assert res2.get_json()["widget"]["config"]["text"] == "New"

    def test_delete_widget(self, client):
        res = _post(
            client,
            "/admin/widgets/create",
            {
                "type": "label",
                "config": {"text": "X"},
            },
        )
        wid = res.get_json()["widget"]["id"]

        res2 = _post(client, "/admin/widgets/delete", {"id": wid})
        assert res2.status_code == 200

    def test_scoreboard_score(self, client):
        res = _post(
            client,
            "/admin/widgets/create",
            {
                "type": "scoreboard",
                "config": {
                    "teams": [
                        {"name": "A", "score": 0},
                        {"name": "B", "score": 0},
                    ],
                },
            },
        )
        wid = res.get_json()["widget"]["id"]

        res2 = _post(
            client,
            "/admin/widgets/score",
            {
                "id": wid,
                "team_index": 0,
                "delta": 3,
            },
        )
        assert res2.status_code == 200
        assert res2.get_json()["widget"]["config"]["teams"][0]["score"] == 3

    def test_clear_all(self, client):
        _post(client, "/admin/widgets/create", {"type": "label", "config": {"text": "A"}})
        _post(client, "/admin/widgets/create", {"type": "label", "config": {"text": "B"}})
        res = _post(client, "/admin/widgets/clear", {})
        assert res.status_code == 200

        _login(client)
        res2 = client.get("/admin/widgets/list")
        assert len(res2.get_json()["widgets"]) == 0


class TestPersistence:
    """2026-11-03 持久化 P0：store 原本只在記憶體，Server 重啟即全失。"""

    def test_widgets_survive_store_reload(self, tmp_path):
        """create/update/score 都要落盤；重新指向同一檔案（模擬重啟）後
        狀態必須完整回來——計分板比數尤其不能丟。"""
        path = tmp_path / "widgets.json"
        widgets.reset_for_tests(path=path)

        board = widgets.create_widget(
            "scoreboard",
            {
                "title": "Match",
                "teams": [{"name": "Red", "score": 0, "color": "#ff0000"}],
                "position": "top-left",
            },
        )
        widgets.update_scoreboard_score(board["id"], 0, 2)
        widgets.create_widget(
            "label", {"text": "歡迎參加社課", "position": "bottom-center"}
        )

        # 模擬 Server 重啟：清快取、重新載入同一個檔案
        widgets.reset_for_tests(path=path)
        reloaded = {w["type"]: w for w in widgets.list_widgets()}

        assert set(reloaded) == {"scoreboard", "label"}
        assert reloaded["scoreboard"]["config"]["teams"][0]["score"] == 2
        assert reloaded["label"]["config"]["text"] == "歡迎參加社課"

    def test_delete_and_clear_persist(self, tmp_path):
        path = tmp_path / "widgets.json"
        widgets.reset_for_tests(path=path)

        w = widgets.create_widget("ticker", {"messages": ["a"], "position": "top-left"})
        assert widgets.delete_widget(w["id"]) is True
        widgets.create_widget("label", {"text": "keep"})

        widgets.reset_for_tests(path=path)
        names = [w["type"] for w in widgets.list_widgets()]
        assert names == ["label"]

        widgets.clear_all()
        widgets.reset_for_tests(path=path)
        assert widgets.list_widgets() == []

    def test_corrupt_state_file_falls_back_to_empty(self, tmp_path):
        path = tmp_path / "widgets.json"
        path.write_text("not json at all", encoding="utf-8")
        widgets.reset_for_tests(path=path)
        assert widgets.list_widgets() == []

    def test_invalid_entries_dropped_on_load(self, tmp_path):
        """載入時逐項過 normalize：未知 type／缺欄位的條目剔除，
        config 重新過 per-type 驗證器。"""
        import json

        path = tmp_path / "widgets.json"
        path.write_text(
            json.dumps(
                {
                    "widgets": {
                        "ok": {
                            "id": "ok",
                            "type": "label",
                            "position": "top-left",
                            "visible": True,
                            "created_at": 123.0,
                            "config": {"text": "hello", "fontSize": 999},
                        },
                        "bad_type": {"id": "bad_type", "type": "video", "config": {}},
                        "not_a_dict": "junk",
                    }
                }
            ),
            encoding="utf-8",
        )
        widgets.reset_for_tests(path=path)

        items = {w["id"]: w for w in widgets.list_widgets()}
        assert set(items) == {"ok"}
        # fontSize 999 被驗證器夾回 10–96
        assert items["ok"]["config"]["fontSize"] == 96
