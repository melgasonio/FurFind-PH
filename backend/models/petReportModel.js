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
        enum: ["Lost", "Found"]
    },
    breed: {
        type: String,
        maxlength: 20
    },
    pet_type: {
        type: String,
        enum: ["Cat", "Dog"]
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
    },
    flagged_counter: {
        type: Number,
        default: 0
    },
    owner_id: {
        type: String
    },
    created_at: {
        type: Date
    }
})

module.exports = mongoose.model('PetReport', petReportSchema)