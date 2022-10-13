import { Client } from '@prisma/client';

import { IClientCreate, IClientUpdate } from './IClient';
import IContext from './IContext';

export interface IClientModel {
  getAll: (ctx: IContext) => Promise<Client[]>;
  deleteOne: (id: number, ctx: IContext) => Promise<Client>;
  create: (client: IClientCreate, ctx: IContext) => Promise<Client>;
  getOne: (attribute: Partial<Client>, ctx: IContext) => Promise<Client | null>;
  updateOne: (
    id: number,
    payload: IClientUpdate,
    ctx: IContext
  ) => Promise<Client | null>;
}
