# danmu-desktop
Display bullet screen directly on the desktop  
在桌面直接顯示彈幕

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

![img](img/danmu%20display.png)

## Overview
This project is divided into two parts:

1. Danmu-Desktop  
   - Client-side application that runs on your computer to display danmu
   - Currently supports Windows and MacOS
   - Available as both installer and portable version

![img](img/client.png)
![img](img/client%20start%20effect.png)

2. Server
   - Creates a web interface for danmu input
   - Manages danmu delivery to connected clients
   - Includes admin panel for configuration

![img](img/web%20panel.png)
![img](img/admin%20panel.png)

## Installation & Usage

### Danmu-Desktop Client
1. Download the [latest release](https://github.com/guan4tou2/danmu-desktop/releases)
2. For MacOS users, run:
   ```bash
   sudo xattr -r -d com.apple.quarantine 'danmu manager.app'
   ```
3. Launch the application
4. Enter the server's IP and port (default: 4001)

### Server Setup
```bash
# Clone the repository
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop

# Configure environment
vim .env  # Set your admin password

# Setup virtual environment and install dependencies
uv venv
uv pip install -r requirements.txt

# Start the server
uv run app.py
```

### Accessing the Server
- Main interface: `http://ip:4000`
- Admin panel: `http://ip:4000/admin`

## Port Configuration
- `4000`: Web interface
- `4001`: Danmu Desktop Client connection

## References
SAO UI design inspired by [SAO-UI-PLAN-LINK-START | Akilarの糖果屋](https://akilar.top/posts/1b4fa1dd/)