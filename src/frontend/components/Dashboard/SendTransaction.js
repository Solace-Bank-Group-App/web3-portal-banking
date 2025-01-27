import React, { useState } from 'react';
import useTransaction from '../../hooks/useTransaction';
import './SendTransaction.css';

const SendTransaction = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { addTransaction } = useTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ amount, description });
    setAmount('');
    setDescription('');
  };

  return (
    <form className="send-transaction" onSubmit={handleSubmit}>
      <h2>Send Transaction</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendTransaction;
