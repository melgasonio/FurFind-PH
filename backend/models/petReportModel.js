const mongoose = require('mongoose')

const { Schema } = mongoose

const petReportSchema = new Schema({
    name: {
        type: String,
        maxlength: 20,
        required: true
    },
    status: {
        type: String,
        enum: ["lost", "found"]
    },
    breed: {
        type: String,
        maxlength: 20
    },
    last_seen_date: {
        type: Date
    },
    last_seen_region: {
        type: String,
        required: true
    },
    last_seen_city: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        maxlength: 150
    }
})

module.exports = mongoose.model('PetReport', petReportSchema)