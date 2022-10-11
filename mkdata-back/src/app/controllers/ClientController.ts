import { NextFunction, Request, Response } from 'express';

import StatusCodes from '../helpers/others/StatusCodes';
import { ITypedResponse } from '../interfaces';
import { IClientResponse } from '../interfaces/IClient';
import ClientService from '../services/ClientService';

export default class ClientCrontroller {
  constructor(private clienteService = new ClientService()) {}

  public getAll = async (
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const response = await this.clienteService.getAll();

    return res.status(StatusCodes.OK).json(response);
  };
}
