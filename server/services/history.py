"""彈幕記錄服務"""

import threading
import time
from collections import deque
from datetime import datetime, timedelta, timezone
from typing import Dict, List, Optional

from flask import current_app

from ..config import Config


class DanmuHistory:
    """彈幕記錄管理器"""

    def __init__(self, max_records: int = 10000, auto_cleanup_hours: int = 24):
        """
        初始化彈幕記錄管理器

        Args:
            max_records: 最大記錄數（防止內存溢出）
            auto_cleanup_hours: 自動清理超過此小時數的記錄
        """
        self._records: deque = deque(maxlen=max_records)
        self._lock = threading.Lock()
        self.auto_cleanup_hours = auto_cleanup_hours
        self.last_cleanup = time.time()

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
            # 定期清理舊記錄
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

        # 計算最近 24 小時的記錄數
        last_24h = len(self.get_recent(hours=24))

        return {
            "total": total,
            "oldest": oldest,
            "newest": newest,
            "last_24h": last_24h,
        }

    def clear(self):
        """清空所有記錄"""
        with self._lock:
            self._records.clear()

    def _maybe_cleanup(self):
        """定期清理舊記錄"""
        now = time.time()
        # 每小時清理一次
        if now - self.last_cleanup < 3600:
            return

        self.last_cleanup = now
        cutoff_time = datetime.now(timezone.utc) - timedelta(hours=self.auto_cleanup_hours)

        with self._lock:
            # 由於使用 deque，我們需要重建它
            old_count = len(self._records)
            new_records = deque(maxlen=self._records.maxlen)
            for record in self._records:
                record_time = datetime.fromisoformat(record["timestamp"].replace("Z", "+00:00"))
                if record_time >= cutoff_time:
                    new_records.append(record)
            self._records = new_records

            if len(new_records) < old_count:
                current_app.logger.info(
                    f"Cleaned up {old_count - len(new_records)} old danmu records"
                )


# 全局實例（將在應用初始化時配置）
danmu_history = None


def init_history():
    """初始化彈幕記錄管理器"""
    global danmu_history
    danmu_history = DanmuHistory(
        max_records=Config.DANMU_HISTORY_MAX_RECORDS,
        auto_cleanup_hours=Config.DANMU_HISTORY_CLEANUP_HOURS,
    )

