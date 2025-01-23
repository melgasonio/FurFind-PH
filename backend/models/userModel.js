const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        maxlength: 20,
        required: true,
    },
    lastName: {
        type: String,
        maxlength: 20,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          'Please provide a valid email address',
        ],
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)