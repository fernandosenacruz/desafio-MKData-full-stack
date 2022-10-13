import { Client } from '@prisma/client';
import { z } from 'zod';

import StatusCodes from '../helpers/others/StatusCodes';
import { ClientCreateSchema, ClienteUpdateSchema } from '../schemas/clients';

type IClientCreate = z.infer<typeof ClientCreateSchema>;

type IClientUpdate = z.infer<typeof ClienteUpdateSchema>;

interface IClient {
  name: string;
  type: string;
  taxpaperRegistration: string;
  registration: string;
  group: string;
  activate: boolean;
}

interface IClientResponse {
  client?: Client | null;
  message: string;
  statusCode: StatusCodes;
}

interface IClientsResponse {
  clients: IClient[];
  message: string;
  statusCode: StatusCodes;
}

export {
  IClient,
  IClientCreate,
  IClientUpdate,
  IClientResponse,
  IClientsResponse,
};
