const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post('/api/inscription', (req, res) => {
  const responseData = {
    message: 'Inscription réussie!',
    status: 'success',
  };
  res.json(responseData);
});