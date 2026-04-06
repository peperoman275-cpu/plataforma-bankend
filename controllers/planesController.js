const db = require('../db');

exports.createPlan = async (req, res) => {
  const { nombre, precio, descripcion, max_cuentas } = req.body;
  try {
    await db.query(
      'INSERT INTO planes (nombre, precio, descripcion, max_cuentas) VALUES (?, ?, ?, ?)',
      [nombre, precio, descripcion, max_cuentas]
    );
    res.json({ message: 'Plan creado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.assignPlan = async (req, res) => {
  const { usuario_id, plan_id } = req.body;
  try {
    await db.query(
      'INSERT INTO usuario_planes (usuario_id, plan_id) VALUES (?, ?)',
      [usuario_id, plan_id]
    );
    res.json({ message: 'Plan asignado al usuario' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
