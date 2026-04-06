const db = require('../db');

exports.createRole = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    await db.query('INSERT INTO roles (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
    res.json({ message: 'Rol creado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.assignPermission = async (req, res) => {
  const { rol_id, permiso_id } = req.body;
  try {
    await db.query('INSERT INTO rol_permisos (rol_id, permiso_id) VALUES (?, ?)', [rol_id, permiso_id]);
    res.json({ message: 'Permiso asignado al rol' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
