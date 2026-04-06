const db = require('../db');

exports.linkAccount = async (req, res) => {
  const { usuarioId, access_token, refresh_token, username } = req.body;
  const red = req.params.red;

  try {
    const [redRows] = await db.query('SELECT id FROM redes_sociales WHERE nombre = ?', [red]);
    if (redRows.length === 0) return res.status(400).json({ error: 'Red no encontrada' });
    const redId = redRows[0].id;

    const [countRows] = await db.query('SELECT COUNT(*) AS total FROM cuentas_vinculadas WHERE usuario_id = ? AND red_id = ?', [usuarioId, redId]);
    if (countRows[0].total >= 5) return res.status(400).json({ error: 'Máximo 5 cuentas por red' });

    await db.query('INSERT INTO cuentas_vinculadas (usuario_id, red_id, access_token, refresh_token, username) VALUES (?, ?, ?, ?, ?)',
      [usuarioId, redId, access_token, refresh_token, username]);

    res.json({ message: 'Cuenta vinculada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.listAccounts = async (req, res) => {
  const usuarioId = req.params.usuarioId;
  try {
    const [rows] = await db.query(`
      SELECT rs.nombre AS red, cv.username, cv.creado_en
      FROM cuentas_vinculadas cv
      JOIN redes_sociales rs ON cv.red_id = rs.id
      WHERE cv.usuario_id = ?`, [usuarioId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
