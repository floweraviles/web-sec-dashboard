require('dotenv').config();

const{Pool} = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client for DB connection test:', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing DB connection test query:', err.stack);
        }
        console.log('Database connected successfully at:', result.rows[0].now);
    });
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
};