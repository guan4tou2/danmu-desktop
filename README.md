# danmu-desktop:直接在桌面顯示彈幕  Display bullet screen directly on the desktop

此專案分為兩個部分  
1. Danmu-Desktop  
DanmuDesktop為client端，執行於想要顯示彈幕的電腦上  
目前支援作業系統:Windows,MacOS，具有安裝檔與可移植檔  

2. Server  
Server會建立起網站，提供輸入彈幕的介面，將彈幕傳送給Danmu-Desktop  

## 使用方式
### Danmu-Desktop 
下載[執行檔](https://github.com/guan4tou2/danmu-desktop/releases/tag/v1.0.0)後，開啟程式後輸入Server的IP以及websocket的port(預設4000)，即可開啟彈幕  

### Server
分為兩種執行方式
1. Docker  
進入server資料夾，執行start.sh後即可開啟伺服器  

2. Node.js  
進入server資料夾，執行`npm i`安裝模組，`npm start`開啟伺服器

## port說明  
- 3000：網頁  
- 4000：websocket  
- 5000：server api  

可將`docker run -p {3000}:3000 -p {4000}:4000 -p 5000:5000 --name danmu -d danmu-server`中的大括號修改為需要的port  


# English document
This project is divided into two parts:

1. Danmu-Desktop  
DanmuDesktop is the client-side application that runs on the computer where you want to display danmu.   
Currently supports Windows and MacOS and comes with an installer and portable files.

2. Server
The server creates a website that provides an interface for inputting danmu and sends the danmu to Danmu-Desktop.  

## Usage
### Danmu-Desktop
Download the executable file, open the program, and enter the server's IP and websocket port (default is 4000) to start displaying danmu.  

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
