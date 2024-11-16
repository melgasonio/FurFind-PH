const PetReports = require('../models/petReportModel')

const mongoose = require('mongoose')

const getPetReports = async (req, res) => {
    const petReports = await PetReports.find({}).sort({createdAt: -1})
    res.status(200).json(petReports)
}

const getPetReport = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ errror: 'Pet report not found'})
    }

    const petReport = await PetReports.findById(id)

    if(!petReport) {
        return res.status(400).json({error: 'Pet report not found'})
    }

    res.status(200).json(petReport)
}

const createPetReport = async (req, res) => {
    const {
        image,
        name,
        status,
        breed,
        last_seen_location_province,
        last_seen_location_city,
        last_seen_location_barangay,
        last_seen_location_zip,
        last_seen_date,
        notes 
    } = req.body

    try {
        const petReport = await PetReports.create({
            image,
            name,
            status,
            breed,
            last_seen_location_province,
            last_seen_location_city,
            last_seen_location_barangay,
            last_seen_location_zip,
            last_seen_date,
            notes 
        })
        res.status(200).json(petReport)
    } catch {
        res.status(400).json({error: 'Error submitting report. Try again later.'})
    }
}

const deletePetReport = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Pet report not found'})
    } 

    const petReport = await PetReports.findOneAndDelete({_id: id})

    res.status(200).json(petReport)
}

const updatePetReport = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Pet report not found'})
    } 

    const petReport = await PetReports.findOneAndUpdate({_id: id})

    if(!petReport) {
        return res.status(400).json({error: 'Pet report not found'})
    }

    res.status(200).json(petReport)
}

module.exports = {
    getPetReports,
    getPetReport,
    createPetReport,
    deletePetReport,
    updatePetReport
}