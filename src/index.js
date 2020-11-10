const express = require('express');

const transactionsRouter = require('./routers/transactions');

const app = express();

app.use('/transactions', transactionsRouter);

module.exports = app;
