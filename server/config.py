import os
import secrets

from dotenv import find_dotenv, load_dotenv

# Load environment variables once for the entire server package
load_dotenv(find_dotenv(), override=True)


class Config:
    """Central place for server configuration."""

    SECRET_KEY = os.getenv("SECRET_KEY", secrets.token_hex(16))
    ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "ADMIN_PASSWORD")
    ADMIN_PASSWORD_HASHED = os.getenv("ADMIN_PASSWORD_HASHED", "")  # 預先雜湊的密碼
    PORT = int(os.getenv("PORT", "4000"))
    WS_PORT = int(os.getenv("WS_PORT", "4001"))
    MAX_CONTENT_LENGTH = 15 * 1024 * 1024  # 15 MB uploads
    WS = ""
    FIRE_RATE_LIMIT = int(os.getenv("FIRE_RATE_LIMIT", "20"))
    FIRE_RATE_WINDOW = int(os.getenv("FIRE_RATE_WINDOW", "60"))
    ADMIN_RATE_LIMIT = int(os.getenv("ADMIN_RATE_LIMIT", "10"))
    ADMIN_RATE_WINDOW = int(os.getenv("ADMIN_RATE_WINDOW", "60"))
    API_RATE_LIMIT = int(os.getenv("API_RATE_LIMIT", "30"))
    API_RATE_WINDOW = int(os.getenv("API_RATE_WINDOW", "60"))
    RATE_LIMIT_BACKEND = os.getenv("RATE_LIMIT_BACKEND", "memory")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
    FONT_TOKEN_EXPIRATION = int(os.getenv("FONT_TOKEN_EXPIRATION", "900"))
    
    # Session configuration
    SESSION_COOKIE_SECURE = os.getenv("SESSION_COOKIE_SECURE", "false").lower() == "true"
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = os.getenv("SESSION_COOKIE_SAMESITE", "Lax")
    
    # CORS configuration
    CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*").split(",")
    CORS_SUPPORTS_CREDENTIALS = True
