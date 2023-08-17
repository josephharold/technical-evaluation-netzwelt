const express = require('express');

const router = express.Router();

// import controller from controllers
const LoginController = require('../controllers/auth/login');

router.post('/login', LoginController);

module.exports = router;
