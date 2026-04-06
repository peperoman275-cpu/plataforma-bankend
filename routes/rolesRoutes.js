const express = require('express');
const router = express.Router();
const { createRole, assignPermission } = require('../controllers/rolesController');

router.post('/create', createRole);
router.post('/assign', assignPermission);

module.exports = router;
