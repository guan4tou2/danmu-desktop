# danmu-desktop
直接在桌面顯示彈幕  
Display bullet screen directly on the desktop  

[中文說明](https://github.com/guan4tou2/danmu-desktop/blob/main/README-CH.md)

# English document
This project is divided into two parts:

1. Danmu-Desktop  
DanmuDesktop is the client-side application that runs on the computer where you want to display danmu.   
Currently supports Windows and MacOS and comes with an installer and portable files.

2. Server
The server creates a website that provides an interface for inputting danmu and sends the danmu to Danmu-Desktop.  

## Usage
### Danmu-Desktop
Download [the executable file](https://github.com/guan4tou2/danmu-desktop/releases), open the program, and enter the server's IP and port (default is 4000) to start displaying danmu.  

### Server
Using uv is faster, you can also use any management tool you like
```bash
git clone https://github.com/guan4tou2/danmu-desktop
cd danmu-desktop
vim .env # 修改你的密碼
uv venv
uv pip install -r requirements.txt
uv run app.py
```

http://ip:4000 can be used
http://ip:4000/admin to enter the management page

If you want to change the port, you can modify it in .env

## Port Description  
- 4000: Website.
