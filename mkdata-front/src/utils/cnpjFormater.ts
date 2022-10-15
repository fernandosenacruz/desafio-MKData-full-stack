const cnpjFormater = (cpf: string) => {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length === 14)
    return cpf.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1 $2 $3/$4-$5'
    );
};

export default cnpjFormater;
