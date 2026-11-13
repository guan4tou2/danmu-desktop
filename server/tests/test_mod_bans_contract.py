"""前端 AdminModeration.banFingerprint ↔ 後端限時封禁端點的契約測試。

2026-10-29 審查抓到：共用層打 `/admin/modbans`（不存在，404），而 Jest 只比對
原始碼字串，所以一路綠燈。這裡改成：從前端原始碼**取出真正會被呼叫的路徑**，
用 Flask test client 實打，確認它存在且封禁真的生效。
"""

import json
import re
from pathlib import Path

ACTIONS_JS = (
    Path(__file__).resolve().parent.parent / "static" / "js" / "admin-moderation-actions.js"
)


def _login(client):
    resp = client.post("/login", data={"password": "test"})
    assert resp.status_code in (200, 302)
    admin = client.get("/admin/")
    m = re.search(r'name="csrf-token"[^>]*content="([^"]+)"', admin.data.decode(), re.S)
    assert m and m.group(1), "拿不到 CSRF token"
    return m.group(1)


def _ban_fingerprint_url():
    src = ACTIONS_JS.read_text(encoding="utf-8")
    body = src.split("async function banFingerprint", 1)[1]
    m = re.search(r'csrfFetch\("([^"]+)"', body)
    assert m, "banFingerprint 找不到 csrfFetch 路徑"
    return m.group(1)


def test_frontend_timed_ban_path_exists_and_takes_effect(client):
    token = _login(client)
    url = _ban_fingerprint_url()

    # 與 banFingerprint() 送出的 body 同形
    resp = client.post(
        url,
        json={
            "target_kind": "fingerprint",
            "target": "fp-contract-test",
            "duration_s": 3600,
            "reason": "contract",
            "kind": "ban",
        },
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 201, f"{url} -> {resp.status_code}"

    listed = client.get("/admin/mod/bans/list")
    assert listed.status_code == 200
    targets = [b.get("target") for b in json.loads(listed.data)["bans"]]
    assert "fp-contract-test" in targets
