import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import * as Styled from './styles';

export type SummaryProps = {
  title?: string;
};

export const Summary = ({ title }: SummaryProps) => {
  return (
    <Styled.Container>
      <div>
        <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          R$ 1000
        </strong>
      </div>

      <div>
        <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          R$ -2000
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
        </header>
        <strong>
          R$ 5000
        </strong>
      </div>
    </Styled.Container>
  );
};
