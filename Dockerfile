FROM node:lts

RUN npm update -g

WORKDIR /opt/app

COPY ./package*.json ./

ENV NODE_ENV=production

RUN npm ci

COPY ./dist/ ./
