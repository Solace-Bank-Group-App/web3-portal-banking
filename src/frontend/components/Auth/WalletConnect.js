import React from 'react';
import './WalletConnect.css';

const WalletConnect = () => {
  const handleConnect = () => {
    // Logic to connect to wallet
  };

  return (
    <div className="wallet-connect">
      <button onClick={handleConnect}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnect;
