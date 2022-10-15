import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function InputIdentification({
  type,
  value,
  options,
  onChange,
  setChange,
}: {
  type: string;
  value: string;
  options: string[];
  onChange: Function;
  setChange: Function;
}) {
  return (
    <TextField
      name="identification"
      select
      label={type === 'CPF' ? 'RG' : 'IE'}
      value={value}
      onChange={({ target }) => onChange(target, setChange)}
      helperText="*RG (Registro Geral) *IE (Incrição Estadual)"
    >
      {options.map((option, index) => (
        <MenuItem key={option + index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
