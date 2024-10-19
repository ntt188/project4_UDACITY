const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const mockAPIResponse = require('./mockAPI');

const PORT = 8082;

app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Route for the root path "/"
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

// Mock API endpoint
app.get('/api/mock', (req, res) => {
  res.json(mockAPIResponse);
});

// Endpoint for calling the MeaningCloud API
app.post('/api/sentiment', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${text}&lang=en`;

  try {
    const response = await fetch(apiUrl, { method: 'POST' });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data from MeaningCloud' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
