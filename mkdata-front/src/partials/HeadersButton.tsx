import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import hideOnLogin from '../utils/hideOnLogin';

function HeadersButton({
  shouldHideOnLogin,
  path,
  size,
  color,
  label,
  text,
}: {
  shouldHideOnLogin: boolean;
  path: string;
  size: 'small' | 'medium' | 'large' | undefined;
  color:
    | 'error'
    | 'info'
    | 'inherit'
    | 'success'
    | 'warning'
    | 'primary'
    | 'secondary';
  label: string;
  text: string;
}) {
  const hide = hideOnLogin(shouldHideOnLogin);

  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <IconButton
        size={size}
        aria-label={label}
        aria-haspopup="true"
        color={color}
        sx={{ ...hide }}
      >
        {text}
      </IconButton>
    </Link>
  );
}

export default HeadersButton;
