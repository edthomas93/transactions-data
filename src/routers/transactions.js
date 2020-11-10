const express = require('express');
const router = express.Router();

router.get('/', (_, res, next) => {
  try {
    console.log("Returning JSON");
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    console.log("Error => ", err);
    return next(err);
  }
});

module.exports = router;