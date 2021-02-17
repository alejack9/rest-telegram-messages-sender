FROM node:lts

RUN npm update -g

WORKDIR /opt/app

COPY ./src/package*.json ./

RUN npm install
