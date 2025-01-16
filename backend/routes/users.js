const express = require('express');

const {
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.get('/:id', getUser);

router.post('/', createUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;