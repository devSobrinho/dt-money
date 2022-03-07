import { useTransaction } from '../../hooks/useTransactions';
import * as Styled from './styles';


export const TransactionTable = () => {
  const { transactions } = useTransaction();

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
            transactions && transactions.map(({
              title,
              amount,
              type,
              category,
              createdAt,
              id
              }) => {
                return (
                  <tr key={id} className={id}>
                      <td>{title}</td>
                      <td className={type}>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(amount)}</td>
                      <td>{category}</td>
                      <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}</td>
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
