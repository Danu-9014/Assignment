# syntax=docker/dockerfile:1

FROM node:21.7.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]
