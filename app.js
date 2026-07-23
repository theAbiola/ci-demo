const express = require('express');

const app = express();

app.get('/', (req, res) => {
    let msg = 'Did we get here?';
    console.log(msg);
    res.send('Works on my machine.');
});

module.exports = app;
