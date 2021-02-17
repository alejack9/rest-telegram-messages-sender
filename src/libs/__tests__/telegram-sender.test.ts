import TelegramSender from '../telegram-sender';

test('do not accept invalid token', async () => {
  const token = 'invalid';
  expect.assertions(1);
  try {
    await TelegramSender.getTelegramSender(token);
  } catch (e) {
    expect(e.message).toMatch('Invalid Token');
  }
});

test('do not accept empty token', async () => {
  const token = '';
  expect.assertions(1);
  try {
    await TelegramSender.getTelegramSender(token);
  } catch (e) {
    expect(e.message).toMatch('Invalid Token');
  }
});
