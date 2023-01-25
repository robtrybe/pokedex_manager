const express = require('express');
const { cardController } = require('../controllers');
const router = express.Router();

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);
router.get('/:id', cardController.getCardsById);

module.exports = router;