const express = require('express');

const {
    loginUser,
    logoutUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.post('/login/', loginUser);

router.post('/logout/', logoutUser);

router.post('/register/', createUser);

router.patch('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;