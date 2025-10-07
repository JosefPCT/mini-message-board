const express = require('express');

const controller = require('../controllers/messageController');

const router = express.Router();

router.get('/:id', controller.renderMessage);

module.exports = router;