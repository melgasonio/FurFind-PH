const mongoose = require('mongoose')

const { Schema } = mongoose

const petReportSchema = new Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        maxlength: 20
    },
    status: {
        type: String,
        enum: ['lost', 'found']
    },
    breed: {
        type: String,
        maxlength: 20
    },
    last_seen_location_province: {
        type: String
    },
    last_seen_location_city: {
        type: String
    },
    last_seen_location_barangay: {
        type: String
    },
    last_seen_location_zip: {
        type: Number
    },
    last_seen_date: {
        type: Date
    },
    notes: {
        type: String,
        maxlength: 150
    }
})

module.exports = mongoose.model('PetReport', petReportSchema)