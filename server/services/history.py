"""彈幕記錄服務

記錄同時存在兩個地方：

  * 記憶體 deque —— 所有讀取路徑（列表 / 統計 / 匯出）都走這裡，行為與
    落地前完全相同。
  * ``runtime/danmu_history.jsonl`` —— append-only，讓記錄能撐過重啟。
    寫入策略沿用 audit_log.py：一行一筆 JSON、超過上限就 rotate 成 ``.1``、
    寫入失敗只降級成記憶體模式而不讓 /fire 失敗。

隱私：記憶體裡的記錄含 ``clientIp``，那是 admin 介面在用的。落地時預設**不寫
入 IP**（``DANMU_HISTORY_PERSIST_IP=true`` 可改變），因為把來訪者 IP 永久寫進
磁碟跟留在一個會被重啟清掉的 ring buffer 裡，是兩件不同性質的事。fingerprint
留著 —— 它本來就是雜湊值，而且黑名單與觀眾追蹤都靠它。
"""

import json
import logging
import threading
import time
from collections import deque
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Dict, List, Optional

from ..config import Config

logger = logging.getLogger(__name__)

_RUNTIME = Path(__file__).parent.parent / "runtime"
HISTORY_FILE = _RUNTIME / "danmu_history.jsonl"
HISTORY_BACKUP_FILE = _RUNTIME / "danmu_history.jsonl.1"


class DanmuHistory:
    """彈幕記錄管理器"""

    def __init__(
        self,
        max_records: int = 10000,
        auto_cleanup_hours: int = 24,
        persist: bool = True,
        persist_ip: bool = False,
        max_file_bytes: int = 8 * 1024 * 1024,
    ):
        """
        初始化彈幕記錄管理器

        Args:
            max_records: 最大記錄數（防止內存溢出）
            auto_cleanup_hours: 自動清理超過此小時數的記錄
            persist: 是否把記錄 append 到 danmu_history.jsonl
            persist_ip: 落地時是否包含 clientIp（預設不含，見模組 docstring）
            max_file_bytes: 檔案超過此大小就 rotate 成 .jsonl.1
        """
        self._records: deque = deque(maxlen=max_records)
        self._lock = threading.Lock()
        # 磁碟操作獨立一把鎖。落地刻意放在 self._lock 之外（不讓 I/O 擋住其他
        # 送出中的彈幕），但 append / rotate / clear 動的是同一組檔案：沒有這把
        # 鎖的話，clear() 可能夾在「記憶體已寫入」與「落地尚未完成」之間執行，
        # 於是剛被清掉的記錄又被寫回檔案 —— UI 承諾的「無法復原」就破了。
        self._disk_lock = threading.Lock()
        self.auto_cleanup_hours = auto_cleanup_hours
        self.persist = persist
        self.persist_ip = persist_ip
        self.max_file_bytes = max_file_bytes
        self._write_failure_logged = False
        self.last_cleanup = time.time()
        if self.persist:
            self._load_from_disk()

    # ── 落地 ────────────────────────────────────────────────────────────

    def _load_from_disk(self) -> None:
        """啟動時把檔案內容讀回 deque。

        deque 的 maxlen 會自動只保留最後 max_records 筆，所以即使檔案比記憶體
        上限大也不會爆。壞掉的行直接跳過 —— 一筆讀不出來不該讓整個服務起不來。
        """
        if not HISTORY_FILE.exists():
            return
        loaded = skipped = 0
        try:
            with HISTORY_FILE.open("r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        record = json.loads(line)
                    except (json.JSONDecodeError, ValueError):
                        skipped += 1
                        continue
                    if not self._is_readable_record(record):
                        skipped += 1
                        continue
                    self._records.append(record)
                    loaded += 1
        except OSError as exc:
            logger.warning("danmu history: cannot read %s: %s", HISTORY_FILE, exc)
            return
        logger.info(
            "danmu history: restored %d records from disk%s",
            loaded,
            f" ({skipped} unreadable lines skipped)" if skipped else "",
        )

    @staticmethod
    def _is_readable_record(record) -> bool:
        """每一條讀取路徑都無條件用 record["timestamp"]，所以載入時就要擋掉不符
        這個形狀的東西。

        語法合法但結構不對的行（手動編輯過、寫到一半被砍掉、未來 schema 變動）
        以前會被原封不動放進 deque，接著讓 get_records() 的排序、get_stats()
        和 _maybe_cleanup() 全部拋例外 —— 一行壞資料就能讓整個歷史功能癱瘓到
        下次重啟。
        """
        if not isinstance(record, dict):
            return False
        ts = record.get("timestamp")
        if not isinstance(ts, str) or not ts:
            return False
        try:
            datetime.fromisoformat(ts.replace("Z", "+00:00"))
        except (TypeError, ValueError):
            return False
        return True

    def _try_rotate(self) -> None:
        """超過上限就轉存成 .1（只留一份備份，跟 audit.log 一致）。"""
        try:
            if HISTORY_FILE.stat().st_size < self.max_file_bytes:
                return
            if HISTORY_BACKUP_FILE.exists():
                HISTORY_BACKUP_FILE.unlink()
            HISTORY_FILE.rename(HISTORY_BACKUP_FILE)
        except OSError as exc:
            logger.warning("danmu history: rotate failed: %s", exc)

    def _append_to_disk(self, record: Dict) -> None:
        """Best-effort append。寫不進去就降級成純記憶體，不讓 /fire 失敗。"""
        if not self.persist:
            return
        payload = (
            record if self.persist_ip else {k: v for k, v in record.items() if k != "clientIp"}
        )
        try:
            with self._disk_lock:
                HISTORY_FILE.parent.mkdir(parents=True, exist_ok=True)
                if HISTORY_FILE.exists():
                    self._try_rotate()
                with HISTORY_FILE.open("a", encoding="utf-8") as f:
                    f.write(json.dumps(payload, ensure_ascii=False) + "\n")
        except OSError as exc:
            if not self._write_failure_logged:
                logger.warning(
                    "danmu history: cannot persist to %s (%s) — "
                    "continuing in memory only; records will not survive a restart",
                    HISTORY_FILE,
                    exc,
                )
                self._write_failure_logged = True

    def add(self, danmu_data: Dict):
        """
        添加彈幕記錄

        Args:
            danmu_data: 彈幕數據（包含 text, color, size, speed 等）
        """
        current_time = datetime.now(timezone.utc)
        record = {
            "timestamp": current_time.isoformat(),
            "text": danmu_data.get("text", ""),
            "color": danmu_data.get("color", ""),
            "size": danmu_data.get("size", ""),
            "speed": danmu_data.get("speed", ""),
            "opacity": danmu_data.get("opacity", ""),
            "isImage": danmu_data.get("isImage", False),
            "fontInfo": danmu_data.get("fontInfo"),
            "clientIp": danmu_data.get("clientIp"),
            "fingerprint": danmu_data.get("fingerprint"),
        }

        with self._lock:
            self._records.append(record)
        # 落地在鎖外做：磁碟 I/O 不該擋住其他送出中的彈幕。
        self._append_to_disk(record)
        # 定期清理舊記錄（在鎖外呼叫，避免 deadlock）
        self._maybe_cleanup()

    def get_records(
        self,
        start_time: Optional[datetime] = None,
        end_time: Optional[datetime] = None,
        limit: int = 1000,
    ) -> List[Dict]:
        """
        獲取彈幕記錄

        Args:
            start_time: 開始時間（可選）
            end_time: 結束時間（可選）
            limit: 最大返回記錄數

        Returns:
            彈幕記錄列表
        """
        with self._lock:
            records = list(self._records)

        # 時間過濾
        if start_time or end_time:
            if start_time and start_time.tzinfo is None:
                start_time = start_time.replace(tzinfo=timezone.utc)
            if end_time and end_time.tzinfo is None:
                end_time = end_time.replace(tzinfo=timezone.utc)
            filtered = []
            for record in records:
                timestamp_str = record["timestamp"]
                if timestamp_str.endswith("Z"):
                    timestamp_str = timestamp_str.replace("Z", "+00:00")
                record_time = datetime.fromisoformat(timestamp_str)
                if record_time.tzinfo is None:
                    record_time = record_time.replace(tzinfo=timezone.utc)
                if start_time and record_time < start_time:
                    continue
                if end_time and record_time > end_time:
                    continue
                filtered.append(record)
            records = filtered

        # 按時間倒序排列（最新的在前）
        records.sort(key=lambda x: x["timestamp"], reverse=True)

        # 限制數量
        return records[:limit]

    def get_recent(self, hours: int = 24, limit: int = 1000) -> List[Dict]:
        """
        獲取最近 N 小時的記錄

        Args:
            hours: 小時數
            limit: 最大返回記錄數

        Returns:
            彈幕記錄列表
        """
        end_time = datetime.now(timezone.utc)
        start_time = end_time - timedelta(hours=hours)
        return self.get_records(start_time=start_time, end_time=end_time, limit=limit)

    def get_stats(self) -> Dict:
        """
        獲取統計資訊

        Returns:
            統計資訊字典
        """
        with self._lock:
            total = len(self._records)
            if total == 0:
                return {
                    "total": 0,
                    "oldest": None,
                    "newest": None,
                    "last_24h": 0,
                }

            oldest = self._records[0]["timestamp"] if self._records else None
            newest = self._records[-1]["timestamp"] if self._records else None

            # 在同一個鎖內計算 24h 記錄數，避免 TOCTOU
            cutoff = datetime.now(timezone.utc) - timedelta(hours=24)
            last_24h = 0
            for record in self._records:
                ts_str = record["timestamp"]
                if ts_str.endswith("Z"):
                    ts_str = ts_str.replace("Z", "+00:00")
                record_time = datetime.fromisoformat(ts_str)
                if record_time.tzinfo is None:
                    record_time = record_time.replace(tzinfo=timezone.utc)
                if record_time >= cutoff:
                    last_24h += 1

        return {
            "total": total,
            "oldest": oldest,
            "newest": newest,
            "last_24h": last_24h,
        }

    def clear(self):
        """清空所有記錄（記憶體與磁碟）

        Admin UI 的文案是「清除所有彈幕歷史，此動作無法復原」，所以落地檔案也
        要一起清掉 —— 只清記憶體的話，重啟後記錄又會冒回來，跟使用者被告知的
        結果不符。
        """
        with self._lock:
            self._records.clear()
        if not self.persist:
            return
        with self._disk_lock:
            for path in (HISTORY_FILE, HISTORY_BACKUP_FILE):
                try:
                    path.unlink(missing_ok=True)
                except OSError as exc:
                    logger.warning("danmu history: cannot remove %s: %s", path, exc)

    def _maybe_cleanup(self):
        """定期清理舊記錄（時間檢查在鎖內防止 TOCTOU race）"""
        now = time.time()

        with self._lock:
            # 每小時清理一次 — 在鎖內檢查避免多執行緒同時觸發
            if now - self.last_cleanup < 3600:
                return

            self.last_cleanup = now
            cutoff_time = datetime.now(timezone.utc) - timedelta(hours=self.auto_cleanup_hours)

            # 由於使用 deque，我們需要重建它
            old_count = len(self._records)
            new_records = deque(maxlen=self._records.maxlen)
            for record in self._records:
                record_time = datetime.fromisoformat(record["timestamp"].replace("Z", "+00:00"))
                if record_time >= cutoff_time:
                    new_records.append(record)
            self._records = new_records

            if len(new_records) < old_count:
                logger.info("Cleaned up %d old danmu records", old_count - len(new_records))

    def get_hourly_distribution(self, hours: int = 24) -> List[Dict]:
        """按小時分組統計彈幕數量
        Returns: [{"hour": "2026-03-19 14:00", "count": 5}, ...]
        """
        end_time = datetime.now(timezone.utc)
        start_time = end_time - timedelta(hours=hours)
        records = self.get_records(start_time=start_time, end_time=end_time, limit=10000)

        # Group by hour
        hourly = {}
        for r in records:
            ts = _parse_iso(r["timestamp"])
            hour_key = ts.strftime("%Y-%m-%d %H:00")
            hourly[hour_key] = hourly.get(hour_key, 0) + 1

        # Fill gaps
        result = []
        current = start_time.replace(minute=0, second=0, microsecond=0)
        while current <= end_time:
            key = current.strftime("%Y-%m-%d %H:00")
            result.append({"hour": key, "count": hourly.get(key, 0)})
            current += timedelta(hours=1)

        return result

    def get_top_texts(self, hours: int = 24, limit: int = 10) -> List[Dict]:
        """統計最常出現的彈幕文字
        Returns: [{"text": "Hello", "count": 15}, ...]
        """
        records = self.get_recent(hours=hours, limit=10000)
        counter = {}
        for r in records:
            text = r.get("text", "")
            if text:
                counter[text] = counter.get(text, 0) + 1

        sorted_items = sorted(counter.items(), key=lambda x: x[1], reverse=True)
        return [{"text": t, "count": c} for t, c in sorted_items[:limit]]


def _parse_iso(ts: str) -> datetime:
    """Parse an ISO 8601 timestamp string into a timezone-aware datetime."""
    if ts.endswith("Z"):
        ts = ts.replace("Z", "+00:00")
    dt = datetime.fromisoformat(ts)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


# 全局實例（將在應用初始化時配置）
danmu_history = None


def init_history(config=None):
    """初始化彈幕記錄管理器

    優先讀傳進來的 app 設定，沒有才退回模組層的 Config。原本只讀 Config，
    等於測試用的 TestConfig 覆蓋不到它 —— browser e2e 的子行程照樣把記錄寫進
    真正的 runtime/danmu_history.jsonl。
    """
    global danmu_history

    def _get(key):
        if config is not None:
            try:
                return config[key]
            except (KeyError, TypeError):
                pass
        return getattr(Config, key)

    danmu_history = DanmuHistory(
        max_records=_get("DANMU_HISTORY_MAX_RECORDS"),
        auto_cleanup_hours=_get("DANMU_HISTORY_CLEANUP_HOURS"),
        persist=_get("DANMU_HISTORY_PERSIST"),
        persist_ip=_get("DANMU_HISTORY_PERSIST_IP"),
        max_file_bytes=_get("DANMU_HISTORY_MAX_FILE_BYTES"),
    )
