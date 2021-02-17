# Telegram Sender Service

## Description

Simple REST API to send a message to a specific chat via Telegram Bot

## Run

### Environment Variables

| Variable    | Description                          |
| ----------- | ------------------------------------ |
| `BOT_TOKEN` | Token that identifies the Bot        |
| `CLIENT_ID` | Id of user which send the message to |
| `PORT`      | API port number                      |

### Via Docker

Create a network named `backend` (to be shared with other nodes)

```bash
docker network create backend
```

Run

```bash
docker-compose up -d
```

Note

> There are no exposed port in the docker compose configuration file

### Via NPM

Go to `src` folder, install dependencies and run

```bash
cd src
npm install
npm run
```

Reach REST server at `http://localhost:8000/`
