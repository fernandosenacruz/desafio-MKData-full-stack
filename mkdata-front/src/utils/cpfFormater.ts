const cpfFormater = (cpf: string) => {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length === 11)
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export default cpfFormater;
