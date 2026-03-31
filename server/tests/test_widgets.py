"""Tests for overlay widget service."""

import pytest

from server.services import widgets


@pytest.fixture(autouse=True)
def _reset_widgets():
    """Clear widgets between tests."""
    widgets._widgets.clear()
    yield
    widgets._widgets.clear()


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
        res = _post(client, "/admin/widgets/create", {
            "type": "label",
            "config": {"text": "Hello"},
        })
        assert res.status_code == 200
        data = res.get_json()
        assert data["widget"]["type"] == "label"

        _login(client)
        res2 = client.get("/admin/widgets/list")
        assert len(res2.get_json()["widgets"]) == 1

    def test_create_invalid_type(self, client):
        res = _post(client, "/admin/widgets/create", {
            "type": "invalid",
            "config": {},
        })
        assert res.status_code == 400

    def test_update_widget(self, client):
        res = _post(client, "/admin/widgets/create", {
            "type": "label",
            "config": {"text": "Old"},
        })
        wid = res.get_json()["widget"]["id"]

        res2 = _post(client, "/admin/widgets/update", {
            "id": wid,
            "config": {"text": "New"},
        })
        assert res2.status_code == 200
        assert res2.get_json()["widget"]["config"]["text"] == "New"

    def test_delete_widget(self, client):
        res = _post(client, "/admin/widgets/create", {
            "type": "label",
            "config": {"text": "X"},
        })
        wid = res.get_json()["widget"]["id"]

        res2 = _post(client, "/admin/widgets/delete", {"id": wid})
        assert res2.status_code == 200

    def test_scoreboard_score(self, client):
        res = _post(client, "/admin/widgets/create", {
            "type": "scoreboard",
            "config": {
                "teams": [
                    {"name": "A", "score": 0},
                    {"name": "B", "score": 0},
                ],
            },
        })
        wid = res.get_json()["widget"]["id"]

        res2 = _post(client, "/admin/widgets/score", {
            "id": wid,
            "team_index": 0,
            "delta": 3,
        })
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
