import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <Link to="/">
      <Button>
        <LogoutTwoToneIcon color="error" />
      </Button>
    </Link>
  );
}

export default Logout;
