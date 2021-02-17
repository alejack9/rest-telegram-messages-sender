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
npm run deploy
```

Or

```bash
npm run deploy:only
```

Note

> There are no exposed ports in the docker compose configuration file

### Via NPM

Run via NPM

```bash
npm install
npm start
```

### Rest API

Reach REST server at `http://localhost:8000/` using method `GET`

### Query String

| Field     | Description         |
| --------- | ------------------- |
| `message` | The message to send |

Example:

```bash
    curl -G --data-urlencode 'message=bots are awesome!' http://localhost:8000
```
