import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getClients } from '../api/api';

import { IClient, IClientResponse } from '../interfaces/Client';
import { CLIENT_01, CLIENTS } from '../utils/client';

type ContextType = {
  client: IClient;
  setClient: Dispatch<SetStateAction<IClient>>;
  clients: IClient[];
  setClients: Dispatch<SetStateAction<IClient[]>>;
  response: IClientResponse;
  setResponse: Dispatch<SetStateAction<IClientResponse>>;
};

type Props = { children: ReactNode };

export const DEFAULT_VALUE = {
  client: CLIENT_01,
  clients: CLIENTS,
  response: {
    data: {
      client: CLIENT_01,
      message: '',
      statusCode: 0,
    },
  },
};

export const ClientsContext = createContext<ContextType>({
  client: DEFAULT_VALUE.client,
  setClient: (): void => {},
  clients: DEFAULT_VALUE.clients,
  setClients: (): void => {},
  response: DEFAULT_VALUE.response,
  setResponse: (): void => {},
});

const ClientsProvider: FC<Props> = ({ children }) => {
  const [client, setClient] = useState<IClient>(DEFAULT_VALUE.client);
  const [clients, setClients] = useState<IClient[]>(DEFAULT_VALUE.clients);
  const [response, setResponse] = useState<IClientResponse>(
    DEFAULT_VALUE.response
  );

  const fetchClients = async () => {
    const response = await getClients();

    setClients(response?.data.clients);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientsContext.Provider
      value={{
        client,
        setClient,
        clients,
        setClients,
        response,
        setResponse,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;
