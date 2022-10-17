import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from 'react';

import { ClientsContext } from '../contexts/clients';
import HeadersButton from '../partials/HeadersButton';

export default function ResponseDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { response } = useContext(ClientsContext);

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-register"
      >
        <DialogTitle id="responsive-dialog-register">
          {<InfoTwoToneIcon color="info" />}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {response.data
              ? response.data?.message
              : response.response?.data.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {response.data && (
            <>
              <HeadersButton
                shouldHideOnLogin={false}
                path={'/clients'}
                size={'large'}
                color={'primary'}
                label={'return to clients'}
                text={'Retornar para lista de clientes'}
              />
              <Button
                onClick={() => window.location.reload()}
                autoFocus
                color="success"
              >
                Cadastrar novo cliente
              </Button>
            </>
          )}
          {!response.data && (
            <Button onClick={() => setOpen(false)} autoFocus color="error">
              Ajustar dados
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
