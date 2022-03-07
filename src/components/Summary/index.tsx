import { useTransaction } from '../../hooks/useTransactions';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import * as Styled from './styles';


export const Summary = () => {
  const { transactions } = useTransaction();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }
    if(transaction.type === 'withdraw') {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposits: 0,
    withdraws:0,
    total:0,
  })

  return (
    <Styled.Container>

      <div>
        <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-Br', {
            style: "currency",
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-Br', {
            style: "currency",
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: "currency",
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Styled.Container>
  );
};
