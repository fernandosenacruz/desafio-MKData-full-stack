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
  setEdit,
  component,
  buttonText,
}: {
  open: boolean;
  setOpen: Function;
  setEdit?: Function;
  component: string;
  buttonText: string;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { response } = useContext(ClientsContext);

  const onClickFunction = (str: string) => {
    if (str === 'register') {
      window.location.reload()
    } else if (setEdit) {
      setOpen(false);
      setEdit(false);
    }

  }
  
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={`responsive-dialog-${component}`}
      >
        <DialogTitle id={`responsive-dialog-${component}`}>
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
                size={'small'}
                color={'primary'}
                label={'return to clients'}
                text={'Retornar para lista de clientes'}
              />
              <Button
                onClick={() => onClickFunction(component)}
                autoFocus
                color="success"
              >
                {buttonText}
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
