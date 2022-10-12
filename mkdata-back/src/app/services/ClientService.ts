import ERRORS from '../helpers/errors/error';
import MESSAGES from '../helpers/others/messages';
import StatusCodes from '../helpers/others/StatusCodes';
import {
  IClient,
  IClientResponse,
  IClientsResponse,
} from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';
import { IClientModel } from './../interfaces/IClientModel';

export default class ClientService {
  constructor(private clientModel: IClientModel = ClientModel) {}

  public create = async (client: IClient): Promise<IClientResponse> => {
    const clientExists = await this.clientModel.get(client.registration);

    if (clientExists) throw ERRORS.CLIENT.CLIENT_EXISTS;

    const newClient = await this.clientModel.create(client);

    return {
      message: MESSAGES.CLIENTS.CREATED,
      statusCode: StatusCodes.CREATED,
      client: newClient,
    };
  };

  public getAll = async (): Promise<IClientsResponse> => {
    const clients = await this.clientModel.getAll();

    return {
      message: MESSAGES.CLIENTS.FOUND,
      statusCode: StatusCodes.OK,
      clients,
    };
  };

  // public get = async (attribute) => {};
}
