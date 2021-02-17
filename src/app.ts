import { createServer, IncomingMessage, ServerResponse } from 'http';
import { exit } from 'process';
import TelegramSender from './libs/telegram-sender';

const token = process.env.BOT_TOKEN || '';
const clientId = process.env.CHAT_ID || '';
const port = process.env.PORT || 8000;

let telegram: TelegramSender;

function httpGet(req: IncomingMessage, res: ServerResponse) {
  if (!req.url?.split('?')[1]) {
    res.writeHead(400);
    return res.end();
  }
  const urlParams = new URLSearchParams(req.url.split('?')[1]);
  const message = urlParams.get('message');
  if (!message) {
    res.writeHead(400);
    return res.end();
  }
  telegram.sendMessage(clientId, message);

  res.writeHead(200);
  res.end();
}

(async function start() {
  try {
    telegram = await TelegramSender.getTelegramSender(token);
  } catch (e) {
    console.log(e);
    exit(-1);
  }

  createServer({}, httpGet).listen(port);
  console.log(`Listening on port ${port}...`);
})();
