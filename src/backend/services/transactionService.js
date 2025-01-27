// ...existing code...

function validateTransaction(transaction) {
  if (transaction.amount <= 0) {
    throw new Error('Transaction amount must be greater than zero.');
  }
  if (!transaction.recipient) {
    throw new Error('Recipient address is required.');
  }
  // Additional validation logic...
}

// ...existing code...
module.exports = {
  // ...existing exports...
  validateTransaction,
};
