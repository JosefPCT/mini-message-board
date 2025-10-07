const express = require('express');

const controller = require('../controllers/newController');

const router = express.Router();

router.get('/', controller.renderNew)
router.post('/', controller.createMessage)

module.exports = router;