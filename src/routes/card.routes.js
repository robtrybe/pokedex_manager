const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Todos os cards' }));
router.post('/', (req, res) => res.status(200).json({ message: 'Cadastra um card' }));

module.exports = router;