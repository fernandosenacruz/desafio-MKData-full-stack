import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SyntheticEvent, useContext, useRef, useState } from 'react';

import { getClients, updateClient } from '../api/api';
import { ClientsContext } from '../contexts/clients';
import useDialog from '../hooks/useDialog';
import { IClientResponse } from '../interfaces/Client';
import { ITargetEdit } from '../interfaces/ITarget';
import InputName from '../partials/InputName';
import Select from '../partials/Select';
import labels from '../utils/labels';
import verifyStatus from '../utils/verifyStatus';
import ResponseDialog from './ResponseDialog';

function FormEditClient({ setEdit }: { setEdit: Function }) {
  const [name, setName] = useState('');
  const [group, setGroup] = useState(labels.groups[0]);
  const [status, setStatus] = useState(labels.status[1]);

  const { openResponse, setOpenResponse } = useDialog();

  const { client, setClient, setClients, setResponse } =
    useContext(ClientsContext);

  const form = useRef();

  const handleChangeState = (
    target: HTMLInputElement | HTMLTextAreaElement,
    setState: Function
  ): void => {
    setState(target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & ITargetEdit;
    const name = target.name.value;
    const group = target.group.value;
    const status = target.status.value;

    const activate = verifyStatus(status);

    const updatedClient = (await updateClient(client.id.toString(), {
      name,
      group,
      activate,
    })) as unknown as IClientResponse;

    setResponse(updatedClient);

    const clients = await getClients();

    setClients(clients?.data?.clients);
    setOpenResponse(true);

    if (updatedClient.data) setClient(updatedClient.data.client);
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
      <ResponseDialog
        open={openResponse}
        setEdit={setEdit}
        component={'details'}
        setOpen={setOpenResponse}
        buttonText={'Ok'}
      />
    </>
  );
}

export default FormEditClient;
