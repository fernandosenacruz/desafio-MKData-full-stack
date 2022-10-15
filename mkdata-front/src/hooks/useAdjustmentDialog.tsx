import { useState } from 'react';

function useAdjustmentDialog() {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen,
  };
}

export default useAdjustmentDialog;
