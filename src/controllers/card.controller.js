const { cardModel } = require('../models');
const connection = require('../models/connection');

const getAllCards = async (req, res) => {
    const [ result ] = await cardModel.findAll(); 
    res.status(200).json(result);
};

const createCard = (req, res) => res.status(200).json({ message: 'Cadastra um card' });

const getCardsById = async (req, res) => {
    const { id } = req.params;
    const result = await cardModel.findById(id);
    res.status(200).json(result);
}

module.exports = {
    getAllCards,
    createCard,
    getCardsById,
}