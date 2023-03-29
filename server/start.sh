docker build . -t danmu-server
docker run -p 3000:3000 -p 4000:4000 -p 5000:5000 --name danmu -d danmu-server
