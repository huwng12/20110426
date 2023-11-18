const mongoose = require('mongoose');

const launchesScheme = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocker: {
        type: String,
        required: true,
    },
    targer: {
        type: String,
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    },
})

module.exports = mongoose.model('Launch', launchesScheme);