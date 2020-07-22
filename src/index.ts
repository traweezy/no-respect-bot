/* eslint-disable import/first */
// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import container from './inversify.config';
import TYPES from './types';
import Bot from './bot';

const bot = container.get<Bot>(TYPES.Bot);

bot
  .listen()
  .then(() => {
    console.log('Logged in!');
  })
  .catch((error: Error) => {
    console.log('err', error.toString());
  });
