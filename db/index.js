const { Pool, Client } = require('pg');
require('dotenv').config();
const { user, host, database, password, port } = require('../secrets/db_configurations');

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;