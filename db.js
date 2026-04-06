const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'plataforma_user',
  password: 'TuPasswordSeguro',
  database: 'plataforma_db'
});

module.exports = pool;
