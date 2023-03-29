FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000 4000 5000
CMD ["node","server.js"]
