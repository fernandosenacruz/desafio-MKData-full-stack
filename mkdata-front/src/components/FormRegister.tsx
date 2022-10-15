import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { SyntheticEvent, useRef, useState } from 'react';

import { ITarget } from '../interfaces/ITarget';
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
        <TextField
          name="name"
          label="Nome"
          value={name}
          required
          onChange={({ target }) => handleChangeState(target, setName)}
        />
        <TextField
          name="type"
          select
          label="Tipo"
          value={type}
          onChange={({ target }) => handleChangeState(target, setType)}
          helperText="Selecione o tipo do cliente..."
        >
          {labels.types.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="taxpaperRegistration"
          label={type === 'CPF' ? 'CPF' : 'CNPJ'}
          value={taxpaperRegistration}
          required
          onChange={({ target }) =>
            handleChangeState(target, setTaxpaperRegistration)
          }
          helperText="*Utilize pontos e dígitos"
          placeholder={
            type === 'CPF' ? 'Ex. 000.000.008-00' : 'Ex. XX.XXX.XXX/0001-XX'
          }
        />
        <TextField
          name="identification"
          select
          label={type === 'CPF' ? 'RG' : 'IE'}
          value={identification}
          onChange={({ target }) =>
            handleChangeState(target, setIdentification)
          }
          helperText="*RG (Registro Geral) *IE (Incrição Estadual)"
        >
          {labels.identifications.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="registration"
          label={type === 'CPF' ? 'RG' : 'IE'}
          value={registration}
          required
          onChange={({ target }) => handleChangeState(target, setRegistration)}
          helperText={
            type === 'CPF'
              ? '*Utilize dígitos e Órgão Expedidor'
              : '*Separe por pontos'
          }
          placeholder={
            type === 'CPF' ? 'Ex. 0.000.000 SDS-PE' : 'Ex. 388.108.598.269'
          }
        />
        <TextField
          name="group"
          select
          label="Grupo"
          value={group}
          onChange={({ target }) => handleChangeState(target, setGroup)}
          helperText="Selecione o grupo a que pertence o cliente..."
        >
          {labels.groups.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="status"
          select
          label="Situação"
          value={status}
          onChange={({ target }) => handleChangeState(target, setStatus)}
          helperText="Selecione a situação do cliente..."
        >
          {labels.status.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" color="success" variant="contained">
          Cadastar
        </Button>
      </>
    </Box>
  );
}
