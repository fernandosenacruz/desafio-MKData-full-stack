import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from 'react';

import { deleteClient, getClients } from '../api/api';
import { ClientsContext } from '../contexts/clients';
import useDialog from '../hooks/useDialog';
import { IClient, IClientResponse } from '../interfaces/Client';
import ResponseDialog from './ResponseDialog';

export default function DeleteDialog({
  open,
  client,
  setOpen,
}: {
  open: boolean;
  client: IClient;
  setOpen: Function;
}) {
  const theme = useTheme();

  const { setClient, setClients, setResponse } = useContext(ClientsContext);
  const { openResponse, setOpenResponse } = useDialog();

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDelete = async (id: string) => {
    const deletedClient = (await deleteClient(
      id
    )) as unknown as IClientResponse;

    setOpen(false);
    setResponse(deletedClient);
    setOpenResponse(true);

    if (deletedClient.data) setClient(deletedClient.data.client);

    const clients = await getClients();

    setClients(clients?.data?.clients);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-delete"
      >
        <DialogTitle id="responsive-dialog-delete">
          {<NewReleasesTwoToneIcon color="error" />}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {client?.name} será apagado permanentemente! Esta ação não poderá ser
            desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)} color="success">
            Cancelar
          </Button>
          <Button
            autoFocus
            color="error"
            onClick={() => handleDelete(client.id.toString())}
          >
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
      <ResponseDialog
        open={openResponse}
        component={'details'}
        setOpen={setOpenResponse}
        buttonText={'Ok'}
      />
    </>
  );
}
