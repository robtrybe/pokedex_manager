const express = require('express');
const { cardController } = require('../controllers');
const router = express.Router();

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);

module.exports = router;