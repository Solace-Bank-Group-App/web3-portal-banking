import React from 'react';
import useTransaction from '../../hooks/useTransaction';
import './Balance.css';

const Balance = () => {
  const { transactions } = useTransaction();
  const balance = transactions.reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  return (
    <div className="balance">
      <h2>Balance</h2>
      <p>{balance}</p>
    </div>
  );
};

export default Balance;
