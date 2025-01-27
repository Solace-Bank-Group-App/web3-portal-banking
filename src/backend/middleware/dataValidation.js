// ...existing code...

function validateDataQuery(req, res, next) {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required.' });
  }
  // Additional validation logic...
  next();
}

// ...existing code...
module.exports = validateDataQuery;
