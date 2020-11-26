const mongoose = require('mongoose')

const opportunitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const opportunityModel = mongoose.model('opportunity', opportunitySchema)

module.exports = {
    opportunityModel
}
