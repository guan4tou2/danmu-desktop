import re
from typing import Any, Dict, Optional

from flask import current_app, g, jsonify

from .state import ALLOWED_EXTENSIONS


def allowed_file(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def sanitize_log_string(input_val) -> str:
    s = str(input_val)
    s = s.replace("\n", " ").replace("\r", " ")
    s = s.replace("\t", " ")
    return s


def is_valid_image_url(url: str) -> bool:
    return bool(
        re.match(r"https?://([^\s/]+/)*[^\s/]+\.(jpeg|jpg|gif|png|webp)$", url, re.I)
    )


# 統一錯誤處理
class APIError(Exception):
    """API 錯誤基類"""

    def __init__(
        self,
        message: str,
        status_code: int = 400,
        payload: Optional[Dict[str, Any]] = None,
        error_code: Optional[str] = None,
    ):
        self.message = message
        self.status_code = status_code
        self.payload = payload or {}
        self.error_code = error_code or self._get_default_error_code(status_code)

    def _get_default_error_code(self, status_code: int) -> str:
        """根據狀態碼返回預設錯誤代碼"""
        codes = {
            400: "BAD_REQUEST",
            401: "UNAUTHORIZED",
            403: "FORBIDDEN",
            404: "NOT_FOUND",
            409: "CONFLICT",
            429: "TOO_MANY_REQUESTS",
            500: "INTERNAL_SERVER_ERROR",
            503: "SERVICE_UNAVAILABLE",
        }
        return codes.get(status_code, "UNKNOWN_ERROR")

    def to_dict(self) -> Dict[str, Any]:
        """將錯誤轉換為字典"""
        error_dict = {
            "error": {
                "code": self.error_code,
                "message": self.message,
                "request_id": getattr(g, "request_id", None),
            }
        }
        if self.payload:
            error_dict["error"]["details"] = self.payload
        return error_dict


def register_error_handlers(app):
    """註冊錯誤處理器"""

    @app.errorhandler(APIError)
    def handle_api_error(error: APIError):
        """處理 APIError"""
        current_app.logger.warning(
            f"API Error [{error.status_code}]: {error.message} (Request ID: {getattr(g, 'request_id', 'N/A')})"
        )
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        if hasattr(g, "request_id"):
            response.headers["X-Request-ID"] = g.request_id
        return response

    @app.errorhandler(404)
    def handle_not_found(error):
        """處理 404 錯誤"""
        api_error = APIError("Resource not found", 404, error_code="NOT_FOUND")
        return handle_api_error(api_error)

    @app.errorhandler(500)
    def handle_internal_error(error):
        """處理 500 錯誤"""
        current_app.logger.error(
            f"Internal Server Error: {str(error)} (Request ID: {getattr(g, 'request_id', 'N/A')})"
        )
        api_error = APIError(
            "An internal error has occurred", 500, error_code="INTERNAL_SERVER_ERROR"
        )
        return handle_api_error(api_error)

    @app.errorhandler(429)
    def handle_rate_limit(error):
        """處理速率限制錯誤"""
        api_error = APIError(
            "Too many requests. Please try again later.",
            429,
            error_code="TOO_MANY_REQUESTS",
        )
        return handle_api_error(api_error)

