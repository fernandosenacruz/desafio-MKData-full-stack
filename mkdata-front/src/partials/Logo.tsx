import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import hideOnMobile from '../utils/hideOnMobile';

function LogoMKData({
  path,
  shouldHideOnMobile,
}: {
  path: string;
  shouldHideOnMobile: boolean | undefined;
}) {
  const hide = hideOnMobile(shouldHideOnMobile);

  return (
    <Typography noWrap component="div" sx={{ ...hide }}>
      <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src="https://mkdata.com.br/wp-content/themes/aoxdigital/assets/img/logo.jpg?id=120"
          alt="Logo MK data"
          width="80rem"
        />
      </Link>
    </Typography>
  );
}

export default LogoMKData;
