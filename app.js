const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const msg = 'Works on my machine.';
  res.send(msg);
});

module.exports = app;
