import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';

import CardDetails from '../components/CardDetails';
import { ClientsContext } from '../contexts/clients';

function ClientDetails() {
  const { client } = useContext(ClientsContext);

  useEffect(() => {}, [client]);

  return (
    <>
      <Grid container spacing={1} m={1}>
        <Grid item xs={12} md={6}>
          <CardDetails client={client} />
        </Grid>
      </Grid>
    </>
  );
}

export default ClientDetails;
