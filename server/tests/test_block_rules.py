"""封鎖規則清單：三個選項（命中方式／動作／期限）、單一驗證、舊 API 照常可用。

判定與 5.8 等價的部分在 test_block_rules_equivalence.py；這裡釘的是合併後新增或
被收斂成一條路的行為。
"""

import io
import json
import re
import tarfile
from pathlib import Path

import pytest

from server.services import backup as backup_svc
from server.services import filter_engine as engine_module
from server.services import session_service
from server.services.blacklist import add_keyword, list_keywords
from server.services.filter_engine import RuleValidationError, filter_engine
from server.services.ws_state import update_ws_client_count

SERVER = Path(__file__).resolve().parent.parent


def _csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _post(client, url, payload):
    return client.post(url, json=payload, headers={"X-CSRF-Token": _csrf(client)})


@pytest.fixture()
def overlay():
    # 沒有顯示層連著的話 /fire 一律 503，走不到比對那一段。
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


# ── 期限 ─────────────────────────────────────────────────────


def test_permanent_is_the_default_and_survives_a_reload():
    rule_id = filter_engine.add_rule({"type": "word", "pattern": "永久字"})
    assert filter_engine.get_rule(rule_id)["lifetime"] == "permanent"
    filter_engine.reload()
    assert filter_engine.match_word("這裡有永久字") == "永久字"


def test_session_rules_end_with_the_session():
    session_service.open_session("測試場")
    filter_engine.add_rule({"type": "word", "pattern": "本場字", "lifetime": "session"})
    keep = filter_engine.add_rule({"type": "word", "pattern": "常駐字"})
    assert filter_engine.match_word("本場字") == "本場字"

    session_service.close_session()

    assert filter_engine.match_word("本場字") == ""
    assert [r["id"] for r in filter_engine.list_rules()] == [keep]


def test_session_lifetime_needs_a_live_session(client):
    """沒有進行中的場次時，「到本場次結束」沒有場次可以結束——不收，而不是悄悄
    留到下一場結束。後台從 /admin/filters/list 的 session_live 知道要不要提供這個選項。"""
    assert client.get("/admin/filters/list").status_code in (302, 401)  # 未登入
    _csrf(client)
    assert client.get("/admin/filters/list").get_json()["session_live"] is False
    res = _post(
        client, "/admin/filters/add", {"type": "word", "pattern": "x", "lifetime": "session"}
    )
    assert res.status_code == 400
    assert res.get_json()["code"] == "no_session"
    rule_id = filter_engine.add_rule({"type": "word", "pattern": "y"})
    with pytest.raises(RuleValidationError) as exc:
        filter_engine.update_rule(rule_id, {"lifetime": "session"})
    assert exc.value.code == "no_session"
    assert filter_engine.list_rules()[0]["lifetime"] == "permanent"

    session_service.open_session("測試場")
    assert client.get("/admin/filters/list").get_json()["session_live"] is True
    filter_engine.update_rule(rule_id, {"lifetime": "session"})
    assert filter_engine.get_rule(rule_id)["lifetime"] == "session"


def test_clear_session_route_is_the_manual_version(client):
    session_service.open_session("測試場")
    filter_engine.add_rule({"type": "regex", "pattern": "a+b", "lifetime": "session"})
    filter_engine.add_rule({"type": "word", "pattern": "常駐字"})
    res = _post(client, "/admin/filters/clear-session", {})
    assert res.status_code == 200
    assert res.get_json() == {"removed": 1}
    assert [r["pattern"] for r in filter_engine.list_rules()] == ["常駐字"]


def test_timed_rules_expire_and_leave_the_list(monkeypatch):
    now = [1_000_000.0]
    monkeypatch.setattr(engine_module.time, "time", lambda: now[0])
    rule_id = filter_engine.add_rule(
        {"type": "word", "pattern": "限時字", "lifetime": "timed", "duration_sec": 3600}
    )
    assert filter_engine.get_rule(rule_id)["expires_at"] == now[0] + 3600
    assert filter_engine.match_word("限時字") == "限時字"

    now[0] += 3601
    assert filter_engine.match_word("限時字") == ""
    assert filter_engine.list_rules() == []
    # 也從檔案裡消失，重啟不會復活
    filter_engine.reload()
    assert filter_engine.list_rules() == []


def test_timed_rule_keeps_its_expiry_when_edited_without_a_new_duration(monkeypatch):
    monkeypatch.setattr(engine_module.time, "time", lambda: 5_000.0)
    rule_id = filter_engine.add_rule(
        {
            "type": "keyword",
            "pattern": "x",
            "action": "review",
            "lifetime": "timed",
            "duration_sec": 600,
        }
    )
    filter_engine.update_rule(rule_id, {"pattern": "y"})
    assert filter_engine.get_rule(rule_id)["expires_at"] == 5_600.0
    filter_engine.update_rule(rule_id, {"lifetime": "permanent"})
    assert "expires_at" not in filter_engine.get_rule(rule_id)


def test_timed_needs_a_duration():
    with pytest.raises(RuleValidationError):
        filter_engine.add_rule({"type": "word", "pattern": "x", "lifetime": "timed"})


# ── 命中方式與動作 ──────────────────────────────────────────


@pytest.mark.parametrize(
    "rule, text, fp, expected",
    [
        ({"type": "keyword", "pattern": "Hi", "action": "allow"}, "oh hi", None, "allow"),
        ({"type": "keyword", "pattern": "Hi", "action": "review"}, "oh HI", None, "review"),
        ({"type": "regex", "pattern": r"\d{3}", "action": "block"}, "a123", None, "block"),
        ({"type": "regex", "pattern": r"\d{3}", "action": "review"}, "a123", None, "review"),
        ({"type": "replace", "pattern": "bad", "action": "replace"}, "so BAD", None, "replace"),
        ({"type": "fingerprint", "pattern": "fp1", "action": "block"}, "x", "fp1", "block"),
    ],
)
def test_each_match_mode_and_action(rule, text, fp, expected):
    filter_engine.add_rule(rule)
    assert filter_engine.check(text, fp).action == expected


def test_a_word_can_only_block():
    with pytest.raises(RuleValidationError):
        filter_engine.add_rule({"type": "word", "pattern": "x", "action": "review"})


def test_duplicate_words_are_refused_by_the_list_but_idempotent_through_the_old_api(client):
    assert add_keyword("重複") is True
    assert add_keyword("重複") is False
    res = _post(client, "/admin/filters/add", {"type": "word", "pattern": "重複"})
    assert res.status_code == 400
    assert res.get_json()["code"] == "duplicate"
    assert list_keywords() == ["重複"]


def test_rate_limit_needs_no_pattern():
    rule_id = filter_engine.add_rule({"type": "rate_limit", "max_count": 2, "window_sec": 60})
    assert filter_engine.get_rule(rule_id)["pattern"] == ""
    with pytest.raises(RuleValidationError):
        filter_engine.add_rule({"type": "regex", "pattern": ""})


# ── 新增與更新走同一個驗證 ──────────────────────────────────


def test_editing_only_the_pattern_runs_the_same_regex_safety_check(client):
    rule_id = filter_engine.add_rule({"type": "regex", "pattern": "ok", "action": "block"})
    unsafe = "(a+)+b+"
    # 新增會擋的，更新也要擋（以前只改 pattern 時 type 不在資料裡，檢查整段被跳過）
    added = _post(client, "/admin/filters/add", {"type": "regex", "pattern": unsafe})
    assert added.status_code == 400
    res = _post(
        client, "/admin/filters/update", {"rule_id": rule_id, "updates": {"pattern": unsafe}}
    )
    assert res.status_code == 400
    assert res.get_json()["code"] == "unsafe_regex"
    assert filter_engine.get_rule(rule_id)["pattern"] == "ok"

    res = _post(client, "/admin/filters/update", {"rule_id": rule_id, "updates": {"pattern": "[x"}})
    assert res.status_code == 400
    assert res.get_json()["code"] == "invalid_regex"


def test_update_validates_the_merged_rule_not_just_the_changed_fields():
    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "abc", "action": "review"})
    with pytest.raises(RuleValidationError):
        filter_engine.update_rule(rule_id, {"type": "word"})  # word＋review 不成立
    assert filter_engine.get_rule(rule_id)["type"] == "keyword"


def test_regex_runs_through_one_compile_and_one_match_function():
    """所有編譯與比對都經過 rule_regex：/fire 走 run_pattern；新增、改 pattern、規則測試
    拿使用者寫的正規式去跑時，一律走 vet_pattern（有硬性逾時的子行程）。"""
    engine_src = (SERVER / "services" / "filter_engine.py").read_text(encoding="utf-8")
    validation_src = (SERVER / "services" / "validation.py").read_text(encoding="utf-8")
    safe = validation_src[validation_src.index("def _safe_compile_regex") :]
    safe = safe[: safe.index("\nclass ")]
    for src in (engine_src, safe):
        assert not re.search(r"\bre\.compile\(|_re\.compile\(", src)
        assert not re.search(r"compiled\.(search|match|subn|sub|fullmatch)\(", src)
    assert "rule_regex.compile_pattern(" in engine_src and "rule_regex.run_pattern(" in engine_src
    # 驗證只在本行程編譯，執行交給子行程
    assert "rule_regex.compile_pattern(" in safe and "rule_regex.vet_pattern(" in safe
    assert "rule_regex.run_pattern(" not in safe
    test_rule = engine_src[engine_src.index("def test_rule") :]
    test_rule = test_rule[: test_rule.index("\n    def ")]
    assert "rule_regex.vet_pattern(" in test_rule and "run_pattern" not in test_rule


# ── 舊的 API 路徑仍可用，而且加進同一份清單 ────────────────


def test_blacklist_api_writes_into_the_one_list(client, overlay):
    assert _post(client, "/admin/blacklist/add", {"keyword": "舊入口"}).status_code == 200
    rules = client.get("/admin/filters/list").get_json()["rules"]
    assert [(r["type"], r["pattern"], r["action"]) for r in rules] == [("word", "舊入口", "block")]
    assert client.get("/admin/blacklist/get").get_json() == ["舊入口"]

    blocked = client.post("/check_blacklist", json={"text": "有舊入口"}).get_json()
    assert blocked["blocked"] is True
    res = client.post("/fire", json={"text": "有舊入口的訊息"})
    assert res.status_code == 400
    assert res.get_json()["error"] == "Content contains blocked keywords"

    assert _post(client, "/admin/blacklist/remove", {"keyword": "舊入口"}).status_code == 200
    assert client.get("/admin/filters/list").get_json()["rules"] == []


def test_live_block_keyword_lands_in_the_list(client):
    res = _post(client, "/admin/live/block", {"type": "keyword", "value": "從訊息流封鎖"})
    assert res.status_code == 200
    assert list_keywords() == ["從訊息流封鎖"]
    words = [r for r in filter_engine.list_rules() if r["type"] == "word"]
    assert words[0]["lifetime"] == "permanent"


# ── keyword＋block 轉成封鎖字（刻意的行為改變，2026-11-14 擁有者拍板）──────
#
# 5.8 的「關鍵字＋封鎖」過濾規則在第 1 段比對；轉成封鎖字之後改在第 2 段。這裡逐項
# 釘住轉換後與 5.8 不同的地方，每條註明 5.8 的結果。其餘規則與 5.8 相同
# （test_block_rules_equivalence.py）。


def _load_legacy(rules):
    """寫一份 5.8 格式的規則檔，讓引擎像升級後第一次啟動那樣讀進來。"""
    Path(filter_engine.path).write_text(json.dumps(rules), encoding="utf-8")
    filter_engine.reload()


def _kb(pattern="legacy", rule_id="kb1", priority=5):
    return {
        "id": rule_id,
        "type": "keyword",
        "pattern": pattern,
        "action": "block",
        "priority": priority,
    }


def test_converted_rule_new_and_edited_keyword_block_are_all_words():
    _load_legacy([_kb()])
    assert filter_engine.get_rule("kb1")["type"] == "word"
    new_id = filter_engine.add_rule({"type": "keyword", "pattern": "fresh", "action": "block"})
    assert filter_engine.get_rule(new_id)["type"] == "word"
    review_id = filter_engine.add_rule({"type": "keyword", "pattern": "maybe", "action": "review"})
    assert filter_engine.get_rule(review_id)["type"] == "keyword"  # 其他動作照舊
    filter_engine.update_rule(review_id, {"action": "block"})
    assert filter_engine.get_rule(review_id)["type"] == "word"


def test_difference_1_viewer_message(client, overlay):
    _load_legacy([_kb()])
    res = client.post("/fire", json={"text": "legacy text"})
    assert res.status_code == 400
    # 5.8: "Keyword match: 'legacy'"（訊息裡帶出規則的樣式）
    assert res.get_json()["error"] == "Content contains blocked keywords"


def test_difference_2_blocked_by_is_the_word(client, overlay):
    from server.services import history as history_service

    _load_legacy([_kb()])
    _csrf(client)
    history_service.danmu_history.clear()
    client.post("/fire", json={"text": "legacy text", "color": "ffffff", "fingerprint": "fp_x"})
    records = history_service.danmu_history.get_recent(hours=1, limit=10)
    # 5.8: blocked_by 是規則 id（"kb1"）
    assert [r["blockedBy"] for r in records if r["status"] == "blocked"] == ["legacy"]


def test_difference_3_allow_rules_no_longer_let_it_through(client, overlay):
    allow = {"id": "al1", "type": "keyword", "pattern": "vip", "action": "allow", "priority": 1}
    _load_legacy([allow, _kb()])
    # 5.8: 200（放行規則 priority 較小，先命中，訊息送出）
    assert client.post("/fire", json={"text": "vip legacy"}).status_code == 400


def test_difference_4_review_and_replace_rules_now_run_first(client, overlay):
    review = {"id": "rv1", "type": "regex", "pattern": "^ask:", "action": "review", "priority": 10}
    replace = {
        "id": "rp1",
        "type": "replace",
        "pattern": "leg+acy",
        "action": "replace",
        "replacement": "***",
        "priority": 10,
    }
    _load_legacy([review, _kb("ask", "kb1", 1)])
    # 5.8: 400（keyword＋block priority 1 先命中）
    assert client.post("/fire", json={"text": "ask: something"}).status_code == 202

    _load_legacy([replace, _kb("legacy", "kb2", 1)])
    # 5.8: 400；現在替換先跑，「legacy」已被換成 *** ，封鎖字比對不到
    assert client.post("/fire", json={"text": "legacy text"}).status_code == 200


def test_difference_5_hits_are_not_in_the_match_log(client, overlay):
    from server.services import filter_events

    _load_legacy([_kb()])
    filter_events.clear()
    client.post("/fire", json={"text": "legacy text"})
    # 5.8: 命中紀錄有一筆 BLOCK，24 小時 BLOCK 計數（通知用）+1
    assert filter_events.recent() == []
    assert filter_events.counts_24h()["BLOCK"] == 0


def test_difference_6_check_blacklist_and_webhooks_see_it(client):
    from server.services.blacklist import contains_keyword

    _load_legacy([_kb()])
    # 5.8: /check_blacklist 只看黑名單 → blocked: False；
    # 外部 webhook 進來的訊息被擋時的錯誤是 "Blocked by filter rule"，現在走
    # contains_keyword → "Blocked by blacklist"
    assert client.post("/check_blacklist", json={"text": "legacy"}).get_json()["blocked"] is True
    assert contains_keyword("legacy") is True


def test_difference_7_rate_limit_counts_messages_the_word_blocks(client, overlay):
    rate = {
        "id": "rl1",
        "type": "rate_limit",
        "pattern": "",
        "action": "block",
        "priority": 50,
        "max_count": 1,
        "window_sec": 60,
    }
    _load_legacy([_kb("legacy", "kb1", 0), rate])
    assert client.post("/fire", json={"text": "legacy", "fingerprint": "fp_r"}).status_code == 400
    # 5.8: 200（第一則在 keyword＋block 就結束，沒走到頻率規則，不算一則）
    assert client.post("/fire", json={"text": "ok", "fingerprint": "fp_r"}).status_code == 400


# ── 備份還原 ────────────────────────────────────────────────


def test_restoring_an_old_backup_brings_the_rules_back_immediately(tmp_path, monkeypatch):
    runtime = tmp_path / "runtime"
    runtime.mkdir()
    monkeypatch.setattr(backup_svc, "_INCLUDE_DIRS", [("runtime", runtime, "runtime", "*.json")])
    monkeypatch.setattr(filter_engine, "_path", str(runtime / "filter_rules.json"))
    filter_engine.reload()

    old = json.dumps(
        [{"id": "r1", "type": "keyword", "pattern": "舊備份", "action": "block", "priority": 0}]
    ).encode()
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        manifest = json.dumps({"version": "1", "files": []}).encode()
        for name, data in (("manifest.json", manifest), ("runtime/filter_rules.json", old)):
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))

    result = backup_svc.unpack(buf.getvalue(), dry_run=False)
    assert result["ok"] is True
    assert filter_engine.match_word("有舊備份") == "舊備份"  # keyword＋block 轉成封鎖字
    assert filter_engine.list_rules()[0]["lifetime"] == "permanent"
