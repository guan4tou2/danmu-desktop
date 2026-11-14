"""觀眾外部圖片政策 — 觀眾送來的圖片網址能不能在大螢幕上變成圖片。

2026-11-14 新增。以前顯示端看到「長得像圖片網址」的文字就直接建 `<img>`，
伺服器端只檢查副檔名、不限主機，所以任何觀眾都能讓大螢幕載入任意外部
圖片——繞過所有文字過濾，也讓每台顯示機去連那台主機。

這裡集中三件事：

1. 持久化設定（`runtime/viewer_images.json`，走 JsonState）：
     enabled     允許觀眾送外部圖片。預設 False。
     hosts       允許的網站（hostname 清單）。空 = 開啟時不限網站；
                 有填 = 只放行清單內的主機與其子網域。
     extensions  允許的副檔名，從 SUPPORTED_EXTENSIONS 勾選。預設全選。
                 `jpg` 同時代表 .jpg 與 .jpeg。SVG 刻意不支援。
2. 判斷一則觀眾文字是不是圖片、能不能放行（`classify`）。判斷一律在伺服器做，
   顯示端只認伺服器給的 `isImage`。
3. 舊版顯示端的相容：已安裝在現場電腦上的舊版 Electron 顯示端不會跟著伺服器
   升級，仍會用正則把「整段是 http(s) 圖片網址」的文字轉成圖片。所以不合格的
   圖片網址不能原樣轉送——/fire 直接拒絕；沒辦法拒絕的轉送路徑（人工審核
   通過、Webhook、回放）改用 `neutralize` 讓舊正則對不上，只會顯示成文字。

貼圖與 emoji 不受這裡影響：它們是伺服器在**通過這道檢查之後**才自己產生的
（`:name:` 解析成貼圖網址、emoji 轉成 data URL），判斷靠的是「誰產生的」，
不是比對網址的主機——所以在反向代理後面、或顯示端與觀眾走不同網址時也成立。
"""

from __future__ import annotations

import ipaddress
import re
import unicodedata
from typing import Any, Dict, List, Optional, Tuple
from urllib.parse import urlsplit

from .json_state import JsonState

# 支援集合的順序就是後台勾選框的順序。
SUPPORTED_EXTENSIONS: Tuple[str, ...] = ("png", "jpg", "gif", "webp")
_EXT_SUFFIXES = {
    "png": (".png",),
    "jpg": (".jpg", ".jpeg"),
    "gif": (".gif",),
    "webp": (".webp",),
}
_EXT_ALIASES = {"jpeg": "jpg"}

# 舊版顯示端的正則認得的副檔名（Electron 多認 webp）。用來判斷「這段文字在
# 舊顯示端上會不會變成圖片」，所以要涵蓋所有版本認得的集合。
_LEGACY_IMAGE_SUFFIXES = (".gif", ".png", ".jpeg", ".jpg", ".webp")

MAX_HOSTS = 50
MAX_HOST_LEN = 253
_MAX_RAW_ENTRY_LEN = 2048

_LABEL = r"[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?"
_HOST_RE = re.compile(rf"^{_LABEL}(?:\.{_LABEL})*$")

# 控制字元、空白與反斜線會被瀏覽器的網址解析器另外處理（去掉、或當成斜線），
# 伺服器跟瀏覽器對同一段文字的解讀會不一致，所以網址裡出現就整個不放行。
_URL_FORBIDDEN = re.compile(r"[\x00-\x20\x7f\\\s]")

# 中和用的前綴：零寬空白不是 JS 正則的 `\s`，放在最前面就讓舊版顯示端的
# `^https?://` 對不上，畫面上看起來仍是原本的文字。
_NEUTRALIZER = "\u200b"


class ViewerImagesError(ValueError):
    """設定值不合法。`code` 給前端對應 i18n，`detail` 是出錯的那一筆。"""

    def __init__(self, code: str, message: str, detail: Optional[str] = None):
        super().__init__(message)
        self.code = code
        self.detail = detail


def _default() -> Dict[str, Any]:
    return {"enabled": False, "hosts": [], "extensions": list(SUPPORTED_EXTENSIONS)}


# ── 主機名稱 ───────────────────────────────────────────────────────────


def canonical_host(host: Optional[str]) -> Optional[str]:
    """把 hostname 轉成比對用的標準形式；轉不出穩定結果就回 None。

    小寫、去掉結尾的點、IDN 轉 punycode。非 ASCII 的主機只接受「轉成 punycode
    再轉回來仍是同一串字」的寫法：會被 IDNA 對應改寫的字元（全形字、特殊句點、
    ß 之類）在不同實作間結果不一致，伺服器以為是 A 網站、瀏覽器實際連到 B，
    所以直接不放行。
    """
    if not isinstance(host, str):
        return None
    h = host.strip()
    if h.endswith("."):
        h = h[:-1]
    if not h or len(h) > MAX_HOST_LEN:
        return None
    if h.isascii():
        ascii_host = h.lower()
    else:
        nfc = unicodedata.normalize("NFC", h).lower()
        try:
            ascii_host = nfc.encode("idna").decode("ascii")
            back = ascii_host.encode("ascii").decode("idna")
        except (UnicodeError, ValueError):
            return None
        if back != nfc:
            return None
        ascii_host = ascii_host.lower()
    if len(ascii_host) > MAX_HOST_LEN or not _HOST_RE.match(ascii_host):
        return None
    return ascii_host


def _is_ip_literal(host: str) -> bool:
    try:
        ipaddress.ip_address(host)
    except ValueError:
        return False
    return True


def normalize_host_entry(raw: Any) -> Optional[str]:
    """管理員輸入的一筆網站 → 標準 hostname。空字串回 None（略過）。

    接受 `example.com`、`Example.COM.`、IDN，也接受整段貼上的網址（取出主機）。
    拒絕萬用字元、空白、路徑、埠號、帳密。
    """
    if not isinstance(raw, str):
        raise ViewerImagesError("invalid_host", "host must be a string")
    s = raw.strip()
    if not s:
        return None
    if len(s) > _MAX_RAW_ENTRY_LEN:
        raise ViewerImagesError("invalid_host", "host is too long", s[:64])
    if "*" in s or re.search(r"\s", s) or "\\" in s:
        raise ViewerImagesError("invalid_host", "host must be a plain hostname", s)
    if "://" in s:
        try:
            parts = urlsplit(s)
            parts.port  # noqa: B018 — 觸發非法埠號的 ValueError
        except ValueError:
            raise ViewerImagesError("invalid_host", "could not parse URL", s)
        if parts.scheme not in ("http", "https") or "@" in parts.netloc:
            raise ViewerImagesError("invalid_host", "unsupported URL", s)
        candidate = parts.hostname
    else:
        if any(c in s for c in "/?#@:"):
            raise ViewerImagesError("invalid_host", "host must not include a path or port", s)
        candidate = s
    host = canonical_host(candidate)
    if host is None:
        raise ViewerImagesError("invalid_host", "invalid hostname", s)
    return host


def host_allowed(host: str, allowed: List[str]) -> bool:
    """`host` 已是 canonical_host 的結果。空清單 = 不限。

    清單內的網域放行自己與所有子網域；IP 位址只放行完全相同的那一個。
    用 label 邊界比對（`.example.com` 結尾），不是字串包含或前綴。
    """
    if not allowed:
        return True
    for entry in allowed:
        if host == entry:
            return True
        if not _is_ip_literal(entry) and host.endswith("." + entry):
            return True
    return False


# ── 設定 ───────────────────────────────────────────────────────────────


def _normalize_extensions(raw: Any) -> List[str]:
    if not isinstance(raw, (list, tuple)):
        raise ViewerImagesError("invalid_extension", "extensions must be a list")
    picked = set()
    for item in raw:
        if not isinstance(item, str):
            raise ViewerImagesError("invalid_extension", "extension must be a string")
        ext = item.strip().lower().lstrip(".")
        ext = _EXT_ALIASES.get(ext, ext)
        if ext not in SUPPORTED_EXTENSIONS:
            raise ViewerImagesError("invalid_extension", "unsupported extension", item[:16])
        picked.add(ext)
    return [e for e in SUPPORTED_EXTENSIONS if e in picked]


def _normalize_hosts(raw: Any) -> List[str]:
    if not isinstance(raw, (list, tuple)):
        raise ViewerImagesError("invalid_host", "hosts must be a list")
    # 原始筆數也設上限：先擋掉超大陣列，才不會為了去重先跑幾萬次解析。
    if len(raw) > MAX_HOSTS * 4:
        raise ViewerImagesError("too_many_hosts", f"at most {MAX_HOSTS} hosts")
    out: List[str] = []
    for item in raw:
        host = normalize_host_entry(item)
        if host and host not in out:
            out.append(host)
    if len(out) > MAX_HOSTS:
        raise ViewerImagesError("too_many_hosts", f"at most {MAX_HOSTS} hosts")
    return out


def _normalize(raw: Any) -> Dict[str, Any]:
    if not isinstance(raw, dict):
        raise ViewerImagesError("invalid_shape", "viewer image settings must be an object")
    out = _default()
    if "enabled" in raw:
        if not isinstance(raw["enabled"], bool):
            raise ViewerImagesError("invalid_shape", "enabled must be a boolean")
        out["enabled"] = raw["enabled"]
    if "hosts" in raw:
        out["hosts"] = _normalize_hosts(raw["hosts"])
    if "extensions" in raw:
        out["extensions"] = _normalize_extensions(raw["extensions"])
    return out


_state = JsonState("viewer_images.json", default=_default, normalize=_normalize)

get_state = _state.get


def set_state(patch: Dict[str, Any]) -> Dict[str, Any]:
    if not isinstance(patch, dict):
        raise ViewerImagesError("invalid_shape", "viewer image settings must be an object")
    unknown = set(patch) - {"enabled", "hosts", "extensions"}
    if unknown:
        raise ViewerImagesError("invalid_shape", "unknown field", sorted(unknown)[0])
    return _state.update(patch)


def _reset_for_tests() -> None:
    _state.reset_for_tests()


# ── 判斷 ───────────────────────────────────────────────────────────────

TEXT = "text"  # 一般文字，照原樣轉送
IMAGE = "image"  # 合格的外部圖片，標成 isImage
BLOCKED = "blocked"  # 圖片網址但不在允許範圍
INVALID = "invalid"  # 要求當圖片，但根本不是網址


def _looks_like_url(text: str) -> bool:
    head = text[:8].lower()
    return head.startswith("http://") or head.startswith("https://")


def _is_image_candidate(text: str, flagged: bool) -> bool:
    """這段文字在任何版本的顯示端上有沒有機會被當成圖片。

    刻意比舊顯示端的正則**寬**：只要開頭是 http(s):// 且結尾是圖片副檔名
    （不管中間有沒有空白、斜線），或網址路徑以圖片副檔名結尾（帶查詢字串的
    寫法），就交給政策判斷。寬了只是多檢查，窄了才會漏。
    """
    if flagged:
        return True
    lowered = text.lower()
    if lowered.endswith(_LEGACY_IMAGE_SUFFIXES):
        return True
    try:
        path = urlsplit(text).path.lower()
    except ValueError:
        return False
    return path.endswith(_LEGACY_IMAGE_SUFFIXES)


def evaluate_url(url: str, state: Optional[Dict[str, Any]] = None) -> Tuple[bool, str]:
    """外部圖片網址能不能放行。回傳 (ok, reason)。

    reason：ok / disabled / malformed / scheme / credentials / host / extension
    """
    st = state if state is not None else get_state()
    if not st.get("enabled"):
        return False, "disabled"
    if _URL_FORBIDDEN.search(url):
        return False, "malformed"
    try:
        parts = urlsplit(url)
        parts.port  # noqa: B018 — 非法埠號在這裡丟 ValueError
    except ValueError:
        return False, "malformed"
    if parts.scheme != "https":
        return False, "scheme"
    if "@" in parts.netloc:
        return False, "credentials"
    host = canonical_host(parts.hostname)
    if host is None:
        return False, "malformed"
    if not host_allowed(host, st.get("hosts") or []):
        return False, "host"
    path = parts.path.lower()
    suffixes = tuple(s for e in st.get("extensions") or [] for s in _EXT_SUFFIXES.get(e, ()))
    if not suffixes or not path.endswith(suffixes):
        return False, "extension"
    return True, "ok"


def classify(text: Any, flagged: bool = False) -> Tuple[str, str]:
    """一則觀眾文字 → (TEXT | IMAGE | BLOCKED | INVALID, reason)。"""
    if not isinstance(text, str):
        return (INVALID, "malformed") if flagged else (TEXT, "")
    if not _looks_like_url(text):
        return (INVALID, "malformed") if flagged else (TEXT, "")
    if not _is_image_candidate(text, flagged):
        return TEXT, ""
    ok, reason = evaluate_url(text)
    return (IMAGE, reason) if ok else (BLOCKED, reason)


def neutralize(text: str) -> str:
    """讓舊版顯示端的圖片正則對不上，畫面上只顯示成文字。"""
    if text.startswith(_NEUTRALIZER):
        return text
    return _NEUTRALIZER + text


def apply_to_payload(data: Dict[str, Any]) -> Dict[str, Any]:
    """給沒辦法回錯誤給觀眾的轉送路徑用（人工審核通過、Webhook、回放）。

    合格的外部圖片標成 isImage；不合格的中和成文字。原地修改並回傳 `data`。
    已經由伺服器標成 isImage 的（貼圖、當時合格的圖片）不在這裡處理。
    """
    if not isinstance(data, dict) or data.get("isImage"):
        return data
    verdict, _ = classify(data.get("text"), False)
    if verdict == IMAGE:
        data["isImage"] = True
    elif verdict == BLOCKED:
        data["text"] = neutralize(data["text"])
    return data
