import MESSAGES from '../helpers/others/messages';
import StatusCodes from '../helpers/others/StatusCodes';
import { IClientsResponse } from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';
import { IClientModel } from './../interfaces/IClientModel';

export default class ClientService {
  constructor(private clientModel: IClientModel = ClientModel) {}

  public getAll = async (): Promise<IClientsResponse> => {
    const clients = await this.clientModel.getAll();

    return {
      message: MESSAGES.CLIENTS.FOUND,
      statusCode: StatusCodes.OK,
      clients,
    };
  };
}
