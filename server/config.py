import os
import secrets
import tempfile
from pathlib import Path

from dotenv import find_dotenv, load_dotenv

# Load environment variables once for the entire server package
load_dotenv(find_dotenv(), override=True)

# Runtime-writable password hash file (takes priority over env vars)
_HASH_FILE = Path(__file__).parent / ".admin_password.hash"
_SECRET_KEY_ENV = (os.getenv("SECRET_KEY") or "").strip()


def load_runtime_hash() -> str:
    """Return bcrypt hash from .admin_password.hash, or '' if not present."""
    try:
        return _HASH_FILE.read_text().strip()
    except FileNotFoundError:
        return ""


def save_runtime_hash(hashed: str) -> None:
    """Persist a new bcrypt hash to .admin_password.hash."""
    _HASH_FILE.write_text(hashed)
    os.chmod(_HASH_FILE, 0o600)


class Config:
    """Central place for server configuration."""

    # os.getenv 的 default 只在 key 不存在時生效，不處理空字串
    # 用 or 確保空字串也會 fallback 到隨機生成的 key
    SECRET_KEY = _SECRET_KEY_ENV or secrets.token_hex(32)
    SECRET_KEY_FROM_ENV = bool(_SECRET_KEY_ENV)
    ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "")
    # Priority: runtime hash file > ADMIN_PASSWORD_HASHED env var > plaintext ADMIN_PASSWORD
    ADMIN_PASSWORD_HASHED = load_runtime_hash() or os.getenv("ADMIN_PASSWORD_HASHED", "")
    APP_VERSION = "4.4.0"
    PORT = int(os.getenv("PORT", "4000"))
    WS_PORT = int(os.getenv("WS_PORT", "4001"))
    ENV = os.getenv("ENV", "development").lower()
    MAX_CONTENT_LENGTH = 15 * 1024 * 1024  # 15 MB uploads
    WS = ""
    FIRE_RATE_LIMIT = int(os.getenv("FIRE_RATE_LIMIT", "20"))
    FIRE_RATE_WINDOW = int(os.getenv("FIRE_RATE_WINDOW", "60"))
    ADMIN_RATE_LIMIT = int(os.getenv("ADMIN_RATE_LIMIT", "60"))
    ADMIN_RATE_WINDOW = int(os.getenv("ADMIN_RATE_WINDOW", "60"))
    API_RATE_LIMIT = int(os.getenv("API_RATE_LIMIT", "30"))
    API_RATE_WINDOW = int(os.getenv("API_RATE_WINDOW", "60"))
    RATE_LIMIT_BACKEND = os.getenv("RATE_LIMIT_BACKEND", "memory")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
    FONT_TOKEN_EXPIRATION = int(os.getenv("FONT_TOKEN_EXPIRATION", "900"))
    HSTS_ENABLED = os.getenv("HSTS_ENABLED", "false").lower() == "true"
    HSTS_MAX_AGE = int(os.getenv("HSTS_MAX_AGE", "31536000"))
    HSTS_INCLUDE_SUBDOMAINS = os.getenv("HSTS_INCLUDE_SUBDOMAINS", "false").lower() == "true"

    # Login rate limiting (5 attempts per 5 minutes per IP)
    LOGIN_RATE_LIMIT = int(os.getenv("LOGIN_RATE_LIMIT", "5"))
    LOGIN_RATE_WINDOW = int(os.getenv("LOGIN_RATE_WINDOW", "300"))

    # Session configuration
    _session_cookie_secure_env = os.getenv("SESSION_COOKIE_SECURE")
    if _session_cookie_secure_env is None:
        SESSION_COOKIE_SECURE = ENV in {"production", "prod"}
    else:
        SESSION_COOKIE_SECURE = _session_cookie_secure_env.lower() == "true"
    SESSION_COOKIE_HTTPONLY = True
    # Strict prevents cookies from being sent on cross-site requests (stronger CSRF protection)
    SESSION_COOKIE_SAMESITE = os.getenv("SESSION_COOKIE_SAMESITE", "Strict")

    # Host validation (Flask Trusted Hosts)
    _trusted_hosts_raw = os.getenv("TRUSTED_HOSTS", "").strip()
    TRUSTED_HOSTS = [h.strip() for h in _trusted_hosts_raw.split(",") if h.strip()] or None
    TRUST_X_FORWARDED_FOR = os.getenv("TRUST_X_FORWARDED_FOR", "false").lower() == "true"

    # CORS configuration
    # Default: wildcard origins, no credentials — allows public API access without CSRF risk.
    # To allow admin from a remote origin: set CORS_ORIGINS and CORS_SUPPORTS_CREDENTIALS=true.
    CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*").split(",")
    CORS_SUPPORTS_CREDENTIALS = os.getenv("CORS_SUPPORTS_CREDENTIALS", "false").lower() == "true"

    # Dedicated WS server access control
    WS_HOST = os.getenv("WS_HOST", "127.0.0.1")
    WS_REQUIRE_TOKEN = os.getenv("WS_REQUIRE_TOKEN", "false").lower() == "true"
    WS_AUTH_TOKEN = os.getenv("WS_AUTH_TOKEN", "")
    WS_MAX_SIZE = int(os.getenv("WS_MAX_SIZE", str(1024 * 1024)))
    WS_MAX_QUEUE = int(os.getenv("WS_MAX_QUEUE", "16"))
    WS_WRITE_LIMIT = int(os.getenv("WS_WRITE_LIMIT", "32768"))
    WS_MAX_CONNECTIONS = int(os.getenv("WS_MAX_CONNECTIONS", "200"))
    WS_MAX_CONNECTIONS_PER_IP = int(os.getenv("WS_MAX_CONNECTIONS_PER_IP", "10"))
    _ws_allowed_origins_raw = os.getenv("WS_ALLOWED_ORIGINS", "").strip()
    WS_ALLOWED_ORIGINS = [o.strip() for o in _ws_allowed_origins_raw.split(",") if o.strip()]
    _web_ws_allowed_origins_raw = os.getenv("WEB_WS_ALLOWED_ORIGINS", "").strip()
    WEB_WS_ALLOWED_ORIGINS = [
        o.strip() for o in _web_ws_allowed_origins_raw.split(",") if o.strip()
    ]

    # Danmu history configuration
    DANMU_HISTORY_MAX_RECORDS = int(os.getenv("DANMU_HISTORY_MAX_RECORDS", "10000"))
    DANMU_HISTORY_CLEANUP_HOURS = int(os.getenv("DANMU_HISTORY_CLEANUP_HOURS", "24"))
    SETTINGS_FILE = os.getenv(
        "SETTINGS_FILE",
        str(Path(tempfile.gettempdir()) / "danmu_runtime_settings.json"),
    )

    # Scheduler configuration
    SCHEDULER_MAX_JOBS = int(os.getenv("SCHEDULER_MAX_JOBS", "20"))

    # Sticker configuration
    STICKER_MAX_COUNT = int(os.getenv("STICKER_MAX_COUNT", "50"))

    # Filter engine configuration
    FILTER_RULES_PATH = os.getenv(
        "FILTER_RULES_PATH",
        str(Path(__file__).parent / "filter_rules.json"),
    )

    # Webhook configuration
    WEBHOOKS_PATH = os.getenv(
        "WEBHOOKS_PATH",
        str(Path(__file__).parent / "webhooks.json"),
    )
    WEBHOOK_TIMEOUT = int(os.getenv("WEBHOOK_TIMEOUT", "10"))

    # Sounds configuration
    SOUNDS_DIR = os.getenv(
        "SOUNDS_DIR",
        str(Path(__file__).parent / "static" / "sounds"),
    )

    # Plugins configuration
    PLUGINS_DIR = os.getenv(
        "PLUGINS_DIR",
        str(Path(__file__).parent / "plugins"),
    )

    # Emoji configuration
    EMOJI_DIR = os.getenv(
        "EMOJI_DIR",
        str(Path(__file__).parent / "static" / "emojis"),
    )

    # Admin settable option keys
    SETTABLE_OPTION_KEYS = {
        "Color",
        "Opacity",
        "FontSize",
        "Speed",
        "FontFamily",
        "Effects",
        "Layout",
        "Nickname",
    }
