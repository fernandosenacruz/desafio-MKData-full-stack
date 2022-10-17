import FormLogin from '../components/FormLogin';
import Box from '@mui/material/Box';
import Header from '../components/Header';

function Login() {
  return (
    <>
      <Header path={'/'} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
          marginTop: '5rem',
          opacity: '0.9',
          padding: '1rem',
          backgroundImage:
            'url(https://mkdata.com.br/wp-content/themes/aoxdigital/assets/img/banner_01.jpg)',
          backgroundSize: 'cover',
          height: '80vh',
        }}
      >
        <FormLogin />
      </Box>
    </>
  );
}

export default Login;
