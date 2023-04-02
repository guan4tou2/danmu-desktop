# danmu-desktop
直接在桌面顯示彈幕  
Display bullet screen directly on the desktop  

[中文說明](https://github.com/guan4tou2/danmu-desktop/README-CH.md)

# English document
This project is divided into two parts:

1. Danmu-Desktop  
DanmuDesktop is the client-side application that runs on the computer where you want to display danmu.   
Currently supports Windows and MacOS and comes with an installer and portable files.

2. Server
The server creates a website that provides an interface for inputting danmu and sends the danmu to Danmu-Desktop.  

## Usage
### Danmu-Desktop
Download [the executable file](https://github.com/guan4tou2/danmu-desktop/releases), open the program, and enter the server's IP and websocket port (default is 4000) to start displaying danmu.  

### Server
There are two ways to run the server:  

1. Docker
Enter the server folder and run start.sh to start the server.  

2. Node.js
Enter the server folder and run npm i to install the modules and npm start to start the server.  

## Port Description  
- 3000: Website. 
- 4000: WebSocket. 
- 5000: Server API  

Modify the braces in docker run -p {3000}:3000 -p {4000}:4000 -p 5000:5000 --name danmu -d danmu-server to the desired ports.  
