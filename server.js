const express = require('express');
const app = express();
const port = 3080;

app.get('/', (req, res) => {
  res.send('CI/CD with cloud build and Docker');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});