const express = require('express')
const {
    getPetReports,
    getPetReport,
    createPetReport,
    deletePetReport,
    updatePetReport
} = require('../controller/petReportController')

const router = express.Router()

router.get('/', getPetReports)

router.get('/:id', getPetReport)

router.post('/', createPetReport)

router.delete('/:id', deletePetReport)

router.patch('/:id', updatePetReport)

module.exports = router