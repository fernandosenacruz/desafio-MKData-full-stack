import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function Select({
  name,
  label,
  value,
  options,
  onChange,
  setChange,
  helperText,
}: {
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: Function;
  setChange: Function;
  helperText: string;
}) {
  return (
    <TextField
      name={name}
      select
      label={label}
      value={value}
      onChange={({ target }) => onChange(target, setChange)}
      helperText={helperText}
    >
      {options.map((option, index) => (
        <MenuItem key={option + index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
