const express = require('express');
const router = express.Router();

// Пример маршрута API
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
