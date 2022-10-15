import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

export default function AdjustmentDialog({
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
        aria-labelledby="responsive-dialog-adjustment"
      >
        <DialogTitle id="responsive-dialog-adjustment">
          Formato do CPF ou CNPJ inválido!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            CPF no formato "99999999899" sem letras, espaços ou dígitos.
            CNPJ no formato "99999999899891" sem letras, espaços ou dígitos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} autoFocus color="warning">
            {<CheckCircleTwoToneIcon/>}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
