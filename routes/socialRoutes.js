const express = require('express');
const router = express.Router();
const { linkAccount, listAccounts } = require('../controllers/socialController');

router.post('/link/:red', linkAccount);
router.get('/accounts/:usuarioId', listAccounts);

module.exports = router;
