import { PrismaClient } from '@prisma/client';

type Models = 'client';

export default class PrismaModel {
  constructor(private prisma: PrismaClient, private model: Models) {}

  public getAll = async () => {
    return this.prisma[this.model].findMany();
  };
}
