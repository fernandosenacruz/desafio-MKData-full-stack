import { Client } from '@prisma/client';

import { IClientCreate, IClientUpdate } from './IClient';

export interface IClientModel {
  getAll: () => Promise<Client[]>;
  deleteOne: (id: number) => Promise<Client>;
  create: (client: IClientCreate) => Promise<Client>;
  getOne: (attribute: Partial<Client>) => Promise<Client | null>;
  updateOne: (id: number, payload: IClientUpdate) => Promise<Client | null>;
}
