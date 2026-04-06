const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'cerebro',
  password: 'ClaveSegura123',
  database: 'plataforma_social',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
