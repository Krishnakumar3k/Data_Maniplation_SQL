const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/create', userController.createUser);

module.exports = router;
