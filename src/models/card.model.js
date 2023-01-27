const connection = require('./connection');

const findAll = async () => {
    const [ response ] = await connection.execute('select * from cards');
    return response;
}

const findById = async (id) => {
    const [ [ response ] ] = await connection.execute('select * from cards where id = ?',
    [id]);

    return response;
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
