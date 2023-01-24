const express = require('express');
const app = express();

app.use('/cards', require('./routes/card.routes'));

module.exports = app;