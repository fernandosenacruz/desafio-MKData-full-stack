import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import useDeleteDialog from '../hooks/useDeleteDialog';
import { IClient } from '../interfaces/Client';
import DeleteDialog from './DeleteDialog';

const card = (
  client: IClient,
  open: boolean,
  setOpen: Function,
  setEdit: Function
) => {
  return (
    <>
      <CardContent
        sx={{
          backgroundColor: '#c9d6d8bf',
        }}
      >
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
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#d2e4d9b0',
        }}
      >
        <Button size="large" color="success" onClick={() => setEdit(true)}>
          {<EditTwoToneIcon />}
        </Button>
        <Button size="large" color="error" onClick={() => setOpen(true)}>
          {<DeleteForeverTwoToneIcon />}
        </Button>
      </CardActions>
      <DeleteDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default function CardDetails({
  client,
  setEdit,
}: {
  client: IClient;
  setEdit: Function;
}) {
  const { open, setOpen } = useDeleteDialog();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card variant="outlined">
        {card(client, open, setOpen, setEdit)}
      </Card>
    </Box>
  );
}
