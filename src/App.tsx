import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyles } from './styles/global-styles';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root'); // ./public/index é o id da div do app "root"

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
        <Dashboard />
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}/>
        <GlobalStyles />
      </TransactionsProvider>
    </div>
  );
}
