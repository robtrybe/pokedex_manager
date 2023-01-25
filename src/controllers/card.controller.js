const { cardModel } = require('../models');

const getAllCards = async (req, res) => {
    const [ result ] = await cardModel.findAll(); 
    res.status(200).json(result);
};

const createCard = async (req, res) => res.status(200).json(req.body);


const getCardsById = async (req, res) => {
    const { id } = req.params;
    const result = await cardModel.findById(id);
    res.status(200).json(result);
}

const removeCard = async (req, res) => {
    const { id } = req.params;
    const [ { affectedRows } ] = await cardModel.destroy(id);
    res.status(200).json({ affectedRows });
}

module.exports = {
    getAllCards,
    createCard,
    getCardsById,
    removeCard,
}