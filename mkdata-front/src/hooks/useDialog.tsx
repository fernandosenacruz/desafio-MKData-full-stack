import { useState } from 'react';

function useDialog() {
  const [open, setOpen] = useState(false);
  const [openResponse, setOpenResponse] = useState(false);

  return {
    open,
    setOpen,
    openResponse,
    setOpenResponse,
  };
}

export default useDialog;
