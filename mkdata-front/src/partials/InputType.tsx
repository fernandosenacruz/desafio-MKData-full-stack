import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function InputType({
  value,
  options,
  onChange,
  setChange,
}: {
  value: string;
  options: string[];
  onChange: Function;
  setChange: Function;
}) {
  return (
    <TextField
      name="type"
      select
      label="Tipo"
      value={value}
      onChange={({ target }) => onChange(target, setChange)}
      helperText="Selecione o tipo do cliente..."
    >
      {options.map((option, index) => (
        <MenuItem key={option + index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
