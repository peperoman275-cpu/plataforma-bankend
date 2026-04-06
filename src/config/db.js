const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'plataforma_user',
  password: process.env.DB_PASS || 'TuPasswordSeguro',
  database: process.env.DB_NAME || 'plataforma_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
