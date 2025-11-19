import json
import logging
import os
from datetime import datetime


class JSONFormatter(logging.Formatter):
    """JSON 格式的日誌格式化器"""

    def format(self, record):
        log_data = {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if record.exc_info:
            log_data["exception"] = self.formatException(record.exc_info)
        if hasattr(record, "request_id"):
            log_data["request_id"] = record.request_id
        return json.dumps(log_data)


def setup_logging(level: str):
    numeric_level = getattr(logging, level.upper(), logging.INFO)

    # 檢查是否使用 JSON 格式
    use_json = os.getenv("LOG_FORMAT", "text").lower() == "json"

    if use_json:
        formatter = JSONFormatter()
    else:
        formatter = logging.Formatter(
            "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
        )

    handler = logging.StreamHandler()
    handler.setFormatter(formatter)

    root_logger = logging.getLogger()
    root_logger.setLevel(numeric_level)
    root_logger.handlers = [handler]
