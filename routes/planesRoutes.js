const express = require('express');
const router = express.Router();
const { createPlan, assignPlan } = require('../controllers/planesController');

router.post('/create', createPlan);
router.post('/assign', assignPlan);

module.exports = router;
