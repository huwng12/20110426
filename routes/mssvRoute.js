const express = require('express');
const MSSVController = require('../controllers/mssvController');
const router = express.Router();

router.post('/:id', MSSVController.addMSSV);
router.get('/:id', MSSVController.getMSSV);

module.exports = router;
