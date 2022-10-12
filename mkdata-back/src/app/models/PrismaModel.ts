import { Client, PrismaClient } from '@prisma/client';

import { IClient, IClientCreate } from '../interfaces/IClient';

type Models = 'client';

export default class PrismaModel {
  constructor(private prisma: PrismaClient, private model: Models) {}

  public create = async (client: IClientCreate) => {
    return this.prisma.client.create(client);
  };

  public getAll = async () => {
    return this.prisma[this.model].findMany();
  };

  public get = async (attribute: Partial<Client>): Promise<IClient | null> => {
    return this.prisma[this.model].findFirst({ where: attribute });
  };
}
