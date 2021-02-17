import { RequestOptions, get } from 'https';
import { URL } from 'url';

async function asyncGetBody(url: string | RequestOptions | URL): Promise<string> {
  return new Promise((res, rej) => {
    get(url, (r) => r.on('data', (c) => res(c.toString())));
  });
}

export default class TelegramSender {
  private base: string;
  private token: string;

  private constructor(token: string) {
    this.base = `https://api.telegram.org/bot${token}`;
    this.token = token;
  }

  static async getTelegramSender(token: string) {
    const toRet = new TelegramSender(token);

    if (!(await toRet.validToken())) throw new Error('Invalid Token');

    return toRet;
  }

  async validToken() {
    if (!this.token.match(/^[0-9]{8,10}:[a-zA-Z0-9_-]{35}$/)) return false;
    return JSON.parse(await asyncGetBody(this.base + '/getMe')).ok;
  }

  sendMessage(id: string | number, message: string) {
    get(this.base + `/sendMessage?chat_id=${encodeURIComponent(id)}&text=${encodeURIComponent(message)}`);
  }
}
