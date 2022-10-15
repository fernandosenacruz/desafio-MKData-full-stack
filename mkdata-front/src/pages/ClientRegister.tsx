import Box from '@mui/material/Box';

import FormRegisterClient from '../components/FormRegisterClient';
import Header from '../components/Header';

function ClientRegister() {
  return (
    <>
      <Header path={'/clients'} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '3rem',
          padding: '1rem',
        }}
      >
        <FormRegisterClient />
      </Box>
    </>
  );
}

export default ClientRegister;
