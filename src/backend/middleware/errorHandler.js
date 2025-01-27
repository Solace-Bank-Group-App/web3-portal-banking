const { logError } = require('../utils/logger');
const { ERROR_MESSAGES } = require('../utils/constants');

// ...existing code...

function errorHandler(err, req, res, next) {
  logError(err);
  res.status(500).json({ error: ERROR_MESSAGES[err.message] || 'An unexpected error occurred.' });
}

// ...existing code...
module.exports = errorHandler;
