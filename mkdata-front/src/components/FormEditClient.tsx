import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SyntheticEvent, useRef, useState } from 'react';

import { ITargetEdit } from '../interfaces/ITarget';
import InputName from '../partials/InputName';
import Select from '../partials/Select';
import labels from '../utils/labels';

function FormEditClient({ setEdit }: { setEdit: Function }) {
  const [name, setName] = useState('');
  const [group, setGroup] = useState(labels.groups[0]);
  const [status, setStatus] = useState(labels.status[1]);

  const form = useRef();

  const handleChangeState = (
    target: HTMLInputElement | HTMLTextAreaElement,
    setState: Function
  ): void => {
    setState(target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ITargetEdit;
    const name = target.name.value;
    const group = target.group.value;
    const status = target.status.value;

    console.log({ name, group, status });

    setEdit(false);
  };

  return (
    <>
      <Box
        ref={form}
        component="form"
        id="form-edit"
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        autoComplete="off"
      >
        <Grid item xs={12}>
          <InputName
            value={name}
            onChange={handleChangeState}
            setChange={setName}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name={'group'}
            label={'Grupo'}
            value={group}
            options={labels.groups}
            onChange={handleChangeState}
            setChange={setGroup}
            helperText={'Selecione o grupo a que pertence o cliente...'}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name={'status'}
            label={'Situação'}
            value={status}
            options={labels.status}
            onChange={handleChangeState}
            setChange={setStatus}
            helperText={'Selecione a situação do cliente...'}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="button"
            color="error"
            variant="contained"
            onClick={() => setEdit(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" color="success" variant="contained">
            Atualizar
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default FormEditClient;
