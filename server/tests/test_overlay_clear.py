"""POST /admin/overlay/clear — 清空 overlay 上目前顯示的彈幕。

這個端點在 routes/admin/overlay.py 早就實作完整（廣播 {"type":"clear"}、寫
audit log、發 on_overlay_clear webhook），overlay.js 與 Electron 的
child-ws-script.js 也都認得那個訊息 —— 但它一直沒有任何測試，而 admin UI 的
錯誤分支還寫著「後端尚未實作此端點」。這裡把它釘住。
"""

import json

from server.services import ws_queue


def _login(client):
    resp = client.post("/login", data={"password": "test"})
    assert resp.status_code in (200, 302)
    admin = client.get("/admin/")
    import re

    m = re.search(r'name="csrf-token"[^>]*content="([^"]+)"', admin.data.decode(), re.S)
    assert m and m.group(1), "拿不到 CSRF token"
    return m.group(1)


def test_overlay_clear_broadcasts_clear_message(client):
    """成功時應該把 {"type": "clear"} 推進 ws_queue。"""
    token = _login(client)
    ws_queue.dequeue_all()  # 清掉登入過程可能產生的通知

    resp = client.post("/admin/overlay/clear", headers={"X-CSRF-Token": token})
    assert resp.status_code == 200
    assert json.loads(resp.data)["status"] == "ok"

    queued = ws_queue.dequeue_all()
    assert any(m.get("type") == "clear" for m in queued), f"佇列裡沒有 clear 訊息：{queued}"


def test_overlay_clear_requires_login(client):
    resp = client.post("/admin/overlay/clear")
    assert resp.status_code in (401, 403)


def test_overlay_clear_requires_csrf(client):
    _login(client)
    resp = client.post("/admin/overlay/clear")  # 不帶 token
    assert resp.status_code == 403


def test_overlay_clear_is_idempotent(client):
    """連續清兩次不該出錯 —— overlay 端對空畫面是 no-op。"""
    token = _login(client)
    for _ in range(2):
        resp = client.post("/admin/overlay/clear", headers={"X-CSRF-Token": token})
        assert resp.status_code == 200
