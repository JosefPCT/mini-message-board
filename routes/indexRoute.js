const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.render('pages/index');
})

router.get('/new', (req, res) => {
  res.send('New Message Page');
})

module.exports = router;