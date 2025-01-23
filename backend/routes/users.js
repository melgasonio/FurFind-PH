const express = require('express');

const {
    loginUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.post('/login/', loginUser);

router.post('/register/', createUser);

router.patch('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;