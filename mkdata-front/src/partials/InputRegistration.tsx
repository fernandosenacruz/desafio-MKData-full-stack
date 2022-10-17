import TextField from '@mui/material/TextField';

export default function InputRegistration({
  type,
  value,
  onChange,
  setChange,
}: {
  type: string;
  value: string;
  onChange: Function;
  setChange: Function;
}) {
  return (
    <TextField
      name="registration"
      label={type === 'CPF' ? 'RG' : 'IE'}
      value={value}
      required
      onChange={({ target }) => onChange(target, setChange)}
      helperText={
        type === 'CPF'
          ? '*Utilize dígitos e Órgão Expedidor'
          : '*Separe por pontos'
      }
      placeholder={
        type === 'CPF' ? 'Ex. 0.000.000 SDS-PE' : 'Ex. 388.108.598.269'
      }
    />
  );
}
