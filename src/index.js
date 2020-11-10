const express = require('express');

const app = express();

app.get('/transactions', async (_, res, next) => {
  try {
    res.status(200).json({ response: 'OK' });
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = app;