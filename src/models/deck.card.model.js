const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
    const [ response ] = await connection.execute('select * from deck_cards');
    return camelize(response);
}

const destroy = async (id) => {
    const [ { affectedRows } ] = await connection.execute('delete from deck_cards where id = ?', [id]);
    return response;
}

const create = async (card) => {
    const columns = Object.keys(snakeize(card)).join(', ');
    const placeholders = Object.keys(card).map((_props) => '?').join(', ');

    const sql = `insert into deck_cards(${columns}) values(${placeholders})`;
    const [ { insertId } ] = await connection.execute(sql,[...Object.values(card)]);
    return insertId;
}

const update = async ( card, id ) => {
    const columns = Object.keys(snakeize(card));
    const setColumns = columns.map((column) => `${column} = ?`).join(', ')
    const sql = `update deck_cards set ${setColumns} where id = ?`;
    const [ { affectedRows }] = await connection.execute(sql, [...Object.values(card), id]);
    return affectedRows;
}

module.exports = {
    findAll,
    destroy,
    create,
    update
}