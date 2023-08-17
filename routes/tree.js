const express = require('express');

const router = express.Router();

const TreeController = require('../controllers/tree');

router.get('/tree', TreeController);

module.exports = router;
