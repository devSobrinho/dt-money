import { Summary } from '../Summary';
import { TransactionTable, TransactionTableProps } from '../TransactionTable';
import * as Styled from './styles';

const data = [
  {
    description: 'descricao 1',
      value: 2000,
      category: 'categoria 1',
      date: new Date().toUTCString(),
  },
  {
    description: 'descricao 2',
      value: -2000,
      category: 'categoria 2',
      date: new Date().toUTCString(),
  }
];

export type DashboardProps = {
  title?: string;
};

export const Dashboard = ({ title }: DashboardProps) => {
  return (
    <Styled.Container>
      <Summary />
      <TransactionTable data={data} />
    </Styled.Container>
  );
};
