import { Client } from '@prisma/client';

import { IClientCreate } from './IClient';

export interface IClientModel {
  create: (client: IClientCreate) => Promise<Client>;
  getAll: () => Promise<Client[]>;
  get(attribute: Partial<Client>): Promise<Client>;
}
