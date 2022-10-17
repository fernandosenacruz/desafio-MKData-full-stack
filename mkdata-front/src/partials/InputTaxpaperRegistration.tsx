import TextField from '@mui/material/TextField';

export default function InputTaxpaperRegistration({
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
      name="taxpaperRegistration"
      label={type === 'CPF' ? 'CPF' : 'CNPJ'}
      value={value}
      required
      onChange={({ target }) => onChange(target, setChange)}
      helperText="*NÃO utilize pontos ou dígitos"
      placeholder={type === 'CPF' ? 'Ex. 99999999899' : 'Ex. 00000099000100'}
    />
  );
}
