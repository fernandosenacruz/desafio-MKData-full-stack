export interface ILabels {
  types: string[];
  groups: string[];
  status: string[];
}

const labels: ILabels = {
  types: ['CPF', 'CNPJ'],
  status: ['Ativo', 'Invativo'],
  groups: ['SAÚDE', 'EMPRESARIAL', 'CONCULTORIA'],
};

export default labels;
