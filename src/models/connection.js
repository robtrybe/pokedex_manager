const mysql = require('mysql2/promise');

const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 123456,
        database: 'pokedex',
        port: 3003,
});

module.exports = connection;