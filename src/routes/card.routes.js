const express = require('express');
const { cardController } = require('../controllers');
const router = express.Router();

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);
router.get('/:id', cardController.getCardsById);
router.delete('/:id', cardController.removeCard);
router.put('/:id', cardController.updateCard);


module.exports = router;