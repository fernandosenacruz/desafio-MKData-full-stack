import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';

import HeadersButton from '../partials/HeadersButton';
import LogoMKData from '../partials/Logo';
import Logout from '../partials/Logout';

function Header({ path }: { path: string }) {
  const hide = path === '/clients' ? false : true;

  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar>
          <LogoMKData path={path} shouldHideOnMobile={true} />
          <Box sx={{ flexGrow: 1 }}>
            <HeadersButton
              shouldHideOnLogin={hide}
              path={'/clients'}
              size={'small'}
              color={'inherit'}
              label={'clients'}
              text={'Clientes'}
            />
            <HeadersButton
              shouldHideOnLogin={hide}
              path={'/client/register'}
              size={'small'}
              color={'success'}
              label={'regiter'}
              text={'Cadastrar Cliente'}
            />
          </Box>
          <Logout shouldHideOnMobile={true} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
