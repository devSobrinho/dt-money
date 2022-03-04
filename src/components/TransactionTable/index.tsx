import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as Styled from './styles';

type CardTransaction = {
  description: string;
  value: number;
  category: string;
  date: string;
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<CardTransaction[]>([]);

  useEffect(()=> {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

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

          {
            !transactions.length &&
            <tr>
              <td>Não há transações</td>
            </tr>
          }
        </tbody>
      </table>
    </Styled.Container>
  );
};
