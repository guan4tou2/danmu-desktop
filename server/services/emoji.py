"""
Emoji / sticker 服務

解析彈幕文字中的 :emoji_name: 語法，替換為圖片 URL 引用。
支援 PNG / GIF / WebP 格式，上限 500 KB。

熱插拔：每 SCAN_INTERVAL 秒最多掃描一次 static/emojis/ 目錄；
        mtime 變更時自動重新載入。
"""

import logging
import os
import re
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_EMOJIS_DIR = Path(__file__).parent.parent / "static" / "emojis"
_SCAN_INTERVAL = 5.0  # 秒
_MAX_FILE_SIZE = 500 * 1024  # 500 KB
_ALLOWED_EXTENSIONS = {"png", "gif", "webp"}
_NAME_RE = re.compile(r"^[a-zA-Z0-9_]{1,32}$")
_EMOJI_SYNTAX_RE = re.compile(r":([a-zA-Z0-9_]{1,32}):")
_URL_PREFIX = "/static/emojis"


class EmojiService:
    """Emoji / sticker 管理與解析服務（singleton）。"""

    def __init__(self) -> None:
        self._cache: Dict[str, Dict[str, Any]] = {}  # name -> {path, url, ext, filename}
        self._mtime_map: Dict[str, float] = {}  # filepath -> mtime
        self._last_scan: float = 0.0
        self._lock = threading.Lock()
        self._scan_lock = threading.Lock()

    # ─── 掃描 / 熱載入 ──────────────────────────────────────────────────

    def _scan(self) -> None:
        """掃描 emojis 目錄，更新快取（僅重新載入有變更的檔案）。"""
        with self._scan_lock:
            _EMOJIS_DIR.mkdir(parents=True, exist_ok=True)

            with self._lock:
                prev_cache = dict(self._cache)
                prev_mtime_map = dict(self._mtime_map)

            new_cache: Dict[str, Dict[str, Any]] = {}
            new_mtime_map: Dict[str, float] = {}

            for p in _EMOJIS_DIR.iterdir():
                if p.name.startswith(".") or not p.is_file():
                    continue
                ext = p.suffix.lstrip(".").lower()
                if ext not in _ALLOWED_EXTENSIONS:
                    continue
                name = p.stem
                if not _NAME_RE.match(name):
                    continue

                fpath = str(p)
                try:
                    mtime = p.stat().st_mtime
                except OSError:
                    continue

                # 未變更 → 沿用舊快取
                if prev_mtime_map.get(fpath) == mtime and name in prev_cache:
                    new_cache[name] = prev_cache[name]
                    new_mtime_map[fpath] = mtime
                    continue

                url = f"{_URL_PREFIX}/{p.name}"
                new_cache[name] = {
                    "path": fpath,
                    "url": url,
                    "ext": ext,
                    "filename": p.name,
                }
                new_mtime_map[fpath] = mtime
                logger.info("[Emoji] Loaded: %s (%s)", name, p.name)

            # 記錄被移除的檔案
            removed = set(prev_mtime_map) - set(new_mtime_map)
            for fpath in removed:
                logger.info("[Emoji] Removed: %s", fpath)

            with self._lock:
                self._cache = new_cache
                self._mtime_map = new_mtime_map
                self._last_scan = time.monotonic()

    def _maybe_scan(self, force: bool = False) -> None:
        with self._lock:
            should_scan = force or time.monotonic() - self._last_scan >= _SCAN_INTERVAL
        if should_scan:
            self._scan()

    # ─── 公開 API ────────────────────────────────────────────────────────

    def parse(self, text: str) -> Dict[str, Any]:
        """
        解析文字中的 :emoji_name: 語法。

        回傳:
            {
                "text": 修改後的文字（保留 :name: 佔位符供前端定位）,
                "emojis": [{name, url, position}, ...]
            }
        """
        self._maybe_scan()
        emojis: List[Dict[str, Any]] = []
        with self._lock:
            cache = dict(self._cache)

        for m in _EMOJI_SYNTAX_RE.finditer(text):
            name = m.group(1)
            if name in cache:
                emojis.append(
                    {
                        "name": name,
                        "url": cache[name]["url"],
                        "position": m.start(),
                    }
                )

        return {"text": text, "emojis": emojis}

    def list_emojis(self) -> List[Dict[str, str]]:
        """回傳所有已載入的 emoji 列表 [{name, url, filename}]。"""
        self._maybe_scan()
        with self._lock:
            return sorted(
                [
                    {"name": name, "url": info["url"], "filename": info["filename"]}
                    for name, info in self._cache.items()
                ],
                key=lambda x: x["name"],
            )

    def upload(self, name: str, file_bytes: bytes, ext: str) -> bool:
        """
        上傳 emoji 圖片。

        驗證規則：
        - name: [a-zA-Z0-9_]，最長 32 字元
        - ext: png / gif / webp
        - 大小: ≤ 500 KB
        """
        ext = ext.lstrip(".").lower()
        if not _NAME_RE.match(name):
            logger.warning("[Emoji] Invalid name: %s", name)
            return False
        if ext not in _ALLOWED_EXTENSIONS:
            logger.warning("[Emoji] Invalid extension: %s", ext)
            return False
        if len(file_bytes) > _MAX_FILE_SIZE:
            logger.warning(
                "[Emoji] File too large: %d bytes (max %d)", len(file_bytes), _MAX_FILE_SIZE
            )
            return False
        if not file_bytes:
            logger.warning("[Emoji] Empty file")
            return False

        _EMOJIS_DIR.mkdir(parents=True, exist_ok=True)

        # 移除同名但不同副檔名的舊檔案
        for old_ext in _ALLOWED_EXTENSIONS:
            old_path = _EMOJIS_DIR / f"{name}.{old_ext}"
            if old_path.exists() and old_ext != ext:
                try:
                    old_path.unlink()
                except OSError:
                    pass

        dest = _EMOJIS_DIR / f"{name}.{ext}"
        try:
            dest.write_bytes(file_bytes)
        except OSError as e:
            logger.error("[Emoji] Failed to write %s: %s", dest, e)
            return False

        self._scan()
        return True

    def delete(self, name: str) -> bool:
        """刪除指定名稱的 emoji 及其檔案。"""
        if not _NAME_RE.match(name):
            return False

        with self._lock:
            info = self._cache.get(name)
            if not info:
                return False
            fpath = info["path"]

        try:
            os.unlink(fpath)
        except OSError:
            return False

        with self._lock:
            self._cache.pop(name, None)
            self._mtime_map.pop(fpath, None)

        return True

    def get_url(self, name: str) -> Optional[str]:
        """取得指定 emoji 的 URL，不存在時回傳 None。"""
        self._maybe_scan()
        with self._lock:
            info = self._cache.get(name)
            return info["url"] if info else None


emoji_service = EmojiService()
