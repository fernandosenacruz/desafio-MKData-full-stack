import { NextFunction, Request, Response } from 'express';

import StatusCodes from '../helpers/others/StatusCodes';
import { ITypedRequest, ITypedResponse } from '../interfaces';
import {
  IClientCreate,
  IClientResponse,
  IClientsResponse,
  IClientUpdate,
} from '../interfaces/IClient';
import ClientService from '../services/ClientService';

export default class ClientCrontroller {
  constructor(private clientService = new ClientService()) {}

  public create = async (
    req: ITypedRequest<IClientCreate>,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const response = await this.clientService.create(req.body);

    return res.status(StatusCodes.CREATED).json(response);
  };

  public getAll = async (
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientsResponse>> => {
    const response = await this.clientService.getAll();

    return res.status(StatusCodes.OK).json(response);
  };

  public getById = async (
    req: ITypedRequest<any, any, { id: string }>,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const { id } = req.params;

    const response = await this.clientService.getById(id);

    return res.status(StatusCodes.OK).json(response);
  };

  public updateOne = async (
    req: ITypedRequest<IClientUpdate, any, { id: string }>,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const { id } = req.params;
    const payload = req.body;

    const response = await this.clientService.updateOne(id, payload);

    return res.status(StatusCodes.OK).json(response);
  };

  public deleteOne = async (
    req: ITypedRequest<any, any, { id: string }>,
    res: Response,
    _next: NextFunction
  ): Promise<ITypedResponse<IClientResponse>> => {
    const { id } = req.params;

    const response = await this.clientService.deleteOne(id);

    return res.status(StatusCodes.OK).json(response);
  };
}
