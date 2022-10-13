import ERRORS from '../helpers/errors/error';
import MESSAGES from '../helpers/others/messages';
import StatusCodes from '../helpers/others/StatusCodes';
import {
  IClient,
  IClientResponse,
  IClientsResponse,
  IClientUpdate,
} from '../interfaces/IClient';
import IContext from '../interfaces/IContext';
import ClientModel from '../models/ClientModel';
import { IClientModel } from './../interfaces/IClientModel';

export default class ClientService {
  constructor(private clientModel: IClientModel = ClientModel) {}

  public create = async (
    client: IClient,
    ctx: IContext
  ): Promise<IClientResponse> => {
    const clientExists = await this.clientModel.getOne(
      {
        taxpaperRegistration: client.taxpaperRegistration,
      },
      ctx
    );

    if (clientExists) throw ERRORS.CLIENT.CLIENT_EXISTS;

    const newClient = await this.clientModel.create(client, ctx);

    return {
      message: MESSAGES.CLIENTS.CREATED,
      statusCode: StatusCodes.CREATED,
      client: newClient,
    };
  };

  public getAll = async (ctx: IContext): Promise<IClientsResponse> => {
    const clients = await this.clientModel.getAll(ctx);

    return {
      message: MESSAGES.CLIENTS.FOUND,
      statusCode: StatusCodes.OK,
      clients,
    };
  };

  public getById = async (
    clientId: string,
    ctx: IContext
  ): Promise<IClientResponse> => {
    const client = await this.clientModel.getOne({ id: +clientId }, ctx);

    if (!client) throw ERRORS.CLIENT.NOT_FOUND;

    return {
      message: MESSAGES.CLIENTS.FOUND,
      statusCode: StatusCodes.OK,
      client,
    };
  };

  public updateOne = async (
    clientId: string,
    payload: IClientUpdate,
    ctx: IContext
  ): Promise<IClientResponse> => {
    const client = await this.clientModel.getOne({ id: +clientId }, ctx);

    if (!client) throw ERRORS.CLIENT.NOT_FOUND;

    const updatedClient = await this.clientModel.updateOne(
      +clientId,
      payload,
      ctx
    );

    return {
      message: MESSAGES.CLIENTS.UPDATAED,
      statusCode: StatusCodes.OK,
      client: updatedClient,
    };
  };

  public deleteOne = async (
    clientId: string,
    ctx: IContext
  ): Promise<IClientResponse> => {
    const client = await this.clientModel.getOne({ id: +clientId }, ctx);

    if (!client) throw ERRORS.CLIENT.NOT_FOUND;

    return {
      message: MESSAGES.CLIENTS.DELETED,
      statusCode: StatusCodes.OK,
    };
  };
}
