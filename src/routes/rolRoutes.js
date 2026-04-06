const express = require('express');
const router = express.Router();
const { crearRol, asignarRolUsuario } = require('../controllers/rolController');

router.post('/', crearRol);
router.post('/asignar', asignarRolUsuario);

module.exports = router;
