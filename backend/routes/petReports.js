const express = require('express')
const {
    getPetReports,
    getPetReport,
    createPetReport,
    deletePetReport,
    updatePetReport
} = require('../controller/petReportController')
const authenticateUser = require('../middlewares/authMiddleware');

const router = express.Router()

router.get('/', getPetReports)

router.get('/:id', getPetReport)

router.post('/', authenticateUser, createPetReport)

router.delete('/:id', authenticateUser, deletePetReport)

router.patch('/:id', authenticateUser, updatePetReport)

module.exports = router