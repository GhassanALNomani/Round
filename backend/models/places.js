const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
    image: String,
    category: String,
    name: String,
    description: String,
    location: String,
    date: Date,
    workingHours : String,
    reviews: {
        type: Array,
        default: []
    },
    // location: String
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
})

const Place = mongoose.model('place', placeSchema)

module.exports = Place