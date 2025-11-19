#!/usr/bin/env python3
"""生成管理員密碼雜湊的工具腳本"""

import sys
from pathlib import Path

# 添加專案路徑
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from server.services.security import hash_password


def main():
    if len(sys.argv) < 2:
        print("用法: python hash_password.py <password>")
        print("範例: python hash_password.py my_secure_password")
        sys.exit(1)

    password = sys.argv[1]
    hashed = hash_password(password)

    print(f"原始密碼: {password}")
    print(f"雜湊值: {hashed}")
    print("\n請將以下內容加入 .env 檔案:")
    print(f"ADMIN_PASSWORD_HASHED={hashed}")
    print("\n注意: 設定 ADMIN_PASSWORD_HASHED 後，ADMIN_PASSWORD 將被忽略")


if __name__ == "__main__":
    main()
