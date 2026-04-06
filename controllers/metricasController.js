const pool = require('../db');

exports.insertarMetricas = async (req, res) => {
  try {
    const { cuentaId, seguidores, likes, comentarios } = req.body;

    const [result] = await pool.query(
      'INSERT INTO metricas_sociales (cuenta_id, seguidores, likes, comentarios) VALUES (?, ?, ?, ?)',
      [cuentaId, seguidores, likes, comentarios]
    );

    res.json({ id: result.insertId, cuentaId, seguidores, likes, comentarios });
  } catch (error) {
    res.status(500).json({ error: 'Error insertando métricas sociales' });
  }
};

exports.obtenerDashboard = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const [rows] = await pool.query(
      `SELECT p.nombre AS plataforma, c.username, m.seguidores, m.likes, m.comentarios, m.fecha
       FROM metricas_sociales m
       JOIN cuentas_sociales c ON m.cuenta_id = c.id
       JOIN plataformas p ON c.plataforma_id = p.id
       WHERE c.usuario_id = ? 
       ORDER BY m.fecha DESC`,
      [usuarioId]
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo dashboard' });
  }
};
