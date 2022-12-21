const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/checkouts', auth, controller.checkout);

module.exports = router;