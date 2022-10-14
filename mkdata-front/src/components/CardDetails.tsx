import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IClient } from '../interfaces/Client';

const card = (client: IClient) => {
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {client.name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {client.type}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          {client.taxpaperRegistration}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {client.registration}
        </Typography>
        <Typography variant="overline" color="text.primary">
          {client.group}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Situação: {client.activate ? 'Ativo' : 'Inativo'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );
};

export default function CardDetails({ client }: { client: IClient }) {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Card variant="outlined">{card(client)}</Card>
    </Box>
  );
}
