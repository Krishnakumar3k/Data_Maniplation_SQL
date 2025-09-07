const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/getusers', userController.getAllUsers);

module.exports = router;
