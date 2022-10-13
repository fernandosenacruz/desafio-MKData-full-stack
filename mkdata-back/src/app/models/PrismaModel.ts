import { Client, PrismaClient } from '@prisma/client';

import { IClientCreate, IClientUpdate } from '../interfaces/IClient';
import IContext from '../interfaces/IContext';

type Models = 'client';

export default class PrismaModel {
  constructor(private model: Models) {}

  public create = async (
    client: IClientCreate,
    ctx: IContext
  ): Promise<Client> => {
    return ctx.prisma[this.model].create({ data: client });
  };

  public getAll = async (ctx: IContext) => {
    return ctx.prisma[this.model].findMany();
  };

  public getOne = async (
    attribute: Partial<Client>,
    ctx: IContext
  ): Promise<Client | null> => {
    return ctx.prisma[this.model].findFirst({ where: attribute });
  };

  public updateOne = async (
    id: number,
    payload: IClientUpdate,
    ctx: IContext
  ): Promise<Client | null> => {
    return ctx.prisma[this.model].update({
      where: { id },
      data: payload,
    });
  };

  public deleteOne = async (id: number, ctx: IContext) => {
    return ctx.prisma[this.model].delete({ where: { id } });
  };

  // public deleteMany = async (list: string[]) => {
  //   return this.prisma[this.model].deleteMany({ where: { id: +[...list] } });
  // };
}
