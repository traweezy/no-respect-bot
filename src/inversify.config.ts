import 'reflect-metadata';
import { Container } from 'inversify';
import { Client } from 'discord.js';
import TYPES from './types';
import Bot from './bot';
import OneLiner from './services/one-liner';
import Trigger from './services/trigger';

const container: Container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container
  .bind<string>(TYPES.Token)
  .toConstantValue(process.env.TOKEN as string);
container.bind<OneLiner>(TYPES.OneLiner).to(OneLiner).inSingletonScope();
container.bind<Trigger>(TYPES.Trigger).to(Trigger).inSingletonScope();

export default container;
