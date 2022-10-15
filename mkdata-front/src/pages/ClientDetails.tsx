import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import CardDetails from '../components/CardDetails';
import FormEditClient from '../components/FormEditClient';
import { ClientsContext } from '../contexts/clients';

function ClientDetails() {
  const { client } = useContext(ClientsContext);
  const [edit, setEdit] = useState(false);

  useEffect(() => {}, [client]);

  return (
    <>
      <Grid container spacing={1} m={1}>
        <Grid item xs={12} md={6}>
          <CardDetails client={client} setEdit={setEdit} />
        </Grid>
        <Grid item xs={12} md={6}>
          {edit && <FormEditClient setEdit={setEdit} />}
        </Grid>
      </Grid>
    </>
  );
}

export default ClientDetails;
