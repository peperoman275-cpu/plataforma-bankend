const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

router.post('/cuentas', cuentasController.agregarCuenta);

module.exports = router;
