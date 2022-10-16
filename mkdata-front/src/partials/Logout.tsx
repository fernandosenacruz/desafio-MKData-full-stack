import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import hideOnMobile from '../utils/hideOnMobile';

function Logout({
  shouldHideOnMobile,
}: {
  shouldHideOnMobile: boolean | undefined;
}) {
  const hide = hideOnMobile(shouldHideOnMobile);

  return (
    <Link to="/">
      <Button sx={{ ...hide }}>
        <LogoutTwoToneIcon color="error" />
      </Button>
    </Link>
  );
}

export default Logout;
