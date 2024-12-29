const express = require('express');

const {
    sendEmailFlagged
} = require('../controller/flaggedEmailController');

const router = express.Router();

router.post('/', sendEmailFlagged);

module.exports = router;