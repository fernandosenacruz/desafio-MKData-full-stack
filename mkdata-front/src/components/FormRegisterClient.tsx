import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SyntheticEvent, useRef, useState } from 'react';

import useAdjustmentDialog from '../hooks/useAdjustmentDialog';
import { ITargetRegister } from '../interfaces/ITarget';
import InputName from '../partials/InputName';
import InputRegistration from '../partials/InputRegistration';
import InputTaxpaperRegistration from '../partials/InputTaxpaperRegistration';
import InputType from '../partials/InputType';
import Select from '../partials/Select';
import labels from '../utils/labels';
import verifyStatus from '../utils/verifyStatus';
import verifyTaxpaperRegistration from '../utils/verifyTaxpaperRegistration';
import AdjustmentDialog from './AdjustmentDialog';

function FormRegisterClient() {
  const [name, setName] = useState('');
  const [type, setType] = useState(labels.types[0]);
  const [registration, setRegistration] = useState('');
  const [group, setGroup] = useState(labels.groups[0]);
  const [status, setStatus] = useState(labels.status[1]);
  const [taxpaperRegistration, setTaxpaperRegistration] = useState('');
  const { open, setOpen } = useAdjustmentDialog();

  const form = useRef();

  const handleChangeState = (
    target: HTMLInputElement | HTMLTextAreaElement,
    setState: Function
  ): void => {
    setState(target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ITargetRegister;

    const name = target.name.value;
    const type = target.type.value;
    const group = target.group.value;
    const status = target.status.value;
    const registration = target.registration.value;
    const taxpaperRegistration = target.taxpaperRegistration.value;

    const isValid = verifyTaxpaperRegistration(type, taxpaperRegistration);
    const activate = verifyStatus(status);

    !isValid
      ? setOpen(true)
      : console.log({
          name,
          type,
          group,
          registration,
          isValid,
          activate,
        });
  };

  return (
    <>
      <Box
        ref={form}
        component="form"
        id="form-register"
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: { xs: '30ch', md: '50ch', lg: '70ch' },
          },
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
          <InputType
            value={type}
            options={labels.types}
            onChange={handleChangeState}
            setChange={setType}
          />
        </Grid>
        <Grid item xs={12}>
          <InputTaxpaperRegistration
            type={type}
            value={taxpaperRegistration}
            onChange={handleChangeState}
            setChange={setTaxpaperRegistration}
          />
        </Grid>
        <Grid item xs={12}>
          <InputRegistration
            type={type}
            value={registration}
            onChange={handleChangeState}
            setChange={setRegistration}
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
          <Button type="submit" color="success" variant="contained">
            Cadastar
          </Button>
        </Grid>
      </Box>
      <AdjustmentDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default FormRegisterClient;
