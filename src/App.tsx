// import { Heading } from './style'
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global-styles';


export const Heading = styled.h1`

`



export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyles />
    </div>
  );
}
