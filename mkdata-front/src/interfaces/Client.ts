export interface IClient {
  id: number;
  name: string;
  type: string;
  taxpaperRegistration: string;
  group: string;
  registration: string;
  activate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IClientCreate {
  name: string;
  type: string;
  taxpaperRegistration: string;
  group: string;
  registration: string;
  activate: boolean;
}

export interface IClientUpdate {
  name: string;
  type: string;
  group: string;
  activate: boolean;
}

export interface IClientResponse {
  response?: {
    data: {
      message: string;
      statuCode: number;
    };
  };
  data?: {
    client: IClient;
    message: string;
    statusCode: number;
  };
}
