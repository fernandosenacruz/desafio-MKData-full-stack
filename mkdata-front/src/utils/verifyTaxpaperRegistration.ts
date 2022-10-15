import cnpjFormater from './cnpjFormater';
import cpfFormater from './cpfFormater';

const verifyTaxpaperRegistration = (
  type: string,
  taxpaperRegistration: string
) => {
  return type === 'CPF'
    ? cpfFormater(taxpaperRegistration)
    : cnpjFormater(taxpaperRegistration);
};

export default verifyTaxpaperRegistration;
