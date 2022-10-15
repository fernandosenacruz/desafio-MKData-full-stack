import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SyntheticEvent, useRef, useState } from 'react';

import ITarget from '../interfaces/ITarget';
import InputIdentification from '../partials/InputIdentification';
import InputName from '../partials/InputName';
import InputRegistration from '../partials/InputRegistration';
import InputTaxpaperRegistration from '../partials/InputTaxpaperRegistration';
import InputType from '../partials/InputType';
import Select from '../partials/Select';
import labels from '../utils/labels';

export default function FormRegister() {
  const [name, setName] = useState('');
  const [type, setType] = useState(labels.types[0]);
  const [registration, setRegistration] = useState('');
  const [group, setGroup] = useState(labels.groups[0]);
  const [status, setStatus] = useState(labels.status[1]);
  const [identification, setIdentification] = useState('');
  const [taxpaperRegistration, setTaxpaperRegistration] = useState('');

  const form = useRef();

  const handleChangeState = (
    target: HTMLInputElement | HTMLTextAreaElement,
    setState: Function
  ): void => {
    setState(target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ITarget;

    const name = target.name.value;
    const type = target.type.value;
    const group = target.group.value;
    const status = target.status.value;
    const registration = target.registration.value;
    const taxpaperRegistration = target.taxpaperRegistration.value;

    console.log({
      name,
      type,
      group,
      status,
      registration,
      taxpaperRegistration,
    });
  };

  return (
    <Box
      ref={form}
      component="form"
      id="form-register"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      autoComplete="off"
    >
      <>
        <InputName
          value={name}
          onChange={handleChangeState}
          setChange={setName}
        />
        <InputType
          value={type}
          options={labels.types}
          onChange={handleChangeState}
          setChange={setType}
        />
        <InputTaxpaperRegistration
          type={type}
          value={taxpaperRegistration}
          onChange={handleChangeState}
          setChange={setTaxpaperRegistration}
        />
        <InputIdentification
          type={type}
          value={identification}
          options={labels.identifications}
          onChange={handleChangeState}
          setChange={setIdentification}
        />
        <InputRegistration
          type={type}
          value={registration}
          onChange={handleChangeState}
          setChange={setRegistration}
        />
        <Select
          name={'group'}
          label={'Grupo'}
          value={group}
          options={labels.groups}
          onChange={handleChangeState}
          setChange={setGroup}
          helperText={'Selecione o grupo a que pertence o cliente...'}
        />
        <Select
          name={'status'}
          label={'Situação'}
          value={status}
          options={labels.status}
          onChange={handleChangeState}
          setChange={setStatus}
          helperText={'Selecione a situação do cliente...'}
        />
        <Button type="submit" color="success" variant="contained">
          Cadastar
        </Button>
      </>
    </Box>
  );
}
