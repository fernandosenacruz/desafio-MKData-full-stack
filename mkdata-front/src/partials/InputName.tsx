import TextField from '@mui/material/TextField';

export default function InputName({
  value,
  onChange,
  setChange,
}: {
  value: string;
  onChange: Function;
  setChange: Function;
}) {
  return (
    <TextField
      name="name"
      label="Nome"
      value={value}
      required
      onChange={({ target }) => onChange(target, setChange)}
    />
  );
}
