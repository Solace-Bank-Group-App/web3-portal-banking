// ...existing code...

function logError(error) {
  console.error(`[${new Date().toISOString()}] Error: ${error.message}`);
}

// ...existing code...
module.exports = {
  // ...existing exports...
  logError,
};
