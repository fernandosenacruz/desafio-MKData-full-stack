import { useState } from 'react';

function useDeleteDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    setOpen,
    handleClose,
    handleClickOpen,
  };
}

export default useDeleteDialog;
