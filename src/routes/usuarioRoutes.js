const express = require('express');
const router = express.Router();
const { crearUsuario, listarUsuarios } = require('../controllers/usuarioController');

router.post('/', crearUsuario);
router.get('/', listarUsuarios);

module.exports = router;
