import { PrismaClient } from '@prisma/client';

import PrismaModel from './PrismaModel';

const prisma = new PrismaClient();

const ClientModel = new PrismaModel('client');

export default ClientModel;
