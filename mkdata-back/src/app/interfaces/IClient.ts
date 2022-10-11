import { z } from 'zod';

import StatusCodes from '../helpers/others/StatusCodes';
import { ClientCreateSchema } from '../schemas/clients';

type IClientCreate = z.infer<typeof ClientCreateSchema>;

interface IClient {
  name: string;
  type: string;
  taxpaperRegistration: string;
  restriction: string;
  group: string;
  activate: boolean;
}

interface ICustomerResponse {
  client?: IClient;
  message: string;
  statusCode: StatusCodes;
}

export {
  IClientCreate,
  IClient,
  ICustomerResponse,
};
