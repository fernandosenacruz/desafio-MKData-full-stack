import FormLogin from '../components/FormLogin';
import Box from '@mui/material/Box';

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3rem',
        padding: '1rem',
      }}
    >
      <FormLogin />
    </Box>
  );
}

export default Login;
