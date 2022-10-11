import { z } from 'zod';

import StatusCodes from '../helpers/others/StatusCodes';
import { ClientCreateSchema } from '../schemas/clients';

type IClientCreate = z.infer<typeof ClientCreateSchema>;

interface IClient {
  name: string;
  type: string;
  taxpaperRegistration: string;
  registration: string;
  group: string;
  activate: boolean;
}

interface IClientResponse {
  client?: IClient;
  message: string;
  statusCode: StatusCodes;
}

interface IClientsResponse {
  clients: IClient[];
  message: string;
  statusCode: StatusCodes;
}

export { IClient, IClientCreate, IClientResponse, IClientsResponse };
