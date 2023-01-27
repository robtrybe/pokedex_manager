const connection = require('./connection');

const findAll = async () => {
    const [ response ] = await connection.execute('select * from decks');
    return response;
}

const findById = async (id) => {
    const [ [ response ] ] = await connection.execute('select * from decks where id = ?',
    [id]);

    return response;
}

const destroy = async (id) => {
    const [ { affectedRows } ] = await connection.execute('delete from decks where id = ?', [id]);
    return response;
}

const create = async (card) => {
    const columns = Object.keys(card).join(', ');
    const placeholders = Object.keys(card).map((_props) => '?').join(', ');

    const sql = `insert into decks(${columns}) values(${placeholders})`;
    const [ { insertId } ] = await connection.execute(sql,[...Object.values(card)]);
    return insertId;
}

const update = async ( card, id ) => {
    const columns = Object.keys(card);
    const setColumns = columns.map((column) => `${column} = ?`).join(', ')
    const sql = `update decks set ${setColumns} where id = ?`;
    const [ { affectedRows }] = await connection.execute(sql, [...Object.values(card), id]);
    return affectedRows;
}

module.exports = {
    findAll,
    findById,
    destroy,
    create,
    update
}