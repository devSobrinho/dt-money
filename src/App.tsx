// import { Heading } from './style'
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global-styles';


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
      <Header onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
      <Dashboard />
      <Modal
          isOpen={isNewTransactionModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleCloseNewTransactionModalOpen}
          // style={customStyles}
          contentLabel="Modal new transaction"
        >
          <h2>Cadastrar Transação</h2>
          <button onClick={handleCloseNewTransactionModalOpen}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      <GlobalStyles />
    </div>
  );
}
