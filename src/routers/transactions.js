const express = require('express');
const router = express.Router();

const transactions = require('../data/transactions.json');

router.get('/', (_, res, next) => {
  try {
    res.status(200).json(transactions);
  } catch (err) {
    console.log("Error => ", err);
    return next(err);
  }
});

module.exports = router;