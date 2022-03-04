import * as Styled from './styles';

type CardTable = {
  description: string;
  value: number;
  category: string;
  date: string;
}

export type TransactionTableProps = {
  data: CardTable[];
};

export const TransactionTable = ({
    data
  }: TransactionTableProps) => {
  return (
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(({
              description,
              value,
              category,
              date,
              }) => {
                return (
                  <tr>
                      <td>{description}</td>
                      <td className={value >= 0 ? 'deposit' : 'withdraw'}>R$ {value}</td>
                      <td>{category}</td>
                      <td>{date}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </Styled.Container>
  );
};
