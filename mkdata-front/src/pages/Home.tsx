import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useContext, useEffect } from 'react';

import ClientCard from '../components/ClientCard';
import { ClientsContext } from '../contexts/clients';

function Home() {
  const { clients, setClient } = useContext(ClientsContext);

  useEffect(() => {}, [clients]);

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
        <Grid container spacing={4} p={2}>
          {clients?.data?.map((client) => (
            <Grid item key={client.id} p={2} mb={2}>
              <ClientCard client={client} setClient={setClient} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
