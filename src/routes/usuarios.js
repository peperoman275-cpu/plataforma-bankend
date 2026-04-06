const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/usuarios', usuariosController.listarUsuarios);
router.post('/usuarios', usuariosController.crearUsuario);

module.exports = router;
