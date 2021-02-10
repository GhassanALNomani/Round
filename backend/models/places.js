const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
    image: String,
    category: String,
    name: String,
    description: String,
    reviews: {
        type: Array,
        default: []
    }
})

const Place = mongoose.model('place', placeSchema)

module.exports = Place