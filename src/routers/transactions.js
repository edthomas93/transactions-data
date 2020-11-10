const express = require('express');
const router = express.Router();

router.get('/', async (_, res, next) => {
  try {
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;