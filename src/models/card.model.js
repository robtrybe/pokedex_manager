const connection = require('./connection');

const findAll = async () => {
    const r = await connection.execute('select * from cards');
    return r;
}

const findById = (id) => {

}

const destroy = (id) => {

}

const create = (card) => {

}

const update = (data, id)=> {

}

module.exports = {
    findAll,
    findById,
    destroy,
    create,
    update
}