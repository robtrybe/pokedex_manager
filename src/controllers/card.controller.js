const getAllCards = (req, res) => res.status(200).json({ message: 'Todos os cards' });
const createCard = (req, res) => res.status(200).json({ message: 'Cadastra um card' });

module.exports = {
    getAllCards,
    createCard,
}