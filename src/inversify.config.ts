import 'reflect-metadata';
import { Container } from 'inversify';
import { Client } from 'discord.js';
import TYPES from './types';
import Bot from './bot';

const container: Container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container
  .bind<string>(TYPES.Token)
  .toConstantValue(process.env.TOKEN as string);

export default container;
