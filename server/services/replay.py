"""彈幕回放服務

按原始時間間隔（可倍速）逐筆重新發送歷史彈幕到 overlay。
支援暫停/繼續/停止控制。
"""

import logging
import threading
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from uuid import uuid4

from . import ws_queue

logger = logging.getLogger(__name__)

# 預設 textStyles（歷史記錄中不含此欄位）
_DEFAULT_TEXT_STYLES = {
    "textStroke": True,
    "strokeWidth": 2,
    "strokeColor": "#000000",
    "textShadow": False,
    "shadowBlur": 4,
}

_DEFAULT_DISPLAY_AREA = {"top": 0, "height": 100}


def _parse_iso(ts: str) -> datetime:
    """解析 ISO 時間字串，確保有 timezone info"""
    if ts.endswith("Z"):
        ts = ts.replace("Z", "+00:00")
    dt = datetime.fromisoformat(ts)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


class ReplayService:
    """彈幕回放引擎"""

    def __init__(self):
        self._thread: Optional[threading.Thread] = None
        self._stop_event = threading.Event()
        self._pause_event = threading.Event()
        self._pause_event.set()  # 初始不暫停
        self._lock = threading.Lock()
        self._current_id: Optional[str] = None
        self._progress = {"sent": 0, "total": 0}

    def start(self, records: List[Dict[str, Any]], speed_multiplier: float = 1.0) -> str:
        """啟動回放

        Args:
            records: 歷史記錄陣列（含 timestamp, text, color 等）
            speed_multiplier: 倍速（1.0=原速, 2.0=兩倍速, 5.0=五倍速）

        Returns:
            replay_id: 本次回放的唯一 ID
        """
        self.stop()  # 停止上一次回放

        with self._lock:
            self._stop_event.clear()
            self._pause_event.set()
            self._current_id = uuid4().hex[:8]
            self._progress = {"sent": 0, "total": len(records)}

        replay_id = self._current_id
        self._thread = threading.Thread(
            target=self._run,
            args=(records, speed_multiplier, replay_id),
            daemon=True,
        )
        self._thread.start()
        logger.info(
            "Replay started: id=%s, records=%d, speed=%.1fx",
            replay_id,
            len(records),
            speed_multiplier,
        )
        return replay_id

    def _run(
        self,
        records: List[Dict[str, Any]],
        speed_multiplier: float,
        replay_id: str,
    ):
        """背景 thread：按時間間隔逐筆發送"""
        sorted_records = sorted(records, key=lambda r: r.get("timestamp", ""))

        for i, record in enumerate(sorted_records):
            if self._stop_event.is_set():
                break
            self._pause_event.wait()  # 暫停時阻塞

            msg = self._build_message(record)
            ws_queue.enqueue_message(msg)

            with self._lock:
                self._progress["sent"] = i + 1

            # 計算與下一筆的時間間隔
            if i < len(sorted_records) - 1:
                try:
                    t1 = _parse_iso(record["timestamp"])
                    t2 = _parse_iso(sorted_records[i + 1]["timestamp"])
                    delay = (t2 - t1).total_seconds() / speed_multiplier
                    delay = max(0.05, min(delay, 10.0))  # 限制 0.05s ~ 10s
                except (KeyError, ValueError):
                    delay = 0.5 / speed_multiplier

                # 用 stop_event.wait 代替 time.sleep，可被 stop() 打斷
                if self._stop_event.wait(delay):
                    break

        logger.info("Replay finished: id=%s", replay_id)

    @staticmethod
    def _build_message(record: Dict[str, Any]) -> Dict[str, Any]:
        """將歷史記錄轉換為 overlay WS 訊息格式"""
        return {
            "text": record.get("text", ""),
            "color": record.get("color", "FFFFFF"),
            "size": record.get("size", 50),
            "speed": record.get("speed", 5),
            "opacity": record.get("opacity", 100),
            "isImage": record.get("isImage", False),
            "fontInfo": record.get("fontInfo")
            or {"name": "NotoSansTC", "url": None, "type": "default"},
            "textStyles": dict(_DEFAULT_TEXT_STYLES),
            "displayArea": dict(_DEFAULT_DISPLAY_AREA),
            "effectCss": None,
        }

    def pause(self):
        """暫停回放"""
        self._pause_event.clear()
        logger.info("Replay paused")

    def resume(self):
        """繼續回放"""
        self._pause_event.set()
        logger.info("Replay resumed")

    def stop(self):
        """停止回放"""
        self._stop_event.set()
        self._pause_event.set()  # 解除暫停阻塞以讓 thread 結束
        if self._thread and self._thread.is_alive():
            self._thread.join(timeout=2.0)
        self._thread = None

    @property
    def is_running(self) -> bool:
        return self._thread is not None and self._thread.is_alive()

    @property
    def is_paused(self) -> bool:
        return not self._pause_event.is_set() and self.is_running

    def get_status(self) -> Dict[str, Any]:
        """取得回放狀態"""
        with self._lock:
            state = "stopped"
            if self.is_running:
                state = "paused" if self.is_paused else "playing"
            return {
                "state": state,
                "replayId": self._current_id,
                "sent": self._progress["sent"],
                "total": self._progress["total"],
            }


# 全域 singleton
replay_service = ReplayService()
