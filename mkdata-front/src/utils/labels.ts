export interface ILabels {
  types: string[];
  groups: string[];
  status: string[];
}

const labels: ILabels = {
  types: ['CPF', 'CNPJ'],
  status: ['Ativo', 'Inativo'],
  groups: ['SAÚDE', 'EMPRESARIAL', 'CONSULTORIA'],
};

export default labels;
