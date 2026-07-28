"""時限封禁必須真的擋得住 /fire。

在此之前 moderation_bans 是「有 UI、有 API、有資料模型，但沒有效果」：
`/admin/modbans` 收得下 duration_s，`is_banned()` 也算得出到期，但 /fire 從來
沒有呼叫過它 —— 封了照樣送得出彈幕。而且狀態掛在 audit_log 的 500 筆 ring 上，
封禁會被後續事件擠掉而靜靜失效。
"""

import time

import pytest

from server.services import moderation_bans
from server.services.ws_state import update_ws_client_count


@pytest.fixture(autouse=True)
def _overlay_online():
    """沒有 overlay 連線時 /fire 一律 503，看不出封禁的效果。"""
    update_ws_client_count(1)
    yield
    update_ws_client_count(0)


def _fire(client, text="hello", fp="fp_test_sender"):
    return client.post("/fire", json={"text": text, "fingerprint": fp})


def test_unbanned_sender_gets_through(client):
    assert _fire(client).status_code == 200


def test_permanent_ban_blocks_fire(client):
    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=0, reason="spam")
    resp = _fire(client)
    assert resp.status_code == 403, "封禁後仍然送得出彈幕"


def test_timed_ban_blocks_while_active(client):
    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=3600, reason="cooldown")
    assert _fire(client).status_code == 403


def test_timed_ban_expiry_is_evaluated_on_read():
    """到期判定本身 —— 用 now 參數表達時間推移，不去動全域時鐘。

    早期版本是 monkeypatch time.time 讓時間跳 120 秒。那會讓 scheduler 與
    rate limiter 一起看到跳躍（它們讀同一個時鐘），代價遠超這條測試的範圍。
    """
    meta = moderation_bans.add_ban("fingerprint", "fp_expiry_probe", duration_s=60)
    expires_at = meta["expires_at"]
    assert moderation_bans.is_banned("fingerprint", "fp_expiry_probe", now=expires_at - 1) is True
    assert moderation_bans.is_banned("fingerprint", "fp_expiry_probe", now=expires_at + 1) is False


def test_timed_ban_stops_blocking_after_expiry(client):
    """端對端：短時限封禁到期後 /fire 應該重新放行。

    用真的等待而不是假時鐘 —— 1 秒的封禁，等它自然過期。
    """
    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=1, reason="cooldown")
    assert _fire(client).status_code == 403

    time.sleep(1.2)
    assert _fire(client).status_code == 200, "封禁到期後仍然被擋"


def test_unban_restores_access(client):
    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=0)
    assert _fire(client).status_code == 403
    moderation_bans.remove_ban("fingerprint", "fp_test_sender")
    assert _fire(client).status_code == 200


def test_ban_survives_audit_ring_pressure(client):
    """封禁不該因為之後發生了很多其他事件就失效。

    舊實作把 audit_log 的 500 筆 ring 當成唯一來源：發一個封禁、再寫 520 筆
    其他事件，is_banned() 就翻回 False。封禁的有效期應該取決於管理員設的時長，
    而不是後來系統記了多少事。
    """
    from server.services import audit_log

    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=0, reason="spam")
    for i in range(520):
        audit_log.append("auth", "login", actor="admin", meta={"i": i})

    assert moderation_bans.is_banned("fingerprint", "fp_test_sender") is True
    assert _fire(client).status_code == 403, "封禁被無關的 audit 事件洗掉了"


def test_ban_state_survives_a_restart(client):
    """狀態要落地 —— 重啟後封禁仍然有效。"""
    moderation_bans.add_ban("fingerprint", "fp_test_sender", duration_s=0)
    moderation_bans.reset_for_tests()  # 模擬行程重啟後重新載入
    assert moderation_bans.is_banned("fingerprint", "fp_test_sender") is True


def test_ip_ban_blocks_fire(client):
    moderation_bans.add_ban("ip", "127.0.0.1", duration_s=0, reason="abuse")
    assert _fire(client).status_code == 403
