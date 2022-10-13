import { Client, PrismaClient } from '@prisma/client';

import { IClient, IClientCreate, IClientUpdate } from '../interfaces/IClient';

type Models = 'client';

export default class PrismaModel {
  constructor(private prisma: PrismaClient, private model: Models) {}

  public create = async (client: IClientCreate): Promise<Client> => {
    return this.prisma[this.model].create({ data: client });
  };

  public getAll = async () => {
    return this.prisma[this.model].findMany();
  };

  public getOne = async (
    attribute: Partial<Client>
  ): Promise<Client | null> => {
    return this.prisma[this.model].findFirst({ where: attribute });
  };

  public updateOne = async (
    id: number,
    payload: IClientUpdate
  ): Promise<Client | null> => {
    return this.prisma[this.model].update({
      where: { id },
      data: payload,
    });
  };

  public deleteOne = async (id: number) => {
    return this.prisma[this.model].delete({ where: { id } });
  };

  // public deleteMany = async (list: string[]) => {
  //   return this.prisma[this.model].deleteMany({ where: { id: +[...list] } });
  // };
}
