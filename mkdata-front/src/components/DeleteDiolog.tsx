import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DeleteDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-delete"
      >
        <DialogTitle id="responsive-dialog-delete"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você está preste a apagar permanentemente este cliente! A ação não
            poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)} color="success">
            Cancelar
          </Button>
          <Button onClick={() => setOpen(false)} autoFocus color="error">
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
