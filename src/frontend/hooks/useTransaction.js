import { useState } from 'react';

const useTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return { transactions, addTransaction };
};

export default useTransaction;
