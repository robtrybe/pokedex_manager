const { cardModel, deckCardModel } = require('../models');

const getAllCards = async (req, res) => {
    await deckCardModel.create({ deckId:1, cardId:1, quantity:1});
    const result = await cardModel.findAll(); 
    res.status(200).json(result);
};

const createCard = async (req, res) => {
    const data = { ...req.body };
    const insertId = await cardModel.create(data); 
    res.status(200).json({ insertId });
}

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

const updateCard = async (req, res) => {
   const { id } = req.params;
   const data = {...req.body };
   const affectedRows = await cardModel.update(data, id);
   res.status(200).json({ affectedRows });
}

module.exports = {
    getAllCards,
    createCard,
    getCardsById,
    removeCard,
    updateCard,
}