import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionsProviderProps = {
  children: ReactNode,
}

type TransactionsContextData = {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=> {
    console.log(transactions);
  }, [transactions])

  useEffect(()=> {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const {transaction: transactionData} = response.data;


    setTransactions(prevState => [...prevState, transactionData]);

  }

  return <TransactionsContext.Provider value={{ transactions, createTransaction}}>{children}</TransactionsContext.Provider>
}

export const useTransaction = () => {
  const context = useContext(TransactionsContext);

  return context;
}
