const pool = require('../db');

exports.agregarCuenta = async (req, res) => {
  try {
    const { usuarioId, plataformaId, username, accessToken } = req.body;

    const [rows] = await pool.query(
      'SELECT COUNT(*) as total FROM cuentas_sociales WHERE usuario_id = ? AND plataforma_id = ?',
      [usuarioId, plataformaId]
    );

    if (rows[0].total >= 5) {
      return res.status(400).json({ error: 'Máximo 5 cuentas por plataforma' });
    }

    const [result] = await pool.query(
      'INSERT INTO cuentas_sociales (usuario_id, plataforma_id, username, access_token) VALUES (?, ?, ?, ?)',
      [usuarioId, plataformaId, username, accessToken]
    );

    res.json({ id: result.insertId, usuarioId, plataformaId, username });
  } catch (error) {
    res.status(500).json({ error: 'Error agregando cuenta social' });
  }
};
