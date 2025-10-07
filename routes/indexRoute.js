const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.send('Home page');
})

router.get('/new', (req, res) => {
  res.send('New Message Page');
})

module.exports = router;