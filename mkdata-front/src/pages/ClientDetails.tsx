import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';

import CardDetails from '../components/CardDetails';
import { ClientsContext } from '../contexts/clients';

function ClientDetails() {
  const { client } = useContext(ClientsContext);

  useEffect(() => {}, [client]);

  return (
    <>
      <Grid container>
        <Grid item>
          <CardDetails client={client} />
        </Grid>
      </Grid>
    </>
  );
}

export default ClientDetails;
