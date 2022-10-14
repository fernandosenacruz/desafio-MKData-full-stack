import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { IClient } from '../interfaces/Client';

const card = (client: IClient, setClient: Function) => {
  return (
    <>
      <Link
        to={`/client/${client.id}`}
        onClick={() => setClient(client)}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            {client.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {client.type}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {client.taxpaperRegistration}
          </Typography>
        </CardContent>
      </Link>
    </>
  );
};

export default function ClientCard({
  client,
  setClient,
}: {
  client: IClient;
  setClient: Function;
}) {
  return (
    <Box>
      <Card variant="outlined">{card(client, setClient)}</Card>
    </Box>
  );
}
