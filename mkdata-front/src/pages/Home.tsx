import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';

import ClientCard from '../components/ClientCard';
import { ClientsContext } from '../contexts/clients';

function Home() {
  const { clients } = useContext(ClientsContext);

  useEffect(() => {}, [clients]);

  return (
    <>
      <Grid container spacing={4} p={2}>
        {clients?.data?.map((client) =>(
          <Grid item key={client.id} p={2} mb={2}>
            <ClientCard client={client} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home;
