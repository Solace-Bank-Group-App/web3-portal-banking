const jwt = require('jsonwebtoken');
const { ERROR_MESSAGES } = require('../utils/constants');

// ...existing code...

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: ERROR_MESSAGES.INVALID_LOGIN });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: ERROR_MESSAGES.INVALID_LOGIN });
    }
    req.user = user;
    next();
  });
}

// ...existing code...
module.exports = authenticateToken;
