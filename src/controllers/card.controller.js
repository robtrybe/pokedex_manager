const { cardModel } = require('../models');

const getAllCards = async (req, res) => {
    const [ result ] = await cardModel.findAll(); 
    res.status(200).json(result);
};




const createCard = (req, res) => res.status(200).json({ message: 'Cadastra um card' });

module.exports = {
    getAllCards,
    createCard,
}