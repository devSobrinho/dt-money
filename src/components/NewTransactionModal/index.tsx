import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransaction } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import * as Styled from './styles';

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};


export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const {createTransaction} = useTransaction();


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      amount: value,
      category,
      title,
      type: type,
    });


    setTitle('');
    setValue(0);
    setCategory('');
    setType('');
    onRequestClose();

    // const errors = [];
    // if(!inputTitle) {
    //   errors.push({id: 'title', message: 'Campo título precisa ser preenchido'});
    // }
    // if(!inputPrice.current?.value) {
    //   errors.push({id: 'price', message: 'Campo price deve ter valor'});
    // }
    // if(!inputCategory.current?.value) {
    //   errors.push({id: 'category', message: 'Campo category precisa ser preenchido'});
    // }

    // if(errors.length > 0) {
    //   return;
    // }

  }

// Implementação para caso feche o modal, os campos voltem ao valor inicial
  // useEffect(()=> {
  //   if (isOpen === false) {
  //     setTitle('');
  //     setValue(0);
  //     setCategory('');
  //     setType('');
  //   }
  // },[isOpen]);

  return (
    <Styled.Container>
      <Modal
          isOpen={isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={onRequestClose}
          // style={customStyles}
          contentLabel="Modal new transaction"
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          style={{}}
        >
          <button onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal"/>
          </button>
          <h2>Cadastrar Transação</h2>
          <Styled.Form method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="Valor"
              value={value}
              onChange={(e)=> setValue(e.target.valueAsNumber)}
            />
            <Styled.TransactionTypeContainer >
              <Styled.RadioBox
                type="button"
                onClick={()=> {setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor="green"
              >
                <img src={incomeImg} alt="Seta para cima" />
                <span>Entrada</span>
              </Styled.RadioBox>
              <Styled.RadioBox
                type="button"
                onClick={()=> {setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor="red"
              >
                <img src={outcomeImg} alt="Seta para baixo" />
                <span>Saída</span>
              </Styled.RadioBox>
            </Styled.TransactionTypeContainer>
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
            />
            <input type="submit" value="Cadastrar" />
          </Styled.Form>
        </Modal>
    </Styled.Container>
  );
};
