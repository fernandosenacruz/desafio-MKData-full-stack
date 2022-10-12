import { NextFunction, Request, Response } from 'express';

import StatusCodes from '../helpers/others/StatusCodes';
import { ITypedRequest, ITypedResponse } from '../interfaces';
import { IClientCreate, IClientResponse } from '../interfaces/IClient';
import ClientService from '../services/ClientService';

export default class ClientCrontroller {
  constructor(private clienteService = new ClientService()) {}

  public create = async (
    req: ITypedRequest<IClientCreate>,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const response = await this.clienteService.create(req.body);

    return res.status(StatusCodes.CREATED).json(response);
  };

  public getAll = async (
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const response = await this.clienteService.getAll();

    return res.status(StatusCodes.OK).json(response);
  };
}
