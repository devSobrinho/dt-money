import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles'

type HeaderProps = {
  onOpenNewTransactionModalOpen: () => void;
}

export const Header = ({onOpenNewTransactionModalOpen}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModalOpen}>Nova transação</button>
      </Content>
    </Container>
  )
}
