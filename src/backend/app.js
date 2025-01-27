const express = require('express');
const app = express();
const authController = require('./controllers/authController');
const transactionController = require('./controllers/transactionController');
const dataQueryController = require('./controllers/dataQueryController');
const errorHandler = require('./middleware/errorHandler');
const dataValidation = require('./middleware/dataValidation');
const authMiddleware = require('./middleware/authMiddleware');

app.use(express.json());
app.use(authMiddleware);

app.use('/api/auth', authController);
app.use('/api/transactions', transactionController);
app.use('/api/data', dataValidation, dataQueryController);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
