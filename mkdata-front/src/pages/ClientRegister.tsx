import Box from '@mui/material/Box';
import { useContext, useEffect } from 'react';

import FormRegisterClient from '../components/FormRegisterClient';
import Header from '../components/Header';
import { ClientsContext } from '../contexts/clients';

function ClientRegister() {
  const { response } = useContext(ClientsContext);

  useEffect(() => {}, [response]);

  return (
    <>
      <Header path={'/clients'} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5rem 0 3rem 0',
          padding: '1rem',
        }}
      >
        <FormRegisterClient />
      </Box>
    </>
  );
}

export default ClientRegister;
