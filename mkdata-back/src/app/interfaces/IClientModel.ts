import { Client } from '@prisma/client';

export interface IClientModel {
  getAll: () => Promise<Client[]>;
}
