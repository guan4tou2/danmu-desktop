"""POST /admin/overlay/recall — 只撤下某一則彈幕。

2026-10-29 新增。在這之前，處理一句不該出現在大螢幕上的話只有兩條路：
`/admin/overlay/clear`（整屏清空）或 `/admin/live/block`（永久封鎖發話者）。
兩者都是拿大砲打蚊子。recall 讓「這一則」變成一個可以單獨處理的對象。

契約（前端 overlay.js 與 Electron overlay-ws.js 都照這個實作）：
  · 廣播 {"type": "recall", "message_id": "<hex>"}
  · 客戶端比對節點上的 data-message-id，找到就移除；找不到是 no-op
  · 因此重送安全，訊息已自然飛出畫面也回 200
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


def test_recall_broadcasts_single_message(client):
    token = _login(client)
    ws_queue.dequeue_all()

    resp = client.post(
        "/admin/overlay/recall",
        json={"message_id": "abc123def456"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = json.loads(resp.data)
    assert body["status"] == "ok"
    assert body["message_id"] == "abc123def456"

    queued = ws_queue.dequeue_all()
    recall = [m for m in queued if m.get("type") == "recall"]
    assert recall, f"佇列裡沒有 recall 訊息：{queued}"
    assert recall[0]["message_id"] == "abc123def456"


def test_recall_requires_message_id(client):
    token = _login(client)
    resp = client.post("/admin/overlay/recall", json={}, headers={"X-CSRF-Token": token})
    assert resp.status_code == 400
    assert json.loads(resp.data)["error"] == "message_id_required"


def test_recall_rejects_blank_message_id(client):
    token = _login(client)
    resp = client.post(
        "/admin/overlay/recall",
        json={"message_id": "   "},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_recall_requires_login(client):
    resp = client.post("/admin/overlay/recall", json={"message_id": "x"})
    assert resp.status_code in (401, 403)


def test_recall_requires_csrf(client):
    _login(client)
    resp = client.post("/admin/overlay/recall", json={"message_id": "x"})
    assert resp.status_code == 403


def test_recall_is_idempotent(client):
    """同一則撤兩次不該出錯 —— 第二次客戶端找不到節點，no-op。"""
    token = _login(client)
    for _ in range(2):
        resp = client.post(
            "/admin/overlay/recall",
            json={"message_id": "same-id-twice"},
            headers={"X-CSRF-Token": token},
        )
        assert resp.status_code == 200


def test_recall_truncates_overlong_id(client):
    """超過 64 字元要截斷，不能原樣進廣播（避免被當成放大器）。"""
    token = _login(client)
    ws_queue.dequeue_all()
    long_id = "a" * 200
    resp = client.post(
        "/admin/overlay/recall",
        json={"message_id": long_id},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    assert len(json.loads(resp.data)["message_id"]) == 64
