export interface ILabels {
  types: string[];
  groups: string[];
  status: string[];
  identifications: string[];
}

const labels: ILabels = {
  types: ['CPF', 'CNPJ'],
  identifications: ['RG', 'IE'],
  status: ['Ativo', 'Invativo'],
  groups: ['SAÚDE', 'EMPRESARIAL', 'CONCULTORIA'],
};

export default labels;
