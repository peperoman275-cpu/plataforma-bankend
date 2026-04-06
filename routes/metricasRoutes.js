const express = require('express');
const router = express.Router();
const metricasController = require('../controllers/metricasController');

router.post('/metricas', metricasController.insertarMetricas);
router.get('/dashboard/:usuarioId', metricasController.obtenerDashboard);

module.exports = router;
