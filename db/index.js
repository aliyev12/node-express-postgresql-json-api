const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.PGPASSWORD,
    port: process.env.DB_PORT
});

pool.query('SELECT * FROM monsters', (err, res) => {
    if (err) return console.log(err);

    console.log(res);
});