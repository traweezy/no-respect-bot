import { Client, Message } from 'discord.js';
import { inject, injectable } from 'inversify';
import TYPES from './types';
// import {MessageResponder} from "./services/message-responder"

@injectable()
export default class Bot {
  private client: Client;

  private readonly token: string;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string
  ) {
    this.client = client;
    this.token = token;
  }

  public listen(): Promise<string> {
    this.client.on('message', (message: Message) => {
      console.log('MESSAGE: ', message);
    });
    return this.client.login(process.env.TOKEN);
  }
}
