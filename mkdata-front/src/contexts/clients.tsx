import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import { IClient, IClients } from '../interfaces/Client';
import { CLIENT_01, CLIENTS } from '../utils/client';

type ContextType = {
  client: IClient;
  setClient: Dispatch<SetStateAction<IClient>>;
  clients: IClients;
  setClients: Dispatch<SetStateAction<IClients>>;
};

type Props = { children: ReactNode };

export const DEFAULT_VALUE = {
  client: CLIENT_01,
  clients: {
    data: CLIENTS,
  },
};

export const ClientsContext = createContext<ContextType>({
  client: DEFAULT_VALUE.client,
  setClient: (): void => {},
  clients: DEFAULT_VALUE.clients,
  setClients: (): void => {},
});

const ClientsProvider: FC<Props> = ({ children }) => {
  const [client, setClient] = useState<IClient>(DEFAULT_VALUE.client);
  const [clients, setClients] = useState<IClients>(DEFAULT_VALUE.clients);

  return (
    <ClientsContext.Provider
      value={{
        client,
        setClient,
        clients,
        setClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;
