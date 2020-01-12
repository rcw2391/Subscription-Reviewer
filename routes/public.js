const express = require('express');

const router = express.Router();

const controller = require('../controllers/public');

router.get('/', controller.getIndex);

router.get('/subscriptions', controller.getSubscriptions);

module.exports = router;