const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

// router.get('', (req, res) => {
//   res.render('pages/index');
// })

router.get('', indexController.renderIndex);

router.get('/new', (req, res) => {
  res.send('New Message Page');
})

module.exports = router;