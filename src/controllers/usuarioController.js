const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.crearUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email, password_hash) VALUES (?, ?, ?)',
      [nombre, email, hash]
    );
    res.json({ id: result.insertId, nombre, email });
  } catch (err) {
    res.status(500).json({ error: 'Error creando usuario' });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, nombre, email, estado FROM usuarios');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error listando usuarios' });
  }
};
