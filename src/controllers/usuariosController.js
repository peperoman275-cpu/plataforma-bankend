const pool = require('../config/db');

exports.listarUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error listando usuarios' });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
      [nombre, email, password]
    );
    res.json({ id: result.insertId, nombre, email });
  } catch (error) {
    res.status(500).json({ error: 'Error creando usuario' });
  }
};
