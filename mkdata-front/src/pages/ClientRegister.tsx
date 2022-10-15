import Box from '@mui/material/Box';
import FormRegisterClient from '../components/FormRegisterClient';

function ClientRegister() {
  return (
    <>
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
