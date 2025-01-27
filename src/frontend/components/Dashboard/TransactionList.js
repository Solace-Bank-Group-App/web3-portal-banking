import React from 'react';
import useTransaction from '../../hooks/useTransaction';
import './TransactionList.css';

const TransactionList = () => {
  const { transactions } = useTransaction();

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
