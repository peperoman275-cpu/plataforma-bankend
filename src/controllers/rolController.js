const pool = require('../config/db');

exports.crearRol = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO roles (nombre, descripcion) VALUES (?, ?)',
      [nombre, descripcion]
    );
    res.json({ id: result.insertId, nombre, descripcion });
  } catch (err) {
    res.status(500).json({ error: 'Error creando rol' });
  }
};

exports.asignarRolUsuario = async (req, res) => {
  const { usuario_id, rol_id } = req.body;
  try {
    await pool.query(
      'INSERT INTO usuario_roles (usuario_id, rol_id) VALUES (?, ?)',
      [usuario_id, rol_id]
    );
    res.json({ mensaje: 'Rol asignado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error asignando rol' });
  }
};
