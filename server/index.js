const mockData = require('./mockData.json')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/api/posts/', (req, res) => {
  return res.status(200).json(mockData);
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});