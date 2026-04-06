const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // si root no tiene contraseña
  database: 'plataforma'
});

module.exports = pool;
