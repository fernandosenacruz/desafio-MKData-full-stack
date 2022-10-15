import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { SyntheticEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ITargetLogin } from '../interfaces/ITarget';
import { fakeUser } from '../utils/fakeUser';

function FormLogin() {
  const [user, setUser] = useState(fakeUser.user);
  const [password, setPassword] = useState(fakeUser.password);
  const [showPassword, setShowPassword] = useState('password');

  const form = useRef();
  const navigate = useNavigate();

  const handleChangeState = (
    target: HTMLInputElement | HTMLTextAreaElement,
    setState: Function
  ): void => {
    setState(target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ITargetLogin;
    const user = target.user.value;
    const password = target.password.value;

    if (user === fakeUser.user && password === fakeUser.password) {
      navigate('/clients');
    }
  };

  return (
    <>
      <Box
        ref={form}
        component="form"
        id="form-login"
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
      >
        <Grid container spacing={2} m={1} direction="column">
          <Grid item xs={12} sm={10}>
            <TextField
              required
              name="user"
              label="Usuário"
              value={user}
              onChange={({ target }) => handleChangeState(target, setUser)}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              required
              name="password"
              label="Senha"
              type={showPassword}
              value={password}
              defaultValue={fakeUser.password}
              onChange={({ target }) => handleChangeState(target, setPassword)}
            />
            <Button
              type="button"
              onClick={() => {
                showPassword === 'password'
                  ? setShowPassword('text')
                  : setShowPassword('password');
              }}
            >
              {<VisibilityTwoToneIcon color="primary" />}
            </Button>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Button type="submit" color="success" variant="contained">
              Login
            </Button>
            <Button
              type="button"
              sx={{
                textTransform: 'none !important',
                fontStyle: 'italic',
                border: 'none',
                outline: 'none',
              }}
              onClick={() => window.location.reload()}
            >
              Esqueceu a senha?
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FormLogin;
