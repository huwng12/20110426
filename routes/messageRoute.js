const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

router.get('/:id?', messageController.getMessage);

module.exports = router;
