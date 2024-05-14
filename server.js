const express = require('express');
const cors = require('cors'); // Import cors module

const app = express();
app.use(cors())
const data = require('./data.json');

// Endpoint to handle GET requests for /results
app.get('/results', (req, res) => {

  const offset = parseInt(req.query.offset) || 0; // Default offset is 0
  const limit = parseInt(req.query.limit) || data.results.length; // Default limit is the entire array length

  // Slice the results array based on offset and limit
  const paginatedResults = data.results.slice(offset, offset + limit);

  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  // Send the results JSON to the client
  res.send(paginatedResults);
});
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});
app.use((req, res) => {
  res.status(405).send('405 - Method Not Allowed');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
