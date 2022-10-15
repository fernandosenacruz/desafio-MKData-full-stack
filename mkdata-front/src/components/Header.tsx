import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import { Link } from 'react-router-dom';

import LogoMKData from '../partials/Logo';
import Logout from '../partials/Logout';

function Header({ path }: { path: string }) {
  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar>
          <LogoMKData path={path} />
          <Box>
            <Link
              to="/clients"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <IconButton
                size="small"
                aria-label="Home"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                Home
              </IconButton>
            </Link>
            <Logout />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
