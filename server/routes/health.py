from flask import Blueprint, jsonify, send_from_directory
from pathlib import Path

health_bp = Blueprint("health", __name__)

_STATIC_DIR = Path(__file__).parent.parent / "static"


@health_bp.route("/favicon.ico")
def favicon():
    return send_from_directory(_STATIC_DIR, "favicon.ico", mimetype="image/x-icon")


@health_bp.route("/health")
def health():
    """健康檢查端點"""
    return jsonify({"status": "healthy", "service": "danmu-server"}), 200


@health_bp.route("/health/ready")
def readiness():
    """就緒檢查端點（可用於 Kubernetes readiness probe）"""
    # 可以加入更多檢查邏輯，例如資料庫連線、外部服務等
    return jsonify({"status": "ready"}), 200


@health_bp.route("/health/live")
def liveness():
    """存活檢查端點（可用於 Kubernetes liveness probe）"""
    return jsonify({"status": "alive"}), 200
