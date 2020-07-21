import { Client, Message } from 'discord.js';
import { inject, injectable } from 'inversify';
import TYPES from './types';
import OneLiner from './services/one-liner';

@injectable()
export default class Bot {
  private client: Client;

  private readonly token: string;

  private oneLiner: OneLiner;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.OneLiner) oneLiner: OneLiner
  ) {
    this.client = client;
    this.token = token;
    this.oneLiner = oneLiner;
  }

  public listen(): Promise<string> {
    this.client.on('message', (message: Message): void => {
      if (message.author.bot) {
        return;
      }
      if (message.author === this.client.user) return;
      this.oneLiner.handle(message);
    });
    return this.client.login(process.env.TOKEN);
  }
}
